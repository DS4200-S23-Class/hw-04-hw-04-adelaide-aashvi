// give border when clicked
function addBorder(id) {

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
            document.getElementById("print_num").innerHTML = "Most Recent Selected Point Coordinates: " + "(" + xp + "," + xy +")";    
        }
}

  
function addPoint() {

    let xCoordinate = document.getElementById("xCoordinate").value;
    let yCoordinate = document.getElementById("yCoordinate").value;
    let circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');


    circle.setAttribute('cx', xCoordinate * 50);
    circle.setAttribute('cy', 400 - (yCoordinate * 40));
    circle.setAttribute('r', 5);
    circle.setAttribute("class", "circle")

    let id = "(" + xCoordinate.substring(0,1) + "," + (10 - yCoordinate.substring(0,1)) + ")"; 
    circle.setAttribute("id", id)

    document.getElementById('frame').appendChild(circle);
    circle.addEventListener("click", () => addBorder(circle.id));
}

 document.getElementById("addPoint").addEventListener("click", addPoint);



let points = document.getElementsByClassName("circle");
for (let i = 1; i <= points.length; i++) {
     document.getElementsByClassName("circle")[i].addEventListener("click", () => addBorder(points[i].id)) 
    };


