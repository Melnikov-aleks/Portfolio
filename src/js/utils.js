export async function getData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(response.status);
        const data = await response.json();
        return data;
    } catch (err) {
        return err;
    }
}
