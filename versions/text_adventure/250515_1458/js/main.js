/**
 * It is as if you were playing a text adventure
 * Pippin Barr
 * 
 * Eventually to be a way of telling a story by having the user
 * type in commands you would use in a text adventure.
 */

"use strict";

// Our meta data
let meta = undefined;
// Our story data
let story = undefined;
// Where we are in the story
let index = -1;
// For tracking points, seems funny
let points = 0;
// Current location
let currentLocation = undefined;

// Elements from the page itself
const historyElement = document.getElementById("history");
const pointsElement = document.getElementById("points");
const preactionElement = document.getElementById("preaction");
const inputElement = document.getElementById("input");
const reactionElement = document.getElementById("reaction");
const locationElement = document.getElementById("location");

// Load the data
fetch("data/en.json")
    .then(response => response.json())
    .then(json => {
        // Split it out into the meta and story stuff
        meta = json.meta;
        story = json.story;
        start();
    });

/**
 * Gets things going
 */
function start() {
    // Set up the meta data
    document.getElementById("title").textContent = meta["title"];
    document.getElementById("author").textContent = meta["author"];
    document.getElementById("release-nonsense").textContent = meta["release-nonsense"];

    // We want to know when they type in our input box
    inputElement.addEventListener("keydown", processInput);

    // Set the starting location
    currentLocation = meta["start-location"];
    locationElement.textContent = meta["start-location"];

    console.log(currentLocation);

    // Get that cursor blinking!
    inputElement.focus();

    // Let's go!
    nextInput();
}

/**
 * Chooses what the player should do next
 */
function nextInput() {
    // Advance to the next beat
    index++;

    // Check if we've finished
    if (index === story.length) {
        // Some kind of ending 
        const endElement = addP("<strong>The End</strong>");
        endElement.focus();

        window.scrollTo(0, document.body.scrollHeight);
    }
    else {
        displayState();
    }
}

/**
 * Resets the input and adds the current instruction
 */
function displayState() {
    // Reset the input box
    inputElement.value = "";

    // Move if it was a move
    if (story[index].location) {
        currentLocation = story[index].location;
    }
    locationElement.textContent = currentLocation;


    if (story[index].preaction) {
        addP(story[index].preaction, "preaction");
    }

    // Prompt the command
    const command = `Type "${story[index].command}" and press ENTER.`;
    addP(command);

    // Get that cursor blinking!
    inputElement.focus();

    window.scrollTo(0, document.body.scrollHeight);
}

/**
 * Adds the specified HTML in a <p> tag to the history element
 */
function addP(html, style) {
    // Prompt the command
    const p = document.createElement("p");
    p.innerHTML = html;
    historyElement.appendChild(p);

    if (style) {
        p.classList.add(style);
    }

    return p;
}

/**
 * Handles user input, mostly to check if they typed the correct text
 * and pressed enter.
 */
function processInput(event) {
    // Did they just hit enter?
    if (event.keyCode === 13) {
        const input = inputElement.value.toLowerCase();

        addP(`> <strong>${inputElement.value}</strong>`);

        // Clear the input
        clearInput();

        // Check if they typed the right thing...
        if (input === story[index].command) {
            // Yes? Add the points
            points += story[index].points || 0;
            pointsElement.textContent = points;

            // And choose the next thing to type
            nextInput();
        }
        else {
            // If they typed the wrong thing, reiterate the current command
            // Prompt the command
            const command = `${meta.typo}. Type "${story[index].command}" and press ENTER.`;
            addP(command);
        }
    }
}

function clearInput() {
    input.value = "";
}

/**
 * A helper function to return random array elements
 * @param {array} array 
 * @returns {element} a random element in the array
 * @example 
 * const a = [1, 2, 3];
 * const b = randomElement(a); // 1 or 2 or 3
 */
function randomElement(array) {
    const index = Math.floor(Math.random() * array.length);
    return array[index];
}