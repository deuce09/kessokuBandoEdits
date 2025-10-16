import { hoverCharacters, configureButton, landingPageButtonClick, outTransitionLandingPage } from "./scripts/functions.js";
import { setImg, setTransitions, setTransitionsLayer1, setTransitionsLayer2, setTransition_opacity } from "./scripts/functions.js";
import { addShadows, addShadows2, addLinks, addBackgroundColor, addPadding, addBorderRadius } from "./scripts/functions.js";
import { loadHTML } from "./scripts/functions.js";
import { main_functions } from "./scripts/main-content.js";

let toggleEditorValue = [
    0, 0, 0, 0
];

export function getToggleEditorValue() {
    return toggleEditorValue;
}

(function () {

    const landingContent = document.getElementById("landing-content");
    const mainContent = document.getElementById("main-content");

    const blackBarsTop = document.getElementById("blackBarsTop");
    const masterDiv = document.getElementById("landingPage");
    const blackBarsBottom = document.getElementById("blackBarsBottom");

    const kitaQuote = document.getElementById("kitaQuote");
    const ryoQuote = document.getElementById("ryoQuote");
    const hitoriQuote = document.getElementById("hitoriQuote");
    const nijikaQuote = document.getElementById("nijikaQuote");

    kitaQuote.textContent = "\"You don’t need tomorrow to matter today\"";
    ryoQuote.textContent = "\"Abandoning your uniqueness is equivalent to dying\"";
    hitoriQuote.textContent = "\"Every sunset could be your last – make it count\"";
    nijikaQuote.textContent = "\"The strongest chains are the ones we don’t see\"";

    // character = main div
    // characterLayers = inner div
    const kitaIkuyo = document.getElementById("kitaIkuyo");
    const ryoYamada = document.getElementById("ryoYamada");
    const hitoriGotou = document.getElementById("hitoriGotou");
    const nijikaIchiji = document.getElementById("nijikaIchiji");

    const kitaIkuyoLayer1 = document.getElementById("kitaIkuyoLayer1");
    const ryoYamadaLayer1 = document.getElementById("ryoYamadaLayer1");
    const hitoriGotouLayer1 = document.getElementById("hitoriGotouLayer1");
    const nijikaIchijiLayer1 = document.getElementById("nijikaIchijiLayer1");

    const kitaIkuyoLayer2 = document.getElementById("kitaIkuyoLayer2");
    const ryoYamadaLayer2 = document.getElementById("ryoYamadaLayer2");
    const hitoriGotouLayer2 = document.getElementById("hitoriGotouLayer2");
    const nijikaIchijiLayer2 = document.getElementById("nijikaIchijiLayer2");

    const reiName = document.getElementById("reiName");
    const mashuName = document.getElementById("mashuName");
    const mikaName = document.getElementById("mikaName");
    const bloomName = document.getElementById("bloomName");

    const kitaImg = "./assets/img/kitaIkuyo.png";
    const ryoImg = "./assets/img/ryoYamada.png";
    const bocchiImg = "./assets/img/hitoriGotou.png";
    const nijikaImg = "./assets/img/nijikaIchiji.png";

    const socialsBloom = document.getElementById("socialsBloom");
    const socialsRei = document.getElementById("socialsRei");
    const socialsMashu = document.getElementById("socialsMashu");
    const socialsMika = document.getElementById("socialsMika");

    const instaIcon = "./assets/svg/instagram.svg";
    const ytIcon = "./assets/svg/youtube.svg";

    const reiButton = document.getElementById("reiButton");
    const mashuButton = document.getElementById("mashuButton");
    const mikaButton = document.getElementById("mikaButton");
    const bloomButton = document.getElementById("bloomButton");

    const qoute = document.querySelectorAll(".quote");

    // ============================================
    // FUNCTIONS
    // ============================================

    qoute.forEach((quoteDiv) => {
        addBackgroundColor(quoteDiv, "#0303031b");
        addPadding(quoteDiv, "10px")
        addBorderRadius(quoteDiv, "10px");
    })

    setImg(kitaIkuyoLayer1, kitaImg);
    setImg(ryoYamadaLayer1, ryoImg);
    setImg(hitoriGotouLayer1, bocchiImg);
    setImg(nijikaIchijiLayer1, nijikaImg);

    setTransitions(kitaIkuyo);
    setTransitions(ryoYamada);
    setTransitions(hitoriGotou);
    setTransitions(nijikaIchiji);

    setTransitionsLayer1(kitaIkuyoLayer1);
    setTransitionsLayer1(ryoYamadaLayer1);
    setTransitionsLayer1(hitoriGotouLayer1);
    setTransitionsLayer1(nijikaIchijiLayer1);

    setTransitionsLayer2(kitaIkuyoLayer2);
    setTransitionsLayer2(ryoYamadaLayer2);
    setTransitionsLayer2(hitoriGotouLayer2);
    setTransitionsLayer2(nijikaIchijiLayer2);

    hoverCharacters(kitaIkuyo, kitaImg, kitaIkuyoLayer1, kitaIkuyoLayer2);
    hoverCharacters(ryoYamada, ryoImg, ryoYamadaLayer1, ryoYamadaLayer2);
    hoverCharacters(hitoriGotou, bocchiImg, hitoriGotouLayer1, hitoriGotouLayer2);
    hoverCharacters(nijikaIchiji, nijikaImg, nijikaIchijiLayer1, nijikaIchijiLayer2);

    configureButton(reiButton, "REI", "#FF4637");
    configureButton(mashuButton, "MASHU", "#02D1E0");
    configureButton(mikaButton, "MIKA", "#FF2291");
    configureButton(bloomButton, "BLOOM", "#FFB400");

    addShadows(reiName, "#FF4637");
    addShadows(mashuName, "#02D1E0");
    addShadows(mikaName, "#FF2291");
    addShadows(bloomName, "#FFB400");

    addShadows2(socialsRei, "#FF4637");
    addShadows2(socialsMashu, "#02D1E0");
    addShadows2(socialsMika, "#FF2291");
    addShadows2(socialsBloom, "#FFB400");

    addLinks(socialsRei, instaIcon, "https://www.instagram.com/reii.editz/");
    addLinks(socialsRei, ytIcon, "https://www.youtube.com/@reiplayss");

    addLinks(socialsMashu, instaIcon, "https://www.instagram.com/mashu.edit/");
    addLinks(socialsMashu, ytIcon, "https://www.youtube.com/@Mashuqii");

    addLinks(socialsMika, instaIcon, "https://www.instagram.com/mikariuwu/");
    addLinks(socialsMika, ytIcon, "https://www.youtube.com/@og-mikari");

    addLinks(socialsBloom, instaIcon, "https://www.instagram.com/bloooo.m/");
    addLinks(socialsBloom, ytIcon, "https://www.youtube.com/@bloom1lk");

    outTransitionLandingPage(masterDiv, blackBarsTop, blackBarsBottom);

    let toggleEditorValue = getToggleEditorValue;

    landingPageButtonClick(reiButton, masterDiv, blackBarsTop, blackBarsBottom, mainContent, toggleEditorValue, 0, 1);
    landingPageButtonClick(mashuButton, masterDiv, blackBarsTop, blackBarsBottom, mainContent, toggleEditorValue, 1, 1);
    landingPageButtonClick(mikaButton, masterDiv, blackBarsTop, blackBarsBottom, mainContent, toggleEditorValue, 2, 1);
    landingPageButtonClick(bloomButton, masterDiv, blackBarsTop, blackBarsBottom, mainContent, toggleEditorValue, 3, 1);

    
    
    // ========================================
    // FUNCTIONS MAIN CONTENT
    // ========================================
    const mainContentHTML = "./html/main-content.html"
    mainContent.style.opacity = "0";
    
    setTransition_opacity(mainContent);


    loadHTML(mainContent, mainContentHTML, function () {
        main_functions();
    });




})();