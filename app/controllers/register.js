var args = arguments[0] || {};
var Cloud = require('ti.cloud');
Cloud.debug = true;  // optional; if you add this line, set it to false for production

var userScore=Alloy.Globals.score;

function sendScore()
	{
	Cloud.Users.create({
    first_name: $.fullName.value,
    password: "password",
    password_confirmation: "password",
    username: $.IdNumber.value,
    custom_fields:'{
 					 "score": userScore,
 					 "phone_number": $.phoneNumber.value
 					 "university":$.uniName.value}'
 					 }
 					, function (e) {
    if (e.success) {
     console.log("user created successfully");
    } else {
     console.log("oops, something went wrong");// 
    }
});
	}

//$.grptxt.text=args.groupid;
//$.scoretxt.text="Your Score  "+ Alloy.Globals.score;

console.log("Score" + Alloy.Globals.score);

function onImg_homebtnClicked()
	{
		var dialog = Ti.UI.createAlertDialog({
		title :' العودة للقائمة الرئيسية',
		message: 'بالعودة للقائمة الرئيسية ستفقد جميع المعلومات و لن يتم اعتبار الاجابات، هل أنت متأكد بأنك تريد العودة للقائمة الرئيسية ؟',
		buttonNames: ['نعم','لا']
	});
	
	dialog.addEventListener('click',function(e)
	{
			if(e.index==0)
			{
			$.register.close();
			}	
	});

	dialog.show();
	
}

