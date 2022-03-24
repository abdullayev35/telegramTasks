function sumMiddle(numbers) {
    let number = numbers.split(',')//array
    let count = 0
    let mid
    for (let i = 0; i < number.length; i++) {
        count += Number(number[i])
        mid = count / number.length
    }
    console.log(mid)
}

sumMiddle('4,10,4,5')//ededleri vergul ile ayirin