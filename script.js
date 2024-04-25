function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    const dateString = now.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

    document.getElementById('time').textContent = timeString;
    document.getElementById('date').textContent = dateString;
}

updateClock(); 
setInterval(updateClock, 1000); 
