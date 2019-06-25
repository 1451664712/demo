$(function () {
    $('#menu').click(() => {
        $('.mask').toggleClass('addWidth');
    })
    $('#close').click(() => {
        $('.mask').removeClass('addWidth')
    })
    var oWidth = document.querySelectorAll('.gallery_block>ul>li')[0].offsetWidth
    var list = document.querySelectorAll('.gallery_controls>ul>li')
    var oUl = document.querySelector('.gallery_block>ul')
    var index = 0;
    list.forEach((item, _index) => {
        item.onclick = function () {
            for (var i = 0; i < list.length; ++i) {
                list[i].classList.remove("hover")
            }
            this.classList.add("hover")
            oUl.style.left = `-${_index * oWidth}` + 'px'
            index = _index
        }
    })

    var oLeftBtn = document.querySelector('.left')
    var oRightBtn = document.querySelector('.right')
    var oLength = document.querySelectorAll('.gallery_block>ul>li').length
    oLeftBtn.onclick = function () {
        index--
        if (index < 0) {
            index = 0
        }
        oUl.style.left = `-${index * oWidth}` + 'px'
        list[index].classList.add("hover")
        list[index + 1].classList.remove("hover")
    }
    oRightBtn.onclick = function () {
        index++
        if (index > oLength - 1) {
            index = oLength - 1
        }
        oUl.style.left = `-${index * oWidth}` + 'px'
        list[index].classList.add("hover")
        list[index - 1].classList.remove("hover")
    }
})
