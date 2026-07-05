// ─── DATA ─────────────────────────────────────────────────────────────────────
const WEEKS = [
  { id: "w1",  label: "Jun 29–Jul 3 · 4d",  dates: "Jun 29 – Jul 3", fourDay: true },
  { id: "w2",  label: "Jul 6–10",      dates: "Jul 6 – Jul 10" },
  { id: "w3",  label: "Jul 13–17",     dates: "Jul 13 – Jul 17" },
  { id: "w4",  label: "Jul 20–24",     dates: "Jul 20 – Jul 24" },
  { id: "w5",  label: "Jul 27–31",     dates: "Jul 27 – Jul 31" },
  { id: "w6",  label: "Aug 4–7 · 4d",   dates: "Aug 4 – Aug 7", fourDay: true },
  { id: "w7",  label: "Aug 10–14",     dates: "Aug 10 – Aug 14" },
  { id: "w8",  label: "Aug 17–21",     dates: "Aug 17 – Aug 21" },
  { id: "w9",  label: "Aug 24–28",     dates: "Aug 24 – Aug 28" },
  { id: "w10", label: "Aug 31–Sep 4",  dates: "Aug 31 – Sep 4" },
];

// ── CAMPS ─────────────────────────────────────────────────────────────────────
// Shared camp list (names/ids are the same at both locations)
const CAMPS = [
  // Ages 5–7
  { id: "jr_mc_roblox",   name: "Jr Minecraft & Roblox",          age: "5–7",  badge: "Best Seller" },
  { id: "jr_lego_robot",  name: "Jr Lego Robotics & Coding",      age: "5–7",  badge: "Best Seller" },
  { id: "jr_eng",         name: "Jr Engineering",                  age: "5–7" },
  { id: "jr_coding_elec", name: "Jr Coding & Electronics",        age: "5–7",  badge: "Best Seller · New" },
  // Ages 7–14
  { id: "lego_robotics",  name: "Lego Robotics Engineering",      age: "7–14" },
  { id: "modeling_3d",    name: "3D Modeling Basics",             age: "7–14" },
  { id: "yt_ai_studio",   name: "YouTube AI Production Studio",   age: "7–14", badge: "New" },
  { id: "yt_content",     name: "YouTube Content Studio",         age: "7–14", badge: "Best Seller" },
  { id: "roblox_world",   name: "Roblox World Building",          age: "7–14", badge: "Best Seller" },
  { id: "mc_modding",     name: "Minecraft Modding",              age: "7–14", badge: "Best Seller" },
  { id: "mc_redstone",    name: "Minecraft Redstone Engineering", age: "7–14" },
  { id: "cyber_coding",   name: "Cybersecurity Coding",          age: "9–14", badge: "New · Best Seller" },
  { id: "ai_ml",          name: "AI Coding & Machine Learning",  age: "9–14", badge: "New · Best Seller" },
  // Ages 9–14
  { id: "cyber_break",    name: "Cybersecurity & Codebreaking",  age: "9–14", badge: "New" },
  { id: "roblox_adv",     name: "Roblox Advanced Coding",        age: "9–14" },
  { id: "mobile_app",     name: "Mobile App Design & Coding",    age: "9–14" },
  { id: "html_css",       name: "HTML & CSS Web Development",    age: "9–14", badge: "Best Seller" },
];

// ── RICHMOND HILL SCHEDULE ────────────────────────────────────────────────────
// Exactly 3 camps per AM session and 3 camps per PM session each week.
// Source: provided schedule table.
const SCHEDULE_RH = {
  //                          w1      w2      w3      w4      w5      w6      w7      w8      w9      w10
  jr_mc_roblox:   { w1:["AM"], w2:[],     w3:[],     w4:["AM"], w5:[],     w6:["AM"], w7:[],     w8:["AM"], w9:[],     w10:["AM"] },
  jr_lego_robot:  { w1:[],     w2:["PM"], w3:["PM"], w4:[],     w5:[],     w6:["PM"], w7:[],     w8:[],     w9:["PM"], w10:["PM"] },
  jr_eng:         { w1:[],     w2:["AM"], w3:[],     w4:["PM"], w5:["AM"], w6:[],     w7:["AM"], w8:[],     w9:["AM"], w10:[]     },
  jr_coding_elec: { w1:["PM"], w2:[],     w3:["AM"], w4:[],     w5:["PM"], w6:["PM"], w7:["PM"], w8:["PM"], w9:[],     w10:[]     },
  lego_robotics:  { w1:[],     w2:["PM"], w3:[],     w4:["PM"], w5:[],     w6:[],     w7:[],     w8:["PM"], w9:[],     w10:[]     },
  modeling_3d:    { w1:["PM"], w2:[],     w3:[],     w4:[],     w5:["AM"], w6:[],     w7:[],     w8:[],     w9:["AM"], w10:[]     },
  yt_ai_studio:   { w1:[],     w2:["AM"], w3:[],     w4:[],     w5:["PM"], w6:[],     w7:["AM"], w8:[],     w9:[],     w10:[]     },
  yt_content:     { w1:["PM"], w2:[],     w3:[],     w4:["PM"], w5:[],     w6:["PM"], w7:[],     w8:[],     w9:["PM"], w10:[]     },
  roblox_world:   { w1:["AM"], w2:[],     w3:["AM"], w4:[],     w5:[],     w6:[],     w7:[],     w8:["AM"], w9:[],     w10:["AM"] },
  mc_modding:     { w1:["AM"], w2:[],     w3:[],     w4:["AM"], w5:[],     w6:["AM"], w7:[],     w8:["AM"], w9:[],     w10:[]     },
  mc_redstone:    { w1:[],     w2:[],     w3:["PM"], w4:[],     w5:[],     w6:[],     w7:[],     w8:["PM"], w9:[],     w10:["PM"] },
  cyber_coding:   { w1:[],     w2:[],     w3:[],     w4:[],     w5:["AM"], w6:[],     w7:["PM"], w8:[],     w9:[],     w10:[]     },
  ai_ml:          { w1:[],     w2:["PM"], w3:[],     w4:[],     w5:["PM"], w6:[],     w7:[],     w8:[],     w9:["AM"], w10:[]     },
  cyber_break:    { w1:[],     w2:[],     w3:[],     w4:[],     w5:[],     w6:["AM"], w7:[],     w8:[],     w9:["PM"], w10:[]     },
  roblox_adv:     { w1:[],     w2:[],     w3:[],     w4:[],     w5:[],     w6:["PM"], w7:[],     w8:[],     w9:[],     w10:["PM"] },
  mobile_app:     { w1:[],     w2:[],     w3:["AM"], w4:[],     w5:[],     w6:[],     w7:["PM"], w8:[],     w9:[],     w10:[]     },
  html_css:       { w1:[],     w2:["AM"], w3:["PM"], w4:[],     w5:[],     w6:[],     w7:["AM"], w8:[],     w9:[],     w10:["AM"] },
};

// ── ELGIN MILLS SCHEDULE ──────────────────────────────────────────────────────
// 2 camps per AM session and 2 camps per PM session most weeks (smaller location).
// Source: provided schedule table.
const SCHEDULE_EM = {
  //                          w1      w2      w3      w4      w5      w6      w7      w8      w9      w10
  jr_mc_roblox:   { w1:["AM"], w2:[],     w3:["AM"], w4:["AM"], w5:[],     w6:[],     w7:["AM"], w8:[],     w9:[],     w10:["AM"] },
  jr_lego_robot:  { w1:[],     w2:["PM"], w3:[],     w4:["PM"], w5:[],     w6:[],     w7:[],     w8:["PM"], w9:[],     w10:["PM"] },
  jr_eng:         { w1:["PM"], w2:[],     w3:["PM"], w4:[],     w5:["AM"], w6:[],     w7:[],     w8:["AM"], w9:["AM"], w10:[]     },
  jr_coding_elec: { w1:[],     w2:["AM"], w3:[],     w4:[],     w5:["PM"], w6:[],     w7:["PM"], w8:["PM"], w9:["PM"], w10:[]     },
  lego_robotics:  { w1:[],     w2:["PM"], w3:["PM"], w4:[],     w5:[],     w6:[],     w7:["PM"], w8:["PM"], w9:[],     w10:[]     },
  modeling_3d:    { w1:[],     w2:["AM"], w3:[],     w4:[],     w5:["AM"], w6:[],     w7:[],     w8:[],     w9:["AM"], w10:[]     },
  yt_ai_studio:   { w1:[],     w2:["PM"], w3:[],     w4:["PM"], w5:[],     w6:["PM"], w7:[],     w8:[],     w9:["PM"], w10:[]     },
  yt_content:     { w1:["PM"], w2:[],     w3:[],     w4:[],     w5:[],     w6:[],     w7:["AM"], w8:[],     w9:[],     w10:[]     },
  roblox_world:   { w1:[],     w2:["AM"], w3:[],     w4:["AM"], w5:[],     w6:["AM"], w7:[],     w8:["AM"], w9:[],     w10:["AM"] },
  mc_modding:     { w1:["AM"], w2:[],     w3:[],     w4:[],     w5:["PM"], w6:[],     w7:[],     w8:[],     w9:["AM"], w10:[]     },
  mc_redstone:    { w1:[],     w2:[],     w3:[],     w4:["PM"], w5:[],     w6:["AM"], w7:[],     w8:["PM"], w9:[],     w10:[]     },
  cyber_coding:   { w1:[],     w2:[],     w3:["AM"], w4:[],     w5:[],     w6:[],     w7:[],     w8:[],     w9:[],     w10:[]     },
  ai_ml:          { w1:[],     w2:["PM"], w3:[],     w4:["AM"], w5:[],     w6:["PM"], w7:[],     w8:[],     w9:["PM"], w10:[]     },
  cyber_break:    { w1:[],     w2:[],     w3:[],     w4:[],     w5:["AM"], w6:[],     w7:[],     w8:[],     w9:[],     w10:[]     },
  roblox_adv:     { w1:[],     w2:[],     w3:[],     w4:[],     w5:["PM"], w6:[],     w7:[],     w8:[],     w9:[],     w10:["PM"] },
  mobile_app:     { w1:[],     w2:[],     w3:["AM"], w4:[],     w5:[],     w6:[],     w7:[],     w8:["PM"], w9:[],     w10:[]     },
  html_css:       { w1:[],     w2:[],     w3:["PM"], w4:[],     w5:[],     w6:[],     w7:[],     w8:["AM"], w9:[],     w10:[]     },
};

// ── PEOPLE ────────────────────────────────────────────────────────────────────
// Default sensei roster (used only the very first time the app runs — after
// that, the live roster lives in `state.people` and is synced via Supabase so
// adds/removes/location-changes persist and sync across devices).
const DEFAULT_PEOPLE = [
  { id: "sanjog",  name: "Sanjog",  color: "#e63946", emoji: "🔴", location: "rh" },
  { id: "ava",     name: "Ava",     color: "#f5821f", emoji: "🟠", location: "rh" },
  { id: "hayder",  name: "Hayder",  color: "#1a7abf", emoji: "🔵", location: "rh" },
  { id: "hayley",  name: "Hayley",  color: "#3daa5c", emoji: "🟢", location: "rh" },
  { id: "dean",    name: "Dean",    color: "#ffb703", emoji: "🟡", location: "rh" },
  { id: "kelly",   name: "Kelly",   color: "#8338ec", emoji: "🟣", location: "rh" },
  { id: "kaden",   name: "Kaden",   color: "#7b2d8b", emoji: "🟣", location: "em" },
  { id: "camden",  name: "Camden",  color: "#c0392b", emoji: "🔴", location: "em" },
  { id: "laura",   name: "Laura",   color: "#16a085", emoji: "🟢", location: "em" },
];

const MAX_PER_CAMP = 3; // max 3 senseis per camp per session, per location

// Palette used to auto-assign a color/emoji to newly-added senseis.
const NEW_PERSON_PALETTE = [
  { color: "#e63946", emoji: "🔴" },
  { color: "#f5821f", emoji: "🟠" },
  { color: "#ffd166", emoji: "🟡" },
  { color: "#3daa5c", emoji: "🟢" },
  { color: "#1a7abf", emoji: "🔵" },
  { color: "#7b2d8b", emoji: "🟣" },
  { color: "#16a085", emoji: "🟤" },
  { color: "#c0392b", emoji: "⚫" },
  { color: "#8338ec", emoji: "⚪" },
  { color: "#ffb703", emoji: "🟠" },
];

function pickPaletteFor(existingPeople) {
  const usedColors = new Set(existingPeople.map((p) => p.color));
  const free = NEW_PERSON_PALETTE.find((c) => !usedColors.has(c.color));
  return free || NEW_PERSON_PALETTE[existingPeople.length % NEW_PERSON_PALETTE.length];
}

function slugify(name) {
  return name.trim().toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "");
}

function makeUniquePersonId(name, existingPeople) {
  const base = slugify(name) || "sensei";
  let id = base;
  let n = 2;
  while (existingPeople.some((p) => p.id === id)) {
    id = `${base}_${n}`;
    n++;
  }
  return id;
}

// ─── STATE & SUPABASE SYNC ───────────────────────────────────────────────────
let state = {};

const SUPABASE_URL = "https://rxkfdwbpxazttcdyqncf.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ4a2Zkd2JweGF6dHRjZHlxbmNmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIzODYyMTcsImV4cCI6MjA5Nzk2MjIxN30.-azG0BPoxu8Yjfc5uATvsB6nFpCfpjpsYNlfnUFQ5aw";

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  global: {
    headers: { "X-Schedule-Password": "CodeNinjasRH2026!" },
  },
});

// state shape: { people: [ {id,name,color,emoji,location}, ... ], assignments: { personId: { weekId: {am,pm} } } }
function emptyWeekMap() {
  const m = {};
  WEEKS.forEach((w) => { m[w.id] = { am: "", pm: "" }; });
  return m;
}

function generateDefaultState() {
  const assignments = {};
  DEFAULT_PEOPLE.forEach((p) => { assignments[p.id] = emptyWeekMap(); });
  return { people: DEFAULT_PEOPLE.map((p) => ({ ...p })), assignments };
}

function ensurePersonAssignments(personId) {
  if (!state.assignments[personId]) state.assignments[personId] = emptyWeekMap();
}

async function initState() {
  try {
    const { data, error } = await supabaseClient
      .from("schedule_state")
      .select("state_json")
      .eq("id", 1)
      .single();

    if (error) throw error;

    if (data && data.state_json && Object.keys(data.state_json).length > 0) {
      const loaded = data.state_json;
      if (loaded.people && loaded.assignments) {
        // Current format
        state = loaded;
      } else {
        // Legacy format: the whole object was personId -> weekId -> {am,pm}
        state = { people: DEFAULT_PEOPLE.map((p) => ({ ...p })), assignments: loaded };
      }
      // Ensure every known person has an assignments entry (covers new defaults like Dean/Kelly)
      state.people.forEach((p) => ensurePersonAssignments(p.id));
    } else {
      state = generateDefaultState();
    }
  } catch (err) {
    console.error("Error fetching state from Supabase:", err);
    state = generateDefaultState();
  }

  renderEntireApp();
  setupRealtimeSubscription();
}

async function saveState() {
  try {
    const { error } = await supabaseClient
      .from("schedule_state")
      .update({ state_json: state })
      .eq("id", 1);
    if (error) throw error;
  } catch (err) {
    console.error("Error saving state to Supabase:", err);
  }
}

function setupRealtimeSubscription() {
  supabaseClient
    .channel("public:schedule_state")
    .on("postgres_changes", { event: "UPDATE", schema: "public", table: "schedule_state" }, (payload) => {
      if (payload.new && payload.new.state_json) {
        const loaded = payload.new.state_json;
        state = (loaded.people && loaded.assignments)
          ? loaded
          : { people: DEFAULT_PEOPLE.map((p) => ({ ...p })), assignments: loaded };
        const activePage = currentPage;
        const activeTab = document.querySelector(".week-tab.active");
        renderEntireApp();
        if (activeTab) switchWeek(activeTab.dataset.weekId);
        switchPage(activePage);
      }
    })
    .subscribe();
}

// ─── HELPERS ──────────────────────────────────────────────────────────────────
function getScheduleForLocation(loc) {
  return loc === "em" ? SCHEDULE_EM : SCHEDULE_RH;
}

function getAllPeople() {
  return state.people || [];
}

function getPeopleForLocation(loc) {
  return getAllPeople().filter((p) => p.location === loc);
}

function getCampsForWeekSession(weekId, session, loc) {
  const schedule = getScheduleForLocation(loc);
  return CAMPS.filter((c) => {
    const avail = schedule[c.id]?.[weekId] || [];
    return avail.includes(session);
  });
}

// Count picks within a given location group only
function getPickCount(weekId, session, campId, loc) {
  const key = session === "AM" ? "am" : "pm";
  const people = getPeopleForLocation(loc);
  return people.filter((p) => state.assignments[p.id]?.[weekId]?.[key] === campId).length;
}

// ─── NAV / PAGE SWITCHING ─────────────────────────────────────────────────────
let currentPage = "scheduler"; // "scheduler" | "schedule-rh" | "schedule-em"

function switchPage(page) {
  currentPage = page;
  document.querySelectorAll(".nav-btn").forEach((b) => {
    b.classList.toggle("active", b.dataset.page === page);
  });
  document.querySelectorAll(".page").forEach((p) => {
    p.classList.toggle("active", p.dataset.page === page);
  });
}

// ─── BUILD UI ─────────────────────────────────────────────────────────────────
function buildTabs() {
  const container = document.getElementById("weekTabs");
  container.innerHTML = "";
  WEEKS.forEach((w, i) => {
    const btn = document.createElement("button");
    btn.className = "week-tab" + (i === 0 ? " active" : "");
    btn.textContent = w.label;
    btn.dataset.weekId = w.id;
    btn.addEventListener("click", () => switchWeek(w.id));
    container.appendChild(btn);
  });
}

function buildAllPanels() {
  const container = document.getElementById("mainContent");
  container.innerHTML = "";
  WEEKS.forEach((w, i) => {
    const panel = document.createElement("div");
    panel.className = "week-panel" + (i === 0 ? " active" : "");
    panel.dataset.weekId = w.id;
    panel.innerHTML = buildWeekPanel(w);
    container.appendChild(panel);
  });
  container.querySelectorAll(".camp-select").forEach((sel) => {
    sel.addEventListener("change", onSelectChange);
    styleSelect(sel);
  });
}

function buildWeekPanel(week) {
  const fourDayNote = week.fourDay ? `<span class="week-4day-note">4-Day Week</span>` : "";
  const peopleRh = getPeopleForLocation("rh");
  const peopleEm = getPeopleForLocation("em");
  return `
    <div class="week-heading">
      <h2>${week.dates} ${fourDayNote}</h2>
      <p>Assign AM and PM camps for each sensei. Max <strong>3 senseis</strong> per camp session per location.</p>
    </div>
    <div class="alerts" id="alerts_${week.id}"></div>
    <div class="actions">
      <button class="btn btn-danger" onclick="resetWeek('${week.id}')">Clear this week</button>
    </div>

    <div class="location-section">
      <div class="location-header rh-header">
        <span>Richmond Hill</span>
        <span class="location-sub">${peopleRh.map((p) => p.name).join(" · ") || "No senseis yet"}</span>
      </div>
      <div class="people-grid" id="grid_rh_${week.id}">
        ${peopleRh.map((p) => buildPersonCard(p, week, "rh")).join("")}
        ${buildAddSenseiCard("rh")}
      </div>
    </div>

    <div class="location-section">
      <div class="location-header em-header">
        <span>Elgin Mills</span>
        <span class="location-sub">${peopleEm.map((p) => p.name).join(" · ") || "No senseis yet"}</span>
      </div>
      <div class="people-grid" id="grid_em_${week.id}">
        ${peopleEm.map((p) => buildPersonCard(p, week, "em")).join("")}
        ${buildAddSenseiCard("em")}
      </div>
    </div>

    <div class="divider"></div>
    <div class="summary-section">
      <h3>Week Summary — Richmond Hill</h3>
      ${buildSummaryTable(week, peopleRh)}
      <h3 style="margin-top:20px">Week Summary — Elgin Mills</h3>
      ${buildSummaryTable(week, peopleEm)}
    </div>
    <div class="divider"></div>
    <div class="cap-section">
      <h3 style="font-family:var(--font-display);font-size:1.05rem;font-weight:600;color:var(--text);margin-bottom:8px;">
        Camp Capacity — Richmond Hill
      </h3>
      <div class="cap-grid" id="capgrid_rh_${week.id}">${buildCapGrid(week, "rh")}</div>
      <h3 style="font-family:var(--font-display);font-size:1.05rem;font-weight:600;color:var(--text);margin:18px 0 8px;">
        Camp Capacity — Elgin Mills
      </h3>
      <div class="cap-grid" id="capgrid_em_${week.id}">${buildCapGrid(week, "em")}</div>
    </div>
  `;
}

function buildAddSenseiCard(loc) {
  const locLabel = loc === "rh" ? "Richmond Hill" : "Elgin Mills";
  return `
    <button class="add-sensei-card" onclick="promptAddSensei('${loc}')" title="Add a sensei to ${locLabel}">
      <span class="add-sensei-plus">+</span>
      <span>Add sensei</span>
    </button>
  `;
}

function buildPersonCard(person, week, loc) {
  const amCamps = getCampsForWeekSession(week.id, "AM", loc);
  const pmCamps = getCampsForWeekSession(week.id, "PM", loc);
  const curAm = state.assignments[person.id]?.[week.id]?.am || "";
  const curPm = state.assignments[person.id]?.[week.id]?.pm || "";

  const amOptions = `<option value="">— pick a camp —</option>` +
    amCamps.map((c) => {
      const cnt = getPickCount(week.id, "AM", c.id, loc);
      const full = cnt >= MAX_PER_CAMP && curAm !== c.id;
      const warn = cnt === MAX_PER_CAMP - 1 && curAm !== c.id;
      const label = `${c.name} (${c.age}yr)${c.badge ? " " + c.badge : ""}` +
        (full ? " — FULL" : warn ? " — 1 spot left" : "");
      return `<option value="${c.id}" ${curAm === c.id ? "selected" : ""} ${full ? "disabled" : ""}>${label}</option>`;
    }).join("");

  const pmOptions = `<option value="">— pick a camp —</option>` +
    pmCamps.map((c) => {
      const cnt = getPickCount(week.id, "PM", c.id, loc);
      const full = cnt >= MAX_PER_CAMP && curPm !== c.id;
      const warn = cnt === MAX_PER_CAMP - 1 && curPm !== c.id;
      const label = `${c.name} (${c.age}yr)${c.badge ? " " + c.badge : ""}` +
        (full ? " — FULL" : warn ? " — 1 spot left" : "");
      return `<option value="${c.id}" ${curPm === c.id ? "selected" : ""} ${full ? "disabled" : ""}>${label}</option>`;
    }).join("");

  const noAm = amCamps.length === 0;
  const noPm = pmCamps.length === 0;

  return `
    <div class="person-card" id="card_${person.id}_${week.id}" style="--card-accent:${person.color}">
      <div class="person-header">
        <div class="person-avatar" style="background:${person.color}1c; color:${person.color}; border:1px solid ${person.color}40">${person.name[0]}</div>
        <h3>${person.name}</h3>
        <div class="person-header-actions">
          <select class="loc-select" title="Move to a different centre" data-person="${person.id}" onchange="onLocationChange(this)">
            <option value="rh" ${loc === "rh" ? "selected" : ""}>Richmond Hill</option>
            <option value="em" ${loc === "em" ? "selected" : ""}>Elgin Mills</option>
          </select>
          <button class="remove-sensei-btn" title="Remove ${person.name}" onclick="removeSensei('${person.id}')">✕</button>
        </div>
      </div>
      <div class="person-body">
        <div class="session-block">
          <div class="session-label">
            <span class="tag am">// AM</span>
            <span class="tag time">9:00–12:00</span>
          </div>
          ${noAm
            ? `<div style="font-size:0.8rem;color:var(--text-muted);font-style:italic;padding:6px 0">No AM camps this week</div>`
            : `<select class="camp-select" data-person="${person.id}" data-week="${week.id}" data-session="am" data-loc="${loc}">${amOptions}</select>`}
        </div>
        <div class="session-block">
          <div class="session-label">
            <span class="tag pm">// PM</span>
            <span class="tag time">1:00–4:00</span>
          </div>
          ${noPm
            ? `<div style="font-size:0.8rem;color:var(--text-muted);font-style:italic;padding:6px 0">No PM camps this week</div>`
            : `<select class="camp-select" data-person="${person.id}" data-week="${week.id}" data-session="pm" data-loc="${loc}">${pmOptions}</select>`}
        </div>
      </div>
    </div>
  `;
}

function buildSummaryTable(week, people) {
  const rows = people.map((p) => {
    const amId = state.assignments[p.id]?.[week.id]?.am || "";
    const pmId = state.assignments[p.id]?.[week.id]?.pm || "";
    const amCamp = CAMPS.find((c) => c.id === amId);
    const pmCamp = CAMPS.find((c) => c.id === pmId);
    return `
      <tr>
        <td><strong style="color:${p.color}">${p.name}</strong></td>
        <td>${amCamp ? `<span class="chip am">${amCamp.name}</span>` : `<span class="chip none">Not selected</span>`}</td>
        <td>${pmCamp ? `<span class="chip pm">${pmCamp.name}</span>` : `<span class="chip none">Not selected</span>`}</td>
      </tr>`;
  }).join("");
  return `
    <table class="summary-table">
      <thead><tr><th>Sensei</th><th>AM Camp</th><th>PM Camp</th></tr></thead>
      <tbody>${rows}</tbody>
    </table>`;
}

function buildCapGrid(week, loc) {
  const schedule = getScheduleForLocation(loc);
  const offered = CAMPS.filter((c) => {
    const avail = schedule[c.id]?.[week.id] || [];
    return avail.length > 0;
  });
  if (offered.length === 0) return `<div style="color:var(--text-muted);font-size:0.85rem;font-style:italic;padding:8px 0">No camps scheduled this week at this location.</div>`;
  return offered.map((c) => {
    const avail = schedule[c.id]?.[week.id] || [];
    const items = avail.map((sess) => {
      const cnt = getPickCount(week.id, sess, c.id, loc);
      const cls = cnt === 0 ? "c0" : cnt === 1 ? "c1" : "c2";
      return `
        <div style="margin-bottom:5px">
          <div style="font-size:0.73rem;font-weight:700;color:var(--text-muted);margin-bottom:2px">${sess}</div>
          <div class="cap-bar-wrap">
            <div class="cap-bar ${cls}" style="width:${Math.round((cnt / MAX_PER_CAMP) * 100)}%"></div>
          </div>
          <div class="cap-label">${cnt} / ${MAX_PER_CAMP} senseis</div>
        </div>`;
    }).join("");
    return `
      <div class="cap-card">
        <div class="cc-name">${c.name} <span style="font-size:0.7rem;color:var(--text-muted);font-weight:600">(${c.age}yr)</span></div>
        ${items}
      </div>`;
  }).join("");
}

function updateAlerts(weekId) {
  const container = document.getElementById(`alerts_${weekId}`);
  if (!container) return;
  const alerts = [];

  ["rh", "em"].forEach((loc) => {
    const schedule = getScheduleForLocation(loc);
    const people = getPeopleForLocation(loc);
    const locLabel = loc === "rh" ? "Richmond Hill" : "Elgin Mills";

    ["AM", "PM"].forEach((sess) => {
      const key = sess === "AM" ? "am" : "pm";
      getCampsForWeekSession(weekId, sess, loc).forEach((c) => {
        const cnt = getPickCount(weekId, sess, c.id, loc);
        if (cnt > MAX_PER_CAMP) {
          const who = people.filter((p) => state.assignments[p.id]?.[weekId]?.[key] === c.id).map((p) => p.name).join(", ");
          alerts.push(`<div class="alert error"><strong>[${locLabel}] ${c.name} (${sess})</strong> is over capacity — ${cnt}/${MAX_PER_CAMP} — ${who}</div>`);
        } else if (cnt === MAX_PER_CAMP) {
          const who = people.filter((p) => state.assignments[p.id]?.[weekId]?.[key] === c.id).map((p) => p.name).join(", ");
          alerts.push(`<div class="alert warn"><strong>[${locLabel}] ${c.name} (${sess})</strong> is full (${cnt}/${MAX_PER_CAMP}) — ${who}</div>`);
        }
      });
    });

    people.forEach((p) => {
      const amEmpty = !state.assignments[p.id]?.[weekId]?.am;
      const pmEmpty = !state.assignments[p.id]?.[weekId]?.pm;
      const amAvail = getCampsForWeekSession(weekId, "AM", loc).length > 0;
      const pmAvail = getCampsForWeekSession(weekId, "PM", loc).length > 0;
      const missing = [amEmpty && amAvail ? "AM" : "", pmEmpty && pmAvail ? "PM" : ""].filter(Boolean).join(" & ");
      if (missing) {
        alerts.push(`<div class="alert info"><strong>${p.name}</strong> (${locLabel}) hasn't been assigned a ${missing} camp yet</div>`);
      }
    });
  });

  container.innerHTML = alerts.join("");
}

// ─── EVENTS ───────────────────────────────────────────────────────────────────
function onSelectChange(e) {
  const { person, week, session } = e.target.dataset;
  ensurePersonAssignments(person);
  if (!state.assignments[person][week]) state.assignments[person][week] = { am: "", pm: "" };
  state.assignments[person][week][session] = e.target.value;
  saveState();
  refreshWeek(week);
}

// ─── ROSTER MANAGEMENT (add / remove / move senseis) ────────────────────────
function promptAddSensei(loc) {
  const locLabel = loc === "rh" ? "Richmond Hill" : "Elgin Mills";
  const name = prompt(`Sensei's name to add to ${locLabel}:`);
  if (!name || !name.trim()) return;
  addSensei(name.trim(), loc);
}

function addSensei(name, loc) {
  const people = getAllPeople();
  const id = makeUniquePersonId(name, people);
  const palette = pickPaletteFor(people);
  const newPerson = { id, name, color: palette.color, emoji: palette.emoji, location: loc };
  state.people.push(newPerson);
  state.assignments[id] = emptyWeekMap();
  saveState();
  rerenderKeepingView();
}

function removeSensei(personId) {
  const person = getAllPeople().find((p) => p.id === personId);
  if (!person) return;
  if (!confirm(`Remove ${person.name} from the roster? This will also clear all of their camp assignments.`)) return;
  state.people = state.people.filter((p) => p.id !== personId);
  delete state.assignments[personId];
  saveState();
  rerenderKeepingView();
}

function onLocationChange(selectEl) {
  const personId = selectEl.dataset.person;
  const newLoc = selectEl.value;
  const person = getAllPeople().find((p) => p.id === personId);
  if (!person || person.location === newLoc) return;
  const newLocLabel = newLoc === "rh" ? "Richmond Hill" : "Elgin Mills";
  const ok = confirm(
    `Move ${person.name} to ${newLocLabel}? Their existing camp picks will be cleared, since camp offerings differ by centre.`
  );
  if (!ok) {
    selectEl.value = person.location; // revert
    return;
  }
  person.location = newLoc;
  state.assignments[personId] = emptyWeekMap();
  saveState();
  rerenderKeepingView();
}

// Rebuild the whole app (roster changes affect grids on every week panel)
// while preserving which week tab and which page the user was looking at.
function rerenderKeepingView() {
  const activeTab = document.querySelector(".week-tab.active");
  const activeWeekId = activeTab ? activeTab.dataset.weekId : null;
  const activePage = currentPage;
  renderEntireApp();
  if (activeWeekId) switchWeek(activeWeekId);
  switchPage(activePage);
}

function styleSelect(sel) {
  sel.classList.remove("selected-am", "selected-pm");
  if (sel.value && sel.dataset.session === "am") sel.classList.add("selected-am");
  if (sel.value && sel.dataset.session === "pm") sel.classList.add("selected-pm");
}

function refreshWeek(weekId) {
  const week = WEEKS.find((w) => w.id === weekId);
  const panel = document.querySelector(`.week-panel[data-week-id="${weekId}"]`);
  if (!panel) return;
  panel.innerHTML = buildWeekPanel(week);
  panel.querySelectorAll(".camp-select").forEach((sel) => {
    sel.addEventListener("change", onSelectChange);
    styleSelect(sel);
  });
  updateAlerts(weekId);
}

function resetWeek(weekId) {
  if (!confirm("Clear all picks for this week?")) return;
  getAllPeople().forEach((p) => {
    if (state.assignments[p.id]) state.assignments[p.id][weekId] = { am: "", pm: "" };
  });
  saveState();
  refreshWeek(weekId);
}

function switchWeek(weekId) {
  document.querySelectorAll(".week-tab").forEach((t) => {
    t.classList.toggle("active", t.dataset.weekId === weekId);
  });
  document.querySelectorAll(".week-panel").forEach((p) => {
    p.classList.toggle("active", p.dataset.weekId === weekId);
  });
}

// ─── INIT ─────────────────────────────────────────────────────────────────────
function renderEntireApp() {
  buildTabs();
  buildAllPanels();
  WEEKS.forEach((w) => updateAlerts(w.id));
}

initState();