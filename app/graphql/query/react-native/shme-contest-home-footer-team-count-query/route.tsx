import { NextResponse } from 'next/server';

/**
{
	"query": "\n    query ShmeContestHomeFooterTeamCountQuery($site: String!, $matchId: Int!) {\n  match(site: $site, id: $matchId) {\n    userTeamsCount\n    userTeams {\n      id\n    }\n  }\n}\n    ",
	"variables": {
		"matchId": 112993,
		"site": "cricket"
	}
}
 */
export async function POST() {
	return NextResponse.json({
		"data": {
			"match": {
				"userTeamsCount": 0,
				"userTeams": []
			}
		}
	});
}
