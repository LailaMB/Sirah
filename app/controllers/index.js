
Alloy.Collections.groups.fetch();
Alloy.Collections.sirah.fetch();


function openDetails(e){
	//console.log('item Clicked '+ e.index);
	var win = Alloy.createController('player', {
		sirah: Alloy.Collections.sirah.at(e.itemIndex),
		group: Alloy.Collections.groups.at(e.itemIndex)
	});
	
	$.index.openWindow(win.getView());
}

$.index.open();
