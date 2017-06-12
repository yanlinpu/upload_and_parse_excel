'use strict';
var formidable = require("formidable");
var _ = require("lodash");
var async = require("async");
var that = {};

/**
 * 解析上传的文件
 * @param req
 * @param res
 * @param next
 */
that.parseFun = function (req, res, next) {
    var app = req.app;
    var form = new formidable.IncomingForm();
    form.uploadDir = 'tmp/';
    form.maxFieldsSize = 5 * 1024 * 1024;
    form.keepExtensions = true;
    form.parse(req, function (err, fields, files) {
        req.files = _.values(files);
        next();
    });

};

module.exports = that;
