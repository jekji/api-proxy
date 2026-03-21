import { extractAndModifyHeaders } from '@/lib/changeHeader';
import { NextResponse } from 'next/server';

/**
:method: POST
:path: /graphql/query/react-native/my-contests-post-round-lock
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
content-length: 3051
accept-encoding: gzip

{
	"query": "\n    query MyContestsPostRoundLock($site: String!, $matchId: Int!, $cursor: String, $isFirstPage: Boolean!, $joinedContestCount: Int, $latestEventId: Int, $winnerSlotType: [SlotTypeFantasy!] = [], $contestSlotType: [SlotTypeContest!] = [], $showPromotionalMedia: Boolean = true) {\n  match(site: $site, id: $matchId) {\n    campaignSlot(slotType: $winnerSlotType) @include(if: $showPromotionalMedia) {\n      slotType\n      mediaType\n      mediaUrl\n      redirectionType\n      redirectionUrl\n      fallbackImage\n    }\n    name\n    status\n    startTime\n    roundWinningsInfo @include(if: $isFirstPage) {\n      contestsCount\n      amountWon {\n        amount\n        code\n        symbol\n      }\n      winningsDescription\n    }\n    joinedContestPaginated(\n      after: $cursor\n      joinedContestCount: $joinedContestCount\n      latestEventId: $latestEventId\n      isFirstPage: $isFirstPage\n    ) {\n      edges {\n        campaignSlot(slotType: $contestSlotType) @include(if: $showPromotionalMedia) {\n          slotType\n          mediaType\n          mediaUrl\n        }\n        convertedCampaignSlot(slotType: $contestSlotType) @include(if: $showPromotionalMedia) {\n          slotType\n          mediaType\n          mediaUrl\n        }\n        sameTeamRefund {\n          refundTag {\n            label\n            message\n          }\n        }\n        contestName\n        convertedContestName\n        contestCategory\n        contestType\n        contestSize\n        currentSize\n        isPartnerContest\n        behaviour\n        id\n        inviteCode\n        isGuaranteed\n        isGuaranteedPlus\n        isMultipleEntry\n        multiTeamJoinEnabled\n        numberOfWinners\n        winnerPercent\n        site\n        maxAllowedTeams\n        isFreeEntry\n        prizeDisplayText\n        convertedPrizeDisplayText\n        hasJoined\n        winnerBreakupContestHomeV2 {\n          amount {\n            amount\n            code\n            symbol\n          }\n          convertedAmount {\n            amount\n            code\n            symbol\n          }\n          convertedPrizeDisplayText\n          prizeDisplayText\n          show\n          startRank\n          endRank\n          winnerPercent\n          imageUrl\n        }\n        prizeAmount {\n          amount\n          symbol\n          code\n        }\n        match {\n          id\n          status\n        }\n        tour {\n          id\n          name\n        }\n        myTeams {\n          name\n          id\n          rank\n          points\n          rankChange\n          winningAmount {\n            amount\n            symbol\n            code\n          }\n        }\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n      }\n    }\n  }\n}\n    ",
	"variables": {
		"site": "cricket",
		"matchId": 112970,
		"cursor": "",
		"isFirstPage": true,
		"joinedContestCount": null,
		"latestEventId": 215,
		"contestSlotType": ["CONTEST_CARD_POST_RL"],
		"winnerSlotType": ["WINNER_DECLARATION"],
		"showPromotionalMedia": true
	}
}

{
	"query": "\n    query MyContestsPostRoundLock($site: String!, $matchId: Int!, $cursor: String, $isFirstPage: Boolean!, $joinedContestCount: Int, $latestEventId: Int, $winnerSlotType: [SlotTypeFantasy!] = [], $contestSlotType: [SlotTypeContest!] = [], $showPromotionalMedia: Boolean = true) {\n  match(site: $site, id: $matchId) {\n    campaignSlot(slotType: $winnerSlotType) @include(if: $showPromotionalMedia) {\n      slotType\n      mediaType\n      mediaUrl\n      redirectionType\n      redirectionUrl\n      fallbackImage\n    }\n    name\n    status\n    startTime\n    roundWinningsInfo @include(if: $isFirstPage) {\n      contestsCount\n      amountWon {\n        amount\n        code\n        symbol\n      }\n      winningsDescription\n    }\n    joinedContestPaginated(\n      after: $cursor\n      joinedContestCount: $joinedContestCount\n      latestEventId: $latestEventId\n      isFirstPage: $isFirstPage\n    ) {\n      edges {\n        campaignSlot(slotType: $contestSlotType) @include(if: $showPromotionalMedia) {\n          slotType\n          mediaType\n          mediaUrl\n        }\n        convertedCampaignSlot(slotType: $contestSlotType) @include(if: $showPromotionalMedia) {\n          slotType\n          mediaType\n          mediaUrl\n        }\n        sameTeamRefund {\n          refundTag {\n            label\n            message\n          }\n        }\n        contestName\n        convertedContestName\n        contestCategory\n        contestType\n        contestSize\n        currentSize\n        isPartnerContest\n        behaviour\n        id\n        inviteCode\n        isGuaranteed\n        isGuaranteedPlus\n        isMultipleEntry\n        multiTeamJoinEnabled\n        numberOfWinners\n        winnerPercent\n        site\n        maxAllowedTeams\n        isFreeEntry\n        prizeDisplayText\n        convertedPrizeDisplayText\n        hasJoined\n        winnerBreakupContestHomeV2 {\n          amount {\n            amount\n            code\n            symbol\n          }\n          convertedAmount {\n            amount\n            code\n            symbol\n          }\n          convertedPrizeDisplayText\n          prizeDisplayText\n          show\n          startRank\n          endRank\n          winnerPercent\n          imageUrl\n        }\n        prizeAmount {\n          amount\n          symbol\n          code\n        }\n        match {\n          id\n          status\n        }\n        tour {\n          id\n          name\n        }\n        myTeams {\n          name\n          id\n          rank\n          points\n          rankChange\n          winningAmount {\n            amount\n            symbol\n            code\n          }\n        }\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n      }\n    }\n  }\n}\n    ",
	"variables": {
		"site": "cricket",
		"matchId": 112993,
		"cursor": "",
		"isFirstPage": true,
		"joinedContestCount": null,
		"latestEventId": 188,
		"contestSlotType": ["CONTEST_CARD_POST_RL"],
		"winnerSlotType": ["WINNER_DECLARATION"],
		"showPromotionalMedia": true
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
			const apiURL = process.env.WWW_GRAPHAL_URL + "/graphql/query/react-native/my-contests-post-round-lock";
			const response = await fetch(apiURL, {
				method: 'POST',
				headers: requestHeaders,
				body: JSON.stringify({
					query,
					variables
				}),
				// Next.js 特有缓存配置：每 60 秒刷新一次数据
				next: { revalidate: 60 }
			});
			
			if (!response.ok) {
				throw new Error(`API request failed: ${response.status}, url: ${apiURL}, headers: ${JSON.stringify(requestHeaders)}`);
			}
			
			const data = await response.json();

			console.log("my-contests-post-round-lock", data);
			
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
					"campaignSlot": null,
					"name": "KSO vs RRP",
					"status": "IN_PROGRESS",
					"startTime": "2026-03-15T14:00:00.000Z",
					"roundWinningsInfo": null,
					"joinedContestPaginated": {
						"edges": [{
							"campaignSlot": [{
								"slotType": "CONTEST_CARD_POST_RL",
								"mediaType": "IMAGE",
								"mediaUrl": "https://s3.amazonaws.com/d11/contain/dreamsale/Mega_Contest_3Lakhs.png"
							}],
							"convertedCampaignSlot": [],
							"sameTeamRefund": null,
							"contestName": "₹3 Lakh",
							"convertedContestName": "$3000",
							"contestCategory": "FREE",
							"contestType": "grand",
							"contestSize": 951759,
							"currentSize": 951759,
							"isPartnerContest": false,
							"behaviour": "STATIC",
							"id": "9309632314",
							"inviteCode": "nmaknnozpujh0-",
							"isGuaranteed": true,
							"isGuaranteedPlus": false,
							"isMultipleEntry": true,
							"multiTeamJoinEnabled": null,
							"numberOfWinners": 29001,
							"winnerPercent": 100,
							"site": "cricket",
							"maxAllowedTeams": 20,
							"isFreeEntry": false,
							"prizeDisplayText": "₹3 Lakhs",
							"convertedPrizeDisplayText": "$3,000.00",
							"hasJoined": true,
							"winnerBreakupContestHomeV2": [{
								"amount": {
									"amount": 10000,
									"code": "INR",
									"symbol": "INR"
								},
								"convertedAmount": {
									"amount": 100,
									"code": "USD",
									"symbol": "USD"
								},
								"convertedPrizeDisplayText": "$100.00",
								"prizeDisplayText": "₹10,000",
								"show": 0,
								"startRank": 1,
								"endRank": 1,
								"winnerPercent": null,
								"imageUrl": ""
							}, {
								"amount": {
									"amount": 10,
									"code": "INR",
									"symbol": "INR"
								},
								"convertedAmount": {
									"amount": 0.1,
									"code": "USD",
									"symbol": "USD"
								},
								"convertedPrizeDisplayText": "$0.10",
								"prizeDisplayText": "₹10",
								"show": 0,
								"startRank": 2,
								"endRank": 29001,
								"winnerPercent": null,
								"imageUrl": ""
							}],
							"prizeAmount": {
								"amount": 300000,
								"symbol": "₹",
								"code": "INR"
							},
							"match": {
								"id": 112970,
								"status": "IN_PROGRESS"
							},
							"tour": {
								"id": 5388,
								"name": "Legends Cricket League"
							},
							"myTeams": [{
								"name": "AARONTH CONQUERERS",
								"id": 1,
								"rank": 691592,
								"points": 448.5,
								"rankChange": "INC",
								"winningAmount": {
									"amount": 0,
									"symbol": "₹",
									"code": "INR"
								}
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

	// 112993
	return NextResponse.json({
		"data": {
			"match": {
				"campaignSlot": null,
				"name": "NZ vs SA",
				"status": "COMPLETED",
				"startTime": "2026-03-15T06:15:00.000Z",
				"roundWinningsInfo": null,
				"joinedContestPaginated": {
					"edges": [{
						"campaignSlot": [{
							"slotType": "CONTEST_CARD_POST_RL",
							"mediaType": "IMAGE",
							"mediaUrl": "https://d13ir53smqqeyp.cloudfront.net/contain/dreamsale/Mega_Contest_1_Lakh.png"
						}],
						"convertedCampaignSlot": [],
						"sameTeamRefund": null,
						"contestName": "Rs. 1 Lakh",
						"convertedContestName": "$1000",
						"contestCategory": "FREE",
						"contestType": "grand",
						"contestSize": 1331331,
						"currentSize": 1331331,
						"isPartnerContest": false,
						"behaviour": "STATIC",
						"id": "9309552289",
						"inviteCode": "nmal1arsmii6h-",
						"isGuaranteed": true,
						"isGuaranteedPlus": false,
						"isMultipleEntry": true,
						"multiTeamJoinEnabled": null,
						"numberOfWinners": 9001,
						"winnerPercent": 100,
						"site": "cricket",
						"maxAllowedTeams": 20,
						"isFreeEntry": false,
						"prizeDisplayText": "₹1 Lakh",
						"convertedPrizeDisplayText": "$1,000.00",
						"hasJoined": true,
						"winnerBreakupContestHomeV2": [{
							"amount": {
								"amount": 10000,
								"code": "INR",
								"symbol": "INR"
							},
							"convertedAmount": {
								"amount": 100,
								"code": "USD",
								"symbol": "USD"
							},
							"convertedPrizeDisplayText": "$100.00",
							"prizeDisplayText": "₹10,000",
							"show": 0,
							"startRank": 1,
							"endRank": 1,
							"winnerPercent": null,
							"imageUrl": ""
						}, {
							"amount": {
								"amount": 10,
								"code": "INR",
								"symbol": "INR"
							},
							"convertedAmount": {
								"amount": 0.1,
								"code": "USD",
								"symbol": "USD"
							},
							"convertedPrizeDisplayText": "$0.10",
							"prizeDisplayText": "₹10",
							"show": 0,
							"startRank": 2,
							"endRank": 9001,
							"winnerPercent": null,
							"imageUrl": ""
						}],
						"prizeAmount": {
							"amount": 100000,
							"symbol": "₹",
							"code": "INR"
						},
						"match": {
							"id": 112993,
							"status": "COMPLETED"
						},
						"tour": {
							"id": 5391,
							"name": "New Zealand vs South Africa T20I"
						},
						"myTeams": [{
							"name": "AARONTH CONQUERERS",
							"id": 1,
							"rank": 1149894,
							"points": 413,
							"rankChange": "NONE",
							"winningAmount": {
								"amount": 0,
								"symbol": "₹",
								"code": "INR"
							}
						}, {
							"name": "AARONTH CONQUERERS",
							"id": 2,
							"rank": 1154891,
							"points": 411.5,
							"rankChange": "NONE",
							"winningAmount": {
								"amount": 0,
								"symbol": "₹",
								"code": "INR"
							}
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
