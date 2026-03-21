import { NextResponse } from 'next/server';
import { extractAndModifyHeaders } from '@/lib/changeHeader';

// /games
export async function GET(request: Request) {
	// const body = await request.json();

	const requestHeaders = extractAndModifyHeaders(request, process.env.API_URL || '');

	if (process.env.API_URL) {
		// Use real API to fetch data
		const apiURL = process.env.API_URL + "/games";
		try {
			const apiResponse = await fetch(apiURL, {
				method: 'GET',
				headers: requestHeaders,
			});

			if (!apiResponse.ok) {
				throw new Error(`API request failed: ${apiResponse.status}`);
			}

			const data = await apiResponse.json();

			console.log("games", JSON.stringify(data));

			return NextResponse.json(data);
		} catch (error) {
			console.error(`API request failed. URL: ${apiURL}, error: `, error);
			// Fall back to mock data if API fails
		}
	}

	return NextResponse.json([
	{
		"id": 1,
		"navAnimationDetails": null,
		"gameName": "cricket",
		"displayName": "Cricket",
		"imgUrl": "https://s3.amazonaws.com/pwaimages/imgs/site-cricket.svg",
		"status": 1,
		"gameId": 2,
		"iconImage": "https://d11.s3.amazonaws.com/contain/sportsicons/cricket.png",
		"selectedIconImage": "https://d11.s3.amazonaws.com/contain/sportsicons/cricket-active.png",
		"lightSportsIcon": "https://d13ir53smqqeyp.cloudfront.net/contain/sportsicons/cricket-light.svg",
		"darkSportsIcon": "https://d13ir53smqqeyp.cloudfront.net/contain/sportsicons/cricket-dark.svg",
		"sportsIconConfig": {
		"iconImage": "https://d13ir53smqqeyp.cloudfront.net/contain/new_home/Illustrations%20%26%20Icons/sports%20selector/default%20icons/cricket.webp",
		"emptyStateUrl": "https://d13ir53smqqeyp.cloudfront.net/contain/new_home/Empty%20States/Empty%20state%20for%20cricket.webp",
		"selectedIconImage": "https://d13ir53smqqeyp.cloudfront.net/contain/new_home/Illustrations%20%26%20Icons/sports%20selector/Active%20icons/cricket-filled.webp"
		},
		"WLSUrl": "www.dream11.com/cricket/",
		"WLSSlug": "cricket",
		"maxTeamsAllowed": 20,
		"gameConfig": {
		"gameId": 2,
		"configJson": {
			"multipliers": {
			"captain": 2,
			"vicecaptain": 1.5
			},
			"maxPlayers": 11,
			"maxCredits": 100,
			"maxPlayerPerTeam": 7,
			"typeDisplayOrder": [
			3,
			1,
			4,
			2
			],
			"playerRole": [
			{
				"id": 1,
				"artwork": [
				{
					"src": "https://assets.dream11.com/public/imgs/playerRoleArtwork/Captain_Default.svg"
				}
				],
				"name": "Captain",
				"pointMultiplier": 2,
				"shortName": "C",
				"color": "#F5A623"
			},
			{
				"id": 2,
				"artwork": [
				{
					"src": "https://assets.dream11.com/public/imgs/playerRoleArtwork/ViceCaptain_Default.svg"
				}
				],
				"name": "Vice Captain",
				"pointMultiplier": 1.5,
				"shortName": "VC",
				"color": "#4A90E2"
			}
			],
			"playerType": [
			{
				"gamePlayerPosition": "bt",
				"gamePlayerTypeId": 1,
				"displayName": "BAT",
				"gamePlayerType": "BAT",
				"gamePlayerTypeFull": "Batters",
				"minPlayers": 3,
				"maxPlayers": 6,
				"maxPlayerPerTeam": 6
			},
			{
				"gamePlayerPosition": "bw",
				"gamePlayerTypeId": 2,
				"displayName": "BOWL",
				"gamePlayerType": "BOWL",
				"gamePlayerTypeFull": "Bowlers",
				"minPlayers": 3,
				"maxPlayers": 6,
				"maxPlayerPerTeam": 6
			},
			{
				"gamePlayerPosition": "wc",
				"gamePlayerTypeId": 3,
				"displayName": "WK",
				"gamePlayerType": "WK",
				"gamePlayerTypeFull": "Wicket-Keepers",
				"minPlayers": 1,
				"maxPlayers": 4,
				"maxPlayerPerTeam": 4
			},
			{
				"gamePlayerPosition": "fd",
				"gamePlayerTypeId": 4,
				"displayName": "AR",
				"gamePlayerType": "ALL",
				"gamePlayerTypeFull": "All-Rounders",
				"minPlayers": 1,
				"maxPlayers": 4,
				"maxPlayerPerTeam": 4
			}
			],
			"fantasyScorCardHeaders": [
			{
				"name": "Announced/Sub",
				"fantasykey": "playing11points",
				"actualkey": "playing11",
				"isException": 0
			},
			{
				"name": "Runs",
				"fantasykey": "runsscoredpoints",
				"actualkey": "runsscored",
				"isException": 0
			},
			{
				"name": "4's",
				"fantasykey": "fourhitpoints",
				"actualkey": "fourhits",
				"isException": 0
			},
			{
				"name": "6's",
				"fantasykey": "sixhitspoints",
				"actualkey": "sixhits",
				"isException": 0
			},
			{
				"name": "S/R",
				"fantasykey": "strikeratepoint",
				"actualkey": "strikerate",
				"isException": 0
			},
			{
				"name": "Balls Faced",
				"fantasykey": "",
				"actualkey": "ballsfaced",
				"isException": 0
			},
			{
				"name": "30/50/100",
				"fantasykey": "scoredfiftypoints",
				"actualkey": "bonusrunsscored",
				"isException": 1
			},
			{
				"name": "Duck",
				"fantasykey": "negativepoint",
				"actualkey": "isduck",
				"isException": 0
			},
			{
				"name": "Overs Bowled",
				"fantasykey": "",
				"actualkey": "bowlingovers",
				"isException": 0
			},
			{
				"name": "Wickets",
				"fantasykey": "wicketpoints",
				"actualkey": "totalwicketstaken",
				"isException": 0
			},
			{
				"name": "LBW/Bowled Bonus",
				"fantasykey": "lbwbowledbonuspoint",
				"actualkey": "lbwbowledcount",
				"isException": 0
			},
			{
				"name": "2/3/4/5 Wicket Bonus",
				"fantasykey": "bonuspoint",
				"actualkey": "totalwicketstaken",
				"isException": 0
			},
			{
				"name": "Maiden Over",
				"fantasykey": "maidenoverpoints",
				"actualkey": "maidenover",
				"isException": 0
			},
			{
				"name": "E/R",
				"fantasykey": "economyratepoints",
				"actualkey": "economyrate",
				"isException": 0
			},
			{
				"name": "Catch",
				"fantasykey": "catchpoints",
				"actualkey": "catchtaken",
				"isException": 0
			},
			{
				"name": "Catch Bonus",
				"fantasykey": "catchbonuspoints",
				"actualkey": "catchbonus",
				"isException": 0
			},
			{
				"name": "Run Out/Stumping",
				"fantasykey": "runoutpoints",
				"actualkey": "runouttotal",
				"isException": 0
			},
			{
				"name": "Total",
				"fantasykey": "totalpoint",
				"actualkey": "totalpoint",
				"isException": 0
			}
			]
		}
		},
		"WLSConfig": {
		"externalSite": false,
		"showCashContests": true,
		"showWalletIcon": true,
		"showReferral": true,
		"showPracticeContests": true,
		"showFreeToPlayContests": false,
		"canCreateContest": true,
		"showGameBalance": false,
		"showAccountBalance": true,
		"teamPreview": "https://assets.dream11.com/public/imgs/cricket-artwork.svg",
		"contestHomePromotionalBanner": "",
		"noToursBanner": "",
		"externalSiteImage": "",
		"isExternalSite": false,
		"referralFPVScoreThreshold": 0.83,
		"contestFPVScoreThreshold": 1,
		"showDreamTeam": true,
		"teamCardBackground": "https://assets.dream11.com/public/imgs/cricket-team-card-background.png",
		"showSelPercent": true,
		"teamPreviewBackground": "https://assets.dream11.com/public/imgs/cricket_team_preview_background.png",
		"newTeamPreviewBackground": "https://pwaimages.dream11.com/public/imgs/cricket-team-preview-background-new.png",
		"teamPreviewOutline": "https://pwaimages.dream11.com/public/imgs/Cricket+-+overlay.png",
		"newTeamCardBackground": "https://pwaimages.dream11.com/public/imgs/cricket-team-card-background-new.png"
		},
		"teamCombTimesToShow": 0,
		"isLiveScoreCardEnabled": true,
		"fpsurl": "https://www.dream11.com/cricket/points-system-android",
		"wlsId": 1,
		"pcCache": true,
		"isExternalLink": false,
		"shouldOpenExternalLinkInApp": false,
		"externalUrl": "https://fantasy.india.nba.com/new/leagues?utm_medium=dream11_app&utm_source=android"
	}]);
}
