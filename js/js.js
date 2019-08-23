// JavaScript source code

$(document).ready(function () {
    $("#faqs #faqs-container #faqs-inner-div #parent_ul li").click(function () {

        $("#" + this.id + " div").fadeToggle();

        /*
        $("#" + this.id + " .plus-sign").hide(function () {
            $("#" + this.id + " .minus-sign").toggle();
        });
        */

    })
})
