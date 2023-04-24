//your JS code here. If required.
let timer=document.getElementById("timer");
let d=Date();
d=d.split(" ");
let month={Jan:1,Feb:2,Mar:3,Apr:4,May:5,Jun:6,Jul:7,Aug:8,Sep:9,Oct:10,Nov:11,Dec:12};
let time=parseInt(d[4].slice(0,2));
let x="AM";
if(time==12){
    x="PM";
}
else if(time>12){
    x="PM";
    time=time-12;
}
let text=month[d[1]]+"/"+d[2]+"/"+d[3]+", "+time+d[4].slice(2,8)+" "+x;
timer.innerText=text;