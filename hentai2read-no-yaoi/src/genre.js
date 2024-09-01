load("config.js");
function execute() {
    var BASE_CATEGORY = BASE_URL + "/hentai-list/category/";
    return Response.success([
        {
            title: "Oneshot",
            input: BASE_CATEGORY + "Oneshot",
            script: "gen.js",
        },
        {
            title: "Adult",
            input: BASE_CATEGORY + "Adult",
            script: "gen.js",
        },
        {
            title: "Anal",
            input: BASE_CATEGORY + "Anal",
            script: "gen.js",
        },
        {
            title: "Comedy",
            input: BASE_CATEGORY + "Comedy",
            script: "gen.js",
        },
        {
            title: "Doujinshi",
            input: BASE_CATEGORY + "Doujinshi",
            script: "gen.js",
        },
        {
            title: "Lolicon",
            input: BASE_CATEGORY + "Lolicon",
            script: "gen.js",
        },
        {
            title: "Harem",
            input: BASE_CATEGORY + "Harem",
            script: "gen.js",
        },
        {
            title: "Full Color",
            input: BASE_CATEGORY + "Full%20Color/",
            script: "gen.js",
        },
        {
            title: "Incest",
            input: BASE_CATEGORY + "Incest",
            script: "gen.js",
        },
        {
            title: "Uncensored",
            input: BASE_CATEGORY + "Un-censored",
            script: "gen.js",
        },
        {
            title: "Exhibitionism",
            input: BASE_CATEGORY + "Exhibitionism",
            script: "gen.js",
        },
        {
            title: "Big Breasts",
            input: BASE_CATEGORY + "Big%20Breasts",
            script: "gen.js",
        },
        {
            title: "Lactation",
            input: BASE_CATEGORY + "Lactation",
            script: "gen.js",
        },
        {
            title: "Public Nudity",
            input: BASE_CATEGORY + "Public%20Nudity",
            script: "gen.js",
        },
        {
            title: "Public Intercourse",
            input: BASE_CATEGORY + "Public%20Intercourse",
            script: "gen.js",
        },
        {
            title: "Yuri",
            input: BASE_CATEGORY + "Yuri",
            script: "gen.js",
        },
    ]);
}
