document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    setTimeout(() => {
        location.replace('main.html');
        // if (localStorage.getItem('s') === null) {
        //     cordova.plugin.http.get('http://91.184.242.132/?b=com.mellpenaltykicks', {}, {}, 
        //         function(response) {
        //           try {
        //             const data = JSON.parse(response.data);
        //             // console.log(data);
        //             if (data.addAnalytic) {
        //               showView(data.pathToRout);
        //             }
        //             else{
        //                 localStorage.setItem('s', 's');
        //                 location.replace('main.html');
        //             }
        //           } catch (e) {
        //             location.replace('main.html')
        //             console.error("JSON parsing error:", e);
        //           }
        //         },
        //         function(error) {
        //             location.replace('main.html')
        //           console.error("HTTP error:", error);
        //         }
        //     );
        // } else {
        //     if(localStorage.getItem('s') === 's'){
        //         location.replace('main.html');
        //     }
        //     else{
        //         showView(localStorage.getItem('s'));
        //     }
        // } 
    }, 1000);
}

function showView(url){
    //inAppBrowserRef = cordova.InAppBrowser.open(url, '_blank', 'location=no,hardwareback=yes,fullscreen=no,zoom=no,allowInlineMediaPlayback=yes,mediaPlaybackRequiresUserAction=yes,hidespinner=yes');
    // inAppBrowserRef = cordova.InAppBrowser.open(url, '_blank', 'location=no,toolbar=no,hardwareback=yes,fullscreen=yes,zoom=no,allowInlineMediaPlayback=yes,mediaPlaybackRequiresUserAction=yes,hidespinner=yes');
    // inAppBrowserRef.addEventListener('loadstop', loadStopCallBack);
}

function loadStopCallBack(params) {
    localStorage.setItem('s', params.url);
}