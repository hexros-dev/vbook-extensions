function execute(url, page) {
    if (!page) page = '1';
    const doc = Http.get(url + "/" + page).html();

    var next = doc.select(".pagination").select("li.active + li").text()

    const el = doc.select("div.book-grid-item-container > div.book-grid-item")

    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        var cover = e.select("img").first().attr("data-src") || e.select("img").first().attr("src");
        if (e.select("a").attr("href").includes("hentai")){
        data.push({
            name: e.select("a > .title-text").first().text(),
            link: e.select("a").first().attr("href"),
            cover: cover,
            description: e.select(".chapters a").first().text(),
            host: "https://hentai2read.com",
        })
        }
    }

    return Response.success(data, next)
}