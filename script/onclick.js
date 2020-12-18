function clickSearch() {
    // 输入框回车
    document.onkeydown = (e) => {
        if (e.keyCode == 13)
            Search()
    }

    // 搜索引擎选择
    for (i of $('#top_right_search li'))
        i.onclick = function () {
            $('#top_right a')[0].innerHTML = this.innerHTML
            $('#top_right_search')[0].style.display = 'none'
        }
}

function clickSearchMenu() {
    // 弹出搜索引擎框
    search = $('#top_right_search')[0]
    if (search.style.display == 'none')
        search.style.display = 'block'
    else
        search.style.display = 'none'
}

function clickGoTop() {
    let lastTop = document.documentElement.scrollTop

    let time = setInterval(() => {
        let cTop = document.documentElement.scrollTop
        if (cTop > 0 && lastTop == cTop) {
            lastTop = cTop -= 20
            document.documentElement.scrollTop = cTop
        } else
            clearInterval(time)
    }, 5)
}
