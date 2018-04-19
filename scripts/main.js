console.log("js loaded");
console.log(data);

var output = "";

for(var i in data.bookmarks){
    output += "<div><a href='" + data.bookmarks[i].location + "'>" + data.bookmarks[i].name + "</a></div>"
}

document.getElementById("json-test").innerHTML = output;


