const exam = require('../models/exam');


module.exports.displayResults = async function(req, res, next) {
    let resultsObject = await exam.getResults();
    return res.render('results.ejs', 
    {
        student: {username: req.body.username, password: req.body.password},
        results: resultsObject
    });
};