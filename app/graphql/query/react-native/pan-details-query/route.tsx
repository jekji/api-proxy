import { extractAndModifyHeaders } from '@/lib/changeHeader';
import { NextResponse } from 'next/server';

/**
:method: POST
:path: /graphql/query/react-native/pan-details-query
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
	"query": "\n    query PanDetailsQuery {\n  getPanDetails {\n    pan\n    maskedPan\n    userFullName\n    dateOfBirth\n    status\n    comments\n    inReviewMessage\n    panImageURL\n  }\n  userPanVerificationDetails {\n    subStatus\n    message\n  }\n}\n    ",
	"variables": {}
}

*/
export async function POST(request: Request) {
	const body = await request.json();
	const { query, variables } = body;

	const requestHeaders = extractAndModifyHeaders(request, process.env.WWW_GRAPHAL_URL || '');
	
	if (process.env.WWW_GRAPHAL_URL) {
		// Use real API to fetch data
		try {
			const apiURL = process.env.WWW_GRAPHAL_URL + "/graphql/query/react-native/pan-details-query";
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

			console.log("pan-details-query", JSON.stringify(data));
			
			return NextResponse.json(data);
		} catch (error) {
			console.error('API request error:', error);
			// Fall back to mock data if API fails
		}
	}
	
	return NextResponse.json({
		"data": {
			"getPanDetails": {
				"pan": "OUYPK4331L",
				"maskedPan": "OU******1L",
				"userFullName": "Babbu Kumar",
				"dateOfBirth": "1999-09-11",
				"status": "VERIFIED",
				"comments": "",
				"inReviewMessage": null,
				"panImageURL": "https://verificationd11mumbai.s3.ap-south-1.amazonaws.com/317152330/?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLWVhc3QtMSJGMEQCIHjPpNjBxpcio3EGRceQdaQtEfRxY9mOnqAkvDMzpwCKAiBEcGJEiEWjdTBQLxhXXVzF%2B75hX9gR3st1D%2Fp%2BrX7ZgyqyBQgaEAAaDDA3ODIxMDcxMzE3MyIMG9uPHGoBtRDGkvbJKo8Fi9pdNYT566Fn43JLclKaF%2BDX1ON2KlCOyPy5m4h9McTHPfWZd6VHNrw%2F54n1J%2BXI7xnALiBdxQUb5ud9hyPU%2BZ00nok2bv0ajcQLXxZj0PmNTWAKBFU5LkYOLaSvIwOoStpZsm67HWgA%2Bbl18SuWIR7gXSjCf5HLpHxT%2FXyt0Dp2wCS2oi96XhZaUaoOjd1O7dAoX%2F5cywgX1iUQhF5Z4s5C0Q0VkzOTO%2FRvYH4%2B51%2B6t6ZWkoQqFl455OfpV7NB2PHypkepO3fx2dexZtOnb3QFGhOJsEv5roX%2F%2Fxx%2FWLUdFPlaHvgOjddY%2BAmDfj5G5upgkfg4fpavkQ14tGt4DcXqAHmpQKKLpY4sk2Vta8z%2Fk3vwgd01rGiwMV%2BDtgMx1cZ8MVCH0fJB4kBJ9JdU1HG9i1XuyYSmo5BMVYVHEI7v0acYIyWId4PYTP3r9iMrqub4m8vIb6ZC7raTHyDHIWBiymuU1PMpDSVpswww9qAqetPhD6nHwgTA7JFl65aR9HV4%2BkszL2Fi8pIfIoEZ6bva9sEB5o%2FOtajHlIwpMUlC4qGXSNSTf1CY2OxIbn6qE%2FETV%2BZVHPzNvzmue3E4xuB11AImdVoU6APn3cC%2Fk9VJ9VF07pNoqT%2BF3%2FzVPm8maOz48XUCqsWmE29teyjcwDlnjphE6iY3JVGqsKdighvkya9rVmkwEM3bR%2BelOdmE3Zk6BG2Ny5tRy5Pno3Ui43IrLS2ce2opn6anTUK0BoJHNN5S2v86YbzfkcyIVrLFBT1aVEMxC%2BxI%2FXqpAUpRImpZssII2%2FpZYbwFVfao6891483lzx712JM4qS203MN%2Ffil%2FgSdUGb9EzhqIiv1Nzj%2FuCq9Z56ooYQfkFuJGsjCZ%2FO7NBjqyAd7dIDS0sgs1sOUCK1nRhX25LxwD%2BLu4MVH1NnZ20sIBL%2FSQ0edtn%2FSxfsGTVVGWwZZ%2FfCmlF3ZPygvHQ0iIbVOibecW%2FfTYBXH8fpCjxuoIsqsEBz22eFnCCWeOPqrCG8uKGlGujnfqgofh30SSglA9p8n8wrKF%2FE08GsN9UwRd%2BhMz3j3k8O%2FT%2B5OJttjOVA4Gb0sYBa%2BR2GBf3HpMhbM%2FLPiKeRtfopCOLZ0y5KXMgDo%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20260319T095015Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43199&X-Amz-Credential=ASIARENNYYZKVFWOE3B5%2F20260319%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=f4622ba8ca4ab7faa93b395ddf42a8e869faaaf988895d04b0d9151f126f026a"
			},
			"userPanVerificationDetails": {
				"subStatus": "VERIFIED",
				"message": ""
			}
		}
	});
}
