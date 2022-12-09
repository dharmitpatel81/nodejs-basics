import path from 'path';
import url from 'url';

const __filename = url.fileURLToPath(import.meta.url);

console.log(path.basename("/foo/bar/baz/asdf/quux.html"));
console.log(path.dirname("/foo/bar/baz/asdf/quux.html"));
console.log(path.extname(__filename)); // To get extension name
