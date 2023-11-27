const bill = document.getElementById("bill");
const cashAmt = document.getElementById("cash-amt");
const cal = document.getElementById("calculate");

const outputs = document.querySelectorAll(".output");

const notes = [2000, 500, 100, 20, 10, 5, 1]; // eligible notes
let requiredObj = {}; // initialize an obj for containing the info of required notes


cal.addEventListener("click", function() {
    const billAmt = bill.value;
    const given = cashAmt.value;

    // if fields are empty, alert
    if (given.trim() === "" || billAmt.trim() === "") {
        alert("Please fill out both the fields to calculate!!");
    }

    // if more than total bill is paid, return notes
    if (+given >= +billAmt) {
        const totalNotes = notes.length; // eligible notes

        let leftAmt = given - billAmt; // amount to be returned
        let divisor;
        let numOfNote;

        loop(leftAmt);

        function loop(leftAmt) {
            if (leftAmt === 0) return;

            for(let i=0; i<totalNotes; i++) {
                if(notes[i] < leftAmt) { // first smaller(value) note
                    divisor = notes[i];
                    break;
                }
            }    
            numOfNote = Math.floor(leftAmt / divisor); // no. of notes = left amount / one note value
            leftAmt = leftAmt % (divisor * numOfNote); // amount left after = remainder of (left amt / paid notes total value)

            requiredObj[divisor] = numOfNote; // adding the info of notes and count in the obj
            loop(leftAmt); // repeating until zero left
        }

        outputs.forEach(td => {
            td.textContent = requiredObj[Number(td.id)] || "-"; // render respectively and "-" for null/undefined
        });

    } // if less than total bill is paid, ask for paying correct amount
    else if (+given < +billAmt) {
        alert(`Customer has given ${billAmt - given} rs. less cash! Tell him to pay the complete bill amount.`);
    }
});