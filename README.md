<!-- # demo

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
    // } -->