import { BASEHEADERS } from '@/constants';
import { NextResponse } from 'next/server';

/**
:method: POST
:path: /graphql/query/react-native/create-team
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
content-length: 3740
accept-encoding: gzip

{"query":"\n    query CreateTeam($site: String!, $tourId: Int!, $teamId: Int = -1, $matchId: Int!, $isPreLineupsEnabled: Boolean = true, $isPostLineupsSinglePageCTEnabled: Boolean = false) {\n  site(slug: $site) {\n    id\n    name\n    maxTeamsAllowed\n    showTeamCombination {\n      count\n    }\n    teamCriteria {\n      totalCredits\n      maxPlayerPerSquad\n      totalPlayerCount\n    }\n    roles {\n      id\n      artwork {\n        src\n      }\n      color\n      name\n      pointMultiplier\n      shortName\n    }\n    playerTypes {\n      id\n      name\n      minPerTeam\n      maxPerTeam\n      shortName\n    }\n    tour(id: $tourId) {\n      id\n      name\n      match(id: $matchId) {\n        id\n        displayLineupOrder\n        lineupOrderExpected\n        userTeamsCount\n        matchHighlight {\n          color\n          text\n        }\n        squads {\n          flag {\n            src\n          }\n          squadColorPalette\n          flagWithName {\n            src\n          }\n          id\n          jerseyColor\n          name\n          shortName\n          fullName\n          playerTextBgColor\n          playerTextFontColor\n        }\n        showPlayerImages\n        startTime\n        status\n        tossResult\n        tossInfo {\n          wonBySquadId\n          wonBySquadShortName\n          decision\n          tossText\n        }\n        substitutionInfo {\n          maxSubsAllowed\n          status\n          teamPreviewText\n        }\n        players(teamId: $teamId, sendDifferentLineupsStatusKey: true) {\n          artwork {\n            src\n          }\n          squad {\n            id\n            name\n            jerseyColor\n            shortName\n            playerTextBgColor\n            playerTextFontColor\n          }\n          credits\n          statistics {\n            selectionRate\n            role {\n              id\n              selectionRate\n            }\n          }\n          id\n          name\n          nameInitial\n          points\n          type {\n            id\n            maxPerTeam\n            minPerTeam\n            name\n            shortName\n          }\n          isSelected\n          isSelectedInSharedTeam\n          role {\n            id\n            artwork {\n              src\n            }\n            color\n            name\n            pointMultiplier\n            shortName\n          }\n          lineupOrder\n          battingOrder @include(if: $isPostLineupsSinglePageCTEnabled)\n          isAvailable @include(if: $isPreLineupsEnabled)\n          lineupStatus {\n            status\n            text\n            color\n          }\n          playingStyleIcon {\n            src\n          }\n          substituteInfo(skipSubstituteInfo: false) {\n            isSub\n            priority\n            replacedWith {\n              id\n              role {\n                shortName\n              }\n            }\n          }\n        }\n        playingStyleLegends {\n          iconUrl {\n            src\n          }\n          text\n          legendId\n        }\n        roundLineupStatus @include(if: $isPostLineupsSinglePageCTEnabled)\n        preLineupsNote @include(if: $isPreLineupsEnabled)\n        lineupGroups @include(if: $isPostLineupsSinglePageCTEnabled) {\n          squadId\n          groups {\n            name\n            displayText\n            color\n            order\n            playerStatuses\n            displayBattingOrder\n          }\n        }\n      }\n    }\n  }\n  me {\n    isGuestUser\n    teamName\n    userType\n  }\n}\n    ","variables":{"site":"cricket","tourId":5390,"matchId":112992,"isPreLineupsEnabled":true,"isPostLineupsSinglePageCTEnabled":true}}

{
	"query": "\n    query CreateTeam($site: String!, $tourId: Int!, $teamId: Int = -1, $matchId: Int!, $isPreLineupsEnabled: Boolean = true, $isPostLineupsSinglePageCTEnabled: Boolean = false) {\n  site(slug: $site) {\n    id\n    name\n    maxTeamsAllowed\n    showTeamCombination {\n      count\n    }\n    teamCriteria {\n      totalCredits\n      maxPlayerPerSquad\n      totalPlayerCount\n    }\n    roles {\n      id\n      artwork {\n        src\n      }\n      color\n      name\n      pointMultiplier\n      shortName\n    }\n    playerTypes {\n      id\n      name\n      minPerTeam\n      maxPerTeam\n      shortName\n    }\n    tour(id: $tourId) {\n      id\n      name\n      match(id: $matchId) {\n        id\n        displayLineupOrder\n        lineupOrderExpected\n        userTeamsCount\n        matchHighlight {\n          color\n          text\n        }\n        squads {\n          flag {\n            src\n          }\n          squadColorPalette\n          flagWithName {\n            src\n          }\n          id\n          jerseyColor\n          name\n          shortName\n          fullName\n          playerTextBgColor\n          playerTextFontColor\n        }\n        showPlayerImages\n        startTime\n        status\n        tossResult\n        tossInfo {\n          wonBySquadId\n          wonBySquadShortName\n          decision\n          tossText\n        }\n        substitutionInfo {\n          maxSubsAllowed\n          status\n          teamPreviewText\n        }\n        players(teamId: $teamId, sendDifferentLineupsStatusKey: true) {\n          artwork {\n            src\n          }\n          squad {\n            id\n            name\n            jerseyColor\n            shortName\n            playerTextBgColor\n            playerTextFontColor\n          }\n          credits\n          statistics {\n            selectionRate\n            role {\n              id\n              selectionRate\n            }\n          }\n          id\n          name\n          nameInitial\n          points\n          type {\n            id\n            maxPerTeam\n            minPerTeam\n            name\n            shortName\n          }\n          isSelected\n          isSelectedInSharedTeam\n          role {\n            id\n            artwork {\n              src\n            }\n            color\n            name\n            pointMultiplier\n            shortName\n          }\n          lineupOrder\n          battingOrder @include(if: $isPostLineupsSinglePageCTEnabled)\n          isAvailable @include(if: $isPreLineupsEnabled)\n          lineupStatus {\n            status\n            text\n            color\n          }\n          playingStyleIcon {\n            src\n          }\n          substituteInfo(skipSubstituteInfo: false) {\n            isSub\n            priority\n            replacedWith {\n              id\n              role {\n                shortName\n              }\n            }\n          }\n        }\n        playingStyleLegends {\n          iconUrl {\n            src\n          }\n          text\n          legendId\n        }\n        roundLineupStatus @include(if: $isPostLineupsSinglePageCTEnabled)\n        preLineupsNote @include(if: $isPreLineupsEnabled)\n        lineupGroups @include(if: $isPostLineupsSinglePageCTEnabled) {\n          squadId\n          groups {\n            name\n            displayText\n            color\n            order\n            playerStatuses\n            displayBattingOrder\n          }\n        }\n      }\n    }\n  }\n  me {\n    isGuestUser\n    teamName\n    userType\n  }\n}\n    ",
	"variables": {
		"site": "cricket",
		"tourId": 5393,
		"teamId": -1,
		"matchId": 113005,
		"isPreLineupsEnabled": true,
		"isPostLineupsSinglePageCTEnabled": true
	}
}

*/
export async function POST(request: Request) {
	const body = await request.json();
	const { query, variables } = body;
	
	if (process.env.API_URL) {
		// Use real API to fetch data
		try {
			const apiURL = process.env.API_URL + "/graphql/query/react-native/create-team";
			const response = await fetch(apiURL, {
				method: 'POST',
				headers: BASEHEADERS,
				body: JSON.stringify({
					query,
					variables
				}),
				// Next.js 特有缓存配置：每 60 秒刷新一次数据
				next: { revalidate: 60 }
			});
			
			if (!response.ok) {
				throw new Error(`API request failed: ${response.status}, url: ${apiURL}, headers: ${JSON.stringify(BASEHEADERS)}`);
			}
			
			const data = await response.json();
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
				"maxTeamsAllowed": 40,
				"showTeamCombination": {
					"count": 0
				},
				"teamCriteria": {
					"totalCredits": 100,
					"maxPlayerPerSquad": 10,
					"totalPlayerCount": 11
				},
				"roles": [{
					"id": 1,
					"artwork": [{
						"src": "https://assets.dream11.com/public/imgs/playerRoleArtwork/Captain_Default.svg"
					}],
					"color": "#F5A623",
					"name": "Captain",
					"pointMultiplier": 2,
					"shortName": "C"
				}, {
					"id": 2,
					"artwork": [{
						"src": "https://assets.dream11.com/public/imgs/playerRoleArtwork/ViceCaptain_Default.svg"
					}],
					"color": "#4A90E2",
					"name": "Vice Captain",
					"pointMultiplier": 1.5,
					"shortName": "VC"
				}],
				"playerTypes": [{
					"id": 3,
					"name": "Wicket-Keepers",
					"minPerTeam": 1,
					"maxPerTeam": 8,
					"shortName": "WK"
				}, {
					"id": 1,
					"name": "Batters",
					"minPerTeam": 1,
					"maxPerTeam": 8,
					"shortName": "BAT"
				}, {
					"id": 4,
					"name": "All-Rounders",
					"minPerTeam": 1,
					"maxPerTeam": 8,
					"shortName": "AR"
				}, {
					"id": 2,
					"name": "Bowlers",
					"minPerTeam": 1,
					"maxPerTeam": 8,
					"shortName": "BOWL"
				}],
				"tour": {
					"id": 5390,
					"name": "Malaysia vs Bahrain OD",
					"match": {
						"id": 112992,
						"displayLineupOrder": false,
						"lineupOrderExpected": true,
						"userTeamsCount": 0,
						"matchHighlight": null,
						"squads": [{
							"flag": [{
								"src": "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/FC-MALY@2x.png"
							}],
							"squadColorPalette": "#ffd800",
							"flagWithName": [{
								"src": "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/FC-MALY@2x-BIG.png"
							}],
							"id": 7029,
							"jerseyColor": "",
							"name": "MAL",
							"shortName": "MAL",
							"fullName": "Malaysia",
							"playerTextBgColor": "#F0F3F7",
							"playerTextFontColor": "#202C3D"
						}, {
							"flag": [{
								"src": "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/BAH-CR1@2x.png"
							}],
							"squadColorPalette": "#ea4d5e",
							"flagWithName": [{
								"src": "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/BAH-CR1@2x-BIG.png"
							}],
							"id": 19,
							"jerseyColor": "#C85808",
							"name": "BAH",
							"shortName": "BAH",
							"fullName": "Bahrain",
							"playerTextBgColor": "#364150",
							"playerTextFontColor": "#FFFFFF"
						}],
						"showPlayerImages": true,
						"startTime": "2026-03-16T01:30:00.000Z",
						"status": "NOT_STARTED",
						"tossResult": null,
						"tossInfo": null,
						"substitutionInfo": {
							"maxSubsAllowed": 4,
							"status": "PENDING",
							"teamPreviewText": ""
						},
						"players": [{
							"artwork": [{
								"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image-men.png"
							}],
							"squad": {
								"id": 19,
								"name": "BAH",
								"jerseyColor": "#C85808",
								"shortName": "BAH",
								"playerTextBgColor": "#364150",
								"playerTextFontColor": "#FFFFFF"
							},
							"credits": 6.5,
							"statistics": {
								"selectionRate": 12.68,
								"role": [{
									"id": 1,
									"selectionRate": 0.52
								}, {
									"id": 2,
									"selectionRate": 0.74
								}]
							},
							"id": 167900,
							"name": "Shujaat Rasool",
							"nameInitial": "S",
							"points": 74,
							"type": {
								"id": 4,
								"maxPerTeam": 0,
								"minPerTeam": 0,
								"name": "ALL",
								"shortName": "ALL"
							},
							"isSelected": false,
							"isSelectedInSharedTeam": false,
							"role": null,
							"lineupOrder": 7,
							"battingOrder": 7,
							"isAvailable": true,
							"lineupStatus": {
								"status": "LAST_PLAYED",
								"text": "Played last match",
								"color": "#004396"
							},
							"playingStyleIcon": [{
								"src": "https://d11-static-assets.s3.amazonaws.com/images/mobile/style_pace_icon_blue.png"
							}],
							"substituteInfo": {
								"isSub": false,
								"priority": 0,
								"replacedWith": null
							}
						}, {
							"artwork": [{
								"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image-men.png"
							}],
							"squad": {
								"id": 19,
								"name": "BAH",
								"jerseyColor": "#C85808",
								"shortName": "BAH",
								"playerTextBgColor": "#364150",
								"playerTextFontColor": "#FFFFFF"
							},
							"credits": 9,
							"statistics": {
								"selectionRate": 84.82,
								"role": [{
									"id": 1,
									"selectionRate": 5.57
								}, {
									"id": 2,
									"selectionRate": 8.25
								}]
							},
							"id": 179557,
							"name": "Asif Ali",
							"nameInitial": "A",
							"points": 160,
							"type": {
								"id": 4,
								"maxPerTeam": 0,
								"minPerTeam": 0,
								"name": "ALL",
								"shortName": "ALL"
							},
							"isSelected": false,
							"isSelectedInSharedTeam": false,
							"role": null,
							"lineupOrder": 1,
							"battingOrder": 1,
							"isAvailable": true,
							"lineupStatus": {
								"status": "LAST_PLAYED",
								"text": "Played last match",
								"color": "#004396"
							},
							"playingStyleIcon": [{
								"src": "https://d11-static-assets.s3.amazonaws.com/images/mobile/style_spin_icon_blue.png"
							}],
							"substituteInfo": {
								"isSub": false,
								"priority": 0,
								"replacedWith": null
							}
						}, {
							"artwork": [{
								"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image-men.png"
							}],
							"squad": {
								"id": 19,
								"name": "BAH",
								"jerseyColor": "#C85808",
								"shortName": "BAH",
								"playerTextBgColor": "#364150",
								"playerTextFontColor": "#FFFFFF"
							},
							"credits": 7,
							"statistics": {
								"selectionRate": 0.41,
								"role": [{
									"id": 1,
									"selectionRate": 0.03
								}, {
									"id": 2,
									"selectionRate": 0.03
								}]
							},
							"id": 192059,
							"name": "Abdullah Yousuf",
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
							"role": null,
							"lineupOrder": null,
							"battingOrder": 0,
							"isAvailable": true,
							"lineupStatus": null,
							"playingStyleIcon": [{
								"src": "https://d11-static-assets.s3.amazonaws.com/images/mobile/style_pace_icon_blue.png"
							}],
							"substituteInfo": {
								"isSub": false,
								"priority": 0,
								"replacedWith": null
							}
						}, {
							"artwork": [{
								"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image-men.png"
							}],
							"squad": {
								"id": 7029,
								"name": "MAL",
								"jerseyColor": "",
								"shortName": "MAL",
								"playerTextBgColor": "#F0F3F7",
								"playerTextFontColor": "#202C3D"
							},
							"credits": 9,
							"statistics": {
								"selectionRate": 89.13,
								"role": [{
									"id": 1,
									"selectionRate": 12.03
								}, {
									"id": 2,
									"selectionRate": 13.73
								}]
							},
							"id": 12059,
							"name": "Virandeep Singh",
							"nameInitial": "V",
							"points": 208,
							"type": {
								"id": 4,
								"maxPerTeam": 0,
								"minPerTeam": 0,
								"name": "ALL",
								"shortName": "ALL"
							},
							"isSelected": false,
							"isSelectedInSharedTeam": false,
							"role": null,
							"lineupOrder": 5,
							"battingOrder": 5,
							"isAvailable": true,
							"lineupStatus": {
								"status": "LAST_PLAYED",
								"text": "Played last match",
								"color": "#004396"
							},
							"playingStyleIcon": [{
								"src": "https://d11-static-assets.s3.amazonaws.com/images/mobile/style_spin_icon_blue.png"
							}],
							"substituteInfo": {
								"isSub": false,
								"priority": 0,
								"replacedWith": null
							}
						}, {
							"artwork": [{
								"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image-men.png"
							}],
							"squad": {
								"id": 7029,
								"name": "MAL",
								"jerseyColor": "",
								"shortName": "MAL",
								"playerTextBgColor": "#F0F3F7",
								"playerTextFontColor": "#202C3D"
							},
							"credits": 8,
							"statistics": {
								"selectionRate": 82.35,
								"role": [{
									"id": 1,
									"selectionRate": 12.75
								}, {
									"id": 2,
									"selectionRate": 18.69
								}]
							},
							"id": 14258,
							"name": "Vijay Unni",
							"nameInitial": "V",
							"points": 275,
							"type": {
								"id": 4,
								"maxPerTeam": 0,
								"minPerTeam": 0,
								"name": "ALL",
								"shortName": "ALL"
							},
							"isSelected": false,
							"isSelectedInSharedTeam": false,
							"role": null,
							"lineupOrder": 9,
							"battingOrder": 9,
							"isAvailable": true,
							"lineupStatus": {
								"status": "LAST_PLAYED",
								"text": "Played last match",
								"color": "#004396"
							},
							"playingStyleIcon": [{
								"src": "https://d11-static-assets.s3.amazonaws.com/images/mobile/style_spin_icon_blue.png"
							}],
							"substituteInfo": {
								"isSub": false,
								"priority": 0,
								"replacedWith": null
							}
						}, {
							"artwork": [{
								"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image-men.png"
							}],
							"squad": {
								"id": 7029,
								"name": "MAL",
								"jerseyColor": "",
								"shortName": "MAL",
								"playerTextBgColor": "#F0F3F7",
								"playerTextFontColor": "#202C3D"
							},
							"credits": 8.5,
							"statistics": {
								"selectionRate": 10.88,
								"role": [{
									"id": 1,
									"selectionRate": 0.33
								}, {
									"id": 2,
									"selectionRate": 0.49
								}]
							},
							"id": 18071,
							"name": "Muhamad Syahadat-Ramli",
							"nameInitial": "M",
							"points": 31,
							"type": {
								"id": 4,
								"maxPerTeam": 0,
								"minPerTeam": 0,
								"name": "ALL",
								"shortName": "ALL"
							},
							"isSelected": false,
							"isSelectedInSharedTeam": false,
							"role": null,
							"lineupOrder": 6,
							"battingOrder": 6,
							"isAvailable": true,
							"lineupStatus": {
								"status": "LAST_PLAYED",
								"text": "Played last match",
								"color": "#004396"
							},
							"playingStyleIcon": [{
								"src": "https://d11-static-assets.s3.amazonaws.com/images/mobile/style_spin_icon_blue.png"
							}],
							"substituteInfo": {
								"isSub": false,
								"priority": 0,
								"replacedWith": null
							}
						}, {
							"artwork": [{
								"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image-men.png"
							}],
							"squad": {
								"id": 7029,
								"name": "MAL",
								"jerseyColor": "",
								"shortName": "MAL",
								"playerTextBgColor": "#F0F3F7",
								"playerTextFontColor": "#202C3D"
							},
							"credits": 9,
							"statistics": {
								"selectionRate": 31.03,
								"role": [{
									"id": 1,
									"selectionRate": 1.27
								}, {
									"id": 2,
									"selectionRate": 1.55
								}]
							},
							"id": 18072,
							"name": "Sharvin Muniandy",
							"nameInitial": "S",
							"points": 66,
							"type": {
								"id": 4,
								"maxPerTeam": 0,
								"minPerTeam": 0,
								"name": "ALL",
								"shortName": "ALL"
							},
							"isSelected": false,
							"isSelectedInSharedTeam": false,
							"role": null,
							"lineupOrder": 3,
							"battingOrder": 3,
							"isAvailable": true,
							"lineupStatus": {
								"status": "LAST_PLAYED",
								"text": "Played last match",
								"color": "#004396"
							},
							"playingStyleIcon": [{
								"src": "https://d11-static-assets.s3.amazonaws.com/images/mobile/style_pace_icon_blue.png"
							}],
							"substituteInfo": {
								"isSub": false,
								"priority": 0,
								"replacedWith": null
							}
						}, {
							"artwork": [{
								"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image-men.png"
							}],
							"squad": {
								"id": 7029,
								"name": "MAL",
								"jerseyColor": "",
								"shortName": "MAL",
								"playerTextBgColor": "#F0F3F7",
								"playerTextFontColor": "#202C3D"
							},
							"credits": 7.5,
							"statistics": {
								"selectionRate": 0.75,
								"role": [{
									"id": 1,
									"selectionRate": 0.04
								}, {
									"id": 2,
									"selectionRate": 0.04
								}]
							},
							"id": 27659,
							"name": "Muhammad Amir-Azim",
							"nameInitial": "M",
							"points": 42,
							"type": {
								"id": 4,
								"maxPerTeam": 0,
								"minPerTeam": 0,
								"name": "ALL",
								"shortName": "ALL"
							},
							"isSelected": false,
							"isSelectedInSharedTeam": false,
							"role": null,
							"lineupOrder": null,
							"battingOrder": 0,
							"isAvailable": true,
							"lineupStatus": null,
							"playingStyleIcon": [{
								"src": "https://d11-static-assets.s3.amazonaws.com/images/mobile/style_spin_icon_blue.png"
							}],
							"substituteInfo": {
								"isSub": false,
								"priority": 0,
								"replacedWith": null
							}
						}, {
							"artwork": [{
								"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image-men.png"
							}],
							"squad": {
								"id": 7029,
								"name": "MAL",
								"jerseyColor": "",
								"shortName": "MAL",
								"playerTextBgColor": "#F0F3F7",
								"playerTextFontColor": "#202C3D"
							},
							"credits": 8.5,
							"statistics": {
								"selectionRate": 90.75,
								"role": [{
									"id": 1,
									"selectionRate": 35.49
								}, {
									"id": 2,
									"selectionRate": 12.93
								}]
							},
							"id": 44689,
							"name": "Syed Aziz",
							"nameInitial": "S",
							"points": 291,
							"type": {
								"id": 4,
								"maxPerTeam": 0,
								"minPerTeam": 0,
								"name": "ALL",
								"shortName": "ALL"
							},
							"isSelected": false,
							"isSelectedInSharedTeam": false,
							"role": null,
							"lineupOrder": 1,
							"battingOrder": 1,
							"isAvailable": true,
							"lineupStatus": {
								"status": "LAST_PLAYED",
								"text": "Played last match",
								"color": "#004396"
							},
							"playingStyleIcon": [{
								"src": "https://d11-static-assets.s3.amazonaws.com/images/mobile/style_pace_icon_blue.png"
							}],
							"substituteInfo": {
								"isSub": false,
								"priority": 0,
								"replacedWith": null
							}
						}, {
							"artwork": [{
								"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image-men.png"
							}],
							"squad": {
								"id": 7029,
								"name": "MAL",
								"jerseyColor": "",
								"shortName": "MAL",
								"playerTextBgColor": "#F0F3F7",
								"playerTextFontColor": "#202C3D"
							},
							"credits": 6.5,
							"statistics": {
								"selectionRate": 51.26,
								"role": [{
									"id": 1,
									"selectionRate": 1.2
								}, {
									"id": 2,
									"selectionRate": 1.97
								}]
							},
							"id": 97815,
							"name": "Mohammad Akram Malek",
							"nameInitial": "M",
							"points": 140,
							"type": {
								"id": 4,
								"maxPerTeam": 0,
								"minPerTeam": 0,
								"name": "ALL",
								"shortName": "ALL"
							},
							"isSelected": false,
							"isSelectedInSharedTeam": false,
							"role": null,
							"lineupOrder": 7,
							"battingOrder": 7,
							"isAvailable": true,
							"lineupStatus": {
								"status": "LAST_PLAYED",
								"text": "Played last match",
								"color": "#004396"
							},
							"playingStyleIcon": [{
								"src": "https://d11-static-assets.s3.amazonaws.com/images/mobile/style_pace_icon_blue.png"
							}],
							"substituteInfo": {
								"isSub": false,
								"priority": 0,
								"replacedWith": null
							}
						}, {
							"artwork": [{
								"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image-men.png"
							}],
							"squad": {
								"id": 7029,
								"name": "MAL",
								"jerseyColor": "",
								"shortName": "MAL",
								"playerTextBgColor": "#F0F3F7",
								"playerTextFontColor": "#202C3D"
							},
							"credits": 7,
							"statistics": {
								"selectionRate": 8.99,
								"role": [{
									"id": 1,
									"selectionRate": 0.31
								}, {
									"id": 2,
									"selectionRate": 0.45
								}]
							},
							"id": 97740,
							"name": "Hamzah Bin-Panggi",
							"nameInitial": "H",
							"points": 72,
							"type": {
								"id": 4,
								"maxPerTeam": 0,
								"minPerTeam": 0,
								"name": "ALL",
								"shortName": "ALL"
							},
							"isSelected": false,
							"isSelectedInSharedTeam": false,
							"role": null,
							"lineupOrder": 10,
							"battingOrder": 10,
							"isAvailable": true,
							"lineupStatus": {
								"status": "LAST_PLAYED",
								"text": "Played last match",
								"color": "#004396"
							},
							"playingStyleIcon": [{
								"src": "https://d11-static-assets.s3.amazonaws.com/images/mobile/style_spin_icon_blue.png"
							}],
							"substituteInfo": {
								"isSub": false,
								"priority": 0,
								"replacedWith": null
							}
						}, {
							"artwork": [{
								"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image-men.png"
							}],
							"squad": {
								"id": 19,
								"name": "BAH",
								"jerseyColor": "#C85808",
								"shortName": "BAH",
								"playerTextBgColor": "#364150",
								"playerTextFontColor": "#FFFFFF"
							},
							"credits": 7,
							"statistics": {
								"selectionRate": 13.28,
								"role": [{
									"id": 1,
									"selectionRate": 0.65
								}, {
									"id": 2,
									"selectionRate": 0.65
								}]
							},
							"id": 20473,
							"name": "Yasir Nazir",
							"nameInitial": "Y",
							"points": 36,
							"type": {
								"id": 3,
								"maxPerTeam": 0,
								"minPerTeam": 0,
								"name": "WK",
								"shortName": "WK"
							},
							"isSelected": false,
							"isSelectedInSharedTeam": false,
							"role": null,
							"lineupOrder": 5,
							"battingOrder": 5,
							"isAvailable": true,
							"lineupStatus": {
								"status": "LAST_PLAYED",
								"text": "Played last match",
								"color": "#004396"
							},
							"playingStyleIcon": null,
							"substituteInfo": {
								"isSub": false,
								"priority": 0,
								"replacedWith": null
							}
						}, {
							"artwork": [{
								"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image-men.png"
							}],
							"squad": {
								"id": 19,
								"name": "BAH",
								"jerseyColor": "#C85808",
								"shortName": "BAH",
								"playerTextBgColor": "#364150",
								"playerTextFontColor": "#FFFFFF"
							},
							"credits": 8,
							"statistics": {
								"selectionRate": 70.83,
								"role": [{
									"id": 1,
									"selectionRate": 2.65
								}, {
									"id": 2,
									"selectionRate": 2.55
								}]
							},
							"id": 82547,
							"name": "Prashanth Kurup",
							"nameInitial": "P",
							"points": 76,
							"type": {
								"id": 3,
								"maxPerTeam": 0,
								"minPerTeam": 0,
								"name": "WK",
								"shortName": "WK"
							},
							"isSelected": false,
							"isSelectedInSharedTeam": false,
							"role": null,
							"lineupOrder": 2,
							"battingOrder": 2,
							"isAvailable": true,
							"lineupStatus": {
								"status": "LAST_PLAYED",
								"text": "Played last match",
								"color": "#004396"
							},
							"playingStyleIcon": null,
							"substituteInfo": {
								"isSub": false,
								"priority": 0,
								"replacedWith": null
							}
						}, {
							"artwork": [{
								"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image-men.png"
							}],
							"squad": {
								"id": 7029,
								"name": "MAL",
								"jerseyColor": "",
								"shortName": "MAL",
								"playerTextBgColor": "#F0F3F7",
								"playerTextFontColor": "#202C3D"
							},
							"credits": 7.5,
							"statistics": {
								"selectionRate": 0.48,
								"role": [{
									"id": 1,
									"selectionRate": 0.05
								}, {
									"id": 2,
									"selectionRate": 0.05
								}]
							},
							"id": 97801,
							"name": "Mohammad Haziq Aiman",
							"nameInitial": "M",
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
							"role": null,
							"lineupOrder": null,
							"battingOrder": 0,
							"isAvailable": true,
							"lineupStatus": null,
							"playingStyleIcon": null,
							"substituteInfo": {
								"isSub": false,
								"priority": 0,
								"replacedWith": null
							}
						}, {
							"artwork": [{
								"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image-men.png"
							}],
							"squad": {
								"id": 7029,
								"name": "MAL",
								"jerseyColor": "",
								"shortName": "MAL",
								"playerTextBgColor": "#F0F3F7",
								"playerTextFontColor": "#202C3D"
							},
							"credits": 7.5,
							"statistics": {
								"selectionRate": 1.11,
								"role": [{
									"id": 1,
									"selectionRate": 0.09
								}, {
									"id": 2,
									"selectionRate": 0.1
								}]
							},
							"id": 145665,
							"name": "Adeshlie Alias",
							"nameInitial": "A",
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
							"role": null,
							"lineupOrder": null,
							"battingOrder": 0,
							"isAvailable": true,
							"lineupStatus": null,
							"playingStyleIcon": null,
							"substituteInfo": {
								"isSub": false,
								"priority": 0,
								"replacedWith": null
							}
						}, {
							"artwork": [{
								"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image-men.png"
							}],
							"squad": {
								"id": 7029,
								"name": "MAL",
								"jerseyColor": "",
								"shortName": "MAL",
								"playerTextBgColor": "#F0F3F7",
								"playerTextFontColor": "#202C3D"
							},
							"credits": 7.5,
							"statistics": {
								"selectionRate": 44.93,
								"role": [{
									"id": 1,
									"selectionRate": 1.54
								}, {
									"id": 2,
									"selectionRate": 1.86
								}]
							},
							"id": 97808,
							"name": "Mohammad Hairil Harisan",
							"nameInitial": "M",
							"points": 72,
							"type": {
								"id": 3,
								"maxPerTeam": 0,
								"minPerTeam": 0,
								"name": "WK",
								"shortName": "WK"
							},
							"isSelected": false,
							"isSelectedInSharedTeam": false,
							"role": null,
							"lineupOrder": 2,
							"battingOrder": 2,
							"isAvailable": true,
							"lineupStatus": {
								"status": "LAST_PLAYED",
								"text": "Played last match",
								"color": "#004396"
							},
							"playingStyleIcon": null,
							"substituteInfo": {
								"isSub": false,
								"priority": 0,
								"replacedWith": null
							}
						}, {
							"artwork": [{
								"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image-men.png"
							}],
							"squad": {
								"id": 19,
								"name": "BAH",
								"jerseyColor": "#C85808",
								"shortName": "BAH",
								"playerTextBgColor": "#364150",
								"playerTextFontColor": "#FFFFFF"
							},
							"credits": 9,
							"statistics": {
								"selectionRate": 78.47,
								"role": [{
									"id": 1,
									"selectionRate": 4.17
								}, {
									"id": 2,
									"selectionRate": 4.64
								}]
							},
							"id": 25535,
							"name": "Fiaz Ahmed",
							"nameInitial": "F",
							"points": 159,
							"type": {
								"id": 1,
								"maxPerTeam": 0,
								"minPerTeam": 0,
								"name": "BAT",
								"shortName": "BAT"
							},
							"isSelected": false,
							"isSelectedInSharedTeam": false,
							"role": null,
							"lineupOrder": 3,
							"battingOrder": 3,
							"isAvailable": true,
							"lineupStatus": {
								"status": "LAST_PLAYED",
								"text": "Played last match",
								"color": "#004396"
							},
							"playingStyleIcon": null,
							"substituteInfo": {
								"isSub": false,
								"priority": 0,
								"replacedWith": null
							}
						}, {
							"artwork": [{
								"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image-men.png"
							}],
							"squad": {
								"id": 19,
								"name": "BAH",
								"jerseyColor": "#C85808",
								"shortName": "BAH",
								"playerTextBgColor": "#364150",
								"playerTextFontColor": "#FFFFFF"
							},
							"credits": 7.5,
							"statistics": {
								"selectionRate": 15.15,
								"role": [{
									"id": 1,
									"selectionRate": 0.87
								}, {
									"id": 2,
									"selectionRate": 1.03
								}]
							},
							"id": 121368,
							"name": "Sohail Ahmed",
							"nameInitial": "S",
							"points": 48,
							"type": {
								"id": 1,
								"maxPerTeam": 0,
								"minPerTeam": 0,
								"name": "BAT",
								"shortName": "BAT"
							},
							"isSelected": false,
							"isSelectedInSharedTeam": false,
							"role": null,
							"lineupOrder": 4,
							"battingOrder": 4,
							"isAvailable": true,
							"lineupStatus": {
								"status": "LAST_PLAYED",
								"text": "Played last match",
								"color": "#004396"
							},
							"playingStyleIcon": null,
							"substituteInfo": {
								"isSub": false,
								"priority": 0,
								"replacedWith": null
							}
						}, {
							"artwork": [{
								"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image-men.png"
							}],
							"squad": {
								"id": 19,
								"name": "BAH",
								"jerseyColor": "#C85808",
								"shortName": "BAH",
								"playerTextBgColor": "#364150",
								"playerTextFontColor": "#FFFFFF"
							},
							"credits": 8,
							"statistics": {
								"selectionRate": 59.43,
								"role": [{
									"id": 1,
									"selectionRate": 2.16
								}, {
									"id": 2,
									"selectionRate": 2.93
								}]
							},
							"id": 121443,
							"name": "Ahmer Bin Nasir",
							"nameInitial": "A",
							"points": 147,
							"type": {
								"id": 1,
								"maxPerTeam": 0,
								"minPerTeam": 0,
								"name": "BAT",
								"shortName": "BAT"
							},
							"isSelected": false,
							"isSelectedInSharedTeam": false,
							"role": null,
							"lineupOrder": 6,
							"battingOrder": 6,
							"isAvailable": true,
							"lineupStatus": {
								"status": "LAST_PLAYED",
								"text": "Played last match",
								"color": "#004396"
							},
							"playingStyleIcon": null,
							"substituteInfo": {
								"isSub": false,
								"priority": 0,
								"replacedWith": null
							}
						}, {
							"artwork": [{
								"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image-men.png"
							}],
							"squad": {
								"id": 7029,
								"name": "MAL",
								"jerseyColor": "",
								"shortName": "MAL",
								"playerTextBgColor": "#F0F3F7",
								"playerTextFontColor": "#202C3D"
							},
							"credits": 8.5,
							"statistics": {
								"selectionRate": 19.32,
								"role": [{
									"id": 1,
									"selectionRate": 1.05
								}, {
									"id": 2,
									"selectionRate": 1.28
								}]
							},
							"id": 4158,
							"name": "Ahmad Faiz",
							"nameInitial": "A",
							"points": 32,
							"type": {
								"id": 1,
								"maxPerTeam": 0,
								"minPerTeam": 0,
								"name": "BAT",
								"shortName": "BAT"
							},
							"isSelected": false,
							"isSelectedInSharedTeam": false,
							"role": null,
							"lineupOrder": 4,
							"battingOrder": 4,
							"isAvailable": true,
							"lineupStatus": {
								"status": "LAST_PLAYED",
								"text": "Played last match",
								"color": "#004396"
							},
							"playingStyleIcon": null,
							"substituteInfo": {
								"isSub": false,
								"priority": 0,
								"replacedWith": null
							}
						}, {
							"artwork": [{
								"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image-men.png"
							}],
							"squad": {
								"id": 7029,
								"name": "MAL",
								"jerseyColor": "",
								"shortName": "MAL",
								"playerTextBgColor": "#F0F3F7",
								"playerTextFontColor": "#202C3D"
							},
							"credits": 6.5,
							"statistics": {
								"selectionRate": 68.41,
								"role": [{
									"id": 1,
									"selectionRate": 3.21
								}, {
									"id": 2,
									"selectionRate": 3.55
								}]
							},
							"id": 149346,
							"name": "Prashant Madhukar",
							"nameInitial": "P",
							"points": 193,
							"type": {
								"id": 1,
								"maxPerTeam": 0,
								"minPerTeam": 0,
								"name": "BAT",
								"shortName": "BAT"
							},
							"isSelected": false,
							"isSelectedInSharedTeam": false,
							"role": null,
							"lineupOrder": 11,
							"battingOrder": 11,
							"isAvailable": true,
							"lineupStatus": {
								"status": "LAST_PLAYED",
								"text": "Played last match",
								"color": "#004396"
							},
							"playingStyleIcon": null,
							"substituteInfo": {
								"isSub": false,
								"priority": 0,
								"replacedWith": null
							}
						}, {
							"artwork": [{
								"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image-men.png"
							}],
							"squad": {
								"id": 7029,
								"name": "MAL",
								"jerseyColor": "",
								"shortName": "MAL",
								"playerTextBgColor": "#F0F3F7",
								"playerTextFontColor": "#202C3D"
							},
							"credits": 8,
							"statistics": {
								"selectionRate": 1.45,
								"role": [{
									"id": 1,
									"selectionRate": 0.09
								}, {
									"id": 2,
									"selectionRate": 0.09
								}]
							},
							"id": 44683,
							"name": "Ahmad Zubaidi Zulkifle",
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
							"role": null,
							"lineupOrder": null,
							"battingOrder": 0,
							"isAvailable": true,
							"lineupStatus": null,
							"playingStyleIcon": null,
							"substituteInfo": {
								"isSub": false,
								"priority": 0,
								"replacedWith": null
							}
						}, {
							"artwork": [{
								"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image-men.png"
							}],
							"squad": {
								"id": 7029,
								"name": "MAL",
								"jerseyColor": "",
								"shortName": "MAL",
								"playerTextBgColor": "#F0F3F7",
								"playerTextFontColor": "#202C3D"
							},
							"credits": 7,
							"statistics": {
								"selectionRate": 0.66,
								"role": [{
									"id": 1,
									"selectionRate": 0.04
								}, {
									"id": 2,
									"selectionRate": 0.04
								}]
							},
							"id": 145432,
							"name": "Deeaz Patro",
							"nameInitial": "D",
							"points": 14,
							"type": {
								"id": 1,
								"maxPerTeam": 0,
								"minPerTeam": 0,
								"name": "BAT",
								"shortName": "BAT"
							},
							"isSelected": false,
							"isSelectedInSharedTeam": false,
							"role": null,
							"lineupOrder": null,
							"battingOrder": 0,
							"isAvailable": true,
							"lineupStatus": null,
							"playingStyleIcon": null,
							"substituteInfo": {
								"isSub": false,
								"priority": 0,
								"replacedWith": null
							}
						}, {
							"artwork": [{
								"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image-men.png"
							}],
							"squad": {
								"id": 19,
								"name": "BAH",
								"jerseyColor": "#C85808",
								"shortName": "BAH",
								"playerTextBgColor": "#364150",
								"playerTextFontColor": "#FFFFFF"
							},
							"credits": 8.5,
							"statistics": {
								"selectionRate": 5.52,
								"role": [{
									"id": 1,
									"selectionRate": 0.31
								}, {
									"id": 2,
									"selectionRate": 0.38
								}]
							},
							"id": 106835,
							"name": "Ali Dawood",
							"nameInitial": "A",
							"points": 116,
							"type": {
								"id": 2,
								"maxPerTeam": 0,
								"minPerTeam": 0,
								"name": "BOWL",
								"shortName": "BOWL"
							},
							"isSelected": false,
							"isSelectedInSharedTeam": false,
							"role": null,
							"lineupOrder": null,
							"battingOrder": 0,
							"isAvailable": true,
							"lineupStatus": null,
							"playingStyleIcon": [{
								"src": "https://d11-static-assets.s3.amazonaws.com/images/mobile/style_pace_icon_blue.png"
							}],
							"substituteInfo": {
								"isSub": false,
								"priority": 0,
								"replacedWith": null
							}
						}, {
							"artwork": [{
								"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image-men.png"
							}],
							"squad": {
								"id": 19,
								"name": "BAH",
								"jerseyColor": "#C85808",
								"shortName": "BAH",
								"playerTextBgColor": "#364150",
								"playerTextFontColor": "#FFFFFF"
							},
							"credits": 8,
							"statistics": {
								"selectionRate": 75.83,
								"role": [{
									"id": 1,
									"selectionRate": 4.08
								}, {
									"id": 2,
									"selectionRate": 7.45
								}]
							},
							"id": 106837,
							"name": "Imran Khan",
							"nameInitial": "I",
							"points": 226,
							"type": {
								"id": 2,
								"maxPerTeam": 0,
								"minPerTeam": 0,
								"name": "BOWL",
								"shortName": "BOWL"
							},
							"isSelected": false,
							"isSelectedInSharedTeam": false,
							"role": null,
							"lineupOrder": 11,
							"battingOrder": 11,
							"isAvailable": true,
							"lineupStatus": {
								"status": "LAST_PLAYED",
								"text": "Played last match",
								"color": "#004396"
							},
							"playingStyleIcon": [{
								"src": "https://d11-static-assets.s3.amazonaws.com/images/mobile/style_pace_icon_blue.png"
							}],
							"substituteInfo": {
								"isSub": false,
								"priority": 0,
								"replacedWith": null
							}
						}, {
							"artwork": [{
								"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image-men.png"
							}],
							"squad": {
								"id": 19,
								"name": "BAH",
								"jerseyColor": "#C85808",
								"shortName": "BAH",
								"playerTextBgColor": "#364150",
								"playerTextFontColor": "#FFFFFF"
							},
							"credits": 9,
							"statistics": {
								"selectionRate": 67.02,
								"role": [{
									"id": 1,
									"selectionRate": 2.87
								}, {
									"id": 2,
									"selectionRate": 4.05
								}]
							},
							"id": 121367,
							"name": "Muhammad Rizwan Butt",
							"nameInitial": "M",
							"points": 190,
							"type": {
								"id": 2,
								"maxPerTeam": 0,
								"minPerTeam": 0,
								"name": "BOWL",
								"shortName": "BOWL"
							},
							"isSelected": false,
							"isSelectedInSharedTeam": false,
							"role": null,
							"lineupOrder": 9,
							"battingOrder": 9,
							"isAvailable": true,
							"lineupStatus": {
								"status": "LAST_PLAYED",
								"text": "Played last match",
								"color": "#004396"
							},
							"playingStyleIcon": [{
								"src": "https://d11-static-assets.s3.amazonaws.com/images/mobile/style_pace_icon_blue.png"
							}],
							"substituteInfo": {
								"isSub": false,
								"priority": 0,
								"replacedWith": null
							}
						}, {
							"artwork": [{
								"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image-men.png"
							}],
							"squad": {
								"id": 19,
								"name": "BAH",
								"jerseyColor": "#C85808",
								"shortName": "BAH",
								"playerTextBgColor": "#364150",
								"playerTextFontColor": "#FFFFFF"
							},
							"credits": 7.5,
							"statistics": {
								"selectionRate": 17.37,
								"role": [{
									"id": 1,
									"selectionRate": 0.44
								}, {
									"id": 2,
									"selectionRate": 0.7
								}]
							},
							"id": 179558,
							"name": "Muhammad Salman",
							"nameInitial": "M",
							"points": 112,
							"type": {
								"id": 2,
								"maxPerTeam": 0,
								"minPerTeam": 0,
								"name": "BOWL",
								"shortName": "BOWL"
							},
							"isSelected": false,
							"isSelectedInSharedTeam": false,
							"role": null,
							"lineupOrder": 10,
							"battingOrder": 10,
							"isAvailable": true,
							"lineupStatus": {
								"status": "LAST_PLAYED",
								"text": "Played last match",
								"color": "#004396"
							},
							"playingStyleIcon": [{
								"src": "https://d11-static-assets.s3.amazonaws.com/images/mobile/style_spin_icon_blue.png"
							}],
							"substituteInfo": {
								"isSub": false,
								"priority": 0,
								"replacedWith": null
							}
						}, {
							"artwork": [{
								"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image-men.png"
							}],
							"squad": {
								"id": 19,
								"name": "BAH",
								"jerseyColor": "#C85808",
								"shortName": "BAH",
								"playerTextBgColor": "#364150",
								"playerTextFontColor": "#FFFFFF"
							},
							"credits": 7,
							"statistics": {
								"selectionRate": 0.31,
								"role": [{
									"id": 1,
									"selectionRate": 0.02
								}, {
									"id": 2,
									"selectionRate": 0.02
								}]
							},
							"id": 182856,
							"name": "Asif Shaikh",
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
							"role": null,
							"lineupOrder": null,
							"battingOrder": 0,
							"isAvailable": true,
							"lineupStatus": null,
							"playingStyleIcon": [{
								"src": "https://d11-static-assets.s3.amazonaws.com/images/mobile/style_spin_icon_blue.png"
							}],
							"substituteInfo": {
								"isSub": false,
								"priority": 0,
								"replacedWith": null
							}
						}, {
							"artwork": [{
								"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image-men.png"
							}],
							"squad": {
								"id": 19,
								"name": "BAH",
								"jerseyColor": "#C85808",
								"shortName": "BAH",
								"playerTextBgColor": "#364150",
								"playerTextFontColor": "#FFFFFF"
							},
							"credits": 8.5,
							"statistics": {
								"selectionRate": 83.63,
								"role": [{
									"id": 1,
									"selectionRate": 6
								}, {
									"id": 2,
									"selectionRate": 9.45
								}]
							},
							"id": 11229,
							"name": "Abdul-Majid Abbasi",
							"nameInitial": "A",
							"points": 237,
							"type": {
								"id": 2,
								"maxPerTeam": 0,
								"minPerTeam": 0,
								"name": "BOWL",
								"shortName": "BOWL"
							},
							"isSelected": false,
							"isSelectedInSharedTeam": false,
							"role": null,
							"lineupOrder": 8,
							"battingOrder": 8,
							"isAvailable": true,
							"lineupStatus": {
								"status": "LAST_PLAYED",
								"text": "Played last match",
								"color": "#004396"
							},
							"playingStyleIcon": [{
								"src": "https://d11-static-assets.s3.amazonaws.com/images/mobile/style_spin_icon_blue.png"
							}],
							"substituteInfo": {
								"isSub": false,
								"priority": 0,
								"replacedWith": null
							}
						}, {
							"artwork": [{
								"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image-men.png"
							}],
							"squad": {
								"id": 7029,
								"name": "MAL",
								"jerseyColor": "",
								"shortName": "MAL",
								"playerTextBgColor": "#F0F3F7",
								"playerTextFontColor": "#202C3D"
							},
							"credits": 7.5,
							"statistics": {
								"selectionRate": 1.49,
								"role": [{
									"id": 1,
									"selectionRate": 0.03
								}, {
									"id": 2,
									"selectionRate": 0.05
								}]
							},
							"id": 97807,
							"name": "Muhammad Azri Azhar",
							"nameInitial": "M",
							"points": 17,
							"type": {
								"id": 2,
								"maxPerTeam": 0,
								"minPerTeam": 0,
								"name": "BOWL",
								"shortName": "BOWL"
							},
							"isSelected": false,
							"isSelectedInSharedTeam": false,
							"role": null,
							"lineupOrder": null,
							"battingOrder": 0,
							"isAvailable": true,
							"lineupStatus": null,
							"playingStyleIcon": [{
								"src": "https://d11-static-assets.s3.amazonaws.com/images/mobile/style_pace_icon_blue.png"
							}],
							"substituteInfo": {
								"isSub": false,
								"priority": 0,
								"replacedWith": null
							}
						}, {
							"artwork": [{
								"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image-men.png"
							}],
							"squad": {
								"id": 7029,
								"name": "MAL",
								"jerseyColor": "",
								"shortName": "MAL",
								"playerTextBgColor": "#F0F3F7",
								"playerTextFontColor": "#202C3D"
							},
							"credits": 7,
							"statistics": {
								"selectionRate": 12.42,
								"role": [{
									"id": 1,
									"selectionRate": 0.28
								}, {
									"id": 2,
									"selectionRate": 0.42
								}]
							},
							"id": 109469,
							"name": "Muhammad Aalif",
							"nameInitial": "M",
							"points": 33,
							"type": {
								"id": 2,
								"maxPerTeam": 0,
								"minPerTeam": 0,
								"name": "BOWL",
								"shortName": "BOWL"
							},
							"isSelected": false,
							"isSelectedInSharedTeam": false,
							"role": null,
							"lineupOrder": 8,
							"battingOrder": 8,
							"isAvailable": true,
							"lineupStatus": {
								"status": "LAST_PLAYED",
								"text": "Played last match",
								"color": "#004396"
							},
							"playingStyleIcon": [{
								"src": "https://d11-static-assets.s3.amazonaws.com/images/mobile/style_pace_icon_blue.png"
							}],
							"substituteInfo": {
								"isSub": false,
								"priority": 0,
								"replacedWith": null
							}
						}],
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
						}],
						"roundLineupStatus": "PLM_AVAILABLE",
						"preLineupsNote": "Lineup will be available some time before this match starts.",
						"lineupGroups": [{
							"squadId": 7029,
							"groups": [{
								"name": "PLM",
								"displayText": "Played Last Match",
								"color": "#004396",
								"order": 1,
								"playerStatuses": ["LAST_PLAYED", "USED_X_FACTOR_SUBSTITUTE"],
								"displayBattingOrder": 1
							}, {
								"name": "Others",
								"displayText": "Others",
								"color": "#202C3D",
								"order": 2,
								"playerStatuses": [],
								"displayBattingOrder": 0
							}]
						}, {
							"squadId": 19,
							"groups": [{
								"name": "PLM",
								"displayText": "Played Last Match",
								"color": "#004396",
								"order": 1,
								"playerStatuses": ["LAST_PLAYED", "USED_X_FACTOR_SUBSTITUTE"],
								"displayBattingOrder": 1
							}, {
								"name": "Others",
								"displayText": "Others",
								"color": "#202C3D",
								"order": 2,
								"playerStatuses": [],
								"displayBattingOrder": 0
							}]
						}]
					}
				}
			},
			"me": {
				"isGuestUser": false,
				"teamName": "AARONTH CONQUERERS",
				"userType": "NORMAL"
			}
		}
	});
}
