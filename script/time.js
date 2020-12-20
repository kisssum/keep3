function timeAll() {
    setInterval(timeChange, 100);
    jsqc()
}

function timeChange() {
    // xfc panel height 
    $('#xfc')[0].style.marginTop = document.documentElement.clientHeight / 2 - 100 + 'px'

    // goTop panel height 
    if (document.documentElement.scrollTop > document.documentElement.scrollTop / 2)
        $('#goTop')[0].style.bottom = '2%'
    else
        $('#goTop')[0].style.bottom = '-20%'
}

function jsqc() {
    let place = 0

    setInterval(() => {
        place -= 65
        $('#imgBoxList').animate({
            marginLeft: place + 'vw'
        }, 1000, () => {
            if (place <= -325) {
                place = 0
                $('#imgBoxList').css({
                    marginLeft: place + "vw"
                })
            }

            $('#imgBox>ul>li').removeClass("active")
            $('#imgBox>ul>li').eq(parseInt(place / -65)).addClass("active")
        })
    }, 2000)

    for (let i = 0; i < 5; i++)
        $('#imgBox>ul>li').eq(i).click(() => {
            place = -65 * (i - 1)
            // alert(i)
            $('#imgBox>ul>li').removeClass("active")
            $('#imgBox>ul>li').eq(parseInt((place + 65) / -65)).addClass("active")
        })
}