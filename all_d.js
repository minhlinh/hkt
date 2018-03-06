function show_tv1017(){
	if($("#tv1017").data('time')<4)
	{
		if($("#tv1017").data('time') == 2)
		{
			var time = 15000;
		}
		else
		{
			var time = 30000;
		}
		console.log('tv1017 ' + time);    	
		setTimeout(function(){
				if($("#LRMINIBar").css("display")=='block')
				{
					$("#tv1017").data('time',3);
					$("#tv1017").show('slow');
				}
				else{
					show_tv1017();
				}
		},time);
	}
}
