import { NextResponse } from 'next/server';

/**
{
	"query": "\n    query UserPropertiesQuery {\n  me {\n    userType\n    userProperties {\n      allowSmsNotification\n      commEmailId\n      country\n      currentAccountBalance\n      currentCashBonusBalance\n      currentDepositBalance\n      currentWinningsBalance\n      dateOfBirth\n      firstName\n      email\n      familyId\n      fpvScore\n      isCommEmailVerified\n      isMobileVerified\n      phone\n      refId\n      regFromWlsId\n      registrationSource\n      state\n      teamName\n      userId\n      userSegment\n      utmFullString\n    }\n    state {\n      id\n    }\n    geoStateId\n  }\n}\n    ",
	"variables": {}
}
*/
export async function POST() {
	return NextResponse.json({
		"data": {
			"me": {
				"userType": "NORMAL",
				"userProperties": {
					"allowSmsNotification": 1,
					"commEmailId": "tonyasimmysb57@gmail.com",
					"country": "",
					"currentAccountBalance": 0,
					"currentCashBonusBalance": 0,
					"currentDepositBalance": 0,
					"currentWinningsBalance": 0,
					"dateOfBirth": "0000-00-00",
					"firstName": "",
					"email": "tonyasimmysb57@gmail.com",
					"familyId": 320199858,
					"fpvScore": 0,
					"isCommEmailVerified": 1,
					"isMobileVerified": 0,
					"phone": "",
					"refId": 0,
					"regFromWlsId": 1,
					"registrationSource": "APSEC",
					"state": "",
					"teamName": "TONYASI LEADERS",
					"userId": 320199858,
					"userSegment": 1,
					"utmFullString": "utm_source=Organic&utm_medium=Organic&utm_campaign=&utm_term=Organic&utm_content=&utm_retarget=null&utm_retarget_content=null&utm_appstore=null&ccode=0&utm_ad_id=&utm_campaign_id="
				},
				"state": null,
				"geoStateId": null
			}
		}
	});
}
