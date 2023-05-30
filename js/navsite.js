$("#navbarCollapse").html('');
    $.ajax({
		url: "/data/jsNavData.json",	
		dataType: 'json',		
		success: function (data) {
			var items = '';
           var no=0;
			$.each(data, function (i, row) {
                if(no==0){
                    items +=' <a href="'+row.Url+'" class="nav-item nav-link active">'+row.Name+'</a>';	
                }else{
                    items +=' <a href="'+row.Url+'" class="nav-item nav-link">'+row.Name+'</a>';	
                }
                no++;
			});
			$("#navbarCollapse").html(items);
		}
	});