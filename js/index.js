$(function () {
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
    var oLi = document.querySelectorAll('.gallery_block>ul>li')
    var oList = document.querySelectorAll('.gallery_controls>ul>li')
    var _index = 0;
    oList.forEach((item, index) => {
        item.onclick = function () {
            removeName()
            this.classList.add("hover")
            oLi[index].classList.add("list")
            _index = index
        }
    });

    removeName = () => {
        for (var i = 0; i < oList.length; i++) {
            oList[i].classList.remove("hover")
            oLi[i].classList.remove("list")
        }
    }
    var oLength = document.querySelectorAll('.gallery_block>ul>li').length;
    var btnLeft = document.querySelector('.left')
    var btnRight = document.querySelector('.right')
    var oContent = document.querySelector('.gallery_block')
    var timer = null
    btnLeft.onclick = () => {
        leftMove()
    }
    btnRight.onclick = () => {
        rightMove()
    }
    leftMove = () => {
        removeName();
        _index--
        if (_index < 0) {
            _index = oLength - 1
        }
        oLi[_index].classList.add("list")
        oList[_index].classList.add("hover")
    }
    rightMove = () => {
        removeName();
        _index++;
        if (_index == oLength) {
            _index = 0
        }
        oLi[_index].classList.add("list")
        oList[_index].classList.add("hover")
    }
    function time() {
        timer = setInterval(() => {
            rightMove();
        }, 2000)
    }
    time()
    oContent.onmouseover = () => {
        clearInterval(timer)
    }
    oContent.onmouseout = () => {
        time()
    }
})
