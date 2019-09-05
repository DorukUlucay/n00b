var Typer = {
	text: null,
	file: "", 
	position :0,
	length : 0,
	init: function () {
		jQuery.get(Typer.file, function (data) {
			Typer.text = data.split("\n");
			length = Typer.text.length;
		});
	},

	addText: function () {//Main function to add the code
		var console = $("#console")

		
		console.html(console.html() + Typer.text[Typer.position++] + "<br/>");
		
		if(Typer.position == Typer.length){
			Typer.position=0;
		}

		$("#console").animate({ scrollTop: $("#console")[0].scrollHeight}, 1000);


	},
}