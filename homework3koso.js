function randomArray(){
    let arr = []
    for (let i = 0; i<100; i++){
     arr.push(Math.floor(Math.random()*50)+1)
    }
    return arr
}
function divide(arr){
    let oddArr= []
    let evenArr=[]
    for (let i = 0; i<arr.length; i++)
    {
        if (i%2==0){
        evenArr.push(arr[i])
    }
    else{
        oddArr.push(arr[i])
    }
}
return [oddArr, evenArr]
}

function min(arr)
{
    let min = arr[0]
    for (i = 0; i<arr.length; i++)
        if (min>arr[i])
        {
            min = arr[i]
        }
    return min
}

function max(arr)
{
    let min = arr[0]
    for (i = 0; i<arr.length; i++)
        if (min<arr[i])
        {
            min = arr[i]
        }
    return min
}

function total(arr)
{
    let tot = 0
    for (i = 0; i<arr.length; i++){
        tot = arr[i]+tot
    }
    return tot
}

function average(arr)
{
    return total(arr) / arr.length
}

function compareArrays(odd, even){
    let min_odd = min(odd)
    let min_even = min(even)
    let max_odd = max(odd)
    let max_even = max(even)
    let tot_odd = total(odd)
    let tot_even = total(even)
    let avg_odd = average(odd)
    let avg_even = average(even)
    console.log(`Array_Odd : min =  ${min_odd} max = ${max_odd} total = ${tot_odd} average =${avg_odd} `)
    console.log(`Array_Even : min =  ${min_even} max = ${max_even} total = ${tot_even} average =${avg_even} `)
}
let arr = randomArray()
console.log(arr)
let splitArr = divide(arr)
let even = splitArr[1]
let odd = splitArr[0]
console.log(even)
console.log(odd)
compareArrays(odd,even)