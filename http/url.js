const url = require('url')

let result  = url.parse("//www.example.org")
console.log(result)



 result  = url.parse("//www.example.org",null,true)

console.log(result)


let path = url.format({
    protocol: 'http',
    host:'www.example.org'
});
console.log("url.format", path)

let resolve = url.resolve("http://example.org/a/b", "c/d")
console.log("resolve",resolve)