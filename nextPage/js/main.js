window.onload = () => {
    tops()
    u0()
    u1()
}

function tops() {
    // 顶部标签
    let tops = document.getElementById("top").getElementsByTagName("li")
    // 主标签页
    let tabs = document.getElementsByClassName("tab")

    tops[0].style.backgroundColor = "#ffffff"

    for (let i = 1; i < tabs.length; i++)
        tabs[i].style.display = "none"

    for (let i = 0; i < tops.length; i++) {
        tops[i].id = i
        tops[i].onmouseover = function () {
            for (let j = 0; j < tabs.length; j++) {
                if (this.id == j) {
                    tops[j].style.backgroundColor = "#ffffff"
                    tabs[j].style.display = "block"
                } else {
                    tops[j].style.backgroundColor = "#ffffffa0"
                    tabs[j].style.display = "none"
                }
            }
        }
    }
}

function u0() {
    let yq = document.getElementById("u0Left").getElementsByTagName("li")
    let img = document.getElementById("u0Right").getElementsByTagName("img")

    let colorNomal = "#ffffffa0"
    let colorHlight = "#ffffff"

    yq[0].style.backgroundColor = colorHlight
    img[0].src = "img/u0/0.png"

    for (let i = 0; i < yq.length; i++) {
        yq[i].id = i
        yq[i].onmouseover = function () {
            for (let j = 0; j < yq.length; j++) {
                if (this.id == j) {
                    yq[j].style.backgroundColor = colorHlight
                    img[0].src = "img/u0/" + j + ".png"
                    switch (j) {
                        case 0:
                            img[0].style.marginTop = "7%"
                            img[0].style.marginLeft = "35%"
                            break;
                        case 1:
                            img[0].style.marginTop = "10%"
                            img[0].style.marginLeft = "25%"
                            break;
                        case 2:
                            img[0].style.marginTop = "10%"
                            img[0].style.marginLeft = "30%"
                            break;
                        case 3:
                            img[0].style.marginTop = "18%"
                            img[0].style.marginLeft = "36%"
                            break;
                        case 4:
                            img[0].style.marginTop = "15%"
                            img[0].style.marginLeft = "30%"
                            break;
                        case 5:
                            img[0].style.marginTop = "18%"
                            img[0].style.marginLeft = "40%"
                            break;
                        case 6:
                            img[0].style.marginTop = "10%"
                            img[0].style.marginLeft = "30%"
                            break;
                        case 7:
                            img[0].style.marginTop = "10%"
                            img[0].style.marginLeft = "35%"
                            break;
                    }
                } else
                    yq[j].style.backgroundColor = colorNomal
            }
        }
    }
}

function go() {
    let yq = document.getElementById("u0Left").getElementsByTagName("li")
    let text = document.getElementById("ssText").value
    let ss = [
        "https://www.dogedoge.com/results?q=",
        "https://www.google.com.hk/search?safe=strict&source=hp&ei=xaGvXqO4LpC-9QOD2aFg&q=",
        "https://cn.bing.com/search?q=",
        "https://www.so.com/s?ie=utf-8&fr=none&src=360sou_newhome&q=",
        "https://www.sogou.com/web?query=",
        "https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=",
        "http://tieba.baidu.com/f/search/res?ie=utf-8&qw=",
        "https://www.zhihu.com/search?type=content&q=",

    ]

    if (text != "")
        for (let i = 0; i < yq.length; i++)
            if (yq[i].style.backgroundColor == "rgb(255, 255, 255)")
                location = ss[i] + text
}

function u1() {
    let img = document.getElementById("u1").getElementsByTagName("img")
    let div = document.getElementById("u1").getElementsByTagName("div")
    let a = document.getElementById("u1").getElementsByTagName("a")
    let a_Href = [
        "https://www.gamersky.com/",
        "https://linux.cn/",
        "https://wiki.archlinux.org/",
        "https://www.v2ex.com/",
    ]

    for (let i = 0; i < img.length; i++) {
        div[i].style.display = "none"
        a[i].href = a_Href[i]
        img[i].src = "img/u0/" + 1 + ".png"
        img[i].id = i
        img[i].onmouseover = function () {
            for (let j = 0; j < img.length; j++) {
                if (this.id == j)
                    div[j].style.display = "block"
                else
                    div[j].style.display = "none"
            }
        }
    }
}