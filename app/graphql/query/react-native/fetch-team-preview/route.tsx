import { NextResponse } from 'next/server';

/**
:method: POST
:path: /graphql/query/react-native/fetch-team-preview
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
content-length: 1906
accept-encoding: gzip
cookie: __refreshToken=HnwZbqZGEOGRjPOhPtgpE0R8zkKWTE9u; dh_user_id=4c1e2720-2090-11f1-8bfe-cdefa134efa5

{
	"query": "\n    query FetchTeamPreview($site: String!, $matchId: Int!, $userId: Int!, $teamId: Int!, $shouldQueryUserTeam: Boolean!, $shouldQuerySharedTeam: Boolean!, $contestId: ID) {\n  site(slug: $site) {\n    playerTypes {\n      id\n      name\n    }\n    id\n    gameId\n    teamCriteria {\n      maxPlayerPerSquad\n      totalCredits\n      totalPlayerCount\n    }\n  }\n  match(site: $site, id: $matchId, contestId: $contestId) {\n    status\n    players {\n      id\n      lineupStatus {\n        status\n        color\n      }\n    }\n    startTime\n    matchHighlight {\n      text\n    }\n    substitutionInfo {\n      teamPreviewText\n      maxSubsAllowed\n      status\n      isTeamCompareActive\n      teamCompareText\n    }\n    participatingTeam(id: $teamId, userId: $userId, contestId: $contestId) @skip(if: $shouldQueryUserTeam) {\n      ...UserTeamData\n    }\n    userTeam(id: $teamId, contestId: $contestId) @include(if: $shouldQueryUserTeam) @skip(if: $shouldQuerySharedTeam) {\n      ...UserTeamData\n    }\n    squads {\n      id\n      name\n      shortName\n      playerTextBgColor\n      playerTextFontColor\n    }\n  }\n  me {\n    id\n    userType\n  }\n}\n    \n    fragment UserTeamData on UserTeam {\n  points\n  name\n  players {\n    id\n    artwork {\n      src\n    }\n    lineupStatus {\n      status\n      color\n    }\n    squad {\n      id\n    }\n    credits\n    name\n    nameInitial\n    points\n    type {\n      id\n      name\n      shortName\n    }\n    inDreamTeam\n    isSelected\n    role {\n      shortName\n    }\n    substituteInfo {\n      isSub\n      priority\n      replacedWith {\n        id\n        role {\n          shortName\n        }\n      }\n    }\n  }\n}\n    ",
	"variables": {
		"matchId": 112970,
		"site": "cricket",
		"teamId": 1,
		"tourId": 5388,
		"shouldQueryUserTeam": true,
		"userId": 317152330,
		"contestId": "",
		"shouldQuerySharedTeam": false
	}
}

{
	"query": "\n    query FetchTeamPreview($site: String!, $matchId: Int!, $userId: Int!, $teamId: Int!, $shouldQueryUserTeam: Boolean!, $shouldQuerySharedTeam: Boolean!, $contestId: ID) {\n  site(slug: $site) {\n    playerTypes {\n      id\n      name\n    }\n    id\n    gameId\n    teamCriteria {\n      maxPlayerPerSquad\n      totalCredits\n      totalPlayerCount\n    }\n  }\n  match(site: $site, id: $matchId, contestId: $contestId) {\n    status\n    players {\n      id\n      lineupStatus {\n        status\n        color\n      }\n    }\n    startTime\n    matchHighlight {\n      text\n    }\n    substitutionInfo {\n      teamPreviewText\n      maxSubsAllowed\n      status\n      isTeamCompareActive\n      teamCompareText\n    }\n    participatingTeam(id: $teamId, userId: $userId, contestId: $contestId) @skip(if: $shouldQueryUserTeam) {\n      ...UserTeamData\n    }\n    userTeam(id: $teamId, contestId: $contestId) @include(if: $shouldQueryUserTeam) @skip(if: $shouldQuerySharedTeam) {\n      ...UserTeamData\n    }\n    squads {\n      id\n      name\n      shortName\n      playerTextBgColor\n      playerTextFontColor\n    }\n  }\n  me {\n    id\n    userType\n  }\n}\n    \n    fragment UserTeamData on UserTeam {\n  points\n  name\n  players {\n    id\n    artwork {\n      src\n    }\n    lineupStatus {\n      status\n      color\n    }\n    squad {\n      id\n    }\n    credits\n    name\n    nameInitial\n    points\n    type {\n      id\n      name\n      shortName\n    }\n    inDreamTeam\n    isSelected\n    role {\n      shortName\n    }\n    substituteInfo {\n      isSub\n      priority\n      replacedWith {\n        id\n        role {\n          shortName\n        }\n      }\n    }\n  }\n}\n    ",
	"variables": {
		"matchId": 112993,
		"site": "cricket",
		"teamId": 1,
		"tourId": 5391,
		"shouldQueryUserTeam": true,
		"userId": 317152330,
		"contestId": "",
		"shouldQuerySharedTeam": false
	}
}

{
	"query": "\n    query FetchTeamPreview($site: String!, $matchId: Int!, $userId: Int!, $teamId: Int!, $shouldQueryUserTeam: Boolean!, $shouldQuerySharedTeam: Boolean!, $contestId: ID) {\n  site(slug: $site) {\n    playerTypes {\n      id\n      name\n    }\n    id\n    gameId\n    teamCriteria {\n      maxPlayerPerSquad\n      totalCredits\n      totalPlayerCount\n    }\n  }\n  match(site: $site, id: $matchId, contestId: $contestId) {\n    status\n    players {\n      id\n      lineupStatus {\n        status\n        color\n      }\n    }\n    startTime\n    matchHighlight {\n      text\n    }\n    substitutionInfo {\n      teamPreviewText\n      maxSubsAllowed\n      status\n      isTeamCompareActive\n      teamCompareText\n    }\n    participatingTeam(id: $teamId, userId: $userId, contestId: $contestId) @skip(if: $shouldQueryUserTeam) {\n      ...UserTeamData\n    }\n    userTeam(id: $teamId, contestId: $contestId) @include(if: $shouldQueryUserTeam) @skip(if: $shouldQuerySharedTeam) {\n      ...UserTeamData\n    }\n    squads {\n      id\n      name\n      shortName\n      playerTextBgColor\n      playerTextFontColor\n    }\n  }\n  me {\n    id\n    userType\n  }\n}\n    \n    fragment UserTeamData on UserTeam {\n  points\n  name\n  players {\n    id\n    artwork {\n      src\n    }\n    lineupStatus {\n      status\n      color\n    }\n    squad {\n      id\n    }\n    credits\n    name\n    nameInitial\n    points\n    type {\n      id\n      name\n      shortName\n    }\n    inDreamTeam\n    isSelected\n    role {\n      shortName\n    }\n    substituteInfo {\n      isSub\n      priority\n      replacedWith {\n        id\n        role {\n          shortName\n        }\n      }\n    }\n  }\n}\n    ",
	"variables": {
		"matchId": 112993,
		"site": "cricket",
		"teamId": 2,
		"tourId": 5391,
		"shouldQueryUserTeam": true,
		"userId": 317152330,
		"contestId": "",
		"shouldQuerySharedTeam": false
	}
}

*/
export async function POST(request: Request) {
	const body = await request.json();
	const { variables } = body;

	const matchId = variables?.matchId;
	const teamId = variables?.teamId;

	console.log("matchId", matchId)
	console.log("teamId", teamId)

	if (matchId == 112970) {
		return NextResponse.json({
			"data": {
				"site": {
					"playerTypes": [{
						"id": 3,
						"name": "Wicket-Keepers"
					}, {
						"id": 1,
						"name": "Batters"
					}, {
						"id": 4,
						"name": "All-Rounders"
					}, {
						"id": 2,
						"name": "Bowlers"
					}],
					"id": 1,
					"gameId": 2,
					"teamCriteria": {
						"maxPlayerPerSquad": 10,
						"totalCredits": 100,
						"totalPlayerCount": 11
					}
				},
				"match": {
					"status": "IN_PROGRESS",
					"players": [{
						"id": 907,
						"lineupStatus": {
							"status": "PLAYING",
							"color": "#00A348"
						}
					}, {
						"id": 716,
						"lineupStatus": {
							"status": "PLAYING",
							"color": "#00A348"
						}
					}, {
						"id": 1004,
						"lineupStatus": {
							"status": "PLAYING",
							"color": "#00A348"
						}
					}, {
						"id": 86261,
						"lineupStatus": {
							"status": "PLAYING",
							"color": "#00A348"
						}
					}, {
						"id": 1158,
						"lineupStatus": {
							"status": "PLAYING",
							"color": "#00A348"
						}
					}, {
						"id": 9034,
						"lineupStatus": {
							"status": "NOT_PLAYING",
							"color": "#DD500F"
						}
					}, {
						"id": 8749,
						"lineupStatus": {
							"status": "PLAYING",
							"color": "#00A348"
						}
					}, {
						"id": 1312,
						"lineupStatus": {
							"status": "PLAYING",
							"color": "#00A348"
						}
					}, {
						"id": 639,
						"lineupStatus": {
							"status": "NOT_PLAYING",
							"color": "#DD500F"
						}
					}, {
						"id": 183327,
						"lineupStatus": {
							"status": "PLAYING",
							"color": "#00A348"
						}
					}, {
						"id": 1267,
						"lineupStatus": {
							"status": "PLAYING",
							"color": "#00A348"
						}
					}, {
						"id": 290,
						"lineupStatus": {
							"status": "X_FACTOR_SUBSTITUTE",
							"color": "#944BF3"
						}
					}, {
						"id": 1002,
						"lineupStatus": {
							"status": "PLAYING",
							"color": "#00A348"
						}
					}, {
						"id": 1393,
						"lineupStatus": {
							"status": "NOT_PLAYING",
							"color": "#DD500F"
						}
					}, {
						"id": 3067,
						"lineupStatus": {
							"status": "PLAYING",
							"color": "#00A348"
						}
					}, {
						"id": 360,
						"lineupStatus": {
							"status": "PLAYING",
							"color": "#00A348"
						}
					}, {
						"id": 701,
						"lineupStatus": {
							"status": "X_FACTOR_SUBSTITUTE",
							"color": "#944BF3"
						}
					}, {
						"id": 999,
						"lineupStatus": {
							"status": "PLAYING",
							"color": "#00A348"
						}
					}, {
						"id": 1563,
						"lineupStatus": {
							"status": "X_FACTOR_SUBSTITUTE",
							"color": "#944BF3"
						}
					}, {
						"id": 1114,
						"lineupStatus": {
							"status": "PLAYING",
							"color": "#00A348"
						}
					}, {
						"id": 1281,
						"lineupStatus": {
							"status": "PLAYING",
							"color": "#00A348"
						}
					}, {
						"id": 6569,
						"lineupStatus": {
							"status": "NOT_PLAYING",
							"color": "#DD500F"
						}
					}, {
						"id": 16138,
						"lineupStatus": {
							"status": "NOT_PLAYING",
							"color": "#DD500F"
						}
					}, {
						"id": 8748,
						"lineupStatus": {
							"status": "PLAYING",
							"color": "#00A348"
						}
					}, {
						"id": 1565,
						"lineupStatus": {
							"status": "PLAYING",
							"color": "#00A348"
						}
					}, {
						"id": 185218,
						"lineupStatus": {
							"status": "NOT_PLAYING",
							"color": "#DD500F"
						}
					}, {
						"id": 432,
						"lineupStatus": {
							"status": "NOT_PLAYING",
							"color": "#DD500F"
						}
					}, {
						"id": 177500,
						"lineupStatus": {
							"status": "X_FACTOR_SUBSTITUTE",
							"color": "#944BF3"
						}
					}, {
						"id": 762,
						"lineupStatus": {
							"status": "X_FACTOR_SUBSTITUTE",
							"color": "#944BF3"
						}
					}, {
						"id": 2100,
						"lineupStatus": {
							"status": "X_FACTOR_SUBSTITUTE",
							"color": "#944BF3"
						}
					}, {
						"id": 185033,
						"lineupStatus": {
							"status": "PLAYING",
							"color": "#00A348"
						}
					}, {
						"id": 1115,
						"lineupStatus": {
							"status": "X_FACTOR_SUBSTITUTE",
							"color": "#944BF3"
						}
					}, {
						"id": 5982,
						"lineupStatus": {
							"status": "NOT_PLAYING",
							"color": "#DD500F"
						}
					}, {
						"id": 1512,
						"lineupStatus": {
							"status": "PLAYING",
							"color": "#00A348"
						}
					}, {
						"id": 28796,
						"lineupStatus": {
							"status": "NOT_PLAYING",
							"color": "#DD500F"
						}
					}, {
						"id": 72192,
						"lineupStatus": {
							"status": "NOT_PLAYING",
							"color": "#DD500F"
						}
					}, {
						"id": 1573,
						"lineupStatus": {
							"status": "PLAYING",
							"color": "#00A348"
						}
					}, {
						"id": 1891,
						"lineupStatus": {
							"status": "NOT_PLAYING",
							"color": "#DD500F"
						}
					}, {
						"id": 10,
						"lineupStatus": {
							"status": "NOT_PLAYING",
							"color": "#DD500F"
						}
					}, {
						"id": 894,
						"lineupStatus": {
							"status": "NOT_PLAYING",
							"color": "#DD500F"
						}
					}, {
						"id": 11737,
						"lineupStatus": {
							"status": "PLAYING",
							"color": "#00A348"
						}
					}, {
						"id": 8930,
						"lineupStatus": {
							"status": "X_FACTOR_SUBSTITUTE",
							"color": "#944BF3"
						}
					}],
					"startTime": "2026-03-15T14:00:00.000Z",
					"matchHighlight": null,
					"substitutionInfo": {
						"teamPreviewText": "",
						"maxSubsAllowed": 4,
						"status": "COMPLETE",
						"isTeamCompareActive": true,
						"teamCompareText": ""
					},
					"userTeam": {
						"points": 532.5,
						"name": "AARONTH CONQUERERS",
						"players": [{
							"id": 716,
							"artwork": [{
								"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/partner-image/MenGoogle/716.png"
							}],
							"lineupStatus": {
								"status": "PLAYING",
								"color": "#00A348"
							},
							"squad": {
								"id": 8257
							},
							"credits": 0,
							"name": "Rishi Dhawan",
							"nameInitial": "R",
							"points": 126,
							"type": {
								"id": 4,
								"name": "ALL",
								"shortName": "ALL"
							},
							"inDreamTeam": false,
							"isSelected": true,
							"role": {
								"shortName": "C"
							},
							"substituteInfo": {
								"isSub": false,
								"priority": 0,
								"replacedWith": null
							}
						}, {
							"id": 762,
							"artwork": [{
								"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image-men.png"
							}],
							"lineupStatus": {
								"status": "X_FACTOR_SUBSTITUTE",
								"color": "#944BF3"
							},
							"squad": {
								"id": 8257
							},
							"credits": 0,
							"name": "Anureet Singh",
							"nameInitial": "A",
							"points": 0,
							"type": {
								"id": 2,
								"name": "BOWL",
								"shortName": "BOWL"
							},
							"inDreamTeam": false,
							"isSelected": true,
							"role": null,
							"substituteInfo": {
								"isSub": false,
								"priority": 0,
								"replacedWith": null
							}
						}, {
							"id": 999,
							"artwork": [{
								"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image-men.png"
							}],
							"lineupStatus": {
								"status": "PLAYING",
								"color": "#00A348"
							},
							"squad": {
								"id": 8257
							},
							"credits": 0,
							"name": "Asghar Afghan",
							"nameInitial": "A",
							"points": 19,
							"type": {
								"id": 1,
								"name": "BAT",
								"shortName": "BAT"
							},
							"inDreamTeam": false,
							"isSelected": true,
							"role": null,
							"substituteInfo": {
								"isSub": false,
								"priority": 0,
								"replacedWith": null
							}
						}, {
							"id": 1002,
							"artwork": [{
								"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/partner-image/MenGoogle/1002.png"
							}],
							"lineupStatus": {
								"status": "PLAYING",
								"color": "#00A348"
							},
							"squad": {
								"id": 8257
							},
							"credits": 0,
							"name": "Mohammad Shahzad",
							"nameInitial": "M",
							"points": 124.5,
							"type": {
								"id": 3,
								"name": "WK",
								"shortName": "WK"
							},
							"inDreamTeam": false,
							"isSelected": true,
							"role": {
								"shortName": "VC"
							},
							"substituteInfo": {
								"isSub": false,
								"priority": 0,
								"replacedWith": null
							}
						}, {
							"id": 1281,
							"artwork": [{
								"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/partner-image/MenGoogle/1281.png"
							}],
							"lineupStatus": {
								"status": "PLAYING",
								"color": "#00A348"
							},
							"squad": {
								"id": 8257
							},
							"credits": 0,
							"name": "Angelo Perera",
							"nameInitial": "A",
							"points": 100,
							"type": {
								"id": 1,
								"name": "BAT",
								"shortName": "BAT"
							},
							"inDreamTeam": false,
							"isSelected": true,
							"role": null,
							"substituteInfo": {
								"isSub": false,
								"priority": 0,
								"replacedWith": null
							}
						}, {
							"id": 1512,
							"artwork": [{
								"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image-men.png"
							}],
							"lineupStatus": {
								"status": "PLAYING",
								"color": "#00A348"
							},
							"squad": {
								"id": 7456
							},
							"credits": 0,
							"name": "Ankit Rajpoot",
							"nameInitial": "A",
							"points": 74,
							"type": {
								"id": 2,
								"name": "BOWL",
								"shortName": "BOWL"
							},
							"inDreamTeam": false,
							"isSelected": true,
							"role": null,
							"substituteInfo": {
								"isSub": false,
								"priority": 0,
								"replacedWith": null
							}
						}, {
							"id": 1891,
							"artwork": [{
								"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image-men.png"
							}],
							"lineupStatus": {
								"status": "NOT_PLAYING",
								"color": "#DD500F"
							},
							"squad": {
								"id": 7456
							},
							"credits": 0,
							"name": "Monu Kumar",
							"nameInitial": "M",
							"points": 0,
							"type": {
								"id": 2,
								"name": "BOWL",
								"shortName": "BOWL"
							},
							"inDreamTeam": false,
							"isSelected": true,
							"role": null,
							"substituteInfo": {
								"isSub": false,
								"priority": 0,
								"replacedWith": null
							}
						}, {
							"id": 5982,
							"artwork": [{
								"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image-men.png"
							}],
							"lineupStatus": {
								"status": "NOT_PLAYING",
								"color": "#DD500F"
							},
							"squad": {
								"id": 7456
							},
							"credits": 0,
							"name": "Akshay Wakhare",
							"nameInitial": "A",
							"points": 0,
							"type": {
								"id": 2,
								"name": "BOWL",
								"shortName": "BOWL"
							},
							"inDreamTeam": false,
							"isSelected": true,
							"role": null,
							"substituteInfo": {
								"isSub": false,
								"priority": 0,
								"replacedWith": null
							}
						}, {
							"id": 8748,
							"artwork": [{
								"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image-men.png"
							}],
							"lineupStatus": {
								"status": "PLAYING",
								"color": "#00A348"
							},
							"squad": {
								"id": 7456
							},
							"credits": 0,
							"name": "Chirag Gandhi",
							"nameInitial": "C",
							"points": 17,
							"type": {
								"id": 1,
								"name": "BAT",
								"shortName": "BAT"
							},
							"inDreamTeam": false,
							"isSelected": true,
							"role": null,
							"substituteInfo": {
								"isSub": false,
								"priority": 0,
								"replacedWith": null
							}
						}, {
							"id": 11737,
							"artwork": [{
								"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image-men.png"
							}],
							"lineupStatus": {
								"status": "PLAYING",
								"color": "#00A348"
							},
							"squad": {
								"id": 7456
							},
							"credits": 0,
							"name": "Rituraj Singh",
							"nameInitial": "R",
							"points": 8,
							"type": {
								"id": 2,
								"name": "BOWL",
								"shortName": "BOWL"
							},
							"inDreamTeam": false,
							"isSelected": true,
							"role": null,
							"substituteInfo": {
								"isSub": false,
								"priority": 0,
								"replacedWith": null
							}
						}, {
							"id": 86261,
							"artwork": [{
								"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image-men.png"
							}],
							"lineupStatus": {
								"status": "PLAYING",
								"color": "#00A348"
							},
							"squad": {
								"id": 8257
							},
							"credits": 0,
							"name": "Chaturanga de Silva",
							"nameInitial": "C",
							"points": 64,
							"type": {
								"id": 4,
								"name": "ALL",
								"shortName": "ALL"
							},
							"inDreamTeam": false,
							"isSelected": true,
							"role": null,
							"substituteInfo": {
								"isSub": false,
								"priority": 0,
								"replacedWith": null
							}
						}]
					},
					"squads": [{
						"id": 7456,
						"name": "KSO",
						"shortName": "KSO",
						"playerTextBgColor": "#F0F3F7",
						"playerTextFontColor": "#202C3D"
					}, {
						"id": 8257,
						"name": "RRP",
						"shortName": "RRP",
						"playerTextBgColor": "#364150",
						"playerTextFontColor": "#FFFFFF"
					}]
				},
				"me": {
					"id": 317152330,
					"userType": "NORMAL"
				}
			}
		});
	}

	// 112993
	if (teamId == 1) {
		return NextResponse.json({
			"data": {
				"site": {
					"playerTypes": [{
						"id": 3,
						"name": "Wicket-Keepers"
					}, {
						"id": 1,
						"name": "Batters"
					}, {
						"id": 4,
						"name": "All-Rounders"
					}, {
						"id": 2,
						"name": "Bowlers"
					}],
					"id": 1,
					"gameId": 2,
					"teamCriteria": {
						"maxPlayerPerSquad": 10,
						"totalCredits": 100,
						"totalPlayerCount": 11
					}
				},
				"match": {
					"status": "COMPLETED",
					"players": [{
						"id": 8449,
						"lineupStatus": {
							"status": "PLAYING",
							"color": "#00A348"
						}
					}, {
						"id": 1441,
						"lineupStatus": {
							"status": "PLAYING",
							"color": "#00A348"
						}
					}, {
						"id": 8504,
						"lineupStatus": {
							"status": "NOT_PLAYING",
							"color": "#DD500F"
						}
					}, {
						"id": 3653,
						"lineupStatus": {
							"status": "PLAYING",
							"color": "#00A348"
						}
					}, {
						"id": 9220,
						"lineupStatus": {
							"status": "NOT_PLAYING",
							"color": "#DD500F"
						}
					}, {
						"id": 86740,
						"lineupStatus": {
							"status": "PLAYING",
							"color": "#00A348"
						}
					}, {
						"id": 1708,
						"lineupStatus": {
							"status": "NOT_PLAYING",
							"color": "#DD500F"
						}
					}, {
						"id": 4719,
						"lineupStatus": {
							"status": "PLAYING",
							"color": "#00A348"
						}
					}, {
						"id": 9243,
						"lineupStatus": {
							"status": "NOT_PLAYING",
							"color": "#DD500F"
						}
					}, {
						"id": 58303,
						"lineupStatus": {
							"status": "NOT_PLAYING",
							"color": "#DD500F"
						}
					}, {
						"id": 150536,
						"lineupStatus": {
							"status": "PLAYING",
							"color": "#00A348"
						}
					}, {
						"id": 8417,
						"lineupStatus": {
							"status": "NOT_PLAYING",
							"color": "#DD500F"
						}
					}, {
						"id": 1809,
						"lineupStatus": {
							"status": "PLAYING",
							"color": "#00A348"
						}
					}, {
						"id": 1213,
						"lineupStatus": {
							"status": "PLAYING",
							"color": "#00A348"
						}
					}, {
						"id": 21594,
						"lineupStatus": {
							"status": "PLAYING",
							"color": "#00A348"
						}
					}, {
						"id": 94811,
						"lineupStatus": {
							"status": "PLAYING",
							"color": "#00A348"
						}
					}, {
						"id": 156287,
						"lineupStatus": {
							"status": "PLAYING",
							"color": "#00A348"
						}
					}, {
						"id": 15190,
						"lineupStatus": {
							"status": "NOT_PLAYING",
							"color": "#DD500F"
						}
					}, {
						"id": 28747,
						"lineupStatus": {
							"status": "PLAYING",
							"color": "#00A348"
						}
					}, {
						"id": 85637,
						"lineupStatus": {
							"status": "PLAYING",
							"color": "#00A348"
						}
					}, {
						"id": 1981,
						"lineupStatus": {
							"status": "PLAYING",
							"color": "#00A348"
						}
					}, {
						"id": 9236,
						"lineupStatus": {
							"status": "PLAYING",
							"color": "#00A348"
						}
					}, {
						"id": 83402,
						"lineupStatus": {
							"status": "PLAYING",
							"color": "#00A348"
						}
					}, {
						"id": 9219,
						"lineupStatus": {
							"status": "PLAYING",
							"color": "#00A348"
						}
					}, {
						"id": 1666,
						"lineupStatus": {
							"status": "NOT_PLAYING",
							"color": "#DD500F"
						}
					}, {
						"id": 28813,
						"lineupStatus": {
							"status": "NOT_PLAYING",
							"color": "#DD500F"
						}
					}, {
						"id": 1915,
						"lineupStatus": {
							"status": "PLAYING",
							"color": "#00A348"
						}
					}, {
						"id": 8426,
						"lineupStatus": {
							"status": "NOT_PLAYING",
							"color": "#DD500F"
						}
					}, {
						"id": 1704,
						"lineupStatus": {
							"status": "PLAYING",
							"color": "#00A348"
						}
					}, {
						"id": 33330,
						"lineupStatus": {
							"status": "PLAYING",
							"color": "#00A348"
						}
					}, {
						"id": 9248,
						"lineupStatus": {
							"status": "NOT_PLAYING",
							"color": "#DD500F"
						}
					}, {
						"id": 15209,
						"lineupStatus": {
							"status": "PLAYING",
							"color": "#00A348"
						}
					}, {
						"id": 158032,
						"lineupStatus": {
							"status": "PLAYING",
							"color": "#00A348"
						}
					}],
					"startTime": "2026-03-15T06:15:00.000Z",
					"matchHighlight": null,
					"substitutionInfo": {
						"teamPreviewText": "",
						"maxSubsAllowed": 4,
						"status": "COMPLETE",
						"isTeamCompareActive": true,
						"teamCompareText": ""
					},
					"userTeam": {
						"points": 413,
						"name": "AARONTH CONQUERERS",
						"players": [{
							"id": 1809,
							"artwork": [{
								"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/partner-image/MenGoogle/1809.png"
							}],
							"lineupStatus": {
								"status": "PLAYING",
								"color": "#00A348"
							},
							"squad": {
								"id": 186
							},
							"credits": 0,
							"name": "Devon Conway",
							"nameInitial": "D",
							"points": 10,
							"type": {
								"id": 3,
								"name": "WK",
								"shortName": "WK"
							},
							"inDreamTeam": false,
							"isSelected": true,
							"role": {
								"shortName": "C"
							},
							"substituteInfo": {
								"isSub": false,
								"priority": 0,
								"replacedWith": null
							}
						}, {
							"id": 3653,
							"artwork": [{
								"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/partner-image/MenGoogle/3653.png"
							}],
							"lineupStatus": {
								"status": "PLAYING",
								"color": "#00A348"
							},
							"squad": {
								"id": 186
							},
							"credits": 0,
							"name": "Mitchell Santner",
							"nameInitial": "M",
							"points": 83,
							"type": {
								"id": 4,
								"name": "ALL",
								"shortName": "ALL"
							},
							"inDreamTeam": true,
							"isSelected": true,
							"role": null,
							"substituteInfo": {
								"isSub": false,
								"priority": 0,
								"replacedWith": null
							}
						}, {
							"id": 8417,
							"artwork": [{
								"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/partner-image/MenGoogle/8417.png"
							}],
							"lineupStatus": {
								"status": "NOT_PLAYING",
								"color": "#DD500F"
							},
							"squad": {
								"id": 186
							},
							"credits": 0,
							"name": "Dane Cleaver",
							"nameInitial": "D",
							"points": 0,
							"type": {
								"id": 3,
								"name": "WK",
								"shortName": "WK"
							},
							"inDreamTeam": false,
							"isSelected": true,
							"role": null,
							"substituteInfo": {
								"isSub": false,
								"priority": 0,
								"replacedWith": null
							}
						}, {
							"id": 8449,
							"artwork": [{
								"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/partner-image/MenGoogle/8449.png"
							}],
							"lineupStatus": {
								"status": "PLAYING",
								"color": "#00A348"
							},
							"squad": {
								"id": 186
							},
							"credits": 0,
							"name": "Cole McConchie",
							"nameInitial": "C",
							"points": 33,
							"type": {
								"id": 4,
								"name": "ALL",
								"shortName": "ALL"
							},
							"inDreamTeam": false,
							"isSelected": true,
							"role": null,
							"substituteInfo": {
								"isSub": false,
								"priority": 0,
								"replacedWith": null
							}
						}, {
							"id": 9220,
							"artwork": [{
								"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/partner-image/MenGoogle/9220.png"
							}],
							"lineupStatus": {
								"status": "NOT_PLAYING",
								"color": "#DD500F"
							},
							"squad": {
								"id": 186
							},
							"credits": 0,
							"name": "Nathan Smith",
							"nameInitial": "N",
							"points": 0,
							"type": {
								"id": 4,
								"name": "ALL",
								"shortName": "ALL"
							},
							"inDreamTeam": false,
							"isSelected": true,
							"role": null,
							"substituteInfo": {
								"isSub": false,
								"priority": 0,
								"replacedWith": null
							}
						}, {
							"id": 9236,
							"artwork": [{
								"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/partner-image/MenGoogle/9236.png"
							}],
							"lineupStatus": {
								"status": "PLAYING",
								"color": "#00A348"
							},
							"squad": {
								"id": 212
							},
							"credits": 0,
							"name": "Tony de Zorzi",
							"nameInitial": "T",
							"points": 14,
							"type": {
								"id": 1,
								"name": "BAT",
								"shortName": "BAT"
							},
							"inDreamTeam": false,
							"isSelected": true,
							"role": null,
							"substituteInfo": {
								"isSub": false,
								"priority": 0,
								"replacedWith": null
							}
						}, {
							"id": 9243,
							"artwork": [{
								"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/partner-image/MenGoogle/9243.png"
							}],
							"lineupStatus": {
								"status": "NOT_PLAYING",
								"color": "#DD500F"
							},
							"squad": {
								"id": 212
							},
							"credits": 0,
							"name": "Wiaan Mulder",
							"nameInitial": "W",
							"points": 0,
							"type": {
								"id": 4,
								"name": "ALL",
								"shortName": "ALL"
							},
							"inDreamTeam": false,
							"isSelected": true,
							"role": {
								"shortName": "VC"
							},
							"substituteInfo": {
								"isSub": false,
								"priority": 0,
								"replacedWith": null
							}
						}, {
							"id": 15209,
							"artwork": [{
								"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/partner-image/MenGoogle/15209.png"
							}],
							"lineupStatus": {
								"status": "PLAYING",
								"color": "#00A348"
							},
							"squad": {
								"id": 212
							},
							"credits": 0,
							"name": "Gerald Coetzee",
							"nameInitial": "G",
							"points": 88,
							"type": {
								"id": 2,
								"name": "BOWL",
								"shortName": "BOWL"
							},
							"inDreamTeam": true,
							"isSelected": true,
							"role": null,
							"substituteInfo": {
								"isSub": false,
								"priority": 0,
								"replacedWith": null
							}
						}, {
							"id": 33330,
							"artwork": [{
								"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/partner-image/MenGoogle/33330.png"
							}],
							"lineupStatus": {
								"status": "PLAYING",
								"color": "#00A348"
							},
							"squad": {
								"id": 212
							},
							"credits": 0,
							"name": "Ottniel Baartman",
							"nameInitial": "O",
							"points": 82,
							"type": {
								"id": 2,
								"name": "BOWL",
								"shortName": "BOWL"
							},
							"inDreamTeam": true,
							"isSelected": true,
							"role": null,
							"substituteInfo": {
								"isSub": false,
								"priority": 0,
								"replacedWith": null
							}
						}, {
							"id": 85637,
							"artwork": [{
								"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/partner-image/MenGoogle/85637.png"
							}],
							"lineupStatus": {
								"status": "PLAYING",
								"color": "#00A348"
							},
							"squad": {
								"id": 186
							},
							"credits": 0,
							"name": "Tim Robinson",
							"nameInitial": "T",
							"points": 14,
							"type": {
								"id": 1,
								"name": "BAT",
								"shortName": "BAT"
							},
							"inDreamTeam": false,
							"isSelected": true,
							"role": null,
							"substituteInfo": {
								"isSub": false,
								"priority": 0,
								"replacedWith": null
							}
						}, {
							"id": 94811,
							"artwork": [{
								"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/partner-image/MenGoogle/94811.png"
							}],
							"lineupStatus": {
								"status": "PLAYING",
								"color": "#00A348"
							},
							"squad": {
								"id": 212
							},
							"credits": 0,
							"name": "Connor Esterhuizen",
							"nameInitial": "C",
							"points": 89,
							"type": {
								"id": 3,
								"name": "WK",
								"shortName": "WK"
							},
							"inDreamTeam": true,
							"isSelected": true,
							"role": null,
							"substituteInfo": {
								"isSub": false,
								"priority": 0,
								"replacedWith": null
							}
						}]
					},
					"squads": [{
						"id": 186,
						"name": "NZ",
						"shortName": "NZ",
						"playerTextBgColor": "#F0F3F7",
						"playerTextFontColor": "#202C3D"
					}, {
						"id": 212,
						"name": "SA",
						"shortName": "SA",
						"playerTextBgColor": "#364150",
						"playerTextFontColor": "#FFFFFF"
					}]
				},
				"me": {
					"id": 317152330,
					"userType": "NORMAL"
				}
			}
		});
	}

	// team 2
	return NextResponse.json({
		"data": {
			"site": {
				"playerTypes": [{
					"id": 3,
					"name": "Wicket-Keepers"
				}, {
					"id": 1,
					"name": "Batters"
				}, {
					"id": 4,
					"name": "All-Rounders"
				}, {
					"id": 2,
					"name": "Bowlers"
				}],
				"id": 1,
				"gameId": 2,
				"teamCriteria": {
					"maxPlayerPerSquad": 10,
					"totalCredits": 100,
					"totalPlayerCount": 11
				}
			},
			"match": {
				"status": "COMPLETED",
				"players": [{
					"id": 8449,
					"lineupStatus": {
						"status": "PLAYING",
						"color": "#00A348"
					}
				}, {
					"id": 1441,
					"lineupStatus": {
						"status": "PLAYING",
						"color": "#00A348"
					}
				}, {
					"id": 8504,
					"lineupStatus": {
						"status": "NOT_PLAYING",
						"color": "#DD500F"
					}
				}, {
					"id": 3653,
					"lineupStatus": {
						"status": "PLAYING",
						"color": "#00A348"
					}
				}, {
					"id": 9220,
					"lineupStatus": {
						"status": "NOT_PLAYING",
						"color": "#DD500F"
					}
				}, {
					"id": 86740,
					"lineupStatus": {
						"status": "PLAYING",
						"color": "#00A348"
					}
				}, {
					"id": 1708,
					"lineupStatus": {
						"status": "NOT_PLAYING",
						"color": "#DD500F"
					}
				}, {
					"id": 4719,
					"lineupStatus": {
						"status": "PLAYING",
						"color": "#00A348"
					}
				}, {
					"id": 9243,
					"lineupStatus": {
						"status": "NOT_PLAYING",
						"color": "#DD500F"
					}
				}, {
					"id": 58303,
					"lineupStatus": {
						"status": "NOT_PLAYING",
						"color": "#DD500F"
					}
				}, {
					"id": 150536,
					"lineupStatus": {
						"status": "PLAYING",
						"color": "#00A348"
					}
				}, {
					"id": 8417,
					"lineupStatus": {
						"status": "NOT_PLAYING",
						"color": "#DD500F"
					}
				}, {
					"id": 1809,
					"lineupStatus": {
						"status": "PLAYING",
						"color": "#00A348"
					}
				}, {
					"id": 1213,
					"lineupStatus": {
						"status": "PLAYING",
						"color": "#00A348"
					}
				}, {
					"id": 21594,
					"lineupStatus": {
						"status": "PLAYING",
						"color": "#00A348"
					}
				}, {
					"id": 94811,
					"lineupStatus": {
						"status": "PLAYING",
						"color": "#00A348"
					}
				}, {
					"id": 156287,
					"lineupStatus": {
						"status": "PLAYING",
						"color": "#00A348"
					}
				}, {
					"id": 15190,
					"lineupStatus": {
						"status": "NOT_PLAYING",
						"color": "#DD500F"
					}
				}, {
					"id": 28747,
					"lineupStatus": {
						"status": "PLAYING",
						"color": "#00A348"
					}
				}, {
					"id": 85637,
					"lineupStatus": {
						"status": "PLAYING",
						"color": "#00A348"
					}
				}, {
					"id": 1981,
					"lineupStatus": {
						"status": "PLAYING",
						"color": "#00A348"
					}
				}, {
					"id": 9236,
					"lineupStatus": {
						"status": "PLAYING",
						"color": "#00A348"
					}
				}, {
					"id": 83402,
					"lineupStatus": {
						"status": "PLAYING",
						"color": "#00A348"
					}
				}, {
					"id": 9219,
					"lineupStatus": {
						"status": "PLAYING",
						"color": "#00A348"
					}
				}, {
					"id": 1666,
					"lineupStatus": {
						"status": "NOT_PLAYING",
						"color": "#DD500F"
					}
				}, {
					"id": 28813,
					"lineupStatus": {
						"status": "NOT_PLAYING",
						"color": "#DD500F"
					}
				}, {
					"id": 1915,
					"lineupStatus": {
						"status": "PLAYING",
						"color": "#00A348"
					}
				}, {
					"id": 8426,
					"lineupStatus": {
						"status": "NOT_PLAYING",
						"color": "#DD500F"
					}
				}, {
					"id": 1704,
					"lineupStatus": {
						"status": "PLAYING",
						"color": "#00A348"
					}
				}, {
					"id": 33330,
					"lineupStatus": {
						"status": "PLAYING",
						"color": "#00A348"
					}
				}, {
					"id": 9248,
					"lineupStatus": {
						"status": "NOT_PLAYING",
						"color": "#DD500F"
					}
				}, {
					"id": 15209,
					"lineupStatus": {
						"status": "PLAYING",
						"color": "#00A348"
					}
				}, {
					"id": 158032,
					"lineupStatus": {
						"status": "PLAYING",
						"color": "#00A348"
					}
				}],
				"startTime": "2026-03-15T06:15:00.000Z",
				"matchHighlight": null,
				"substitutionInfo": {
					"teamPreviewText": "",
					"maxSubsAllowed": 4,
					"status": "COMPLETE",
					"isTeamCompareActive": true,
					"teamCompareText": ""
				},
				"userTeam": {
					"points": 411.5,
					"name": "AARONTH CONQUERERS",
					"players": [{
						"id": 1213,
						"artwork": [{
							"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/partner-image/MenGoogle/1213.png"
						}],
						"lineupStatus": {
							"status": "PLAYING",
							"color": "#00A348"
						},
						"squad": {
							"id": 186
						},
						"credits": 0,
						"name": "Tom Latham",
						"nameInitial": "T",
						"points": 35,
						"type": {
							"id": 3,
							"name": "WK",
							"shortName": "WK"
						},
						"inDreamTeam": false,
						"isSelected": true,
						"role": null,
						"substituteInfo": {
							"isSub": false,
							"priority": 0,
							"replacedWith": null
						}
					}, {
						"id": 1704,
						"artwork": [{
							"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/partner-image/MenGoogle/1704.png"
						}],
						"lineupStatus": {
							"status": "PLAYING",
							"color": "#00A348"
						},
						"squad": {
							"id": 212
						},
						"credits": 0,
						"name": "Keshav Maharaj",
						"nameInitial": "K",
						"points": 93,
						"type": {
							"id": 2,
							"name": "BOWL",
							"shortName": "BOWL"
						},
						"inDreamTeam": true,
						"isSelected": true,
						"role": null,
						"substituteInfo": {
							"isSub": false,
							"priority": 0,
							"replacedWith": null
						}
					}, {
						"id": 1809,
						"artwork": [{
							"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/partner-image/MenGoogle/1809.png"
						}],
						"lineupStatus": {
							"status": "PLAYING",
							"color": "#00A348"
						},
						"squad": {
							"id": 186
						},
						"credits": 0,
						"name": "Devon Conway",
						"nameInitial": "D",
						"points": 10,
						"type": {
							"id": 3,
							"name": "WK",
							"shortName": "WK"
						},
						"inDreamTeam": false,
						"isSelected": true,
						"role": {
							"shortName": "C"
						},
						"substituteInfo": {
							"isSub": false,
							"priority": 0,
							"replacedWith": null
						}
					}, {
						"id": 3653,
						"artwork": [{
							"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/partner-image/MenGoogle/3653.png"
						}],
						"lineupStatus": {
							"status": "PLAYING",
							"color": "#00A348"
						},
						"squad": {
							"id": 186
						},
						"credits": 0,
						"name": "Mitchell Santner",
						"nameInitial": "M",
						"points": 124.5,
						"type": {
							"id": 4,
							"name": "ALL",
							"shortName": "ALL"
						},
						"inDreamTeam": true,
						"isSelected": true,
						"role": {
							"shortName": "VC"
						},
						"substituteInfo": {
							"isSub": false,
							"priority": 0,
							"replacedWith": null
						}
					}, {
						"id": 8426,
						"artwork": [{
							"src": "https://d11.s3.amazonaws.com/player-images/partner-image/MenGoogle2026/8426.png"
						}],
						"lineupStatus": {
							"status": "NOT_PLAYING",
							"color": "#DD500F"
						},
						"squad": {
							"id": 186
						},
						"credits": 0,
						"name": "Lockie Ferguson",
						"nameInitial": "L",
						"points": 0,
						"type": {
							"id": 2,
							"name": "BOWL",
							"shortName": "BOWL"
						},
						"inDreamTeam": false,
						"isSelected": true,
						"role": null,
						"substituteInfo": {
							"isSub": false,
							"priority": 0,
							"replacedWith": null
						}
					}, {
						"id": 8449,
						"artwork": [{
							"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/partner-image/MenGoogle/8449.png"
						}],
						"lineupStatus": {
							"status": "PLAYING",
							"color": "#00A348"
						},
						"squad": {
							"id": 186
						},
						"credits": 0,
						"name": "Cole McConchie",
						"nameInitial": "C",
						"points": 33,
						"type": {
							"id": 4,
							"name": "ALL",
							"shortName": "ALL"
						},
						"inDreamTeam": false,
						"isSelected": true,
						"role": null,
						"substituteInfo": {
							"isSub": false,
							"priority": 0,
							"replacedWith": null
						}
					}, {
						"id": 9220,
						"artwork": [{
							"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/partner-image/MenGoogle/9220.png"
						}],
						"lineupStatus": {
							"status": "NOT_PLAYING",
							"color": "#DD500F"
						},
						"squad": {
							"id": 186
						},
						"credits": 0,
						"name": "Nathan Smith",
						"nameInitial": "N",
						"points": 0,
						"type": {
							"id": 4,
							"name": "ALL",
							"shortName": "ALL"
						},
						"inDreamTeam": false,
						"isSelected": true,
						"role": null,
						"substituteInfo": {
							"isSub": false,
							"priority": 0,
							"replacedWith": null
						}
					}, {
						"id": 9236,
						"artwork": [{
							"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/partner-image/MenGoogle/9236.png"
						}],
						"lineupStatus": {
							"status": "PLAYING",
							"color": "#00A348"
						},
						"squad": {
							"id": 212
						},
						"credits": 0,
						"name": "Tony de Zorzi",
						"nameInitial": "T",
						"points": 14,
						"type": {
							"id": 1,
							"name": "BAT",
							"shortName": "BAT"
						},
						"inDreamTeam": false,
						"isSelected": true,
						"role": null,
						"substituteInfo": {
							"isSub": false,
							"priority": 0,
							"replacedWith": null
						}
					}, {
						"id": 9243,
						"artwork": [{
							"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/partner-image/MenGoogle/9243.png"
						}],
						"lineupStatus": {
							"status": "NOT_PLAYING",
							"color": "#DD500F"
						},
						"squad": {
							"id": 212
						},
						"credits": 0,
						"name": "Wiaan Mulder",
						"nameInitial": "W",
						"points": 0,
						"type": {
							"id": 4,
							"name": "ALL",
							"shortName": "ALL"
						},
						"inDreamTeam": false,
						"isSelected": true,
						"role": null,
						"substituteInfo": {
							"isSub": false,
							"priority": 0,
							"replacedWith": null
						}
					}, {
						"id": 15209,
						"artwork": [{
							"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/partner-image/MenGoogle/15209.png"
						}],
						"lineupStatus": {
							"status": "PLAYING",
							"color": "#00A348"
						},
						"squad": {
							"id": 212
						},
						"credits": 0,
						"name": "Gerald Coetzee",
						"nameInitial": "G",
						"points": 88,
						"type": {
							"id": 2,
							"name": "BOWL",
							"shortName": "BOWL"
						},
						"inDreamTeam": true,
						"isSelected": true,
						"role": null,
						"substituteInfo": {
							"isSub": false,
							"priority": 0,
							"replacedWith": null
						}
					}, {
						"id": 85637,
						"artwork": [{
							"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/partner-image/MenGoogle/85637.png"
						}],
						"lineupStatus": {
							"status": "PLAYING",
							"color": "#00A348"
						},
						"squad": {
							"id": 186
						},
						"credits": 0,
						"name": "Tim Robinson",
						"nameInitial": "T",
						"points": 14,
						"type": {
							"id": 1,
							"name": "BAT",
							"shortName": "BAT"
						},
						"inDreamTeam": false,
						"isSelected": true,
						"role": null,
						"substituteInfo": {
							"isSub": false,
							"priority": 0,
							"replacedWith": null
						}
					}]
				},
				"squads": [{
					"id": 186,
					"name": "NZ",
					"shortName": "NZ",
					"playerTextBgColor": "#F0F3F7",
					"playerTextFontColor": "#202C3D"
				}, {
					"id": 212,
					"name": "SA",
					"shortName": "SA",
					"playerTextBgColor": "#364150",
					"playerTextFontColor": "#FFFFFF"
				}]
			},
			"me": {
				"id": 317152330,
				"userType": "NORMAL"
			}
		}
	});
}
