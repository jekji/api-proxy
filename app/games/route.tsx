import { NextResponse } from 'next/server';

// /games
export async function GET(request: Request) {
	
	return NextResponse.json({
		"games": []
	});
}
