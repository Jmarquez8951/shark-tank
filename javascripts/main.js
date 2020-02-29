import tank from '../javascripts/components/tank.js';
import graveyard from '../javascripts/components/graveyard.js';
import personData from '../javascripts/helpers/data/personData.js';

const sharkAttackEvent = () => {
    personData.randomMurder();
    tank.tankBuilder();
    graveyard.buildGraveyard();
}

const reviveEvent = (e) => {
    const personId = e.target.id;
    personData.bringToLife(personId);
    tank.tankBuilder();
    graveyard.buildGraveyard();
}

const init = () => {
    tank.tankBuilder();
    graveyard.buildGraveyard();
    $('#bite-me').click(sharkAttackEvent);
    $('body').on('click', '.revive-btn', reviveEvent)
};

init();