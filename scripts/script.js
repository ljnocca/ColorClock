    //**THIS FUNCTION WILL BE USED FOR THE MINS & SECONDS FIELD...
    //ANY NUMBER < 10 WILL HAVE A '0' AS THE FIRST DIGIT UNTIL IT REACHES 10***
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function clockStart() {
    //***CLOCK***
    var today = new Date(); //use new Date built-in function and set it to variable 'today'
    var h = today.getHours(); //assign hrs, mins, and seconds variables:
    var m = today.getMinutes();
    var s = today.getSeconds();

    m = checkTime(m); //run the checkTime function for mins & secs
    s = checkTime(s);

    var clockNode = document.getElementById('time') //assign current hr, min, sec to the #time html with ":" seperators
    clockNode.innerHTML = h + ":" + m + ":" + s;

    //***CHANGING BACKGROUND COLOR***
    var hrsToHEX = Math.floor((h / 23) * 255).toString(16) //convert current hrs passed to base16 number
    var minsToHEX = Math.floor((m / 59) * 255).toString(16) //convert current mins passed to base16 number
    var secsToHEX = Math.floor((s / 59) * 255).toString(16) //convert current secs passed to base16 number
    var timeToHEX = "#" + hrsToHEX + minsToHEX + secsToHEX //concatenate the 3 variables to a HEX string
    var outerDIV = document.querySelector('#outer')
    outerDIV.style.background = timeToHEX //assign timeToHEX to the outer div's background color 

    //***HEX CODE DISPLAY****
    var hexNode = document.querySelector('#HEX')
    hexNode.innerHTML = timeToHEX

    //***GROWING MINUTE LINE****   
    var lineNode = document.querySelector('#line')
    var secondFraction = (s / 59) * 100;
    setTimeout(function() { lineNode.style.width = secondFraction + '%' }, 10)
}

//***SET INTERVAL RUNS CLOCK START EVERY SECOND***
setInterval(clockStart, 1000);
