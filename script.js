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
        }, 600)
    })
    $('#poznanLink').click(function () {
        fadeSiteOut()

        setTimeout(function () {
            window.location.href = "poznan.html";
        }, 600)
    })
    $('#sopotLink').click(function () {
        fadeSiteOut()

        setTimeout(function () {
            window.location.href = "sopot.html";
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
}

$(function () {
    fadeSiteIn()
    createLinks()
    // document.addEventListener('scroll', function () { manipulateHeader() })
})

