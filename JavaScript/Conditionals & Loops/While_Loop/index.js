
document.addEventListener('DOMContentLoaded', function() {
    const multiplieruser = document.getElementById('multiplier');
    const multiplicanduser = document.getElementById('multiplicand');
    const generateButton = document.getElementById('generate');
    const resultSection = document.getElementById('result');

    generateButton.addEventListener('click', function() {
        const multiplier = parseInt(multiplieruser.value);
        const multiplicand = parseInt(multiplicanduser.value);
        resultSection.innerHTML = '';

        if ((multiplier==0) || (multiplicand==0)) {
            resultSection.innerHTML = '<p>Please enter non-zero numbers.</p>';
            return;
        }

        let table = '<h2>Table</h2><ul>';
        let i=1;
        while( i <=multiplier ) {
            table += `<li> ${multiplicand} x ${i} = ${multiplier * multiplicand}</li>`;
            i++;
        }
        table += '</ul>';
        resultSection.innerHTML = table;
    });
});