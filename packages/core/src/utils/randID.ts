export function randID() {
	return crypto.randomUUID().substring(0, 6);
}
