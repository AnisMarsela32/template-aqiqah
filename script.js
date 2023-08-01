// membuat countdown

var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + "hari " + hours + "jam "
  + minutes + "menit " + seconds + "detik ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);



function copy1() {
    // Get the text field
    var copyText = document.getElementById("copy01");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
  
    // Alert the copied text
    alert("Teks tersalin: " + copyText.value);
  }
function copy2() {
    // Get the text field
    var copyText = document.getElementById("copy02");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
  
    // Alert the copied text
    alert("Teks tersalin: " + copyText.value);
  }





  function music(){
    $(".scrollmenu").css("display","block");
    // if($(window).width() > 992){
    // $(".scrollmenu").css({"display": "flex", "justify-content": "center"});
    // } else if($(window).width() < 700){
    //   $(".scrollmenu").css({"display": "flex", "justify-content": "left"});
    
    // }
    $("#mute").css("display","block");
    $("body").css("overflow","auto");
    $("body").css("height","auto");
    var myAudio = $("#audio")[0];
    if(myAudio.duration > 0 && !myAudio.paused){
    }else myAudio.play();
  }


