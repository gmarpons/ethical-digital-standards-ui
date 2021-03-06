;(function () {
    'use strict';

    if (/[?&]annotate=true/.test(location.search)) {
        var links = document.getElementsByTagName('a');
        for (var i = 0; i < links.length; i++) {
            if (links[i].host === window.location.host) {
                // Internal link
                if (links[i].search) {
                    links[i].search += '&annotate=true'
                }
                else {
                    links[i].search = '?annotate=true'
                }
            }
        }
        window.hypothesisConfig = function () {
            return {
                "showHighlights": true,
                "openSidebar": true,
                "theme": "classic"
            };
        };
        var body = document.getElementsByTagName('body')[0];
        var js = document.createElement("script");
        js.type = "text/javascript";
        js.src = "https://hypothes.is/embed.js";
        js.async = 1;
        body.appendChild(js);
    }
})();
