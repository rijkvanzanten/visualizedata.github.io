/*
Locates all student work objects in global namespace.
Inits page.
*/

curProj = 0; // current entry
lastClick = null;

function loadIndiv() {
    var uid = $(lastClick).attr("data-uid");
    var idx = parseInt($(lastClick).attr("data-idx"));
    $("#view").html(indiv);
    var person = window[uid];
    var proj = window[uid]["projects"][idx];
    $("#entryContainer").append(iEntry.format(proj.photoUrl, proj.heading, proj.workUrl, proj.subHead, person.photo, 
      person.name, person.bio, person.email, person.site));
    // $("#work").attr("src", "assets/startbootstrap-portfolio-item-gh-pages/index.html?uid=" + data.uid + "&work="+ data.idx) 
}

// Dynamically load/show entries when they enter the viewport
function showEntry() {
    if (! $('#group').length ) // run load-on-sroll only when ID is present
      return;
    
    if (isOnScreen($("#foot")) && curProj < projects.length) {
        var data = projects[curProj];
        var html = gEntry.format(data.photoUrl, data.heading, data.desc, data.uid, data.idx);
        $(html).appendTo(".row").show(100);
        $(".row > div:last  a").click(function() {
          lastClick = this;
          loadIndiv();
        }); // set anchors in entry to load work   
        
        
        $("#foot").remove(); // move foot to bottom
        $(foot).appendTo(".row");
        
        $(".row > div").css("opacity", "1");
        curProj++;
        // console.log(curProj);
        // console.log(isOnScreen($("#foot")));
    }
}

function onScroll() {
    setInterval(showEntry, 200);  // Strangely this is the ratified way to deal with async file loads. Seems wasteful.
}

// Changing in one div messes with the nav buttons.  Hardcode for each page.
function onURLChange() {
    //alert(window.location.href);
    if (window.location.href.search("#") == -1) {
      $("#view").html(group);
      $(foot).appendTo(".row");
      curProj = 0;
    } else {
      if (lastClick == null) {
        window.location.href = "index.html";
      } else {
        loadIndiv();
      }
    }
}

entryData = []; // sort it however
projects = [];

// main
$(document).ready(function() {

    onURLChange();  // init div w first set of elements
    // Ajax-ish HTML rewriting kills navigation buttons.  Hardcode for each element set manually.
    $(window).on('popstate', onURLChange)
    
    for (var item in window) {
        // find entries in global namespace
        if (/^N([0-9]{8})$/.test(item)) {
            console.log("Found: " + item);
            entryData.push(item);
        }
    }
   
    // assemble list of projects
    entryData.forEach(function(uid) {
      window[uid].projects.forEach(function(proj, idx){
        proj.uid = uid;  // add unique key
        proj.idx = idx;
        projects.push(proj);
      });
    });
    
    onScroll() // on-scroll functionality  
    
    // $("#people").load("assets/startbootstrap-3-col-portfolio-gh-pages/index-ppl.html", entriesLoaded);
    
    /* 
    url = window.location.href; 
    if (url.endsWith("#work") && curProj == 0) // go back to top on reload
      window.location.href = url.slice(0,-5);
    $(this).scrollTo(0);
    */
    
    //window.onhashchange = function() {alert("hi");}
});

