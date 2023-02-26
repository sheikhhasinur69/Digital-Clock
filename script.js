function displayTime(){
    var dateTime = new Date();
    var hours = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    var session = document.getElementById('session');

    if(hours >= 12){
        session.innerHTML = 'PM'
    } else{
        session.innerHTML = 'AM'
    }

    if(hours > 12) {
        hours = hours - 12;
    }
    document.getElementById('hours').innerHTML =hours;
    document.getElementById('minutes').innerHTML =min;
    document.getElementById('seconds').innerHTML =sec;

}

setInterval( displayTime, 10);