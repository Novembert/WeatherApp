function fadeSiteOut() {
    $('#white').removeClass('none')
    $('#white').fadeIn()
    $('#white').addClass('disappear')
    $('#container').fadeOut(600)
}

function fadeSiteIn() {
    $('#white').removeClass('disappear');
    $('#container').fadeIn(600);
    setTimeout(function () {
        $('#white').addClass('none')
    }, 600)
}

function createLinks() {
    $('#warsawLink').click(function () {
        fadeSiteOut()

        setTimeout(function () {
            window.location.href = "warsaw.html";
        }, 600)
    })
    $('#poznanLink').click(function () {
        fadeSiteOut()

        setTimeout(function () {
            window.location.href = "poznan.html";
        }, 600)
    })
    $('#opoleLink').click(function () {
        fadeSiteOut()

        setTimeout(function () {
            window.location.href = "opole.html";
        }, 600)
    })
    $('#lodzLink').click(function () {
        fadeSiteOut()

        setTimeout(function () {
            window.location.href = "lodz.html";
        }, 600)
    })
    $('#backLink').click(function () {
        fadeSiteOut()

        setTimeout(function () {
            window.location.href = "index.html";
        }, 600)
    })
    $('#dataLink').click(function () {
        fadeSiteOut()

        setTimeout(function () {
            window.location.href = "data.html";
        }, 600)
    })
}

function slideDetails() {
    $('.fa-chevron-down').toggleClass('active')
    $('#details').fadeToggle(500)
}

function addEvents() {
    $('.button').click(() => slideDetails())
}

$(function () {
    fadeSiteIn()
    createLinks()
    addEvents()
})