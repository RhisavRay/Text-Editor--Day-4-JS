let optionsButton = document.querySelectorAll(".option-button");
let anvancedOptionButton = document.querySelectorAll(".adv-option-button");
let fontName = document.getElementById("fontName");
let fontSizeRef = document.getElementById("fontSize");
let writingArea = document.getElementById("text-input");
let linkButton = document.getElementById("link");
let alignButtons = document.querySelectorAll(".align");
let spacingButtons = document.querySelectorAll(".spacing");
let formatButtons = document.querySelectorAll(".format");
let scriptButton = document.querySelectorAll(".script");

let fontList = [
    "Arial",
    "Verdana",
    "Times New Roman",
    "Garamond",
    "Georgia",
    "Courier New",
    "Cursive"
];

const initializer = () => {
    highlighter(alignButtons, true);
    highlighter(spacingButtons, true);
    highlighter(formatButtons, false);
    highlighter(scriptButton, true);

    fontList.map((font) => {
        let option = document.createElement("option");
        option.value = font;
        option.innerHTML = font;
        fontName.appendChild(option);
    });

    for(let i = 1; i <= 7; i++)
    {
        let option = document.createElement("option");
        option.value = i;
        option.innerHTML = i;
        fontSizeRef.appendChild(option);
    }

    fontSizeRef.value = 3;
};

const modifyText = (command, defaultUi, value) => {
    document.execCommand(command, defaultUi, value);
};

optionsButton.forEach((button) => {
    button.addEventListener("click", () => {
        modifyText(button.id, false, null);
    });
});

advancedOptionButton.forEach((button) => {
    button.addEventListener("change", () => {
        modifyText(button.id, false, null);
    });
});

linkButton.addEventListener("click", () => {
    let userLink = prompt("Enter a URL...");
    if(/http/i.test(userLink))
        modifyText(linkButton.id, false, userLink);
    else
    {
        userLink = "http://" + userLink;
        modifyText(linkButton.id, false, userLink);
    }
});