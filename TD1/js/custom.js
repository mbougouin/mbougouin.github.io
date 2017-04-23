(function ($) {
    'use strict';

    function requestApi(url, elementId) {
        $.get(url, function (response) {
            $("#id").html(response);
        });
    }

    function homePageLoading() {
        requestApi('http://bitcoin.mubiz.com/info', 'info');
        requestApi('http://bitcoin.mubiz.com/blockchaininfo', 'blockchaininfo');
        requestApi('http://bitcoin.mubiz.com/mininginfo', 'mininginfo');
        requestApi('http://bitcoin.mubiz.com/peerinfo', 'peerinfo');    
    }

    $(document).ready(homePageLoading);
})(jQuery);
