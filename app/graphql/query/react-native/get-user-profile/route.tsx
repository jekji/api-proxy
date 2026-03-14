import { NextResponse } from 'next/server';

export async function POST() {
	return NextResponse.json({
		"data": {
			"me": {
				"id": 319837692, 
				"teamName": "YANGLON HEARTBREAKERS", 
				"profilePic": [
					{
						"src": ""
					}
				]
			}
		}
	});
}
