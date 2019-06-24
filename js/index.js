$('#menu').click(() => {
    $('.mask').toggleClass('addWidth');
})
$('#close').click(() => {
    $('.mask').removeClass('addWidth')
})
let List = $('.gallery_controls ul li')
let content = $('.gallery_block ul li')
console.log(content);
List.map((index, item) => {
    item.onclick = function () {
        console.log(1)
       
    }
})