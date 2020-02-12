(function() {

////////// Public variables ///////////
const main = document.getElementById('component');
const submitBtn = document.getElementById('submit');
const dropDown = document.getElementById('drop-down');
const description = document.getElementById('desc');
const clearBtn = document.getElementById('clearbtn');
const form = document.getElementById('form');
const toggle = document.getElementById('toggle');

const sideBtn = document.querySelectorAll('.sidebtn');
const outputArr = document.querySelectorAll('.outbox');


////////// Our Object & arrays //////////
const itemList = {

    hl1038: { part: '1038', desc: 'NAV Headlamp', mwgt: '7.1 lb', mdim: '15x11x15', mvol: '1.43 cf', iwgt: '1.6 lb', idim: '9x7x7', ivol: '.26 cf', eawgt: '4 oz' },

    hl1038k: { part: '1038k', desc: 'NAV Headlamp Kiosk', mwgt: '9.2 lb', mdim: '15x12x18', mvol: '1.88 cf', iwgt: '2.1 lb', idim: '11x8x8', ivol: '.41 cf', eawgt: 'n/a' },

    hl1045: { part: '1045', desc: 'Headlamp - Gray', mwgt: '7.5 lb', mdim: '15x11x15', mvol: '1.43 cf', iwgt: '1.7 lb', idim: '10x8x7', ivol: '.33 cf', eawgt: '4 oz'},

    hl1090: { part: '1090', desc: 'Pro Kit - 6 pc', mwgt: '23 lbs', mdim: '17x14x20', mvol: '2.76 cf', iwgt: 'n/a', idim: 'n/a', ivol: 'n/a', eawgt: '5.4 lbs'},

    hl1205: { part: '1205', desc: 'HEX Speaker', mwgt: '31.3 lb', mdim: '23x10x14', mvol: '1.86 cf', iwgt: '6.1 lb', idim: '13x9x5', ivol: '.34 cf', eawgt: '10 oz' },

    hl1236: { part: '1236', desc: 'Headlamp - Yellow', mwgt: '7.5 lb', mdim: '15x11x15', mvol: '1.43 cf', iwgt: '1.7 lb', idim: '10x8x7', ivol: '.33 cf', eawgt: '4 oz' },

    hl1243: { part: '1243', desc: 'Headlamp - Black', mwgt: '7.5 lb', mdim: '15x11x15', mvol: '1.43 cfm', iwgt: '1.7 lb', idim: '10x8x7', ivol: '.33 cfm', eawgt: '4 oz' },

    hl1250: { part: '1250', desc: 'Mammoth - Yellow', mwgt: '20.9 lb', mdim: '21x14x13', mvol: '2.21 cf', iwgt: '9.8 lb', idim: '21x13x6', ivol: '.95 cf', eawgt: '11.4 oz' },

    hl1304: { part: '1304', desc: 'PUC - Black', mwgt: '17.4 lb', mdim: '21x19x15', mvol: '3.46 cf', iwgt: '3.9 lb', idim: '21x9x7', ivol: '.76 cfm', eawgt: '8 oz' },

    hl1342: { part: '1342', desc: 'PUC - Yellow', mwgt: '17.4 lb', mdim: '21x19x15', mvol: '3.46 cf', iwgt: '3.9 lb', idim: '21x9x7', ivol: '.76 cfm', eawgt: '8 oz' },

    hl1342b: { part: '1342b', desc: 'PUC - Yellow (box)', mwgt: '25.1 lb', mdim: '18x9x15', mvol: '1.4 cf', iwgt: 'n/a', idim: 'n/a', ivol: 'n/a', eawgt: '7.8 oz' },

    hl1441: { part: '1441', desc: 'Journey 150 - Black', mwgt: 'n/a', mdim: 'n/a', mvol: 'n/a', iwgt: 'n/a', idim: 'n/a', ivol: 'n/a', eawgt: '6.5 oz' },

    hl1441k: { part: '1441k', desc: 'Journey 150 - Black Kiosk', mwgt: '15.8 lb', mdim: '16x14x24', mvol: '3.11 cf', iwgt: '3.6 lb', idim: '13x8x12', ivol: '.72 cf', eawgt: 'n/a' },

    hl1557: { part: '1557', desc: 'Journey 150 - Yellow', mwgt: '13 lb', mdim: '22x12x15', mvol: '2.29 cf', iwgt: '3 lb', idim: '11x11x7', ivol: '.49 cf', eawgt: '7 oz' },

    hl1564: { part: '1564', desc: 'Journey 160 - Black', mwgt: '11.4 lb', mdim: '26x10x8', mvol: '1.2 cf', iwgt: 'n/a', idim: 'n/a', ivol: 'n/a', eawgt: '7 oz' },

    hl1564b: { part: '1564b', desc: 'Journey 160 - Black (box)', mwgt: '20.1 lb', mdim: '14x11x12', mvol: '1.07 cf', iwgt: 'n/a', idim: 'n/a', ivol: 'n/a', eawgt: '6.2 oz' },

    hl1571: { part: '1571', desc: 'Journey 250 - Black', mwgt: '17.4 lb', mdim: '26x13x9', mvol: '1.76 cf', iwgt: 'n/a', idim: 'n/a', ivol: 'n/a', eawgt: '10 oz' },

    hl1588: { part: '1588', desc: 'Journey 160 - Yellow', mwgt: '11.4 lb', mdim: '26x10x8', mvol: '1.2 cf', iwgt: 'n/a', idim: 'n/a', ivol: 'n/a', eawgt: '7 oz' },

    hl1588b: { part: '1588b', desc: 'Journey 160 - Yellow (box)', mwgt: '20.1 lb', mdim: '14x11x12', mvol: '1.07 cf', iwgt: 'n/a', idim: 'n/a', ivol: 'n/a', eawgt: '6.2 oz' },

    hl1595: { part: '1595', desc: 'Journey 150 - Black', mwgt: '13 lb', mdim: '22x12x15', mvol: '2.29 cf', iwgt: '3 lb', idim: '11x11x7', ivol: '.49 cf', eawgt: '7 oz' },

    hl1663: { part: '1663', desc: 'Journey 250 - Realtree', mwgt: '17.4 lb', mdim: '26x13x9', mvol: '1.76 cf', iwgt: 'n/a', idim: 'n/a', ivol: 'n/a', eawgt: '10 oz' },

    hl1755: { part: '1755', desc: 'Journey 300 - Black', mwgt: '13.1 lb', mdim: '22x11x15', mvol: '2.1 cf', iwgt: '3 lb', idim: '11x11x7', ivol: '.31 cf', eawgt: '7 oz' },

    hl1755k: { part: '1755k', desc: 'Journey 300 - Black Kiosk', mwgt: '15.9 lb', mdim: '16x14x24', mvol: '3.11 cf', iwgt: '3.6 lb', idim: '13x8x12', ivol: '.72 cf', eawgt: '7 oz' },

    hl1762: { part: '1762', desc: 'Journey 300 - Yellow', mwgt: '13.1 lb', mdim: '22x11x15', mvol: '2.1 cf', iwgt: '3 lb', idim: '11x11x7', ivol: '.31 cf', eawgt: '7 oz' },

    hl1762k: { part: '1762k', desc: 'Journey 300 - Yellow Kiosk', mwgt: '15.9 lb', mdim: '16x14x24', mvol: '3.11 cf', iwgt: '3.6 lb', idim: '13x8x12', ivol: '.72 cf', eawgt: '7 oz' },

    hl1779: { part: '1779', desc: 'Journey 300 - Grey', mwgt: '13.1 lb', mdim: '22x11x15', mvol: '2.1 cf', iwgt: '3 lb', idim: '11x11x7', ivol: '.31 cf', eawgt: '7 oz' },

    hl1793: { part: '1793', desc: 'Journey 600 - Black', mwgt: '19.9 lb', mdim: '24x13x15', mvol: '2.7 cf', iwgt: '4.7 lb', idim: '12x12x7', ivol: '..58 cf', eawgt: '10.4 oz' },

    hl1823: { part: '1823', desc: 'Mammoth - True Timber', mwgt: '21.1 lb', mdim: '21x13x16', mvol: '2.52 cf', iwgt: '5 lb', idim: '12x10x7', ivol: '.48 cf', eawgt: '12 oz' },

    hl1847: { part: '1847', desc: 'Journey 300 - Grey', mwgt: '13.1 lb', mdim: '22x11x15', mvol: '2.1 cf', iwgt: '3 lb', idim: '11x11x7', ivol: '.31 cf', eawgt: '7 oz' },

    hl1885: { part: '1885', desc: 'Atlas - Black', mwgt: '32.1 lb', mdim: '22x15x24', mvol: '4.58 cf', iwgt: '7.4 lb', idim: '15x11x11', ivol: '1.05 cf', eawgt: '18 oz' },

    hl1915: { part: '1915', desc: 'PUC - Grey', mwgt: '17.4 lb', mdim: '21x19x15', mvol: '3.46 cf', iwgt: '3.9 lb', idim: '21x9x7', ivol: '.76 cfm', eawgt: '8 oz' },

    hl1939: { part: '1885', desc: 'Atlas - Grey', mwgt: '32.1 lb', mdim: '22x15x24', mvol: '4.58 cf', iwgt: '7.4 lb', idim: '15x11x11', ivol: '1.05 cf', eawgt: '18 oz' },

    hlPowerwing: { part: 'Powerwing', desc: 'Power Wing Display', mwgt: '11.4 lb', mdim: '52x17x8', mvol: '4.09 cf', iwgt: 'n/a', idim: 'n/a', ivol: 'n/a', eawgt: 'n/a' },

}

let partNumbArray = [];

////////// Public Functions /////////////
function loadEventListeners() {
    submitBtn.addEventListener('click', submitPart);
    clearBtn.addEventListener('click', clearForm);
    dropDown.addEventListener('change', submitPart);

    toggle.addEventListener('change', toggleTheme);
    
    sideBtn.forEach(function(elem) {
        elem.addEventListener('click', sideSelect);
    })
}


function createDataList() {
    // create array of objects from our Object
    const values = Object.values(itemList);

    // iterate array of objects to create array of part#'s
    for (let i = 0; i < values.length; i++) {
        let parts = Object.values(values[i]);
        let x = parts[0];
        partNumbArray.push(x);
    }

    // create html datalist
    const dataList = document.createElement('datalist');
    dataList.id = 'itemList';
    main.appendChild(dataList);

    // iterate part# array to create options for datalist
    for (let i = 0; i < partNumbArray.length; i++) {
        const option = document.createElement('option');
        option.value = partNumbArray[i];
        dataList.appendChild(option);
    }
}


function submitPart() {
    const item = dropDown.value;

    const values = Object.values(itemList);

    for (let i = 0; i < values.length; i++) {
        if (item === values[i].part) {
            const val = Object.values(values[i]);
            for (let i = 0; i < outputArr.length; i++) {
                outputArr[i].innerText = val[i+1];
            } 
            return
        } else {
            noSpecs();
        }
    }
}


function clearForm() {
    dropDown.value = '';
    //form.reset();
    clearOutputs();
}


function clearOutputs() {
    for (let i = 0; i < outputArr.length; i++) {
        outputArr[i].innerText = '';
    } 
    dropDown.focus();
}


function noSpecs() {
    description.innerText = 'No such part #';

    for (let i = 1; i < outputArr.length; i++) {
        outputArr[i].innerText = 'N/A';
    }
}


function sideSelect() {
    dropDown.value = event.target.value;
    submitPart();
}


function toggleTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'light');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');     
    }
}

////////// Start App ////////////////
dropDown.focus();
loadEventListeners();
createDataList();



////////// TESTING /////////////////




})(); //IIFE Close

