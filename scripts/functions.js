const hoverScaleAmount = "w-[700vh]";

export function setImg(character, img) {
    const createImg = document.createElement("img");
    createImg.setAttribute("src", img);
    createImg.classList.add("layer1Img");
    createImg.style.verticalAlign = "middle";
    // character.classList.add(`bg-[url(${img})]`);
    character.appendChild(createImg);
}

export function outTransitionLandingPage(masterDiv, bbUp, bbDown){
    masterDiv.style.transition = "opacity 0.7s ease, transform 0.7s ease";
    bbUp.style.transition = "opacity 0.7s ease, transform 0.7s ease";
    bbDown.style.transition = "opacity 0.7s ease, transform 0.7s ease";
}

export function setTransitions(character) {
    character.style.transition = "width 0.5s cubic-bezier( 0.02, 0.98, 0.45, 0.95), transform 0.3s ease, background-image 0.5s ease, filter 0.4s ease";
}

export function setTransitionsLayer1(character) {
    character.style.transition = "opacity 0.3s ease, transform 0.3s ease, width 0.5s ease";
}

export function setTransitionsLayer2(character) {
    character.style.transition = "opacity 0.5s ease-in-out, transform 0.3s ease, width 0.5s ease";
}

function show(element) {
    element.style.display = "block";
    setTimeout(() => {
        element.style.opacity = "1";
    }, 100);
}

function hide(element) {
    element.style.opacity = "0";
    element.style.display = "none";
}

export function addLinks(container, icon, link) {
    const createA = document.createElement("a");
    const createImg = document.createElement("img");

    createA.setAttribute("href", link);
    createA.setAttribute("target", "_blank");

    createImg.setAttribute("src", icon);
    createImg.classList.add("socialIcon");

    container.appendChild(createA).appendChild(createImg);
}

export function configureButton(container, text, color = "black") {

    const createB = document.createElement("b");
    createB.appendChild(document.createTextNode("View "));

    const createI = document.createElement("i");
    createI.style.color = color
    createI.textContent = text;

    createB.appendChild(createI)
    createB.appendChild(document.createTextNode(" 's edits"));
    container.appendChild(createB);

}

export function addShadows(element, color) {
    element.style.filter = `drop-shadow(5px 5px 0px${color})`
}
export function addShadows2(element, color) {
    element.style.filter = `drop-shadow(2px 1px 0px${color})`
}

export function hoverCharacters(character, img, characterLayer1, characterLayer2) {
    character.addEventListener("mouseenter", () => {
        character.classList.remove("w-full");
        character.classList.add(hoverScaleAmount);

        hide(characterLayer1);
        show(characterLayer2);


        let prev = character.previousElementSibling;
        let next = character.nextElementSibling;

        for (let i = 0; i < 3; i++) {
            if (prev) {
                prev.style.filter = "grayscale(80%)";
                prev = prev.previousElementSibling;
            }
            if (next) {
                next.style.filter = "grayscale(80%)";
                next = next.nextElementSibling;
            }
        }

        
    })

    character.addEventListener("mouseleave", () => {
        character.classList.remove(hoverScaleAmount);

        hide(characterLayer2);
        show(characterLayer1);

        character.classList.add("w-full");

        let prev = character.previousElementSibling;
        let next = character.nextElementSibling;

        for (let i = 0; i < 3; i++) {
            if (prev) {
                prev.style.filter = "grayscale(0%)";
                prev = prev.previousElementSibling;
            }
            if (next) {
                next.style.filter = "grayscale(0%)";
                next = next.nextElementSibling;
            }
        }

    })
}

// slide right when clicked a button in landing page
export function landingPageButtonClick(button, masterDiv, bbUp, bbDown){
    button.addEventListener("click", () => {
        masterDiv.style.transform = "translateX(2500px) scale(1.5)";
        bbUp.style.transform = "translateY(-200px)";
        bbDown.style.transform = "translateY(200px)";

        setTimeout(() => {
            masterDiv.style.display = "none";
            bbUp.style.display = "none";
            bbDown.style.display = "none";
        }, 700);
    })
}