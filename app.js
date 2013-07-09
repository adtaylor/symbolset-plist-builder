//
// SET DATA HERE
//

// var data = require('./ss-symbolicons.js').data;
var data = require('./ss-standard.js').data;

//
// Define the plist templates
//

var plist_top = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n";
    plist_top+= "<!DOCTYPE plist PUBLIC \"-//Apple Computer//DTD PLIST 1.0//EN\" \"http://www.apple.com/DTDs/PropertyList-1.0.dtd\">\n";
    plist_top+= "<plist version=\"1.0\">\n";
    plist_top+= "  <dict>\n";

var plist_section = function(key, val) {
  var data = "    <key>" + key + "</key>\n";
      data+= "    <string>" + val + "</string>\n";
  return data;
};

var plist_bottom = "  </dict>\n";
    plist_bottom+= "</plist>\n";


//
// Data parser
//

var parse = function(data) {
  var code, name, names, _i, _len, _ref,
      plist = plist_top;

  for (names in data) {
    code = data[names];
    _ref = names.split(' ');
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      name = _ref[_i];
      plist += plist_section(name, code);
    }
  }

  plist+= plist_bottom;

  return plist;
};


//
//
//

var writePlist = function() {
  var fs = require('fs'),
      file_contents = parse(data),
      file_path = "font.plist";

  fs.writeFile(file_path, file_contents, function(err) {
    if(err) {
      console.log(err);
    } else {
      console.log("The file was saved to " + file_path  + "!");
    }
  }); 

}();
