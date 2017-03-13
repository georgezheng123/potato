var filename='https://georgezheng123.github.io/Spec_Recruit_S2017/data.json';
//var filename = "../data.json";
var info;

var departments = [ 'ae', 'art', 'business', 'copy', 'features', 'humor', 'layout', 'news', 'opinions', 'photos', 'sports', 'web' ];

/* horizontal bar */
function showHorizontalBar() {
    var horizontalBar = document.getElementsByClassName("horizontal-bar-row")[0];
    for (var d = departments.length-1; d >= 0; d--) {
        var td = horizontalBar.insertCell(0);
        var scrollToElement = "scrollTo-" + departments[d];
        td.setAttribute('data-scrollTo',scrollToElement);
        td.setAttribute('class','scrollMe');
        td.innerHTML = formatName(departments[d]) ;
    }
}

/* department previews */
function showDepartmentPreviews(info) {
    var departmentPreviews = document.getElementsByClassName("department-previews")[0];
    var largerFirst = true;
    for (var dept in info) {
        deptName= '<div id="headings" onclick="window.open("http://google.pl", "_blank");">' + formatName(dept) + '</div>' //some json stuff
        line = '<div id = "line"></div>';
        if (info[dept].quote != null) {
            deptQuote = '<blockquote>' + info[dept].quote + '</blockquote>' + '<div class="author">&mdash; ' + info[dept].person + '</div>'; // some json stuff
        } else {
            deptQuote = "";
        }
        if (info[dept].description == null) {
            deptDescription = "";
        } else {
            deptDescription = '<div class="desc"><span class="tab"></span>' + info[dept].description + '</div>';
        }

        deptPhoto = '<img src="' + info[dept].photo + '">';
        var table = document.createElement('table');
        table.setAttribute('id',"scrollTo-" + dept);
        var row = table.insertRow(0);
        if (largerFirst) {
            var larger = row.insertCell(0);
            larger.setAttribute('class','larger');
            larger.innerHTML = deptName + line + deptDescription + deptQuote;
            var smaller = row.insertCell(1);
            smaller.setAttribute('class','smaller');
            smaller.innerHTML = deptPhoto;
        } else {
            var smaller = row.insertCell(0);
            smaller.setAttribute('class','smaller');
            smaller.innerHTML = deptPhoto;
            var larger = row.insertCell(1);
            larger.setAttribute('class','larger');
            larger.innerHTML = deptName + line + deptDescription + deptQuote;
        }
        departmentPreviews.appendChild(table);
        largerFirst = !largerFirst;
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

function showContactDetails(info) {
    var contactContainers = document.getElementsByClassName("contact-info-sections")[0];
    for (var dept in info) {
        var div = document.createElement('div');
        var title = document.createElement('h3');
        title.innerHTML = formatName(dept);
        div.appendChild(title);
        var link = document.createElement('a');
        link.setAttribute('href','mailto:' + info[dept].email);
        link.innerHTML = info[dept].email;
        div.appendChild(link);
        contactContainers.appendChild(div);
    }
}

function formatName(dept) {
    if (dept === 'ae') {
        return 'A&amp;E';
    } else {
        return dept.charAt(0).toUpperCase() + dept.slice(1);
    }
}

/*Run on document ready*/
(function() {
    var topOfThePage = true;
    //add the scroll-top button
    document.body.innerHTML += '<div id="back2Top" style="width: 40px; height: 40px; position: fixed; bottom: 10px; right: 10px; background-color: #eee; display: none;"><img src="http://www.iconarchive.com/download/i86026/graphicloads/100-flat-2/arrow-up.ico" width="40" height="40" alt="Back To Top"/></div>';
    //onlick: scroll to top, hide the button
    $("#back2Top").click(function() {
        $("body").animate({scrollTop: 0}, "slow");
        topOfThePage = true;
        $(this).hide();
    });
    //if scrolled down, show the button
    window.addEventListener("scroll", function(evt) {
        if(topOfThePage) {
            $("#back2Top").show();
            topOfThePage = false;
        }
    });
})();
