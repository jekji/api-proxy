import { NextResponse } from 'next/server';

/**
:method: POST
:path: /graphql/query/react-native/creators-for-you-query
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
content-length: 282
accept-encoding: gzip

{"query":"\n    query creatorsForYouQuery($count: Int!) {\n  creatorsForYou(count: $count) {\n    userInfo {\n      id\n      teamName\n      shortBio\n      profilePicUrl\n      isVerified\n      userType\n    }\n    isFollowing\n    isLive\n  }\n}\n    ","variables":{"count":16}}
 */
export async function POST() {
	return NextResponse.json({
		"data": {
			"creatorsForYou": [{
				"userInfo": {
					"id": 260432868,
					"teamName": "Pahul Walia",
					"shortBio": "Roast Mode On",
					"profilePicUrl": "https://userassets.dream11.com/fbprofilepic/f700d5ba3c472e754e2de2ffb6a4b9b21702ae40_profilepic.jpg?id=cc9cb430-d4e0-11f0-80f9-e7860362cdb7",
					"isVerified": true,
					"userType": "CREATOR"
				},
				"isFollowing": false,
				"isLive": false
			}, {
				"userInfo": {
					"id": 317155160,
					"teamName": "Jake Jeakings",
					"shortBio": "BEST SLEDGE… GO",
					"profilePicUrl": "https://userassets.dream11.com/fbprofilepic/10f192bc3f18801627ba91fc76207d2aea0fcd04_profilepic.jpg?id=82140a70-f60b-11f0-9075-c2a42356781e",
					"isVerified": true,
					"userType": "CREATOR"
				},
				"isFollowing": false,
				"isLive": true
			}, {
				"userInfo": {
					"id": 128862716,
					"teamName": "HarshNagar",
					"shortBio": "Mazedaar Stuff",
					"profilePicUrl": "https://userassets.dream11.com/fbprofilepic/909e0217e9810d054d00c0d0b0be7edf24f2d52c_profilepic.jpg?id=a1a43920-d02f-11f0-903e-beb552741e24",
					"isVerified": true,
					"userType": "CREATOR"
				},
				"isFollowing": false,
				"isLive": false
			}, {
				"userInfo": {
					"id": 318739630,
					"teamName": "CricAstro2026",
					"shortBio": "Cosmic Cricket",
					"profilePicUrl": "https://userassets.dream11.com/fbprofilepic/8e2c4f596e093fbbdb3781d1b9af4175d51c2762_profilepic.jpg?id=62932c20-08ae-11f1-aed7-c4c07e0e10cf",
					"isVerified": true,
					"userType": "CREATOR"
				},
				"isFollowing": false,
				"isLive": false
			}, {
				"userInfo": {
					"id": 285655500,
					"teamName": "SPORTS YAARI",
					"shortBio": "Funny Banters",
					"profilePicUrl": "https://userassets.dream11.com/fbprofilepic/9d2bd683e89e86aea9169565de6d422c1d536a04_profilepic.jpg?id=9bb91770-fe9b-11f0-8cba-0fb9f00745ff",
					"isVerified": true,
					"userType": "CREATOR"
				},
				"isFollowing": false,
				"isLive": false
			}, {
				"userInfo": {
					"id": 34366328,
					"teamName": "Ravs1007",
					"shortBio": "Cricket Bhokali",
					"profilePicUrl": "https://userassets.dream11.com/fbprofilepic/239435c018fddb99088ef07f4eb32478b120d585_profilepic.jpg?id=b10253a0-d031-11f0-af78-28425760fa15",
					"isVerified": true,
					"userType": "CREATOR"
				},
				"isFollowing": false,
				"isLive": false
			}, {
				"userInfo": {
					"id": 99728914,
					"teamName": "SKB Shots",
					"shortBio": "Masti Muchatlu",
					"profilePicUrl": "https://userassets.dream11.com/fbprofilepic/8a5c971729deebb55cd12516a61132b6efc6d6ec_profilepic.jpg?id=59a15bc0-d030-11f0-806c-31b650d1d271",
					"isVerified": true,
					"userType": "CREATOR"
				},
				"isFollowing": false,
				"isLive": false
			}, {
				"userInfo": {
					"id": 20753873,
					"teamName": "Karunesh Talwar",
					"shortBio": "Faaltu baatein",
					"profilePicUrl": "https://userassets.dream11.com/fbprofilepic/c1c09c4d19b3d2ea53409a745383422a0211a254_profilepic.jpg?id=07785ca0-ed3a-11f0-a5fd-2ba0e9f20c62",
					"isVerified": true,
					"userType": "CREATOR"
				},
				"isFollowing": false,
				"isLive": false
			}, {
				"userInfo": {
					"id": 319074736,
					"teamName": "Cricket Unfiltered",
					"shortBio": "Menners/MacGill",
					"profilePicUrl": "https://userassets.dream11.com/fbprofilepic/f838ed11b284f924c290d4102e05eab34ce8be10_profilepic.jpg?id=ecb05590-116e-11f1-b230-44b094b7abf9",
					"isVerified": true,
					"userType": "CREATOR"
				},
				"isFollowing": false,
				"isLive": false
			}, {
				"userInfo": {
					"id": 318135038,
					"teamName": "ashwinravi99",
					"shortBio": "No Nonsense",
					"profilePicUrl": "https://userassets.dream11.com/fbprofilepic/58ffb2afe936b7437c5c60b30aab7d628f537bdc_profilepic.jpg?id=9c067030-f6b0-11f0-a953-a947a9467ddd",
					"isVerified": true,
					"userType": "CREATOR"
				},
				"isFollowing": false,
				"isLive": false
			}, {
				"userInfo": {
					"id": 11661350,
					"teamName": "Kandy G",
					"shortBio": "Super fun",
					"profilePicUrl": "https://userassets.dream11.com/fbprofilepic/ff614667b1a92c48cc3be1d61d0522f09c5803d9_profilepic.jpg?id=6b5a4e60-f06c-11f0-8303-3b1b865f4e7d",
					"isVerified": true,
					"userType": "CREATOR"
				},
				"isFollowing": false,
				"isLive": false
			}, {
				"userInfo": {
					"id": 280884995,
					"teamName": "The Cricket Queen",
					"shortBio": "Unfiltered",
					"profilePicUrl": "https://userassets.dream11.com/fbprofilepic/e064c8836ef791d21887a9baee88131fc26a02da_profilepic.jpg?id=32838480-d41f-11f0-8f85-9c6279e85a72",
					"isVerified": true,
					"userType": "CREATOR"
				},
				"isFollowing": false,
				"isLive": false
			}, {
				"userInfo": {
					"id": 318475597,
					"teamName": "KV vs Anirban ",
					"shortBio": "Trivia & Banter",
					"profilePicUrl": "https://userassets.dream11.com/fbprofilepic/19e49397eba44afa90aa49c953de820d58caccad_profilepic.jpg?id=45f46820-0013-11f1-bfa5-4a6fd35e3782",
					"isVerified": true,
					"userType": "CREATOR"
				},
				"isFollowing": false,
				"isLive": false
			}, {
				"userInfo": {
					"id": 317276288,
					"teamName": "Wicketers",
					"shortBio": "Cricket Show",
					"profilePicUrl": "https://userassets.dream11.com/fbprofilepic/54a0b1d676487de7fff291cdd95f5dbe8c2df6bb_profilepic.jpg?id=d0ebca30-dc0b-11f0-ba8f-5e0e8ad99dd4",
					"isVerified": true,
					"userType": "CREATOR"
				},
				"isFollowing": false,
				"isLive": false
			}, {
				"userInfo": {
					"id": 2575918,
					"teamName": "Indian Cricket Comedy",
					"shortBio": "Lockdown Kid",
					"profilePicUrl": "https://userassets.dream11.com/fbprofilepic/1f11c612b3203fc4c4db8d34682ecd44d29bcb9a_profilepic.jpg?id=fc68a750-d030-11f0-a389-806f8582e0d2",
					"isVerified": true,
					"userType": "CREATOR"
				},
				"isFollowing": false,
				"isLive": false
			}, {
				"userInfo": {
					"id": 101288279,
					"teamName": "4forTwo",
					"shortBio": "Irreverence Max",
					"profilePicUrl": "https://userassets.dream11.com/fbprofilepic/9d217dd130934e646cc111383043c5c1a04c6eb8_profilepic.jpg?id=d4a76ac0-fa98-11f0-9019-6b775760a787",
					"isVerified": true,
					"userType": "CREATOR"
				},
				"isFollowing": false,
				"isLive": false
			}]
		}
	});
}
