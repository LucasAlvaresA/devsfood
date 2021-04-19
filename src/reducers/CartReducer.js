const initialState = {
    products:[],
    address:[],
    discount:0,
    delivery:0
};

export default (state = initialState, action) => {
    let products = [...state.products];

    switch(action.type) {
        case "ADD_PRODUCT":
            let id = action.payload.data.id;

            let index = products.findIndex(item => item.id === id);
            if(index > -1) {
                products[index].qt += action.payload.qt;
            } else {
                products.push({
                    ...action.payload.data,
                    qt: action.payload.qt
                });
            }

            return{...state,products};
        break;
        case "CHANGE_PRODUCT":
            if(products[action.payload.key]) {
                switch(action.payload.type) {
                    case "-":
                        products[action.payload.key].qt--;

                        if(products[action.payload.key].qt <= 0) {
                            products = products.filter((item,index)=>index != action.payload.key);
                        }
                    break;
                    case "+":
                        products[action.payload.key].qt++;
                    break;
                }
            }

            return{...state,products};
        break;
        // case "SET_TOKEN":
        //     return {...state, token: action.payload.token};
        // case 'SET_NAME':
        //     return {...state, name: action.payload.name};
        // break;
    }

    return state;
}