const API_KEY = 'RGAPI-7441d917-3663-47db-b258-6b88b22766b1';

var summoner_name = 'HugoHinn';

let request = 'https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/' + summoner_name + '?api_key=' + API_KEY;

console.log(request);
// fetch des informations de l'utilisateur au dessus
fetch(request)
    .then((res) => res.json())
    .then(response => console.log(response));