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
    
    document.getElementById('Collins-output').getElementsByTagName('h6')[0].innerHTML = 'Collins';
    document.getElementById('Collins-output').getElementsByTagName('p')[0].innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam assumenda consequatur, excepturi error ab provident aperiam magnam, sunt veritatis eligendi alias, quos libero! Facilis fugit, est dolore animi tenetur eveniet.';
    
    document.getElementById('Wiktionary-output').getElementsByTagName('h6')[0].innerHTML = 'Wiktionary';
    document.getElementById('Wiktionary-output').getElementsByTagName('p')[0].innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam assumenda consequatur, excepturi error ab provident aperiam magnam, sunt veritatis eligendi alias, quos libero! Facilis fugit, est dolore animi tenetur eveniet.';
    
    document.getElementById('Urban-output').getElementsByTagName('h6')[0].innerHTML = 'Urban';
    document.getElementById('Urban-output').getElementsByTagName('p')[0].innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam assumenda consequatur, excepturi error ab provident aperiam magnam, sunt veritatis eligendi alias, quos libero! Facilis fugit, est dolore animi tenetur eveniet.';

    document.getElementById('results').scrollIntoView()
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        getResults();
    }
  });

document.addEventListener("DOMContentLoaded", function(){
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function(element){
        return new bootstrap.Tooltip(element);
    });


    var inputField = document.querySelector('.form-control');
    inputField.addEventListener('input', function(){
        tooltipList.forEach(function(tooltip){
            tooltip.hide();
        });
    });
});

function toggleDarkMode() {
    const elements = document.querySelectorAll('article, .underNav, thead th')
    for (let el of elements){el.classList.toggle('dark')}
    
    const dictionary = document.querySelectorAll('#dict-description')
    for (let el of dictionary){el.classList.toggle('bg-primary')}
    
    const contactActive = document.querySelectorAll('tbody tr:first-child, tbody tr:nth-child(4)')
    for (let el of contactActive){el.classList.toggle('table-primary');
    el.classList.toggle('table-active')}
    
    const contactLight = document.querySelectorAll('tbody tr:nth-child(2)')
    for (let el of contactLight){el.classList.toggle('table-primary');
    el.classList.toggle('table-light')}
}

