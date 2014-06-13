//                     ___       __  
//    __  _____  ___  / (_)___  / /__
//   / / / / _ \/ _ \/ / / __ \/ //_/
//  / /_/ /  __/  __/ / / / / / ,<   
//  \__, /\___/\___/_/_/_/ /_/_/|_|  
// /____/                            
//
// @brief: yeeklink api wrapper for node apps
// @author: [turingou](http://guoyu.me)

var API = require('./api');

module.exports = Yeeklink;

function Yeeklink(params) {
  this.key = params.key;
  this.account = params.account;
  this.server = 'http://www.yeelink.net/v1.0/';
  Yeeklink.prototype.device = new API('device', this);
  Yeeklink.prototype.sensor = new API('sensor', this);
  Yeeklink.prototype.datapoint = new API('datapoint', this);
  Yeeklink.prototype.key = new API('key', this);
}