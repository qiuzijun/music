$(function () {
    $('.header-top > .header-list>li+li>a').mouseover(function () {
        $(this).css('color', '#31c27c')
    }).mouseout(function () {
        $(this).css('color', 'black')
    })
    $('.header-top>.header-top-input>img').mouseover(function () {
        $(this)[0].src = './img/input_ss_lv.png'
    }).mouseout(function () {
        $(this)[0].src = './img/input_ss.png'
    })
    $('.openingRecharge>.opening-a').mouseover(function () {
        $('.openingRecharge>a>.opening>ul').slideDown(0.5)
    }).mouseout(function () {
        $('.openingRecharge>a>.opening>ul').slideUp(0.5)
    })
    $('.openingRecharge>.recharge-a').mouseover(function () {
        $('.openingRecharge>a>.recharge>ul').slideDown(0.5)
    }).mouseout(function () {
        $('.openingRecharge>a>.recharge>ul').slideUp(0.5)
    })
    $('.openingRecharge>.opening-a>.opening>ul>li').mouseover(function () {
        $(this).css('backgroundColor', '#31c27c')
    }).mouseout(function () {
        $(this).css('backgroundColor', '')
    })
    $('.openingRecharge>.recharge-a>.recharge>ul>li').mouseover(function () {
        $(this).css('backgroundColor', '#31c27c')
    }).mouseout(function () {
        $(this).css('backgroundColor', '')
    })
    $('#header-in>.header-bto>ul>li').mouseover(function () {
        $(this).css('color', '#31c27c').siblings().css('color', '')
    }).mouseout(function () {
        $(this).css('color', '')
    })
    var setin = setInterval(change, 3000);
    var index = 0;
    $('.banner-run>.banner-dian>li').eq(0).css('backgroundColor', 'white')

    function change() {
        index++;
        if (index >= 5) {
            index = 0;
        }
        $('.banner-run>.banner-dian>li').eq(index).css('backgroundColor', 'white').siblings().css('backgroundColor', '')
        console.log(index)
        $('.banner-run>.banner-img>li>img').animate({
            left: -index * 1080
        })
    }
    $('#banner').mouseover(function () {
        $('#banner span')[0].style.display = 'block'
        $('#banner span')[1].style.display = 'block'
        clearInterval(setin)
    }).mouseout(function () {
        $('#banner span')[0].style.display = 'none'
        $('#banner span')[1].style.display = 'none'
        setin = setInterval(change, 3000);
    })
    $('#banner > .left').click(function () {
        index = index + 1;
        if (index >= 5) {
            index = 0;
        }
        $('.banner-run>.banner-dian>li').eq(index).css('backgroundColor', 'white').siblings().css('backgroundColor', '')
        $('.banner-run>.banner-img>li>img').animate({
            left: -index * 1080
        })
    })
    $('#banner > .right').click(function () {
        index = index - 1;
        if (index < 0) {
            index = 4;
        }
        $('.banner-run>.banner-dian>li').eq(index).css('backgroundColor', 'white').siblings().css('backgroundColor', '')
        $('.banner-run>.banner-img>li>img').animate({
            left: -index * 1080
        })
    })
    $('.banner-run>.banner-dian>li').mouseover(function () {
        var index = $(this).index()
        $('.banner-run>.banner-dian>li').eq(index).css('backgroundColor', 'white').siblings().css('backgroundColor', '')
        $('.banner-run>.banner-img>li>img').animate({
            left: -index * 1080
        })
    })
})