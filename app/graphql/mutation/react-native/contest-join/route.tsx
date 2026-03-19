import { BASEHEADERS } from '@/constants';
import { NextResponse } from 'next/server';
import { tokenManager } from '@/lib/token-manager';

/**
:method: POST
:path: /graphql/mutation/react-native/contest-join
:authority: www.dream11.com
:scheme: https
accept: application/json
join-mode: NORMAL_JOIN
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
authorization: Bearer eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCIsInR5cCI6ImF0K2p3dCIsImtpZCI6IlRqb0FsLVdyZWN3Z3MtZVVvcm5xWWE5Y2x4dyJ9.eyJhdWQiOiJhOEVzRGxQYzNaQ1Znc1VwcHB1YyIsImV4cCI6MTc3Mzk4MTMxMiwiaWF0IjoxNzczODk0OTEyLCJpc3MiOiJkcmVhbTExLmNvbSIsInN1YiI6IjMxNzE1MjMzMCIsImp0aSI6ImNxMXVVM1BFZE1uUUp6cWZ0Q1o5TFFFREJIUEI0RjRGIiwidGlkIjoiMiIsInJmdF9pZCI6IjBGQkFEMUQ5RjFENzdGOTlFQjdFNzAzM0IzQ0RFREVGIiwiY2xpZW50X2lkIjoiYThFc0RsUGMzWkNWZ3NVcHBwdWMiLCJzY29wZSI6ImRyZWFtMTE6YWxsIiwiYW1yIjpbIm90cCJdLCJjb3VudHJ5Q29kZSI6IklOIn0.ophd7044L0x2fuMACySsnsbSZwOMVmYVop2KKP5WYj4nqkiZf2ubu74WQS5OOGvuCColxFU_sxDaxDpwEsMU0r5RxUtvo2UrNBvwYJLVjrYQx9Lt6w7pMBMgjhbvvBSR7RiifrjtLQWxJxSddOOlrZZ-_gfWsVOD50kfiulIrLwrOEponca_-VOrdUNZjoz7RElAzMdjxYdtSv8YRnNwdnxTBX7wmhlKBG0PfMPvRiY0z6fFGfnkYiMsGgtHvQ7-UtBvfQhMS4Bzq2bDAj2zJS1D-mwR5e5IwScGMbq3hHSUHwacZ3iGW_SIsLLsEP66sxhA-cJQydXIj8odthL1Bw
content-type: application/json
content-length: 3183
accept-encoding: gzip
cookie: __refreshToken=HnwZbqZGEOGRjPOhPtgpE0R8zkKWTE9u; dh_user_id=4c1e2720-2090-11f1-8bfe-cdefa134efa5

{
	"query": "\n    mutation ContestJoin($isJoin: Boolean = false, $contestId: ID = \"-1\", $teamIds: [Int!]!, $tourId: Int!, $roundId: Int!, $site: String!, $useContestQueue: Boolean = false, $utmFullString: String = \"\", $contestFormat: String = null, $contestFormatData: [ContestFormatDataInput!] = [], $isCurrencyDiscountApplied: Boolean = false, $isDreamCoinsEnabled: Boolean = false, $optedInsurances: [OptedInsurances!] = []) {\n  contestJoin(\n    isJoin: $isJoin\n    contestId: $contestId\n    teamIds: $teamIds\n    tourId: $tourId\n    roundId: $roundId\n    site: $site\n    contestFormat: $contestFormat\n    contestFormatData: $contestFormatData\n    isCurrencyDiscountApplied: $isCurrencyDiscountApplied\n    isDreamCoinsEnabled: $isDreamCoinsEnabled\n    useContestQueue: $useContestQueue\n    utmFullString: $utmFullString\n    optedInsurances: $optedInsurances\n  ) {\n    type\n    message\n    contest {\n      id\n      orderId\n      teamIds\n      roundId\n      site\n      tourId\n      selfExclusionTimer\n      isMultipleEntry\n      contestSize\n      contestType\n      prizeAmount {\n        symbol\n        amount\n      }\n      numberOfWinners\n      isGuaranteed\n      entryFee {\n        symbol\n        amount\n      }\n    }\n    balanceInfo {\n      remainingAmount {\n        symbol\n        amount\n      }\n      cumulativeBalanceText\n      usableWalletBalance {\n        symbol\n        amount\n      }\n      totalWalletBalance {\n        symbol\n        amount\n      }\n    }\n    paymentInfo {\n      toPayBreakup {\n        type\n        title\n        amount {\n          symbol\n          amount\n        }\n      }\n      totalEntryFee {\n        symbol\n        amount\n      }\n      discountInfo {\n        promotionInfo {\n          type\n          title\n          subtitleText\n          tooltipText\n          balanceAmount {\n            amount\n            symbol\n          }\n          discountBreakup {\n            type\n            title\n            amount {\n              symbol\n              amount\n            }\n          }\n          amount {\n            amount\n            symbol\n          }\n          reducedEntryFee {\n            amount\n            symbol\n          }\n          toPayBreakup {\n            type\n            title\n            amount {\n              symbol\n              amount\n            }\n          }\n        }\n        currencyInfo {\n          title\n          subtitleText\n          tooltipText\n          amount {\n            amount\n            symbol\n          }\n          balanceAmount {\n            amount\n            symbol\n          }\n          reducedEntryFee {\n            amount\n            symbol\n          }\n          toPayBreakup {\n            type\n            title\n            amount {\n              symbol\n              amount\n            }\n          }\n        }\n      }\n    }\n  }\n}\n    ",
	"variables": {
		"contestFormat": null,
		"contestId": "11007300028",
		"teamIds": [],
		"tourId": 5380,
		"roundId": 112924,
		"site": "cricket",
		"isJoin": false,
		"useContestQueue": false,
		"utmFullString": "",
		"isDreamCoinsEnabled": false,
		"isCurrencyDiscountApplied": false
	}
}

*/
export async function POST(request: Request) {
	const body = await request.json();
	const { query, variables } = body;
	
	// Extract headers from the incoming request
	const requestHeaders = Object.fromEntries(request.headers.entries());
	requestHeaders['atlas'] = 'IN';
	requestHeaders['locale'] = 'en-US';
	requestHeaders['host'] = process.env.WWW_GRAPHAL_URL.replace('https://', '').replace('http://', '');

	// Remove unnecessary headers
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
			const apiURL = process.env.WWW_GRAPHAL_URL + "/graphql/mutation/react-native/contest-join";
			const response = await fetch(apiURL, {
				method: 'POST',
				headers: requestHeaders,
				body: JSON.stringify({
					query,
					variables
				}),
			});
			
			if (!response.ok) {
				throw new Error(`API request failed: ${response.status}, url: ${apiURL}, headers: ${JSON.stringify(requestHeaders)}`);
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
			"contestJoin": {
				"type": "CREATE_TEAM",
				"message": "Step 1. Create your Fantasy Team. Step 2. Join a league!",
				"contest": {
					"id": "11007300028",
					"orderId": null,
					"teamIds": [],
					"roundId": 112924,
					"site": "cricket",
					"tourId": 5380,
					"selfExclusionTimer": null,
					"isMultipleEntry": true,
					"contestSize": 20000,
					"contestType": "public",
					"prizeAmount": {
						"symbol": "₹",
						"amount": 750
					},
					"numberOfWinners": 1,
					"isGuaranteed": true,
					"entryFee": {
						"symbol": "₹",
						"amount": 0
					}
				},
				"balanceInfo": {
					"remainingAmount": {
						"symbol": "₹",
						"amount": 0
					},
					"cumulativeBalanceText": "Amount Unutilised + Winnings =",
					"usableWalletBalance": {
						"symbol": "₹",
						"amount": 0
					},
					"totalWalletBalance": {
						"symbol": "₹",
						"amount": 0
					}
				},
				"paymentInfo": {
					"toPayBreakup": [{
						"type": "Deposit",
						"title": "Unused Deposits",
						"amount": {
							"symbol": "₹",
							"amount": 0
						}
					}, {
						"type": "DiscountPoints",
						"title": "Discount Points Worth",
						"amount": {
							"symbol": "₹",
							"amount": 0
						}
					}, {
						"type": "Winnings",
						"title": "Winnings",
						"amount": {
							"symbol": "₹",
							"amount": 0
						}
					}],
					"totalEntryFee": {
						"symbol": "₹",
						"amount": 0
					},
					"discountInfo": null
				}
			}
		}
	});
}
