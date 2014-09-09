var args = arguments[0] || {};

Alloy.Collections.groups.fetch();
Alloy.Collections.sirah.fetch();



$.questiontxt.text=args.question.question;
$.ch1.title=args.question.ch1;
$.ch2.title=args.question.ch2;
$.ch3.title=args.question.ch3;
var correctAnswer=args.question.correct;
var grpid=args.question.groupid;
var id = args.question.id;
console.log("INDEX from question"+ args.index);

var answer;

var pageNumber= id%6;
if (pageNumber == 0)
{
	pageNumber = 6 ;
}
$.pageNumber.text = pageNumber + "/6";




function nxtAudio()

{   
	if( $.ch1.value==false && $.ch2.value==false && $.ch3.value==false)
	{
		alert("فضلاً اختر إجابة");
	
	}else{
		
		
		
	checkAnswer();
	
		if (id%6==0)
	{
		var winRegister = Alloy.createController('register', {groupid:grpid}).getView();
		winRegister.open();
		$.question.close();
	}
	else
	{
		var win = Alloy.createController('player', {
		sirah: Alloy.Collections.sirah.at(args.index),
		group: Alloy.Collections.groups.at(grpid-1)
		}).getView();
	win.open();
	$.question.close();
	
	}}
}




function checkAnswer()
{
		if (correctAnswer==answer)
		{
			Alloy.Globals.score++;
			console.log("Correct !");
			console.log("Score "+ Alloy.Globals.score);			
		}
		else
		
		console.log("Wrong :( ");
		console.log("Score "+ Alloy.Globals.score);	
		
	}
	
	


 function checked (e) {
   

    $.ch1.value=$.ch2.value=$.ch3.value=false;
    $.ch1.backgroundColor=$.ch2.backgroundColor=$.ch3.backgroundColor="red";
    this.value = true;	
    this.backgroundColor = '#aaa';
    answer=this.id;


}

function backHome(){

	
	var dialog = Ti.UI.createAlertDialog({
		title :' العودة للقائمة الرئيسية',
		message: 'بالعودة للقائمة الرئيسية ستفقد جميع المعلومات و لن يتم اعتبار الاجابات، هل أنت متأكد بأنك تريد العودة للقائمة الرئيسية ؟',
		buttonNames: ['نعم','لا']
	});
	
	dialog.addEventListener('click',function(e){
		if(e.index==0)
		{
		$.question.close();
			}	
	});

dialog.show();
	
}

