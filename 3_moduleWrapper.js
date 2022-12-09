// ModuleWrapper function

// function ModuleWrapper(exports, require, module, __filename, __dirname){
    var buddy1 = {
        name : "Dharmit",
        favNum : 7,
        developer : true
    }

    console.log(buddy1);

    // Default properties available in node js
    console.log(exports);
    console.log(require);
    console.log(module);
    console.log(__filename);
    console.log(__dirname);
// }