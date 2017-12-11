/**
 * Created by Carson on 2017/12/11.
 */

function reachBottom(offset, cb) {
    let viewH = $(window).height(),
        contentH = document.body.scrollHeight,
        scrollTop = $(window).scrollTop(),
        $offset = offset || 0;
    if (contentH - viewH - scrollTop <= $offset) {
        typeof cb === 'function' && cb()
    }
}

let backToTopTimer = null;
function backToTop() {
    backToTopTimer = setInterval(function () {
        let top = document.body.scrollTop + document.documentElement.scrollTop;
        let speed = top / 5;
        if (document.body.scrollTop) {
            document.body.scrollTop -= speed;
        }
        else {
            document.documentElement.scrollTop -= speed;
        }
        if (top === 0) {
            clearInterval(backToTopTimer);
        }
    }, 30);
}

function getQueryString(name){
    let reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    let r = window.location.search.substr(1).match(reg);
    if(r!=null){
        return  decodeURI(r[2])
    }else{
        return null;
    }
}

function testFunc(name,word){
    console.log(word+name)
}

module.exports = {
    reachBottom,
    backToTop,
    getQueryString,
    testFunc
};