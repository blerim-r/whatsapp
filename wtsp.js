// cfar ndodh kur klikojm status
document.getElementById("status").addEventListener("click",function () {

    // shtojm ngjyren blu vetem butonit status dhe ua hecim te gjitheve butonave tjere
    $("#status").children().css("color","#337ab7");
    $("#calls").children().css("color","");
    $("#chats").children().css("color","");
    $("#setting").children().css("color","");
    $("#camera").children().css("color","");

    // fusim ne header , headerin e statusit ce e kemi te template ne html
    $(".header").html($("#header-status").outerHTML());
    $(".header").find("#header-status").show();

    // fusim ne container , containerin e statusit ce e kemi te template ne html
    $(".containerr").html($(".body-status-container").outerHTML());
    $(".containerr").find(".body-status-container").show();


// funksioni ce zmadhon foton e storyt tek sort
    $(".photo-story").click(function () {
        debugger
        $(this).parent().css("background","grey");
        var src = $(this).attr("src");
        var element = $(".body");
        var div = $("<div style='display: none' class='contain-zoom-pht'></div>");
        var img = $("<img class='imgZomm'>");
        var border = $("<div class='border-pht-story'></div>");
        img.attr("src",src);
        div.append(border);
        div.append(img);
        element.append(div);
        // $(".border-pht-story").css("width","100%");
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
        div.show();
        var x1 = Date.now();
        var x2;

        //shfaqim borderin n top te fotos me animation
        $(".border-pht-story").animate({
            width: "320px",
        },4000, function () {
                $(div).remove();
        });

        // ne momentin e klikimit e ndalim animation dhe e startojm pereri pasi te hecim gishtin nga clikimi me funksionin tj ne mouseup
        $(".imgZomm").mousedown(function () {
            x2 = Date.now();
            $(".border-pht-story").stop();
        });
        // me x1 dhe x2 masim secondat
        $(".imgZomm").mouseup(function () {
            $(".border-pht-story").animate({
                width: "320px",
            },4000 - (x2 - x1),function () {
                $(div).remove();
            });
            x1 = Date.now()
        });

    });

    //funskioni ce ben scroll
    var dc =  $(".containerr .body-status-container");
    dc.scroll(function() {
        var pos = dc.scrollTop();
        if (pos == 0) {
            $("#div-inp").show(200);
        }
    });

    //funksioni ce ben scroll
    dc.scroll(function() {
        var pos = dc.scrollTop();
        if (pos != 0) {
            $("#div-inp").hide(200);
        }
    });

    //funksioni i inputit ce ben search emrat e personave ce kan hedh story
    $(".inp-search").on("keyup", function () {
        var txt = $(this).val().toLowerCase();
        $("#body-status .story-all .divv-name-calls .name-msg").filter(function () {
            if ( $(this).text().toLowerCase().indexOf(txt) > -1 ) {
                $(this).parent().parent().show();
            } else {
                $(this).parent().parent().hide();
            }
        });
    });


//    funksioni i klikimit te icones se kameres tek statusi
    $(".aparat-status").click(function () {
        $("#camera").click();
    });

});

// cfar ndodh kur klikojm calls
document.getElementById("calls").addEventListener("click",function (){

    // shtojm ngjyren blu vetem butonit calls dhe ua hecim te gjitheve butonave tjere
    $("#calls").children().css("color","#337ab7");
    $("#setting").children().css("color","");
    $("#chats").children().css("color","");
    $("#camera").children().css("color","");
    $("#status").children().css("color","");

    // fusim ne header , headerin e calls ce e kemi te template ne html
    $(".header").html($("#header-calls").outerHTML());
    $(".header").find("#header-calls").show();

    // fusim ne container , containerin e calls ce e kemi te template ne html
    $(".containerr").html($(".body-calls-container").outerHTML());
    $(".containerr").find(".body-calls-container").show();


    var dc =  $("div.body-calls-container");
    //funksioni ce ben scrool
    dc.scroll(function() {
        var pos = dc.scrollTop();
        if (pos == 0) {
            $(".div-inp").show(300);
            $(".text-calls-heder").show(300);
        }
    });

    //funksioni ce ben scrool
    dc.scroll(function() {
        var pos = dc.scrollTop();
        if (pos != 0) {
            $(".div-inp").hide(300);
            $(".text-calls-heder").hide(300);

        }
    });

    //funksioni i inputit ce ben search emrat e personave ce kemi folur dhe ce kan bo zile
    $(".inp-search").on("keyup", function () {
        var txt = $(this).val().toLowerCase();
        $("#body-calls .all-calls .divv-name-calls .name-msg").filter(function () {
            if ( $(this).text().toLowerCase().indexOf(txt) > -1 ) {
                $(this).parent().parent().show();
            } else {
                $(this).parent().parent().hide();
            }
        });
    });

    // cfar ndodh kur klikojme butonin ALL
    $(".ALL-ATCalls").click(function () {
        $(".ALL-ATCalls").removeClass("All-callsClick");
        $(".Mised-Atcalls").removeClass("misedCallClick");

            // shfaqim te gjitha bisedad ce kemi folur dhe ato ce kan bo zile
            $("#body-calls .all-calls .divv-name-calls .name-msg").filter(function () {
                    $(this).parent().parent().show();
            });

        //funksioni i inputit ce ben search emrat e personave ce kemi folur dhe ce kan bo zile
        $(".inp-search").on("keyup", function () {
            var txt = $(this).val().toLowerCase();
            $("#body-calls .all-calls .divv-name-calls .name-msg").filter(function () {
                if ( $(this).text().toLowerCase().indexOf(txt) > -1 ) {
                    $(this).parent().parent().show();
                } else {
                    $(this).parent().parent().hide();
                }
            });
        });

        });

    // cfar ndodh kur klikojme butonin Mised
    $(".Mised-Atcalls").click(function () {
        $(".Mised-Atcalls").addClass("misedCallClick");
        $(".ALL-ATCalls").addClass("All-callsClick");

        //shfaqim vetem emrat e atyre ce kan ber zile dhe fshehim thirrjet e tjera
        $("#body-calls .all-calls .divv-name-calls .name-msg").filter(function () {
            if ( $(this).hasClass("cl-red") ) {
                $(this).parent().parent().show();
            } else {
                $(this).parent().parent().hide();
            }
        });

        //ky funksion i inputit kontrollon vetem emrat e atyre personave ce kan bo zile jo te gjitha thirrjeve
        $(".inp-search").on("keyup", function () {
            var txt = $(this).val().toLowerCase();
            $("#body-calls .all-calls .divv-name-calls .name-msg").filter(function () {
                if ( $(this).text().toLowerCase().indexOf(txt) > -1 & $(this).hasClass("cl-red")) {
                    $(this).parent().parent().show();
                } else {
                    $(this).parent().parent().hide();
                }
            });
        });

    });
    // ky funksioni posht esht e njejta gje me ate siper vetem se pak me e shkurt

    // $(".Mised-Atcalls").click(function () {
    //     $("#body-calls .all-calls .divv-name-calls .name-msg").filter(function () {
    //         $(this).parent().parent().toggle( $(this).hasClass("cl-red") );
    //     });
    // });
    $(".divv-name-calls").click(function () {
        debugger
        $(this).parent().find(".hold-pht-calls").click();
    });
    $(".hold-pht-calls").click(function () {
        debugger
        var element = $(".body");
        var src = $(this).children().attr('src');
        var div = $("<div style='display: none' class='inCallsDiv'></div>");
        var name = $(this).parent().find(".name-msg").text();
        $(".image-InCalls").attr("src",src);
        $("#name-InCalls").text(name);
        element.append(div);
        div.append($("#afterCalls").outerHTML());
        div.find("#afterCalls").show();
        div.show();


        $("#callEnd").click(function () {
            debugger
            $(".inCallsDiv").remove();
        });
    });


});

// cfar ndodh kur klikojm camera
document.getElementById("camera").addEventListener("click",function () {

    // bejm hide headerin dhe footerin ce tja lem koplet hapsiren vetem cameras
    $(".header").hide();
    $(".footerr").hide();

    //marim html-n e containerit ce kemi tek html template dhe e shfaqim
    $(".containerr").html($(".body-camera-container").outerHTML());
    var bdContainer = $(".containerr").find(".body-camera-container");
    bdContainer.css("display","block");
    bdContainer.css("width","320px");
    bdContainer.css("height","460px");

    //ktu kapim divin ce mban cameren
    $(".containerr .body-camera-container video, #my_camera").css("height","100%");
    $(".containerr .body-camera-container video, #my_camera").css("width","100%");
    var container = $(".containerr .body-camera-container");

    // divin e kameras e pozicionojm dhe e zvogelojm me 20px ce me animate ta zmadhojm aq sa duhet
    container.css("width","20px");
    container.css("height","20px");
    container.css("position","absolute");
    container.css("left","0");
    container.css("right","0");
    container.css("margin","auto");
    container.css("bottom","0");
    container.css("overflow","hidden");

     // ktu esht funksioni i animate nga 20pz e zmadhojm tani
    // e zmadhojm divin ce mban kameran pastaj hapim kameran te funksioni me poshte
    container.animate({
        width: '320px',
        height: '460px',
    },500, function () {
        Webcam.attach( '#my_camera' );
        $(".containerr").css("overflow","hidden");
    });

    //ktu e vejm n funksion butonin ce ben foto , dhe foton ce bejm e nxierrim aty ne vend te videos
    container.find('.sircle-empy').click(function () {
        Webcam.snap( function(data_uri) {
            document.getElementById('my_camera').innerHTML = '<img src="'+data_uri+'"/>';
        } );
    });

    // ne te njejten menyre me animate fshijme komplet divin ce mban kameran
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
            height: '10px',
        },500,function () {

            $(".containerr").css("background","");
            containerrr.remove();

            var headerId = $(".header").children()[0].id;

            //pasi te fshim divin e kameras kontrollojm se ne cilin header ishim para se te klikonim kameran dhe shfaqim edhe containerin e po atij headeri
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

            // shfaqim headerin dhe footerin ce fshim ne fillim
            $(".header").show();
            $(".footerr").show();

            //fikim dhe llampen e kuqe te kamers
            Webcam.stream.getTracks()[0].stop();
        });
    });
});

// cfar ndodh kur klikojm chats
document.getElementById("chats").addEventListener("click" ,function () {

    // shtojm ngjyren blu vetem butonit calls dhe ua hecim te gjitheve butonave tjere
    $("#chats").children().css("color","#337ab7");
    $("#setting").children().css("color","");
    $("#calls").children().css("color","");
    $("#camera").children().css("color","");
    $("#status").children().css("color","");

    $(".body").show();


     // fusim ne header , headerin e chats ce e kemi te template ne html
    $('.header').html($('#header-chats').outerHTML());
    $('.header').find('#header-chats').show();

    // fusim ne container , containerin e chats ce e kemi te template ne html
    $('.containerr').html($('.body-chats-container').outerHTML());
    $('.containerr').find('.body-chats-container').show();


    //k kontrollojme nese jemi ne top dhe te shfaqim serchin dhe chat
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

    //funksioni i inputit ce ben search emrat e personave ce kan shkrujt mesazh
    $(".inp-search").on("keyup", function () {
        var txt = $(this).val().toLowerCase();
        $("#body-chats .all-sms .hold-name-msg .name-msg").filter(function () {
            if ( $(this).text().toLowerCase().indexOf(txt) > -1 ) {
                $(this).parent().parent().show();
            } else {
                $(this).parent().parent().hide();
            }
        });
    });

});

// cfar ndodh kur klikojm setting
document.getElementById("setting").addEventListener("click",function () {

    // shtojm ngjyren blu vetem butonit setting dhe ua hecim te gjitheve butonave tjere
    $("#chats").children().css("color","");
    $("#calls").children().css("color","");
    $("#camera").children().css("color","");
    $("#status").children().css("color","");
    $("#setting").children().css("color","#337ab7");

    // fusim ne header , headerin e setings ce e kemi te template ne html
    $(".header").html($('#header-settings').outerHTML());
    $(".header").find('#header-settings').show();

    // fusim ne container , containerin e setings ce e kemi te template ne html
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



// ky funksion kthen si string te gjith html e elementit ce dum duke perfshire dhe veten
jQuery.fn.outerHTML = function() {
    return jQuery('<div />').append(this.eq(0).clone()).html();
};

//si fillim kur loadojm faqen e klikojm manualisht mesazhet ce te shfqet
document.getElementById("chats").click();

