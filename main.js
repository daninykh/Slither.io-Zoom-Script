var initScale = 1100;
function zoomOut(scale){
    ww = Math.ceil(window.innerWidth);
    hh = Math.ceil(window.innerHeight);
    e = Math.sqrt(ww * ww + hh * hh);
    b = Math.ceil(scale * ww / e);
    var c = Math.ceil(scale * hh / e);
    1100 < b && (c = Math.ceil(scale * c / b),
    b = scale);
    1100 < c && (b = Math.ceil(scale * b / c),
    c = scale);
    lgbsc = 560 > hh ? Math.max(50, hh) / 560 : 1;
    e = Math.round(lgbsc * lgcsc * 1E5) / 1E5;
    1 == e ? (trf(login, ""),
    login.style.top = "0px") : (login.style.top = -(Math.round(hh * (1 - lgbsc) * 1E5) / 1E5) + "px",
    trf(login, "scale(" + e + "," + e + ")"));
    mww = b,
    mhh = c,
    mc.width = mww,
    mc.height = mhh,
    mwwp50 = mww + 50,
    mhhp50 = mhh + 50,
    mwwp150 = mww + 150,
    mhhp150 = mhh + 150,
    mww2 = mww / 2,
    mhh2 = mhh / 2,
    rdgbg();
    csc = Math.min(ww / mww, hh / mhh);
    trf(mc, "scale(" + csc + "," + csc + ")");
    mc.style.left = Math.floor(ww / 2 - mww / 2) + "px";
    mc.style.top = Math.floor(hh / 2 - mhh / 2) + "px";
    redraw();
}
zoomOut(initScale);
document.addEventListener("mousewheel", MouseWheelHandler, false);
function MouseWheelHandler(e){
    var e = window.event || e;
    console.log("event" + e);
    var delta = Math.max(-50, Math.min(50, (e.wheelDelta || -e.detail)));
    zoomOut(initScale += delta);
    return false;
}