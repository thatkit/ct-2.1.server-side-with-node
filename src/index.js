import $ from 'jquery';

if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(position => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        console.log(lat, lon);
        // $();
    });
} else {
    console.log('geolocation IS NOT available');
}