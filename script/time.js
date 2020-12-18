function timeAll() {
    setInterval(timeChange, 100);
    jsqc()
}

function timeChange() {
    // video_gf panel height 
    $('#video_fg')[0].style.height = $('#video_mp4')[0].clientHeight + 'px'

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
        place -= 1200
        $('#imgBoxList').animate({
            marginLeft: place + 'px'
        }, 1000, () => {
            if (place <= -6000) {
                place = 0
                $('#imgBoxList').css({
                    marginLeft: place
                })
            }

            $('#imgBox>ul>li').removeClass("active")
            $('#imgBox>ul>li').eq(parseInt(place / -1200)).addClass("active")
        })
    }, 2000)

    for (let i = 0; i < 5; i++)
        $('#imgBox>ul>li').eq(i).click(() => {
            place = -1200 * i
            $('#imgBox>ul>li').removeClass("active")
            $('#imgBox>ul>li').eq(parseInt(place / -1200)).addClass("active")
        })
}