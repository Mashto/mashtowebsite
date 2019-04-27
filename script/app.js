let colorVariables = [
    // "rgba(237, 228, 183, 1)",
    // "rgba(65, 48, 38, 1)",
    "rgba(17, 167, 84, 1)",
    "rgba(255, 138, 10, 1)",
    "rgba(196, 52, 4, 1)"
];

let lightDarkColors = [
    "rgb(220, 220, 220)",
    "rgb(55, 55, 55)"
]
// let variableStylesheet = document.styleSheets[0].cssRules[0].href;
// // variableStylesheet.addRule("")
// // variableStylesheet.setProperty("--c-primary", colorVariables[3]);

// console.log(variableStylesheet);

let title = document.getElementById('title');


let CSSVariables = document.querySelector(':root');
CSSVariables.style.setProperty("--c-primary", colorVariables[Math.floor(Math.random()*colorVariables.length)]);

if ([2].includes(colorVariables.indexOf(CSSVariables.style.getPropertyValue("--c-primary")))) {
    CSSVariables.style.setProperty("--c-additional", lightDarkColors[0]);
    // CSSVariables.style.setProperty("--c-additional2", lightDarkColors[1]);
    console.log('true');
} else {
    CSSVariables.style.setProperty("--c-additional", lightDarkColors[1]);
    // CSSVariables.style.setProperty("--c-additional2", lightDarkColors[0]);
    console.log('false');
}

console.log(colorVariables.indexOf(CSSVariables.style.getPropertyValue("--c-primary")));
console.log(CSSVariables.style.getPropertyValue("--c-primary"));
console.log(CSSVariables.style.getPropertyValue("--c-additional"));




// title.addEventListener('click', () => {
//     CSSVariables.style.setProperty("--c-primary", colorVariables[Math.floor(Math.random()*colorVariables.length)]);
//     console.log(CSSVariables.style.getPropertyValue("--c-primary"));
//     // console.log(colorVariables.length);
// });
