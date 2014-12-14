module.exports = function (string) {
    if (console && typeof console.log === 'function') {
        console.log(string);
    }
};
