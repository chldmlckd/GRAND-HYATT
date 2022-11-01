let today= new Date();
let month =today.getMonth();//월
let day = today.getDate();//일
let yoil=today.getDay();//요일
let a=['일','월','화','수','목','금','토'];
document.getElementById('date').innerHTML=month+1+'월.'+day+'일.'+a[yoil]+'요일';

function startTime(){
    let today1= new Date();
    let h=today1.getHours();//시
    let m=today1.getMinutes();//분


    h=checkNum(h);
    m=checkNum(m);
    document.getElementById('weather').innerHTML=h+':'+m;
    let t=setTimeout(startTime,1000);
}
function checkNum(i){
    if(i<10){
        i='0'+i;
    }
    return i;
}
startTime();


const spyEl=document.querySelectorAll('.scroll-spy');
spyEl.forEach(function(spyEl){
    new ScrollMagic
    .Scene({
        triggerElement:spyEl,
        triggerHook:0.8 
    })
    .setClassToggle(spyEl,'show')
    .addTo(new ScrollMagic.Controller());
});

function gallery(){
    let gallery1=Math.floor(Math.random()*10+1);
    return gallery1;
}
function ran(){
    let e=Math.floor((Math.random()*(4-1)+1));
    return e;
}
let number=0;
let galleryarrange=[];
function galleryrandom(){
    let galleryvalue = ran()+'_'+gallery();
   while (galleryarrange.some((value) => value==galleryvalue)==true){
        galleryvalue = ran()+'_'+gallery();
        continue;
   }
    galleryarrange[number]=galleryvalue;
    number++;
    
    return galleryvalue;
}
const topBtnEl=document.querySelector('.top');
    window.addEventListener('scroll',function(){
        if(600<=this.window.scrollY){
            gsap.to(topBtnEl,0.6,{
                opacity:1
            });
        }else{
            gsap.to(topBtnEl,0.6,{
                opacity:0
            });
        }
    });
$(function(){
    for(let n=1;n<=7;n++){
        $(`.img_box${n}`).html(`<img src="./img/gallery${galleryrandom()}.jpg" alt="">`);
    }

    $('.snsnav li:nth-child(3) a').hover(function(){
        $('.snsnav li:nth-child(3) a img').attr('src','./img/sns_naverPost03.png');
    },function(){
        $('.snsnav li:nth-child(3) a img').attr('src','./img/sns_naverPost02.png');
    });
    $('.snsnav li:nth-child(4) a').hover(function(){
        $('.snsnav li:nth-child(4) a img').attr('src','./img/sns_kakaoCh03.png');
    },function(){
        $('.snsnav li:nth-child(4) a img').attr('src','./img/sns_kakaoCh02.png');
    });

    $('.fo_sns li:nth-child(3) a').hover(function(){
        $('.fo_sns li:nth-child(3) a img').attr('src','./img/sns_naverPost03.png');
    },function(){
        $('.fo_sns li:nth-child(3) a img').attr('src','./img/sns_naverPost02.png'); 
    });
    $('.fo_sns li:nth-child(4) a').hover(function(){
        $('.fo_sns li:nth-child(4) a img').attr('src','./img/sns_kakaoCh03.png');
    },function(){
        $('.fo_sns li:nth-child(4) a img').attr('src','./img/sns_kakaoCh02.png');
    });

    $('.top').click(function(){
        $('html,body').animate({scrollTop:0},300);
    });
});