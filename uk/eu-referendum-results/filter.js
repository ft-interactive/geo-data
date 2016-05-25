var fs = require('fs');
var d3 = require('d3');

var data = d3.csv.parse(fs.readFileSync('gss-code-reference.csv','utf-8'))

var lookup = {};
data.forEach(function(d){
	lookup[d.id] = d;
});

var filtered = []
for(var key in lookup){
	filtered.push(lookup[key]);
}


console.log(d3.csv.format(filtered));