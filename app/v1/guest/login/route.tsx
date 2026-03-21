import { NextResponse } from 'next/server';
import { tokenManager } from '@/lib/token-manager';
import { extractAndModifyHeaders } from '@/lib/changeHeader';

/**
:method: POST
:path: /v1/guest/login
:authority: api.dream11.com
:scheme: https
accept: application/json
tenant-id: DREAM11
device: androidplaystore
devicetype: ANDROID
deviceid: 4ef884b2fa253561
ek1: 20b5af02ef48d284421013e2805583c0cead9b88edd1a75ca28c4fbed9aaeb8c
ek2: 20b5af02ef48d284421013e2805583c0cead9b88edd1a75ca28c4fbed9aaeb8c
x-manufacturer: google
x-os-version: 16
x-os-type: android
x-app-version-name: 750
app_version: 7.5.0
a1: 614e36446e37123af3c5d3abaeea845c7dee7da41a96a337b5dafd468acfeea7
version: 10045
user-agent: Dream11/7.5.0 (Linux; Android 36; Pixel 6a) Build/10045
siteid: 1
locale: en-US
content-type: application/json
content-length: 109
accept-encoding: gzip
cookie: AT=eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCIsInR5cCI6ImF0K2p3dCIsImtpZCI6IlRqb0FsLVdyZWN3Z3MtZVVvcm5xWWE5Y2x4dyJ9.eyJhdWQiOiJhOEVzRGxQYzNaQ1Znc1VwcHB1YyIsImV4cCI6MTc3NDA3MzI5NiwiaWF0IjoxNzczOTg2ODk2LCJpc3MiOiJkcmVhbTExLmNvbSIsInN1YiI6IjRlZjg4NGIyZmEyNTM1NjEiLCJqdGkiOiJDV2V1Sm9jUmZHYkNsZjluZjJaZm05S3B3ZzVUN0NveSIsInRpZCI6IjIiLCJyZnRfaWQiOiJENDFEOENEOThGMDBCMjA0RTk4MDA5OThFQ0Y4NDI3RSIsImNsaWVudF9pZCI6ImE4RXNEbFBjM1pDVmdzVXBwcHVjIiwic2NvcGUiOiJkcmVhbTExLWd1ZXN0IiwiYW1yIjpbXX0.eByUCHislhpT59qbUaMentfXfqmyUj1NdlueTcWpF4lBGZqrr6_PMjK7fitNX9nckrPzFc4QiPN5OMXzTPlug9kRl6hdrX9oeY-LMSJ-Amz6m0zQ4wsADgqaw9m1xoPYRO8PE3ScmW2LIeIKBXkcu0gZSQ-HbuHaTk-mHs5D6mt6vRaU4niALcrzuLBuMVbm7AgGAx5cBbdFywwhEbEH37HNxJs3JnD-viybcKB972HVckbMz03-cLlq7FlT78m2XibCcWHTXIA7vzvTbj7YiFDLCoaSNFhVfAu8IQDnJhc6VHOetctvPMij9WV9RORaBgETKSObQGwtKnm9ER3Qjg

{
	"guest_identifier": "bqzKLXVFzsldiorGFaIdTA==",
	"client_id": "a8EsDlPc3ZCVgsUpppuc",
	"scopes": ["dream11-guest"]
}

response：
{
	"access_token": "eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCIsInR5cCI6ImF0K2p3dCIsImtpZCI6IlRqb0FsLVdyZWN3Z3MtZVVvcm5xWWE5Y2x4dyJ9.eyJhdWQiOiJhOEVzRGxQYzNaQ1Znc1VwcHB1YyIsImV4cCI6MTc3NDA3MzQzNiwiaWF0IjoxNzczOTg3MDM2LCJpc3MiOiJkcmVhbTExLmNvbSIsInN1YiI6IjRlZjg4NGIyZmEyNTM1NjEiLCJqdGkiOiJBYVQ5cEtGYmpLenBuRmd0aFJvQnJYbGhFc1pJd1VsVSIsInRpZCI6IjIiLCJyZnRfaWQiOiJENDFEOENEOThGMDBCMjA0RTk4MDA5OThFQ0Y4NDI3RSIsImNsaWVudF9pZCI6ImE4RXNEbFBjM1pDVmdzVXBwcHVjIiwic2NvcGUiOiJkcmVhbTExLWd1ZXN0IiwiYW1yIjpbXX0.rnW2AvuFOkbeGkN_5hvDYkgf5x4PII-KWPPDuRE0fhKZY_yGRfluZBZ5L4xF2NN8VH8vvCs78bD_igWCZpFsuIyT2920TRIsyZEcfFYL9FDFvd59YruFRqcW7Uf82DrH4GLhpHZDz4VoVdjjs1lMV8PCQlwzAv5CXYNrunglR6OPzYfM96N_xpp7BimlUQtVvpDpZQlegQBlUeO27XrBOMT19kx_-PlzKOrb7ijixyhhVuAybaL0hEZTfJM7Antq5abhFzS1TR2hNbQi3trlPzzUqZm9INOQ6qHmNloZzm3xeoThg2AZ4yGlxKkOKFhQcud76PPPMtPh54sS5WhzJg",
	"token_type": "Bearer",
	"expires_in": 86400
}
*/
export async function POST(request: Request) {
	const body = await request.json();

	const requestHeaders = extractAndModifyHeaders(request, process.env.API_URL || '');

	console.log("GuestLoginData", JSON.stringify(body));
	
	// Extract deviceid from headers for token storage
	const deviceid = requestHeaders['deviceid'] || request.headers.get('deviceid') || request.headers.get('x-device-id') || 'unknown';
	
	// 优先从文件中读取现有token
	const existingToken = tokenManager.getToken(deviceid);
	
	if (existingToken) {
		// 如果存在token，直接返回
		return NextResponse.json({
			"access_token": existingToken.access_token,
			"token_type": existingToken.token_type,
			"expires_in": existingToken.expires_in
		});
	}
	
	if (process.env.API_URL) {
		// Use real API to fetch data
		const apiURL = process.env.API_URL + "/v1/guest/login";
		try {
			const apiResponse = await fetch(apiURL, {
				method: 'POST',
				headers: requestHeaders,
				body: JSON.stringify(body),
			});

			console.log("guest-login-return", JSON.stringify(apiResponse));

			if (!apiResponse.ok) {
				throw new Error(`API request failed: ${apiResponse.status}`);
			}

			const data = await apiResponse.json();

			if (data.error) {
				return NextResponse.json(data);
			}

			tokenManager.saveToken(deviceid, {
				access_token: data.access_token,
				token_type: data.token_type,
				expires_in: data.expires_in,
			});
			console.log('tokens saved for device:', deviceid);

			return NextResponse.json(data);
		} catch (error) {
			console.error(`API request failed. URL: ${apiURL}, body: ${JSON.stringify(body)}, error: `, error);
			// Fall back to mock data if API fails
		}
	}

	// 如果没有token，使用默认值并保存
	const responseData = {
		"access_token": "eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCIsInR5cCI6ImF0K2p3dCIsImtpZCI6IlRqb0FsLVdyZWN3Z3MtZVVvcm5xWWE5Y2x4dyJ9.eyJhdWQiOiJhOEVzRGxQYzNaQ1Znc1VwcHB1YyIsImV4cCI6MTc3MzYzMTQ2NywiaWF0IjoxNzczNTQ1MDY3LCJpc3MiOiJkcmVhbTExLmNvbSIsInN1YiI6IjMyMDE5OTg1OCIsImp0aSI6IjVqM3U4OVFNeFpNZG5tMXRsUXExVE5QenpGbnBGRGpmIiwidGlkIjoiMiIsInJmdF9pZCI6Ijc2NjYxMTYzODVGMzhEMUZGMjhFODBBNkQ1MTREM0Y0IiwiY2xpZW50X2lkIjoiYThFc0RsUGMzWkNWZ3NVcHBwdWMiLCJzY29wZSI6ImRyZWFtMTE6YWxsIiwiYW1yIjpbIm90cCJdLCJjb3VudHJ5Q29kZSI6IlVTIn0.QTfxN08TdhvuPEhZNVDyHmUDOpEN3N3XkgKl7tvRgx5A-3Wr4jQBdi9TW61RFYOPtJVt8dh-sxngrMPEDuHOcf-7-35gdD3NJmfc_Zim7umGjjm6U_aGF_2WSs10qp7e4dhAooeth2JEanpHAfUsf85SEThGTpSUBDKBaMg4Ly6V3T2D1hLb1EDxQNvLetcmBzJagOHu34SjTSEdWVbRTCWtwwvoklx1SyM7Ci34Z6H4Uioo5o1lisTtzyn6f74IkNoURQCiwYTZCS45h6-yKpBH4gsIsbG5gY0qvnYWKIfNBCcfSed9131iEn8zLEgvnWVlofrMLu7XPdEaHZFENQ",
		"token_type": "Bearer",
		"expires_in": 86400
	};
	
	return NextResponse.json(responseData);
}
