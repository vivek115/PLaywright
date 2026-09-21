async function getToken(page) {
    if (!page) {
        throw new Error('getToken(page) requires a Playwright page instance');
    }

    const token = await page.evaluate(() => {
        const rawAuth = localStorage.getItem('auth');
        if (rawAuth) {
            try {
                const auth = JSON.parse(rawAuth);
                if (auth && typeof auth === 'object') {
                    return auth.token || auth.accessToken || auth.access_token || null;
                }
            } catch (_) {
                // Ignore malformed JSON and try fallback keys.
            }
        }

        const fallbackKeys = ['token', 'accessToken', 'access_token', 'idToken', 'id_token', 'jwt'];
        for (const key of fallbackKeys) {
            const value = localStorage.getItem(key) || sessionStorage.getItem(key);
            if (value) {
                return value;
            }
        }

        return null;
    });

    return token;
}

async function getWRAPIResponse() {
    this.page.waitForResponse(response =>
        response.url().includes('/warehouse-receipt') &&
        response.request().method() === 'GET' &&
        response.ok()
    ),
        this.page.reload()
    const apiData = await wrResponse.json();
    const apiCount = Number(apiData.totalCount);
    return { apiData, apiCount };

}

module.exports = { getToken };
