/**
 * Given n names and phone numbers, 
 * assemble a phone book that maps friends' names to their respective phone numbers. 
 * You will then be given an unknown number of names to query your phone books for. 
 * For each name queried, print the associated entry from your phone book 
 * on a new line in the form name=phoneNumber; 
 * if an entry for name is not found, print Not found instead.
 */

 function processData(input) {
    const data = input.split("\n");
    const result = {};
    let i = 1;
    let pair = data[i].split(" ");
    while(pair[1]) {
        if (pair[1]) {
            result[pair[0]] = pair[1];
        }
        i++;
        pair = data[i].split(" ");
    }
    // i should be at index of query
    for (let j = i; j < data.length; j++) {
        if (result[data[j].trim()]) {
            console.log(data[j] + "=" + result[data[j]]);
        } else {
            console.log("Not found");
        }
    }
 }