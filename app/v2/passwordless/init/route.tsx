import { NextResponse } from 'next/server';

// {
// 	"flow": "signinup",
// 	"response_type": "token",
// 	"contacts": [{
// 		"channel": "email",
// 		"identifier": "tonyasimmysb57@gmail.com",
// 		"template": {
// 			"name": "otp_d11",
// 			"params": {}
// 		}
// 	}],
// 	"client_id": "a8EsDlPc3ZCVgsUpppuc",
// 	"countryCode": "US",
// 	"utm_source": "Organic",
// 	"utm_medium": "Organic",
// 	"utm_campaign": "Organic",
// 	"utm_term": "",
// 	"utm_content": "",
// 	"utm_ref": "",
// 	"utm_retarget": null,
// 	"utm_retarget_content": null,
// 	"ccode": null,
// 	"fb_source": null,
// 	"gclid": null,
// 	"invited_by": null,
// 	"referral": null,
// 	"refsite": null,
// 	"utm_appstore": null,
// 	"vserv": null,
// 	"device": "Pixel 6a",
// 	"deviceId": "2d016ea7f014d06c",
// 	"deviceIMEI": "2d016ea7f014d06c",
// 	"appId": null,
// 	"appsFlyerId": null,
// 	"appsFlyerChannelName": null,
// 	"deviceMAC": null,
// 	"rooted": null,
// 	"segmentAnonymousId": null,
// 	"IsFromLogin": null,
// 	"signedAttestation": null
// }
export async function POST() {
	return NextResponse.json({
		"tries": 0,
		"retries_left": 5,
		"resends": 0,
		"resends_left": 5,
		"resend_after": 1773544798,
		"state": "L9NxcJfTOm",
		"message": "New OTP sent. You have 5 attempt(s) left."
	});
}
