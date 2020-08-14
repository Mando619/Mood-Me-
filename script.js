$("#search").on("click", function(){
    console.log("ola");
});






var settings = {
  "url": "https://api.spotify.com/v1/playlists/37i9dQZF1DX7qK8ma5wgG1?si=NlA7VeAXTTmcTS0oCT8cqw",
  "method": "GET",
  "timeout": 0,
  "headers": {
    "Authorization": "Bearer BQD-outpOdnWriG4EPdd60Xa001m2AGU5LvLocZQGkRedd76c6G8_cj2kUDMe6DCg29EH3JS4kvoEK_UaPMOM_YTd4ULJ193brhP0HlZwuZfoQQBR-Gbikf6NuCVIKrJDeszD126ad4v9xFxVzpYd-6_0YYhqtNVcS04VZ2Mj52aMNKeKzVMYhSi90LOt0IQ2fe2xkyXZnfSZC16h34Nl6ahhggKo77e8zK5xvLsjjQHaQI8mrOZDpOcOsJ5pQnm71KMijPyvtLDtXzp"
  },
};

$.ajax(settings).done(function (response) {
  console.log(response.external_urls.spotify);
  let url = response.external_urls.spotify;

  let embedLink = url.replace('https://open.spotify.com/playlist/', 'https://open.spotify.com/embed/playlist/')
  console.log(embedLink)

  $("#sad").on("click", function(){
    console.log(response.external_urls.spotify)
    $("#playlist").attr("src", embedLink);
  })
});
