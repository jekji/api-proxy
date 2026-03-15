import { NextResponse } from 'next/server';

/**
:method: POST
:path: /graphql/query/react-native/followed-or-explore-creators-query
:authority: app.dream11.com
:scheme: https
accept: application/json
device: androidplaystore
devicetype: ANDROID
deviceid: 4ef884b2fa253561
ek1: 20b5af02ef48d284421013e2805583c0cead9b88edd1a75ca28c4fbed9aaeb8c
ek2: 20b5af02ef48d284421013e2805583c0cead9b88edd1a75ca28c4fbed9aaeb8c
x-manufacturer: google
x-os-version: 16
x-os-type: android
x-app-version-name: 750
app_version: 7.5.0
a1: 614e36446e37123af3c5d3abaeea845c7dee7da41a96a337b5dafd468acfeea7
version: 10045
user-agent: Dream11/7.5.0 (Linux; Android 36; Pixel 6a) Build/10045
siteid: 1
locale: en-US
authorization: Bearer eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCIsInR5cCI6ImF0K2p3dCIsImtpZCI6IlRqb0FsLVdyZWN3Z3MtZVVvcm5xWWE5Y2x4dyJ9.eyJhdWQiOiJhOEVzRGxQYzNaQ1Znc1VwcHB1YyIsImV4cCI6MTc3MzYzMTQ2NywiaWF0IjoxNzczNTQ1MDY3LCJpc3MiOiJkcmVhbTExLmNvbSIsInN1YiI6IjMyMDE5OTg1OCIsImp0aSI6IjVqM3U4OVFNeFpNZG5tMXRsUXExVE5QenpGbnBGRGpmIiwidGlkIjoiMiIsInJmdF9pZCI6Ijc2NjYxMTYzODVGMzhEMUZGMjhFODBBNkQ1MTREM0Y0IiwiY2xpZW50X2lkIjoiYThFc0RsUGMzWkNWZ3NVcHBwdWMiLCJzY29wZSI6ImRyZWFtMTE6YWxsIiwiYW1yIjpbIm90cCJdLCJjb3VudHJ5Q29kZSI6IlVTIn0.QTfxN08TdhvuPEhZNVDyHmUDOpEN3N3XkgKl7tvRgx5A-3Wr4jQBdi9TW61RFYOPtJVt8dh-sxngrMPEDuHOcf-7-35gdD3NJmfc_Zim7umGjjm6U_aGF_2WSs10qp7e4dhAooeth2JEanpHAfUsf85SEThGTpSUBDKBaMg4Ly6V3T2D1hLb1EDxQNvLetcmBzJagOHu34SjTSEdWVbRTCWtwwvoklx1SyM7Ci34Z6H4Uioo5o1lisTtzyn6f74IkNoURQCiwYTZCS45h6-yKpBH4gsIsbG5gY0qvnYWKIfNBCcfSed9131iEn8zLEgvnWVlofrMLu7XPdEaHZFENQ
content-type: application/json
content-length: 459
accept-encoding: gzip

{"query":"\n    query FollowedOrExploreCreatorsQuery($followedCount: Int!, $unfollowedCount: Int!) {\n  followedCreatorsOrAll(\n    followedCount: $followedCount\n    unfollowedCount: $unfollowedCount\n  ) {\n    section\n    users {\n      userInfo {\n        id\n        teamName\n        profilePicUrl\n        isVerified\n        shortBio\n      }\n      isLive\n      isFollowing\n    }\n  }\n}\n    ","variables":{"followedCount":4,"unfollowedCount":5}}
*/
export async function POST() {
	return NextResponse.json({
		"data": {
			"followedCreatorsOrAll": {
				"section": "exploreCreators",
				"users": [{
					"userInfo": {
						"id": 79781832,
						"teamName": "12thmancornerbyDiya",
						"profilePicUrl": "https://userassets.dream11.com/fbprofilepic/33a0bdcb241cb6ee3556bff239a94134b9ef68d4_profilepic.jpg?id=0543ace0-0a87-11f1-8bbb-6ce2d0d2afcc",
						"isVerified": true,
						"shortBio": "Match masti"
					},
					"isLive": false,
					"isFollowing": false
				}, {
					"userInfo": {
						"id": 228217691,
						"teamName": "13ishancriccrak",
						"profilePicUrl": "https://userassets.dream11.com/fbprofilepic/1c34fb6b431951582ff26febd340f84760bda2a7_profilepic.jpg?id=f4eb2d00-05c7-11f1-9ab8-98394c5136d4",
						"isVerified": true,
						"shortBio": "Story teller"
					},
					"isLive": false,
					"isFollowing": false
				}, {
					"userInfo": {
						"id": 170911161,
						"teamName": "15RtxVivek",
						"profilePicUrl": "https://userassets.dream11.com/fbprofilepic/22c7a3576ab2fdc68ea2e27d7f16cada0e98f47d_profilepic.jpg?id=cc5992e0-d27e-11f0-bdca-b68b371bb6d4",
						"isVerified": true,
						"shortBio": "Cricket Edge"
					},
					"isLive": true,
					"isFollowing": false
				}, {
					"userInfo": {
						"id": 317904785,
						"teamName": "2 Sloggers",
						"profilePicUrl": "https://userassets.dream11.com/fbprofilepic/f9c59b6803b759f0e93d551e5b7fed718cfefdd8_profilepic.jpg?id=66e05b80-f43c-11f0-b2a2-75a0e1526a93",
						"isVerified": true,
						"shortBio": "Senior cric fan"
					},
					"isLive": false,
					"isFollowing": false
				}, {
					"userInfo": {
						"id": 101288279,
						"teamName": "4forTwo",
						"profilePicUrl": "https://userassets.dream11.com/fbprofilepic/9d217dd130934e646cc111383043c5c1a04c6eb8_profilepic.jpg?id=d4a76ac0-fa98-11f0-9019-6b775760a787",
						"isVerified": true,
						"shortBio": "Irreverence Max"
					},
					"isLive": false,
					"isFollowing": false
				}]
			}
		}
	});
}
