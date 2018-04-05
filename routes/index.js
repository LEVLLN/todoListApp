const express = require('express');
const router = express.Router();

/* GET index page. */
module.exports = router.get('/', (req, res) => {
    res.send("message");
});