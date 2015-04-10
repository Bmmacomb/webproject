(function() {
	"use strict";
	
	var main = function() {
		var url = 'http://www.omdbapi.com/?t=the mummy&y=&plot=short&r=json';
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
                    
                    var $itemVal = $('<td>').prepend($('<img>',{src:response[prop]}).alt= '<a href=' + response[prop] +  '> Unable to directly retrieve image:. Click here instead </a>');
                
                }else{
				var $itemProp = $('<td>').text(prop);
                
				var $itemVal = $('<td>').text(response[prop]);
                }
				$item.append($itemProp);
				$item.append($itemVal);
				$movTable.append($item);	
			}
			
			$('.tb').append($movTable);
		});
	};
	
	$(document).ready(main);
}());