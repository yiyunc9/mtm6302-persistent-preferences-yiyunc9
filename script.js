document.addEventListener("DOMContentLoaded", () => {
    // Add the items to the list dynamically when the page loads
    populateList();

    // Load and apply any saved preferences (theme or list style) from localStorage
    loadPreferences();

    // Set up event listeners for when the user changes the theme or list style
    document.getElementById("theme-select").addEventListener("change", changeTheme);
    document.getElementById("list-style-select").addEventListener("change", changeListStyle);
});

function populateList() {
    // Grab the list element from the page
    const list = document.getElementById("dynamic-list");

    // These are the items I want to display in the list
    const items = ["kittens", "puppies", "rabbits", "chicks", "penguins"];

    // Clear out anything already in the list (just in case)
    list.innerHTML = "";

    // Loop through each item and add it to the list as a new <li> element
    items.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        list.appendChild(listItem);
    });
}

function changeTheme() {
    // Get the user's selected theme from the dropdown
    const selectedTheme = document.getElementById("theme-select").value;

    // Update the page's theme by changing the <body> class
    document.body.className = selectedTheme;

    // Save the user's theme choice in localStorage so it sticks next time
    localStorage.setItem("theme", selectedTheme);
}

function changeListStyle() {
    // Find out which list style the user picked
    const selectedListStyle = document.getElementById("list-style-select").value;

    // Apply the new style to the list by changing its class
    const list = document.getElementById("dynamic-list");
    list.className = selectedListStyle;

    // Save the list style choice in localStorage for next time
    localStorage.setItem("listStyle", selectedListStyle);
}

function loadPreferences() {
    // Retrieve any previously saved preferences from localStorage
    const savedTheme = localStorage.getItem("theme");
    const savedListStyle = localStorage.getItem("listStyle");

    // Define the valid options for themes and list styles
    const validThemes = ["light", "dark", "pink"];
    const validListStyles = ["none", "disc", "square"];

    // Make sure the saved values are valid; otherwise, use default values
    const theme = validThemes.includes(savedTheme) ? savedTheme : "light"; // Default to light theme
    const listStyle = validListStyles.includes(savedListStyle) ? savedListStyle : "disc"; // Default to disc style

    // Apply the saved or default theme
    document.body.className = theme;
    document.getElementById("theme-select").value = theme;

    // Apply the saved or default list style
    const list = document.getElementById("dynamic-list");
    list.className = listStyle;
    document.getElementById("list-style-select").value = listStyle;
}
