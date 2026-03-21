import { NextResponse } from 'next/server';
import { extractAndModifyHeaders } from '@/lib/changeHeader';

// /games
export async function GET(request: Request) {
	const body = await request.json();

	const requestHeaders = extractAndModifyHeaders(request);

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
