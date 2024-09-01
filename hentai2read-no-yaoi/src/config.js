let BASE_URL = "https://hentai2read.com";
const FILTERS = ["yaoi"];
const REGEX = new RegExp(FILTERS.join("|"), "i");
try {
    if (CONFIG_URL) {
        BASE_URL = CONFIG_URL;
    }
} catch (error) {
    console.log(error);
}
