import { NextResponse } from 'next/server';

/**
{
	"query": "\n    query HomeUpcomingMatchesV2($slug: String!, $pageCount: Int!, $pageSize: Int!, $category: HomeUpcomingMatchesCategory!, $shouldShowPinnedMatchesInRST: Boolean) {\n  site(slug: $slug) {\n    matchCentre(\n      page: $pageCount\n      pageSize: $pageSize\n      category: $category\n      shouldShowPinnedMatchesInRST: $shouldShowPinnedMatchesInRST\n    ) {\n      edges {\n        id\n        startTime\n        matchPrizeInfo {\n          amountInWords\n          isGuaranteedPlus\n          title\n        }\n        status\n        lineupStatus\n        squads {\n          id\n          shortName\n          flag {\n            src\n          }\n          squadColorPalette\n        }\n        squadBigPlayerImages {\n          id\n          imageUrl\n        }\n        tour {\n          id\n          name\n        }\n      }\n    }\n  }\n}\n    ",
	"variables": {
		"slug": "cricket",
		"pageCount": 1,
		"pageSize": 50,
		"category": "RST",
		"shouldShowPinnedMatchesInRST": true
	}
}
 */
export async function POST() {
	return NextResponse.json({
		"data": {
			"site": {
				"matchCentre": {
					"edges": [{
						"id": 112993,
						"startTime": "2026-03-15T06:15:00.000Z",
						"matchPrizeInfo": {
							"amountInWords": "",
							"isGuaranteedPlus": false,
							"title": ""
						},
						"status": "NOT_STARTED",
						"lineupStatus": "LINEUP_EXPECTED",
						"squads": [{
							"id": 186,
							"shortName": "NZ",
							"flag": [{
								"src": "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/NZ-CR1@2x.png"
							}],
							"squadColorPalette": "#4f67a3"
						}, {
							"id": 212,
							"shortName": "SA",
							"flag": [{
								"src": "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/RSA-CR1@2x.png"
							}],
							"squadColorPalette": "#53a784"
						}],
						"squadBigPlayerImages": [{
							"id": 186,
							"imageUrl": "https://d13ir53smqqeyp.cloudfront.net/player-images/partner-image/home/NZ_men_right.png"
						}, {
							"id": 212,
							"imageUrl": "https://d13ir53smqqeyp.cloudfront.net/player-images/partner-image/home/SA_men_left.png"
						}],
						"tour": {
							"id": 5391,
							"name": "New Zealand vs South Africa T20I"
						}
					}, {
						"id": 112987,
						"startTime": "2026-03-15T08:15:00.000Z",
						"matchPrizeInfo": {
							"amountInWords": "",
							"isGuaranteedPlus": false,
							"title": ""
						},
						"status": "NOT_STARTED",
						"lineupStatus": "LINEUP_EXPECTED",
						"squads": [{
							"id": 25,
							"shortName": "BAN",
							"flag": [{
								"src": "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/BAN-CR1@2x.png"
							}],
							"squadColorPalette": "#5ea08b"
						}, {
							"id": 192,
							"shortName": "PAK",
							"flag": [{
								"src": "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/PAK-CR1@2x.png"
							}],
							"squadColorPalette": "#508d65"
						}],
						"squadBigPlayerImages": [{
							"id": 25,
							"imageUrl": "https://d11.s3.us-east-1.amazonaws.com/player-images/partner-image/home/BAN_right.png"
						}, {
							"id": 192,
							"imageUrl": "https://d13ir53smqqeyp.cloudfront.net/player-images/partner-image/home/PAK_Left.png"
						}],
						"tour": {
							"id": 5389,
							"name": "BAN vs PAK ODI"
						}
					}, {
						"id": 112970,
						"startTime": "2026-03-15T14:00:00.000Z",
						"matchPrizeInfo": {
							"amountInWords": "",
							"isGuaranteedPlus": false,
							"title": ""
						},
						"status": "NOT_STARTED",
						"lineupStatus": "LINEUP_EXPECTED",
						"squads": [{
							"id": 7456,
							"shortName": "KSO",
							"flag": [{
								"src": "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/DEF-CR15@2x.png"
							}],
							"squadColorPalette": "#1ba10e"
						}, {
							"id": 8257,
							"shortName": "RRP",
							"flag": [{
								"src": "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/DEF-CR16@2x.png"
							}],
							"squadColorPalette": "#80081C"
						}],
						"squadBigPlayerImages": [{
							"id": 7456,
							"imageUrl": ""
						}, {
							"id": 8257,
							"imageUrl": ""
						}],
						"tour": {
							"id": 5388,
							"name": "Legends Cricket League"
						}
					}, {
						"id": 112992,
						"startTime": "2026-03-16T01:30:00.000Z",
						"matchPrizeInfo": {
							"amountInWords": "",
							"isGuaranteedPlus": false,
							"title": ""
						},
						"status": "NOT_STARTED",
						"lineupStatus": "LINEUP_EXPECTED",
						"squads": [{
							"id": 7029,
							"shortName": "MAL",
							"flag": [{
								"src": "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/FC-MALY@2x.png"
							}],
							"squadColorPalette": "#ffd800"
						}, {
							"id": 19,
							"shortName": "BAH",
							"flag": [{
								"src": "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/BAH-CR1@2x.png"
							}],
							"squadColorPalette": "#ea4d5e"
						}],
						"squadBigPlayerImages": [{
							"id": 7029,
							"imageUrl": "https://d13ir53smqqeyp.cloudfront.net/player-images/partner-image/home/QuettaQavalryright.png"
						}, {
							"id": 19,
							"imageUrl": "https://d13ir53smqqeyp.cloudfront.net/player-images/partner-image/home/Oman_Left.png"
						}],
						"tour": {
							"id": 5390,
							"name": "Malaysia vs Bahrain OD"
						}
					}, {
						"id": 113005,
						"startTime": "2026-03-16T11:15:00.000Z",
						"matchPrizeInfo": {
							"amountInWords": "",
							"isGuaranteedPlus": false,
							"title": ""
						},
						"status": "NOT_STARTED",
						"lineupStatus": "LINEUP_EXPECTED",
						"squads": [{
							"id": 6633,
							"shortName": "ABB",
							"flag": [{
								"src": "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/DEF-CR13@2x.png"
							}],
							"squadColorPalette": "#97320F"
						}, {
							"id": 1037,
							"shortName": "LB",
							"flag": [{
								"src": "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/DEF-CR12@2x.png"
							}],
							"squadColorPalette": "#27005E"
						}],
						"squadBigPlayerImages": [{
							"id": 6633,
							"imageUrl": ""
						}, {
							"id": 1037,
							"imageUrl": null
						}],
						"tour": {
							"id": 5393,
							"name": "Pakistan National T20 Cup"
						}
					}, {
						"id": 112971,
						"startTime": "2026-03-16T14:00:00.000Z",
						"matchPrizeInfo": {
							"amountInWords": "",
							"isGuaranteedPlus": false,
							"title": ""
						},
						"status": "NOT_STARTED",
						"lineupStatus": "LINEUP_EXPECTED",
						"squads": [{
							"id": 8256,
							"shortName": "ICN",
							"flag": [{
								"src": "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/DEF-CR3@2x.png"
							}],
							"squadColorPalette": "#80081C"
						}, {
							"id": 6580,
							"shortName": "SSS",
							"flag": [{
								"src": "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/DEF-CR8@2x.png"
							}],
							"squadColorPalette": "#074FB4"
						}],
						"squadBigPlayerImages": [{
							"id": 8256,
							"imageUrl": ""
						}, {
							"id": 6580,
							"imageUrl": ""
						}],
						"tour": {
							"id": 5388,
							"name": "Legends Cricket League"
						}
					}, {
						"id": 112999,
						"startTime": "2026-03-17T01:45:00.000Z",
						"matchPrizeInfo": {
							"amountInWords": "",
							"isGuaranteedPlus": false,
							"title": ""
						},
						"status": "UP_COMING",
						"lineupStatus": "LINEUP_EXPECTED",
						"squads": [{
							"id": 707,
							"shortName": "NZ",
							"flag": [{
								"src": "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/NZ-W-CR1@2x.png"
							}],
							"squadColorPalette": "#4c64a7"
						}, {
							"id": 706,
							"shortName": "SA",
							"flag": [{
								"src": "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/SA-W-CR1@2x.png"
							}],
							"squadColorPalette": "#53a784"
						}],
						"squadBigPlayerImages": [{
							"id": 707,
							"imageUrl": "https://d13ir53smqqeyp.cloudfront.net/player-images/partner-image/home/NZ_Right_2709.png"
						}, {
							"id": 706,
							"imageUrl": "https://d13ir53smqqeyp.cloudfront.net/player-images/partner-image/home/SA_Left_2709.png"
						}],
						"tour": {
							"id": 5392,
							"name": "NZ-W vs SA-W T20I"
						}
					}]
				}
			}
		}
	});
}
