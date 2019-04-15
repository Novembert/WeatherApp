const months_arr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const cities = ['Warszawa', 'Poznań', 'Opole', 'Łódź']

function fillHTMLElements(data) {
    let i

    let highestTemp = -99
    for (let index = 0; index < 4; index++) {
        const element = data.list[index];
        if (element.main.temp > highestTemp) {
            highestTemp = element.main.temp
            i = index
        }
    }
    $('section#hightemp').children('p:first-of-type').text(cities[i])
    $('section#hightemp').children('p:last-of-type').text(parseInt(highestTemp)).append("<span>&#8451</span>")

    let smallestTemp = 99;
    for (let index = 0; index < 4; index++) {
        const element = data.list[index];
        if (element.main.temp < smallestTemp) {
            smallestTemp = element.main.temp
            i = index
        }
    }
    $('section#lowtemp').children('p:first-of-type').text(cities[i])
    $('section#lowtemp').children('p:last-of-type').text(parseInt(smallestTemp)).append("<span>&#8451</span>")

    let highestPress = -9999
    for (let index = 0; index < 4; index++) {
        const element = data.list[index];
        if (element.main.pressure > highestPress) {
            highestPress = element.main.pressure
            i = index
        }
    }
    $('section#highpress').children('p:first-of-type').text(cities[i])
    $('section#highpress').children('p:last-of-type').text(parseInt(highestPress)).append("hpa")

    let lowestPress = 9999
    for (let index = 0; index < 4; index++) {
        const element = data.list[index];
        if (element.main.pressure < lowestPress) {
            lowestPress = element.main.pressure
            i = index
        }
    }
    $('section#lowpress').children('p:first-of-type').text(cities[i])
    $('section#lowpress').children('p:last-of-type').text(parseInt(lowestPress)).append("hpa")
}

const request = async () => {
    const response = await fetch('https://api.openweathermap.org/data/2.5/group?id=756135,7530858,3090048,3093133&units=metric&APPID=41c385078f5d0c3681985e655e1f5cf5')
    const data = await response.json();

    fillHTMLElements(data)
}

$(function () {
    request()
})