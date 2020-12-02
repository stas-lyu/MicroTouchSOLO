$(function(){

    var note = $('#note'),
        ts = new Date(2020, 0, 1),
        newYear = true;

    if((new Date()) > ts){
        // The new year is here! Count towards something else.
        // Notice the *1000 at the end - time must be in milliseconds
        ts = (new Date()).getTime() + 10*24*60*60*1000;
        newYear = false;
    }

    $('#countdown').countdown({
        timestamp	: ts,
        callback	: function(days, hours, minutes, seconds){

            var message = "";

            message += days + " day" + ( days==1 ? '':'s' ) + ", ";
            message += hours + " hour" + ( hours==1 ? '':'s' ) + ", ";
            message += minutes + " minute" + ( minutes==1 ? '':'s' ) + " and ";
            message += seconds + " second" + ( seconds==1 ? '':'s' ) + " <br />";

            if(newYear){
                message += "left until the new year!";
            }
            else {
                message += "left to 10 days from now!";
            }

            note.html(message);
        }
    });

});

$(function(){

    var note = $('#note'),
        ts = new Date(2020, 0, 1),
        newYear = true;

    if((new Date()) > ts){
        // Р—Р°РґР°РµРј С‚РѕС‡РєСѓ РѕС‚СЃС‡РµС‚Р° РґР»СЏ РїСЂРёРјРµСЂР°. РџСѓСЃС‚СЊ Р±СѓРґРµС‚ РѕС‡РµСЂРµРґРЅРѕР№ РќРѕРІС‹Р№ РіРѕРґ РёР»Рё РґР°С‚Р° С‡РµСЂРµР· 10 РґРЅРµР№.
        // РћР±СЂР°С‚РёС‚Рµ РІРЅРёРјР°РЅРёРµ РЅР° *1000 РІ РєРѕРЅС†Рµ - РІСЂРµРјСЏ РґРѕР»Р¶РЅРѕ Р·Р°РґР°РІР°С‚СЊСЃСЏ РІ РјРёР»Р»РёСЃРµРєСѓРЅРґР°С…
        ts = (new Date()).getTime() + 10*24*60*60*1000;
        newYear = false;
    }

    $('#countdown1').countdown({
        timestamp	: ts,
        callback	: function(days, hours, minutes, seconds){

            var message = "";

            message += "Р”РЅРµР№: " + days +", ";
            message += "С‡Р°СЃРѕРІ: " + hours + ", ";
            message += "РјРёРЅСѓС‚: " + minutes + " Рё ";
            message += "СЃРµРєСѓРЅРґ: " + seconds + " <br />";

            if(newYear){
                message += "РѕСЃС‚Р°Р»РѕСЃСЊ РґРѕ РќРѕРІРѕРіРѕ РіРѕРґР°!";
            }
            else {
                message += "РѕСЃС‚Р°Р»РѕСЃСЊ РґРѕ РјРѕРјРµРЅС‚Р° С‡РµСЂРµР· 10 РґРЅРµР№!";
            }

            note.html(message);
        }
    });



});

$( document ).ready(function() {
    var like = 0;
    $('.share_like p').click(function(event) {
        if(!($(this).parent().hasClass('active'))){
            $(this).children('img').attr('src','/img/like.png');
            like = $(this).children('span').text();
            like++;
            $(this).children('span').text(like);
            $(this).parent().addClass('active');
        }
        else{
            $(this).parent().removeClass('active');
            like = $(this).children('span').text();
            like--;
            $(this).children('span').text(like);
            $(this).children('img').attr('src','/img/like-no.png');
        }
    });





    var n = 8;
    var count = n;
    var s = n * 10;
    $(".progress-bar span").attr('data_p', s);
    $(".left_count").text(count);
    var i = getRandomInt2() * 200;
    var i2 = getRandomInt2() * 750;
    function interval()
    {
        n = n-1;
        if(n>6){
            count = n;
            s = n * 10;
            $(".left_count").text(count);
            $(".progress-bar span").attr('data_p', s);

        }
        else{
            n = n+1;
            clearInterval(intervalID);

            var intervalID2 = setInterval(interval2,i2);
            function interval2()
            {
                n = n-1;
                var co = getRandomInt3();
                if(n>co){
                    count = n;
                    s = n * 10;
                    $(".left_count").text(count);
                    $(".progress-bar span").attr('data_p', s);
                }
                else{
                    clearInterval(intervalID2);
                }
            }
        }
    }



    var intervalID=setInterval(interval,i);

    function getRandomInt2() {
        return Math.floor(Math.random() * (14 - 8)) + 8;
    }
    function getRandomInt3() {
        return Math.floor(Math.random() * (6 - 5)) + 5;
    }
});

$(document).ready(function() {
    $('.btn').click( function() {
        $('html, body').animate({ scrollTop: $('#form2').offset().top }, 800);
    });
});