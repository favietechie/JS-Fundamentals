const n = parseInt(process.argv[2]);

if (isNaN(n)) {
  console.log('Missing number of occurrences');
} else if (n > 0) {
  let out = '';
  for (let i = 0; i < n; i++) {
    out += 'C is fun';
    if (i !== n - 1) out += '\n';
  }
  console.log(out);
}