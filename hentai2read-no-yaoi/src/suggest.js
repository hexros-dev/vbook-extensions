load("config.js");
function execute(input, next) {
    let doc = Html.parse(input);
    let manga = [];
    doc.select("li").forEach((e) => {
        var name = e.select("a").text();
        var link = e.select("a").attr("href");
        var cover = e
            .select("a > img")
            .first()
            .attr("src")
            .replace("/42/", "/");
        var description = e.select("a > div > small > b").text();
        if (!REGEX.test(name)) {
            manga.push({
                name,
                link,
                cover,
                description,
                host: BASE_URL,
            });
        } else {
        }
    });

    return Response.success(manga);
}
