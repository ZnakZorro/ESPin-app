function pad(n){return("0"+n).slice(-2)}
function tc(t){var MF=Math.floor;return pad(MF(t%86400/3600))+" "+pad(MF(t%3600/60))+" "+pad(t%60)}
function displayState(j){
//console.log(j,j.timers,j.cloks)
if (j.pins){
var a=j.pins;
var c=j.cloks;
var t=j.timers;
for (var i=0;i<3;i++){
var n=i+5;
$("pin"+n).className="pin"+a[i];
$("led"+n).className="b pin"+a[i];
$("time"+n).innerHTML=tc(t[i]);
$("st"+n).value=Math.sqrt(t[i]);
if(c[i][0]){$('dt'+n+'1').value=c[i][0]}
if(c[i][1]){$('dt'+n+'0').value=c[i][1]}
}
$("time").innerHTML=j.time;
$('tmpl').className=j.mode;
$("adc").innerHTML=(Math.round(1100*j.adc/1024)/1000)+" V";
$("cheer").innerHTML=j.cheer;	$("cheer").style.background=j.cheer;
}
}
function suwak(pin,v){ax('type=ajax&pin='+pin+'&pwm='+v,'info')}
function sTime(pin,v){v=v*v;ax('type=ajax&pin='+pin+'&state=2&delay='+v,'info')}
