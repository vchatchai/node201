const qs = require('querystring')

let parse = qs.parse("for=bar&bingo=bango")
console.log("parse", parse)

let parseseperator =qs.parse("foo:bar^bingo:bango", "^", ":")
console.log("parseseperator", parseseperator)

let stringifyv = qs.stringify({foo:'bar',bingo:'bango'})
console.log('stringify',stringifyv)