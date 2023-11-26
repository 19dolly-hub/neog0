const input = document.getElementById("input");
const output = document.getElementById("output");
const translate = document.getElementById("translate");
const url = "https://api.funtranslations.com/translate/pirate.json";

translate.addEventListener("click", () => {
    if (input.value > 0) {
        const fetchUrl = encodeUrl(input.value);

        fetch(fetchUrl)
        .then(response => response.json())
        .then(data => {
            output.textContent = data.contents.translated;
        })
        .catch(() => {
            output.textContent = "Some error occured! Please try again after sometime."
        });
    }
});

function encodeUrl(text) {
    return `${url}?text=${encodeURI(text)}`;
}
