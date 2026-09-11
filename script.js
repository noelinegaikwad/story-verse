/**
 * STORY DATA
 */
const stories = [
    {
        id: 'forest',
        title: 'The Lost Forest',
        genre: 'Mystery / Adventure',
        description: 'You discover a mysterious path that leads deep into a forest no one remembers.',
        image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800',
        totalEndings: 5,
        scenes: {
            start: {
                title: "The Whispering Pines",
                text: "The edge of the Blackwood Forest loomed before you. Most villagers stay away, but today, you found a map tucked inside an old book. A glowing path of moss leads inward.",
                image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800",
                choices: [
                    { text: "Follow the glowing moss", next: "glowing_path", stats: { courage: 1 } },
                    { text: "Take the overgrown dirt trail", next: "dirt_trail", stats: { wisdom: 1 } }
                ]
            },
            glowing_path: {
                title: "The Bioluminescent Grove",
                text: "The moss grows brighter, illuminating strange purple flowers. You hear a soft humming sound coming from a hollow tree. It feels magical, yet dangerous.",
                image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=800",
                choices: [
                    { text: "Investigate the hollow tree", next: "hollow_tree", stats: { luck: 1 } },
                    { text: "Keep moving toward the light", next: "guardian_encounter", stats: { courage: 1 } }
                ]
            },
            dirt_trail: {
                title: "The Old Ruins",
                text: "The dirt trail leads to a crumbling stone archway. Ancient symbols are etched into the stone. You feel as though you are being watched.",
                image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800",
                choices: [
                    { text: "Study the ancient symbols", next: "study_symbols", stats: { wisdom: 2 } },
                    { text: "Hide in the shadows", next: "stranger_encounter", stats: { luck: 1 } }
                ]
            },
            hollow_tree: {
                title: "A Hidden Trap",
                text: "As you reach into the tree, the ground beneath you gives way! You fall into a dark pit lined with soft silk. This isn't a tree; it's a nest.",
                image: "https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?auto=format&fit=crop&q=80&w=800",
                choices: [
                    { text: "Try to climb out quietly", next: "ending_lost", stats: { luck: -1 } },
                    { text: "Use your flint to strike a light", next: "ending_escape", stats: { courage: 1 } }
                ]
            },
            study_symbols: {
                title: "Knowledge Found",
                text: "The symbols describe a ritual to summon the forest's heart. You realize the forest isn't lost—it's hiding from the world. A secret door opens in the rock.",
                image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80&w=800",
                choices: [
                    { text: "Enter the Secret Kingdom", next: "ending_kingdom", stats: { wisdom: 2 } }
                ]
            },
            guardian_encounter: {
                title: "The Forest Guardian",
                text: "A massive stag with antlers made of living wood blocks your path. Its eyes glow with ancient intelligence. It seems to be testing your spirit.",
                image: "https://images.unsplash.com/photo-1484406566174-9da000fda645?auto=format&fit=crop&q=80&w=800",
                choices: [
                    { text: "Bow respectfully", next: "ending_guardian", stats: { wisdom: 2 } },
                    { text: "Try to walk past", next: "ending_lost", stats: { courage: 1 } }
                ]
            },
            stranger_encounter: {
                title: "The Cloaked Figure",
                text: "A mysterious stranger emerges from the mist. 'You shouldn't be here,' they whisper. 'But since you found the path, you have a choice to make.'",
                image: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?auto=format&fit=crop&q=80&w=800",
                choices: [
                    { text: "Ask for a way home", next: "ending_stranger" },
                    { text: "Ask to see the truth", next: "ending_kingdom" }
                ]
            },
            // ENDINGS
            ending_guardian: {
                type: "ending",
                title: "The Forest Guardian",
                text: "The stag lowers its head and touches your brow. You are granted the protection of the woods. You become the new protector of the Whispering Pines.",
                description: "You chose respect and wisdom over force.",
                image: "https://images.unsplash.com/photo-1484406566174-9da000fda645?auto=format&fit=crop&q=80&w=800"
            },
            ending_escape: {
                type: "ending",
                title: "The Hidden Escape",
                text: "The light scares off the creatures in the pit. You find a side tunnel that leads back to the village. You're safe, but the forest remains a mystery.",
                description: "You survived through quick thinking.",
                image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=800"
            },
            ending_stranger: {
                type: "ending",
                title: "The Mysterious Stranger",
                text: "The stranger guides you to the edge of the woods. Before disappearing, they hand you a silver coin. 'For your next journey,' they say.",
                description: "You met a legend and returned to tell the tale.",
                image: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?auto=format&fit=crop&q=80&w=800"
            },
            ending_lost: {
                type: "ending",
                title: "Lost Forever",
                text: "The forest shifts and changes around you. No matter which way you turn, the trees look the same. You are now part of the forest's many legends.",
                description: "The forest claimed another soul.",
                image: "https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?auto=format&fit=crop&q=80&w=800"
            },
            ending_kingdom: {
                type: "ending",
                title: "The Secret Kingdom",
                text: "You step through the portal into a city of gold and light. The ancient civilization didn't disappear; they just moved somewhere better.",
                description: "You discovered a world beyond imagination.",
                image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800"
            }
        }
    },
    {
        id: 'kingdom',
        title: 'The Forgotten Kingdom',
        genre: 'Fantasy',
        description: 'An ancient map leads you toward a kingdom that disappeared hundreds of years ago.',
        image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=800',
        totalEndings: 3,
        scenes: { start: { title: "Coming Soon", text: "This story is currently being written by the scribes...", choices: [] } }
    },
    {
        id: 'mars',
        title: 'Mission: Mars',
        genre: 'Sci-Fi',
        description: 'Your spacecraft has detected an unexplained signal coming from the surface of Mars.',
        image: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&q=80&w=800',
        totalEndings: 4,
        scenes: { start: { title: "Coming Soon", text: "Mission control is finalizing coordinates...", choices: [] } }
    }
];

/**
 * APP STATE
 */
let gameState = {
    currentStory: null,
    currentSceneId: 'start',
    stats: { courage: 0, wisdom: 0, luck: 0 },
    history: [],
    unlockedEndings: {} // Format: { storyId: ['ending_id_1', 'ending_id_2'] }
};

/**
 * DOM ELEMENTS
 */
const views = document.querySelectorAll('.view');
const storyGrid = document.getElementById('story-grid');
const collectionGrid = document.getElementById('collection-grid');
const storyScreen = document.getElementById('story-screen');
const choicesContainer = document.getElementById('choices-container');
const sceneTitle = document.getElementById('scene-title');
const sceneText = document.getElementById('scene-text');
const sceneImage = document.getElementById('scene-image');
const progressBar = document.getElementById('progress-bar');
const sceneCounter = document.getElementById('scene-counter');
const statsDisplay = document.getElementById('stats-display');
const choiceHistoryList = document.getElementById('choice-history');

/**
 * INITIALIZATION
 */
function init() {
    loadGlobalProgress();
    renderLibrary();
    setupEventListeners();
    
    // Check if user has an active story session
    const savedSession = localStorage.getItem('storyVerse_activeSession');
    if (savedSession) {
        gameState = JSON.parse(savedSession);
        // We only resume if they were actually in a story
        if (gameState.currentStory) {
            startStory(gameState.currentStory.id, false);
        }
    }
}

function setupEventListeners() {
    document.getElementById('mobile-menu').addEventListener('click', () => {
        document.querySelector('.nav-links').classList.toggle('active');
    });
}

/**
 * NAVIGATION LOGIC
 */
function showSection(sectionId) {
    views.forEach(view => {
        view.classList.add('hidden');
        if (view.id === sectionId) view.classList.remove('hidden');
    });
    
    if (sectionId === 'collection') renderCollection();
    window.scrollTo(0, 0);
}

/**
 * LIBRARY LOGIC
 */
function renderLibrary() {
    storyGrid.innerHTML = '';
    stories.forEach(story => {
        const card = document.createElement('div');
        card.className = 'story-card';
        card.innerHTML = `
            <div class="card-img" style="background-image: url('${story.image}')"></div>
            <div class="card-body">
                <span class="genre-tag">${story.genre}</span>
                <h3>${story.title}</h3>
                <p>${story.description}</p>
                <div style="margin-top:15px; display:flex; justify-content:space-between; align-items:center;">
                    <small>${story.totalEndings} Endings</small>
                    <button class="btn btn-primary" onclick="startStory('${story.id}')">Start Story</button>
                </div>
            </div>
        `;
        storyGrid.appendChild(card);
    });
}

/**
 * STORY ENGINE LOGIC
 */
function startStory(storyId, isNew = true) {
    const story = stories.find(s => s.id === storyId);
    if (!story) return;

    if (isNew) {
        gameState.currentStory = story;
        gameState.currentSceneId = 'start';
        gameState.stats = { courage: 0, wisdom: 0, luck: 0 };
        gameState.history = [];
    }

    document.getElementById('current-story-title').innerText = story.title;
    showSection('story-screen');
    loadScene(gameState.currentSceneId);
}

function loadScene(sceneId) {
    const story = gameState.currentStory;
    const scene = story.scenes[sceneId];

    if (!scene) {
        console.error("Scene not found:", sceneId);
        return;
    }

    // Update UI
    sceneTitle.innerText = scene.title;
    sceneText.innerText = scene.text;
    sceneImage.style.backgroundImage = `url('${scene.image}')`;
    
    // Smooth transition effect
    sceneImage.parentElement.style.opacity = 0;
    setTimeout(() => { sceneImage.parentElement.style.opacity = 1; }, 50);

    // Render Stats
    renderStats();

    // Render Choices
    choicesContainer.innerHTML = '';
    if (scene.type === 'ending') {
        showEnding(scene);
    } else {
        scene.choices.forEach(choice => {
            const btn = document.createElement('button');
            btn.className = 'btn btn-choice';
            btn.innerText = choice.text;
            btn.onclick = () => makeChoice(choice);
            choicesContainer.appendChild(btn);
        });
    }

    updateProgressUI();
    saveActiveSession();
}

function makeChoice(choice) {
    // Update Stats
    if (choice.stats) {
        for (let stat in choice.stats) {
            gameState.stats[stat] += choice.stats[stat];
        }
    }

    // Update History
    gameState.history.push(choice.text);
    renderHistory();

    // Move to next scene
    gameState.currentSceneId = choice.next;
    loadScene(choice.next);
}

function renderStats() {
    statsDisplay.innerHTML = `
        <span>Courage: ${'⭐'.repeat(Math.max(0, gameState.stats.courage))}</span>
        <span>Wisdom: ${'⭐'.repeat(Math.max(0, gameState.stats.wisdom))}</span>
    `;
}

function renderHistory() {
    choiceHistoryList.innerHTML = '';
    gameState.history.slice(-3).forEach(item => {
        const li = document.createElement('li');
        li.innerText = item;
        choiceHistoryList.appendChild(li);
    });
}

function updateProgressUI() {
    const historyLen = gameState.history.length;
    const progress = Math.min((historyLen / 8) * 100, 100);
    progressBar.style.width = `${progress}%`;
    sceneCounter.innerText = `Scene ${historyLen + 1}`;
}

/**
 * ENDING LOGIC
 */
function showEnding(scene) {
    showSection('ending-screen');
    document.getElementById('ending-title').innerText = scene.title;
    document.getElementById('ending-description').innerText = scene.description;

    // Save Unlocked Ending
    const storyId = gameState.currentStory.id;
    if (!gameState.unlockedEndings[storyId]) {
        gameState.unlockedEndings[storyId] = [];
    }
    if (!gameState.unlockedEndings[storyId].includes(gameState.currentSceneId)) {
        gameState.unlockedEndings[storyId].push(gameState.currentSceneId);
    }
    
    // Clear active session since story is over
    localStorage.removeItem('storyVerse_activeSession');
    saveGlobalProgress();
}

function restartCurrentStory() {
    startStory(gameState.currentStory.id, true);
}

function confirmRestart() {
    if (confirm("Are you sure you want to restart? Your current progress will be lost.")) {
        restartCurrentStory();
    }
}

/**
 * COLLECTION / ACHIEVEMENTS
 */
function renderCollection() {
    collectionGrid.innerHTML = '';
    let totalFound = 0;
    let totalPossible = 0;

    stories.forEach(story => {
        const storyEndings = gameState.unlockedEndings[story.id] || [];
        totalFound += storyEndings.length;
        totalPossible += story.totalEndings;

        // Create a header for the story
        const storySection = document.createElement('div');
        storySection.className = 'collection-story-group';
        storySection.style.gridColumn = "1 / -1";
        storySection.innerHTML = `<h3>${story.title} (${storyEndings.length}/${story.totalEndings})</h3>`;
        collectionGrid.appendChild(storySection);

        // Show discovered endings as cards
        for (let i = 0; i < story.totalEndings; i++) {
            const isUnlocked = storyEndings[i] !== undefined;
            const endingId = storyEndings[i];
            const endingData = isUnlocked ? story.scenes[endingId] : null;

            const item = document.createElement('div');
            item.className = `feature-card ${isUnlocked ? '' : 'locked'}`;
            item.style.opacity = isUnlocked ? '1' : '0.4';
            item.innerHTML = `
                <div class="icon">${isUnlocked ? '🔓' : '🔒'}</div>
                <h4>${isUnlocked ? endingData.title : '???'}</h4>
                <p>${isUnlocked ? endingData.description : 'Ending not yet discovered.'}</p>
            `;
            collectionGrid.appendChild(item);
        }
    });

    document.getElementById('completion-stats').innerText = `${totalFound} / ${totalPossible} Endings Discovered`;
}

/**
 * LOCAL STORAGE HELPERS
 */
function saveActiveSession() {
    localStorage.setItem('storyVerse_activeSession', JSON.stringify(gameState));
}

function saveGlobalProgress() {
    localStorage.setItem('storyVerse_unlockedEndings', JSON.stringify(gameState.unlockedEndings));
}

function loadGlobalProgress() {
    const saved = localStorage.getItem('storyVerse_unlockedEndings');
    if (saved) {
        gameState.unlockedEndings = JSON.parse(saved);
    }
}

/**
 * MODAL LOGIC
 */
function openModal() { document.getElementById('how-modal').style.display = 'block'; }
function closeModal() { document.getElementById('how-modal').style.display = 'none'; }

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('how-modal');
    if (event.target == modal) closeModal();
}

// Start the app
init();