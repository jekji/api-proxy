import { NextResponse } from 'next/server';
import { extractAndModifyHeaders } from '@/lib/changeHeader';
import { tokenManager } from '@/lib/token-manager';

/**
:method: POST
:path: /v2/passwordless/complete
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
content-length: 72
accept-encoding: gzip

{"state":"pQDIRgruCq","otp":"336781","client_id":"a8EsDlPc3ZCVgsUpppuc"}
*/
export async function POST(request: Request) {
	const body = await request.json();

	const { client_id, state, otp } = body;

	const requestHeaders = extractAndModifyHeaders(request, process.env.API_URL || '');

	if (process.env.API_URL) {
		// Use real API to fetch data
		const apiURL = process.env.API_URL + "/v2/passwordless/complete";
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

			if (data.error) {
				return NextResponse.json(data);
			}

			tokenManager.saveToken(client_id, {
				access_token: data.access_token,
				refresh_token: data.refresh_token,
				id_token: data.id_token,
				sso_token: data.sso_token,
				token_type: data.token_type,
				expires_in: data.expires_in,
				is_new_user: data.is_new_user,
				is_mobile_verified: data.is_mobile_verified,
				mfa_factors: data.mfa_factors,
				account_restored: data.account_restored,
			});
			console.log('tokens saved for client:', client_id);

			return NextResponse.json(data);
		} catch (error) {
			console.error(`API request failed. URL: ${apiURL}, body: ${JSON.stringify(body)}, error: `, error);
			// Fall back to mock data if API fails
		}
	}
	
	// 优先从文件中读取现有token
	const existingToken = tokenManager.getToken(client_id);
	
	let responseData;
	
	if (existingToken) {
		// 如果存在token，直接返回（不检查过期）
		responseData = {
			"access_token": existingToken.access_token,
			"refresh_token": existingToken.refresh_token,
			"id_token": existingToken.id_token,
			"sso_token": existingToken.sso_token,
			"token_type": existingToken.token_type,
			"expires_in": existingToken.expires_in,
			"is_new_user": existingToken.is_new_user || false,
			"mfa_factors": [],
			"is_mobile_verified": existingToken.is_mobile_verified || false,
			"account_restored": false
		};
		console.log('Using existing token for client:', client_id);
	} else {
		// 如果没有token，使用默认值并保存
		responseData = {
			"access_token": "eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCIsInR5cCI6ImF0K2p3dCIsImtpZCI6IlRqb0FsLVdyZWN3Z3MtZVVvcm5xWWE5Y2x4dyJ9.eyJhdWQiOiJhOEVzRGxQYzNaQ1Znc1VwcHB1YyIsImV4cCI6MTc3MzYzMTQ2NywiaWF0IjoxNzczNTQ1MDY3LCJpc3MiOiJkcmVhbTExLmNvbSIsInN1YiI6IjMyMDE5OTg1OCIsImp0aSI6IjVqM3U4OVFNeFpNZG5tMXRsUXExVE5QenpGbnBGRGpmIiwidGlkIjoiMiIsInJmdF9pZCI6Ijc2NjYxMTYzODVGMzhEMUZGMjhFODBBNkQ1MTREM0Y0IiwiY2xpZW50X2lkIjoiYThFc0RsUGMzWkNWZ3NVcHBwdWMiLCJzY29wZSI6ImRyZWFtMTE6YWxsIiwiYW1yIjpbIm90cCJdLCJjb3VudHJ5Q29kZSI6IlVTIn0.QTfxN08TdhvuPEhZNVDyHmUDOpEN3N3XkgKl7tvRgx5A-3Wr4jQBdi9TW61RFYOPtJVt8dh-sxngrMPEDuHOcf-7-35gdD3NJmfc_Zim7umGjjm6U_aGF_2WSs10qp7e4dhAooeth2JEanpHAfUsf85SEThGTpSUBDKBaMg4Ly6V3T2D1hLb1EDxQNvLetcmBzJagOHu34SjTSEdWVbRTCWtwwvoklx1SyM7Ci34Z6H4Uioo5o1lisTtzyn6f74IkNoURQCiwYTZCS45h6-yKpBH4gsIsbG5gY0qvnYWKIfNBCcfSed9131iEn8zLEgvnWVlofrMLu7XPdEaHZFENQ",
			"refresh_token": "7sVPEKChECZMIOiWGEOyxFW04P8Isz0F",
			"id_token": "eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCIsImtpZCI6IlRqb0FsLVdyZWN3Z3MtZVVvcm5xWWE5Y2x4dyJ9.eyJhdWQiOiJhOEVzRGxQYzNaQ1Znc1VwcHB1YyIsImV4cCI6MTc3MzU0NTY2NywiaWF0IjoxNzM1NDUwNjcsImlzcyI6ImRyZWFtMTEuY29tIiwic3ViIjoiMzIwMTk5ODU4IiwidXNlcklkIjoiMzIwMTk5ODU4IiwiZW1haWxJZCI6InRvbnlhc2ltbXlzYjU3QGdtYWlsLmNvbSJ9.U1mxcD8Nqz57TToiTacj4sUWAE_JsugF2cI0tX50rnn7Cn89r9L3_ia5eOswXgC8DkZe1uw5jgFkBo3_hQTWd1YRS8AJ0BxbblI2lHzVt1JsqGBPqru_ADshj2vHeVYDW8CXMnRLU4Ndu7dfWVjPc26GruqMZN5WrmZ0g1GilJV9lZQujuGz-KurDDJ8q-CDgN9k-1ZvDeydYIWVBac3PSC2LGlvmy1viRLbPMw6cKDQ9poDyEBVJ0WYBe-RX4B5hBmCQmc8lotNO82_cY0ll97p0U7BBOuxRvJ3XvwFkLhYiogLPdMFw8oJB2UBEwfjd01k0_yJqP-3x3M5R-HoaQ",
			"sso_token": "y0aFyuUPCli32C6",
			"token_type": "Bearer",
			"expires_in": 86400,
			"is_new_user": false,
			"mfa_factors": [],
			"is_mobile_verified": false,
			"account_restored": false
		};
		
		// 保存新的默认tokens到文件
		try {
			tokenManager.saveToken(client_id, {
				access_token: responseData.access_token,
				refresh_token: responseData.refresh_token,
				id_token: responseData.id_token,
				sso_token: responseData.sso_token,
				token_type: responseData.token_type,
				expires_in: responseData.expires_in,
				is_new_user: responseData.is_new_user,
				is_mobile_verified: responseData.is_mobile_verified
			});
			console.log('Default tokens saved for client:', client_id);
		} catch (fileError) {
			console.error('Failed to save default tokens:', fileError);
		}
	}
	
	return NextResponse.json(responseData);

	// return NextResponse.json({
	// 	"access_token": "eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCIsInR5cCI6ImF0K2p3dCIsImtpZCI6IlRqb0FsLVdyZWN3Z3MtZVVvcm5xWWE5Y2x4dyJ9.eyJhdWQiOiJhOEVzRGxQYzNaQ1Znc1VwcHB1YyIsImV4cCI6MTc3MzY3NzY5NiwiaWF0IjoxNzczNTkxMjk2LCJpc3MiOiJkcmVhbTExLmNvbSIsInN1YiI6IjMxNzE1MjMzMCIsImp0aSI6ImhtT2tmc0NCQVM5d2JkQUhiSDVva3lCOW84OVpqdVRRIiwidGlkIjoiMiIsInJmdF9pZCI6IjBGQkFEMUQ5RjFENzdGOTlFQjdFNzAzM0IzQ0RFREVGIiwiY2xpZW50X2lkIjoiYThFc0RsUGMzWkNWZ3NVcHBwdWMiLCJzY29wZSI6ImRyZWFtMTE6YWxsIiwiYW1yIjpbIm90cCJdLCJjb3VudHJ5Q29kZSI6IklOIn0.iZVontVwx0-WkQErCRaKQ9Eum31miMaGnsO1uO4KOiuKxnGxl2nx_guM8k4pL0R8R7WRhTebkXXlC-WUb039AGU0kq6U-Hafrx40Pss3bsJ76AKG8Ygi8SN38-D3g-oXanhGdnnH0NPuoVDCUfBL5M9UmkIzvH_VwPOoJFCBRtsNoNzmmIN5Ef-YhdNi8sb2fvuXnIkzekJ0KbhxtpCTA6xcrFn3uemmJPyhyzg6lDU4pvDYAGpDiJh0GTnk1RXtDj9qqkloX4jSrJ5HQkqIBUlTtEKykImGSJz9ob-oXbpkajc0kcQKrCltfclX0eOHPHy98lQTgpvOtg6ulY6nvQ",
	// 	"refresh_token": "HnwZbqZGEOGRjPOhPtgpE0R8zkKWTE9u",
	// 	"id_token": "eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCIsImtpZCI6IlRqb0FsLVdyZWN3Z3MtZVVvcm5xWWE5Y2x4dyJ9.eyJhdWQiOiJhOEVzRGxQYzNaQ1Znc1VwcHB1YyIsImV4cCI6MTc3MzU5MTg5NiwiaWF0IjoxNzczNTkxMjk2LCJpc3MiOiJkcmVhbTExLmNvbSIsInN1YiI6IjMxNzE1MjMzMCIsInVzZXJJZCI6IjMxNzE1MjMzMCIsImVtYWlsSWQiOiJhYXJvbnRoNDQuNDRAZ21haWwuY29tIn0.KsOM6mSrCXYKG-FAk4OUV8hcVyexAWwP_yqxj4JEiHF0rB9gqT4o-eRm7KSZ-b9VD3_7Adzd93mCcwaOLIu93RxVvQSqQ0usXy__9yA2sYpfLujj2_9eBxNi-mRTsOlKEp4Js7XuOnp4Y1osHhyl2fT79PpWm65HUyCtJ1M0m0MtmnGhNfbpt3FT2bhMZwvCyl6hYegSmi_gPmw2O9B7asBg8KeaVOGgO0JVWKjqRRRYnCfFkee5kxacl1UDgWuXng_6Cg9NuCH19rzSQ_HthBLi0Xugp6ZYLWF90RAcwdOLp8ndD0ZaSSMfNoe9_lvkQbc5NEgEOkeTps_Nl_f08Q",
	// 	"sso_token": "82JXPV48sQkzuaz",
	// 	"token_type": "Bearer",
	// 	"expires_in": 86400,
	// 	"is_new_user": false,
	// 	"mfa_factors": [],
	// 	"is_mobile_verified": true,
	// 	"account_restored": false
	// });
}

/**
{
	"error": {
		"code": "invalid_state",
		"message": "User was not sent an OTP, try sending again"
	}
}
 */