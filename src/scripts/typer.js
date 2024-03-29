export {
    Typer
}

var Typer = {
    text: null,
    file: "",
    position: 0,
    length: 0,
    lines: [],
    monitorHeight: 5,
    init: function() {
        jQuery.get(Typer.file, function(data) {
            Typer.text = data.split("\n");
            length = Typer.text.length;
        });
    },
    addText: function() { //Main function to add the code
        var console = $("#console-code")

        if ((console)[0].getElementsByTagName("span").length == this.monitorHeight) {
            (console)[0].getElementsByTagName("span")[0].remove();
            (console)[0].getElementsByTagName("br")[0].remove();
        }

        console.html(console.html() + "<span>" + Typer.text[Typer.position++] + "</span><br/>");

        debugger;
        if (Typer.position == length) {
            Typer.position = 0;
        }

        $("#console-code").animate({
            scrollTop: $("#console-code")[0].scrollHeight
        }, 1000);
    },
}