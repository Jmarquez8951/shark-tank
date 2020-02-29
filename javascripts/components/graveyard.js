import util from '../helpers/util.js';
import personData from '../helpers/data/personData.js';

const buildGraveyard = () => {
    const persons = personData.getDeadPeople();
    let domString = '<h2 class="col-12 text-center">Graveyard</h2>';
    domString += '<div class="d-flex flex-wrap">';
    persons.forEach((person) => {
        domString += '<div class="col-4 person-card">'
        domString += '<div class="card">'
        domString += '<div class="card-body">'
        domString += `<h5 class="card-title">${person.name}</h5>`
        domString += `<button id="${person.id}" class="btn btn-dark revive-btn">Revive Me!</button>`
        domString += '</div>'
        domString += '</div>'
        domString += '</div>'
    })
    domString += '</div>'
    util.printToDom('graveyard', domString);;
}

export default {buildGraveyard};