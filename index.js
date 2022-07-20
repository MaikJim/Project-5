const API = 'https://rickandmortyapi.com/api/character/';

async function getCharacter(){
    const res = await fetch(API);
    const data = await res.json();
    console.log(data);
}
async function getCharacterByName(name){
    try{
        let API_NAME = () => API + `?name=${name}`;
        const res = await fetch(API_NAME(name));
        const data = await res.json();
        console.log(data);
        document.getElementById("container-img").innerHTML = `
            <img src= ${data[0].image} >`
    }catch(err){
        console.error(err)
    }
}
getCharacter('rick')

