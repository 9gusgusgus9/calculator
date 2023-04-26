let input = document.getElementById('input');

class Calculator {
    input1; input2; operand; result; lastRes;

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
        }
        if (this.result !== 'Error') {
            this.input1 = this.result;
            this.input2 = '';
            this.operator = '';
            this.lastRes = true;
        } else {
            this.clear();
            this.lastRes = false;
        }
        input.value = this.result;
    }

    clear() {
        this.input1 = '';
        this.input2 = '';
        this.operator = '';
        this.result = '0';
        this.lastRes = false;
        input.value = this.result;
    }

    backspace() {
        if (this.operator === '') {
            this.input1 = this.input1.slice(0, -1);
            input.value = this.input1;
        } else {
            this.input2 = this.input2.slice(0, -1);
            input.value = this.input2;
        }
    }

    excange(){

    }

    enableProgrammerMode(){

    }
}