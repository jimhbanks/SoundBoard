soundManager.setup({
 url: '../audiofiles/',
 onready: function() {

   $('#eat').on('click', function(){
     var mySound = soundManager.createSound({
       url: 'audiofiles/eatt.mp3'
     });
     mySound.play();
   });

     $('#sleep').on('click', function(){
     var mySound = soundManager.createSound({
       url: 'audiofiles/sleepp.mp3'
     });
     mySound.play();
   });

    $('#code').on('click', function(){
     var mySound = soundManager.createSound({
       url: 'audiofiles/codee.mp3'
     });
     mySound.play();
   });

     $('#repeat').on('click', function(){
     var mySound = soundManager.createSound({
       url: 'audiofiles/repeatt.mp3'
     });
     mySound.play();
   });

     $('#instrumental').on('click', function(){
     var mySound = soundManager.createSound({
       url: 'audiofiles/instrumental.mp3'
     });
     mySound.play();
   });
 
 },
 ontimeout: function() {
 }

 //  $("#repeat").on('click', function(){
 //       startData = $('r').val();
 //      console.log(startData);
 // })

}); 

