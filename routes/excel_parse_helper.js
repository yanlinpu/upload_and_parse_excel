'use strict';
var _ = require("lodash");
var XLSX = require("xlsx");
var async = require("async");
var that = {};

that.parseExcel = function (excelPath, callback) {
    async.waterfall([function (cb) {
        checkExcel(excelPath, cb);
    }, function (wb, cb) {
        fomatSheetList(wb, cb);
    }], function (err, results) {
        if (err) {
            callback(err);
            return;
        }
        // TODO: deal with results
        console.log(results);
        callback(null, {success: true});
    });
};

function formatExcelList(ws, callback) {
    var objArr = XLSX.utils.sheet_to_row_object_array(ws);
    callback(null, objArr);
};

// No1 No2 多个sheets
function fomatSheetList(wb, callback) {
    var sheets = wb.Sheets;
    async.waterfall([
        function (cb) {
            var sheet = sheets["No1"];
            formatExcelList(sheet, function (err, list) {
                cb(err, list);
            });
        }
    ], function (err, results) {
        callback(err, results);
    });

};

function checkExcel(excelPath, callback) {
    var wb = XLSX.readFile(excelPath);
    var names = wb.SheetNames;
    var err = checkSheets(names);
    if (err !== true) {
        callback(err);
        return;
    }
    callback(null, wb);
};

function checkSheets(names) {
    var requiredNames = ["No1"];
    return checkTitleExists(requiredNames, names);
};

function checkTitleExists(required, actual) {
    var err = true;
    _.each(required, function (name) {
        if (!_.includes(actual, name)) {
            err = "未找到" + name + "信息";
            return false;
        }
    });
    return err;
};

module.exports = that;