const input = document.getElementById("input");
const output = document.getElementById("output");
const translate = document.getElementById("translate");
const url = "https://api.funtranslations.com/translate/pirate.json";

translate.addEventListener("click", () => {
    const fetchUrl = encodeUrl(input.value);
    // console.log(fetchUrl);
    fetch(fetchUrl)
    .then(response => response.json())
    .then(data => {
        output.value = data.contents.translated;
        // console.log(data);
    })
    .catch(() => {
        output.textContent = "Some error occured! Please try again after sometime."
    })
});

function encodeUrl(text) {
    return `${url}?text=${encodeURI(text)}`;
}