import { NextResponse } from 'next/server';

/**
:method: POST
:path: /graphql/query/react-native/get-live-streams-v3
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
authorization: Bearer eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCIsInR5cCI6ImF0K2p3dCIsImtpZCI6IlRqb0FsLVdyZWN3Z3MtZVVvcm5xWWE5Y2x4dyJ9.eyJhdWQiOiJhOEVzRGxQYzNaQ1Znc1VwcHB1YyIsImV4cCI6MTc3Mzk4MTMxMiwiaWF0IjoxNzczODk0OTEyLCJpc3MiOiJkcmVhbTExLmNvbSIsInN1YiI6IjMxNzE1MjMzMCIsImp0aSI6ImNxMXVVM1BFZE1uUUp6cWZ0Q1o5TFFFREJIUEI0RjRGIiwidGlkIjoiMiIsInJmdF9pZCI6IjBGQkFEMUQ5RjFENzdGOTlFQjdFNzAzM0IzQ0RFREVGIiwiY2xpZW50X2lkIjoiYThFc0RsUGMzWkNWZ3NVcHBwdWMiLCJzY29wZSI6ImRyZWFtMTE6YWxsIiwiYW1yIjpbIm90cCJdLCJjb3VudHJ5Q29kZSI6IklOIn0.ophd7044L0x2fuMACySsnsbSZwOMVmYVop2KKP5WYj4nqkiZf2ubu74WQS5OOGvuCColxFU_sxDaxDpwEsMU0r5RxUtvo2UrNBvwYJLVjrYQx9Lt6w7pMBMgjhbvvBSR7RiifrjtLQWxJxSddOOlrZZ-_gfWsVOD50kfiulIrLwrOEponca_-VOrdUNZjoz7RElAzMdjxYdtSv8YRnNwdnxTBX7wmhlKBG0PfMPvRiY0z6fFGfnkYiMsGgtHvQ7-UtBvfQhMS4Bzq2bDAj2zJS1D-mwR5e5IwScGMbq3hHSUHwacZ3iGW_SIsLLsEP66sxhA-cJQydXIj8odthL1Bw
content-type: application/json
content-length: 847
accept-encoding: gzip

{
	"query": "\n    query GetLiveStreamsV3($roundId: Int, $currStreamId: Int, $currSectionId: Int, $exclusiveStreamIds: [Int!]) {\n  LiveStreamsV3(\n    roundId: $roundId\n    currStreamId: $currStreamId\n    currSectionId: $currSectionId\n    exclusiveStreamIds: $exclusiveStreamIds\n  ) {\n    streamInfo {\n      liveStreamInfo {\n        id\n        status\n        title\n        startTime\n        thumbnailUrl\n        playbackUrl\n        viewCount\n        roundId\n        tourId\n        matchStatus\n        squads {\n          id\n          shortName\n        }\n      }\n      streamerInfo {\n        id\n        userName\n        imageUrl\n        isVerified\n      }\n    }\n    paginationInfo {\n      exclusiveStreamIds\n    }\n  }\n}\n    ",
	"variables": {
		"roundId": null,
		"currStreamId": null,
		"currSectionId": 2,
		"exclusiveStreamIds": []
	}
}

*/
export async function POST(request: Request) {
	return NextResponse.json({
		"data": {
			"LiveStreamsV3": {
				"streamInfo": [{
					"liveStreamInfo": {
						"id": 4806,
						"status": "UPCOMING",
						"title": "🚨 GT IPL 2026 Preview: Gill-Sai-Buttler & Pray? 👀",
						"startTime": "2026-03-19T05:23:41.000Z",
						"thumbnailUrl": "https://djzdxrl34o3m.cloudfront.net/live-streaming/influencer/228217691/4806_1773855446.jpeg",
						"playbackUrl": "https://3ad7f5a23d4f.ap-south-1.playback.live-video.net/api/video/v1/ap-south-1.944380855954.channel.FpQnW5E604BD.m3u8",
						"viewCount": "50k",
						"roundId": 112924,
						"tourId": 5380,
						"matchStatus": "NOT_STARTED",
						"squads": [{
							"id": 1754,
							"shortName": "NWD"
						}, {
							"id": 3562,
							"shortName": "WEP"
						}]
					},
					"streamerInfo": {
						"id": 228217691,
						"userName": "13ishancriccrak",
						"imageUrl": "https://userassets.dream11.com/fbprofilepic/1c34fb6b431951582ff26febd340f84760bda2a7_profilepic.jpg?id=f4eb2d00-05c7-11f1-9ab8-98394c5136d4",
						"isVerified": true
					}
				}, {
					"liveStreamInfo": {
						"id": 4812,
						"status": "UPCOMING",
						"title": "🔴 Entertainment, Fun & Music with our Almost Family 🔴",
						"startTime": "2026-03-19T04:59:20.000Z",
						"thumbnailUrl": "https://djzdxrl34o3m.cloudfront.net/live-streaming/influencer/251815/4812_1773896250.png",
						"playbackUrl": "https://3ad7f5a23d4f.ap-south-1.playback.live-video.net/api/video/v1/ap-south-1.944380855954.channel.EQu0qcDjjGEb.m3u8",
						"viewCount": "38k",
						"roundId": 112924,
						"tourId": 5380,
						"matchStatus": "NOT_STARTED",
						"squads": [{
							"id": 1754,
							"shortName": "NWD"
						}, {
							"id": 3562,
							"shortName": "WEP"
						}]
					},
					"streamerInfo": {
						"id": 251815,
						"userName": "Almost Sports ",
						"imageUrl": "https://userassets.dream11.com/fbprofilepic/d338076fc766fcf5c5777108081d6c440721ed7c_profilepic.jpg?id=fb68bf70-1a5e-11f1-998b-bf76f0a6b6de",
						"isVerified": true
					}
				}],
				"paginationInfo": {
					"exclusiveStreamIds": []
				}
			}
		}
	});
}
