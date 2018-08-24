
// THIS FILE IS DEPROCATED.
// WILL DELETE BEFORE FINAL BETA

// Parse URI query string
function parseQuery(queryString) {
    var dictionary = {};
     
    // remove the '?' from the beginning of the
    // if it exists
    if (queryString.indexOf('?') === 0) {
        queryString = queryString.substr(1);
    }
     
    // Step 1: separate out each key/value pair
    var parts = queryString.split('&');
     
    for(var i = 0; i < parts.length; i++) {
        var p = parts[i];
        // Step 2: Split Key/Value pair
        var keyValuePair = p.split('=');
         
        // Step 3: Add Key/Value pair to Dictionary object
        var key = keyValuePair[0];
        var value = keyValuePair[1];
         
        // decode URI encoded string
        value = decodeURIComponent(value);
        value = value.replace(/\+/g, ' ');
         
        dictionary[key] = value;
    }
     
    // Step 4: Return Dictionary Object
    return dictionary;
}

// a pythonesque format method
if (!String.prototype.format) {
    String.prototype.format = function() {
        var args;
        args = arguments;
        if (args.length === 1 && args[0] !== null && typeof args[0] === 'object') {
            args = args[0];
        }
        return this.replace(/{([^}]*)}/g, function(match, key) {
            return (typeof args[key] !== "undefined" ? args[key] : match);
        });
    };
}




entryData = []; // sort it however

var tick=0;
function toggle() {
  if (tick) {
    $(".nc").hide();
    $(".wc").show();
  } else {
    $(".nc").show();
    $(".wc").hide();
  }
  tick = !tick;
}

// main
$(document).ready(function() {
    for (var item in window) {
        // find entries in global namespace
        if (/^N([0-9]{8})$/.test(item)) {
            console.log("Found: " + item);
            entryData.push(item);
        }
    }
    
    var qString=window.location.href.split("?")[1]	// query string
    var uid=parseQuery(qString).uid			// unique key
    var work=parseQuery(qString).work			// work # in array
    
    if (uid==0)  // init w first work
      uid=entryData[0];
    
    // assemble list of projects 
    /*
    entryData.forEach(function(uid) {
      window[uid].projects.forEach(function(proj, idx){
        // console.log(proj.heading);
        proj.uid = uid;  // add unique key
        proj.idx = idx;
        projects.push(proj);
      });
    });*/
    
    var person = window[uid]
    var proj = window[uid]["projects"][work];
    $("#entryContainer").append(entry.format(proj.photoUrl, proj.heading, proj.workUrl, proj.subHead, person.photo, 
    	person.name, person.bio, person.email, person.site));
    	
    // setInterval(toggle, 2000);
});

