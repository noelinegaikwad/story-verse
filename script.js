const allStories = {
    fantasy: {
        start: { title: "The Stone Cell", text: "You wake up in a damp cell. A rusty door creaks, and a glowing rune shines on the wall.", choices: [{ text: "Inspect Rune", next: "magic" }, { text: "Kick Door", next: "combat" }] },
        magic: { title: "The Arcane Path", text: "The rune teleports you to the Wizard's Tower. He offers you a staff.", choices: [{ text: "Accept Staff", next: "win_god" }, { text: "Refuse", next: "lose_void" }] },
        combat: { title: "The Escape", text: "You break out and find a sword. A dragon guards the exit.", choices: [{ text: "Fight Dragon", next: "win_hero" }, { text: "Sneak Past", next: "lose_eaten" }] },
        win_god: { title: "Ascended", text: "You became the new Archmage! (Ending 1/4)", choices: [] },
        lose_void: { title: "Lost in Time", text: "Without magic, you drift into the void forever. (Ending 2/4)", choices: [] },
        win_hero: { title: "Slayer", text: "You defeated the dragon and escaped! (Ending 3/4)", choices: [] },
        lose_eaten: { title: "Crunch", text: "Dragons have excellent hearing. You're dinner. (Ending 4/4)", choices: [] }
    },
    scifi: {
        start: { title: "Oxygen Low", text: "Alarms are blaring. The ship's AI asks for a command.", choices: [{ text: "Seal Leak", next: "repair" }, { text: "Eject Pod", next: "escape" }] },
        repair: { title: "The Engine Room", text: "The core is unstable! You need to stabilize it.", choices: [{ text: "Override Manual", next: "win_ship" }, { text: "Call for Help", next: "lose_boom" }] },
        escape: { title: "Dark Space", text: "Your pod is floating toward a strange nebula.", choices: [{ text: "Enter Nebula", next: "win_alien" }, { text: "Wait for Rescue", next: "lose_drift" }] },
        win_ship: { title: "The Captain", text: "You saved the crew and the ship. (Ending 1/4)", choices: [] },
        lose_boom: { title: "Stardust", text: "The help arrived too late. (Ending 2/4)", choices: [] },
        win_alien: { title: "First Contact", text: "Aliens found you and shared their tech! (Ending 3/4)", choices: [] },
        lose_drift: { title: "Cold Silence", text: "The batteries died before anyone found you. (Ending 4/4)", choices: [] }
    },
    heist: {
        start: { title: "The Vault", text: "You're in front of the world's strongest vault. Lasers are active.", choices: [{ text: "Use EMP", next: "tech" }, { text: "Hack Terminal", next: "cyber" }] },
        tech: { title: "The Lobby", text: "The EMP worked, but guards are coming!", choices: [{ text: "Hide in Vent", next: "win_ghost" }, { text: "Flashbang", next: "lose_arrest" }] },
        cyber: { title: "Cyberspace", text: "A security program is tracking your IP.", choices: [{ text: "Counter-Virus", next: "win_rich" }, { text: "Emergency Exit", next: "lose_fail" }] },
        win_ghost: { title: "Ghost Thief", text: "You left with the gold and no one saw you. (Ending 1/4)", choices: [] },
        lose_arrest: { title: "Handcuffed", text: "The flashbang blinded you too. Busted. (Ending 2/4)", choices: [] },
        win_rich: { title: "Cyber King", text: "You drained their bank accounts remotely! (Ending 3/4)", choices: [] },
        lose_fail: { title: "Empty Handed", text: "You got out safe, but without the loot. (Ending 4/4)", choices: [] }
    },
    horror: {
        start: { title: "Rainy Manor", text: "You seek shelter in a mansion. The door locks behind you.", choices: [{ text: "Go Upstairs", next: "ghost" }, { text: "Go Basement", next: "killer" }] },
        ghost: { title: "The Mirror", text: "A ghost appears in the mirror and offers a pact.", choices: [{ text: "Agree", next: "win_spirit" }, { text: "Run", next: "lose_fall" }] },
        killer: { title: "The Workshop", text: "A man with a mask is sharpening a blade.", choices: [{ text: "Fight Back", next: "win_survive" }, { text: "Hide", next: "lose_found" }] },
        win_spirit: { title: "Cursed Power", text: "You survived, but at a dark cost. (Ending 1/4)", choices: [] },
        lose_fall: { title: "Darkness", text: "You tripped in the dark. (Ending 2/4)", choices: [] },
        win_survive: { title: "Final Survivor", text: "You defeated the evil and escaped. (Ending 3/4)", choices: [] },
        lose_found: { title: "The End", text: "There was nowhere to hide. (Ending 4/4)", choices: [] }
    },
    mystery: {
        start: { title: "The Body", text: "The mansion owner is dead. Two people are in the room.", choices: [{ text: "Question Butler", next: "butler" }, { text: "Question Wife", next: "wife" }] },
        butler: { title: "The Wine Cellar", text: "The butler is acting nervous near a hidden door.", choices: [{ text: "Enter Door", next: "win_solve" }, { text: "Accuse Him", next: "lose_wrong" }] },
        wife: { title: "The Garden", text: "The wife is burning letters by the fountain.", choices: [{ text: "Grab Letters", next: "win_truth" }, { text: "Ignore Her", next: "lose_escape" }] },
        win_solve: { title: "Great Detective", text: "You found the secret tunnel and the weapon! (Ending 1/4)", choices: [] },
        lose_wrong: { title: "Mistake", text: "You lacked evidence. He sued you. (Ending 2/4)", choices: [] },
        win_truth: { title: "Justice", text: "The letters proved her motive. (Ending 3/4)", choices: [] },
        lose_escape: { title: "Cold Case", text: "The killer fled while you hesitated. (Ending 4/4)", choices: [] }
    },
    adventure: {
        start: { title: "Temple Entrance", text: "A giant stone head guards the temple. It speaks a riddle.", choices: [{ text: "Solve Riddle", next: "inner" }, { text: "Find Secret Way", next: "cave" }] },
        inner: { title: "Golden Room", text: "The idol is on a pressure plate.", choices: [{ text: "Swap with Bag", next: "win_idol" }, { text: "Just Grab It", next: "lose_rock" }] },
        cave: { title: "The River", text: "An underground river leads deep into the earth.", choices: [{ text: "Swim", next: "win_city" }, { text: "Build Raft", next: "lose_water" }] },
        win_idol: { title: "Legend", text: "You have the golden idol! (Ending 1/4)", choices: [] },
        lose_rock: { title: "Crushed", text: "You are not Indiana Jones. (Ending 2/4)", choices: [] },
        win_city: { title: "El Dorado", text: "You found the lost city of gold! (Ending 3/4)", choices: [] },
        lose_water: { title: "Waterfall", text: "The raft broke over the edge. (Ending 4/4)", choices: [] }
    },
    survival: {
        start: { title: "The Beach", text: "Your plane crashed. You're alone. Night is coming.", choices: [{ text: "Build Fire", next: "fire" }, { text: "Find Shelter", next: "shelter" }] },
        fire: { title: "Smoke Signal", text: "The fire is huge, but it attracts a predator.", choices: [{ text: "Climb Tree", next: "win_rescue" }, { text: "Fight", next: "lose_wild" }] },
        shelter: { title: "Dark Cave", text: "The cave is warm, but you're starving.", choices: [{ text: "Eat Berries", next: "win_native" }, { text: "Hunt Fish", next: "lose_hunger" }] },
        win_rescue: { title: "Saved", text: "A plane saw the fire and you! (Ending 1/4)", choices: [] },
        lose_wild: { title: "Prey", text: "The jungle is dangerous at night. (Ending 2/4)", choices: [] },
        win_native: { title: "Adopted", text: "The island tribe found and helped you. (Ending 3/4)", choices: [] },
        lose_hunger: { title: "Weakness", text: "Survival is harder than it looks. (Ending 4/4)", choices: [] }
    },
    time: {
        start: { title: "The Rift", text: "The machine is glitching. Choose a destination.", choices: [{ text: "The Future", next: "future" }, { text: "The Past", next: "past" }] },
        future: { title: "Year 3000", text: "Robots rule. They want to 'upgrade' you.", choices: [{ text: "Join Them", next: "win_bot" }, { text: "Resist", next: "lose_scrap" }] },
        past: { title: "Ancient Rome", text: "You are in the middle of a gladiator arena.", choices: [{ text: "Fight for Honor", next: "win_emperor" }, { text: "Try to Explain", next: "lose_lion" }] },
        win_bot: { title: "Immortal", text: "You are now a digital god. (Ending 1/4)", choices: [] },
        lose_scrap: { title: "Recycled", text: "Rebels are weak in this timeline. (Ending 2/4)", choices: [] },
        win_emperor: { title: "God King", text: "They think your phone is magic. (Ending 3/4)", choices: [] },
        lose_lion: { title: "History", text: "Romans don't speak English. (Ending 4/4)", choices: [] }
    }
};

let currentStory = null;
let historyLog = [];

function startStory(storyKey) {
    currentStory = storyKey;
    historyLog = [];
    document.getElementById('story-menu').style.display = 'none';
    document.getElementById('gameplay-area').style.display = 'grid';
    document.getElementById('progressWrapper').style.display = 'block';
    document.getElementById('sub-title').innerText = "Your story is unfolding...";
    
    updateHistoryUI();
    renderScene("start");
}

function renderScene(sceneKey) {
    const scene = allStories[currentStory][sceneKey];
    const container = document.getElementById('choices-container');
    
    // Update Text
    document.getElementById('scene-title').innerText = scene.title;
    document.getElementById('story-text').innerText = scene.text;
    
    // Update Progress
    const progress = (historyLog.length / 3) * 100;
    document.getElementById('progressBar').style.width = `${Math.min(progress, 100)}%`;

    // Clear Choices
    container.innerHTML = "";

    if (scene.choices.length === 0) {
        // Ending State
        const restartBtn = document.createElement('button');
        restartBtn.innerText = "Play Again";
        restartBtn.style.borderColor = "var(--success)";
        restartBtn.onclick = () => startStory(currentStory);
        container.appendChild(restartBtn);
    } else {
        // Choice State
        scene.choices.forEach(choice => {
            const btn = document.createElement('button');
            btn.innerText = choice.text;
            btn.onclick = () => {
                historyLog.push(choice.text);
                updateHistoryUI();
                renderScene(choice.next);
            };
            container.appendChild(btn);
        });
    }
}

function updateHistoryUI() {
    const list = document.getElementById('history-list');
    list.innerHTML = "";
    if (historyLog.length === 0) {
        list.innerHTML = "<li>No choices made yet.</li>";
    }
    historyLog.forEach((choice, index) => {
        const li = document.createElement('li');
        li.innerText = `${index + 1}. ${choice}`;
        list.appendChild(li);
    });
}

function quitToMenu() {
    document.getElementById('story-menu').style.display = 'grid';
    document.getElementById('gameplay-area').style.display = 'none';
    document.getElementById('progressWrapper').style.display = 'none';
    document.getElementById('sub-title').innerText = "Select an adventure to begin your journey";
    document.getElementById('progressBar').style.width = "0%";
}