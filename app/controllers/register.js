var args = arguments[0] || {};
$.grptxt=args.groupid;
$.scoretxt="Your Score  "+ Alloy.Globals.score;

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

