// public/map.js
document.addEventListener("DOMContentLoaded", () => {
    const map = L.map('map').setView([51.505, -0.09], 13);
  
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
    }).addTo(map);
  
    // Create waypoints with click actions
    const waypoints = [
      { coordinates: [51.505, -0.09], id: 1 },
      { coordinates: [51.51, -0.1], id: 2 },
      // Add more waypoints here
    ];

    var marker = L.marker([12.2502, 64.3372], {
      tooltip: {
        permanent: true,
        direction: 'top',
        className: 'custom-tooltip',
        sticky: true,
      }
    }).addTo(map);
    
    marker.bindTooltip("Marker Name in Your Language").openTooltip();
    
  
    waypoints.forEach(waypoint => {
      const marker = L.marker(waypoint.coordinates).addTo(map);
      marker.on('click', () => {
        // Handle the action when a waypoint is clicked
        window.location.href = `/waypoint/${waypoint.id}`;
      });
    });
  });
  