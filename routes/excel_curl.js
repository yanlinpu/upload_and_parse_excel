var express = require('express');
var file_helper = require('./file_helper');
var excelParse = require("./excel_parse_helper");
var router = express.Router();

/* GET home page. */
router.get('/upload', function(req, res, next) {
  res.render('excel/upload', { title: 'Upload Excel' });
});

router.post('/upload', file_helper.parseFun);

router.post('/upload', function(req, res, next) {
    var file = req.files[0];
    if (! file) {
        res.send({error: true, reason: "解析文件出错"}).end();
        return;
    }
    var filePath = file.path;
    excelParse.parseExcel(filePath, function(err, result){
        if(err){
            res.send({error: true, reason: err}).end();
            return
        }
        res.send({ok: true}).end();
    });
});

module.exports = router;
