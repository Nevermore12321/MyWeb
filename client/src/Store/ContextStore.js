import { createContext } from 'react';

const TomContext = createContext({
    name: 'Tom',
    age: 18,
});

const JerryContext = createContext({
    name: 'Jerry',
    age: 19,
});

export {
    TomContext,
    JerryContext,
};
