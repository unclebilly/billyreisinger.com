(function() {
    var el = $$(".nav ul li a").find(function(el) {
        return el.href == window.location.toString();
    });
    $(el).up("li").addClassName("current");
})();