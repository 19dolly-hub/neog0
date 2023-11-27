const input = document.getElementById("input");
const translate = document.getElementById("translate");
const loader = document.getElementById("loader");
const output = document.getElementById("output");

translate.addEventListener("click", () => {
    const text = input.value;

    loader.style.display = "block";

    if (text.trim() !== "") {
        const url = createUrl(text);

        fetch(url)
        .then(res => res.json())
        .then(data => {
            output.textContent = data.contents.translated;
        })
        .catch(err => {
            console.log(err);
            output.textContent = "Something Went Wrong... Please try after sometime.";
        })
        .finally(function() {
            loader.style.display = "none";
        })
    }
});

function createUrl(rawText) {
    return `https://api.funtranslations.com/translate/minion.json?text=${encodeURI(rawText)}`;
};