var promisesAplusTests = require("promises-aplus-tests");

var Promistix = require("./Promistix-min.js");

promisesAplusTests({
    deferred: Promistix.pending
}, {
    reporter: "spec"
});
