
    var countDown = new Date("Dec 25, 2023 00:00:00").getTime();
    var secondsInterval = setInterval(function(){

        var dataOdierna = new Date().getTime();
        var timeleft = countDown - dataOdierna;
            
        var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
            
        document.getElementById("days").innerHTML = days
        document.getElementById("hours").innerHTML = hours
        document.getElementById("mins").innerHTML = minutes
        document.getElementById("secs").innerHTML = seconds
        
        }, 1000);


    
