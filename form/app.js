
let btn = document.querySelector('#add-more');
let edu = document.querySelector('.education-details');

btn.addEventListener('click', addMore)

let data = [
    {
        label: "Education Level",
        id: "education",
    },
    {
        label: "Insititution:",
        id: "insitution",
    },
    {
        label: "Year of Passing:",
        id: "year",
    }
]

let count = 2
function addMore(event) {
    event.preventDefault();
    let fieldset = document.createElement('fieldset');
    let legend = document.createElement('legend');
    legend.innerHTML = `Education Details ${count}`;
    fieldset.append(legend);
     for(let t of data) {
        let div = document.createElement('div');
        div.className = 'elements';
        fieldset.append(div);
        let label = document.createElement('label');
        label.innerHTML = t.label;
        label.htmlFor = t.id+count;
        div.append(label);
        let input = document.createElement('input');
        input.type = 'text';
        input.id = t.id+count;
        div.append(input);
        
     }
    edu.append(fieldset);
    count++;
     
}




