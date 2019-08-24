// JavaScript source code

$(document).ready(function () {
    $("#faqs #faqs-container #faqs-inner-div #parent_ul li").click(function () {

        $("#" + this.id + " div").fadeToggle();

        var s = $("#" + this.id + " span:first-child").text();

        var span = (s == "+") ? "-" : "+";


        if (span == "+") {
            $("#" + this.id + " span:first-child").html("+");
        } else {
            $("#" + this.id + " span:first-child").html("<span style='color:#38bcdb'>&ndash;</span>");
        }

    })
})
