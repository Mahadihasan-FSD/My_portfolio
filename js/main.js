/* ===== SETTINGS: edit these three lines after you deploy ===== */
const CFG={
  formEndpoint:"",   // Formspree URL (https://formspree.io/f/xxxx) or "netlify". Empty = opens the visitor's email app
  bookingUrl:"",     // e.g. your Calendly link. Empty = meeting request by email
  resumeUrl:"",      // e.g. "assets/resume.pdf". Empty = Resume button stays hidden
  shots:["",""],      // full-page screenshots of the two live sites (tall images), e.g. ["assets/eleven.jpg","assets/aevy.jpg"]. Empty = drawn demo preview
  portrait:"",       // transparent PNG/WebP of you, e.g. "assets/portrait.png". Empty = illustrated placeholder
  whatsapp:"",       // number with country code, e.g. "8801XXXXXXXXX". Empty = the green button just scrolls to the contact form
  analytics:"",      // Plausible domain, e.g. "yourdomain.com". Empty = no tracking
  available:true,    // false hides the "Open for new projects" badge
  email:"mahadihasan.dev@gmail.com"
};
const skills=[["UI/UX Design",95],["Web Development",85],["AI Tools",90],["Problem Solving",88]];
document.getElementById('bars').innerHTML=skills.map(s=>`<div class="bar"><div><span>${s[0]}</span><span>${s[1]}%</span></div><div class="track"><div class="fill" style="width:${s[1]}%"></div></div></div>`).join('');
let bnOn=false;

const $=s=>document.querySelector(s),R=document.documentElement;
const save=(k,v)=>{try{localStorage.setItem(k,v)}catch(e){}},load=k=>{try{return localStorage.getItem(k)}catch(e){return null}};
const menu=$('#menu'),nav=$('header nav');
menu.onclick=()=>{const o=nav.classList.toggle('open');menu.setAttribute('aria-expanded',o)};
nav.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded',false)});
const projs=[['Eleven Nation'],['AEVY Fragrance']],cards=[...document.querySelectorAll('.proj')];let cur=0;
function show(n){cur=(n+projs.length)%projs.length;const t='0'+(cur+1)+' / 0'+projs.length;$('#selNo').textContent=t;$('#pgNo').textContent=t;$('#selName').textContent=projs[cur][0];cards.forEach((c,i)=>c.classList.toggle('hl',i===cur));$('.hero').dataset.slide=cur+1}
$('#prev').onclick=()=>show(cur-1);$('#next').onclick=()=>show(cur+1);
const ids=['top','work','about','contact'],links=[...document.querySelectorAll('header nav a')];
function spy(){let a=0;ids.forEach((id,i)=>{if(document.getElementById(id).getBoundingClientRect().top<=window.innerHeight*.35)a=i});links.forEach((l,i)=>l.classList.toggle('on',i===a))}
addEventListener('scroll',spy,{passive:true});spy();

const calm=matchMedia('(prefers-reduced-motion:reduce)').matches;
const prog=document.createElement('div');prog.className='prog';document.body.appendChild(prog);
addEventListener('scroll',()=>{const m=R.scrollHeight-innerHeight;prog.style.width=(m>0?scrollY/m*100:0)+'%'},{passive:true});
if(!calm){
 const hero=$('.hero');
 if(matchMedia('(pointer:fine)').matches){let tx=0,ty=0,cx=0,cy=0,run=0;const step=()=>{cx+=(tx-cx)*.09;cy+=(ty-cy)*.09;hero.style.setProperty('--mx',cx.toFixed(4));hero.style.setProperty('--my',cy.toFixed(4));if(Math.abs(tx-cx)+Math.abs(ty-cy)>.0008)requestAnimationFrame(step);else run=0};const go=()=>{if(!run){run=1;requestAnimationFrame(step)}};hero.addEventListener('pointermove',e=>{const r=hero.getBoundingClientRect();tx=(e.clientX-r.left)/r.width-.5;ty=(e.clientY-r.top)/r.height-.5;go()});hero.addEventListener('pointerleave',()=>{tx=ty=0;go()})}
 const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;const t=e.target;io.unobserve(t);t.classList.add('in');setTimeout(()=>{t.classList.remove('rv','in');t.style.removeProperty('--d')},1500)}),{threshold:.12,rootMargin:'0px 0px -6% 0px'});
 document.querySelectorAll('.fhead,.proj,.about>div,.step,.lets,.contact>*').forEach(el=>{el.classList.add('rv');el.style.setProperty('--d',[...el.parentNode.children].indexOf(el)*.09+'s');io.observe(el)});
 const fills=[...document.querySelectorAll('.fill')];fills.forEach(f=>{f.dataset.w=f.style.width;f.style.width='0'});
 new IntersectionObserver((es,o)=>{if(es[0].isIntersecting){fills.forEach((f,i)=>setTimeout(()=>f.style.width=f.dataset.w,i*140));o.disconnect()}},{threshold:.4}).observe($('#bars'));
}

/* ===== language, case studies, contact form ===== */
const BN={"Home": "হোম", "Work": "কাজ", "About": "পরিচিতি", "Contact": "যোগাযোগ", "Mahadi Hasan": "মাহাদী হাসান", "UI/UX Designer": "ইউআই/ইউএক্স ডিজাইনার", "Vibe Coder": "ভাইব কোডার", "I design digital experiences.": "আমি ডিজিটাল অভিজ্ঞতা ডিজাইন করি।", "Then I bring them to life.": "তারপর সেগুলোকে প্রাণ দিই।", "I'm Mahadi Hasan, a UI/UX designer and vibe coder focused on crafting thoughtful interfaces and building digital products with AI-assisted development.": "আমি মাহাদী হাসান, একজন ইউআই/ইউএক্স ডিজাইনার ও ভাইব কোডার। আমি সুচিন্তিত ইন্টারফেস ডিজাইন করি এবং AI-সহায়তায় ডিজিটাল প্রোডাক্ট বানাই।", "Explore my work →": "আমার কাজ দেখুন →", "Let's talk": "কথা বলি", "Selected Work": "নির্বাচিত কাজ", "▢ UI/UX Design": "▢ ইউআই/ইউএক্স ডিজাইন", "</> Vibe Coding": "</> ভাইব কোডিং", "Ideas → Design → Code → Launch": "আইডিয়া → ডিজাইন → কোড → লঞ্চ", "✦ Featured Work": "✦ নির্বাচিত প্রজেক্ট", "Real projects. Live websites. Designed & built by me.": "বাস্তব প্রজেক্ট। লাইভ ওয়েবসাইট। আমার ডিজাইন ও তৈরি।", "View all projects →": "সব প্রজেক্ট দেখুন →", "01 / E-Commerce": "০১ / ই-কমার্স", "02 / E-Commerce": "০২ / ই-কমার্স", "Sportswear · Football Jersey Store": "স্পোর্টসওয়্যার · ফুটবল জার্সি স্টোর", "Perfume Store · Luxury Brand": "পারফিউম স্টোর · লাক্সারি ব্র্যান্ড", "Live site ↗": "লাইভ সাইট ↗", "ABOUT ME": "আমার সম্পর্কে", "Student Founder.": "স্টুডেন্ট ফাউন্ডার।", "Designer & Builder.": "ডিজাইনার ও বিল্ডার।", "I turn ideas into real products — from thoughtful interfaces to fully functional websites. Currently, I'm a student and building my journey as a founder, designer and creator.": "আমি আইডিয়াকে বাস্তব প্রোডাক্টে রূপ দিই — সুচিন্তিত ইন্টারফেস থেকে পূর্ণাঙ্গ ওয়েবসাইট পর্যন্ত। বর্তমানে আমি একজন শিক্ষার্থী এবং ফাউন্ডার, ডিজাইনার ও ক্রিয়েটর হিসেবে পথ চলছি।", "More about me →": "আমার সম্পর্কে আরও →", "Resume ↓": "রেজুমে ↓", "UI/UX Design": "ইউআই/ইউএক্স ডিজাইন", "Web Development": "ওয়েব ডেভেলপমেন্ট", "AI Tools": "এআই টুলস", "Problem Solving": "সমস্যা সমাধান", "Live Projects": "লাইভ প্রজেক্ট", "Years Learning & Building": "বছর শেখা ও তৈরি", "More to Come": "আরও আসছে", "MY PROCESS": "আমার প্রক্রিয়া", "From Idea to Impact": "আইডিয়া থেকে ইমপ্যাক্ট", "A simple, focused process to turn ideas into meaningful digital products.": "আইডিয়াকে অর্থবহ ডিজিটাল প্রোডাক্টে রূপ দেওয়ার একটি সহজ ও মনোযোগী প্রক্রিয়া।", "1. Discover": "১. আবিষ্কার", "Understand goals & users": "লক্ষ্য ও ব্যবহারকারী বোঝা", "2. Design": "২. ডিজাইন", "Create intuitive experiences": "সহজ ও স্বাভাবিক অভিজ্ঞতা তৈরি", "3. Build": "৩. তৈরি", "Turn designs into reality": "ডিজাইনকে বাস্তবে রূপ দেওয়া", "4. Launch": "৪. লঞ্চ", "Ship & iterate": "প্রকাশ করা ও উন্নত করা", "Let's build something great together.": "চলুন একসাথে দারুণ কিছু বানাই।", "CONTACT": "যোগাযোগ", "Ready to start": "আপনার পরবর্তী প্রজেক্ট", "your next project?": "শুরু করতে প্রস্তুত?", "Email me": "ইমেইল করুন", "Book a meeting": "মিটিং বুক করুন", "Schedule a call": "কল শিডিউল করুন", "Name": "নাম", "Email": "ইমেইল", "Message": "বার্তা", "Send message": "বার্তা পাঠান", "MAHADI HASAN": "মাহাদী হাসান", "© 2025. All rights reserved.": "© ২০২৫। সর্বস্বত্ব সংরক্ষিত।"};
const CASES=[{"name": "Eleven Nation", "url": "https://www.elevennation.shop/", "en": {"tag": "E-commerce · Sportswear", "lead": "An online football jersey store for Bangladesh: Player Editions, Fan Editions, Retro Classics, and custom names and numbers.", "h1": "My role", "a": ["UI/UX design of the storefront", "Front-end build with AI-assisted development", "Launched as a live website"], "h2": "What the store offers", "b": ["Player Editions and Fan Editions", "Retro Classics", "Custom names and numbers"], "visit": "Visit live site ↗", "close": "Close"}, "bn": {"tag": "ই-কমার্স · স্পোর্টসওয়্যার", "lead": "বাংলাদেশের জন্য একটি অনলাইন ফুটবল জার্সি স্টোর: প্লেয়ার এডিশন, ফ্যান এডিশন, রেট্রো ক্লাসিক এবং কাস্টম নাম ও নম্বর।", "h1": "আমার ভূমিকা", "a": ["স্টোরফ্রন্টের ইউআই/ইউএক্স ডিজাইন", "AI-সহায়তায় ফ্রন্ট-এন্ড তৈরি", "লাইভ ওয়েবসাইট হিসেবে লঞ্চ"], "h2": "স্টোরে যা পাওয়া যায়", "b": ["প্লেয়ার এডিশন ও ফ্যান এডিশন", "রেট্রো ক্লাসিক", "কাস্টম নাম ও নম্বর"], "visit": "লাইভ সাইট দেখুন ↗", "close": "বন্ধ করুন"}}, {"name": "AEVY Fragrance", "url": "https://www.aevyfragrance.shop/", "en": {"tag": "E-commerce · Fragrance", "lead": "A perfume store for Bangladesh with fresh, elegant and modern fragrances for men, women and unisex wear.", "h1": "My role", "a": ["UI/UX design of the storefront", "Front-end build with AI-assisted development", "Launched as a live website"], "h2": "What the store offers", "b": ["Fragrances for men, women and unisex", "Fresh, elegant, modern scents", "Everyday signature scents"], "visit": "Visit live site ↗", "close": "Close"}, "bn": {"tag": "ই-কমার্স · ফ্র্যাগ্রেন্স", "lead": "বাংলাদেশের জন্য একটি পারফিউম স্টোর, যেখানে পুরুষ, নারী ও ইউনিসেক্সের জন্য সতেজ, মার্জিত ও আধুনিক ঘ্রাণ আছে।", "h1": "আমার ভূমিকা", "a": ["স্টোরফ্রন্টের ইউআই/ইউএক্স ডিজাইন", "AI-সহায়তায় ফ্রন্ট-এন্ড তৈরি", "লাইভ ওয়েবসাইট হিসেবে লঞ্চ"], "h2": "স্টোরে যা পাওয়া যায়", "b": ["পুরুষ, নারী ও ইউনিসেক্স ঘ্রাণ", "সতেজ, মার্জিত, আধুনিক সুগন্ধ", "প্রতিদিনের সিগনেচার ঘ্রাণ"], "visit": "লাইভ সাইট দেখুন ↗", "close": "বন্ধ করুন"}}];
const orig=new WeakMap(),T=(a,b)=>bnOn?b:a,dlg=$('#case');
function tr(){const w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,{acceptNode:n=>n.parentNode.closest('script,style,dialog')?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT});let n;while(n=w.nextNode()){const k=(orig.get(n)??n.nodeValue).replace(/\s+/g,' ').trim();if(!BN[k])continue;if(bnOn){if(!orig.has(n))orig.set(n,n.nodeValue);n.nodeValue=BN[k]}else if(orig.has(n))n.nodeValue=orig.get(n)}}
function applyLang(){tr();R.lang=bnOn?'bn':'en';document.querySelectorAll('[data-ph-bn]').forEach(e=>{e.dataset.ph=e.dataset.ph||e.placeholder;e.placeholder=bnOn?e.dataset.phBn:e.dataset.ph});document.title=bnOn?'মাহাদী হাসান — ইউআই/ইউএক্স ডিজাইনার ও ভাইব কোডার':'Mahadi Hasan — UI/UX Designer & Vibe Coder';if(dlg.open)renderDlg();renderExtras();if(self.wzReady)renderWz();if(self.nReady)renderNotes()}
$('#lang').onclick=()=>{bnOn=!bnOn;applyLang();save('lang',bnOn?'bn':'en')};
let caseIdx=0;
function renderCase(){const c=CASES[caseIdx],t=c[bnOn?'bn':'en'],li=a=>a.map(x=>'<li>'+x+'</li>').join('');
 dlg.innerHTML='<div class="cs"><div class="row" style="justify-content:space-between"><span class="cap">'+t.tag+'</span><button class="pill round" id="cx" aria-label="'+t.close+'">✕</button></div><h3>'+c.name+'</h3><p>'+t.lead+'</p><div class="cols"><div><h4>'+t.h1+'</h4><ul>'+li(t.a)+'</ul></div><div><h4>'+t.h2+'</h4><ul>'+li(t.b)+'</ul></div></div><div class="row"><a class="btn p" href="'+c.url+'" target="_blank" rel="noopener">'+t.visit+'</a><button class="btn" id="cc">'+t.close+'</button></div></div>';
 $('#cx').onclick=$('#cc').onclick=()=>dlg.close()}
function openCase(i){caseIdx=i;renderCase();dlg.showModal();show(i)}
dlg.addEventListener('click',e=>{if(e.target===dlg)dlg.close()});
cards.forEach((c,i)=>{c.addEventListener('click',e=>{if(!e.target.closest('.visit'))openCase(i)});c.addEventListener('keydown',e=>{if((e.key==='Enter'||e.key===' ')&&e.target===c){e.preventDefault();openCase(i)}})});
if(CFG.resumeUrl){const r=$('#resume');r.href=CFG.resumeUrl;r.setAttribute('download','');r.hidden=false}
if(CFG.bookingUrl){const b=$('#book');b.href=CFG.bookingUrl;b.target='_blank';b.rel='noopener'}
const cf=$('#cf');
if(load('lang')==='bn'){bnOn=true;applyLang()}
/* hero auto-advance */
let timer;const play=()=>{clearInterval(timer);if(calm)return;timer=setInterval(()=>{if(!document.hidden&&!$('.hero').matches(':hover')&&!dlg.open)show(cur+1)},8000)};
['#prev','#next'].forEach(s=>$(s).addEventListener('click',play));play();

/* ===== EDITABLE CONTENT: services, tools, reviews, FAQ. Each text is [English, Bangla] ===== */
const X={
 avail:["Open for new projects","নতুন প্রজেক্টের জন্য খোলা"],
 sv:{cap:["SERVICES","সেবাসমূহ"],h:["What I can build for you","আমি আপনার জন্য যা বানাতে পারি"],s:["Design and development, from first idea to launch.","প্রথম আইডিয়া থেকে লঞ্চ পর্যন্ত ডিজাইন ও ডেভেলপমেন্ট।"],items:[
  {ic:"◧",t:["Website design & build","ওয়েবসাইট ডিজাইন ও তৈরি"],d:["Fast, responsive websites and landing pages that look sharp on every screen.","দ্রুত, রেসপন্সিভ ওয়েবসাইট ও ল্যান্ডিং পেজ, যা সব স্ক্রিনে সুন্দর দেখায়।"],tags:[["Responsive","রেসপন্সিভ"],["Landing pages","ল্যান্ডিং পেজ"],["Fast loading","দ্রুত লোড"]]},
  {ic:"▣",t:["E-commerce stores","ই-কমার্স স্টোর"],d:["Product pages, cart and checkout flows built for online shoppers.","অনলাইন ক্রেতার জন্য প্রোডাক্ট পেজ, কার্ট ও চেকআউট ফ্লো।"],tags:[["Product pages","প্রোডাক্ট পেজ"],["Checkout","চেকআউট"],["Mobile-first","মোবাইল-ফার্স্ট"]]},
  {ic:"✎",t:["UI/UX design","ইউআই/ইউএক্স ডিজাইন"],d:["Clear user flows, wireframes and polished interfaces before any code is written.","কোড লেখার আগেই পরিষ্কার ইউজার ফ্লো, ওয়্যারফ্রেম ও পরিপাটি ইন্টারফেস।"],tags:[["Wireframes","ওয়্যারফ্রেম"],["Prototypes","প্রোটোটাইপ"],["Design systems","ডিজাইন সিস্টেম"]]},
  {ic:"✦",t:["AI-assisted development","AI-সহায়তায় ডেভেলপমেন্ট"],d:["Turn an idea into a working product quickly using modern AI tools.","আধুনিক AI টুল দিয়ে আইডিয়াকে দ্রুত কার্যকর প্রোডাক্টে রূপ দেওয়া।"],tags:[["Rapid prototypes","দ্রুত প্রোটোটাইপ"],["MVPs","এমভিপি"],["Iteration","ক্রমাগত উন্নয়ন"]]}]},
 tools:["Figma","HTML","CSS","JavaScript","Responsive design","Prototyping","Wireframing","Design systems","AI-assisted coding"],
 rv:{cap:["KIND WORDS","ক্লায়েন্টের কথা"],h:["What clients say","ক্লায়েন্টরা যা বলেন"],sample:["Sample","নমুনা"],items:[
  {sample:true,q:["The new store looks professional and was ready faster than I expected.","নতুন স্টোরটা দেখতে প্রফেশনাল, আর আমি যতটা ভেবেছিলাম তার চেয়ে দ্রুত তৈরি হয়েছে।"],n:["Client name","ক্লায়েন্টের নাম"],r:["Store owner","স্টোর মালিক"]},
  {sample:true,q:["Clear communication and a design that made our products stand out.","পরিষ্কার যোগাযোগ, আর এমন ডিজাইন যা আমাদের প্রোডাক্টকে আলাদা করেছে।"],n:["Client name","ক্লায়েন্টের নাম"],r:["Brand founder","ব্র্যান্ড ফাউন্ডার"]}]},
 fq:{cap:["FAQ","সাধারণ প্রশ্ন"],h:["Questions you might have","আপনার সম্ভাব্য প্রশ্ন"],items:[
  [["How long does a project take?","একটি প্রজেক্টে কতদিন লাগে?"],["It depends on the scope. A landing page can take a few days, a full online store a few weeks. I share a timeline after we talk about your goals.","এটা কাজের পরিধির ওপর নির্ভর করে। ল্যান্ডিং পেজে কয়েক দিন, পুরো অনলাইন স্টোরে কয়েক সপ্তাহ লাগতে পারে। আপনার লক্ষ্য নিয়ে কথা বলার পর আমি সময়সূচি জানাই।"]],
  [["How does payment work?","পেমেন্ট কীভাবে হয়?"],["We agree on the scope and price first. Usually part of the payment is made upfront and the rest on delivery.","প্রথমে আমরা কাজের পরিধি ও দাম ঠিক করি। সাধারণত কিছু অংশ আগে, বাকিটা ডেলিভারির সময় পরিশোধ করতে হয়।"]],
  [["Can I ask for changes?","আমি কি পরিবর্তন চাইতে পারব?"],["Yes. Revisions are part of the process, and we agree on the number of rounds before starting.","হ্যাঁ। পরিবর্তন প্রক্রিয়ারই অংশ, আর শুরুর আগেই কয়বার সংশোধন হবে তা ঠিক করে নিই।"]],
  [["Do you work with clients outside Bangladesh?","বাংলাদেশের বাইরের ক্লায়েন্টের সাথে কাজ করেন?"],["Yes. I work remotely and can communicate in English or Bangla.","হ্যাঁ। আমি রিমোটলি কাজ করি এবং ইংরেজি বা বাংলায় যোগাযোগ করতে পারি।"]],
  [["Will my site work on phones?","আমার সাইট কি ফোনে ঠিকমতো চলবে?"],["Yes. Every site is designed mobile-first and checked on different screen sizes.","হ্যাঁ। প্রতিটি সাইট মোবাইল-ফার্স্ট ডিজাইন করা হয় এবং বিভিন্ন স্ক্রিন সাইজে পরীক্ষা করা হয়।"]]]}
};
function renderExtras(){
 const L=p=>p[bnOn?1:0],set=(id,p)=>{const e=document.getElementById(id);if(e)e.textContent=L(p)},esc=s=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;');
 set('availT',X.avail);$('#avail').hidden=!CFG.available;
 set('svCap',X.sv.cap);set('svH',X.sv.h);set('svS',X.sv.s);
 $('#svc').innerHTML=X.sv.items.map(i=>'<div><div class="ic" aria-hidden="true">'+i.ic+'</div><h3>'+esc(L(i.t))+'</h3><p>'+esc(L(i.d))+'</p><div class="tags">'+i.tags.map(t=>'<span>'+esc(L(t))+'</span>').join('')+'</div></div>').join('');
 if(!$('#marq').firstChild){const m=X.tools.map(t=>'<span>'+esc(t)+'</span>').join('');$('#marq').innerHTML='<div>'+m+m+'</div>'}
 set('rvCap',X.rv.cap);set('rvH',X.rv.h);
 $('#rev').innerHTML=X.rv.items.map(i=>'<blockquote>“'+esc(L(i.q))+'”<cite>'+esc(L(i.n))+', '+esc(L(i.r))+(i.sample?'<span class="smp">'+L(X.rv.sample)+'</span>':'')+'</cite></blockquote>').join('');
 set('fqCap',X.fq.cap);set('fqH',X.fq.h);
 $('#faqList').innerHTML=X.fq.items.map(i=>'<details><summary>'+esc(L(i[0]))+'</summary><p>'+esc(L(i[1]))+'</p></details>').join('');
 $('#waT').textContent=T('WhatsApp','হোয়াটসঅ্যাপ');
 const wa=$('#wa');if(CFG.whatsapp){wa.href='https://wa.me/'+CFG.whatsapp.replace(/\D/g,'')+'?text='+encodeURIComponent(T("Hi Mahadi, I'd like to talk about a project.","হ্যালো মাহাদী, একটি প্রজেক্ট নিয়ে কথা বলতে চাই।"));wa.target='_blank';wa.rel='noopener'}
}
renderExtras();
if(CFG.analytics){const s=document.createElement('script');s.defer=true;s.dataset.domain=CFG.analytics;s.src='https://plausible.io/js/script.js';document.head.appendChild(s)}

/* ===== portrait slot + scroll camera ===== */
if(CFG.portrait){const im=document.createElement('img');im.className='person';im.alt='Mahadi Hasan';im.src=CFG.portrait;$('.person').replaceWith(im)}
if(!calm){const camP=[$('.world'),$('.mA'),$('.mB')],camS=[$('.kb'),$('.stage')];let tk=0;const cam=()=>{tk=0;const y=scrollY,m=Math.max(1,R.scrollHeight-innerHeight);const pv=Math.min(1,y/m).toFixed(4),sv=Math.min(y,640).toFixed(0);camP.forEach(e=>e.style.setProperty('--p',pv));camS.forEach(e=>e.style.setProperty('--sy',sv))};addEventListener('scroll',()=>{if(!tk)tk=requestAnimationFrame(cam)},{passive:true});cam()}
/* ===== project brief wizard. Texts are [English, Bangla] ===== */
var WZ={
 count:["Step","ধাপ"],pick:["Pick one or more","এক বা একাধিক বেছে নিন"],
 s1:["What do you need?","আপনার কী দরকার?"],need:[["Website","ওয়েবসাইট"],["Online store","অনলাইন স্টোর"],["UI/UX design","ইউআই/ইউএক্স ডিজাইন"],["Redesign","রিডিজাইন"],["Something else","অন্য কিছু"]],
 s2:["When do you need it?","কবে দরকার?"],time:[["As soon as possible","যত দ্রুত সম্ভব"],["Within a month","এক মাসের মধ্যে"],["In 2–3 months","২–৩ মাসের মধ্যে"],["Flexible","নমনীয়"]],
 s2b:["Rough budget","আনুমানিক বাজেট"],budget:[["Under ৳20k","৳২০ হাজারের কম"],["৳20k–50k","৳২০–৫০ হাজার"],["৳50k–1 lakh","৳৫০ হাজার–১ লাখ"],["Above ৳1 lakh","১ লাখের বেশি"],["Not sure yet","এখনো নিশ্চিত নই"]],
 s3:["Tell me a bit more","আরেকটু জানান"],
 back:["← Back","← পেছনে"],next:["Next →","পরের ধাপ →"],send:["Send brief","ব্রিফ পাঠান"],wa:["Send on WhatsApp","হোয়াটসঅ্যাপে পাঠান"],
 e1:["Please pick at least one option.","অন্তত একটি বেছে নিন।"],e2:["Please choose a timeline and a budget.","সময় ও বাজেট বেছে নিন।"],
 sending:["Sending...","পাঠানো হচ্ছে..."],ok:["Thanks! Your brief was sent.","ধন্যবাদ! আপনার ব্রিফ পাঠানো হয়েছে।"],fail:["Could not send. Please email me directly.","পাঠানো যায়নি। সরাসরি ইমেইল করুন।"],mail:["Opening your email app...","আপনার ইমেইল অ্যাপ খুলছে..."]
};
const wst={need:[],time:'',budget:'',s:1},wL=p=>p[bnOn?1:0],wmsg=p=>{$('#cfs').textContent=p?wL(p):''};
function renderWz(){
 const esc=s=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;'),o=(name,type,list,on)=>list.map(i=>'<label class="opt"><input type="'+type+'" name="'+name+'" value="'+esc(i[0])+'"'+(on(i[0])?' checked':'')+'><span>'+esc(wL(i))+'</span></label>').join('');
 $('#wz1h').textContent=wL(WZ.s1);$('#wz1p').textContent=wL(WZ.pick);$('#wz2h').textContent=wL(WZ.s2);$('#wz2h2').textContent=wL(WZ.s2b);$('#wz3h').textContent=wL(WZ.s3);
 $('#wzNeed').innerHTML=o('need','checkbox',WZ.need,v=>wst.need.includes(v));
 $('#wzTime').innerHTML=o('timeline','radio',WZ.time,v=>wst.time===v);
 $('#wzBudget').innerHTML=o('budget','radio',WZ.budget,v=>wst.budget===v);
 $('#wzBack').textContent=wL(WZ.back);$('#wzNext').textContent=wL(WZ.next);$('#wzSend').textContent=wL(WZ.send);$('#wzWa').textContent=wL(WZ.wa);
 wzGo(wst.s);
}
function wzGo(n){wst.s=n;cf.querySelectorAll('.wz-pane').forEach(p=>p.hidden=+p.dataset.s!==n);
 cf.querySelectorAll('#wzDots i').forEach((d,i)=>d.classList.toggle('on',i<n));$('#wzCount').textContent=wL(WZ.count)+' '+n+' / 3';
 $('#wzBack').hidden=n===1;$('#wzNext').hidden=n===3;$('#wzSend').hidden=n!==3;$('#wzWa').hidden=!(n===3&&CFG.whatsapp)}
cf.addEventListener('change',e=>{const t=e.target;if(t.name==='need')wst.need=[...cf.querySelectorAll('input[name=need]:checked')].map(x=>x.value);if(t.name==='timeline')wst.time=t.value;if(t.name==='budget')wst.budget=t.value;wmsg(null)});
$('#wzBack').onclick=()=>{wmsg(null);wzGo(wst.s-1)};
$('#wzNext').onclick=()=>{if(wst.s===1&&!wst.need.length)return wmsg(WZ.e1);if(wst.s===2&&(!wst.time||!wst.budget))return wmsg(WZ.e2);wmsg(null);wzGo(wst.s+1)};
const brief=()=>{const d=new FormData(cf);return['New project brief','Need: '+wst.need.join(', '),'Timeline: '+wst.time,'Budget: '+wst.budget,'Name: '+d.get('name'),'Email: '+d.get('email'),'','Details: '+(d.get('message')||'-')].join('\n')};
$('#wzWa').onclick=()=>{if(cf.reportValidity())window.open('https://wa.me/'+CFG.whatsapp.replace(/\D/g,'')+'?text='+encodeURIComponent(brief()),'_blank','noopener')};
cf.addEventListener('submit',async e=>{e.preventDefault();if(wst.s!==3)return;const d=new FormData(cf);if(d.get('company'))return;d.append('brief',brief());
 if(CFG.formEndpoint){wmsg(WZ.sending);const net=CFG.formEndpoint==='netlify';
  try{const r=await fetch(net?'/':CFG.formEndpoint,net?{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:new URLSearchParams(d)}:{method:'POST',headers:{Accept:'application/json'},body:d});if(!r.ok)throw 0;cf.reset();wst.need=[];wst.time=wst.budget='';wst.s=1;renderWz();wmsg(WZ.ok)}
  catch(_){wmsg(WZ.fail)}}
 else{location.href='mailto:'+CFG.email+'?subject='+encodeURIComponent('Project brief from '+d.get('name'))+'&body='+encodeURIComponent(brief());wmsg(WZ.mail)}});
self.wzReady=true;renderWz();applyLang_ph();
function applyLang_ph(){document.querySelectorAll('[data-ph-bn]').forEach(e=>{e.dataset.ph=e.dataset.ph||e.placeholder;e.placeholder=bnOn?e.dataset.phBn:e.dataset.ph})}

BN["● Live"]="● লাইভ";
/* ===== live previews (screenshot slot or drawn demo), notes, process story, torch ===== */
var dlgMode={t:'case',i:0};
const mkHTML=k=>{const g='<div class="g"><i></i><i></i><i></i><i></i><i></i><i></i></div>';return '<div class="mk '+(k?'mk-a':'mk-g')+'"><i class="h"></i><i class="hr"></i><i class="t"></i>'+g+'<i class="t"></i>'+g+'<i class="band"></i><i class="f"></i></div>'};
const pvHTML=i=>{const u=CASES[i].url,host=u.replace(/^https?:\/\/(www\.)?/,'').replace(/\/$/,''),s=CFG.shots[i];return '<div class="pb"><s></s><s></s><s></s><span class="pu">'+host+'</span></div><div class="pw">'+(s?'<div class="shot" style="background-image:url('+s+')"></div>':mkHTML(i))+'</div>'};
document.querySelectorAll('.pv[data-k]').forEach(e=>e.innerHTML=pvHTML(+e.dataset.k));
function renderCase(){dlgMode={t:'case',i:caseIdx};const c=CASES[caseIdx],t=c[bnOn?'bn':'en'],li=a=>a.map(x=>'<li>'+x+'</li>').join('');
 dlg.innerHTML='<div class="cs"><div class="row" style="justify-content:space-between"><span class="cap">'+t.tag+'</span><button class="pill round" id="cx" aria-label="'+t.close+'">✕</button></div><h3>'+c.name+'</h3><p>'+t.lead+'</p><div class="pv big">'+pvHTML(caseIdx)+'</div><div class="cols"><div><h4>'+t.h1+'</h4><ul>'+li(t.a)+'</ul></div><div><h4>'+t.h2+'</h4><ul>'+li(t.b)+'</ul></div></div><div class="row"><a class="btn p" href="'+c.url+'" target="_blank" rel="noopener">'+t.visit+'</a><button class="btn" id="cc">'+t.close+'</button></div></div>';
 $('#cx').onclick=$('#cc').onclick=()=>dlg.close()}
var NT={cap:["NOTES","নোট"],h:["Notes on design and building","ডিজাইন ও তৈরি নিয়ে নোট"],s:["Short posts on how I work.","আমি কীভাবে কাজ করি, তা নিয়ে ছোট লেখা।"],read:["Read →","পড়ুন →"],sample:["Sample","নমুনা"],close:["Close","বন্ধ করুন"],items:[
 {t:["What I learned building my first online store","আমার প্রথম অনলাইন স্টোর বানিয়ে যা শিখলাম"],g:["Design · 3 min read","ডিজাইন · ৩ মিনিট"],e:["Small decisions on product pages matter more than big redesigns.","বড় রিডিজাইনের চেয়ে প্রোডাক্ট পেজের ছোট সিদ্ধান্তই বেশি কাজে দেয়।"],b:[["When I built my first store, I spent days on the homepage. The product pages are where visitors actually decide, so that is where I would start next time.","প্রথম স্টোর বানানোর সময় আমি হোমপেজেই কয়েক দিন কাটিয়েছিলাম। কিন্তু ক্রেতা আসলে সিদ্ধান্ত নেয় প্রোডাক্ট পেজে, তাই পরেরবার সেখান থেকেই শুরু করতাম।"],["Clear photos, a visible price, simple size choices and a confident buy button do more than any animation. I now design the product page first and build everything else around it.","পরিষ্কার ছবি, চোখে পড়ার মতো দাম, সহজ সাইজ বাছাই আর আত্মবিশ্বাসী 'কিনুন' বাটন যেকোনো এনিমেশনের চেয়ে বেশি কাজ করে। এখন আমি আগে প্রোডাক্ট পেজ ডিজাইন করি, বাকি সব তার চারপাশে সাজাই।"]]},
 {t:["Vibe coding: how I work with AI tools","ভাইব কোডিং: AI টুলের সাথে আমার কাজের ধরন"],g:["Process · 4 min read","প্রক্রিয়া · ৪ মিনিট"],e:["AI writes the first draft; design decisions stay with me.","AI প্রথম খসড়া লেখে; ডিজাইনের সিদ্ধান্ত থাকে আমার হাতে।"],b:[["I describe the screen I have in mind, let an AI tool draft the code, then read, test and refine it myself. The speed is great for prototypes.","আমার মাথায় থাকা স্ক্রিনটা বর্ণনা করি, AI টুল কোডের খসড়া বানায়, তারপর আমি নিজে পড়ে, পরীক্ষা করে আর ঠিক করে নিই। প্রোটোটাইপের জন্য এই গতি দারুণ।"],["What AI cannot do for me is decide what the product should feel like. Layout, spacing and tone still come from the design work I do before I open the editor.","প্রোডাক্টটা কেমন অনুভূতি দেবে, সেই সিদ্ধান্ত AI আমার হয়ে নিতে পারে না। লেআউট, ফাঁকা জায়গা আর সুর আসে এডিটর খোলার আগের ডিজাইনের কাজ থেকেই।"]]},
 {t:["Small details that make a store feel trustworthy","যে ছোট খুঁটিনাটি স্টোরকে বিশ্বাসযোগ্য করে"],g:["UX · 3 min read","ইউএক্স · ৩ মিনিট"],e:["Clear contact details, honest delivery info and a calm layout build trust.","পরিষ্কার যোগাযোগের তথ্য, সৎ ডেলিভারি তথ্য আর শান্ত লেআউট বিশ্বাস গড়ে।"],b:[["Shoppers decide quickly whether to trust a site. Clear contact details, honest delivery information and easy returns answer questions before they are asked.","ক্রেতারা খুব দ্রুত ঠিক করে ফেলে সাইটটা বিশ্বাস করবে কিনা। পরিষ্কার যোগাযোগের তথ্য, সৎ ডেলিভারির বিবরণ আর সহজ রিটার্ন প্রশ্ন করার আগেই উত্তর দিয়ে দেয়।"],["A calm layout helps too: consistent spacing, readable text and no surprises at checkout.","শান্ত লেআউটও সাহায্য করে: সমান ফাঁকা জায়গা, পড়ার মতো লেখা আর চেকআউটে কোনো চমক নয়।"]]}]};
const nL=p=>p[bnOn?1:0],nEsc=s=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;');
function renderNotes(){$('#ntCap').textContent=nL(NT.cap);$('#ntH').textContent=nL(NT.h);$('#ntS').textContent=nL(NT.s);
 $('#notesList').innerHTML=NT.items.map((n,i)=>'<article class="note" tabindex="0" role="button" data-n="'+i+'"><span class="tg">'+nEsc(nL(n.g))+' <span class="smp">'+nL(NT.sample)+'</span></span><h3>'+nEsc(nL(n.t))+'</h3><p>'+nEsc(nL(n.e))+'</p><span class="rd">'+nL(NT.read)+'</span></article>').join('');
 document.querySelectorAll('.note').forEach(el=>{const o=()=>openNote(+el.dataset.n);el.onclick=o;el.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();o()}}})}
function renderNote(i){dlgMode={t:'note',i};const n=NT.items[i];
 dlg.innerHTML='<div class="cs"><div class="row" style="justify-content:space-between"><span class="cap">'+nEsc(nL(n.g))+' <span class="smp">'+nL(NT.sample)+'</span></span><button class="pill round" id="cx" aria-label="'+nL(NT.close)+'">✕</button></div><h3>'+nEsc(nL(n.t))+'</h3><div class="art" style="margin-top:14px">'+n.b.map(p=>'<p>'+nEsc(nL(p))+'</p>').join('')+'</div><div class="row"><button class="btn" id="cc">'+nL(NT.close)+'</button></div></div>';
 $('#cx').onclick=$('#cc').onclick=()=>dlg.close()}
function openNote(i){renderNote(i);dlg.showModal()}
function renderDlg(){dlgMode.t==='note'?renderNote(dlgMode.i):renderCase()}
self.nReady=true;renderNotes();
/* process story: scroll position picks the step */
{const proc=$('#process'),dev=$('#dev'),li=[...document.querySelectorAll('#psteps li')];
 const upd=()=>{const r=proc.getBoundingClientRect(),t=Math.max(1,r.height-innerHeight),p=Math.min(1,Math.max(0,-r.top/t)),s=Math.min(3,Math.floor(p*4))+1;if(+dev.dataset.st!==s){dev.dataset.st=s;li.forEach((l,i)=>l.classList.toggle('on',i===s-1))}};
 addEventListener('scroll',upd,{passive:true});upd();
 li.forEach((l,i)=>l.onclick=()=>{const r=proc.getBoundingClientRect(),t=r.height-innerHeight;scrollTo({top:scrollY+r.top+t*(i+.5)/4,behavior:calm?'auto':'smooth'})})}
