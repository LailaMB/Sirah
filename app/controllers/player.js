
var args = arguments[0] || {};

var epindex=args.sirah.get('id');

var audionum=args.sirah.get('audionumber'); 
$.audioTextLbl.text = args.sirah.get('audiotext');
$.groupTextLbl.text = args.group.get('title');

var pageNumber= epindex%6;
if (pageNumber == 0)
{
	pageNumber = 6 ;
}
$.pageNumber.text = pageNumber + "/6";



var q={
	question:args.sirah.get('questiontext'),
	ch1:args.sirah.get('ch1'),
	ch2:args.sirah.get('ch2'),
	ch3:args.sirah.get('ch3'),
	correct:args.sirah.get('correct'),
	groupid:args.sirah.get('groupid'),
	id:args.sirah.get('id')
};

	




var audioPlayer = Ti.Media.createAudioPlayer({ 
    url: "http://islam-call.com/uploads/Audio/1273/"+audionum+".mp3",
    allowBackground: true
});  


function playtrack () {

    if (audioPlayer.playing)
    {
     audioPlayer.pause();	

    }
    else
    {
    	if (Titanium.Network.online==false)
    	{
    		 audioPlayer.pause();
    		console.log("no connection");
    		alert("فضلا تحقق من الاتصال");
    	}
    	else
    	{
    		console.log(" connection");
    		audioPlayer.start();
    	}
        
    }
};



function stopTrack() {
        audioPlayer.stop();
        if (Ti.Platform.name === 'android')
        { 
            audioPlayer.release();
        }  }


audioPlayer.addEventListener('progress',function(e) 
{
  var value=0;
     if (Ti.Platform.name === 'android')
        { 
   var playedTime=formatTime(Math.round(audioPlayer.time/1000))+" : "+formatTime(Math.round(audioPlayer.duration/1000));
   if (audioPlayer.time > 0) 
   	{
   		value = Math.floor((100 / audioPlayer.duration) * audioPlayer.time);
   		}
        } 
      else 
		{
			
    var playedTime=formatTime(Math.round(audioPlayer.progress/1000))+" : "+formatTime(Math.round(audioPlayer.duration/1000));
    if (audioPlayer.progress > 0) 
   	{
   		value = Math.floor((100 / audioPlayer.duration) * audioPlayer.progress);
   		}

		}       
   
   $.duration.setText(playedTime);
   
      
   $.timeProgress.applyProperties({width: value + "%" });
    
});



function formatTime(totalSeconds){   
    var minutes =  parseInt(totalSeconds / 60 % 60);
    var seconds = parseInt(totalSeconds % 60);
    return (minutes > 9 ? minutes : "0" + minutes) + ":" + (seconds > 9 ? seconds : "0" + seconds);
};

$.timeBar.addEventListener('click',function(e){

    var newTime =(e.x/250)*audioPlayer.duration;
    audioPlayer.pause();
    audioPlayer.setTime(newTime);
    audioPlayer.start();
    
 
});
        
        
 function onBtn_showquestionClicked() {
 	var questionWin=Alloy.createController('question',{question:q,index:epindex}).getView().open();
   stopTrack() ;
    $.player.close();
};


function onImg_homebtnClicked(){

	
	var dialog = Ti.UI.createAlertDialog({
		title :'العودة للقائمة الرئيسية',
		message: 'بالعودة للقائمة الرئيسية ستفقد جميع المعلومات و لن يتم اعتبار الاجابات، هل أنت متأكد بأنك تريد العودة للقائمة الرئيسية ؟',
		buttonNames: ['نعم','لا']
	});
	
	dialog.addEventListener('click',function(e){
		if(e.index==0)
		{
			stopTrack() ;
			$.player.close();
			}	
	});

dialog.show();
	
}