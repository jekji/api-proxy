import { NextResponse } from 'next/server';

/**
:method: POST
:path: /graphql/query/react-native/enhanced-scorecard
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
content-length: 2735
accept-encoding: gzip

{"query":"\n    query EnhancedScorecard($site: String!, $matchId: Int!) {\n  match(site: $site, id: $matchId) {\n    status\n    name\n    matchFormatTypeId\n    squads {\n      id\n      shortName\n      squadColorPalette\n    }\n  }\n  scoreCard(matchId: $matchId, site: $site) {\n    type\n    data {\n      __typename\n      ...CricketScorecardFragment\n    }\n  }\n}\n    \n    fragment CricketScorecardFragment on LiveScoreCard {\n  isFullScorecardDisabled\n  isLive\n  isScorecardAvailable\n  squads {\n    id\n    name\n    shortName\n    flag {\n      src\n    }\n    cricketScore {\n      runs\n      wickets\n      bowlingSet\n      status\n      number\n    }\n  }\n  winningSquadInfo {\n    squadId\n    bannerTitle\n    bannerSubtitle\n    animationUrl\n    backgroundUrl\n  }\n  inningsBreakInfo {\n    isInningsBreakOngoing\n    bannerTitle\n    bannerSubtitle\n    animationUrl\n    backgroundUrl\n    centerImageUrl\n  }\n  description\n  scorecard {\n    over {\n      balls {\n        value\n        colorV2\n        textColorV2\n        borderColor\n        fpsData {\n          eventType\n          animationUrl\n          backgroundUrl\n          playerInfo {\n            name\n            imageUrl\n            pointChange\n          }\n        }\n      }\n      totalBalls\n      bowler {\n        shortName\n        playingStyleIconFilled\n        attributes {\n          runs\n          wickets\n          bowlingSet\n        }\n      }\n    }\n    batsmen {\n      shortName\n      attributes {\n        runs\n        balls\n      }\n      status\n    }\n  }\n  componentHeaders {\n    batterHeaders {\n      mainHeader\n      subHeaders {\n        value\n        type\n      }\n    }\n    bowlerHeaders {\n      mainHeader\n      subHeaders {\n        value\n        type\n      }\n    }\n    fowHeaders {\n      mainHeader\n      subHeaders {\n        value\n        type\n      }\n    }\n  }\n  innings {\n    isSuperOver\n    target\n    number\n    status\n    runs\n    wickets\n    type\n    battingTeamShortName\n    battingTeamFlagUrl\n    batsmen {\n      ...CricketScorecardPlayerFragment\n    }\n    bowlers {\n      ...CricketScorecardPlayerFragment\n    }\n    extras {\n      displayText\n      value\n    }\n    extrasTotal\n    bowlingSet\n    bowlingSetLabel\n    fow {\n      name\n      description\n      attributes {\n        value\n        isBold\n        type\n      }\n    }\n  }\n}\n    \n\n    fragment CricketScorecardPlayerFragment on CricketPlayer {\n  name\n  isWicketKeeper\n  isCaptain\n  status\n  description\n  playerId\n  playingStyleIcon\n  playingStyleIconFilled\n  attributesV2 {\n    value\n    isBold\n  }\n}\n    ","variables":{"site":"cricket","matchId":112970}}
*/
export async function POST() {
	return NextResponse.json({
		"data": {
			"match": {
				"status": "IN_PROGRESS",
				"name": "KSO vs RRP",
				"matchFormatTypeId": 11,
				"squads": [{
					"id": 7456,
					"shortName": "KSO",
					"squadColorPalette": "#1ba10e"
				}, {
					"id": 8257,
					"shortName": "RRP",
					"squadColorPalette": "#80081C"
				}]
			},
			"scoreCard": {
				"type": "CRICKET",
				"data": {
					"__typename": "LiveScoreCard",
					"isFullScorecardDisabled": false,
					"isLive": true,
					"isScorecardAvailable": true,
					"squads": [{
						"id": 7456,
						"name": "Konark Suryas Odisha",
						"shortName": "KSO",
						"flag": [{
							"src": "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/DEF-CR15@2x.png"
						}],
						"cricketScore": [{
							"runs": 51,
							"wickets": 2,
							"bowlingSet": "6.3",
							"status": "IN_PROGRESS",
							"number": 2
						}]
					}, {
						"id": 8257,
						"name": "Royal Riders Punjab",
						"shortName": "RRP",
						"flag": [{
							"src": "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/DEF-CR16@2x.png"
						}],
						"cricketScore": [{
							"runs": 156,
							"wickets": 8,
							"bowlingSet": "20",
							"status": "COMPLETED",
							"number": 1
						}]
					}],
					"winningSquadInfo": null,
					"inningsBreakInfo": {
						"isInningsBreakOngoing": false,
						"bannerTitle": null,
						"bannerSubtitle": null,
						"animationUrl": null,
						"backgroundUrl": null,
						"centerImageUrl": null
					},
					"description": "KSO need 106 runs in 81 balls",
					"scorecard": {
						"over": {
							"balls": [{
								"value": "1",
								"colorV2": "#18212E",
								"textColorV2": "#FFFFFF",
								"borderColor": "#515E74",
								"fpsData": null
							}, {
								"value": "1",
								"colorV2": "#18212E",
								"textColorV2": "#FFFFFF",
								"borderColor": "#515E74",
								"fpsData": null
							}],
							"totalBalls": 6,
							"bowler": {
								"shortName": "Chaturanga de Silva",
								"playingStyleIconFilled": "https://d11-static-assets.s3.amazonaws.com/images/mobile/style_spin_icon_blue_filled.png",
								"attributes": {
									"runs": "9",
									"wickets": "0",
									"bowlingSet": "1.3"
								}
							}
						},
						"batsmen": [{
							"shortName": "Morne van Wyk",
							"attributes": {
								"runs": "42",
								"balls": "25"
							},
							"status": "ON_STRIKE"
						}, {
							"shortName": "Chirag Gandhi",
							"attributes": {
								"runs": "1",
								"balls": "2"
							},
							"status": "NON_STRIKE"
						}]
					},
					"componentHeaders": {
						"batterHeaders": {
							"mainHeader": "Batter",
							"subHeaders": [{
								"value": "R",
								"type": "runs"
							}, {
								"value": "B",
								"type": "balls"
							}, {
								"value": "4s",
								"type": "fours"
							}, {
								"value": "6s",
								"type": "sixes"
							}, {
								"value": "S/R",
								"type": "strikeRate"
							}]
						},
						"bowlerHeaders": {
							"mainHeader": "Bowler",
							"subHeaders": [{
								"value": "O",
								"type": "overs"
							}, {
								"value": "M",
								"type": "maiden"
							}, {
								"value": "R",
								"type": "runs"
							}, {
								"value": "W",
								"type": "wickets"
							}, {
								"value": "Eco",
								"type": "econ"
							}]
						},
						"fowHeaders": {
							"mainHeader": "Fall of Wickets",
							"subHeaders": [{
								"value": "Score",
								"type": "score"
							}, {
								"value": "Over",
								"type": "overBall"
							}]
						}
					},
					"innings": [{
						"isSuperOver": false,
						"target": null,
						"number": 1,
						"status": "COMPLETED",
						"runs": 156,
						"wickets": 8,
						"type": null,
						"battingTeamShortName": "RRP",
						"battingTeamFlagUrl": "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/DEF-CR16@2x.png",
						"batsmen": [{
							"name": "Mohammad Shahzad",
							"isWicketKeeper": true,
							"isCaptain": false,
							"status": "OUT",
							"description": "lbw b Jesal Karia",
							"playerId": 1002,
							"playingStyleIcon": null,
							"playingStyleIconFilled": null,
							"attributesV2": [{
								"value": "41",
								"isBold": true
							}, {
								"value": "35",
								"isBold": false
							}, {
								"value": "5",
								"isBold": false
							}, {
								"value": "1",
								"isBold": false
							}, {
								"value": "117.14",
								"isBold": false
							}]
						}, {
							"name": "Danushka Gunathilaka",
							"isWicketKeeper": false,
							"isCaptain": false,
							"status": "OUT",
							"description": "b Saurin Thakar",
							"playerId": 1267,
							"playingStyleIcon": null,
							"playingStyleIconFilled": null,
							"attributesV2": [{
								"value": "23",
								"isBold": true
							}, {
								"value": "21",
								"isBold": false
							}, {
								"value": "4",
								"isBold": false
							}, {
								"value": "0",
								"isBold": false
							}, {
								"value": "109.52",
								"isBold": false
							}]
						}, {
							"name": "Chaturanga de Silva",
							"isWicketKeeper": false,
							"isCaptain": false,
							"status": "OUT",
							"description": "lbw b Faiz Ahmed",
							"playerId": 86261,
							"playingStyleIcon": null,
							"playingStyleIconFilled": null,
							"attributesV2": [{
								"value": "28",
								"isBold": true
							}, {
								"value": "19",
								"isBold": false
							}, {
								"value": "0",
								"isBold": false
							}, {
								"value": "3",
								"isBold": false
							}, {
								"value": "147.37",
								"isBold": false
							}]
						}, {
							"name": "Asghar Afghan",
							"isWicketKeeper": false,
							"isCaptain": true,
							"status": "OUT",
							"description": "c Faiz Ahmed b Malinda Pushpakumara",
							"playerId": 999,
							"playingStyleIcon": null,
							"playingStyleIconFilled": null,
							"attributesV2": [{
								"value": "9",
								"isBold": true
							}, {
								"value": "10",
								"isBold": false
							}, {
								"value": "0",
								"isBold": false
							}, {
								"value": "1",
								"isBold": false
							}, {
								"value": "90.00",
								"isBold": false
							}]
						}, {
							"name": "Thisara Perera",
							"isWicketKeeper": false,
							"isCaptain": false,
							"status": "OUT",
							"description": "c Saurin Thakar b Ankit Rajpoot",
							"playerId": 907,
							"playingStyleIcon": null,
							"playingStyleIconFilled": null,
							"attributesV2": [{
								"value": "11",
								"isBold": true
							}, {
								"value": "9",
								"isBold": false
							}, {
								"value": "0",
								"isBold": false
							}, {
								"value": "1",
								"isBold": false
							}, {
								"value": "122.22",
								"isBold": false
							}]
						}, {
							"name": "Rishi Dhawan",
							"isWicketKeeper": false,
							"isCaptain": false,
							"status": "OUT",
							"description": "lbw b Faiz Ahmed",
							"playerId": 716,
							"playingStyleIcon": null,
							"playingStyleIconFilled": null,
							"attributesV2": [{
								"value": "1",
								"isBold": true
							}, {
								"value": "2",
								"isBold": false
							}, {
								"value": "0",
								"isBold": false
							}, {
								"value": "0",
								"isBold": false
							}, {
								"value": "50.00",
								"isBold": false
							}]
						}, {
							"name": "Sarul Kanwar",
							"isWicketKeeper": false,
							"isCaptain": false,
							"status": "OUT",
							"description": "c Chirag Gandhi b Ankit Rajpoot",
							"playerId": 1114,
							"playingStyleIcon": null,
							"playingStyleIconFilled": null,
							"attributesV2": [{
								"value": "10",
								"isBold": true
							}, {
								"value": "9",
								"isBold": false
							}, {
								"value": "1",
								"isBold": false
							}, {
								"value": "0",
								"isBold": false
							}, {
								"value": "111.11",
								"isBold": false
							}]
						}, {
							"name": "Samiullah Shinwari",
							"isWicketKeeper": false,
							"isCaptain": false,
							"status": "OUT",
							"description": "c Morne van Wyk b Saurin Thakar",
							"playerId": 1004,
							"playingStyleIcon": null,
							"playingStyleIconFilled": null,
							"attributesV2": [{
								"value": "1",
								"isBold": true
							}, {
								"value": "2",
								"isBold": false
							}, {
								"value": "0",
								"isBold": false
							}, {
								"value": "0",
								"isBold": false
							}, {
								"value": "50.00",
								"isBold": false
							}]
						}, {
							"name": "Angelo Perera",
							"isWicketKeeper": false,
							"isCaptain": false,
							"status": "NON_STRIKE",
							"description": "not out",
							"playerId": 1281,
							"playingStyleIcon": null,
							"playingStyleIconFilled": null,
							"attributesV2": [{
								"value": "13",
								"isBold": true
							}, {
								"value": "9",
								"isBold": false
							}, {
								"value": "1",
								"isBold": false
							}, {
								"value": "1",
								"isBold": false
							}, {
								"value": "144.44",
								"isBold": false
							}]
						}, {
							"name": "Seekkuge Prasanna",
							"isWicketKeeper": false,
							"isCaptain": false,
							"status": "NON_STRIKE",
							"description": "not out",
							"playerId": 1158,
							"playingStyleIcon": null,
							"playingStyleIconFilled": null,
							"attributesV2": [{
								"value": "6",
								"isBold": true
							}, {
								"value": "4",
								"isBold": false
							}, {
								"value": "1",
								"isBold": false
							}, {
								"value": "0",
								"isBold": false
							}, {
								"value": "150.00",
								"isBold": false
							}]
						}, {
							"name": "Farman Ahmed",
							"isWicketKeeper": false,
							"isCaptain": false,
							"status": "YET_TO_BAT",
							"description": "",
							"playerId": 185033,
							"playingStyleIcon": null,
							"playingStyleIconFilled": null,
							"attributesV2": [{
								"value": "0",
								"isBold": true
							}, {
								"value": "0",
								"isBold": false
							}, {
								"value": "0",
								"isBold": false
							}, {
								"value": "0",
								"isBold": false
							}, {
								"value": "0",
								"isBold": false
							}]
						}],
						"bowlers": [{
							"name": "Miguel Cummins",
							"isWicketKeeper": false,
							"isCaptain": false,
							"status": "BOWLER",
							"description": null,
							"playerId": 1573,
							"playingStyleIcon": null,
							"playingStyleIconFilled": null,
							"attributesV2": [{
								"value": "2.0",
								"isBold": false
							}, {
								"value": "0",
								"isBold": false
							}, {
								"value": "14",
								"isBold": false
							}, {
								"value": "0",
								"isBold": true
							}, {
								"value": "7.0",
								"isBold": false
							}]
						}, {
							"name": "Ankit Rajpoot",
							"isWicketKeeper": false,
							"isCaptain": false,
							"status": "BOWLER",
							"description": null,
							"playerId": 1512,
							"playingStyleIcon": null,
							"playingStyleIconFilled": null,
							"attributesV2": [{
								"value": "4.0",
								"isBold": false
							}, {
								"value": "0",
								"isBold": false
							}, {
								"value": "38",
								"isBold": false
							}, {
								"value": "2",
								"isBold": true
							}, {
								"value": "9.5",
								"isBold": false
							}]
						}, {
							"name": "Rituraj Singh",
							"isWicketKeeper": false,
							"isCaptain": false,
							"status": "BOWLER",
							"description": null,
							"playerId": 11737,
							"playingStyleIcon": null,
							"playingStyleIconFilled": null,
							"attributesV2": [{
								"value": "2.0",
								"isBold": false
							}, {
								"value": "0",
								"isBold": false
							}, {
								"value": "19",
								"isBold": false
							}, {
								"value": "0",
								"isBold": true
							}, {
								"value": "9.5",
								"isBold": false
							}]
						}, {
							"name": "Saurin Thakar",
							"isWicketKeeper": false,
							"isCaptain": false,
							"status": "BOWLER",
							"description": null,
							"playerId": 183327,
							"playingStyleIcon": null,
							"playingStyleIconFilled": null,
							"attributesV2": [{
								"value": "4.0",
								"isBold": false
							}, {
								"value": "0",
								"isBold": false
							}, {
								"value": "24",
								"isBold": false
							}, {
								"value": "2",
								"isBold": true
							}, {
								"value": "6.0",
								"isBold": false
							}]
						}, {
							"name": "Jesal Karia",
							"isWicketKeeper": false,
							"isCaptain": false,
							"status": "BOWLER",
							"description": null,
							"playerId": 8749,
							"playingStyleIcon": null,
							"playingStyleIconFilled": null,
							"attributesV2": [{
								"value": "4.0",
								"isBold": false
							}, {
								"value": "0",
								"isBold": false
							}, {
								"value": "15",
								"isBold": false
							}, {
								"value": "1",
								"isBold": true
							}, {
								"value": "3.8",
								"isBold": false
							}]
						}, {
							"name": "Malinda Pushpakumara",
							"isWicketKeeper": false,
							"isCaptain": false,
							"status": "BOWLER",
							"description": null,
							"playerId": 1312,
							"playingStyleIcon": null,
							"playingStyleIconFilled": null,
							"attributesV2": [{
								"value": "3.0",
								"isBold": false
							}, {
								"value": "0",
								"isBold": false
							}, {
								"value": "27",
								"isBold": false
							}, {
								"value": "1",
								"isBold": true
							}, {
								"value": "9.0",
								"isBold": false
							}]
						}, {
							"name": "Faiz Ahmed",
							"isWicketKeeper": false,
							"isCaptain": false,
							"status": "BOWLER",
							"description": null,
							"playerId": null,
							"playingStyleIcon": null,
							"playingStyleIconFilled": null,
							"attributesV2": [{
								"value": "1.0",
								"isBold": false
							}, {
								"value": "0",
								"isBold": false
							}, {
								"value": "9",
								"isBold": false
							}, {
								"value": "2",
								"isBold": true
							}, {
								"value": "9.0",
								"isBold": false
							}]
						}],
						"extras": [{
							"displayText": "nb",
							"value": "0"
						}, {
							"displayText": "wd",
							"value": "3"
						}, {
							"displayText": "b",
							"value": "9"
						}, {
							"displayText": "lb",
							"value": "1"
						}, {
							"displayText": "pen",
							"value": "0"
						}],
						"extrasTotal": "13",
						"bowlingSet": "20",
						"bowlingSetLabel": "overs",
						"fow": [{
							"name": "Danushka Gunathilaka",
							"description": "b Saurin Thakar",
							"attributes": [{
								"value": "59/1",
								"isBold": false,
								"type": "score"
							}, {
								"value": "7.4",
								"isBold": false,
								"type": "overBall"
							}]
						}, {
							"name": "Mohammad Shahzad",
							"description": "lbw b Jesal Karia",
							"attributes": [{
								"value": "85/2",
								"isBold": false,
								"type": "score"
							}, {
								"value": "10.6",
								"isBold": false,
								"type": "overBall"
							}]
						}, {
							"name": "Asghar Afghan",
							"description": "c Faiz Ahmed b Malinda Pushpakumara",
							"attributes": [{
								"value": "96/3",
								"isBold": false,
								"type": "score"
							}, {
								"value": "13.3",
								"isBold": false,
								"type": "overBall"
							}]
						}, {
							"name": "Chaturanga de Silva",
							"description": "lbw b Faiz Ahmed",
							"attributes": [{
								"value": "110/4",
								"isBold": false,
								"type": "score"
							}, {
								"value": "14.2",
								"isBold": false,
								"type": "overBall"
							}]
						}, {
							"name": "Rishi Dhawan",
							"description": "lbw b Faiz Ahmed",
							"attributes": [{
								"value": "112/5",
								"isBold": false,
								"type": "score"
							}, {
								"value": "14.5",
								"isBold": false,
								"type": "overBall"
							}]
						}, {
							"name": "Sarul Kanwar",
							"description": "c Chirag Gandhi b Ankit Rajpoot",
							"attributes": [{
								"value": "125/6",
								"isBold": false,
								"type": "score"
							}, {
								"value": "17.1",
								"isBold": false,
								"type": "overBall"
							}]
						}, {
							"name": "Thisara Perera",
							"description": "c Saurin Thakar b Ankit Rajpoot",
							"attributes": [{
								"value": "132/7",
								"isBold": false,
								"type": "score"
							}, {
								"value": "17.4",
								"isBold": false,
								"type": "overBall"
							}]
						}, {
							"name": "Samiullah Shinwari",
							"description": "c Morne van Wyk b Saurin Thakar",
							"attributes": [{
								"value": "134/8",
								"isBold": false,
								"type": "score"
							}, {
								"value": "18.2",
								"isBold": false,
								"type": "overBall"
							}]
						}]
					}, {
						"isSuperOver": false,
						"target": "157",
						"number": 2,
						"status": "IN_PROGRESS",
						"runs": 51,
						"wickets": 2,
						"type": null,
						"battingTeamShortName": "KSO",
						"battingTeamFlagUrl": "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/DEF-CR15@2x.png",
						"batsmen": [{
							"name": "Kennar Lewis",
							"isWicketKeeper": false,
							"isCaptain": false,
							"status": "OUT",
							"description": "b Rishi Dhawan",
							"playerId": 3067,
							"playingStyleIcon": null,
							"playingStyleIconFilled": null,
							"attributesV2": [{
								"value": "1",
								"isBold": true
							}, {
								"value": "3",
								"isBold": false
							}, {
								"value": "0",
								"isBold": false
							}, {
								"value": "0",
								"isBold": false
							}, {
								"value": "33.33",
								"isBold": false
							}]
						}, {
							"name": "Jermaine Blackwood",
							"isWicketKeeper": false,
							"isCaptain": true,
							"status": "OUT",
							"description": "c Mohammad Shahzad b Angelo Perera",
							"playerId": 1565,
							"playingStyleIcon": null,
							"playingStyleIconFilled": null,
							"attributesV2": [{
								"value": "6",
								"isBold": true
							}, {
								"value": "9",
								"isBold": false
							}, {
								"value": "0",
								"isBold": false
							}, {
								"value": "0",
								"isBold": false
							}, {
								"value": "66.67",
								"isBold": false
							}]
						}, {
							"name": "Morne van Wyk",
							"isWicketKeeper": true,
							"isCaptain": false,
							"status": "ON_STRIKE",
							"description": "batting",
							"playerId": 360,
							"playingStyleIcon": null,
							"playingStyleIconFilled": null,
							"attributesV2": [{
								"value": "42",
								"isBold": true
							}, {
								"value": "25",
								"isBold": false
							}, {
								"value": "5",
								"isBold": false
							}, {
								"value": "2",
								"isBold": false
							}, {
								"value": "168.00",
								"isBold": false
							}]
						}, {
							"name": "Chirag Gandhi",
							"isWicketKeeper": false,
							"isCaptain": false,
							"status": "NON_STRIKE",
							"description": "batting",
							"playerId": 8748,
							"playingStyleIcon": null,
							"playingStyleIconFilled": null,
							"attributesV2": [{
								"value": "1",
								"isBold": true
							}, {
								"value": "2",
								"isBold": false
							}, {
								"value": "0",
								"isBold": false
							}, {
								"value": "0",
								"isBold": false
							}, {
								"value": "50.00",
								"isBold": false
							}]
						}, {
							"name": "Saurin Thakar",
							"isWicketKeeper": false,
							"isCaptain": false,
							"status": "YET_TO_BAT",
							"description": "",
							"playerId": 183327,
							"playingStyleIcon": null,
							"playingStyleIconFilled": null,
							"attributesV2": [{
								"value": "0",
								"isBold": true
							}, {
								"value": "0",
								"isBold": false
							}, {
								"value": "0",
								"isBold": false
							}, {
								"value": "0",
								"isBold": false
							}, {
								"value": "0",
								"isBold": false
							}]
						}, {
							"name": "Malinda Pushpakumara",
							"isWicketKeeper": false,
							"isCaptain": false,
							"status": "YET_TO_BAT",
							"description": "",
							"playerId": 1312,
							"playingStyleIcon": null,
							"playingStyleIconFilled": null,
							"attributesV2": [{
								"value": "0",
								"isBold": true
							}, {
								"value": "0",
								"isBold": false
							}, {
								"value": "0",
								"isBold": false
							}, {
								"value": "0",
								"isBold": false
							}, {
								"value": "0",
								"isBold": false
							}]
						}, {
							"name": "Jesal Karia",
							"isWicketKeeper": false,
							"isCaptain": false,
							"status": "YET_TO_BAT",
							"description": "",
							"playerId": 8749,
							"playingStyleIcon": null,
							"playingStyleIconFilled": null,
							"attributesV2": [{
								"value": "0",
								"isBold": true
							}, {
								"value": "0",
								"isBold": false
							}, {
								"value": "0",
								"isBold": false
							}, {
								"value": "0",
								"isBold": false
							}, {
								"value": "0",
								"isBold": false
							}]
						}, {
							"name": "Faiz Ahmed",
							"isWicketKeeper": false,
							"isCaptain": false,
							"status": "YET_TO_BAT",
							"description": "",
							"playerId": null,
							"playingStyleIcon": null,
							"playingStyleIconFilled": null,
							"attributesV2": [{
								"value": "0",
								"isBold": true
							}, {
								"value": "0",
								"isBold": false
							}, {
								"value": "0",
								"isBold": false
							}, {
								"value": "0",
								"isBold": false
							}, {
								"value": "0",
								"isBold": false
							}]
						}, {
							"name": "Miguel Cummins",
							"isWicketKeeper": false,
							"isCaptain": false,
							"status": "YET_TO_BAT",
							"description": "",
							"playerId": 1573,
							"playingStyleIcon": null,
							"playingStyleIconFilled": null,
							"attributesV2": [{
								"value": "0",
								"isBold": true
							}, {
								"value": "0",
								"isBold": false
							}, {
								"value": "0",
								"isBold": false
							}, {
								"value": "0",
								"isBold": false
							}, {
								"value": "0",
								"isBold": false
							}]
						}, {
							"name": "Ankit Rajpoot",
							"isWicketKeeper": false,
							"isCaptain": false,
							"status": "YET_TO_BAT",
							"description": "",
							"playerId": 1512,
							"playingStyleIcon": null,
							"playingStyleIconFilled": null,
							"attributesV2": [{
								"value": "0",
								"isBold": true
							}, {
								"value": "0",
								"isBold": false
							}, {
								"value": "0",
								"isBold": false
							}, {
								"value": "0",
								"isBold": false
							}, {
								"value": "0",
								"isBold": false
							}]
						}, {
							"name": "Rituraj Singh",
							"isWicketKeeper": false,
							"isCaptain": false,
							"status": "YET_TO_BAT",
							"description": "",
							"playerId": 11737,
							"playingStyleIcon": null,
							"playingStyleIconFilled": null,
							"attributesV2": [{
								"value": "0",
								"isBold": true
							}, {
								"value": "0",
								"isBold": false
							}, {
								"value": "0",
								"isBold": false
							}, {
								"value": "0",
								"isBold": false
							}, {
								"value": "0",
								"isBold": false
							}]
						}],
						"bowlers": [{
							"name": "Aftab Alam",
							"isWicketKeeper": false,
							"isCaptain": false,
							"status": "BOWLER",
							"description": null,
							"playerId": 2100,
							"playingStyleIcon": null,
							"playingStyleIconFilled": null,
							"attributesV2": [{
								"value": "2.0",
								"isBold": false
							}, {
								"value": "0",
								"isBold": false
							}, {
								"value": "14",
								"isBold": false
							}, {
								"value": "0",
								"isBold": true
							}, {
								"value": "7.0",
								"isBold": false
							}]
						}, {
							"name": "Rishi Dhawan",
							"isWicketKeeper": false,
							"isCaptain": false,
							"status": "BOWLER",
							"description": null,
							"playerId": 716,
							"playingStyleIcon": null,
							"playingStyleIconFilled": null,
							"attributesV2": [{
								"value": "2.0",
								"isBold": false
							}, {
								"value": "0",
								"isBold": false
							}, {
								"value": "22",
								"isBold": false
							}, {
								"value": "1",
								"isBold": true
							}, {
								"value": "11.0",
								"isBold": false
							}]
						}, {
							"name": "Chaturanga de Silva",
							"isWicketKeeper": false,
							"isCaptain": false,
							"status": "BOWLING",
							"description": null,
							"playerId": 86261,
							"playingStyleIcon": "https://d11-static-assets.s3.amazonaws.com/images/mobile/style_spin_icon_blue.png",
							"playingStyleIconFilled": "https://d11-static-assets.s3.amazonaws.com/images/mobile/style_spin_icon_blue_filled.png",
							"attributesV2": [{
								"value": "1.3",
								"isBold": false
							}, {
								"value": "0",
								"isBold": false
							}, {
								"value": "9",
								"isBold": false
							}, {
								"value": "0",
								"isBold": true
							}, {
								"value": "6.0",
								"isBold": false
							}]
						}, {
							"name": "Angelo Perera",
							"isWicketKeeper": false,
							"isCaptain": false,
							"status": "BOWLER",
							"description": null,
							"playerId": 1281,
							"playingStyleIcon": null,
							"playingStyleIconFilled": null,
							"attributesV2": [{
								"value": "1.0",
								"isBold": false
							}, {
								"value": "0",
								"isBold": false
							}, {
								"value": "6",
								"isBold": false
							}, {
								"value": "1",
								"isBold": true
							}, {
								"value": "6.0",
								"isBold": false
							}]
						}],
						"extras": [{
							"displayText": "nb",
							"value": "0"
						}, {
							"displayText": "wd",
							"value": "1"
						}, {
							"displayText": "b",
							"value": "0"
						}, {
							"displayText": "lb",
							"value": "0"
						}, {
							"displayText": "pen",
							"value": "0"
						}],
						"extrasTotal": "1",
						"bowlingSet": "6.3",
						"bowlingSetLabel": "overs",
						"fow": [{
							"name": "Kennar Lewis",
							"description": "b Rishi Dhawan",
							"attributes": [{
								"value": "10/1",
								"isBold": false,
								"type": "score"
							}, {
								"value": "1.2",
								"isBold": false,
								"type": "overBall"
							}]
						}, {
							"name": "Jermaine Blackwood",
							"description": "c Mohammad Shahzad b Angelo Perera",
							"attributes": [{
								"value": "49/2",
								"isBold": false,
								"type": "score"
							}, {
								"value": "5.5",
								"isBold": false,
								"type": "overBall"
							}]
						}]
					}]
				}
			}
		}
	});
}
