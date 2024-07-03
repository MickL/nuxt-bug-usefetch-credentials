export default defineEventHandler(async (event) => {
    const cookie = getCookie(event, 'my-cookie');

    console.log(cookie);
});
