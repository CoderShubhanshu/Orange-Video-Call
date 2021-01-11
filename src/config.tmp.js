export default {
    exchangeServices: { 
        firebase: {
            apiKey: "",
            authDomain: "",
            databaseURL: "",
            projectId: "",
            storageBucket: "",
            messagingSenderId: "",
            appId: "",
            measurementId: ""
        }
    },
    communication: {
        webrtc: {
            iceServers: [
                {'urls': 'stun:stun.services.mozilla.com'}, 
                {'urls': 'stun:stun.l.google.com:19302'}
            ]
        }
    }
}