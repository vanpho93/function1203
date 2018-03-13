function getLog() {
    return console.log;
}

// getLog()(123);
function doSth(fn) {
    fn(1);
}
// closure
doSth(console.log);
