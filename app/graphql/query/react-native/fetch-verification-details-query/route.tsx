import { extractAndModifyHeaders } from '@/lib/changeHeader';
import { NextResponse } from 'next/server';

/**
:method: POST
:path: /graphql/query/react-native/fetch-verification-details-query
:authority: www.dream11.com
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
authorization: Bearer eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCIsInR5cCI6ImF0K2p3dCIsImtpZCI6IlRqb0FsLVdyZWN3Z3MtZVVvcm5xWWE5Y2x4dyJ9.eyJhdWQiOiJhOEVzRGxQYzNaQ1Znc1VwcHB1YyIsImV4cCI6MTc3Mzk4MTMxMiwiaWF0IjoxNzczODk0OTEyLCJpc3MiOiJkcmVhbTExLmNvbSIsInN1YiI6IjMxNzE1MjMzMCIsImp0aSI6ImNxMXVVM1BFZE1uUUp6cWZ0Q1o5TFFFREJIUEI0RjRGIiwidGlkIjoiMiIsInJmdF9pZCI6IjBGQkFEMUQ5RjFENzdGOTlFQjdFNzAzM0IzQ0RFREVGIiwiY2xpZW50X2lkIjoiYThFc0RsUGMzWkNWZ3NVcHBwdWMiLCJzY29wZSI6ImRyZWFtMTE6YWxsIiwiYW1yIjpbIm90cCJdLCJjb3VudHJ5Q29kZSI6IklOIn0.ophd7044L0x2fuMACySsnsbSZwOMVmYVop2KKP5WYj4nqkiZf2ubu74WQS5OOGvuCColxFU_sxDaxDpwEsMU0r5RxUtvo2UrNBvwYJLVjrYQx9Lt6w7pMBMgjhbvvBSR7RiifrjtLQWxJxSddOOlrZZ-_gfWsVOD50kfiulIrLwrOEponca_-VOrdUNZjoz7RElAzMdjxYdtSv8YRnNwdnxTBX7wmhlKBG0PfMPvRiY0z6fFGfnkYiMsGgtHvQ7-UtBvfQhMS4Bzq2bDAj2zJS1D-mwR5e5IwScGMbq3hHSUHwacZ3iGW_SIsLLsEP66sxhA-cJQydXIj8odthL1Bw
content-type: application/json
content-length: 230
accept-encoding: gzip
cookie: __refreshToken=HnwZbqZGEOGRjPOhPtgpE0R8zkKWTE9u; dh_user_id=4c1e2720-2090-11f1-8bfe-cdefa134efa5

{
	"query": "\n    query fetchVerificationDetailsQuery($upiEnabled: Boolean = false) {\n  userPanVerificationDetails {\n    ...PanVerificationFields\n  }\n  isPanActive\n  bankVerificationDetails {\n    ...VerificationFields\n  }\n  emailVerificationDetails {\n    ...VerificationFields\n  }\n  mobileVerificationDetails {\n    ...VerificationFields\n  }\n  vpaDetails {\n    ifsc\n    vpa\n    name\n    status\n    vpaLogo {\n      src\n      height\n      width\n      type\n    }\n    message\n  }\n  vpaHandles @include(if: $upiEnabled)\n}\n    \n    fragment PanVerificationFields on UserPanVerificationDetails {\n  verificationType\n  title\n  subtitle\n  value\n  status\n  message\n  preFillValue\n  subStatus\n}\n    \n\n    fragment VerificationFields on UserVerificationDetails {\n  isActive\n  title\n  subtitle\n  value\n  status\n  message\n  preFillValue\n}\n    "
}

*/
export async function POST(request: Request) {
	const body = await request.json();
	const { query, variables } = body;
	
	const requestHeaders = extractAndModifyHeaders(request, process.env.WWW_GRAPHAL_URL || '');
	
	if (process.env.WWW_GRAPHAL_URL) {
		// Use real API to fetch data
		try {
			const apiURL = process.env.WWW_GRAPHAL_URL + "/graphql/query/react-native/fetch-verification-details-query";
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

			console.log("fetch-verification-details-query", data);

			return NextResponse.json(data);
		} catch (error) {
			console.error('API request error:', error);
			// Fall back to mock data if API fails
		}
	}
	
	return NextResponse.json({
		"data": {
			"userPanVerificationDetails": {
				"verificationType": "PAN",
				"title": "PAN Card",
				"subtitle": "We will need this to verify KYC",
				"value": "OU******1L",
				"status": "VERIFIED",
				"message": "",
				"preFillValue": null,
				"subStatus": "VERIFIED"
			},
			"isPanActive": true,
			"bankVerificationDetails": {
				"isActive": true,
				"title": "Bank Account",
				"subtitle": "Enter bank details for instant transfer",
				"value": null,
				"status": "NOT_SUBMITTED",
				"message": null,
				"preFillValue": null
			},
			"emailVerificationDetails": {
				"isActive": true,
				"title": "Email Address",
				"subtitle": "For a more relevant fantasy sports experience.",
				"value": "aaronth44.44@gmail.com",
				"status": "VERIFIED",
				"message": "",
				"preFillValue": "aaronth44.44@gmail.com"
			},
			"mobileVerificationDetails": {
				"isActive": true,
				"title": "Mobile Number",
				"subtitle": "To build a more relevant fantasy sports experience.",
				"value": "7569309825",
				"status": "VERIFIED",
				"message": "",
				"preFillValue": null
			},
			"vpaDetails": []
		}
	});
}
