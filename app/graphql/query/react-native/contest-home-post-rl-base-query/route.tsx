import { NextResponse } from 'next/server';

/**
{
	"query": "\n    query ContestHomeTabsQuery($site: String!, $matchId: Int!, $fetchLineupsData: Boolean = false, $shouldFetchFlags: Boolean = false) {\n  match(site: $site, id: $matchId) {\n    name\n    joinedContestsCount\n    status\n    isContestStatAvailable\n    startTime\n    isFantasyLiveMatchAvailable\n    isFantasyCommentaryAvailable\n    displayLineupOrder\n    substitutionInfo {\n      maxSubsAllowed\n    }\n    roundLineupStatus @include(if: $fetchLineupsData)\n    squads @include(if: $shouldFetchFlags) {\n      flag {\n        src\n        height\n        width\n        type\n      }\n      flagWithName {\n        src\n        height\n        width\n        type\n      }\n      id\n      name\n      fullName\n      shortName\n    }\n  }\n}\n    ",
	"variables": {
		"matchId": 112993,
		"site": "cricket",
		"fetchLineupsData": true,
		"shouldFetchFlags": false
	}
}
 */
export async function POST() {
	return NextResponse.json({
		"data": {
			"match": {
				"name": "NZ vs SA",
				"joinedContestsCount": 0,
				"status": "NOT_STARTED",
				"isContestStatAvailable": true,
				"startTime": "2026-03-15T06:15:00.000Z",
				"isFantasyLiveMatchAvailable": null,
				"isFantasyCommentaryAvailable": false,
				"displayLineupOrder": false,
				"substitutionInfo": {
					"maxSubsAllowed": 4
				},
				"roundLineupStatus": "LINEUPS_EXPECTED"
			}
		}
	});
}
