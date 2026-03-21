import { NextResponse } from 'next/server';
import { BASEHEADERS } from '@/constants';
import { extractAndModifyHeaders } from '@/lib/changeHeader';

/**
:method: POST
:path: /graphql/query/react-native/home-upcoming-matches-v2
:authority: www.dream11.com
:scheme: https
accept: application/json
atlas: IN
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
authorization: Bearer eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCIsInR5cCI6ImF0K2p3dCIsImtpZCI6IlRqb0FsLVdyZWN3Z3MtZVVvcm5xWWE5Y2x4dyJ9.eyJhdWQiOiJhOEVzRGxQYzNaQ1Znc1VwcHB1YyIsImV4cCI6MTc3MzY3NzY5NiwiaWF0IjoxNzczNTkxMjk2LCJpc3MiOiJkcmVhbTExLmNvbSIsInN1YiI6IjMxNzE1MjMzMCIsImp0aSI6ImhtT2tmc0NCQVM5d2JkQUhiSDVva3lCOW84OVpqdVRRIiwidGlkIjoiMiIsInJmdF9pZCI6IjBGQkFEMUQ5RjFENzdGOTlFQjdFNzAzM0IzQ0RFREVGIiwiY2xpZW50X2lkIjoiYThFc0RsUGMzWkNWZ3NVcHBwdWMiLCJzY29wZSI6ImRyZWFtMTE6YWxsIiwiYW1yIjpbIm90cCJdLCJjb3VudHJ5Q29kZSI6IklOIn0.iZVontVwx0-WkQErCRaKQ9Eum31miMaGnsO1uO4KOiuKxnGxl2nx_guM8k4pL0R8R7WRhTebkXXlC-WUb039AGU0kq6U-Hafrx40Pss3bsJ76AKG8Ygi8SN38-D3g-oXanhGdnnH0NPuoVDCUfBL5M9UmkIzvH_VwPOoJFCBRtsNoNzmmIN5Ef-YhdNi8sb2fvuXnIkzekJ0KbhxtpCTA6xcrFn3uemmJPyhyzg6lDU4pvDYAGpDiJh0GTnk1RXtDj9qqkloX4jSrJ5HQkqIBUlTtEKykImGSJz9ob-oXbpkajc0kcQKrCltfclX0eOHPHy98lQTgpvOtg6ulY6nvQ
content-type: application/json
content-length: 982
accept-encoding: gzip
cookie: __refreshToken=HnwZbqZGEOGRjPOhPtgpE0R8zkKWTE9u; dh_user_id=4c1e2720-2090-11f1-8bfe-cdefa134efa5

{"query":"\n    query HomeUpcomingMatchesV2($slug: String!, $pageCount: Int!, $pageSize: Int!, $category: HomeUpcomingMatchesCategory!, $shouldShowPinnedMatchesInRST: Boolean) {\n  site(slug: $slug) {\n    matchCentre(\n      page: $pageCount\n      pageSize: $pageSize\n      category: $category\n      shouldShowPinnedMatchesInRST: $shouldShowPinnedMatchesInRST\n    ) {\n      edges {\n        id\n        startTime\n        matchPrizeInfo {\n          amountInWords\n          isGuaranteedPlus\n          title\n        }\n        status\n        lineupStatus\n        squads {\n          id\n          shortName\n          flag {\n            src\n          }\n          squadColorPalette\n        }\n        squadBigPlayerImages {\n          id\n          imageUrl\n        }\n        tour {\n          id\n          name\n        }\n      }\n    }\n  }\n}\n    ","variables":{"slug":"cricket","pageCount":1,"pageSize":50,"category":"RST","shouldShowPinnedMatchesInRST":true}}

* 即将开赛的赛事
*/
export async function POST(request: Request) {
	const body = await request.json();
	const { query, variables } = body;

	const requestHeaders = extractAndModifyHeaders(request, process.env.WWW_GRAPHAL_URL || '');
	
	if (process.env.WWW_GRAPHAL_URL) {
		// Use real API to fetch data
		const apiURL = process.env.WWW_GRAPHAL_URL + "/graphql/query/react-native/home-upcoming-matches-v2";
		try {
			const response = await fetch(apiURL, {
				method: 'POST',
				headers: requestHeaders,
				body: JSON.stringify({
					query,
					variables
				})
			});
			
			if (!response.ok) {
				throw new Error(`API request failed: ${response.status}`);
			}
			
			const data = await response.json();

			console.log("upcomingMatchesV2", JSON.stringify(data));

			return NextResponse.json(data);
		} catch (error) {
			console.error(`API request failed. URL: ${apiURL}, error: `, error);
			// Fall back to mock data if API fails
		}
	}
	
	// Mock data fallback
	return NextResponse.json({
		"data": {
			"site": {
				"matchCentre": {
					"edges": [{
						"id": 112992,
						"startTime": "2026-03-16T01:30:00.000Z",
						"matchPrizeInfo": {
							"amountInWords": "",
							"isGuaranteedPlus": false,
							"title": ""
						},
						"status": "NOT_STARTED",
						"lineupStatus": "LINEUP_EXPECTED",
						"squads": [{
							"id": 7029,
							"shortName": "MAL",
							"flag": [{
								"src": "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/FC-MALY@2x.png"
							}],
							"squadColorPalette": "#ffd800"
						}, {
							"id": 19,
							"shortName": "BAH",
							"flag": [{
								"src": "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/BAH-CR1@2x.png"
							}],
							"squadColorPalette": "#ea4d5e"
						}],
						"squadBigPlayerImages": [{
							"id": 7029,
							"imageUrl": "https://d13ir53smqqeyp.cloudfront.net/player-images/partner-image/home/QuettaQavalryright.png"
						}, {
							"id": 19,
							"imageUrl": "https://d13ir53smqqeyp.cloudfront.net/player-images/partner-image/home/Oman_Left.png"
						}],
						"tour": {
							"id": 5390,
							"name": "Malaysia vs Bahrain OD"
						}
					}, {
						"id": 113005,
						"startTime": "2026-03-16T11:15:00.000Z",
						"matchPrizeInfo": {
							"amountInWords": "",
							"isGuaranteedPlus": false,
							"title": ""
						},
						"status": "NOT_STARTED",
						"lineupStatus": "LINEUP_EXPECTED",
						"squads": [{
							"id": 6633,
							"shortName": "ABB",
							"flag": [{
								"src": "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/DEF-CR13@2x.png"
							}],
							"squadColorPalette": "#97320F"
						}, {
							"id": 1037,
							"shortName": "LB",
							"flag": [{
								"src": "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/DEF-CR12@2x.png"
							}],
							"squadColorPalette": "#27005E"
						}],
						"squadBigPlayerImages": [{
							"id": 6633,
							"imageUrl": ""
						}, {
							"id": 1037,
							"imageUrl": null
						}],
						"tour": {
							"id": 5393,
							"name": "Pakistan National T20 Cup"
						}
					}, {
						"id": 112971,
						"startTime": "2026-03-16T14:00:00.000Z",
						"matchPrizeInfo": {
							"amountInWords": "",
							"isGuaranteedPlus": false,
							"title": ""
						},
						"status": "NOT_STARTED",
						"lineupStatus": "LINEUP_EXPECTED",
						"squads": [{
							"id": 8256,
							"shortName": "ICN",
							"flag": [{
								"src": "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/DEF-CR3@2x.png"
							}],
							"squadColorPalette": "#80081C"
						}, {
							"id": 6580,
							"shortName": "SSS",
							"flag": [{
								"src": "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/DEF-CR8@2x.png"
							}],
							"squadColorPalette": "#074FB4"
						}],
						"squadBigPlayerImages": [{
							"id": 8256,
							"imageUrl": ""
						}, {
							"id": 6580,
							"imageUrl": ""
						}],
						"tour": {
							"id": 5388,
							"name": "Legends Cricket League"
						}
					}, {
						"id": 112999,
						"startTime": "2026-03-17T01:45:00.000Z",
						"matchPrizeInfo": {
							"amountInWords": "",
							"isGuaranteedPlus": false,
							"title": ""
						},
						"status": "NOT_STARTED",
						"lineupStatus": "LINEUP_EXPECTED",
						"squads": [{
							"id": 707,
							"shortName": "NZ",
							"flag": [{
								"src": "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/NZ-W-CR1@2x.png"
							}],
							"squadColorPalette": "#4c64a7"
						}, {
							"id": 706,
							"shortName": "SA",
							"flag": [{
								"src": "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/SA-W-CR1@2x.png"
							}],
							"squadColorPalette": "#53a784"
						}],
						"squadBigPlayerImages": [{
							"id": 707,
							"imageUrl": "https://d13ir53smqqeyp.cloudfront.net/player-images/partner-image/home/NZ_Right_2709.png"
						}, {
							"id": 706,
							"imageUrl": "https://d13ir53smqqeyp.cloudfront.net/player-images/partner-image/home/SA_Left_2709.png"
						}],
						"tour": {
							"id": 5392,
							"name": "NZ-W vs SA-W T20I"
						}
					}, {
						"id": 112994,
						"startTime": "2026-03-17T06:15:00.000Z",
						"matchPrizeInfo": {
							"amountInWords": "",
							"isGuaranteedPlus": false,
							"title": ""
						},
						"status": "NOT_STARTED",
						"lineupStatus": "LINEUP_EXPECTED",
						"squads": [{
							"id": 186,
							"shortName": "NZ",
							"flag": [{
								"src": "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/NZ-CR1@2x.png"
							}],
							"squadColorPalette": "#4f67a3"
						}, {
							"id": 212,
							"shortName": "SA",
							"flag": [{
								"src": "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/RSA-CR1@2x.png"
							}],
							"squadColorPalette": "#53a784"
						}],
						"squadBigPlayerImages": [{
							"id": 186,
							"imageUrl": "https://d13ir53smqqeyp.cloudfront.net/player-images/partner-image/home/NZ_men_right.png"
						}, {
							"id": 212,
							"imageUrl": "https://d13ir53smqqeyp.cloudfront.net/player-images/partner-image/home/SA_men_left.png"
						}],
						"tour": {
							"id": 5391,
							"name": "New Zealand vs South Africa T20I"
						}
					}]
				}
			}
		}
	});
}
