//Formatting for css
Array.prototype.toString = function () {
    var s = "";
    for (var i = 0; i < this.length - 1; i++) {
        s += this[i].trim() + ";";
    }
    return s + this[this.length - 1].trim();
}

//read input.html
var fs = require('fs');
fs.readFile('input.html', 'utf8', function (err, data) {
    if (err) {
        return console.log(err);
    }
    //Get the style-tag
    var style = data.split("<style>")[1].split("</style>")[0];
    //this regex selects the css-selector, basically
    var regex = /\.(.+)(?={)/gm;
    //a is an array that holds all "parts" of the css.
    //A part is something between { or }
    var a = style.split(/{|}/);

    //styles is an array of objects
    var styles = [];
    for (var i = 0; i < a.length; i++) {
        var element = a[i].replace(/\s(?!\w)/g, "");

        if (element !== "" && element != null) {
            //If this is a new class, add it to styles
            if (element.indexOf(".") > -1) {
                styles[i] = {
                    selector: element
                };
            }
            //If this is styles, like "background:red;border-radius:10px;" and so on
            else {
                //add the individual properties as an array
                styles[i - 1]["css"] = element.split(";");
            }
        }
    }
    // console.log(JSON.stringify(styles));
    var retValue = data;
    for (var i = 0; i < styles.length; i++) {
        //loops through styles, now that the array is complete.
        if (styles[i] != null) {
            var sel = styles[i]["selector"].replace(".", "");
            var style = styles[i]["css"].toString();
            //replace all occurances of class="b" with the contents of the class "b".
            retValue = retValue.replace(new RegExp(`class=(("${sel}")|('${sel}'))`,'g'), `style="${style}"`);
        }
    }
    //Remove the style tag, as it isn't really needed anymore
    retValue = retValue.split("</style>")[1].trim();
    //write to output.html
    fs.writeFile("output.html", retValue, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Saved output to output.html");
    });
});