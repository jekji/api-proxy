import { NextResponse } from 'next/server';
import { tokenManager } from '@/lib/token-manager';

/**
:method: POST
:path: /v2/refresh-token
:authority: api.dream11.com
:scheme: https
accept: application/json
device: androidplaystore
devicetype: ANDROID
deviceid: 2d016ea7f014d06c
ek1: 1baaed3d74f4a9d3e015539e9e57e52e3628b5eacd96f7e4fb42be4ef92153d9
ek2: 1baaed3d74f4a9d3e015539e9e57e52e3628b5eacd96f7e4fb42be4ef92153d9
x-manufacturer: google
x-os-version: 16
x-os-type: android
x-app-version-name: 750
app_version: 7.5.0
a1: b4581fbf01c51d18e8c85cc70ed1b60f7e4467ade5695bfbc25b50e5b0cc84f5
version: 10045
user-agent: Dream11/7.5.0 (Linux; Android 36; Pixel 6a) Build/10045
siteid: 1
locale: en-US
content-type: application/json
content-length: 87
accept-encoding: gzip
cookie: RT=HnwZbqZGEOGRjPOhPtgpE0R8zkKWTE9u; SSOT=82JXPV48sQkzuaz

{"client_id":"a8EsDlPc3ZCVgsUpppuc","refresh_token":"HnwZbqZGEOGRjPOhPtgpE0R8zkKWTE9u"}

Headers: 
{
    "a1": "4396c0eb12131956bf81545d16e9765193f8f412da01f3ae375586b35cf6915f", 
    "accept": "application/json", 
    "accept-encoding": "gzip, br", 
    "cdn-loop": "cloudflare; loops=1", 
    "cf-connecting-ip": "2406:da18:f81:6a00:7385:aee:175:52de", 
    "cf-ipcountry": "SG", 
    "cf-ray": "9de9ecb3fc56f93a-SIN", 
    "cf-visitor": "{\"scheme\":\"https\"}", 
    "connection": "upgrade", 
    "content-length": "87", 
    "content-type": "application/json", 
    "device": "androidplaystore", 
    "deviceid": "88d65ffab6a82902", 
    "devicetype": "ANDROID", 
    "ek1": "9ff4e1f14b1fa7f13f27b8a8e8acdfcb366d435c8146763bfe9dda45a83e6ef2", 
    "ek2": "9ff4e1f14b1fa7f13f27b8a8e8acdfcb366d435c8146763bfe9dda45a83e6ef2", 
    "host": "api-dream11.dfkjdsfjd.shop", 
    "locale": "en-US", 
    "siteid": "1", 
    "user-agent": "Dream11/7.5.0 (Linux; Android 36; 23117RK66C) Build/10045", 
    "version": "10045", 
    "x-app-version-name": "750", 
    "x-forwarded-for": "2406:da18:f81:6a00:7385:aee:175:52de, 172.68.164.114", 
    "x-forwarded-host": "api-dream11.dfkjdsfjd.shop", 
    "x-forwarded-port": "3030", 
    "x-forwarded-proto": "http", 
    "x-manufacturer": "Redmi", 
    "x-original-uri": "/v2/refresh-token", 
    "x-os-type": "android", 
    "x-os-version": "16", 
    "x-real-ip": "172.68.164.114", 
    "atlas": "IN"
}

*/
export async function POST(request: Request) {
	const body = await request.json();
	const { client_id, refresh_token } = body;

	// Extract headers from the incoming request
	const requestHeaders = Object.fromEntries(request.headers.entries());
	
	requestHeaders['atlas'] = 'IN';
	requestHeaders['locale'] = 'en-US';

	requestHeaders['host'] = process.env.API_URL.replace('https://', '').replace('http://', '');
	requestHeaders['x-forwarded-host'] = requestHeaders['host'];

	console.log(`Headers: ${JSON.stringify(requestHeaders)}`);

	if (process.env.API_URL) {
		// Use real API to fetch data
		const apiURL = process.env.API_URL + "/v2/refresh-token";
		try {
			const apiResponse = await fetch(apiURL, {
				method: 'POST',
				headers: requestHeaders,
				body: JSON.stringify({
					client_id,
					refresh_token
				}),
			});
			
			if (!apiResponse.ok) {
				throw new Error(`API request failed: ${apiResponse.status}`);
			}
			
			const data = await apiResponse.json();

			console.log("refresh-token", refresh_token, "client_id", client_id, "data", JSON.stringify(data));
			
			// 保存新token到文件
			try {
				tokenManager.saveToken(client_id, {
					access_token: data.access_token,
					refresh_token: data.refresh_token || refresh_token,
					token_type: data.token_type,
					expires_in: data.expires_in
				});
				console.log('Tokens updated for client:', client_id);
				
			} catch (fileError) {
				console.error('Failed to save tokens to file:', fileError);
			}
			
			return NextResponse.json(data);
		} catch (error) {
			console.error(`API request failed. URL: ${apiURL}, refresh_token: ${refresh_token}, client_id: ${client_id}, error: `, error);
			// Fall back to mock data if API fails
		}
	}

	return NextResponse.json({
		"access_token": "eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCIsInR5cCI6ImF0K2p3dCIsImtpZCI6IlRqb0FsLVdyZWN3Z3MtZVVvcm5xWWE5Y2x4dyJ9.eyJhdWQiOiJhOEVzRGxQYzNaQ1Znc1VwcHB1YyIsImV4cCI6MTc3Mzk4MTMxMiwiaWF0IjoxNzczODk0OTEyLCJpc3MiOiJkcmVhbTExLmNvbSIsInN1YiI6IjMxNzE1MjMzMCIsImp0aSI6ImNxMXVVM1BFZE1uUUp6cWZ0Q1o5TFFFREJIUEI0RjRGIiwidGlkIjoiMiIsInJmdF9pZCI6IjBGQkFEMUQ5RjFENzdGOTlFQjdFNzAzM0IzQ0RFREVGIiwiY2xpZW50X2lkIjoiYThFc0RsUGMzWkNWZ3NVcHBwdWMiLCJzY29wZSI6ImRyZWFtMTE6YWxsIiwiYW1yIjpbIm90cCJdLCJjb3VudHJ5Q29kZSI6IklOIn0.ophd7044L0x2fuMACySsnsbSZwOMVmYVop2KKP5WYj4nqkiZf2ubu74WQS5OOGvuCColxFU_sxDaxDpwEsMU0r5RxUtvo2UrNBvwYJLVjrYQx9Lt6w7pMBMgjhbvvBSR7RiifrjtLQWxJxSddOOlrZZ-_gfWsVOD50kfiulIrLwrOEponca_-VOrdUNZjoz7RElAzMdjxYdtSv8YRnNwdnxTBX7wmhlKBG0PfMPvRiY0z6fFGfnkYiMsGgtHvQ7-UtBvfQhMS4Bzq2bDAj2zJS1D-mwR5e5IwScGMbq3hHSUHwacZ3iGW_SIsLLsEP66sxhA-cJQydXIj8odthL1Bw",
		"token_type": "Bearer",
		"expires_in": 86400
	});
}
