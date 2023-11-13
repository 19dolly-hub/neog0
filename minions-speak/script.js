const input = document.getElementById("input");
const translate = document.getElementById("translate");
const output = document.getElementById("output");

translate.addEventListener("click", () => {
    const text = input.value;
    const url = createUrl(text);

    fetch(url)
    .then(res => res.json())
    .then(data => {
        output.textContent = data.contents.translated;
    })
    .catch(err => console.log(err))
});

function createUrl(rawText) {
    return `https://api.funtranslations.com/translate/minion.json?text=${encodeURI(rawText)}`;
};