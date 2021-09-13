"use strict";

$(document).ready(function() {

    let isStarted = false;
    let status = "";

    $("#start").click(function(){
        if(isStarted === false) {
            if($(".boundary").hasClass("youlose")) {
                $(".boundary").removeClass("youlose");
            }
            isStarted = true;
            status = "started";
            $("#status").html("Game started!!!");
        }
    });

    $("#end").mouseover(function() {
        if(isStarted === true) {
            isStarted = false;
            if(status === "lost") {
                status = "";
                $("#status").html("You lose!!!");
                alert("You lose!");
            } else if(status === "started") {
                $("#status").html("You Won!!!");
                alert("You won!");
            }
        }
    });

    $(".boundary").mouseover(function() {
        if(isStarted === true) {
            isStarted = false;
            $(".boundary").addClass("youlose");
            status = "lost";

            $("#status").html("You lose!!!");
            alert("You lose!!!");
        } else {
        }
    });

    $("#maze").mouseleave(function() {
        if(isStarted === true) {
            isStarted = false;
            status = "";
            $("#status").html("Do not cheat!!!");
            $(".boundary").addClass("youlose");
            alert("No cheating!");
        }
    });



});
