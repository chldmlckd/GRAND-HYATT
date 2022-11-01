function siteUrl(url){
    if(url!=""){
        window.open(url,'_self');
    }
}
$(function(){
    $('.fo_sns li:nth-child(3) a').hover(function(){
        $('.fo_sns li:nth-child(3) a img').attr('src','../img/sns_naverPost03.png');
    },function(){
        $('.fo_sns li:nth-child(3) a img').attr('src','../img/sns_naverPost02.png'); 
    });
    $('.fo_sns li:nth-child(4) a').hover(function(){
        $('.fo_sns li:nth-child(4) a img').attr('src','../img/sns_kakaoCh03.png');
    },function(){
        $('.fo_sns li:nth-child(4) a img').attr('src','../img/sns_kakaoCh02.png');
    });

});
