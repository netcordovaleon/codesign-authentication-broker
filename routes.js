const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.post('/login', (req, res) => {
    var result = controller.userIsAuthorized(req.body.user, req.body.password);
    res.json(result);
});

module.exports = router;