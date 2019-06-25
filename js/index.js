$(function () {
    $('#menu').click(() => {
        $('.mask').toggleClass('addWidth');
    })
    $('#close').click(() => {
        $('.mask').removeClass('addWidth')
    })
    var oWidth = document.querySelectorAll('.gallery_block>ul>li')[0].offsetWidth
    var aWidth = document.querySelectorAll('.gallery_controls>ul>li')[0].offsetWidth
    var list = document.querySelectorAll('.gallery_controls>ul>li')
    var oUl = document.querySelector('.gallery_block>ul')
    var oSpan = document.querySelectorAll('.gallery_controls>ul>li>span')
    console.log(aWidth);
    list.forEach((item, index) => {
        item.onclick = function () {
            for (var i = 0; i < list.length; ++i) {
                list[i].classList.remove("hover")
            }
            this.classList.add("hover")
            oUl.style.left = `-${index * oWidth}` + 'px'
        }
    })
})
var aa = document.querySelectorAll('polyline')
console.log(aa);