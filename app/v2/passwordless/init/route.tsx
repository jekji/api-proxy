import { NextResponse } from 'next/server';

/**
:method: POST
:path: /v2/passwordless/init
:authority: api.dream11.com
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
content-type: application/json
content-length: 741
accept-encoding: gzip

{"flow":"signinup","response_type":"token","contacts":[{"channel":"email","identifier":"aaronth44.44@gmail.com","template":{"name":"otp_d11","params":{}}}],"client_id":"a8EsDlPc3ZCVgsUpppuc","countryCode":"US","utm_source":"Organic","utm_medium":"Organic","utm_campaign":"Organic","utm_term":"","utm_content":"","utm_ref":"","utm_retarget":null,"utm_retarget_content":null,"ccode":null,"fb_source":null,"gclid":null,"invited_by":null,"referral":null,"refsite":null,"utm_appstore":null,"vserv":null,"device":"Pixel 6a","deviceId":"2d016ea7f014d06c","deviceIMEI":"2d016ea7f014d06c","appId":null,"appsFlyerId":null,"appsFlyerChannelName":null,"deviceMAC":null,"rooted":null,"segmentAnonymousId":null,"IsFromLogin":null,"signedAttestation":null}
*/
export async function POST() {
	return NextResponse.json({
		"tries": 0,
		"retries_left": 5,
		"resends": 0,
		"resends_left": 5,
		"resend_after": 1773591270,
		"state": "pQDIRgruCq",
		"message": "New OTP sent. You have 5 attempt(s) left."
	});
}
