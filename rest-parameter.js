function buildName(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + ' ' + restOfName.join(' ');
}
var buildNameFun = buildName;
//let employeeNameList = buildName('Jone', 'Samuel', 'Lucas', 'Michel')
document.body.textContent = buildNameFun('Jone', 'Samuel', 'Lucas', 'Michel', 'lalala');
