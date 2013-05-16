# A scrappy script to generate plists from Symbolset JS files

1. Move the JS file of the font you want to map into the app directory.
2. Change the variable `ss_set` to `exports.data` and get rid of everything else in the file.
3. Adjust the file name in the `require` at the top of `app.js`.
4. run `node app.js`
