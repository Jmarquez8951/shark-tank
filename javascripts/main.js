import tank from '../javascripts/components/tank.js';
import graveyard from '../javascripts/components/graveyard.js'

const init = () => {
    tank.tankBuilder();
    graveyard.buildGraveyard();
};

init();