$(()=> {
    $('#top').animate({
        marginTop: '0px'
    }, 2000, () => {
        setTimeout(() => {
            $('#top').animate({
                marginTop: '-100px'
            }, 2000)
        }, 3000)
    })
})