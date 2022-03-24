function Middle(numbers) {
    let number = numbers.split(',')//array
    let count = 0
    let mid
    for (let i = 0; i < number.length; i++) {
        count += Number(number[i])
    }
    mid = count/number.length
    for (let i = 0; i < number.length; i++) {
        if(mid < Number(number[i])){
            console.log(number[i])
        }
    }
}
Middle('2,10,4,5,155,125')//ededleri vergul ile ayirin