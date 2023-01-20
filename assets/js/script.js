function deactivate(dictionary) {
    var dictionaryLogo = document.getElementById(dictionary.concat('-button'))
    dictionaryLogo.classList.toggle("greyscale")

    var dictionaryOutput = document.getElementById(dictionary.concat('-output'))
    dictionaryOutput.classList.toggle("hidden")
}

function ToggleLogos() {
    const buttons = document.querySelectorAll('#dictionaries button');
    const results = document.querySelectorAll('#results li');

    if (Array.from(buttons).some(x => x.classList.contains('greyscale'))) {

        buttons.forEach((button) => {
            button.classList.remove('greyscale');
        });

        results.forEach((result) => {
            result.classList.remove('hidden');
        });
    }

    else if (Array.from(buttons).every(x => !x.classList.contains('greyscale'))) {

        buttons.forEach((button) => {
            button.classList.add('greyscale');
        });

        results.forEach((result) => {
            result.classList.add('hidden');
        });
    }
}

function getResults() {
    // MW = document.getElementById('Meriam-Webster-output');
    document.getElementById('Meriam-Webster-output').getElementsByTagName('h6')[0].innerHTML = 'Meriam-Webster';
    document.getElementById('Meriam-Webster-output').getElementsByTagName('p')[0].innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam assumenda consequatur, excepturi error ab provident aperiam magnam, sunt veritatis eligendi alias, quos libero! Facilis fugit, est dolore animi tenetur eveniet.';

    document.getElementById('Oxford-output').getElementsByTagName('h6')[0].innerHTML = 'Oxford';
    document.getElementById('Oxford-output').getElementsByTagName('p')[0].innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam assumenda consequatur, excepturi error ab provident aperiam magnam, sunt veritatis eligendi alias, quos libero! Facilis fugit, est dolore animi tenetur eveniet.';

    document.getElementById('Collins-output').getElementsByTagName('h6')[0].innerHTML = 'Collins';
    document.getElementById('Collins-output').getElementsByTagName('p')[0].innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam assumenda consequatur, excepturi error ab provident aperiam magnam, sunt veritatis eligendi alias, quos libero! Facilis fugit, est dolore animi tenetur eveniet.';

    document.getElementById('Wiktionary-output').getElementsByTagName('h6')[0].innerHTML = 'Wiktionary';
    document.getElementById('Wiktionary-output').getElementsByTagName('p')[0].innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam assumenda consequatur, excepturi error ab provident aperiam magnam, sunt veritatis eligendi alias, quos libero! Facilis fugit, est dolore animi tenetur eveniet.';

    document.getElementById('Urban-output').getElementsByTagName('h6')[0].innerHTML = 'Urban';
    document.getElementById('Urban-output').getElementsByTagName('p')[0].innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam assumenda consequatur, excepturi error ab provident aperiam magnam, sunt veritatis eligendi alias, quos libero! Facilis fugit, est dolore animi tenetur eveniet.';
}