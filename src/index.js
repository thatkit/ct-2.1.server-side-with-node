import $ from 'jquery';

if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(async ({ coords }) => {
        const lat = coords.latitude;
        const lon = coords.longitude;
        $('#lat').append(document.createTextNode(lat));
        $('#lon').append(document.createTextNode(lon));

        const response = await fetch('/api', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({lat, lon})
        });
        const status = await response.json();
        console.log(status)
    });
} else {
    console.log('geolocation IS NOT available');
}