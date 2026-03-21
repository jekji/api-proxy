import { extractAndModifyHeaders } from '@/lib/changeHeader';
import { NextResponse } from 'next/server';

/**
:method: POST
:path: /graphql/query/react-native/my-matches-v1-query
:authority: www.dream11.com
:scheme: https
accept: application/json
overridesiteid: 1
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
content-length: 1394
accept-encoding: gzip
cookie: __refreshToken=HnwZbqZGEOGRjPOhPtgpE0R8zkKWTE9u; dh_user_id=4c1e2720-2090-11f1-8bfe-cdefa134efa5

{
	"query": "\n    query MyMatchesV1Query($pageNo: Int!, $pageSize: Int!, $status: [MatchStatus], $shouldFetchDefaultTab: Boolean!, $slug: String!, $nextPageStartKey: String) {\n  matches: newHomeMyMatches(\n    pageNo: $pageNo\n    isMatchCarousel: false\n    pageSize: $pageSize\n    statuses: $status\n    slug: $slug\n    nextPageStartKey: $nextPageStartKey\n  ) {\n    myMatchesDefaultTab @include(if: $shouldFetchDefaultTab)\n    edges {\n      ...MatchInfoV1\n    }\n    pageInfo {\n      nextPage\n      nextPageStartKey\n    }\n  }\n}\n    \n    fragment MatchInfoV1 on Match {\n  id\n  startTime\n  status\n  showPlayerImages\n  matchHighlight {\n    text\n    color\n  }\n  squads {\n    ...Squad\n  }\n  name\n  tour {\n    ...TourV1\n  }\n  winningsAmount\n  myMatchesUserTeamsCount\n  myMatchesJoinedContestCount\n  lineupStatus\n  sportInfo {\n    slug\n    wlsId\n    sportIcon\n  }\n}\n    \n\n    fragment Squad on Squad {\n  id\n  name\n  jerseyColor\n  shortName\n  squadColorPalette\n  playerTextBgColor\n  playerTextFontColor\n  fullName\n  flag {\n    src\n    type\n  }\n  flagWithName {\n    src\n    type\n  }\n}\n    \n\n    fragment TourV1 on Tour {\n  id\n  name\n  format\n}\n    ",
	"variables": {
		"slug": "cricket",
		"pageSize": 10,
		"pageNo": 0,
		"status": null,
		"shouldFetchNotifications": true,
		"shouldFetchDefaultTab": true,
		"shouldFetchSportsInfo": false,
		"nextPageStartKey": null
	}
}
	
{
	"query": "\n    query MyMatchesV1Query($pageNo: Int!, $pageSize: Int!, $status: [MatchStatus], $shouldFetchDefaultTab: Boolean!, $slug: String!, $nextPageStartKey: String) {\n  matches: newHomeMyMatches(\n    pageNo: $pageNo\n    isMatchCarousel: false\n    pageSize: $pageSize\n    statuses: $status\n    slug: $slug\n    nextPageStartKey: $nextPageStartKey\n  ) {\n    myMatchesDefaultTab @include(if: $shouldFetchDefaultTab)\n    edges {\n      ...MatchInfoV1\n    }\n    pageInfo {\n      nextPage\n      nextPageStartKey\n    }\n  }\n}\n    \n    fragment MatchInfoV1 on Match {\n  id\n  startTime\n  status\n  showPlayerImages\n  matchHighlight {\n    text\n    color\n  }\n  squads {\n    ...Squad\n  }\n  name\n  tour {\n    ...TourV1\n  }\n  winningsAmount\n  myMatchesUserTeamsCount\n  myMatchesJoinedContestCount\n  lineupStatus\n  sportInfo {\n    slug\n    wlsId\n    sportIcon\n  }\n}\n    \n\n    fragment Squad on Squad {\n  id\n  name\n  jerseyColor\n  shortName\n  squadColorPalette\n  playerTextBgColor\n  playerTextFontColor\n  fullName\n  flag {\n    src\n    type\n  }\n  flagWithName {\n    src\n    type\n  }\n}\n    \n\n    fragment TourV1 on Tour {\n  id\n  name\n  format\n}\n    ",
	"variables": {
		"slug": "cricket",
		"pageNo": 0,
		"status": ["NOT_STARTED", "UP_COMING"],
		"pageSize": 10,
		"shouldFetchNotifications": true,
		"shouldFetchDefaultTab": false,
		"shouldFetchSportsInfo": false
	}
}

{
	"query": "\n    query MyMatchesV1Query($pageNo: Int!, $pageSize: Int!, $status: [MatchStatus], $shouldFetchDefaultTab: Boolean!, $slug: String!, $nextPageStartKey: String) {\n  matches: newHomeMyMatches(\n    pageNo: $pageNo\n    isMatchCarousel: false\n    pageSize: $pageSize\n    statuses: $status\n    slug: $slug\n    nextPageStartKey: $nextPageStartKey\n  ) {\n    myMatchesDefaultTab @include(if: $shouldFetchDefaultTab)\n    edges {\n      ...MatchInfoV1\n    }\n    pageInfo {\n      nextPage\n      nextPageStartKey\n    }\n  }\n}\n    \n    fragment MatchInfoV1 on Match {\n  id\n  startTime\n  status\n  showPlayerImages\n  matchHighlight {\n    text\n    color\n  }\n  squads {\n    ...Squad\n  }\n  name\n  tour {\n    ...TourV1\n  }\n  winningsAmount\n  myMatchesUserTeamsCount\n  myMatchesJoinedContestCount\n  lineupStatus\n  sportInfo {\n    slug\n    wlsId\n    sportIcon\n  }\n}\n    \n\n    fragment Squad on Squad {\n  id\n  name\n  jerseyColor\n  shortName\n  squadColorPalette\n  playerTextBgColor\n  playerTextFontColor\n  fullName\n  flag {\n    src\n    type\n  }\n  flagWithName {\n    src\n    type\n  }\n}\n    \n\n    fragment TourV1 on Tour {\n  id\n  name\n  format\n}\n    ",
	"variables": {
		"slug": "cricket",
		"pageNo": 0,
		"status": ["ABANDONED", "COMPLETED"],
		"pageSize": 10,
		"shouldFetchNotifications": false,
		"shouldFetchDefaultTab": false,
		"shouldFetchSportsInfo": false
	}
}
*/
export async function POST(request: Request) {
	const body = await request.json();
	const { query, variables } = body;

	const requestHeaders = extractAndModifyHeaders(request, process.env.WWW_GRAPHAL_URL || '');
		
	if (process.env.WWW_GRAPHAL_URL) {
		// Use real API to fetch data
		try {
			const apiURL = process.env.WWW_GRAPHAL_URL + "/graphql/query/react-native/my-matches-v1-query";
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

			console.log("myMatchesV1Query", JSON.stringify(data));

			return NextResponse.json(data);
		} catch (error) {
			console.error('API request error:', error);
			// Fall back to mock data if API fails
		}
	}

	
	// Handle different status patterns from the queries
	let status = "LIVE"; // default
	
	if (variables?.status === null && variables?.shouldFetchDefaultTab === true) {
		// First query - return default tab (LIVE)
		status = "LIVE";
	} else if (Array.isArray(variables?.status)) {
		// Check which status array is being requested
		if (variables.status.includes("NOT_STARTED") || variables.status.includes("UP_COMING")) {
			status = "UP_COMING";
		} else if (variables.status.includes("COMPLETED") || variables.status.includes("ABANDONED")) {
			status = "COMPLETED";
		}
	}
	
	// Return different mock data based on status
	let mockData;
	
	if (status === "LIVE") {
		mockData = {
			"data": {
				"matches": {
					"myMatchesDefaultTab": "LIVE",
					"edges": [{
						"id": 112970,
						"startTime": "2026-03-15T14:00:00.000Z",
						"status": "IN_PROGRESS",
						"showPlayerImages": true,
						"matchHighlight": null,
						"squads": [{
							"id": 7456,
							"name": "KSO",
							"jerseyColor": "",
							"shortName": "KSO",
							"squadColorPalette": "#1ba10e",
							"playerTextBgColor": "#F0F3F7",
							"playerTextFontColor": "#202C3D",
							"fullName": "Konark Suryas Odisha",
							"flag": [{
								"src": "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/DEF-CR15@2x.png",
								"type": null
							}],
							"flagWithName": [{
								"src": "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/DEF-CR15@2x-BIG.png",
								"type": null
							}]
						}, {
							"id": 8257,
							"name": "RRP",
							"jerseyColor": "",
							"shortName": "RRP",
							"squadColorPalette": "#80081C",
							"playerTextBgColor": "#364150",
							"playerTextFontColor": "#FFFFFF",
							"fullName": "Royal Riders Punjab",
							"flag": [{
								"src": "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/DEF-CR16@2x.png",
								"type": null
							}],
							"flagWithName": [{
								"src": "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/DEF-CR16@2x-BIG.png",
								"type": null
							}]
						}],
						"name": "KSO vs RRP",
						"tour": {
							"id": 5388,
							"name": "Legends Cricket League",
							"format": "T20"
						},
						"winningsAmount": 0,
						"myMatchesUserTeamsCount": 1,
						"myMatchesJoinedContestCount": 1,
						"lineupStatus": null,
						"sportInfo": {
							"slug": "cricket",
							"wlsId": "1",
							"sportIcon": "https://d13ir53smqqeyp.cloudfront.net/contain/new_home/Illustrations%20%26%20Icons/sports%20selector/Active%20icons/cricket-filled.webp"
						}
					}],
					"pageInfo": {
						"nextPage": null,
						"nextPageStartKey": null
					}
				}
			}
		};
	} else if (status === "UP_COMING") {
		mockData = {
			"data": {
				"matches": {
					"edges": [],
					"pageInfo": {
						"nextPage": null,
						"nextPageStartKey": null
					}
				}
			}
		};
	} else {
		// COMPLETED
		mockData = {
			"data": {
				"matches": {
					"edges": [{
						"id": 112993,
						"startTime": "2026-03-15T06:15:00.000Z",
						"status": "COMPLETED",
						"showPlayerImages": true,
						"matchHighlight": null,
						"squads": [{
							"id": 186,
							"name": "NZ",
							"jerseyColor": "#242424",
							"shortName": "NZ",
							"squadColorPalette": "#4f67a3",
							"playerTextBgColor": "#F0F3F7",
							"playerTextFontColor": "#202C3D",
							"fullName": "New Zealand",
							"flag": [{
								"src": "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/NZ-CR1@2x.png",
								"type": null
							}],
							"flagWithName": [{
								"src": "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/NZ-CR1@2x-BIG.png",
								"type": null
							}]
						}, {
							"id": 212,
							"name": "SA",
							"jerseyColor": "#10926B",
							"shortName": "SA",
							"squadColorPalette": "#53a784",
							"playerTextBgColor": "#364150",
							"playerTextFontColor": "#FFFFFF",
							"fullName": "South Africa",
							"flag": [{
								"src": "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/RSA-CR1@2x.png",
								"type": null
							}],
							"flagWithName": [{
								"src": "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/RSA-CR1@2x-BIG.png",
								"type": null
							}]
						}],
						"name": "NZ vs SA",
						"tour": {
							"id": 5391,
							"name": "New Zealand vs South Africa T20I",
							"format": "T20"
						},
						"winningsAmount": 0,
						"myMatchesUserTeamsCount": 2,
						"myMatchesJoinedContestCount": 1,
						"lineupStatus": null,
						"sportInfo": {
							"slug": "cricket",
							"wlsId": "1",
							"sportIcon": "https://d13ir53smqqeyp.cloudfront.net/contain/new_home/Illustrations%20%26%20Icons/sports%20selector/Active%20icons/cricket-filled.webp"
						}
					}],
					"pageInfo": {
						"nextPage": null,
						"nextPageStartKey": null
					}
				}
			}
		};
	}

	return NextResponse.json(mockData);
}
