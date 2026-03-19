import { BASEHEADERS } from '@/constants';
import { NextResponse } from 'next/server';

/**
:method: POST
:path: /graphql/mutation/react-native/create-user-team
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
content-length: 814
accept-encoding: gzip
cookie: __refreshToken=HnwZbqZGEOGRjPOhPtgpE0R8zkKWTE9u; dh_user_id=4c1e2720-2090-11f1-8bfe-cdefa134efa5

{"query":"\n    mutation CreateUserTeam($teamId: Int, $matchId: Int!, $players: [PlayerInput]!, $tourId: Int!, $site: String!, $substitutes: [SubstituteInput!], $sourceMetadata: CreateTeamSourceData) {\n  createUserTeam(\n    teamId: $teamId\n    matchId: $matchId\n    players: $players\n    tourId: $tourId\n    site: $site\n    substitutes: $substitutes\n    sourceMetadata: $sourceMetadata\n  ) {\n    id\n  }\n}\n    ","variables":{"teamId":-1,"matchId":113005,"tourId":5393,"site":"cricket","players":[{"id":197929,"role":null},{"id":10001,"role":{"id":2}},{"id":111108,"role":null},{"id":197925,"role":null},{"id":1930,"role":{"id":1}},{"id":9230,"role":null},{"id":11672,"role":null},{"id":177771,"role":null},{"id":16088,"role":null},{"id":185090,"role":null},{"id":156698,"role":null}],"substitutes":[]}}

{
	"query": "\n    mutation CreateUserTeam($teamId: Int, $matchId: Int!, $players: [PlayerInput]!, $tourId: Int!, $site: String!, $substitutes: [SubstituteInput!], $sourceMetadata: CreateTeamSourceData) {\n  createUserTeam(\n    teamId: $teamId\n    matchId: $matchId\n    players: $players\n    tourId: $tourId\n    site: $site\n    substitutes: $substitutes\n    sourceMetadata: $sourceMetadata\n  ) {\n    id\n  }\n}\n    ",
	"variables": {
		"teamId": -1,
		"matchId": 113005,
		"tourId": 5393,
		"site": "cricket",
		"players": [{
			"id": 197929,
			"role": null
		}, {
			"id": 10001,
			"role": {
				"id": 2
			}
		}, {
			"id": 111108,
			"role": null
		}, {
			"id": 197925,
			"role": null
		}, {
			"id": 1930,
			"role": {
				"id": 1
			}
		}, {
			"id": 9230,
			"role": null
		}, {
			"id": 11672,
			"role": null
		}, {
			"id": 177771,
			"role": null
		}, {
			"id": 16088,
			"role": null
		}, {
			"id": 185090,
			"role": null
		}, {
			"id": 156698,
			"role": null
		}],
		"substitutes": []
	}
}

*/
export async function POST(request: Request) {
	const body = await request.json();
	const { query, variables } = body;
	
	if (process.env.WWW_GRAPHAL_URL) {
		// Use real API to fetch data
		try {
			const apiURL = process.env.WWW_GRAPHAL_URL + "/graphql/mutation/react-native/create-user-team";
			const response = await fetch(apiURL, {
				method: 'POST',
				headers: BASEHEADERS,
				body: JSON.stringify({
					query,
					variables
				}),
				// Next.js 特有缓存配置：每 60 秒刷新一次数据
				next: { revalidate: 60 }
			});
			
			if (!response.ok) {
				throw new Error(`API request failed: ${response.status}, url: ${apiURL}, headers: ${JSON.stringify(BASEHEADERS)}`);
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
			"createUserTeam": {
				"id": 1
			}
		}
	});
}
