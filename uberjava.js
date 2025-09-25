
let currentRide = null;

document.getElementById('startRide').addEventListener('click', function() {
    if (!currentRide) {
        currentRide = "Ride started!";
        document.getElementById('rideStatus').innerText = currentRide;
    } else {
        alert("You are already on a ride!");
    }
});

document.getElementById('endRide').addEventListener('click', function() {
    if (currentRide) {
        currentRide = null;
        document.getElementById('rideStatus').innerText = "No rides currently.";
    } else {
        alert("No ride to end!");
    }
});

