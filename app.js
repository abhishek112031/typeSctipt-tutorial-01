var num1elem = document.getElementById('num1');
var num2elem = document.getElementById('num2');
var buttonElem = document.querySelector('button');
var numResults = [];
var stringResults = [];
function addo(num1, num2) {
    if (typeof (num1) === 'number' && typeof (num2) === 'number') {
        return num1 + num2;
    }
    else if (typeof (num1) === 'string' && typeof (num2) === 'string') {
        return num1 + ' ' + num2;
    }
    return +num1 + +num2; //+sign indicates int type
}
//object type:-->
function printResult(resultObj) {
    console.log("obj--->", resultObj.val, resultObj.timeStamp);
}
buttonElem.addEventListener('click', function () {
    var num1 = num1elem.value; //.value alaways return string
    var num2 = num2elem.value;
    var res = addo(+num1, +num2); //putting arg as number:to conver from string value to int val we need to put '+' sign.
    var strRes = addo(num1, num2); //putting arg as string
    // console.log(res);
    // console.log(strRes);
    stringResults.push(strRes);
    numResults.push(res);
    console.log(numResults, stringResults);
    printResult({ val: res, timeStamp: new Date() });
});
