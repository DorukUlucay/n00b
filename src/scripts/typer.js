var Typer = {
	text: null,
	file: "", 
	position :0,
	length : 0,
	lines :[],
	init: function () {
		jQuery.get(Typer.file, function (data) {
			Typer.text = data.split("\n");
			length = Typer.text.length;
		});
	},


	addText: function () {//Main function to add the code
		var console = $("#console")

		if	((console)[0].getElementsByTagName("span").length == 5){
		debugger;

			(console)[0].getElementsByTagName("span")[0].remove();
			(console)[0].getElementsByTagName("br")[0].remove();
		}

		
		console.html(console.html() + "<span>" + Typer.text[Typer.position++] + "</span><br/>");
		
		if(Typer.position == Typer.length){
			Typer.position=0;
		}

		$("#console").animate({ scrollTop: $("#console")[0].scrollHeight}, 1000);


	},
}