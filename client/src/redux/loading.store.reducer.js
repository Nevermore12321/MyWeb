/*
 * @author: Shaohe Guo
 * @contact: 842125706@qq.com
 * @site: www.guoshaohe.com
 * @file: loading.store.reducer
 * @time: 2020/7/15 0:04
*/

const Actions = {
    modifyName: (newLoadingBool) => ({
        type: 'ModifyLoading',
        newLoadingBool,
    }),
};

const loadingState = {
    loadingBool: false,
};

const loadingReducer = (state = loadingState, actions) => {
    switch (actions.type) {
        case 'ModifyLoading':
            return {
                ...state,
                loadingBool: actions.newLoadingBool,
            }
        default:
            return state;
    }
};

export default loadingReducer;
export {
    Actions,
};
