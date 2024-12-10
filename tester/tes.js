const { igdl } = require("notmebotz-tools");
console.log(typeof igdl);  // Cek apakah igdl adalah fungsi

async function za() {
    try {
        let z = await igdl("https://www.instagram.com/reel/DDXDUjKxn3o/?igsh=ejRjdzNvd3ZqaDEy");
        console.log(z);
    } catch (e) {
        console.error(e);
    }
}

return za();
