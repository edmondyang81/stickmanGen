/* StickMan Gen — engine, renderer, synthesized audio and editor UI */
(()=>{
/* ================= SKELETON ================= */
const L={torso:34,neck:6,head:9,ua:20,fa:20,th:24,sh:24}, GAP=70;
const P={
  stand:   {ln:2, ua1:12,fa1:10, ua2:-12,fa2:10, th1:6,sh1:-4, th2:-6,sh2:-4, dy:0},
  guard:   {ln:8, ua1:35,fa1:85, ua2:15,fa2:100, th1:30,sh1:-30, th2:-28,sh2:-10, dy:6},
  run:     {ln:22,ua1:-40,fa1:90, ua2:55,fa2:80, th1:70,sh1:-80, th2:-40,sh2:-45, dy:6},
  punch:   {ln:18,ua1:88,fa1:0, ua2:5,fa2:110, th1:40,sh1:-35, th2:-35,sh2:-5, dy:8},
  punch2:  {ln:22,ua1:20,fa1:100, ua2:88,fa2:0, th1:40,sh1:-35, th2:-35,sh2:-5, dy:8},
  highkick:{ln:-30,ua1:50,fa1:70, ua2:-50,fa2:40, th1:115,sh1:-5, th2:-8,sh2:0, dy:2},
  crouch:  {ln:35,ua1:40,fa1:80, ua2:10,fa2:100, th1:80,sh1:-130, th2:20,sh2:-120, dy:26},
  tuck:    {ln:30,ua1:60,fa1:60, ua2:40,fa2:70, th1:100,sh1:-150, th2:80,sh2:-140, dy:-40},
  sweep:   {ln:40,ua1:60,fa1:40, ua2:-30,fa2:40, th1:88,sh1:0, th2:60,sh2:-150, dy:36},
  flyingkick:{ln:-25,ua1:40,fa1:60, ua2:-40,fa2:50, th1:95,sh1:0, th2:-20,sh2:-90, dy:-40},
  block:   {ln:-8,ua1:60,fa1:100, ua2:50,fa2:110, th1:30,sh1:-30, th2:-40,sh2:-5, dy:8},
  hit:     {ln:-35,ua1:-30,fa1:60, ua2:-60,fa2:30, th1:30,sh1:-20, th2:-20,sh2:-30, dy:6},
  hitAir:  {ln:-40,ua1:-120,fa1:30, ua2:-90,fa2:40, th1:50,sh1:-40, th2:20,sh2:-60, dy:-60},
  uppercut:{ln:25,ua1:140,fa1:0, ua2:0,fa2:110, th1:30,sh1:-10, th2:-40,sh2:0, dy:0},
  lying:   {ln:0,ua1:5,fa1:5, ua2:-5,fa2:10, th1:5,sh1:0, th2:-5,sh2:-10, dy:44, rot:-90},
  facedown:{ln:0,ua1:5,fa1:0, ua2:-5,fa2:10, th1:-5,sh1:0, th2:5,sh2:-15, dy:44, rot:90},
  kneel:   {ln:20,ua1:10,fa1:20, ua2:-5,fa2:20, th1:85,sh1:-85, th2:0,sh2:-90, dy:24},
  elbow:   {ln:25,ua1:100,fa1:-165, ua2:-20,fa2:100, th1:40,sh1:-35, th2:-35,sh2:-5, dy:8},
  grab:    {ln:15,ua1:80,fa1:30, ua2:70,fa2:40, th1:30,sh1:-30, th2:-28,sh2:-10, dy:8},
  knee:    {ln:20,ua1:70,fa1:60, ua2:60,fa2:70, th1:110,sh1:-150, th2:-10,sh2:0, dy:0},
  doubled: {ln:60,ua1:60,fa1:40, ua2:40,fa2:50, th1:15,sh1:-30, th2:-20,sh2:-20, dy:10},
  axeUp:   {ln:-20,ua1:40,fa1:60, ua2:-40,fa2:40, th1:170,sh1:0, th2:-5,sh2:0, dy:0},
  axeDown: {ln:20,ua1:20,fa1:70, ua2:-30,fa2:50, th1:40,sh1:0, th2:-20,sh2:-10, dy:6},
  palm:    {ln:30,ua1:85,fa1:-10, ua2:-30,fa2:90, th1:50,sh1:-45, th2:-40,sh2:0, dy:12},
  lowkick: {ln:-10,ua1:40,fa1:80, ua2:-20,fa2:90, th1:50,sh1:0, th2:-15,sh2:0, dy:4},
  dodgeBack:{ln:-65,ua1:-30,fa1:40, ua2:-60,fa2:30, th1:40,sh1:-70, th2:-10,sh2:-40, dy:18},
  throwPose:{ln:40,ua1:150,fa1:20, ua2:140,fa2:30, th1:30,sh1:-40, th2:-30,sh2:-10, dy:16},
  shoulder:{ln:40,ua1:30,fa1:90, ua2:-30,fa2:60, th1:70,sh1:-60, th2:-40,sh2:-30, dy:10},
  bike1:   {ln:-20,ua1:40,fa1:60, ua2:-40,fa2:50, th1:100,sh1:0, th2:20,sh2:-110, dy:-40},
  bike2:   {ln:-20,ua1:-30,fa1:60, ua2:40,fa2:50, th1:20,sh1:-110, th2:100,sh2:0, dy:-40},
  charge:  {ln:5,ua1:-60,fa1:90, ua2:-70,fa2:100, th1:45,sh1:-60, th2:-35,sh2:-20, dy:14},
  thrust:  {ln:15,ua1:90,fa1:0, ua2:85,fa2:5, th1:45,sh1:-40, th2:-40,sh2:0, dy:10},
  slam:    {ln:70,ua1:60,fa1:-20, ua2:-40,fa2:60, th1:80,sh1:-120, th2:-20,sh2:-100, dy:26},
  dragon:  {ln:5,ua1:175,fa1:0, ua2:30,fa2:90, th1:85,sh1:-100, th2:-10,sh2:0, dy:-40},
  slashLow:{ln:25,ua1:-20,fa1:-30, ua2:20,fa2:90, th1:45,sh1:-50, th2:-35,sh2:-10, dy:12},
  slashHigh:{ln:-10,ua1:160,fa1:10, ua2:-30,fa2:60, th1:40,sh1:-35, th2:-35,sh2:-5, dy:6},
  chopUp:  {ln:-15,ua1:170,fa1:50, ua2:60,fa2:60, th1:30,sh1:-30, th2:-30,sh2:-10, dy:4},
  chopDown:{ln:35,ua1:80,fa1:-20, ua2:20,fa2:60, th1:50,sh1:-50, th2:-40,sh2:0, dy:14},
  lunge:   {ln:25,ua1:90,fa1:0, ua2:-60,fa2:30, th1:70,sh1:-70, th2:-60,sh2:0, dy:20},
  spinCut: {ln:0,ua1:90,fa1:0, ua2:-80,fa2:20, th1:25,sh1:-20, th2:-25,sh2:-5, dy:6},
  sheathe: {ln:20,ua1:-10,fa1:100, ua2:20,fa2:100, th1:45,sh1:-55, th2:-40,sh2:-10, dy:16},
  drawCut: {ln:30,ua1:100,fa1:-5, ua2:-40,fa2:40, th1:70,sh1:-70, th2:-60,sh2:0, dy:22},
  cleaveUp:{ln:-20,ua1:175,fa1:40, ua2:150,fa2:40, th1:40,sh1:-35, th2:-35,sh2:-5, dy:4},
  cleaveDown:{ln:45,ua1:90,fa1:-40, ua2:70,fa2:-20, th1:55,sh1:-60, th2:-45,sh2:0, dy:18},
  sweepBack:{ln:-5,ua1:-60,fa1:-20, ua2:-40,fa2:-10, th1:35,sh1:-30, th2:-30,sh2:-5, dy:10},
  sweepFwd:{ln:20,ua1:95,fa1:5, ua2:80,fa2:10, th1:45,sh1:-40, th2:-40,sh2:0, dy:12},
  leapChop:{ln:-25,ua1:185,fa1:40, ua2:160,fa2:40, th1:60,sh1:-90, th2:-10,sh2:-60, dy:-60},
  bind:    {ln:20,ua1:70,fa1:60, ua2:60,fa2:70, th1:50,sh1:-50, th2:-45,sh2:0, dy:14},
  matrix:  {ln:-64,ua1:-120,fa1:25, ua2:-95,fa2:40, th1:45,sh1:-95, th2:25,sh2:-85, dy:15},
  backfist:{ln:-5,ua1:95,fa1:5, ua2:-40,fa2:60, th1:35,sh1:-30, th2:-35,sh2:-5, dy:6},
};
const FIELDS=['ln','ua1','fa1','ua2','fa2','th1','sh1','th2','sh2','dy'];

/* ================= MOVE LIBRARY =================
   Local frame: X (attacker) starts at 0 facing right, Y (defender) at 70 facing left, both in guard.
   Every move ends with both in guard 70 apart (or a KO). Keys: [time, pose, x, overrides]. */
const MOVES={
 jab:{name:'Jab–Cross',dur:.9,
  X:[[.12,'punch',16,{e:'out'}],[.26,'guard',12],[.4,'punch2',24,{e:'out'}],[.62,'guard',22],[.9,'guard',30]],
  Y:[[.14,'hit',78,{e:'out'}],[.3,'guard',80],[.42,'hit',92,{e:'out'}],[.64,'guard',96],[.9,'guard',100]],
  fx:[['whoosh',.05],['hit',.12,{j:'X.h1',s:.6,slow:[.05,.1]}],['whoosh',.33],['hit',.4,{j:'X.h2',s:.7,slow:[.05,.1]}]]},
 rush:{name:'Rush Combo',dur:1.5,
  X:[[.1,'punch',18,{e:'out'}],[.22,'guard',16],[.32,'punch2',28,{e:'out'}],[.44,'guard',26],[.54,'punch',40,{e:'out'}],[.68,'guard',38],[.9,'highkick',52,{e:'out'}],[1.15,'guard',50],[1.5,'guard',60]],
  Y:[[.12,'hit',80,{e:'out'}],[.24,'guard',80],[.34,'hit',92,{e:'out'}],[.46,'guard',92],[.56,'hit',104,{e:'out'}],[.7,'guard',104],[.92,'hit',108,{e:'out',ln:-50}],[1.15,'hit',132],[1.5,'guard',130]],
  fx:[['whoosh',.04],['hit',.1,{j:'X.h1',s:.5}],['hit',.32,{j:'X.h2',s:.55}],['hit',.54,{j:'X.h1',s:.6}],['whoosh',.8],['heavy',.9,{j:'X.f1',s:1.1,slow:[.1,.12]}]]},
 kick:{name:'Head Kick',dur:1.0,
  X:[[.15,'guard',14],[.35,'highkick',26,{e:'out'}],[.6,'guard',24],[1,'guard',40]],
  Y:[[.2,'guard',72],[.37,'hit',78,{e:'out',ln:-50}],[.6,'hit',100],[1,'guard',110]],
  fx:[['whoosh',.25],['heavy',.35,{j:'X.f1',s:1.1,slow:[.08,.1]}]]},
 sweep:{name:'Sweep & Hop',dur:1.1,
  X:[[.15,'crouch',10],[.35,'sweep',18,{e:'out'}],[.6,'sweep',18],[.8,'crouch',14],[1.1,'guard',10]],
  Y:[[.2,'crouch',72],[.4,'tuck',70,{dy:-55,e:'out'}],[.62,'crouch',74,{e:'in'}],[1.1,'guard',80]],
  fx:[['whoosh',.28,{low:1}],['whoosh',.36],['land',.62,{who:'Y'}]]},
 fly:{name:'Flying Kick',dur:1.2,
  X:[[.15,'crouch',-10],[.32,'flyingkick',0,{dy:-40,e:'out'}],[.45,'flyingkick',20,{dy:-30}],[.7,'crouch',30,{e:'in'}],[1.2,'guard',40]],
  Y:[[.3,'guard',80],[.45,'block',92],[.7,'block',112,{e:'out'}],[1.2,'guard',110]],
  fx:[['whoosh',.3],['block',.45,{j:'X.f1',s:.9,slow:[.08,.15]}],['land',.7,{who:'Y',slide:1}],['land',.7,{who:'X'}]]},
 flip:{name:'Front Flip',dur:1.2,swap:1,
  X:[[.15,'crouch',0],[.35,'tuck',25,{dy:-80,spin:120,e:'out'}],[.55,'tuck',70,{dy:-125,spin:120,e:'lin'}],[.75,'tuck',115,{dy:-70,spin:120,e:'lin'}],[.9,'crouch',140,{f:-1,e:'in'}],[1.2,'guard',140]],
  Y:[[.3,'guard',70,{ln:-18}],[.6,'guard',70,{ln:-10}],[.85,'guard',70,{f:1}],[1.2,'guard',70]],
  fx:[['whoosh',.32],['whoosh',.56],['land',.9,{who:'X'}]]},
 upper:{name:'Duck & Uppercut',dur:1.7,
  X:[[.2,'crouch',6,{dy:32,ln:45}],[.5,'crouch',10,{dy:32,ln:45}],[.6,'uppercut',30,{e:'out'}],[.95,'uppercut',34],[1.3,'guard',70],[1.7,'guard',100]],
  Y:[[.15,'guard',64],[.32,'highkick',60,{e:'out'}],[.5,'guard',62],[.6,'hit',66,{e:'out'}],[.85,'hitAir',110,{dy:-90,spin:-150,e:'out'}],[1.15,'tuck',160,{dy:-50,spin:-150,e:'lin'}],[1.35,'crouch',175,{e:'in'}],[1.7,'guard',170]],
  fx:[['whoosh',.24],['heavy',.6,{j:'X.h1',s:1.5,inv:.05,slow:[.45,.22]}],['whoosh',.95],['land',1.35,{who:'Y'}]]},
 tornado:{name:'Flip Kick',dur:1.3,
  X:[[.15,'crouch',6],[.35,'tuck',16,{dy:-70,spin:-180,e:'out'}],[.5,'flyingkick',28,{dy:-60,spin:-180,e:'lin'}],[.8,'crouch',36,{e:'in'}],[1.3,'guard',36]],
  Y:[[.3,'guard',72],[.52,'hit',80,{e:'out',ln:-55}],[.8,'hit',104],[1.3,'guard',106]],
  fx:[['whoosh',.33],['whoosh',.45],['heavy',.5,{j:'X.f1',s:1.2,slow:[.1,.1]}],['land',.8,{who:'X'}]]},
 counter:{name:'Block & Counter',dur:1.2,
  X:[[.15,'block',-4],[.35,'guard',0],[.55,'punch',22,{e:'out'}],[.75,'highkick',34,{e:'out'}],[1,'guard',30],[1.2,'guard',30]],
  Y:[[.15,'punch',60,{e:'out'}],[.35,'guard',62],[.55,'hit',74,{e:'out'}],[.77,'hit',80,{e:'out',ln:-50}],[1,'hit',98],[1.2,'guard',100]],
  fx:[['whoosh',.08],['block',.15,{j:'Y.h1',s:.6}],['hit',.55,{j:'X.h1',s:.6}],['heavy',.75,{j:'X.f1',s:1,slow:[.08,.12]}]]},
 clash:{name:'Aerial Clash',dur:1.6,swap:1,
  X:[[.15,'crouch',-6],[.4,'flyingkick',20,{dy:-50,e:'out'}],[.55,'flyingkick',35,{dy:-62,e:'lin'}],[.8,'flyingkick',75,{dy:-35,e:'lin'}],[.98,'crouch',105,{e:'in'}],[1.2,'guard',105,{f:-1}],[1.6,'guard',90]],
  Y:[[.15,'crouch',76],[.4,'flyingkick',50,{dy:-50,e:'out'}],[.55,'flyingkick',35,{dy:-58,e:'lin'}],[.8,'flyingkick',-5,{dy:-35,e:'lin'}],[.98,'crouch',-35,{e:'in'}],[1.2,'guard',-35,{f:1}],[1.6,'guard',20]],
  fx:[['whoosh',.3],['clash',.55,{mid:1,s:2,inv:.07,slow:[.35,.18]}],['land',.98,{who:'X'}],['land',.98,{who:'Y'}]]},
 ko1:{name:'Launcher',dur:1.7,ko:1,
  X:[[.12,'crouch',14,{dy:30,ln:40}],[.3,'uppercut',30,{e:'out'}],[.7,'uppercut',32],[1.1,'guard',50],[1.7,'guard',60]],
  Y:[[.15,'guard',70],[.32,'hit',74,{e:'out'}],[.6,'hitAir',120,{dy:-90,spin:-150,e:'out'}],[1,'hitAir',190,{dy:-50,spin:-150,e:'lin'}],[1.3,'lying',230,{e:'in'}],[1.7,'lying',234]],
  fx:[['whoosh',.2],['heavy',.3,{j:'X.h1',s:1.6,inv:.05,slow:[.4,.2],big:1}],['whoosh',.7],['thud',1.3,{who:'Y'}]]},
 ko2:{name:'Last Strike',dur:3.0,ko:1,
  X:[[.15,'crouch',-6],[.35,'flyingkick',40,{dy:-35,e:'out'}],[.5,'flyingkick',110,{dy:-40,e:'lin'}],[.7,'crouch',170,{e:'in'}],[1.2,'stand',172],[3,'stand',172]],
  Y:[[.15,'guard',70],[.35,'flyingkick',40,{dy:-35,e:'out'}],[.5,'flyingkick',-20,{dy:-40,e:'lin'}],[.7,'crouch',-70,{e:'in'}],[1.2,'stand',-72],[2,'stand',-72],[2.3,'kneel',-72],[2.65,'facedown',-62,{e:'in'}],[3,'facedown',-62]],
  fx:[['whoosh',.3],['clash',.42,{mid:1,s:1.8,inv:.06,slow:[.3,.2],big:1}],['land',.7,{who:'X'}],['land',.7,{who:'Y'}],['thud',2.65,{who:'Y'}]]},
};
Object.assign(MOVES,{
 elbow:{name:'Elbow & Knee',dur:1.2,
  X:[[.14,'elbow',36,{e:'out'}],[.3,'grab',38],[.5,'knee',42,{e:'out'}],[.75,'guard',38],[1.2,'guard',40]],
  Y:[[.16,'hit',78,{e:'out'}],[.32,'guard',74],[.52,'doubled',66,{e:'out'}],[.8,'hit',96],[1.2,'guard',110]],
  fx:[['whoosh',.08],['hit',.14,{j:'X.e1',s:.7,slow:[.05,.1]}],['heavy',.5,{j:'X.k1',s:1,slow:[.08,.12]}]]},
 backfist:{name:'Spinning Backfist',dur:1.0,
  X:[[.12,'guard',8,{f:-1,ln:-5}],[.26,'backfist',30,{f:1,e:'out'}],[.5,'backfist',30],[1,'guard',30]],
  Y:[[.2,'guard',72],[.28,'hit',80,{e:'out',ln:-45}],[.55,'hit',94],[1,'guard',100]],
  fx:[['whoosh',.1],['whoosh',.2],['heavy',.26,{j:'X.h1',s:1,slow:[.07,.12]}]]},
 lowkick:{name:'Low Kick',dur:.9,
  X:[[.12,'guard',16],[.28,'lowkick',22,{e:'out'}],[.5,'guard',20],[.9,'guard',30]],
  Y:[[.2,'guard',72],[.3,'kneel',74,{e:'out',ln:10}],[.55,'guard',84],[.9,'guard',100]],
  fx:[['whoosh',.2,{low:1}],['hit',.28,{j:'X.f1',s:.8,slow:[.05,.12]}]]},
 axe:{name:'Axe Kick',dur:1.2,
  X:[[.15,'guard',10],[.35,'axeUp',18,{e:'out'}],[.5,'axeDown',26,{e:'in'}],[.75,'axeDown',26],[1.2,'guard',30]],
  Y:[[.3,'guard',72],[.52,'kneel',80,{e:'out'}],[.8,'kneel',82],[1.2,'guard',100]],
  fx:[['whoosh',.3],['heavy',.5,{j:'X.f1',s:1.2,slow:[.1,.12]}],['land',.52,{who:'Y'}]]},
 dodge:{name:'Slip & Palm',dur:1.4,
  X:[[.15,'dodgeBack',-4,{e:'out'}],[.3,'dodgeBack',-8],[.5,'crouch',6],[.7,'palm',20,{e:'out'}],[.95,'guard',34],[1.4,'guard',40]],
  Y:[[.15,'punch',60,{e:'out'}],[.3,'punch2',56,{e:'out'}],[.5,'guard',60],[.72,'hit',70,{e:'out',ln:-55}],[1,'hit',112],[1.4,'guard',110]],
  fx:[['whoosh',.1],['whoosh',.25],['whoosh',.6],['heavy',.7,{j:'X.h1',s:1.2,slow:[.1,.12]}],['land',1,{who:'Y',slide:1}]]},
 throw:{name:'Shoulder Throw',dur:1.7,swap:1,
  X:[[.15,'grab',30],[.35,'throwPose',30],[.65,'throwPose',30],[.9,'guard',30,{f:-1}],[1.7,'guard',30]],
  Y:[[.18,'hit',64],[.4,'hitAir',40,{dy:-80,spin:120,e:'out'}],[.6,'hitAir',0,{dy:-50,spin:120,e:'lin'}],[.7,'lying',-30,{e:'in'}],[1,'tuck',-35,{dy:-30}],[1.2,'crouch',-40,{f:1}],[1.7,'guard',-40]],
  fx:[['whoosh',.38],['thud',.7,{who:'Y',slow:[.4,.22,.25],big:1}],['whoosh',.98],['land',1.2,{who:'Y'}]]},
 bicycle:{name:'Dragon Kicks',dur:1.5,
  X:[[.12,'crouch',0],[.3,'bike1',20,{dy:-45,e:'out'}],[.4,'bike2',28,{dy:-50}],[.5,'bike1',36,{dy:-52}],[.6,'bike2',44,{dy:-50}],[.72,'flyingkick',56,{dy:-45,e:'out'}],[.95,'crouch',66,{e:'in'}],[1.5,'guard',70]],
  Y:[[.2,'guard',74],[.3,'hit',80,{e:'out'}],[.4,'hit',88,{ln:-25}],[.5,'hit',96],[.6,'hit',104,{ln:-25}],[.74,'hit',118,{e:'out',ln:-55}],[1,'hit',136],[1.5,'guard',140]],
  fx:[['whoosh',.22],['hit',.3,{j:'X.f1',s:.55}],['hit',.4,{j:'X.f2',s:.55}],['hit',.5,{j:'X.f1',s:.6}],['hit',.6,{j:'X.f2',s:.6}],['heavy',.72,{j:'X.f1',s:1.2,slow:[.08,.12]}],['land',.95,{who:'X'}]]},
 tackle:{name:'Shoulder Charge',dur:1.5,
  X:[[.15,'run',-10],[.3,'shoulder',30,{e:'lin'}],[.45,'shoulder',46,{e:'out'}],[.8,'guard',60],[1.5,'guard',90]],
  Y:[[.4,'guard',70],[.47,'hitAir',90,{dy:-40,spin:-120,e:'out'}],[.8,'tuck',140,{dy:-10,spin:-120,e:'lin'}],[1.05,'tuck',165,{dy:10,spin:-120}],[1.25,'crouch',170,{e:'in'}],[1.5,'guard',160]],
  fx:[['whoosh',.15],['heavy',.45,{j:'X.neck',s:1.3,slow:[.1,.12]}],['land',.8,{who:'Y'}],['land',1.25,{who:'Y'}]]},
 juggle:{name:'Air Juggle',dur:2.1,
  X:[[.12,'crouch',14,{dy:30,ln:40}],[.28,'uppercut',30,{e:'out'}],[.45,'crouch',40],[.65,'tuck',60,{dy:-110,e:'out'}],[.75,'bike1',66,{dy:-120}],[.85,'bike2',70,{dy:-125}],[1,'axeDown',74,{dy:-120,e:'out'}],[1.3,'crouch',70,{e:'in'}],[1.6,'guard',66],[2.1,'guard',70]],
  Y:[[.2,'guard',72],[.3,'hit',74,{e:'out'}],[.6,'hitAir',100,{dy:-120,spin:-90,e:'out'}],[.78,'hitAir',110,{dy:-130,spin:-40}],[.88,'hitAir',116,{dy:-128,spin:-40}],[1.1,'lying',140,{e:'in'}],[1.25,'lying',142,{dy:34}],[1.4,'lying',144],[1.7,'tuck',140,{dy:0}],[1.85,'crouch',140],[2.1,'guard',140]],
  fx:[['whoosh',.2],['heavy',.28,{j:'X.h1',s:1.2,slow:[.08,.15]}],['whoosh',.6],['hit',.75,{j:'X.f1',s:.7}],['hit',.85,{j:'X.f2',s:.7}],['heavy',1,{j:'X.f1',s:1.4,inv:.04,slow:[.2,.2],big:1}],['thud',1.1,{who:'Y'}],['whoosh',1.6]]},
 ko3:{name:'Axe Drop',dur:1.8,ko:1,
  X:[[.15,'guard',12],[.35,'axeUp',20,{e:'out'}],[.5,'axeDown',28,{e:'in'}],[.9,'axeDown',28],[1.3,'stand',24],[1.8,'stand',24]],
  Y:[[.3,'guard',72],[.52,'kneel',74,{e:'out'}],[.8,'facedown',80,{e:'in'}],[1.8,'facedown',80]],
  fx:[['whoosh',.3],['heavy',.5,{j:'X.f1',s:1.5,inv:.05,slow:[.3,.2],big:1}],['thud',.8,{who:'Y'}]]},
});
Object.assign(MOVES,{
 shadow:{name:'Shadow Step',dur:1.0,swap:1,sig:1,
  X:[[.12,'crouch',-4],[.3,'run',140,{e:'out'}],[.36,'guard',140,{f:-1}],[.5,'backfist',130,{e:'out'}],[.8,'guard',140],[1,'guard',140]],
  Y:[[.3,'guard',70,{ln:-15}],[.45,'guard',70,{f:1}],[.52,'hit',60,{e:'out'}],[.8,'hit',64],[1,'guard',70]],
  fx:[['whoosh',.2],['whoosh',.28],['heavy',.5,{j:'X.h1',s:1}]]},
 whirl:{name:'Whirlwind Kick',dur:1.4,sig:1,
  X:[[.12,'crouch',6],[.28,'flyingkick',20,{dy:-50,e:'out'}],[.36,'flyingkick',26,{dy:-58,f:-1}],[.44,'flyingkick',32,{dy:-60,f:1}],[.52,'flyingkick',38,{dy:-58,f:-1}],[.6,'flyingkick',46,{dy:-54,f:1}],[.68,'flyingkick',52,{dy:-48,f:-1}],[.78,'flyingkick',58,{dy:-40,f:1}],[1,'crouch',64,{e:'in'}],[1.4,'guard',66]],
  Y:[[.3,'guard',72],[.44,'hit',80],[.6,'hit',92,{ln:-25}],[.8,'hit',110,{e:'out',ln:-55}],[1.05,'hit',132],[1.4,'guard',136]],
  fx:[['whoosh',.28],['whoosh',.38],['hit',.44,{j:'X.f1',s:.6}],['whoosh',.52],['hit',.6,{j:'X.f1',s:.7}],['whoosh',.68],['heavy',.78,{j:'X.f1',s:1.2}],['land',1,{who:'X'}]]},
 kiblast:{name:'Ki Blast',dur:1.6,sig:1,
  X:[[.2,'charge',-6],[.6,'charge',-8],[.7,'thrust',4,{e:'out'}],[1.1,'thrust',2],[1.3,'guard',30],[1.6,'guard',70]],
  Y:[[.7,'guard',70],[.95,'hit',76,{e:'out',ln:-55}],[1.2,'hitAir',120,{dy:-30,spin:-100,e:'out'}],[1.4,'crouch',150,{e:'in'}],[1.6,'guard',140]],
  fx:[['charge',.2,{j:'X.h1',dur:.5}],['proj',.7,{j:'X.h1',to:'Y.neck',t1:.95}],['heavy',.95,{j:'Y.neck',s:1.3}],['land',1.4,{who:'Y'}]]},
 quake:{name:'Ground Quake',dur:2.0,sig:1,
  X:[[.15,'crouch',0],[.4,'tuck',10,{dy:-120,e:'out'}],[.6,'tuck',14,{dy:-130}],[.78,'slam',20,{e:'in'}],[1.2,'slam',20],[1.5,'guard',20],[2,'guard',30]],
  Y:[[.78,'guard',72],[.86,'hitAir',90,{dy:-40,spin:-60,e:'out'}],[1.05,'lying',110,{e:'in'}],[1.4,'lying',110],[1.65,'kneel',108],[2,'guard',100]],
  fx:[['whoosh',.35],['quake',.78,{j:'X.h1',s:1.5,slow:[.32,.22,.06],big:1}],['thud',1.05,{who:'Y'}]]},
 dragon:{name:'Rising Dragon',dur:2.0,ko:1,sig:1,
  X:[[.12,'crouch',16,{dy:30,ln:30}],[.3,'dragon',36,{dy:-60,spin:360,e:'out'}],[.5,'dragon',40,{dy:-120,e:'out'}],[.8,'tuck',44,{dy:-60}],[1,'crouch',44,{e:'in'}],[1.4,'stand',44],[2,'stand',44]],
  Y:[[.2,'guard',70],[.3,'hit',72,{e:'out'}],[.55,'hitAir',100,{dy:-150,spin:-150,e:'out'}],[.95,'hitAir',150,{dy:-80,spin:-150,e:'lin'}],[1.25,'lying',180,{e:'in'}],[2,'lying',182]],
  fx:[['whoosh',.18],['hit',.3,{j:'X.h1',s:.8}],['heavy',.45,{j:'X.h1',s:1.7,inv:.05,slow:[.35,.2],big:1}],['whoosh',.6],['thud',1.25,{who:'Y'}]]},
});
Object.assign(MOVES,{
 wslash:{name:'Rising Slash',dur:1.0,wpn:'sword',
  X:[[.14,'slashLow',8],[.3,'slashHigh',20,{e:'out'}],[.55,'slashHigh',20],[1,'guard',20]],
  Y:[[.2,'guard',72],[.32,'hit',80,{e:'out',ln:-50}],[.6,'hit',92],[1,'guard',90]],
  fx:[['slash',.22],['hit',.3,{j:'X.tip',s:.9}]]},
 wchop:{name:'Overhead Chop',dur:1.1,wpn:'sword',
  X:[[.18,'chopUp',6],[.36,'chopDown',22,{e:'out'}],[.6,'chopDown',22],[1.1,'guard',20]],
  Y:[[.3,'block',72],[.38,'kneel',78,{e:'out'}],[.7,'kneel',80],[1.1,'guard',90]],
  fx:[['slash',.28],['heavy',.36,{j:'X.tip',s:1.1}]]},
 wthrust:{name:'Lunge Thrust',dur:1.1,wpn:'sword',
  X:[[.15,'guard',0],[.32,'lunge',30,{e:'out'}],[.55,'lunge',32],[1.1,'guard',40]],
  Y:[[.25,'guard',72],[.34,'hit',84,{e:'out',ln:-45}],[.6,'hit',110,{e:'out'}],[1.1,'guard',110]],
  fx:[['slash',.24,{low:1}],['heavy',.32,{j:'X.tip',s:1}],['land',.6,{who:'Y',slide:1}]]},
 wspin:{name:'Whirling Blade',dur:1.4,wpn:'sword',
  X:[[.12,'guard',6],[.22,'spinCut',12,{f:-1}],[.32,'spinCut',18,{f:1}],[.42,'spinCut',24,{f:-1}],[.52,'spinCut',30,{f:1}],[.62,'spinCut',36,{f:-1}],[.74,'spinCut',42,{f:1}],[1,'guard',46],[1.4,'guard',50]],
  Y:[[.3,'guard',74],[.34,'hit',84],[.54,'hit',96,{ln:-25}],[.76,'hit',112,{e:'out',ln:-55}],[1,'hit',122],[1.4,'guard',120]],
  fx:[['slash',.2],['hit',.32,{j:'X.tip',s:.6}],['slash',.42],['hit',.52,{j:'X.tip',s:.7}],['slash',.64],['heavy',.74,{j:'X.tip',s:1.1}]]},
 wko:{name:'Iaido Cut',dur:2.6,ko:1,wpn:'sword',
  X:[[.2,'sheathe',-4],[.6,'sheathe',-6],[.72,'drawCut',150,{e:'out'}],[1.8,'drawCut',152],[2.1,'guard',150],[2.6,'stand',150]],
  Y:[[.6,'guard',70],[.72,'guard',70,{ln:-5}],[1.6,'guard',70],[1.85,'kneel',70],[2.2,'facedown',80,{e:'in'}],[2.6,'facedown',80]],
  fx:[['slash',.66],['cut',.72,{j:'X.h1'}],['heavy',1.62,{j:'Y.neck',s:1.6,inv:.05,slow:[.4,.2,.05],big:1}],['behead',1.62,{who:'Y'}],['thud',2.2,{who:'Y'}]]},
});
Object.assign(MOVES,{
 axCleave:{name:'Cleave',dur:1.4,wpn:'axe',
  X:[[.25,'cleaveUp',4],[.5,'cleaveDown',18,{e:'out'}],[.85,'cleaveDown',18],[1.4,'guard',20]],
  Y:[[.3,'block',72],[.52,'kneel',80,{e:'out'}],[.9,'kneel',82],[1.4,'guard',90]],
  fx:[['slash',.4],['heavy',.5,{j:'X.tip',s:1.3}],['thud',.52,{j:'X.tip'}]]},
 axSweep:{name:'Wide Sweep',dur:1.3,wpn:'axe',
  X:[[.22,'sweepBack',0],[.46,'sweepFwd',16,{e:'out'}],[.75,'sweepFwd',18],[1.3,'guard',40]],
  Y:[[.35,'guard',72],[.48,'hit',82,{e:'out',ln:-55}],[.8,'hit',112],[1.3,'guard',110]],
  fx:[['slash',.36],['heavy',.46,{j:'X.tip',s:1.2}],['land',.8,{who:'Y',slide:1}]]},
 axSpin:{name:'Axe Whirlwind',dur:1.5,wpn:'axe',
  X:[[.15,'sweepBack',4],[.3,'sweepFwd',10,{f:-1}],[.45,'sweepFwd',18,{f:1}],[.6,'sweepFwd',26,{f:-1}],[.78,'sweepFwd',34,{f:1}],[1.05,'guard',40],[1.5,'guard',44]],
  Y:[[.3,'guard',74],[.47,'hit',86],[.8,'hit',108,{e:'out',ln:-55}],[1.05,'hit',116],[1.5,'guard',114]],
  fx:[['slash',.28],['heavy',.45,{j:'X.tip',s:.9}],['slash',.6],['heavy',.78,{j:'X.tip',s:1.2}]]},
 axKO:{name:'Executioner',dur:2.2,ko:1,wpn:'axe',
  X:[[.2,'crouch',0],[.45,'leapChop',20,{dy:-90,e:'out'}],[.62,'leapChop',34,{dy:-100}],[.78,'cleaveDown',44,{e:'in'}],[1.4,'cleaveDown',44],[1.8,'stand',40],[2.2,'stand',40]],
  Y:[[.5,'guard',72],[.62,'block',72],[.8,'kneel',76,{e:'out'}],[1.1,'facedown',84,{e:'in'}],[2.2,'facedown',84]],
  fx:[['whoosh',.4],['slash',.7],['heavy',.78,{j:'X.tip',s:1.6,inv:.05,slow:[.35,.2],big:1}],['behead',.78,{who:'Y'}],['thud',.8,{j:'X.tip'}],['thud',1.1,{who:'Y'}]]},
});
MOVES.wclash={name:'Weapon Clash',dur:2.2,
  X:[[.15,'chopUp',6],[.3,'chopDown',8,{e:'out'}],[.45,'slashLow',6],[.6,'slashHigh',10,{e:'out'}],[.75,'sweepBack',8],[.9,'sweepFwd',12,{e:'out'}],[1.05,'bind',14],[1.6,'bind',16,{ln:24}],[1.8,'guard',4,{e:'out'}],[2.2,'guard',0]],
  Y:[[.15,'guard',74],[.3,'slashHigh',82,{e:'out'}],[.45,'guard',82],[.6,'chopDown',84,{e:'out'}],[.75,'guard',84],[.9,'sweepFwd',86,{e:'out'}],[1.05,'bind',80],[1.6,'bind',78,{ln:24}],[1.8,'guard',74,{e:'out'}],[2.2,'guard',70]],
  fx:[['slash',.22],['wclash',.3,{s:1}],['slash',.52],['wclash',.6,{s:1.1}],['slash',.82],['wclash',.9,{s:1.3}],['grind',1.05,{dur:.55}],['wclash',1.8,{s:.8}]]};
MOVES.matrix={name:'Matrix Dodge',dur:2.3,sig:1,
  X:[[.15,'guard',0],[.35,'matrix',-4,{e:'out'}],[.8,'matrix',-5,{ln:-70}],[1.25,'matrix',-6],[1.45,'crouch',4],[1.62,'palm',22,{e:'out'}],[1.9,'guard',34],[2.3,'guard',40]],
  Y:[[.2,'thrust',68,{e:'out'}],[.4,'charge',70],[.55,'thrust',68,{e:'out'}],[.75,'charge',70],[.9,'thrust',68,{e:'out'}],[1.4,'guard',70],[1.64,'hit',78,{e:'out',ln:-55}],[1.95,'hit',106],[2.3,'guard',110]],
  fx:[['bullet',.3,{j:'X.head',slow:[1.0,.25],bt:1}],['matrixfx',.3,{dur:1.05}],
      ['proj',.2,{j:'Y.h1',toXY:[-170,-84],t1:.62,s:.55,ripple:1}],['proj',.55,{j:'Y.h1',toXY:[-170,-78],t1:.97,s:.55,ripple:1}],['proj',.9,{j:'Y.h1',toXY:[-170,-90],t1:1.32,s:.55,ripple:1}],
      ['whoosh',1.45],['heavy',1.62,{j:'X.h1',s:1.2}],['land',1.95,{who:'Y',slide:1}]]};
// fist flurries are generated
(function(){
  function flurry(n,x0){const X=[],Y=[],fx=[];for(let i=0;i<n;i++){const t=.1+i*.1;
    X.push([t,i%2?'punch2':'punch',x0+i*3,{e:'out'}]); Y.push([t+.02,'hit',76+i*3,{e:'out',ln:i%2?-25:-40}]);
    fx.push(['hit',t,{j:i%2?'X.h2':'X.h1',s:.45}]);} fx.unshift(['whoosh',.04]); return {X,Y,fx};}
  const a=flurry(8,16);
  MOVES.flurry={name:'Hundred Fists',dur:1.6,
    X:[...a.X,[1,'guard',40],[1.1,'palm',50,{e:'out'}],[1.35,'guard',46],[1.6,'guard',50]],
    Y:[...a.Y,[1.12,'hit',100,{e:'out',ln:-55}],[1.35,'hit',122],[1.6,'guard',120]],
    fx:[...a.fx,['whoosh',1.02],['heavy',1.1,{j:'X.h1',s:1.2,slow:[.1,.12]}]]};
  const b=flurry(6,16);
  MOVES.ko4={name:'Hurricane',dur:2.0,ko:1,
    X:[...b.X,[.75,'guard',36],[.85,'palm',46,{e:'out'}],[1.2,'guard',44],[1.6,'stand',44],[2,'stand',44]],
    Y:[...b.Y,[.87,'hitAir',120,{dy:-70,spin:-150,e:'out'}],[1.25,'hitAir',210,{dy:-40,spin:-150,e:'lin'}],[1.55,'lying',260,{e:'in'}],[2,'lying',264]],
    fx:[...b.fx,['whoosh',.78],['heavy',.85,{j:'X.h1',s:1.7,inv:.05,slow:[.35,.2],big:1}],['thud',1.55,{who:'Y'}]]};
})();
// what each side of a move needs from its hands: 'both' = two free hands, 'one' = one free hand, 'weapon' = must hold a weapon
const NEEDS={jab:{X:'both'},rush:{X:'both'},flurry:{X:'both'},ko4:{X:'both'},elbow:{X:'both'},kiblast:{X:'both'},throw:{X:'both'},
  backfist:{X:'one'},counter:{X:'one',Y:'one'},dodge:{X:'one',Y:'both'},upper:{X:'one'},juggle:{X:'one'},dragon:{X:'one'},ko1:{X:'one'},
  matrix:{X:'one',Y:'both'},shadow:{X:'one'},wclash:{X:'weapon',Y:'weapon'}};
const canUse=(w,need)=>!need||(need==='both'?w==='none':need==='one'?w!=='axe':need==='weapon'?w!=='none':true);
const GROUPS=[['Strikes',['jab','rush','flurry','elbow','backfist','counter','dodge']],
  ['Kicks',['kick','lowkick','axe','sweep','tornado']],
  ['Aerial',['fly','bicycle','upper','juggle','flip','clash']],
  ['Power',['tackle','throw']],
  ['Sword',['wslash','wchop','wthrust','wspin']],
  ['Axe',['axCleave','axSweep','axSpin']],
  ['Clash',['wclash']],
  ['Signature',['shadow','whirl','kiblast','quake','matrix']],
  ['Finishers',['dragon','wko','axKO','ko1','ko2','ko3','ko4']]];
const ORDER=GROUPS.flatMap(g=>g[1]);
const CLASSIC=[['jab','A'],['rush','A'],['sweep','B'],['fly','B'],['flip','A'],['upper','A'],['tornado','B'],['counter','A'],['clash','A'],['ko2','A']];

/* ================= COMPILER ================= */
let TL=null;
const lastNonGuard=mv=>{let t=0;for(const s of ['X','Y']) for(const k of mv[s]) if(k[1]!=='guard') t=Math.max(t,k[0]); return t;};
function compile(seq,roster,flow){
  const ids=roster.map(r=>r.id), K={}, fx=[], segs=[], wpn={};
  ids.forEach(id=>K[id]=[]); roster.forEach(r=>wpn[r.id]=r.weapon&&r.weapon!=='none'?r.weapon:null);
  const add=(id,t,pose,x,o={})=>K[id].push([t,pose,x,o]);
  const st={};
  // intro: hero left of centre, first opponent right, extra opponents alternate sides
  const opp=ids.filter(i=>i!=='A'), place={A:[-35,1]};
  opp.forEach((e,i)=>{ if(i===0) place[e]=[35,-1]; else {const side=i%2?-1:1,k=Math.floor((i-1)/2); place[e]=[side*(150+k*55),-side];}});
  ids.forEach(id=>{const [x,f]=place[id], far=x+Math.sign(x)*240;
    const o=showTitle?1.3:.25;
    add(id,0,'stand',far,{f}); add(id,o,'guard',far); add(id,o+.28,'run',(far+x)/2); add(id,o+.56,'guard',x);
    st[id]={x,f,pose:'guard',down:false};});
  const o=showTitle?1.3:.25;
  if(showTitle) fx.push({type:'title',t:.28});
  fx.push({type:'whoosh',t:o+.2},{type:'land',t:o+.56,who:'A'});
  let T=o+.65, last=null;
  const hold=(id,t)=>add(id,t,st[id].pose,st[id].x);
  function idle(T0,T1,active,lo,hi){
    const rest=ids.filter(i=>!active.includes(i)), mid=(lo+hi)/2, Ls=[], Rs=[];
    rest.forEach(i=>{ if(st[i].down){hold(i,T1);return;} (st[i].x<mid?Ls:Rs).push(i); });
    Ls.sort((a,b)=>st[b].x-st[a].x); Rs.sort((a,b)=>st[a].x-st[b].x);
    const go=(arr,side)=>arr.forEach((i,k)=>{
      const tx=side<0?lo-80-k*58:hi+80+k*58, f=-side, s=st[i], d=Math.abs(tx-s.x), tm=T0+Math.min(.5,(T1-T0)*.55);
      if(d>2||s.f!==f||s.pose!=='guard'){ if(d>70) add(i,(T0+tm)/2,'run',(s.x+tx)/2,{f:Math.sign(tx-s.x)||f}); add(i,tm,'guard',tx,{f}); }
      add(i,T1,'guard',tx,{f}); st[i]={x:tx,f,pose:'guard',down:false}; });
    go(Ls,-1); go(Rs,1);
  }
  function getup(d){
    const s=st[d]; let near=null;
    ids.forEach(i=>{ if(i!==d&&!st[i].down&&(!near||Math.abs(st[i].x-s.x)<Math.abs(st[near].x-s.x))) near=i; });
    const dir=near?(Math.sign(st[near].x-s.x)||1):s.f;
    if(s.headless){fx.push({type:'reattach',t:T+.15,who:d}); s.headless=false;}
    add(d,T+.25,s.pose,s.x); add(d,T+.6,'kneel',s.x,{f:s.f}); add(d,T+.9,'guard',s.x,{f:dir}); add(d,T+1.05,'guard',s.x);
    ids.forEach(i=>{if(i!==d) hold(i,T+1.05);});
    fx.push({type:'whoosh',t:T+.55});
    segs.push({T0:T,T1:T+1.05,auto:'getup',pair:[d,near||d]}); st[d]={x:s.x,f:dir,pose:'guard',down:false,headless:false}; T+=1.05; last=null;
  }
  function engage(att,def){
    const a=st[att], d=st[def], side=Math.sign(d.x-a.x)||1, tx=a.x+side*GAP;
    if(Math.abs(d.x-tx)<1&&a.f===side&&d.f===-side&&a.pose==='guard'&&d.pose==='guard') return;
    const dist=Math.abs(d.x-tx), dur=Math.min(.85,.35+dist/450);
    add(att,T+Math.min(.18,dur*.4),'guard',a.x,{f:side}); add(att,T+dur,'guard',a.x,{f:side});
    if(dist>60) add(def,T+dur*.5,'run',(d.x+tx)/2,{f:Math.sign(tx-d.x)||-side});
    add(def,T+dur,'guard',tx,{f:-side});
    if(dist>40) fx.push({type:'whoosh',t:T+dur*.35});
    idle(T,T+dur,[att,def],Math.min(a.x,tx)-25,Math.max(a.x,tx)+25);
    st[att]={x:a.x,f:side,pose:'guard',down:false}; st[def]={x:tx,f:-side,pose:'guard',down:false};
    segs.push({T0:T,T1:T+dur,auto:'engage',pair:[att,def]}); T+=dur; last=null;
  }
  seq.forEach((it,idx)=>{
    const mv=MOVES[it.id], att=it.who, def=it.vs;
    if(!mv||!st[att]||!st[def]||att===def) return;
    if(st[att].down) getup(att); if(st[def].down) getup(def);
    engage(att,def);
    // chaining: start this move inside the previous move's recovery so the motion carries straight through
    let T0=T;
    if(last&&flow>0&&((last.att===att&&last.def===def)||(last.att===def&&last.def===att))){
      const ov=Math.min(.55,last.tail*flow); T0=T-ov;
      ids.forEach(i=>{K[i]=K[i].filter(k=>k[0]<=T0+.02);});
      for(let j=fx.length-1;j>=0;j--) if(fx[j].t>T0+.02) fx.splice(j,1);
      segs[segs.length-1].T1=T0;
    }
    const X0=st[att].x, m=st[att].f, map={X:att,Y:def}; let lo=1e9,hi=-1e9;
    for(const side of ['X','Y']){ const id=map[side]; let f=st[id].f, lx=st[id].x, lp='guard';
      for(const [t,pose,x,o={}] of mv[side]){ const oo={...o}; if(o.f!==undefined){oo.f=o.f*m;f=oo.f;}
        const wx=X0+m*x; add(id,T0+t,pose,wx,oo); lx=wx; lp=pose; lo=Math.min(lo,wx); hi=Math.max(hi,wx); }
      st[id]={x:lx,f,pose:lp,down:false,headless:st[id].headless}; }
    for(const [type,t,o={}] of mv.fx){
      if(type==='behead'&&!beheadOn) continue;
      const e={type,t:T0+t,s:o.s||1,inv:o.inv,low:o.low,slide:o.slide,wpn:mv.wpn?wpn[att]:null,def};
      if(o.j){const [s,j]=o.j.split('.');e.fid=map[s];e.j=(j==='tip'&&!wpn[map[s]])?'h1':j;}
      if(type==='thud'&&o.j){e.who=null;}
      if(o.mid){e.mid=1;e.a=att;e.b=def;}
      if(type==='wclash'||type==='grind'){e.a=att;e.b=def;e.wa=wpn[att];e.wb=wpn[def];}
      if(o.dur) e.dur=o.dur;
      if(o.to){const [s2,j2]=o.to.split('.');e.tfid=map[s2];e.tj=j2;e.t1=T0+o.t1;}
      if(o.toXY){e.tx=X0+m*o.toXY[0];e.ty=o.toXY[1];e.t1=T0+o.t1;}
      if(o.ripple) e.ripple=1;
      if(o.bt&&o.slow){e.slow=[T0+t,T0+t+o.slow[0],o.slow[1]];e.bt=1;}
      if(o.who) e.who=map[o.who];
      if(type==='behead'){e.att=att; st[def].headless=true;}
      if(o.big){e.big=1; if(o.slow){const pre=o.slow[2]||0; e.slow=[T0+t-pre,T0+t-pre+o.slow[0],o.slow[1]];}}
      fx.push(e); }
    idle(T0,T0+mv.dur,[att,def],lo-25,hi+25);
    segs.push({T0,T1:T0+mv.dur,idx,name:mv.name,who:att,vs:def,pair:[att,def]});
    last=mv.ko?null:{att,def,tail:mv.dur-lastNonGuard(mv)};
    T=T0+mv.dur;
    if(mv.ko) st[def].down=true;
  });
  T+=1.6; ids.forEach(i=>hold(i,T));
  const built={}; ids.forEach(i=>built[i]=build(K[i]));
  fx.sort((a,b)=>a.t-b.t);
  return {K:built,fx,segs,slow:fx.filter(e=>e.slow).map(e=>e.slow),end:T,ids,wpn};
}
const ease={lin:u=>u,io:u=>u<.5?4*u*u*u:1-Math.pow(-2*u+2,3)/2,out:u=>1-Math.pow(1-u,3),in:u=>u*u*u};
function build(keys){
  keys.sort((a,b)=>a[0]-b[0]);
  for(let i=1;i<keys.length;i++) if(keys[i][0]<=keys[i-1][0]) keys[i][0]=keys[i-1][0]+1e-3;
  let prevRot=0,f=1;
  const arr=keys.map(([t,name,x,o={}])=>{
    const base=P[name]; const k={t,x,e:o.e||'io'};
    FIELDS.forEach(n=>k[n]=(o[n]!==undefined?o[n]:base[n]));
    const target=base.rot||0;
    if(o.spin!==undefined) k.rot=prevRot+o.spin;
    else { const d=((target-prevRot)%360+540)%360-180; k.rot=prevRot+d; }
    prevRot=k.rot; if(o.f!==undefined) f=o.f; k.f=f; return k;
  });
  arr.forEach((k,i)=>{ // monotone cubic tangents: motion flows through keys without overshoot
    k.m={};
    for(const n of ['x','rot',...FIELDS]){
      if(i===0||i===arr.length-1){k.m[n]=0;continue;}
      const a=arr[i-1],b=arr[i+1];
      const d0=(k[n]-a[n])/Math.max(1e-4,k.t-a.t), d1=(b[n]-k[n])/Math.max(1e-4,b.t-k.t);
      if(d0*d1<=0){k.m[n]=0;continue;}
      const m=(b[n]-a[n])/Math.max(1e-4,b.t-a.t);
      k.m[n]=Math.sign(m)*Math.min(Math.abs(m),3*Math.min(Math.abs(d0),Math.abs(d1)));
    }
  });
  return arr;
}
function poseAt(keys,T){
  if(T<=keys[0].t) return keys[0];
  const last=keys[keys.length-1]; if(T>=last.t) return last;
  let lo=0,hi=keys.length-1; while(hi-lo>1){const mid=(lo+hi)>>1; if(keys[mid].t<=T) lo=mid; else hi=mid;}
  const a=keys[lo],b=keys[lo+1], dt=b.t-a.t, r=(T-a.t)/dt, o={f:a.f};
  if(b.e==='out'||b.e==='in'){
    const u=ease[b.e](r); o.x=a.x+(b.x-a.x)*u; o.rot=a.rot+(b.rot-a.rot)*u; FIELDS.forEach(n=>o[n]=a[n]+(b[n]-a[n])*u); return o;
  }
  const u=r,u2=u*u,u3=u2*u,h00=2*u3-3*u2+1,h10=u3-2*u2+u,h01=-2*u3+3*u2,h11=u3-u2;
  const ma=a.e==='out'||a.e==='in'?null:a.m;
  for(const n of ['x','rot',...FIELDS]) o[n]=h00*a[n]+h10*dt*(ma?ma[n]:0)+h01*b[n]+h11*dt*b.m[n];
  return o;
}
const rad=Math.PI/180;
function skel(p,w){
  const f=p.f, th=p.rot, hip={x:p.x,y:-48+p.dy}, T=(p.ln+th)*rad;
  const up=len=>({x:hip.x+Math.sin(T)*len*f,y:hip.y-Math.cos(T)*len});
  const neck=up(L.torso), head=up(L.torso+L.neck+L.head);
  const seg=(o,a,len)=>({x:o.x+Math.sin(a*rad)*len*f,y:o.y+Math.cos(a*rad)*len});
  const e1=seg(neck,p.ua1-th,L.ua), h1=seg(e1,p.ua1+p.fa1-th,L.fa), e2=seg(neck,p.ua2-th,L.ua), h2=seg(e2,p.ua2+p.fa2-th,L.fa);
  const k1=seg(hip,p.th1-th,L.th), f1=seg(k1,p.th1+p.sh1-th,L.sh), k2=seg(hip,p.th2-th,L.th), f2=seg(k2,p.th2+p.sh2-th,L.sh);
  const s={f,hip,neck,head,e1,h1,e2,h2,k1,f1,k2,f2,rot:th};
  if(w){const dx=h1.x-e1.x,dy=h1.y-e1.y,l=Math.hypot(dx,dy)||1,ux=dx/l,uy=dy/l,len=w==='axe'?52:42,bk=w==='axe'?18:8;
    s.tip={x:h1.x+ux*len,y:h1.y+uy*len}; s.butt={x:h1.x-ux*bk,y:h1.y-uy*bk}; s.ux=ux; s.uy=uy; s.w=w;
    if(w==='axe'){ // two-handed: the far hand grips the handle below the near hand
      const g={x:h1.x-ux*13,y:h1.y-uy*13}, ax=g.x-neck.x, ay=g.y-neck.y; let d=Math.hypot(ax,ay)||1; const rd=Math.min(d,L.ua+L.fa-.5);
      const bx=ax/d, by=ay/d, a1=Math.acos(Math.max(-1,Math.min(1,(L.ua*L.ua+rd*rd-L.fa*L.fa)/(2*L.ua*rd)))), base=Math.atan2(by,bx);
      const c1={x:neck.x+Math.cos(base+a1)*L.ua,y:neck.y+Math.sin(base+a1)*L.ua}, c2={x:neck.x+Math.cos(base-a1)*L.ua,y:neck.y+Math.sin(base-a1)*L.ua};
      s.e2=c1.y>c2.y?c1:c2; s.h2={x:neck.x+bx*rd,y:neck.y+by*rd};
      const p1={x:-uy,y:ux}, p2={x:uy,y:-ux}; s.bn=(p1.x*f*.6+p1.y*.8)>=(p2.x*f*.6+p2.y*.8)?p1:p2; } }
  return s;
}
const sk=(id,T)=>skel(poseAt(TL.K[id],T),TL.wpn[id]);
const speedAt=T=>{for(const s of TL.slow) if(T>=s[0]&&T<s[1]){
  const r=Math.min(.03,(s[1]-s[0])/3), k=Math.min(1,(T-s[0])/r,(s[1]-T)/r); const sm=k*k*(3-2*k); return 1+(s[2]-1)*sm; } return 1;};

/* ================= AUDIO (synthesized) ================= */
let ac=null, master=null, recDest=null, noise=null, soundOn=true;
function ensureAudio(){
  if(ac) { if(ac.state==='suspended') ac.resume(); return; }
  try{
    ac=new (window.AudioContext||window.webkitAudioContext)();
    const comp=ac.createDynamicsCompressor(); comp.threshold.value=-14; comp.ratio.value=4;
    master=ac.createGain(); master.gain.value=.8; master.connect(comp); comp.connect(ac.destination);
    recDest=ac.createMediaStreamDestination(); comp.connect(recDest);
    const len=ac.sampleRate*2, b=ac.createBuffer(1,len,ac.sampleRate), d=b.getChannelData(0);
    for(let i=0;i<len;i++) d[i]=Math.random()*2-1; noise=b;
  }catch(e){ac=null;}
}
function env(g,t,a,peak,d){g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(Math.max(.0002,peak),t+a);g.gain.exponentialRampToValueAtTime(.0001,t+a+d);}
function nz(t,dur,filt,freq,q,a,peak,d,freqTo){
  const s=ac.createBufferSource();s.buffer=noise;s.playbackRate.value=.8+Math.random()*.4;
  const f=ac.createBiquadFilter();f.type=filt;f.frequency.setValueAtTime(freq,t);if(freqTo)f.frequency.exponentialRampToValueAtTime(freqTo,t+a+d);f.Q.value=q;
  const g=ac.createGain();env(g,t,a,peak,d);s.connect(f);f.connect(g);g.connect(master);s.start(t,Math.random());s.stop(t+a+d+.05);
}
function tone(t,type,f0,f1,a,peak,d,dist){
  const o=ac.createOscillator();o.type=type;o.frequency.setValueAtTime(f0,t);o.frequency.exponentialRampToValueAtTime(f1,t+a+d);
  const g=ac.createGain();env(g,t,a,peak,d);
  if(dist){const w=ac.createWaveShaper();const c=new Float32Array(256);for(let i=0;i<256;i++){const x=i/128-1;c[i]=Math.tanh(x*dist);}w.curve=c;o.connect(w);w.connect(g);} else o.connect(g);
  g.connect(master);o.start(t);o.stop(t+a+d+.05);
}
const SFX={
  whoosh:(t,e)=>{const lo=e.low?.5:1; nz(t,0,'bandpass',350*lo,1.4,.07,.45,.16,2600*lo);},
  hit:(t,e)=>{const s=e.s||1; nz(t,0,'lowpass',2600,.7,.002,.8*s,.09); tone(t,'sine',170,50,.002,.9*s,.13); tone(t,'square',1300,700,.001,.12,.02);},
  heavy:(t,e)=>{const s=Math.min(1.6,e.s||1); nz(t,0,'lowpass',3200,.7,.002,.9,.18); tone(t,'sine',120,32,.004,1.1*s,.45,3); nz(t+.01,0,'bandpass',900,.8,.01,.4,.35,200); tone(t,'square',1600,500,.001,.15,.03);
    if(e.slow){tone(t,'sine',55,28,.02,.9,1.2); nz(t,0,'lowpass',400,.5,.05,.35,1.0);} },
  block:(t,e)=>{nz(t,0,'highpass',2800,.7,.001,.6,.07); tone(t,'triangle',1400,1100,.001,.25,.14); tone(t,'triangle',2150,1800,.001,.18,.12); tone(t,'sine',140,70,.002,.5,.1);},
  land:(t,e)=>{tone(t,'sine',110,42,.003,.55,.16); nz(t,0,'lowpass',650,.6,.004,.35,.14); if(e.slide) nz(t,0,'bandpass',1500,.9,.02,.2,.4,500);},
  thud:(t,e)=>{tone(t,'sine',90,30,.004,1,.4,2); nz(t,0,'lowpass',500,.6,.005,.6,.35);},
  charge:(t,e)=>{const d=e.dur||.5; tone(t,'sawtooth',90,520,.05,.12,d); tone(t,'sine',180,1040,.05,.18,d); nz(t,0,'bandpass',500,3,.05,.25,d,3000);},
  proj:(t,e)=>{const d=Math.max(.1,(e.t1||t)-e.t); tone(t,'sawtooth',300,120,.01,.18,d+.1,4); nz(t,0,'bandpass',2000,1.5,.01,.4,d,600);},
  quake:(t,e)=>{SFX.heavy(t,{s:1.6,slow:1}); tone(t,'sine',48,24,.02,1,1.4,3); nz(t,0,'lowpass',260,.5,.02,.8,1.2);},
  slash:(t,e)=>{ if(e.wpn==='axe'){nz(t,0,'bandpass',260,1,.06,.65,.26,900); tone(t,'sine',140,70,.05,.25,.3);} else if(e.wpn==='sword'){nz(t,0,'bandpass',2200,2,.02,.45,.12,7000); tone(t+.02,'sine',5400,5000,.002,.05,.3);} else SFX.whoosh(t,e); },
  bullet:(t,e)=>{tone(t,'sine',240,50,.05,.45,1.1); nz(t,0,'bandpass',1400,4,.25,.3,1.0,180); tone(t,'triangle',880,220,.02,.08,.9);},
  wclash:(t,e)=>{ const heavy=e.wa==='axe'||e.wb==='axe', b=heavy?.62:1, s=Math.min(1.4,e.s||1);
    [1180,1873,2641,3490,4720].forEach((f,i)=>tone(t,'sine',f*b,f*b*.985,.001,(.22-i*.03)*s,.55+(4-i)*.12));
    nz(t,0,'highpass',3500,.7,.001,.7*s,.05); tone(t,'triangle',260*b,140*b,.001,.5,.12); tone(t,'sine',120,50,.002,.5*s,.12);},
  grind:(t,e)=>{ const d=e.dur||.5; nz(t,0,'bandpass',3200,6,.04,.35,d,2400); nz(t,0,'bandpass',5200,8,.04,.2,d,4200);
    for(let k=0;k<6;k++) tone(t+k*d/6,'sine',2600+k*140,2500,.001,.06,.08);},
  reattach:(t,e)=>{tone(t,'sine',300,900,.005,.35,.12); nz(t,0,'bandpass',1500,1.5,.005,.25,.1);},
  behead:(t,e)=>{tone(t+.35,'sine',180,90,.002,.35,.1); tone(t+.62,'sine',170,90,.002,.2,.08); nz(t,0,'bandpass',900,1,.01,.3,.3,300);},
  cut:(t,e)=>{nz(t,0,'bandpass',3000,3,.005,.6,.25,9000); tone(t,'sine',6200,5600,.002,.08,.8);},
  title:(t,e)=>{SFX.heavy(t,{s:1.2}); nz(t,0,'bandpass',800,1,.01,.35,.4,120);},
  clash:(t,e)=>{SFX.heavy(t,{s:1.6,slow:1}); nz(t,0,'bandpass',6000,1,.005,.5,.7,250);
    [2300,3170,4690].forEach((f,i)=>tone(t,'sine',f,f*.98,.002,.12-i*.02,1.1));},
};
function playSfx(e){ if(!ac||!soundOn||!SFX[e.type]) return; const t=ac.currentTime+.005;
  try{SFX[e.type](t,e);
    if(e.wpn&&(e.type==='hit'||e.type==='heavy')){ if(e.wpn==='sword'){nz(t,0,'highpass',4200,.7,.001,.55,.07); tone(t,'triangle',3100,2600,.001,.12,.3);} else {tone(t,'sine',170,42,.002,1,.3,3); nz(t,0,'lowpass',1500,.7,.001,.85,.14); tone(t,'triangle',1900,1500,.001,.12,.2);} }
  }catch(_){} }

/* ================= RENDER ================= */
const cv=document.getElementById('c'), ctx=cv.getContext('2d');
let W=0,H=0,dpr=1, recording=false, showTags=false, showTitle=false;
function resize(){ if(recording) return; dpr=Math.min(devicePixelRatio||1,2);const r=cv.getBoundingClientRect();W=r.width;H=r.height;cv.width=Math.round(W*dpr);cv.height=Math.round(H*dpr);}
new ResizeObserver(resize).observe(cv); resize();
const cam={x:0,w:460}; let snapCam=true;
function rnd(i){const s=Math.sin(i*127.1+311.7)*43758.5453;return s-Math.floor(s);}
function hexMix(a,b,t){const pa=parseInt(a.slice(1),16),pb=parseInt(b.slice(1),16);
  const ch=sh=>Math.round(((pa>>sh)&255)*(1-t)+((pb>>sh)&255)*t);
  return '#'+((1<<24)|(ch(16)<<16)|(ch(8)<<8)|ch(0)).toString(16).slice(1);}
const INK='#111111', RED='#c62d25';
function lookOf(id,inv){
  const r=rosterMap[id]||{color:INK,band:false}; const isInk=r.color===INK;
  const col=inv&&isInk?'#f4f4f0':r.color;
  return {col, back:inv?hexMix(col,'#0d0d0d',.42):hexMix(col,'#fbfbf9',.42),
    band:r.band?(r.color===RED?(inv?'#f4f4f0':INK):(inv?'#ff4a3d':'#e0362e')):null,
    steel:inv?'#d5dbe0':'#8f99a3', wood:inv?'#d8a874':'#7a5230', name:r.name, tagCol:isInk?(inv?'#f4f4f0':INK):r.color};
}
function drawFigure(s,lk,lw,vx,T,ghost){
  ctx.lineCap='round';ctx.lineJoin='round';
  const col=lk.col, back=ghost?col:lk.back, noHead=s.noHead;
  const line=(pts,c,w=lw)=>{ctx.strokeStyle=c;ctx.lineWidth=w;ctx.beginPath();ctx.moveTo(pts[0].x,pts[0].y);for(let i=1;i<pts.length;i++)ctx.lineTo(pts[i].x,pts[i].y);ctx.stroke();};
  line([s.neck,s.e2,s.h2],back); line([s.hip,s.k2,s.f2],back); line([s.hip,s.neck],col);
  if(!noHead){ctx.fillStyle=col;ctx.beginPath();ctx.arc(s.head.x,s.head.y,L.head,0,Math.PI*2);ctx.fill();}
  if(lk.band&&!ghost&&!noHead){
    const bx=s.head.x-s.f*6, by=s.head.y-3; ctx.strokeStyle=lk.band;ctx.lineWidth=lw*.8;
    ctx.beginPath();ctx.moveTo(s.head.x-L.head,by+1);ctx.lineTo(s.head.x+L.head,by+1);ctx.stroke();
    const flow=Math.max(-1,Math.min(1,-vx/260)); const dir=Math.abs(flow)>.15?Math.sign(flow):-s.f;
    for(let j=0;j<2;j++){const len=16+j*5+Math.abs(flow)*12, lift=Math.abs(flow)*10+Math.sin(T*22+j*2)*3;
      ctx.beginPath();ctx.moveTo(bx,by);ctx.quadraticCurveTo(bx+dir*len*.5,by-lift*.6+j*3,bx+dir*len,by+10-lift+j*5);ctx.stroke();}
  }
  line([s.hip,s.k1,s.f1],col);
  if(s.w){
    if(s.w==='axe'){ line([s.butt,s.tip],ghost?col:lk.wood,lw*.75);
      const u={x:s.ux,y:s.uy}, n=s.bn, A={x:s.tip.x-u.x*17,y:s.tip.y-u.y*17}, B={x:s.tip.x-u.x*1,y:s.tip.y-u.y*1};
      ctx.fillStyle=ghost?col:lk.steel; ctx.strokeStyle=col; ctx.lineWidth=lw*.35;
      ctx.beginPath(); ctx.moveTo(A.x+n.x*2,A.y+n.y*2); ctx.lineTo(A.x+n.x*15-u.x*6,A.y+n.y*15-u.y*6);
      ctx.quadraticCurveTo((A.x+B.x)/2+n.x*24,(A.y+B.y)/2+n.y*24,B.x+n.x*15+u.x*6,B.y+n.y*15+u.y*6);
      ctx.lineTo(B.x+n.x*2,B.y+n.y*2); ctx.closePath(); ctx.fill(); ctx.stroke();
      const M={x:(A.x+B.x)/2,y:(A.y+B.y)/2}; ctx.beginPath(); ctx.moveTo(A.x-n.x*2+u.x*3,A.y-n.y*2+u.y*3); ctx.lineTo(M.x-n.x*9,M.y-n.y*9); ctx.lineTo(B.x-n.x*2-u.x*3,B.y-n.y*2-u.y*3); ctx.closePath(); ctx.fill(); ctx.stroke(); }
    else{ const g={x:s.h1.x+s.ux*3,y:s.h1.y+s.uy*3};
      line([s.butt,g],col,lw*.85); line([g,s.tip],ghost?col:lk.steel,lw*.5);
      line([{x:g.x-s.uy*7,y:g.y+s.ux*7},{x:g.x+s.uy*7,y:g.y-s.ux*7}],col,lw*.55); }
  }
  line([s.neck,s.e1,s.h1],col);
}
function impactPoint(e){
  if(e.type==='wclash'||e.type==='grind'){const a=sk(e.a,e.t),b=sk(e.b,e.t),pa=a.tip||a.h1,pb=b.tip||b.h1;return {x:(pa.x+pb.x)/2,y:(pa.y+pb.y)/2};}
  if(e.type==='thud'&&e.j){const p=sk(e.fid,e.t)[e.j];return {x:p.x,y:-6};}
  if(e.who&&!e.j){const h=sk(e.who,e.t).hip;return {x:h.x,y:h.y-6};}
  if(e.mid){const a=sk(e.a,e.t),b=sk(e.b,e.t);return {x:(a.hip.x+b.hip.x)/2,y:(a.hip.y+b.hip.y)/2-12};}
  const s=sk(e.fid,e.t); return s[e.j]||s.h1;
}
const PAL={day:{bg:'#fbfbf9',ink:'#111',ground:'#111',burst:'#111',core:'#e0362e'},
           inv:{bg:'#0d0d0d',ink:'#f4f4f0',ground:'#f4f4f0',burst:'#f4f4f0',core:'#ff4a3d'}};
let beheadOn=true;
function headlessAt(id,T){ for(const e of TL.fx){ if(e.type==='behead'&&e.who===id&&T>=e.t){ const r=TL.fx.find(x=>x.type==='reattach'&&x.who===id&&x.t>e.t); if(!r||T<r.t) return e; } } return null; }
function headPath(e){ if(e._path) return e._path; const s=sk(e.who,e.t), a=sk(e.att,e.t), dir=Math.sign(s.hip.x-a.hip.x)||1;
  let x=s.head.x,y=s.head.y,vx=dir*(70+rnd(e.t*97)*40),vy=-210,ang=0,out=[]; const dt=1/240;
  for(let k=0;k<240*6;k++){ vy+=700*dt; x+=vx*dt; y+=vy*dt;
    if(y>-L.head){ y=-L.head; if(Math.abs(vy)>40){vy=-vy*.42; vx*=.78;} else vy=0; vx*=(1-2.2*dt); }
    ang+=vx*dt/L.head; if(k%4===0) out.push({x,y,ang}); }
  return e._path=out; }
function segAt(T){for(const s of TL.segs) if(T>=s.T0&&T<s.T1) return s; return null;}
function drawTitle(T){
  if(T>1.8) return;
  const r=roster, inA=Math.min(1,T/.3), eIn=1-Math.pow(1-inA,3), out=Math.max(0,Math.min(1,(T-1.35)/.4)), eOut=out*out;
  const bh=H*.2, o1=(-1+eIn)*W-eOut*W*1.1, o2=(1-eIn)*W+eOut*W*1.1, sk=H*.06;
  const hero=r[0], foes=r.slice(1);
  const accent=id=>{const x=rosterMap[id]; return x.color===INK?'#e0362e':x.color;};
  ctx.save();
  // band 1: hero
  let y=H*.27; ctx.fillStyle='#0d0d0d';
  ctx.beginPath();ctx.moveTo(o1-60,y);ctx.lineTo(o1+W*.8+sk,y);ctx.lineTo(o1+W*.8-sk,y+bh);ctx.lineTo(o1-60,y+bh);ctx.closePath();ctx.fill();
  ctx.fillStyle=accent(hero.id);ctx.fillRect(o1-60,y+bh-H*.012,W*.8,H*.012);
  ctx.fillStyle='#f4f4f0';ctx.textBaseline='middle';ctx.textAlign='left';
  let fs=H*.13; ctx.font=`${fs}px Anton, Impact, sans-serif`; const n1=hero.name||'HERO';
  const w1=ctx.measureText(n1).width; if(w1>W*.55){fs*=W*.55/w1;ctx.font=`${fs}px Anton, Impact, sans-serif`;}
  ctx.fillText(n1,o1+W*.08,y+bh*.52);
  // band 2: opponents
  y=H*.53; ctx.fillStyle='#0d0d0d';
  ctx.beginPath();ctx.moveTo(o2+W*.2+sk,y);ctx.lineTo(o2+W+60,y);ctx.lineTo(o2+W+60,y+bh);ctx.lineTo(o2+W*.2-sk,y+bh);ctx.closePath();ctx.fill();
  const segw=W*.8/Math.max(1,foes.length); foes.forEach((f,i)=>{ctx.fillStyle=accent(f.id);ctx.fillRect(o2+W*.2+i*segw,y+bh-H*.012,segw,H*.012);});
  ctx.fillStyle='#f4f4f0';ctx.textAlign='right';fs=H*.13; ctx.font=`${fs}px Anton, Impact, sans-serif`;
  const n2=foes.map(f=>f.name||'?').join(' · '); const w2=ctx.measureText(n2).width; if(w2>W*.6){fs*=W*.6/w2;ctx.font=`${fs}px Anton, Impact, sans-serif`;}
  ctx.fillText(n2,o2+W*.92,y+bh*.52);
  // VS stamp
  const s=Math.max(0,Math.min(1,(T-.28)/.22)); if(s>0){const c1=1.70158,c3=c1+1,pop=1+c3*Math.pow(s-1,3)+c1*Math.pow(s-1,2);
    const rr=H*.09*pop*(1-eOut); if(rr>1){ctx.fillStyle='#e0362e';ctx.beginPath();ctx.arc(W/2,H*.5,rr,0,Math.PI*2);ctx.fill();
      ctx.strokeStyle='#0d0d0d';ctx.lineWidth=H*.008;ctx.stroke();
      ctx.fillStyle='#fff';ctx.textAlign='center';ctx.font=`${rr*.95}px Anton, Impact, sans-serif`;ctx.fillText('VS',W/2,H*.505);}}
  ctx.restore();
}
function frame(T){
  const ids=TL.ids, S={}; ids.forEach(i=>{S[i]=sk(i,T); if(headlessAt(i,T)) S[i].noHead=true;});
  let inv=false; for(const e of TL.fx) if(e.inv&&T>=e.t&&T<e.t+e.inv) inv=true;
  const c=inv?PAL.inv:PAL.day, LK={}; ids.forEach(i=>LK[i]=lookOf(i,inv));
  // camera: follow the active pair, widen to keep the whole group in frame when it fits
  const sg=segAt(T); const pr=(sg&&sg.pair)||['A',ids[1]];
  const pa=S[pr[0]], pb=S[pr[1]]||S[pr[0]];
  let midX=(pa.hip.x+pb.hip.x)/2; const dist=Math.abs(pa.hip.x-pb.hip.x);
  let topY=0; ids.forEach(i=>{const s=S[i];topY=Math.min(topY,s.head.y,s.f1.y,s.f2.y,s.h1.y,s.tip?s.tip.y:0);}); topY-=24;
  let tw=Math.max(420,Math.min(640,dist+260),-topY/.36);
  if(ids.length>2){let lo=1e9,hi=-1e9;ids.forEach(i=>{lo=Math.min(lo,S[i].hip.x);hi=Math.max(hi,S[i].hip.x);});
    const wa=hi-lo+170; if(wa<=900&&wa>tw){tw=wa;midX=(lo+hi)/2;} }
  tw*=camZoom;
  if(snapCam){cam.x=midX;cam.w=tw;snapCam=false;} else {cam.x+=(midX-cam.x)*.1;cam.w+=(tw-cam.w)*.06;}
  let shx=0,shy=0,zoom=1;
  TL.fx.forEach((e,i)=>{const d=T-e.t; if(d<0||d>.6) return;
    const k=e.type==='wclash'?1:e.type==='quake'?2.8:e.type==='clash'?2.2:e.type==='heavy'?1.5:e.type==='thud'?1.2:e.type==='hit'?.8:e.type==='block'?.7:e.type==='land'?.35:0;
    if(!k) return; const a=k*(e.s||1)*6*Math.exp(-d*8); shx+=a*Math.sin(d*97+i); shy+=a*Math.cos(d*83+i*2);
    if(e.big) zoom+= .14*Math.exp(-d*4)*Math.max(1,e.s||1)/1.5; });
  const slowNow=speedAt(T)<.3, sc=W/cam.w*zoom;
  ctx.setTransform(dpr,0,0,dpr,0,0);
  ctx.fillStyle=c.bg;ctx.fillRect(0,0,W,H);
  TL.fx.forEach(e=>{ if(e.type!=='matrixfx') return; const d=T-e.t; if(d<0||d>e.dur) return;
    const fade=Math.min(1,d/.15,(e.dur-d)/.2); const cols=Math.ceil(W/22), fs=Math.max(10,H*.024), gl='01アイウエオカキクケコサシスセソ';
    ctx.save(); ctx.font=`${fs}px "IBM Plex Mono", ui-monospace, monospace`; ctx.textAlign='center';
    for(let k=0;k<cols;k++){ const sp=H*(.12+rnd(k*3)*.25), y0=(T*sp+rnd(k)*H)%(H*1.4)-H*.2;
      for(let j=0;j<10;j++){ const y=y0-j*fs*1.15; if(y<-fs||y>H) continue;
        ctx.globalAlpha=fade*(j===0?.7:.42*(1-j/10)); ctx.fillStyle=j===0?'#3fcf7a':'#1f9d55';
        ctx.fillText(gl[Math.floor(rnd(k*31+j*7+Math.floor(T*14))*gl.length)],k*22+11,y); } }
    ctx.restore(); });
  ctx.save(); ctx.translate(W/2+shx,H*.8+shy);ctx.scale(sc,sc);ctx.translate(-cam.x,0);
  const x0=cam.x-cam.w, x1=cam.x+cam.w;
  ctx.strokeStyle=c.ground;ctx.lineWidth=2.2;ctx.beginPath();ctx.moveTo(x0,0);ctx.lineTo(x1,0);ctx.stroke();
  ctx.lineWidth=1.1;ctx.globalAlpha=.35;
  for(let gx=Math.floor(x0/37)*37;gx<x1;gx+=37){const o=rnd(gx)*14;ctx.beginPath();ctx.moveTo(gx+o,7+rnd(gx+1)*8);ctx.lineTo(gx+o+6+rnd(gx+2)*10,7+rnd(gx+1)*8);ctx.stroke();}
  ctx.globalAlpha=1;
  const anchor=e=>e.who?sk(e.who,e.t).hip:{x:sk(e.fid,e.t)[e.j].x};
  TL.fx.forEach((e,i)=>{ if(e.type!=='thud'||T<e.t) return; const d=T-e.t; if(d>2.5) return; const s={hip:anchor(e)};
    ctx.strokeStyle=c.ground;ctx.lineWidth=1.3;ctx.globalAlpha=Math.min(1,(2.5-d))*.8;
    for(let j=0;j<5;j++){ctx.beginPath();let px=s.hip.x+(j-2)*9,py=0;ctx.moveTo(px,py);for(let q=0;q<3;q++){px+=(j-2)*5+(rnd(i*9+j*3+q)-.5)*10;py+=3+rnd(j+q)*4;ctx.lineTo(px,py);}ctx.stroke();}
    ctx.globalAlpha=1;});
  ids.forEach(i=>{const s=S[i],h=Math.max(0,-s.hip.y-48);ctx.fillStyle=c.ground;ctx.globalAlpha=Math.max(.05,.16-h*.0008);ctx.beginPath();ctx.ellipse(s.hip.x,1,Math.max(8,22-h*.08),3,0,0,Math.PI*2);ctx.fill();});
  ctx.globalAlpha=1;
  const V={}; ids.forEach(i=>{const p=sk(i,T-.03); V[i]={vx:(S[i].hip.x-p.hip.x)/.03, hx:(S[i].head.x-p.head.x)/.03};});
  ids.forEach(i=>{const s=S[i],vx=V[i].vx;
    if(Math.abs(vx)>200){ctx.strokeStyle=c.ink;ctx.lineWidth=1.3;ctx.globalAlpha=Math.min(.55,(Math.abs(vx)-200)/500);const fr=Math.floor(T*30);
      for(let j=0;j<6;j++){const yy=s.hip.y-44+j*13+rnd(j+fr)*6,d=-Math.sign(vx),st=s.hip.x+d*(22+rnd(j*3)*10);ctx.beginPath();ctx.moveTo(st,yy);ctx.lineTo(st+d*(30+rnd(j*7+fr)*50),yy);ctx.stroke();}
      ctx.globalAlpha=1;}});
  TL.fx.forEach((e,i)=>{ if(e.type!=='land'&&e.type!=='thud') return; const d=T-e.t; if(d<0||d>.7) return;
    const s={hip:anchor(e)}, big=e.type==='thud', n=big?14:8, p=d/.7;
    ctx.strokeStyle=c.ink;ctx.lineWidth=1.3;ctx.globalAlpha=(1-p)*.55;
    for(let j=0;j<n;j++){const side=j%2?1:-1,sp=(18+rnd(i*31+j)*40)*(big?1.6:1);ctx.beginPath();ctx.arc(s.hip.x+side*(6+sp*Math.sqrt(p)),-2-rnd(j+i)*10*p-(big?8:0)*p,2+p*(4+rnd(j*9)*5),0,Math.PI*2);ctx.stroke();}
    ctx.globalAlpha=1;});
  // weapon swoosh arcs
  ids.forEach(i=>{ if(!TL.wpn[i]) return; const N=14, pts=[]; let len=0;
    for(let k=0;k<N;k++){const s=k?sk(i,T-k*.009*Math.max(1,effRate*.6)):S[i]; const ml=TL.wpn[i]==='axe'?.45:.3;
      pts.push({t:s.tip,m:{x:s.h1.x+(s.tip.x-s.h1.x)*ml,y:s.h1.y+(s.tip.y-s.h1.y)*ml}}); if(k) len+=Math.hypot(pts[k].t.x-pts[k-1].t.x,pts[k].t.y-pts[k-1].t.y);}
    if(len<45) return; const a0=Math.min(1,(len-45)/80);
    ctx.fillStyle=c.ink;
    for(let k=1;k<N;k++){ctx.globalAlpha=.2*a0*(1-k/N);ctx.beginPath();ctx.moveTo(pts[k-1].t.x,pts[k-1].t.y);ctx.lineTo(pts[k].t.x,pts[k].t.y);ctx.lineTo(pts[k].m.x,pts[k].m.y);ctx.lineTo(pts[k-1].m.x,pts[k-1].m.y);ctx.closePath();ctx.fill();}
    ctx.globalAlpha=.7*a0;ctx.strokeStyle=c.ink;ctx.lineWidth=1.6;ctx.beginPath();ctx.moveTo(pts[0].t.x,pts[0].t.y);for(let k=1;k<N;k++)ctx.lineTo(pts[k].t.x,pts[k].t.y);ctx.stroke();
    if(TL.wpn[i]==='sword'){ const fr=Math.floor(T*50); ctx.fillStyle=c.core;
      for(let k=1;k<N;k++) for(let q=0;q<2;q++){ const r=rnd(k*13+q*7+fr); if(r<.45) continue; const p=pts[k].t, j=(rnd(k*5+q+fr)-.5)*10;
        ctx.globalAlpha=a0*(1-k/N)*.9; ctx.beginPath(); ctx.arc(p.x+j,p.y+(rnd(k+q*3+fr)-.5)*10+k*.6,.8+r*1.6,0,Math.PI*2); ctx.fill(); } }
    ctx.globalAlpha=1;});
  // ghosts, then fighters (downed ones first so standing fighters read on top)
  const gstep=.018*Math.max(1,effRate*.7), gn=effRate>1.6?6:4;
  for(let k=gn;k>=1;k--){ctx.globalAlpha=.16/Math.sqrt(k)/(gn/4); ids.forEach(i=>{const g=sk(i,T-k*gstep); if(headlessAt(i,T-k*gstep)) g.noHead=true; drawFigure(g,{col:LK[i].col},4.4,0,T,true);});}
  ctx.globalAlpha=1;
  const isDown=s=>Math.abs(((s.rot%360)+540)%360-180)>45;
  const order=[...ids].sort((a,b)=>isDown(S[b])-isDown(S[a])||(a==='A')-(b==='A'));
  order.forEach(i=>drawFigure(S[i],LK[i],4.4,V[i].hx,T,false));
  // severed heads: arc, bounce and roll; neck spurts for a moment after the cut
  TL.fx.forEach((e,i)=>{ if(e.type!=='behead'||T<e.t) return; const r=TL.fx.find(x=>x.type==='reattach'&&x.who===e.who&&x.t>e.t); if(r&&T>=r.t) return;
    const path=headPath(e), q=path[Math.min(path.length-1,Math.floor((T-e.t)*60))], lk=LK[e.who];
    ctx.save(); ctx.translate(q.x,q.y); ctx.rotate(q.ang);
    ctx.fillStyle=lk.col; ctx.beginPath(); ctx.arc(0,0,L.head,0,Math.PI*2); ctx.fill();
    if(lk.band){ctx.strokeStyle=lk.band;ctx.lineWidth=3.5;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(-L.head,-3);ctx.lineTo(L.head,-3);ctx.stroke();ctx.beginPath();ctx.moveTo(-L.head+2,-3);ctx.lineTo(-L.head-8,2);ctx.stroke();}
    ctx.strokeStyle=c.bg; ctx.lineWidth=1.4; [[-3.5,1],[3.5,1]].forEach(([ex,ey])=>{ctx.beginPath();ctx.moveTo(ex-1.8,ey-1.8);ctx.lineTo(ex+1.8,ey+1.8);ctx.moveTo(ex+1.8,ey-1.8);ctx.lineTo(ex-1.8,ey+1.8);ctx.stroke();});
    ctx.fillStyle=c.core; ctx.beginPath(); ctx.arc(0,L.head-1,3.2,0,Math.PI*2); ctx.fill();
    ctx.restore();
    const d=T-e.t; ctx.fillStyle=c.core;
    for(let k=0;k<22;k++){ const te=k*.04; if(te>d||te>.85) break; const age=d-te; if(age>1.2) continue;
      const nk=sk(e.who,e.t+te).neck, vx=(rnd(k*7+i)-.5)*90, vy=-(120+rnd(k*3+i)*120)*(1-te), x=nk.x+vx*age, y=nk.y+vy*age+600*age*age/2;
      if(y<0){ctx.globalAlpha=Math.max(0,1-age); ctx.beginPath(); ctx.arc(x,y,1.4+rnd(k)*1.6,0,Math.PI*2); ctx.fill();}
      else {ctx.globalAlpha=Math.max(0,.8*(1-age/1.2)); ctx.beginPath(); ctx.ellipse(nk.x+vx*age*.7,1,2.6,.8,0,0,Math.PI*2); ctx.fill();} }
    ctx.globalAlpha=1; });
  TL.fx.forEach(e=>{ if(e.type!=='reattach') return; const d=T-e.t; if(d<0||d>.45) return; const s=S[e.who], p=d/.45;
    ctx.strokeStyle=c.ink; ctx.lineWidth=1.3; ctx.globalAlpha=1-p;
    for(let j=0;j<9;j++){const a=j/9*Math.PI*2; ctx.beginPath(); ctx.arc(s.head.x+Math.cos(a)*(8+p*22),s.head.y+Math.sin(a)*(8+p*22),2+p*4,0,Math.PI*2); ctx.stroke();}
    ctx.globalAlpha=1; });
  if(showTags&&(!showTitle||T>1.75)){ ctx.textAlign='center';ctx.textBaseline='alphabetic';ctx.font='600 9px "IBM Plex Mono", ui-monospace, monospace';
    ids.forEach(i=>{const s=S[i],y=Math.min(s.head.y,s.hip.y)-16; ctx.fillStyle=LK[i].tagCol; ctx.fillText(LK[i].name||'',s.head.x,y);}); }
  // signature and weapon fx
  TL.fx.forEach((e,i)=>{
    if(e.type==='charge'){const d=T-e.t; if(d<0||d>e.dur+.1) return; const s=sk(e.fid,T); const cx=(s.h1.x+s.h2.x)/2, cy=(s.h1.y+s.h2.y)/2, g=Math.min(1,d/e.dur);
      ctx.save();ctx.translate(cx,cy);ctx.strokeStyle=c.ink;ctx.lineWidth=1.2;const fr=Math.floor(T*40);
      for(let j=0;j<10;j++){const a=rnd(j+fr)*Math.PI*2,r0=40*(1-g)+14,r1=r0+14;ctx.globalAlpha=.6;ctx.beginPath();ctx.moveTo(Math.cos(a)*r1,Math.sin(a)*r1);ctx.lineTo(Math.cos(a)*r0,Math.sin(a)*r0);ctx.stroke();}
      ctx.globalAlpha=1;ctx.fillStyle=c.core;ctx.beginPath();ctx.arc(0,0,3+9*g+Math.sin(T*60)*1.2,0,Math.PI*2);ctx.fill();
      ctx.lineWidth=1.4;for(let j=0;j<3;j++){ctx.beginPath();ctx.arc((rnd(j+fr)-.5)*3,(rnd(j*5+fr)-.5)*3,(6+12*g)+j*3,0,Math.PI*2);ctx.stroke();}
      ctx.restore();}
    if(e.type==='proj'){ if(T<e.t||T>e.t1) return; const a=sk(e.fid,e.t)[e.j], b=e.tj?sk(e.tfid,e.t1)[e.tj]:{x:e.tx,y:e.ty}; const u=(T-e.t)/(e.t1-e.t), R0=13*(e.s||1);
      const px=a.x+(b.x-a.x)*u, py=a.y+(b.y-a.y)*u, dir=Math.sign(b.x-a.x)||1, fr=Math.floor(T*40);
      ctx.save();ctx.strokeStyle=c.ink;ctx.lineWidth=1.3;
      if(e.ripple){for(let k=1;k<=4;k++){ctx.globalAlpha=.55/k;ctx.lineWidth=1.2;ctx.beginPath();ctx.ellipse(px-dir*k*16,py,2+k*1.5,R0*.6+k*5,0,0,Math.PI*2);ctx.stroke();}}
      for(let j=0;j<7;j++){const yy=py+(rnd(j+fr)-.5)*22*(e.s||1);ctx.globalAlpha=.6;ctx.beginPath();ctx.moveTo(px-dir*10,yy);ctx.lineTo(px-dir*(30+rnd(j*3+fr)*50),yy);ctx.stroke();}
      for(let k=3;k>=1;k--){ctx.globalAlpha=.18;ctx.fillStyle=c.core;ctx.beginPath();ctx.arc(px-dir*k*10,py,Math.max(2,R0-k*2),0,Math.PI*2);ctx.fill();}
      ctx.globalAlpha=1;ctx.fillStyle=c.core;ctx.beginPath();ctx.arc(px,py,R0,0,Math.PI*2);ctx.fill();
      ctx.lineWidth=1.6;for(let j=0;j<3;j++){ctx.beginPath();ctx.ellipse(px,py,R0+2+j*3,R0-2+j*4,rnd(j+fr)*3,0,Math.PI*2);ctx.stroke();}
      ctx.restore();}
    if(e.type==='quake'){const d=T-e.t; if(d<0||d>1.4) return; const h=sk(e.fid,e.t)[e.j]; const p=d/1.4;
      ctx.save();ctx.strokeStyle=c.ink;
      for(let r=0;r<3;r++){const q=Math.max(0,p*1.4-r*.15); if(q<=0||q>1) continue; ctx.globalAlpha=(1-q)*.9;ctx.lineWidth=2.4-r*.5;ctx.beginPath();ctx.ellipse(h.x,0,20+q*260,4+q*10,0,0,Math.PI*2);ctx.stroke();}
      ctx.globalAlpha=Math.max(0,1-p);ctx.lineWidth=1.6;
      for(let j=0;j<10;j++){const side=j%2?1:-1;let px=h.x,py=0;ctx.beginPath();ctx.moveTo(px,py);for(let q=0;q<4;q++){px+=side*(8+rnd(i*7+j*3+q)*14);py+=(rnd(j*5+q)-.3)*6;ctx.lineTo(px,py);}ctx.stroke();}
      ctx.fillStyle=c.ink;for(let j=0;j<16;j++){const side=j%2?1:-1,vx=side*(40+rnd(j*11)*160),vy=-(120+rnd(j*13)*200),tt=d*.9;const x=h.x+vx*tt*.5,y=vy*tt+260*tt*tt; if(y>0) continue; ctx.globalAlpha=Math.max(0,1-p*1.3);ctx.fillRect(x-1.5,y-1.5,3+rnd(j)*3,3+rnd(j*2)*3);}
      ctx.restore();}
    if(e.type==='cut'){const d=T-e.t; if(d<0||d>1.15) return; const a=sk(e.fid,e.t-.13), b=sk(e.fid,e.t+.03);
      const y=(a.hip.y+b.hip.y)/2-36, xa=a.hip.x, xb=b.hip.x, dir=Math.sign(xb-xa)||1, al=d<.85?1:1-(d-.85)/.3;
      ctx.save();ctx.globalAlpha=al;ctx.strokeStyle=c.ink;ctx.lineWidth=2.4*(1-d*.4);ctx.lineCap='round';
      ctx.beginPath();ctx.moveTo(xa-dir*30,y+6);ctx.lineTo(xb+dir*40,y-6);ctx.stroke();
      ctx.strokeStyle=c.core;ctx.lineWidth=.9;ctx.beginPath();ctx.moveTo(xa-dir*20,y+5);ctx.lineTo(xb+dir*30,y-5);ctx.stroke();ctx.restore();}
  });
  // sword hits: red ink spray that arcs, falls and leaves splats
  TL.fx.forEach((e,i)=>{ if((e.wpn!=='sword'&&e.wpn!=='axe')||(e.type!=='hit'&&e.type!=='heavy')) return; const d=T-e.t; if(d<0||d>3.2) return;
    const ip=impactPoint(e), att=sk(e.fid,e.t), dir=Math.sign(ip.x-att.hip.x)||1, dn=e.def?sk(e.def,e.t):null,
      pt=dn?{x:(dn.neck.x+dn.hip.x)/2-dir*4,y:Math.max(ip.y,(dn.neck.y*2+dn.hip.y)/3)}:ip, n=Math.round((e.type==='heavy'?26:14)*Math.min(1.6,e.s||1)), G=620;
    ctx.fillStyle=c.core;
    for(let j=0;j<n;j++){
      const sp=90+rnd(i*31+j)*260, ang=(-.15-rnd(i*17+j*3)*1.1), vx=dir*Math.cos(ang)*sp*(.6+rnd(j*7)*.6), vy=Math.sin(ang)*sp;
      const sz=1+rnd(i+j*11)*2.4;
      // time until this droplet reaches the ground (y=0) from pt.y
      const a=G/2,b=vy,cc=pt.y, tg=(-b+Math.sqrt(Math.max(0,b*b-4*a*cc)))/(2*a);
      if(d<tg){ const x=pt.x+vx*d, y=pt.y+vy*d+G*d*d/2, vyy=vy+G*d, sp2=Math.hypot(vx,vyy)||1;
        ctx.globalAlpha=Math.min(1,1.4-d); ctx.beginPath(); ctx.ellipse(x,y,sz*1.9,sz*.8,Math.atan2(vyy,vx),0,Math.PI*2); ctx.fill(); }
      else { const gx=pt.x+vx*tg; ctx.globalAlpha=Math.max(0,.85*(1-(d-tg)/2.6)); ctx.beginPath(); ctx.ellipse(gx,1,sz*1.8,sz*.55,0,0,Math.PI*2); ctx.fill(); }
    }
    ctx.globalAlpha=1; });
  // weapon clashes: white-hot sparks, a flash star, and a grinding spark trickle while blades are bound
  TL.fx.forEach((e,i)=>{
    if(e.type==='wclash'){const d=T-e.t; if(d<0||d>.55) return; const pt=impactPoint(e), p=d/.55, s=e.s||1;
      ctx.save(); ctx.translate(pt.x,pt.y);
      if(d<.08){ctx.globalAlpha=1-d/.08; ctx.fillStyle=c.bg===PAL.day.bg?'#fff6c2':'#fff'; ctx.beginPath(); for(let j=0;j<16;j++){const a=j/16*Math.PI*2, r=(j%2?4:26)*s; ctx.lineTo(Math.cos(a)*r,Math.sin(a)*r);} ctx.closePath(); ctx.fill(); ctx.strokeStyle=c.ink; ctx.lineWidth=1.2; ctx.stroke();}
      for(let j=0;j<22;j++){const a=rnd(i*13+j)*Math.PI*2, sp=(60+rnd(i*7+j*3)*200)*s, x=Math.cos(a)*sp*d, y=Math.sin(a)*sp*d+300*d*d, l=6+rnd(j)*8;
        ctx.globalAlpha=Math.max(0,1-p*1.1); ctx.strokeStyle=j%3?'#f2b21b':c.core; ctx.lineWidth=1.6; ctx.beginPath(); ctx.moveTo(x,y); ctx.lineTo(x-Math.cos(a)*l,y-Math.sin(a)*l+ (600*d)*.01); ctx.stroke();}
      ctx.restore();}
    if(e.type==='grind'){const d=T-e.t; if(d<0||d>e.dur) return; const pt=impactPoint({...e,t:T}); const fr=Math.floor(T*60);
      ctx.save(); ctx.translate(pt.x,pt.y);
      for(let j=0;j<8;j++){const a=-Math.PI/2+(rnd(j+fr)-.5)*2.6, r0=2, r1=8+rnd(j*3+fr)*16; ctx.globalAlpha=.9; ctx.strokeStyle=j%2?'#f2b21b':c.core; ctx.lineWidth=1.3;
        ctx.beginPath(); ctx.moveTo(Math.cos(a)*r0,Math.sin(a)*r0); ctx.lineTo(Math.cos(a)*r1,Math.sin(a)*r1); ctx.stroke();}
      ctx.restore();}
  });
  // impacts
  TL.fx.forEach((e,i)=>{ if(!['hit','heavy','block','clash'].includes(e.type)) return; const d=T-e.t; const dur=e.type==='clash'?.45:.32; if(d<0||d>dur) return;
    const pt=impactPoint(e), p=d/dur, s=(e.s||1)*(e.type==='heavy'?1.25:e.type==='clash'?1.3:1);
    ctx.save();ctx.translate(pt.x,pt.y);ctx.globalAlpha=1-p*p;
    if(e.type==='block'){ctx.strokeStyle=c.burst;ctx.lineWidth=2;for(let j=0;j<8;j++){const a=-Math.PI/2+(j-3.5)*.35;const r0=6+p*20,r1=r0+14*(1-p);ctx.beginPath();ctx.moveTo(Math.cos(a)*r0,Math.sin(a)*r0);ctx.lineTo(Math.cos(a)*r1,Math.sin(a)*r1);ctx.stroke();}}
    else{ if(e.wpn==='sword'){ctx.strokeStyle=c.core;ctx.lineWidth=2.6*(1-p);ctx.beginPath();ctx.moveTo(-26*s,14*s);ctx.lineTo(26*s,-14*s);ctx.stroke();}
      ctx.fillStyle=c.core;ctx.beginPath();const sp=9;for(let j=0;j<sp*2;j++){const a=j/(sp*2)*Math.PI*2+i;const r=(j%2?5:14+rnd(i*5+j)*9)*s*(.5+p*.9);ctx.lineTo(Math.cos(a)*r,Math.sin(a)*r);}ctx.closePath();ctx.fill();
      ctx.strokeStyle=c.burst;ctx.lineWidth=1.9;for(let j=0;j<14;j++){const a=j/14*Math.PI*2+rnd(i+j)*.3;const r0=(16+p*34)*s,r1=r0+(10+rnd(j*3+i)*16)*s*(1-p);ctx.beginPath();ctx.moveTo(Math.cos(a)*r0,Math.sin(a)*r0);ctx.lineTo(Math.cos(a)*r1,Math.sin(a)*r1);ctx.stroke();}
      ctx.lineWidth=1.4;ctx.beginPath();ctx.arc(0,0,(10+p*50)*s,0,Math.PI*2);ctx.stroke();}
    ctx.restore();});
  ctx.restore();
  if(slowNow){ const e=TL.fx.find(e=>e.slow&&T>=e.slow[0]&&T<e.slow[1]); if(e&&!e.bt){const pt=impactPoint(e);
    const px=W/2+shx+(pt.x-cam.x)*sc, py=H*.8+shy+pt.y*sc; const fr=Math.floor(T*40);
    ctx.fillStyle=c.ink;ctx.globalAlpha=.85;const R=Math.hypot(W,H);
    for(let j=0;j<70;j++){const a=j/70*Math.PI*2+rnd(j+fr)*.05, w=.004+rnd(j*3+fr)*.01, r0=R*(.32+rnd(j*7+fr)*.18);
      ctx.beginPath();ctx.moveTo(px+Math.cos(a)*r0,py+Math.sin(a)*r0);ctx.lineTo(px+Math.cos(a-w)*R,py+Math.sin(a-w)*R);ctx.lineTo(px+Math.cos(a+w)*R,py+Math.sin(a+w)*R);ctx.closePath();ctx.fill();}
    ctx.globalAlpha=1;}
    ctx.fillStyle='#0d0d0d';const h=H*.07;ctx.fillRect(0,0,W,h);ctx.fillRect(0,H-h,W,h);}
  if(T>TL.end-.6){ctx.fillStyle=`rgba(251,251,249,${Math.min(1,(T-(TL.end-.6))/.5)})`;ctx.fillRect(0,0,W,H);}
  if(T<.2){ctx.fillStyle=`rgba(251,251,249,${1-T/.2})`;ctx.fillRect(0,0,W,H);}
  if(showTitle) drawTitle(T);
  if(recording) drawWatermark();
}
// small "Made with StickMan Gen" credit, burned into exported videos only
function drawWatermark(){
  const fs=Math.round(H*.022), pad=Math.round(fs*.55), m=Math.round(H*.03), txt='Made with StickMan Gen';
  ctx.save(); ctx.setTransform(dpr,0,0,dpr,0,0);
  ctx.font=`600 ${fs}px "IBM Plex Sans", system-ui, sans-serif`; ctx.textBaseline='middle'; ctx.textAlign='left';
  const tw=ctx.measureText(txt).width, bw=tw+pad*2, bh=fs+pad*1.2, x=W-m-bw, y=H-m-bh;
  ctx.globalAlpha=.55; ctx.fillStyle='#111111'; ctx.beginPath();
  if(ctx.roundRect) ctx.roundRect(x,y,bw,bh,bh/2); else ctx.rect(x,y,bw,bh); ctx.fill();
  ctx.globalAlpha=.95; ctx.fillStyle='#fbfbf9'; ctx.fillText(txt,x+pad,y+bh/2);
  ctx.restore();
}

/* ================= STATE & UI ================= */
const $=id=>document.getElementById(id);
const ls={get:k=>{try{return localStorage.getItem(k);}catch(_){return null;}},set:(k,v)=>{try{localStorage.setItem(k,v);}catch(_){}}};
const COLORS=[['#111111','Ink'],['#c62d25','Red'],['#1f4e8c','Blue'],['#23703f','Green'],['#b8860b','Gold'],['#6a3d9a','Purple']];
const DEFAULTS={A:{name:'RED',color:'#111111',band:true},B:{name:'INK',color:'#111111',band:false},C:{name:'ASH',color:'#1f4e8c',band:false},D:{name:'GRIM',color:'#23703f',band:false}};
const ICON={
  play:'<svg viewBox="0 0 24 24"><path d="M7 4l13 8-13 8z"/></svg>',
  pause:'<svg viewBox="0 0 24 24"><path d="M6 4h4v16H6zM14 4h4v16h-4z"/></svg>',
  snd:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5L6 9H3v6h3l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13"/></svg>',
  mute:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5L6 9H3v6h3l5 4z"/><path d="M22 9l-6 6M16 9l6 6"/></svg>',
  x:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>'};
let roster=null, rosterMap={};
try{const r=JSON.parse(ls.get('stickman-roster')||'null'); if(Array.isArray(r)&&r.length>=2&&r[0].id==='A') roster=r.filter(x=>'ABCD'.includes(x.id));}catch(_){}
if(!roster) roster=[{id:'A',...DEFAULTS.A,weapon:'none'},{id:'B',...DEFAULTS.B,weapon:'none'}];
roster.forEach(r=>{if(r.weapon==='staff') r.weapon='axe'; if(!['none','sword','axe'].includes(r.weapon)) r.weapon='none';});
const indexRoster=()=>{rosterMap={};roster.forEach(r=>rosterMap[r.id]=r);};
indexRoster();
let camZoom=+(ls.get('stickman-zoom')||1)||1, flow=ls.get('stickman-flow')!==null?+ls.get('stickman-flow'):.95;
showTags=ls.get('stickman-tags')==='1'; showTitle=ls.get('stickman-title')==='1';
let seq=[], attacker='A', target='B', animT=0, prevT=0, playing=false, rate=+(ls.get('stickman-rate')||1.5)||1.5, dragging=false, effRate=1.5, selIdx=-1;
const other=w=>w==='A'?(roster[1]?roster[1].id:'B'):'A';
try{const s=JSON.parse(ls.get('stickman-seq')||'null'); if(Array.isArray(s)) seq=s.filter(x=>MOVES[x.id]).map(x=>({id:x.id,who:x.who,vs:x.vs||(x.who==='A'?'B':'A')})).filter(x=>rosterMap[x.who]&&rosterMap[x.vs]&&x.who!==x.vs);}catch(_){}
const classic=()=>CLASSIC.map(([id,who])=>({id,who,vs:who==='A'?'B':'A'}));
if(!seq.length&&ls.get('stickman-seq')===null) seq=classic();
function save(){ls.set('stickman-seq',JSON.stringify(seq));ls.set('stickman-roster',JSON.stringify(roster));}
const nameOf=id=>(rosterMap[id]&&rosterMap[id].name)||id;
const colorOf=id=>{const c=rosterMap[id]?rosterMap[id].color:INK; return c===INK?'#3a3f44':c;};
const avHTML=id=>`<span class="av" style="background:${colorOf(id)}">${(nameOf(id)[0]||'?')}</span>`;

// undo history
const hist=[];
function commit(fn,msg){hist.push(JSON.stringify(seq)); if(hist.length>80) hist.shift(); fn(); recompile(true); $('undo').disabled=!hist.length; if(msg) toast(msg);}
function undo(){ if(!hist.length) return; seq=JSON.parse(hist.pop()); selIdx=-1; recompile(true); $('undo').disabled=!hist.length; toast('Undone'); }

let toastTimer=0;
function toast(msg){const t=$('toast'); t.textContent=msg; t.classList.add('show'); clearTimeout(toastTimer); toastTimer=setTimeout(()=>t.classList.remove('show'),1500);}
function status(msg,err){const s=$('status');s.textContent=msg||'';s.classList.toggle('err',!!err);}
function recompile(keepTime){
  TL=compile(seq,roster,flow);
  if(!keepTime||animT>TL.end){animT=0;} prevT=animT; snapCam=true; if(selIdx>=seq.length) selIdx=-1;
  renderTimeline(); save();
  $('meta').textContent=`${roster.length} fighters · ${seq.length} moves · ${TL.end.toFixed(1)} s`;
}
function setPlaying(v){playing=v;$('play').innerHTML=v?ICON.pause:ICON.play;$('play').setAttribute('aria-label',v?'Pause':'Play');$('bigplay').classList.toggle('show',!v&&!recording); if(v) ensureAudio();}
function seek(t){animT=Math.max(0,Math.min(TL.end,t));prevT=animT;snapCam=true;}

/* ---- tabs ---- */
const TABS=['moves','fighters','settings'];
TABS.forEach(n=>$('tab-'+n).onclick=()=>{TABS.forEach(m=>{$('tab-'+m).setAttribute('aria-selected',m===n);$('p-'+m).hidden=m!==n;}); ls.set('stickman-tab',n);});
{const t=ls.get('stickman-tab'); if(TABS.includes(t)) $('tab-'+t).click();}

/* ---- matchup ---- */
function renderMatchup(){
  if(!rosterMap[attacker]) attacker='A'; if(!rosterMap[target]||target===attacker) target=other(attacker);
  $('mAtt').innerHTML=`${avHTML(attacker)}<span class="who"><small>Attacker</small><b>${nameOf(attacker)}</b></span>`;
  $('mTgt').innerHTML=`${avHTML(target)}<span class="who"><small>Target</small><b>${nameOf(target)}</b></span>`;
  refreshPalette();
}
const cycle=(cur,excl)=>{const ids=roster.map(r=>r.id).filter(i=>i!==excl); return ids[(ids.indexOf(cur)+1)%ids.length];};
$('mAtt').onclick=()=>{attacker=cycle(attacker,null); if(target===attacker) target=other(attacker); renderMatchup();};
$('mTgt').onclick=()=>{target=cycle(target,attacker); renderMatchup();};
$('mSwap').onclick=()=>{[attacker,target]=[target,attacker]; renderMatchup(); toast(`${nameOf(attacker)} attacks ${nameOf(target)}`);};

/* ---- move palette with pose thumbnails ---- */
const CATS=[['All',null],...GROUPS.map(g=>[g[0],g[1]])];
let cat='All', query='';
const catEl=$('cats');
CATS.forEach(([n])=>{const b=document.createElement('button');b.type='button';b.className='chip';b.textContent=n;b.setAttribute('aria-pressed',n===cat);
  b.onclick=()=>{cat=n;catEl.querySelectorAll('.chip').forEach(c=>c.setAttribute('aria-pressed',c===b));filterPalette();}; catEl.appendChild(b);});
$('q').addEventListener('input',e=>{query=e.target.value.trim().toLowerCase();filterPalette();});
const moveBtns=[];
function thumb(cv2,id){
  const mv=MOVES[id], k=mv.X.find(k=>k[3]&&k[3].e==='out')||mv.X[Math.floor(mv.X.length/2)];
  const base=P[k[1]], o=k[3]||{}, p={x:0,f:1,rot:base.rot||0}; FIELDS.forEach(n=>p[n]=o[n]!==undefined?o[n]:base[n]); if(o.f) p.f=o.f;
  const s=skel(p,mv.wpn||null), c2=cv2.getContext('2d'), R=2; cv2.width=48*R; cv2.height=48*R;
  const pts=['hip','neck','e1','h1','e2','h2','k1','f1','k2','f2'].map(n=>s[n]).concat(s.tip?[s.tip,s.butt]:[]);
  let x0=Math.min(...pts.map(q=>q.x)),x1=Math.max(...pts.map(q=>q.x)),y0=Math.min(s.head.y-L.head,...pts.map(q=>q.y)),y1=Math.max(...pts.map(q=>q.y));
  x0=Math.min(x0,s.head.x-L.head); x1=Math.max(x1,s.head.x+L.head);
  const fit=Math.min(40/(x1-x0+8),40/(y1-y0+8),.42);
  c2.scale(R,R); c2.translate(24,24); c2.scale(fit,fit); c2.translate(-(x0+x1)/2,-(y0+y1)/2); c2.lineCap='round'; c2.lineJoin='round';
  const ln=(pts,col,w)=>{c2.strokeStyle=col;c2.lineWidth=w;c2.beginPath();c2.moveTo(pts[0].x,pts[0].y);for(let i=1;i<pts.length;i++)c2.lineTo(pts[i].x,pts[i].y);c2.stroke();};
  const fg='#ecebe6', bk='#6f777d';
  ln([s.neck,s.e2,s.h2],bk,6); ln([s.hip,s.k2,s.f2],bk,6); ln([s.hip,s.neck],fg,6);
  c2.fillStyle=fg;c2.beginPath();c2.arc(s.head.x,s.head.y,L.head,0,Math.PI*2);c2.fill();
  ln([s.hip,s.k1,s.f1],fg,6);
  if(s.w){ ln([s.butt,s.tip],s.w==='axe'?'#b98a5a':'#aab4bd',s.w==='axe'?4.5:3.2); if(s.w==='axe'){c2.fillStyle='#aab4bd';c2.beginPath();c2.arc(s.tip.x+s.bn.x*9-s.ux*8,s.tip.y+s.bn.y*9-s.uy*8,9,0,Math.PI*2);c2.fill();} }
  ln([s.neck,s.e1,s.h1],fg,6);
  
}
GROUPS.forEach(([g,list])=>list.forEach(id=>{
  const m=MOVES[id], b=document.createElement('button'); b.type='button'; b.className='mcard'; b.dataset.id=id; b.dataset.g=g;
  b.innerHTML=`<canvas aria-hidden="true"></canvas><span class="t"><span class="n">${m.name}</span><span class="d">${m.dur.toFixed(1)}s${m.swap?'<span class="tag">swap</span>':''}${m.wpn?`<span class="tag">${m.wpn}</span>`:''}${m.sig?'<span class="tag">special</span>':''}${m.ko?'<span class="tag ko">KO</span>':''}</span><span class="why"></span></span>`;
  try{thumb(b.querySelector('canvas'),id);}catch(_){}
  b.onclick=()=>{ const vs=roster.length<=2?other(attacker):target;
    commit(()=>{seq.push({id,who:attacker,vs});},`Added ${m.name} · ${nameOf(attacker)} → ${nameOf(vs)}`);
    const s=TL.segs.filter(x=>!x.auto).pop(); if(s){seek(Math.max(0,s.T0-.4));setPlaying(true);} scrollTimelineTo(TL.end); };
  moveBtns.push(b); $('palette').appendChild(b);}));
function filterPalette(){ const g=CATS.find(c=>c[0]===cat); moveBtns.forEach(b=>{const m=MOVES[b.dataset.id];
  const okCat=!g[1]||g[1].includes(b.dataset.id), okQ=!query||m.name.toLowerCase().includes(query)||b.dataset.g.toLowerCase().includes(query);
  b.hidden=!(okCat&&okQ);});}
const WNAME={none:'no weapon',sword:'a sword',axe:'an axe'};
function whyNot(id,att,def){ const m=MOVES[id], wa=rosterMap[att]?rosterMap[att].weapon:'none', wd=rosterMap[def]?rosterMap[def].weapon:'none', n=NEEDS[id]||{};
  if(m.wpn&&m.wpn!==wa) return `${nameOf(att)} needs ${WNAME[m.wpn]}`;
  if(!canUse(wa,n.X)) return n.X==='weapon'?`${nameOf(att)} needs a weapon`:wa==='axe'?`${nameOf(att)}'s hands are on the axe`:`needs both hands free (${nameOf(att)} holds a sword)`;
  if(def&&!canUse(wd,n.Y)) return n.Y==='weapon'?`${nameOf(def)} needs a weapon too`:wd==='axe'?`${nameOf(def)}'s hands are on the axe`:`${nameOf(def)} needs both hands free`;
  return ''; }
function refreshPalette(){ const def=roster.length<=2?other(attacker):target; let off=0;
  moveBtns.forEach(b=>{const r=whyNot(b.dataset.id,attacker,def); b.disabled=!!r; b.title=r?`Not available: ${r}`:''; const d=b.querySelector('.why'); if(d) d.textContent=r; if(r) off++;});
  const note=$('availNote'); if(note){ const wa=rosterMap[attacker].weapon, wd=rosterMap[def]?rosterMap[def].weapon:'none';
    note.hidden=!off; note.textContent=off?`${off} moves greyed out: ${nameOf(attacker)} has ${WNAME[wa]}${def?`, ${nameOf(def)} has ${WNAME[wd]}`:''}. Axes take both hands; swords leave one hand free.`:''; } }
function pruneForWeapons(){ const bad=seq.filter(it=>whyNot(it.id,it.who,it.vs)); if(!bad.length) return;
  commit(()=>{seq=seq.filter(it=>!whyNot(it.id,it.who,it.vs));},bad.length>1?`Removed ${bad.length} moves that don't fit the weapons · Undo to restore`:`Removed 1 move that doesn't fit the weapons · Undo to restore`); }

/* ---- fighters ---- */
function renderRoster(){
  const el=$('roster'); el.innerHTML='';
  roster.forEach((r,i)=>{
    const card=document.createElement('div'); card.className='fcard';
    card.innerHTML=`<div class="top">${avHTML(r.id)}<div style="flex:1;min-width:0;display:flex;flex-direction:column;gap:2px"><span class="role">${i===0?'Hero':'Opponent '+i}</span><input class="nm" id="nm-${r.id}" maxlength="10" aria-label="Name" value="${(r.name||'').replace(/"/g,'')}"></div>
      ${i>0&&roster.length>2?`<button type="button" class="rm" aria-label="Remove ${r.name}" title="Remove">${ICON.x}</button>`:''}</div>
      <div class="sw" role="group" aria-label="Color">${COLORS.map(([c,n])=>`<button type="button" class="swc" aria-pressed="${r.color===c}" data-c="${c}" title="${n}" aria-label="${n}" style="background:${c}"></button>`).join('')}</div>
      <div class="field"><span>Weapon</span><div class="seg" role="group" aria-label="Weapon">${[['none','Unarmed'],['sword','Sword'],['axe','Axe']].map(([v,n])=>`<button type="button" data-w="${v}" aria-pressed="${r.weapon===v}">${n}</button>`).join('')}</div></div>
      <div class="field"><span>Headband</span><label class="switch"><input type="checkbox" id="bd-${r.id}"${r.band?' checked':''} aria-label="Headband"><i></i></label></div>`;
    card.querySelector('.nm').addEventListener('input',e=>{r.name=e.target.value.toUpperCase().slice(0,10);e.target.value=r.name;card.querySelector('.av').textContent=r.name[0]||'?';save();renderMatchup();renderTimeline();});
    card.querySelectorAll('.swc').forEach(b=>b.onclick=()=>{r.color=b.dataset.c;renderRoster();renderMatchup();renderTimeline();save();});
    card.querySelectorAll('[data-w]').forEach(b=>b.onclick=()=>{r.weapon=b.dataset.w;renderRoster();recompile(true);refreshPalette();toast(`${nameOf(r.id)}: ${b.textContent}`);pruneForWeapons();});
    card.querySelector('input[type=checkbox]').onchange=e=>{r.band=e.target.checked;save();};
    const rm=card.querySelector('.rm'); if(rm) rm.onclick=()=>{commit(()=>{roster=roster.filter(x=>x!==r);indexRoster();seq=seq.filter(x=>x.who!==r.id&&x.vs!==r.id);},`Removed ${r.name}`);renderRoster();renderMatchup();};
    el.appendChild(card);
  });
  $('addF').disabled=roster.length>=4;
}
$('addF').onclick=()=>{const id=['B','C','D'].find(x=>!rosterMap[x]); if(!id) return; roster.push({id,...DEFAULTS[id],weapon:'none'});indexRoster();renderRoster();renderMatchup();recompile(true);toast(`${DEFAULTS[id].name} joined the fight`);};

/* ---- settings ---- */
function segInto(el,opts,cur,onPick){el.innerHTML='';opts.forEach(([v,n])=>{const b=document.createElement('button');b.type='button';b.textContent=n;b.setAttribute('aria-pressed',String(v)===String(cur));
  b.onclick=()=>{el.querySelectorAll('button').forEach(x=>x.setAttribute('aria-pressed',x===b));onPick(v);};el.appendChild(b);});}
segInto($('speeds'),[[.5,'0.5×'],[1,'1×'],[1.5,'1.5×'],[2,'2×'],[3,'3×'],[5,'5×']],rate,v=>{rate=v;ls.set('stickman-rate',String(v));});
segInto($('flowSeg'),[[0,'Reset'],[.6,'Smooth'],[.95,'Seamless']],flow,v=>{flow=v;ls.set('stickman-flow',String(v));recompile(true);});
segInto($('zoomSeg'),[[.8,'Close'],[1,'Normal'],[1.35,'Wide'],[1.8,'Extra wide']],camZoom,v=>{camZoom=v;ls.set('stickman-zoom',String(v));});
$('titleCard').checked=showTitle; $('titleCard').onchange=e=>{showTitle=e.target.checked;ls.set('stickman-title',showTitle?'1':'0');recompile();setPlaying(true);};
beheadOn=ls.get('stickman-behead')!=='0'; $('behead').checked=beheadOn; $('behead').onchange=e=>{beheadOn=e.target.checked;ls.set('stickman-behead',beheadOn?'1':'0');recompile(true);};
$('tags').checked=showTags; $('tags').onchange=e=>{showTags=e.target.checked;ls.set('stickman-tags',showTags?'1':'0');};
function paintSound(){$('sound').innerHTML=soundOn?ICON.snd:ICON.mute;$('sound').setAttribute('aria-pressed',soundOn);$('sound').title=soundOn?'Sound on':'Sound off';}
soundOn=ls.get('stickman-sound')!=='0'; paintSound();
$('sound').onclick=()=>{soundOn=!soundOn;ls.set('stickman-sound',soundOn?'1':'0');paintSound();if(soundOn)ensureAudio();toast(soundOn?'Sound on':'Sound off');};

/* ---- sequence list: moves in order, no time scale ---- */
const track=$('track'), wrap=$('trackWrap'); let dragIdx=null;
function renderTimeline(){
  track.innerHTML='';
  if(!seq.length){const e=document.createElement('div');e.className='empty';e.textContent='Tap moves in the list to build your fight →';track.appendChild(e);}
  const segOf={}; TL.segs.forEach(sg=>{ if(!sg.auto) segOf[sg.idx]=sg; });
  seq.forEach((it,i)=>{
    const mv=MOVES[it.id], sg=segOf[i];
    const el=document.createElement('div');
    el.className='blk'+(i===selIdx?' sel':''); el.draggable=true; el.dataset.idx=i;
    el.innerHTML=`<span class="stripe" style="background:${colorOf(it.who)}"></span><span class="nm"><span class="num">${i+1}</span>${mv.name}</span><span class="sub">${nameOf(it.who)} → ${nameOf(it.vs)}${mv.ko?' <span class="ko">KO</span>':''}</span>
      <span class="ctl"><button type="button" data-act="L" title="Move earlier" aria-label="Move earlier"${i===0?' disabled':''}>◀</button><button type="button" data-act="R" title="Move later" aria-label="Move later"${i===seq.length-1?' disabled':''}>▶</button><button type="button" data-act="D" title="Duplicate" aria-label="Duplicate">⧉</button><button type="button" data-act="X" title="Delete" aria-label="Delete">✕</button></span>`;
    el.querySelectorAll('.ctl button').forEach(bt=>bt.addEventListener('click',ev=>{ev.stopPropagation(); ({L:moveEarlier,R:moveLater,D:dupMove,X:delMove})[bt.dataset.act](i);}));
    el.title=`${i+1}. ${mv.name}: ${nameOf(it.who)} → ${nameOf(it.vs)}`;
    el.addEventListener('click',ev=>{ev.stopPropagation(); selIdx=i; if(sg) seek(sg.T0); renderTimeline(); });
    el.addEventListener('dragstart',ev=>{dragIdx=i;el.classList.add('drag');ev.dataTransfer.effectAllowed='move';try{ev.dataTransfer.setData('text/plain',String(i));}catch(_){} });
    el.addEventListener('dragend',()=>{dragIdx=null;track.querySelectorAll('.blk').forEach(n=>n.classList.remove('drag','dropL','dropR'));});
    el.addEventListener('dragover',ev=>{ev.preventDefault();const r=el.getBoundingClientRect(),right=ev.clientX>r.left+r.width/2;el.classList.toggle('dropR',right);el.classList.toggle('dropL',!right);});
    el.addEventListener('dragleave',()=>el.classList.remove('dropL','dropR'));
    el.addEventListener('drop',ev=>{ev.preventDefault();if(dragIdx===null)return;const r=el.getBoundingClientRect(),right=ev.clientX>r.left+r.width/2;
      let to=i+(right?1:0); const from=dragIdx; if(to>from) to--; if(to===from) return;
      commit(()=>{const [m]=seq.splice(from,1);seq.splice(to,0,m);},`Moved ${MOVES[seq[from].id].name}`); selIdx=to; renderTimeline();});
    track.appendChild(el);
  });
  lastOn=undefined;
}
function moveEarlier(i){ if(i<1) return; commit(()=>{[seq[i-1],seq[i]]=[seq[i],seq[i-1]];}); selIdx=i-1; renderTimeline(); }
function moveLater(i){ if(i>=seq.length-1) return; commit(()=>{[seq[i+1],seq[i]]=[seq[i],seq[i+1]];}); selIdx=i+1; renderTimeline(); }
function dupMove(i){ commit(()=>{seq.splice(i+1,0,{...seq[i]});},`Duplicated ${MOVES[seq[i].id].name}`); selIdx=i+1; renderTimeline(); }
function delMove(i){ const n=MOVES[seq[i].id].name; selIdx=-1; commit(()=>{seq.splice(i,1);},`Deleted ${n} · Ctrl Z to undo`); }
function scrollTimelineTo(){ const last=track.lastElementChild; if(last) last.scrollIntoView({block:'nearest'}); }

/* ---- presets ---- */
$('classic').onclick=()=>{ if(!rosterMap.B){toast('Classic needs INK in the fight');return;} const cl=classic(), ok=cl.filter(it=>!whyNot(it.id,it.who,it.vs)); commit(()=>{seq=ok;},ok.length<cl.length?`Loaded the classic fight · skipped ${cl.length-ok.length} that don't fit the weapons`:'Loaded the classic fight'); seek(0); setPlaying(true);};
$('clear').onclick=()=>{ if(!seq.length) return; selIdx=-1; commit(()=>{seq=[];},'Cleared · Ctrl Z to undo'); };
$('random').onclick=()=>{
  const vsOf=(id,f)=>id==='A'?f:'A';
  const pool=(id,f)=>ORDER.filter(k=>!MOVES[k].ko&&!whyNot(k,id,vsOf(id,f))), kos=(id,f)=>ORDER.filter(k=>MOVES[k].ko&&!whyNot(k,id,vsOf(id,f)));
  const pick=a=>a[Math.floor(Math.random()*a.length)], foes=roster.slice(1).map(r=>r.id);
  // armed fighters lean on their weapon: weapon moves are 4× as likely, and they finish with a weapon KO when one exists
  const isWpn=k=>!!MOVES[k].wpn||(NEEDS[k]&&NEEDS[k].X==='weapon');
  const armed=id=>rosterMap[id]&&rosterMap[id].weapon!=='none';
  const pickW=(list,id)=>{ if(!armed(id)) return pick(list); const w=list.filter(isWpn); if(!w.length) return pick(list);
    if(MOVES[list[0]].ko) return pick(w); const tot=list.length+3*w.length; let r=Math.random()*tot;
    for(const k of list){ r-=isWpn(k)?4:1; if(r<0) return k; } return pick(list); };
  commit(()=>{ seq=[];
    const add=(w,f,ko)=>{const list=ko?kos(w,f):pool(w,f); if(list.length) seq.push({id:pickW(list,w),who:w,vs:vsOf(w,f)});};
    if(foes.length===1){ for(let i=0;i<7;i++) add(Math.random()<.6?'A':foes[0],foes[0]); add('A',foes[0],1); }
    else foes.forEach(f=>{const n=2+Math.floor(Math.random()*2); for(let i=0;i<n;i++) add(Math.random()<.65?'A':f,f); add('A',f,1);});
  },'Random fight');
  selIdx=-1; seek(0); setPlaying(true);};
$('undo').onclick=undo; $('undo').disabled=true;

/* ---- copy sequence as text (video prompt for Seedance and similar) ---- */
// {A} = attacker, {D} = defender
const DESC={
  jab:'{A} snaps a jab and a straight cross into {D}\'s face, knocking {D} back a step each time',
  rush:'{A} rushes in with three fast punches and finishes with a high kick that snaps {D}\'s head back',
  flurry:'{A} unleashes a blur of rapid-fire punches ("hundred fists"), then a palm strike that sends {D} sliding back',
  elbow:'{A} drives an elbow into {D}, grabs {D} and slams a knee into {D}\'s stomach, doubling {D} over',
  backfist:'{A} spins a full turn and cracks a spinning backfist across {D}\'s face',
  counter:'{D} throws a punch, {A} blocks it, then counters with a punch and a high kick',
  dodge:'{D} punches, {A} leans back to slip it, then lunges in with a palm strike that knocks {D} flying back',
  kick:'{A} whips a high roundhouse kick into {D}\'s head',
  lowkick:'{A} chops a low kick into {D}\'s leg, dropping {D} to one knee',
  axe:'{A} raises a leg high and brings an axe kick crashing down on {D}, driving {D} to a knee',
  sweep:'{A} drops low and spins a leg sweep; {D} hops over it and lands in a crouch',
  tornado:'{A} does a backflip into a flying kick that hits {D} in the face',
  fly:'{A} leaps into a flying kick; {D} blocks it with both arms and skids back',
  bicycle:'{A} jumps into a bicycle kick, landing a rapid chain of kicks that drives {D} back across the ground',
  upper:'{D} throws a high kick, {A} ducks under it and explodes up with an uppercut that flips {D} through the air; {D} lands back on their feet',
  juggle:'{A} launches {D} into the air with an uppercut, leaps after them, strikes them in mid-air and smashes them down with an axe kick; {D} rolls back up',
  flip:'{A} somersaults high over {D}\'s head and lands on the other side, turning to face {D}',
  clash:'both fighters leap at each other with flying kicks; their feet collide mid-air in a flash, and they land on opposite sides',
  tackle:'{A} sprints in and rams {D} with a shoulder charge, sending {D} tumbling away',
  throw:'{A} grabs {D} and hurls {D} over the shoulder onto the ground behind; {D} rolls back to their feet',
  wslash:'{A} sweeps the sword up in a rising slash across {D}',
  wchop:'{A} brings the sword down in an overhead chop; {D} blocks and is driven to a knee',
  wthrust:'{A} lunges forward with a straight sword thrust into {D}, knocking {D} back',
  wspin:'{A} spins in a whirl of sword cuts, slashing {D} three times',
  axCleave:'{A} heaves the axe overhead and cleaves down; {D} blocks and is hammered to a knee',
  axSweep:'{A} swings the axe in a wide horizontal sweep that smashes {D} away',
  axSpin:'{A} spins with the axe in a whirlwind, hitting {D} twice',
  wclash:'the two fighters trade weapon blows, blade ringing on blade, then lock weapons in a grinding bind before shoving apart',
  shadow:'{A} dashes past {D} in a blur like a shadow, reappears behind {D} and cracks a backfist into their back',
  whirl:'{A} leaps into a spinning whirlwind kick, hitting {D} again and again in mid-air',
  kiblast:'{A} gathers a glowing ball of energy in both hands and fires it; the blast hits {D} and throws {D} back',
  quake:'{A} leaps up and slams a fist into the ground; a shockwave cracks the floor and knocks {D} off their feet',
  matrix:'{D} fires shots at {A}; time slows to bullet time and {A} bends far back to dodge, then springs forward with a palm strike that knocks {D} away',
  dragon:'{A} explodes upward with a rising dragon uppercut, launching {D} high into the air; {D} crashes down and stays down. KNOCKOUT',
  ko1:'{A} crouches and fires a massive uppercut that launches {D} spinning through the air; {D} lands on their back and stays down. KNOCKOUT',
  ko2:'both fighters leap and pass each other in mid-air in one decisive strike, landing back to back; a beat of stillness, then {D} drops to their knees and falls face down. KNOCKOUT',
  ko3:'{A} raises a leg high and drops a devastating axe kick on {D}; {D} crumples face down. KNOCKOUT',
  ko4:'{A} spins up a hurricane of strikes and fires a palm blast that hurls {D} far across the ground; {D} stays down. KNOCKOUT',
  wko_keep:'{A} sheathes the sword and waits, then dashes past {D} with a lightning-fast draw cut; a beat later {D} collapses face down. KNOCKOUT',
  wko:'{A} sheathes the sword and waits, then dashes past {D} with a lightning-fast draw cut; a beat later {D}\'s head falls and {D} collapses face down. KNOCKOUT',
  axKO_keep:'{A} leaps high and brings the axe down on {D} in an executioner\'s chop; {D} falls face down. KNOCKOUT',
  axKO:'{A} leaps high and brings the axe down on {D} in an executioner\'s chop, taking off {D}\'s head; {D} falls face down. KNOCKOUT',
};
// prompts refer to fighters by roster position, never by their names
const NUMW=['One','Two','Three','Four'];
function fighterLabel(id){ const i=roster.findIndex(r=>r.id===id); return 'Fighter '+(NUMW[i]||i+1); }
function fighterLine(r){
  const col=(COLORS.find(c=>c[0]===r.color)||[,'ink'])[1].toLowerCase();
  const parts=[col==='ink'?'black stick figure':`${col} stick figure`];
  if(r.band) parts.push(`${r.color===RED?'black':'red'} headband with long trailing tails`);
  if(r.weapon==='sword') parts.push('holding a one-handed sword');
  if(r.weapon==='axe') parts.push('holding a two-handed axe');
  return `${fighterLabel(r.id)}: ${parts.join(', ')}.`;
}
// wall-clock seconds at the current playback speed (slow-mo stretches time)
function realTime(T){ let s=0; for(let t=0;t<T;t+=.01) s+=Math.min(.01,T-t)/(rate*speedAt(t)); return s; }
function sequenceText(){
  if(!seq.length) return '';
  const nm=fighterLabel, fmt=s=>s.toFixed(1).replace(/\.0$/,'');
  const beats=[];
  TL.segs.forEach(sg=>{
    if(sg.auto==='engage') return;
    let txt;
    if(sg.auto==='getup') txt=`${nm(sg.pair[0])} gets back up`;
    else { const it=seq[sg.idx]; txt=(DESC[it.id+(beheadOn?'':'_keep')]||DESC[it.id]||`${nm(it.who)} hits ${nm(it.vs)} with ${MOVES[it.id].name}`).replace(/\{A\}/g,nm(it.who)).replace(/\{D\}/g,nm(it.vs)); txt=`${MOVES[it.id].name}: ${txt}`; }
    beats.push({t0:realTime(sg.T0),t1:realTime(sg.T1),txt});
  });
  const total=realTime(TL.end);
  // Seedance clips are at most 30 s; split at move boundaries
  const MAX=30, clips=[]; let cur={start:0,beats:[]};
  beats.forEach(b=>{ if(cur.beats.length&&b.t1-cur.start>MAX){cur.end=b.t0;clips.push(cur);cur={start:b.t0,beats:[]};} cur.beats.push(b); });
  const lastT1=cur.beats[cur.beats.length-1].t1; cur.end=Math.min(total,lastT1+1,Math.max(lastT1,cur.start+MAX)); clips.push(cur);
  const out=[];
  out.push('Fighters:');
  const used=new Set(); seq.forEach(it=>{used.add(it.who);used.add(it.vs);});
  roster.filter(r=>used.has(r.id)).forEach(r=>out.push('- '+fighterLine(r)));
  out.push('');
  clips.forEach((c,ci)=>{
    const len=c.end-c.start;
    out.push(clips.length>1?`Clip ${ci+1} of ${clips.length} (${fmt(len)} s):`:`Action (${fmt(len)} s):`);
    if(ci===0) out.push(`[0–${fmt(Math.max(.5,c.beats[0].t0))}s] ${showTitle?'Title card, then the':'The'} fighters run in from opposite sides and square off in fighting stances.`);
    else out.push('Continues directly from the previous clip, same fighters, same style.');
    c.beats.forEach(b=>out.push(`[${fmt(b.t0-c.start)}–${fmt(b.t1-c.start)}s] ${b.txt}.`));
    out.push('');
  });
  if(clips.length>1) out.push(`Total: ${fmt(clips[clips.length-1].end)} s at ${rate}× speed. Seedance clips max out at 30 s, so generate each clip separately and join them, or extend Clip 1 with the next.`);
  return out.join('\n').trim()+'\n';
}
async function copyText(txt){
  try{ await navigator.clipboard.writeText(txt); return true; }
  catch(_){ const ta=document.createElement('textarea'); ta.value=txt; ta.style.position='fixed'; ta.style.opacity='0'; document.body.appendChild(ta); ta.select();
    let ok=false; try{ok=document.execCommand('copy');}catch(__){} ta.remove(); return ok; }
}
$('copyText').onclick=async()=>{
  if(!seq.length){toast('Add some moves first');return;}
  toast(await copyText(sequenceText())?'Copied sequence as text':'Copy failed');
};

/* ---- transport + keys ---- */
$('play').onclick=()=>setPlaying(!playing);
$('stage').onclick=()=>{if(!recording)setPlaying(!playing);};
$('restart').onclick=()=>{seek(0);setPlaying(true);};
function jumpMove(dir){const segs=TL.segs.filter(s=>!s.auto); if(!segs.length) return; let i=segs.findIndex(s=>animT>=s.T0-.01&&animT<s.T1);
  if(i<0) i=dir>0?-1:segs.length; i=Math.max(0,Math.min(segs.length-1,i+dir)); seek(segs[i].T0); selIdx=segs[i].idx; renderTimeline();}
addEventListener('keydown',e=>{ const tag=e.target.tagName; if(tag==='INPUT') return;
  if(e.code==='Space'&&tag!=='BUTTON'){e.preventDefault();if(!recording)setPlaying(!playing);}
  else if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='z'){e.preventDefault();undo();}
  else if((e.key==='Delete'||e.key==='Backspace')&&selIdx>=0&&seq[selIdx]){e.preventDefault();delMove(selIdx);}
  else if(e.key==='ArrowRight'){e.preventDefault();jumpMove(1);} else if(e.key==='ArrowLeft'){e.preventDefault();jumpMove(-1);} });

/* ================= EXPORT ================= */
let downloads=null;
(async()=>{try{downloads=window.claude?.use?await window.claude.use('downloads'):null;}catch(_){downloads=null;}})();
function browserSave(blob,name){const url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=name;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),10000);}
function pickMime(){const c=['video/mp4;codecs=avc1.42E01E,mp4a.40.2','video/mp4;codecs=avc1,opus','video/mp4','video/webm;codecs=vp9,opus','video/webm;codecs=vp8,opus','video/webm'];
  for(const m of c) if(window.MediaRecorder&&MediaRecorder.isTypeSupported(m)) return m; return '';}
let recorder=null, chunks=[];
function lockUI(v){document.querySelectorAll('button,select,input').forEach(el=>{if(el.id!=='export')el.disabled=v;}); $('recBadge').hidden=!v; if(!v){renderRoster();refreshPalette();$('undo').disabled=!hist.length;renderTimeline();}}
const EXPORT_HTML=$('export').innerHTML;
$('export').onclick=()=>{
  if(recording){stopRec(true);return;}
  if(!seq.length){toast('Add some moves first');return;}
  if(!window.MediaRecorder||!cv.captureStream){status('This browser can’t record video from the page.',true);return;}
  ensureAudio(); const mime=pickMime();
  recording=true; lockUI(true); $('export').textContent='Cancel export';
  W=1920;H=1080;dpr=1;cv.width=1920;cv.height=1080;
  seek(0);
  const stream=cv.captureStream(60);
  if(ac&&soundOn&&recDest) recDest.stream.getAudioTracks().forEach(t=>stream.addTrack(t));
  chunks=[];
  try{recorder=new MediaRecorder(stream,mime?{mimeType:mime,videoBitsPerSecond:10e6}:{videoBitsPerSecond:10e6});}catch(e){recording=false;lockUI(false);$('export').innerHTML=EXPORT_HTML;resize();status('Recording could not start in this browser.',true);return;}
  recorder.ondataavailable=e=>{if(e.data&&e.data.size)chunks.push(e.data);};
  recorder.onstop=async()=>{
    const canceled=recorder._cancel; recording=false; lockUI(false); $('export').innerHTML=EXPORT_HTML; resize(); setPlaying(false);
    if(canceled){status('Export canceled.');return;}
    const type=recorder.mimeType||mime||'video/webm'; const ext=type.includes('mp4')?'mp4':'webm';
    const blob=new Blob(chunks,{type}); status(`Rendered ${(blob.size/1048576).toFixed(1)} MB ${ext.toUpperCase()}. Confirm the save to download it.`);
    const fname=`stickman-gen-${rate}x.${ext}`;
    if(!downloads){browserSave(blob,fname); status(`Saved ${fname} (1920×1080${soundOn?', with sound':''}).`); return;}
    try{await downloads.save({filename:fname,data:blob}); status(`Saved ${fname} (1920×1080${soundOn?', with sound':''}).`);}
    catch(err){const code=err&&err.code; status(code==='declined'?'Save declined. Export again whenever you like.':code==='rate_limited'?'A save prompt is already open.':`Couldn’t save the video (${code||'error'}).`,code!=='declined');}
  };
  recorder.start(250); setPlaying(true);
  status(`Recording 1920×1080 at ${rate}× — about ${Math.ceil(TL.end/rate)} seconds. Keep this tab open.`);
};
function stopRec(cancel){ if(recorder&&recorder.state!=='inactive'){recorder._cancel=!!cancel;recorder.stop();} }

/* ================= LOOP ================= */
let last=performance.now(), lastOn=null;
function tick(now){
  const dt=Math.min(.05,(now-last)/1000);last=now; effRate=rate;
  if(playing&&!dragging){
    animT+=dt*rate*speedAt(animT);
    for(const e of TL.fx){ if(e.t>prevT&&e.t<=animT) playSfx(e); }
    if(animT>=TL.end){ if(recording){animT=TL.end;stopRec(false);} else {animT=0;prevT=0;snapCam=true;} }
    prevT=animT;
  }
  frame(animT);
  $('time').textContent=`${animT.toFixed(1)} / ${TL.end.toFixed(1)} s`;
  const on=(TL.segs.find(s=>!s.auto&&animT>=s.T0&&animT<s.T1)||{}).idx;
  if(on!==lastOn){ track.querySelectorAll('.blk[data-idx]').forEach(el=>el.classList.toggle('on',+el.dataset.idx===on)); lastOn=on; }
  requestAnimationFrame(tick);
}
seq=seq.filter(it=>!whyNot(it.id,it.who,it.vs));
renderRoster(); renderMatchup(); filterPalette(); recompile();
try{document.fonts&&document.fonts.load('40px Anton');}catch(_){}
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
if(reduce){seek(3.2);setPlaying(false);} else setPlaying(true);
requestAnimationFrame(tick);
window.__stick={text:()=>sequenceText(),set:t=>{animT=t;snapCam=true;for(let i=0;i<40;i++)frame(t);},pause:()=>setPlaying(false),end:()=>TL.end,segs:()=>TL.segs};
})();
