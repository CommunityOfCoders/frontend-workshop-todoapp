var notes = [];
var input = document.getElementById("new_note_input");
var notes_list = document.getElementById("notes_list");
input.onkeypress = function (event) {
    if (event.key == "Enter") {
        var val = input.value;
        if (val != "") {
            input.value = "";
            notes.push(val);
            populate_list();
        }
    }
}

function populate_list() {
    notes_list.innerHTML = "";
    for (var i = 0; i < notes.length; i++) {
        notes_list.innerHTML += "<li><span></span>" + notes[i] + "</li>";
    }
}

notes_list.onclick = function (event) {
    if (event.target.tagName == "SPAN") {
        var to_be_deleted = event.target.parentElement.innerText
        notes.splice(notes.indexOf(to_be_deleted),1)
        populate_list();
    } else {
        var note_li = event.target;
        if (note_li.style.textDecoration == "line-through") {
            note_li.style.textDecoration = "";
            note_li.style.color = "#666";
        } else {
            note_li.style.textDecoration = "line-through";
            note_li.style.color = "gray";
        }
    }
}