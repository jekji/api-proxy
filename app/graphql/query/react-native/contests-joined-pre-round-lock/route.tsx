import { BASEHEADERS } from '@/constants';
import { NextResponse } from 'next/server';

/**
:method: POST
:path: /graphql/query/react-native/contests-joined-pre-round-lock
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
content-length: 2141
accept-encoding: gzip
cookie: __refreshToken=HnwZbqZGEOGRjPOhPtgpE0R8zkKWTE9u; dh_user_id=4c1e2720-2090-11f1-8bfe-cdefa134efa5

{"query":"\n    query ContestsJoinedPreRoundLock($site: String!, $matchId: Int!, $cursor: String, $slotType: [SlotTypeContest!] = [], $promotionalMediaEnabled: Boolean = true) {\n  match(site: $site, id: $matchId) {\n    name\n    status\n    startTime\n    joinedContestPaginated(after: $cursor, showInsuranceIcon: false) {\n      edges {\n        campaignSlot(slotType: $slotType) @include(if: $promotionalMediaEnabled) {\n          slotType\n          mediaType\n          mediaUrl\n        }\n        convertedCampaignSlot(slotType: $slotType) @include(if: $promotionalMediaEnabled) {\n          slotType\n          mediaType\n          mediaUrl\n        }\n        isShareable\n        contestName\n        convertedContestName\n        contestCategory\n        contestType\n        contestSize\n        currentSize\n        isPartnerContest\n        adConfig {\n          dealType\n        }\n        behaviour\n        id\n        inviteCode\n        isGuaranteed\n        isMultipleEntry\n        numberOfWinners\n        winnerPercent\n        maxAllowedTeams\n        prizeDisplayText\n        convertedPrizeDisplayText\n        hasJoined\n        explanation\n        winnerBreakup {\n          prizeDisplayText\n          amount {\n            amount\n            symbol\n          }\n        }\n        winnerBreakupContestHomeV2 {\n          amount {\n            amount\n            code\n            symbol\n          }\n          convertedAmount {\n            amount\n            code\n            symbol\n          }\n          convertedPrizeDisplayText\n          prizeDisplayText\n          show\n          startRank\n          endRank\n          winnerPercent\n          imageUrl\n        }\n        match {\n          startTime\n        }\n        joinedTeamsCount\n        prizeAmount {\n          amount\n          symbol\n        }\n        myTeams {\n          name\n          id\n        }\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n      }\n    }\n  }\n}\n    ","variables":{"site":"cricket","matchId":113005,"limit":10,"promotionalMediaEnabled":true,"slotType":["CONTEST_CARD_PRE_RL"]}}

{
	"query": "\n    query ContestsJoinedPreRoundLock($site: String!, $matchId: Int!, $cursor: String, $slotType: [SlotTypeContest!] = [], $promotionalMediaEnabled: Boolean = true) {\n  match(site: $site, id: $matchId) {\n    name\n    status\n    startTime\n    joinedContestPaginated(after: $cursor, showInsuranceIcon: false) {\n      edges {\n        campaignSlot(slotType: $slotType) @include(if: $promotionalMediaEnabled) {\n          slotType\n          mediaType\n          mediaUrl\n        }\n        convertedCampaignSlot(slotType: $slotType) @include(if: $promotionalMediaEnabled) {\n          slotType\n          mediaType\n          mediaUrl\n        }\n        isShareable\n        contestName\n        convertedContestName\n        contestCategory\n        contestType\n        contestSize\n        currentSize\n        isPartnerContest\n        adConfig {\n          dealType\n        }\n        behaviour\n        id\n        inviteCode\n        isGuaranteed\n        isMultipleEntry\n        numberOfWinners\n        winnerPercent\n        maxAllowedTeams\n        prizeDisplayText\n        convertedPrizeDisplayText\n        hasJoined\n        explanation\n        winnerBreakup {\n          prizeDisplayText\n          amount {\n            amount\n            symbol\n          }\n        }\n        winnerBreakupContestHomeV2 {\n          amount {\n            amount\n            code\n            symbol\n          }\n          convertedAmount {\n            amount\n            code\n            symbol\n          }\n          convertedPrizeDisplayText\n          prizeDisplayText\n          show\n          startRank\n          endRank\n          winnerPercent\n          imageUrl\n        }\n        match {\n          startTime\n        }\n        joinedTeamsCount\n        prizeAmount {\n          amount\n          symbol\n        }\n        myTeams {\n          name\n          id\n        }\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n      }\n    }\n  }\n}\n    ",
	"variables": {
		"site": "cricket",
		"matchId": 113005,
		"limit": 10,
		"promotionalMediaEnabled": true,
		"slotType": ["CONTEST_CARD_PRE_RL"]
	}
}

*/
export async function POST(request: Request) {
	const body = await request.json();
	const { query, variables } = body;
	
	if (process.env.WWW_GRAPHAL_URL) {
		// Use real API to fetch data
		try {
			const apiURL = process.env.WWW_GRAPHAL_URL + "/graphql/query/react-native/contests-joined-pre-round-lock";
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
			"match": {
				"name": "ABB vs LB",
				"status": "NOT_STARTED",
				"startTime": "2026-03-16T11:15:00.000Z",
				"joinedContestPaginated": {
					"edges": [{
						"campaignSlot": null,
						"convertedCampaignSlot": null,
						"isShareable": true,
						"contestName": "₹750",
						"convertedContestName": "$7.50",
						"contestCategory": "FREE",
						"contestType": "public",
						"contestSize": 20000,
						"currentSize": 9649,
						"isPartnerContest": false,
						"adConfig": {
							"dealType": "PROGRAMMATIC"
						},
						"behaviour": "STATIC",
						"id": "9309682325",
						"inviteCode": "nmb2wdl3ke5gl-",
						"isGuaranteed": true,
						"isMultipleEntry": true,
						"numberOfWinners": 1,
						"winnerPercent": 100,
						"maxAllowedTeams": 2,
						"prizeDisplayText": "₹750",
						"convertedPrizeDisplayText": "$7.50",
						"hasJoined": true,
						"explanation": null,
						"winnerBreakup": [{
							"prizeDisplayText": "₹750",
							"amount": {
								"amount": 750,
								"symbol": "₹"
							}
						}],
						"winnerBreakupContestHomeV2": [{
							"amount": {
								"amount": 750,
								"code": "INR",
								"symbol": "INR"
							},
							"convertedAmount": {
								"amount": 7.5,
								"code": "USD",
								"symbol": "USD"
							},
							"convertedPrizeDisplayText": "$7.50",
							"prizeDisplayText": "₹750",
							"show": 0,
							"startRank": 1,
							"endRank": 1,
							"winnerPercent": null,
							"imageUrl": ""
						}],
						"match": {
							"startTime": "2026-03-16T11:15:00.000Z"
						},
						"joinedTeamsCount": 1,
						"prizeAmount": {
							"amount": 750,
							"symbol": "₹"
						},
						"myTeams": [{
							"name": "AARONTH CONQUERERS",
							"id": 1
						}]
					}],
					"pageInfo": {
						"endCursor": null,
						"hasNextPage": false
					}
				}
			}
		}
	});
}
