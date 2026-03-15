import { NextResponse } from 'next/server';

/**
:method: POST
:path: /graphql/query/react-native/home-feed-query
:authority: app.dream11.com
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
content-length: 794
accept-encoding: gzip

{"query":"\n    query HomeFeedQuery($sectionOrder: Int, $exclusiveStreamIds: [Int!], $roundId: Int) {\n  liveStreamsHome(\n    nextSectionOrder: $sectionOrder\n    exclusiveStreamIds: $exclusiveStreamIds\n    roundId: $roundId\n  ) {\n    streams {\n      id\n      streamStartTime\n      streamTitle\n      playbackUrl\n      thumbnailUrl\n      viewerCount\n      viewerCountFormatted\n      userInfo {\n        id\n        name\n        imageUrl\n      }\n      squads {\n        id\n        shortName\n      }\n    }\n    sections {\n      name\n      streamIds\n      renderType\n      showViewAll\n      sectionId\n    }\n    paginationInfo {\n      nextSectionOrder\n      exclusiveStreamIds\n    }\n  }\n}\n    ","variables":{"sectionOrder":null,"exclusiveStreamIds":[],"roundId":null}}
 */
export async function POST() {
	return NextResponse.json({
		"data": {
			"liveStreamsHome": {
				"streams": [{
					"id": 4334,
					"streamStartTime": "1773673200000",
					"streamTitle": "P1's F1 Fantasy Review Show",
					"playbackUrl": "",
					"thumbnailUrl": "https://djzdxrl34o3m.cloudfront.net/live-streaming/influencer/319379078/4334_1773075887.png",
					"viewerCount": 0,
					"viewerCountFormatted": "0",
					"userInfo": {
						"id": 319379078,
						"name": "P1 with Matt and Tommy",
						"imageUrl": "https://userassets.dream11.com/fbprofilepic/ba05c840ccd7723dcd4922918daa94d3436aaf74_profilepic.jpg?id=c42b28a0-1409-11f1-aae8-5f94d651407e"
					},
					"squads": []
				}, {
					"id": 4481,
					"streamStartTime": "1773736200000",
					"streamTitle": "Chinese GP Race Review || Drivers To Survive",
					"playbackUrl": "",
					"thumbnailUrl": "https://djzdxrl34o3m.cloudfront.net/live-streaming/influencer/319713998/4481_1773317170.png",
					"viewerCount": 0,
					"viewerCountFormatted": "0",
					"userInfo": {
						"id": 319713998,
						"name": "DRIVERS TO SURVIVE",
						"imageUrl": "https://userassets.dream11.com/fbprofilepic/42b1bc4d0274e4a2ebedcb994da38235d8bf0b0f_profilepic.jpg?id=cec7d7e0-1a08-11f1-b4fa-49a82becee47"
					},
					"squads": []
				}, {
					"id": 4501,
					"streamStartTime": "1773673200000",
					"streamTitle": "F1 Chinese GP Review",
					"playbackUrl": "",
					"thumbnailUrl": "https://djzdxrl34o3m.cloudfront.net/live-streaming/influencer/319517586/4501_1773328187.png",
					"viewerCount": 0,
					"viewerCountFormatted": "0",
					"userInfo": {
						"id": 319517586,
						"name": "INPHRATIC",
						"imageUrl": "https://userassets.dream11.com/fbprofilepic/fafa709d2aec39ecfe750dcd1b71323be0ccd4d5_profilepic.jpg?id=6dc87120-17dd-11f1-8088-1cd73023cb5d"
					},
					"squads": []
				}, {
					"id": 4514,
					"streamStartTime": "1773705600000",
					"streamTitle": "chinese grand prix weekend review",
					"playbackUrl": "",
					"thumbnailUrl": "https://djzdxrl34o3m.cloudfront.net/live-streaming/influencer/319535945/4514_1773332610.png",
					"viewerCount": 0,
					"viewerCountFormatted": "0",
					"userInfo": {
						"id": 319535945,
						"name": "average f1 consumer",
						"imageUrl": "https://userassets.dream11.com/fbprofilepic/fdbbcf28bd571355e305806dfd9376ed58f28558_profilepic.jpg?id=64470300-171a-11f1-be22-f47561b4bf71"
					},
					"squads": []
				}, {
					"id": 4562,
					"streamStartTime": "1773653700000",
					"streamTitle": "In The Net - Premier League Weekend Round-Up",
					"playbackUrl": "",
					"thumbnailUrl": "https://djzdxrl34o3m.cloudfront.net/live-streaming/influencer/319520646/4562_1773408447.jpeg",
					"viewerCount": 0,
					"viewerCountFormatted": "0",
					"userInfo": {
						"id": 319520646,
						"name": "IN THE NET Podcast",
						"imageUrl": "https://userassets.dream11.com/fbprofilepic/8d0f67bf6083f302ea157bfa40c487b0ca3140b7_profilepic.jpg?id=0448b510-164e-11f1-960f-cde46a22a100"
					},
					"squads": []
				}, {
					"id": 4563,
					"streamStartTime": "1773945300000",
					"streamTitle": "In The Net - Champions Leage Round-Up",
					"playbackUrl": "",
					"thumbnailUrl": "https://djzdxrl34o3m.cloudfront.net/live-streaming/influencer/319520646/4563_1773408717.jpeg",
					"viewerCount": 0,
					"viewerCountFormatted": "0",
					"userInfo": {
						"id": 319520646,
						"name": "IN THE NET Podcast",
						"imageUrl": "https://userassets.dream11.com/fbprofilepic/8d0f67bf6083f302ea157bfa40c487b0ca3140b7_profilepic.jpg?id=0448b510-164e-11f1-960f-cde46a22a100"
					},
					"squads": []
				}, {
					"id": 4586,
					"streamStartTime": "1773648000000",
					"streamTitle": "Cricket Unfiltered - Judge MacGill In Session",
					"playbackUrl": "",
					"thumbnailUrl": "https://djzdxrl34o3m.cloudfront.net/live-streaming/influencer/319074736/4586_1773457563.png",
					"viewerCount": 0,
					"viewerCountFormatted": "0",
					"userInfo": {
						"id": 319074736,
						"name": "Cricket Unfiltered",
						"imageUrl": "https://userassets.dream11.com/fbprofilepic/f838ed11b284f924c290d4102e05eab34ce8be10_profilepic.jpg?id=ecb05590-116e-11f1-b230-44b094b7abf9"
					},
					"squads": []
				}, {
					"id": 4599,
					"streamStartTime": "1773666000000",
					"streamTitle": "The Hundred + IPL Chat | Wicketers Show",
					"playbackUrl": "",
					"thumbnailUrl": "https://djzdxrl34o3m.cloudfront.net/live-streaming/influencer/317276288/4599_1773482525.png",
					"viewerCount": 0,
					"viewerCountFormatted": "0",
					"userInfo": {
						"id": 317276288,
						"name": "Wicketers",
						"imageUrl": "https://userassets.dream11.com/fbprofilepic/54a0b1d676487de7fff291cdd95f5dbe8c2df6bb_profilepic.jpg?id=d0ebca30-dc0b-11f0-ba8f-5e0e8ad99dd4"
					},
					"squads": [{
						"id": 8256,
						"shortName": "ICN"
					}, {
						"id": 6580,
						"shortName": "SSS"
					}]
				}, {
					"id": 4612,
					"streamStartTime": "1773594000000",
					"streamTitle": "Football quizzes & MORE!",
					"playbackUrl": "",
					"thumbnailUrl": "https://djzdxrl34o3m.cloudfront.net/live-streaming/influencer/319376679/4612_1773501163.png",
					"viewerCount": 0,
					"viewerCountFormatted": "0",
					"userInfo": {
						"id": 319376679,
						"name": "Jack Caulfield",
						"imageUrl": "https://userassets.dream11.com/fbprofilepic/6280e9b115fa2490951f6da5579e57ee3829d645_profilepic.jpg?id=c9624040-1c8a-11f1-b94a-8db7a7968089"
					},
					"squads": []
				}, {
					"id": 4615,
					"streamStartTime": "1773579699000",
					"streamTitle": "PREMIER LEAGUE  MARATHON",
					"playbackUrl": "https://3ad7f5a23d4f.ap-south-1.playback.live-video.net/api/video/v1/ap-south-1.944380855954.channel.6Oz3MD6qsPwH.m3u8",
					"thumbnailUrl": "https://djzdxrl34o3m.cloudfront.net/live-streaming/influencer/320100508/4615_1773520905.png",
					"viewerCount": 131242,
					"viewerCountFormatted": "131k",
					"userInfo": {
						"id": 320100508,
						"name": "Minus17 ",
						"imageUrl": "https://userassets.dream11.com/fbprofilepic/a4ce7a0087705b76358a442c7edf644e922e0dd9_profilepic.jpg?id=82f927d0-1cae-11f1-869b-5a5b8f7a72b0"
					},
					"squads": [{
						"id": 25,
						"shortName": "BAN"
					}, {
						"id": 192,
						"shortName": "PAK"
					}]
				}, {
					"id": 4633,
					"streamStartTime": "1773649800000",
					"streamTitle": "REDEMPTION? 🇿🇦 | The Wicketers Show",
					"playbackUrl": "",
					"thumbnailUrl": "https://djzdxrl34o3m.cloudfront.net/live-streaming/influencer/317276288/4633_1773568131.png",
					"viewerCount": 0,
					"viewerCountFormatted": "0",
					"userInfo": {
						"id": 317276288,
						"name": "Wicketers",
						"imageUrl": "https://userassets.dream11.com/fbprofilepic/54a0b1d676487de7fff291cdd95f5dbe8c2df6bb_profilepic.jpg?id=d0ebca30-dc0b-11f0-ba8f-5e0e8ad99dd4"
					},
					"squads": [{
						"id": 186,
						"shortName": "NZ"
					}, {
						"id": 212,
						"shortName": "SA"
					}]
				}, {
					"id": 4635,
					"streamStartTime": "1773673200000",
					"streamTitle": "LIVE FOOTBALL CHALLENGES",
					"playbackUrl": "",
					"thumbnailUrl": "https://djzdxrl34o3m.cloudfront.net/live-streaming/influencer/320117940/4635_1773575827.jpeg",
					"viewerCount": 0,
					"viewerCountFormatted": "0",
					"userInfo": {
						"id": 320117940,
						"name": "Razzamataza",
						"imageUrl": "https://userassets.dream11.com/fbprofilepic/041f495b43b966cc024df93ab627fab1c5af4614_profilepic.jpg?id=6fd87810-1d51-11f1-8971-8a440c9e6972"
					},
					"squads": []
				}, {
					"id": 4639,
					"streamStartTime": "1773581709000",
					"streamTitle": "Making Ipl 2026🔥 Playing XI ✅And Later Meme Reaction 🤣 Fun Game 🎮",
					"playbackUrl": "https://3ad7f5a23d4f.ap-south-1.playback.live-video.net/api/video/v1/ap-south-1.944380855954.channel.dUNGq9mWIYZV.m3u8",
					"thumbnailUrl": "https://djzdxrl34o3m.cloudfront.net/live-streaming/influencer/170911161/4639_1773581127.png",
					"viewerCount": 499213,
					"viewerCountFormatted": "499k",
					"userInfo": {
						"id": 170911161,
						"name": "15RtxVivek",
						"imageUrl": "https://userassets.dream11.com/fbprofilepic/22c7a3576ab2fdc68ea2e27d7f16cada0e98f47d_profilepic.jpg?id=cc5992e0-d27e-11f0-bdca-b68b371bb6d4"
					},
					"squads": [{
						"id": 7456,
						"shortName": "KSO"
					}, {
						"id": 8257,
						"shortName": "RRP"
					}]
				}, {
					"id": 4644,
					"streamStartTime": "1773582260000",
					"streamTitle": "PAK vs BAN - Let's Talk Cricket",
					"playbackUrl": "https://3ad7f5a23d4f.ap-south-1.playback.live-video.net/api/video/v1/ap-south-1.944380855954.channel.wMZoQukpspqL.m3u8",
					"thumbnailUrl": "https://djzdxrl34o3m.cloudfront.net/live-streaming/influencer/83055897/4644_1773582228.png",
					"viewerCount": 75861,
					"viewerCountFormatted": "75k",
					"userInfo": {
						"id": 83055897,
						"name": "Clubcricketbadger",
						"imageUrl": "https://userassets.dream11.com/fbprofilepic/9e55e20299dcb704fefb6358cd971135a3fb9eb5_profilepic.jpg?id=656c2810-d27c-11f0-a44b-ce2a43e73449"
					},
					"squads": [{
						"id": 25,
						"shortName": "BAN"
					}, {
						"id": 192,
						"shortName": "PAK"
					}]
				}, {
					"id": 4646,
					"streamStartTime": "1773658800000",
					"streamTitle": "Aajao IPL discuss karte hai!",
					"playbackUrl": "",
					"thumbnailUrl": "https://djzdxrl34o3m.cloudfront.net/live-streaming/influencer/318739579/4646_1773584277.jpeg",
					"viewerCount": 0,
					"viewerCountFormatted": "0",
					"userInfo": {
						"id": 318739579,
						"name": "JUGAAD XI with Joel ",
						"imageUrl": "https://userassets.dream11.com/fbprofilepic/4ffeea9d823b1aebbcb3a398a33710e8c126f9ae_profilepic.jpg?id=195f1730-08ae-11f1-b707-cd2758e88ffe"
					},
					"squads": [{
						"id": 8256,
						"shortName": "ICN"
					}, {
						"id": 6580,
						"shortName": "SSS"
					}]
				}, {
					"id": 4648,
					"streamStartTime": "1773589580000",
					"streamTitle": "LIVE PS5 GAMING STREAM",
					"playbackUrl": "https://3ad7f5a23d4f.ap-south-1.playback.live-video.net/api/video/v1/ap-south-1.944380855954.channel.Ajeqkz20hfQj.m3u8",
					"thumbnailUrl": "https://djzdxrl34o3m.cloudfront.net/live-streaming/influencer/317155160/4648_1773587848.png",
					"viewerCount": 22347,
					"viewerCountFormatted": "22k",
					"userInfo": {
						"id": 317155160,
						"name": "Jake Jeakings",
						"imageUrl": "https://userassets.dream11.com/fbprofilepic/10f192bc3f18801627ba91fc76207d2aea0fcd04_profilepic.jpg?id=82140a70-f60b-11f0-9075-c2a42356781e"
					},
					"squads": [{
						"id": 25,
						"shortName": "BAN"
					}, {
						"id": 192,
						"shortName": "PAK"
					}]
				}],
				"sections": [{
					"name": "Recommended for you",
					"streamIds": [4648, 4615, 4644, 4639],
					"renderType": "WATCH_ALONG_SECTION",
					"showViewAll": null,
					"sectionId": 2
				}, {
					"name": "Coming Soon",
					"streamIds": [4586, 4633, 4599, 4334, 4514, 4635, 4646, 4612, 4562, 4563, 4481, 4501],
					"renderType": "UPCOMING_SECTION",
					"showViewAll": null,
					"sectionId": 9
				}, {
					"name": "Explore all Creators",
					"streamIds": [],
					"renderType": "EXPLORE_CREATOR",
					"showViewAll": null,
					"sectionId": 11
				}],
				"paginationInfo": {
					"nextSectionOrder": null,
					"exclusiveStreamIds": []
				}
			}
		}
	});
}
