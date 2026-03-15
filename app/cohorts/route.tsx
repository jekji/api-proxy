import { NextResponse } from 'next/server';

export async function GET() {
	return NextResponse.json({
		"data": ["rider_take_rate_v2_cg", "AppLovin_20p_experiment", "AUSIND_Flag1_3", "rider_take_rate_tg"]
	});
}
