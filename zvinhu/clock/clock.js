


function showTime(){
    var timeInterval = ""
    var mydate = new Date()
    var h = mydate.getHours()
    var m = mydate.getMinutes()
    var s = mydate.getSeconds()
    if (h<= 12)
    {

        h=(h<10)?"0"+h:h
        m=(m<10)?"0"+m:m
        s=(s<10)?"0"+s:s

        mydate = "AM"
        document.getElementById("digital-clock").innerHTML = `${h}:${m}:${s}:${mydate}`
    }
    else{
        mydate = "PM"
        h -= 12

        h=(h<10)?"0"+h:h
        m=(m<10)?"0"+m:m
        s=(s<10)?"0"+s:s

        document.getElementById("digital-clock").innerHTML = `${h}:${m}:${s}:${mydate}`
    }
    

    setTimeout(showTime,1000)
}
showTime()

