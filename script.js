function fadeSiteOut() {
    $('#white').removeClass('none')
    $('#white').addClass('disappear')
    $('#container').fadeOut(300)

    setTimeout(function () {
        window.location.href = "warsaw.html";
    }, 300)
}

function fadeSiteIn() {
    $('#white').removeClass('disappear');
    $('#container').fadeIn(300);
    setTimeout(function () {
        $('#white').addClass('none')
    }, 300)
}

// function manipulateHeader() {
//     console.log(pageYOffset)
//     if (pageYOffset > 30) {
//         $('header').addClass('small')
//     }
//     if (pageYOffset == 0) {
//         $('header').removeClass('small')
//     }
// }

function createLinks() {
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
    $('#backLink').click(function () {
        fadeSiteOut()

        setTimeout(function () {
            window.location.href = "index.html";
        }, 300)
    })
}

$(function () {
    fadeSiteIn()
    createLinks()
    // document.addEventListener('scroll', function () { manipulateHeader() })
})

