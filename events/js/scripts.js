
$(document).ready(function() {

    // page is now ready, initialize the calendar...

    $('#calendar').fullCalendar({
        // put your options and callbacks here
        events:[
  {
    'title': 'LISA',
    'type': 'conference',
    'focus': 'digital and interactive art installation, data visualization, software art, interactive advertising, 3D printing, electronic sculpture, LED design, projection mapping, mobile art, tech wearables, app development, open source art, augmented reality, hacker art, new media curating, and digital art collecting',
    'start': '2013-01-11',
    'end': '2013-01-11',
    'location': 'New York',
    'url': 'http://softwareandart.com',
    'notes': ''
  },
  
]

    })

});
