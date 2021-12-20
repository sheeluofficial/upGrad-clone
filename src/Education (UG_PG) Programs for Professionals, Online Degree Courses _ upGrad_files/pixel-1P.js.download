__paytm_adtech_domain = {};
__paytm_adtech_domain.init = function(messageObj) {
    var localIframe = document.createElement('iframe');
    var id = messageObj && messageObj.token? 'adtech_iframe_'+ messageObj.token: 'adtech_iframe';
    localIframe.style.visibility = 'hidden';
    localIframe.style.display = 'none';
    localIframe.src = "https://evt.paytm.com/pixel/frontend/iframe";
    localIframe.setAttribute("id", id);
    localIframe.onload = function() {
        var frame = document.getElementById(id);
        frame.contentWindow.postMessage(messageObj, '*');
    }
    document.body.appendChild(localIframe);
}

__paytm_adtech_domain.generateMessageObj = function() {
    const queryString = window.location.search;
    console.log(queryString);
    const urlParams = new URLSearchParams(queryString);
    const refId = urlParams.get('refId');
    console.log(refId);

    var currentScript = document.currentScript;
    var currentJsUrl = currentScript.src;
    var token = currentJsUrl.substr(currentJsUrl.indexOf("token=") + 6);

    var messageObj = {};
    messageObj.customerId = refId;
    messageObj.token = token;
    return messageObj;
}
__paytm_adtech_domain.init(__paytm_adtech_domain.generateMessageObj());