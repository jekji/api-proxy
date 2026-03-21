import { extractAndModifyHeaders } from '@/lib/changeHeader';
import { NextResponse } from 'next/server';

/**
:method: POST
:path: /graphql/query/react-native/leaderboard-post-rl-contest-details
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
content-length: 1674
accept-encoding: gzip

{"query":"\n    query LeaderboardPostRlContestDetails($site: String!, $tourId: Int!, $matchId: Int!, $contestId: ID!, $contestFormat: String, $shouldEnableCurrentlyWinning: Boolean = false, $latestEventId: Int = -1, $shouldQueryUpdatedAt: Boolean = true) {\n  contest(\n    site: $site\n    tourId: $tourId\n    matchId: $matchId\n    _id: $contestId\n    contestFormat: $contestFormat\n  ) {\n    myTeams(\n      isCurrentlyWinningEnabled: $shouldEnableCurrentlyWinning\n      latestEventId: $latestEventId\n    ) {\n      ...LeaderboardMyTeamPostRl\n      isInWinningZone\n    }\n    ...ContestDetailsPostRl\n  }\n}\n    \n    fragment LeaderboardMyTeamPostRl on UserTeam {\n  id\n  name\n  rank\n  points\n  rankChange\n  winningAmount {\n    amount\n    symbol\n  }\n  user {\n    id\n    profilePic {\n      src\n    }\n    officialTick {\n      src\n    }\n    userType\n  }\n}\n    \n\n    fragment ContestDetailsPostRl on Contest {\n  sameTeamRefund {\n    refundStatus {\n      status\n      label\n      message\n    }\n  }\n  leaderboardOverStamp @include(if: $shouldQueryUpdatedAt) {\n    lastCalcAt\n  }\n  contestSize\n  currentSize\n  isPartnerContest\n  id\n  hasJoined\n  numberOfWinners\n  contestType\n  isMultipleEntry\n  contestCategory\n  entryFee {\n    amount\n  }\n  prizeAmount {\n    amount\n  }\n  match {\n    name\n    status\n    startTime\n    substitutionInfo {\n      isTeamCompareActive\n      teamCompareText\n    }\n  }\n}\n    ","variables":{"matchId":112970,"site":"cricket","contestId":"9309632314","tourId":5388,"contestFormat":null,"shouldEnableCurrentlyWinning":false,"filter":null,"shouldQueryUpdatedAt":true,"latestEventId":176}}
*/
export async function POST(request: Request) {
	const body = await request.json();
	const { query, variables } = body;

	const requestHeaders = extractAndModifyHeaders(request, process.env.WWW_GRAPHAL_URL || '');
			
	if (process.env.WWW_GRAPHAL_URL) {
		// Use real API to fetch data
		try {
			const apiURL = process.env.WWW_GRAPHAL_URL + "/graphql/query/react-native/leaderboard-post-rl-contest-details";
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

			console.log("leaderboard-post-rl-contest-details", data);

			return NextResponse.json(data);
		} catch (error) {
			console.error('API request error:', error);
			// Fall back to mock data if API fails
		}
	}

	return NextResponse.json({
		"data": {
			"contest": {
				"myTeams": [{
					"id": 1,
					"name": "AARONTH CONQUERERS",
					"rank": 658425,
					"points": 465.5,
					"rankChange": "INC",
					"winningAmount": {
						"amount": 0,
						"symbol": "₹"
					},
					"user": {
						"id": 317152330,
						"profilePic": [{
							"src": "https://userassets.dream11.com/fbprofilepic/e5acd9a936559f11acb7d7230dc5730985b4e74e_profilepic.jpg?timestamp=1773592200000"
						}],
						"officialTick": null,
						"userType": null
					},
					"isInWinningZone": false
				}],
				"sameTeamRefund": null,
				"leaderboardOverStamp": {
					"lastCalcAt": "Points last updated at 9.0 overs"
				},
				"contestSize": 951759,
				"currentSize": 951759,
				"isPartnerContest": false,
				"id": "9309632314",
				"hasJoined": true,
				"numberOfWinners": 29001,
				"contestType": "grand",
				"isMultipleEntry": true,
				"contestCategory": "FREE",
				"entryFee": {
					"amount": 0
				},
				"prizeAmount": {
					"amount": 300000
				},
				"match": {
					"name": "KSO vs RRP",
					"status": "IN_PROGRESS",
					"startTime": "2026-03-15T14:00:00.000Z",
					"substitutionInfo": {
						"isTeamCompareActive": true,
						"teamCompareText": ""
					}
				}
			}
		}
	});
}
