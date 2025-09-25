let tripActive = false;

function startTrip() {
    if (!tripActive) {
        document.getElementById("notification").innerText = "New trip started!";
        document.getElementById("trip-info").innerText = "Destination: Downtown";
        tripActive = true;
    } else {
        alert("You are already on a trip!");
    }
}

function endTrip() {
    if (tripActive) {
        document.getElementById("notification").innerText = "Trip ended!";
        document.getElementById("trip-info").innerText = "None";
        tripActive = false;
    } else {
        alert("You are not on a trip!");
    }
}


