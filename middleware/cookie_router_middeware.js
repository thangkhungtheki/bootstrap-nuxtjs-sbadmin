export default async ({ app }) => {
    app.$cookiz.set('cookie-name', 'cookie-value', {
        path: '/',
        maxAge: 60 * 60 * 24 * 7
    });
}