import { fetchData } from "./fetchJson.js";


export async function getData(editorName){
    const data = await fetchData(editorName);
    return data;
}
