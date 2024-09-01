load("config.js");
function execute() {
    var BASE_HOME_URL = BASE_URL + "/hentai-list/all/any/all/";
    return Response.success([
        {
            title: "Mới Nhất",
            input: BASE_HOME_URL + "last-added",
            script: "gen.js",
        },
        {
            title: "User Đề Cử",
            input: BASE_HOME_URL + "user-recommendation",
            script: "gen.js",
        },
        {
            title: "Staff Chọn",
            input: BASE_HOME_URL + "staff-pick",
            script: "gen.js",
        },
        {
            title: "Xem Nhiều",
            input: BASE_HOME_URL + "most-popular",
            script: "gen.js",
        },
    ]);
}
