function siteUrl(url){
    if(url!=""){
        window.open(url,'_self');
    }
}
$(function(){
    $('.snsnav li:nth-child(3) a').mouseenter(function(){
        $('.snsnav li:nth-child(3) a img').attr('src','../img/sns_naverPost03.png');
    });
    $('.snsnav li:nth-child(3) a').mouseleave(function(){
        $('.snsnav li:nth-child(3) a img').attr('src','../img/sns_naverPost02.png');
    });
    $('.snsnav li:nth-child(4) a').mouseenter(function(){
        $('.snsnav li:nth-child(4) a img').attr('src','../img/sns_kakaoCh03.png');
    });
    $('.snsnav li:nth-child(4) a').mouseleave(function(){
        $('.snsnav li:nth-child(4) a img').attr('src','../img/sns_kakaoCh02.png');
    });

    $('.fo_sns li:nth-child(3) a').mouseenter(function(){
        $('.fo_sns li:nth-child(3) a img').attr('src','../img/sns_naverPost03.png');
    });
    $('.fo_sns li:nth-child(3) a').mouseleave(function(){
        $('.fo_sns li:nth-child(3) a img').attr('src','../img/sns_naverPost02.png');
    });
    $('.fo_sns li:nth-child(4) a').mouseenter(function(){
        $('.fo_sns li:nth-child(4) a img').attr('src','../img/sns_kakaoCh03.png');
    });
    $('.fo_sns li:nth-child(4) a').mouseleave(function(){
        $('.fo_sns li:nth-child(4) a img').attr('src','../img/sns_kakaoCh02.png');
    });
});
