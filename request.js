const getPuzzle = (wordCount) => {
    return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`, {}).then((response) => {
        if(response.status === 200){
            return response.json();
        }
        else{
            throw new Error('An error occurred while fetching the puzzle');
        }
    }).then((data) => {
        return data.puzzle;
    }).catch((error) => {
        console.log(`Error: ${error}`);
    });
}


/*
new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', (e) => {
        if(e.target.readyState === 4 && e.target.status === 200){
            const data = JSON.parse(e.target.responseText);
            resolve(data.puzzle);
        }
        else if(e.target.readyState === 4){
            console.log(e.target.status);
            reject('Error with a code');
        }        
    });
    request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
    request.send();
})
*/
