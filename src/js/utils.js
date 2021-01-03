export async function sendData(url, data) {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(Object.fromEntries(data)),
        });
        if (!response.ok) throw new Error(response.status);
        return response;
    } catch (err) {
        throw err;
    }
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
