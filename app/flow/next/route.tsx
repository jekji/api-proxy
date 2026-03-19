import { NextResponse } from 'next/server';

// {
// 	"email": "tonyasimmysb57@gmail.com"
// }
export async function POST(request: Request) {
	const body = await request.json();
	const { email } = body;

	// Extract headers from the incoming request
	const requestHeaders = Object.fromEntries(request.headers.entries());

	requestHeaders['atlas'] = 'IN';
	requestHeaders['locale'] = 'en-US';

	requestHeaders['host'] = process.env.API_URL.replace('https://', '').replace('http://', '');
	requestHeaders['x-forwarded-host'] = requestHeaders['host'];

	console.log(`Headers: ${JSON.stringify(requestHeaders)}`);

	if (process.env.API_URL) {
		// Use real API to fetch data
		const apiURL = process.env.API_URL + "/flow/next";
		try {
			const apiResponse = await fetch(apiURL, {
				method: 'POST',
				headers: requestHeaders,
				body: JSON.stringify({
					email
				}),
			});

			if (!apiResponse.ok) {
				throw new Error(`API request failed: ${apiResponse.status}`);
			}

			const data = await apiResponse.json();

			console.log("email", email, "data", JSON.stringify(data));

			return NextResponse.json(data);
		} catch (error) {
			console.error(`API request failed. URL: ${apiURL}, email: ${email}, error: `, error);
			// Fall back to mock data if API fails
		}
	}

	return NextResponse.json({
		"flow": "signinup",
		"timestamp": 1773544476812
	});
}
