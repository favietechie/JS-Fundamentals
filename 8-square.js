const size = parseInt(process.argv[2]);

if (isNaN(size)) {
  console.log('Missing size');
} else if (size > 0) {
  const line = 'X'.repeat(size);
  let out = '';
  for (let i = 0; i < size; i++) {
    out += line;
    if (i !== size - 1) out += '\n';
  }
  console.log(out);
}