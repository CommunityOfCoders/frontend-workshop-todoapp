var input = document.getElementById("new_note_input");
var notes_list = document.getElementById("notes_list");

input.onkeypress = function (event) {
    if (event.key == "Enter") {
        var val = input.value;
        if (val != "") {
            input.value = "";
            notes_list.innerHTML += "<li><span><i class='fas fa-trash'></i></span>" + val + "</li>";
        }
    }
}

notes_list.onclick = function (event) {
    if (event.target.tagName == "SPAN")
        event.target.parentElement.remove();

    else if (event.target.tagName == "I")
        event.target.parentElement.parentElement.remove();

    else
        event.target.classList.toggle("done");
}