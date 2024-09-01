load("config.js");
function execute(url) {
    const doc = Http.get(url).html();
    var name = doc.select("h3 a").text();
    var cover = doc.select(".img-container img").first().attr("src");
    var host = BASE_URL;
    var author = doc.select("ul.list > li:nth-child(9) > a").text();
    var description = doc.select("ul.list > li:nth-child(15) > p").text();
    var category_length = doc.select("ul.list > li:nth-child(11) > a").length;
    var genres = [];
    for (let i = 2; i <= category_length + 1; i++) {
        genres.push({
            title: doc
                .select(`ul.list > li:nth-child(11) > a:nth-child(${i})`)
                .text(),
            input: doc
                .select(`ul.list > li:nth-child(11) > a:nth-child(${i})`)
                .attr("href"),
            script: "gen.js",
        });
    }
    var detail = `
    Parody: ${doc.select("ul.list > li:nth-child(3) > a").text()}
    <br>
    Ranking: ${doc.select("ul.list > li:nth-child(4) > a").text()}
    <br>
    Release Year: ${doc.select("ul.list > li:nth-child(6) > a").text()}
    <br>
    View: ${doc.select("ul.list > li:nth-child(7) > a").text()}
    <br>
    Page: ${doc.select("ul.list > li:nth-child(8) > a").text()}
    <br>
    Language: ${doc.select("ul.list > li:nth-child(14) > a").text()}
    <br>
    Score: ${doc
        .select(".push-10-t > small")
        .text()
        .replace("(score ", "")
        .replace(")", "")}
    `;
    var ongoing = true;
    if (doc.select("ul.list > li:nth-child(5) > a").text() === "Ongoing") {
        ongoing = true;
    } else {
        ongoing = false;
    }
    var genres_length = doc.select("ul.list > li:nth-child(12) > a").length;
    for (let i = 2; i <= genres_length + 1; i++) {
        var title = doc
            .select(`ul.list > li:nth-child(12) > a:nth-child(${i})`)
            .text();
        var input = doc
            .select(`ul.list > li:nth-child(12) > a:nth-child(${i})`)
            .attr("href");
        genres.push({
            title,
            input,
            script: "gen.js",
        });
    }
    var suggests = [
        {
            title: "Cùng tác giả",
            input: doc
                .select(
                    "#main-container > section > div > div.col-xs-12.col-md-4 > div:nth-child(5) > ul"
                )
                .html(),
            script: "suggest.js",
        },
        {
            title: "Dựa trên tag",
            input: doc
                .select(
                    "#main-container > section > div > div.col-xs-12.col-md-4 > div:nth-child(3) > ul"
                )
                .html(),
            script: "suggest.js",
        },
    ];

    return Response.success({
        name,
        cover,
        host,
        author,
        description,
        detail,
        ongoing,
        genres,
        suggests,
    });
}
