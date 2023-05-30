$("#slide").html('');
    $.ajax({
		url: "/data/paner.json",	
		dataType: 'json',		
		success: function (data) {
			var items = '';
           var no=0;
			$.each(data, function (i, row) {
                if(no==0){
					items +='<div class="carousel-item active">'
					+'<img class="w-100" src="img/'+row.Url+'" alt="'+row.Name+'">'
					+'</div>';
                  
                }else{
					items +='<div class="carousel-item">'
					+'<img class="w-100" src="img/'+row.Url+'" alt="'+row.Name+'">'
					+'</div>';
                }
                no++;
			});
			$("#slide").html(items);
		}
	});