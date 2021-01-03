export async function sendData(url, data) {
    const response = await fetch(url, {
        method: 'POST',
        // mode: 'no-cors',
        body: data,
    });
    if (!response.ok) throw new Error(response.status);
    return response;
}
export async function getData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(response.status);
        const data = await response.json();
        return data;
    } catch (err) {
        throw err;
    }
}
