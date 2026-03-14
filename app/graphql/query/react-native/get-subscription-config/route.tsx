import { NextResponse } from 'next/server';

export async function POST() {
	return NextResponse.json({
		"data": {
			"getSubscriptionConfig": {
				"amount": 5000,
				"duration": 30
			}
		}
	});
}
