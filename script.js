function toTitleCase(str) {
    return str.replace(
        /\w\S*/g,
        function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}

function toSentenceCase(str) {
    return str.toLowerCase().replace(
        /(^\w|\.\s*\w)/gi,
        function (txt) {
            return txt.toUpperCase()
        }
    );
}

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

let textarea = document.getElementById("textarea");
let upperCase = document.getElementById("upper-case");
let lowerCase = document.getElementById("lower-case");
let properCase = document.getElementById("proper-case");
let sentenceCase = document.getElementById("sentence-case");
const saveTextFile = document.getElementById("save-text-file");



upperCase.addEventListener("click", function () {
    textarea.value = textarea.value.toUpperCase();
});

lowerCase.addEventListener("click", function () {
    textarea.value = textarea.value.toLowerCase();
});

properCase.addEventListener("click", function () {
    textarea.value = toTitleCase(textarea.value);
});

sentenceCase.addEventListener("click", function () {
    textarea.value = toSentenceCase(textarea.value);
});

saveTextFile.addEventListener("click", function () {
    download("text.txt", textarea.value);
});