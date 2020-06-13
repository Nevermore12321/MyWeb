const Actions = {
    modifyName: (name) => ({
        type: 'ModifyName',
        name,
    }),
    modifyAge: (age) => ({
        type: 'ModifyAge',
        age,
    }),
    modifyAddress: (address) => ({
        type: 'ModifyAddress',
        address,
    }),
};

const UserState = {
    name: 'shaohe',
    age: 18,
    address: 'Anze',
};

const UserReducer = (state = UserState, action) => {
    switch (action.type) {
        case 'ModifyName':
            return {
                ...state,
                name: action.name,
            }
        case 'ModifyAge':
            return {
                ...state,
                age: action.age,
            };
        case 'ModifyAddress':
            return {
                ...state,
                address: action.address,
            };
        default:
            return state;
    }
};

export {
    UserReducer,
    Actions,
};
