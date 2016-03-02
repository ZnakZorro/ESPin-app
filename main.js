'use strict';
var url=location.pathname;
function $(id){return document.getElementById(id) ? document.getElementById(id) : document.getElementById('nono');}
document.addEventListener('DOMContentLoaded', function(){
var mx = document.getElementsByTagName("meta");
for (var i=0; i<mx.length; i++) {if (mx[i].name !='tmpl') continue;
var url=mx[i]['content']; var id=url.split('.')[0]; var dc=document.createElement('div'); dc.id=id
$('tmpl').appendChild(dc);ax(url,id)}
setTimeout(function(){setClocs();},5222);
});
function setClocs(){var nd = document.querySelectorAll('input[type=time]'); for(var i=0; i<nd.length; i++){nd[i].value=((new Date()).toLocaleString()).slice(-8,-3)}}