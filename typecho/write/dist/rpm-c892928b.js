var headerSeparator=/^-+$/,headerLine=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)  ?\d{1,2} \d{2}:\d{2}(:\d{2})? [A-Z]{3,4} \d{4} - /,simpleEmail=/^[\w+.-]+@[\w.-]+/;const rpmChanges={token:function(r){if(r.sol()){if(r.match(headerSeparator))return"tag";if(r.match(headerLine))return"tag"}return r.match(simpleEmail)?"string":(r.next(),null)}};var arch=/^(i386|i586|i686|x86_64|ppc64le|ppc64|ppc|ia64|s390x|s390|sparc64|sparcv9|sparc|noarch|alphaev6|alpha|hppa|mipsel)/,preamble=/^[a-zA-Z0-9()]+:/,section=/^%(debug_package|package|description|prep|build|install|files|clean|changelog|preinstall|preun|postinstall|postun|pretrans|posttrans|pre|post|triggerin|triggerun|verifyscript|check|triggerpostun|triggerprein|trigger)/,control_flow_complex=/^%(ifnarch|ifarch|if)/,control_flow_simple=/^%(else|endif)/,operators=/^(\!|\?|\<\=|\<|\>\=|\>|\=\=|\&\&|\|\|)/;const rpmSpec={startState:function(){return{controlFlow:!1,macroParameters:!1,section:!1}},token:function(r,e){if("#"==r.peek())return r.skipToEnd(),"comment";if(r.sol()){if(r.match(preamble))return"header";if(r.match(section))return"atom"}if(r.match(/^\$\w+/))return"def";if(r.match(/^\$\{\w+\}/))return"def";if(r.match(control_flow_simple))return"keyword";if(r.match(control_flow_complex))return e.controlFlow=!0,"keyword";if(e.controlFlow){if(r.match(operators))return"operator";if(r.match(/^(\d+)/))return"number";r.eol()&&(e.controlFlow=!1)}if(r.match(arch))return r.eol()&&(e.controlFlow=!1),"number";if(r.match(/^%[\w]+/))return r.match("(")&&(e.macroParameters=!0),"keyword";if(e.macroParameters){if(r.match(/^\d+/))return"number";if(r.match(")"))return e.macroParameters=!1,"keyword"}return r.match(/^%\{\??[\w \-\:\!]+\}/)?(r.eol()&&(e.controlFlow=!1),"def"):(r.next(),null)}};export{rpmChanges,rpmSpec};