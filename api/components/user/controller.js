const store = require('../../../store/dummy');

const TABLA = 'user';



module.exports = (injectedStore) => {

    let store = injectedStore;
    if(!store){
        store = require('../../../store/dummy');
    }

     list = () => {
        return store.list(TABLA)
    }

    return {
        list
    };
};
