/**
 * Make active given element
 * @param element
 */
function activeBottomEl(element)
{
    const statusBar = $('#status');
    const calls = $('#calls');
    const chats = $('#chats');
    const settings = $("#setting");
    const camera = $("#camera");

    statusBar.children().css("color","");
    calls.children().css("color","");
    chats.children().css("color","");
    settings.children().css("color","");
    camera.children().css("color","");

    element.children().css("color", "#337ab7");
}

function updateHeader(selector) {
    var header = $('.header');
    header.html($(selector).outerHTML());
    header.find(selector).show();
}

function updateBody(selector) {
    var bodyContainer = $('.body-container');
    bodyContainer.html($(selector).outerHTML());
    bodyContainer.find(selector).show();
}

function updateFooter(selector) {
    var footer = $('.footerr');
    footer.html($(selector).outerHTML());
    footer.find(selector).show();
}

function searchFilter(elements, input) {
    $(input).on("keyup", function() {
        var txt = $(this).val().toLowerCase();
        $(elements).filter(function() {
            var exists = $(this).text().toLowerCase().indexOf(txt) > -1;
            $(this).parent().parent().toggle(exists);
        });
    });
}

function addMessages(messages) {
    for (var i in messages) {
        var msg = messages[i];
        var time = msg['timestamp'];
        var sender = msg['sender'];
        var text = msg['message'];
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
            div.css("justify-content", "end");
            divMesage.css("background-color", "white");
        }
    }
}