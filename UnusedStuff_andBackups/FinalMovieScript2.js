

var wage = document.getElementById("wage");
wage.addEventListener("keydown", main () {
    if (e.keyCode === 13) {  //checks whether the pressed key is "Enter"
        
    }
});


	"use strict";
	
	var main = function() {
        var title = document.getElementById("text").value;
        //window.alert(title);
		var url = 'http://www.omdbapi.com/?t='+title+'&y=&plot=long&r=json';
		$.getJSON(url, function(Response) {
			var $movTable = $('<table>');
			var response = Response;
            
			for (var prop in response) {
				var $item = $('<tr>');
                if (prop === "Response"){
                }
               else if (prop === "Poster"){
                   // console.log("der");
                    var $itemProp = $('<td>').text(prop);
                    
                    var $itemVal = $('<td>').prepend($('<img>',{src:response[prop]}).alt= ' Unable to directly retrieve image: <a href=' + response[prop] +  '> Click here instead </a> You may need to click on the browser address bar and press enter');
                
                }else{
				var $itemProp = $('<td>').text(prop);
                
				var $itemVal = $('<td>').text(response[prop]);
                }
				$item.append($itemProp);
				$item.append($itemVal);
				$movTable.append($item);	
			}
			
			$('.tb').append($movTable);
            $('.tb').append('<p>&nbsp</p>');
           
		});
	};
	
	$(document).ready(main);
}