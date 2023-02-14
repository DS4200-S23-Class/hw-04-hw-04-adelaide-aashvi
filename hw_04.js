// give border when clicked
    function addBorder(id, x1, x2) {
        if (document.getElementById(id).style.stroke == "cyan") {
            document.getElementById(id).style.stroke = "none";
        }

        else {
            document.getElementById(id).style.stroke ="cyan";
            document.getElementById(id).setAttribute("stroke-width", "3px");
        }
    };