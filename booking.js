function _0x40fa(_0x44df2d, _0x55e308) {
    const _0x4ca2af = _0x4ca2();
    return _0x40fa = function(_0x40fa00, _0x235322) {
        _0x40fa00 = _0x40fa00 - 0x9b;
        let _0x55700d = _0x4ca2af[_0x40fa00];
        return _0x55700d;
    }, _0x40fa(_0x44df2d, _0x55e308);
}
const _0x825b83 = _0x40fa;
(function(_0x36c842, _0x3e99bb) {
    const _0x3130bc = _0x40fa,
        _0x15d538 = _0x36c842();
    while (!![]) {
        try {
            const _0x23c536 = parseInt(_0x3130bc(0xd4)) / 0x1 * (-parseInt(_0x3130bc(0xc9)) / 0x2) + -parseInt(_0x3130bc(0xac)) / 0x3 + parseInt(_0x3130bc(0xc7)) / 0x4 + parseInt(_0x3130bc(0xa0)) / 0x5 * (-parseInt(_0x3130bc(0xcd)) / 0x6) + parseInt(_0x3130bc(0xb2)) / 0x7 + -parseInt(_0x3130bc(0xd3)) / 0x8 * (parseInt(_0x3130bc(0xaf)) / 0x9) + parseInt(_0x3130bc(0xb1)) / 0xa * (parseInt(_0x3130bc(0xbc)) / 0xb);
            if (_0x23c536 === _0x3e99bb) break;
            else _0x15d538['push'](_0x15d538['shift']());
        } catch (_0x28804a) {
            _0x15d538['push'](_0x15d538['shift']());
        }
    }
}(_0x4ca2, 0x5a533));

function _0x4ca2() {
    const _0xaf4133 = ['19265LKprDt', '?text=', 'Scheduled\x20Date', 'time', 'none', 'roundedRect', 'jspdf', 'Service\x20Type', 'setFontSize', 'date', 'helvetica', 'getElementById', '1619475apucZz', '_blank', 'Booking\x20Invoice\x20Generated!\x20Submit\x20your\x20Booking\x20To\x20our\x20Business\x20WhatsApp!', '2271609FHZdBc', 'preventDefault', '150RrHslA', '975506XoVEDh', 'invoice.pdf', 'name', 'forEach', 'display', 'Account\x20Holder:\x20Ashley\x20Bam.', 'random', 'floor', 'flex', 'https://wa.me/', '1141338wipYlN', 'value', 'center', 'setFont', 'JPEG', '\x0a--\x0aLocation:\x20', 'INV-', 'Scheduled\x20Time', 'popup-form', 'exterior', 'Total\x20(ZAR)', '1052888uFGQpw', 'bold', '2542FZiAqW', '\x0a--\x0aDate:\x20', 'text', 'Description', '738tyDOxZ', 'NedBank\x20tjeck\x20account\x20number:\x201106056434', 'open', 'Mr.Bam\x27s\x20Mobile\x20Car\x20Wash.', 'save', 'Location', '8PDWwyc', '254tIuGsO', 'rect', '+27751101765', 'Client\x20Name', '\x0a--\x0aService:\x20', 'setFillColor', 'Amount\x20(ZAR)'];
    _0x4ca2 = function() {
        return _0xaf4133;
    };
    return _0x4ca2();
}

function openPopup() {
    const _0x3ad65d = _0x40fa;
    document['getElementById'](_0x3ad65d(0xc4))['style'][_0x3ad65d(0xb6)] = _0x3ad65d(0xba);
}

function closePopup() {
    const _0x3f4c84 = _0x40fa;
    document[_0x3f4c84(0xab)](_0x3f4c84(0xc4))['style']['display'] = _0x3f4c84(0xa4);
}
document[_0x825b83(0xab)]('appointment-form')['addEventListener']('submit', function(_0x10f5c2) {
    const _0x383176 = _0x825b83;
    _0x10f5c2[_0x383176(0xb0)]();
    const _0x5d2ad5 = document[_0x383176(0xab)](_0x383176(0xb4))['value'],
        _0x1003f0 = document['getElementById']('email')[_0x383176(0xbd)],
        _0x339553 = document[_0x383176(0xab)]('service')['value'],
        _0x49ab68 = document[_0x383176(0xab)]('location')[_0x383176(0xbd)],
        _0x2562fa = document[_0x383176(0xab)](_0x383176(0xa9))[_0x383176(0xbd)],
        _0x24e7a8 = document[_0x383176(0xab)](_0x383176(0xa3))[_0x383176(0xbd)],
        _0x570c2f = document['getElementById']('message')['value'],
        _0xf31050 = generateInvoice(_0x5d2ad5, _0x339553, _0x49ab68, _0x2562fa, _0x24e7a8);
    sendBookingToWhatsApp(_0x5d2ad5, _0x339553, _0x49ab68, _0x2562fa, _0x24e7a8, _0xf31050), closePopup();
});

function generateInvoice(_0x1587b4, _0x481769, _0x42cbbe, _0x49dd12, _0x5903a2) {
    const _0x524014 = _0x825b83,
        {
            jsPDF: _0x5784b0
        } = window[_0x524014(0xa6)],
        _0x5a6791 = new _0x5784b0(),
        _0x5d7b67 = _0x524014(0xc2) + Math[_0x524014(0xb9)](Math[_0x524014(0xb8)]() * 0xf4240),
        _0x3b6b8c = 'me.jpg',
        _0x2a1ba7 = 0x14,
        _0x1a7b03 = 0x22,
        _0x498516 = 0x1e,
        _0x1f153f = 0x1e,
        _0x3a29cf = 0x1e;
    _0x5a6791[_0x524014(0x9e)](0xff, 0xff, 0xff), _0x5a6791[_0x524014(0xa5)](_0x2a1ba7, _0x1a7b03, _0x498516, _0x1f153f, _0x3a29cf, _0x3a29cf, 'F'), _0x5a6791['addImage'](_0x3b6b8c, _0x524014(0xc0), _0x2a1ba7, _0x1a7b03, _0x498516, _0x1f153f), _0x5a6791[_0x524014(0xa8)](0x12), _0x5a6791['text']('Invoice\x20-\x20Mr.Bams\x20Mobile\x20Car\x20Wash', 0x69, 0x32, null, null, _0x524014(0xbe)), _0x5a6791['setFontSize'](0xc), _0x5a6791['text']('Invoice\x20No:\x20' + _0x5d7b67, 0x69, 0x3c), _0x5a6791[_0x524014(0xa8)](0xc);
    const _0x3c47bc = 0x46,
        _0x1196f8 = [0x3c, 0x50],
        _0x5d9ba7 = [_0x524014(0x9c), _0x524014(0xa7)];
    _0x5a6791[_0x524014(0x9e)](0xf0, 0xf0, 0xf0), _0x5a6791[_0x524014(0xd5)](0x14, _0x3c47bc, _0x1196f8[0x0] + _0x1196f8[0x1], 0xa, 'F'), _0x5a6791[_0x524014(0xcb)](_0x5d9ba7[0x0], 0x14, _0x3c47bc + 0x7), _0x5a6791['text'](_0x5d9ba7[0x1], 0x64, _0x3c47bc + 0x7);
    let _0x4cfd57 = _0x3c47bc + 0xf;
    const _0x5c172f = [
        [_0x1587b4, _0x481769]
    ];
    _0x5c172f[_0x524014(0xb5)](_0x52ac7c => {
        const _0x40cccd = _0x524014;
        _0x5a6791['setFillColor'](0xff, 0xff, 0xff), _0x5a6791['rect'](0x14, _0x4cfd57, _0x1196f8[0x0], 0xa, 'F'), _0x5a6791[_0x40cccd(0xd5)](0x64, _0x4cfd57, _0x1196f8[0x1], 0xa, 'F'), _0x5a6791['text'](_0x52ac7c[0x0], 0x14, _0x4cfd57 + 0x7), _0x5a6791[_0x40cccd(0xcb)](_0x52ac7c[0x1], 0x64, _0x4cfd57 + 0x7), _0x4cfd57 += 0xa;
    }), _0x4cfd57 += 0xa;
    const _0x4d9cc7 = _0x4cfd57,
        _0x15302b = [0x50, 0x28, 0x28],
        _0x101ebc = [_0x524014(0xcc), _0x524014(0x9f), _0x524014(0xc6)],
        _0x130471 = _0x15302b[0x0] + _0x15302b[0x1] + _0x15302b[0x2];
    _0x5a6791['setFillColor'](0xf0, 0xf0, 0xf0), _0x5a6791[_0x524014(0xd5)](0x14, _0x4d9cc7, _0x130471, 0xa, 'F'), _0x5a6791[_0x524014(0xcb)](_0x101ebc[0x0], 0x14, _0x4d9cc7 + 0x7), _0x5a6791['text'](_0x101ebc[0x1], 0x64, _0x4d9cc7 + 0x7), _0x5a6791[_0x524014(0xcb)](_0x101ebc[0x2], 0x8c, _0x4d9cc7 + 0x7);
    let _0xa4586b = _0x4d9cc7 + 0xf;
    const _0x49e01f = [
        ['Charged\x20Fee', 'R' + getPrice(_0x481769), 'R' + getPrice(_0x481769)],
        [_0x524014(0xd2), _0x42cbbe, ''],
        [_0x524014(0xa2), _0x49dd12, ''],
        [_0x524014(0xc3), _0x5903a2, '']
    ];
    _0x49e01f['forEach'](_0x5a61dc => {
        const _0x71ffa2 = _0x524014;
        _0x5a6791[_0x71ffa2(0x9e)](0xff, 0xff, 0xff), _0x5a6791[_0x71ffa2(0xd5)](0x14, _0xa4586b, _0x15302b[0x0], 0xa, 'F'), _0x5a6791[_0x71ffa2(0xd5)](0x64, _0xa4586b, _0x15302b[0x1], 0xa, 'F'), _0x5a6791[_0x71ffa2(0xd5)](0x8c, _0xa4586b, _0x15302b[0x2], 0xa, 'F'), _0x5a6791[_0x71ffa2(0xcb)](_0x5a61dc[0x0], 0x14, _0xa4586b + 0x7), _0x5a6791['text'](_0x5a61dc[0x1], 0x64, _0xa4586b + 0x7), _0x5a6791[_0x71ffa2(0xcb)](_0x5a61dc[0x2], 0x8c, _0xa4586b + 0x7), _0xa4586b += 0xa;
    });
    const _0x51ad0b = getPrice(_0x481769);
    return _0x5a6791['setFillColor'](0xf0, 0xf0, 0xf0), _0x5a6791['rect'](0x14, _0xa4586b, _0x15302b[0x0] + _0x15302b[0x1] + _0x15302b[0x2], 0xa, 'F'), _0x5a6791[_0x524014(0xcb)]('Total', 0x14, _0xa4586b + 0x7), _0x5a6791[_0x524014(0xcb)]('R' + _0x51ad0b, 0x64, _0xa4586b + 0x7), _0x5a6791[_0x524014(0xcb)]('R' + _0x51ad0b, 0x8c, _0xa4586b + 0x7), _0x5a6791['setFontSize'](0xc), _0x5a6791[_0x524014(0xbf)](_0x524014(0xaa), _0x524014(0xc8)), _0x5a6791[_0x524014(0xcb)]('Payment\x20Details', 0x14, _0xa4586b + 0xf), _0x5a6791[_0x524014(0xcb)](_0x524014(0xce), 0x14, _0xa4586b + 0x19), _0x5a6791['text'](_0x524014(0xb7), 0x14, _0xa4586b + 0x1e), _0x5a6791[_0x524014(0xcb)]('Contact:\x20+27815130009', 0x14, _0xa4586b + 0x28), _0x5a6791[_0x524014(0xcb)](_0x524014(0xd0), 0x50, _0xa4586b + 0x32), _0x5a6791[_0x524014(0xd1)](_0x524014(0xb3)), alert(_0x524014(0xae)), _0x5d7b67;
}

function sendBookingToWhatsApp(_0x245686, _0xc41a43, _0xbd4bda, _0x44a0aa, _0x39fcd0, _0x40ba42) {
    const _0x3f64bd = _0x825b83,
        _0x499410 = 'Hello-\x0a\x0aI\x20would\x20like\x20to\x20book\x20a\x20car\x20wash\x20appointment:\x0a\x0a--\x0a\x0aName:\x20' + _0x245686 + _0x3f64bd(0x9d) + _0xc41a43 + _0x3f64bd(0xc1) + _0xbd4bda + _0x3f64bd(0xca) + _0x44a0aa + '\x0a--\x0aTime:\x20' + _0x39fcd0 + '\x0a--\x0aInvoice\x20Number:\x20' + _0x40ba42,
        _0x10619f = _0x3f64bd(0x9b),
        _0x5ca1d7 = _0x3f64bd(0xbb) + _0x10619f + _0x3f64bd(0xa1) + _0x499410;
    window[_0x3f64bd(0xcf)](_0x5ca1d7, _0x3f64bd(0xad));
}

function getPrice(_0x534f03) {
    const _0x30cda6 = _0x825b83;
    let _0x4d236c = 0x0;
    if (_0x534f03 === 'interior') _0x4d236c = 0x96;
    else {
        if (_0x534f03 === _0x30cda6(0xc5)) _0x4d236c = 0x96; 
        else {
            if (_0x534f03 === 'full') _0x4d236c = 0x15e; 
        }
    }
    return _0x4d236c;
}


