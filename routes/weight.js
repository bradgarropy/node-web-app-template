const express = require("express");


// create router
const router = express.Router();


router.get("/", function(request, response) {

    response.render("weight");
    return;

});


// exports
module.exports = router;