const path = require('path')
const fs = require('fs')



let currentPath =  path.normalize("../globals/events/counter.js")
console.log("currentPath", currentPath.toString())



let pathjoin = path.join('../',"global", 'events')
console.log(pathjoin)
console.log('pathjoin')


let pathdir = path.dirname('../global/events')
console.log(pathdir)