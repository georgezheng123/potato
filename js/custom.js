var departments = [ 'ae', 'art', 'business', 'copy', 'features',' humor', 'layout', 'news', 'opinions', 'photo', 'sports', 'web' ];


var row = document.getElementsByClassName("horizontal-bar-row")[0];

for (var d = 0; d < departments.length; d++) {
    var td = row.insertCell(0);
    var elementId = "scrollTo-" + departments[d];
    td.setAttribute('id',elementId);
    td.setAttribute('class','scrollMe');
    if (departments[d] === 'ae') {
        td.innerHTML = '<a href="">A(CHANGETOAMPERSANDCODE)E';
    } else {
        td.innerHTML = '<a href="">' + departments[d].charAt(0).toUpperCase() + departments[d].slice(1);
    }
}
