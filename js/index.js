$(function () {
    $('.header-top > .header-list>li+li>a').mouseover(function () {
        $(this).css('color', '#31c27c')
    }).mouseout(function () {
        $(this).css('color', 'black')
    })
    $('.header-top>.header-top-input>img').mouseover(function () {
        $(this)[0].src = './img/input_ss_lv.png'
        console.log($(this))
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
})