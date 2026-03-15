import { NextResponse } from 'next/server';

/**
{
	"query": "\n    query ContestHomeQuery($site: String!, $tourId: Int!, $matchId: Int!, $limit: Int, $shouldFetchSquads: Boolean = false, $slotType: [SlotTypeContest!] = [], $promotionalMediaEnabled: Boolean = true) {\n  site(slug: $site) {\n    maxTeamsAllowed\n  }\n  match(site: $site, id: $matchId) {\n    name\n    id\n    startTime\n    status\n    lineupStatus\n    squads @include(if: $shouldFetchSquads) {\n      flag {\n        src\n      }\n      squadColorPalette\n      shortName\n    }\n    userTeamsCount\n  }\n  contestSections(\n    site: $site\n    matchId: $matchId\n    tourId: $tourId\n    withPromotions: true\n    isLiteRequest: false\n  ) {\n    id\n    name\n    description\n    totalContestCount\n    displayContestCount\n    tag {\n      text\n    }\n    sectionType\n    displayContests {\n      ...ContestSectionItem\n    }\n  }\n}\n    \n    fragment ContestSectionItem on Contest {\n  campaignSlot(slotType: $slotType) @include(if: $promotionalMediaEnabled) {\n    slotType\n    mediaType\n    mediaUrl\n  }\n  convertedCampaignSlot(slotType: $slotType) @include(if: $promotionalMediaEnabled) {\n    slotType\n    mediaType\n    mediaUrl\n  }\n  contestTag\n  contestTypeDisplayText\n  adConfig {\n    dealType\n  }\n  spotsDisplayText\n  explanation\n  joinedTeamsCount\n  contestName\n  convertedContestName\n  contestCategory\n  contestType\n  contestSize\n  currentSize\n  isPartnerContest\n  behaviour\n  id\n  productId\n  inviteCode\n  isGuaranteed\n  isMultipleEntry\n  numberOfWinners\n  winnerPercent\n  maxAllowedTeams\n  isFreeEntry\n  prizeDisplayText\n  convertedPrizeDisplayText\n  hasJoined\n  joinedTeamsCount\n  winnerBreakupContestHomeV2 {\n    amount {\n      amount\n      code\n      symbol\n    }\n    convertedAmount {\n      amount\n      code\n      symbol\n    }\n    convertedPrizeDisplayText\n    prizeDisplayText\n    show\n    startRank\n    endRank\n    winnerPercent\n    imageUrl\n  }\n  winnerBreakup(limit: $limit) {\n    prizeDisplayText\n    amount {\n      amount\n      symbol\n    }\n  }\n  prizeAmount {\n    amount\n    symbol\n  }\n  match {\n    startTime\n  }\n}\n    ",
	"variables": {
		"matchId": 112993,
		"site": "cricket",
		"tourId": 5391,
		"shouldFetchSquads": true,
		"slotType": ["CONTEST_CARD_PRE_RL"],
		"promotionalMediaEnabled": true,
		"limit": 10
	}
}
 */
export async function POST() {
	return NextResponse.json({
		"data": {
			"site": {
				"maxTeamsAllowed": 40
			},
			"match": {
				"name": "NZ vs SA",
				"id": 112993,
				"startTime": "2026-03-15T06:15:00.000Z",
				"status": "NOT_STARTED",
				"lineupStatus": "LINEUP_EXPECTED",
				"squads": [{
					"flag": [{
						"src": "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/NZ-CR1@2x.png"
					}],
					"squadColorPalette": "#4f67a3",
					"shortName": "NZ"
				}, {
					"flag": [{
						"src": "https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/RSA-CR1@2x.png"
					}],
					"squadColorPalette": "#53a784",
					"shortName": "SA"
				}],
				"userTeamsCount": 0
			},
			"contestSections": [{
				"id": 86,
				"name": "",
				"description": "",
				"totalContestCount": 8,
				"displayContestCount": 30,
				"tag": null,
				"sectionType": "CONTEST",
				"displayContests": [{
					"campaignSlot": null,
					"convertedCampaignSlot": null,
					"contestTag": "BD,NP,OM,MY,LK,SG,AE,US,AU,NZ,CA,ZA,GB,HK",
					"contestTypeDisplayText": "",
					"adConfig": {
						"dealType": "PROGRAMMATIC"
					},
					"spotsDisplayText": "50,000",
					"explanation": null,
					"joinedTeamsCount": 0,
					"contestName": "Free to Play",
					"convertedContestName": "Free To Play",
					"contestCategory": "FREE",
					"contestType": "public",
					"contestSize": 50000,
					"currentSize": 50,
					"isPartnerContest": false,
					"behaviour": "STATIC",
					"id": "9309562296",
					"productId": "37889",
					"inviteCode": "nmal1arsmjwra-",
					"isGuaranteed": true,
					"isMultipleEntry": true,
					"numberOfWinners": 1,
					"winnerPercent": 100,
					"maxAllowedTeams": 20,
					"isFreeEntry": false,
					"prizeDisplayText": "₹0",
					"convertedPrizeDisplayText": "$0.00",
					"hasJoined": false,
					"winnerBreakupContestHomeV2": [],
					"winnerBreakup": [],
					"prizeAmount": {
						"amount": 0,
						"symbol": "₹"
					},
					"match": {
						"startTime": "2026-03-15T06:15:00.000Z"
					}
				}]
			}]
		}
	});
}
