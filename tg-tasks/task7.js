function pusher(arr,arr2) {
    let newArr = []
    let index = 0

    for(let i = 0; i < arr.length;i++){
        for(let j=0; j <arr2.length;j++){
            if(arr[i] === arr2[j]){
                newArr[index] = arr[i]
                index++
            }
        }
    }

    console.log(newArr)
}

pusher(['m','u','r','a','d'],['f','e','r','m','a','n'])