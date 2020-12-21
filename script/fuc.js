function Search() {
    yq = {
        '搜索': 'https://www.dogedoge.com/results?q=',
        '谷歌': 'https://www.google.com.hk/search?q=',
        '百度': 'https://www.baidu.com/s?wd=',
        'Doge': 'https://www.dogedoge.com/results?q=',
        '360': 'https://www.so.com/s?q=',
        '搜狗': 'https://www.sogou.com/web?query='
    }

    yqtop = $('#top_right a')[0].innerHTML
    text = $('#top_right input')[0].value

    if (text != '') window.open(yq[yqtop] + text, '_blank')
}

function jump() {
    $('#jump')[0].style.display = "block"
}

function bd_clear() {
    $('#jname')[0].value = ""
    $('#jemial')[0].value = ""
    $('#jwebsite')[0].value = ""
    $('#jmsg')[0].value = ""
}

function bd_cancel() {
    bd_clear()
    $('#jump')[0].style.display = "none"
}

function checkout() {
    if ($('#jname')[0].value == ''
        || $('#jemial')[0].value == ''
        || $('#jwebsite')[0].value == ''
        || $('#jmsg')[0].value == ''
    ) {
        alert('信息不完整！')
        return false
    }
}

function xfc() {
    let lis = $('#xfc li')
    let imgs = $('#xfc img')

    for (let i = 0; i < imgs.length; i++)
        imgs[i].src = './images/xfc/' + i + '_black.png'

    for (let i = 0; i < lis.length; i++) {
        lis[i].id = i
        lis[i].onmouseover = function () {
            this.style.backgroundColor = 'rgba(0,0,0,.7)'
            imgs[i].src = './images/xfc/' + i + '_white.png'
        }
        lis[i].onmouseout = function () {
            this.style.backgroundColor = ''
            imgs[i].src = './images/xfc/' + i + '_black.png'
        }
    }
}