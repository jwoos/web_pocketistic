'use strict';

$(document).ready(function() {
	var data;
	$.get('/proxy/retrieve', {
		state: 'all'
	}).done(function(data, textStatus, jqXHR) {
		data = data;
	}).fail(function(jqXHR, textStatus, errorThrown) {
		swal({
			title: 'Oops',
			type: 'error',
			text: `${jqXHR.status}: ${errorThrown}`
		});
	});
	console.log(data);
});
