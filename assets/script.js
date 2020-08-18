
// Toggle between showing and hiding the sidebar when clicking the menu icon
var mySidebar = document.getElementById("mySidebar");

function w3_open() {
  if (mySidebar.style.display === 'block') {
    mySidebar.style.display = 'none';
  } else {
    mySidebar.style.display = 'block';
  }
}

// Close the sidebar with the close button
function w3_close() {
    mySidebar.style.display = "none";
}



$("#search").on("click", function(){
    console.log("ola");
});


$(".emotionButton").on("click", function(event) {
  console.log("hi")

  let arrayIndex = Math.floor((Math.random() * 20));

  let emotion = event.target.id;

  var settings = {
    "url": "https://api.spotify.com/v1/search?type=playlist&q=" + emotion,
    "method": "GET",
    "timeout": 0,
    "headers": {
      "Authorization": "Bearer BQDtmvzhfVRHIJdhhT04m0MQtq432reV29cgUWxu83oIMHZJka-el-koEfUmBIIm7XQViPCSxFSTWNq5O4odWSA6CnlbFt-D5xv6yS6WUI37NuYGXIKvUAlhMiQOc7DWeY4Z7S0hCGb3fj9dW78wzJ2LVkjyGXG_IwGbsJnTg2dy2epQyzsUjoJvCZmOZUhl6Uj0yplwEJ6snGVyafV-sr7uMR6mtXBPrbUYvfs-6CJM-cWVRMWTCVgFxN0KHECOkipBw2MzP_Az06nS"
    },
  };

  $.ajax(settings).done(function (response) {
    //console.log(response.playlists.items);
    //console.log(arrayIndex)
    let playlist = response.playlists.items[arrayIndex];
   // console.log(playlist.external_urls.spotify);
    let iframeURL = playlist.external_urls.spotify.replace('https://open.spotify.com/', 'https://open.spotify.com/embed/');

   // console.log(iframeURL)

    $("#playlist").attr("src", iframeURL);

  });

  let genreCode = event.target.attributes[1].value;
  //console.log(event)
  //console.log(genreCode)

  var settings = {
  "url": "https://api.themoviedb.org/3/discover/movie?api_key=7145a0d33a1aba5125e1cf5e53f5b9d1&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=" + genreCode,
  "method": "GET",
  "timeout": 0,
  };

  $.ajax(settings).done(function (response) {
    //console.log(response.results[arrayIndex].original_title);
    console.log(response.results[arrayIndex])
    let movieTitle = response.results[arrayIndex].original_title;
    $('#movieTitle').text(movieTitle);

    let movieID = response.results[arrayIndex].id;

    var settings = {
  "url": "https://api.themoviedb.org/3/movie/" + movieID + "/videos?api_key=7145a0d33a1aba5125e1cf5e53f5b9d1&language=en-US",
  "method": "GET",
  "timeout": 0,
  };
  
  $.ajax(settings).done(function (response) {
  console.log(response);

  let videoID = response.results[0].key;

  console.log(videoID);

  let trailerShow = "https://www.youtube.com/embed/" + videoID;
  $("#trailers").attr("src", trailerShow);
  });
  });

  })



