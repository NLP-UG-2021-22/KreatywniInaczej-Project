function deactivate(dictionary) {
    var dictionaryLogo = document.getElementById(dictionary.concat('-button'))
    dictionaryLogo.classList.toggle("greyscale")

    var dictionaryOutput = document.getElementById(dictionary.concat('-output'))
    dictionaryOutput.classList.toggle("hidden")
    toggleCheckboxWhenAllChecked();
}

function toggleCheckboxWhenAllChecked() {
    const checkbox = document.getElementById("flexCheckChecked");
    const buttons = document.querySelectorAll('#dictionaries button');
    if (Array.from(buttons).some(x => x.classList.contains('greyscale'))) {
        checkbox.toggleAttribute('unchecked')
        checkbox.removeAttribute('checked')
        // console.log(
        //     "At least one is gray"
        //     )
        }
        if (Array.from(buttons).every(x => !x.classList.contains('greyscale'))) {
            checkbox.toggleAttribute('checked')
            checkbox.removeAttribute('unchecked') 
    //         console.log(
    //             "All have colour"
    //             )
    }

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

