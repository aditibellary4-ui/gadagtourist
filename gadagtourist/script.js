const destinationSelect =
    document.getElementById("destinationSelect");

const exploreBtn =
    document.getElementById("exploreBtn");

const selectionMessage =
    document.getElementById("selectionMessage");

function openDestination(place) {
    window.location.href =
        "destination.html?place=" + encodeURIComponent(place);
}

exploreBtn.addEventListener("click", function() {
    const selected = destinationSelect.value;

    if (!selected) {
        selectionMessage.textContent =
            "Please select a destination first.";
        return;
    }

    openDestination(selected);
});