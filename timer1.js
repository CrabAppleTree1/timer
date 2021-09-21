//input node timer1.js 10 3 5 15 9 
const args = process.argv.slice(2)

for (let i = 0; i < args.length; i ++){
  setTimeout(function () {  process.stdout.write('\x07'); }, Number(args[i]) * 1000)
  
}
console.log(args)