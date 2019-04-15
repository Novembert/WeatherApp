const months_arr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function fillHTMLElements(data) {

}

const request = async () => {
    const response = await fetch('https://api.openweathermap.org/data/2.5/group?id=756135,7530858,3090048,3093133&units=metric&APPID=41c385078f5d0c3681985e655e1f5cf5')
    const data = await response.json();

    fillHTMLElements(data)
}

$(function () {
    request()
})