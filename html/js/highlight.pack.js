var hljs=new function(){var p={};var a={};function n(c){return c.replace(/&/gm,"&amp;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;")}function k(s,r){if(!s){return false}for(var c=0;c<s.length;c++){if(s[c]==r){return true}}return false}function g(K,E){function L(P,O){P.sm=[];for(var N=0;N<P.c.length;N++){for(var r=0;r<O.m.length;r++){if(O.m[r].cN==P.c[N]){P.sm[P.sm.length]=O.m[r]}}}}function A(r,O){if(!O.c){return null}if(!O.sm){L(O,I)}for(var N=0;N<O.sm.length;N++){if(O.sm[N].bR.test(r)){return O.sm[N]}}return null}function x(N,r){if(D[N].e&&D[N].eR.test(r)){return 1}if(D[N].eW){var O=x(N-1,r);return O?O+1:0}return 0}function y(r,N){return N.iR&&N.iR.test(r)}function B(S,Q){var O=[];function R(T){if(!k(O,T)){O[O.length]=T}}if(S.c){for(var N=0;N<Q.m.length;N++){if(k(S.c,Q.m[N].cN)){R(Q.m[N].b)}}}var r=D.length-1;do{if(D[r].e){R(D[r].e)}r--}while(D[r+1].eW);if(S.i){R(S.i)}var P="("+O[0];for(var N=0;N<O.length;N++){P+="|"+O[N]}P+=")";return e(Q,P)}function t(O,N){var P=D[D.length-1];if(!P.t){P.t=B(P,I)}O=O.substr(N);var r=P.t.exec(O);if(!r){return[O,"",true]}if(r.index==0){return["",r[0],false]}else{return[O.substr(0,r.index),r[0],false]}}function s(Q,r){var N=I.cI?r[0].toLowerCase():r[0];for(var P in Q.keywordGroups){if(!Q.keywordGroups.hasOwnProperty(P)){continue}var O=Q.keywordGroups[P].hasOwnProperty(N);if(O){return[P,O]}}return false}function G(P,S){if(!S.k||!S.l){return n(P)}if(!S.lR){var R="("+S.l[0];for(var O=1;O<S.l.length;O++){R+="|"+S.l[O]}R+=")";S.lR=e(I,R,true)}var Q="";var T=0;S.lR.lastIndex=0;var N=S.lR.exec(P);while(N){Q+=n(P.substr(T,N.index-T));var r=s(S,N);if(r){u+=r[1];Q+='<span class="'+r[0]+'">'+n(N[0])+"</span>"}else{Q+=n(N[0])}T=S.lR.lastIndex;N=S.lR.exec(P)}Q+=n(P.substr(T,P.length-T));return Q}function M(r,O){if(O.subLanguage&&a[O.subLanguage]){var N=g(O.subLanguage,r);u+=N.keyword_count;C+=N.r;return N.value}else{return G(r,O)}}function J(O,r){var N=O.nM?"":'<span class="'+O.cN+'">';if(O.rB){c+=N;O.buffer=""}else{if(O.eB){c+=n(r)+N;O.buffer=""}else{c+=N;O.buffer=r}}D[D.length]=O}function F(R,N,S){var T=D[D.length-1];if(S){c+=M(T.buffer+R,T);return false}var O=A(N,T);if(O){c+=M(T.buffer+R,T);J(O,N);C+=O.r;return O.rB}var r=x(D.length-1,N);if(r){var Q=T.nM?"":"</span>";if(T.rE){c+=M(T.buffer+R,T)+Q}else{if(T.eE){c+=M(T.buffer+R,T)+Q+n(N)}else{c+=M(T.buffer+R+N,T)+Q}}while(r>1){Q=D[D.length-2].nM?"":"</span>";c+=Q;r--;D.length--}D.length--;D[D.length-1].buffer="";if(T.starts){for(var P=0;P<I.m.length;P++){if(I.m[P].cN==T.starts){J(I.m[P],"");break}}}return T.rE}if(y(N,T)){throw"Illegal"}}var I=p[K];var D=[I.dM];var C=0;var u=0;var c="";try{var w=0;I.dM.buffer="";do{var z=t(E,w);var v=F(z[0],z[1],z[2]);w+=z[0].length;if(!v){w+=z[1].length}}while(!z[2]);if(D.length>1){throw"Illegal"}return{r:C,keyword_count:u,value:c}}catch(H){if(H=="Illegal"){return{r:0,keyword_count:0,value:n(E)}}else{throw H}}}function h(s){var r="";for(var c=0;c<s.childNodes.length;c++){if(s.childNodes[c].nodeType==3){r+=s.childNodes[c].nodeValue}else{if(s.childNodes[c].nodeName=="BR"){r+="\n"}else{r+=h(s.childNodes[c])}}}return r}function b(t){var r=t.className.split(/\s+/);r=r.concat(t.parentNode.className.split(/\s+/));for(var c=0;c<r.length;c++){var s=r[c].replace(/^language-/,"");if(s=="no-highlight"){throw"No highlight"}if(p[s]){return s}}}function d(c){var r=[];(function(t,u){for(var s=0;s<t.childNodes.length;s++){if(t.childNodes[s].nodeType==3){u+=t.childNodes[s].nodeValue.length}else{if(t.childNodes[s].nodeName=="BR"){u+=1}else{r.push({event:"start",offset:u,node:t.childNodes[s]});u=arguments.callee(t.childNodes[s],u);r.push({event:"stop",offset:u,node:t.childNodes[s]})}}}return u})(c,0);return r}function m(z,A,y){var s=0;var x="";var u=[];function v(){if(z.length&&A.length){if(z[0].offset!=A[0].offset){return(z[0].offset<A[0].offset)?z:A}else{return(z[0].event=="start"&&A[0].event=="stop")?A:z}}else{return z.length?z:A}}function t(D){var E="<"+D.nodeName.toLowerCase();for(var C=0;C<D.attributes.length;C++){E+=" "+D.attributes[C].nodeName.toLowerCase()+'="'+n(D.attributes[C].nodeValue)+'"'}return E+">"}function B(C){return"</"+C.nodeName.toLowerCase()+">"}while(z.length||A.length){var w=v().splice(0,1)[0];x+=n(y.substr(s,w.offset-s));s=w.offset;if(w.event=="start"){x+=t(w.node);u.push(w.node)}else{if(w.event=="stop"){var r=u.length;do{r--;var c=u[r];x+=B(c)}while(c!=w.node);u.splice(r,1);while(r<u.length){x+=t(u[r]);r++}}}}x+=y.substr(s);return x}function q(y,C){try{var F=h(y);var v=b(y)}catch(z){if(z=="No highlight"){return}}if(v){var B=g(v,F).value}else{var D=0;for(var E in a){if(!a.hasOwnProperty(E)){continue}var t=g(E,F);var c=t.keyword_count+t.r;if(c>D){D=c;var B=t.value;v=E}}}if(B){if(C){B=B.replace(/^(\t+)/gm,function(r,I,H,G){return I.replace(/\t/g,C)})}var x=y.className;if(!x.match(v)){x+=" "+v}var s=d(y);if(s.length){var u=document.createElement("pre");u.innerHTML=B;B=m(s,d(u),F)}var A=document.createElement("div");A.innerHTML='<pre><code class="'+x+'">'+B+"</code></pre>";var w=y.parentNode.parentNode;w.replaceChild(A.firstChild,y.parentNode)}}function e(s,r,c){var t="m"+(s.cI?"i":"")+(c?"g":"");return new RegExp(r,t)}function j(){for(var r in p){if(!p.hasOwnProperty(r)){continue}var s=p[r];for(var c=0;c<s.m.length;c++){if(s.m[c].b){s.m[c].bR=e(s,"^"+s.m[c].b)}if(s.m[c].e){s.m[c].eR=e(s,"^"+s.m[c].e)}if(s.m[c].i){s.m[c].iR=e(s,"^(?:"+s.m[c].i+")")}s.dM.iR=e(s,"^(?:"+s.dM.i+")");if(s.m[c].r==undefined){s.m[c].r=1}}}}function f(){function s(v){if(!v.keywordGroups){for(var u in v.k){if(!v.k.hasOwnProperty(u)){continue}if(v.k[u] instanceof Object){v.keywordGroups=v.k}else{v.keywordGroups={keyword:v.k}}break}}}for(var r in p){if(!p.hasOwnProperty(r)){continue}var t=p[r];s(t.dM);for(var c=0;c<t.m.length;c++){s(t.m[c])}}}function i(r){for(var c=0;c<r.childNodes.length;c++){node=r.childNodes[c];if(node.nodeName=="CODE"){return node}if(!(node.nodeType==3&&node.nodeValue.match(/\s+/))){return null}}}function l(){if(l.called){return}l.called=true;j();f();if(arguments.length){for(var c=0;c<arguments.length;c++){if(p[arguments[c]]){a[arguments[c]]=p[arguments[c]]}}}else{a=p}var s=document.getElementsByTagName("pre");for(var c=0;c<s.length;c++){var r=i(s[c]);if(r){q(r,hljs.tabReplace)}}}function o(){var c=arguments;var r=function(){l.apply(null,c)};if(window.addEventListener){window.addEventListener("DOMContentLoaded",r,false);window.addEventListener("load",r,false)}else{if(window.attachEvent){window.attachEvent("onload",r)}else{window.onload=r}}}this.LANGUAGES=p;this.initHighlightingOnLoad=o;this.highlightBlock=q;this.initHighlighting=l;this.IR="[a-zA-Z][a-zA-Z0-9_]*";this.UIR="[a-zA-Z_][a-zA-Z0-9_]*";this.NR="\\b\\d+(\\.\\d+)?";this.CNR="\\b(0x[A-Za-z0-9]+|\\d+(\\.\\d+)?)";this.RSR="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|\\.|-|-=|/|/=|:|;|<|<<|<<=|<=|=|==|===|>|>=|>>|>>=|>>>|>>>=|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~";this.ASM={cN:"string",b:"'",e:"'",i:"\\n",c:["escape"],r:0};this.QSM={cN:"string",b:'"',e:'"',i:"\\n",c:["escape"],r:0};this.BE={cN:"escape",b:"\\\\.",e:"^",nM:true,r:0};this.CLCM={cN:"comment",b:"//",e:"$",r:0};this.CBLCLM={cN:"comment",b:"/\\*",e:"\\*/"};this.HCM={cN:"comment",b:"#",e:"$"};this.CNM={cN:"number",b:this.CNR,e:"^",r:0}}();var initHighlightingOnLoad=hljs.initHighlightingOnLoad;hljs.LANGUAGES.cpp=function(){var a={keyword:{"false":1,"int":1,"float":1,"while":1,"private":1,"char":1,"catch":1,"export":1,virtual:1,operator:2,sizeof:2,dynamic_cast:2,typedef:2,const_cast:2,"const":1,struct:1,"for":1,static_cast:2,union:1,namespace:1,unsigned:1,"long":1,"throw":1,"volatile":2,"static":1,"protected":1,bool:1,template:1,mutable:1,"if":1,"public":1,friend:2,"do":1,"return":1,"goto":1,auto:1,"void":2,"enum":1,"else":1,"break":1,"new":1,extern:1,using:1,"true":1,"class":1,asm:1,"case":1,typeid:1,"short":1,reinterpret_cast:2,"default":1,"double":1,register:1,explicit:1,signed:1,typename:1,"try":1,"this":1,"switch":1,"continue":1,wchar_t:1,inline:1,"delete":1},built_in:{std:1,string:1,cin:1,cout:1,cerr:1,clog:1,stringstream:1,istringstream:1,ostringstream:1,auto_ptr:1,deque:1,list:1,queue:1,stack:1,vector:1,map:1,set:1,bitset:1,multiset:1,multimap:1}};return{dM:{l:[hljs.UIR],i:"</",c:["comment","string","number","preprocessor","stl_container"],k:a},m:[hljs.CLCM,hljs.CBLCLM,hljs.CNM,hljs.QSM,hljs.BE,{cN:"string",b:"'",e:"[^\\\\]'",i:"[^\\\\][^']"},{cN:"preprocessor",b:"#",e:"$"},{cN:"stl_container",b:"\\b(deque|list|queue|stack|vector|map|set|bitset|multiset|multimap)\\s*<",e:">",c:["stl_container"],l:[hljs.UIR],k:a,r:10}]}}();hljs.LANGUAGES.delphi=function(){var a={and:1,safecall:1,cdecl:1,then:1,string:1,exports:1,library:1,not:1,pascal:1,set:1,virtual:1,file:1,"in":1,array:1,label:1,packed:1,"end.":1,index:1,"while":1,"const":1,raise:1,"for":1,to:1,implementation:1,"with":1,except:1,overload:1,destructor:1,downto:1,"finally":1,program:1,exit:1,unit:1,inherited:1,override:1,"if":1,type:1,until:1,"function":1,"do":1,begin:1,repeat:1,"goto":1,nil:1,far:1,initialization:1,object:1,"else":1,"var":1,uses:1,external:1,resourcestring:1,"interface":1,end:1,finalization:1,"class":1,asm:1,mod:1,"case":1,on:1,shr:1,shl:1,of:1,register:1,xorwrite:1,threadvar:1,"try":1,record:1,near:1,stored:1,constructor:1,stdcall:1,inline:1,div:1,out:1,or:1,procedure:1};var b={safecall:1,stdcall:1,pascal:1,stored:1,"const":1,implementation:1,finalization:1,except:1,to:1,"finally":1,program:1,inherited:1,override:1,then:1,exports:1,string:1,read:1,not:1,mod:1,shr:1,"try":1,div:1,shl:1,set:1,library:1,message:1,packed:1,index:1,"for":1,near:1,overload:1,label:1,downto:1,exit:1,"public":1,"goto":1,"interface":1,asm:1,on:1,of:1,constructor:1,or:1,"private":1,array:1,unit:1,raise:1,destructor:1,"var":1,type:1,until:1,"function":1,"else":1,external:1,"with":1,"case":1,"default":1,record:1,"while":1,"protected":1,property:1,procedure:1,published:1,and:1,cdecl:1,"do":1,threadvar:1,file:1,"in":1,"if":1,end:1,virtual:1,write:1,far:1,out:1,begin:1,repeat:1,nil:1,initialization:1,object:1,uses:1,resourcestring:1,"class":1,register:1,xorwrite:1,inline:1,"static":1};return{dM:{l:[hljs.IR],i:'("|\\$[G-Zg-z]|\\/\\*|</)',c:["comment","string","number","function","class"],k:a},cI:true,m:[{cN:"comment",b:"{",e:"}",r:0},{cN:"comment",b:"\\(\\*",e:"\\*\\)",r:10},hljs.CLCM,{cN:"number",b:hljs.NR,e:"^",r:0},{cN:"string",b:"'",e:"'",c:["quote"],r:0},{cN:"string",b:"(#\\d+)+",e:"^"},{cN:"quote",b:"''",e:"^",nM:true},{cN:"function",b:"function\\b",e:"[:;]",l:[hljs.IR],k:{"function":1},c:["title","params","comment"],r:0},{cN:"function",b:"(procedure|constructor|destructor)\\b",e:";",l:[hljs.IR],k:{constructor:1,destructor:1,procedure:1},c:["title","params","comment"],r:10},{cN:"title",b:hljs.IR,e:"^"},{cN:"params",b:"\\(",e:"\\)",l:[hljs.IR],k:a,c:["string"]},{cN:"class",b:"=\\bclass\\b",e:"end;",l:[hljs.IR],k:b,c:["string","comment","function"]}]}}();hljs.LANGUAGES.diff={cI:true,dM:{c:["chunk","header","addition","deletion","change"]},m:[{cN:"chunk",b:"^\\@\\@ +\\-\\d+,\\d+ +\\+\\d+,\\d+ +\\@\\@$",e:"^",r:10},{cN:"chunk",b:"^\\*\\*\\* +\\d+,\\d+ +\\*\\*\\*\\*$",e:"^",r:10},{cN:"chunk",b:"^\\-\\-\\- +\\d+,\\d+ +\\-\\-\\-\\-$",e:"^",r:10},{cN:"header",b:"Index: ",e:"$"},{cN:"header",b:"=====",e:"=====$"},{cN:"header",b:"^\\-\\-\\-",e:"$"},{cN:"header",b:"^\\*{3} ",e:"$"},{cN:"header",b:"^\\+\\+\\+",e:"$"},{cN:"header",b:"\\*{5}",e:"\\*{5}$"},{cN:"addition",b:"^\\+",e:"$"},{cN:"deletion",b:"^\\-",e:"$"},{cN:"change",b:"^\\!",e:"$"}]};hljs.XML_COMMENT={cN:"comment",b:"<!--",e:"-->"};hljs.XML_ATTR={cN:"attribute",b:"\\s[a-zA-Z\\:-]+=",e:"^",c:["value"]};hljs.XML_VALUE_QUOT={cN:"value",b:'"',e:'"'};hljs.XML_VALUE_APOS={cN:"value",b:"'",e:"'"};hljs.LANGUAGES.xml={dM:{c:["pi","comment","cdata","tag"]},cI:true,m:[{cN:"pi",b:"<\\?",e:"\\?>",r:10},hljs.XML_COMMENT,{cN:"cdata",b:"<\\!\\[CDATA\\[",e:"\\]\\]>"},{cN:"tag",b:"</?",e:">",c:["title","tag_internal"],r:1.5},{cN:"title",b:"[A-Za-z:_][A-Za-z0-9\\._:-]+",e:"^",r:0},{cN:"tag_internal",b:"^",eW:true,nM:true,c:["attribute"],r:0,i:"[\\+\\.]"},hljs.XML_ATTR,hljs.XML_VALUE_QUOT,hljs.XML_VALUE_APOS]};hljs.HTML_TAGS={code:1,kbd:1,font:1,noscript:1,style:1,img:1,title:1,menu:1,tt:1,tr:1,param:1,li:1,tfoot:1,th:1,input:1,td:1,dl:1,blockquote:1,fieldset:1,big:1,dd:1,abbr:1,optgroup:1,dt:1,button:1,isindex:1,p:1,small:1,div:1,dir:1,em:1,frame:1,meta:1,sub:1,bdo:1,label:1,acronym:1,sup:1,body:1,xml:1,basefont:1,base:1,br:1,address:1,strong:1,legend:1,ol:1,script:1,caption:1,s:1,col:1,h2:1,h3:1,h1:1,h6:1,h4:1,h5:1,table:1,select:1,noframes:1,span:1,area:1,dfn:1,strike:1,cite:1,thead:1,head:1,option:1,form:1,hr:1,"var":1,link:1,b:1,colgroup:1,ul:1,applet:1,del:1,iframe:1,pre:1,frameset:1,ins:1,tbody:1,html:1,samp:1,map:1,object:1,a:1,xmlns:1,center:1,textarea:1,i:1,q:1,u:1};hljs.HTML_DOCTYPE={cN:"doctype",b:"<!DOCTYPE",e:">",r:10};hljs.HTML_ATTR={cN:"attribute",b:"\\s[a-zA-Z\\:-]+=",e:"^",c:["value"]};hljs.HTML_SHORT_ATTR={cN:"attribute",b:" [a-zA-Z]+",e:"^"};hljs.HTML_VALUE={cN:"value",b:"[a-zA-Z0-9]+",e:"^"};hljs.LANGUAGES.html={dM:{c:["tag","comment","doctype","vbscript"]},cI:true,m:[hljs.XML_COMMENT,hljs.HTML_DOCTYPE,{cN:"tag",l:[hljs.IR],k:hljs.HTML_TAGS,b:"<style",e:">",c:["attribute"],i:"[\\+\\.]",starts:"css"},{cN:"tag",l:[hljs.IR],k:hljs.HTML_TAGS,b:"<script",e:">",c:["attribute"],i:"[\\+\\.]",starts:"javascript"},{cN:"tag",l:[hljs.IR],k:hljs.HTML_TAGS,b:"<[A-Za-z/]",e:">",c:["attribute"],i:"[\\+\\.]"},{cN:"css",e:"</style>",rE:true,subLanguage:"css"},{cN:"javascript",e:"<\/script>",rE:true,subLanguage:"javascript"},hljs.HTML_ATTR,hljs.HTML_SHORT_ATTR,hljs.XML_VALUE_QUOT,hljs.XML_VALUE_APOS,hljs.HTML_VALUE,{cN:"vbscript",b:"<%",e:"%>",subLanguage:"vbscript"}]};hljs.LANGUAGES.css={dM:{c:["at_rule","id","class","attr_selector","pseudo","rules","comment"],k:hljs.HTML_TAGS,l:[hljs.IR],i:"="},cI:true,m:[{cN:"at_rule",b:"@",e:"[{;]",eE:true,l:[hljs.IR],k:{"import":1,page:1,media:1,charset:1,"font-face":1},c:["function","string","number","pseudo"]},{cN:"id",b:"\\#[A-Za-z0-9_-]+",e:"^"},{cN:"class",b:"\\.[A-Za-z0-9_-]+",e:"^",r:0},{cN:"attr_selector",b:"\\[",e:"\\]",i:"$"},{cN:"pseudo",b:":(:)?[a-zA-Z0-9\\_\\-\\+\\(\\)\\\"\\']+",e:"^"},{cN:"rules",b:"{",e:"}",c:["rule","comment"],i:"[^\\s]"},{cN:"rule",b:"[A-Z\\_\\.\\-]+\\s*:",e:";",eW:true,l:["[A-Za-z-]+"],k:{"play-during":1,"counter-reset":1,"counter-increment":1,"min-height":1,quotes:1,"border-top":1,pitch:1,font:1,pause:1,"list-style-image":1,"border-width":1,cue:1,"outline-width":1,"border-left":1,elevation:1,richness:1,"speech-rate":1,"border-bottom":1,"border-spacing":1,background:1,"list-style-type":1,"text-align":1,"page-break-inside":1,orphans:1,"page-break-before":1,"text-transform":1,"line-height":1,"padding-left":1,"font-size":1,right:1,"word-spacing":1,"padding-top":1,"outline-style":1,bottom:1,content:1,"border-right-style":1,"padding-right":1,"border-left-style":1,"voice-family":1,"background-color":1,"border-bottom-color":1,"outline-color":1,"unicode-bidi":1,"max-width":1,"font-family":1,"caption-side":1,"border-right-width":1,"pause-before":1,"border-top-style":1,color:1,"border-collapse":1,"border-bottom-width":1,"float":1,height:1,"max-height":1,"margin-right":1,"border-top-width":1,speak:1,"speak-header":1,top:1,"cue-before":1,"min-width":1,width:1,"font-variant":1,"border-top-color":1,"background-position":1,"empty-cells":1,direction:1,"border-right":1,visibility:1,padding:1,"border-style":1,"background-attachment":1,overflow:1,"border-bottom-style":1,cursor:1,margin:1,display:1,"border-left-width":1,"letter-spacing":1,"vertical-align":1,clip:1,"border-color":1,"list-style":1,"padding-bottom":1,"pause-after":1,"speak-numeral":1,"margin-left":1,widows:1,border:1,"font-style":1,"border-left-color":1,"pitch-range":1,"background-repeat":1,"table-layout":1,"margin-bottom":1,"speak-punctuation":1,"font-weight":1,"border-right-color":1,"page-break-after":1,position:1,"white-space":1,"text-indent":1,"background-image":1,volume:1,stress:1,outline:1,clear:1,"z-index":1,"text-decoration":1,"margin-top":1,azimuth:1,"cue-after":1,left:1,"list-style-position":1},c:["value"]},hljs.CBLCLM,{cN:"value",b:"^",eW:true,eE:true,c:["function","number","hexcolor","string"]},{cN:"number",b:hljs.NR,e:"^"},{cN:"hexcolor",b:"\\#[0-9A-F]+",e:"^"},{cN:"function",b:hljs.IR+"\\(",e:"\\)",c:["params"]},{cN:"params",b:"^",eW:true,eE:true,c:["number","string"]},hljs.ASM,hljs.QSM]};hljs.LANGUAGES.lisp=function(){var a="[a-zA-Z_\\-\\+\\*\\/\\<\\=\\>\\&\\#][a-zA-Z0-9_\\-\\+\\*\\/\\<\\=\\>\\&\\#]*";var b="(\\-|\\+)?\\d+(\\.\\d+|\\/\\d+)?((d|e|f|l|s)(\\+|\\-)?\\d+)?";return{cI:true,dM:{l:[a],c:["literal","number","string","comment","quoted","list"],i:"[^\\s]"},m:[hljs.QSM,{cN:"number",b:b,e:"^"},{cN:"number",b:"#b[0-1]+(/[0-1]+)?",e:"^"},{cN:"number",b:"#o[0-7]+(/[0-7]+)?",e:"^"},{cN:"number",b:"#x[0-9a-f]+(/[0-9a-f]+)?",e:"^"},{cN:"number",b:"#c\\("+b+" +"+b,e:"\\)"},{cN:"comment",b:";",e:"$"},{cN:"quoted",b:"['`]\\(",e:"\\)",c:["number","string","variable","keyword","quoted_list"]},{cN:"quoted",b:"\\(quote ",e:"\\)",c:["number","string","variable","keyword","quoted_list"],l:[a],k:{title:{quote:1}}},{cN:"quoted_list",b:"\\(",e:"\\)",c:["quoted_list","literal","number","string"]},{cN:"list",b:"\\(",e:"\\)",c:["title","body"]},{cN:"title",b:a,e:"^",eW:true},{cN:"body",b:"^",eW:true,eE:true,c:["quoted","list","literal","number","string","comment","variable","keyword"]},{cN:"keyword",b:"[:&]"+a,e:"^"},{cN:"variable",b:"\\*",e:"\\*"},{cN:"literal",b:"\\b(t{1}|nil)\\b",e:"^"}]}}();hljs.LANGUAGES.python={dM:{l:[hljs.UIR],i:"(</|->)",c:["comment","string","function","class","number","decorator"],k:{keyword:{and:1,elif:1,is:1,global:1,as:1,"in":1,"if":1,from:1,raise:1,"for":1,except:1,"finally":1,print:1,"import":1,pass:1,"return":1,exec:1,"else":1,"break":1,not:1,"with":1,"class":1,assert:1,yield:1,"try":1,"while":1,"continue":1,del:1,or:1,def:1,lambda:1},built_in:{None:1,True:1,False:1,Ellipsis:1,NotImplemented:1}}},m:[{cN:"function",l:[hljs.UIR],b:"\\bdef ",e:":",i:"$",k:{def:1},c:["title","params"],r:10},{cN:"class",l:[hljs.UIR],b:"\\bclass ",e:":",i:"[${]",k:{"class":1},c:["title","params",],r:10},{cN:"title",b:hljs.UIR,e:"^"},{cN:"params",b:"\\(",e:"\\)",c:["string"]},hljs.HCM,hljs.CNM,{cN:"string",b:"u?r?'''",e:"'''",r:10},{cN:"string",b:'u?r?"""',e:'"""',r:10},hljs.ASM,hljs.QSM,hljs.BE,{cN:"string",b:"(u|r|ur)'",e:"'",c:["escape"],r:10},{cN:"string",b:'(u|r|ur)"',e:'"',c:["escape"],r:10},{cN:"decorator",b:"@",e:"$"}]};hljs.LANGUAGES.php={dM:{l:[hljs.IR],c:["comment","number","string","variable","preprocessor"],k:{and:1,include_once:1,list:1,"abstract":1,global:1,"private":1,echo:1,"interface":1,as:1,"static":1,endswitch:1,array:1,"null":1,"if":1,endwhile:1,or:1,"const":1,"for":1,endforeach:1,self:1,"var":1,"while":1,isset:1,"public":1,"protected":1,exit:1,foreach:1,"throw":1,elseif:1,"extends":1,include:1,__FILE__:1,empty:1,require_once:1,"function":1,"do":1,xor:1,"return":1,"implements":1,parent:1,clone:1,use:1,__CLASS__:1,__LINE__:1,"else":1,"break":1,print:1,"eval":1,"new":1,"catch":1,__METHOD__:1,"class":1,"case":1,exception:1,php_user_filter:1,"default":1,die:1,require:1,__FUNCTION__:1,enddeclare:1,"final":1,"try":1,"this":1,"switch":1,"continue":1,endfor:1,endif:1,declare:1,unset:1}},cI:true,m:[hljs.CLCM,hljs.HCM,{cN:"comment",b:"/\\*",e:"\\*/",c:["phpdoc"]},{cN:"phpdoc",b:"\\s@[A-Za-z]+",e:"^",r:10},hljs.CNM,{cN:"string",b:"'",e:"'",c:["escape"],r:0},{cN:"string",b:'"',e:'"',c:["escape"],r:0},hljs.BE,{cN:"variable",b:"\\$[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*",e:"^"},{cN:"preprocessor",b:"<\\?php",e:"^",r:10},{cN:"preprocessor",b:"\\?>",e:"^"}]};hljs.LANGUAGES.javascript={dM:{l:[hljs.UIR],c:["string","comment","number","regexp_container","function"],k:{keyword:{"in":1,"if":1,"for":1,"while":1,"finally":1,"var":1,"new":1,"function":1,"do":1,"return":1,"void":1,"else":1,"break":1,"catch":1,"instanceof":1,"with":1,"throw":1,"case":1,"default":1,"try":1,"this":1,"switch":1,"continue":1,"typeof":1,"delete":1},literal:{"true":1,"false":1,"null":1}}},m:[hljs.CLCM,hljs.CBLCLM,hljs.CNM,hljs.ASM,hljs.QSM,hljs.BE,{cN:"regexp_container",b:"("+hljs.RSR+"|case|return|throw)\\s*",e:"^",nM:true,l:[hljs.IR],k:{"return":1,"throw":1,"case":1},c:["comment","regexp"],r:0},{cN:"regexp",b:"/.*?[^\\\\/]/[gim]*",e:"^"},{cN:"function",b:"\\bfunction\\b",e:"{",l:[hljs.UIR],k:{"function":1},c:["title","params"]},{cN:"title",b:"[A-Za-z$_][0-9A-Za-z$_]*",e:"^"},{cN:"params",b:"\\(",e:"\\)",c:["string","comment"]}]};hljs.LANGUAGES.ruby=function(){var a="[a-zA-Z_][a-zA-Z0-9_]*(\\!|\\?)?";var b=["comment","string","char","class","function","module_name","symbol","number","variable","regexp_container"];var c={keyword:{and:1,"false":1,then:1,defined:1,module:1,"in":1,"return":1,redo:1,"if":1,BEGIN:1,retry:1,end:1,"for":1,"true":1,self:1,when:1,next:1,until:1,"do":1,begin:1,unless:1,END:1,rescue:1,nil:1,"else":1,"break":1,undef:1,not:1,"super":1,"class":1,"case":1,require:1,yield:1,alias:1,"while":1,ensure:1,elsif:1,or:1,def:1},keymethods:{__id__:1,__send__:1,abort:1,abs:1,"all?":1,allocate:1,ancestors:1,"any?":1,arity:1,assoc:1,at:1,at_exit:1,autoload:1,"autoload?":1,"between?":1,binding:1,binmode:1,"block_given?":1,call:1,callcc:1,caller:1,capitalize:1,"capitalize!":1,casecmp:1,"catch":1,ceil:1,center:1,chomp:1,"chomp!":1,chop:1,"chop!":1,chr:1,"class":1,class_eval:1,"class_variable_defined?":1,class_variables:1,clear:1,clone:1,close:1,close_read:1,close_write:1,"closed?":1,coerce:1,collect:1,"collect!":1,compact:1,"compact!":1,concat:1,"const_defined?":1,const_get:1,const_missing:1,const_set:1,constants:1,count:1,crypt:1,"default":1,default_proc:1,"delete":1,"delete!":1,delete_at:1,delete_if:1,detect:1,display:1,div:1,divmod:1,downcase:1,"downcase!":1,downto:1,dump:1,dup:1,each:1,each_byte:1,each_index:1,each_key:1,each_line:1,each_pair:1,each_value:1,each_with_index:1,"empty?":1,entries:1,eof:1,"eof?":1,"eql?":1,"equal?":1,"eval":1,exec:1,exit:1,"exit!":1,extend:1,fail:1,fcntl:1,fetch:1,fileno:1,fill:1,find:1,find_all:1,first:1,flatten:1,"flatten!":1,floor:1,flush:1,for_fd:1,foreach:1,fork:1,format:1,freeze:1,"frozen?":1,fsync:1,getc:1,gets:1,global_variables:1,grep:1,gsub:1,"gsub!":1,"has_key?":1,"has_value?":1,hash:1,hex:1,id:1,"include?":1,included_modules:1,index:1,indexes:1,indices:1,induced_from:1,inject:1,insert:1,inspect:1,instance_eval:1,instance_method:1,instance_methods:1,"instance_of?":1,"instance_variable_defined?":1,instance_variable_get:1,instance_variable_set:1,instance_variables:1,"integer?":1,intern:1,invert:1,ioctl:1,"is_a?":1,isatty:1,"iterator?":1,join:1,"key?":1,keys:1,"kind_of?":1,lambda:1,last:1,length:1,lineno:1,ljust:1,load:1,local_variables:1,loop:1,lstrip:1,"lstrip!":1,map:1,"map!":1,match:1,max:1,"member?":1,merge:1,"merge!":1,method:1,"method_defined?":1,method_missing:1,methods:1,min:1,module_eval:1,modulo:1,name:1,nesting:1,"new":1,next:1,"next!":1,"nil?":1,nitems:1,"nonzero?":1,object_id:1,oct:1,open:1,pack:1,partition:1,pid:1,pipe:1,pop:1,popen:1,pos:1,prec:1,prec_f:1,prec_i:1,print:1,printf:1,private_class_method:1,private_instance_methods:1,"private_method_defined?":1,private_methods:1,proc:1,protected_instance_methods:1,"protected_method_defined?":1,protected_methods:1,public_class_method:1,public_instance_methods:1,"public_method_defined?":1,public_methods:1,push:1,putc:1,puts:1,quo:1,raise:1,rand:1,rassoc:1,read:1,read_nonblock:1,readchar:1,readline:1,readlines:1,readpartial:1,rehash:1,reject:1,"reject!":1,remainder:1,reopen:1,replace:1,require:1,"respond_to?":1,reverse:1,"reverse!":1,reverse_each:1,rewind:1,rindex:1,rjust:1,round:1,rstrip:1,"rstrip!":1,scan:1,seek:1,select:1,send:1,set_trace_func:1,shift:1,singleton_method_added:1,singleton_methods:1,size:1,sleep:1,slice:1,"slice!":1,sort:1,"sort!":1,sort_by:1,split:1,sprintf:1,squeeze:1,"squeeze!":1,srand:1,stat:1,step:1,store:1,strip:1,"strip!":1,sub:1,"sub!":1,succ:1,"succ!":1,sum:1,superclass:1,swapcase:1,"swapcase!":1,sync:1,syscall:1,sysopen:1,sysread:1,sysseek:1,system:1,syswrite:1,taint:1,"tainted?":1,tell:1,test:1,"throw":1,times:1,to_a:1,to_ary:1,to_f:1,to_hash:1,to_i:1,to_int:1,to_io:1,to_proc:1,to_s:1,to_str:1,to_sym:1,tr:1,"tr!":1,tr_s:1,"tr_s!":1,trace_var:1,transpose:1,trap:1,truncate:1,"tty?":1,type:1,ungetc:1,uniq:1,"uniq!":1,unpack:1,unshift:1,untaint:1,untrace_var:1,upcase:1,"upcase!":1,update:1,upto:1,"value?":1,values:1,values_at:1,warn:1,write:1,write_nonblock:1,"zero?":1,zip:1}};return{dM:{l:[a],c:b,k:c},m:[hljs.HCM,{cN:"comment",b:"^\\=begin",e:"^\\=end",r:10},{cN:"comment",b:"^__END__",e:"\\n$"},{cN:"params",b:"\\(",e:"\\)",l:[a],k:c,c:b},{cN:"function",b:"\\bdef\\b",e:"$|;",l:[a],k:c,c:["title","params","comment"]},{cN:"class",b:"\\b(class|module)\\b",e:"$",l:[hljs.UIR],k:c,c:["title","inheritance","comment"],k:{"class":1,module:1}},{cN:"title",b:"[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?",e:"^",r:0},{cN:"inheritance",b:"<\\s*",e:"^",c:["parent"]},{cN:"parent",b:"("+hljs.IR+"::)?"+hljs.IR,e:"^"},{cN:"number",b:"(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",e:"^",r:0},{cN:"number",b:"\\?\\w",e:"^"},{cN:"string",b:"'",e:"'",c:["escape","subst"],r:0},{cN:"string",b:'"',e:'"',c:["escape","subst"],r:0},{cN:"string",b:"%[qw]?\\(",e:"\\)",c:["escape","subst"],r:10},{cN:"string",b:"%[qw]?\\[",e:"\\]",c:["escape","subst"],r:10},{cN:"string",b:"%[qw]?{",e:"}",c:["escape","subst"],r:10},{cN:"string",b:"%[qw]?<",e:">",c:["escape","subst"],r:10},{cN:"string",b:"%[qw]?/",e:"/",c:["escape","subst"],r:10},{cN:"string",b:"%[qw]?%",e:"%",c:["escape","subst"],r:10},{cN:"string",b:"%[qw]?-",e:"-",c:["escape","subst"],r:10},{cN:"string",b:"%[qw]?\\|",e:"\\|",c:["escape","subst"],r:10},{cN:"module_name",b:":{2}"+a,e:"^",nM:true},{cN:"symbol",b:":"+a,e:"^"},{cN:"symbol",b:":",e:"^",c:["string"]},hljs.BE,{cN:"subst",b:"#\\{",e:"}",l:[a],k:c,c:b},{cN:"regexp_container",b:"("+hljs.RSR+")\\s*",e:"^",nM:true,c:["comment","regexp"],r:0},{cN:"regexp",b:"/",e:"/[a-z]*",i:"\\n",c:["escape"]},{cN:"variable",b:"(\\$\\W)|((\\$|\\@\\@?)(\\w+))",e:"^"}]}}();hljs.LANGUAGES.perl=function(){var b=["comment","string","number","regexp","sub","variable","operator","pod"];var a={getpwent:1,getservent:1,quotemeta:1,msgrcv:1,scalar:1,kill:1,dbmclose:1,undef:1,lc:1,ma:1,syswrite:1,tr:1,send:1,umask:1,sysopen:1,shmwrite:1,vec:1,qx:1,utime:1,local:1,oct:1,semctl:1,localtime:1,readpipe:1,"do":1,"return":1,format:1,read:1,sprintf:1,dbmopen:1,pop:1,getpgrp:1,not:1,getpwnam:1,rewinddir:1,qq:1,fileno:1,qw:1,endprotoent:1,wait:1,sethostent:1,bless:1,s:1,opendir:1,"continue":1,each:1,sleep:1,endgrent:1,shutdown:1,dump:1,chomp:1,connect:1,getsockname:1,die:1,socketpair:1,close:1,flock:1,exists:1,index:1,shmget:1,sub:1,"for":1,endpwent:1,redo:1,lstat:1,msgctl:1,setpgrp:1,abs:1,exit:1,select:1,print:1,ref:1,gethostbyaddr:1,unshift:1,fcntl:1,syscall:1,"goto":1,getnetbyaddr:1,join:1,gmtime:1,symlink:1,semget:1,splice:1,x:1,getpeername:1,recv:1,log:1,setsockopt:1,cos:1,last:1,reverse:1,gethostbyname:1,getgrnam:1,study:1,formline:1,endhostent:1,times:1,chop:1,length:1,gethostent:1,getnetent:1,pack:1,getprotoent:1,getservbyname:1,rand:1,mkdir:1,pos:1,chmod:1,y:1,substr:1,endnetent:1,printf:1,next:1,open:1,msgsnd:1,readdir:1,use:1,unlink:1,getsockopt:1,getpriority:1,rindex:1,wantarray:1,hex:1,system:1,getservbyport:1,endservent:1,"int":1,chr:1,untie:1,rmdir:1,prototype:1,tell:1,listen:1,fork:1,shmread:1,ucfirst:1,setprotoent:1,"else":1,sysseek:1,link:1,getgrgid:1,shmctl:1,waitpid:1,unpack:1,getnetbyname:1,reset:1,chdir:1,grep:1,split:1,require:1,caller:1,lcfirst:1,until:1,warn:1,"while":1,values:1,shift:1,telldir:1,getpwuid:1,my:1,getprotobynumber:1,"delete":1,and:1,sort:1,uc:1,defined:1,srand:1,accept:1,"package":1,seekdir:1,getprotobyname:1,semop:1,our:1,rename:1,seek:1,"if":1,q:1,chroot:1,sysread:1,setpwent:1,no:1,crypt:1,getc:1,chown:1,sqrt:1,write:1,setnetent:1,setpriority:1,foreach:1,tie:1,sin:1,msgget:1,map:1,stat:1,getlogin:1,unless:1,elsif:1,truncate:1,exec:1,keys:1,glob:1,tied:1,closedir:1,ioctl:1,socket:1,readlink:1,"eval":1,xor:1,readline:1,binmode:1,setservent:1,eof:1,ord:1,bind:1,alarm:1,pipe:1,atan2:1,getgrent:1,exp:1,time:1,push:1,setgrent:1,gt:1,lt:1,or:1,ne:1,m:1};return{dM:{l:[hljs.IR],c:b,k:a},m:[{cN:"variable",b:"\\$\\d",e:"^"},{cN:"variable",b:"[\\$\\%\\@\\*](\\^\\w\\b|#\\w+(\\:\\:\\w+)*|[^\\s\\w{]|{\\w+}|\\w+(\\:\\:\\w*)*)",e:"^"},{cN:"subst",b:"[$@]\\{",e:"}",l:[hljs.IR],k:a,c:b,r:10},{cN:"number",b:"(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",e:"^",r:0},{cN:"string",b:"q[qwxr]?\\s*\\(",e:"\\)",c:["escape","subst","variable"],r:5},{cN:"string",b:"q[qwxr]?\\s*\\[",e:"\\]",c:["escape","subst","variable"],r:5},{cN:"string",b:"q[qwxr]?\\s*\\{",e:"\\}",c:["escape","subst","variable"],r:5},{cN:"string",b:"q[qwxr]?\\s*\\|",e:"\\|",c:["escape","subst","variable"],r:5},{cN:"string",b:"q[qwxr]?\\s*\\<",e:"\\>",c:["escape","subst","variable"],r:5},{cN:"string",b:"qw\\s+q",e:"q",c:["escape","subst","variable"],r:5},{cN:"string",b:"'",e:"'",c:["escape"],r:0},{cN:"string",b:'"',e:'"',c:["escape","subst","variable"],r:0},hljs.BE,{cN:"string",b:"`",e:"`",c:["escape"]},{cN:"regexp",b:"(s|tr|y)/(\\\\.|[^/])*/(\\\\.|[^/])*/[a-z]*",e:"^",r:10},{cN:"regexp",b:"(m|qr)?/",e:"/[a-z]*",c:["escape"],r:0},{cN:"string",b:"{\\w+}",e:"^",r:0},{cN:"string",b:"-?\\w+\\s*\\=\\>",e:"^",r:0},{cN:"sub",b:"\\bsub\\b",e:"(\\s*\\(.*?\\))?[;{]",l:[hljs.IR],k:{sub:1},r:5},{cN:"operator",b:"-\\w\\b",e:"^",r:0},hljs.HCM,{cN:"comment",b:"^(__END__|__DATA__)",e:"\\n$",r:5},{cN:"pod",b:"\\=\\w",e:"\\=cut"}]}}();hljs.LANGUAGES.java={dM:{l:[hljs.UIR],c:["javadoc","comment","string","class","number","annotation"],k:{"false":1,"synchronized":1,"int":1,"abstract":1,"float":1,"private":1,"char":1,"interface":1,"boolean":1,"static":1,"null":1,"if":1,"const":1,"for":1,"true":1,"while":1,"long":1,"throw":1,strictfp:1,"finally":1,"protected":1,"extends":1,"import":1,"native":1,"final":1,"implements":1,"return":1,"void":1,"enum":1,"else":1,"break":1,"transient":1,"new":1,"catch":1,"instanceof":1,"byte":1,"super":1,"class":1,"volatile":1,"case":1,assert:1,"short":1,"package":1,"default":1,"double":1,"public":1,"try":1,"this":1,"switch":1,"continue":1,"throws":1}},m:[{cN:"class",l:[hljs.UIR],b:"(class |interface )",e:"{",i:":",k:{"class":1,"interface":1},c:["inheritance","title"]},{cN:"inheritance",b:"(implements|extends)",e:"^",nM:true,l:[hljs.IR],k:{"extends":1,"implements":1},r:10},{cN:"title",b:hljs.UIR,e:"^"},{cN:"params",b:"\\(",e:"\\)",c:["string","annotation"]},hljs.CNM,hljs.ASM,hljs.QSM,hljs.BE,hljs.CLCM,{cN:"javadoc",b:"/\\*\\*",e:"\\*/",c:["javadoctag"],r:10},{cN:"javadoctag",b:"@[A-Za-z]+",e:"^"},hljs.CBLCLM,{cN:"annotation",b:"@[A-Za-z]+",e:"^"}]};hljs.LANGUAGES.bash=function(){var a={"true":1,"false":1};return{dM:{l:[hljs.IR],c:["string","shebang","comment","number","test_condition","string","variable"],k:{keyword:{"if":1,then:1,"else":1,fi:1,"for":1,"break":1,"continue":1,"while":1,"in":1,"do":1,done:1,echo:1,exit:1,"return":1,set:1,declare:1},literal:a}},cI:false,m:[{cN:"shebang",b:"(#!\\/bin\\/bash)|(#!\\/bin\\/sh)",e:"^",r:10},hljs.HCM,{cN:"test_condition",b:"\\[ ",e:" \\]",c:["string","variable","number"],l:[hljs.IR],k:{literal:a},r:0},{cN:"test_condition",b:"\\[\\[ ",e:" \\]\\]",c:["string","variable","number"],l:[hljs.IR],k:{literal:a}},{cN:"variable",b:"\\$([a-zA-Z0-9_]+)\\b",e:"^"},{cN:"variable",b:"\\$\\{(([^}])|(\\\\}))+\\}",e:"^",c:["number"]},{cN:"string",b:'"',e:'"',i:"\\n",c:["escape","variable"],r:0},{cN:"string",b:'"',e:'"',i:"\\n",c:["escape","variable"],r:0},hljs.BE,hljs.CNM,{cN:"comment",b:"\\/\\/",e:"$",i:"."}]}}();