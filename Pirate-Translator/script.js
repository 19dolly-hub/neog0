const input = document.getElementById("input");
const output = document.getElementById("output");
const translate = document.getElementById("translate");
const loader = document.getElementById("loader");
const url = "https://api.funtranslations.com/translate/pirate.json";

translate.addEventListener("click", () => {
    if (input.value.trim() !== "") {
        const fetchUrl = encodeUrl(input.value);

        loader.style.display = "block";

        fetch(fetchUrl)
        .then(response => response.json())
        .then(data => {
            output.textContent = data.contents.translated;
        })
        .catch((err) => {
            console.log(err);
            output.textContent = "Some error occured! Please try again after sometime."
        })
        .finally(function() {
            loader.style.display = "none";
        });
    }
});

function encodeUrl(text) {
    return `${url}?text=${encodeURI(text)}`;
}
