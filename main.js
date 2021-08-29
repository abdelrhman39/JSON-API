



var player = document.getElementById("player")
var accordion = document.getElementById("accordion");


var cannelName = document.getElementById("cannelName");
var titleVideo = document.getElementById("titleVideo");
var imageCover = document.getElementById("imageCover");
var description = document.getElementById("description");


var itemVideos = document.getElementById("itemVideos");



var video ='';




$(function(){
    
     $.ajax({
        type: "GET",
        url: "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PL5isa5XjlZ5qKX61YuOdq-aoFy3ZHF_hb&maxResults=50&key=AIzaSyBWgu2h9-pbEFBUUsm60dfjWoTwVL8_vWU",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            
        var content =data.items;
       
       for(var x=0;x <= 20 ; x++){
           
           
           video =content[x].snippet.resourceId.videoId;
           
           var video = '<iframe  width="100%" height="300px"  src="https://www.youtube.com/embed/'+video+'/controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
           
           player.innerHTML =video; 
           
           accordion.innerHTML += '<div class="accordion__card"><div class="card-header" id="heading'+x+'"><button type="button" data-toggle="collapse" data-target="#collapse'+x+'" aria-expanded="true" aria-controls="collapseOne"><span>'+content[x].snippet.title+'</span></button></div><div id="collapse'+x+'" class="collapse" aria-labelledby="heading'+x+'" data-parent="#accordion"><div  class="card-body">'+video+'</div></div></div>';
           
           imageCover.innerHTML = '<img height="250px" width="300px" src="'+content[x].snippet.thumbnails.medium.url+'" alt="">';
           
           description.innerHTML =content[x].snippet.description;
           
           
           cannelName.innerHTML =content[x].snippet.channelTitle;
           titleVideo.innerHTML =content[x].snippet.title;
           
           
           }
        },
        error: function (xhr, status, error) {
            alert(error.responseTextss);
        }
    });
    
    
    
   
});




