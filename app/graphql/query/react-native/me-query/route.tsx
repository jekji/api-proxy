import { extractAndModifyHeaders } from '@/lib/changeHeader';
import { NextResponse } from 'next/server';

/**
{
	"query": "\n    query MeQuery {\n  me {\n    id\n    emailId\n    userType\n    teamName\n    showOnboarding\n    verified\n    name\n    isMobileVerified\n    userSegment\n    mobileNumber\n    referralCode\n    firstNameV1\n    utmRef\n    utmSource\n    countryCode\n    state {\n      id\n      name\n    }\n    firebaseKey {\n      firebaseProjectName\n      firebaseProjectApiKey\n      firebaseProjectDbUrl\n    }\n    geoStateId\n  }\n}\n    "
}
 */
export async function POST(request: Request) {
	const body = await request.json();
	const { query, variables } = body;

	const requestHeaders = extractAndModifyHeaders(request, process.env.WWW_GRAPHAL_URL || '');
	
	if (process.env.WWW_GRAPHAL_URL) {
		// Use real API to fetch data
		try {
			const apiURL = process.env.WWW_GRAPHAL_URL + "/graphql/query/react-native/me-query";
			const response = await fetch(apiURL, {
				method: 'POST',
				headers: requestHeaders,
				body: JSON.stringify({
					query,
					variables
				}),
			});
			
			if (!response.ok) {
				throw new Error(`API request failed: ${response.status}, url: ${apiURL}, headers: ${JSON.stringify(requestHeaders)}`);
			}
			
			const data = await response.json();

			console.log("me-query", JSON.stringify(data));
			
			return NextResponse.json(data);
		} catch (error) {
			console.error('API request error:', error);
			// Fall back to mock data if API fails
		}
	}

	return NextResponse.json({
		"data": {
			"me": {
				"id": 320199858,
				"emailId": "tonyasimmysb57@gmail.com",
				"userType": "NORMAL",
				"teamName": "TONYASI LEADERS",
				"showOnboarding": true,
				"verified": "NOT_VERIFIED",
				"name": "",
				"isMobileVerified": false,
				"userSegment": 1,
				"mobileNumber": "",
				"referralCode": "TONYAS16QR",
				"firstNameV1": "",
				"utmRef": "0",
				"utmSource": "Organic",
				"countryCode": "US",
				"state": null,
				"firebaseKey": {
					"firebaseProjectName": "dream11prj",
					"firebaseProjectApiKey": "ILRMZohvUOCb6/evps8ZWpxX9Fb/adCEc5tWJEH4nsvttOTLfCcAhkNYOAWK7VOt",
					"firebaseProjectDbUrl": "https://dream11prj-a9e4f.firebaseio.com/"
				},
				"geoStateId": null
			}
		}
	});
}
