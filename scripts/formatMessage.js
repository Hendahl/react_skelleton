/*
 *  Hendahl IT
 */

var shell = require("shelljs");
var fs = require("fs");

var DATA_JSON = "languages/locales/data.json";
var FORMAT_TMP = "languages/locales/formatMessage.temp";
var FORMAT_JSON = "languages/locales/formatMessage.json";
var MERGED_JSON = "languages/locales/merged.json";

shell.touch(FORMAT_TMP);
shell
  .find("src/components/")
  .filter(function(file) {
    return file.match(/\.jsx$/);
  })
  .forEach(function(file) {
    shell.grep("formatMessage.*id.*defaultMessage", file).toEnd(FORMAT_TMP);
  });

shell.echo('{"en": {').to(FORMAT_JSON);

var lineReader = require("readline").createInterface({
  input: fs.createReadStream(FORMAT_TMP)
});
lineReader
  .on("line", function(line) {
    if (line.length !== 0) {
      var re = /id:.*'(.*)'.*defaultMessage:.*'(.*)'[ ]?}/g;
      var match = re.exec(line);
      shell
        .echo('"' + match[1] + '" : "' + match[2] + '",\n')
        .toEnd(FORMAT_JSON);
    }
  })
  .on("close", function(err) {
    console.log("Stream has been destroyed and file has been closed");
    shell.echo('"eof":"eof"}}').toEnd(FORMAT_JSON);
    var obj1 = JSON.parse(fs.readFileSync(FORMAT_JSON, "utf8"));
    var obj2 = JSON.parse(fs.readFileSync(DATA_JSON, "utf8"));
    var unordered = Object.assign({}, obj2.en, obj1.en);

    const ordered = {};
    Object.keys(unordered)
      .sort()
      .forEach(function(key) {
        ordered[key] = unordered[key];
      });

    var obj = { en: ordered };
    fs.writeFile(MERGED_JSON, JSON.stringify(obj, null, 2), "utf-8");
    shell.rm(FORMAT_TMP);
  });
