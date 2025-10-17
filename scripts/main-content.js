import { setImgSidebar, setTransition_filters, setTextContent, setTransition_opacity, setTransition_transform, displayEdit } from "./functions.js";
import { hoverCharacterSidebar } from "./functions.js";
import { toggleEditView, toggleEditor, toggleEdit_show, toggleEdit_hide } from "./functions.js";
import { updateArray } from "./functions.js";
import { findEnabledEditor, findEnabledEditor_index } from "./functions.js";
import { addTextNode } from "./functions.js";
import { getToggleEditorValue } from "../index.js";
import { kessoku_bando_gang } from "./kessokuGang.js";
import { get_infos_edits } from "./getEdits.js";

export async function main_functions() {

    const kessoku_gang = kessoku_bando_gang();

    const bloom1lk_edits = await get_infos_edits(kessoku_gang[3], "all");
    const rei_edits = await get_infos_edits(kessoku_gang[0], "all");
    const mashu_edits = await get_infos_edits(kessoku_gang[1], "all");
    const mikari_edits = await get_infos_edits(kessoku_gang[2], "all");
    const everyone = await get_infos_edits(kessoku_gang[4], "all");

    function showEdits(container, thumbnail,
        edit_link, edit_title, edit_description,
        edit_audio, anime_used, character_used,
        edit_references, software_used, edit_date, 
        editor_name) {
        for (let i = 0; i < edit_link.length; i++) {
            displayEdit(container, `modal_container${i}`, `edit_container${i}`, thumbnail[i],
                edit_link[i], edit_title[i], edit_description[i],
                edit_audio[i], anime_used[i], character_used[i],
                edit_references[i], software_used[i], edit_date[i], 
                editor_name);
        }
    }

    function displayEdits() {
        const reiEdits = document.getElementById("reiEdits");
        const mashuEdits = document.getElementById("mashuEdits");
        const mikaEdits = document.getElementById("mikaEdits");
        const blooEdits = document.getElementById("blooEdits");
        const mepEdits = document.getElementById("mep_edits");

        let allContainer = [
            reiEdits,
            mashuEdits,
            mikaEdits,
            blooEdits,
            mepEdits
        ]

        let allEditor_edits = [
            rei_edits,
            mashu_edits,
            mikari_edits,
            bloom1lk_edits,
            everyone
        ]

        let allEditor_names = [
            "Rei",
            "Mashu",
            "Mikari",
            "bloom1lk",
            "-"
        ]

        let overall_edits =
            allEditor_edits[0].edit_link.length +
            allEditor_edits[1].edit_link.length +
            allEditor_edits[2].edit_link.length +
            allEditor_edits[3].edit_link.length +
            allEditor_edits[4].edit_link.length

        for (let i = 0; i < kessoku_gang.length; i++) {
            showEdits(allContainer[i], allEditor_edits[i].thumbnail,
                allEditor_edits[i].edit_link, allEditor_edits[i].edit_title, allEditor_edits[i].edit_description,
                allEditor_edits[i].edit_audio, allEditor_edits[i].anime_used, allEditor_edits[i].character_used,
                allEditor_edits[i].edit_references, allEditor_edits[i].software_used, allEditor_edits[i].edit_date,
                allEditor_names[i]
            );
        }
    }


    let toggleEditorValue = getToggleEditorValue();

    // ==============
    // SIDEBARS
    // ==============
    const kitaIcon = document.getElementById("kitaIcon");
    const ryoIcon = document.getElementById("ryoIcon");
    const hitoriIcon = document.getElementById("hitoriIcon");
    const nijikaIcon = document.getElementById("nijikaIcon");

    const kitaIcon_img = "./assets/img/kitaIcon.png";
    const ryoIcon_img = "./assets/img/ryoIcon.png";
    const hitoriIcon_img = "./assets/img/hitoriIcon.png";
    const nijikaIcon_img = "./assets/img/nijikaIcon.png";

    const kitaIcon_img_1 = "./assets/img/kitaIcon1.png";
    const ryoIcon_img_1 = "./assets/img/ryoIcon1.png";
    const hitoriIcon_img_1 = "./assets/img/hitoriIcon1.png";
    const nijikaIcon_img_1 = "./assets/img/nijikaIcon1.png";

    const reiEdits = document.getElementById("reiEdits");
    const mashuEdits = document.getElementById("mashuEdits");
    const mikaEdits = document.getElementById("mikaEdits");
    const blooEdits = document.getElementById("blooEdits");
    const mepEdits = document.getElementById("mep_edits");

    const no_one_selected = document.getElementById("no_one_selected");

    displayEdits();

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
        kitaIcon_img_1,
        ryoIcon_img_1,
        hitoriIcon_img_1,
        nijikaIcon_img_1
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
    const collab_mep_title = document.getElementById("collab_mep_title");
    const contentEdits = document.getElementById("contentEdits");


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

    setTransition_opacity(collab_mep);
    setTransition_transform(contentEdits);

    function updateEditorName() {
        if (findEnabledEditor(toggleEditorValue).length === 1) {
            let enabledEditor = findEnabledEditor_index(toggleEditorValue);
            videoEditorName.textContent = editorNames[enabledEditor];
        } else if (findEnabledEditor(toggleEditorValue).length > 1 && findEnabledEditor(toggleEditorValue) !== 4) {
            let enabledEditors = toggleEditorValue.map((value, i) => (value === "1" || value === 1 ? i : -1)).filter(i => i !== -1);
            videoEditorName.textContent = "";

            enabledEditors.forEach((editorIndex) => {
                addTextNode(videoEditorName, editorNames[editorIndex]);
            })
        } else if (findEnabledEditor(toggleEditorValue).length === 0) {
            videoEditorName.textContent = "no one";

        }

        if (findEnabledEditor(toggleEditorValue).length === 4) {
            videoEditorName.textContent = "Everyone";
            collab_mep.style.display = "block"
            setTimeout(() => {

                collab_mep.style.opacity = "1";
            }, 20);
        } else {
            collab_mep.style.opacity = "0";
            setTimeout(() => {
                collab_mep.style.display = "none"
            }, 20);
        }
    }

    function updateEditView() {
        if (toggleEditorValue[0] === 1 || toggleEditorValue[0] === "1") {
            toggleEdit_show(reiEdits);
        } else {
            toggleEdit_hide(reiEdits);
        }
        if (toggleEditorValue[1] === 1 || toggleEditorValue[1] === "1") {
            toggleEdit_show(mashuEdits);
        } else {
            toggleEdit_hide(mashuEdits);
        }
        if (toggleEditorValue[2] === 1 || toggleEditorValue[2] === "1") {
            toggleEdit_show(mikaEdits);
        } else {
            toggleEdit_hide(mikaEdits);
        }
        if (toggleEditorValue[3] === 1 || toggleEditorValue[3] === "1") {
            toggleEdit_show(blooEdits);

        } else {
            toggleEdit_hide(blooEdits);
        }

        if (
            (toggleEditorValue[0] === 0 || toggleEditorValue[0] === "0") &&
            (toggleEditorValue[1] === 0 || toggleEditorValue[1] === "0") &&
            (toggleEditorValue[2] === 0 || toggleEditorValue[2] === "0") &&
            (toggleEditorValue[3] === 0 || toggleEditorValue[3] === "0")
        ) {
            toggleEdit_show(no_one_selected);
        } else {
            toggleEdit_hide(no_one_selected);
        }
    }

    updateEditorName();
    updateEditView();


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

            // CHANGING VISIBILITY
            updateEditView();

        });

    }

    sidebarIcons.forEach((icon) => {
        // setTransition_filters(icon);
    });

}