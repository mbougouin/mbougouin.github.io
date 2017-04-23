(function ($) {
    'use strict';

    function requestApi(url, elementId) {
        $.get(url, function (response) {
            $("#" + elementId).html(JSON.stringify(response), null, 2);
        });
    }

    function homePageLoading() {
        requestApi('https://bitcoin.mubiz.com/info', 'info');
        requestApi('https://bitcoin.mubiz.com/blockchaininfo', 'blockchaininfo');
        requestApi('https://bitcoin.mubiz.com/mininginfo', 'mininginfo');
        requestApi('https://bitcoin.mubiz.com/peerinfo', 'peerinfo');    
    }

    $(document).ready(homePageLoading);
})(jQuery);
