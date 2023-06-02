const body = document.querySelector('.body');

const API_KEY = 'RGAPI-7441d917-3663-47db-b258-6b88b22766b1';

const query_string = window.location.search;
const urlParams = new URLSearchParams(query_string);

const summoner_name = urlParams.get('name');

let request = 'https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/' + summoner_name + '?api_key=' + API_KEY;

//  fonction qui affiche un profile en prenant les informations nécessaires en paramètres
function display_profile(main_container, name, icon_id, level){

    const profile_container = document.createElement("div");
    const username = document.createElement("p");
    const user_icon = document.createElement("p");
    const user_level = document.createElement("p");

    const username_text = 'Name : ' + name;
    const icon_text = 'Profile icon id : ' + icon_id;
    const user_level_text = 'Level : ' + level;

    const username_node = document.createTextNode(username_text);
    const icon_node = document.createTextNode(icon_text);
    const user_level_node = document.createTextNode(user_level_text);

    username.appendChild(username_node);
    user_icon.appendChild(icon_node);
    user_level.appendChild(user_level_node);

    profile_container.classList.add("profile_container");
    
    profile_container.appendChild(username);
    profile_container.appendChild(user_icon);
    profile_container.appendChild(user_level);

    main_container.appendChild(profile_container);
}


console.log(request);
// fetch des informations de l'utilisateur au dessus
fetch(request)
    .then((res) => res.json())
    .then(response =>{
        console.log(response);
        display_profile(body, response['name'], response['profileIconId'], response['summonerLevel']);
    })
    .catch(console.log('FAILURE'));