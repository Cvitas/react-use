const _path = require("path");
module.exports =  {
    resolve:function (path) {
        console.log(__dirname);
        return _path.resolve(__dirname,"./../src/",path);
    }
};