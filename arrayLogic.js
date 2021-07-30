//1
var arrAngka = [];
var total = ""

const countArray = (arrAngka) =>{
    for(i = 0; i < arrAngka.length; i++){
        total += arrAngka[i];
    }
    return total;
}

//test case
console.log(countArray([1,2,3]))
// console.log(countArray([1,2,3,4,5,6]))
// console.log(countArray([10,10,10,10,10]))
// console.log(countArray([]))



//no2
const reverseArray=(angka) => {
    let newAngka= [];
    let k=0;
    for(let i= angka.length-1; i >=0; i--){
        let string1 = angka[i].toString();

        console.log(angka[i])
        
        let reverse2="";
        for(let j= string1.length-1; j>=0; j-- ){
            reverse2 += string1[j];

            // console.log(string1[j])
        }
        newAngka[k] = reverse2 
        // console.log(reverse2)
        k++
    }
    return newAngka
}
// console.log(reverseArray([123, 456]))


    // array_elements.sort();
    // for (var i = 1; i < array_elements.length; i += 1) {
    //     if (array_elements[i - 1] > array_elements[i]) {
    //       var tmp = array_elements[i - 1];
    //       array_elements[i - 1] = array_elements[i];
    //       array_elements[i] = tmp;
    //     }
    //   }



//no3

const uniquerArray = (arr) => {
    let result = [];
    for(let i = 0; i<arr.length;i++){
        let uniq = false;
        for(let j =0;j<result.length;j++){
            if (result[j] === arr[i]) {
                uniq = true //beri tanda jika kondisi benar
            }
        }

        if (uniq != true){
            result[result.length] = arr[i] 
        } 
    }
    return result;

}
console.log(uniquerArray([1, 4, 5, 6, 1, 1, 2, 2, 3, 4, 5, 6, 7]))

//4

const listBoba = [
    ['Xing Fu Tang', 38000], 
    ['OneZo', 53500],
    ['KOI The', 36000],
    ['Chatime', 25000],
    ['Kokumi', 42000],
    ['Bubble Station Milk', 13000]
]

function jajanBoba(uangJajan) {
    console.log(`david mulai jajan dengan uang jajn Rp${uangJajan}`)

    for(let i=0; i<listBoba.length;i++){
        let beli = listBoba[i][0];
        let harga = listBoba[i][1]

        if (uangJajan > listBoba[i][1]) {
            console.log(`dengan uang jajan Rp${uangJajan}, cukup untuk beli${beli}`)
            uangJajan -= harga
        }

        console.log(`denan uang Rp.${uangJajan}, tidak cukup untuk membeli${beli}`)
    }
    return uangJajan;
}
console.log(jajanBoba(100000))

//5
const searchSame = (arr1, arr2) => {
    const result = [];

}