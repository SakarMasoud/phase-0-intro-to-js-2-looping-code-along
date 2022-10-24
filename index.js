// Code your solutions in this file

function writeCards(array, feel){
    let array1 = []
    for (let i = 0 ; i<array.length ; i++){
        array1.push(`Thank you, ${array[i]}, for the wonderful ${feel} gift!`)
    }
    return array1
}

function countDown(num){
    for (let i=num ; i>=0 ; i--){
        console.log(i)
    }
}