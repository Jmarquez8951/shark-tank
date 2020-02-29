import tank from '../javascripts/components/tank.js';
import graveyard from '../javascripts/components/graveyard.js';
import personData from '../javascripts/helpers/data/personData.js';

const sharkAttackEvent = () => {
    personData.randomMurder();
    tank.tankBuilder();
    graveyard.buildGraveyard();
}

const init = () => {
    tank.tankBuilder();
    graveyard.buildGraveyard();
    $('#bite-me').click(sharkAttackEvent);
};

init();