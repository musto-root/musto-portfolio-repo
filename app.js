/* coder mustıo.co — portfolio */
const LI={tr:0,en:1,de:2};let lang="tr";try{const s=localStorage.getItem("lang");if(s&&LI[s]!==undefined)lang=s}catch(e){}
const S={
n0:["Ana Sayfa","Home","Start"],n1:["Projeler","Work","Projekte"],n2:["Hakkımda","About","Über mich"],n3:["Yetenekler","Skills","Fähigkeiten"],n4:["Vitrin","Showcase","Vitrine"],n5:["İletişim","Contact","Kontakt"],
eyebrow:["Web · Güvenlik · Arayüz","Web · Security · Interface","Web · Sicherheit · Interface"],
h1a:["Yüzeyin","Beyond the","Hinter der"],h1b:["Ötesi.","Surface.","Oberfläche."],
copy:["Site kuruyorum. Hızlı açılan, telefonda bozulmayan, ne işe yaradığı ilk bakışta anlaşılan siteler. Gerisi süs.","I build websites. Fast to load, solid on a phone, clear at first glance. The rest is decoration.","Ich baue Websites. Schnell geladen, stabil auf dem Handy, auf den ersten Blick verständlich. Der Rest ist Dekoration."],
cta1:["Projelerimi Gör","View my work","Meine Projekte"],cta2:["CV'mi Gör","View my CV","Mein Lebenslauf"],scroll:["Kaydır","Scroll","Scrollen"],
wk:["01 / Projeler — Konsept çalışmalar","01 / Work — Concept projects","01 / Projekte — Konzeptarbeiten"],wkh:["Fikirlerden arayüzlere.","From ideas to interfaces.","Von Ideen zu Interfaces."],
tag:["Konsept proje","Concept project","Konzeptprojekt"],go:["Detayları gör","View details","Details ansehen"],
ab:["02 / Hakkımda","02 / About","02 / Über mich"],
ah:["Yüzeyi değil,<br>arkasını merak ederim.","I don't just see the surface.<br>I wonder what's behind it.","Ich sehe nicht nur die Oberfläche.<br>Mich interessiert, was dahinter läuft."],
a1:["Merhaba. Ben Mustafa Yaşar. Çoğu insan bir siteye bakar ve yalnızca yüzeyi görür. Ben arkasında neyin döndüğünü merak ederim. Bu merak beni kod yazmaya ve güvenliğe götürdü.","Hello. I'm Mustafa Yaşar. Most people look at a website and only see the surface. I wonder what is running behind it. That curiosity led me to code and to security.","Hallo. Ich bin Mustafa Yaşar. Die meisten sehen bei einer Website nur die Oberfläche. Mich interessiert, was dahinter läuft. Diese Neugier hat mich zum Programmieren und zur Sicherheit geführt."],
a2:["Freelance çalışıyorum. Bireyler ve küçük işletmeler için site kuruyorum: kullanan kişiyi yormayan, hızlı açılan, bakımı kolay siteler. Güvenliği en sona bırakmıyorum; ilk satırdan itibaren düşünüyorum. Kendi yazdığım koda bile önce şüpheyle bakarım.","I work as a freelancer, building sites for individuals and small businesses: fast, easy to maintain, and easy on the user. I don't leave security for last; I think about it from the first line. I even look at my own code with suspicion first.","Ich arbeite freiberuflich und baue Websites für Privatpersonen und kleine Unternehmen: schnell, wartungsarm und angenehm in der Nutzung. Sicherheit kommt bei mir nicht zuletzt, sondern ab der ersten Zeile. Selbst meinen eigenen Code betrachte ich zuerst skeptisch."],
a3:["Büyük sözler vermem. Ne istediğini dinlerim, ne yapabileceğimi söylerim, sonra yaparım. Çalışan bir site, anlatılan bir hayalden iyidir.","I don't make big promises. I listen to what you want, tell you what I can do, then do it. A working site beats a described dream.","Ich mache keine großen Versprechen. Ich höre zu, sage, was ich leisten kann, und tue es dann. Eine funktionierende Seite schlägt einen erzählten Traum."],
qt:["Günün Sözü","Quote of the day","Spruch des Tages"],
sk:["03 / Yetenekler","03 / Skills","03 / Fähigkeiten"],skh:["Ne yapıyorum.","What I do.","Was ich mache."],
sknote:["Güncel çalışma alanlarım — sertifika değil.","Current areas of work — not credentials.","Aktuelle Arbeitsfelder — keine Zertifikate."],
vt:["04 / Vitrin","04 / Showcase","04 / Vitrine"],vh:["Portföy Vitrini","Portfolio Showcase","Portfolio-Vitrine"],vp:["Kullandığım araçlar ve birlikte çalıştıklarımın sözleri. Bir sekme seç.","The tools I use and the words of people I've worked with. Pick a tab.","Meine Tools und die Worte derer, mit denen ich gearbeitet habe. Wähle einen Tab."],
tbs:["Teknoloji Yığını","Tech Stack","Tech-Stack"],tbr:["Referanslar","References","Referenzen"],tbc:["Sertifikalar","Certificates","Zertifikate"],
rf:["Benimle çalıştın mı? Deneyimini yaz, buraya ekleyeyim.","Worked with me? Write your experience and I'll add it here.","Hast du mit mir gearbeitet? Schreib deine Erfahrung, ich füge sie hier ein."],rfb:["Yorumunu gönder","Send your review","Bewertung senden"],
ct:["05 / İletişim","05 / Contact","05 / Kontakt"],ch:["Benimle iletişime geç.","Get in touch.","Kontakt aufnehmen."],
cp:["Bir fikrin mi var, yoksa yalnızca bir şey mi soracaksın? İkisi de olur. Okurum, cevap yazarım.","Got an idea, or just a question? Both are fine. I read everything and I reply.","Eine Idee oder nur eine Frage? Beides ist willkommen. Ich lese alles und antworte."],
fn:["Ad Soyad","Name","Name"],fe:["E-posta","Email","E-Mail"],fm:["Mesaj","Message","Nachricht"],fs:["Gönder","Send","Senden"],
cpy:["Kopyala","Copy","Kopieren"],cpd:["Kopyalandı","Copied","Kopiert"],fnote:["Gönder, e-posta uygulamanı açar.","Send opens your email app.","Senden öffnet deine E-Mail-App."],
tl:["Araçlar","Tools","Tools"],t1:["Hikayeler","Stories","Geschichten"],t2:["Film & Dizi","Film & TV","Film & Serie"],t3:["Promptlar","Prompts","Prompts"],
rt:["Tüm hakları saklı.","All rights reserved.","Alle Rechte vorbehalten."],closeL:["Kapat","Close","Schließen"],menuO:["Menüyü aç","Open menu","Menü öffnen"],menuC:["Menüyü kapat","Close menu","Menü schließen"],themeL:["Tema","Theme","Design"],
soon:["Bağlantılar yakında","Links coming soon","Links folgen"],tech:["Teknolojiler ve yöntemler","Technologies and methods","Technologien und Methoden"]};
const TT=k=>S[k][LI[lang]];
const QUOTES=[["Önce şüphe et, sonra yaz.","Doubt first, then write.","Erst zweifeln, dann schreiben."],["Hızlı açılan site, saygıdır.","A fast site is a form of respect.","Eine schnelle Seite ist eine Form von Respekt."],["Güvenlik, sona bırakılacak bir iş değil.","Security is not a last step.","Sicherheit ist kein letzter Schritt."],["Merak, en iyi hata ayıklayıcıdır.","Curiosity is the best debugger.","Neugier ist der beste Debugger."]];
/* ===== Content: edit here ===== */
const EMAIL="sibermusto@proton.me";
const LINKS={github:"https://github.com/musto-root",whatsapp:"https://wa.me/905370347401",email:"mailto:"+EMAIL,linkedin:"",instagram:"",discord:""}; // empty = hidden
const STACK=["JavaScript","HTML","CSS","Python","Flask","Linux"];
const CERTS=[]; // e.g. {name:"Certificate name",by:"Issuer"} — tab appears only when filled
const REFS=[]; // e.g. {name:"Person",text:"Their words"} — only real, approved quotes
const CV="https://mustiohub.site/cv.html";
const TOOLS=[["t1","https://mustiohub.site/hacker-hikayeleri.html"],["t2","https://mustiohub.site/film-dizi.html"],["t3","https://mustiohub.site/promptlar.html"]];
const PROJECTS=[
{id:"sentinel",n:"01",t:"Sentinel",c:["Güvenlik Araştırma Arayüzü","Security Research Interface","Security-Research-Interface"],d:["Ağ varlıklarını, gözlemleri ve yetkili güvenlik laboratuvarı incelemelerini düzenlemek için konsept bir arayüz.","A conceptual interface for organizing network assets, observations, and authorized security lab investigations.","Ein konzeptionelles Interface, um Netzwerk-Assets, Beobachtungen und autorisierte Sicherheitslabor-Untersuchungen zu ordnen."],m:["Varlık topolojisi ana gezinme yolu; bulgular seyrek işaretlenir, böylece her biri öne çıkar.","Asset topology is the main way to navigate; findings are flagged sparingly so each one stands out.","Die Asset-Topologie ist der Hauptweg zur Navigation; Funde werden sparsam markiert."],tech:["Figma","SVG","TypeScript"]},
{id:"monolith",n:"02",t:"Monolith",c:["Geliştirici Çalışma Alanı","Developer Workspace","Entwickler-Arbeitsbereich"],d:["Kod denemelerini, teknik notları ve proje akışlarını düzenlemek için odaklı bir geliştirme ortamı konsepti.","A focused development environment concept for organizing code experiments, technical notes, and project workflows.","Ein fokussiertes Entwicklungsumgebungs-Konzept für Code-Experimente, technische Notizen und Projekt-Workflows."],m:["Kalabalık paneller yerine katmanlı yüzeyler; notlar anlattıkları kodun yanında durur.","Layered surfaces instead of crowded panels; notes sit beside the code they explain.","Geschichtete Flächen statt überfüllter Panels; Notizen stehen neben dem Code."],tech:["Figma","React","CSS"]},
{id:"echo",n:"03",t:"Echo",c:["Dijital Anı Deneyimi","Digital Memory Experience","Digitale Erinnerungen"],d:["İnsanların anlamlı anıları nasıl saklayıp paylaştığını inceleyen bir ürün tasarımı konsepti.","A product design concept exploring how people preserve and share meaningful memories.","Ein Produktdesign-Konzept dazu, wie Menschen bedeutsame Erinnerungen bewahren und teilen."],m:["Fotoğraf, ses ve yazı eşit tutulur; sakin editoryal düzen anıların öne çıkmasını sağlar.","Photos, voice and writing are treated as equals; a quiet editorial layout lets memories lead.","Fotos, Stimme und Text sind gleichwertig; ein ruhiges Layout lässt Erinnerungen führen."],tech:["User flows","Prototyping","Typography"]},
{id:"trace",n:"04",t:"Trace",c:["Ağ Görselleştirme","Network Visualization","Netzwerk-Visualisierung"],d:["Bağlı sistemleri, ağ ilişkilerini ve teknik bilgi mimarisini görsel olarak inceleyen bir çalışma.","A visual exploration of connected systems, network relationships, and technical information architecture.","Eine visuelle Untersuchung vernetzter Systeme, Netzwerkbeziehungen und technischer Informationsarchitektur."],m:["İlişkiler için ince kontur çizgileri; ayrıntı yalnızca istendiğinde açılır.","Fine contour lines for relationships; detail appears only on demand.","Feine Konturlinien für Beziehungen; Details nur auf Anfrage."],tech:["SVG","JavaScript","Python"]}];
const SKILLS=[["Web Geliştirme","Web Development","Webentwicklung",["Yavaş açılan siteye kimse dönmez. Hızlı, telefonda sağlam, sade arayüzler kurarım.","Nobody returns to a slow site. I build fast, phone-solid, simple interfaces.","Zu einer langsamen Seite kehrt niemand zurück. Ich baue schnelle, mobil robuste, schlichte Interfaces."],"stack"],
["JavaScript","JavaScript","JavaScript",["Sayfayı canlı tutan kısım. Gerektiği kadar hareket, fazlası değil.","The part that keeps a page alive. As much motion as needed, no more.","Der Teil, der eine Seite lebendig hält. So viel Bewegung wie nötig, nicht mehr."],"net"],
["UI/UX","UI/UX","UI/UX",["İyi tasarım fark edilmez. İnsan aradığını bulur ve devam eder.","Good design goes unnoticed. People find what they need and move on.","Gutes Design fällt nicht auf. Man findet, was man sucht, und macht weiter."],"grid"],
["Siber Güvenlik","Cybersecurity","Cybersicherheit",["Her sistemin bir zayıf noktası vardır. Onu başkasından önce bulup kapatmayı severim.","Every system has a weak point. I like finding and closing it before anyone else.","Jedes System hat eine Schwachstelle. Ich finde und schließe sie gern vor anderen."],"ring"],
["Yaratıcı Projeler","Creative Projects","Kreative Projekte",["Kimse istemeden yaptığım işler. Çoğu bir merakla başlar.","Things I make without anyone asking. Most start with curiosity.","Dinge, die ich ohne Auftrag baue. Die meisten beginnen mit Neugier."],"grid"]];

/* ===== Visual toolkit ===== */
const A="#B7F36B",RD="#B94A42",L="rgba(230,240,225,.14)",T="#999F97";
const rng=s=>()=>(s=(s*16807)%2147483647)/2147483647;
const svg=(b,v="0 0 800 450")=>`<svg viewBox="${v}" preserveAspectRatio="xMidYMid slice" aria-hidden="true">${b}</svg>`;
const ringG=`<circle cx="12" cy="12" r="9.5" fill="none" stroke="currentColor" stroke-opacity=".4"/><g><circle cx="12" cy="2.5" r="2" fill="${A}"/></g>`;
document.querySelectorAll('.ring').forEach(e=>e.innerHTML=ringG);
const VIS={
sentinel(){const r=rng(3);let h=`<rect width="800" height="450" fill="#0b0d0c"/>`;for(let i=0;i<10;i++)h+=`<circle cx="400" cy="230" r="${50+i*34}" fill="none" stroke="${L}" stroke-opacity="${.9-i*.08}"/>`;
const P=[];for(let i=0;i<22;i++){const a=r()*6.28,d=40+r()*300;P.push([400+Math.cos(a)*d*1.5,230+Math.sin(a)*d*.8])}
P.forEach((a,i)=>P.forEach((b,j)=>{if(j>i&&Math.hypot(a[0]-b[0],a[1]-b[1])<190)h+=`<path d="M${a[0]|0} ${a[1]|0}L${b[0]|0} ${b[1]|0}" stroke="${A}" stroke-opacity=".28"/>`}));
P.forEach((p,i)=>h+=`<circle cx="${p[0]|0}" cy="${p[1]|0}" r="${i%7?2.4:4}" fill="${i==5?RD:i%7?T:A}"/>`);
h+=`<circle cx="${P[5][0]|0}" cy="${P[5][1]|0}" r="14" fill="none" stroke="${RD}"/><g fill="${L}"><rect x="24" y="24" width="120" height="3"/><rect x="24" y="36" width="80" height="3"/></g>`;return svg(h)},
monolith(){let h=`<rect width="800" height="450" fill="#0b0d0c"/>`;[[60,50,460,300,"#101211"],[220,110,460,300,"#131614"],[340,170,420,240,"#171a18"]].forEach(([x,y,w,hh,f],k)=>{h+=`<rect x="${x}" y="${y}" width="${w}" height="${hh}" fill="${f}" stroke="${L}"/><rect x="${x}" y="${y}" width="${w}" height="20" fill="#0d0f0e" stroke="${L}"/>`;const r=rng(k+2);for(let i=0;i<8;i++)h+=`<rect x="${x+24+(i%3)*22}" y="${y+40+i*(hh-70)/8}" width="${30+r()*(w-130)|0}" height="4" fill="${k==2&&i==2?A:T}" opacity="${k==2&&i==2?.9:.35}"/>`});return svg(h)},
echo(){let h=`<rect width="450" height="450" fill="#0e100f"/>`;for(let i=0;i<4;i++){h+=`<rect x="${40+i*18}" y="${50+i*28}" width="250" height="300" fill="${i==3?'#151816':'#0e100f'}" stroke="${L}"/>`}
for(let i=1;i<7;i++)h+=`<circle cx="165" cy="200" r="${i*20}" fill="none" stroke="${i==4?A:L}" stroke-opacity="${i==4?.9:1}"/>`;
for(let i=0;i<24;i++){const hh=8+Math.abs(Math.sin(i*.7))*50+(i%5)*4;h+=`<rect x="${300+i*6}" y="${300-hh/2}" width="2.5" height="${hh}" fill="${T}" opacity=".6"/>`}return svg(h,"0 0 450 450")},
trace(){let h=`<rect width="800" height="450" fill="#0a0c0b"/>`;for(let k=0;k<22;k++){let d="";for(let x=0;x<=800;x+=16){const y=225+(k-11)*13+Math.sin(x/90+k*.35)*(24+k*1.6)*Math.cos(x/330);d+=(x?"L":"M")+x+" "+y.toFixed(1)}h+=`<path d="${d}" fill="none" stroke="${A}" stroke-opacity="${(.12+Math.abs(11-k)*-.008+.42-Math.abs(11-k)*.03).toFixed(2)}"/>`}return svg(h)}};
/* skyline */
(function(){const r=rng(9);let h=`<defs><radialGradient id="gl" cx=".5" cy=".42" r=".55"><stop offset="0" stop-color="#B7F36B" stop-opacity=".13"/><stop offset="1" stop-opacity="0"/></radialGradient><linearGradient id="sk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#080909"/><stop offset="1" stop-color="#141816"/></linearGradient></defs><rect width="1000" height="700" fill="url(#sk)"/><rect width="1000" height="700" fill="url(#gl)"/>`;
for(let i=0;i<50;i++)h+=`<circle cx="${r()*1000|0}" cy="${r()*300|0}" r=".9" fill="#F0F1EC" opacity="${(.15+r()*.35).toFixed(2)}"/>`;
h+=`<g class="fog"><rect x="-100" y="470" width="1200" height="90" fill="#B7F36B" opacity=".025"/></g>`;
let x=-10;while(x<1010){const w=24+r()*60|0,hh=90+r()*270*(1-Math.abs(x-640)/1100)|0;h+=`<rect x="${x}" y="${700-hh}" width="${w}" height="${hh}" fill="#0b0d0c" stroke="rgba(230,240,225,.07)"/>`;for(let k=0;k<hh/18;k++)if(r()>.86)h+=`<rect x="${x+4+r()*(w-10)|0}" y="${700-hh+8+k*18}" width="3" height="2" fill="${r()>.9?'#B7F36B':'#F0F1EC'}" opacity=".55"/>`;x+=w+r()*6}
h+=`<rect y="620" width="1000" height="80" fill="#080909" opacity=".75"/>`;sky.setAttribute('viewBox','0 0 1000 700');sky.innerHTML=h})();
(function(){const r=rng(21);let h=`<defs><linearGradient id="ld" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#101211"/><stop offset="1" stop-color="#080909"/></linearGradient></defs><rect width="500" height="500" fill="url(#ld)"/><circle cx="360" cy="110" r="34" fill="none" stroke="${A}" stroke-opacity=".5"/><circle cx="360" cy="110" r="3" fill="${A}"/>`;
for(let i=0;i<40;i++)h+=`<circle cx="${r()*500|0}" cy="${r()*220|0}" r=".8" fill="#F0F1EC" opacity=".4"/>`;
[[300,.5,"#121513"],[360,.7,"#0e100f"],[420,1,"#0a0b0b"]].forEach(([b,a,f],k)=>{let d=`M0 500L0 ${b}`;for(let x=0;x<=500;x+=20)d+=`L${x} ${(b-40*Math.abs(Math.sin(x/60+k*2))*Math.cos(x/170+k)-r()*28*a).toFixed(0)}`;d+=`L500 500Z`;h+=`<path d="${d}" fill="${f}" stroke="${k==0?A:L}" stroke-opacity="${k==0?.45:1}"/>`});land.innerHTML=`<svg viewBox="0 0 500 500" preserveAspectRatio="xMidYMid slice">${h}</svg>`})();
const xs={ring:`<circle cx="100" cy="60" r="20" fill="none" stroke="${L}"/><circle cx="100" cy="60" r="38" fill="none" stroke="${L}"/><circle cx="100" cy="60" r="56" fill="none" stroke="${L}"/><circle cx="156" cy="60" r="4" fill="${A}"/><circle cx="62" cy="60" r="3" fill="${T}"/>`,
stack:`<rect x="50" y="20" width="100" height="22" fill="none" stroke="${L}"/><rect x="60" y="50" width="100" height="22" fill="none" stroke="${L}"/><rect x="70" y="80" width="100" height="22" fill="none" stroke="${A}" stroke-opacity=".7"/>`,
grid:`<g stroke="${L}" fill="none"><rect x="40" y="10" width="120" height="100"/><path d="M40 50H160M100 10V110M40 80H100"/></g><rect x="104" y="14" width="52" height="32" fill="none" stroke="${A}" stroke-opacity=".7"/>`,
net:`<g stroke="${L}"><path d="M50 90L90 30 140 70 170 25M90 30L100 100 140 70"/></g><g fill="${T}"><circle cx="50" cy="90" r="3"/><circle cx="90" cy="30" r="3"/><circle cx="100" cy="100" r="3"/><circle cx="170" cy="25" r="3"/></g><circle cx="140" cy="70" r="4" fill="${A}"/>`};
orb.innerHTML=`<circle cx="200" cy="200" r="190" fill="none" stroke="${L}"/><circle cx="200" cy="200" r="130" fill="none" stroke="${L}"/><circle cx="200" cy="200" r="70" fill="none" stroke="${L}"/><g class="sp" style="transform-origin:200px 200px;animation:spin 60s linear infinite"><circle cx="200" cy="10" r="4" fill="${A}"/></g><g style="transform-origin:200px 200px;animation:spin 90s linear infinite reverse"><circle cx="330" cy="200" r="3" fill="${T}"/></g>`;



/* ===== Build ===== */
const seq=document.getElementById('seq'),dlg=document.getElementById('dlg');let last,first=true;
const tg3=(p,l)=>p.tech.map(t=>`<li>${t}</li>`).join('');
const meta=p=>`<div class="meta"><span class="m">${p.n} / ${p.c}</span><span class="tag">${TT('tag')}</span></div>`;
const tpl={
sentinel:p=>`<div class="vis">${VIS.sentinel()}</div><div class="tx"><div>${meta(p)}<h3>${p.t}</h3></div><div><p style="margin:0">${p.d}</p><span class="go">${TT('go')} <i>↗</i></span></div></div>`,
monolith:p=>`<div class="tx">${meta(p)}<h3>${p.t}</h3><p>${p.d}</p><ul class="tech">${tg3(p)}</ul><span class="go">${TT('go')} <i>↗</i></span></div><div class="vis">${VIS.monolith()}</div>`,
echo:p=>`<div class="vis">${VIS.echo()}</div><div class="tx">${meta(p)}<h3>${p.t}</h3><p>${p.d}</p><ul class="tech">${tg3(p)}</ul><span class="go">${TT('go')} <i>↗</i></span></div>`,
trace:p=>`<div class="vis">${VIS.trace()}</div><div class="tx">${meta(p)}<h3>${p.t}</h3><p>${p.d}</p><span class="go">${TT('go')} <i>↗</i></span></div>`};
const cls={sentinel:'p1',monolith:'p2',echo:'p3',trace:'p4'};
function render(){const li=LI[lang];
seq.innerHTML='';PROJECTS.forEach(q=>{const p={...q,c:q.c[li],d:q.d[li],m:q.m[li]};const b=document.createElement('button');b.className='pj rv '+cls[p.id]+(first?'':' on');b.setAttribute('aria-haspopup','dialog');b.setAttribute('aria-label',`${p.t}, ${p.c}. ${TT('tag')}`);b.innerHTML=tpl[p.id](p);
b.onclick=()=>{last=b;dv.innerHTML=VIS[p.id]();dcat.textContent=`${p.n} / ${p.c}`;dtt.textContent=p.t;dds.textContent=p.d;dap.innerHTML=`<li>${p.m}</li>`;dtc.innerHTML=tg3(p);dtag.textContent=TT('tag');dlg.showModal()};seq.appendChild(b);if(first)io.observe(b)});
xl.innerHTML=SKILLS.map((e,i)=>`<div class="xi"><button class="xb" aria-expanded="false" aria-controls="xp${i}"><span class="m">0${i+1}</span><h3>${e[li]}</h3><span class="pl" aria-hidden="true">+</span></button><div class="xp" id="xp${i}"><div><p>${e[3][li]}</p><svg viewBox="0 0 200 120" aria-hidden="true">${xs[e[4]]}</svg></div></div></div>`).join('');
xl.querySelectorAll('.xb').forEach(b=>b.onclick=()=>b.setAttribute('aria-expanded',b.getAttribute('aria-expanded')!=='true'));
/* showcase tabs */
const tabs=[["stack",TT('tbs'),`<ul class="chips">${STACK.map(s=>`<li>${s}</li>`).join('')}</ul>`]];
if(CERTS.length)tabs.push(["certs",TT('tbc'),`<ul class="chips">${CERTS.map(c=>`<li>${c.name}${c.by?` — ${c.by}`:''}</li>`).join('')}</ul>`]);
tabs.push(["refs",TT('tbr'),(REFS.length?REFS.map(r=>`<p>“${r.text}” — ${r.name}</p>`).join(''):'')+`<p>${TT('rf')}</p><a class="btn" href="mailto:${EMAIL}?subject=Referans">${TT('rfb')} <i>→</i></a>`]);
const tb=document.getElementById('tabs'),tpn=document.getElementById('tpn');
tb.innerHTML=tabs.map((t,i)=>`<button role="tab" id="tb${i}" aria-controls="tp${i}" aria-selected="${i==0}" tabindex="${i?-1:0}">${t[1]}</button>`).join('');
tpn.innerHTML=tabs.map((t,i)=>`<div class="tp" role="tabpanel" id="tp${i}" aria-labelledby="tb${i}" ${i?'hidden':''}>${t[2]}</div>`).join('');
const bs=[...tb.children];const sel=i=>bs.forEach((b,k)=>{b.setAttribute('aria-selected',k===i);b.tabIndex=k===i?0:-1;tpn.children[k].hidden=k!==i});
bs.forEach((b,i)=>{b.onclick=()=>sel(i);b.onkeydown=e=>{const d={ArrowRight:1,ArrowLeft:-1}[e.key];if(d){const n=(i+d+bs.length)%bs.length;sel(n);bs[n].focus()}}});
/* contact + tools */
const nm={github:"GitHub",linkedin:"LinkedIn",whatsapp:"WhatsApp",instagram:"Instagram",discord:"Discord",email:TT('fe')};
soc.innerHTML=Object.keys(LINKS).filter(k=>LINKS[k]).map(k=>`<a class="btn" href="${LINKS[k]}" ${k==='email'?'':'target="_blank" rel="noopener noreferrer"'}>${nm[k]} <i>↗</i></a>`).join('');
tools.innerHTML=`<span class="m">${TT('tl')}</span>`+TOOLS.map(([k,u])=>`<a href="${u}" target="_blank" rel="noopener noreferrer">${TT(k)} ↗</a>`).join('');
const qd=Math.floor(Date.now()/864e5)%QUOTES.length;qb.innerHTML=`<b>$</b> ${QUOTES[qd][li]}<i></i>`;
foot3.textContent=`© ${new Date().getFullYear()} Mustafa Yaşar. ${TT('rt')}`;first=false}
function apply(){document.documentElement.lang=lang;
document.querySelectorAll('[data-t]').forEach(e=>e.textContent=TT(e.dataset.t));
document.querySelectorAll('[data-h]').forEach(e=>e.innerHTML=TT(e.dataset.h));
document.querySelectorAll('[data-a]').forEach(e=>{const[a,k]=e.dataset.a.split(':');e.setAttribute(a,TT(k))});
document.getElementById('h1').setAttribute('aria-label',TT('h1a')+' '+TT('h1b'));
document.querySelectorAll('.lg').forEach(b=>b.setAttribute('aria-pressed',b.dataset.l===lang));
mb.setAttribute('aria-label',TT(mb.getAttribute('aria-expanded')==='true'?'menuC':'menuO'));
render()}
document.querySelectorAll('.lg').forEach(b=>b.onclick=()=>{lang=b.dataset.l;try{localStorage.setItem('lang',lang)}catch(e){}apply()});
const th=document.getElementById('th');const setTh=v=>{document.documentElement.dataset.theme=v;th.setAttribute('aria-pressed',v==='light')};
try{setTh(localStorage.getItem('theme')==='light'?'light':'dark')}catch(e){setTh('dark')}
th.onclick=()=>{const v=document.documentElement.dataset.theme==='light'?'dark':'light';setTh(v);try{localStorage.setItem('theme',v)}catch(e){}};
dx.onclick=()=>dlg.close();dlg.onclick=e=>{if(e.target===dlg)dlg.close()};dlg.addEventListener('close',()=>last&&last.focus());
/* clock */
const clk=document.getElementById('clk'),tick=()=>{clk.textContent='TR · '+new Intl.DateTimeFormat('tr-TR',{timeZone:'Europe/Istanbul',hour:'2-digit',minute:'2-digit',second:'2-digit',hour12:false}).format(new Date())};tick();setInterval(tick,1000);
/* contact form + copy */
document.getElementById('cf').onsubmit=e=>{e.preventDefault();const f=e.target,n=f.n.value.trim(),em=f.e.value.trim(),m=f.m.value.trim();location.href=`mailto:${EMAIL}?subject=${encodeURIComponent('Portföy — '+n)}&body=${encodeURIComponent(m+'\n\n'+n+' <'+em+'>')}`};
const cb=document.getElementById('cb');cb.onclick=async()=>{try{await navigator.clipboard.writeText(EMAIL)}catch(e){const t=document.createElement('textarea');t.value=EMAIL;document.body.appendChild(t);t.select();try{document.execCommand('copy')}catch(_){}t.remove()}cb.textContent=TT('cpd');setTimeout(()=>cb.textContent=TT('cpy'),1800)};
yr.textContent=new Date().getFullYear();
/* nav, progress, reveal */
const nv=document.getElementById('nv'),mb=document.getElementById('mb');
const tg=o=>{nv.classList.toggle('open',o);mb.setAttribute('aria-expanded',o);mb.setAttribute('aria-label',TT(o?'menuC':'menuO'))};
mb.onclick=()=>tg(mb.getAttribute('aria-expanded')!=='true');nv.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>tg(false)));addEventListener('keydown',e=>{if(e.key==='Escape')tg(false)});
const pg=()=>{const d=document.documentElement;d.style.setProperty('--p',Math.min(1,scrollY/Math.max(1,d.scrollHeight-innerHeight)))};addEventListener('scroll',pg,{passive:true});pg();
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('on');io.unobserve(e.target)}}),{threshold:.12});document.querySelectorAll('.rv').forEach(e=>io.observe(e));
const so=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)nv.querySelectorAll('a').forEach(a=>a.classList.toggle('on',a.getAttribute('href')==='#'+e.target.id))}),{rootMargin:'-45% 0px -50% 0px'});document.querySelectorAll('main section').forEach(s=>so.observe(s));
apply();

/* ===== Hero sculpture (canvas) ===== */
(function(){const cv=document.getElementById('cv'),cx=cv.getContext('2d'),rm=matchMedia('(prefers-reduced-motion: reduce)').matches;
const t=(1+Math.sqrt(5))/2,V=[[-1,t,0],[1,t,0],[-1,-t,0],[1,-t,0],[0,-1,t],[0,1,t],[0,-1,-t],[0,1,-t],[t,0,-1],[t,0,1],[-t,0,-1],[-t,0,1]],E=[];
V.forEach((a,i)=>V.forEach((b,j)=>{if(j>i&&Math.abs(Math.hypot(a[0]-b[0],a[1]-b[1],a[2]-b[2])-2)<.01)E.push([i,j])}));
let mx=0,my=0,vis=true,W=0,H=0;
const fit=()=>{const d=Math.min(devicePixelRatio||1,2);W=cv.clientWidth;H=cv.clientHeight;cv.width=W*d;cv.height=H*d;cx.setTransform(d,0,0,d,0,0)};
function rot(p,a,b){let[x,y,z]=p;let c=Math.cos(a),s=Math.sin(a);[x,z]=[x*c+z*s,-x*s+z*c];c=Math.cos(b);s=Math.sin(b);[y,z]=[y*c-z*s,y*s+z*c];return[x,y,z]}
function draw(ts){cx.clearRect(0,0,W,H);const sc=Math.min(W,H)*.15,ox=W*.66,oy=H*.46,a=ts*.00012+mx*.35,b=.45+my*.2;
const pr=(p,k,a2)=>{const[x,y,z]=rot(p.map(v=>v*k),a2,b);const f=4/(4-z);return[ox+x*sc*f,oy+y*sc*f,z]};
cx.lineWidth=1;
[[1.7,.5,0],[2.3,-.35,.4]].forEach(([r,tilt,ph],k)=>{cx.beginPath();for(let i=0;i<=64;i++){const q=i/64*6.283;const p=[Math.cos(q)*r,Math.sin(q)*r*Math.sin(tilt),Math.sin(q)*r*Math.cos(tilt)];const[x,y]=pr(p,1,a*.3);i?cx.lineTo(x,y):cx.moveTo(x,y)}cx.strokeStyle='rgba(230,240,225,.14)';cx.stroke();
const q=ts*.0003*(k?-1:1)+ph*6,p=[Math.cos(q)*r,Math.sin(q)*r*Math.sin(tilt),Math.sin(q)*r*Math.cos(tilt)],[x,y]=pr(p,1,a*.3);cx.fillStyle=k?'#999F97':'#B7F36B';cx.beginPath();cx.arc(x,y,k?2.5:3.5,0,6.283);cx.fill()});
[[1,a,.55],[.55,-a*1.4,.22]].forEach(([k,a2,al])=>{const P=V.map(p=>pr(p,k,a2));E.forEach(([i,j])=>{const z=(P[i][2]+P[j][2])/2;cx.strokeStyle=`rgba(183,243,107,${(al*(.5+z*.25)).toFixed(2)})`;cx.beginPath();cx.moveTo(P[i][0],P[i][1]);cx.lineTo(P[j][0],P[j][1]);cx.stroke()});P.forEach(([x,y,z],n)=>{cx.fillStyle=n===3&&k===1?'#B7F36B':'rgba(240,241,236,.7)';cx.beginPath();cx.arc(x,y,n===3&&k===1?3.2:1.8,0,6.283);cx.fill()})})}
fit();draw(0);
if(rm){addEventListener('resize',()=>{fit();draw(0)});return}
new IntersectionObserver(e=>vis=e[0].isIntersecting).observe(cv);
if(matchMedia('(pointer:fine)').matches)addEventListener('pointermove',e=>{mx=e.clientX/innerWidth-.5;my=e.clientY/innerHeight-.5},{passive:true});
addEventListener('resize',fit);(function loop(ts){if(vis&&!document.hidden)draw(ts);requestAnimationFrame(loop)})(0)})();
