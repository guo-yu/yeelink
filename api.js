var api = require('beer');

var API = function(type, params) {
    if (params) this.parent = params;
    this.type = type;
}

var routerMap = function(type, params) {
    var map = {
        device: {
            add: 'devices',
            list: 'devices',
            update: 'device/' + params.device_id,
            read: 'device/' + params.device_id,
            remove: 'device/' + params.device_id
        },
        sensor: {
            add: 'device' + device_id + '/sensors',
            list: 'device' + device_id + '/sensors',
            update: 'device/' + params.device_id + '/sensor/' + params.sensor_id,
            read: 'device/' + params.device_id + '/sensor/' + params.sensor_id,
            remove: 'device/' + params.device_id + '/sensor/' + params.sensor_id
        },
        datapoint: {
            add: 'device' + device_id + '/sensors/datapoints',
            update: 'device/' + params.device_id + '/sensor/' + params.sensor_id + '/datapoint/' + params.sign,
            read: 'device/' + params.device_id + '/sensor/' + params.sensor_id + '/datapoint/' + params.sign,
            remove: 'device/' + params.device_id + '/sensor/' + params.sensor_id + '/datapoint/' + params.sign
        }
    }
    return map[type][params.action];
}

API.prototype.key = function(cb) {
    var info = this.parent,
        self = this;
    if (info.account) {
        api(info.server + 'user/apikey', {
            username: info.account.username,
            pass: info.account.pass
        }, function(err, result) {
            console.log(result.body);
            if (!err && result.body.errcode == '0') self.key = result.body.apikey;
            cb(err, result.body);
        });
    } else {
        cb('account required')
    }
}

API.prototype.add = function(device_id, cb) {
    var info = this.parent,
        self = this;
    api.post(info.server + routerMap(self.type, {
        action: 'add'
    }), {
        headers: {
            'U-ApiKey': self.key
        }
    }, function(err, result) {
        cb(err, result.body);
    });
}

API.prototype.list = function(device_id, cb) {
    var info = this.parent,
        self = this;
    api.get(info.server + routerMap(self.type, {
        action: 'list'
    }), {
        device_id: device_id,
        headers: {
            'U-ApiKey': self.key
        }
    }, function(err, result) {
        cb(err, result.body);
    });
}

API.prototype.update = function() {
    var info = this.parent,
        self = this;
    api.put(info.server + routerMap(self.type, {
        action: 'update'
    }), {
        headers: {
            'U-ApiKey': self.key
        }
    }, function(err, result) {
        cb(err, result.body);
    });
}

API.prototype.read = function() {
    var info = this.parent,
        self = this;
    api.get(info.server + routerMap(self.type,{
        action: 'read'
    }), {
        headers: {
            'U-ApiKey': self.key
        }
    }, function(err, result) {
        cb(err, result.body);
    });
}

API.prototype.remove = function() {
    var info = this.parent,
        self = this;
    api.delete(info.server + routerMap(self.type,{
        action: 'remove'
    }), {
        headers: {
            'U-ApiKey': self.key
        }
    }, function(err, result) {
        cb(err, result.body);
    });
}

module.exports = API;