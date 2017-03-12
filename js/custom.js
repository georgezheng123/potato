var departments = [ 'arts and entertainment', 'art', 'business', 'copy', 'features', 'humor', 'layout', 'news', 'opinions', 'photo', 'sports', 'web' ];

/* horizontal bar */
var horizontalBar = document.getElementsByClassName("horizontal-bar-row")[0];
for (var d = departments.length-1; d >= 0; d--) {
    var td = horizontalBar.insertCell(0);
    var elementId = "scrollTo-" + departments[d];
    td.setAttribute('id',elementId);
    td.setAttribute('class','scrollMe');
    if (departments[d] === 'arts and entertainment') {
        td.innerHTML = '<a href="">Arts&amp;Entertainment';
    } else {
        td.innerHTML = '<a href="">' + departments[d].charAt(0).toUpperCase() + departments[d].slice(1);
    }
}

/* department previews */
var departmentPreviews = document.getElementsByClassName("department-previews")[0];
for (var d = departments.length-1; d >= 0; d--) {
    deptName = '<h3>' + "Name" + '</h3>' //some json stuff
    deptQuote = '<p>Quote</p>'; // some json stuff
    deptTestimonial = '<p>Testimonial</p>'; // some json stuff
    deptPhoto = '<img src="' + "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Glazed-Donut.jpg/1200px-Glazed-Donut.jpg" + '">';
    var table = document.createElement('table');
    var row = table.insertRow(0);
    if (d % 2 == 0) {
        var larger = row.insertCell(0);
        larger.setAttribute('class','larger');
        larger.innerHTML = deptName + deptQuote + deptTestimonial;
        var smaller = row.insertCell(1);
        smaller.setAttribute('class','smaller');
        smaller.innerHTML = deptPhoto;
    } else {
        var smaller = row.insertCell(0);
        smaller.setAttribute('class','smaller');
        smaller.innerHTML = deptPhoto;
        var larger = row.insertCell(1);
        larger.setAttribute('class','larger');
        larger.innerHTML = deptName + deptQuote + deptTestimonial;
    }
    departmentPreviews.appendChild(table);
}
