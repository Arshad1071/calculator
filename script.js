let onScr = "";
let num1 = "";
let num2 = "";
var optr;

document.querySelectorAll('[data-number]').forEach(button => {
    button.addEventListener("click", (e) => {
        e.preventDefault();
        if (optr == undefined) {
            onScr += e.target.value;
            document.getElementById('operation').value = onScr;
            num1 += e.target.value;
        } else {
            onScr += e.target.value;
            document.getElementById('operation').value = onScr;
            num2 += e.target.value;
        }
    });
})

document.querySelectorAll('[data-operation]').forEach(button => {
    button.addEventListener("click", (e) => {
        e.preventDefault();
        if (optr == undefined) {
            optr = e.target.value;
            document.getElementById("operation").value += e.target.value;
            onScr += e.target.value;
        }
    });
})

class Calculator {
    constructor(x, y, optr) {
        this.x = x;
        this.y = y;
        this.optr = optr;
    }

    result() {
        let res;
        switch (optr) {
            case '+':
                res = this.x + this.y;
                break;
            case '-':
                res = this.x - this.y;
                break;
            case '*':
                res = this.x * this.y;
                break;
            case '/':
                res = this.x / this.y;
                break;
            default:
                res = 'Error! No operation selected.';
        }
        return res;
    };
}

document.getElementById("equals").addEventListener("click", () => {
    if (num1 != "" && num2 != "" && optr != "") {
        const cal = new Calculator(parseFloat(num1), parseFloat(num2), optr);
        document.getElementById("result").value = "=" + cal.result();
    } else {
        alert("Need two oprands and one operator !")
    }
})

document.getElementById("ac").addEventListener("click", () => {
    location.reload();
})


document.getElementById("c").addEventListener("click", () => {
    if (num2 != "") {
        num2 = num2.slice(0, -1);
        onScr = onScr.slice(0, -1);
        document.getElementById('operation').value = onScr;
    } else {
        if (optr != undefined) {
            optr = undefined;
            onScr = onScr.slice(0, -1);
            document.getElementById('operation').value = onScr;
            onScr = onScr.slice(0, -1);
        } else {
            num1 = num1.slice(0, -1);
            onScr = onScr.slice(0, -1);
            document.getElementById('operation').value = onScr;
        }
    }
})