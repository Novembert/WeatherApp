function fadeSiteOut() {
    $('#white').addClass('disappear')
    $('#container').fadeOut(300)

    setTimeout(function () {
        window.location.href = "warsaw.html";
    }, 300)
}

$(function () {
    $('#warsawLink').click(function () {
        fadeSiteOut()

        setTimeout(function () {
            window.location.href = "warsaw.html";
        }, 300)
    })
    $('#poznanLink').click(function () {
        fadeSiteOut()

        setTimeout(function () {
            window.location.href = "poznan.html";
        }, 300)
    })
    $('#sopotLink').click(function () {
        fadeSiteOut()

        setTimeout(function () {
            window.location.href = "sopot.html";
        }, 300)
    })
    $('#lodzLink').click(function () {
        fadeSiteOut()

        setTimeout(function () {
            window.location.href = "lodz.html";
        }, 300)
    })
})

