import { NextResponse } from 'next/server';

/**
:method: POST
:path: /graphql/query/react-native/profile-details-query
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
content-length: 477
accept-encoding: gzip

{"query":"\n    query ProfileDetailsQuery {\n  phoneSyncPrivacySettings {\n    status\n  }\n  states {\n    name\n    id\n    isBanned\n  }\n  me {\n    id\n    emailId\n    name\n    mobileNumber\n    dob\n    gender\n    verified\n    isMobileVerified\n    address\n    city\n    zipcode\n    state {\n      id\n      name\n    }\n    country {\n      name\n    }\n    userProperties {\n      allowSmsNotification\n    }\n    stateChangeAllowed\n  }\n}\n    ","variables":{}}

{
	"query": "\n    query ProfileDetailsQuery {\n  phoneSyncPrivacySettings {\n    status\n  }\n  states {\n    name\n    id\n    isBanned\n  }\n  me {\n    id\n    emailId\n    name\n    mobileNumber\n    dob\n    gender\n    verified\n    isMobileVerified\n    address\n    city\n    zipcode\n    state {\n      id\n      name\n    }\n    country {\n      name\n    }\n    userProperties {\n      allowSmsNotification\n    }\n    stateChangeAllowed\n  }\n}\n    ",
	"variables": {}
}

*/
export async function POST() {
	return NextResponse.json({
		"data": {
			"phoneSyncPrivacySettings": {
				"status": false
			},
			"states": [{
				"name": "Andhra Pradesh",
				"id": 1,
				"isBanned": true
			}, {
				"name": "Arunachal Pradesh",
				"id": 2,
				"isBanned": false
			}, {
				"name": "Bihar",
				"id": 4,
				"isBanned": false
			}, {
				"name": "Chhattisgarh",
				"id": 5,
				"isBanned": false
			}, {
				"name": "Goa",
				"id": 6,
				"isBanned": false
			}, {
				"name": "Gujarat",
				"id": 7,
				"isBanned": false
			}, {
				"name": "Haryana",
				"id": 8,
				"isBanned": false
			}, {
				"name": "Himachal Pradesh",
				"id": 9,
				"isBanned": false
			}, {
				"name": "Jammu and Kashmir",
				"id": 10,
				"isBanned": false
			}, {
				"name": "Jharkhand",
				"id": 11,
				"isBanned": false
			}, {
				"name": "Karnataka",
				"id": 12,
				"isBanned": false
			}, {
				"name": "Kerala",
				"id": 13,
				"isBanned": false
			}, {
				"name": "Madhya Pradesh",
				"id": 14,
				"isBanned": false
			}, {
				"name": "Maharashtra",
				"id": 15,
				"isBanned": false
			}, {
				"name": "Manipur",
				"id": 16,
				"isBanned": false
			}, {
				"name": "Meghalaya",
				"id": 17,
				"isBanned": false
			}, {
				"name": "Mizoram",
				"id": 18,
				"isBanned": false
			}, {
				"name": "Nagaland",
				"id": 19,
				"isBanned": true
			}, {
				"name": "Punjab",
				"id": 21,
				"isBanned": false
			}, {
				"name": "Rajasthan",
				"id": 22,
				"isBanned": false
			}, {
				"name": "Sikkim",
				"id": 23,
				"isBanned": true
			}, {
				"name": "Tamil Nadu",
				"id": 24,
				"isBanned": false
			}, {
				"name": "Tripura",
				"id": 25,
				"isBanned": false
			}, {
				"name": "Uttar Pradesh",
				"id": 26,
				"isBanned": false
			}, {
				"name": "Uttarakhand",
				"id": 27,
				"isBanned": false
			}, {
				"name": "West Bengal",
				"id": 28,
				"isBanned": false
			}, {
				"name": "Andaman and Nicobar Islands",
				"id": 29,
				"isBanned": false
			}, {
				"name": "Chandigarh",
				"id": 30,
				"isBanned": false
			}, {
				"name": "Dadra and Nagar Haveli",
				"id": 31,
				"isBanned": false
			}, {
				"name": "Daman and Diu",
				"id": 32,
				"isBanned": false
			}, {
				"name": "Lakshadweep",
				"id": 33,
				"isBanned": false
			}, {
				"name": "Delhi",
				"id": 34,
				"isBanned": false
			}, {
				"name": "Puducherry",
				"id": 35,
				"isBanned": false
			}, {
				"name": "Telangana",
				"id": 98,
				"isBanned": true
			}, {
				"name": "Assam",
				"id": 115,
				"isBanned": true
			}, {
				"name": "Odisha",
				"id": 116,
				"isBanned": false
			}, {
				"name": "Ladakh",
				"id": 123,
				"isBanned": false
			}],
			"me": {
				"id": 317152330,
				"emailId": "aaronth44.44@gmail.com",
				"name": "Babbu Kumar",
				"mobileNumber": "7569309825",
				"dob": "1999-09-11T00:00:00.000Z",
				"gender": null,
				"verified": "IN_PROGRESS",
				"isMobileVerified": true,
				"address": "",
				"city": null,
				"zipcode": null,
				"state": null,
				"country": null,
				"userProperties": {
					"allowSmsNotification": 1
				},
				"stateChangeAllowed": true
			}
		}
	});
}
