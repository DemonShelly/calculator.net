var newnumber = true;
var op = '+';
var lastop = '+';
var lastnum = 0;
var answer = 0;
var value = 0;



function show(num) {
	// 若已經輸入數字&&輸入框裡不是0，輸入的數字要接在後面
	if((!newnumber)&&(result.value!=='0')){
		result.value+=eval(num);
	}
	// 若尚未輸入數字，輸入框＝輸入的數字
	else{
		result.value=""+eval(num);
		newnumber = false;
	}
	
}

function operation(operation){
	
	if ((newnumber!==true)||(op === '=')) {
		
    	if (((operation!=='='))&&(op!='=')) {
    		lastop=op;
    		lastnum=result.value;
    		answer = eval(answer+lastop+lastnum);
    		result.value=answer;
            
    	}
    	else if (operation=== '=') {
    		
    		if (op !== '=') {
        		lastop=op;
        		lastnum=result.value;
        	}

    		answer =eval(answer+lastop+lastnum);
    		result.value=answer;
    		
    	}
    	newnumber=true;
    }
    op=operation;
	}


function back() {
    str=result.value;
    if (str.length==1){
        result.value ='_';
        newnumber=true;
	}
	else {
        result.value = str.substring(0, str.length - 1);
    }
}

function clearAll(){
    op='+';
    lastop='+';
    answer=0;
    result.value = '_';
    newnumber=true;

}



function dot(){

    // 第一個不能是小數點防呆
    if (!newnumber){
        number=result.value;
        // 只能有一個dot防呆
        if (number.indexOf('.')===-1){
            document.calc.result.value+=".";
            newnumber=false;
        }
        else{
            alert('只能有一個小數點！');
        }
    }
    else {
        alert('不能先輸入小數點！');
    }
}



function MathSin(){

	value = result.value;
	result.value = Math.sin(value);
}

function MathCos() {
    value = result.value;
    result.value = Math.cos(value);

}

function MathTan() {
    value = result.value;
    result.value = Math.tan(value);

}
function MathSqrt() {
    value = result.value;
    result.value = Math.sqrt(value);

}



