
var args = arguments[0] || {};

$.audioTextLbl.text = args.sirah.get('audiotext');
$.groupTextLbl.text = args.group.get('title');

var q={
	question:args.sirah.get('questiontext'),
	ch1:args.sirah.get('ch1'),
	ch2:args.sirah.get('ch2'),
	ch3:args.sirah.get('ch3'),
	correct:args.sirah.get('correct')
};

	
console.log(q);



var audionum=args.sirah.get('audionumber'); 
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
        audioPlayer.start();
    }
};



function stopTrack() {
        audioPlayer.stop();
        if (Ti.Platform.name === 'android')
        { 
            audioPlayer.release();
        }  }
        
        
 // function showQuestion() {
 // var questionWin=Alloy.createController('question',q).getView();
 // $.player.open(questionWin);
//};