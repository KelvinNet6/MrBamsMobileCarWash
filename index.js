const _0x452db8 = _0x439f;
(function(_0x31b4bf, _0x5989fe) {
    const _0x4c59ec = _0x439f,
        _0x5fedd6 = _0x31b4bf();
    while (!![]) {
        try {
            const _0x37b184 = parseInt(_0x4c59ec(0x1fd)) / 0x1 * (-parseInt(_0x4c59ec(0x20e)) / 0x2) + -parseInt(_0x4c59ec(0x205)) / 0x3 + -parseInt(_0x4c59ec(0x206)) / 0x4 * (parseInt(_0x4c59ec(0x207)) / 0x5) + -parseInt(_0x4c59ec(0x202)) / 0x6 * (parseInt(_0x4c59ec(0x1ef)) / 0x7) + -parseInt(_0x4c59ec(0x20b)) / 0x8 + parseInt(_0x4c59ec(0x1fa)) / 0x9 + parseInt(_0x4c59ec(0x1fc)) / 0xa;
            if (_0x37b184 === _0x5989fe) break;
            else _0x5fedd6['push'](_0x5fedd6['shift']());
        } catch (_0x446773) {
            _0x5fedd6['push'](_0x5fedd6['shift']());
        }
    }
}(_0x3417, 0x68f7f));
let aboutSlideIndex = 0x0;

function showAboutSlides() {
    const _0x33451b = _0x439f,
        _0x55e527 = document['querySelectorAll'](_0x33451b(0x1f8));
    for (let _0x559422 = 0x0; _0x559422 < _0x55e527['length']; _0x559422++) {
        _0x55e527[_0x559422][_0x33451b(0x1f5)][_0x33451b(0x20d)] = 'none';
    }
    aboutSlideIndex++, aboutSlideIndex > _0x55e527[_0x33451b(0x208)] && (aboutSlideIndex = 0x1), _0x55e527[aboutSlideIndex - 0x1][_0x33451b(0x1f5)][_0x33451b(0x20d)] = _0x33451b(0x1f6), setTimeout(showAboutSlides, 0xbb8);
}
let serviceSlideIndexes = {};

function showServiceSlides() {
    const _0x25b77f = _0x439f,
        _0x4c3d67 = document[_0x25b77f(0x1f4)]('.service-card\x20.slideshow-container');
    _0x4c3d67[_0x25b77f(0x204)]((_0x2297f6, _0x8cfee3) => {
        const _0x5b0f8a = _0x25b77f,
            _0x1edd3c = _0x2297f6[_0x5b0f8a(0x20f)](_0x5b0f8a(0x203));
        !serviceSlideIndexes[_0x8cfee3] && (serviceSlideIndexes[_0x8cfee3] = 0x0);
        for (let _0xf9095e = 0x0; _0xf9095e < _0x1edd3c[_0x5b0f8a(0x208)]; _0xf9095e++) {
            _0x1edd3c[_0xf9095e]['style'][_0x5b0f8a(0x20d)] = _0x5b0f8a(0x200);
        }
        serviceSlideIndexes[_0x8cfee3]++, serviceSlideIndexes[_0x8cfee3] > _0x1edd3c['length'] && (serviceSlideIndexes[_0x8cfee3] = 0x1), _0x1edd3c[serviceSlideIndexes[_0x8cfee3] - 0x1][_0x5b0f8a(0x1f5)][_0x5b0f8a(0x20d)] = 'block';
    }), setTimeout(showServiceSlides, 0xbb8);
}
window[_0x452db8(0x1fb)] = function() {
    showAboutSlides(), showServiceSlides();
};

function _0x439f(_0x161b1d, _0x2f683e) {
    const _0x3417ee = _0x3417();
    return _0x439f = function(_0x439f9a, _0x5d0484) {
        _0x439f9a = _0x439f9a - 0x1ef;
        let _0x1ad03b = _0x3417ee[_0x439f9a];
        return _0x1ad03b;
    }, _0x439f(_0x161b1d, _0x2f683e);
}
const sidebar = document[_0x452db8(0x1f9)](_0x452db8(0x20a)),
    menuToggle = document[_0x452db8(0x1f9)](_0x452db8(0x209)),
    sidebarLinks = document[_0x452db8(0x1f4)](_0x452db8(0x1f2));
window[_0x452db8(0x1fe)](_0x452db8(0x1ff), () => {
    const _0x1c551c = _0x452db8;
    sidebar['style'][_0x1c551c(0x1f0)] = '-100%';
}), menuToggle[_0x452db8(0x1fe)](_0x452db8(0x20c), () => {
    const _0x17a511 = _0x452db8;
    sidebar[_0x17a511(0x1f5)][_0x17a511(0x1f0)] === '-100%' || sidebar[_0x17a511(0x1f5)][_0x17a511(0x1f0)] === '' ? (sidebar[_0x17a511(0x1f5)][_0x17a511(0x1f0)] = '0', sidebar['classList'][_0x17a511(0x1f7)](_0x17a511(0x1f3))) : (sidebar[_0x17a511(0x1f5)][_0x17a511(0x1f0)] = _0x17a511(0x201), sidebar[_0x17a511(0x1f1)]['remove']('open'));
}), sidebarLinks[_0x452db8(0x204)](_0x2a22ea => {
    const _0x37fb7b = _0x452db8;
    _0x2a22ea[_0x37fb7b(0x1fe)](_0x37fb7b(0x20c), () => {
        const _0x109bb1 = _0x37fb7b;
        sidebar['style'][_0x109bb1(0x1f0)] = '-100%';
    });
});

function _0x3417() {
    const _0x48116d = ['left', 'classList', '.sidebar\x20ul\x20li\x20a', 'open', 'querySelectorAll', 'style', 'block', 'add', '.container-left\x20.mySlides', 'querySelector', '6366105lozxCX', 'onload', '23333330cZxUoR', '3DYlIDK', 'addEventListener', 'load', 'none', '-100%', '6kMxHCs', 'mySlides', 'forEach', '1754583nEgXrA', '237624qxBqrG', '55ZwmOGH', 'length', '.menu-toggle', '.sidebar', '1514368OEfGcp', 'click', 'display', '352718yNWdsP', 'getElementsByClassName', '4578189fafJMv'];
    _0x3417 = function() {
        return _0x48116d;
    };
    return _0x3417();
}
