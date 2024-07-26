import Echo from 'laravel-echo';

import Pusher from 'pusher-js';
window.Pusher = Pusher;

window.Echo = new Echo({
    broadcaster: 'reverb',
    key: import.meta.env.VITE_REVERB_APP_KEY,
    wsHost: import.meta.env.VITE_REVERB_HOST,
    wsPort: import.meta.env.VITE_REVERB_PORT ?? 80,
    wssPort: import.meta.env.VITE_REVERB_PORT ?? 443,
    forceTLS: (import.meta.env.VITE_REVERB_SCHEME ?? 'https') === 'https',
    enabledTransports: ['ws', 'wss'],
});

window.notif = 0;
window.Echo.private('NewRequest.' + window.userId)
    .listen('RequestEventMis', (e) => {
        console.log(e.notifMessage);
        // Handle the notification display logic here
        window.notif += 1;
        document.getElementById('notif').innerHTML = window.notif;
        console.log(window.notif);
    });