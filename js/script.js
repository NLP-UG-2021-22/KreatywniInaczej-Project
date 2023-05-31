const inputWord = document.getElementById('inputWord');

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
    
    document.getElementById('Urban-output').getElementsByTagName('p')[0].innerHTML = "";
    getResultsFromUrban();

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

// adjusts darkmode when loading the page
function adjustDarkModeToFlag() {
    let darkModeFlag = localStorage.getItem('dark') === 'true';
    let body = document.getElementsByTagName('body')[0];
    if (body.classList.contains('dark') !== darkModeFlag) {
        toggleDarkModeClasses();
    }
}

function toggleDarkMode() {
    let darkModeFlag = localStorage.getItem('dark') === 'true';
    darkModeFlag = !darkModeFlag;
    localStorage.setItem('dark', darkModeFlag);    
    toggleDarkModeClasses();
}

function toggleDarkModeClasses() {
    let body = document.getElementsByTagName('body')[0];
    body.classList.toggle('dark');

    const elements = document.querySelectorAll('article, .underNav, thead th');
    for (let el of elements) { el.classList.toggle('dark'); }

    const dictionary = document.querySelectorAll('#dict-description');
    for (let el of dictionary) { el.classList.toggle('bg-primary'); }

    const contactActive = document.querySelectorAll('tbody tr:first-child, tbody tr:nth-child(4)');
    for (let el of contactActive) {
        el.classList.toggle('table-primary');
        el.classList.toggle('table-active');
    }

    const contactLight = document.querySelectorAll('tbody tr:nth-child(2)');
    for (let el of contactLight) {
        el.classList.toggle('table-primary');
        el.classList.toggle('table-light');
    }

    const cardBorder = document.getElementsByClassName('card');
    for (let el of cardBorder) {
        el.classList.toggle('border-primary');
        el.classList.toggle('border-warning');
    }

    const darkmodeButton = document.getElementsByClassName('darkmode_button');
    for (let el of darkmodeButton) {
        el.classList.toggle('toDark');
        el.classList.toggle('toLight');
    }

    const moon = document.getElementsByClassName('fa-moon');
    for (let el of moon) {
        el.classList.toggle('lightmode');
        el.classList.toggle('darkmode');
    }
}

function getResultsFromUrban() {
    let wordVal = inputWord.value;
    let url = 'https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=' + wordVal.trim().toLowerCase();
    console.log(url);
    const options = {
        method: 'GET',
        headers: {
            //jak ten klucz przestanie dzialac to trzeba sie zalogowac czy cos
            'X-RapidAPI-Key': 'e2366fd9d1mshc2654b507d6bbc9p1e926djsncfb3238af786',
            'X-RapidAPI-Host': 'mashape-community-urban-dictionary.p.rapidapi.com'
        }
    };
    fetch(url, options)
    .then(response => response.json())
    .then(response => {
        const definitions = response.list.map(x => x.definition);
        document.getElementById('Urban-output').getElementsByTagName('h6')[0].innerHTML = 'Urban';
        const urbanList = document.createElement('ol');
        definitions.forEach(el => {
            let li = document.createElement('li');
            li.innerHTML = el;
            urbanList.appendChild(li);
        });
        document.getElementById('Urban-output').getElementsByTagName('p')[0].appendChild(urbanList);
    })
    
}