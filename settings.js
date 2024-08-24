const fs = require("fs");

global.creator = "Galih";
global.apikey = ["Elistz", "Mwuhehe", "galih"];

let file = require.resolve(__filename);
fs.watchFile(file, () => {
	fs.unwatchFile(file);
	console.log(`Update'${__filename}'`);
	delete require.cache[file];
	require(file);
});
