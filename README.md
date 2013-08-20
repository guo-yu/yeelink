![logo](http://ww1.sinaimg.cn/large/61ff0de3gw1e7sjihq4szj203i00za9x.jpg) ![](https://badge.fury.io/js/yeelink.png)
---

### How to install

````
$ npm install yeelink
````

### Sample code

````
var Yeelink = require('yeelink');

var myDevice = new Yeelink({
    // provide acount to fetch access_key
    account: {
        username: 'xxx',
        pass: 'xxx'
    },
    // or provide a key
    key: '121212121212sqwsqs1s12w12w12'
});

// fetch key
myDevice.device.key(function(err,result){
    console.log(err)
    console.log(result)
})

// add device 
// works as same as sensor or datapoint
myDevice.device.add(function(err,result){
    console.log(err)
    console.log(result)
})

// list devices
// works as same as sensor or datapoint
myDevice.device.list('device_id',function(err,result){
    console.log(err)
    console.log(result)
})

// remove devices
// works as same as sensor or datapoint
myDevice.device.remove('device_id',function(err,result){
    console.log(err)
    console.log(result)
})

````

### Pull Request Welcome !

- fork this repo
- feel free to add your feature
- make sure your feature are fully tested!
- send me a PR, and enjoy !