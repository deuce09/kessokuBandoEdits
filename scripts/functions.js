const hoverScaleAmount = "w-[700vh]";

export async function loadHTML(element, html, callback) {
    const res = await fetch(html);
    const html1 = await res.text();
    element.innerHTML = html1;

    if (callback) {
        callback();
    }

}

export function setImg(character, img) {
    // const createImg = document.createElement("img");

    character.classList.add(`bg-[url(${img})]`);

    // createImg.setAttribute("src", img);
    // createImg.classList.add("layer1Img");
    // createImg.style.verticalAlign = "bottom";
    // character.appendChild(createImg);
}

export function toggleEditView(hiddenInput, character) {
    if (hiddenInput.value === 0 || hiddenInput.value === "0") {
        character.style.filter = "grayscale(100%)";

    } else if (hiddenInput.value === 1 || hiddenInput.value === "1") {
        character.style.filter = "grayscale(0%)";

    }
}

export function addTextNode(element, text) {
    const textNode = document.createTextNode(` ${text} `);

    element.appendChild(textNode);

}

export function findEnabledEditor(array) {
    return array.filter(value => value === "1" || value === 1);
}

export function findEnabledEditor_index(array) {
    return array.findIndex(value => value === 1 || value === "1");
}

export function toggleEditor(characterClick, hiddenInput, value, toggleView) {
    characterClick.addEventListener("click", function () {

        if (value === "0" || value === 0) {
            value = 1;
            hiddenInput.value = value;
            if (toggleView) {
                toggleView()
            }
        } else if (value === "1" || value === 1) {
            value = 0;
            hiddenInput.value = value;
            if (toggleView) {
                toggleView()
            }
        }
    });
}

export function setImgSidebar(character, img, divId = null, inputId = null, value = null) {
    const createInput = document.createElement("input");
    const createImg = document.createElement("img");
    const sidebar_icon_group = document.createElement("div");

    sidebar_icon_group.id = divId;

    const imgSize = "90px"

    createImg.setAttribute("src", img);
    createImg.setAttribute("width", imgSize);
    createImg.setAttribute("height", imgSize);
    createImg.style.borderRadius = "100%";

    createImg.classList.add("sidebarIcon");

    createInput.setAttribute("value", value);
    createInput.setAttribute("id", inputId);
    createInput.setAttribute("type", "hidden");

    sidebar_icon_group.appendChild(createInput);
    sidebar_icon_group.appendChild(createImg);

    character.append(sidebar_icon_group);

}

export function outTransitionLandingPage(masterDiv, bbUp, bbDown) {
    masterDiv.style.transition = "opacity 0.7s ease, transform 0.7s ease";
    bbUp.style.transition = "opacity 0.7s ease, transform 0.7s ease, height 0.5s ease";
    bbDown.style.transition = "opacity 0.7s ease, transform 0.7s ease, height 0.5s ease";
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

export function setTransition_opacity(element) {
    element.style.transition = "opacity 0.5s ease";
}

export function setTransition_filters(element) {
    element.style.transition = "filter 0.5s ease";
}

export function setTransition_transform(element) {
    element.style.transition = "transform 0.5s ease";
}


function show(element) {
    element.style.display = "block";

    setTimeout(() => {

        element.style.opacity = "1";
    }, 10);

}


export function addBackgroundColor(container, color) {
    container.style.backgroundColor = color;
}

export function addPadding(container, paddingValue) {
    container.style.padding = paddingValue;
}

export function addBorderRadius(container, radiusValue) {
    container.style.borderRadius = radiusValue;
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
    createI.style.color = color;
    createI.textContent = text;

    createB.appendChild(createI);
    createB.appendChild(document.createTextNode(" 's edits"));
    createB.style.color = "black";
    container.appendChild(createB);

}

export function updateArray(array, index, hiddenInput) {
    array[index] = hiddenInput;
}

export function setTextContent(id, text) {
    id.textContent = text;
}

export function addShadows(element, color) {
    element.style.filter = `drop-shadow(5px 5px 0px${color})`
}
export function addShadows2(element, color) {
    element.style.filter = `drop-shadow(2px 1px 0px${color})`
}

export function hoverCharacterSidebar(character, hiddenInput) {

    character.addEventListener("mousedown", function () {
        character.style.opacity = "0.8";
    })

    character.addEventListener("mouseup", () => {
        character.style.opacity = "1";
    })

    character.addEventListener("mouseenter", () => {
        if (hiddenInput.value === 0 || hiddenInput.value === "0") {
            character.style.filter = "brightness(1.5) grayscale(100%)";
        } else {
            character.style.filter = "brightness(1.5)";
        }
    });
    character.addEventListener("mouseleave", () => {
        if (hiddenInput.value === 0 || hiddenInput.value === "0") {
            character.style.filter = "brightness(1) grayscale(100%)";
        } else {
            character.style.filter = "brightness(1)";
        }
    });
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
export function landingPageButtonClick(button, masterDiv, bbUp, bbDown, mainContentShow, array, index, value, callback) {
    button.addEventListener("click", () => {
        // masterDiv.style.transform = "translateX(2500px) scale(1.5)";
        masterDiv.style.opacity = "0";
        bbUp.style.transform = "translateY(-200px)";
        bbDown.style.transform = "translateY(200px)";

        bbUp.style.height = "80vh"
        bbDown.style.height = "80vh"

        array[index] = value;

        setTimeout(() => {
            mainContentShow.style.opacity = "1";
        }, 150);


        setTimeout(() => {
            bbUp.style.opacity = "0";
            bbDown.style.opacity = "0";
            setTimeout(() => {
                masterDiv.style.display = "none";
                bbUp.style.display = "none";
                bbDown.style.display = "none";
                bbUp.style.height = "0px";
                bbDown.style.height = "0px";
            }, 600);
        }, 700);

        if(callback){
            callback();
        }

    })
}