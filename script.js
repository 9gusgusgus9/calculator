let input = document.getElementById('input');

class Calculator {
    input1; input2; operand; result;

    constructor() {
        this.input1 = '';
        this.input2 = '';
        this.operator = '';
        this.result = '0';
    }

    insert(char) {
        if(this.operator === '') {
            if (this.input1 === result){
                input.value = '';
            }
            this.input1 += char;
            input.value = this.input1;
        } else {
            this.input2 += char;
            input.value = this.input2;
        }
    }

    operate(operator) {
        this.operator = operator;
        this.input1 = input.value;
    }

    calculate() {
        let result = 0;
        switch (this.operator) {
            case "+":
                result = Number(this.input1) + Number(this.input2);
                break;
            case "-":
                result = Number(this.input1) - Number(this.input2);
                break;
            case "*":
                result = Number(this.input1) * Number(this.input2);
                break;
            case "/":
                result = Number(this.input1) / Number(this.input2);
                break;
        }
        this.input1 = result;
        this.input2 = '';
        this.operator = '';
        input.value = result;
    }

    clear() {
        this.input1 = '';
        this.input2 = '';
        this.operator = '';
        this.result = '0';
    }

    backspace() {
        if (this.operator === '') {
            this.input1 = this.input1.slice(0, -1);
        } else {
            this.input2 = this.input2.slice(0, -1);
        }
    }

    excange(){

    }

    enableProgrammerMode(){

    }
}