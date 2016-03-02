function sendTime(){
var timesek = Math.round(((new Date()).getTime())/1000);
ax('type=ajax&time='+timesek+'&os='+navigator.platform,'info');
}
setTimeout(function(){sendTime()},5555);
setInterval(function(){sendTime();},333333);

document.addEventListener('DOMContentLoaded', function() {
source = new EventSource(url+'type=sse');
source.onmessage = function(event) {
	try {j = JSON.parse(event.data);} catch(err) {}
	if(j) {displayState(j)}
	var czas = ((new Date(event.timeStamp)).toLocaleString()).slice(12,20);			
	$("czas").innerHTML = czas;
	$("info").innerHTML = event.data;
}
});
function extra(){[].forEach.call(document.querySelectorAll('div.ca'), function(v) {if (v.style.display == 'none') v.style.display='block'; else v.style.display='none';});}
function cl(p,c0,c1){c0=c0.split(":");c0=3600*c0[0]+60*c0[1];c1=c1.split(":");c1=3600*c1[0]+60*c1[1];ax('type=alarm&pin='+p+'&stop='+c0+'&start='+c1,'info')}
function scl(p){cl(p,$("dt"+p+"0").value,$("dt"+p+"1").value);}
