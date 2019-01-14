$(".fa-plus").on("click", function() {
    $("input").fadeToggle(150);
});

$("ul").on("click", "li", function() {
    $(this).toggleClass("done");
});

$("ul").on("click", "span", function(event) {
    $(this).parent().fadeOut(200, function() {
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").on("keypress", function() {
    if (event.key === "Enter") {
        $("ul").append("<li><span><i class='fas fa-trash'></i></span>" + $(this).val() + "</li>");
        $(this).val("");
    }
});