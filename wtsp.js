
document.getElementById("calls").addEventListener("click",function () {
    $("#calls").children().css("color","#337ab7");
    $("#setting").children().css("color","");
    $("#chats").children().css("color","");
    $("#camera").children().css("color","");
    $("#status").children().css("color","");
    $(".header").html($("#header-calls").outerHTML());
    $(".header").find("#header-calls").show();

    $(".containerr").html($(".body-calls-container").outerHTML());
    $(".containerr").find(".body-calls-container").show();


    var dc =  $("div.body-calls-container");
    dc.scroll(function() {
        var pos = dc.scrollTop();
        if (pos == 0) {
            $(".div-inp").show(300);
            $(".text-calls-heder").show(300);
        }
    });

    dc.scroll(function() {
        var pos = dc.scrollTop();
        if (pos != 0) {
            $(".div-inp").hide(300);
            $(".text-calls-heder").hide(300);

        }
    });
});

document.getElementById("chats").addEventListener("click" ,function () {
    $("#chats").children().css("color","#337ab7");
    $("#setting").children().css("color","");
    $("#calls").children().css("color","");
    $("#camera").children().css("color","");
    $("#status").children().css("color","");

    $(".body").show();



    $('.header').html($('#header-chats').outerHTML());
    $('.header').find('#header-chats').show();

    $('.containerr').html($('.body-chats-container').outerHTML());
    $('.containerr').find('.body-chats-container').show();
    //k kontrollojme nese jemi ne top dhe te shfaqim sechin dhe chat



    var dc =  $("div.body-chats-container");
    dc.scroll(function() {
        var pos = dc.scrollTop();
        if (pos == 0) {
            $(".chat").show(300);
            $(".div-inp").show(300);
            $(".chat").show(300);
            $(".chats-mes").hide(300);
        }
    });

    dc.scroll(function() {
        var pos = dc.scrollTop();
        if (pos != 0) {
            $(".chat").hide(300);
            $(".div-inp").hide(300);
            $(".chat").hide(300);
            $(".chats-mes").show(300);

        }
    });

});

document.getElementById("setting").addEventListener("click",function () {
    $("#chats").children().css("color","");
    $("#calls").children().css("color","");
    $("#camera").children().css("color","");
    $("#status").children().css("color","");
    $("#setting").children().css("color","#337ab7");
    $(".header").html($('#header-settings').outerHTML());
    $(".header").find('#header-settings').show();

    $(".containerr").html($('.body-settings-container').outerHTML());
    $(".containerr").find('.body-settings-container').show();


    var dc =  $( "div.body-settings-container" );
    dc.scroll(function() {
        var pos = dc.scrollTop();
        if (pos != 0) {
            $(".seting").show();
            $(".setingZoom").hide();

        }
    });
    // kontrollojme nese nuk jemi ne top ce te zhdukim serchin dhe chat
    dc.scroll(function() {
        var pos = dc.scrollTop();
        if (pos == 0) {
            $(".seting").hide();
            $(".setingZoom").css("display","flex");
            $(".sts-seting").show();
        }
    });
});

document.getElementById("status").addEventListener("click",function () {
    $("#status").children().css("color","#337ab7");
    $("#calls").children().css("color","");
    $("#chats").children().css("color","");
    $("#setting").children().css("color","");
    $("#camera").children().css("color","");
    $(".header").html($("#header-status").outerHTML());
    $(".header").find("#header-status").show();
    $(".containerr").html($(".body-status-container").outerHTML());
    $(".containerr").find(".body-status-container").show();



// funksioni ce zmadhon foton e storyt tek sort

    $(".photo-story").click(function () {
        $(this).parent().css("background","grey");
        var src = $(this).attr("src");
        var element = $(".body");
        var div = $("<div class='contain-zoom-pht'></div>");
        var img = $("<img class='imgZomm'>");
        var border = $("<div class='border-pht-story'></div>");
        img.attr("src",src);
        div.append(border);
        div.append(img);
        element.append(div);
        $(".border-pht-story").css("width","100%");
        var iconStory = $("<div id='iconBottom' class=\"glyphicon\">&#xe113;</div>");
        var textRply = $("<span class='replayTxt'>Replay</span>");
        div.append(textRply);
        div.append(iconStory);
        var phtStr = $(".phtINzoomStr");
        var name = $(this).parent().parent().parent().find(".name-msg").text();
        var newName = $("#Name").text(name);
        var time = $(this).parent().parent().parent().find("#Time").text();
        var newTime = $("#newTime").text(time);
        phtStr.attr("src",src);
        div.append($("#divStr").outerHTML());
        div.find("#divStr").show();
        setTimeout(function () {
            // $(rightImg).click();
            $(div).click();
        }, 2500);

        div.click(function () {
            $(this).remove();
        });
    });

    var dc =  $(".containerr .body-status-container");
    dc.scroll(function() {
        var pos = dc.scrollTop();
        if (pos == 0) {
            $("#div-inp").show(200);
        }
    });

    dc.scroll(function() {
        var pos = dc.scrollTop();
        if (pos != 0) {
            $("#div-inp").hide(200);
        }
    });

});

document.getElementById("camera").addEventListener("click",function () {
    $(".header").hide();
    $(".footerr").hide();

    $(".containerr").html($(".body-camera-container").outerHTML());
    var bdContainer = $(".containerr").find(".body-camera-container");
    bdContainer.css("display","block");
    bdContainer.css("width","320px");
    bdContainer.css("height","460px");
    $(".containerr .body-camera-container video, #my_camera").css("height","100%");
    $(".containerr .body-camera-container video, #my_camera").css("width","100%");
    var container = $(".containerr .body-camera-container");
    container.css("width","20px");
    container.css("height","20px");
    container.css("position","absolute");
    container.css("left","0");
    container.css("right","0");
    container.css("margin","auto");
    container.css("bottom","0");
    container.css("overflow","hidden");



    container.animate({
        width: '320px',
        height: '460px',
    },500, function () {
        Webcam.attach( '#my_camera' );
        $(".containerr").css("overflow","hidden");
    });
        function take_snapshot() {
        Webcam.snap( function(data_uri) {
            document.getElementById('my_result').innerHTML = '<img src="'+data_uri+'"/>';
        } );
    }
    $("#xCamera").click(function () {
        var containerrr = $(".containerr .body-camera-container");
        $(".containerr").css("background","black");
        containerrr.css("position","absolute");
        containerrr.css("left","0");
        containerrr.css("right","0");
        containerrr.css("margin","auto");
        containerrr.css("bottom","0");
        containerrr.css("overflow","hidden");
        containerrr.animate({
            width: '10px',
            height: '10px'
        },500,function () {
debugger
            $(".containerr").css("background","");
            containerrr.remove();

            var headerId = $(".header").children()[0].id;

            if (headerId === "header-status") {
                $('#status').click()
            }
            if (headerId === "header-calls") {
                $('#calls').click()
            }
            if (headerId === "header-chats") {
                $('#chats').click()
            }
            if (headerId === "header-settings") {
                $('#setting').click()
            }

            $(".header").show();
            $(".footerr").show();


            Webcam.stream.getTracks()[0].stop();
        });
    });
    // location.reload();
    //

});







jQuery.fn.outerHTML = function() {
    return jQuery('<div />').append(this.eq(0).clone()).html();
};


document.getElementById("chats").click();

