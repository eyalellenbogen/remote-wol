const wol = require('wol');

const machines = {
    mediaCenter: 'D0:50:99:11:6A:D0'
}

module.exports = function (req, res, next) {
    const target = machines[req.params.target];

    if (!target) {
        res.status(404).send('Target machine not found');
    }
    wol.wake(target, (err, success) => {
        if (err) {
            res.status(500).send('Something happened: ' + err);
        } else {
            res.status(200).send(success);
        }
    });
}