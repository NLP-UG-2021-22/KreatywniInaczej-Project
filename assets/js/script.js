function deactivate(dictionary) {
    var dictionaryLogo = document.getElementById(dictionary.concat('-button'))
    dictionaryLogo.classList.toggle("greyscale")

    var dictionaryOutput = document.getElementById(dictionary.concat('-output'))
    dictionaryOutput.classList.toggle("hidden")
}

function OnChangeCheckbox(checkbox) {
    if (checkbox.checked) {
        $('#dictionaries > button').each(function() {
            this.classList.remove("greyscale") });
        $('#results ul > li').each(function() {
            this.classList.remove("hidden") });
    }
    else {
        $('#dictionaries > button').each(function() {
            this.classList.add("greyscale") });
        $('#results ul > li').each(function() {
            this.classList.add("hidden") });
    }
}
