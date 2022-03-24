function finder(text) {
    let newArr = []
    let count = 0
    for (let i = 0; i < text.length; i++) {
        count = 0
        for (let j = 0; j < text.length; j++) {
            if(text[i] === text[j]){
                count++
            }
        }

        if(!newArr.includes(text[i])){
            newArr[i] = `${text[i]} herfinden ${count} dene var`
        }
    }

    console.log(newArr)
}

finder('fermmanr')