import { NextResponse } from 'next/server';

/**
:method: POST
:path: /graphql/query/react-native/personalised-scorecard-query
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
content-length: 820
accept-encoding: gzip

{"query":"\n    query PersonalisedScorecardQuery($site: String!, $matchId: Int!, $contestId: ID!, $isPlaying: Boolean!, $includeContestStats: Boolean!, $tourId: Int!, $userId: Int!) {\n  match(site: $site, id: $matchId) {\n    listTeams(tourId: $tourId, matchId: $matchId, userId: $userId) {\n      id\n      points\n    }\n    contest(id: $contestId) @include(if: $includeContestStats) {\n      myTeams {\n        id\n        points\n      }\n    }\n    players(isPlaying: $isPlaying) {\n      artwork {\n        src\n      }\n      id\n      rolesInTeams {\n        teamId\n        role {\n          shortName\n        }\n      }\n      selectedInTeams\n    }\n  }\n}\n    ","variables":{"site":"cricket","matchId":112970,"contestId":"-1","isPlaying":true,"includeContestStats":false,"tourId":5388,"userId":317152330}}

{
	"query": "\n    query PersonalisedScorecardQuery($site: String!, $matchId: Int!, $contestId: ID!, $isPlaying: Boolean!, $includeContestStats: Boolean!, $tourId: Int!, $userId: Int!) {\n  match(site: $site, id: $matchId) {\n    listTeams(tourId: $tourId, matchId: $matchId, userId: $userId) {\n      id\n      points\n    }\n    contest(id: $contestId) @include(if: $includeContestStats) {\n      myTeams {\n        id\n        points\n      }\n    }\n    players(isPlaying: $isPlaying) {\n      artwork {\n        src\n      }\n      id\n      rolesInTeams {\n        teamId\n        role {\n          shortName\n        }\n      }\n      selectedInTeams\n    }\n  }\n}\n    ",
	"variables": {
		"site": "cricket",
		"matchId": 112993,
		"contestId": "-1",
		"isPlaying": true,
		"includeContestStats": false,
		"tourId": 5391,
		"userId": 317152330
	}
}

*/
export async function POST(request: Request) {
	const body = await request.json();
	const { variables } = body;

	const matchId = variables?.matchId;

	if (matchId == 112970) {
		return NextResponse.json({
			"data": {
				"match": {
					"listTeams": [{
						"id": 1,
						"points": 465.5
					}],
					"players": [{
						"artwork": [{
							"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/partner-image/MenGoogle/907.png"
						}],
						"id": 907,
						"rolesInTeams": [],
						"selectedInTeams": []
					}, {
						"artwork": [{
							"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/partner-image/MenGoogle/716.png"
						}],
						"id": 716,
						"rolesInTeams": [{
							"teamId": 1,
							"role": {
								"shortName": "C"
							}
						}],
						"selectedInTeams": [1]
					}, {
						"artwork": [{
							"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image-men.png"
						}],
						"id": 1004,
						"rolesInTeams": [],
						"selectedInTeams": []
					}, {
						"artwork": [{
							"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image-men.png"
						}],
						"id": 86261,
						"rolesInTeams": [{
							"teamId": 1,
							"role": null
						}],
						"selectedInTeams": [1]
					}, {
						"artwork": [{
							"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image-men.png"
						}],
						"id": 1158,
						"rolesInTeams": [],
						"selectedInTeams": []
					}, {
						"artwork": [{
							"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image-men.png"
						}],
						"id": 9034,
						"rolesInTeams": [],
						"selectedInTeams": []
					}, {
						"artwork": [{
							"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image-men.png"
						}],
						"id": 8749,
						"rolesInTeams": [],
						"selectedInTeams": []
					}, {
						"artwork": [{
							"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image-men.png"
						}],
						"id": 1312,
						"rolesInTeams": [],
						"selectedInTeams": []
					}, {
						"artwork": [{
							"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/partner-image/Men/639.png"
						}],
						"id": 639,
						"rolesInTeams": [],
						"selectedInTeams": []
					}, {
						"artwork": [{
							"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image-men.png"
						}],
						"id": 183327,
						"rolesInTeams": [],
						"selectedInTeams": []
					}, {
						"artwork": [{
							"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image-men.png"
						}],
						"id": 1267,
						"rolesInTeams": [],
						"selectedInTeams": []
					}, {
						"artwork": [{
							"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image-men.png"
						}],
						"id": 290,
						"rolesInTeams": [],
						"selectedInTeams": []
					}, {
						"artwork": [{
							"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/partner-image/MenGoogle/1002.png"
						}],
						"id": 1002,
						"rolesInTeams": [{
							"teamId": 1,
							"role": {
								"shortName": "VC"
							}
						}],
						"selectedInTeams": [1]
					}, {
						"artwork": [{
							"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image-men.png"
						}],
						"id": 1393,
						"rolesInTeams": [],
						"selectedInTeams": []
					}, {
						"artwork": [{
							"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image-men.png"
						}],
						"id": 3067,
						"rolesInTeams": [],
						"selectedInTeams": []
					}, {
						"artwork": [{
							"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image-men.png"
						}],
						"id": 360,
						"rolesInTeams": [],
						"selectedInTeams": []
					}, {
						"artwork": [{
							"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image-men.png"
						}],
						"id": 701,
						"rolesInTeams": [],
						"selectedInTeams": []
					}, {
						"artwork": [{
							"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image-men.png"
						}],
						"id": 999,
						"rolesInTeams": [{
							"teamId": 1,
							"role": null
						}],
						"selectedInTeams": [1]
					}, {
						"artwork": [{
							"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image-men.png"
						}],
						"id": 1563,
						"rolesInTeams": [],
						"selectedInTeams": []
					}, {
						"artwork": [{
							"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image-men.png"
						}],
						"id": 1114,
						"rolesInTeams": [],
						"selectedInTeams": []
					}, {
						"artwork": [{
							"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/partner-image/MenGoogle/1281.png"
						}],
						"id": 1281,
						"rolesInTeams": [{
							"teamId": 1,
							"role": null
						}],
						"selectedInTeams": [1]
					}, {
						"artwork": [{
							"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image-men.png"
						}],
						"id": 6569,
						"rolesInTeams": [],
						"selectedInTeams": []
					}, {
						"artwork": [{
							"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image-men.png"
						}],
						"id": 16138,
						"rolesInTeams": [],
						"selectedInTeams": []
					}, {
						"artwork": [{
							"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image-men.png"
						}],
						"id": 8748,
						"rolesInTeams": [{
							"teamId": 1,
							"role": null
						}],
						"selectedInTeams": [1]
					}, {
						"artwork": [{
							"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image-men.png"
						}],
						"id": 1565,
						"rolesInTeams": [],
						"selectedInTeams": []
					}, {
						"artwork": [{
							"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image-men.png"
						}],
						"id": 185218,
						"rolesInTeams": [],
						"selectedInTeams": []
					}, {
						"artwork": [{
							"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image-men.png"
						}],
						"id": 432,
						"rolesInTeams": [],
						"selectedInTeams": []
					}, {
						"artwork": [{
							"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image-men.png"
						}],
						"id": 177500,
						"rolesInTeams": [],
						"selectedInTeams": []
					}, {
						"artwork": [{
							"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image-men.png"
						}],
						"id": 762,
						"rolesInTeams": [{
							"teamId": 1,
							"role": null
						}],
						"selectedInTeams": [1]
					}, {
						"artwork": [{
							"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image-men.png"
						}],
						"id": 2100,
						"rolesInTeams": [],
						"selectedInTeams": []
					}, {
						"artwork": [{
							"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image-men.png"
						}],
						"id": 185033,
						"rolesInTeams": [],
						"selectedInTeams": []
					}, {
						"artwork": [{
							"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image-men.png"
						}],
						"id": 1115,
						"rolesInTeams": [],
						"selectedInTeams": []
					}, {
						"artwork": [{
							"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image-men.png"
						}],
						"id": 5982,
						"rolesInTeams": [{
							"teamId": 1,
							"role": null
						}],
						"selectedInTeams": [1]
					}, {
						"artwork": [{
							"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image-men.png"
						}],
						"id": 1512,
						"rolesInTeams": [{
							"teamId": 1,
							"role": null
						}],
						"selectedInTeams": [1]
					}, {
						"artwork": [{
							"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image-men.png"
						}],
						"id": 28796,
						"rolesInTeams": [],
						"selectedInTeams": []
					}, {
						"artwork": [{
							"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image-men.png"
						}],
						"id": 72192,
						"rolesInTeams": [],
						"selectedInTeams": []
					}, {
						"artwork": [{
							"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image-men.png"
						}],
						"id": 1573,
						"rolesInTeams": [],
						"selectedInTeams": []
					}, {
						"artwork": [{
							"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image-men.png"
						}],
						"id": 1891,
						"rolesInTeams": [{
							"teamId": 1,
							"role": null
						}],
						"selectedInTeams": [1]
					}, {
						"artwork": [{
							"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/partner-image/MenGoogle/10.png"
						}],
						"id": 10,
						"rolesInTeams": [],
						"selectedInTeams": []
					}, {
						"artwork": [{
							"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image-men.png"
						}],
						"id": 894,
						"rolesInTeams": [],
						"selectedInTeams": []
					}, {
						"artwork": [{
							"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image-men.png"
						}],
						"id": 11737,
						"rolesInTeams": [{
							"teamId": 1,
							"role": null
						}],
						"selectedInTeams": [1]
					}, {
						"artwork": [{
							"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image-men.png"
						}],
						"id": 8930,
						"rolesInTeams": [],
						"selectedInTeams": []
					}]
				}
			}
		});
	}

	// 112993
	return NextResponse.json({
		"data": {
			"match": {
				"listTeams": [{
					"id": 1,
					"points": 413
				}, {
					"id": 2,
					"points": 411.5
				}],
				"players": [{
					"artwork": [{
						"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/partner-image/MenGoogle/8449.png"
					}],
					"id": 8449,
					"rolesInTeams": [{
						"teamId": 1,
						"role": null
					}, {
						"teamId": 2,
						"role": null
					}],
					"selectedInTeams": [1, 2]
				}, {
					"artwork": [{
						"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/partner-image/MenGoogle/1441.png"
					}],
					"id": 1441,
					"rolesInTeams": [],
					"selectedInTeams": []
				}, {
					"artwork": [{
						"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/partner-image/MenGoogle/8504.png"
					}],
					"id": 8504,
					"rolesInTeams": [],
					"selectedInTeams": []
				}, {
					"artwork": [{
						"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/partner-image/MenGoogle/3653.png"
					}],
					"id": 3653,
					"rolesInTeams": [{
						"teamId": 1,
						"role": null
					}, {
						"teamId": 2,
						"role": {
							"shortName": "VC"
						}
					}],
					"selectedInTeams": [1, 2]
				}, {
					"artwork": [{
						"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/partner-image/MenGoogle/9220.png"
					}],
					"id": 9220,
					"rolesInTeams": [{
						"teamId": 1,
						"role": null
					}, {
						"teamId": 2,
						"role": null
					}],
					"selectedInTeams": [1, 2]
				}, {
					"artwork": [{
						"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/partner-image/MenGoogle/86740.png"
					}],
					"id": 86740,
					"rolesInTeams": [],
					"selectedInTeams": []
				}, {
					"artwork": [{
						"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/partner-image/Men2025/1708.png"
					}],
					"id": 1708,
					"rolesInTeams": [],
					"selectedInTeams": []
				}, {
					"artwork": [{
						"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/partner-image/MenGoogle/4719.png"
					}],
					"id": 4719,
					"rolesInTeams": [],
					"selectedInTeams": []
				}, {
					"artwork": [{
						"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/partner-image/MenGoogle/9243.png"
					}],
					"id": 9243,
					"rolesInTeams": [{
						"teamId": 1,
						"role": {
							"shortName": "VC"
						}
					}, {
						"teamId": 2,
						"role": null
					}],
					"selectedInTeams": [1, 2]
				}, {
					"artwork": [{
						"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/partner-image/MenGoogle/58303.png"
					}],
					"id": 58303,
					"rolesInTeams": [],
					"selectedInTeams": []
				}, {
					"artwork": [{
						"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image-men.png"
					}],
					"id": 150536,
					"rolesInTeams": [],
					"selectedInTeams": []
				}, {
					"artwork": [{
						"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/partner-image/MenGoogle/8417.png"
					}],
					"id": 8417,
					"rolesInTeams": [{
						"teamId": 1,
						"role": null
					}],
					"selectedInTeams": [1]
				}, {
					"artwork": [{
						"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/partner-image/MenGoogle/1809.png"
					}],
					"id": 1809,
					"rolesInTeams": [{
						"teamId": 1,
						"role": {
							"shortName": "C"
						}
					}, {
						"teamId": 2,
						"role": {
							"shortName": "C"
						}
					}],
					"selectedInTeams": [1, 2]
				}, {
					"artwork": [{
						"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/partner-image/MenGoogle/1213.png"
					}],
					"id": 1213,
					"rolesInTeams": [{
						"teamId": 2,
						"role": null
					}],
					"selectedInTeams": [2]
				}, {
					"artwork": [{
						"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/partner-image/MenGoogle/21594.png"
					}],
					"id": 21594,
					"rolesInTeams": [],
					"selectedInTeams": []
				}, {
					"artwork": [{
						"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/partner-image/MenGoogle/94811.png"
					}],
					"id": 94811,
					"rolesInTeams": [{
						"teamId": 1,
						"role": null
					}],
					"selectedInTeams": [1]
				}, {
					"artwork": [{
						"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/partner-image/MenGoogle/156287.png"
					}],
					"id": 156287,
					"rolesInTeams": [],
					"selectedInTeams": []
				}, {
					"artwork": [{
						"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image-men.png"
					}],
					"id": 15190,
					"rolesInTeams": [],
					"selectedInTeams": []
				}, {
					"artwork": [{
						"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/partner-image/MenGoogle/28747.png"
					}],
					"id": 28747,
					"rolesInTeams": [],
					"selectedInTeams": []
				}, {
					"artwork": [{
						"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/partner-image/MenGoogle/85637.png"
					}],
					"id": 85637,
					"rolesInTeams": [{
						"teamId": 1,
						"role": null
					}, {
						"teamId": 2,
						"role": null
					}],
					"selectedInTeams": [1, 2]
				}, {
					"artwork": [{
						"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/partner-image/MenGoogle/1981.png"
					}],
					"id": 1981,
					"rolesInTeams": [],
					"selectedInTeams": []
				}, {
					"artwork": [{
						"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/partner-image/MenGoogle/9236.png"
					}],
					"id": 9236,
					"rolesInTeams": [{
						"teamId": 1,
						"role": null
					}, {
						"teamId": 2,
						"role": null
					}],
					"selectedInTeams": [1, 2]
				}, {
					"artwork": [{
						"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/partner-image/MenGoogle/83402.png"
					}],
					"id": 83402,
					"rolesInTeams": [],
					"selectedInTeams": []
				}, {
					"artwork": [{
						"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/partner-image/MenGoogle/9219.png"
					}],
					"id": 9219,
					"rolesInTeams": [],
					"selectedInTeams": []
				}, {
					"artwork": [{
						"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/partner-image/MenGoogle/1666.png"
					}],
					"id": 1666,
					"rolesInTeams": [],
					"selectedInTeams": []
				}, {
					"artwork": [{
						"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image-men.png"
					}],
					"id": 28813,
					"rolesInTeams": [],
					"selectedInTeams": []
				}, {
					"artwork": [{
						"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/partner-image/MenGoogle/1915.png"
					}],
					"id": 1915,
					"rolesInTeams": [],
					"selectedInTeams": []
				}, {
					"artwork": [{
						"src": "https://d11.s3.amazonaws.com/player-images/partner-image/MenGoogle2026/8426.png"
					}],
					"id": 8426,
					"rolesInTeams": [{
						"teamId": 2,
						"role": null
					}],
					"selectedInTeams": [2]
				}, {
					"artwork": [{
						"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/partner-image/MenGoogle/1704.png"
					}],
					"id": 1704,
					"rolesInTeams": [{
						"teamId": 2,
						"role": null
					}],
					"selectedInTeams": [2]
				}, {
					"artwork": [{
						"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/partner-image/MenGoogle/33330.png"
					}],
					"id": 33330,
					"rolesInTeams": [{
						"teamId": 1,
						"role": null
					}],
					"selectedInTeams": [1]
				}, {
					"artwork": [{
						"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/partner-image/MenGoogle/9248.png"
					}],
					"id": 9248,
					"rolesInTeams": [],
					"selectedInTeams": []
				}, {
					"artwork": [{
						"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/partner-image/MenGoogle/15209.png"
					}],
					"id": 15209,
					"rolesInTeams": [{
						"teamId": 1,
						"role": null
					}, {
						"teamId": 2,
						"role": null
					}],
					"selectedInTeams": [1, 2]
				}, {
					"artwork": [{
						"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image-men.png"
					}],
					"id": 158032,
					"rolesInTeams": [],
					"selectedInTeams": []
				}]
			}
		}
	});
}
