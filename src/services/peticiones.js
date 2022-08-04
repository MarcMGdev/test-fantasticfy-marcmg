const API_RACES_URL = "https://dog.ceo/api/breeds/list/all";
export async function getAllRaces(){
try {  
    const response = await fetch (`${API_RACES_URL}`);
    const data = await response.json();

    const keys =Object.keys(data.message)
    return keys;
    }   catch(error){
            console.error(error);
    }
}

export async function getAllImages(key){
    try {  
        const response = await fetch (`https://dog.ceo/api/breed/${key}/images`);
        const data = await response.json();
        const keys = Object.values(data.message)
        return keys;
        }   catch(error){
            
                console.error(error);
        }
}
