import { extractAndModifyHeaders } from '@/lib/changeHeader';
import { NextResponse } from 'next/server';

/**
:method: POST
:path: /graphql/query/react-native/leaderboard-post-rl-participating-teams
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
content-length: 1113
accept-encoding: gzip

{"query":"\n    query LeaderboardPostRlParticipatingTeams($site: String!, $tourId: Int!, $matchId: Int!, $contestId: ID!, $cursor: String, $pageSize: Int, $filter: LeaderboardFilters, $contestFormat: String, $latestEventId: Int) {\n  contest(\n    site: $site\n    tourId: $tourId\n    matchId: $matchId\n    _id: $contestId\n    contestFormat: $contestFormat\n  ) {\n    participatingTeams(\n      after: $cursor\n      filter: $filter\n      pageSize: $pageSize\n      latestEventId: $latestEventId\n    ) {\n      edges {\n        ...LeaderboardUserTeam1\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n      }\n    }\n  }\n}\n    \n    fragment LeaderboardUserTeam1 on UserTeam {\n  id\n  name\n  rank\n  points\n  rankChange\n  winningAmount {\n    amount\n    symbol\n  }\n  user {\n    id\n    profilePic {\n      src\n    }\n    officialTick {\n      src\n    }\n  }\n}\n    ","variables":{"matchId":112970,"site":"cricket","contestId":"9309632314","tourId":5388,"contestFormat":null,"shouldEnableCurrentlyWinning":false,"filter":null,"cursor":null,"pageSize":100,"latestEventId":176}}
*/
export async function POST(request: Request) {
	const body = await request.json();
	const { query, variables } = body;

	const requestHeaders = extractAndModifyHeaders(request, process.env.WWW_GRAPHAL_URL || '');
			
	if (process.env.WWW_GRAPHAL_URL) {
		// Use real API to fetch data
		try {
			const apiURL = process.env.WWW_GRAPHAL_URL + "/graphql/query/react-native/leaderboard-post-rl-participating-teams";
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

			console.log("leaderboard-post-rl-participating-teams", data);

			return NextResponse.json(data);
		} catch (error) {
			console.error('API request error:', error);
			// Fall back to mock data if API fails
		}
	}

	return NextResponse.json({
		"data": {
			"contest": {
				"participatingTeams": {
					"edges": [{
						"id": 4,
						"name": "TRIUMPH SUPERXI",
						"rank": 1,
						"points": 818.5,
						"rankChange": "NONE",
						"winningAmount": {
							"amount": 0,
							"symbol": "₹"
						},
						"user": {
							"id": 100493861,
							"profilePic": [{
								"src": "https://userassets.dream11.com/fbprofilepic/77111bab75040196da601332cc4d0e2368e64678_profilepic.jpg?timestamp=1773592200000"
							}],
							"officialTick": null
						}
					}, {
						"id": 15,
						"name": "Mittan Mallick",
						"rank": 2,
						"points": 802.5,
						"rankChange": "NONE",
						"winningAmount": {
							"amount": 0,
							"symbol": "₹"
						},
						"user": {
							"id": 184286770,
							"profilePic": [{
								"src": "https://userassets.dream11.com/fbprofilepic/859f28ad0a20a1b830b8284f794262302be9bb23_profilepic.jpg?timestamp=1773592200000"
							}],
							"officialTick": null
						}
					}, {
						"id": 2,
						"name": "GARVJM",
						"rank": 3,
						"points": 801.5,
						"rankChange": "NONE",
						"winningAmount": {
							"amount": 0,
							"symbol": "₹"
						},
						"user": {
							"id": 23044977,
							"profilePic": [{
								"src": "https://userassets.dream11.com/fbprofilepic/1c930cd70d621ecfc1b3883e35bc8fae6c8169cc_profilepic.jpg?timestamp=1773592200000"
							}],
							"officialTick": null
						}
					}, {
						"id": 6,
						"name": "QJPHNZ DREAMTEAM11",
						"rank": 4,
						"points": 800,
						"rankChange": "NONE",
						"winningAmount": {
							"amount": 0,
							"symbol": "₹"
						},
						"user": {
							"id": 319356609,
							"profilePic": [{
								"src": "https://userassets.dream11.com/fbprofilepic/86354f9ade4418836e88bb4ec7068546be03a49c_profilepic.jpg?timestamp=1773592200000"
							}],
							"officialTick": null
						}
					}, {
						"id": 12,
						"name": "Christy86",
						"rank": 5,
						"points": 799.5,
						"rankChange": "NONE",
						"winningAmount": {
							"amount": 0,
							"symbol": "₹"
						},
						"user": {
							"id": 47662586,
							"profilePic": [{
								"src": "https://userassets.dream11.com/fbprofilepic/d32f717ba80ef3c4e79226bc7499466da3af9c38_profilepic.jpg?timestamp=1773592200000"
							}],
							"officialTick": null
						}
					}, {
						"id": 10,
						"name": "Swarnalaxmi2017",
						"rank": 6,
						"points": 794.5,
						"rankChange": "INC",
						"winningAmount": {
							"amount": 0,
							"symbol": "₹"
						},
						"user": {
							"id": 313315722,
							"profilePic": [{
								"src": "https://userassets.dream11.com/fbprofilepic/4938a1e72e2f6ea8cd668c30f210bdd0b08c4f45_profilepic.jpg?timestamp=1773592200000"
							}],
							"officialTick": null
						}
					}, {
						"id": 3,
						"name": "PAPU RECORDSETTERS 735559",
						"rank": 6,
						"points": 794.5,
						"rankChange": "INC",
						"winningAmount": {
							"amount": 0,
							"symbol": "₹"
						},
						"user": {
							"id": 236247105,
							"profilePic": [{
								"src": "https://userassets.dream11.com/fbprofilepic/436d987f5363120fd65a6cee60824521fc707c43_profilepic.jpg?timestamp=1773592200000"
							}],
							"officialTick": null
						}
					}, {
						"id": 2,
						"name": "ABHIMANU RAPTORS 301617",
						"rank": 6,
						"points": 794.5,
						"rankChange": "INC",
						"winningAmount": {
							"amount": 0,
							"symbol": "₹"
						},
						"user": {
							"id": 163738344,
							"profilePic": [{
								"src": "https://userassets.dream11.com/fbprofilepic/0bffaaf5600732056a6cf098b39d56cfe2dbe9af_profilepic.jpg?timestamp=1773592200000"
							}],
							"officialTick": null
						}
					}, {
						"id": 3,
						"name": "GSUTKU COWBOYS",
						"rank": 9,
						"points": 794,
						"rankChange": "DEC",
						"winningAmount": {
							"amount": 0,
							"symbol": "₹"
						},
						"user": {
							"id": 211584368,
							"profilePic": [{
								"src": "https://userassets.dream11.com/fbprofilepic/f7a9ea7613f29991ba7805aba73c25abd7e3cabb_profilepic.jpg?timestamp=1773592200000"
							}],
							"officialTick": null
						}
					}, {
						"id": 1,
						"name": "KALMECH Warriors",
						"rank": 10,
						"points": 793.5,
						"rankChange": "DEC",
						"winningAmount": {
							"amount": 0,
							"symbol": "₹"
						},
						"user": {
							"id": 181642369,
							"profilePic": [{
								"src": "https://userassets.dream11.com/fbprofilepic/6e16f63001c29a992f7184fab1e7bc9fdbbe2074_profilepic.jpg?timestamp=1773592200000"
							}],
							"officialTick": null
						}
					}, {
						"id": 14,
						"name": "RAHUL LEO10",
						"rank": 11,
						"points": 792,
						"rankChange": "NONE",
						"winningAmount": {
							"amount": 0,
							"symbol": "₹"
						},
						"user": {
							"id": 107920284,
							"profilePic": [{
								"src": "https://userassets.dream11.com/fbprofilepic/04fe848408eb55b5269432524f2140c128ec9ad7_profilepic.jpg?timestamp=1773592200000"
							}],
							"officialTick": null
						}
					}, {
						"id": 3,
						"name": "SAMANTA GIANTS 119455",
						"rank": 12,
						"points": 791.5,
						"rankChange": "INC",
						"winningAmount": {
							"amount": 0,
							"symbol": "₹"
						},
						"user": {
							"id": 129546193,
							"profilePic": [{
								"src": "https://userassets.dream11.com/fbprofilepic/5ee6ba99e6404e61066e21566d55d20fcda80c77_profilepic.jpg?timestamp=1773592200000"
							}],
							"officialTick": null
						}
					}, {
						"id": 13,
						"name": "R C b    113",
						"rank": 13,
						"points": 790.5,
						"rankChange": "DEC",
						"winningAmount": {
							"amount": 0,
							"symbol": "₹"
						},
						"user": {
							"id": 306152936,
							"profilePic": [{
								"src": "https://userassets.dream11.com/fbprofilepic/59b254f815cd94d795820de6b7f78c23160ed0fe_profilepic.jpg?timestamp=1773592200000"
							}],
							"officialTick": null
						}
					}, {
						"id": 5,
						"name": "AQNVFN WINNERS",
						"rank": 13,
						"points": 790.5,
						"rankChange": "DEC",
						"winningAmount": {
							"amount": 0,
							"symbol": "₹"
						},
						"user": {
							"id": 233517334,
							"profilePic": [{
								"src": "https://userassets.dream11.com/fbprofilepic/e0f912b132e4f42639138a6d1604717116028b65_profilepic.jpg?timestamp=1773592200000"
							}],
							"officialTick": null
						}
					}, {
						"id": 7,
						"name": "Swarnalaxmi2017",
						"rank": 15,
						"points": 790,
						"rankChange": "NONE",
						"winningAmount": {
							"amount": 0,
							"symbol": "₹"
						},
						"user": {
							"id": 313315722,
							"profilePic": [{
								"src": "https://userassets.dream11.com/fbprofilepic/4938a1e72e2f6ea8cd668c30f210bdd0b08c4f45_profilepic.jpg?timestamp=1773592200000"
							}],
							"officialTick": null
						}
					}, {
						"id": 6,
						"name": "PUNIT DOLPHINS 1004958",
						"rank": 15,
						"points": 790,
						"rankChange": "NONE",
						"winningAmount": {
							"amount": 0,
							"symbol": "₹"
						},
						"user": {
							"id": 277102910,
							"profilePic": [{
								"src": "https://userassets.dream11.com/fbprofilepic/3e62ee9586197acee18c205092670ef6cd46a245_profilepic.jpg?timestamp=1773592200000"
							}],
							"officialTick": null
						}
					}, {
						"id": 6,
						"name": "BISWA Lions 4IEEQ",
						"rank": 17,
						"points": 786.5,
						"rankChange": "NONE",
						"winningAmount": {
							"amount": 0,
							"symbol": "₹"
						},
						"user": {
							"id": 103860469,
							"profilePic": [{
								"src": "https://userassets.dream11.com/fbprofilepic/85a437d883ec398a90104bf6ca2d9b847e3396ee_profilepic.jpg?timestamp=1773592200000"
							}],
							"officialTick": null
						}
					}, {
						"id": 8,
						"name": "VIVEK 1000",
						"rank": 17,
						"points": 786.5,
						"rankChange": "INC",
						"winningAmount": {
							"amount": 0,
							"symbol": "₹"
						},
						"user": {
							"id": 25603170,
							"profilePic": [{
								"src": "https://userassets.dream11.com/fbprofilepic/481df763714a359ddf48cee8bab39f074da6e1be_profilepic.jpg?timestamp=1773592200000"
							}],
							"officialTick": null
						}
					}, {
						"id": 1,
						"name": "Vikas Kumar rao 123456",
						"rank": 17,
						"points": 786.5,
						"rankChange": "INC",
						"winningAmount": {
							"amount": 0,
							"symbol": "₹"
						},
						"user": {
							"id": 318447816,
							"profilePic": [{
								"src": "https://userassets.dream11.com/fbprofilepic/b6faaf4d2ccd36297fcc2de2fb81ff973fadd3df_profilepic.jpg?timestamp=1773592200000"
							}],
							"officialTick": null
						}
					}, {
						"id": 1,
						"name": "JAI MA SARASVATI  11",
						"rank": 20,
						"points": 786,
						"rankChange": "INC",
						"winningAmount": {
							"amount": 0,
							"symbol": "₹"
						},
						"user": {
							"id": 237903023,
							"profilePic": [{
								"src": "https://userassets.dream11.com/fbprofilepic/ff477a8310c2c326dbd897e9af99ab49d2d835db_profilepic.jpg?timestamp=1773592200000"
							}],
							"officialTick": null
						}
					}, {
						"id": 2,
						"name": "OM  HR HR MHADEV ",
						"rank": 21,
						"points": 785.5,
						"rankChange": "DEC",
						"winningAmount": {
							"amount": 0,
							"symbol": "₹"
						},
						"user": {
							"id": 67295853,
							"profilePic": [{
								"src": "https://userassets.dream11.com/fbprofilepic/554057f4c0a59706b8f7d1ea0f7e47b478e474d2_profilepic.jpg?timestamp=1773592200000"
							}],
							"officialTick": null
						}
					}, {
						"id": 16,
						"name": "Garry1008",
						"rank": 21,
						"points": 785.5,
						"rankChange": "DEC",
						"winningAmount": {
							"amount": 0,
							"symbol": "₹"
						},
						"user": {
							"id": 18993706,
							"profilePic": [{
								"src": "https://userassets.dream11.com/fbprofilepic/85ace49cac5dd52c637a446987688752f4a931c8_profilepic.jpg?timestamp=1773592200000"
							}],
							"officialTick": null
						}
					}, {
						"id": 6,
						"name": "Rohit sarmele",
						"rank": 21,
						"points": 785.5,
						"rankChange": "DEC",
						"winningAmount": {
							"amount": 0,
							"symbol": "₹"
						},
						"user": {
							"id": 262700748,
							"profilePic": [{
								"src": "https://userassets.dream11.com/fbprofilepic/a99620c5ecdef0db6319e0d7c4205cff081f5c32_profilepic.jpg?timestamp=1773592200000"
							}],
							"officialTick": null
						}
					}, {
						"id": 2,
						"name": "SHAMBHU ALPHAS 808065",
						"rank": 21,
						"points": 785.5,
						"rankChange": "INC",
						"winningAmount": {
							"amount": 0,
							"symbol": "₹"
						},
						"user": {
							"id": 249006860,
							"profilePic": [{
								"src": "https://userassets.dream11.com/fbprofilepic/007f2b9a3736f6c59b20dd783f64e953b4c529e2_profilepic.jpg?timestamp=1773592200000"
							}],
							"officialTick": null
						}
					}, {
						"id": 13,
						"name": "ARJUN Subin",
						"rank": 25,
						"points": 784.5,
						"rankChange": "DEC",
						"winningAmount": {
							"amount": 0,
							"symbol": "₹"
						},
						"user": {
							"id": 154964635,
							"profilePic": [{
								"src": "https://userassets.dream11.com/fbprofilepic/8132503c89078334432ab6cd739e4ce6a70ae594_profilepic.jpg?timestamp=1773592200000"
							}],
							"officialTick": null
						}
					}, {
						"id": 11,
						"name": "SUMAN KNIGHTS 1051653",
						"rank": 26,
						"points": 784,
						"rankChange": "DEC",
						"winningAmount": {
							"amount": 0,
							"symbol": "₹"
						},
						"user": {
							"id": 284486296,
							"profilePic": [{
								"src": "https://userassets.dream11.com/fbprofilepic/7ba37250fbee96c344817360e90c96965dd96fb7_profilepic.jpg?timestamp=1773592200000"
							}],
							"officialTick": null
						}
					}, {
						"id": 3,
						"name": "MD SAGiR 7866",
						"rank": 26,
						"points": 784,
						"rankChange": "INC",
						"winningAmount": {
							"amount": 0,
							"symbol": "₹"
						},
						"user": {
							"id": 236870614,
							"profilePic": [{
								"src": "https://userassets.dream11.com/fbprofilepic/f4b53a097ef7d04c102838204de28b09b1da39fc_profilepic.jpg?timestamp=1773592200000"
							}],
							"officialTick": null
						}
					}, {
						"id": 3,
						"name": "ABHIMANU RAPTORS 301617",
						"rank": 26,
						"points": 784,
						"rankChange": "INC",
						"winningAmount": {
							"amount": 0,
							"symbol": "₹"
						},
						"user": {
							"id": 163738344,
							"profilePic": [{
								"src": "https://userassets.dream11.com/fbprofilepic/0bffaaf5600732056a6cf098b39d56cfe2dbe9af_profilepic.jpg?timestamp=1773592200000"
							}],
							"officialTick": null
						}
					}, {
						"id": 10,
						"name": "RISHAV2438IJ",
						"rank": 26,
						"points": 784,
						"rankChange": "INC",
						"winningAmount": {
							"amount": 0,
							"symbol": "₹"
						},
						"user": {
							"id": 85333654,
							"profilePic": [{
								"src": "https://userassets.dream11.com/fbprofilepic/6610ec14afa9008ab294b96551f5d5c1cefe9ddd_profilepic.jpg?timestamp=1773592200000"
							}],
							"officialTick": null
						}
					}, {
						"id": 1,
						"name": "SANJIB GOALIES 1177701",
						"rank": 30,
						"points": 783.5,
						"rankChange": "DEC",
						"winningAmount": {
							"amount": 0,
							"symbol": "₹"
						},
						"user": {
							"id": 299790882,
							"profilePic": [{
								"src": "https://userassets.dream11.com/fbprofilepic/11738fdc93bc9a10282c900a10008e7e399f2c6d_profilepic.jpg?timestamp=1773592200000"
							}],
							"officialTick": null
						}
					}, {
						"id": 1,
						"name": "Swarnalaxmi2017",
						"rank": 31,
						"points": 782,
						"rankChange": "INC",
						"winningAmount": {
							"amount": 0,
							"symbol": "₹"
						},
						"user": {
							"id": 313315722,
							"profilePic": [{
								"src": "https://userassets.dream11.com/fbprofilepic/4938a1e72e2f6ea8cd668c30f210bdd0b08c4f45_profilepic.jpg?timestamp=1773592200000"
							}],
							"officialTick": null
						}
					}, {
						"id": 5,
						"name": "Radhe RadhePLAYERS 630960",
						"rank": 31,
						"points": 782,
						"rankChange": "INC",
						"winningAmount": {
							"amount": 0,
							"symbol": "₹"
						},
						"user": {
							"id": 216008398,
							"profilePic": [{
								"src": "https://userassets.dream11.com/fbprofilepic/f99d0f14b0f60977f09d65d1f26ee3c6de7fbda5_profilepic.jpg?timestamp=1773592200000"
							}],
							"officialTick": null
						}
					}, {
						"id": 6,
						"name": "DSVV17 TITANSs",
						"rank": 33,
						"points": 781.5,
						"rankChange": "INC",
						"winningAmount": {
							"amount": 0,
							"symbol": "₹"
						},
						"user": {
							"id": 112635144,
							"profilePic": [{
								"src": "https://userassets.dream11.com/fbprofilepic/f9d24a5a143e875262e1ba92d3a16094f0e7efc1_profilepic.jpg?timestamp=1773592200000"
							}],
							"officialTick": null
						}
					}, {
						"id": 2,
						"name": "Dipesh 7777 11",
						"rank": 33,
						"points": 781.5,
						"rankChange": "INC",
						"winningAmount": {
							"amount": 0,
							"symbol": "₹"
						},
						"user": {
							"id": 37821549,
							"profilePic": [{
								"src": "https://userassets.dream11.com/fbprofilepic/7478eb843dacafe0c83ef273e50d168c6d0113fe_profilepic.jpg?timestamp=1773592200000"
							}],
							"officialTick": null
						}
					}, {
						"id": 11,
						"name": "Stylish620",
						"rank": 35,
						"points": 781,
						"rankChange": "DEC",
						"winningAmount": {
							"amount": 0,
							"symbol": "₹"
						},
						"user": {
							"id": 113630908,
							"profilePic": [{
								"src": "https://userassets.dream11.com/fbprofilepic/eafb5b03e0b8387994bcf5f78d65c6a371b0fc85_profilepic.jpg?timestamp=1773592200000"
							}],
							"officialTick": null
						}
					}, {
						"id": 4,
						"name": "Matr Ek Bar Harhar Mahade",
						"rank": 35,
						"points": 781,
						"rankChange": "INC",
						"winningAmount": {
							"amount": 0,
							"symbol": "₹"
						},
						"user": {
							"id": 114403987,
							"profilePic": [{
								"src": "https://userassets.dream11.com/fbprofilepic/e12d39fad1041361f428e011fd2db2b356ef6c87_profilepic.jpg?timestamp=1773592200000"
							}],
							"officialTick": null
						}
					}, {
						"id": 20,
						"name": "Vijay Kumar Singh 1 0102",
						"rank": 37,
						"points": 780.5,
						"rankChange": "DEC",
						"winningAmount": {
							"amount": 0,
							"symbol": "₹"
						},
						"user": {
							"id": 82511200,
							"profilePic": [{
								"src": "https://userassets.dream11.com/fbprofilepic/650fe12d356e70bc180c3cc38e5bdf5190b5aa72_profilepic.jpg?timestamp=1773592200000"
							}],
							"officialTick": null
						}
					}, {
						"id": 7,
						"name": "SHOKEEN SUPERXI",
						"rank": 37,
						"points": 780.5,
						"rankChange": "DEC",
						"winningAmount": {
							"amount": 0,
							"symbol": "₹"
						},
						"user": {
							"id": 282507751,
							"profilePic": [{
								"src": "https://userassets.dream11.com/fbprofilepic/9e6eee2fba98097471da7970c960032aa1d0ba4f_profilepic.jpg?timestamp=1773592200000"
							}],
							"officialTick": null
						}
					}, {
						"id": 8,
						"name": "DVTLLC CONQUERERS",
						"rank": 37,
						"points": 780.5,
						"rankChange": "INC",
						"winningAmount": {
							"amount": 0,
							"symbol": "₹"
						},
						"user": {
							"id": 225227475,
							"profilePic": [{
								"src": "https://userassets.dream11.com/fbprofilepic/61dffe37dafc4cc7099d4b6629fcbca56fcce114_profilepic.jpg?timestamp=1773592200000"
							}],
							"officialTick": null
						}
					}, {
						"id": 1,
						"name": "rakshitha25",
						"rank": 37,
						"points": 780.5,
						"rankChange": "INC",
						"winningAmount": {
							"amount": 0,
							"symbol": "₹"
						},
						"user": {
							"id": 14602158,
							"profilePic": [{
								"src": "https://userassets.dream11.com/fbprofilepic/fe9aec1c3b7d6313115e652fe1dd859f675631a8_profilepic.jpg?timestamp=1773592200000"
							}],
							"officialTick": null
						}
					}, {
						"id": 1,
						"name": "Kavy123456",
						"rank": 37,
						"points": 780.5,
						"rankChange": "INC",
						"winningAmount": {
							"amount": 0,
							"symbol": "₹"
						},
						"user": {
							"id": 126506858,
							"profilePic": [{
								"src": "https://userassets.dream11.com/fbprofilepic/9f038f4cdcc93c8f3021d31a5aaa8adaf53d0711_profilepic.jpg?timestamp=1773592200000"
							}],
							"officialTick": null
						}
					}, {
						"id": 2,
						"name": "RAHULSA WINNERS 20749",
						"rank": 37,
						"points": 780.5,
						"rankChange": "INC",
						"winningAmount": {
							"amount": 0,
							"symbol": "₹"
						},
						"user": {
							"id": 104210447,
							"profilePic": [{
								"src": "https://userassets.dream11.com/fbprofilepic/df2b4764543f769864eb3f8c60f24080ffe55757_profilepic.jpg?timestamp=1773592200000"
							}],
							"officialTick": null
						}
					}, {
						"id": 3,
						"name": "Ajay Deo Bara",
						"rank": 43,
						"points": 780,
						"rankChange": "DEC",
						"winningAmount": {
							"amount": 0,
							"symbol": "₹"
						},
						"user": {
							"id": 273070369,
							"profilePic": [{
								"src": "https://userassets.dream11.com/fbprofilepic/0bfe2337232470ce08c20641bc69d7ea56bbc294_profilepic.jpg?timestamp=1773592200000"
							}],
							"officialTick": null
						}
					}, {
						"id": 19,
						"name": "Only expert 11",
						"rank": 43,
						"points": 780,
						"rankChange": "DEC",
						"winningAmount": {
							"amount": 0,
							"symbol": "₹"
						},
						"user": {
							"id": 147183479,
							"profilePic": [{
								"src": "https://userassets.dream11.com/fbprofilepic/37211105a070657238ac4d96369a81a7141d2444_profilepic.jpg?timestamp=1773592200000"
							}],
							"officialTick": null
						}
					}, {
						"id": 10,
						"name": "JAI VETERANS 1316743",
						"rank": 43,
						"points": 780,
						"rankChange": "DEC",
						"winningAmount": {
							"amount": 0,
							"symbol": "₹"
						},
						"user": {
							"id": 315425078,
							"profilePic": [{
								"src": "https://userassets.dream11.com/fbprofilepic/793fda38e20bb98581fd439348d2d4883ac45b82_profilepic.jpg?timestamp=1773592200000"
							}],
							"officialTick": null
						}
					}, {
						"id": 5,
						"name": "dhoni is legend player",
						"rank": 46,
						"points": 779.5,
						"rankChange": "DEC",
						"winningAmount": {
							"amount": 0,
							"symbol": "₹"
						},
						"user": {
							"id": 76387467,
							"profilePic": [{
								"src": "https://userassets.dream11.com/fbprofilepic/46d747610f6dd694c73e02407f69f85724c1608d_profilepic.jpg?timestamp=1773592200000"
							}],
							"officialTick": null
						}
					}, {
						"id": 11,
						"name": "565MaNishKhaN",
						"rank": 46,
						"points": 779.5,
						"rankChange": "DEC",
						"winningAmount": {
							"amount": 0,
							"symbol": "₹"
						},
						"user": {
							"id": 74072841,
							"profilePic": [{
								"src": "https://userassets.dream11.com/fbprofilepic/916ae0abedb8a81853848d67d7c0e2c6de172a35_profilepic.jpg?timestamp=1773592200000"
							}],
							"officialTick": null
						}
					}, {
						"id": 4,
						"name": "my new11 team",
						"rank": 46,
						"points": 779.5,
						"rankChange": "DEC",
						"winningAmount": {
							"amount": 0,
							"symbol": "₹"
						},
						"user": {
							"id": 18661407,
							"profilePic": [{
								"src": "https://userassets.dream11.com/fbprofilepic/ba0b2047f885993241ee49eea67e6971fe9cbf56_profilepic.jpg?timestamp=1773592200000"
							}],
							"officialTick": null
						}
					}, {
						"id": 2,
						"name": "moksh xyz",
						"rank": 46,
						"points": 779.5,
						"rankChange": "INC",
						"winningAmount": {
							"amount": 0,
							"symbol": "₹"
						},
						"user": {
							"id": 45648263,
							"profilePic": [{
								"src": "https://userassets.dream11.com/fbprofilepic/1ef668b3f4ec2afcf853ef775d9c8d422df703cb_profilepic.jpg?timestamp=1773592200000"
							}],
							"officialTick": null
						}
					}, {
						"id": 12,
						"name": "Jai Shiv Shankar 2020 XI",
						"rank": 46,
						"points": 779.5,
						"rankChange": "INC",
						"winningAmount": {
							"amount": 0,
							"symbol": "₹"
						},
						"user": {
							"id": 105019210,
							"profilePic": [{
								"src": "https://userassets.dream11.com/fbprofilepic/492177eba810a9533e3d4a34a3252b83d7a8a036_profilepic.jpg?timestamp=1773592200000"
							}],
							"officialTick": null
						}
					}, {
						"id": 9,
						"name": "Hahahehehuhu11",
						"rank": 46,
						"points": 779.5,
						"rankChange": "INC",
						"winningAmount": {
							"amount": 0,
							"symbol": "₹"
						},
						"user": {
							"id": 12460303,
							"profilePic": [{
								"src": "https://userassets.dream11.com/fbprofilepic/8905ae1535b2dbc744c7947ace4f2079f40e4d98_profilepic.jpg?timestamp=1773592200000"
							}],
							"officialTick": null
						}
					}, {
						"id": 1,
						"name": "Jai Badrivishal1578",
						"rank": 52,
						"points": 779,
						"rankChange": "DEC",
						"winningAmount": {
							"amount": 0,
							"symbol": "₹"
						},
						"user": {
							"id": 165536202,
							"profilePic": [{
								"src": "https://userassets.dream11.com/fbprofilepic/20ca740c41ee181475dcf95c1cb60dc5a2980c32_profilepic.jpg?timestamp=1773592200000"
							}],
							"officialTick": null
						}
					}, {
						"id": 8,
						"name": "Mallesh6",
						"rank": 52,
						"points": 779,
						"rankChange": "DEC",
						"winningAmount": {
							"amount": 0,
							"symbol": "₹"
						},
						"user": {
							"id": 15276016,
							"profilePic": [{
								"src": "https://userassets.dream11.com/fbprofilepic/ae8e07629407188f5d2926fb5b4aebc87209b028_profilepic.jpg?timestamp=1773592200000"
							}],
							"officialTick": null
						}
					}, {
						"id": 12,
						"name": "Manoj Kumar 1613",
						"rank": 54,
						"points": 778.5,
						"rankChange": "INC",
						"winningAmount": {
							"amount": 0,
							"symbol": "₹"
						},
						"user": {
							"id": 21137431,
							"profilePic": [{
								"src": "https://userassets.dream11.com/fbprofilepic/0ee91eb71977336a01e86f4aa33a06368dd169d4_profilepic.jpg?timestamp=1773592200000"
							}],
							"officialTick": null
						}
					}, {
						"id": 1,
						"name": "Kaushal Chaupal",
						"rank": 54,
						"points": 778.5,
						"rankChange": "NONE",
						"winningAmount": {
							"amount": 0,
							"symbol": "₹"
						},
						"user": {
							"id": 133216753,
							"profilePic": [{
								"src": "https://userassets.dream11.com/fbprofilepic/42f4c287c5298f38a9f3d145e7752cba2dcde97d_profilepic.jpg?timestamp=1773592200000"
							}],
							"officialTick": null
						}
					}, {
						"id": 9,
						"name": "Vishnukechite",
						"rank": 56,
						"points": 778,
						"rankChange": "DEC",
						"winningAmount": {
							"amount": 0,
							"symbol": "₹"
						},
						"user": {
							"id": 88028027,
							"profilePic": [{
								"src": "https://userassets.dream11.com/fbprofilepic/192525e42304497b9602541e9c9156bddc5091a1_profilepic.jpg?timestamp=1773592200000"
							}],
							"officialTick": null
						}
					}, {
						"id": 3,
						"name": "I Am Annihilator",
						"rank": 56,
						"points": 778,
						"rankChange": "DEC",
						"winningAmount": {
							"amount": 0,
							"symbol": "₹"
						},
						"user": {
							"id": 175084844,
							"profilePic": [{
								"src": "https://userassets.dream11.com/fbprofilepic/596992cf726d5ea3b5ba10f5564ccfbe27c46e0a_profilepic.jpg?timestamp=1773592200000"
							}],
							"officialTick": null
						}
					}, {
						"id": 1,
						"name": "SUNNY GHOST RIDERS 676825",
						"rank": 56,
						"points": 778,
						"rankChange": "INC",
						"winningAmount": {
							"amount": 0,
							"symbol": "₹"
						},
						"user": {
							"id": 223738112,
							"profilePic": [{
								"src": "https://userassets.dream11.com/fbprofilepic/f05d927ea2067358521cf7b07e7712899ea1c149_profilepic.jpg?timestamp=1773592200000"
							}],
							"officialTick": null
						}
					}, {
						"id": 1,
						"name": "OFAVAF KNIGHTS",
						"rank": 59,
						"points": 777.5,
						"rankChange": "DEC",
						"winningAmount": {
							"amount": 0,
							"symbol": "₹"
						},
						"user": {
							"id": 318765163,
							"profilePic": [{
								"src": "https://userassets.dream11.com/fbprofilepic/ebf0ca749f9b5c62604844365904cd6deb3f40a8_profilepic.jpg?timestamp=1773592200000"
							}],
							"officialTick": null
						}
					}, {
						"id": 8,
						"name": "BIDYUTD 31",
						"rank": 59,
						"points": 777.5,
						"rankChange": "DEC",
						"winningAmount": {
							"amount": 0,
							"symbol": "₹"
						},
						"user": {
							"id": 131595402,
							"profilePic": [{
								"src": "https://userassets.dream11.com/fbprofilepic/cc6b49314697625e5808c1b87c8f08b486c6a146_profilepic.jpg?timestamp=1773592200000"
							}],
							"officialTick": null
						}
					}, {
						"id": 2,
						"name": "PAPU RECORDSETTERS 735559",
						"rank": 61,
						"points": 777,
						"rankChange": "INC",
						"winningAmount": {
							"amount": 0,
							"symbol": "₹"
						},
						"user": {
							"id": 236247105,
							"profilePic": [{
								"src": "https://userassets.dream11.com/fbprofilepic/436d987f5363120fd65a6cee60824521fc707c43_profilepic.jpg?timestamp=1773592200000"
							}],
							"officialTick": null
						}
					}, {
						"id": 4,
						"name": "OM  HR HR MHADEV ",
						"rank": 62,
						"points": 776.5,
						"rankChange": "INC",
						"winningAmount": {
							"amount": 0,
							"symbol": "₹"
						},
						"user": {
							"id": 67295853,
							"profilePic": [{
								"src": "https://userassets.dream11.com/fbprofilepic/554057f4c0a59706b8f7d1ea0f7e47b478e474d2_profilepic.jpg?timestamp=1773592200000"
							}],
							"officialTick": null
						}
					}, {
						"id": 5,
						"name": "The Dharam ",
						"rank": 63,
						"points": 776,
						"rankChange": "DEC",
						"winningAmount": {
							"amount": 0,
							"symbol": "₹"
						},
						"user": {
							"id": 94083118,
							"profilePic": [{
								"src": "https://userassets.dream11.com/fbprofilepic/8bc70a427a7e1321fd0c2b548ea3db13f85b2a7f_profilepic.jpg?timestamp=1773592200000"
							}],
							"officialTick": null
						}
					}, {
						"id": 3,
						"name": "Harman 3 CHARGERS",
						"rank": 63,
						"points": 776,
						"rankChange": "INC",
						"winningAmount": {
							"amount": 0,
							"symbol": "₹"
						},
						"user": {
							"id": 144189974,
							"profilePic": [{
								"src": "https://userassets.dream11.com/fbprofilepic/7a7b2b8fe2f73226c8778345a69c3079398bab8c_profilepic.jpg?timestamp=1773592200000"
							}],
							"officialTick": null
						}
					}, {
						"id": 18,
						"name": "Unlucky2me",
						"rank": 63,
						"points": 776,
						"rankChange": "INC",
						"winningAmount": {
							"amount": 0,
							"symbol": "₹"
						},
						"user": {
							"id": 118078537,
							"profilePic": [{
								"src": "https://userassets.dream11.com/fbprofilepic/2d9e8362d66f73306a4e964531fdd35487688023_profilepic.jpg?timestamp=1773592200000"
							}],
							"officialTick": null
						}
					}, {
						"id": 8,
						"name": "yoges3no t3",
						"rank": 66,
						"points": 775,
						"rankChange": "INC",
						"winningAmount": {
							"amount": 0,
							"symbol": "₹"
						},
						"user": {
							"id": 7063349,
							"profilePic": [{
								"src": "https://userassets.dream11.com/fbprofilepic/aeda5c787ef6bbe4c562a672b751d29148e81102_profilepic.jpg?timestamp=1773592200000"
							}],
							"officialTick": null
						}
					}, {
						"id": 4,
						"name": "BIKASH ELEVEN 957042",
						"rank": 66,
						"points": 775,
						"rankChange": "INC",
						"winningAmount": {
							"amount": 0,
							"symbol": "₹"
						},
						"user": {
							"id": 270717925,
							"profilePic": [{
								"src": "https://userassets.dream11.com/fbprofilepic/b0e4466c467e409c7e97d12fdf8476057ededf8e_profilepic.jpg?timestamp=1773592200000"
							}],
							"officialTick": null
						}
					}, {
						"id": 6,
						"name": "SANJEET WINNERS 813565",
						"rank": 66,
						"points": 775,
						"rankChange": "INC",
						"winningAmount": {
							"amount": 0,
							"symbol": "₹"
						},
						"user": {
							"id": 248849347,
							"profilePic": [{
								"src": "https://userassets.dream11.com/fbprofilepic/aa7e265176b1e8273ba81e844f87da50df84cd1a_profilepic.jpg?timestamp=1773592200000"
							}],
							"officialTick": null
						}
					}, {
						"id": 1,
						"name": "SARSWATI GENIUSES 612476",
						"rank": 69,
						"points": 774.5,
						"rankChange": "DEC",
						"winningAmount": {
							"amount": 0,
							"symbol": "₹"
						},
						"user": {
							"id": 213402599,
							"profilePic": [{
								"src": "https://userassets.dream11.com/fbprofilepic/c646b07a2f76a8688bd1fd9d2d987a6d1ebf6874_profilepic.jpg?timestamp=1773592200000"
							}],
							"officialTick": null
						}
					}, {
						"id": 10,
						"name": "Anand Thakur 2903",
						"rank": 69,
						"points": 774.5,
						"rankChange": "DEC",
						"winningAmount": {
							"amount": 0,
							"symbol": "₹"
						},
						"user": {
							"id": 40520424,
							"profilePic": [{
								"src": "https://userassets.dream11.com/fbprofilepic/3a41596f62a6bbe554c4f0ac3062942795687404_profilepic.jpg?timestamp=1773592200000"
							}],
							"officialTick": null
						}
					}, {
						"id": 11,
						"name": "RAJEEV2808",
						"rank": 69,
						"points": 774.5,
						"rankChange": "DEC",
						"winningAmount": {
							"amount": 0,
							"symbol": "₹"
						},
						"user": {
							"id": 107302152,
							"profilePic": [{
								"src": "https://userassets.dream11.com/fbprofilepic/696bc706b18a2f7306e3b8c1f73c3549706fe450_profilepic.jpg?timestamp=1773592200000"
							}],
							"officialTick": null
						}
					}, {
						"id": 3,
						"name": "SANJIB GOALIES 1177701",
						"rank": 69,
						"points": 774.5,
						"rankChange": "DEC",
						"winningAmount": {
							"amount": 0,
							"symbol": "₹"
						},
						"user": {
							"id": 299790882,
							"profilePic": [{
								"src": "https://userassets.dream11.com/fbprofilepic/11738fdc93bc9a10282c900a10008e7e399f2c6d_profilepic.jpg?timestamp=1773592200000"
							}],
							"officialTick": null
						}
					}, {
						"id": 3,
						"name": "vickyccmsdian",
						"rank": 69,
						"points": 774.5,
						"rankChange": "INC",
						"winningAmount": {
							"amount": 0,
							"symbol": "₹"
						},
						"user": {
							"id": 8985590,
							"profilePic": [{
								"src": "https://userassets.dream11.com/fbprofilepic/43a0f2aedb3c27b17a957a38cb67c494ec304179_profilepic.jpg?timestamp=1773592200000"
							}],
							"officialTick": null
						}
					}, {
						"id": 2,
						"name": "debjit g",
						"rank": 69,
						"points": 774.5,
						"rankChange": "INC",
						"winningAmount": {
							"amount": 0,
							"symbol": "₹"
						},
						"user": {
							"id": 18268774,
							"profilePic": [{
								"src": "https://userassets.dream11.com/fbprofilepic/10c93726102e5359e710e2118e291e86b69e4a7b_profilepic.jpg?timestamp=1773592200000"
							}],
							"officialTick": null
						}
					}, {
						"id": 9,
						"name": "AFZALAN 44",
						"rank": 69,
						"points": 774.5,
						"rankChange": "INC",
						"winningAmount": {
							"amount": 0,
							"symbol": "₹"
						},
						"user": {
							"id": 242402104,
							"profilePic": [{
								"src": "https://userassets.dream11.com/fbprofilepic/2f8f1e6b3c301fe68896305008900d3cc3ba3b7a_profilepic.jpg?timestamp=1773592200000"
							}],
							"officialTick": null
						}
					}, {
						"id": 9,
						"name": "PLALURA XI",
						"rank": 76,
						"points": 774,
						"rankChange": "DEC",
						"winningAmount": {
							"amount": 0,
							"symbol": "₹"
						},
						"user": {
							"id": 93486181,
							"profilePic": [{
								"src": "https://userassets.dream11.com/fbprofilepic/3466144b53818d09c4f4fcf8c6e8b5b6f93b3131_profilepic.jpg?timestamp=1773592200000"
							}],
							"officialTick": null
						}
					}, {
						"id": 14,
						"name": "Jai Shiv Shankar 2020 XI",
						"rank": 76,
						"points": 774,
						"rankChange": "INC",
						"winningAmount": {
							"amount": 0,
							"symbol": "₹"
						},
						"user": {
							"id": 105019210,
							"profilePic": [{
								"src": "https://userassets.dream11.com/fbprofilepic/492177eba810a9533e3d4a34a3252b83d7a8a036_profilepic.jpg?timestamp=1773592200000"
							}],
							"officialTick": null
						}
					}, {
						"id": 13,
						"name": "Manoj Kumar 1613",
						"rank": 76,
						"points": 774,
						"rankChange": "INC",
						"winningAmount": {
							"amount": 0,
							"symbol": "₹"
						},
						"user": {
							"id": 21137431,
							"profilePic": [{
								"src": "https://userassets.dream11.com/fbprofilepic/0ee91eb71977336a01e86f4aa33a06368dd169d4_profilepic.jpg?timestamp=1773592200000"
							}],
							"officialTick": null
						}
					}, {
						"id": 8,
						"name": "Sureshs Avengers 1806",
						"rank": 79,
						"points": 773.5,
						"rankChange": "DEC",
						"winningAmount": {
							"amount": 0,
							"symbol": "₹"
						},
						"user": {
							"id": 164182270,
							"profilePic": [{
								"src": "https://userassets.dream11.com/fbprofilepic/6cbc7b45e49f7d71f65219a1f5add46144ac2a0f_profilepic.jpg?timestamp=1773592200000"
							}],
							"officialTick": null
						}
					}, {
						"id": 8,
						"name": "Swarnalaxmi2017",
						"rank": 79,
						"points": 773.5,
						"rankChange": "INC",
						"winningAmount": {
							"amount": 0,
							"symbol": "₹"
						},
						"user": {
							"id": 313315722,
							"profilePic": [{
								"src": "https://userassets.dream11.com/fbprofilepic/4938a1e72e2f6ea8cd668c30f210bdd0b08c4f45_profilepic.jpg?timestamp=1773592200000"
							}],
							"officialTick": null
						}
					}, {
						"id": 1,
						"name": "ASHUKD1 EAGLES",
						"rank": 79,
						"points": 773.5,
						"rankChange": "INC",
						"winningAmount": {
							"amount": 0,
							"symbol": "₹"
						},
						"user": {
							"id": 141977433,
							"profilePic": [{
								"src": "https://userassets.dream11.com/fbprofilepic/3a8cab0975c79f23eb18db35ca3b73cd01e10c2b_profilepic.jpg?timestamp=1773592200000"
							}],
							"officialTick": null
						}
					}, {
						"id": 9,
						"name": "SANTOSH HOTSHOTS 621334",
						"rank": 79,
						"points": 773.5,
						"rankChange": "INC",
						"winningAmount": {
							"amount": 0,
							"symbol": "₹"
						},
						"user": {
							"id": 214802681,
							"profilePic": [{
								"src": "https://userassets.dream11.com/fbprofilepic/732bbb151f6ddb28e3e575e32bde121e7b5af46f_profilepic.jpg?timestamp=1773592200000"
							}],
							"officialTick": null
						}
					}, {
						"id": 4,
						"name": "UTTAMBERA WINNERS",
						"rank": 83,
						"points": 773,
						"rankChange": "INC",
						"winningAmount": {
							"amount": 0,
							"symbol": "₹"
						},
						"user": {
							"id": 236079977,
							"profilePic": [{
								"src": "https://userassets.dream11.com/fbprofilepic/c2f85d8e3f7954beb0a65be9b1b3b33caa893614_profilepic.jpg?timestamp=1773592200000"
							}],
							"officialTick": null
						}
					}, {
						"id": 3,
						"name": "SURGICAL STRIKE 1705",
						"rank": 83,
						"points": 773,
						"rankChange": "INC",
						"winningAmount": {
							"amount": 0,
							"symbol": "₹"
						},
						"user": {
							"id": 99193379,
							"profilePic": [{
								"src": "https://userassets.dream11.com/fbprofilepic/ad1d057d2570d7a80a950cc65038b0d9b46609f2_profilepic.jpg?timestamp=1773592200000"
							}],
							"officialTick": null
						}
					}, {
						"id": 5,
						"name": "Chandni rana",
						"rank": 85,
						"points": 772.5,
						"rankChange": "DEC",
						"winningAmount": {
							"amount": 0,
							"symbol": "₹"
						},
						"user": {
							"id": 5652009,
							"profilePic": [{
								"src": "https://userassets.dream11.com/fbprofilepic/bd230e304fb28908695df9002809b1d34280d006_profilepic.jpg?timestamp=1773592200000"
							}],
							"officialTick": null
						}
					}, {
						"id": 9,
						"name": "Akash sawle team",
						"rank": 85,
						"points": 772.5,
						"rankChange": "DEC",
						"winningAmount": {
							"amount": 0,
							"symbol": "₹"
						},
						"user": {
							"id": 142833776,
							"profilePic": [{
								"src": "https://userassets.dream11.com/fbprofilepic/b398f6c3d7759d4cfb66274225313b2b04268561_profilepic.jpg?timestamp=1773592200000"
							}],
							"officialTick": null
						}
					}, {
						"id": 9,
						"name": "Daksha s chavhan",
						"rank": 85,
						"points": 772.5,
						"rankChange": "INC",
						"winningAmount": {
							"amount": 0,
							"symbol": "₹"
						},
						"user": {
							"id": 75247758,
							"profilePic": [{
								"src": "https://userassets.dream11.com/fbprofilepic/fd9fde402a5cd2255d92eacfec6918b573053e62_profilepic.jpg?timestamp=1773592200000"
							}],
							"officialTick": null
						}
					}, {
						"id": 11,
						"name": "RISHAV2438IJ",
						"rank": 88,
						"points": 772,
						"rankChange": "INC",
						"winningAmount": {
							"amount": 0,
							"symbol": "₹"
						},
						"user": {
							"id": 85333654,
							"profilePic": [{
								"src": "https://userassets.dream11.com/fbprofilepic/6610ec14afa9008ab294b96551f5d5c1cefe9ddd_profilepic.jpg?timestamp=1773592200000"
							}],
							"officialTick": null
						}
					}, {
						"id": 2,
						"name": "BABUL 1011",
						"rank": 88,
						"points": 772,
						"rankChange": "INC",
						"winningAmount": {
							"amount": 0,
							"symbol": "₹"
						},
						"user": {
							"id": 263586476,
							"profilePic": [{
								"src": "https://userassets.dream11.com/fbprofilepic/d13fe93ee32f37251ba0fcea71b82e51ac9203da_profilepic.jpg?timestamp=1773592200000"
							}],
							"officialTick": null
						}
					}, {
						"id": 10,
						"name": "Dipesh 7777 11",
						"rank": 90,
						"points": 771.5,
						"rankChange": "DEC",
						"winningAmount": {
							"amount": 0,
							"symbol": "₹"
						},
						"user": {
							"id": 37821549,
							"profilePic": [{
								"src": "https://userassets.dream11.com/fbprofilepic/7478eb843dacafe0c83ef273e50d168c6d0113fe_profilepic.jpg?timestamp=1773592200000"
							}],
							"officialTick": null
						}
					}, {
						"id": 12,
						"name": "MMQBYJ HEROES",
						"rank": 90,
						"points": 771.5,
						"rankChange": "DEC",
						"winningAmount": {
							"amount": 0,
							"symbol": "₹"
						},
						"user": {
							"id": 318453699,
							"profilePic": [{
								"src": "https://userassets.dream11.com/fbprofilepic/07805506c338ff998ee41990932db786ad359c50_profilepic.jpg?timestamp=1773592200000"
							}],
							"officialTick": null
						}
					}, {
						"id": 15,
						"name": "JAY SUPERHEROES 1091912",
						"rank": 90,
						"points": 771.5,
						"rankChange": "NONE",
						"winningAmount": {
							"amount": 0,
							"symbol": "₹"
						},
						"user": {
							"id": 290422117,
							"profilePic": [{
								"src": "https://userassets.dream11.com/fbprofilepic/64ed2347a579fa9f746d125f4c09a5a11ee0bfc6_profilepic.jpg?timestamp=1773592200000"
							}],
							"officialTick": null
						}
					}, {
						"id": 1,
						"name": "Rite1615shJ",
						"rank": 90,
						"points": 771.5,
						"rankChange": "NONE",
						"winningAmount": {
							"amount": 0,
							"symbol": "₹"
						},
						"user": {
							"id": 34610491,
							"profilePic": [{
								"src": "https://userassets.dream11.com/fbprofilepic/b4a80c4a059f573fa70a5f540596160e00ce71f8_profilepic.jpg?timestamp=1773592200000"
							}],
							"officialTick": null
						}
					}, {
						"id": 3,
						"name": "k345tu",
						"rank": 90,
						"points": 771.5,
						"rankChange": "NONE",
						"winningAmount": {
							"amount": 0,
							"symbol": "₹"
						},
						"user": {
							"id": 69523848,
							"profilePic": [{
								"src": "https://userassets.dream11.com/fbprofilepic/051394a8696019c1e61d6d47493e9f50216267dd_profilepic.jpg?timestamp=1773592200000"
							}],
							"officialTick": null
						}
					}, {
						"id": 5,
						"name": "Rk Raja 369",
						"rank": 90,
						"points": 771.5,
						"rankChange": "NONE",
						"winningAmount": {
							"amount": 0,
							"symbol": "₹"
						},
						"user": {
							"id": 232689327,
							"profilePic": [{
								"src": "https://userassets.dream11.com/fbprofilepic/48550228d6a09ee1fc33df1f8840af1605860465_profilepic.jpg?timestamp=1773592200000"
							}],
							"officialTick": null
						}
					}, {
						"id": 1,
						"name": "Coobair XI",
						"rank": 96,
						"points": 771,
						"rankChange": "DEC",
						"winningAmount": {
							"amount": 0,
							"symbol": "₹"
						},
						"user": {
							"id": 25465738,
							"profilePic": [{
								"src": "https://userassets.dream11.com/fbprofilepic/5043d2e55df6f50aefa663f77224f5fef3682cf7_profilepic.jpg?timestamp=1773592200000"
							}],
							"officialTick": null
						}
					}, {
						"id": 6,
						"name": "Mallesh6",
						"rank": 96,
						"points": 771,
						"rankChange": "INC",
						"winningAmount": {
							"amount": 0,
							"symbol": "₹"
						},
						"user": {
							"id": 15276016,
							"profilePic": [{
								"src": "https://userassets.dream11.com/fbprofilepic/ae8e07629407188f5d2926fb5b4aebc87209b028_profilepic.jpg?timestamp=1773592200000"
							}],
							"officialTick": null
						}
					}, {
						"id": 8,
						"name": "Jgy Sreeram",
						"rank": 96,
						"points": 771,
						"rankChange": "INC",
						"winningAmount": {
							"amount": 0,
							"symbol": "₹"
						},
						"user": {
							"id": 35735401,
							"profilePic": [{
								"src": "https://userassets.dream11.com/fbprofilepic/7fed44a591cf83f8171926b58ac5d6d35bb3ab1b_profilepic.jpg?timestamp=1773592200000"
							}],
							"officialTick": null
						}
					}, {
						"id": 7,
						"name": "Avadh wariars",
						"rank": 96,
						"points": 771,
						"rankChange": "INC",
						"winningAmount": {
							"amount": 0,
							"symbol": "₹"
						},
						"user": {
							"id": 1034723,
							"profilePic": [{
								"src": "https://userassets.dream11.com/fbprofilepic/fb5ec77235ea2ab8e7de4635ba920833fcdd6cd5_profilepic.jpg?timestamp=1773592200000"
							}],
							"officialTick": null
						}
					}, {
						"id": 5,
						"name": "90khetri",
						"rank": 96,
						"points": 771,
						"rankChange": "INC",
						"winningAmount": {
							"amount": 0,
							"symbol": "₹"
						},
						"user": {
							"id": 48978936,
							"profilePic": [{
								"src": "https://userassets.dream11.com/fbprofilepic/02664829e492e0c195b7c3dc7e736f535b7eb93a_profilepic.jpg?timestamp=1773592200000"
							}],
							"officialTick": null
						}
					}],
					"pageInfo": {
						"endCursor": "{\"evtId\":176,\"nxtPg\":2}",
						"hasNextPage": true
					}
				}
			}
		}
	});
}
