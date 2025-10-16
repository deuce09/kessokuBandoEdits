import { setImgSidebar, setTransition_filters, setTextContent } from "./functions.js";
import { hoverCharacterSidebar } from "./functions.js";
import { toggleEditView, toggleEditor } from "./functions.js";
import { updateArray } from "./functions.js";
import { findEnabledEditor, findEnabledEditor_index } from "./functions.js";
import { addTextNode } from "./functions.js";
import { getToggleEditorValue } from "../index.js";

export function main_functions() {
    // console.log("im inside");

    let toggleEditorValue = getToggleEditorValue();
    console.log(toggleEditorValue);

    // ==============
    // SIDEBARS
    // ==============
    const kitaIcon = document.getElementById("kitaIcon");
    const ryoIcon = document.getElementById("ryoIcon");
    const hitoriIcon = document.getElementById("hitoriIcon");
    const nijikaIcon = document.getElementById("nijikaIcon");

    const kitaIcon_img = "../assets/img/kitaIcon.png";
    const ryoIcon_img = "../assets/img/ryoIcon.png";
    const hitoriIcon_img = "../assets/img/hitoriIcon.png";
    const nijikaIcon_img = "../assets/img/nijikaIcon.png";

    // ===========================
    // ARRAYS FOR LOOPING
    // ===========================

    const sidebarIcons = [
        kitaIcon,
        ryoIcon,
        hitoriIcon,
        nijikaIcon
    ];

    const sidebarIcons_img = [
        kitaIcon_img,
        ryoIcon_img,
        hitoriIcon_img,
        nijikaIcon_img
    ];

    const sidebarIcons_id = [
        "kitaIcon_sidebar",
        "ryoIcon_sidebar",
        "hitoriIcon_sidebar",
        "nijikaIcon_sidebar"
    ];

    const sidebarIcons_img_div_group = [
        "kitaIcon_div",
        "ryoIcon_div",
        "hitoriIcon_div",
        "nijikaIcon_div"
    ];

    // FOR ACTIVATING AND DEACTIVATION LATER SA PAG FILTER


    for (let i = 0; i < sidebarIcons.length; i++) {
        setImgSidebar(sidebarIcons[i], sidebarIcons_img[i], sidebarIcons_img_div_group[i], sidebarIcons_id[i], toggleEditorValue[i]);
    }

    let toggle_rei = document.getElementById("kitaIcon_sidebar").value;
    let toggle_mashu = document.getElementById("ryoIcon_sidebar").value;
    let toggle_mika = document.getElementById("hitoriIcon_sidebar").value;
    let toggle_bloo = document.getElementById("nijikaIcon_sidebar").value;

    const hiddenInput_rei = document.getElementById("kitaIcon_sidebar");
    const hiddenInput_mashu = document.getElementById("ryoIcon_sidebar");
    const hiddenInput_mika = document.getElementById("hitoriIcon_sidebar");
    const hiddenInput_bloo = document.getElementById("nijikaIcon_sidebar");

    const videoEditorName = document.getElementById("videoEditor_name");
    const collab_mep = document.getElementById("collab_mep");


    // HIDDEN VALUE
    let hiddenInputs = [
        hiddenInput_rei,
        hiddenInput_mashu,
        hiddenInput_mika,
        hiddenInput_bloo
    ];

    const editorNames = [
        "Rei",
        "Mashu",
        "Mikari",
        "Bloomilk"
    ];

    function updateEditorName() {
        if (findEnabledEditor(toggleEditorValue).length === 1) {
            let enabledEditor = findEnabledEditor_index(toggleEditorValue);
            videoEditorName.textContent = editorNames[enabledEditor];
        } else if (findEnabledEditor(toggleEditorValue).length > 1) {
            let enabledEditors = toggleEditorValue.map((value, i) => (value === "1" || value === 1 ? i : -1)).filter(i => i !== -1);
            videoEditorName.textContent = "";

            enabledEditors.forEach((editorIndex) => {
                addTextNode(videoEditorName, editorNames[editorIndex]);
            })
        } else if (findEnabledEditor(toggleEditorValue).length === 0) {
            videoEditorName.textContent = "no one";

        }

        if(findEnabledEditor(toggleEditorValue).length === 4){
            collab_mep.style.display = "block";
        }else{
            collab_mep.style.display = "none";
        }
    }

    updateEditorName();

    for (let i = 0; i < sidebarIcons.length; i++) {

        hoverCharacterSidebar(sidebarIcons[i], hiddenInputs[i]);
        // EDIT VIEW = STARTING POINT / PAGPASOK SA MAIN PAGE
        toggleEditView(hiddenInputs[i], sidebarIcons[i]);

        // CLICKING SIDEBAR
        toggleEditor(sidebarIcons[i], hiddenInputs[i], toggleEditorValue[i], function () {
            // UPDATE YUNG VIEW
            toggleEditView(hiddenInputs[i], sidebarIcons[i]);
            // UPDATE DIN YUNG ARRAY FOR TOGGLING EDITS 
            updateArray(toggleEditorValue, i, hiddenInputs[i].value);

            // CHANGING NAMES
            updateEditorName();


        });

    }

    sidebarIcons.forEach((icon) => {
        // setTransition_filters(icon);
    });

}
