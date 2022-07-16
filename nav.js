
var navopen = false;
function nav() {
    if (navopen == false) {
        document.getElementById('nav-mob').style.display = 'block';
        navopen = true;
    } else {
        document.getElementById('nav-mob').style.display = 'none';
        navopen = false;
    }
}