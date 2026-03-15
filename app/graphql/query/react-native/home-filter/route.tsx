import { NextResponse } from 'next/server';

/**
{
	"query": "\n    query HomeFilter($statuses: [MatchStatus], $source: String) {\n  homeMatchFilters(statuses: $statuses, source: $source) {\n    edges {\n      id\n      startTime\n      status\n      lineupAnnouncedTime\n      lineupStatus\n      matchHighlight {\n        text\n        color\n      }\n      squads {\n        id\n        shortName\n        flag {\n          src\n        }\n        squadColorPalette\n        fullName\n      }\n      tour {\n        id\n        name\n        slug\n        format\n      }\n      sportInfo {\n        slug\n        wlsId\n        gameId\n      }\n    }\n  }\n}\n    ",
	"variables": {
		"statuses": ["NOT_STARTED", "IN_PROGRESS", "COMPLETED", "ABANDONED", "WAITING_FOR_REVIEW"],
		"source": "home"
	}
}
*/
export async function POST() {
	return NextResponse.json({
		"data": {
			"homeMatchFilters": {
				"edges": []
			}
		}
	});
}
