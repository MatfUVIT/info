const exam = require('../models/exam');


module.exports.displayResults = async function(req, res, next) {
    let resultsObject = await exam.getResults();
    console.log(req.body);
    return res.render('results.ejs', 
    {
        student: {username: req.body.username, password: req.body.password},
        results: resultsObject
    });
};