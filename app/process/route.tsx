import { NextResponse } from 'next/server';

export async function GET() {
	return new NextResponse("success", {
		status: 200,
		headers: {
			'Content-Type': 'text/plain'
		}
	});
}
