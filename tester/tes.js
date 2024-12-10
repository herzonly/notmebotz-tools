const { tiktok } = require("notmebotz-tools");

async function za() {
    try {
        let z = await tiktok("https://vt.tiktok.com/ZSjKstQwa/");
        console.log(z);
    } catch (e) {
        console.error(e);
    }
}

return za();
