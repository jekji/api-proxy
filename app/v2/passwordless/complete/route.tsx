import { NextResponse } from 'next/server';

/**
{
	"state": "ajjVpc70Vz",
	"otp": "517597",
	"client_id": "a8EsDlPc3ZCVgsUpppuc"
}
 */
export async function POST() {
	return NextResponse.json({
		"access_token": "eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCIsInR5cCI6ImF0K2p3dCIsImtpZCI6IlRqb0FsLVdyZWN3Z3MtZVVvcm5xWWE5Y2x4dyJ9.eyJhdWQiOiJhOEVzRGxQYzNaQ1Znc1VwcHB1YyIsImV4cCI6MTc3MzYzMTQ2NywiaWF0IjoxNzczNTQ1MDY3LCJpc3MiOiJkcmVhbTExLmNvbSIsInN1YiI6IjMyMDE5OTg1OCIsImp0aSI6IjVqM3U4OVFNeFpNZG5tMXRsUXExVE5QenpGbnBGRGpmIiwidGlkIjoiMiIsInJmdF9pZCI6Ijc2NjYxMTYzODVGMzhEMUZGMjhFODBBNkQ1MTREM0Y0IiwiY2xpZW50X2lkIjoiYThFc0RsUGMzWkNWZ3NVcHBwdWMiLCJzY29wZSI6ImRyZWFtMTE6YWxsIiwiYW1yIjpbIm90cCJdLCJjb3VudHJ5Q29kZSI6IlVTIn0.QTfxN08TdhvuPEhZNVDyHmUDOpEN3N3XkgKl7tvRgx5A-3Wr4jQBdi9TW61RFYOPtJVt8dh-sxngrMPEDuHOcf-7-35gdD3NJmfc_Zim7umGjjm6U_aGF_2WSs10qp7e4dhAooeth2JEanpHAfUsf85SEThGTpSUBDKBaMg4Ly6V3T2D1hLb1EDxQNvLetcmBzJagOHu34SjTSEdWVbRTCWtwwvoklx1SyM7Ci34Z6H4Uioo5o1lisTtzyn6f74IkNoURQCiwYTZCS45h6-yKpBH4gsIsbG5gY0qvnYWKIfNBCcfSed9131iEn8zLEgvnWVlofrMLu7XPdEaHZFENQ",
		"refresh_token": "7sVPEKChECZMIOiWGEOyxFW04P8Isz0F",
		"id_token": "eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCIsImtpZCI6IlRqb0FsLVdyZWN3Z3MtZVVvcm5xWWE5Y2x4dyJ9.eyJhdWQiOiJhOEVzRGxQYzNaQ1Znc1VwcHB1YyIsImV4cCI6MTc3MzU0NTY2NywiaWF0IjoxNzczNTQ1MDY3LCJpc3MiOiJkcmVhbTExLmNvbSIsInN1YiI6IjMyMDE5OTg1OCIsInVzZXJJZCI6IjMyMDE5OTg1OCIsImVtYWlsSWQiOiJ0b255YXNpbW15c2I1N0BnbWFpbC5jb20ifQ.SSmxcD8Nqz57TToiTacj4sUWAE_JsugF2cI0tX50rnn7Cn89r9L3_ia5eOswXgC8DkZe1uw5jgFkBo3_hQTWd1YRS8AJ0BxbblI2lHzVt1JsqGBPqru_ADshj2vHeVYDW8CXMnRLU4Ndu7dfWVjPc26GruqMZN9WrmZ0g1GilJV9lZQujuGz-KurDDJ8q-CDgN9k-1ZvDeydYIWVBac3PSC2LGlvmy1viRLbPMw6cKDQ9poDyEBVJ0WYBe-RX4B5hBmCQmc8lotNO82_cY0ll97p0U7BBOuxRvJ3XvwFkLhYiogLPdMFw8oJB2UBEwfjd01k0_yJqP-3x3M5R-HoaQ",
		"sso_token": "y0aFyuUPCli32C6",
		"token_type": "Bearer",
		"expires_in": 86400,
		"is_new_user": false,
		"mfa_factors": [],
		"is_mobile_verified": false,
		"account_restored": false
	});
}

/**
{
	"error": {
		"code": "invalid_state",
		"message": "User was not sent an OTP, try sending again"
	}
}
 */