import { NextResponse } from 'next/server';

// {
// 	"email": "tonyasimmysb57@gmail.com"
// }
export async function POST() {
	return NextResponse.json({
		"flow": "signinup",
		"timestamp": 1773544476812
	});
}
