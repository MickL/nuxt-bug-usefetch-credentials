//https://nitro.unjs.io/config
export default defineNitroConfig({
    routeRules: {
        '**': {
            cors: true,
            headers: {
                'Access-Control-Allow-Origin': 'http://localhost:3000',
                'Access-Control-Allow-Credentials': 'true',
            }
        }
    }
});
