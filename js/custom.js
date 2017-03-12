var departments = [ 'a&E', 'art', 'business', 'copy', 'features', 'humor', 'layout', 'news', 'opinions', 'photo', 'sports', 'web' ];

/* horizontal bar */
function showHorizontalBar() {
    var horizontalBar = document.getElementsByClassName("horizontal-bar-row")[0];
    for (var d = departments.length-1; d >= 0; d--) {
        var td = horizontalBar.insertCell(0);
        var scrollToElement = "scrollTo-" + departments[d];
        td.setAttribute('data-scrollTo',scrollToElement);
        td.setAttribute('class','scrollMe');
        if (departments[d] === 'ae') {
            td.innerHTML = 'Arts&amp;Entertainment';
        } else {
            td.innerHTML = departments[d].charAt(0).toUpperCase() + departments[d].slice(1);
        }
    }
}

/* department previews */
function showDepartmentPreviews() {
    var departmentPreviews = document.getElementsByClassName("department-previews")[0];
    for (var d = 0; d < departments.length; d++) {
        deptName= '<div id = "headings">' + departments[d] + '</div>' //some json stuff
        line = '<div id = "line"> </div>'
        deptQuote = '<blockquote>' + 'quote' + '</blockquote>' + '<br><div class = "desc" style = "float:right;">&mdash; Aristotle</div>'; // some json stuff
        deptTestimonial = '<div class = "desc">' + "description" + "</div>"; // some json stuff
        deptPhoto = '<img src="' + "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Glazed-Donut.jpg/1200px-Glazed-Donut.jpg" + '">';
        var table = document.createElement('table');
        table.setAttribute('id',"scrollTo-" + departments[d]);
        var row = table.insertRow(0);
        if (d % 2 == 0) {
            var larger = row.insertCell(0);
            larger.setAttribute('class','larger');
            larger.innerHTML = deptName + line + deptTestimonial + deptQuote;
            var smaller = row.insertCell(1);
            smaller.setAttribute('class','smaller');
            smaller.innerHTML = deptPhoto;
        } else {
            var smaller = row.insertCell(0);
            smaller.setAttribute('class','smaller');
            smaller.innerHTML = deptPhoto;
            var larger = row.insertCell(1);
            larger.setAttribute('class','larger');
            larger.innerHTML = deptName + line + deptTestimonial + deptQuote;
        }
        departmentPreviews.appendChild(table);
    }
}

/* department editor picks */
function showEditorPicks() {
    var editorPicks = document.getElementsByClassName("editor-picks-list")[0];
    for (var d = 0; d < departments.length; d++) {
        var div = document.createElement('div');
        var deptName = document.createElement('h3');
        deptName.innerHTML = departments[d]; //some json stuff
        div.appendChild(deptName);
        var deptDescription;
        if (true) { // json stuff to see if article is img or naw
            deptDescription = '<a href="">Article Name/img/art</a>';
        }
        var table = document.createElement('table');
        table.setAttribute('id',"scrollTo-" + departments[d]);
        table.setAttribute('class','angelaTable');
        var row = table.insertRow(0);
        var td = row.insertCell(0);
        td.innerHTML = deptName + deptDescription;
        editorPicks.appendChild(table);
    }
}
