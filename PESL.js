/*
* PRASEOD-'s ES6 Library
* b2108
* Document-only version
*/
module.exports = {
a = {
    c: (a) => document.createAttribute(a),
    cn: (a) => document.createAttributeNS(a),
    g: (e,f) => e.getAttribute(f),
    s: (e,f,g) => e.setAttribute(f,g)
},
e = {
    a: document.activeElement,
    c: (a) => document.createElement(a),
    cn: (a) => document.createElementNS(a),
    f: document.fullscreenElement,
    g: {
        c: (a) => document.getElementsByClassName(a),
        i: (e) => document.getElementById(e),
        n: (a) => document.getElementsByName(a),
        t: (a) => document.getElementsByTagName(a),
        tn: (a) => document.getElementsByTagNameNS(a)
    },
    l: {
        a: (a,b,c) => a.addEventListener(b,c)
    },
    v: {
        c: (a) => document.createEvent(a)
    }
},
h = {
    c: document.cookie,
    d: {
        d: document.dir,
        o: document.domain,
        v: document.defaultView,
        m: document.designMode
    },
    lm: document.lastModified,
    l: document.location,
    rs: document.readyState,
    r: document.referrer,
    t: document.title,
    u: document.URL
},
n = {
    a: (a) => document.adoptNode(a),
    ci: (a) => document.createNodeIterator(a),
    ct: (a) => document.createTextNode(a),
    i: (a) => document.importNode(a)
},
o = {
        b: (a) => a.onblur,
        c: (a) => a.onclick,
        ca: (a) => a.oncancel,
        cc: (a) => a.oncuechange,
        cl: (a) => a.onclose,
        cm: (a) => a.oncontextmenu,
        cp: (a) => a.oncanplay,
        cpt: (a) => a.oncanplaythrough,
        d: {
            b: (a) => a.ondblclick,
            c: (a) => a.ondurationchange,
            d: (a) => a.ondrag,
            e: (a) => a.ondragend,
            l: (a) => a.ondragleave,
            o: (a) => a.ondragover,
            r: (a) => a.ondrop,
            s: (a) => a.ondragstart,
            t: (a) => a.ondragenter,
            x: (a) => a.ondragexit
        },
        et: (a) => a.onemptied,
        ed: (a) => a.onended,
        e: (a) => a.onerror,
        f: (a) => a.onfocus,
        g: (a) => a.ongotpointercapture,
        i: (a) => a.oninput,
        iv: (a) => a.oninvalid,
        k: {
            d: (a) => a.onkeydown,
            p: (a) => a.onkeypress,
            u: (a) => a.onkeyup
        },
        l: (a) => a.onload,
        ld: (a) => a.onloadeddata,
        le: (a) => a.onloadend,
        lm: (a) => a.onloadedmetadata,
        ls: (a) => a.onloadstart,
        lpc: (a) => a.onlostpointcapture,
        m: {
            d: (a) => a.onmousedown,
            u: (a) => a.onmouseup,
            l: (a) => a.onmouseleave,
            m: (a) => a.onmousemove,
            e: (a) => a.onmouseenter,
            o: (a) => a.onmouseout,
            w: (a) => a.onmousewheel
        },
        pa: (a) => a.onpause,
        p: {
            d: (a) => a.onpointerdown,
            m: (a) => a.onpointermove,
            u: (a) => a.onpointerup,
            c: (a) => a.onpointercancel,
            l: (a) => a.onpointerleave,
            o: (a) => a.onpointerout,
            v: (a) => a.onpointerover,
            e: (a) => a.onpointerenter,
            
        },
        pl: (a) => a.onplaying,
        r: (a) => a.onreset,
        rs: (a) => a.onresize,
        s: {
            c: (a) => a.onselectionchange,
            r: (a) => a.onscroll,
            e: (a) => a.onselect,
            d: (a) => a.onseeked,
            k: (a) => a.onseeking,
            s: (a) => a.onselectstart,
            p: (a) => a.onsuspend,
            t: (a) => a.onstalled,
            m: (a) => a.onsubmit
        },
        t: (a) => a.ontimeupdate,
        tc: (a) => a.ontransitioncancel,
        te: (a) => a.ontransitionend,
        v: (a) => a.onvolumechange,
        w: (a) => a.onwheel,
        wa: (a) => a.onwaiting
},
q = {
    s: (e) => document.querySelector(e),
    a: (e) => document.querySelectorAll(e)
},
w = (a) => document.write(a),
x = {
    a: document.anchors,
    cs: document.characterSet,
    cm: document.compatMode,
    ct: document.contentType,
    d: {
        d: document.domain,
        t: document.doctype,
        e: document.documentElement,
        u: document.documentURI
    },
    ff: document.fonts,
    he: {
        b: document.body,
        e: document.embeds,
        f: document.forms,
        h: document.head,
        i: document.images,
        l: document.links,
        s: document.scripts,
    },
    hi: document.hidden,
    im: document.implementation,
    ls: document.lastStyleSheetSet,
    p: document.plugins,
    ps: document.preferredStyleSheetSet,
    se: document.scrollingElement,
    sss: document.selectedStyleSheetSet,
    ss:document.styleSheetSets,
    t: document.timeline,
    v: document.visibilityState
}
}