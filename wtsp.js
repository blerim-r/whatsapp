
// $(".span-edit").click(function () {
//     debugger;
//     $(this).children().css("color"," #337ab7");
//     $(this).parent().css("background","#d4ddde");
//     $(" #header-chats .chat").css("display","none!important");
//     $(".archiveSpas").css("color","#337ab7");
//     $(".deleteSpan").css("color","#337ab7");
//     $(".readAll-spn").css("display","none");
//     $(".readspn").css("display","");
//
//     $(".chats-mes").css("display","none!important");
//     $(".chats-inEdit").css("display","");
//     $(".chats-mes-inEdit").css("display","");
//
//
//     // // kontrollojme nese jemi ne top dhe te shfaqim serchin dhe chat
//     // var dc =  $("div.body-chats-container");
//     // dc.scroll(function() {
//     //     var pos = dc.scrollTop();
//     //     if (pos == 0) {
//     //         $(".chat").css("display","none");
//     //         $(".chats-mes").css("display","none!importanet");
//     //         $(".chats-inEdit").show(300);
//     //         // $(".div-inp").show(300);
//     //         $(".chats-inEdit").show(300);
//     //         $(".chats-mes-inEdit").hide(300);
//     //     }
//     // });
//     //
//     // dc.scroll(function() {
//     //     var pos = dc.scrollTop();
//     //     if (pos != 0) {
//     //         $(".chats-inEdit").hide(300);
//     //         // $(".div-inp").hide(300);
//     //         $(".chats-inEdit").hide(300);
//     //         $(".chats-mes-inEdit").show(300);
//     //         $(".chat").css("display","none");
//     //         $(".chats-mes").css("display","none!importanet");
//     //     }
//     // });
//
//
// });



// cfar ndodh kur klikojm status
    $(".body").on ("click","#status" ,function () {

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

    // funksioni i klikimit te pen tek statusi
    $(".pen-status").click(function () {
        var element = $(".body");
        var container = $("<div class='containerText'><span class='x-pen-container'>X</span><span class='T-pen-container'>T</span></div>");
        var textArea = $("<textarea class='container-textarea'>Type a status</textarea>");
        var sendbtn = $("<span style=\"display: none\" class=\"spn-btn-pen\"><img src=\"imgs/send-button.svg\" class=\"sendIt-inChats\"></span>");
        container.append(sendbtn);
        container.append(textArea);
        element.append(container);

        $(".x-pen-container").click(function () {
            $(container).remove();
        });

        $(".container-textarea").click(function () {
            $(".container-textarea").text("");
            $(".container-textarea").focus();
        });
        
        // ky funksion pasi te shkruajme vashdon dhe rrit haight e textarea, dhe pasi ta fshijme zvogelohet deri ne 50px
        $(textArea).on('input', function () {
            $(".container-textarea").css("color","white");
            var el = $(this);
            $(this).css("height","50px");
            $(this).css("padding","0");
            $(this).css("top","48%");

            if (el[0].scrollHeight < 100) {
                el.css("height",+ el[0].scrollHeight + 'px');
            } else {
                el.css("height","135px");
                el.css("top","35%");
            }
            if ($(".container-textarea").val() === ""){
                debugger
                $(sendbtn).css("display","none");
            }

            if ($(".container-textarea").val() !== ""){
                debugger
                $(sendbtn).css("display","");
            }


            // if (el.val() === ""){
            //     $(".container-textarea").val("Type a status");
            // }
        });
        
    });

});


// cfar ndodh kur klikojm calls
    $(".body").on ("click","#calls" ,function () {

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

            $(".inCallsDiv").remove();
        });
    });


});


// cfar ndodh kur klikojm camera
    $(".body").on ("click","#camera" ,function () {

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

//    ky esht nje variabel global ce e perdorim kur duam te selektojm dhe te fshijm e mesazhet
var nurmi = 0;

// cfar ndodh kur klikojm chats
    $(".body").on ("click","#chats" ,function () {

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
    dc.scroll(function(e) {
        debugger
        if ($(".body #header-chats .edit-icon .edit").is(":hidden")){
            e.preventDefault();
            return;
        }
        var pos = dc.scrollTop();
        if (pos == 0) {
            $(".chat").show(300);
            $(".div-inp").show(300);
            $(".chat").show(300);
            $(".chats-mes").hide(300);
        }
    });

    dc.scroll(function(e) {
        debugger
        if ($(".body #header-chats .edit-icon .edit").is(":hidden")){
            e.preventDefault();
            return;
        }
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


    // momenti kur hapim mesazhet e njerit nga contaktet
    $(".all-sms").click(function (e) {

        // kontrollojme nese e kemi nje span tick show dhe nk futem ketu
        if (!$($(this).find(".span-edit")).is(":hidden")){
            e.preventDefault();
            return;
        }

        // fusim ne header , headerin e ri ce kemi te template ne html (headerin pasi kemi hapur mesazhin)
        $('.header').html($('#header-inChats').outerHTML());
        $('.header').find('#header-inChats').show();

        // fusim ne container , containerin e ri te  chats ce e kemi te template ne html (chats pasi kemi hapur mesazhin)
        $('.containerr').html($('.body-InChats').outerHTML());
        $('.containerr').find('.body-InChats').show();

        // fusim footerin e ri pasi kemi hapur mesazhin
        $('.footerr').html($('.footer-inChats').outerHTML());
        $('.footerr').find('.footer-inChats').show();

        //pasi te klikojm mesazhin ne klikim i marim src , emrin , id
        //id ja marim per arsye sepse kur te klikojm butonin previus i qojm id dhe shfaqemi po te ai meazh jo gjithmon ne fillim
        var src = $(this).find(".photo-msg").attr("src");
        var name = $(this).find(".name-msg").text();
        var id = $(this).find(".name-msg").attr("id");
        $(".img-msg-inCalls").attr("src",src);
        $(".hold-data_InCalls").find(".name-msg").text(name);
        $(".hold-data_InCalls").find(".name-msg").attr("id",id);

        // i vendosim nje settime out textit posht emrit ce ta zhdukim pas 2 min
        setTimeout(function(){
            $(".body .txtUnderName-inCalls").hide("500");
            }, 2000);


        // ky eshte nje variabel global ce e perdorim per tna ruajtur te dhenat e mesazheve ku si key ka Id e mesazhit ce klikojm dhe si value ka nje array me mesazhe
        var messages = GLOBAL_MESSAGES[$(this).attr("id")];
        // ketu bredhim arrayn me mesazhe ku per cdo mesazh i marim textin ,time , dhe sender ,pastaj krijojm divin dhe me gjith kto te dhena e shdaqim tek body te vendi mesazheve
        for (var i  in messages) {
            var msg = messages[i];
            var time = msg['timestamp'];
            var sender =  msg['sender'];
            var text =  msg['message'];
            var element = $(".body .holdMessages-inChats");
            var div = $("<div class='test'></div>");
            var divMesage = $("<div class='pppp'></div>");
            var divsms = $("<div style='padding: 10px'></div>");
            var divTimeTick = $("<div class='data'><div");
            divTimeTick.text(time);
            divsms.text(text);
            divMesage.append(divsms);
            divMesage.append(divTimeTick);
            div.append(divMesage);
            element.append(div);
            div = element.children().last();
            // ketu pyesim necoftese sender nuk esht true / ncs esht true nk i ndryshojm asgje /ncs esht false e qojm djathtas sikur na ka ardhur si meazh  jo sikur e kemi derguar dhe e bejm backround te bardhe
            if (!sender) {
                div.css("justify-content","end");
                divMesage.css("background-color","white");
            }
        }

        //butoni lart djathtas ce nga kthen nje hap mbrapa tek chats
        $("#backPreveus").click(function () {
            $(".containerr").css("flex","12");

                // e shfaqim perseri textin posht emrit pasi ne clikim te mesazheve e bejm hide me settimeout
                $(".body .txtUnderName-inCalls").show();

            //pasi klikojme backpreveus marim htmln e footerit ce e kemi te template dhe pasi ta shfaqim klikojme chats per tna shfaqur mesazhet

            $('.footerr').html($('.footer-template').html());
            $("#chats").click();
            //ky funksion me posht perdor id e elementit ce kur te shkojm te mesazhet te shfaqemi te po i njejti mesah ce ishim kur klikuam
            window.location.href = "#" + id
        });

        $(".containerr").css("flex","18");


        // ky funksion pasi te shkruajme vashdon dhe rrit haight e textarea, dhe pasi ta fshijme zvogelohet deri ne 28px
        $('.body .textareaFooter-InChats').on('input', function () {
            var el = $(this);
            if(el.val() !== "") {

                //ncs kemi futur text i bejm hide ca ikona dhe nxierrim ate ce drg mesazh dhe zgjerojm texarean (rrisim widthin)
                $(".textareaIconright").css("display","none");
                $(".camera-inchatcs").css("display","none");
                $(".mikrofon-inchats").css("display","none");
                $(".send-msg-inChats").css("display","");
                $(this).css("width","250px");
            }
            //ktu ndodh e kunderta e asaj me siper
            if(el.val() === ""){
                $(".textareaIconright").css("display","");
                $(".camera-inchatcs").css("display","");
                $(".mikrofon-inchats").css("display","");
                $(".send-msg-inChats").css("display","none");
                $(this).css("width","");
            }
            $(this).css("height","28px");
            $(this).css("padding","0");
            if (el[0].scrollHeight < 100) {
                el.css("height",+ el[0].scrollHeight + 'px');
            } else {
                el.css("height","100px");
            }
        });


        //    ky esht funksioni i butonit send ne te djath te textareas dhe dergon mesazhin ncs e klikojm
        $(".send-msg-inChats").click(function () {
            sendMessage();
        });
        // momenti kur kemi shkruajtur nje mesazh dhe shtypim enter
        $('.body .textareaFooter-InChats').on("keypress", function(e) {
            // Catch enter key
            if (e.keyCode == 13) {
                e.preventDefault();
                sendMessage();
            }
        });


        // momenti kur shtypim butonin call aty lart dhe shfaqim kte divin posht
        $("#callInSms").click(function () {
            $(this).parent().parent().find(".hold-photo-mesage-InChats").click();
        });
        // ky e shfaq divin
        $(".hold-photo-mesage-InChats").click(function () {
            var element = $(".body");
            var src = $(this).children().attr('src');
            var div = $("<div style='display: none' class='inCallsDiv'></div>");
            var name = $(this).parent().parent().find(".name-msg").text();
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
        // kte duhet ta perfundoj
        // momenti kur klikojm kameran kur jemi ne bisede
        // $("#cameraInchats").click(function () {
        //
        // });
    });

//    momenti kur klikojm ikonen edit lart ne header
        // bejm kte icone none dhe shfaqim iconen tj done ce pasi ta shtypim ate te mund ta shfaqim perseri kte icone edit
        // shfacim dhe nje footer te ri me ca butona ne te dhe shfaqim dhe nje icone tick ce behet blu kur te klikojme cdo mesazh,ajo shfaqetanash mesazhit ne fillim

        $(".edit").click(function () {

                $(this).css("display","none");
                $(".done-chats").css("display","");
                $(".span-edit").css("display","");
                $(".icon").css("display","none");
                $(".body .chats-mes").css("margin-right","126px");
                var element = $(".body");
                var newfooter = $("<div class='newfooter-edit'></div>");
                var spnArchive = $("<span class='archiveSpas'>Archive</span>");
                var spnReadAll = $("<span class='readAll-spn'>Read All</span>");
                var spnRead = $("<span style='display: none' class='readspn'>Read</span>");
                var spnDelete = $("<span class='deleteSpan'>Delete</span>");
                newfooter.append(spnArchive);
                newfooter.append(spnReadAll);
                newfooter.append(spnRead);
                newfooter.append(spnDelete);
                $(".footerr").css("display","none");
                element.append(newfooter);

            $(".all-sms").click(function (e) {
                // kontrollojme nese e kemi nje span tick show dhe nese nk e kemi  nk futem ketu
                if ($($(this).find(".span-edit")).is(":hidden")){
                    e.preventDefault();
                    return;
                }
                    // kontrollojme nese kemi shenjen tick blu anash emrit te mesazhit dhe nese esht futemi
                if ($(this).find(".span-edit").children().hasClass("colorBlu")) {

                        // kur futemi ktu i bie ce e kemi kliku me pare kte mesazh dhe tani po e klikojm prap dhe i hecim ngjyren  blu spanit te tick dhe backgroundin mesazhit te klikuar
                        $(this).removeClass("bck-sms");
                        $(this).find(".span-edit").children().removeClass("colorBlu");
                        $(".archiveSpas").css("color","");
                        $(".deleteSpan").css("color","");
                        $(".readAll-spn").css("display","");
                        $(".readspn").css("display","none");
                        // ky esht variabli ce kemi deklaruar global ce na tregon sa her kemi klikuar nje mesazh dhe ketu po e ulim me nji pasi po i hecim ne klikim ngjyren spanit tick dhe backgroundin mesazhit te klikuar me pare (ncs e klikojm perseri me posht e rrisim me nji pasi bejm blu spanin e tick dhe i shtojm backgroundin mesazhit te klikuar)
                        nurmi -- ;

                        $(".chats-inEdit .count").text(nurmi);
                        $(".chats-mes-inEdit .count").text(nurmi);

                        // kontrollojme nese kemi me shum se nje element te selektuar dhe e bejm nr shumes chats dhe e kunderta
                        if (nurmi == 1) {
                            $(".selected").text("chat selected")
                        } else {
                            $(".selected").text("chats selected")

                        }

                    } else {
                        debugger;
                        // ktu i bje ce esht ngjyre e bardhe dhe futemi e bejm blu dhe rrisim numrin

                        //e kunderta e asaj me siper rrisim nr dhe ju shtojm backgroundin mesazhit dhe spanit tick colorin blu
                        $(this).find(".span-edit").children().addClass("colorBlu");
                        $(this).addClass("bck-sms");
                        $(".body #header-chats .chat").css("display","none");
                        $(".archiveSpas").css("color","#337ab7");
                        $(".deleteSpan").css("color","#337ab7");
                        $(".readAll-spn").css("display","none");
                        $(".readspn").css("display","");
                        $(".body .chats-mes").css("display","none");
                        // $(".body .chats-inEdit").css("display","");
                        // $(".body .chats-mes-inEdit").css("display","");
                        nurmi ++ ;
                        $(".chats-inEdit .count").text(nurmi);
                        $(".chats-mes-inEdit .count").text(nurmi);

                        // kontrollojme nese kemi me shum se nje element te selektuar dhe e bejm nr shumes chats dhe e kunderta
                        if (nurmi == 1) {
                            $(".selected").text("chat selected")
                        } else {
                            $(".selected").text("chats selected")

                        }
                    }
                if  (nurmi != "0"){
                    // i bie ce kemi mesazhe te selectuara
                    // ncs futemi ketu i bje ce kemi mesazhe te selektuara dhe bejm ca butona n footer me color blue dhe bejm funksional dhe butonin delete
                    $(".archiveSpas").css("color","#337ab7");
                    $(".deleteSpan").css("color","#337ab7");
                    $(".readAll-spn").css("display","none");
                    $(".readspn").css("display","");



                    // i bejm of click pasi edhe pse nuk futet te funksioni meposhti ai e mer eventin dhe na rrit numrin ne cdo klikim te njerit nga mesazhet
                    $(".deleteSpan").off('click');

                    // kur futemi ktu krijojme nje div me position absolut ce mban 3 butona (delete,archive,cancel)
                    $(".deleteSpan").click(function () {

                        var element = $(".body");
                        var divContainerDelete = $("<div class='divContainerDelete'><div class='holdElemnt-select'><div class='hold-dlt-Archive'><div class='deleteSelect'><span>Delete</span><span class='nrdlt'>1</span><span>Chat</span></div><div class='ArchiveDlt'>Archive</div></div><div class='Cansel-select'>Cansel</div></div></div>");
                        element.append(divContainerDelete);
                        $(".nrdlt").text(nurmi);

                        // ketu fshijme divin ce krijuam me lart me position absolut
                        $(".Cansel-select").click(function () {
                            $(divContainerDelete).remove();
                        });
                        // ketu kapim me kte funksionin me poshte te gjithe mesazhet e selektuara dhe i fshijme , me pas fshijme dhe vete divin ce mbante kte butonin delete
                        $(".deleteSelect").click(function () {
                            $(".bck-sms").each(function (key,element) {
                                debugger
                                $(element).remove();
                            });
                            $(divContainerDelete).remove();
                            $(".chats-inEdit").css("display","none");
                            $(".chats-mes-inEdit").css("display","none");
                            $(".done-chats").click();
                        });
                    });

                }
                // kur nr e kemi 0 i bie ce nk kemi mesazhe te selektuara
                if (nurmi == "0") {
                    $(".body .chats-inEdit").css("display","none");
                    $(".body .chats-mes-inEdit").css("display","none");
                    $(".body .chat").css("display","");
                    $(".body .chats-mes").css("display","");
                } else {
                    if ($(".body #header-chats .div-inp").is(":hidden")) {
                        $(".body .chats-mes-inEdit").css("display","flex");
                    } else {
                        $(".body .chats-inEdit").css("display","");
                    }
                }

            });

            // kontrollojme nese jemi ne top dhe te shfaqim serchin dhe chat anash dhe fshehim ate lart ne mes
                  var dc =  $("div.body-chats-container");
                  dc.scroll(function() {
                      var pos = dc.scrollTop();
                      if (pos == 0) {
                          $(".div-inp").show(300);
                          if (nurmi == "0") {
                              $(".body .chats-inEdit").css("display","none");
                              $(".body .chats-mes-inEdit").css("display","none");
                              $(".body .chat").show(300);
                              $(".body .chats-mes").hide(300);
                          } else {
                              $(".body .chat").css("display","none");
                              $(".body .chats-mes").css("display","none");
                              $(".body .chats-inEdit").show(300);
                              $(".body.chats-inEdit").show(300);
                              $(".body .chats-mes-inEdit").hide(300);
                          }
                      }
                  });

                  // kontrollojme nese nk jemi ne top dhe fshehim searchin edhe chats anash dhe shfaqim chats lart ne mes
                  dc.scroll(function() {
                      var pos = dc.scrollTop();
                      if (pos != 0) {
                          $(".div-inp").css("display","none");
                          if (nurmi == "0") {
                              $(".body .chats-inEdit").css("display","none");
                              $(".body .chats-mes-inEdit").css("display","none");
                              $(".body .chat").hide(300);
                              $(".body .chats-mes").show();
                          } else {
                              $(".body .chats-inEdit").hide(300);
                              $(".body .chats-inEdit").hide(300);
                              $(".body .chats-mes-inEdit").show(300);
                              $(".body .chat").css("display","none");
                              $(".body .chats-mes").css("display","none");
                          }
                      }
                  });
        });

        // ky funksion na kthen edhe njeher ashtu sikur ishim ,ncs kemi fshire mesazhet edhe pasi klikojm kte buton akm i kemi te fshira
        $(".done-chats").click(function () {
            debugger
            $(".span-edit").parent().removeClass("bck-sms");
            $(".span-edit").children().removeClass("colorBlu");
            $(".newfooter-edit").remove();
            $(".footerr").css("display","");
            $(".done-chats").css("display","none");
            $(".edit").css("display","");
            $(".span-edit").css("display","none");
            $(".icon").css("display","");
            $(".body .chats-mes").css("margin-right","0");
            $(".body .chats-mes").css("display","");
            $(".body .chat").css("display","");
            $(".body .chats-inEdit").css("display","none");
            $(".body .chats-mes-inEdit").css("display","none");

            nurmi = 0;
            $(".chats-inEdit .count").text(nurmi);
            $(".chats-mes-inEdit .count").text(nurmi);
            $("#chats").click();
        });

});

// momenti kur kemi shkruajtur nje mesazh dhe shtypim enter
function sendMessage() {
        // shfaqim ca ikona dhe fshehim iconen ce dergon mesazhe
        $(".textareaIconright").css("display","");
        $(".camera-inchatcs").css("display","");
        $(".mikrofon-inchats").css("display","");
        $(".send-msg-inChats").css("display","none");
        $(".body .textareaFooter-InChats").css("width","");


        //ky funksion fshin nje kryeradhe ce ben enter pasi te bejm veprimet me poshte
        var elemet = $(".body .holdMessages-inChats");
        var text = $('.body .textareaFooter-InChats').val();
        var holderDiv = $("<div class='newSMS'></div>");
        var divMesage = $("<div class='pppp'></div>");
        var divsms = $("<div class='texti-InChats'></div>");
        var divTimeTick = $("<div class='time-tick-css'><div");

        //kte img tick e bejm display non ce ta shfaqim me posht me settime out pas 2 min
        var img = $("<img style='display: none' src='imgs/tick.svg'>");
        var timeee = moment().format('LT');
        divTimeTick.append(timeee);
        divTimeTick.append(img);
        divsms.text(text);
        divMesage.append(divTimeTick);
        divMesage.append(divsms);
        holderDiv.append(divMesage);
        elemet.append(holderDiv);
        $(".body .textareaFooter-InChats").val('');

        setTimeout(function(){
            img.show("300");
        }, 2000);
        $(".body-InChats").animate({ scrollTop: $(document).height() }, "slow");
        $(".body .textareaFooter-InChats").css("height","28px");
    }


// cfar ndodh kur klikojm setting
    $(".body").on ("click","#setting" ,function () {

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

// ky funksion nderron foton e profilit te setting
function renderImage(file) {
    debugger
    if (typeof file === 'undefined') {
        alert("ju nuk zgjodhet asnje file");
        return;
    }
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function (event) {
        the_url = event.target.result;
        // var image = document.getElementById('profImage');
        // image.src =  the_url;
        var image = $("#profImage");
        image.attr("src",the_url);
    }
}

// ky funksion kthen si string te gjith html e elementit ce dum duke perfshire dhe veten
jQuery.fn.outerHTML = function() {
    return jQuery('<div />').append(this.eq(0).clone()).html();
};

//si fillim kur loadojm faqen e klikojm manualisht mesazhet ce te shfqet
document.getElementById("chats").click();

