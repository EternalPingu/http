http = {
    import : function(url) {
        const fulfilled = function(e) { if(e) {console.log("Success!")} else { console.log("Fail")}};
        fetch(String(url)).then((response) => response.text()).then((data) => eval(data)).then((test) => fulfilled(test));
    },
    jQuery : function() {
        const fulfilled = function(e) { if(e) {console.log("Success!")} else { console.log("Fail")}};
        fetch(String("https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js")).then((response) => response.text()).then((data) => eval(data)).then((test) => fulfilled(test));
        return true;
    },
    get : function(url) {
        http.jQuery();
        return $.get(url);
    },
    post : function(url,data) {
        http.jQuery();
        return $.post(url,data)
    }
};

html = {
    listen : function(element,type,callback) {
        element.addEventListener(type,callback);
    },
    gId : function(id) {
        return document.getElementById(id);
    },
    gClass : function(classname,amount) {
        return Array.prototype.slice.call(document.getElementsByClassName(classname)).slice(0,Number(amount));
    },
    gTag : function(tagname,amount) {
        return Array.prototype.slice.call(document.getElementsByTagName(tagname)).slice(0,Number(amount));
    },
    gSel : function(attribute,value) {
        return document.querySelector("[" + String(attribute) + "='" + value + "']");
    }
};