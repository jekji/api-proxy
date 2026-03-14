import { NextResponse } from 'next/server';

export async function POST() {
	return NextResponse.json({
		"data": {
			"me": {
				"profilePic": [
					{
						"src": ""
					}
				], 
				"teamName": "YANGLON HEARTBREAKERS"
			}
		}
	});
}
