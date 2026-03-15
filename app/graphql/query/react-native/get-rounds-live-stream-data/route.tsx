import { NextResponse } from 'next/server';

/**
{
	"query": "\n    query GetRoundsLiveStreamData($roundId: Int!) {\n  GetStreamsForRound(roundId: $roundId)\n  GetTotalStreams\n}\n    ",
	"variables": {
		"roundId": 112993
	}
}
 */
export async function POST() {
	return NextResponse.json({
		"data": {
			"GetStreamsForRound": 0,
			"GetTotalStreams": 0
		}
	});
}
