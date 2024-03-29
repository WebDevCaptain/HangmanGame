const getPuzzle = async (wordCount) => {
    const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`, {});
    if(response.status === 200){
        const data = await response.json();
        return data.puzzle;
    }
    else{
        throw new Error('An error occurred while fetching the puzzle');
    }
}

export { getPuzzle as default }
