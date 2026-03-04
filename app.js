// ====== PLAN DATA — NO XP REWARD, difficulty tiers, character themes ======
const TIERS = {
  beginner: { label: 'BEGINNER — E to D Rank', sub: 'For hunters just awakening their power', color: '#69f0ae' },
  intermediate: { label: 'INTERMEDIATE — C to B Rank', sub: 'For hunters who have proven themselves', color: '#4fc3f7' },
  advanced: { label: 'ADVANCED — A to S Rank', sub: 'For hunters approaching their limits', color: '#ffd54f' },
  monarch: { label: 'MONARCH TIER', sub: 'Only the strongest may attempt this', color: '#ff6b6b' }
};

const ex=(n,ed,cb,as)=>({n,ed,cb,as});
const RANK_IDX={E:0,D:1,C:2,B:3,A:4,S:5};
function scaledEx(plan){const ri=RANK_IDX[getRk().r]||0;return plan.exercises.map(e=>({n:e.n,s:ri<=1?e.ed:ri<=3?e.cb:e.as}));}
function rankInfo(){const ri=RANK_IDX[getRk().r]||0;if(ri<=1)return{label:"E-D INTENSITY",c:"#69f0ae"};if(ri<=3)return{label:"C-B INTENSITY",c:"#4fc3f7"};return{label:"A-S INTENSITY",c:"#ff6b6b"};}
const PLANS=[
  {id:'itachi',tier:'beginner',gif:'https://media.tenor.com/OOC1Pp0_oOoAAAAC/itachi-uchiha-itachi.gif',
   char:'ITACHI UCHIHA',series:'NARUTO',badge:'ANBU',
   theme:'theme-itachi',color:'#ef9a9a',bc:'#ef9a9a',
   quote:'Those who forgive themselves and accept their limitations are the strong ones.',
   useAvatar:true,avatarEmoji:'🌸',avatarBg:'linear-gradient(135deg,#200a0a,#3d1010)',
   exercises:[
     ex('Shadow Step Drills','2x2min','3x4min','5x6min'),
     ex('Wrist & Hand Speed','5 min','10 min','20 min'),
     ex('Slow Push-ups','3x8','4x15','5x25'),
     ex('Balance Meditation','5 min','10 min','20 min'),
     ex('Single-arm Push-ups','2x5 each','3x8 each','5x15 each'),
     ex('Footwork Ladder','1 round','3 rounds','6 rounds'),
   ]},
  {id:'levi2',tier:'beginner',gif:'https://media.tenor.com/P3UMfEVlhNQAAAAC/levi-attack-on-titan.gif',
   char:'LEVI ACKERMAN',series:'ATTACK ON TITAN',badge:'SURVEY CORPS',
   theme:'theme-levi',color:'#b0bec5',bc:'#b0bec5',
   quote:'The only thing we are allowed to do is believe we will not regret the choice we made.',
   useAvatar:true,avatarEmoji:'⚔️',avatarBg:'linear-gradient(135deg,#0d1117,#1a2030)',
   exercises:[
     ex('Jump Rope','5 min','15 min','30 min'),
     ex('Core Twists','2x10','3x20','5x30'),
     ex('Wall Sits','2x20s','3x45s','5x90s'),
     ex('Push-ups','3x10','4x20','6x30'),
     ex('Sprints 100m','4 runs','8 runs','15 runs'),
     ex('Pull-ups','2x5','3x12','5x20'),
   ]},
  {id:'mikasa',tier:'intermediate',gif:'https://media.tenor.com/LRrFHLHqNgoAAAAC/mikasa-ackerman-attack-on-titan.gif',
   char:'MIKASA ACKERMAN',series:'ATTACK ON TITAN',badge:'ACK-CLASS',
   theme:'theme-mikasa',color:'#ef5350',bc:'#ef5350',
   quote:'Strong enough to protect everyone. That is why I keep moving forward.',
   useAvatar:true,avatarEmoji:'🩸',avatarBg:'linear-gradient(135deg,#2d0a0a,#5c1010)',
   exercises:[
     ex('Diamond Push-ups','3x10','4x20','6x30'),
     ex('Dead Hang','2x20s','3x45s','5x90s'),
     ex('Burpees','3x8','4x15','6x25'),
     ex('Box Jumps','2x8','3x12','5x20'),
     ex('Hollow Body Hold','2x20s','3x40s','5x75s'),
     ex('DB Swings','2x12','3x25','5x40'),
   ]},
  {id:'maki',tier:'intermediate',gif:'https://media.tenor.com/8KkODJfFBEYAAAAC/maki-zen-in-jujutsu-kaisen.gif',
   char:'MAKI ZENIN',series:'JUJUTSU KAISEN',badge:'GRADE 1',
   theme:'theme-maki',color:'#66bb6a',bc:'#66bb6a',
   quote:'No cursed energy? Fine. I will just be stronger than everyone who has it.',
   useAvatar:true,avatarEmoji:'⛩️',avatarBg:'linear-gradient(135deg,#0d2210,#1a3a1e)',
   exercises:[
     ex('Spear Strikes','2x20','3x50','5x80'),
     ex('Explosive Push-ups','3x8','4x15','6x25'),
     ex('Single-leg Squats','2x6ea','3x12ea','5x20ea'),
     ex('Resistance Band','2x12','3x20','5x35'),
     ex('Agility Ladder','5 min','10 min','20 min'),
     ex('Grip Dead Hang','3x15s','5x30s','7x60s'),
   ]},
  {id:'jinwoo',tier:'intermediate',gif:'https://media.tenor.com/Eqh5CFKaRe4AAAAC/solo-leveling-sung-jinwoo.gif',
   char:'SUNG JIN-WOO',series:'SOLO LEVELING',badge:'S-RANK',
   theme:'theme-jinwoo',color:'#4fc3f7',bc:'#4fc3f7',
   quote:'The weakest hunter in the world. I will overcome every limit placed before me.',
   useAvatar:true,avatarEmoji:'👁️',avatarBg:'linear-gradient(135deg,#030310,#0d1a3d)',
   exercises:[
     ex('Push-ups','30 reps','70 reps','100 reps'),
     ex('Sit-ups','30 reps','70 reps','100 reps'),
     ex('Squats','30 reps','70 reps','100 reps'),
     ex('Running','3 km','7 km','10 km'),
     ex('Pull-ups','15 reps','35 reps','50 reps'),
     ex('Planks','1 min','3 min','5 min'),
   ]},
  {id:'gojo',tier:'advanced',gif:'https://media.tenor.com/QcC0DXBPGRYAAAAC/gojo-satoru-jujutsu-kaisen.gif',
   char:'SATORU GOJO',series:'JUJUTSU KAISEN',badge:'SPEC. GRADE',
   theme:'theme-gojo',color:'#ce93d8',bc:'#ce93d8',
   quote:'Throughout Heaven and Earth, I alone am the honored one.',
   useAvatar:true,avatarEmoji:'♾️',avatarBg:'linear-gradient(135deg,#06030a,#1a0d3d)',
   exercises:[
     ex('Blindfolded Balance','1min/leg','3min/leg','5min/leg'),
     ex('Plyo Push-ups','3x8','5x12','6x20'),
     ex('Sprint + Cut Drill','4x30m','8x50m','12x80m'),
     ex('Handstand Push-ups','2x5','3x10','5x18'),
     ex('Core Vacuums','3x20s','4x30s','6x45s'),
     ex('Weighted Squats','3x10','4x15','6x25'),
   ]},
  {id:'endeavor',tier:'advanced',gif:'https://media.tenor.com/iJBJIlE6oAMAAAAC/endeavor-mha.gif',
   char:'ENDEAVOR',series:'MY HERO ACADEMIA',badge:'FLAME HERO',
   theme:'theme-endeavor',color:'#ff7043',bc:'#ff7043',
   quote:'There is no shortcut to the top. Only the burning path forward.',
   useAvatar:true,avatarEmoji:'🔥',avatarBg:'linear-gradient(135deg,#200a03,#3d1808)',
   exercises:[
     ex('Heavy Compound Lifts','3x5','4x5','5x5 max'),
     ex('HIIT Cardio','10 min','20 min','35 min'),
     ex('Overhead Press','3x6','5x8','6x12'),
     ex('Loaded Carries','2x20m','4x30m','6x50m'),
     ex('Tire Flips','3x5','4x8','6x12'),
     ex('Cold Exposure','2 min','5 min','10 min'),
   ]},
  {id:'allmight',tier:'monarch',gif:'https://media.tenor.com/9G6heVFBarwAAAAC/all-might-my-hero-academia.gif',
   char:'ALL MIGHT',series:'MY HERO ACADEMIA',badge:'NO.1 HERO',
   theme:'theme-allmight',color:'#fdd835',bc:'#fdd835',
   quote:'It is fine now. Why? Because I AM HERE!',
   useAvatar:true,avatarEmoji:'💪',avatarBg:'linear-gradient(135deg,#090800,#1a1500)',
   exercises:[
     ex('Max Rep Push-ups','3 sets fail','5 sets fail','8 sets fail'),
     ex('100m Sprints','5 rounds','10 rounds','20 rounds'),
     ex('Weighted Pull-ups','3x8','5x10','7x15'),
     ex('Bear Crawl','2x15m','4x20m','6x40m'),
     ex('Jump Squats','3x10','5x15','7x25'),
     ex('Plank Hold','1 min','2 min','Max time'),
   ]},
];
// ====== STATE ======
const SK='arise_v3', WK='arise_wk_v3';
const DS=['SUN','MON','TUE','WED','THU','FRI','SAT'];
const XPL = l => Math.floor(100 * Math.pow(1.3, l - 1));
const RANKS = [
  {min:0,r:'E',c:'rE'},{min:5,r:'D',c:'rD'},{min:15,r:'C',c:'rC'},
  {min:30,r:'B',c:'rB'},{min:50,r:'A',c:'rA'},{min:80,r:'S',c:'rS'}
];
const RC = {'E':'#555','D':'#69f0ae','C':'#4fc3f7','B':'#b388ff','A':'#ffd54f','S':'#ff6b6b'};

let S = {habits:[],totalXP:0,level:1,currentXP:0,log:[],lastDate:null};
let W = {activePlanId:null,exDone:{}};
let selC = '#4fc3f7', curPg = 'dash';

// ====== STORAGE ======
const save = () => localStorage.setItem(SK, JSON.stringify(S));
const saveW = () => localStorage.setItem(WK, JSON.stringify(W));

function load() {
  try { const r = localStorage.getItem(SK); if(r) S = JSON.parse(r); } catch(e){}
  try { const r = localStorage.getItem(WK); if(r) W = JSON.parse(r); } catch(e){}
  chkDay();
}

const toDay = () => new Date().toISOString().split('T')[0];

function chkDay() {
  const t = toDay();
  if (S.lastDate && S.lastDate !== t) {
    S.habits.forEach(h => {
      if (!h.history) h.history = {};
      h.history[S.lastDate] = h.completedToday;
      if (!h.completedToday) h.streak = 0;
      h.completedToday = false;
    });
    W.exDone = {};
    S.lastDate = t; save(); saveW();
  } else if (!S.lastDate) { S.lastDate = t; save(); }
}

const l7 = () => Array.from({length:7}, (_,i) => {
  const d = new Date(); d.setDate(d.getDate()-(6-i));
  return d.toISOString().split('T')[0];
});

// ====== THEME ======
function applyTheme(plan) {
  const themes = ['theme-jinwoo','theme-levi','theme-mikasa','theme-maki',
                  'theme-gojo','theme-allmight','theme-itachi','theme-endeavor'];
  document.body.classList.remove(...themes);
  if (plan) {
    document.body.classList.add(plan.theme);
    document.getElementById('themeColor').content = plan.color;
    // Animate char art
    const art = document.getElementById('charArt');
    art.classList.remove('visible');
    art.style.background = plan.avatarBg || 'none';
    setTimeout(() => art.classList.add('visible'), 100);
  }
  updateDashBanner(plan || null);
  updateTopbar();
}

function updateDashBanner(plan) {
  const banner = document.getElementById('dcb');
  if (!banner) return;
  if (!plan) { banner.classList.remove('vis'); return; }
  banner.classList.add('vis');
  const gifEl = document.getElementById('dcbGif');
  const emoji = document.getElementById('dcbEmoji');
  const gw    = document.getElementById('dcbGw');
  gw.style.background = plan.avatarBg || 'var(--sf2)';
  if (plan.gif) {
    gifEl.style.opacity = '0';
    gifEl.src = plan.gif;
    gifEl.style.display = 'block';
    emoji.style.display = 'none';
    gifEl.onload = () => { gifEl.style.opacity = '1'; };
    gifEl.onerror = () => {
      gifEl.style.display = 'none';
      emoji.textContent = plan.avatarEmoji || '';
      emoji.style.cssText = 'display:flex;align-items:center;justify-content:center;width:100%;height:100%;position:absolute;font-size:48px';
    };
  } else {
    gifEl.style.display = 'none';
    emoji.textContent = plan.avatarEmoji || '';
    emoji.style.cssText = 'display:flex;align-items:center;justify-content:center;width:100%;height:100%;position:absolute;font-size:48px';
  }
  document.getElementById('dcbName').textContent = plan.char;
  const se = document.getElementById('dcbSeries');
  se.textContent = plan.series; se.style.color = plan.color;
  document.getElementById('dcbQuote').textContent = '\u201c' + plan.quote + '\u201d';
  const te = document.getElementById('dcbTier');
  const tc = {beginner:'var(--grn)',intermediate:'var(--p1)',advanced:'var(--acc)',monarch:'#ff6b6b'}[plan.tier] || 'var(--p1)';
  const ri2 = rankInfo();
  te.textContent = plan.tier.toUpperCase() + ' · ' + ri2.label;
  te.style.color = ri2.c; te.style.borderColor = ri2.c;
}

// ====== PAGES ======
function goPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.ntab').forEach(n => n.classList.remove('act'));
  document.getElementById('pg-'+id).classList.add('active');
  document.getElementById('nt-'+id).classList.add('act');
  curPg = id;
  document.getElementById('fab').classList.toggle('hid', id !== 'quests' && id !== 'dash');
  renderPg(id);
}

const renderPg = id => {
  if (id==='dash') renderDash();
  else if (id==='quests') renderH('questList');
  else if (id==='workout') renderWO();
  else if (id==='log') renderLog();
};

// ====== HELPERS ======
const getRk = () => RANKS.filter(r => S.level >= r.min).pop();
const maxStr = () => S.habits.reduce((m,h) => Math.max(m, h.streak||0), 0);
const esc = s => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
const visH = () => {
  const d = new Date().getDay();
  return S.habits.filter(h => {
    if (h.freq==='weekdays') return d>=1&&d<=5;
    if (h.freq==='weekends') return d===0||d===6;
    return true;
  });
};

// ====== TOPBAR ======
function updateTopbar() {
  const rd = getRk();
  document.getElementById('tlv').textContent = 'LV.' + S.level;
  const re = document.getElementById('trk');
  re.textContent = rd.r; re.style.color = RC[rd.r]; re.style.borderColor = RC[rd.r];
}

// ====== DASHBOARD ======
function renderDash() {
  const lv = S.level, need = XPL(lv), pct = Math.min(100,(S.currentXP/need)*100);
  const rd = getRk(), vis = visH(), done = vis.filter(h=>h.completedToday).length;
  document.getElementById('dLv').textContent = lv;
  document.getElementById('dXP').textContent = S.totalXP;
  document.getElementById('dStr').textContent = maxStr();
  document.getElementById('dDn').textContent = done+'/'+vis.length;
  document.getElementById('xplbl').textContent = 'LV '+lv+' to LV '+(lv+1);
  document.getElementById('xpnum').textContent = S.currentXP+'/'+need+' XP';
  document.getElementById('xpbar').style.width = pct+'%';
  document.getElementById('dqc').textContent = done+'/'+vis.length+' done';
  document.querySelectorAll('.rp').forEach((el,i) => el.classList.toggle('ac', RANKS[i].r===rd.r));
  updateTopbar();
  updateDashBanner(W.activePlanId ? PLANS.find(p => p.id === W.activePlanId) : null);
  renderH('dashList', true);
}

// ====== HABITS ======
function renderH(cid, preview=false) {
  const c = document.getElementById(cid); if(!c) return;
  const t = toDay(), days = l7();
  let habits = visH();
  if (preview) habits = habits.slice(0,4);
  if (!S.habits.length) {
    c.innerHTML = '<div class="empty"><div class="emico">◈</div><div class="emtxt">NO QUESTS YET<br>TAP + TO BEGIN</div></div>';
    return;
  }
  c.innerHTML = habits.map(h => {
    const i = S.habits.indexOf(h), hist = h.history||{};
    const dots = days.map(d => {
      const iT=d===t, dn=iT?h.completedToday:(hist[d]||false);
      return `<div class="dc"><div class="d ${dn?'on':''} ${iT?'td':''}"></div><div class="dl">${DS[new Date(d+'T12:00:00').getDay()]}</div></div>`;
    }).join('');
    const dl = h.xp>=200?'A':h.xp>=100?'B':h.xp>=50?'C':h.xp>=25?'D':'E';
    const dc = h.xp>=200?'var(--acc)':h.xp>=100?'#b388ff':h.xp>=50?'var(--p1)':h.xp>=25?'var(--grn)':'var(--txd)';
    return `<div class="hcard ${h.completedToday?'dn':''}">
      <div class="hacc" style="background:${h.color}"></div>
      <div class="hmain">
        <div class="hchk" onclick="togH(${i})">${h.completedToday?'✓':''}</div>
        <div class="hinfo">
          <div class="hname">${esc(h.name)}</div>
          <div class="htags">
            <span class="htag htS">🔥${h.streak||0}</span>
            <span class="htag htX">+${h.xp}XP</span>
            <span class="htag" style="color:${dc};border-color:${dc}40">${dl}-RANK</span>
          </div>
        </div>
        <button class="dbtn" onclick="delH(${i})">✕</button>
      </div>
      <div class="hdots">${dots}</div>
    </div>`;
  }).join('');
}

// ====== WORKOUT ======
function renderWO() {
  renderAW();
  const c = document.getElementById('plist');
  const tierOrder = ['beginner','intermediate','advanced','monarch'];
  let html = '';
  tierOrder.forEach(tier => {
    const plans = PLANS.filter(p => p.tier === tier);
    if (!plans.length) return;
    const td = TIERS[tier];
    html += `<div class="tier-header" style="border-left-color:${td.color};background:linear-gradient(90deg,${td.color}15,transparent)">
      <div class="tier-title" style="color:${td.color}">${td.label}</div>
      <div class="tier-sub">${td.sub}</div>
    </div>`;
    plans.forEach(p => {
      const isSel = W.activePlanId === p.id;
      const lc = p.tier==='monarch'?'#ff6b6b':p.tier==='advanced'?'var(--acc)':p.tier==='intermediate'?'var(--p1)':'var(--grn)';
      const avatar = p.useAvatar
        ? `<div class="plart" style="background:${p.avatarBg};display:flex;align-items:center;justify-content:center;font-size:42px">${p.avatarEmoji}<div class="plart-overlay"></div></div>`
        : `<div class="plart"><img class="plart-img" src="${p.img}" alt="${p.char}" loading="lazy" onerror="this.parentNode.style.display='none'"><div class="plart-overlay"></div></div>`;

      html += `<div class="plcard ${isSel?'selp':''}" onclick="selPlan('${p.id}')">
        <div class="pltop" style="background:${p.color}"></div>
        <div class="plinner">
          ${avatar}
          <div class="plinfo">
            <div class="plr1">
              <div>
                <div class="plchar">${esc(p.char)}</div>
                <div class="plseries">${esc(p.series)}</div>
              </div>
              <div class="plbadge" style="color:${p.bc};border-color:${p.bc}50">${p.badge}</div>
            </div>
            <div class="plquote">"${esc(p.quote)}"</div>
            <div class="rank-badge" style="color:${rankInfo().c};border-color:${rankInfo().c}40;background:${rankInfo().c}12"><div class="rank-badge-dot" style="background:${rankInfo().c}"></div>RANK ${getRk().r} · ${rankInfo().label}</div>
            <div class="exlist">${scaledEx(p).map(e=>`<div class="exrow"><span class="exnm">${esc(e.n)}</span><span class="exst" style="color:${p.color}">${esc(e.s)}</span></div>`).join('')}</div>
            <div class="plfoot">
              <span class="pfm">TIER: <span style="color:${lc}">${tier.toUpperCase()}</span></span>
              <button class="btn bsm" style="color:${p.color};border-color:${p.color}" onclick="event.stopPropagation();selPlan('${p.id}')">${isSel?'✓ ACTIVE':'SELECT'}</button>
            </div>
          </div>
        </div>
      </div>`;
    });
  });
  c.innerHTML = html;
}

function renderAW() {
  const panel = document.getElementById('awp');
  if (!W.activePlanId) { panel.innerHTML = ''; return; }
  const plan = PLANS.find(p => p.id === W.activePlanId);
  if (!plan) { panel.innerHTML = ''; return; }

  const t = toDay(), done = W.exDone[t]||{};
  const sx = scaledEx(plan);
  const dc = Object.values(done).filter(Boolean).length;
  const pct = Math.round((dc/sx.length)*100);
  const ri = rankInfo();
  const tierLabel = plan.tier.toUpperCase();
  const tierColor = plan.tier==='monarch'?'#ff6b6b':plan.tier==='advanced'?'var(--acc)':plan.tier==='intermediate'?'var(--p1)':'var(--grn)';

  const avatarBanner = `<div class="aw-banner-img" style="background:${plan.avatarBg};display:flex;align-items:center;justify-content:center;font-size:80px">${plan.avatarEmoji}</div>`;

  panel.innerHTML = `<div class="awpanel">
    <div class="aw-char-banner">
      ${avatarBanner}
      <div class="aw-banner-overlay"></div>
      <div class="aw-banner-content">
        <div class="awlbl">● ACTIVE PLAN · ${tierLabel}</div>
        <div class="awchar" style="color:${plan.color}">${esc(plan.char)}</div>
        <div class="aw-series" style="color:${plan.color}80">${esc(plan.series)}</div>
        <div class="rank-badge" style="color:${ri.c};border-color:${ri.c}40;background:${ri.c}12;margin-top:6px"><div class="rank-badge-dot" style="background:${ri.c}"></div>RANK ${getRk().r} · ${ri.label}</div>
      </div>
    </div>
    <div class="awbody">
      <div style="font-size:11px;color:var(--txm);font-style:italic;margin-bottom:12px;padding:8px 10px;border-left:2px solid ${plan.color}50">"${esc(plan.quote)}"</div>
      ${sx.map((e,i)=>`<div class="wexrow ${done[i]?'wdn':''}">
        <div class="wchk" onclick="togEx(${i})">${done[i]?'✓':''}</div>
        <span class="exnm" style="flex:1">${esc(e.n)}</span>
        <span class="exst" style="color:${plan.color}">${esc(e.s)}</span>
      </div>`).join('')}
      <div class="pbwrap">
        <div class="pblbls"><span>PROGRESS</span><span>${dc}/${sx.length} · ${pct}%</span></div>
        <div class="pbo"><div class="pbi" style="width:${pct}%;background:${plan.color}"></div></div>
      </div>
      ${dc===sx.length?`<div class="aw-done-msg"><div class="aw-done-msg-txt">✓ SESSION COMPLETE — WELL DONE, HUNTER</div><div style="font-family:'Share Tech Mono',monospace;font-size:8px;color:var(--txd);margin-top:4px;letter-spacing:1px">Earn XP by completing your Daily Quests</div></div>`:''}
      <div style="margin-top:12px;display:flex;gap:8px">
        <button class="btn bre bsm" onclick="clrPlan()" style="flex:1">CHANGE PLAN</button>
        <button class="btn bsm" style="color:${plan.color};border-color:${plan.color};flex:1" onclick="resetWorkout()">↺ RESET</button>
      </div>
    </div>
  </div>`;
}

function selPlan(id) {
  W.activePlanId = id; W.exDone = {};
  const plan = PLANS.find(p => p.id === id);
  saveW(); applyTheme(plan); renderWO();
  showT('PLAN: ' + plan.char);
}

function clrPlan() { W.activePlanId = null; W.exDone = {}; saveW(); updateDashBanner(null); renderWO(); }
function resetWorkout() { W.exDone = {}; saveW(); renderAW(); }

function togEx(i) {
  const t = toDay();
  if (!W.exDone[t]) W.exDone[t] = {};
  W.exDone[t][i] = !W.exDone[t][i];
  saveW(); renderAW();
}

// ====== HABITS ACTIONS ======
function togH(i) {
  const h = S.habits[i];
  if (h.completedToday) {
    h.completedToday = false; h.streak = Math.max(0,(h.streak||1)-1);
    S.currentXP = Math.max(0,S.currentXP-h.xp); S.totalXP = Math.max(0,S.totalXP-h.xp);
    chkLvDn(); addLog('Removed: '+h.name, -h.xp);
  } else {
    h.completedToday = true; h.streak = (h.streak||0)+1;
    const ol = S.level; addXP(h.xp); addLog('Quest: '+h.name, h.xp);
    showT('QUEST DONE +'+h.xp+' XP');
    if (S.level > ol) lvup();
  }
  save(); renderPg(curPg); updateTopbar();
}

function delH(i) {
  if (!confirm('Remove: '+S.habits[i].name+'?')) return;
  S.habits.splice(i,1); save(); renderPg(curPg);
}

function resetDay() {
  if (!confirm('Reset all completions?')) return;
  S.habits.forEach(h => {
    if (h.completedToday) {
      h.completedToday=false; h.streak=Math.max(0,(h.streak||1)-1);
      S.currentXP=Math.max(0,S.currentXP-h.xp); S.totalXP=Math.max(0,S.totalXP-h.xp);
    }
  });
  W.exDone = {}; chkLvDn(); save(); saveW(); renderPg(curPg); updateTopbar();
  showT('DAY RESET');
}

function addXP(a) {
  S.totalXP += a; S.currentXP += a;
  let n = XPL(S.level);
  while (S.currentXP >= n) { S.currentXP -= n; S.level++; n = XPL(S.level); }
}

function chkLvDn() {
  let xp = S.totalXP, lv = 1;
  while(true) { const n=XPL(lv); if(xp>=n){xp-=n;lv++;}else break; }
  S.level = lv; S.currentXP = xp;
}

function addLog(txt, xp) {
  const now = new Date();
  S.log.push({txt, xp:Math.abs(xp), t:now.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'}), d:toDay(), pos:xp>0});
  if (S.log.length > 300) S.log.shift();
}

// ====== LOG ======
function renderLog() {
  const c = document.getElementById('logList');
  if (!S.log.length) {
    c.innerHTML = '<div class="empty"><div class="emico">▣</div><div class="emtxt">NO ACTIVITY YET</div></div>';
    return;
  }
  c.innerHTML = [...S.log].reverse().map(e => `
    <div class="lentry">
      <div class="lel"><div class="ledot" style="background:${e.pos?'var(--grn)':'var(--red)'}"></div><div class="letxt">${esc(e.txt)}</div></div>
      <div class="ler"><div class="lexp">${e.pos?'+':''}${e.xp}XP</div><div class="letm">${e.t} · ${e.d}</div></div>
    </div>`).join('');
}

function clearLog() {
  if (!confirm('Clear all log?')) return;
  S.log = []; save(); renderLog();
}

// ====== MODAL ======
const openMod = () => { document.getElementById('mobg').classList.add('op'); document.getElementById('hName').focus(); };
const closeMod = () => { document.getElementById('mobg').classList.remove('op'); document.getElementById('hName').value = ''; };

function addHabit() {
  const n = document.getElementById('hName').value.trim();
  if (!n) return;
  S.habits.push({
    name:n, xp:parseInt(document.getElementById('hXP').value),
    freq:document.getElementById('hFreq').value, color:selC,
    completedToday:false, streak:0, history:{}
  });
  save(); renderPg(curPg); closeMod(); showT('QUEST ADDED');
}

document.getElementById('cgrid').addEventListener('click', e => {
  const o = e.target.closest('.copt'); if(!o) return;
  document.querySelectorAll('.copt').forEach(el => el.classList.remove('sel'));
  o.classList.add('sel'); selC = o.dataset.c;
});

document.getElementById('mobg').addEventListener('click', e => {
  if (e.target === document.getElementById('mobg')) closeMod();
});

// ====== EFFECTS ======
function showT(msg, type='') {
  const el = document.getElementById('toast');
  el.textContent = msg; el.className = 'toast '+(type==='gld'?'gld':'');
  el.classList.add('show'); setTimeout(() => el.classList.remove('show'), 2600);
}

function lvup() {
  const el = document.getElementById('lvfl');
  el.classList.remove('pop'); void el.offsetWidth; el.classList.add('pop');
  showT('LEVEL UP! LV.'+S.level, 'gld');
}

// ====== PWA INSTALL ======
let dp = null;
window.addEventListener('beforeinstallprompt', e => {
  e.preventDefault(); dp = e;
  document.getElementById('ibtn').classList.add('vis');
});

function installPWA() {
  if (!dp) return;
  dp.prompt();
  dp.userChoice.then(() => { dp=null; document.getElementById('ibtn').classList.remove('vis'); });
}

window.addEventListener('appinstalled', () => {
  document.getElementById('ibtn').classList.remove('vis');
  showT('APP INSTALLED', 'gld');
});

// ====== SERVICE WORKER ======
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then(() => console.log('[ARISE] SW registered'))
      .catch(e => console.warn('[ARISE] SW failed', e));
  });
}

// ====== KEYBOARD ======
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeMod();
  if (e.key === 'Enter' && document.getElementById('mobg').classList.contains('op')) addHabit();
});

// ====== INIT ======
load();
// Apply active plan theme on load
if (W.activePlanId) {
  const plan = PLANS.find(p => p.id === W.activePlanId);
  if (plan) applyTheme(plan);
}
renderDash();
