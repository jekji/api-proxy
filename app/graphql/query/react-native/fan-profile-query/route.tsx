import { NextResponse } from 'next/server';

/**
:method: POST
:path: /graphql/query/react-native/fan-profile-query
:authority: app.dream11.com
:scheme: https
accept: application/json
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
authorization: Bearer eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCIsInR5cCI6ImF0K2p3dCIsImtpZCI6IlRqb0FsLVdyZWN3Z3MtZVVvcm5xWWE5Y2x4dyJ9.eyJhdWQiOiJhOEVzRGxQYzNaQ1Znc1VwcHB1YyIsImV4cCI6MTc3MzYzMTQ2NywiaWF0IjoxNzczNTQ1MDY3LCJpc3MiOiJkcmVhbTExLmNvbSIsInN1YiI6IjMyMDE5OTg1OCIsImp0aSI6IjVqM3U4OVFNeFpNZG5tMXRsUXExVE5QenpGbnBGRGpmIiwidGlkIjoiMiIsInJmdF9pZCI6Ijc2NjYxMTYzODVGMzhEMUZGMjhFODBBNkQ1MTREM0Y0IiwiY2xpZW50X2lkIjoiYThFc0RsUGMzWkNWZ3NVcHBwdWMiLCJzY29wZSI6ImRyZWFtMTE6YWxsIiwiYW1yIjpbIm90cCJdLCJjb3VudHJ5Q29kZSI6IlVTIn0.QTfxN08TdhvuPEhZNVDyHmUDOpEN3N3XkgKl7tvRgx5A-3Wr4jQBdi9TW61RFYOPtJVt8dh-sxngrMPEDuHOcf-7-35gdD3NJmfc_Zim7umGjjm6U_aGF_2WSs10qp7e4dhAooeth2JEanpHAfUsf85SEThGTpSUBDKBaMg4Ly6V3T2D1hLb1EDxQNvLetcmBzJagOHu34SjTSEdWVbRTCWtwwvoklx1SyM7Ci34Z6H4Uioo5o1lisTtzyn6f74IkNoURQCiwYTZCS45h6-yKpBH4gsIsbG5gY0qvnYWKIfNBCcfSed9131iEn8zLEgvnWVlofrMLu7XPdEaHZFENQ
content-type: application/json
content-length: 539
accept-encoding: gzip

{"query":"\n    query FanProfileQuery($userId: Int!, $pageNo: Int, $pageSize: Int, $isMiniProfile: Boolean) {\n  user(userId: $userId, isMiniProfile: $isMiniProfile) {\n    userInfo {\n      id\n      teamName\n      profilePicUrl\n      userType\n      playingSince\n      shortRefCode\n    }\n  }\n  favorites(userId: $userId, pageNo: $pageNo, pageSize: $pageSize) {\n    items {\n      id\n      name\n      imageUrl\n      entityType\n    }\n  }\n}\n    ","variables":{"userId":320199858,"pageNo":1,"pageSize":6,"isMiniProfile":false}}
 */
export async function POST() {
	return NextResponse.json({
		"data": {
			"user": {
				"userInfo": {
					"id": 320199858,
					"teamName": "TONYASI LEADERS",
					"profilePicUrl": "",
					"userType": "NORMAL",
					"playingSince": "2026-03-15T03:22:15Z",
					"shortRefCode": "TONYAS16QR"
				}
			},
			"favorites": {
				"items": []
			}
		}
	});
}
