$(() => {
    for (let i = 1; i <= 3; i++) {
        $("#one > li:nth-child(" + i + ")").mouseover(() => {
            $("#one > li:nth-child(" + i + ") > ul").css("height", "160px")
        })
    }

    $("#one>li").mouseout(() => {
        $("#one>li>.two").css("height", "0")
    })
})