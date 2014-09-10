var args = arguments[0] || {};


Alloy.Collections.groups.fetch();
Alloy.Collections.sirah.fetch();
Alloy.Globals.score=0;


function openDetails(e){
 	var groupNumber=e.itemindex+1;
	console.log('e.itemindex '+ e.itemIndex);
	var win = Alloy.createController('player', {
		sirah: Alloy.Collections.sirah.at(e.itemIndex*6), // get the first question
		group: Alloy.Collections.groups.at(e.itemIndex) 
	});
	
	win.getView().open();
	$.groupList.close();
}



function backHome(){

$.groupList.close();
	
}

$.groupList.open();
