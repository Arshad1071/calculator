const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')


class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }

    clear() {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }

    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }

    chooseOperation(operation) {
        if (this.currentOperand === '') return
        if (this.previousOperand !== '') {
            this.compute()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
    }

    compute() {
        let computation
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if (isNaN(prev) || isNaN(current)) return
        switch (this.operation) {
            case '+':
                computation = prev + current
                break
            case '-':
                computation = prev - current
                break
            case '*':
                computation = prev * current
                break
            case '÷':
                computation = prev / current
                break
            default:
                return
        }
        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = ''
    }

    getDisplayNumber(number) {
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1]
        let integerDisplay
        if (isNaN(integerDigits)) {
            integerDisplay = ''
        } else {
            integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
        }
        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`
        } else {
            return integerDisplay
        }
    }

    updateDisplay() {
        this.currentOperandTextElement.innerText =
            this.getDisplayNumber(this.currentOperand)
        if (this.operation != null) {
            this.previousOperandTextElement.innerText =
                `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
        } else {
            this.previousOperandTextElement.innerText = ''
        }
    }
}

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

equalsButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
})

allClearButton.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
})

deleteButton.addEventListener('click', button => {
    calculator.delete()
    calculator.updateDisplay()
})


















// let onScr = "";
// let num1 = "";
// let num2 = "";
// var optr;

// document.querySelectorAll('[data-number]').forEach(button => {
//     button.addEventListener("click", (e) => {
//         e.preventDefault();
//         if (optr == undefined) {
//             onScr += e.target.value;
//             document.getElementById('operation').value = onScr;
//             num1 += e.target.value;
//         } else {
//             onScr += e.target.value;
//             document.getElementById('operation').value = onScr;
//             num2 += e.target.value;
//         }
//     });
// })

// document.querySelectorAll('[data-operation]').forEach(button => {
//     button.addEventListener("click", (e) => {
//         e.preventDefault();
//         if (optr == undefined) {
//             optr = e.target.value;
//             document.getElementById("operation").value += e.target.value;
//             onScr += e.target.value;
//         }
//     });
// })

// class Calculator {
//     constructor(x, y, optr) {
//         this.x = x;
//         this.y = y;
//         this.optr = optr;
//     }

//     result() {
//         let res;
//         switch (optr) {
//             case '+':
//                 res = this.x + this.y;
//                 break;
//             case '-':
//                 res = this.x - this.y;
//                 break;
//             case '*':
//                 res = this.x * this.y;
//                 break;
//             case '/':
//                 res = this.x / this.y;
//                 break;
//             default:
//                 res = 'Error! No operation selected.';
//         }
//         return res;
//     };
// }

// document.getElementById("equals").addEventListener("click", () => {
//     if (num1 != "" && num2 != "" && optr != "") {
//         const cal = new Calculator(parseFloat(num1),
//             parseFloat(num2), optr);
//         document.getElementById("result").value = "=" + cal.result();
//     } else {
//         alert("Need two oprands and one operator !")
//     }
// })

// document.getElementById("ac").addEventListener("click", () => {
//     location.reload();
// })


// document.getElementById("c").addEventListener("click", () => {
//     if (num2 != "") {
//         num2 = num2.slice(0, -1);
//         onScr = onScr.slice(0, -1);
//         document.getElementById('operation').value = onScr;
//     } else {
//         if (optr != undefined) {
//             optr = undefined;
//             onScr = onScr.slice(0, -1);
//             document.getElementById('operation').value = onScr;
//             onScr = onScr.slice(0, -1);
//         } else {
//             num1 = num1.slice(0, -1);
//             onScr = onScr.slice(0, -1);
//             document.getElementById('operation').value = onScr;
//         }
//     }
// })