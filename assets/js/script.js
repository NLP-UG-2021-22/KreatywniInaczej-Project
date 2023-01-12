function deactivate(dictionary) { 
    var dictionaryLogo = document.getElementById(dictionary.concat('-button'))
    dictionaryLogo.classList.toggle("greyscale")

    var dictionaryOutput = document.getElementById(dictionary.concat('-output'))
    dictionaryOutput.classList.toggle("hidden")
}


