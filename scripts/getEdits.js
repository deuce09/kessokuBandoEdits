import { getData } from "./getData.js";

//FOR SETTING / PASSING IN A VARIABLE
// RETURNS ALL STYLES FROM editorName
export async function edit_collection(editorName, styleSelected = null) {
    const editor = await getData(editorName);

    let edit_title = [];
    let edit_link = [];
    let thumbnail = [];
    let edit_audio = [];
    let edit_description = [];
    let anime_used = [];
    let anime_link = [];
    let audio_link = [];
    let edit_references = [];
    let edit_references_link = [];
    let software_used = [];
    let post_link = [];
    let edit_date = [];
    let editor_note = [];
    let character_used = [];

    let things_to_get = [
        edit_title,
        edit_link,
        thumbnail,
        edit_audio,
        edit_description,
        anime_used,
        anime_link,
        audio_link,
        edit_references,
        edit_references_link,
        software_used,
        post_link,
        edit_date,
        editor_note,
        character_used
    ]

    let things_to_get_literal = [
        "edit_title",
        "edit_link",
        "thumbnail",
        "edit_audio",
        "edit_description",
        "anime_used",
        "anime_link",
        "audio_link",
        "edit_references",
        "edit_references_link",
        "software_used",
        "post_link",
        "edit_date",
        "editor_note",
        "character_used"
    ]

    let editor_styles = "";

    editor_styles = editor.styles[styleSelected];

    for (let key in editor_styles) {
        let styles = "";
        if (styleSelected !== "all") {
            styles = editor_styles;
        } else {
            styles = editor_styles[key];
        }

        for (let i = 0; i < things_to_get.length; i++) {
            for (const items of styles) {
                things_to_get[i].push(items[things_to_get_literal[i]]);
            }
        }

    }

    return things_to_get;

}

export async function editor_socials(editorName) {
    const editor = await getData(editorName);

    let ig = [];
    let yt = [];


    for (let key in editor.socials) {
        const socials = editor.socials;
        for (const items of socials) {
            yt.push(items.yt);
            ig.push(items.ig);
        }
    }

    return [
        ig,
        yt
    ]
}


export async function get_infos_edits(editorName, styleSelected = null) {
    const getData_editor_edits = await edit_collection(editorName, styleSelected);

    let literal_names = [
        "edit_title",
        "edit_link",
        "thumbnail",
        "edit_audio",
        "edit_description",
        "anime_used",
        "anime_link",
        "audio_link",
        "edit_references",
        "edit_references_link",
        "software_used",
        "post_link",
        "edit_date",
        "editor_note",
        "character_used"
    ];

    // PUT ALL RETURNED VALUE IN AN ARRAY
    let editor_edits = [];

    for (let i = 0; i < getData_editor_edits.length; i++) {
        editor_edits.push({ [literal_names[i]]: getData_editor_edits[i] });
    };

    // editor_edits.forEach(obj => {
    //    const [key, value] = Object.entries(obj)[0];
    //    console.log(`${key}: `, value);
    // });

    // BUNDLE EVERYTHING IN AN OBJECT PARA PWEDE TAWAGIN
    const edits = Object.assign({}, ...editor_edits);

    return edits;

}






