var bodyMsg = $('.body');
var header = $('.header');
var bodyContainer = $('.body-container');
var nurmi = 0;

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
            $(this).text("");
            $(this).focus();
        });

        // Textarea auto
        $(textArea).on('input', function () {
            var self = $(this);
            self.css("color","white");
            var el = $(this);
            self.css("height","50px");
            self.css("padding","0");
            self.css("top","48%");

            if (el[0].scrollHeight < 100) {
                el.css("height",+ el[0].scrollHeight + 'px');
            } else {
                el.css("height","135px");
                el.css("top","35%");
            }
            if (self.val() === ""){
                $(sendbtn).css("display","none");
            }

            if (self.val() !== ""){
                $(sendbtn).css("display","");
            }

        });

    });
});

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
    var imgZoom = $(".imgZoom");

    // We show the loading bar
    $(".border-pht-story").animate({
        width: "320px",
    }, 4000, function() {
        $(div).remove();
    });

    // Catch the mouse down event and measure passed seconds, to calculate remaining
    imgZoom.mousedown(function() {

        $(".border-pht-story").stop();
        x2 = Date.now();
    });

    // Make the animation with remaining seconds
    imgZoom.mouseup(function() {
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

        $("#body-calls .all-calls .divv-name-calls .name-msg").filter(function() {
            $(this).parent().parent().show();
        });

        searchFilter("#body-calls .all-calls .divv-name-calls .name-msg", ".inp-search");
    });

   $(".Mised-Atcalls").click(function() {
        $(".Mised-Atcalls").addClass("misedCallClick");
        $(".ALL-ATCalls").addClass("All-callsClick");


        // Show only Missed calls
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
    dc.scroll(function(e) {
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
        } else {
            $(".chat").hide(300);
            $(".div-inp").hide(300);
            $(".chat").hide(300);
            $(".chats-mes").show(300);
        }
    });

    searchFilter("#body-chats .all-sms .hold-name-msg .name-msg", ".inp-search");

    // Open message
    $(".all-sms").click(function(e) {
        // Check if in edit mode
        if (!$($(this).find(".span-edit")).is(":hidden")){
            e.preventDefault();
            return;
        }

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

        $("#callInSms").click(function () {
            $(this).parent().parent().find(".hold-photo-mesage-InChats").click();
        });

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

    });

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
            // Check if we are in edit mode
            if ($($(this).find(".span-edit")).is(":hidden")){
                e.preventDefault();
                return;
            }

            // Deselect Message
            if ($(this).find(".span-edit").children().hasClass("colorBlu")) {

                // Remove Blue Color
                $(this).removeClass("bck-sms");
                $(this).find(".span-edit").children().removeClass("colorBlu");
                $(".archiveSpas").css("color","");
                $(".deleteSpan").css("color","");
                $(".readAll-spn").css("display","");
                $(".readspn").css("display","none");
                //Decrease selected messages nr
                nurmi -- ;

                $(".chats-inEdit .count").text(nurmi);
                $(".chats-mes-inEdit .count").text(nurmi);
                var ss = nurmi === 1 ? '' : 's';
                $(".selected").text("chat" + ss + " selected");

            } else {
                // Select message
                $(this).find(".span-edit").children().addClass("colorBlu");
                $(this).addClass("bck-sms");
                $(".body #header-chats .chat").css("display","none");
                $(".archiveSpas").css("color","#337ab7");
                $(".deleteSpan").css("color","#337ab7");
                $(".readAll-spn").css("display","none");
                $(".readspn").css("display","");
                $(".body .chats-mes").css("display","none");
                nurmi ++ ;
                $(".chats-inEdit .count").text(nurmi);
                $(".chats-mes-inEdit .count").text(nurmi);
                var ss = nurmi === 1 ? '' : 's';
                $(".selected").text("chat" + ss + " selected");
            }
            if  (nurmi !== 0){

                $(".archiveSpas").css("color","#337ab7");
                $(".deleteSpan").css("color","#337ab7");
                $(".readAll-spn").css("display","none");
                $(".readspn").css("display","");
                var delSpan = $(".deleteSpan");
                delSpan.off('click');
                delSpan.click(function () {

                    var element = $(".body");
                    var divContainerDelete = $("<div class='divContainerDelete'><div class='holdElemnt-select'><div class='hold-dlt-Archive'><div class='deleteSelect'><span>Delete</span><span class='nrdlt'>1</span><span>Chat</span></div><div class='ArchiveDlt'>Archive</div></div><div class='Cancel-select'>Cancel</div></div></div>");
                    element.append(divContainerDelete);
                    $(".nrdlt").text(nurmi);

                    $(".Cancel-select").click(function () {
                        $(divContainerDelete).remove();
                    });

                    $(".deleteSelect").click(function () {
                        $(".bck-sms").remove();
                        $(divContainerDelete).remove();
                        $(".chats-inEdit").css("display","none");
                        $(".chats-mes-inEdit").css("display","none");
                        $(".done-chats").click();
                    });
                });

            }

            // No selected message
            if (nurmi === 0) {
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

        var dc =  $("div.body-chats-container");
        dc.scroll(function(e) {
            var pos = dc.scrollTop();
            if (pos === 0) {
                $(".div-inp").show(300);
                if (nurmi === 0) {
                    $(".body .chats-inEdit").css("display","none");
                    $(".body .chats-mes-inEdit").css("display","none");
                    $(".body .chat").show(300);
                    $(".body .chats-mes").hide(300);
                } else {
                    $(".body .chat").css("display","none");
                    $(".body .chats-mes").css("display","none");
                    $(".body .chats-inEdit").show(300);
                    $(".body .chats-mes-inEdit").hide(300);
                }
            }
        });

        dc.scroll(function() {
            var pos = dc.scrollTop();
            if (pos !== 0) {
                $(".div-inp").css("display","none");
                if (nurmi === 0) {
                    $(".body .chats-inEdit").css("display","none");
                    $(".body .chats-mes-inEdit").css("display","none");
                    $(".body .chat").hide(300);
                    $(".body .chats-mes").show();
                } else {
                    $(".body .chats-inEdit").hide(300);
                    $(".body .chats-mes-inEdit").show(300);
                    $(".body .chat").css("display","none");
                    $(".body .chats-mes").css("display","none");
                }
            }
        });
    });

    $(".done-chats").click(function () {
        var editSpan = $(".span-edit");
        editSpan.parent().removeClass("bck-sms");
        editSpan.children().removeClass("colorBlu");
        $(".newfooter-edit").remove();
        $(".footerr").css("display","");
        $(".done-chats").css("display","none");
        $(".edit").css("display","");
        editSpan.css("display","none");
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

// ky funksion nderron foton e profilit te setting
function renderImage(file) {
    if (typeof file === 'undefined') {
        alert("No File Chosen");
        return;
    }
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function (event) {
        the_url = event.target.result;
        var image = $("#profImage");
        image.attr("src",the_url);
    }
}
// jQuery Prototype to get element including itself
jQuery.fn.outerHTML = function() {
    return jQuery('<div />').append(this.eq(0).clone()).html();
};

// Show messages on start
document.getElementById("chats").click();

