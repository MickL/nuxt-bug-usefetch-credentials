export default defineEventHandler(event => {
    setCookie(event, 'my-cookie', 'hello world :)', {
        maxAge: 60 * 60,
        sameSite: 'lax'
    });

    return 'ok';
});
