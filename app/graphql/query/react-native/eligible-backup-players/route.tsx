import { BASEHEADERS } from '@/constants';
import { extractAndModifyHeaders } from '@/lib/changeHeader';
import { NextResponse } from 'next/server';

/**
:method: POST
:path: /graphql/query/react-native/eligible-backup-players
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
content-length: 2080
accept-encoding: gzip
cookie: __refreshToken=HnwZbqZGEOGRjPOhPtgpE0R8zkKWTE9u; dh_user_id=4c1e2720-2090-11f1-8bfe-cdefa134efa5

{"query":"\n    query EligibleBackupPlayers($site: String!, $tourId: Int!, $teamId: Int = -1, $matchId: Int!, $isPreLineupsEnabled: Boolean = false) {\n  site(slug: $site) {\n    id\n    name\n    gameId\n    tour(id: $tourId) {\n      id\n      name\n      match(id: $matchId) {\n        id\n        matchHighlight {\n          color\n          text\n        }\n        startTime\n        squads {\n          id\n        }\n        status\n        showPlayerImages\n        substitutionInfo {\n          maxSubsAllowed\n          status\n          teamPreviewText\n        }\n        playingStyleLegends {\n          iconUrl {\n            src\n          }\n          text\n          legendId\n        }\n      }\n    }\n  }\n  availablePlayersForSubs(\n    tourId: $tourId\n    matchId: $matchId\n    site: $site\n    teamId: $teamId\n  ) {\n    artwork {\n      src\n    }\n    squad {\n      id\n      name\n      jerseyColor\n      shortName\n      playerTextBgColor\n      playerTextFontColor\n    }\n    credits\n    statistics {\n      selectionRate\n      role {\n        id\n        selectionRate\n      }\n    }\n    id\n    name\n    nameInitial\n    points\n    type {\n      id\n      maxPerTeam\n      minPerTeam\n      name\n      shortName\n    }\n    isSelected\n    isSelectedInSharedTeam\n    roleInSharedTeam {\n      id\n      artwork {\n        src\n      }\n      color\n      name\n      pointMultiplier\n      shortName\n    }\n    role {\n      id\n      artwork {\n        src\n      }\n      color\n      name\n      pointMultiplier\n      shortName\n    }\n    lineupOrder\n    lineupStatus {\n      status\n      text\n      color\n    }\n    playingStyleIcon {\n      src\n    }\n    substituteInfo {\n      isSub\n      priority\n      replacedWith {\n        id\n        role {\n          shortName\n        }\n      }\n    }\n    isAvailable @include(if: $isPreLineupsEnabled)\n    battingOrder @include(if: $isPreLineupsEnabled)\n  }\n}\n    ","variables":{"matchId":113005,"site":"cricket","teamId":1,"tourId":5393,"isPreLineupsEnabled":true}}

{
	"query": "\n    query EligibleBackupPlayers($site: String!, $tourId: Int!, $teamId: Int = -1, $matchId: Int!, $isPreLineupsEnabled: Boolean = false) {\n  site(slug: $site) {\n    id\n    name\n    gameId\n    tour(id: $tourId) {\n      id\n      name\n      match(id: $matchId) {\n        id\n        matchHighlight {\n          color\n          text\n        }\n        startTime\n        squads {\n          id\n        }\n        status\n        showPlayerImages\n        substitutionInfo {\n          maxSubsAllowed\n          status\n          teamPreviewText\n        }\n        playingStyleLegends {\n          iconUrl {\n            src\n          }\n          text\n          legendId\n        }\n      }\n    }\n  }\n  availablePlayersForSubs(\n    tourId: $tourId\n    matchId: $matchId\n    site: $site\n    teamId: $teamId\n  ) {\n    artwork {\n      src\n    }\n    squad {\n      id\n      name\n      jerseyColor\n      shortName\n      playerTextBgColor\n      playerTextFontColor\n    }\n    credits\n    statistics {\n      selectionRate\n      role {\n        id\n        selectionRate\n      }\n    }\n    id\n    name\n    nameInitial\n    points\n    type {\n      id\n      maxPerTeam\n      minPerTeam\n      name\n      shortName\n    }\n    isSelected\n    isSelectedInSharedTeam\n    roleInSharedTeam {\n      id\n      artwork {\n        src\n      }\n      color\n      name\n      pointMultiplier\n      shortName\n    }\n    role {\n      id\n      artwork {\n        src\n      }\n      color\n      name\n      pointMultiplier\n      shortName\n    }\n    lineupOrder\n    lineupStatus {\n      status\n      text\n      color\n    }\n    playingStyleIcon {\n      src\n    }\n    substituteInfo {\n      isSub\n      priority\n      replacedWith {\n        id\n        role {\n          shortName\n        }\n      }\n    }\n    isAvailable @include(if: $isPreLineupsEnabled)\n    battingOrder @include(if: $isPreLineupsEnabled)\n  }\n}\n    ",
	"variables": {
		"matchId": 113005,
		"site": "cricket",
		"teamId": 1,
		"tourId": 5393,
		"isPreLineupsEnabled": true
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
			const apiURL = process.env.WWW_GRAPHAL_URL + "/graphql/query/react-native/eligible-backup-players";
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

			console.log("eligible-backup-players", data);

			return NextResponse.json(data);
		} catch (error) {
			console.error('API request error:', error);
			// Fall back to mock data if API fails
		}
	}
	
	return NextResponse.json({
		"data": {
			"site": {
				"id": 1,
				"name": "cricket",
				"gameId": 2,
				"tour": {
					"id": 5393,
					"name": "Pakistan National T20 Cup",
					"match": {
						"id": 113005,
						"matchHighlight": null,
						"startTime": "2026-03-16T11:15:00.000Z",
						"squads": [{
							"id": 6633
						}, {
							"id": 1037
						}],
						"status": "NOT_STARTED",
						"showPlayerImages": true,
						"substitutionInfo": {
							"maxSubsAllowed": 4,
							"status": "PENDING",
							"teamPreviewText": ""
						},
						"playingStyleLegends": [{
							"iconUrl": [{
								"src": "https://d11-static-assets.s3.amazonaws.com/images/mobile/style_spin_icon_blue.png"
							}],
							"text": "Spinner",
							"legendId": "SPINNER"
						}, {
							"iconUrl": [{
								"src": "https://d11-static-assets.s3.amazonaws.com/images/mobile/style_pace_icon_blue.png"
							}],
							"text": "Pacer",
							"legendId": "PACER"
						}, {
							"iconUrl": [{
								"src": "https://d11-static-assets.s3.amazonaws.com/images/mobile/backup_icon.png"
							}],
							"text": "Backup",
							"legendId": "BACKUP"
						}]
					}
				}
			},
			"availablePlayersForSubs": [{
				"artwork": [{
					"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image-men.png"
				}],
				"squad": {
					"id": 1037,
					"name": "LB",
					"jerseyColor": "",
					"shortName": "LB",
					"playerTextBgColor": "#364150",
					"playerTextFontColor": "#FFFFFF"
				},
				"credits": 7.5,
				"statistics": {
					"selectionRate": 13.99,
					"role": [{
						"id": 1,
						"selectionRate": 0.45
					}, {
						"id": 2,
						"selectionRate": 0.77
					}]
				},
				"id": 185127,
				"name": "Mohammad Ahsan",
				"nameInitial": "M",
				"points": 0,
				"type": {
					"id": 4,
					"maxPerTeam": 0,
					"minPerTeam": 0,
					"name": "ALL",
					"shortName": "ALL"
				},
				"isSelected": false,
				"isSelectedInSharedTeam": false,
				"roleInSharedTeam": null,
				"role": null,
				"lineupOrder": null,
				"lineupStatus": null,
				"playingStyleIcon": [{
					"src": "https://d11-static-assets.s3.amazonaws.com/images/mobile/style_spin_icon_blue.png"
				}],
				"substituteInfo": {
					"isSub": false,
					"priority": 0,
					"replacedWith": null
				},
				"isAvailable": true,
				"battingOrder": 0
			}, {
				"artwork": [{
					"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image-men.png"
				}],
				"squad": {
					"id": 1037,
					"name": "LB",
					"jerseyColor": "",
					"shortName": "LB",
					"playerTextBgColor": "#364150",
					"playerTextFontColor": "#FFFFFF"
				},
				"credits": 7,
				"statistics": {
					"selectionRate": 8.16,
					"role": [{
						"id": 1,
						"selectionRate": 0.32
					}, {
						"id": 2,
						"selectionRate": 0.5
					}]
				},
				"id": 22692,
				"name": "Qasim Akram",
				"nameInitial": "Q",
				"points": 0,
				"type": {
					"id": 4,
					"maxPerTeam": 0,
					"minPerTeam": 0,
					"name": "ALL",
					"shortName": "ALL"
				},
				"isSelected": false,
				"isSelectedInSharedTeam": false,
				"roleInSharedTeam": null,
				"role": null,
				"lineupOrder": null,
				"lineupStatus": null,
				"playingStyleIcon": [{
					"src": "https://d11-static-assets.s3.amazonaws.com/images/mobile/style_spin_icon_blue.png"
				}],
				"substituteInfo": {
					"isSub": false,
					"priority": 0,
					"replacedWith": null
				},
				"isAvailable": true,
				"battingOrder": 0
			}, {
				"artwork": [{
					"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image-men.png"
				}],
				"squad": {
					"id": 1037,
					"name": "LB",
					"jerseyColor": "",
					"shortName": "LB",
					"playerTextBgColor": "#364150",
					"playerTextFontColor": "#FFFFFF"
				},
				"credits": 8,
				"statistics": {
					"selectionRate": 79.69,
					"role": [{
						"id": 1,
						"selectionRate": 3.72
					}, {
						"id": 2,
						"selectionRate": 7.36
					}]
				},
				"id": 3639,
				"name": "Saad Nasim",
				"nameInitial": "S",
				"points": 0,
				"type": {
					"id": 4,
					"maxPerTeam": 0,
					"minPerTeam": 0,
					"name": "ALL",
					"shortName": "ALL"
				},
				"isSelected": false,
				"isSelectedInSharedTeam": false,
				"roleInSharedTeam": null,
				"role": null,
				"lineupOrder": null,
				"lineupStatus": null,
				"playingStyleIcon": [{
					"src": "https://d11-static-assets.s3.amazonaws.com/images/mobile/style_spin_icon_blue.png"
				}],
				"substituteInfo": {
					"isSub": false,
					"priority": 0,
					"replacedWith": null
				},
				"isAvailable": true,
				"battingOrder": 0
			}, {
				"artwork": [{
					"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image-men.png"
				}],
				"squad": {
					"id": 6633,
					"name": "ABB",
					"jerseyColor": "",
					"shortName": "ABB",
					"playerTextBgColor": "#F0F3F7",
					"playerTextFontColor": "#202C3D"
				},
				"credits": 6.5,
				"statistics": {
					"selectionRate": 1.37,
					"role": [{
						"id": 1,
						"selectionRate": 0.09
					}, {
						"id": 2,
						"selectionRate": 0.12
					}]
				},
				"id": 87571,
				"name": "Ahmed Khan-II",
				"nameInitial": "A",
				"points": 0,
				"type": {
					"id": 4,
					"maxPerTeam": 0,
					"minPerTeam": 0,
					"name": "ALL",
					"shortName": "ALL"
				},
				"isSelected": false,
				"isSelectedInSharedTeam": false,
				"roleInSharedTeam": null,
				"role": null,
				"lineupOrder": null,
				"lineupStatus": null,
				"playingStyleIcon": [{
					"src": "https://d11-static-assets.s3.amazonaws.com/images/mobile/style_pace_icon_blue.png"
				}],
				"substituteInfo": {
					"isSub": false,
					"priority": 0,
					"replacedWith": null
				},
				"isAvailable": true,
				"battingOrder": 0
			}, {
				"artwork": [{
					"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image-men.png"
				}],
				"squad": {
					"id": 1037,
					"name": "LB",
					"jerseyColor": "",
					"shortName": "LB",
					"playerTextBgColor": "#364150",
					"playerTextFontColor": "#FFFFFF"
				},
				"credits": 6.5,
				"statistics": {
					"selectionRate": 7.38,
					"role": [{
						"id": 1,
						"selectionRate": 0.32
					}, {
						"id": 2,
						"selectionRate": 0.32
					}]
				},
				"id": 197810,
				"name": "Hamza Zahoor",
				"nameInitial": "H",
				"points": 0,
				"type": {
					"id": 3,
					"maxPerTeam": 0,
					"minPerTeam": 0,
					"name": "WK",
					"shortName": "WK"
				},
				"isSelected": false,
				"isSelectedInSharedTeam": false,
				"roleInSharedTeam": null,
				"role": null,
				"lineupOrder": null,
				"lineupStatus": null,
				"playingStyleIcon": null,
				"substituteInfo": {
					"isSub": false,
					"priority": 0,
					"replacedWith": null
				},
				"isAvailable": true,
				"battingOrder": 0
			}, {
				"artwork": [{
					"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image-men.png"
				}],
				"squad": {
					"id": 1037,
					"name": "LB",
					"jerseyColor": "",
					"shortName": "LB",
					"playerTextBgColor": "#364150",
					"playerTextFontColor": "#FFFFFF"
				},
				"credits": 8,
				"statistics": {
					"selectionRate": 78.3,
					"role": [{
						"id": 1,
						"selectionRate": 3.11
					}, {
						"id": 2,
						"selectionRate": 3.38
					}]
				},
				"id": 185092,
				"name": "Khawaja Abdullah",
				"nameInitial": "K",
				"points": 0,
				"type": {
					"id": 3,
					"maxPerTeam": 0,
					"minPerTeam": 0,
					"name": "WK",
					"shortName": "WK"
				},
				"isSelected": false,
				"isSelectedInSharedTeam": false,
				"roleInSharedTeam": null,
				"role": null,
				"lineupOrder": null,
				"lineupStatus": null,
				"playingStyleIcon": null,
				"substituteInfo": {
					"isSub": false,
					"priority": 0,
					"replacedWith": null
				},
				"isAvailable": true,
				"battingOrder": 0
			}, {
				"artwork": [{
					"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image-men.png"
				}],
				"squad": {
					"id": 1037,
					"name": "LB",
					"jerseyColor": "",
					"shortName": "LB",
					"playerTextBgColor": "#364150",
					"playerTextFontColor": "#FFFFFF"
				},
				"credits": 7.5,
				"statistics": {
					"selectionRate": 20.42,
					"role": [{
						"id": 1,
						"selectionRate": 0.88
					}, {
						"id": 2,
						"selectionRate": 1.04
					}]
				},
				"id": 3636,
				"name": "Umar Siddiq",
				"nameInitial": "U",
				"points": 0,
				"type": {
					"id": 3,
					"maxPerTeam": 0,
					"minPerTeam": 0,
					"name": "WK",
					"shortName": "WK"
				},
				"isSelected": false,
				"isSelectedInSharedTeam": false,
				"roleInSharedTeam": null,
				"role": null,
				"lineupOrder": null,
				"lineupStatus": null,
				"playingStyleIcon": null,
				"substituteInfo": {
					"isSub": false,
					"priority": 0,
					"replacedWith": null
				},
				"isAvailable": true,
				"battingOrder": 0
			}, {
				"artwork": [{
					"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image-men.png"
				}],
				"squad": {
					"id": 6633,
					"name": "ABB",
					"jerseyColor": "",
					"shortName": "ABB",
					"playerTextBgColor": "#F0F3F7",
					"playerTextFontColor": "#202C3D"
				},
				"credits": 7,
				"statistics": {
					"selectionRate": 5.07,
					"role": [{
						"id": 1,
						"selectionRate": 0.28
					}, {
						"id": 2,
						"selectionRate": 0.3
					}]
				},
				"id": 108348,
				"name": "Sajjad Ali",
				"nameInitial": "S",
				"points": 0,
				"type": {
					"id": 3,
					"maxPerTeam": 0,
					"minPerTeam": 0,
					"name": "WK",
					"shortName": "WK"
				},
				"isSelected": false,
				"isSelectedInSharedTeam": false,
				"roleInSharedTeam": null,
				"role": null,
				"lineupOrder": null,
				"lineupStatus": null,
				"playingStyleIcon": null,
				"substituteInfo": {
					"isSub": false,
					"priority": 0,
					"replacedWith": null
				},
				"isAvailable": true,
				"battingOrder": 0
			}, {
				"artwork": [{
					"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image-men.png"
				}],
				"squad": {
					"id": 1037,
					"name": "LB",
					"jerseyColor": "",
					"shortName": "LB",
					"playerTextBgColor": "#364150",
					"playerTextFontColor": "#FFFFFF"
				},
				"credits": 6,
				"statistics": {
					"selectionRate": 0.79,
					"role": [{
						"id": 1,
						"selectionRate": 0.05
					}, {
						"id": 2,
						"selectionRate": 0.08
					}]
				},
				"id": 197924,
				"name": "Abdullah Asif",
				"nameInitial": "A",
				"points": 0,
				"type": {
					"id": 1,
					"maxPerTeam": 0,
					"minPerTeam": 0,
					"name": "BAT",
					"shortName": "BAT"
				},
				"isSelected": false,
				"isSelectedInSharedTeam": false,
				"roleInSharedTeam": null,
				"role": null,
				"lineupOrder": null,
				"lineupStatus": null,
				"playingStyleIcon": null,
				"substituteInfo": {
					"isSub": false,
					"priority": 0,
					"replacedWith": null
				},
				"isAvailable": true,
				"battingOrder": 0
			}, {
				"artwork": [{
					"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image-men.png"
				}],
				"squad": {
					"id": 1037,
					"name": "LB",
					"jerseyColor": "",
					"shortName": "LB",
					"playerTextBgColor": "#364150",
					"playerTextFontColor": "#FFFFFF"
				},
				"credits": 6.5,
				"statistics": {
					"selectionRate": 3.62,
					"role": [{
						"id": 1,
						"selectionRate": 0.12
					}, {
						"id": 2,
						"selectionRate": 0.13
					}]
				},
				"id": 197812,
				"name": "Ali Baloch",
				"nameInitial": "A",
				"points": 0,
				"type": {
					"id": 1,
					"maxPerTeam": 0,
					"minPerTeam": 0,
					"name": "BAT",
					"shortName": "BAT"
				},
				"isSelected": false,
				"isSelectedInSharedTeam": false,
				"roleInSharedTeam": null,
				"role": null,
				"lineupOrder": null,
				"lineupStatus": null,
				"playingStyleIcon": null,
				"substituteInfo": {
					"isSub": false,
					"priority": 0,
					"replacedWith": null
				},
				"isAvailable": true,
				"battingOrder": 0
			}, {
				"artwork": [{
					"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image-men.png"
				}],
				"squad": {
					"id": 1037,
					"name": "LB",
					"jerseyColor": "",
					"shortName": "LB",
					"playerTextBgColor": "#364150",
					"playerTextFontColor": "#FFFFFF"
				},
				"credits": 7.5,
				"statistics": {
					"selectionRate": 36.66,
					"role": [{
						"id": 1,
						"selectionRate": 1.88
					}, {
						"id": 2,
						"selectionRate": 2.45
					}]
				},
				"id": 111188,
				"name": "Ali Razzaq",
				"nameInitial": "A",
				"points": 0,
				"type": {
					"id": 1,
					"maxPerTeam": 0,
					"minPerTeam": 0,
					"name": "BAT",
					"shortName": "BAT"
				},
				"isSelected": false,
				"isSelectedInSharedTeam": false,
				"roleInSharedTeam": null,
				"role": null,
				"lineupOrder": null,
				"lineupStatus": null,
				"playingStyleIcon": null,
				"substituteInfo": {
					"isSub": false,
					"priority": 0,
					"replacedWith": null
				},
				"isAvailable": true,
				"battingOrder": 0
			}, {
				"artwork": [{
					"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image-men.png"
				}],
				"squad": {
					"id": 1037,
					"name": "LB",
					"jerseyColor": "",
					"shortName": "LB",
					"playerTextBgColor": "#364150",
					"playerTextFontColor": "#FFFFFF"
				},
				"credits": 7,
				"statistics": {
					"selectionRate": 4.43,
					"role": [{
						"id": 1,
						"selectionRate": 0.25
					}, {
						"id": 2,
						"selectionRate": 0.33
					}]
				},
				"id": 185126,
				"name": "Attyab Ahmed",
				"nameInitial": "A",
				"points": 0,
				"type": {
					"id": 1,
					"maxPerTeam": 0,
					"minPerTeam": 0,
					"name": "BAT",
					"shortName": "BAT"
				},
				"isSelected": false,
				"isSelectedInSharedTeam": false,
				"roleInSharedTeam": null,
				"role": null,
				"lineupOrder": null,
				"lineupStatus": null,
				"playingStyleIcon": null,
				"substituteInfo": {
					"isSub": false,
					"priority": 0,
					"replacedWith": null
				},
				"isAvailable": true,
				"battingOrder": 0
			}, {
				"artwork": [{
					"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image-men.png"
				}],
				"squad": {
					"id": 1037,
					"name": "LB",
					"jerseyColor": "",
					"shortName": "LB",
					"playerTextBgColor": "#364150",
					"playerTextFontColor": "#FFFFFF"
				},
				"credits": 7,
				"statistics": {
					"selectionRate": 3.22,
					"role": [{
						"id": 1,
						"selectionRate": 0.19
					}, {
						"id": 2,
						"selectionRate": 0.2
					}]
				},
				"id": 149834,
				"name": "Hammad Butt",
				"nameInitial": "H",
				"points": 0,
				"type": {
					"id": 1,
					"maxPerTeam": 0,
					"minPerTeam": 0,
					"name": "BAT",
					"shortName": "BAT"
				},
				"isSelected": false,
				"isSelectedInSharedTeam": false,
				"roleInSharedTeam": null,
				"role": null,
				"lineupOrder": null,
				"lineupStatus": null,
				"playingStyleIcon": null,
				"substituteInfo": {
					"isSub": false,
					"priority": 0,
					"replacedWith": null
				},
				"isAvailable": true,
				"battingOrder": 0
			}, {
				"artwork": [{
					"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image-men.png"
				}],
				"squad": {
					"id": 1037,
					"name": "LB",
					"jerseyColor": "",
					"shortName": "LB",
					"playerTextBgColor": "#364150",
					"playerTextFontColor": "#FFFFFF"
				},
				"credits": 8,
				"statistics": {
					"selectionRate": 81.03,
					"role": [{
						"id": 1,
						"selectionRate": 5.73
					}, {
						"id": 2,
						"selectionRate": 7.74
					}]
				},
				"id": 9333,
				"name": "Imran Butt",
				"nameInitial": "I",
				"points": 0,
				"type": {
					"id": 1,
					"maxPerTeam": 0,
					"minPerTeam": 0,
					"name": "BAT",
					"shortName": "BAT"
				},
				"isSelected": false,
				"isSelectedInSharedTeam": false,
				"roleInSharedTeam": null,
				"role": null,
				"lineupOrder": null,
				"lineupStatus": null,
				"playingStyleIcon": null,
				"substituteInfo": {
					"isSub": false,
					"priority": 0,
					"replacedWith": null
				},
				"isAvailable": true,
				"battingOrder": 0
			}, {
				"artwork": [{
					"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image-men.png"
				}],
				"squad": {
					"id": 1037,
					"name": "LB",
					"jerseyColor": "",
					"shortName": "LB",
					"playerTextBgColor": "#364150",
					"playerTextFontColor": "#FFFFFF"
				},
				"credits": 6.5,
				"statistics": {
					"selectionRate": 0.99,
					"role": [{
						"id": 1,
						"selectionRate": 0.06
					}, {
						"id": 2,
						"selectionRate": 0.09
					}]
				},
				"id": 197927,
				"name": "Shahrukh Ali",
				"nameInitial": "S",
				"points": 0,
				"type": {
					"id": 1,
					"maxPerTeam": 0,
					"minPerTeam": 0,
					"name": "BAT",
					"shortName": "BAT"
				},
				"isSelected": false,
				"isSelectedInSharedTeam": false,
				"roleInSharedTeam": null,
				"role": null,
				"lineupOrder": null,
				"lineupStatus": null,
				"playingStyleIcon": null,
				"substituteInfo": {
					"isSub": false,
					"priority": 0,
					"replacedWith": null
				},
				"isAvailable": true,
				"battingOrder": 0
			}, {
				"artwork": [{
					"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image-men.png"
				}],
				"squad": {
					"id": 6633,
					"name": "ABB",
					"jerseyColor": "",
					"shortName": "ABB",
					"playerTextBgColor": "#F0F3F7",
					"playerTextFontColor": "#202C3D"
				},
				"credits": 6.5,
				"statistics": {
					"selectionRate": 3.43,
					"role": [{
						"id": 1,
						"selectionRate": 0.09
					}, {
						"id": 2,
						"selectionRate": 0.11
					}]
				},
				"id": 156699,
				"name": "Atizaz Habib Khan",
				"nameInitial": "A",
				"points": 0,
				"type": {
					"id": 1,
					"maxPerTeam": 0,
					"minPerTeam": 0,
					"name": "BAT",
					"shortName": "BAT"
				},
				"isSelected": false,
				"isSelectedInSharedTeam": false,
				"roleInSharedTeam": null,
				"role": null,
				"lineupOrder": null,
				"lineupStatus": null,
				"playingStyleIcon": null,
				"substituteInfo": {
					"isSub": false,
					"priority": 0,
					"replacedWith": null
				},
				"isAvailable": true,
				"battingOrder": 0
			}, {
				"artwork": [{
					"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image-men.png"
				}],
				"squad": {
					"id": 6633,
					"name": "ABB",
					"jerseyColor": "",
					"shortName": "ABB",
					"playerTextBgColor": "#F0F3F7",
					"playerTextFontColor": "#202C3D"
				},
				"credits": 6.5,
				"statistics": {
					"selectionRate": 0.96,
					"role": [{
						"id": 1,
						"selectionRate": 0.06
					}, {
						"id": 2,
						"selectionRate": 0.08
					}]
				},
				"id": 179836,
				"name": "Mohammad Riazullah",
				"nameInitial": "M",
				"points": 0,
				"type": {
					"id": 1,
					"maxPerTeam": 0,
					"minPerTeam": 0,
					"name": "BAT",
					"shortName": "BAT"
				},
				"isSelected": false,
				"isSelectedInSharedTeam": false,
				"roleInSharedTeam": null,
				"role": null,
				"lineupOrder": null,
				"lineupStatus": null,
				"playingStyleIcon": null,
				"substituteInfo": {
					"isSub": false,
					"priority": 0,
					"replacedWith": null
				},
				"isAvailable": true,
				"battingOrder": 0
			}, {
				"artwork": [{
					"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image-men.png"
				}],
				"squad": {
					"id": 1037,
					"name": "LB",
					"jerseyColor": "",
					"shortName": "LB",
					"playerTextBgColor": "#364150",
					"playerTextFontColor": "#FFFFFF"
				},
				"credits": 6,
				"statistics": {
					"selectionRate": 0.58,
					"role": [{
						"id": 1,
						"selectionRate": 0.05
					}, {
						"id": 2,
						"selectionRate": 0.04
					}]
				},
				"id": 197928,
				"name": "Abubakar",
				"nameInitial": "A",
				"points": 0,
				"type": {
					"id": 2,
					"maxPerTeam": 0,
					"minPerTeam": 0,
					"name": "BOWL",
					"shortName": "BOWL"
				},
				"isSelected": false,
				"isSelectedInSharedTeam": false,
				"roleInSharedTeam": null,
				"role": null,
				"lineupOrder": null,
				"lineupStatus": null,
				"playingStyleIcon": [{
					"src": "https://d11-static-assets.s3.amazonaws.com/images/mobile/style_pace_icon_blue.png"
				}],
				"substituteInfo": {
					"isSub": false,
					"priority": 0,
					"replacedWith": null
				},
				"isAvailable": true,
				"battingOrder": 0
			}, {
				"artwork": [{
					"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image-men.png"
				}],
				"squad": {
					"id": 1037,
					"name": "LB",
					"jerseyColor": "",
					"shortName": "LB",
					"playerTextBgColor": "#364150",
					"playerTextFontColor": "#FFFFFF"
				},
				"credits": 7,
				"statistics": {
					"selectionRate": 5.33,
					"role": [{
						"id": 1,
						"selectionRate": 0.12
					}, {
						"id": 2,
						"selectionRate": 0.16
					}]
				},
				"id": 12070,
				"name": "Ahmed Bashir",
				"nameInitial": "A",
				"points": 0,
				"type": {
					"id": 2,
					"maxPerTeam": 0,
					"minPerTeam": 0,
					"name": "BOWL",
					"shortName": "BOWL"
				},
				"isSelected": false,
				"isSelectedInSharedTeam": false,
				"roleInSharedTeam": null,
				"role": null,
				"lineupOrder": null,
				"lineupStatus": null,
				"playingStyleIcon": [{
					"src": "https://d11-static-assets.s3.amazonaws.com/images/mobile/style_pace_icon_blue.png"
				}],
				"substituteInfo": {
					"isSub": false,
					"priority": 0,
					"replacedWith": null
				},
				"isAvailable": true,
				"battingOrder": 0
			}, {
				"artwork": [{
					"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image-men.png"
				}],
				"squad": {
					"id": 1037,
					"name": "LB",
					"jerseyColor": "",
					"shortName": "LB",
					"playerTextBgColor": "#364150",
					"playerTextFontColor": "#FFFFFF"
				},
				"credits": 6.5,
				"statistics": {
					"selectionRate": 1.16,
					"role": [{
						"id": 1,
						"selectionRate": 0.03
					}, {
						"id": 2,
						"selectionRate": 0.04
					}]
				},
				"id": 149833,
				"name": "Asadullah",
				"nameInitial": "A",
				"points": 0,
				"type": {
					"id": 2,
					"maxPerTeam": 0,
					"minPerTeam": 0,
					"name": "BOWL",
					"shortName": "BOWL"
				},
				"isSelected": false,
				"isSelectedInSharedTeam": false,
				"roleInSharedTeam": null,
				"role": null,
				"lineupOrder": null,
				"lineupStatus": null,
				"playingStyleIcon": [{
					"src": "https://d11-static-assets.s3.amazonaws.com/images/mobile/style_pace_icon_blue.png"
				}],
				"substituteInfo": {
					"isSub": false,
					"priority": 0,
					"replacedWith": null
				},
				"isAvailable": true,
				"battingOrder": 0
			}, {
				"artwork": [{
					"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image-men.png"
				}],
				"squad": {
					"id": 1037,
					"name": "LB",
					"jerseyColor": "",
					"shortName": "LB",
					"playerTextBgColor": "#364150",
					"playerTextFontColor": "#FFFFFF"
				},
				"credits": 8,
				"statistics": {
					"selectionRate": 74.06,
					"role": [{
						"id": 1,
						"selectionRate": 1.11
					}, {
						"id": 2,
						"selectionRate": 2.17
					}]
				},
				"id": 108342,
				"name": "Hunain Shah",
				"nameInitial": "H",
				"points": 0,
				"type": {
					"id": 2,
					"maxPerTeam": 0,
					"minPerTeam": 0,
					"name": "BOWL",
					"shortName": "BOWL"
				},
				"isSelected": false,
				"isSelectedInSharedTeam": false,
				"roleInSharedTeam": null,
				"role": null,
				"lineupOrder": null,
				"lineupStatus": null,
				"playingStyleIcon": [{
					"src": "https://d11-static-assets.s3.amazonaws.com/images/mobile/style_pace_icon_blue.png"
				}],
				"substituteInfo": {
					"isSub": false,
					"priority": 0,
					"replacedWith": null
				},
				"isAvailable": true,
				"battingOrder": 0
			}, {
				"artwork": [{
					"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image-men.png"
				}],
				"squad": {
					"id": 1037,
					"name": "LB",
					"jerseyColor": "",
					"shortName": "LB",
					"playerTextBgColor": "#364150",
					"playerTextFontColor": "#FFFFFF"
				},
				"credits": 6.5,
				"statistics": {
					"selectionRate": 4.14,
					"role": [{
						"id": 1,
						"selectionRate": 0.07
					}, {
						"id": 2,
						"selectionRate": 0.12
					}]
				},
				"id": 84358,
				"name": "Nisar Ahmad",
				"nameInitial": "N",
				"points": 0,
				"type": {
					"id": 2,
					"maxPerTeam": 0,
					"minPerTeam": 0,
					"name": "BOWL",
					"shortName": "BOWL"
				},
				"isSelected": false,
				"isSelectedInSharedTeam": false,
				"roleInSharedTeam": null,
				"role": null,
				"lineupOrder": null,
				"lineupStatus": null,
				"playingStyleIcon": [{
					"src": "https://d11-static-assets.s3.amazonaws.com/images/mobile/style_pace_icon_blue.png"
				}],
				"substituteInfo": {
					"isSub": false,
					"priority": 0,
					"replacedWith": null
				},
				"isAvailable": true,
				"battingOrder": 0
			}, {
				"artwork": [{
					"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image-men.png"
				}],
				"squad": {
					"id": 1037,
					"name": "LB",
					"jerseyColor": "",
					"shortName": "LB",
					"playerTextBgColor": "#364150",
					"playerTextFontColor": "#FFFFFF"
				},
				"credits": 8,
				"statistics": {
					"selectionRate": 54.91,
					"role": [{
						"id": 1,
						"selectionRate": 1.01
					}, {
						"id": 2,
						"selectionRate": 1.68
					}]
				},
				"id": 149823,
				"name": "Shahid Aziz",
				"nameInitial": "S",
				"points": 0,
				"type": {
					"id": 2,
					"maxPerTeam": 0,
					"minPerTeam": 0,
					"name": "BOWL",
					"shortName": "BOWL"
				},
				"isSelected": false,
				"isSelectedInSharedTeam": false,
				"roleInSharedTeam": null,
				"role": null,
				"lineupOrder": null,
				"lineupStatus": null,
				"playingStyleIcon": [{
					"src": "https://d11-static-assets.s3.amazonaws.com/images/mobile/style_pace_icon_blue.png"
				}],
				"substituteInfo": {
					"isSub": false,
					"priority": 0,
					"replacedWith": null
				},
				"isAvailable": true,
				"battingOrder": 0
			}, {
				"artwork": [{
					"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image-men.png"
				}],
				"squad": {
					"id": 6633,
					"name": "ABB",
					"jerseyColor": "",
					"shortName": "ABB",
					"playerTextBgColor": "#F0F3F7",
					"playerTextFontColor": "#202C3D"
				},
				"credits": 8,
				"statistics": {
					"selectionRate": 78.07,
					"role": [{
						"id": 1,
						"selectionRate": 1.45
					}, {
						"id": 2,
						"selectionRate": 3.01
					}]
				},
				"id": 15204,
				"name": "Arshad-Iqbal",
				"nameInitial": "A",
				"points": 0,
				"type": {
					"id": 2,
					"maxPerTeam": 0,
					"minPerTeam": 0,
					"name": "BOWL",
					"shortName": "BOWL"
				},
				"isSelected": false,
				"isSelectedInSharedTeam": false,
				"roleInSharedTeam": null,
				"role": null,
				"lineupOrder": null,
				"lineupStatus": null,
				"playingStyleIcon": [{
					"src": "https://d11-static-assets.s3.amazonaws.com/images/mobile/style_pace_icon_blue.png"
				}],
				"substituteInfo": {
					"isSub": false,
					"priority": 0,
					"replacedWith": null
				},
				"isAvailable": true,
				"battingOrder": 0
			}, {
				"artwork": [{
					"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image-men.png"
				}],
				"squad": {
					"id": 6633,
					"name": "ABB",
					"jerseyColor": "",
					"shortName": "ABB",
					"playerTextBgColor": "#F0F3F7",
					"playerTextFontColor": "#202C3D"
				},
				"credits": 6,
				"statistics": {
					"selectionRate": 0.97,
					"role": [{
						"id": 1,
						"selectionRate": 0.04
					}, {
						"id": 2,
						"selectionRate": 0.04
					}]
				},
				"id": 156700,
				"name": "Fayyaz Khan",
				"nameInitial": "F",
				"points": 0,
				"type": {
					"id": 2,
					"maxPerTeam": 0,
					"minPerTeam": 0,
					"name": "BOWL",
					"shortName": "BOWL"
				},
				"isSelected": false,
				"isSelectedInSharedTeam": false,
				"roleInSharedTeam": null,
				"role": null,
				"lineupOrder": null,
				"lineupStatus": null,
				"playingStyleIcon": [{
					"src": "https://d11-static-assets.s3.amazonaws.com/images/mobile/style_pace_icon_blue.png"
				}],
				"substituteInfo": {
					"isSub": false,
					"priority": 0,
					"replacedWith": null
				},
				"isAvailable": true,
				"battingOrder": 0
			}, {
				"artwork": [{
					"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image-men.png"
				}],
				"squad": {
					"id": 6633,
					"name": "ABB",
					"jerseyColor": "",
					"shortName": "ABB",
					"playerTextBgColor": "#F0F3F7",
					"playerTextFontColor": "#202C3D"
				},
				"credits": 6,
				"statistics": {
					"selectionRate": 3.79,
					"role": [{
						"id": 1,
						"selectionRate": 0.06
					}, {
						"id": 2,
						"selectionRate": 0.11
					}]
				},
				"id": 197926,
				"name": "Razaullah",
				"nameInitial": "R",
				"points": 0,
				"type": {
					"id": 2,
					"maxPerTeam": 0,
					"minPerTeam": 0,
					"name": "BOWL",
					"shortName": "BOWL"
				},
				"isSelected": false,
				"isSelectedInSharedTeam": false,
				"roleInSharedTeam": null,
				"role": null,
				"lineupOrder": null,
				"lineupStatus": null,
				"playingStyleIcon": [{
					"src": "https://d11-static-assets.s3.amazonaws.com/images/mobile/style_pace_icon_blue.png"
				}],
				"substituteInfo": {
					"isSub": false,
					"priority": 0,
					"replacedWith": null
				},
				"isAvailable": true,
				"battingOrder": 0
			}, {
				"artwork": [{
					"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image-men.png"
				}],
				"squad": {
					"id": 6633,
					"name": "ABB",
					"jerseyColor": "",
					"shortName": "ABB",
					"playerTextBgColor": "#F0F3F7",
					"playerTextFontColor": "#202C3D"
				},
				"credits": 7,
				"statistics": {
					"selectionRate": 11.53,
					"role": [{
						"id": 1,
						"selectionRate": 0.48
					}, {
						"id": 2,
						"selectionRate": 0.62
					}]
				},
				"id": 156701,
				"name": "Shahab Khan",
				"nameInitial": "S",
				"points": 0,
				"type": {
					"id": 2,
					"maxPerTeam": 0,
					"minPerTeam": 0,
					"name": "BOWL",
					"shortName": "BOWL"
				},
				"isSelected": false,
				"isSelectedInSharedTeam": false,
				"roleInSharedTeam": null,
				"role": null,
				"lineupOrder": null,
				"lineupStatus": null,
				"playingStyleIcon": [{
					"src": "https://d11-static-assets.s3.amazonaws.com/images/mobile/style_pace_icon_blue.png"
				}],
				"substituteInfo": {
					"isSub": false,
					"priority": 0,
					"replacedWith": null
				},
				"isAvailable": true,
				"battingOrder": 0
			}, {
				"artwork": [{
					"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image-men.png"
				}],
				"squad": {
					"id": 6633,
					"name": "ABB",
					"jerseyColor": "",
					"shortName": "ABB",
					"playerTextBgColor": "#F0F3F7",
					"playerTextFontColor": "#202C3D"
				},
				"credits": 6.5,
				"statistics": {
					"selectionRate": 1.67,
					"role": [{
						"id": 1,
						"selectionRate": 0.05
					}, {
						"id": 2,
						"selectionRate": 0.09
					}]
				},
				"id": 111122,
				"name": "Afaq Khan",
				"nameInitial": "A",
				"points": 0,
				"type": {
					"id": 2,
					"maxPerTeam": 0,
					"minPerTeam": 0,
					"name": "BOWL",
					"shortName": "BOWL"
				},
				"isSelected": false,
				"isSelectedInSharedTeam": false,
				"roleInSharedTeam": null,
				"role": null,
				"lineupOrder": null,
				"lineupStatus": null,
				"playingStyleIcon": null,
				"substituteInfo": {
					"isSub": false,
					"priority": 0,
					"replacedWith": null
				},
				"isAvailable": true,
				"battingOrder": 0
			}]
		}
	});
}
