function openList(e){
	//console.log('item Clicked '+ e.index);
var winList = Alloy.createController('groupList').getView();

	};
	
function openAboutUs(e){
	//console.log('item Clicked '+ e.index);
var winAbout = Alloy.createController('about').getView();
	winAbout.open();
	};	

function openInfo(e){
	var winInfo = Alloy.createController('info').getView();
	winInfo.open();
	};

			
	
	
$.index.open();
