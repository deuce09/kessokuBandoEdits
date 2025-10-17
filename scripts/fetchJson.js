export async function fetchData(editorName) {
    try {
        const response = await fetch(`./json/${editorName}.json`)

        if (!response.ok) {
            throw new Error(`Could not fetch ${editorName}`);
        }

        const data = await response.json();

        const editorData = data.editors[editorName];
        return editorData;

    } catch (error) {
        console.log(error)
    }

}