$(document).ready(function() {
    
    $("#stream1_btn").on( function() {
        $(".stream1").hide();
        $(".stream1").show('slow');
        $(".stream1").hide('medium');
        $(".stream1").show('fast');
        $(".stream1").show(1000);
   });
// second video, talked about .show() and .hide() this is a speed of how fast or slow to show or hide them.
    $("#stream1_btn").on( function() {
        $(".stream1").toggle();
        $(".stream1").toggle(1000);
    });
// toggle when clicked and at a certain speed slow medium fast 100ms etc
    $("#stream1_btn").on( function() {
        $(".stream1").slideDown();
        $(".stream1").slideDown(1000);
    });
// slideDown when clicked on a button make the element visable, like the toggle() you can set the peed as a parameter. speed slow medium fast 100ms etc
    $("#stream1_btn").on( function() {
        $(".stream1").slideUp();
        $(".stream1").slideUp(1000);
    });
// This is the opposite to the slideDown method. This make a visable element move up(gone)
    $("#stream1_btn").on( function() {
        $(".stream1").slideToggle();
        $(".stream1").slideToggle(1000);
    });
// make the element viable or invisable depending on the status of the element
// other functions are fadeIn, fadeOut, fadeToggle
    $("#stream1_btn").on( function() {
        $(".stream1").fadeTo(1000, 0.5); // two parameters, (1)speed and (2)opacity 
    });
    $("#myBurron").removeClass("blueBox").addClass("border"); // example of chaining events together. first is remove, second is add
    $("p").css("color", "blue").slideUp(2000).slideDown(2000);
    $("a").attr("href", "http://www.example.com"); //The .attr() acts both as a getter and as a setter 

// you can chane events together. $('p').css('color', 'blue').dlideUp(2000).slidehow(2000);



   $("#stream2_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream2").addClass('highlight_stream');
   });
   $("#stream3_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream3").addClass('highlight_stream');
   });
}); 

//event listener .on can be replaced with .click(function() leaving out "click"
// others are .mouseenter(function(),  .mouseleave(function()

// second video, talked about .show() and .hide() this is a speed of how fast or slow to show or hide them.

// you can chane events together. $('p').css('color', 'blue').dlideUp(2000).slidehow(2000);