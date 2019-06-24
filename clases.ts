class Calc{
    num1:number=0;
    num2:number=0;
    constructor(){
    }
    regresaSuma(num1:number,num2:number){
        return num1+num2;
    }
}
let calculadora1=new Calc();
alert(calculadora1.regresaSuma(5,6));