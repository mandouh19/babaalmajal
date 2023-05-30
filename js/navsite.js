$("#navbarCollapse").html('');
    $.ajax({
		url: "/data/jsNavData.json",	
		dataType: 'json',		
		success: function (data) {
			var items = '';
           
			$.each(data, function (i, row) {
                items +=' <a href="'+row.Url+'" class="nav-item nav-link">'+row.Name+'</a>';				
			});
			$("#navbarCollapse").html(items);
		}
	});