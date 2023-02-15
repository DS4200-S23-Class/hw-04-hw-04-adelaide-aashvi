// give border when clicked
    function addBorder(id, x1, x2) {

        let ele = document.getElementById(id);
        let xcoord = ele.getAttribute("cx");
        let ycoord = ele.getAttribute("cy");
        let xp = xcoord / 50;
        let xy = (400 - ycoord) / 40;

        if (document.getElementById(id).style.stroke == "cyan") {
            document.getElementById(id).style.stroke = "none";
        }

        else {
            document.getElementById(id).style.stroke ="cyan";
            document.getElementById(id).setAttribute("stroke-width", "3px");
            document.getElementById("print_num").innerHTML = "Selected Point Coordinates: " + "(" + xp + "," + xy +")";    
        }
    }

    
function addPoint() {

    let Xcoordinate = document.getElementById("Xcoordinate").value;
    let Ycoordinate = document.getElementById("Ycoordinate").value;
    let circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');


    circle.setAttributeNS(null, 'cx', Xcoordinate * 50);
    circle.setAttributeNS(null, 'cy', 400 - Ycoordinate * 40);
    circle.setAttributeNS(null, 'r', 5);
    circle.setAttributeNS(null, 'name', "(" + Xcoordinate + "," + Ycoordinate + ")");
    circle.classList.add('circle');

    document.getElementById('frame').appendChild(circle);

circle.addEventListener('mouseover', mouseOver);
circle.addEventListener('mouseout', mouseOut);
circle.addEventListener('click', onClick);
}

let points = document.getElementsByClassName("circle");


document.getElementById("button").addEventListener('click', addPoint);
document.getElementById("newPoint").addEventListener('mouseover', mouseOver);
document.getElementById("newPoint").addEventListener('mouseout', mouseOut);
document.getElementById("newPoint").addEventListener('click', onClick);