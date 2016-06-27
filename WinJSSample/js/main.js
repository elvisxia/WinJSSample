// Your code here!
(function () {
    "use strict"
    var w;
    if (typeof Worker !== "undefined")
    {
        var w = new Worker("ms-appx:///js/webWorkerDemo.js");
        w.onmessage = function (evt)
        {
            document.getElementById("myContent").innerText = evt.data;
            w.terminate();
        }
    }
})();