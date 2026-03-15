import { NextResponse } from 'next/server';

/**
:method: POST
:path: /graphql/query/react-native/stream-section-query
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
content-length: 726
accept-encoding: gzip

{"query":"\n    query StreamSectionQuery($status: StreamStatus!, $creatorId: Int, $roundId: Int, $includeStreamerInfo: Boolean!) {\n  LiveStreams(status: $status, creatorId: $creatorId, roundId: $roundId) {\n    streamInfo {\n      liveStreamInfo {\n        id\n        status\n        title\n        startTime\n        thumbnailUrl\n        viewCount\n        roundId\n        tourId\n        matchStatus\n        squads {\n          id\n          shortName\n        }\n      }\n      streamerInfo @include(if: $includeStreamerInfo) {\n        id\n        userName\n        imageUrl\n        isVerified\n      }\n    }\n  }\n}\n    ","variables":{"status":"LIVE","creatorId":null,"roundId":112970,"includeStreamerInfo":true}}
*/
export async function POST() {
	return NextResponse.json({
		"data": {
			"LiveStreams": {
				"streamInfo": [{
					"liveStreamInfo": {
						"id": 4639,
						"status": "LIVE",
						"title": "Making Ipl 2026🔥 Playing XI ✅And Later Meme Reaction 🤣 Fun Game 🎮",
						"startTime": "2026-03-15T13:30:00.000Z",
						"thumbnailUrl": "https://djzdxrl34o3m.cloudfront.net/live-streaming/influencer/170911161/4639_1773581127.png",
						"viewCount": "547k",
						"roundId": 112970,
						"tourId": 5388,
						"matchStatus": "IN_PROGRESS",
						"squads": [{
							"id": 7456,
							"shortName": "KSO"
						}, {
							"id": 8257,
							"shortName": "RRP"
						}]
					},
					"streamerInfo": {
						"id": 170911161,
						"userName": "15RtxVivek",
						"imageUrl": "https://userassets.dream11.com/fbprofilepic/22c7a3576ab2fdc68ea2e27d7f16cada0e98f47d_profilepic.jpg?id=cc5992e0-d27e-11f0-bdca-b68b371bb6d4",
						"isVerified": true
					}
				}]
			}
		}
	});
}
