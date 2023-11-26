const bill = document.getElementById("bill");
const cashAmt = document.getElementById("cash-amt");
const cal = document.getElementById("calculate");

const outputs = document.querySelectorAll(".output");

const notes = [2000, 500, 100, 20, 10, 5, 1];
let requiredObj = {};

cal.addEventListener("click", function() {
    const billAmt = bill.value;
    const given = cashAmt.value;

    if (given === "" || billAmt === "") {
        alert("Please fill out both the fields to calculate!!");
    }

    if (+given >= +billAmt) {
        const totalNotes = notes.length;

        let leftAmt = given - billAmt;
        let divisor;
        let numOfNote;

        loop(leftAmt);

        function loop(leftAmt) {
            if (leftAmt === 0) return;
            for(let i=0; i<totalNotes; i++) {
                if(notes[i] < leftAmt) {
                    divisor = notes[i];
                    break;
                }
            }    
            numOfNote = Math.floor(leftAmt / divisor);
            leftAmt = leftAmt % (divisor * numOfNote);

            requiredObj[divisor] = numOfNote;
            loop(leftAmt);
        }

        outputs.forEach(td => {
            td.textContent = requiredObj[Number(td.id)] || "-";
        });

    }
    else if (+given < +billAmt) {
        alert(`Customer has given ${billAmt - given} rs. less cash! Tell him to pay the complete bill amount.`);
    }
});