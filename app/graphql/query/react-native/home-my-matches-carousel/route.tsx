import { NextResponse } from 'next/server';

/**
{
	"query": "\n    query HomeMyMatchesCarousel($showJoinCount: Boolean = true, $carouselClickThreshold: Int = 1) {\n  matches: newHomeMyMatches(\n    pageNo: 0\n    first: 20\n    isMatchCarousel: true\n    carouselClickThreshold: $carouselClickThreshold\n  ) {\n    edges {\n      ...MyMatchesMatchData\n    }\n  }\n}\n    \n    fragment MyMatchesMatchData on Match {\n  id\n  name\n  startTime\n  matchDetail\n  myMatchesJoinedContestCount @include(if: $showJoinCount)\n  winningsAmount @include(if: $showJoinCount)\n  myMatchesUserTeamsCount @include(if: $showJoinCount)\n  status\n  lineupStatus\n  isFantasyLiveMatchAvailable\n  matchHighlight {\n    text\n    color\n  }\n  squads {\n    squadColorPalette\n    id\n    name\n    shortName\n    flag {\n      src\n    }\n    flagWithName {\n      src\n    }\n    fullName\n  }\n  tour {\n    id\n    name\n    format\n    tourDisplayTag\n  }\n  sportInfo {\n    slug\n    wlsId\n  }\n}\n    ",
	"variables": {
		"showJoinCount": true,
		"carouselClickThreshold": 1
	}
}
 */
export async function POST() {
	return NextResponse.json({
		"data": {
			"matches": {
				"edges": []
			}
		}
	});
}
