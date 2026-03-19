import { NextResponse } from 'next/server';
import { tokenManager } from '@/lib/token-manager';

export async function POST(request: Request) {
	const body = await request.json();
	const { client_id } = body;
	
	// 优先从文件中读取现有token
	const existingToken = tokenManager.getToken(client_id);
	
	if (existingToken) {
		// 如果存在token，直接返回
		return NextResponse.json({
			"access_token": existingToken.access_token,
			"token_type": existingToken.token_type,
			"expires_in": existingToken.expires_in
		});
	}
	
	// 如果没有token，使用默认值并保存
	const responseData = {
		"access_token": "eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCIsInR5cCI6ImF0K2p3dCIsImtpZCI6IlRqb0FsLVdyZWN3Z3MtZVVvcm5xWWE5Y2x4dyJ9.eyJhdWQiOiJhOEVzRGxQYzNaQ1Znc1VwcHB1YyIsImV4cCI6MTc3MzYzMTQ2NywiaWF0IjoxNzczNTQ1MDY3LCJpc3MiOiJkcmVhbTExLmNvbSIsInN1YiI6IjMyMDE5OTg1OCIsImp0aSI6IjVqM3U4OVFNeFpNZG5tMXRsUXExVE5QenpGbnBGRGpmIiwidGlkIjoiMiIsInJmdF9pZCI6Ijc2NjYxMTYzODVGMzhEMUZGMjhFODBBNkQ1MTREM0Y0IiwiY2xpZW50X2lkIjoiYThFc0RsUGMzWkNWZ3NVcHBwdWMiLCJzY29wZSI6ImRyZWFtMTE6YWxsIiwiYW1yIjpbIm90cCJdLCJjb3VudHJ5Q29kZSI6IlVTIn0.QTfxN08TdhvuPEhZNVDyHmUDOpEN3N3XkgKl7tvRgx5A-3Wr4jQBdi9TW61RFYOPtJVt8dh-sxngrMPEDuHOcf-7-35gdD3NJmfc_Zim7umGjjm6U_aGF_2WSs10qp7e4dhAooeth2JEanpHAfUsf85SEThGTpSUBDKBaMg4Ly6V3T2D1hLb1EDxQNvLetcmBzJagOHu34SjTSEdWVbRTCWtwwvoklx1SyM7Ci34Z6H4Uioo5o1lisTtzyn6f74IkNoURQCiwYTZCS45h6-yKpBH4gsIsbG5gY0qvnYWKIfNBCcfSed9131iEn8zLEgvnWVlofrMLu7XPdEaHZFENQ",
		"token_type": "Bearer",
		"expires_in": 86400
	};
	return NextResponse.json(responseData);
}
