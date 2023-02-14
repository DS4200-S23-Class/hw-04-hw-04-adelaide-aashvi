// give border when clicked
    function addBorder(id, x1, x2) {
        if (document.getElementById(id).style.stroke == "lightblue" && document.getElementById(id).strokeWidth == 5) {
            document.getElementById(id).style.stroke = "none";
        }

        else {
            document.getElementById(id).style.stroke ="lightblue";
        }
    };