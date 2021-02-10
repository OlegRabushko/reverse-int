module.exports = function reverse(n) {
    let a = [];
    a.push(n);
    let b = String(a)
        .split("")
        .reverse()
        .join("")
        .replace(/[^0-9]/g, "");
    return Number(b);
};
