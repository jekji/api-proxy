import { NextResponse } from 'next/server';

/**
:method: POST
:path: /graphql/query/react-native/winning-breakup-v2-query
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
content-length: 2014
accept-encoding: gzip

{"query":"\n    query WinningBreakupV2Query($site: String!, $tourId: Int!, $matchId: Int!, $contestId: ID!, $slotTypes: [SlotTypeContest!], $shouldFetchCampaignSlot: Boolean = true) {\n  contest(id: $contestId, site: $site, matchId: $matchId, tourId: $tourId) {\n    ...ContestData\n    campaignSlot(slotType: $slotTypes) @include(if: $shouldFetchCampaignSlot) {\n      slotType\n      mediaType\n      mediaUrl\n      redirectionType\n      redirectionUrl\n    }\n    convertedCampaignSlot(slotType: $slotTypes) @include(if: $shouldFetchCampaignSlot) {\n      slotType\n      mediaType\n      mediaUrl\n      redirectionType\n      redirectionUrl\n    }\n    match {\n      status\n    }\n    isPartnerContest\n    winnerTemplateV3 {\n      canFirstPrizeIncrease\n      templateInfo\n      podiums {\n        title\n        type\n        prizeBreakup {\n          amount {\n            amount\n            symbol\n          }\n          convertedPrizeDisplayText\n          prizeDisplayText\n          convertedAmount {\n            amount\n            symbol\n          }\n          convertedPrizeDisplayText\n          endRank\n          startRank\n          winnerPercent\n          specialPrize {\n            subtitle\n            additionalAmount\n            winnerTemplateAmount\n          }\n          imageUrl\n        }\n      }\n    }\n    numberOfWinners\n    prizeAmount {\n      amount\n      symbol\n    }\n    prizeDisplayText\n    contestCategory\n    currentSize\n    contestSize\n    behaviour\n    actualContestSize\n  }\n}\n    \n    fragment ContestData on Contest {\n  id\n  numberOfWinners\n  prizeAmount {\n    amount\n    symbol\n  }\n  entryFee {\n    amount\n    symbol\n  }\n  contestSize\n  contestType\n  contestCategory\n  isGuaranteed\n  prizeDisplayText\n  convertedPrizeDisplayText\n}\n    ","variables":{"site":"cricket","tourId":5388,"matchId":112970,"contestId":"9309632314","slotTypes":["CONTEST_DETAIL_BANNER","CONTEST_DETAIL_FIRST_PRIZE"],"shouldFetchCampaignSlot":true}}
*/
export async function POST() {
	return NextResponse.json({
		"data": {
			"contest": {
				"id": "9309632314",
				"numberOfWinners": 29001,
				"prizeAmount": {
					"amount": 300000,
					"symbol": "₹"
				},
				"entryFee": {
					"amount": 0,
					"symbol": "₹"
				},
				"contestSize": 951759,
				"contestType": "grand",
				"contestCategory": "FREE",
				"isGuaranteed": true,
				"prizeDisplayText": "₹3 Lakhs",
				"convertedPrizeDisplayText": "$3,000.00",
				"campaignSlot": [],
				"convertedCampaignSlot": [],
				"match": {
					"status": "IN_PROGRESS"
				},
				"isPartnerContest": false,
				"winnerTemplateV3": {
					"canFirstPrizeIncrease": null,
					"templateInfo": null,
					"podiums": [{
						"title": "RANK 1",
						"type": "TOP_PRIZE",
						"prizeBreakup": [{
							"amount": {
								"amount": 10000,
								"symbol": "₹"
							},
							"convertedPrizeDisplayText": "$100.00",
							"prizeDisplayText": "₹10,000",
							"convertedAmount": {
								"amount": 100,
								"symbol": "$"
							},
							"endRank": 1,
							"startRank": 1,
							"winnerPercent": null,
							"specialPrize": null,
							"imageUrl": ""
						}]
					}, {
						"title": "Rank 2 and below",
						"type": "OTHERS",
						"prizeBreakup": [{
							"amount": {
								"amount": 10,
								"symbol": "₹"
							},
							"convertedPrizeDisplayText": "$0.10",
							"prizeDisplayText": "₹10",
							"convertedAmount": {
								"amount": 0.1,
								"symbol": "$"
							},
							"endRank": 29001,
							"startRank": 2,
							"winnerPercent": null,
							"specialPrize": null,
							"imageUrl": ""
						}]
					}]
				},
				"currentSize": 951759,
				"behaviour": "STATIC",
				"actualContestSize": 5000000
			}
		}
	});
}
