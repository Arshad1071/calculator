let onScr = "";
let num1 = "";
let num2 = "";
var optr;

document.getElementById("1").addEventListener("click", (e) => {
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

document.getElementById("2").addEventListener("click", (e) => {
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

document.getElementById("3").addEventListener("click", (e) => {
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

document.getElementById("4").addEventListener("click", (e) => {
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

document.getElementById("5").addEventListener("click", (e) => {
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

document.getElementById("6").addEventListener("click", (e) => {
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

document.getElementById("7").addEventListener("click", (e) => {
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

document.getElementById("8").addEventListener("click", (e) => {
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

document.getElementById("9").addEventListener("click", (e) => {
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

document.getElementById("0").addEventListener("click", (e) => {
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



document.getElementById("add").addEventListener("click", (e) => {
    if (optr == undefined) {
        e.preventDefault();
        optr = e.target.value;
        document.getElementById("operation").value += "+";
        onScr += "+";
    }
});
document.getElementById("sub").addEventListener("click", (e) => {
    if (optr == undefined) {
        e.preventDefault();
        optr = e.target.value;
        document.getElementById("operation").value += "-";
        onScr += "-";
    }
});
document.getElementById("mul").addEventListener("click", (e) => {
    if (optr == undefined) {
        e.preventDefault();
        optr = e.target.value;
        document.getElementById("operation").value += "x";
        onScr += "x";
    }
});
document.getElementById("div").addEventListener("click", (e) => {
    if (optr == undefined) {
        e.preventDefault();
        optr = e.target.value;
        document.getElementById("operation").value += "/";
        onScr += "/";
    }
});


class Calculator {
    constructor(x, y, optr) {
        this.x = x;
        this.y = y;
        this.optr = optr;
    }

    result() {
        let res;
        switch (optr) {
            case 'add':
                res = this.x + this.y;
                break;
            case 'sub':
                res = this.x - this.y;
                break;
            case 'mul':
                res = this.x * this.y;
                break;
            case 'div':
                res = this.x / this.y;
                break;
            default:
                res = 'Error! No operation selected.';
        }
        return res;
    };

}




document.getElementById("equalto").addEventListener("click", () => {
    const cal = new Calculator(parseInt(num1), parseInt(num2), optr);
    document.getElementById("result").value = "=" + cal.result();
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