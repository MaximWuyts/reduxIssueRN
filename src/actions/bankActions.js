import { ACCOUNTS_SET } from './actionTypes';

export const setAccounts = (accounts) => {
    console.log('hello');
    return {

        type: ACCOUNTS_SET,
        payload: accounts
    }
};

// export const setDebts = (debts) => {
//     return {
//         type: DEBTS_SET,
//         payload: debts
//     }
// };

// export const setAssets = (assets) => {
//     return {
//         type: ASSETS_SET,
//         payload: assets
//     }
// };

// export const setInvestments = (investments) => {
//     return {
//         type: INVESTMENTS_SET,
//         payload: investments
//     }
// };