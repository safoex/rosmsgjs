var ROS = ROS || {types:{}, primitives:{}, packages: {}};

ROS.primitives = {
	string: function() {return String()},
	bool: function() {return Boolean(false)},
	time: function() {return {secs: 0, nsecs: 0}},
	duration: function() {return {secs: 0, nsecs: 0}},
	numeric: function() {return Number(0);},
	known_numeric: ["int8", "uint8", "int16", "int32", "int64", "uint16", "uint32", "uint64", "float32", "float64"]
};


ROS.msg_req = function(iter_over) {
	z = {};
	for(var k in iter_over) {
		z[k] = ROS.msg(iter_over[k])
	}
	return z;
};

ROS.msg = function (type) {
	if (ROS.primitives.known_numeric.indexOf(type) !== -1) {
		return ROS.primitives.numeric();
	}
	else if (type == "time" || type == "duration") {
		return new ROS.primitives[type]();
	}
	else if (type in ROS.primitives) {
		return ROS.primitives[type]();
	}
	else {
		if(!new.target) return new ROS.msg(type);

		if (type in ROS.types) {
			for (var k in ROS.types[type].fields) {
				if (ROS.types[type].fields.hasOwnProperty(k))
					this[k] = ROS.msg(ROS.types[type].fields[k]);
			}

		} else if (type.search('[]') !== -1) {
			return [];
		} else {
			var a = type.split('/');
			if (a.length > 1) {
				var pkg = a[0];
				var type = a[1];
				if (pkg in ROS.packages && type in ROS.packages[pkg]) {
					for (var k in ROS.packages[pkg][type].fields) {
						if (ROS.packages[pkg][type].fields.hasOwnProperty(k)) {
							this[k] = ROS.msg(ROS.packages[pkg][type].fields[k]);
						}
					}
				}
			}
		}
	}

};

ROS.find_msg = function(field, type, package) {
    var pkg_dep = [package];
    var pkg_dep_new = [];
    var pkg_visited = [package];
    while(pkg_dep.length > 0) {
        // console.log(pkg_dep, field, type, package)
        for(var pkg_i in pkg_dep) {
            var pkgs = ROS.packages[pkg_dep[pkg_i]].dependsOn;
            for(var pkg_d in pkgs) {
                var pkg = pkgs[pkg_d];
                if (pkg in ROS.packages) {
                    // console.log(ROS.packages[pkg]);
                    if (!(field in ROS.packages[pkg])) {
                        pkg_dep_new.push(pkg);
                    } else {
                        return ROS.msg(field, pkg);
                    }
                }
            }
        }
        pkg_dep = pkg_dep_new;
        pkg_dep_new = [];
    }
    return {};
};


ROS.msg = function (type, package) {
    // console.log(type, ' ', package)
    if (ROS.primitives.known_numeric.indexOf(type) !== -1) {
        return ROS.primitives.numeric();
    }
    else if (type == "time" || type == "duration") {
        return new ROS.primitives[type]();
    }
    else if (type in ROS.primitives) {
        return ROS.primitives[type]();
    }
    else {
        if(!new.target) return new ROS.msg(type, package);

        if (package && type in ROS.packages[package]) {
            // console.log("found", type, "in", package, "it has ", ROS.packages[package][type].fields)
            for(var f in ROS.packages[package][type].fields) {
                if (ROS.packages[package][type].fields.hasOwnProperty(f)) {
                    // console.log('\t', f)
                    var field = ROS.packages[package][type].fields[f];
                    var a = field.split('/');
                    if (a.length > 1) {
                        var _pkg = a[0];
                        var _type = a[1];
                        if (_pkg in ROS.packages && _type in ROS.packages[_pkg]) {
                            // console.log("!!!",f,  _type, _pkg);
                            this[f] = ROS.msg(_type, _pkg);
                        }
                    }
                    else this[f] =  ROS.msg(field, package);
                }
            }
        }
         else if (type.search('[]') !== -1) {
            return [];
        } else {
            var a = type.split('/');
            if (a.length > 1) {
                var _pkg = a[0];
                var _type = a[1];
                if (_pkg in ROS.packages && _type in ROS.packages[_pkg]) {
                    return ROS.msg(_type, _pkg);
                }
            } else {
                return ROS.find_msg(type, null, package);
            }
        }
    }

};


ROS.beautify = function() {
	for(var p in ROS.packages) {
		ROS[p] = {};
		for(var t in ROS.packages[p]) {
			ROS[p][t] = (function(p,t) {return function() {
				var msg = new ROS.msg(p + "/" + t);
				msg.__proto__ = ROS.packages[p][t].constants;
				return msg;}
			})(p,t);
		}
	}
};

// ROS.beautify();
//----------------------------------------------------------------------------------------------------------------------
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< EXECUTION <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> PARSING AND LOADING >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//----------------------------------------------------------------------------------------------------------------------



ROS.load_msg = function(msg) {
	// get name
	var name = "";
	name = msg["$file"].split(".")[0].split("/");
	pkg = name[name.length-3];
	name = name[name.length-1];
	ROS.types[name] = {fields: {}, constants: {}}
	if(!(pkg in ROS.packages)) {
		ROS.packages[pkg] = {};
	}
	ROS.packages[pkg][name] = {fields: {}, constants: {}};

	for(var k in msg) {
		if(k !== "$file" && k !== "#") {
			if(msg[k].constant.length > 0) {
				if(msg[k].type !== "string") {
					var val = msg[k].constant.trim().split(' ')[0];
					ROS.types[name].constants[k] = Number(val);
					ROS.packages[pkg][name].constants[k] = Number(val);
				}
				else {
					var val = msg[k].constant.trim();
					ROS.types[name].constants[k] = String(val);
					ROS.packages[pkg][name].constants[k] = String(val);
				}
			}
			else {
				ROS.types[name].fields[k] = msg[k].type;
				ROS.packages[pkg][name].fields[k] = msg[k].type;
			}
		}
	}
};


ROS.load_msgs = function (obj) {
	for(var i in obj) {
		ROS.load_msg(obj[i]);
	}
};

// ROS MSG JS
// parse ros message into json format

// namespace
var ROSMSG = ROSMSG || new Object();
// required libraries
var fs = require('fs');
var parser = require('fast-xml-parser');

// parse the directory, and output to output directory
ROSMSG.parse = function (dir, output) {
	// default output directory
	var files = ROSMSG.getFiles(dir);
	// console.log(dir);
	// console.log(files);
	var msg_list = new Array();
	for (var i in files) {
		// find .msg files
		if (files[i].substr(-4) == ".msg") {
			var path = files[i].split("/");
			// find file name without path or extension
			var filename = path[path.length - 1].substring(0, path[path.length - 1].length - 4);
			var msg = ROSMSG.parseMsg(files[i]);
			// write msg json to file
			if(output)
			fs.writeFile(output + "/" + filename + ".json", JSON.stringify(msg, null, 4), function(err) {
				if (err) {
					console.log(err);
				}
			});
			msg_list.push(msg);
		}
	}
	if(output)
	// write the entire msg list into file
	fs.writeFile(output + ".json", JSON.stringify(msg_list, null, 4), function(err) {
		if (err) {
			console.log(err);
		}
	});

	return msg_list;
};
// get a list of file names in a directory
ROSMSG.getFiles = function (dir) {
	var filenames = new Array();
	var files = fs.readdirSync(dir);
	for (var i in files) {
		if (! files.hasOwnProperty(i)) {
			continue;
		}
		var name = dir + '/' + files[i];
		// if directory
		if (fs.statSync(name).isDirectory()) {
			// recursive
			filenames = filenames.concat( ROSMSG.getFiles(name) );
		}
		else {
			filenames.push(name);
		}
	}
	return filenames;
};

ROSMSG.getFileTree = function (dir) {
    var file_tree = {};
    var files = fs.readdirSync(dir);
    for (var i in files) {
        if (! files.hasOwnProperty(i)) {
            continue;
        }
        var name = dir + '/' + files[i];
        // if directory
        if (fs.statSync(name).isDirectory()) {
            // recursive
            file_tree[files[i]] =  ROSMSG.getFileTree(name);
        }
        else {
            file_tree[files[i]] = name;
        }
    }
    return file_tree;
};

ROS.loadMessageAndDependency = function(pkg, msg_folder, package_xml) {
    var mes_dep = parser.parse(fs.readFileSync(package_xml, "utf8"));
    // console.log(mes_dep);
    if(!('dependsOn' in ROS.packages[pkg])) {
        ROS.packages[pkg].dependsOn = [];
    }
    for(var tag in mes_dep.package) {
        if(['build_depend', 'exec_depend', 'build_export_depend'].indexOf(tag) > -1) {
            if(typeof mes_dep.package[tag] === 'string') {
                ROS.packages[pkg].dependsOn.push( mes_dep.package[tag] );
            }
            else {
                for(var dep in mes_dep.package[tag])
                    ROS.packages[pkg].dependsOn.push(  mes_dep.package[tag][dep] );
            }
        }
    }
}

ROS.loadMessageDependencies = function(dir) {
    var file_tree = ROSMSG.getFileTree(dir);
    ROS.DEP = {};
    var bfs = Object.keys(file_tree);
    var new_bfs = [];
    while(bfs.length > 0) {
        for (var pkg_i in bfs) {
            var pkg = bfs[pkg_i];
            var msg_folder = "";
            var package_xml = "";
            // console.log(pkg);
            var pkg_d = file_tree[pkg];
            for (var p in pkg_d) {
                // console.log('\t' + pkg_d[p]);
                if (p === 'package.xml')
                    package_xml = pkg_d[p];
                else if (p === 'msg') {
                    msg_folder = pkg_d[p];
                } else if (typeof pkg_d[p] === 'object') {
                    new_bfs.push(pkg_d[p]);
                }
            }
            if(msg_folder !== "" && package_xml !== "") {
                ROS.DEP[pkg] = ROS.loadMessageAndDependency(pkg, msg_folder, package_xml);
            }
        }
        bfs = new_bfs;
        new_bfs = [];
    }
    return ROS.DEP;
}


// parse a msg type to json
ROSMSG.parseMsg = function (file) {
	var data = fs.readFileSync(file, "utf8");
	var lines = data.split("\n");
	// record file name in json
	var msg = {
		"$file": file,
	};
	for (var i in lines) {
		if (0 == lines[i].length) {
			continue;
		}
		// comment lines, save to json # key
		lines[i] = lines[i].trim();
		if ("#" == lines[i][0]) {
			ROSMSG.addToJson(msg, "#", lines[i].substr(1));
		}
		else {
			var words = lines[i].split(/\s+/);
			var type;
			// find the msg type
			for (var j in words) {
				if ("" != words[j]) {
					type = words[j];
					break;
				}
			}
			// invalid type
			if (undefined === type || "" == type || " " == type) {
				continue;
			}
			lines[i] = lines[i].substring(type.length);
			// find constant by =
			var c = lines[i].indexOf("=");
			var constant;
			if (-1 == c) {
				constant = "";
			}
			else {
				constant = lines[i].substring(c + 1);
				lines[i] = lines[i].substring(0, c);
			}
			// find inline comment by #
			c = lines[i].indexOf("#");
			var comment;
			if (-1 == c) {
				comment = "";
			}
			else {
				comment = lines[i].substring(c + 1);
				lines[i] = lines[i].substring(0, c);
			}
			// find the msg name
			var name = lines[i].trim();
			msg[name] = {
				type: type,
				comment: comment,
				constant: constant
			};
		}
	}
	return msg;
};
// add an item to json considering key duplication
ROSMSG.addToJson = function (json, key, value) {
	if (key in json) {
		// if array exists
		if (typeof json[key] == "array" || typeof json[key] == "object") {
			json[key].push(value);
		}
		else {
			var old = json[key];
			// create an array for duplicate items, but actually it is an object
			json[key] = new Array();
			json[key].push(old);
			json[key].push(value);
		}
	}
	else {
		// no duplicate
		json[key] = value;
	}
	return json;
}

ROSMSG.parse("common_msgs", "common_msgs_json");
ROS.load_msgs(ROSMSG.parse("/opt/ros/melodic/share"));
ROS.loadMessageDependencies("/opt/ros/melodic/share");


fs.writeFile("test_ros_msgs"  + ".json", JSON.stringify(ROS, null, 4), function(err) {
	if (err) {
		console.log(err);
	}
});

fs.writeFile("ros_embed_description"  + ".js", "var ROS = " + JSON.stringify(ROS, null, 4), function(err) {
	if (err) {
		console.log(err);
	}
});

ROS.beautify()

// console.log(ROS.packages.move_base_msgs)
console.log(JSON.stringify(ROS.rosgraph_msgs.Clock()))
// console.log(ROSMSG.getFileTree("/opt/ros/melodic/share"));
