import request from 'request-promise-native';

(async function() {
    try {
        const body = await request(`https://swapi.dev/api/people/1024/`, {json: true})
        const homeworld = await request(body.homeworld, {json: true});
        console.log(homeworld.name);    
    } catch(err) {
        console.error(err);
    }
        
})();
