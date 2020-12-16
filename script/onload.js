$(() => {
    timeAll()

    // click All
    clickAll()

    xfc()

    // 右键自定义事件
    window.oncontextmenu = () => {
        return false;
    }

    let lastTop = 0
    $(window).scroll(() => {
        let top = document.documentElement.scrollTop
        let clientHeight = document.documentElement.clientHeight
        let totalHeight = document.documentElement.scrollHeight

        // 左xfc
        let xfc = $('#xfc')[0]
        if (top < clientHeight / 2)
            xfc.style.left = '-45px'
        else if (top + clientHeight >= totalHeight - 100)
            xfc.style.left = '-45px'
        else
            xfc.style.left = '0'

        // topBar
        let topBar = $('#top')[0]
        if (top > lastTop)
            topBar.style.top = "-7%"
        else
            topBar.style.top = "0"

        lastTop = top
    })

    // top left 事件
    $("#top #top_left li").mouseenter(function () {
        let c = $(this).index();
        let left = c * 95;

        // 如果不是第0个li就开始
        if (c != 0) {
            $(this).find('a').addClass('cur');
            $(this).siblings('li').find('a').removeClass('cur');
            //p标签定位实现红色线条
            $(this).siblings('p').stop().animate({
                'left': left + 'px'
            }, 300);
        }
    })
})