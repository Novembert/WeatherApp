const months_arr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function fillHTMLElements(data) {
    $('p#temp').text(parseInt(data.list[0].main.temp)).append("<span>&#8451</span>")

    $('p#press').text(data.list[0].main.pressure).append("hpa")

    $('p#humid').text(data.list[0].main.humidity).append("%")

    $('p#wind').text(data.list[0].wind.speed).append("km/h")

    $('p#cloud').text(data.list[0].clouds.all).append("%")

    let unix = data.list[0].sys.sunrise;
    let time = new Date(unix * 1000);
    let hours = time.getHours()
    let minutes = "0" + time.getMinutes();
    let convtime = hours + ':' + minutes.substr(-2)

    $('p#sunrise').text(convtime)

    unix = data.list[0].sys.sunset;
    time = new Date(unix * 1000);
    hours = time.getHours()
    minutes = "0" + time.getMinutes();
    convtime = hours + ':' + minutes.substr(-2)

    $('p#sunset').text(convtime)

    $('p#maxtemp').text(parseInt(data.list[0].main.temp_max)).append("<span>&#8451</span>")

    $('p#mintemp').text(parseInt(data.list[0].main.temp_min)).append("<span>&#8451</span>")
}

const request = async () => {
    const response = await fetch('https://api.openweathermap.org/data/2.5/group?id=3090048&units=metric&APPID=41c385078f5d0c3681985e655e1f5cf5')
    const data = await response.json();
    fillHTMLElements(data)
}

$(function () {
    request()
})