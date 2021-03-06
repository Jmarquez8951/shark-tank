const persons = [
    {
        id: 'person1',
        name: 'Zoe',
        isDead: false
    },
    {
        id: 'person2',
        name: 'Mary',
        isDead: false
    },
    {
        id: 'person3',
        name: 'Luke',
        isDead: false
    },
    {
        id: 'person4',
        name: 'Aaron',
        isDead: false
    },
    {
        id: 'person5',
        name: 'Anca',
        isDead: false
    },
    {
        id: 'person6',
        name: 'Beth',
        isDead: false
    },
    {
        id: 'person7',
        name: 'Bethany',
        isDead: false
    },
    {
        id: 'person8',
        name: 'Christopher',
        isDead: false
    },
    {
        id: 'person9',
        name: 'David',
        isDead: false
    },
    {
        id: 'person10',
        name: 'Davis',
        isDead: false
    },
    {
        id: 'person11',
        name: 'Dillon',
        isDead: false
    },
    {
        id: 'person12',
        name: 'Joey',
        isDead: false
    },
    {
        id: 'person13',
        name: 'John',
        isDead: false
    },
    {
        id: 'person14',
        name: 'Jose',
        isDead: false
    },
    {
        id: 'person15',
        name: 'Kayla',
        isDead: false
    },
    {
        id: 'person16',
        name: 'Kenneth',
        isDead: false
    },
    {
        id: 'person17',
        name: 'Liza',
        isDead: false
    },
    {
        id: 'person18',
        name: 'Michelle',
        isDead: false
    },
    {
        id: 'person19',
        name: 'Monique',
        isDead: false
    },
    {
        id: 'person20',
        name: 'Ola',
        isDead: false
    },
    {
        id: 'person21',
        name: 'Sarah',
        isDead: true
    },
    {
        id: 'person22',
        name: 'Stephen',
        isDead: true
    },
    {
        id: 'person23',
        name: 'Steven',
        isDead: true
    },
    {
        id: 'person24',
        name: 'Tod',
        isDead: true
    },
    {
        id: 'person25',
        name: 'Zac',
        isDead: true
    },
];

const getAlivePersons = () => {
    return persons.filter((x) => x.isDead === false);
};

const getDeadPeople = () => {
    return persons.filter((x) => x.isDead === true);
};

const randomMurder = () => {
    const alivePeople =  getAlivePersons();
    const randomNum =  Math.floor(Math.random() * alivePeople.length);
    const deadPersonsId = alivePeople[randomNum].id;
    const deadMan = persons.findIndex((x) => x.id === deadPersonsId);
    persons[deadMan].isDead = true;
};

const bringToLife = (personId) => {
    const itLives = persons.findIndex((x) => x.id === personId);
    persons[itLives].isDead = false;
};

export default {getAlivePersons, getDeadPeople, randomMurder, bringToLife};