let mask = [2, 'u', 3, 'd', 0, 'd', 1, 'u'];
mask = [0, 'u', 3, 'd', 2, 'u', 1, 'u'];
let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
function sort() {
    let output = '';
    let mask = document.getElementById("mask").value.replace( /\s/g, '').split('');

    array.sort(sortBin(mask[0], mask[1]));

    array = array.slice(0, 8).sort(sortBin(mask[2], mask[3]))
        .concat(array.slice(8, 16).sort(sortBin(mask[2], mask[3])));

    array = array.slice(0, 4).sort(sortBin(mask[4], mask[5]))
        .concat(array.slice(4, 8).sort(sortBin(mask[4], mask[5])))
        .concat(array.slice(8, 12).sort(sortBin(mask[4], mask[5])))
        .concat(array.slice(12, 16).sort(sortBin(mask[4], mask[5])));

    array = array.slice(0, 2).sort(sortBin(mask[6], mask[7]))
        .concat(array.slice(2, 4).sort(sortBin(mask[6], mask[7])))
        .concat(array.slice(4, 6).sort(sortBin(mask[6], mask[7])))
        .concat(array.slice(6, 8).sort(sortBin(mask[6], mask[7])))
        .concat(array.slice(8, 10).sort(sortBin(mask[6], mask[7])))
        .concat(array.slice(10, 12).sort(sortBin(mask[6], mask[7])))
        .concat(array.slice(12, 14).sort(sortBin(mask[6], mask[7])))
        .concat(array.slice(14, 16).sort(sortBin(mask[6], mask[7])));

    // for (let i = 0; i < 16; i++) {
    //     console.log(`${array[i].toString().padStart(2, " ")}: ${(array[i]).toString(2).padStart(4, "0")}`);
    // }
    //в html не виводяться пробіли .padStart(2, " ")
    for (let i = 0; i < 16; i++) {
        output += `${(array[i]).toString(2).padStart(4, "0")} : ${array[i].toString().padStart(2, " ")} <br>`;
    }
    document.getElementById("output").innerHTML = output;
}

function sortBin(bit, fw) {
    bit = parseInt(bit);
    return function (a, b) {
        if (fw === 'u') {
            if (((a >>> bit) & 1) > ((b >>> bit) & 1)) return 1;
            else if (((a >>> bit) & 1) < ((b >>> bit) & 1)) return -1;
            else return 0;
        }
        else if (fw === 'd') {
            if (((a >>> bit) & 1) < ((b >>> bit) & 1)) return 1;
            else if (((a >>> bit) & 1) > ((b >>> bit) & 1)) return -1;
            else return 0;
        }
    }
}
