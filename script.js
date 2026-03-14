/* =========================================================
   WORD, SENTENCE & PARAGRAPH GENERATOR — script.js
   Author: Joshua Abefe
   Description: All JavaScript logic for text generation,
   UI state, dark/light mode, and live clock.
   ========================================================= */

/* ---------------------------------------------------------
   1. DATA POOLS
   These arrays hold the raw data used for generation.
   --------------------------------------------------------- */

/**
 * A pool of 200+ common English words spanning different
 * categories: tech, nature, abstract, descriptive, etc.
 */
const WORDS = [
  // Tech & innovation
  "algorithm", "bandwidth", "blockchain", "catalyst", "cipher",
  "cloud", "codebase", "cybersecurity", "database", "deploy",
  "digital", "encryption", "framework", "gateway", "interface",
  "latency", "machine", "metadata", "network", "neural",
  "optimization", "protocol", "quantum", "runtime", "scalable",
  "software", "startup", "syntax", "terminal", "throughput",
  "token", "upload", "virtual", "wireframe", "workflow",
  // Nature
  "altitude", "archipelago", "aurora", "biodiversity", "canyon",
  "cascade", "celestial", "climate", "constellation", "cosmos",
  "delta", "ecosystem", "equinox", "estuary", "fjord",
  "glacier", "horizon", "lagoon", "meridian", "monsoon",
  "nebula", "ocean", "plateau", "rainfall", "solstice",
  "summit", "terrain", "tidal", "tropical", "zenith",
  // Abstract / ideas
  "ambition", "awareness", "balance", "brilliance", "clarity",
  "courage", "creativity", "curiosity", "determination", "dignity",
  "discovery", "empathy", "enlightenment", "evolution", "excellence",
  "freedom", "gratitude", "harmony", "imagination", "ingenuity",
  "innovation", "integrity", "justice", "knowledge", "legacy",
  "momentum", "passion", "perspective", "potential", "purpose",
  "resilience", "simplicity", "transformation", "vision", "wisdom",
  // Descriptive adjectives
  "abundant", "agile", "authentic", "bold", "brilliant",
  "captivating", "decisive", "dynamic", "elegant", "fearless",
  "fluid", "genuine", "graceful", "immense", "infinite",
  "intuitive", "luminous", "majestic", "nimble", "profound",
  "radiant", "refined", "serene", "vibrant", "vivid",
  // Action verbs
  "accelerate", "achieve", "adapt", "advance", "amplify",
  "build", "create", "cultivate", "design", "develop",
  "empower", "explore", "generate", "inspire", "integrate",
  "launch", "navigate", "pioneer", "scale", "transform",
  // Everyday life
  "adventure", "architecture", "community", "culture", "education",
  "environment", "experience", "expression", "festival", "foundation",
  "heritage", "language", "literature", "movement", "narrative",
  "opportunity", "philosophy", "reflection", "relationship", "society",
  "strategy", "structure", "tradition", "transition", "understanding"
];

/**
 * A pool of complete, meaningful sentences across
 * different themes and styles.
 */
const SENTENCES = [
  // Technology
  "Technology continues to change the way people communicate and work every single day.",
  "Artificial intelligence is transforming industries at an unprecedented pace across the globe.",
  "The rise of cloud computing has made powerful tools accessible to businesses of all sizes.",
  "Open-source software enables developers worldwide to collaborate and build remarkable things together.",
  "Data privacy has become one of the most important conversations in modern society.",
  "The internet connects billions of people, creating a truly global digital community.",
  "Machine learning models are now capable of generating text, images, and even music.",
  "Cybersecurity professionals work tirelessly to protect sensitive information from malicious threats.",
  "Smartphones have put the power of a computer into the hands of nearly everyone.",
  "Software developers write the invisible code that powers the modern world around us.",
  // Innovation
  "Innovation is the engine that drives human progress and economic growth forward.",
  "Every great invention started as a simple idea in someone's curious and creative mind.",
  "The most successful companies are those that continuously reinvent themselves and adapt.",
  "Breakthroughs often happen at the intersection of different disciplines and unexpected perspectives.",
  "Creativity flourishes when people are given the freedom to experiment and make mistakes.",
  // Nature & Environment
  "The ocean covers more than seventy percent of Earth's surface and remains largely unexplored.",
  "Climate change poses one of the greatest challenges that humanity has ever faced.",
  "Biodiversity is the foundation upon which all ecosystems and human civilization depend.",
  "Forests absorb billions of tonnes of carbon dioxide and produce the oxygen we breathe.",
  "Renewable energy sources like solar and wind are reshaping how the world produces power.",
  "The natural world offers endless lessons in resilience, adaptation, and sustainable design.",
  "Scientists estimate that millions of species on Earth have yet to be discovered or named.",
  // Society & Culture
  "Education is the most powerful tool for creating opportunity and reducing inequality worldwide.",
  "A strong community is built on trust, mutual respect, and a shared sense of purpose.",
  "Language is not just a means of communication, it is the carrier of culture and identity.",
  "The arts and humanities help us understand what it means to be human across all ages.",
  "Diversity of thought and background leads to better decisions and more creative solutions.",
  "History teaches us valuable lessons, but it is up to each generation to learn from them.",
  "Empathy is the skill that allows us to truly understand and connect with one another.",
  "Stories have the power to change minds, spark revolutions, and preserve ancient wisdom.",
  // Personal development
  "Success is rarely the result of a single moment, but of consistent effort over many years.",
  "The ability to adapt to change is one of the most valuable skills a person can develop.",
  "Curiosity is the starting point for every great discovery, invention, and breakthrough.",
  "Challenges that seem impossible often reveal hidden strengths we never knew we possessed.",
  "Reading widely and deeply expands our perspective and enriches every aspect of our lives.",
  "Resilience is not the absence of failure but the ability to learn, grow, and move forward.",
  "True confidence comes not from avoiding failure but from knowing you can recover from it.",
  "Every day presents a new opportunity to learn something, improve something, and create something.",
  // Science
  "The universe is approximately thirteen point eight billion years old and still expanding outward.",
  "Einstein's theory of relativity fundamentally changed our understanding of space, time, and gravity.",
  "Quantum mechanics reveals a subatomic world that defies our everyday intuitions about reality.",
  "The human genome contains roughly three billion base pairs packed into almost every single cell.",
  "Modern medicine has increased the average human lifespan by decades over the past century.",
];

/**
 * Paragraph topic seeds. Each entry defines a theme and a set
 * of sentence fragments that get assembled into full paragraphs.
 */
const PARAGRAPH_TOPICS = [
  {
    theme: "Technology",
    opener: "Modern technology has fundamentally transformed the world in ways previous generations could never have imagined.",
    body: [
      "From the smartphones we carry in our pockets to the satellites orbiting far above our heads, digital innovation touches every corner of daily life.",
      "Communication that once took weeks by letter now happens instantly across continents.",
      "Industries from healthcare to agriculture are being reinvented by artificial intelligence and data-driven decision making.",
      "Software developers and engineers work around the clock to build the invisible infrastructure that keeps the modern world running.",
      "As technology continues to advance, the challenge is not only creating new tools but ensuring they are accessible, ethical, and beneficial to all of humanity.",
    ],
    closer: "The future belongs to those who embrace change while holding on to the timeless values of creativity, empathy, and responsibility."
  },
  {
    theme: "Nature",
    opener: "The natural world is a source of endless wonder, complexity, and quiet wisdom that humanity is only beginning to fully appreciate.",
    body: [
      "Forests stretching across continents act as the lungs of the Earth, cycling carbon and producing the oxygen that sustains all life.",
      "Oceans teeming with undiscovered species regulate the planet's climate and provide food for billions of people worldwide.",
      "Every ecosystem, from the driest desert to the deepest rainforest, operates according to intricate webs of interdependence.",
      "When one thread in that web is severed, the ripple effects can travel far and wide, often in ways scientists struggle to predict.",
      "Conservation is therefore not a luxury but a necessity, a responsibility that each generation inherits and must pass on intact.",
    ],
    closer: "In protecting the natural world, we are ultimately protecting ourselves and securing the conditions for all future life on Earth."
  },
  {
    theme: "Education",
    opener: "Education has long been regarded as the cornerstone of individual freedom and societal progress.",
    body: [
      "A quality education opens doors that would otherwise remain forever closed, providing people with the skills and confidence to shape their own futures.",
      "Beyond technical knowledge, education fosters critical thinking, empathy, and the ability to engage constructively with different perspectives.",
      "In an era of rapid change, lifelong learning is no longer optional but essential for navigating an increasingly complex and competitive world.",
      "Digital platforms have made learning more accessible than ever before, connecting students in remote villages with world-class instructors.",
      "Yet access alone is not enough; the quality, relevance, and inclusivity of education must be continuously questioned and improved.",
    ],
    closer: "When we invest in education, we invest in the collective capacity of humanity to solve problems, create beauty, and build a more just world."
  },
  {
    theme: "Innovation",
    opener: "At the heart of every great leap forward in human history lies a single powerful force: the willingness to imagine what does not yet exist.",
    body: [
      "Innovation is rarely the work of lone geniuses; it emerges from collaborative environments where curiosity is encouraged and failure is treated as a lesson.",
      "The greatest breakthroughs often come not from within an established industry but from outsiders who see familiar problems with fresh eyes.",
      "Design thinking, agile methodology, and rapid prototyping have become the languages of modern innovation, shortening the distance from idea to reality.",
      "Startups around the world are disrupting centuries-old industries by asking the simplest of questions: what if there were a better way?",
      "As global challenges grow more complex, the need for bold, creative, and cross-disciplinary thinking has never been greater.",
    ],
    closer: "The most important innovation of any era is not a product or a process, but a shift in how an entire generation chooses to see the world."
  },
  {
    theme: "Society",
    opener: "A healthy society is not measured by the wealth of its richest members but by the wellbeing and dignity afforded to its most vulnerable.",
    body: [
      "Trust between citizens and institutions forms the bedrock upon which democracies, economies, and communities are built and sustained.",
      "Cultural diversity, far from being a source of division, is one of humanity's greatest strengths, a reservoir of ideas, perspectives, and solutions.",
      "Social movements throughout history remind us that meaningful change is possible when ordinary people organise around shared values and refuse to be silenced.",
      "The media plays a critical role in shaping public discourse, and with that power comes a profound responsibility to inform rather than inflame.",
      "Addressing inequality requires not just charitable impulses but structural changes to the systems that perpetuate poverty and limit opportunity.",
    ],
    closer: "Building a better society is the work of every generation, and it begins not in parliaments or boardrooms but in the everyday choices each of us makes."
  },
  {
    theme: "Science",
    opener: "Science is humanity's most systematic and reliable method for distinguishing what is true from what merely feels true.",
    body: [
      "Through centuries of observation, experimentation, and rigorous peer review, scientists have unravelled mysteries that once seemed permanently beyond human grasp.",
      "The periodic table, the laws of thermodynamics, the structure of DNA: each discovery built upon the last, forming a vast, interconnected edifice of knowledge.",
      "Modern medicine, powered by scientific research, has extended human lifespans, eradicated ancient diseases, and reduced suffering on an extraordinary scale.",
      "Space exploration has expanded our cosmic address book from a single planet to a universe of hundreds of billions of galaxies.",
      "Today, the frontiers of science stretch into quantum computing, synthetic biology, and the profound question of whether consciousness can ever be fully explained.",
    ],
    closer: "Science does not offer the comfort of certainty, but it offers something far more valuable: the ever-improving map of a universe eager to be understood."
  },
];


/* ---------------------------------------------------------
   2. STATE
   This object keeps track of the current application state.
   --------------------------------------------------------- */
const state = {
  currentType: "word",   // Active generator type: "word" | "sentence" | "paragraph"
  generatedCount: 0,     // How many times the user has generated content
};


/* ---------------------------------------------------------
   3. DOM REFERENCES
   Grab all elements we need to interact with once, up front.
   --------------------------------------------------------- */
const datetimeDisplay     = document.getElementById("datetime-display");
const themeToggleBtn      = document.getElementById("theme-toggle");
const toggleLabel         = document.getElementById("toggle-label");
const genButtons          = document.querySelectorAll(".gen-btn");
const outputText          = document.getElementById("output-text");
const outputTypeBadge     = document.getElementById("output-type-badge");
const copyBtn             = document.getElementById("copy-btn");
const generateAgainBtn    = document.getElementById("generate-again-btn");
const copyToast           = document.getElementById("copy-toast");
const charCount           = document.getElementById("char-count");
const statGenerated       = document.getElementById("stat-generated");


/* ---------------------------------------------------------
   4. UTILITY HELPERS
   Small reusable functions.
   --------------------------------------------------------- */

/**
 * Returns a random integer between min (inclusive) and max (exclusive).
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

/**
 * Picks a random element from an array.
 * @param {Array} arr
 * @returns {*}
 */
function pickRandom(arr) {
  return arr[randomInt(0, arr.length)];
}

/**
 * Shuffles an array in place (Fisher-Yates algorithm).
 * @param {Array} arr
 * @returns {Array}
 */
function shuffle(arr) {
  const a = [...arr]; // clone so we don't mutate the original
  for (let i = a.length - 1; i > 0; i--) {
    const j = randomInt(0, i + 1);
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}


/* ---------------------------------------------------------
   5. GENERATORS
   Functions that produce random text content.
   --------------------------------------------------------- */

/**
 * Generates a single random word from the WORDS pool.
 * @returns {string}
 */
function generateWord() {
  return pickRandom(WORDS);
}

/**
 * Generates a single random sentence from the SENTENCES pool.
 * @returns {string}
 */
function generateSentence() {
  return pickRandom(SENTENCES);
}

/**
 * Generates a random paragraph by picking a topic and assembling
 * a subset of its sentences together with an opener and closer.
 * @returns {string}
 */
function generateParagraph() {
  // Pick a random paragraph topic
  const topic = pickRandom(PARAGRAPH_TOPICS);

  // Shuffle the body sentences and pick 2–4 of them
  const numberOfBodySentences = randomInt(2, 5); // 2, 3, or 4 sentences
  const selectedBody = shuffle(topic.body).slice(0, numberOfBodySentences);

  // Build the full paragraph: opener + body + closer
  const parts = [topic.opener, ...selectedBody, topic.closer];
  return parts.join(" ");
}


/* ---------------------------------------------------------
   6. DISPLAY / UI UPDATES
   Functions that update the DOM.
   --------------------------------------------------------- */

/**
 * Updates the output text card with new content.
 * Applies a fade-in animation so the change feels smooth.
 * @param {string} text   — The new text to display
 * @param {string} type   — "word" | "sentence" | "paragraph"
 */
function displayOutput(text, type) {
  // Remove the placeholder style
  outputText.classList.remove("placeholder");

  // Trigger re-animation by removing and re-adding the class
  outputText.classList.remove("fade-in");
  // Force a browser reflow so the animation restarts
  void outputText.offsetWidth;
  outputText.classList.add("fade-in");

  // Set the text content
  outputText.textContent = text;

  // Update the type badge in the card header
  outputTypeBadge.textContent = type.toUpperCase();

  // Update the character count footer
  const chars = text.length;
  const words = text.trim().split(/\s+/).filter(w => w.length > 0).length;
  charCount.textContent = `${chars} char${chars !== 1 ? "s" : ""} · ${words} word${words !== 1 ? "s" : ""}`;
}

/**
 * Resets the output card back to its initial placeholder state.
 */
function resetOutput() {
  outputText.textContent = "Click a button above to generate your first word!";
  outputText.classList.add("placeholder");
  outputTypeBadge.textContent = "—";
  charCount.textContent = "";
}

/**
 * Updates which generator button appears "active".
 * @param {string} activeType — "word" | "sentence" | "paragraph"
 */
function setActiveButton(activeType) {
  genButtons.forEach(btn => {
    if (btn.dataset.type === activeType) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
}

/**
 * Increments and displays the generated count stat.
 */
function incrementGeneratedCount() {
  state.generatedCount++;
  statGenerated.textContent = state.generatedCount;
}


/* ---------------------------------------------------------
   7. CORE GENERATION LOGIC
   Wires together the generator and the display update.
   --------------------------------------------------------- */

/**
 * Main function called when the user requests generation.
 * Figures out what type is active, generates text, and updates UI.
 * @param {string} [type] — optional override; defaults to state.currentType
 */
function generate(type) {
  // Use the provided type or fall back to whatever is currently active
  const targetType = type || state.currentType;

  let result = "";

  // Pick the right generator function
  if (targetType === "word") {
    result = generateWord();
  } else if (targetType === "sentence") {
    result = generateSentence();
  } else if (targetType === "paragraph") {
    result = generateParagraph();
  }

  // Show the result in the output card
  displayOutput(result, targetType);

  // Update the stat counter
  incrementGeneratedCount();
}


/* ---------------------------------------------------------
   8. EVENT LISTENERS
   All user interaction handlers.
   --------------------------------------------------------- */

// --- Generator type buttons ---
genButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    // Update state
    state.currentType = btn.dataset.type;

    // Highlight the active button
    setActiveButton(state.currentType);

    // Immediately generate content of the new type
    generate(state.currentType);
  });
});

// --- "Generate Again" button ---
generateAgainBtn.addEventListener("click", () => {
  // Re-run generation with the currently active type
  generate(state.currentType);
});

// --- Copy button ---
copyBtn.addEventListener("click", () => {
  const text = outputText.textContent.trim();

  // Don't copy the placeholder text
  if (outputText.classList.contains("placeholder")) return;

  // Use the Clipboard API to copy text
  navigator.clipboard.writeText(text)
    .then(() => {
      // Show the success toast
      copyToast.classList.add("show");
      // Hide it again after 2 seconds
      setTimeout(() => {
        copyToast.classList.remove("show");
      }, 2000);
    })
    .catch(() => {
      // Fallback: select the text so the user can copy manually
      const range = document.createRange();
      range.selectNode(outputText);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
    });
});


/* ---------------------------------------------------------
   9. DARK / LIGHT MODE
   --------------------------------------------------------- */

/**
 * Applies a theme to the <html> element and saves the
 * user's preference to localStorage.
 * @param {"light"|"dark"} theme
 */
function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  toggleLabel.textContent = theme === "dark" ? "Dark" : "Light";

  // Persist preference
  localStorage.setItem("textgen-theme", theme);
}

/**
 * Toggles between light and dark mode.
 */
function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  applyTheme(next);
}

// Hook up the toggle button
themeToggleBtn.addEventListener("click", toggleTheme);

/**
 * Loads the saved theme from localStorage on page start.
 * Falls back to "light" if nothing is saved.
 */
function loadSavedTheme() {
  const saved = localStorage.getItem("textgen-theme");
  applyTheme(saved === "dark" ? "dark" : "light");
}


/* ---------------------------------------------------------
   10. LIVE DATE & TIME CLOCK
   --------------------------------------------------------- */

/**
 * Formats and updates the datetime display element every second.
 * Format: "Monday, April 6 2026 | 10:45:22 AM"
 */
function updateClock() {
  const now = new Date();

  // Day of week
  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const dayOfWeek = dayNames[now.getDay()];

  // Month name
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const month = monthNames[now.getMonth()];

  // Date parts
  const day   = now.getDate();
  const year  = now.getFullYear();

  // Time parts (12-hour format)
  let hours   = now.getHours();
  const mins  = String(now.getMinutes()).padStart(2, "0");
  const secs  = String(now.getSeconds()).padStart(2, "0");
  const ampm  = hours >= 12 ? "PM" : "AM";
  hours       = hours % 12 || 12; // Convert 0 → 12 for midnight

  // Assemble the final string
  const formatted = `${dayOfWeek}, ${month} ${day} ${year} | ${hours}:${mins}:${secs} ${ampm}`;

  datetimeDisplay.textContent = formatted;
}

// Update immediately, then every second
updateClock();
setInterval(updateClock, 1000);


/* ---------------------------------------------------------
   11. INITIALISATION
   Run everything needed when the page first loads.
   --------------------------------------------------------- */
function init() {
  // Load and apply saved theme preference
  loadSavedTheme();

  // Set first generator button (Word) as active
  setActiveButton("word");

  // Show placeholder text in the output card
  resetOutput();
}

// Run init when the DOM is ready
document.addEventListener("DOMContentLoaded", init);
