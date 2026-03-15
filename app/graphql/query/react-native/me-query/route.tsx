import { NextResponse } from 'next/server';

/**
{
	"query": "\n    query MeQuery {\n  me {\n    id\n    emailId\n    userType\n    teamName\n    showOnboarding\n    verified\n    name\n    isMobileVerified\n    userSegment\n    mobileNumber\n    referralCode\n    firstNameV1\n    utmRef\n    utmSource\n    countryCode\n    state {\n      id\n      name\n    }\n    firebaseKey {\n      firebaseProjectName\n      firebaseProjectApiKey\n      firebaseProjectDbUrl\n    }\n    geoStateId\n  }\n}\n    "
}
 */
export async function POST() {
	return NextResponse.json({
		"data": {
			"me": {
				"id": 320199858,
				"emailId": "tonyasimmysb57@gmail.com",
				"userType": "NORMAL",
				"teamName": "TONYASI LEADERS",
				"showOnboarding": true,
				"verified": "NOT_VERIFIED",
				"name": "",
				"isMobileVerified": false,
				"userSegment": 1,
				"mobileNumber": "",
				"referralCode": "TONYAS16QR",
				"firstNameV1": "",
				"utmRef": "0",
				"utmSource": "Organic",
				"countryCode": "US",
				"state": null,
				"firebaseKey": {
					"firebaseProjectName": "dream11prj",
					"firebaseProjectApiKey": "ILRMZohvUOCb6/evps8ZWpxX9Fb/adCEc5tWJEH4nsvttOTLfCcAhkNYOAWK7VOt",
					"firebaseProjectDbUrl": "https://dream11prj-a9e4f.firebaseio.com/"
				},
				"geoStateId": null
			}
		}
	});
}
