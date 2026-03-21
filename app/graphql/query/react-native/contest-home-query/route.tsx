import { BASEHEADERS } from '@/constants';
import { NextResponse } from 'next/server';

/**
:method: POST
:path: /graphql/query/react-native/contest-home-query
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
content-length: 2310
accept-encoding: gzip

{"query":"\n    query ContestHomeQuery($site: String!, $tourId: Int!, $matchId: Int!, $limit: Int, $shouldFetchSquads: Boolean = false, $slotType: [SlotTypeContest!] = [], $promotionalMediaEnabled: Boolean = true) {\n  site(slug: $site) {\n    maxTeamsAllowed\n  }\n  match(site: $site, id: $matchId) {\n    name\n    id\n    startTime\n    status\n    lineupStatus\n    squads @include(if: $shouldFetchSquads) {\n      flag {\n        src\n      }\n      squadColorPalette\n      shortName\n    }\n    userTeamsCount\n  }\n  contestSections(\n    site: $site\n    matchId: $matchId\n    tourId: $tourId\n    withPromotions: true\n    isLiteRequest: false\n  ) {\n    id\n    name\n    description\n    totalContestCount\n    displayContestCount\n    tag {\n      text\n    }\n    sectionType\n    displayContests {\n      ...ContestSectionItem\n    }\n  }\n}\n    \n    fragment ContestSectionItem on Contest {\n  campaignSlot(slotType: $slotType) @include(if: $promotionalMediaEnabled) {\n    slotType\n    mediaType\n    mediaUrl\n  }\n  convertedCampaignSlot(slotType: $slotType) @include(if: $promotionalMediaEnabled) {\n    slotType\n    mediaType\n    mediaUrl\n  }\n  contestTag\n  contestTypeDisplayText\n  adConfig {\n    dealType\n  }\n  spotsDisplayText\n  explanation\n  joinedTeamsCount\n  contestName\n  convertedContestName\n  contestCategory\n  contestType\n  contestSize\n  currentSize\n  isPartnerContest\n  behaviour\n  id\n  productId\n  inviteCode\n  isGuaranteed\n  isMultipleEntry\n  numberOfWinners\n  winnerPercent\n  maxAllowedTeams\n  isFreeEntry\n  prizeDisplayText\n  convertedPrizeDisplayText\n  hasJoined\n  joinedTeamsCount\n  winnerBreakupContestHomeV2 {\n    amount {\n      amount\n      code\n      symbol\n    }\n    convertedAmount {\n      amount\n      code\n      symbol\n    }\n    convertedPrizeDisplayText\n    prizeDisplayText\n    show\n    startRank\n    endRank\n    winnerPercent\n    imageUrl\n  }\n  winnerBreakup(limit: $limit) {\n    prizeDisplayText\n    amount {\n      amount\n      symbol\n    }\n  }\n  prizeAmount {\n    amount\n    symbol\n  }\n  match {\n    startTime\n  }\n}\n    ","variables":{"matchId":112992,"site":"cricket","tourId":5390,"shouldFetchSquads":true,"slotType":["CONTEST_CARD_PRE_RL"],"promotionalMediaEnabled":true,"limit":10}}

*/
export async function POST(request: Request) {
	const body = await request.json();
	const { query, variables } = body;
	
	// Extract headers from the incoming request
	const requestHeaders = Object.fromEntries(request.headers.entries());

	console.log(`Origin Headers: ${JSON.stringify(requestHeaders)}`);

	requestHeaders['atlas'] = 'IN';
	requestHeaders['locale'] = 'en-US';

	requestHeaders['host'] = process.env.API_URL.replace('https://', '').replace('http://', '');

	// 移除不需要的headers
	const headersToRemove = [
		'cdn-loop',
		'cf-connecting-ip',
		'cf-ipcountry',
		'cf-ray',
		'cf-visitor',
		'x-forwarded-for',
		'x-forwarded-host',
		'x-forwarded-port',
		'x-forwarded-proto',
		'x-original-uri',
		'x-real-ip',
		'connection'
	];

	headersToRemove.forEach(key => delete requestHeaders[key]);

	console.log(`Changed Headers: ${JSON.stringify(requestHeaders)}`);

	if (process.env.WWW_GRAPHAL_URL) {
		// Use real API to fetch data
		try {
			const apiURL = process.env.WWW_GRAPHAL_URL + "/graphql/query/react-native/contest-home-query";
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
			
			console.log("contestHomeQuery", JSON.stringify(data));

			return NextResponse.json(data);
		} catch (error) {
			console.error('API request error:', error);
			// Fall back to mock data if API fails
		}
	}
	
	return NextResponse.json({
		"data": {
			"site": {
				"maxTeamsAllowed": 40
			},
			"match": {
				"name": "MAL vs BAH",
				"id": 112992,
				"startTime": "2026-03-16T01:30:00.000Z",
				"status": "NOT_STARTED",
				"lineupStatus": "LINEUP_EXPECTED",
				"squads": [{
					"flag": [{
						"src": "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/FC-MALY@2x.png"
					}],
					"squadColorPalette": "#ffd800",
					"shortName": "MAL"
				}, {
					"flag": [{
						"src": "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/BAH-CR1@2x.png"
					}],
					"squadColorPalette": "#ea4d5e",
					"shortName": "BAH"
				}],
				"userTeamsCount": 0
			},
			"contestSections": [{
				"id": 86,
				"name": "",
				"description": "",
				"totalContestCount": 8,
				"displayContestCount": 30,
				"tag": null,
				"sectionType": "CONTEST",
				"displayContests": [{
					"campaignSlot": [{
						"slotType": "CONTEST_CARD_PRE_RL",
						"mediaType": "IMAGE",
						"mediaUrl": "https://d13ir53smqqeyp.cloudfront.net/contain/dreamsale/Mega_Contest_1_Lakh.png"
					}],
					"convertedCampaignSlot": [],
					"contestTag": "IN",
					"contestTypeDisplayText": "Mega",
					"adConfig": {
						"dealType": "PROGRAMMATIC"
					},
					"spotsDisplayText": "50.0L",
					"explanation": null,
					"joinedTeamsCount": 0,
					"contestName": "₹1 Lakh",
					"convertedContestName": "$1000",
					"contestCategory": "FREE",
					"contestType": "grand",
					"contestSize": 5000000,
					"currentSize": 156054,
					"isPartnerContest": false,
					"behaviour": "STATIC",
					"id": "9309662318",
					"productId": "38035",
					"inviteCode": "nmal0wqoqcc9k-",
					"isGuaranteed": true,
					"isMultipleEntry": true,
					"numberOfWinners": 9001,
					"winnerPercent": 100,
					"maxAllowedTeams": 20,
					"isFreeEntry": false,
					"prizeDisplayText": "₹1 Lakh",
					"convertedPrizeDisplayText": "$1,000.00",
					"hasJoined": false,
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
					"winnerBreakup": [{
						"prizeDisplayText": "₹10,000",
						"amount": {
							"amount": 10000,
							"symbol": "₹"
						}
					}],
					"prizeAmount": {
						"amount": 100000,
						"symbol": "₹"
					},
					"match": {
						"startTime": "2026-03-16T01:30:00.000Z"
					}
				}, {
					"campaignSlot": [{
						"slotType": "CONTEST_CARD_PRE_RL",
						"mediaType": "IMAGE",
						"mediaUrl": "https://s3.amazonaws.com/d11/contain/dreamsale/Winner_Takes_It_All_50000.png"
					}],
					"convertedCampaignSlot": [],
					"contestTag": "IN",
					"contestTypeDisplayText": "Mega",
					"adConfig": {
						"dealType": "PROGRAMMATIC"
					},
					"spotsDisplayText": "30.0L",
					"explanation": null,
					"joinedTeamsCount": 0,
					"contestName": "₹50,000",
					"convertedContestName": "$500",
					"contestCategory": "FREE",
					"contestType": "grand",
					"contestSize": 3000000,
					"currentSize": 65387,
					"isPartnerContest": false,
					"behaviour": "STATIC",
					"id": "9309662315",
					"productId": "38038",
					"inviteCode": "nmal0wqoqcc9h-",
					"isGuaranteed": true,
					"isMultipleEntry": true,
					"numberOfWinners": 1,
					"winnerPercent": 100,
					"maxAllowedTeams": 10,
					"isFreeEntry": false,
					"prizeDisplayText": "₹50,000",
					"convertedPrizeDisplayText": "$500.00",
					"hasJoined": false,
					"winnerBreakupContestHomeV2": [{
						"amount": {
							"amount": 50000,
							"code": "INR",
							"symbol": "INR"
						},
						"convertedAmount": {
							"amount": 500,
							"code": "USD",
							"symbol": "USD"
						},
						"convertedPrizeDisplayText": "$500.00",
						"prizeDisplayText": "₹50,000",
						"show": 0,
						"startRank": 1,
						"endRank": 1,
						"winnerPercent": null,
						"imageUrl": ""
					}],
					"winnerBreakup": [{
						"prizeDisplayText": "₹50,000",
						"amount": {
							"amount": 50000,
							"symbol": "₹"
						}
					}],
					"prizeAmount": {
						"amount": 50000,
						"symbol": "₹"
					},
					"match": {
						"startTime": "2026-03-16T01:30:00.000Z"
					}
				}, {
					"campaignSlot": null,
					"convertedCampaignSlot": null,
					"contestTag": "IN",
					"contestTypeDisplayText": "",
					"adConfig": {
						"dealType": "PROGRAMMATIC"
					},
					"spotsDisplayText": "20,000",
					"explanation": null,
					"joinedTeamsCount": 0,
					"contestName": "₹750",
					"convertedContestName": "$7.50",
					"contestCategory": "FREE",
					"contestType": "public",
					"contestSize": 20000,
					"currentSize": 7657,
					"isPartnerContest": false,
					"behaviour": "STATIC",
					"id": "9309662316",
					"productId": "37802",
					"inviteCode": "nmal0wqoqcc9i-",
					"isGuaranteed": true,
					"isMultipleEntry": true,
					"numberOfWinners": 1,
					"winnerPercent": 100,
					"maxAllowedTeams": 2,
					"isFreeEntry": false,
					"prizeDisplayText": "₹750",
					"convertedPrizeDisplayText": "$7.50",
					"hasJoined": false,
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
					"winnerBreakup": [{
						"prizeDisplayText": "₹750",
						"amount": {
							"amount": 750,
							"symbol": "₹"
						}
					}],
					"prizeAmount": {
						"amount": 750,
						"symbol": "₹"
					},
					"match": {
						"startTime": "2026-03-16T01:30:00.000Z"
					}
				}, {
					"campaignSlot": null,
					"convertedCampaignSlot": null,
					"contestTag": "IN",
					"contestTypeDisplayText": "",
					"adConfig": {
						"dealType": "PROGRAMMATIC"
					},
					"spotsDisplayText": "15,000",
					"explanation": null,
					"joinedTeamsCount": 0,
					"contestName": "₹500",
					"convertedContestName": "$5",
					"contestCategory": "FREE",
					"contestType": "public",
					"contestSize": 15000,
					"currentSize": 6066,
					"isPartnerContest": false,
					"behaviour": "STATIC",
					"id": "9309662317",
					"productId": "37803",
					"inviteCode": "nmal0wqoqcc9j-",
					"isGuaranteed": true,
					"isMultipleEntry": true,
					"numberOfWinners": 1,
					"winnerPercent": 100,
					"maxAllowedTeams": 2,
					"isFreeEntry": false,
					"prizeDisplayText": "₹500",
					"convertedPrizeDisplayText": "$5.00",
					"hasJoined": false,
					"winnerBreakupContestHomeV2": [{
						"amount": {
							"amount": 500,
							"code": "INR",
							"symbol": "INR"
						},
						"convertedAmount": {
							"amount": 5,
							"code": "USD",
							"symbol": "USD"
						},
						"convertedPrizeDisplayText": "$5.00",
						"prizeDisplayText": "₹500",
						"show": 0,
						"startRank": 1,
						"endRank": 1,
						"winnerPercent": null,
						"imageUrl": ""
					}],
					"winnerBreakup": [{
						"prizeDisplayText": "₹500",
						"amount": {
							"amount": 500,
							"symbol": "₹"
						}
					}],
					"prizeAmount": {
						"amount": 500,
						"symbol": "₹"
					},
					"match": {
						"startTime": "2026-03-16T01:30:00.000Z"
					}
				}, {
					"campaignSlot": null,
					"convertedCampaignSlot": null,
					"contestTag": "IN",
					"contestTypeDisplayText": "",
					"adConfig": {
						"dealType": "PROGRAMMATIC"
					},
					"spotsDisplayText": "7,500",
					"explanation": null,
					"joinedTeamsCount": 0,
					"contestName": "₹250",
					"convertedContestName": "$2.50",
					"contestCategory": "FREE",
					"contestType": "public",
					"contestSize": 7500,
					"currentSize": 5027,
					"isPartnerContest": false,
					"behaviour": "STATIC",
					"id": "9309662319",
					"productId": "37804",
					"inviteCode": "nmal0wqoqcc9l-",
					"isGuaranteed": true,
					"isMultipleEntry": true,
					"numberOfWinners": 1,
					"winnerPercent": 100,
					"maxAllowedTeams": 2,
					"isFreeEntry": false,
					"prizeDisplayText": "₹250",
					"convertedPrizeDisplayText": "$2.50",
					"hasJoined": false,
					"winnerBreakupContestHomeV2": [{
						"amount": {
							"amount": 250,
							"code": "INR",
							"symbol": "INR"
						},
						"convertedAmount": {
							"amount": 2.5,
							"code": "USD",
							"symbol": "USD"
						},
						"convertedPrizeDisplayText": "$2.50",
						"prizeDisplayText": "₹250",
						"show": 0,
						"startRank": 1,
						"endRank": 1,
						"winnerPercent": null,
						"imageUrl": ""
					}],
					"winnerBreakup": [{
						"prizeDisplayText": "₹250",
						"amount": {
							"amount": 250,
							"symbol": "₹"
						}
					}],
					"prizeAmount": {
						"amount": 250,
						"symbol": "₹"
					},
					"match": {
						"startTime": "2026-03-16T01:30:00.000Z"
					}
				}, {
					"campaignSlot": null,
					"convertedCampaignSlot": null,
					"contestTag": "IN",
					"contestTypeDisplayText": "",
					"adConfig": {
						"dealType": "PROGRAMMATIC"
					},
					"spotsDisplayText": "3,000",
					"explanation": null,
					"joinedTeamsCount": 0,
					"contestName": "₹100",
					"convertedContestName": "$1",
					"contestCategory": "FREE",
					"contestType": "public",
					"contestSize": 3000,
					"currentSize": 2292,
					"isPartnerContest": false,
					"behaviour": "STATIC",
					"id": "9297331938",
					"productId": "37805",
					"inviteCode": "nmal0wpt1mxq0-",
					"isGuaranteed": true,
					"isMultipleEntry": true,
					"numberOfWinners": 1,
					"winnerPercent": 100,
					"maxAllowedTeams": 2,
					"isFreeEntry": false,
					"prizeDisplayText": "₹100",
					"convertedPrizeDisplayText": "$1.00",
					"hasJoined": false,
					"winnerBreakupContestHomeV2": [{
						"amount": {
							"amount": 100,
							"code": "INR",
							"symbol": "INR"
						},
						"convertedAmount": {
							"amount": 1,
							"code": "USD",
							"symbol": "USD"
						},
						"convertedPrizeDisplayText": "$1.00",
						"prizeDisplayText": "₹100",
						"show": 0,
						"startRank": 1,
						"endRank": 1,
						"winnerPercent": null,
						"imageUrl": ""
					}],
					"winnerBreakup": [{
						"prizeDisplayText": "₹100",
						"amount": {
							"amount": 100,
							"symbol": "₹"
						}
					}],
					"prizeAmount": {
						"amount": 100,
						"symbol": "₹"
					},
					"match": {
						"startTime": "2026-03-16T01:30:00.000Z"
					}
				}, {
					"campaignSlot": null,
					"convertedCampaignSlot": null,
					"contestTag": "IN",
					"contestTypeDisplayText": "",
					"adConfig": {
						"dealType": "PROGRAMMATIC"
					},
					"spotsDisplayText": "1,500",
					"explanation": null,
					"joinedTeamsCount": 0,
					"contestName": "₹50",
					"convertedContestName": "$0.50",
					"contestCategory": "FREE",
					"contestType": "public",
					"contestSize": 1500,
					"currentSize": 332,
					"isPartnerContest": false,
					"behaviour": "STATIC",
					"id": "9303974586",
					"productId": "37806",
					"inviteCode": "nmal0wqn4bsli-",
					"isGuaranteed": true,
					"isMultipleEntry": true,
					"numberOfWinners": 1,
					"winnerPercent": 100,
					"maxAllowedTeams": 2,
					"isFreeEntry": false,
					"prizeDisplayText": "₹50",
					"convertedPrizeDisplayText": "$0.50",
					"hasJoined": false,
					"winnerBreakupContestHomeV2": [{
						"amount": {
							"amount": 50,
							"code": "INR",
							"symbol": "INR"
						},
						"convertedAmount": {
							"amount": 0.5,
							"code": "USD",
							"symbol": "USD"
						},
						"convertedPrizeDisplayText": "$0.50",
						"prizeDisplayText": "₹50",
						"show": 0,
						"startRank": 1,
						"endRank": 1,
						"winnerPercent": null,
						"imageUrl": ""
					}],
					"winnerBreakup": [{
						"prizeDisplayText": "₹50",
						"amount": {
							"amount": 50,
							"symbol": "₹"
						}
					}],
					"prizeAmount": {
						"amount": 50,
						"symbol": "₹"
					},
					"match": {
						"startTime": "2026-03-16T01:30:00.000Z"
					}
				}]
			}]
		}
	});
}
