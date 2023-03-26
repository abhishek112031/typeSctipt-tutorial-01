const num1elem=document.getElementById('num1') as HTMLInputElement;
const num2elem=document.getElementById('num2') as HTMLInputElement;
const buttonElem=document.querySelector('button')!;
const numResults:number[]=[];
const stringResults:string[]=[];

//type aliases:-->union type into a single aliases:
type strOrNum=number| string;
type objRes={val:number,timeStamp:Date};

//interfaces:-->also allaow us to structure of an object:
interface resultObjectInterface{
    val:number,
    timeStamp:Date

}


function addo(num1:strOrNum,num2:strOrNum){ //only number and string  are allowed(feature: union type)
   
    if(typeof(num1)==='number' && typeof(num2)==='number'){
        return num1+num2;
    }
    else if(typeof(num1)==='string' && typeof(num2)==='string'){
        return num1+' '+num2;
    }
   
    return +num1+ +num2;//+sign indicates int type
}

//object type:-->
function printResult(resultObj:resultObjectInterface){
    console.log("obj--->",resultObj.val,resultObj.timeStamp);

}



buttonElem.addEventListener('click',()=>{
    const num1=num1elem.value;  //.value alaways return string
    const num2=num2elem.value;

    const res=addo(+num1,+num2);//putting arg as number:to conver from string value to int val we need to put '+' sign.
    const strRes=addo(num1,num2);//putting arg as string

    // console.log(res);
    // console.log(strRes);
    stringResults.push(strRes as string);
    numResults.push(res as number);

    console.log(numResults,stringResults)


    printResult({val:res as number,timeStamp:new Date()})


});

