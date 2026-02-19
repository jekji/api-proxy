import { NextResponse } from 'next/server';

/**
## auth
curl -X "POST" "https://api.bookmaker.xyz/games/auth" \
     -H 'Content-Type: application/json; charset=utf-8' \
     -d $'{
  "signature": "0x9f15745e704f93928d8fe52135b205d89fd2b7eeba4d1a894dec04d3ce7af32618944b246f3f9d3eae40669ad93cca25f83a8433680b530785fe660797d528df1b",
  "data": {
    "account": "0xb6e143239d1ca73c6be0e16440f6d0f94c23dece",
    "currency": "USDT",
    "affiliate": "0x82875517c2b4bd534de4b2c0d21bff5f40b25da6",
    "network": "PolygonUSDT"
  }
}'

## result http.status == 200, body:
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50IjoiMHhiNmUxNDMyMzlkMWNhNzNjNmJlMGUxNjQ0MGY2ZDBmOTRjMjNkZWNlIiwiYWZmaWxpYXRlIjoiMHg4Mjg3NTUxN2MyYjRiZDUzNGRlNGIyYzBkMjFiZmY1ZjQwYjI1ZGE2IiwibmV0d29yayI6IlBvbHlnb25VU0RUIiwiY3VycmVuY3kiOiJVU0RUIiwiaWF0IjoxNzUwMDM0MzExLCJleHAiOjE3NTAxMjA3MTF9.9F_Ylaj4PsBq9--Q17MK0lagyyk1gntweoPLzyrQ-U8

## result http.status == 401 Unauthorized, body:
Unauthorized
*/
export async function POST(req: Request) {
    try {
        // 默认值（向后兼容）
        const defaultSignature = `0x9f15745e704f93928d8fe52135b205d89fd2b7eeba4d1a894dec04d3ce7af32618944b246f3f9d3eae40669ad93cca25f83a8433680b530785fe660797d528df1b`;
        const defaultData = {
            account: '0xb6e143239d1ca73c6be0e16440f6d0f94c23dece',
            affiliate: '0x82875517c2b4bd534de4b2c0d21bff5f40b25da6',
            network: 'PolygonUSDT',
            currency: 'USDT'
        };

        let signature = defaultSignature;
        let data = defaultData;

        // 尝试解析请求体
        try {
            const body = await req.json();
            if (body.signature) {
                signature = body.signature;
            }
            if (body.data) {
                // 合并数据，使用请求中的值覆盖默认值
                data = { ...defaultData, ...body.data };
            }
        } catch (e) {
            // 如果解析失败，使用默认值
            console.log('Using default auth parameters (no valid JSON body)');
        }

        // 验证必需字段
        if (!data.account || !data.currency || !data.affiliate || !data.network) {
            return NextResponse.json(
                { error: 'Missing required data fields: account, currency, affiliate, network' },
                { status: 400 }
            );
        }

        console.log('Auth request:', { signature: signature.substring(0, 20) + '...', data });

        const finalUrl = `https://api.bookmaker.xyz/games/auth`;

        // 代理请求
        const response = await fetch(finalUrl, {
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

        // 获取响应文本
        const responseText = await response.text();

        // 如果是 JWT token (成功响应)，直接返回
        if (response.ok) {
            return new Response(responseText, {
                status: response.status,
                headers: {
                    'Content-Type': 'text/plain',
                },
            });
        }

        // 处理错误响应
        console.error('Auth API error:', {
            status: response.status,
            statusText: response.statusText,
            body: responseText,
            request: { signature: signature.substring(0, 20) + '...', data }
        });

        return new Response(responseText, {
            status: response.status,
            statusText: response.statusText,
            headers: {
                'Content-Type': 'text/plain',
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
