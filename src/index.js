import $ from 'jquery';

if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(async ({ coords }) => {
        const lat = coords.latitude;
        const lon = coords.longitude;
        
        $('#lat').append(document.createTextNode(lat));
        $('#lon').append(document.createTextNode(lon));

        const apiURL = `/weather/${lat}/${lon}`;
        const res = await fetch(apiURL);
        const json = await res.json();
        console.log(json);
        console.log('helllloodddo')
    });
} else {
    console.log('geolocation IS NOT available');
}