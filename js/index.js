$(function () {
    // for (var i = 0; i < list.length; i++) {
    //     (function (index) {
    //         list[index].onclick = function () {
    //             for (var i = 0; i < list.length; i++) {
    //                 list[i].classList.remove("hover")
    //             }
    //             this.classList.add("hover")
    //             oUl.style.left = `-${index * oWidth}` + 'px'
    //             console.log(index);
    //         }
    //     })(i)
    // }
    $('#menu').click((e) => {
        if (e && e.stopPropagation) {
            e.stopPropagation();
        } else {
            window.event.cancelBubble = true;
        }
        $('.mask').toggleClass('addWidth');
    })
    $('#close').click((e) => {
        if (e && e.stopPropagation) {
            e.stopPropagation();
        } else {
            window.event.cancelBubble = true;
        }
        $('.mask').removeClass('addWidth')
    })
    var oWidth = document.querySelectorAll('.gallery_block>ul>li')[0].offsetWidth
    var list = document.querySelectorAll('.gallery_controls>ul>li')
    var oUl = document.querySelector('.gallery_block>ul')
    var _index = 0;
    list.forEach((item, index) => {
        item.onclick = function () {
            clearClass()
            this.classList.add("hover")
            oUl.style.left = `-${index * oWidth}` + 'px'
            _index = index
        }
    });

    // 清除所有小图片样式
    var clearClass = () => {
        list.forEach((item) => {
            item.classList.remove("hover")
        })
        oUl.style.left = `-${_index * oWidth}` + 'px'
        list[_index].classList.add("hover")
    }

    var oLeftBtn = document.querySelector('.left');
    var oRightBtn = document.querySelector('.right');
    var oLength = document.querySelectorAll('.gallery_block>ul>li').length;
    oLeftBtn.onclick = () => {
        left()
    }
    oRightBtn.onclick = () => {
        right()
    }

    left = () => {
        _index--
        if (_index < 0) {
            _index = oLength - 1
        }
        clearClass()

    }
    right = () => {
        _index++
        if (_index > oLength - 1) {
            _index = 0
        }
        clearClass()
    }
    // 定时器
    // var timer = null;
    // timer = setInterval(function () {
    //     right()
    // }, 1000)
    // var oBox = document.querySelector('.gallery_block')
    // oBox.onmouseover = () => {
    //     clearInterval(timer)
    // }
    // oBox.onmouseout = () => {
    //     timer = setInterval(function () {
    //         right()
    //     }, 2000)
    // }
})
