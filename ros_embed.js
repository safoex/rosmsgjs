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

ROS.beautify();

// console.log(JSON.stringify(ROS.msg('move_base_msgs/MoveBaseActionResult')))
// console.log(ROS.actionlib_msgs.GoalStatus().ACTIVE)