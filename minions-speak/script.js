const input = document.getElementById("input");
const translate = document.getElementById("translate");
const output = document.getElementById("output");

translate.addEventListener("click", () => {
    const text = input.value;

    if (text.length > 0 ) {
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
    }
});

function createUrl(rawText) {
    return `https://api.funtranslations.com/translate/minion.json?text=${encodeURI(rawText)}`;
};