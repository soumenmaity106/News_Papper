const URL = 'http://localhost:3001'

export function latestNews() {
    const request = fetch(`${URL}/articles?_order=desc&_end=3`, { method: 'GET' })
        .then(response => response.json())

    return {
        type: 'GET_LATEXT',
        payload: request
    }
}

export function otherNews() {
    const request = fetch(`${URL}/articles?_order=desc&_start=3&_end=10`, { method: 'GET'})
                  .then(response => response.json());
    return {
        type: 'GET_OTHER',
        payload: request
    }
}

export function latestGallery(){
   const request = fetch(`${URL}/galleries?_order=desc&_limit=2`,{ method: 'GET' })
   .then(response => response.json());
    return {
        type: 'GET_GALLERY',
        payload: request
    }
}

/////////////////////

export function selectedNews(id){
    const request = fetch(`${URL}/articles?id=${id}`,{method:'GET'})
    .then(response => response.json())
    return{
        type: 'GET_SELETED_NEWS',
        payload: request
    }
}

export function cleareSeletedNews(){
    return{
        type: 'CLEAR_SELETED_NEWS',
        payload:[]
    }

}
//////////////////////////

export function selectedGallery(id){
    const request = fetch(`${URL}/galleries?id=${id}`,{method:'GET'})
    .then(response=> response.json())
    return{
        type:'GET_SELETED_GALLERY',
        payload:request
    }
}

export function clearSelelectedGallery(){
    return {
        type:'CLEAR_SELETED_GALLERY',
        payload:[]
    }
}
