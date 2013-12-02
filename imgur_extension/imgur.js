DIV_NAME="hover_mb";
DEF_ZOOM="140";
ZOOM="zoom";

function getElementsByClass(matchClass) {
    var elems = document.getElementsByTagName('*');
    var matched = [];
    var i;
    for (i in elems) {
        if(elems[i].className !== undefined && (elems[i].className).indexOf(matchClass) > -1) {
            matched.push(elems[i]);
        }
    }

    return matched;
}

function removeRightPanel() {
    var i;
    var elems = getElementsByClass("imagelist-panels");  
    for (i in elems) {
        elems[i].parentNode.removeChild(elems[i]);
    }
}

function setContentWidth(){
    var content = document.getElementById('content');
    content.className='';
    content.style.width = "100%";
    content.style.padding = "0";
    content.style.margin = "0";
}

function setZoom() {
    var zoom = chrome.storage.sync.get(ZOOM, function(res) {
        var zoom = res[ZOOM];
        if (zoom === undefined) {
            chrome.storage.sync.set({ZOOM: DEF_ZOOM});
            zoom = DEF_ZOOM;
        }

        document.getElementById('imagelist').style.zoom = zoom / 100;
    });
}

/*
function addMouseListeners() {
    var elems = getElementsByClass("post");
    var i;
    for(i in elems) {
        elems[i].addEventListener("mouseover", function() {mouseOver(elems[i])}, false);
        elems[i].addEventListener("mouseOut", mouseOut(), false);
    }
}

function cloneElement(elem) {
    var clone = document.createElement(elem.tagName);
    var i;
    var children = elem.getElementsByTagName("*");
    for (i in children) {
        clone.appendChild(cloneElement(children[i]));
    }

    return clone;
}

function mouseOver(elem) {
    // TODO implement hover zoom 
}

function mouseOut() {
    var elem = document.getElementById(DIV_NAME);
    if (elem !== undefined) {
        elem.style.display = "none";
    }
}
*/

removeRightPanel();
setContentWidth();
setZoom();
