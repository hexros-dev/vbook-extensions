load("config.js");
function execute(input, next) {
    let doc = Html.parse(input);
    let manga = [];
    doc.select("li").forEach(e => {
        manga.push({
            name: e.select("a").text(),
            link: e.select("a").attr("href"),
            cover: e.select("a > img").first().attr("src").replace("/42/", "/"),
            description: "",
            host: BASE_URL
        })
    });

    return Response.success(manga);

}