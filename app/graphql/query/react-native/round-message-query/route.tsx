import { NextResponse } from 'next/server';

/**
{
	"query": "\n    query RoundMessageQuery($site: String!, $matchId: Int!) {\n  match(site: $site, id: $matchId) {\n    userMessage\n  }\n}\n    ",
	"variables": {
		"site": "cricket",
		"matchId": 112993
	}
}
 */
export async function POST() {
	return NextResponse.json({
		"data": {
			"match": {
				"userMessage": ""
			}
		}
	});
}
