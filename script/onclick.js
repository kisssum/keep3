function clickAll() {
    clickSearch()
    clickGoTop()
}

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
	let time=setInterval(()=>{
		if(document.documentElement.scrollTop>0)
			document.documentElement.scrollTop = document.documentElement.scrollTop -200
		else
			clearInterval(time)
	},300)
    
}
