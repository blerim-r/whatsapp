var bodyMsg = $('.body');
var header = $('.header');
var bodyContainer = $('.body-container');

// status event
bodyMsg.on("click", "#status", function() {

    activeBottomEl($("#status"));
    updateHeader("#header-status");
    updateBody(".body-status-container");

    // Scrolling effect
    var dc = $(".body-container .body-status-container");
    dc.scroll(function() {
        if ($(this).scrollTop() === 0) {
            $("#div-inp").show(200);
        } else {
            $("#div-inp").hide(200);
        }
    });

    searchFilter("#body-status .story-all .divv-name-calls .name-msg", ".inp-search");

    // Trigger camera open on click
    $(".aparat-status").click(function() {
        $("#camera").click();
    });
});


// Story functions
// Story Animation
function animateStory(self) {
    $(self).parent().css("background", "grey");
    var src = $(self).attr("src");
    var div = $("<div style='display: none' class='contain-zoom-pht'></div>");
    var img = $("<img class='imgZoom'>");
    var border = $("<div class='border-pht-story'></div>");
    img.attr("src", src);
    div.append(border);
    div.append(img);
    bodyMsg.append(div);
    var iconStory = $("<div id='iconBottom' class=\"glyphicon\">&#xe113;</div>");
    var textRply = $("<span class='replayTxt'>Replay</span>");
    div.append(textRply);
    div.append(iconStory);
    var phtStr = $(".phtINzoomStr");
    phtStr.attr("src", src);
    div.append($("#divStr").outerHTML());
    div.find("#divStr").show();
    div.show();
    var x1 = Date.now();
    var x2;

    // We show the loading bar
    $(".border-pht-story").animate({
        width: "320px",
    }, 4000, function() {
        $(div).remove();
    });

    // Catch the mouse down event and measure passed seconds, to calculate remaining
    $(".imgZoom").mousedown(function() {

        $(".border-pht-story").stop();
        x2 = Date.now();
    });

    // Make the animation with remaining seconds
    $(".imgZoom").mouseup(function() {
        var tmpX1 = Date.now();
        $(".border-pht-story").animate({
            width: "320px",
        }, 4000 - (x2 - x1), function() {
            $(div).remove();
        });
        x1 = tmpX1;
    });

}

// Calls click Events
bodyMsg.on("click", "#calls", function() {

    activeBottomEl($('#calls'))
    updateHeader("#header-calls")
    updateBody(".body-calls-container")

    var dc = $("div.body-calls-container");
    //funksioni ce ben scrool
    dc.scroll(function() {
        var pos = dc.scrollTop();
        if (pos == 0) {
            $(".div-inp").show(300);
            $(".text-calls-heder").show(300);
        } else {
            $(".div-inp").hide(300);
            $(".text-calls-heder").hide(300);
        }
    });

    // Search Function
    searchFilter("#body-calls .all-calls .divv-name-calls .name-msg", ".inp-search");

    // All Cals Event
    $(".ALL-ATCalls").click(function() {
        $(".ALL-ATCalls").removeClass("All-callsClick");
        $(".Mised-Atcalls").removeClass("misedCallClick");

        // shfaqim te gjitha bisedad ce kemi folur dhe ato ce kan bo zile
        $("#body-calls .all-calls .divv-name-calls .name-msg").filter(function() {
            $(this).parent().parent().show();
        });

        searchFilter("#body-calls .all-calls .divv-name-calls .name-msg", ".inp-search");
    });

    // cfar ndodh kur klikojme butonin Mised
    $(".Mised-Atcalls").click(function() {
        $(".Mised-Atcalls").addClass("misedCallClick");
        $(".ALL-ATCalls").addClass("All-callsClick");

        //shfaqim vetem emrat e atyre ce kan ber zile dhe fshehim thirrjet e tjera
        $("#body-calls .all-calls .divv-name-calls .name-msg").filter(function() {
            if ($(this).hasClass("cl-red")) {
                $(this).parent().parent().show();
            } else {
                $(this).parent().parent().hide();
            }
        });

        searchFilter("#body-calls .all-calls .divv-name-calls .name-msg", ".inp-search");
    });

    $(".divv-name-calls").click(function() {
        $(this).parent().find(".hold-pht-calls").click();
    });
    $(".hold-pht-calls").click(function() {
        var element = bodyMsg;
        var src = $(this).children().attr('src');
        var div = $("<div style='display: none' class='inCallsDiv'></div>");
        var name = $(this).parent().find(".name-msg").text();
        $(".image-InCalls").attr("src", src);
        $("#name-InCalls").text(name);
        element.append(div);
        div.append($("#afterCalls").outerHTML());
        div.find("#afterCalls").show();
        div.show();


        $("#callEnd").click(function() {
            $(".inCallsDiv").remove();
        });
    });


});


// Camera Event
bodyMsg.on("click", "#camera", function() {

    // Hide footer and header
    header.hide();
    $(".footerr").hide();


    // Show camera template
    bodyContainer.html($(".body-camera-container").outerHTML());
    var bdContainer = bodyContainer.find(".body-camera-container");
    bdContainer.css("display", "block");
    bdContainer.css("width", "320px");
    bdContainer.css("height", "460px");

    //ktu kapim divin ce mban cameren
    var cameraDiv = $(".body-container .body-camera-container video, #my_camera")
    cameraDiv.css("height", "100%");
    cameraDiv.css("width", "100%");
    var container = $(".body-container .body-camera-container");

    // Camera animation
    container.css("width", "20px");
    container.css("height", "20px");
    container.css("position", "absolute");
    container.css("left", "0");
    container.css("right", "0");
    container.css("margin", "auto");
    container.css("bottom", "0");
    container.css("overflow", "hidden");

    // Animate camera to zoom
    container.animate({
        width: '320px',
        height: '460px',
    }, 500, function() {
        Webcam.attach('#my_camera');
        bodyContainer.css("overflow", "hidden");
    });

    // Attach snap function to camera
    container.find('.sircle-empy').click(function() {
        Webcam.snap(function(data_uri) {
            document.getElementById('my_camera').innerHTML = '<img src="' + data_uri + '"/>';
        });
    });

    // Delete the camera with the reverse animation
    $("#xCamera").click(function() {
        var containerrr = $(".body-container .body-camera-container");
        bodyContainer.css("background", "black");
        containerrr.css("position", "absolute");
        containerrr.css("left", "0");
        containerrr.css("right", "0");
        containerrr.css("margin", "auto");
        containerrr.css("bottom", "0");
        containerrr.css("overflow", "hidden");
        containerrr.animate({
            width: '10px',
            height: '10px',
        }, 500, function() {

            bodyContainer.css("background", "");
            containerrr.remove();

            var headerId = header.children()[0].id;

            // After deleting camera check the previous windiw
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

            // Show header and footer
            header.show();
            $(".footerr").show();

            // Stop Camera recording
            Webcam.stream.getTracks()[0].stop();
        });
    });
});


// Chats Event
bodyMsg.on("click", "#chats", function() {

    activeBottomEl($('#chats'))
    bodyMsg.show();


    updateHeader('#header-chats')
    updateBody('.body-chats-container')

    // Check for reaching the top
    var dc = $("div.body-chats-container");
    dc.scroll(function() {
        var pos = dc.scrollTop();
        if (pos == 0) {
            $(".chat").show(300);
            $(".div-inp").show(300);
            $(".chat").show(300);
            $(".chats-mes").hide(300);
        } else {
            $(".chat").hide(300);
            $(".div-inp").hide(300);
            $(".chat").hide(300);
            $(".chats-mes").show(300);
        }
    });

    searchFilter("#body-chats .all-sms .hold-name-msg .name-msg", ".inp-search");

    // Open message
    $(".all-sms").click(function() {
        debugger
        // fusim ne header , headerin e ri ce kemi te template ne html (headerin pasi kemi hapur mesazhin)
        updateHeader('#header-inChats')
        updateBody('.body-InChats')
        updateFooter('.footer-inChats')

        var src = $(this).find(".photo-msg").attr("src");
        var name = $(this).find(".name-msg").text();
        var id = this.id;
        $(".img-msg-inCalls").attr("src", src);
        var contact = $(".hold-data_InCalls");
        contact.find(".name-msg").text(name);
        contact.find(".name-msg").attr("id", id);

        // Hide after 2sec
        setTimeout(function() {
            $(".body .txtUnderName-inCalls").hide("500");
        }, 2000);

        // Get messages for this Conversation
        var messages = GLOBAL_MESSAGES[$(this).attr("id")];
        addMessages(messages);

        // Back button event
        $("#backPreveus").click(function() {
            bodyContainer.css("flex", "12");

            // Show the name, just once, then hide with timeout
            $(".body .txtUnderName-inCalls").show();

            // Replace Footer
            $('.footerr').html($('.footer-template').html());
            $('#chats').click();
            // Navigate to the message on messages list
            window.location.href = "#" + id
        });

        bodyContainer.css("flex", "18");


        // Make textarea responsive
        $('.body .textareaFooter-InChats').on('input', function() {
            var el = $(this);
            if (el.val() !== "") {

                $(".textareaIconright").css("display", "none");
                $(".camera-inchatcs").css("display", "none");
                $(".mikrofon-inchats").css("display", "none");
                $(".send-msg-inChats").css("display", "");
                $(this).css("width", "250px");
            } else {
                $(".textareaIconright").css("display", "");
                $(".camera-inchatcs").css("display", "");
                $(".mikrofon-inchats").css("display", "");
                $(".send-msg-inChats").css("display", "none");
                $(this).css("width", "");
            }
            $(this).css("height", "28px");
            $(this).css("padding", "0");
            if (el[0].scrollHeight < 100) {
                el.css("height", +el[0].scrollHeight + 'px');
            } else {
                el.css("height", "100px");
            }
        });


        // Trigger send message
        $(".send-msg-inChats").click(function() {
            sendMessage();
        });

        // Send message on enter
        $('.body .textareaFooter-InChats').on("keypress", function(e) {
            // Catch enter key
            if (e.keyCode == 13) {
                e.preventDefault();
                sendMessage();
            }
        });

    });

});

// Send message function
function sendMessage() {
    $(".textareaIconright").css("display", "");
    $(".camera-inchatcs").css("display", "");
    $(".mikrofon-inchats").css("display", "");
    $(".send-msg-inChats").css("display", "none");
    $(".body .textareaFooter-InChats").css("width", "");

    var elemet = $(".body .holdMessages-inChats");
    var text = $('.body .textareaFooter-InChats').val();
    var holderDiv = $("<div class='newSMS'></div>");
    var divMesage = $("<div class='pppp'></div>");
    var divsms = $("<div class='texti-InChats'></div>");
    var divTimeTick = $("<div class='time-tick-css'><div");

    // Tick Animation
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

    setTimeout(function() {
        img.show("300");
    }, 2000);
    $(".body-InChats").animate({
        scrollTop: $(document).height()
    }, "slow");
    $(".body .textareaFooter-InChats").css("height", "28px");
}


// Settings Event
bodyMsg.on("click", "#setting", function() {

    // shtojm ngjyren blu vetem butonit setting dhe ua hecim te gjitheve butonave tjere
    activeBottomEl($("#setting"));
    updateHeader('#header-settings');
    updateBody('.body-settings-container');

    var dc = $("div.body-settings-container");
    dc.scroll(function() {
        var pos = dc.scrollTop();
        if (pos != 0) {
            $(".seting").show();
            $(".setingZoom").hide();
        } else {
            $(".seting").hide();
            $(".setingZoom").css("display", "flex");
            $(".sts-seting").show();
        }
    });
});


// jQuery Prototype to get element including itself
jQuery.fn.outerHTML = function() {
    return jQuery('<div />').append(this.eq(0).clone()).html();
};

// Show messages on start
document.getElementById("chats").click();

