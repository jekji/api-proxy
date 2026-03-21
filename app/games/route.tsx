import { NextResponse } from 'next/server';

// /games
export async function GET(request: Request) {
	const body = await request.json();

	// Extract headers from the incoming request
	const requestHeaders = Object.fromEntries(request.headers.entries());

	console.log(`Origin Headers: ${JSON.stringify(requestHeaders)}`);

	requestHeaders['atlas'] = 'IN';
	requestHeaders['locale'] = 'en-US';

	requestHeaders['host'] = process.env.API_URL.replace('https://', '').replace('http://', '');

	// 移除不需要的headers
	const headersToRemove = [
		'cdn-loop',
		'cf-connecting-ip',
		'cf-ipcountry',
		'cf-ray',
		'cf-visitor',
		'x-forwarded-for',
		'x-forwarded-host',
		'x-forwarded-port',
		'x-forwarded-proto',
		'x-original-uri',
		'x-real-ip',
		'connection'
	];

	headersToRemove.forEach(key => delete requestHeaders[key]);

	console.log(`Changed Headers: ${JSON.stringify(requestHeaders)}`);

	if (process.env.API_URL) {
		// Use real API to fetch data
		const apiURL = process.env.API_URL + "/games";
		try {
			const apiResponse = await fetch(apiURL, {
				method: 'POST',
				headers: requestHeaders,
				body: JSON.stringify(body),
			});
			
			if (!apiResponse.ok) {
				throw new Error(`API request failed: ${apiResponse.status}`);
			}
			
			const data = await apiResponse.json();

			console.log("body", JSON.stringify(body), "data", JSON.stringify(data));
			
			return NextResponse.json(data);
		} catch (error) {
			console.error(`API request failed. URL: ${apiURL}, body: ${JSON.stringify(body)}, error: `, error);
			// Fall back to mock data if API fails
		}
	}
	
	return NextResponse.json({
		"games": []
	});
}
