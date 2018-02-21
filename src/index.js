/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */

module.exports = function getLoveTrianglesCount(preferences = []) {
    // console.log(arr);
    let triangle = 0;
    let counter = 1;
    const Lovers = {};
    let length = preferences.length;
    for(let i = 0; i < preferences.length; i++){
        Lovers[counter] = preferences[i];
        counter++;
    }

    for(let iter = 1; iter <= length; iter++){
        debugger;

        let firstLover = Lovers[iter];

        let secondLover = Lovers[firstLover];

        let thirdLover = Lovers[secondLover];

        if(iter === thirdLover && iter !== secondLover){
            triangle += 1;
        }else continue;
    }

    console.log(Math.round(triangle/3));
    return Math.round(triangle/3);
};
