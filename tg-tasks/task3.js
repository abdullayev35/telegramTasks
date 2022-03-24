function odd(numbers) {
    let number = numbers.split(',')//array
    let oddsArr = []
    for(let i = 0; i<number.length;i++){
        if(Number(number[i]) % 2 == 0){
            oddsArr.push(number[i])
        }
    }
    console.log(oddsArr)
}
odd('5,3,8,14,12,5,55,52')// ededleri vergul ile ayirin