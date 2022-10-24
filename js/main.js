// import {Settings} from './Settings.js'

// let settings = new Settings();


import { Settings } from './Settings.js'

let settings = new Settings();




function find_max(nums) {
    let max_num ; 
    // Number.NEGATIVE_INFINITY;

    for (let num of nums) {
        if (num > max_num) {
            max_num = num;
        }
    }
    return max_num;
}



console.log(find_max([20, 10, 20, 30, 50]))


console.log(Number.NEGATIVE_INFINITY)