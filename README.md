## express --hbs upload_and_parse_excel

------

npm install debug --save

## 加载jquery.fileupload.js

https://github.com/blueimp/jQuery-File-Upload/blob/master/js/jquery.fileupload.js

git clone git@github.com:blueimp/jQuery-File-Upload.git ../jQuery-File-Upload

- cp ../jQuery-File-Upload/js/jquery.fileupload.js ./public/javascripts/
- cp ../jQuery-File-Upload/js/jquery.iframe-transport.js ./public/javascripts/
- cp ../jQuery-File-Upload/js/vendor/jquery.ui.widget.js ./public/javascripts/

- curl -o ./public/javascripts/jquery-3.2.1.min.js https://code.jquery.com/jquery-3.2.1.min.js

## node 文件上传功能
npm install formidable --save

## 解析excel
npm install xlsx --save

## 存储路径 tmp/

`mkdir tmp`

## 访问
http://localhost:3000/excel/upload