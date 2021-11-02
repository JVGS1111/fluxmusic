import axios from 'axios'

//import addOAuthInterceptor from 'axios-oauth-1.0a';
// interface optionsProp {
//     algorithm: 'HMAC-SHA1' | 'HMAC-SHA256'
//     key: string,
//     secret: string,
//     token: string,
//     tokenSecret: string
// }
// const options: optionsProp = {
//     algorithm: 'HMAC-SHA1',
//     key: '56832ec8af7784d1f77219caffaa95a5c55917c4',
//     secret: '7bccd1712615b2674152dc4c504fbe90b7034428',
//     token: '0efff7dd09e05cf34feb7b2169988344cca0a9e0',
//     tokenSecret: 'fdff3bb7993d0ab8bb15cc19d198ea66548c7545'
// };
// addOAuthInterceptor(api, options);

export const api = axios.create({
    baseURL: 'http://api.music-story.com/en',
});

