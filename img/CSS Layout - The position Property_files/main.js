(function(){var c="Translate",d=this;function e(a,w){a=a.split(".");var b=d;a[0]in b||!b.execScript||b.execScript("var "+a[0]);for(var f;a.length&&(f=a.shift());)a.length||void 0===w?b[f]?b=b[f]:b=b[f]={}:b[f]=w};var g={0:c,1:"Cancel",2:"Close",3:function(a){return"Google has automatically translated this page to: "+a},4:function(a){return"Translated to: "+a},5:"Error: The server could not complete your request. Try again later.",6:"Learn more",7:function(a){return"Powered by "+a},8:c,9:"Translation in progress",10:function(a){return"Translate this page to: "+(a+" using Google Translate?")},11:function(a){return"View this page in: "+a},12:"Show original",13:"The content of this local file will be sent to Google for translation using a secure connection.",
14:"The content of this secure page will be sent to Google for translation using a secure connection.",15:"The content of this intranet page will be sent to Google for translation using a secure connection.",16:"Select Language",17:function(a){return"Turn off "+(a+" translation")},18:function(a){return"Turn off for: "+a},19:"Always hide",20:"Original text:",21:"Contribute a better translation",22:"Contribute",23:"Translate all",24:"Restore all",25:"Cancel all",26:"Translate sections to my language",
27:function(a){return"Translate everything to "+a},28:"Show original languages",29:"Options",30:"Turn off translation for this site",31:null,32:"Show alternative translations",33:"Click on words above to get alternative translations",34:"Use",35:"Drag with shift key to reorder",36:"Click for alternative translations",37:"Hold down the shift key, click, and drag the words above to reorder.",38:"Thank you for contributing your translation suggestion to Google Translate.",39:"Manage translation for this site",
40:"Click a word for alternative translations, or double-click to edit directly",41:"Original text",42:c,43:c,44:"Your correction has been submitted.",45:"Error: The language of the webpage is not supported."};var h=window.google&&google.translate&&google.translate._const;
if(h){var k;a:{for(var l=[],m=[""],n=0;n<m.length;++n){var p=m[n].split(","),q=p[0];if(q){var r=Number(p[1]);if(!(!r||.1<r||0>r)){var t=Number(p[2]),u=new Date,v=1E4*u.getFullYear()+100*(u.getMonth()+1)+u.getDate();!t||t<v||l.push({version:q,ratio:r,a:t})}}}for(var x=0,y=window.location.href.match(/google\.translate\.element\.random=([\d\.]+)/),z=Number(y&&y[1])||Math.random(),n=0;n<l.length;++n){var A=l[n],x=x+A.ratio;if(1<=x)break;if(z<x){k=A.version;break a}}k="59"}var B="/translate_static/js/element/%s/element_main.js".replace("%s",
k);if("0"==k){var C=" translate_static js element %s element_main.js".split(" ");C[C.length-1]="main.js";B=C.join("/").replace("%s",k)}if(h._cjlc)h._cjlc(h._pas+h._pah+B);else{var D=h._pas+h._pah+B,E=document.createElement("script");E.type="text/javascript";E.charset="UTF-8";E.src=D;var F=document.getElementsByTagName("head")[0];F||(F=document.body.parentNode.appendChild(document.createElement("head")));F.appendChild(E)}e("google.translate.m",g);e("google.translate.v",k)};}).call(window)
