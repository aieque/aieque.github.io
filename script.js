/* Set Content to Home */
$("#content").html($("[template=home]").html())


$("#navbar > h1").click(function() {
    $("#navbar > h1").each(function() {
        $(this).removeClass("selected");
    });

    $(this).addClass("selected");

    /* Time to do the thing. */
    $("#content").html($("[template=" + $(this).attr("template_name") + "]").html());
});