const hoverScaleAmount = "w-[700vh]";

export async function loadHTML(element, html, callback) {
    const res = await fetch(html);
    const html1 = await res.text();
    element.innerHTML = html1;

    if (callback) {
        callback();
    }

}

export function toggleEdit_show(editor) {
    editor.style.display = "flex";
}

export function toggleEdit_hide(editor) {
    editor.style.display = "none";
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
        // bbUp.style.transform = "translateY(-200px)";
        // bbDown.style.transform = "translateY(200px)";

        bbUp.style.height = "50vh"
        bbDown.style.height = "50vh"

        setTimeout(() => {

            masterDiv.style.opacity = "0";
        }, 150);

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

        if (callback) {
            callback();
        }

    })
}


export function displayEdit(
    container, modalId, divId, thumbnail,
    edit_link, edit_title, edit_description,
    edit_audio, anime_used, character_used,
    edit_references, software_used, edit_date,
    editor_name
) {
    // used chat gpt
    // --- create description block ---

    function editorDivValues(parent) {
        const text = document.createElement("span");
        const h1 = document.createElement("h1");
        const text2 = document.createElement("span");

        const placeholder = "many"
        if (editor_name === "-") {
            editor_name = placeholder
        }
        text2.textContent = `@${editor_name}`;
        h1.appendChild(text2);
        if (editor_name === "bloom1lk") {
            h1.style.color = "#EA2F14";
        }
        if (editor_name === "Rei") {
            h1.style.color = "#FCF259";
        }
        if (editor_name === "Mashu") {
            h1.style.color = "#D2C1B6";
        }
        if (editor_name === "Mikari") {
            h1.style.color = "#FAE3C6";
        }
        if (editor_name === placeholder) {
            h1.style.color = "#957C62"
        }
        text.textContent = "Edited by: "
        if (editor_name === placeholder) {
            text.style.color = "#957C62"
        }
        parent.append(
            text, h1
        )
    }

    function descriptionValues(parent) {

        const title = document.createElement("span");

        const desc = document.createElement("span");
        const audio = document.createElement("span");
        const anime = document.createElement("span");
        const character = document.createElement("span");
        const reference = document.createElement("span");
        const software = document.createElement("span");
        const date = document.createElement("span");
        const hr = document.createElement("hr")
        const hr2 = document.createElement("hr")

        const p1 = document.createElement("span");
        const p2 = document.createElement("span");
        const p3 = document.createElement("span");
        const p4 = document.createElement("span");
        const p5 = document.createElement("span");
        const p6 = document.createElement("span");
        const p7 = document.createElement("span");
        const p8 = document.createElement("span");
        const p9 = document.createElement("span");
        const p10 = document.createElement("span");
        const p11 = document.createElement("span");
        const p12 = document.createElement("span");
        const p13 = document.createElement("span");
        const p14 = document.createElement("span");
        const p15 = document.createElement("span");

        hr.classList.add("mt-[1rem]")
        hr.classList.add("mb-[1rem]")
        hr2.classList.add("mt-[1rem]")
        hr2.classList.add("mb-[1rem]")

        title.textContent = `${edit_title}`;
        title.classList.add("bigText");
        title.classList.add("bold");

        desc.textContent = `${edit_description}`;
        desc.classList.add("mt-[1rem]")
        desc.classList.add("mb-[1rem]")

        audio.textContent = `Audio Used: ${edit_audio}`;
        anime.textContent = `Anime: ${anime_used}`;
        character.textContent = `Character/s: ${character_used}`;
        reference.textContent = `Inspired by: ${edit_references}`;
        software.textContent = `Software Used: ${software_used}`;

        date.textContent = `Date Created: ${edit_date}`;
        date.classList.add("italic");
        date.classList.add("text-[1rem]");
        date.classList.add("mt-[1rem]");

        parent.append(
            title,
            hr,
            desc,
            audio,
            anime,
            character,
            reference,
            software,
            hr2,
            date);
    }

    // --- generate unique IDs ---
    // const uniqueSuffix = Date.now() + Math.floor(Math.random() * 1000);
    const uniqueModalId = `${modalId}`;
    const uniqueDivId = `${divId}`;

    let primaryBg = "bg-[#B77466]";
    let secondaryBg = "bg-[#FFE1AF]";
    let tertiaryBg = "bg-[#E2B59A]";
    let textColor = "#957C62";

    if (editor_name === "bloom1lk") {
        primaryBg = "bg-[#FCEF91]";
        secondaryBg = "bg-[#FB9E3A]";
        tertiaryBg = "bg-[#E6521F]";
        textColor = "#EA2F14";
    }

    if (editor_name === "Rei") {
        primaryBg = "bg-[#4A102A]";
        secondaryBg = "bg-[#85193C]";
        tertiaryBg = "bg-[#C5172E]";
        textColor = "#FCF259";
    }

    if (editor_name === "Mashu") {
        primaryBg = "bg-[#1B3C53]";
        secondaryBg = "bg-[#234C6A]";
        tertiaryBg = "bg-[#456882]";
        textColor = "#D2C1B6"
    }

    if (editor_name === "Mikari") {
        primaryBg = "bg-[#B3BFFF]";
        secondaryBg = "bg-[#F564A9]";
        tertiaryBg = "bg-[#FAA4BD]";
        textColor = "#FFF58A";
    }

    // --- create elements ---
    const createModal = document.createElement("div");
    const createInnerModal = document.createElement("div");
    const createIframe = document.createElement("iframe");
    const createDiv = document.createElement("div");
    const createImg = document.createElement("img");
    const createDescDiv = document.createElement("div");
    const createVidDiv = document.createElement("div");
    const createEditorDiv = document.createElement("div");

    // --- structure ---
    createModal.classList.add("modal");
    createModal.id = uniqueModalId;

    createEditorDiv.classList.add("sm:min-w-full");
    createEditorDiv.classList.add("sm:max-w-full");
    createEditorDiv.classList.add(tertiaryBg);

    createVidDiv.classList.add("w-max");

    createInnerModal.classList.add("inner-modal");
    createInnerModal.classList.add(primaryBg);
    createInnerModal.classList.add("flex", "xl:flex-row");
    createInnerModal.classList.add("gap-5");

    createInnerModal.classList.add("sm:flex-col");
    createDescDiv.classList.add("sm:mt-[1rem]");

    createDescDiv.classList.add("xl:mt-[0rem]");
    createDescDiv.classList.add("flex");
    createDescDiv.classList.add("flex-col");
    createDescDiv.classList.add(secondaryBg);
    createDescDiv.classList.add("p-[20px]");
    createDescDiv.style.color = textColor;

    createDescDiv.classList.add("xl:min-w-[600px]");
    createDescDiv.classList.add("xl:max-w-[600px]");

    createDescDiv.classList.add("sm:min-w-full");
    createDescDiv.classList.add("sm:max-w-full");

    createDescDiv.style.borderRadius = "10px";
    // createDescDiv.classList.add("text-black");

    createIframe.src = edit_link;
    createIframe.width = 1000;
    createIframe.height = 600;

    createIframe.classList.add("sm:min-w-full");
    createIframe.classList.add("sm:max-w-full");

    createVidDiv.classList.add("flex");
    createVidDiv.classList.add("flex-col");

    createEditorDiv.classList.add(secondaryBg);
    createEditorDiv.classList.add("mt-[2rem]");
    createEditorDiv.classList.add("p-[20px]");
    createEditorDiv.classList.add("w-[full]");
    createEditorDiv.classList.add("h-[full]");
    createEditorDiv.style.borderRadius = "10px";
    editorDivValues(createEditorDiv);

    // fill in content
    createVidDiv.append(createIframe, createEditorDiv);
    descriptionValues(createDescDiv);
    createInnerModal.append(createVidDiv, createDescDiv);
    createModal.appendChild(createInnerModal);

    // clickable thumbnail
    createDiv.style.cursor = "pointer";
    createDiv.id = uniqueDivId;
    createDiv.style.width = "max-content";
    createImg.src = thumbnail;
    createImg.style.width = "300px";

    createDiv.appendChild(createImg);
    container.append(createDiv, createModal);

    // --- modal behavior ---
    createDiv.addEventListener("click", () => {
        console.log(`clicked ${uniqueDivId}`);
        createModal.classList.add("open");
    });

    createModal.addEventListener("click", (e) => {
        if (e.target === createModal) createModal.classList.remove("open");
    });

    // return ids if needed later
    return { uniqueModalId, uniqueDivId };


}
