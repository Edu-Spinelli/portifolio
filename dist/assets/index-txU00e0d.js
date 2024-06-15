(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const m of c.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&a(m)}).observe(document,{childList:!0,subtree:!0});function s(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(o){if(o.ep)return;o.ep=!0;const c=s(o);fetch(o.href,c)}})();const z=["███████╗██████╗ ██╗███╗   ██╗███████╗██╗     ██╗     ██╗","██╔════╝██╔══██╗██║████╗  ██║██╔════╝██║     ██║     ██║","███████╗██████╔╝██║██╔██╗ ██║█████╗  ██║     ██║     ██║","╚════██║██╔═══╝ ██║██║╚██╗██║██╔══╝  ██║     ██║     ██║","███████║██║     ██║██║ ╚████║███████╗███████╗███████╗██║","╚══════╝╚═╝     ╚═╝╚═╝  ╚═══╝╚══════╝╚══════╝╚══════╝╚═╝"],q="WebShell",Q="spinelli",V="webshell",Y="1234",J="https://github.com/Edu-Spinelli",X={email:"eduardo.spinelli@estudante.ufscar.br",github:"Edu-Spinelli",linkedin:"eduardo-spinelli-a309011a1/"},Z=["Hi, my name is Eduardo, i'm a Computer Science student from UFSCar.","I was State Champion of WordSkills São Paulo 2019, and participated in the Festo Mechatronica Competition 2019.","-📖 Studing about Web development, using python frameworks (Django, Flask).","-🔒 Enthusiast in the area of ​​information security (cryptography)."],ee=[["QuestIO","um portal para o aprendizado de Lógica Digital","https://github.com/QuestIO42"]],te={background:"#0C0623",foreground:"#F8DDE5",banner:"#FF9951",border:{visible:!0,color:"#FFADE2"},prompt:{default:"#A5A7A7",user:"#FE6BC9",host:"#70FDFF",input:"#FF7685"},link:{text:"#B6AAEE",highlightColor:"#FFADE2",highlightText:"#0C0623"},commands:{textColor:"#228B22"}},r={ascii:z,title:q,username:Q,hostname:V,password:Y,repoLink:J,social:X,aboutGreeting:Z,projects:ee,colors:te};(()=>{const e=document.createElement("style"),t=document.head,s=`body {background: ${r.colors.background}}`,a=`body {color: ${r.colors.foreground}}`,o=`input {background: ${r.colors.background}}`,c=`input {color: ${r.colors.prompt.input}}`,m=`.output {color: ${r.colors.prompt.input}}`,I=`#pre-host {color: ${r.colors.prompt.host}}`,l=`#host {color: ${r.colors.prompt.host}}`,H=`#pre-user {color: ${r.colors.prompt.user}}`,M=`#user {color: ${r.colors.prompt.user}}`,x=`#prompt {color: ${r.colors.prompt.default}}`,U=`pre {color: ${r.colors.banner}}`,W=`a {color: ${r.colors.link.text}}`,j=`a:hover {background: ${r.colors.link.highlightColor}}`,G=`a:hover {color: ${r.colors.link.highlightText}}`,_=`.command {color: ${r.colors.commands.textColor}}`,K=`.keys {color: ${r.colors.banner}}`;t.appendChild(e),e.sheet&&(e.sheet.insertRule(`#bars {background: ${r.colors.background}}`),e.sheet.insertRule(`main {border-color: ${r.colors.border.color}}`),e.sheet.insertRule(`#bar-1 {background: ${r.colors.border.color}; color: ${r.colors.background}}`),e.sheet.insertRule(`#bar-2 {background: ${r.colors.border.color}}`),e.sheet.insertRule(`#bar-3 {background: ${r.colors.border.color}}`),e.sheet.insertRule(`#bar-4 {background: ${r.colors.border.color}}`),e.sheet.insertRule(`#bar-5 {background: ${r.colors.border.color}}`),e.sheet.insertRule(s),e.sheet.insertRule(a),e.sheet.insertRule(o),e.sheet.insertRule(c),e.sheet.insertRule(m),e.sheet.insertRule(I),e.sheet.insertRule(l),e.sheet.insertRule(H),e.sheet.insertRule(M),e.sheet.insertRule(x),e.sheet.insertRule(U),e.sheet.insertRule(W),e.sheet.insertRule(j),e.sheet.insertRule(G),e.sheet.insertRule(_),e.sheet.insertRule(K))})();const re={commands:[["'about'","Information about me. (Eduardo Henrique Spinelli)"],["'projects'","Some projects that I have worked on."],["'sudo'","???"],["'banner'","Display the banner."],["'clear'","Clear the terminal."]]},oe=()=>{const e=[];return re.commands.forEach(t=>{const s="&nbsp;";let a="";a+="<span class='command'>",a+=t[0],a+="</span>",a+=s.repeat(12-t[0].length),a+=t[1],e.push(a)}),e.push("Press <span class='keys'>[Tab]</span> for auto completion."),e.push("Press <span class='keys'>[Esc]</span> to clear the input line."),e.push("Press <span class='keys'>[↑][↓]</span> to scroll through your history of commands."),e},se=oe(),ne=()=>{const e=[];return r.ascii.forEach(t=>{let s="";for(let o=0;o<t.length;o++)t[o]===" "?s+="&nbsp;":s+=t[o];let a=`<pre>${s}</pre>`;e.push(a)}),e.push("<br>"),e.push("Welcome to my terminal!"),e.push("Type <span class='command'>'help'</span> for a list of all available commands."),e},B=ne(),ae=()=>{const e=[],t="&nbsp;",s="Email",a="Github",o="Linkedin",c=`<i class='fa-solid fa-envelope'></i> ${s}`,m=`<i class='fa-brands fa-github'></i> ${a}`,I=`<i class='fa-brands fa-linkedin'></i> ${o}`;let l="";return e.push(r.aboutGreeting[0]),e.push(r.aboutGreeting[1]),e.push(r.aboutGreeting[2]),e.push(r.aboutGreeting[3]),l+=t.repeat(1),l+=c,l+=t.repeat(17-s.length),l+=`<a target='_blank' href='mailto:${r.social.email}'>${r.social.email}</a>`,e.push(l),l="",l+=t.repeat(1),l+=m,l+=t.repeat(17-a.length),l+=`<a target='_blank' href='https://github.com/${r.social.github}'>github/${r.social.github}</a>`,e.push(l),l="",l+=t.repeat(1),l+=I,l+=t.repeat(17-o.length),l+=`<a target='_blank' href='https://www.linkedin.com/in/${r.social.linkedin}'>linkedin/${r.social.linkedin}</a>`,e.push(l),e},ie=ae(),le=()=>{const e=["COMMAND NOT FOUND","Type <span class='command'>'help'</span> to get started."],t=[];return e.forEach(s=>{t.push(s)}),t},ce=le(),ue=()=>{let e="";const t=[],s=`${r.projects.length} File(s)`,a="&nbsp;";return r.projects.forEach(o=>{let c=`<a href="${o[2]}" target="_blank">${o[0]}</a>`;e+=a.repeat(2),e+=c,e+=a.repeat(17-o[0].length),e+=o[1],t.push(e),e=""}),t.push("<br>"),t.push(s),t},de=ue();let d=document.getElementById("write-lines"),h=0,v="",p,T=!1,$=!1,R=0,u=!1;const f=d,g=document.getElementById("terminal"),i=document.getElementById("user-input"),y=document.getElementById("input-hidden"),k=document.getElementById("password-input"),E=document.getElementById("password-field"),P=document.getElementById("pre-host"),A=document.getElementById("pre-user"),C=document.getElementById("host"),L=document.getElementById("user"),w=document.getElementById("prompt"),pe=["help","about","projects","banner","clear"],b=[],he=r.password,F=()=>{const e=document.getElementById("main");e&&(e.scrollTop=e.scrollHeight)};function S(e){const t=e.key;switch(t){case"Enter":e.preventDefault(),$?ge():me(),F();break;case"Escape":i.value="";break;case"ArrowUp":N(t),e.preventDefault();break;case"ArrowDown":N(t);break;case"Tab":be(),e.preventDefault();break}}function me(){if(!d||!w)return;const e="";let t;if(p=i.value,u?t=p:t=`<span class='output'>${p}</span>`,b.push(p),h=b.length,p==="clear"){D(p.toLowerCase().trim()),i.value=e,p=e;return}const s=document.createElement("div");s.innerHTML=`<span id="prompt">${w.innerHTML}</span> ${t}`,d.parentNode&&d.parentNode.insertBefore(s,d),p.trim().length!==0&&D(p.toLowerCase().trim()),i.value=e,p=e}function be(){let e=i.value;for(const t of pe)if(t.startsWith(e)){i.value=t;return}}function N(e){switch(e){case"ArrowDown":h!==b.length&&(h+=1,i.value=b[h],h===b.length&&(i.value=v));break;case"ArrowUp":h===b.length&&(v=i.value),h!==0&&(h-=1,i.value=b[h]);break}}function D(e){if(e.startsWith("rm -rf")&&e.trim()!=="rm -rf"){T?e==="rm -rf src"&&!u?(u=!0,setTimeout(()=>{!g||!f||(g.innerHTML="",g.appendChild(f),d=f)}),ye(),setTimeout(()=>{n(["What made you think that was a good idea?","<br>"])},200),setTimeout(()=>{n(["Now everything is ruined.","<br>"])},1200)):n(e==="rm -rf src"&&u?["there's no more src folder.","<br>"]:u?["What else are you trying to delete?","<br>"]:["<br>","Directory not found.","type <span class='command'>'ls'</span> for a list of directories.","<br>"]):n(["Permission not granted.","<br>"]);return}switch(e){case"clear":setTimeout(()=>{!g||!f||(g.innerHTML="",g.appendChild(f),d=f)});break;case"banner":if(u){n(["WebShell v1.0.0","<br>"]);break}n(B);break;case"help":if(u){n(["maybe restarting your browser will fix this.","<br>"]);break}n(se);break;case"about":if(u){n(["Nothing to see here.","<br>"]);break}n(ie);break;case"projects":if(u){n(["I don't want you to break the other projects.","<br>"]);break}n(de);break;case"linkedin":n(["<br>","linkedin.com/in/username","<br>"]);break;case"github":break;case"email":break;case"rm -rf":if(u){n(["don't try again.","<br>"]);break}n(T?["Usage: <span class='command'>'rm -rf &lt;dir&gt;'</span>","<br>"]:["Permission not granted.","<br>"]);break;case"sudo":if(u){n(["no.","<br>"]);break}if(!k)return;$=!0,i.disabled=!0,y&&(y.style.display="none"),k.style.display="block",setTimeout(()=>{E.focus()},100);break;case"ls":if(u){n(["","<br>"]);break}n(T?["src","<br>"]:["Permission not granted.","<br>"]);break;default:if(u){n(["type 'help'","<br>"]);break}n(ce);break}}function n(e){e.forEach((t,s)=>{fe(t,s)})}function fe(e,t){setTimeout(()=>{if(!d)return;const s=document.createElement("p");s.innerHTML=e,d.parentNode.insertBefore(s,d),F()},40*t)}function O(){!y||!k||(E.value="",i.disabled=!1,y.style.display="block",k.style.display="none",$=!1,setTimeout(()=>{i.focus()},200))}function ge(){if(R===2){if(!y||!d||!k)return;n(["<br>","INCORRECT PASSWORD.","PERMISSION NOT GRANTED.","<br>"]),O(),R=0;return}if(E.value===he){if(!d||!d.parentNode)return;n(["<br>","PERMISSION GRANTED.","Try <span class='command'>'rm -rf'</span>","<br>"]),O(),T=!0;return}else E.value="",R++}function ye(){const e=document.getElementById("bars"),t=document.body,s=document.getElementById("main"),a=document.getElementsByTagName("span");if(e){e.innerHTML="",e.remove(),s&&(s.style.border="none"),t.style.backgroundColor="black",t.style.fontFamily="VT323, monospace",t.style.fontSize="20px",t.style.color="white";for(let o=0;o<a.length;o++)a[o].style.color="white";i.style.backgroundColor="black",i.style.color="white",i.style.fontFamily="VT323, monospace",i.style.fontSize="20px",w&&(w.style.color="white")}}const ke=()=>{C&&(C.innerText=r.hostname),L&&(L.innerText=r.username),P&&(P.innerText=r.hostname),A&&(A.innerText=r.username),window.addEventListener("load",()=>{n(B)}),i.addEventListener("keypress",S),i.addEventListener("keydown",S),E.addEventListener("keypress",S),window.addEventListener("click",()=>{i.focus()}),console.log(`%cPassword: ${r.password}`,"color: red; font-size: 20px;")};ke();
