import { NextResponse } from 'next/server';

// 全局token缓存
let cachedToken: string | null = null;
let tokenExpiry: number | null = null;

// 获取新的auth token
async function getAuthToken(): Promise<string> {
    const authUrl = `https://api.bookmaker.xyz/games/auth`;
    
    const signature = `0x9f15745e704f93928d8fe52135b205d89fd2b7eeba4d1a894dec04d3ce7af32618944b246f3f9d3eae40669ad93cca25f83a8433680b530785fe660797d528df1b`;
    const data = {
        account: '0xb6e143239d1ca73c6be0e16440f6d0f94c23dece',
        affiliate: '0x82875517c2b4bd534de4b2c0d21bff5f40b25da6',
        network: 'PolygonUSDT',
        currency: 'USDT'
    };

    const response = await fetch(authUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'Accept': 'application/json',
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36',
            'Host': 'api.bookmaker.xyz',
            'Connection': 'keep-alive'
        },
        body: JSON.stringify({ signature, data }),
    });

    if (!response.ok) {
        throw new Error(`Auth failed: ${response.status} ${response.statusText}`);
    }

    const token = await response.text();
    
    // 缓存token，缓存4小时
    cachedToken = token.trim();
    tokenExpiry = Date.now() + (4 * 60 * 60 * 1000); // 4小时
    
    return cachedToken;
}

// 检查token是否有效，如果无效则获取新token
async function getValidToken(): Promise<string> {
    if (cachedToken && tokenExpiry && Date.now() < tokenExpiry) {
        return cachedToken;
    }
    
    console.log('Token expired or missing, fetching new token...');
    return await getAuthToken();
}

// 使用token调用games API
async function callGamesAPI(gameID: string, provider: string, token: string) {
    const finalUrl = `https://api.bookmaker.xyz/games/private/open?gameID=${gameID}&provider=${provider}`;
    
    const response = await fetch(finalUrl, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });

    return response;
}

/**
## auth
curl "https://api.bookmaker.xyz/games/private/open?gameID=d5129b70c0bf4c59bb4ee336e7bde9ca&provider=slotegrator" \
     -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50IjoiMHhiNmUxNDMyMzlkMWNhNzNjNmJlMGUxNjQ0MGY2ZDBmOTRjMjNkZWNlIiwiYWZmaWxpYXRlIjoiMHg4Mjg3NTUxN2MyYjRiZDUzNGRlNGIyYzBkMjFiZmY1ZjQwYjI1ZGE2IiwibmV0d29yayI6IlBvbHlnb25VU0RUIiwiY3VycmVuY3kiOiJVU0RUIiwiaWF0IjoxNzQ5OTc5ODM1LCJleHAiOjE3NTAwNjYyMzV9.4uLMf7-tQCglphF7RQ67o7LLE_NhbdnrJ6L0lzHQF9c'

## result http.status == 200, body:
{"link":"https://gis.slotegrator.com/api/index.php/v1/games/launch/WUNHa3cyUG02QnFXa3V5YVNTTERtcFNwMWFETURkMHRiMjNaRVAyRkZCdXIreUJpa1RJbzJQdk5OOWptc0pxRw%3D%3D/YWFHamVFaTdybWxIMjVZZ0ZwdUlUWWV3U3dzaHdvRisxQlZWeFV0VS9OSDB5MWtoQVptYWZtVStRV2JITk5VZlhNV1BLdG5qNVpnL1YxQndPTHRmaFVTQ3ErYk5EZzNBc1djTlVuVWt6Z2VYQk8zMEsxOGMxVGZSLzdYVjNjZ01ibjNvMVAwek1iN210YzJ6VTR3WWNFOW1wdXhkVnNrdUV5RmhhUG1JVko1d05tVDhIeVRSSjU5VG1mZkZXSW01STV3ZHo2NFl3SFRacGJuZGxPekJlODdGRVYzMy9OQkxzUDIrVFBDeFdudWY1ZU1abkFWNjIxWmZiY3BFVmF0TTh1U0t4OHVCaW9nT3BuTnF5b2lweHZvcWhjZEcrNVViendtcWZ5NE1Sc1h0SzA2QjhuUW53ZjhjMEhobDU0WmNPSTNSQml0MWJHa1JYQ3JRM1hiL1VPQmYwWjZDRTIxTkl3SDlqa2dJZmVUV2dveUVLaERBWVZKUTJhTThhNmxlcnU3MXhJbFVvZDFhK1E1b3RCUHZnODhKWHN1akRDYW9MZnIyRnNTbzk1MUN0YU5zV1RZUkZUcEhCVXNRRWNwcE0xdlphd25FYnJLYjhENGFma1c4RFFadXdPUGxhQ01oVWN6MzNMYkplZWVpY2ozclNiZUdGYnZjMVRvY1lMVDdycTB3UEladFVjQ2hvVEdoZzFDbnhjZE9HOCs4Z042eVQrR08rd2FaQmhhc0dtd3Vva2Z1WVVJNjZaQUtvWmh6dDNXTERaVlU2KzEwYkZjVlFkWWdpSSttUUtmVWs3eFRPTTJjdzVsaWVmbWJ4NXhOWUVlbElhK3haT1NnZzBTZmNnZU1kMmlsUXlQMUtnWW1ZY3RXeXUzUXUxNXdtaTltUkU1bUUveUVrQUplUUhkaCtjMCt5MTVLSlEzNEpKYU8zeTUrUjJTbVdQa0NueHo1T3crNStBPT0%3D"}

## result http.status == 401 Unauthorized, body:
{"message":"Authentication required"}
*/
export async function GET(req: Request) {
    try {
        const url = new URL(req.url);
        const query = url.searchParams;
        const params = Object.fromEntries(query.entries());
        const { gameID, provider } = params;

        if (!gameID || !provider) {
            return NextResponse.json(
                { error: 'Missing required parameters: gameID and provider' },
                { status: 400 }
            );
        }

        // 获取有效token
        let token = await getValidToken();
        
        // 第一次尝试
        let response = await callGamesAPI(gameID, provider, token);
        
        // 如果返回401，token可能过期，重新获取并重试
        if (response.status === 401) {
            console.log('Received 401, refreshing token and retrying...');
            
            // 清除缓存的token
            cachedToken = null;
            tokenExpiry = null;
            
            // 获取新token
            token = await getAuthToken();
            
            // 重试API调用
            response = await callGamesAPI(gameID, provider, token);
        }

        const responseText = await response.text();

        // 成功响应，直接返回
        if (response.ok) {
            return new Response(responseText, {
                status: response.status,
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        }

        // 仍然失败，返回错误
        console.error('Games API error after retry:', {
            status: response.status,
            statusText: response.statusText,
            body: responseText,
            gameID,
            provider
        });

        return new Response(responseText, {
            status: response.status,
            statusText: response.statusText,
            headers: {
                'Content-Type': 'application/json',
            },
        });

    } catch (error) {
        console.error('Proxy error:', error);
        return NextResponse.json(
            { error: 'Failed to proxy request', details: error instanceof Error ? error.message : String(error) },
            { status: 500 }
        );
    }
}
