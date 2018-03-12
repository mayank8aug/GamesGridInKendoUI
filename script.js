try {
    $("#gridId").kendoGrid({
        columns: [
            { field: "title", title: "Title" },
            { field: "platform", title: "Platform" },
            { field: "score", title: "Score" },
            { field: "genre", title: "Genre" },
            { field: "editors_choice", title: "Editor's Choice"}
        ],
        sortable: true,
        pageable: true,
        dataSource: {
            type: "json",
            transport: {
                read: "http://starlord.hackerearth.com/gamesarena"
            },
            pageSize: 20,
            filter: { field: "title", operator: "neq", value: undefined }
        }
    });
} catch(e) {
    console && console.log('Internal error occurred during Grid initialization:' + e);
}

function filterGrid() {
    try {
        var grid = $('#gridId').data('kendoGrid');
        if(grid) {
            var searchVal = $('input[name="searchQuery"]').val().trim();
            var gridDS = grid.dataSource;
            if(searchVal && searchVal.length > 0)
                gridDS.filter([{field: 'title', operator: 'contains', value: searchVal}]);
            else
                gridDS.filter({field: 'title', operator: 'neq', value: null });
        }
    } catch(e) {
        console && console.log('Internal error occurred during grid datasource filtering:' + e);
    }
}