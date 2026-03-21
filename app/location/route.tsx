import { NextResponse } from 'next/server';

export async function GET() {
	// return NextResponse.json({ country: 'SG' });
	return NextResponse.json({ state: 'MH', country: 'IN' });
	// return NextResponse.json({ state: 'MH', country: 'IN', city: 'Mumbai' });
}
