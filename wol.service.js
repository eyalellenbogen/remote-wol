const wol = require('wol');

const machines = {
    mediaCenter: '00:0E:C6:C0:A6:A8'
}

module.exports = function (req, res, next) {
    console.log('request was made for machine ' + req.params.target);
    const target = machines[req.params.target];

    if (!target) {
        res.status(404).send('Target machine not found');
    }
    wol.wake(target, function (err, success) {
        if (err) {
            res.status(500).send('Something happened: ' + err);
        } else {
            res.status(200).send(success);
        }
    });
}
