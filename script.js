window.addEventListener("load", function() {
    var clickElems = document.getElementsByClassName("click");
    for(i=0; i< clickElems.length; i++) {
        (function(i) {
            
            var current = clickElems[i];
            var eventString = current.dataset.event;
            document.body.addEventListener(eventString, function() {
                current.style.backgroundColor = "#fff";
                setTimeout(function() {
                    current.style.backgroundColor = "#000";
                }, 2000)
            })
        }(i))
    }
})