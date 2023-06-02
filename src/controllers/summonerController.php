<?php

$API_KEY = "RGAPI-7441d917-3663-47db-b258-6b88b22766b1";

function display_user_infos($username){

$curl = curl_init();

curl_setopt_array($curl, array(
    CURLOPT_URL => "https://api.exoclick.com/v2/campaigns",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 30,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "GET",
    CURLOPT_POSTFIELDS => "",
    CURLOPT_HTTPHEADER => array(
       $new_token,
       "Content-Type: application/json",
       "cache-control: no-cache"
    ),
  ));


$response = curl_exec($curl);
$err = curl_error($curl);
  
curl_close($curl);

}



?>