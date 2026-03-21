
export function extractAndModifyHeaders(request: Request, host: string) {
	// Extract headers from the incoming request
	const requestHeaders = Object.fromEntries(request.headers.entries());

	console.log(`Origin Headers: ${JSON.stringify(requestHeaders)}`);

	requestHeaders['atlas'] = 'IN';
	requestHeaders['locale'] = 'en-US';

	requestHeaders['host'] = host?.replace('https://', '').replace('http://', '') || '';

	// 移除不需要的headers
	const headersToRemove = [
		'cdn-loop',
		'cf-connecting-ip',
		'cf-ipcountry',
		'cf-ray',
		'cf-visitor',
		'x-forwarded-for',
		'x-forwarded-host',
		'x-forwarded-port',
		'x-forwarded-proto',
		'x-original-uri',
		'x-real-ip',
		"accept-encoding",
		"accept",
		"content-length",
		'connection'
	];

	headersToRemove.forEach(key => delete requestHeaders[key]);

	console.log(`Changed Headers: ${JSON.stringify(requestHeaders)}`);

	return requestHeaders;
}