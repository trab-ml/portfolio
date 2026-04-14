export const awake = async (urls: string[]) => {
    await Promise.all(
        urls.map((url) => {
            fetch(url, { mode: "no-cors" });
        }),
    );
};