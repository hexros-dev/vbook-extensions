load("config.js");
function execute(url, page) {
    if (!page) page = "1";
    if (url.includes("category")) {
        url = url + "/all/name-az";
    }
    url = url + "/" + page;
    const doc = Http.get(url).html();

    var next = doc.select(".pagination").select("li.active + li").text();

    const el = doc.select("div.book-grid-item-container > div.book-grid-item");

    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        var cover =
            e.select("img").first().attr("data-src") ||
            e.select("img").first().attr("src");
        var name = e.select("a > .title-text").first().text();
        var link = e.select("a").first().attr("href");
        var description =
            e.select(".chapters a").first().text() ||
            e
                .select(
                    ".overlay > .overlay-data > .overlay-sub > div > button:nth-child(3)"
                )
                .text()
                .replace("\n", "") ||
            "Unknown";
        if (link.includes("hentai") && !REGEX.test(name)) {
            data.push({
                name: name,
                link: link,
                cover: cover,
                description: description,
                host: BASE_URL,
            });
        }
    }

    return Response.success(data, next);
}
