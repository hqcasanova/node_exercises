var i = 2,
    sum = 0,
    num_args = process.argv.length;

for (i; i < num_args; i += 1) {
  sum += Number(process.argv[i]);
}
console.log(sum);