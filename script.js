/* =========================================================
   JOOVEEN A/L RAVI — PORTFOLIO SCRIPT
   • Video autoplay previews on project cards
   • Click-to-expand cinematic video modal with fullscreen
   • Survival HAT roadmap card (no placeholder image)
   • Tech map network
   • Scroll-reveal animations
   • Particle canvas with mouse-reactive lighting
   ========================================================= */

const projects = [
  {
    id: "survival-hat",
    title: "Survival HAT Research Game",
    meta: "Final Year Project / Unity 6 / In Development",
    tags: ["Unity 6", "C#", "AI Teammates"],
    image: null,          // no image — uses roadmap card
    video: null,          // in development — no video yet
    roadmap: true,        // triggers premium roadmap display
    roadmapStages: [
      { label: "Core Loop", desc: "Player movement, survival mechanics" },
      { label: "AI Teammate", desc: "Behaviour Tree decision logic" },
      { label: "Enemy AI", desc: "FSM + NavMesh zombie patrol" },
      { label: "Research Layer", desc: "HAT data collection & flow" }
    ],
    overview:
      "A survival research platform studying Human-AI Teaming: how players behave when paired with AI teammates during pressure, navigation, and combat scenarios.",
    challenges: [
      "Designing AI teammate behavior that is readable to the player",
      "Balancing zombie patrol, chase, and attack states",
      "Collecting structured feedback for research conclusions"
    ],
    systems: [
      "Behaviour Tree teammate decision logic",
      "FSM enemy state management",
      "NavMesh navigation and combat movement",
      "Player feedback and comparison flow"
    ],
    tech: ["Unity 6", "C#", "Behaviour Trees", "Finite State Machines", "NavMesh"],
    lessons:
      "Research games need both strong systems and clear observation points. The AI must be useful, understandable, and measurable."
  },
  {
    id: "power-kick",
    title: "Power Kick",
    meta: "2nd / 10 Teams · 48-Hour Game Jam",
    tags: ["Unity", "Photon 2", "Multiplayer"],
    image: "assets/project-power-kick.svg",
    video: "assets/videos/power-kick.mp4",   // ← real gameplay video
    roadmap: false,
    overview:
      "An online multiplayer football game built in 48 hours, with real-time networking and power-ups designed for fast competitive chaos.",
    challenges: [
      "Shipping a complete online loop inside a game jam window",
      "Keeping multiplayer actions responsive and readable",
      "Making power-ups feel playful without breaking the match"
    ],
    systems: [
      "Photon 2 room and player synchronization",
      "Ball interaction and scoring flow",
      "Magnet pull, size-boost shield, and respawn gun power-ups",
      "Rapid UI and match state iteration"
    ],
    tech: ["Unity", "C#", "Photon 2"],
    lessons:
      "Multiplayer prototypes succeed when the core loop is tiny, the feedback is immediate, and every feature supports the match rhythm."
  },
  {
    id: "patisserie-rush",
    title: "Patisserie Rush",
    meta: "3rd / 20 Groups · Sole Programmer & UI Designer",
    tags: ["Unity", "FPS", "UI Systems"],
    image: "assets/project-patisserie-rush.svg",
    video: "assets/videos/patisserie-rush.mp4", // ← real gameplay video
    roadmap: false,
    overview:
      "A café bakery simulation where players manage first-person movement, inventory, production steps, recipes, and UI under task pressure.",
    challenges: [
      "Owning all programming while coordinating with a team of four",
      "Connecting recipes, inventory, production logic, and UI",
      "Keeping the interface clear during fast task switching"
    ],
    systems: [
      "First-person player controller",
      "Inventory and pastry production logic",
      "HUD, menus, and recipe panels",
      "Task flow and feedback presentation"
    ],
    tech: ["Unity", "C#", "UI Design"],
    lessons:
      "A simulation feels polished when production logic and UI language are designed together instead of treated as separate layers."
  },
  {
    id: "turbosim",
    title: "TurboSim",
    meta: "Unreal Engine / Vehicle Physics Project",
    tags: ["Unreal", "Physics", "Vehicle Tuning"],
    image: "assets/project-turbosim.svg",
    video: null,
    roadmap: false,
    overview:
      "A vehicle physics project focused on suspension, torque, handling, and driver-adjustable tuning inside Unreal Engine.",
    challenges: [
      "Tuning vehicle feel without losing physical believability",
      "Making suspension and handling changes understandable",
      "Building an interface for parameter experimentation"
    ],
    systems: [
      "Vehicle movement and handling setup",
      "Suspension and torque configuration",
      "Driver-adjustable tuning controls",
      "Telemetry-style feedback surfaces"
    ],
    tech: ["Unreal Engine", "Vehicle Physics"],
    lessons:
      "Physics-heavy gameplay depends on iteration speed. Small tuning tools make it much easier to discover the fun."
  },
  {
    id: "harvestweb",
    title: "HarvestWeb",
    meta: "Browser Farm Simulation / 2024",
    tags: ["JavaScript", "Three.js", "Web 3D"],
    image: "assets/project-harvestweb.svg",
    video: null,
    roadmap: false,
    overview:
      "A 3D farm simulation running entirely in the browser using JavaScript and Three.js, without a native game engine.",
    challenges: [
      "Creating a playable 3D scene inside web constraints",
      "Managing rendering, interaction, and state with vanilla code",
      "Making browser-based simulation feel responsive"
    ],
    systems: [
      "Three.js scene structure",
      "Farm object placement and interaction flow",
      "Browser-based camera and input handling",
      "Simulation state management"
    ],
    tech: ["JavaScript", "Three.js", "HTML", "CSS"],
    lessons:
      "Building in the browser sharpens fundamentals because rendering, interaction, and state are all visible engineering choices."
  },
  {
    id: "busgo",
    title: "BusGo",
    meta: "Desktop Ticketing System / 2023",
    tags: ["C++", "MySQL", "CRUD"],
    image: "assets/project-busgo.svg",
    video: null,
    roadmap: false,
    overview:
      "A full-stack desktop bus ticketing system with MySQL-backed data, seat availability logic, CRUD flows, and validation.",
    challenges: [
      "Coordinating application state with database records",
      "Preventing invalid input and double-booked seats",
      "Keeping ticket workflows predictable for users"
    ],
    systems: [
      "Passenger and ticket CRUD operations",
      "Seat availability checks",
      "MySQL integration through XAMPP",
      "Input validation and booking flow"
    ],
    tech: ["C++", "Visual Studio 2022", "XAMPP", "MySQL"],
    lessons:
      "Utility software still needs game-like clarity: obvious state, fast feedback, and no ambiguity around the next action."
  }
];

const technologies = [
  {
    name: "Unity 6",
    group: "Game Engines",
    x: 22, y: 24,
    experience: "Primary engine for final-year research, gameplay systems, UI, and game jam delivery.",
    useCases: "AI teammates, FPS mechanics, UI, networking, gameplay loops",
    related: "Survival HAT, Power Kick, Patisserie Rush"
  },
  {
    name: "Unreal",
    group: "Game Engines",
    x: 74, y: 20,
    experience: "Used for vehicle physics and Android deployment pipelines.",
    useCases: "Physics prototypes, Android builds, 3D gameplay",
    related: "TurboSim, 3D Runner Platformer"
  },
  {
    name: "GDevelop",
    group: "Game Engines",
    x: 82, y: 42,
    experience: "Used for lightweight 2D mobile game production.",
    useCases: "2D platforming, Android export, rapid prototyping",
    related: "Sandstep"
  },
  {
    name: "C#",
    group: "Programming",
    x: 16, y: 50,
    experience: "Main gameplay programming language across Unity projects.",
    useCases: "Player systems, inventory, AI glue code, UI logic",
    related: "Survival HAT, Patisserie Rush, Power Kick"
  },
  {
    name: "C++",
    group: "Programming",
    x: 32, y: 78,
    experience: "Used for desktop application programming and structured problem solving.",
    useCases: "CRUD applications, validation, data handling",
    related: "BusGo"
  },
  {
    name: "JavaScript",
    group: "Programming",
    x: 68, y: 78,
    experience: "Used for browser-based 3D and this vanilla portfolio build.",
    useCases: "Three.js simulation, UI interaction, DOM systems",
    related: "HarvestWeb"
  },
  {
    name: "Behaviour Trees",
    group: "AI Systems",
    x: 48, y: 17,
    experience: "Used to structure AI teammate decisions in the research game.",
    useCases: "Readable teammate choices, behavior switching, decision hierarchy",
    related: "Survival HAT"
  },
  {
    name: "FSM",
    group: "AI Systems",
    x: 17, y: 70,
    experience: "Used for enemy state control and predictable gameplay behavior.",
    useCases: "Patrol, chase, attack, transition logic",
    related: "Survival HAT"
  },
  {
    name: "NavMesh",
    group: "AI Systems",
    x: 52, y: 88,
    experience: "Used for navigation and pursuit behavior in 3D levels.",
    useCases: "Pathfinding, enemy movement, teammate positioning",
    related: "Survival HAT"
  },
  {
    name: "Photon 2",
    group: "Networking",
    x: 86, y: 62,
    experience: "Used to ship a real-time online football game during a 48-hour jam.",
    useCases: "Rooms, real-time sync, match interactions",
    related: "Power Kick"
  },
  {
    name: "Three.js",
    group: "Creative Tools",
    x: 42, y: 66,
    experience: "Used for browser-native 3D simulation without a game engine.",
    useCases: "Scene rendering, camera movement, web 3D interaction",
    related: "HarvestWeb"
  },
  {
    name: "Blender",
    group: "Creative Tools",
    x: 62, y: 35,
    experience: "Supports 3D asset creation and visual production workflows.",
    useCases: "Models, blocking, visual references",
    related: "3D project pipeline"
  }
];

/* ── DOM refs ─────────────────────────────────────────── */
const projectGrid    = document.querySelector("#project-grid");
const dialog         = document.querySelector("#case-dialog");
const dialogClose    = document.querySelector("#dialog-close");
const caseMediaStage = document.querySelector("#case-media-stage");
const caseThumbs     = document.querySelector("#case-thumbs");
const caseMeta       = document.querySelector("#case-meta");
const caseTitle      = document.querySelector("#case-title");
const caseOverview   = document.querySelector("#case-overview");
const caseChallenges = document.querySelector("#case-challenges");
const caseSystems    = document.querySelector("#case-systems");
const caseTech       = document.querySelector("#case-tech");
const caseLessons    = document.querySelector("#case-lessons");
const techMap        = document.querySelector("#tech-map");
const techLines      = document.querySelector("#tech-lines");
const techDetail     = document.querySelector("#tech-detail");
const reducedMotion  = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ── Build a roadmap card HTML (for Survival HAT) ─────── */
function buildRoadmapCard(project) {
  const nodes = project.roadmapStages
    .map((s, i) => `
      <div class="roadmap-node">
        <span>${String(i + 1).padStart(2, "0")}</span>
        <strong>${s.label}</strong>
        <p>${s.desc}</p>
      </div>`)
    .join("");

  return `
    <div class="project-roadmap" aria-label="${project.title} development roadmap">
      <div class="roadmap-status">
        <span class="roadmap-badge">Currently Building</span>
      </div>
      <div class="roadmap-line">${nodes}</div>
    </div>`;
}

/* ── Build a video preview card HTML ─────────────────── */
function buildVideoPreview(project) {
  return `
    <div class="project-media">
      <video
        src="${project.video}"
        muted
        autoplay
        loop
        playsinline
        preload="metadata"
        aria-hidden="true"
        tabindex="-1"
      ></video>
      <span class="project-media-badge">▶ Gameplay</span>
    </div>`;
}

/* ── Build a static image card HTML ──────────────────── */
function buildImageCard(project) {
  return `<img src="${project.image}" alt="${project.title} project preview" loading="lazy" />`;
}

/* ── Render all project cards ─────────────────────────── */
function renderProjects() {
  projectGrid.innerHTML = projects.map((project) => {
    let mediaHTML;
    if (project.roadmap) {
      mediaHTML = buildRoadmapCard(project);
    } else if (project.video) {
      mediaHTML = buildVideoPreview(project);
    } else {
      mediaHTML = buildImageCard(project);
    }

    const videoClass = project.video ? " has-video" : "";

    return `
      <article
        class="project-card${videoClass}"
        tabindex="0"
        role="button"
        data-project="${project.id}"
        data-reveal
        aria-label="Open ${project.title} case study"
      >
        ${mediaHTML}
        <div class="project-card-body">
          <div class="project-meta">
            ${project.tags.map((tag) => `<span>${tag}</span>`).join("")}
          </div>
          <h3>${project.title}</h3>
          <p>${project.overview}</p>
          <span class="card-link">View Case Study →</span>
        </div>
      </article>`;
  }).join("");

  /* pause all previews when not in viewport */
  const videoObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const video = entry.target.querySelector("video");
      if (!video) return;
      if (entry.isIntersecting) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll(".project-card.has-video").forEach((card) => {
    videoObserver.observe(card);
  });

  /* click / keyboard handlers */
  projectGrid.addEventListener("click", (e) => {
    const card = e.target.closest("[data-project]");
    if (card) openProject(card.dataset.project);
  });
  projectGrid.addEventListener("keydown", (e) => {
    if (e.key !== "Enter" && e.key !== " ") return;
    const card = e.target.closest("[data-project]");
    if (!card) return;
    e.preventDefault();
    openProject(card.dataset.project);
  });
}

/* ── Helpers ──────────────────────────────────────────── */
function renderList(target, items) {
  target.innerHTML = items.map((item) => `<li>${item}</li>`).join("");
}

/* ── Set the main media in the case dialog ────────────── */
function setCaseMedia(src, isVideo, title) {
  if (isVideo) {
    caseMediaStage.innerHTML = `
      <video
        src="${src}"
        controls
        autoplay
        muted
        loop
        playsinline
        preload="auto"
        aria-label="${title} gameplay video"
        id="case-video"
      ></video>`;
    /* fullscreen button injected below the video */
    const vid = caseMediaStage.querySelector("video");
    vid.addEventListener("dblclick", () => {
      if (vid.requestFullscreen) vid.requestFullscreen();
    });
  } else {
    caseMediaStage.innerHTML = `
      <img src="${src}" alt="${title} case study image" />`;
  }
}

/* ── Open case study dialog ───────────────────────────── */
function openProject(projectId) {
  const project = projects.find((p) => p.id === projectId);
  if (!project) return;

  caseMeta.textContent    = project.meta;
  caseTitle.textContent   = project.title;
  caseOverview.textContent = project.overview;
  caseLessons.textContent = project.lessons;
  renderList(caseChallenges, project.challenges);
  renderList(caseSystems,    project.systems);
  renderList(caseTech,       project.tech);

  /* ---- build media gallery ---- */
  caseThumbs.innerHTML = "";

  if (project.roadmap) {
    /* Survival HAT: show detailed roadmap visual, no thumbs */
    caseMediaStage.innerHTML = `
      <div class="roadmap-visual">
        <h3>Currently Building</h3>
        <p>
          A survival game designed as a research platform for Human-AI Teaming studies.
          Screenshots and gameplay video will be added as development progresses.
        </p>
        <div class="roadmap-line">
          ${project.roadmapStages.map((s, i) => `
            <div class="roadmap-node">
              <span>${String(i + 1).padStart(2, "0")}</span>
              <strong>${s.label}</strong>
              <p>${s.desc}</p>
            </div>`).join("")}
        </div>
        <p style="font-size:0.84rem;color:var(--quiet);margin:0;">
          <!-- Replace this section with screenshots once available. -->
        </p>
      </div>`;
  } else {
    /* Projects with media */
    const mediaItems = [];
    if (project.video) mediaItems.push({ src: project.video, isVideo: true });
    if (project.image) mediaItems.push({ src: project.image, isVideo: false });

    if (mediaItems.length > 0) {
      setCaseMedia(mediaItems[0].src, mediaItems[0].isVideo, project.title);

      /* thumbs only when multiple media items */
      if (mediaItems.length > 1) {
        mediaItems.forEach((item, index) => {
          const thumb = document.createElement("button");
          thumb.type = "button";
          thumb.className = `case-thumb${index === 0 ? " is-active" : ""}`;
          thumb.setAttribute("aria-label", `${project.title} media ${index + 1}`);
          if (item.isVideo) {
            thumb.innerHTML = `<span class="thumb-video-icon">▶</span>`;
          } else {
            thumb.innerHTML = `<img src="${item.src}" alt="" loading="lazy" />`;
          }
          thumb.addEventListener("click", () => {
            setCaseMedia(item.src, item.isVideo, project.title);
            document.querySelectorAll(".case-thumb").forEach((t) => t.classList.remove("is-active"));
            thumb.classList.add("is-active");
          });
          caseThumbs.appendChild(thumb);
        });
      }
    } else {
      caseMediaStage.innerHTML = `<div class="case-no-media">No media available yet</div>`;
    }
  }

  dialog.open
    ? null
    : typeof dialog.showModal === "function"
      ? dialog.showModal()
      : dialog.setAttribute("open", "");
}

/* ── Close dialog and stop any playing video ─────────── */
function closeDialog() {
  const vid = dialog.querySelector("video");
  if (vid) vid.pause();
  if (dialog.open && typeof dialog.close === "function") {
    dialog.close();
  } else {
    dialog.removeAttribute("open");
  }
}

/* ── Tech map ─────────────────────────────────────────── */
function renderTechMap() {
  techLines.innerHTML = technologies
    .map((t) => `<line x1="50" y1="50" x2="${t.x}" y2="${t.y}"></line>`)
    .join("");

  technologies.forEach((tech, index) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `tech-node${index === 0 ? " is-active" : ""}`;
    btn.dataset.group = tech.group;
    btn.style.left = `${tech.x}%`;
    btn.style.top  = `${tech.y}%`;
    btn.textContent = tech.name;
    btn.addEventListener("mouseenter", () => selectTechnology(tech.name));
    btn.addEventListener("focus",      () => selectTechnology(tech.name));
    btn.addEventListener("click",      () => selectTechnology(tech.name));
    techMap.appendChild(btn);
  });
}

function selectTechnology(name) {
  const tech = technologies.find((t) => t.name === name);
  if (!tech) return;

  document.querySelectorAll(".tech-node").forEach((node) => {
    node.classList.toggle("is-active", node.textContent === name);
  });

  techDetail.innerHTML = `
    <p class="eyebrow">${tech.group}</p>
    <h3>${tech.name}</h3>
    <p>${tech.experience}</p>
    <dl>
      <div>
        <dt>Experience</dt>
        <dd>${tech.experience}</dd>
      </div>
      <div>
        <dt>Use Cases</dt>
        <dd>${tech.useCases}</dd>
      </div>
      <div>
        <dt>Related Projects</dt>
        <dd>${tech.related}</dd>
      </div>
    </dl>`;
}

/* ── Scroll-reveal ────────────────────────────────────── */
function initReveals() {
  const items = document.querySelectorAll("[data-reveal]");

  if (!("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
  );

  items.forEach((el) => observer.observe(el));
}

/* ── Mouse lighting ──────────────────────────────────── */
function initMouseLighting() {
  window.addEventListener("pointermove", (e) => {
    document.documentElement.style.setProperty("--mx", `${e.clientX}px`);
    document.documentElement.style.setProperty("--my", `${e.clientY}px`);
  });
}

/* ── Animated counters (recruiter section) ───────────── */
function initCounters() {
  const articles = document.querySelectorAll(".recruiter-grid article[data-count]");
  if (!articles.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el     = entry.target;
      const target = parseFloat(el.dataset.count);
      const isDecimal = String(target).includes(".");
      const duration = 1400;
      const start    = performance.now();

      function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3);
        const value = target * ease;
        el.querySelector("strong").textContent =
          isDecimal ? value.toFixed(2) : Math.round(value);
        if (progress < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
      observer.unobserve(el);
    });
  }, { threshold: 0.5 });

  articles.forEach((el) => observer.observe(el));
}

/* ── Particle canvas ─────────────────────────────────── */
function initCanvas() {
  const canvas  = document.querySelector("#world-canvas");
  const context = canvas.getContext("2d");
  let width = 0, height = 0, particles = [], mouseX = 0, mouseY = 0;

  function resize() {
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    width  = window.innerWidth;
    height = window.innerHeight;
    canvas.width  = Math.floor(width  * ratio);
    canvas.height = Math.floor(height * ratio);
    canvas.style.width  = `${width}px`;
    canvas.style.height = `${height}px`;
    context.setTransform(ratio, 0, 0, ratio, 0, 0);

    const density = Math.max(36, Math.min(86, Math.floor((width * height) / 19000)));
    particles = Array.from({ length: density }, (_, i) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.22,
      vy: (Math.random() - 0.5) * 0.22,
      radius: 0.8 + Math.random() * 1.4,
      color: ["rgba(240,183,91,", "rgba(88,212,173,", "rgba(141,182,255,"][i % 3]
    }));
  }

  function draw() {
    context.clearRect(0, 0, width, height);

    const cx = mouseX || width * 0.55;
    const cy = mouseY || height * 0.45;
    const grad = context.createRadialGradient(cx, cy, 0, cx, cy, Math.max(width, height) * 0.72);
    grad.addColorStop(0, "rgba(255,255,255,0.035)");
    grad.addColorStop(0.32, "rgba(240,183,91,0.035)");
    grad.addColorStop(1, "rgba(0,0,0,0)");
    context.fillStyle = grad;
    context.fillRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      if (!reducedMotion) { p.x += p.vx; p.y += p.vy; }
      if (p.x < -20) p.x = width + 20;
      if (p.x > width + 20) p.x = -20;
      if (p.y < -20) p.y = height + 20;
      if (p.y > height + 20) p.y = -20;

      context.beginPath();
      context.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      context.fillStyle = `${p.color}0.42)`;
      context.fill();

      for (let j = i + 1; j < particles.length; j++) {
        const o = particles[j];
        const d = Math.hypot(p.x - o.x, p.y - o.y);
        if (d > 118) continue;
        context.beginPath();
        context.moveTo(p.x, p.y);
        context.lineTo(o.x, o.y);
        context.strokeStyle = `rgba(244,239,230,${0.08 * (1 - d / 118)})`;
        context.lineWidth = 1;
        context.stroke();
      }
    }

    if (!reducedMotion) requestAnimationFrame(draw);
  }

  window.addEventListener("resize", resize);
  window.addEventListener("pointermove", (e) => { mouseX = e.clientX; mouseY = e.clientY; });
  resize();
  draw();
}

/* ── Init ─────────────────────────────────────────────── */
renderProjects();
renderTechMap();
initReveals();
initMouseLighting();
initCounters();
initCanvas();

dialogClose.addEventListener("click", closeDialog);
dialog.addEventListener("click", (e) => { if (e.target === dialog) closeDialog(); });
dialog.addEventListener("keydown", (e) => { if (e.key === "Escape") closeDialog(); });
