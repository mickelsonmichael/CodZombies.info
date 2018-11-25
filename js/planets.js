var originalTo = document.getElementById("planets-to").innerHTML;
var originalFrom = document.getElementById("planets-from").innerHTML;

$(function() {
    $("#planets-to, #planets-from").sortable({
        connectWith: ".planets-list",
        placeholder: "planets-list__planet-placeholder"
    });

});

function resetPlanets() {
    $("#planets-to").html(originalTo)
        .sortable("refresh");

    $("#planets-from").html(originalFrom)
        .sortable("refresh");
}