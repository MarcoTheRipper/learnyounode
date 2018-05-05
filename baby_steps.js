var args = process.argv
sum = 0


for (i = 2; i < args.length; i++) {
    sum += +args[i];
}
console.log(sum)