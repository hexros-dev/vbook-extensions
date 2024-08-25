function execute() {
    return Response.success([
        {title: "Mới nhất", input: "https://hentai2read.com/hentai-list/all/any/all/last-added", script: "gen.js"},
        {title: "User gợi ý", input: "https://hentai2read.com/hentai-list/all/any/all/user-recommendation/", script: "gen.js"},
        {title: "Staff Chọn", input: "https://hentai2read.com/hentai-list/all/any/all/staff-pick", script: "gen.js"},
        {title: "Xem nhiều", input: "https://hentai2read.com/hentai-list/all/any/all/most-popular", script: "gen.js"},
    ]);
}