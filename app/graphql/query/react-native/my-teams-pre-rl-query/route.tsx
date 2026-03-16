import { BASEHEADERS } from '@/constants';
import { NextResponse } from 'next/server';

/**
:method: POST
:path: /graphql/query/react-native/my-teams-pre-rl-query
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
content-length: 3197
accept-encoding: gzip

{
	"query": "\n    query MyTeamsPreRLQuery($site: String!, $matchId: Int!, $isPostLineupsSinglePageCTEnabled: Boolean = false, $isQueryDeprecated: Boolean = true) {\n  match(site: $site, id: $matchId) {\n    tour {\n      id\n    }\n    substitutionInfo {\n      maxSubsAllowed\n      isTeamCompareActive\n      teamCompareText\n    }\n    squads {\n      id\n      name\n      shortName\n      playerTextBgColor\n      playerTextFontColor\n    }\n    matchHighlight {\n      text\n    }\n    displayLineupOrder\n    lineupOrderExpected\n    userTeamsCount\n    userTeam {\n      user {\n        userType\n      }\n    }\n    userTeams {\n      id\n      name\n      site\n      totalPoints\n      match {\n        __typename\n        id\n        status\n        startTime\n        name\n      }\n      playerType {\n        __typename\n        id\n        maxPerTeam\n        minPerTeam\n        name\n        shortName\n      }\n      players {\n        __typename\n        id\n        name\n        nameInitial\n        points\n        credits\n        artwork {\n          __typename\n          src\n        }\n        squad {\n          __typename\n          id\n          name\n          jerseyColor\n          shortName\n          squadColorPalette\n          playerTextBgColor\n          playerTextFontColor\n          fullName\n          flag {\n            __typename\n            src\n            type\n          }\n          flagWithName {\n            __typename\n            src\n            type\n          }\n        }\n        role {\n          id\n          pointMultiplier\n          shortName\n          name\n          artwork {\n            src\n          }\n          color\n        }\n        lineupStatus {\n          __typename\n          status\n          text\n          color\n        }\n        type {\n          __typename\n          id\n          maxPerTeam\n          minPerTeam\n          name\n          shortName\n        }\n        substituteInfo {\n          isSub\n          priority\n          replacedWith {\n            id\n            role {\n              shortName\n            }\n          }\n        }\n      }\n      squads {\n        __typename\n        id\n        shortName\n        name\n      }\n      playerRoles {\n        id\n        pointMultiplier\n        shortName\n        name\n        artwork {\n          src\n        }\n        color\n      }\n      catalogTeamDetails @skip(if: $isQueryDeprecated) {\n        contestTypePill\n        sharedTeamStatus\n        sellerImageUrl\n        sellerId\n        sellerTeamId\n        sellerTeamUpdatedAt\n        productId\n        snapshotId\n        userSnapshotId\n        teamCategory\n        teamPrice\n        lastClonedAt\n        isContentAvailable\n        isContentUpdated\n        isTeamUpdated\n        teamShareCount\n        publishCount\n        latestAudioUrl\n      }\n    }\n    roundLineupStatus @include(if: $isPostLineupsSinglePageCTEnabled)\n  }\n  me @skip(if: $isQueryDeprecated) {\n    userType\n    expertStats {\n      sportId\n    }\n  }\n  site(slug: $site) {\n    maxTeamsAllowed\n    id\n    gameId\n  }\n}\n    ",
	"variables": {
		"site": "cricket",
		"matchId": 112970
	}
}

{
	"query": "\n    query MyTeamsPreRLQuery($site: String!, $matchId: Int!, $isPostLineupsSinglePageCTEnabled: Boolean = false, $isQueryDeprecated: Boolean = true) {\n  match(site: $site, id: $matchId) {\n    tour {\n      id\n    }\n    substitutionInfo {\n      maxSubsAllowed\n      isTeamCompareActive\n      teamCompareText\n    }\n    squads {\n      id\n      name\n      shortName\n      playerTextBgColor\n      playerTextFontColor\n    }\n    matchHighlight {\n      text\n    }\n    displayLineupOrder\n    lineupOrderExpected\n    userTeamsCount\n    userTeam {\n      user {\n        userType\n      }\n    }\n    userTeams {\n      id\n      name\n      site\n      totalPoints\n      match {\n        __typename\n        id\n        status\n        startTime\n        name\n      }\n      playerType {\n        __typename\n        id\n        maxPerTeam\n        minPerTeam\n        name\n        shortName\n      }\n      players {\n        __typename\n        id\n        name\n        nameInitial\n        points\n        credits\n        artwork {\n          __typename\n          src\n        }\n        squad {\n          __typename\n          id\n          name\n          jerseyColor\n          shortName\n          squadColorPalette\n          playerTextBgColor\n          playerTextFontColor\n          fullName\n          flag {\n            __typename\n            src\n            type\n          }\n          flagWithName {\n            __typename\n            src\n            type\n          }\n        }\n        role {\n          id\n          pointMultiplier\n          shortName\n          name\n          artwork {\n            src\n          }\n          color\n        }\n        lineupStatus {\n          __typename\n          status\n          text\n          color\n        }\n        type {\n          __typename\n          id\n          maxPerTeam\n          minPerTeam\n          name\n          shortName\n        }\n        substituteInfo {\n          isSub\n          priority\n          replacedWith {\n            id\n            role {\n              shortName\n            }\n          }\n        }\n      }\n      squads {\n        __typename\n        id\n        shortName\n        name\n      }\n      playerRoles {\n        id\n        pointMultiplier\n        shortName\n        name\n        artwork {\n          src\n        }\n        color\n      }\n      catalogTeamDetails @skip(if: $isQueryDeprecated) {\n        contestTypePill\n        sharedTeamStatus\n        sellerImageUrl\n        sellerId\n        sellerTeamId\n        sellerTeamUpdatedAt\n        productId\n        snapshotId\n        userSnapshotId\n        teamCategory\n        teamPrice\n        lastClonedAt\n        isContentAvailable\n        isContentUpdated\n        isTeamUpdated\n        teamShareCount\n        publishCount\n        latestAudioUrl\n      }\n    }\n    roundLineupStatus @include(if: $isPostLineupsSinglePageCTEnabled)\n  }\n  me @skip(if: $isQueryDeprecated) {\n    userType\n    expertStats {\n      sportId\n    }\n  }\n  site(slug: $site) {\n    maxTeamsAllowed\n    id\n    gameId\n  }\n}\n    ",
	"variables": {
		"site": "cricket",
		"matchId": 112993
	}
}

{
	"query": "\n    query MyTeamsPreRLQuery($site: String!, $matchId: Int!, $isPostLineupsSinglePageCTEnabled: Boolean = false, $isQueryDeprecated: Boolean = true) {\n  match(site: $site, id: $matchId) {\n    tour {\n      id\n    }\n    substitutionInfo {\n      maxSubsAllowed\n      isTeamCompareActive\n      teamCompareText\n    }\n    squads {\n      id\n      name\n      shortName\n      playerTextBgColor\n      playerTextFontColor\n    }\n    matchHighlight {\n      text\n    }\n    displayLineupOrder\n    lineupOrderExpected\n    userTeamsCount\n    userTeam {\n      user {\n        userType\n      }\n    }\n    userTeams {\n      id\n      name\n      site\n      totalPoints\n      match {\n        __typename\n        id\n        status\n        startTime\n        name\n      }\n      playerType {\n        __typename\n        id\n        maxPerTeam\n        minPerTeam\n        name\n        shortName\n      }\n      players {\n        __typename\n        id\n        name\n        nameInitial\n        points\n        credits\n        artwork {\n          __typename\n          src\n        }\n        squad {\n          __typename\n          id\n          name\n          jerseyColor\n          shortName\n          squadColorPalette\n          playerTextBgColor\n          playerTextFontColor\n          fullName\n          flag {\n            __typename\n            src\n            type\n          }\n          flagWithName {\n            __typename\n            src\n            type\n          }\n        }\n        role {\n          id\n          pointMultiplier\n          shortName\n          name\n          artwork {\n            src\n          }\n          color\n        }\n        lineupStatus {\n          __typename\n          status\n          text\n          color\n        }\n        type {\n          __typename\n          id\n          maxPerTeam\n          minPerTeam\n          name\n          shortName\n        }\n        substituteInfo {\n          isSub\n          priority\n          replacedWith {\n            id\n            role {\n              shortName\n            }\n          }\n        }\n      }\n      squads {\n        __typename\n        id\n        shortName\n        name\n      }\n      playerRoles {\n        id\n        pointMultiplier\n        shortName\n        name\n        artwork {\n          src\n        }\n        color\n      }\n      catalogTeamDetails @skip(if: $isQueryDeprecated) {\n        contestTypePill\n        sharedTeamStatus\n        sellerImageUrl\n        sellerId\n        sellerTeamId\n        sellerTeamUpdatedAt\n        productId\n        snapshotId\n        userSnapshotId\n        teamCategory\n        teamPrice\n        lastClonedAt\n        isContentAvailable\n        isContentUpdated\n        isTeamUpdated\n        teamShareCount\n        publishCount\n        latestAudioUrl\n      }\n    }\n    roundLineupStatus @include(if: $isPostLineupsSinglePageCTEnabled)\n  }\n  me @skip(if: $isQueryDeprecated) {\n    userType\n    expertStats {\n      sportId\n    }\n  }\n  site(slug: $site) {\n    maxTeamsAllowed\n    id\n    gameId\n  }\n}\n    ",
	"variables": {
		"site": "cricket",
		"matchId": 113005,
		"showDreamTeam": false,
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
			const apiURL = process.env.API_URL + "/graphql/query/react-native/my-teams-pre-rl-query";
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

	const matchId = variables?.matchId;

	if (matchId == 112970) {
		return NextResponse.json({
			"data": {
				"match": {
					"tour": {
						"id": 5388
					},
					"substitutionInfo": {
						"maxSubsAllowed": 4,
						"isTeamCompareActive": true,
						"teamCompareText": ""
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
					}],
					"matchHighlight": null,
					"displayLineupOrder": true,
					"lineupOrderExpected": true,
					"userTeamsCount": 1,
					"userTeam": null,
					"userTeams": [{
						"id": 1,
						"name": "AARONTH CONQUERERS",
						"site": "cricket",
						"totalPoints": 448.5,
						"match": {
							"__typename": "BasicMatch",
							"id": 112970,
							"status": "IN_PROGRESS",
							"startTime": "2026-03-15T14:00:00.000Z",
							"name": "KSO vs RRP"
						},
						"playerType": [{
							"__typename": "PlayerType",
							"id": 3,
							"maxPerTeam": 8,
							"minPerTeam": 1,
							"name": "Wicket-Keepers",
							"shortName": "WK"
						}, {
							"__typename": "PlayerType",
							"id": 1,
							"maxPerTeam": 8,
							"minPerTeam": 1,
							"name": "Batters",
							"shortName": "BAT"
						}, {
							"__typename": "PlayerType",
							"id": 4,
							"maxPerTeam": 8,
							"minPerTeam": 1,
							"name": "All-Rounders",
							"shortName": "AR"
						}, {
							"__typename": "PlayerType",
							"id": 2,
							"maxPerTeam": 8,
							"minPerTeam": 1,
							"name": "Bowlers",
							"shortName": "BOWL"
						}],
						"players": [{
							"__typename": "Player",
							"id": 716,
							"name": "Rishi Dhawan",
							"nameInitial": "R",
							"points": 92,
							"credits": 0,
							"artwork": [{
								"__typename": "Artwork",
								"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/partner-image/MenGoogle/716.png"
							}],
							"squad": {
								"__typename": "Squad",
								"id": 8257,
								"name": "RRP",
								"jerseyColor": "",
								"shortName": "RRP",
								"squadColorPalette": "#80081C",
								"playerTextBgColor": "#364150",
								"playerTextFontColor": "#FFFFFF",
								"fullName": "RRP",
								"flag": [{
									"__typename": "Artwork",
									"src": "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/DEF-CR16@2x.png",
									"type": null
								}],
								"flagWithName": [{
									"__typename": "Artwork",
									"src": "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/DEF-CR16@2x-BIG.png",
									"type": null
								}]
							},
							"role": {
								"id": 1,
								"pointMultiplier": 2,
								"shortName": "C",
								"name": "Captain",
								"artwork": [{
									"src": "https://assets.dream11.com/public/imgs/playerRoleArtwork/Captain_Default.svg"
								}],
								"color": "#F5A623"
							},
							"lineupStatus": {
								"__typename": "LineupStatusTag",
								"status": "PLAYING",
								"text": "Announced",
								"color": "#00A348"
							},
							"type": {
								"__typename": "PlayerType",
								"id": 4,
								"maxPerTeam": 0,
								"minPerTeam": 0,
								"name": "ALL",
								"shortName": "ALL"
							},
							"substituteInfo": {
								"isSub": false,
								"priority": 0,
								"replacedWith": null
							}
						}, {
							"__typename": "Player",
							"id": 762,
							"name": "Anureet Singh",
							"nameInitial": "A",
							"points": 0,
							"credits": 0,
							"artwork": [{
								"__typename": "Artwork",
								"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image-men.png"
							}],
							"squad": {
								"__typename": "Squad",
								"id": 8257,
								"name": "RRP",
								"jerseyColor": "",
								"shortName": "RRP",
								"squadColorPalette": "#80081C",
								"playerTextBgColor": "#364150",
								"playerTextFontColor": "#FFFFFF",
								"fullName": "RRP",
								"flag": [{
									"__typename": "Artwork",
									"src": "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/DEF-CR16@2x.png",
									"type": null
								}],
								"flagWithName": [{
									"__typename": "Artwork",
									"src": "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/DEF-CR16@2x-BIG.png",
									"type": null
								}]
							},
							"role": null,
							"lineupStatus": {
								"__typename": "LineupStatusTag",
								"status": "X_FACTOR_SUBSTITUTE",
								"text": "Substitute",
								"color": "#944BF3"
							},
							"type": {
								"__typename": "PlayerType",
								"id": 2,
								"maxPerTeam": 0,
								"minPerTeam": 0,
								"name": "BOWL",
								"shortName": "BOWL"
							},
							"substituteInfo": {
								"isSub": false,
								"priority": 0,
								"replacedWith": null
							}
						}, {
							"__typename": "Player",
							"id": 999,
							"name": "Asghar Afghan",
							"nameInitial": "A",
							"points": 19,
							"credits": 0,
							"artwork": [{
								"__typename": "Artwork",
								"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image-men.png"
							}],
							"squad": {
								"__typename": "Squad",
								"id": 8257,
								"name": "RRP",
								"jerseyColor": "",
								"shortName": "RRP",
								"squadColorPalette": "#80081C",
								"playerTextBgColor": "#364150",
								"playerTextFontColor": "#FFFFFF",
								"fullName": "RRP",
								"flag": [{
									"__typename": "Artwork",
									"src": "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/DEF-CR16@2x.png",
									"type": null
								}],
								"flagWithName": [{
									"__typename": "Artwork",
									"src": "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/DEF-CR16@2x-BIG.png",
									"type": null
								}]
							},
							"role": null,
							"lineupStatus": {
								"__typename": "LineupStatusTag",
								"status": "PLAYING",
								"text": "Announced",
								"color": "#00A348"
							},
							"type": {
								"__typename": "PlayerType",
								"id": 1,
								"maxPerTeam": 0,
								"minPerTeam": 0,
								"name": "BAT",
								"shortName": "BAT"
							},
							"substituteInfo": {
								"isSub": false,
								"priority": 0,
								"replacedWith": null
							}
						}, {
							"__typename": "Player",
							"id": 1002,
							"name": "Mohammad Shahzad",
							"nameInitial": "M",
							"points": 124.5,
							"credits": 0,
							"artwork": [{
								"__typename": "Artwork",
								"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/partner-image/MenGoogle/1002.png"
							}],
							"squad": {
								"__typename": "Squad",
								"id": 8257,
								"name": "RRP",
								"jerseyColor": "",
								"shortName": "RRP",
								"squadColorPalette": "#80081C",
								"playerTextBgColor": "#364150",
								"playerTextFontColor": "#FFFFFF",
								"fullName": "RRP",
								"flag": [{
									"__typename": "Artwork",
									"src": "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/DEF-CR16@2x.png",
									"type": null
								}],
								"flagWithName": [{
									"__typename": "Artwork",
									"src": "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/DEF-CR16@2x-BIG.png",
									"type": null
								}]
							},
							"role": {
								"id": 2,
								"pointMultiplier": 1.5,
								"shortName": "VC",
								"name": "Vice Captain",
								"artwork": [{
									"src": "https://assets.dream11.com/public/imgs/playerRoleArtwork/ViceCaptain_Default.svg"
								}],
								"color": "#4A90E2"
							},
							"lineupStatus": {
								"__typename": "LineupStatusTag",
								"status": "PLAYING",
								"text": "Announced",
								"color": "#00A348"
							},
							"type": {
								"__typename": "PlayerType",
								"id": 3,
								"maxPerTeam": 0,
								"minPerTeam": 0,
								"name": "WK",
								"shortName": "WK"
							},
							"substituteInfo": {
								"isSub": false,
								"priority": 0,
								"replacedWith": null
							}
						}, {
							"__typename": "Player",
							"id": 1281,
							"name": "Angelo Perera",
							"nameInitial": "A",
							"points": 60,
							"credits": 0,
							"artwork": [{
								"__typename": "Artwork",
								"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/partner-image/MenGoogle/1281.png"
							}],
							"squad": {
								"__typename": "Squad",
								"id": 8257,
								"name": "RRP",
								"jerseyColor": "",
								"shortName": "RRP",
								"squadColorPalette": "#80081C",
								"playerTextBgColor": "#364150",
								"playerTextFontColor": "#FFFFFF",
								"fullName": "RRP",
								"flag": [{
									"__typename": "Artwork",
									"src": "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/DEF-CR16@2x.png",
									"type": null
								}],
								"flagWithName": [{
									"__typename": "Artwork",
									"src": "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/DEF-CR16@2x-BIG.png",
									"type": null
								}]
							},
							"role": null,
							"lineupStatus": {
								"__typename": "LineupStatusTag",
								"status": "PLAYING",
								"text": "Announced",
								"color": "#00A348"
							},
							"type": {
								"__typename": "PlayerType",
								"id": 1,
								"maxPerTeam": 0,
								"minPerTeam": 0,
								"name": "BAT",
								"shortName": "BAT"
							},
							"substituteInfo": {
								"isSub": false,
								"priority": 0,
								"replacedWith": null
							}
						}, {
							"__typename": "Player",
							"id": 1512,
							"name": "Ankit Rajpoot",
							"nameInitial": "A",
							"points": 74,
							"credits": 0,
							"artwork": [{
								"__typename": "Artwork",
								"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image-men.png"
							}],
							"squad": {
								"__typename": "Squad",
								"id": 7456,
								"name": "KSO",
								"jerseyColor": "",
								"shortName": "KSO",
								"squadColorPalette": "#1ba10e",
								"playerTextBgColor": "#F0F3F7",
								"playerTextFontColor": "#202C3D",
								"fullName": "KSO",
								"flag": [{
									"__typename": "Artwork",
									"src": "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/DEF-CR15@2x.png",
									"type": null
								}],
								"flagWithName": [{
									"__typename": "Artwork",
									"src": "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/DEF-CR15@2x-BIG.png",
									"type": null
								}]
							},
							"role": null,
							"lineupStatus": {
								"__typename": "LineupStatusTag",
								"status": "PLAYING",
								"text": "Announced",
								"color": "#00A348"
							},
							"type": {
								"__typename": "PlayerType",
								"id": 2,
								"maxPerTeam": 0,
								"minPerTeam": 0,
								"name": "BOWL",
								"shortName": "BOWL"
							},
							"substituteInfo": {
								"isSub": false,
								"priority": 0,
								"replacedWith": null
							}
						}, {
							"__typename": "Player",
							"id": 1891,
							"name": "Monu Kumar",
							"nameInitial": "M",
							"points": 0,
							"credits": 0,
							"artwork": [{
								"__typename": "Artwork",
								"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image-men.png"
							}],
							"squad": {
								"__typename": "Squad",
								"id": 7456,
								"name": "KSO",
								"jerseyColor": "",
								"shortName": "KSO",
								"squadColorPalette": "#1ba10e",
								"playerTextBgColor": "#F0F3F7",
								"playerTextFontColor": "#202C3D",
								"fullName": "KSO",
								"flag": [{
									"__typename": "Artwork",
									"src": "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/DEF-CR15@2x.png",
									"type": null
								}],
								"flagWithName": [{
									"__typename": "Artwork",
									"src": "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/DEF-CR15@2x-BIG.png",
									"type": null
								}]
							},
							"role": null,
							"lineupStatus": {
								"__typename": "LineupStatusTag",
								"status": "NOT_PLAYING",
								"text": "",
								"color": "#DD500F"
							},
							"type": {
								"__typename": "PlayerType",
								"id": 2,
								"maxPerTeam": 0,
								"minPerTeam": 0,
								"name": "BOWL",
								"shortName": "BOWL"
							},
							"substituteInfo": {
								"isSub": false,
								"priority": 0,
								"replacedWith": null
							}
						}, {
							"__typename": "Player",
							"id": 5982,
							"name": "Akshay Wakhare",
							"nameInitial": "A",
							"points": 0,
							"credits": 0,
							"artwork": [{
								"__typename": "Artwork",
								"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image-men.png"
							}],
							"squad": {
								"__typename": "Squad",
								"id": 7456,
								"name": "KSO",
								"jerseyColor": "",
								"shortName": "KSO",
								"squadColorPalette": "#1ba10e",
								"playerTextBgColor": "#F0F3F7",
								"playerTextFontColor": "#202C3D",
								"fullName": "KSO",
								"flag": [{
									"__typename": "Artwork",
									"src": "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/DEF-CR15@2x.png",
									"type": null
								}],
								"flagWithName": [{
									"__typename": "Artwork",
									"src": "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/DEF-CR15@2x-BIG.png",
									"type": null
								}]
							},
							"role": null,
							"lineupStatus": {
								"__typename": "LineupStatusTag",
								"status": "NOT_PLAYING",
								"text": "",
								"color": "#DD500F"
							},
							"type": {
								"__typename": "PlayerType",
								"id": 2,
								"maxPerTeam": 0,
								"minPerTeam": 0,
								"name": "BOWL",
								"shortName": "BOWL"
							},
							"substituteInfo": {
								"isSub": false,
								"priority": 0,
								"replacedWith": null
							}
						}, {
							"__typename": "Player",
							"id": 8748,
							"name": "Chirag Gandhi",
							"nameInitial": "C",
							"points": 13,
							"credits": 0,
							"artwork": [{
								"__typename": "Artwork",
								"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image-men.png"
							}],
							"squad": {
								"__typename": "Squad",
								"id": 7456,
								"name": "KSO",
								"jerseyColor": "",
								"shortName": "KSO",
								"squadColorPalette": "#1ba10e",
								"playerTextBgColor": "#F0F3F7",
								"playerTextFontColor": "#202C3D",
								"fullName": "KSO",
								"flag": [{
									"__typename": "Artwork",
									"src": "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/DEF-CR15@2x.png",
									"type": null
								}],
								"flagWithName": [{
									"__typename": "Artwork",
									"src": "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/DEF-CR15@2x-BIG.png",
									"type": null
								}]
							},
							"role": null,
							"lineupStatus": {
								"__typename": "LineupStatusTag",
								"status": "PLAYING",
								"text": "Announced",
								"color": "#00A348"
							},
							"type": {
								"__typename": "PlayerType",
								"id": 1,
								"maxPerTeam": 0,
								"minPerTeam": 0,
								"name": "BAT",
								"shortName": "BAT"
							},
							"substituteInfo": {
								"isSub": false,
								"priority": 0,
								"replacedWith": null
							}
						}, {
							"__typename": "Player",
							"id": 11737,
							"name": "Rituraj Singh",
							"nameInitial": "R",
							"points": 8,
							"credits": 0,
							"artwork": [{
								"__typename": "Artwork",
								"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image-men.png"
							}],
							"squad": {
								"__typename": "Squad",
								"id": 7456,
								"name": "KSO",
								"jerseyColor": "",
								"shortName": "KSO",
								"squadColorPalette": "#1ba10e",
								"playerTextBgColor": "#F0F3F7",
								"playerTextFontColor": "#202C3D",
								"fullName": "KSO",
								"flag": [{
									"__typename": "Artwork",
									"src": "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/DEF-CR15@2x.png",
									"type": null
								}],
								"flagWithName": [{
									"__typename": "Artwork",
									"src": "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/DEF-CR15@2x-BIG.png",
									"type": null
								}]
							},
							"role": null,
							"lineupStatus": {
								"__typename": "LineupStatusTag",
								"status": "PLAYING",
								"text": "Announced",
								"color": "#00A348"
							},
							"type": {
								"__typename": "PlayerType",
								"id": 2,
								"maxPerTeam": 0,
								"minPerTeam": 0,
								"name": "BOWL",
								"shortName": "BOWL"
							},
							"substituteInfo": {
								"isSub": false,
								"priority": 0,
								"replacedWith": null
							}
						}, {
							"__typename": "Player",
							"id": 86261,
							"name": "Chaturanga de Silva",
							"nameInitial": "C",
							"points": 58,
							"credits": 0,
							"artwork": [{
								"__typename": "Artwork",
								"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/default-player-image-men.png"
							}],
							"squad": {
								"__typename": "Squad",
								"id": 8257,
								"name": "RRP",
								"jerseyColor": "",
								"shortName": "RRP",
								"squadColorPalette": "#80081C",
								"playerTextBgColor": "#364150",
								"playerTextFontColor": "#FFFFFF",
								"fullName": "RRP",
								"flag": [{
									"__typename": "Artwork",
									"src": "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/DEF-CR16@2x.png",
									"type": null
								}],
								"flagWithName": [{
									"__typename": "Artwork",
									"src": "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/DEF-CR16@2x-BIG.png",
									"type": null
								}]
							},
							"role": null,
							"lineupStatus": {
								"__typename": "LineupStatusTag",
								"status": "PLAYING",
								"text": "Announced",
								"color": "#00A348"
							},
							"type": {
								"__typename": "PlayerType",
								"id": 4,
								"maxPerTeam": 0,
								"minPerTeam": 0,
								"name": "ALL",
								"shortName": "ALL"
							},
							"substituteInfo": {
								"isSub": false,
								"priority": 0,
								"replacedWith": null
							}
						}],
						"squads": [{
							"__typename": "BasicSquad",
							"id": 7456,
							"shortName": "KSO",
							"name": "KSO"
						}, {
							"__typename": "BasicSquad",
							"id": 8257,
							"shortName": "RRP",
							"name": "RRP"
						}],
						"playerRoles": [{
							"id": 1,
							"pointMultiplier": 2,
							"shortName": "C",
							"name": "Captain",
							"artwork": [{
								"src": "https://assets.dream11.com/public/imgs/playerRoleArtwork/Captain_Default.svg"
							}],
							"color": "#F5A623"
						}, {
							"id": 2,
							"pointMultiplier": 1.5,
							"shortName": "VC",
							"name": "Vice Captain",
							"artwork": [{
								"src": "https://assets.dream11.com/public/imgs/playerRoleArtwork/ViceCaptain_Default.svg"
							}],
							"color": "#4A90E2"
						}]
					}]
				},
				"site": {
					"maxTeamsAllowed": 40,
					"id": 1,
					"gameId": 2
				}
			}
		});
	}

	// 112993
	return NextResponse.json({
		"data": {
			"match": {
				"tour": {
					"id": 5391
				},
				"substitutionInfo": {
					"maxSubsAllowed": 4,
					"isTeamCompareActive": true,
					"teamCompareText": ""
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
				}],
				"matchHighlight": null,
				"displayLineupOrder": true,
				"lineupOrderExpected": true,
				"userTeamsCount": 2,
				"userTeam": null,
				"userTeams": [{
					"id": 1,
					"name": "AARONTH CONQUERERS",
					"site": "cricket",
					"totalPoints": 413,
					"match": {
						"__typename": "BasicMatch",
						"id": 112993,
						"status": "COMPLETED",
						"startTime": "2026-03-15T06:15:00.000Z",
						"name": "NZ vs SA"
					},
					"playerType": [{
						"__typename": "PlayerType",
						"id": 3,
						"maxPerTeam": 8,
						"minPerTeam": 1,
						"name": "Wicket-Keepers",
						"shortName": "WK"
					}, {
						"__typename": "PlayerType",
						"id": 1,
						"maxPerTeam": 8,
						"minPerTeam": 1,
						"name": "Batters",
						"shortName": "BAT"
					}, {
						"__typename": "PlayerType",
						"id": 4,
						"maxPerTeam": 8,
						"minPerTeam": 1,
						"name": "All-Rounders",
						"shortName": "AR"
					}, {
						"__typename": "PlayerType",
						"id": 2,
						"maxPerTeam": 8,
						"minPerTeam": 1,
						"name": "Bowlers",
						"shortName": "BOWL"
					}],
					"players": [{
						"__typename": "Player",
						"id": 1809,
						"name": "Devon Conway",
						"nameInitial": "D",
						"points": 10,
						"credits": 0,
						"artwork": [{
							"__typename": "Artwork",
							"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/partner-image/MenGoogle/1809.png"
						}],
						"squad": {
							"__typename": "Squad",
							"id": 186,
							"name": "NZ",
							"jerseyColor": "#242424",
							"shortName": "NZ",
							"squadColorPalette": "#4f67a3",
							"playerTextBgColor": "#F0F3F7",
							"playerTextFontColor": "#202C3D",
							"fullName": "NZ",
							"flag": [{
								"__typename": "Artwork",
								"src": "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/NZ-CR1@2x.png",
								"type": null
							}],
							"flagWithName": [{
								"__typename": "Artwork",
								"src": "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/NZ-CR1@2x-BIG.png",
								"type": null
							}]
						},
						"role": {
							"id": 1,
							"pointMultiplier": 2,
							"shortName": "C",
							"name": "Captain",
							"artwork": [{
								"src": "https://assets.dream11.com/public/imgs/playerRoleArtwork/Captain_Default.svg"
							}],
							"color": "#F5A623"
						},
						"lineupStatus": {
							"__typename": "LineupStatusTag",
							"status": "PLAYING",
							"text": "Announced",
							"color": "#00A348"
						},
						"type": {
							"__typename": "PlayerType",
							"id": 3,
							"maxPerTeam": 0,
							"minPerTeam": 0,
							"name": "WK",
							"shortName": "WK"
						},
						"substituteInfo": {
							"isSub": false,
							"priority": 0,
							"replacedWith": null
						}
					}, {
						"__typename": "Player",
						"id": 3653,
						"name": "Mitchell Santner",
						"nameInitial": "M",
						"points": 83,
						"credits": 0,
						"artwork": [{
							"__typename": "Artwork",
							"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/partner-image/MenGoogle/3653.png"
						}],
						"squad": {
							"__typename": "Squad",
							"id": 186,
							"name": "NZ",
							"jerseyColor": "#242424",
							"shortName": "NZ",
							"squadColorPalette": "#4f67a3",
							"playerTextBgColor": "#F0F3F7",
							"playerTextFontColor": "#202C3D",
							"fullName": "NZ",
							"flag": [{
								"__typename": "Artwork",
								"src": "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/NZ-CR1@2x.png",
								"type": null
							}],
							"flagWithName": [{
								"__typename": "Artwork",
								"src": "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/NZ-CR1@2x-BIG.png",
								"type": null
							}]
						},
						"role": null,
						"lineupStatus": {
							"__typename": "LineupStatusTag",
							"status": "PLAYING",
							"text": "Announced",
							"color": "#00A348"
						},
						"type": {
							"__typename": "PlayerType",
							"id": 4,
							"maxPerTeam": 0,
							"minPerTeam": 0,
							"name": "ALL",
							"shortName": "ALL"
						},
						"substituteInfo": {
							"isSub": false,
							"priority": 0,
							"replacedWith": null
						}
					}, {
						"__typename": "Player",
						"id": 8417,
						"name": "Dane Cleaver",
						"nameInitial": "D",
						"points": 0,
						"credits": 0,
						"artwork": [{
							"__typename": "Artwork",
							"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/partner-image/MenGoogle/8417.png"
						}],
						"squad": {
							"__typename": "Squad",
							"id": 186,
							"name": "NZ",
							"jerseyColor": "#242424",
							"shortName": "NZ",
							"squadColorPalette": "#4f67a3",
							"playerTextBgColor": "#F0F3F7",
							"playerTextFontColor": "#202C3D",
							"fullName": "NZ",
							"flag": [{
								"__typename": "Artwork",
								"src": "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/NZ-CR1@2x.png",
								"type": null
							}],
							"flagWithName": [{
								"__typename": "Artwork",
								"src": "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/NZ-CR1@2x-BIG.png",
								"type": null
							}]
						},
						"role": null,
						"lineupStatus": {
							"__typename": "LineupStatusTag",
							"status": "NOT_PLAYING",
							"text": "",
							"color": "#DD500F"
						},
						"type": {
							"__typename": "PlayerType",
							"id": 3,
							"maxPerTeam": 0,
							"minPerTeam": 0,
							"name": "WK",
							"shortName": "WK"
						},
						"substituteInfo": {
							"isSub": false,
							"priority": 0,
							"replacedWith": null
						}
					}, {
						"__typename": "Player",
						"id": 8449,
						"name": "Cole McConchie",
						"nameInitial": "C",
						"points": 33,
						"credits": 0,
						"artwork": [{
							"__typename": "Artwork",
							"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/partner-image/MenGoogle/8449.png"
						}],
						"squad": {
							"__typename": "Squad",
							"id": 186,
							"name": "NZ",
							"jerseyColor": "#242424",
							"shortName": "NZ",
							"squadColorPalette": "#4f67a3",
							"playerTextBgColor": "#F0F3F7",
							"playerTextFontColor": "#202C3D",
							"fullName": "NZ",
							"flag": [{
								"__typename": "Artwork",
								"src": "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/NZ-CR1@2x.png",
								"type": null
							}],
							"flagWithName": [{
								"__typename": "Artwork",
								"src": "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/NZ-CR1@2x-BIG.png",
								"type": null
							}]
						},
						"role": null,
						"lineupStatus": {
							"__typename": "LineupStatusTag",
							"status": "PLAYING",
							"text": "Announced",
							"color": "#00A348"
						},
						"type": {
							"__typename": "PlayerType",
							"id": 4,
							"maxPerTeam": 0,
							"minPerTeam": 0,
							"name": "ALL",
							"shortName": "ALL"
						},
						"substituteInfo": {
							"isSub": false,
							"priority": 0,
							"replacedWith": null
						}
					}, {
						"__typename": "Player",
						"id": 9220,
						"name": "Nathan Smith",
						"nameInitial": "N",
						"points": 0,
						"credits": 0,
						"artwork": [{
							"__typename": "Artwork",
							"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/partner-image/MenGoogle/9220.png"
						}],
						"squad": {
							"__typename": "Squad",
							"id": 186,
							"name": "NZ",
							"jerseyColor": "#242424",
							"shortName": "NZ",
							"squadColorPalette": "#4f67a3",
							"playerTextBgColor": "#F0F3F7",
							"playerTextFontColor": "#202C3D",
							"fullName": "NZ",
							"flag": [{
								"__typename": "Artwork",
								"src": "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/NZ-CR1@2x.png",
								"type": null
							}],
							"flagWithName": [{
								"__typename": "Artwork",
								"src": "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/NZ-CR1@2x-BIG.png",
								"type": null
							}]
						},
						"role": null,
						"lineupStatus": {
							"__typename": "LineupStatusTag",
							"status": "NOT_PLAYING",
							"text": "",
							"color": "#DD500F"
						},
						"type": {
							"__typename": "PlayerType",
							"id": 4,
							"maxPerTeam": 0,
							"minPerTeam": 0,
							"name": "ALL",
							"shortName": "ALL"
						},
						"substituteInfo": {
							"isSub": false,
							"priority": 0,
							"replacedWith": null
						}
					}, {
						"__typename": "Player",
						"id": 9236,
						"name": "Tony de Zorzi",
						"nameInitial": "T",
						"points": 14,
						"credits": 0,
						"artwork": [{
							"__typename": "Artwork",
							"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/partner-image/MenGoogle/9236.png"
						}],
						"squad": {
							"__typename": "Squad",
							"id": 212,
							"name": "SA",
							"jerseyColor": "#10926B",
							"shortName": "SA",
							"squadColorPalette": "#53a784",
							"playerTextBgColor": "#364150",
							"playerTextFontColor": "#FFFFFF",
							"fullName": "SA",
							"flag": [{
								"__typename": "Artwork",
								"src": "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/RSA-CR1@2x.png",
								"type": null
							}],
							"flagWithName": [{
								"__typename": "Artwork",
								"src": "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/RSA-CR1@2x-BIG.png",
								"type": null
							}]
						},
						"role": null,
						"lineupStatus": {
							"__typename": "LineupStatusTag",
							"status": "PLAYING",
							"text": "Announced",
							"color": "#00A348"
						},
						"type": {
							"__typename": "PlayerType",
							"id": 1,
							"maxPerTeam": 0,
							"minPerTeam": 0,
							"name": "BAT",
							"shortName": "BAT"
						},
						"substituteInfo": {
							"isSub": false,
							"priority": 0,
							"replacedWith": null
						}
					}, {
						"__typename": "Player",
						"id": 9243,
						"name": "Wiaan Mulder",
						"nameInitial": "W",
						"points": 0,
						"credits": 0,
						"artwork": [{
							"__typename": "Artwork",
							"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/partner-image/MenGoogle/9243.png"
						}],
						"squad": {
							"__typename": "Squad",
							"id": 212,
							"name": "SA",
							"jerseyColor": "#10926B",
							"shortName": "SA",
							"squadColorPalette": "#53a784",
							"playerTextBgColor": "#364150",
							"playerTextFontColor": "#FFFFFF",
							"fullName": "SA",
							"flag": [{
								"__typename": "Artwork",
								"src": "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/RSA-CR1@2x.png",
								"type": null
							}],
							"flagWithName": [{
								"__typename": "Artwork",
								"src": "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/RSA-CR1@2x-BIG.png",
								"type": null
							}]
						},
						"role": {
							"id": 2,
							"pointMultiplier": 1.5,
							"shortName": "VC",
							"name": "Vice Captain",
							"artwork": [{
								"src": "https://assets.dream11.com/public/imgs/playerRoleArtwork/ViceCaptain_Default.svg"
							}],
							"color": "#4A90E2"
						},
						"lineupStatus": {
							"__typename": "LineupStatusTag",
							"status": "NOT_PLAYING",
							"text": "",
							"color": "#DD500F"
						},
						"type": {
							"__typename": "PlayerType",
							"id": 4,
							"maxPerTeam": 0,
							"minPerTeam": 0,
							"name": "ALL",
							"shortName": "ALL"
						},
						"substituteInfo": {
							"isSub": false,
							"priority": 0,
							"replacedWith": null
						}
					}, {
						"__typename": "Player",
						"id": 15209,
						"name": "Gerald Coetzee",
						"nameInitial": "G",
						"points": 88,
						"credits": 0,
						"artwork": [{
							"__typename": "Artwork",
							"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/partner-image/MenGoogle/15209.png"
						}],
						"squad": {
							"__typename": "Squad",
							"id": 212,
							"name": "SA",
							"jerseyColor": "#10926B",
							"shortName": "SA",
							"squadColorPalette": "#53a784",
							"playerTextBgColor": "#364150",
							"playerTextFontColor": "#FFFFFF",
							"fullName": "SA",
							"flag": [{
								"__typename": "Artwork",
								"src": "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/RSA-CR1@2x.png",
								"type": null
							}],
							"flagWithName": [{
								"__typename": "Artwork",
								"src": "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/RSA-CR1@2x-BIG.png",
								"type": null
							}]
						},
						"role": null,
						"lineupStatus": {
							"__typename": "LineupStatusTag",
							"status": "PLAYING",
							"text": "Announced",
							"color": "#00A348"
						},
						"type": {
							"__typename": "PlayerType",
							"id": 2,
							"maxPerTeam": 0,
							"minPerTeam": 0,
							"name": "BOWL",
							"shortName": "BOWL"
						},
						"substituteInfo": {
							"isSub": false,
							"priority": 0,
							"replacedWith": null
						}
					}, {
						"__typename": "Player",
						"id": 33330,
						"name": "Ottniel Baartman",
						"nameInitial": "O",
						"points": 82,
						"credits": 0,
						"artwork": [{
							"__typename": "Artwork",
							"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/partner-image/MenGoogle/33330.png"
						}],
						"squad": {
							"__typename": "Squad",
							"id": 212,
							"name": "SA",
							"jerseyColor": "#10926B",
							"shortName": "SA",
							"squadColorPalette": "#53a784",
							"playerTextBgColor": "#364150",
							"playerTextFontColor": "#FFFFFF",
							"fullName": "SA",
							"flag": [{
								"__typename": "Artwork",
								"src": "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/RSA-CR1@2x.png",
								"type": null
							}],
							"flagWithName": [{
								"__typename": "Artwork",
								"src": "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/RSA-CR1@2x-BIG.png",
								"type": null
							}]
						},
						"role": null,
						"lineupStatus": {
							"__typename": "LineupStatusTag",
							"status": "PLAYING",
							"text": "Announced",
							"color": "#00A348"
						},
						"type": {
							"__typename": "PlayerType",
							"id": 2,
							"maxPerTeam": 0,
							"minPerTeam": 0,
							"name": "BOWL",
							"shortName": "BOWL"
						},
						"substituteInfo": {
							"isSub": false,
							"priority": 0,
							"replacedWith": null
						}
					}, {
						"__typename": "Player",
						"id": 85637,
						"name": "Tim Robinson",
						"nameInitial": "T",
						"points": 14,
						"credits": 0,
						"artwork": [{
							"__typename": "Artwork",
							"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/partner-image/MenGoogle/85637.png"
						}],
						"squad": {
							"__typename": "Squad",
							"id": 186,
							"name": "NZ",
							"jerseyColor": "#242424",
							"shortName": "NZ",
							"squadColorPalette": "#4f67a3",
							"playerTextBgColor": "#F0F3F7",
							"playerTextFontColor": "#202C3D",
							"fullName": "NZ",
							"flag": [{
								"__typename": "Artwork",
								"src": "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/NZ-CR1@2x.png",
								"type": null
							}],
							"flagWithName": [{
								"__typename": "Artwork",
								"src": "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/NZ-CR1@2x-BIG.png",
								"type": null
							}]
						},
						"role": null,
						"lineupStatus": {
							"__typename": "LineupStatusTag",
							"status": "PLAYING",
							"text": "Announced",
							"color": "#00A348"
						},
						"type": {
							"__typename": "PlayerType",
							"id": 1,
							"maxPerTeam": 0,
							"minPerTeam": 0,
							"name": "BAT",
							"shortName": "BAT"
						},
						"substituteInfo": {
							"isSub": false,
							"priority": 0,
							"replacedWith": null
						}
					}, {
						"__typename": "Player",
						"id": 94811,
						"name": "Connor Esterhuizen",
						"nameInitial": "C",
						"points": 89,
						"credits": 0,
						"artwork": [{
							"__typename": "Artwork",
							"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/partner-image/MenGoogle/94811.png"
						}],
						"squad": {
							"__typename": "Squad",
							"id": 212,
							"name": "SA",
							"jerseyColor": "#10926B",
							"shortName": "SA",
							"squadColorPalette": "#53a784",
							"playerTextBgColor": "#364150",
							"playerTextFontColor": "#FFFFFF",
							"fullName": "SA",
							"flag": [{
								"__typename": "Artwork",
								"src": "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/RSA-CR1@2x.png",
								"type": null
							}],
							"flagWithName": [{
								"__typename": "Artwork",
								"src": "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/RSA-CR1@2x-BIG.png",
								"type": null
							}]
						},
						"role": null,
						"lineupStatus": {
							"__typename": "LineupStatusTag",
							"status": "PLAYING",
							"text": "Announced",
							"color": "#00A348"
						},
						"type": {
							"__typename": "PlayerType",
							"id": 3,
							"maxPerTeam": 0,
							"minPerTeam": 0,
							"name": "WK",
							"shortName": "WK"
						},
						"substituteInfo": {
							"isSub": false,
							"priority": 0,
							"replacedWith": null
						}
					}],
					"squads": [{
						"__typename": "BasicSquad",
						"id": 186,
						"shortName": "NZ",
						"name": "NZ"
					}, {
						"__typename": "BasicSquad",
						"id": 212,
						"shortName": "SA",
						"name": "SA"
					}],
					"playerRoles": [{
						"id": 1,
						"pointMultiplier": 2,
						"shortName": "C",
						"name": "Captain",
						"artwork": [{
							"src": "https://assets.dream11.com/public/imgs/playerRoleArtwork/Captain_Default.svg"
						}],
						"color": "#F5A623"
					}, {
						"id": 2,
						"pointMultiplier": 1.5,
						"shortName": "VC",
						"name": "Vice Captain",
						"artwork": [{
							"src": "https://assets.dream11.com/public/imgs/playerRoleArtwork/ViceCaptain_Default.svg"
						}],
						"color": "#4A90E2"
					}]
				}, {
					"id": 2,
					"name": "AARONTH CONQUERERS",
					"site": "cricket",
					"totalPoints": 411.5,
					"match": {
						"__typename": "BasicMatch",
						"id": 112993,
						"status": "COMPLETED",
						"startTime": "2026-03-15T06:15:00.000Z",
						"name": "NZ vs SA"
					},
					"playerType": [{
						"__typename": "PlayerType",
						"id": 3,
						"maxPerTeam": 8,
						"minPerTeam": 1,
						"name": "Wicket-Keepers",
						"shortName": "WK"
					}, {
						"__typename": "PlayerType",
						"id": 1,
						"maxPerTeam": 8,
						"minPerTeam": 1,
						"name": "Batters",
						"shortName": "BAT"
					}, {
						"__typename": "PlayerType",
						"id": 4,
						"maxPerTeam": 8,
						"minPerTeam": 1,
						"name": "All-Rounders",
						"shortName": "AR"
					}, {
						"__typename": "PlayerType",
						"id": 2,
						"maxPerTeam": 8,
						"minPerTeam": 1,
						"name": "Bowlers",
						"shortName": "BOWL"
					}],
					"players": [{
						"__typename": "Player",
						"id": 1213,
						"name": "Tom Latham",
						"nameInitial": "T",
						"points": 35,
						"credits": 0,
						"artwork": [{
							"__typename": "Artwork",
							"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/partner-image/MenGoogle/1213.png"
						}],
						"squad": {
							"__typename": "Squad",
							"id": 186,
							"name": "NZ",
							"jerseyColor": "#242424",
							"shortName": "NZ",
							"squadColorPalette": "#4f67a3",
							"playerTextBgColor": "#F0F3F7",
							"playerTextFontColor": "#202C3D",
							"fullName": "NZ",
							"flag": [{
								"__typename": "Artwork",
								"src": "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/NZ-CR1@2x.png",
								"type": null
							}],
							"flagWithName": [{
								"__typename": "Artwork",
								"src": "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/NZ-CR1@2x-BIG.png",
								"type": null
							}]
						},
						"role": null,
						"lineupStatus": {
							"__typename": "LineupStatusTag",
							"status": "PLAYING",
							"text": "Announced",
							"color": "#00A348"
						},
						"type": {
							"__typename": "PlayerType",
							"id": 3,
							"maxPerTeam": 0,
							"minPerTeam": 0,
							"name": "WK",
							"shortName": "WK"
						},
						"substituteInfo": {
							"isSub": false,
							"priority": 0,
							"replacedWith": null
						}
					}, {
						"__typename": "Player",
						"id": 1704,
						"name": "Keshav Maharaj",
						"nameInitial": "K",
						"points": 93,
						"credits": 0,
						"artwork": [{
							"__typename": "Artwork",
							"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/partner-image/MenGoogle/1704.png"
						}],
						"squad": {
							"__typename": "Squad",
							"id": 212,
							"name": "SA",
							"jerseyColor": "#10926B",
							"shortName": "SA",
							"squadColorPalette": "#53a784",
							"playerTextBgColor": "#364150",
							"playerTextFontColor": "#FFFFFF",
							"fullName": "SA",
							"flag": [{
								"__typename": "Artwork",
								"src": "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/RSA-CR1@2x.png",
								"type": null
							}],
							"flagWithName": [{
								"__typename": "Artwork",
								"src": "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/RSA-CR1@2x-BIG.png",
								"type": null
							}]
						},
						"role": null,
						"lineupStatus": {
							"__typename": "LineupStatusTag",
							"status": "PLAYING",
							"text": "Announced",
							"color": "#00A348"
						},
						"type": {
							"__typename": "PlayerType",
							"id": 2,
							"maxPerTeam": 0,
							"minPerTeam": 0,
							"name": "BOWL",
							"shortName": "BOWL"
						},
						"substituteInfo": {
							"isSub": false,
							"priority": 0,
							"replacedWith": null
						}
					}, {
						"__typename": "Player",
						"id": 1809,
						"name": "Devon Conway",
						"nameInitial": "D",
						"points": 10,
						"credits": 0,
						"artwork": [{
							"__typename": "Artwork",
							"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/partner-image/MenGoogle/1809.png"
						}],
						"squad": {
							"__typename": "Squad",
							"id": 186,
							"name": "NZ",
							"jerseyColor": "#242424",
							"shortName": "NZ",
							"squadColorPalette": "#4f67a3",
							"playerTextBgColor": "#F0F3F7",
							"playerTextFontColor": "#202C3D",
							"fullName": "NZ",
							"flag": [{
								"__typename": "Artwork",
								"src": "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/NZ-CR1@2x.png",
								"type": null
							}],
							"flagWithName": [{
								"__typename": "Artwork",
								"src": "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/NZ-CR1@2x-BIG.png",
								"type": null
							}]
						},
						"role": {
							"id": 1,
							"pointMultiplier": 2,
							"shortName": "C",
							"name": "Captain",
							"artwork": [{
								"src": "https://assets.dream11.com/public/imgs/playerRoleArtwork/Captain_Default.svg"
							}],
							"color": "#F5A623"
						},
						"lineupStatus": {
							"__typename": "LineupStatusTag",
							"status": "PLAYING",
							"text": "Announced",
							"color": "#00A348"
						},
						"type": {
							"__typename": "PlayerType",
							"id": 3,
							"maxPerTeam": 0,
							"minPerTeam": 0,
							"name": "WK",
							"shortName": "WK"
						},
						"substituteInfo": {
							"isSub": false,
							"priority": 0,
							"replacedWith": null
						}
					}, {
						"__typename": "Player",
						"id": 3653,
						"name": "Mitchell Santner",
						"nameInitial": "M",
						"points": 124.5,
						"credits": 0,
						"artwork": [{
							"__typename": "Artwork",
							"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/partner-image/MenGoogle/3653.png"
						}],
						"squad": {
							"__typename": "Squad",
							"id": 186,
							"name": "NZ",
							"jerseyColor": "#242424",
							"shortName": "NZ",
							"squadColorPalette": "#4f67a3",
							"playerTextBgColor": "#F0F3F7",
							"playerTextFontColor": "#202C3D",
							"fullName": "NZ",
							"flag": [{
								"__typename": "Artwork",
								"src": "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/NZ-CR1@2x.png",
								"type": null
							}],
							"flagWithName": [{
								"__typename": "Artwork",
								"src": "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/NZ-CR1@2x-BIG.png",
								"type": null
							}]
						},
						"role": {
							"id": 2,
							"pointMultiplier": 1.5,
							"shortName": "VC",
							"name": "Vice Captain",
							"artwork": [{
								"src": "https://assets.dream11.com/public/imgs/playerRoleArtwork/ViceCaptain_Default.svg"
							}],
							"color": "#4A90E2"
						},
						"lineupStatus": {
							"__typename": "LineupStatusTag",
							"status": "PLAYING",
							"text": "Announced",
							"color": "#00A348"
						},
						"type": {
							"__typename": "PlayerType",
							"id": 4,
							"maxPerTeam": 0,
							"minPerTeam": 0,
							"name": "ALL",
							"shortName": "ALL"
						},
						"substituteInfo": {
							"isSub": false,
							"priority": 0,
							"replacedWith": null
						}
					}, {
						"__typename": "Player",
						"id": 8426,
						"name": "Lockie Ferguson",
						"nameInitial": "L",
						"points": 0,
						"credits": 0,
						"artwork": [{
							"__typename": "Artwork",
							"src": "https://d11.s3.amazonaws.com/player-images/partner-image/MenGoogle2026/8426.png"
						}],
						"squad": {
							"__typename": "Squad",
							"id": 186,
							"name": "NZ",
							"jerseyColor": "#242424",
							"shortName": "NZ",
							"squadColorPalette": "#4f67a3",
							"playerTextBgColor": "#F0F3F7",
							"playerTextFontColor": "#202C3D",
							"fullName": "NZ",
							"flag": [{
								"__typename": "Artwork",
								"src": "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/NZ-CR1@2x.png",
								"type": null
							}],
							"flagWithName": [{
								"__typename": "Artwork",
								"src": "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/NZ-CR1@2x-BIG.png",
								"type": null
							}]
						},
						"role": null,
						"lineupStatus": {
							"__typename": "LineupStatusTag",
							"status": "NOT_PLAYING",
							"text": "",
							"color": "#DD500F"
						},
						"type": {
							"__typename": "PlayerType",
							"id": 2,
							"maxPerTeam": 0,
							"minPerTeam": 0,
							"name": "BOWL",
							"shortName": "BOWL"
						},
						"substituteInfo": {
							"isSub": false,
							"priority": 0,
							"replacedWith": null
						}
					}, {
						"__typename": "Player",
						"id": 8449,
						"name": "Cole McConchie",
						"nameInitial": "C",
						"points": 33,
						"credits": 0,
						"artwork": [{
							"__typename": "Artwork",
							"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/partner-image/MenGoogle/8449.png"
						}],
						"squad": {
							"__typename": "Squad",
							"id": 186,
							"name": "NZ",
							"jerseyColor": "#242424",
							"shortName": "NZ",
							"squadColorPalette": "#4f67a3",
							"playerTextBgColor": "#F0F3F7",
							"playerTextFontColor": "#202C3D",
							"fullName": "NZ",
							"flag": [{
								"__typename": "Artwork",
								"src": "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/NZ-CR1@2x.png",
								"type": null
							}],
							"flagWithName": [{
								"__typename": "Artwork",
								"src": "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/NZ-CR1@2x-BIG.png",
								"type": null
							}]
						},
						"role": null,
						"lineupStatus": {
							"__typename": "LineupStatusTag",
							"status": "PLAYING",
							"text": "Announced",
							"color": "#00A348"
						},
						"type": {
							"__typename": "PlayerType",
							"id": 4,
							"maxPerTeam": 0,
							"minPerTeam": 0,
							"name": "ALL",
							"shortName": "ALL"
						},
						"substituteInfo": {
							"isSub": false,
							"priority": 0,
							"replacedWith": null
						}
					}, {
						"__typename": "Player",
						"id": 9220,
						"name": "Nathan Smith",
						"nameInitial": "N",
						"points": 0,
						"credits": 0,
						"artwork": [{
							"__typename": "Artwork",
							"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/partner-image/MenGoogle/9220.png"
						}],
						"squad": {
							"__typename": "Squad",
							"id": 186,
							"name": "NZ",
							"jerseyColor": "#242424",
							"shortName": "NZ",
							"squadColorPalette": "#4f67a3",
							"playerTextBgColor": "#F0F3F7",
							"playerTextFontColor": "#202C3D",
							"fullName": "NZ",
							"flag": [{
								"__typename": "Artwork",
								"src": "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/NZ-CR1@2x.png",
								"type": null
							}],
							"flagWithName": [{
								"__typename": "Artwork",
								"src": "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/NZ-CR1@2x-BIG.png",
								"type": null
							}]
						},
						"role": null,
						"lineupStatus": {
							"__typename": "LineupStatusTag",
							"status": "NOT_PLAYING",
							"text": "",
							"color": "#DD500F"
						},
						"type": {
							"__typename": "PlayerType",
							"id": 4,
							"maxPerTeam": 0,
							"minPerTeam": 0,
							"name": "ALL",
							"shortName": "ALL"
						},
						"substituteInfo": {
							"isSub": false,
							"priority": 0,
							"replacedWith": null
						}
					}, {
						"__typename": "Player",
						"id": 9236,
						"name": "Tony de Zorzi",
						"nameInitial": "T",
						"points": 14,
						"credits": 0,
						"artwork": [{
							"__typename": "Artwork",
							"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/partner-image/MenGoogle/9236.png"
						}],
						"squad": {
							"__typename": "Squad",
							"id": 212,
							"name": "SA",
							"jerseyColor": "#10926B",
							"shortName": "SA",
							"squadColorPalette": "#53a784",
							"playerTextBgColor": "#364150",
							"playerTextFontColor": "#FFFFFF",
							"fullName": "SA",
							"flag": [{
								"__typename": "Artwork",
								"src": "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/RSA-CR1@2x.png",
								"type": null
							}],
							"flagWithName": [{
								"__typename": "Artwork",
								"src": "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/RSA-CR1@2x-BIG.png",
								"type": null
							}]
						},
						"role": null,
						"lineupStatus": {
							"__typename": "LineupStatusTag",
							"status": "PLAYING",
							"text": "Announced",
							"color": "#00A348"
						},
						"type": {
							"__typename": "PlayerType",
							"id": 1,
							"maxPerTeam": 0,
							"minPerTeam": 0,
							"name": "BAT",
							"shortName": "BAT"
						},
						"substituteInfo": {
							"isSub": false,
							"priority": 0,
							"replacedWith": null
						}
					}, {
						"__typename": "Player",
						"id": 9243,
						"name": "Wiaan Mulder",
						"nameInitial": "W",
						"points": 0,
						"credits": 0,
						"artwork": [{
							"__typename": "Artwork",
							"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/partner-image/MenGoogle/9243.png"
						}],
						"squad": {
							"__typename": "Squad",
							"id": 212,
							"name": "SA",
							"jerseyColor": "#10926B",
							"shortName": "SA",
							"squadColorPalette": "#53a784",
							"playerTextBgColor": "#364150",
							"playerTextFontColor": "#FFFFFF",
							"fullName": "SA",
							"flag": [{
								"__typename": "Artwork",
								"src": "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/RSA-CR1@2x.png",
								"type": null
							}],
							"flagWithName": [{
								"__typename": "Artwork",
								"src": "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/RSA-CR1@2x-BIG.png",
								"type": null
							}]
						},
						"role": null,
						"lineupStatus": {
							"__typename": "LineupStatusTag",
							"status": "NOT_PLAYING",
							"text": "",
							"color": "#DD500F"
						},
						"type": {
							"__typename": "PlayerType",
							"id": 4,
							"maxPerTeam": 0,
							"minPerTeam": 0,
							"name": "ALL",
							"shortName": "ALL"
						},
						"substituteInfo": {
							"isSub": false,
							"priority": 0,
							"replacedWith": null
						}
					}, {
						"__typename": "Player",
						"id": 15209,
						"name": "Gerald Coetzee",
						"nameInitial": "G",
						"points": 88,
						"credits": 0,
						"artwork": [{
							"__typename": "Artwork",
							"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/partner-image/MenGoogle/15209.png"
						}],
						"squad": {
							"__typename": "Squad",
							"id": 212,
							"name": "SA",
							"jerseyColor": "#10926B",
							"shortName": "SA",
							"squadColorPalette": "#53a784",
							"playerTextBgColor": "#364150",
							"playerTextFontColor": "#FFFFFF",
							"fullName": "SA",
							"flag": [{
								"__typename": "Artwork",
								"src": "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/RSA-CR1@2x.png",
								"type": null
							}],
							"flagWithName": [{
								"__typename": "Artwork",
								"src": "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/RSA-CR1@2x-BIG.png",
								"type": null
							}]
						},
						"role": null,
						"lineupStatus": {
							"__typename": "LineupStatusTag",
							"status": "PLAYING",
							"text": "Announced",
							"color": "#00A348"
						},
						"type": {
							"__typename": "PlayerType",
							"id": 2,
							"maxPerTeam": 0,
							"minPerTeam": 0,
							"name": "BOWL",
							"shortName": "BOWL"
						},
						"substituteInfo": {
							"isSub": false,
							"priority": 0,
							"replacedWith": null
						}
					}, {
						"__typename": "Player",
						"id": 85637,
						"name": "Tim Robinson",
						"nameInitial": "T",
						"points": 14,
						"credits": 0,
						"artwork": [{
							"__typename": "Artwork",
							"src": "https://d13ir53smqqeyp.cloudfront.net/player-images/partner-image/MenGoogle/85637.png"
						}],
						"squad": {
							"__typename": "Squad",
							"id": 186,
							"name": "NZ",
							"jerseyColor": "#242424",
							"shortName": "NZ",
							"squadColorPalette": "#4f67a3",
							"playerTextBgColor": "#F0F3F7",
							"playerTextFontColor": "#202C3D",
							"fullName": "NZ",
							"flag": [{
								"__typename": "Artwork",
								"src": "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/NZ-CR1@2x.png",
								"type": null
							}],
							"flagWithName": [{
								"__typename": "Artwork",
								"src": "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/NZ-CR1@2x-BIG.png",
								"type": null
							}]
						},
						"role": null,
						"lineupStatus": {
							"__typename": "LineupStatusTag",
							"status": "PLAYING",
							"text": "Announced",
							"color": "#00A348"
						},
						"type": {
							"__typename": "PlayerType",
							"id": 1,
							"maxPerTeam": 0,
							"minPerTeam": 0,
							"name": "BAT",
							"shortName": "BAT"
						},
						"substituteInfo": {
							"isSub": false,
							"priority": 0,
							"replacedWith": null
						}
					}],
					"squads": [{
						"__typename": "BasicSquad",
						"id": 186,
						"shortName": "NZ",
						"name": "NZ"
					}, {
						"__typename": "BasicSquad",
						"id": 212,
						"shortName": "SA",
						"name": "SA"
					}],
					"playerRoles": [{
						"id": 1,
						"pointMultiplier": 2,
						"shortName": "C",
						"name": "Captain",
						"artwork": [{
							"src": "https://assets.dream11.com/public/imgs/playerRoleArtwork/Captain_Default.svg"
						}],
						"color": "#F5A623"
					}, {
						"id": 2,
						"pointMultiplier": 1.5,
						"shortName": "VC",
						"name": "Vice Captain",
						"artwork": [{
							"src": "https://assets.dream11.com/public/imgs/playerRoleArtwork/ViceCaptain_Default.svg"
						}],
						"color": "#4A90E2"
					}]
				}]
			},
			"site": {
				"maxTeamsAllowed": 40,
				"id": 1,
				"gameId": 2
			}
		}
	});
}
