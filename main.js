$(document).ready(function(){

    function getdate(){
        
        var today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();

        let session = "AM";
        if(h == 0){
            h = 12;
        }
        if(h >=12){
            session="PM";
        }
        if(h>12){
            h = h-12;
        }
        h = h<10 ? "0" + h : h;
        m = m<10 ? "0" + m : m;
        s = s<10 ? "0" + s : s;
        $("#hours").text(h);
        $("#min").text(m);
        $("#sec").text(s);
        $("#period").text(session);
        setTimeout(getdate,1000);
    }
    getdate();
});