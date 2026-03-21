import { NextResponse } from 'next/server';
import { BASEHEADERS } from '@/constants';

/**
:method: POST
:path: /graphql/query/react-native/home-my-matches-carousel
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
authorization: Bearer eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCIsInR5cCI6ImF0K2p3dCIsImtpZCI6IlRqb0FsLVdyZWN3Z3MtZVVvcm5xWWE5Y2x4dyJ9.eyJhdWQiOiJhOEVzRGxQYzNaQ1Znc1VwcHB1YyIsImV4cCI6MTc3MzY3NzY5NiwiaWF0IjoxNzczNTkxMjk2LCJpc3MiOiJkcmVhbTExLmNvbSIsInN1YiI6IjMxNzE1MjMzMCIsImp0aSI6ImhtT2tmc0NCQVM5d2JkQUhiSDVva3lCOW84OVpqdVRRIiwidGlkIjoiMiIsInJmdF9pZCI6IjBGQkFEMUQ5RjFENzdGOTlFQjdFNzAzM0IzQ0RFREVGIiwiY2xpZW50X2lkIjoiYThFc0RsUGMzWkNWZ3NVcHBwdWMiLCJzY29wZSI6ImRyZWFtMTE6YWxsIiwiYW1yIjpbIm90cCJdLCJjb3VudHJ5Q29kZSI6IklOIn0.iZVontVwx0-WkQErCRaKQ9Eum31miMaGnsO1uO4KOiuKxnGxl2nx_guM8k4pL0R8R7WRhTebkXXlC-WUb039AGU0kq6U-Hafrx40Pss3bsJ76AKG8Ygi8SN38-D3g-oXanhGdnnH0NPuoVDCUfBL5M9UmkIzvH_VwPOoJFCBRtsNoNzmmIN5Ef-YhdNi8sb2fvuXnIkzekJ0KbhxtpCTA6xcrFn3uemmJPyhyzg6lDU4pvDYAGpDiJh0GTnk1RXtDj9qqkloX4jSrJ5HQkqIBUlTtEKykImGSJz9ob-oXbpkajc0kcQKrCltfclX0eOHPHy98lQTgpvOtg6ulY6nvQ
content-type: application/json
content-length: 1006
accept-encoding: gzip

{"query":"\n    query HomeMyMatchesCarousel($showJoinCount: Boolean = true, $carouselClickThreshold: Int = 1) {\n  matches: newHomeMyMatches(\n    pageNo: 0\n    first: 5\n    isMatchCarousel: true\n    carouselClickThreshold: $carouselClickThreshold\n  ) {\n    edges {\n      ...MyMatchesMatchData\n    }\n  }\n}\n    \n    fragment MyMatchesMatchData on Match {\n  id\n  name\n  startTime\n  matchDetail\n  myMatchesJoinedContestCount @include(if: $showJoinCount)\n  winningsAmount @include(if: $showJoinCount)\n  myMatchesUserTeamsCount @include(if: $showJoinCount)\n  status\n  lineupStatus\n  isFantasyLiveMatchAvailable\n  matchHighlight {\n    text\n    color\n  }\n  squads {\n    squadColorPalette\n    id\n    name\n    shortName\n    flag {\n      src\n    }\n    flagWithName {\n      src\n    }\n    fullName\n  }\n  tour {\n    id\n    name\n    format\n    tourDisplayTag\n  }\n  sportInfo {\n    slug\n    wlsId\n  }\n}\n    ","variables":{"showJoinCount":true,"carouselClickThreshold":1}}
 */
export async function POST(request: Request) {
	const body = await request.json();
	const { query, variables } = body;

	// Extract headers from the incoming request
	const requestHeaders = Object.fromEntries(request.headers.entries());

	console.log(`Origin Headers: ${JSON.stringify(requestHeaders)}`);

	requestHeaders['atlas'] = 'IN';
	requestHeaders['locale'] = 'en-US';

	requestHeaders['host'] = process.env.API_URL.replace('https://', '').replace('http://', '');

	// 移除不需要的headers
	const headersToRemove = [
		'cdn-loop',
		'cf-connecting-ip',
		'cf-ipcountry',
		'cf-ray',
		'cf-visitor',
		'x-forwarded-for',
		'x-forwarded-host',
		'x-forwarded-port',
		'x-forwarded-proto',
		'x-original-uri',
		'x-real-ip',
		'connection'
	];

	headersToRemove.forEach(key => delete requestHeaders[key]);

	console.log(`Changed Headers: ${JSON.stringify(requestHeaders)}`);
	
	if (process.env.WWW_GRAPHAL_URL) {
		// Use real API to fetch data
		try {
			const apiURL = process.env.WWW_GRAPHAL_URL + "/graphql/query/react-native/home-my-matches-carousel";
			const response = await fetch(apiURL, {
				method: 'POST',
				headers: requestHeaders,
				body: JSON.stringify({
					query,
					variables
				})
			});
			
			if (!response.ok) {
				throw new Error(`API request failed: ${response.status}, url: ${apiURL}, headers: ${JSON.stringify(requestHeaders)}`);
			}
			
			const data = await response.json();

			console.log("myMatchesCarousel", JSON.stringify(data));

			return NextResponse.json(data);
		} catch (error) {
			console.error('API request error:', error);
			// Fall back to mock data if API fails
		}
	}
	
	return NextResponse.json({
		"data": {
			"matches": {
				"edges": [{
					"id": 112970,
					"name": "KSO vs RRP",
					"startTime": "2026-03-15T14:00:00.000Z",
					"matchDetail": null,
					"myMatchesJoinedContestCount": 1,
					"winningsAmount": 0,
					"myMatchesUserTeamsCount": 1,
					"status": "IN_PROGRESS",
					"lineupStatus": null,
					"isFantasyLiveMatchAvailable": null,
					"matchHighlight": null,
					"squads": [{
						"squadColorPalette": "#1ba10e",
						"id": 7456,
						"name": "KSO",
						"shortName": "KSO",
						"flag": [{
							"src": "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/DEF-CR15@2x.png"
						}],
						"flagWithName": [{
							"src": "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/DEF-CR15@2x-BIG.png"
						}],
						"fullName": "Konark Suryas Odisha"
					}, {
						"squadColorPalette": "#80081C",
						"id": 8257,
						"name": "RRP",
						"shortName": "RRP",
						"flag": [{
							"src": "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/DEF-CR16@2x.png"
						}],
						"flagWithName": [{
							"src": "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/DEF-CR16@2x-BIG.png"
						}],
						"fullName": "Royal Riders Punjab"
					}],
					"tour": {
						"id": 5388,
						"name": "Legends Cricket League",
						"format": "T20",
						"tourDisplayTag": null
					},
					"sportInfo": {
						"slug": "cricket",
						"wlsId": "1"
					}
				}, {
					"id": 112993,
					"name": "NZ vs SA",
					"startTime": "2026-03-15T06:15:00.000Z",
					"matchDetail": null,
					"myMatchesJoinedContestCount": 1,
					"winningsAmount": 0,
					"myMatchesUserTeamsCount": 2,
					"status": "COMPLETED",
					"lineupStatus": null,
					"isFantasyLiveMatchAvailable": null,
					"matchHighlight": null,
					"squads": [{
						"squadColorPalette": "#4f67a3",
						"id": 186,
						"name": "NZ",
						"shortName": "NZ",
						"flag": [{
							"src": "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/NZ-CR1@2x.png"
						}],
						"flagWithName": [{
							"src": "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/NZ-CR1@2x-BIG.png"
						}],
						"fullName": "New Zealand"
					}, {
						"squadColorPalette": "#53a784",
						"id": 212,
						"name": "SA",
						"shortName": "SA",
						"flag": [{
							"src": "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/RSA-CR1@2x.png"
						}],
						"flagWithName": [{
							"src": "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/RSA-CR1@2x-BIG.png"
						}],
						"fullName": "South Africa"
					}],
					"tour": {
						"id": 5391,
						"name": "New Zealand vs South Africa T20I",
						"format": "T20",
						"tourDisplayTag": null
					},
					"sportInfo": {
						"slug": "cricket",
						"wlsId": "1"
					}
				}]
			}
		}
	});
}
