const EURtoUSD = 0.9058;
const USDtoEUR = 1.1039;
let input = document.getElementById('input');

class Calculator {
    input1; input2; operand; result; hex; converted;

    constructor() {
        this.clear()
    }

    insert(char) {
        if(this.operator === '') {
            if (this.input1 === this.result){
                this.input1 = '';
            }
            this.input1 += char;
            input.value = this.input1;
        } else {
            this.input2 += char;
            input.value = this.input2;
        }
    }

    operate(operator) {
        if (this.input1 !== ''){
            this.input1 = input.value;
        } else {
            this.input1 = this.result;
        }
        this.operator = operator;
    }

    calculate() {
        this.result = 0;
        if (this.hex){
            this.input1 = Number(this.input1).toString(10);
        }
        switch (this.operator) {
            case "%":
                if (this.input2 === '') {
                    this.result = Number(this.input1) / 100;
                } else {
                    this.result = 'Error';
                }
                break;
            default :
                if(this.input1 !== '' && this.input2 !== ''){
                    if(this.input2 === '0' && this.operator === '/'){
                        if(this.input1 === '0'){
                            this.result = 'NaN';
                        } else {
                            this.result = 'Error';
                        }
                    } else {
                        switch (this.operator) {
                            case "+":
                                this.result = Number(this.input1) + Number(this.input2);
                                break;
                            case "-":
                                this.result = Number(this.input1) - Number(this.input2);
                                break;
                            case "*":
                                this.result = Number(this.input1) * Number(this.input2);
                                break;
                            case "/":
                                this.result = Number(this.input1) / Number(this.input2);
                            break;
                        }
                    }
                } else {
                    this.result = 'Error';
                }
        }
        if (this.result !== 'Error') {
            this.result = Number(this.result.toFixed(7));
            this.result = String(this.result)
            this.input1 = this.result
            this.input2 = '';
            this.operator = '';
            input.value = this.result;
        } else {
            input.value = this.result;
            this.clean();
        }
    }

    clean() {
        this.input1 = '';
        this.input2 = '';
        this.operator = '';
        this.result = '0';
        this.hex = false;
        this.converted = false;
    }

    clear() {
        this.clean();
        input.value = this.result;
    }

    backspace() {
        if (input.value === 'Error' || input.value === 'Infinity' || input.value === 'NaN'){
            this.clear();
        } else {
            if (this.operator === '') {
                this.input1 = this.input1.slice(0, -1);
                input.value = this.input1;
            } else {
                this.input2 = this.input2.slice(0, -1);
                input.value = this.input2;
            }
        }
    }
/*
    exchange(){
        const xhttp = new XMLHttpRequest();
        xhttp.open("GET", "https://tassidicambio.bancaditalia.it/terzevalute-wf-web/rest/v1.0/latestRates?lang={}");
        xhttp.setRequestHeader("Accept", "application/json");
        xhttp.setRequestHeader("Access-Control-Allow-Origin", "*");
        xhttp.setRequestHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        xhttp.setRequestHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");

        xhttp.onload = function() {
            if (this.status === 200) {
                console.log("ciao");
            } else {
                console.log("error");
            }
        }
        xhttp.send();
    }
*/
    exchange(){
        if(this.input1 !== ''){
            if(this.converted){
                this.input1 = Number(this.input1 * USDtoEUR).toFixed(2);
                this.converted = false;
                document.getElementsByClassName('currency')[0].innerHTML = '$';
            } else {
                this.input1 = Number(this.input1 * EURtoUSD).toFixed(2);
                this.converted = true;
                document.getElementsByClassName('currency')[0].innerHTML = '€';
            }
            input.value = this.input1;    
        }
    }
    
    enableProgrammerMode(){
        if(this.input1 !== ''){
            if(this.hex){
                this.input1 = Number(this.input1).toString(10);
            } else {
                this.input1 = Number(this.input1).toString(16);
                input.value = this.input1;
                this.hex = true;
            }
        }
    }
}