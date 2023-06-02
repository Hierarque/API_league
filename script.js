const API_KEY = "RGAPI-7441d917-3663-47db-b258-6b88b22766b1";

let request = "https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + "HugoHinn" + "?api_key=" + API_KEY;

fetch(request).
    then(response => console.log(response));