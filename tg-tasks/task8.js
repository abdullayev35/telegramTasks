function checker(arr,char) {
    let newArr = []
    let index = 0

    for (let i = 0; i < arr.length; i++) {

        if(arr[i][0] === char){
            newArr[index] = arr[i]
            index++
        }

    }

    console.log(newArr)
}

checker(['murad','ferman','samxal','ferid'],'f')