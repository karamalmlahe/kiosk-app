export const GET_STORES='GET_STORES';

//url
const baseUrl='http://localhost:5090/api/';

export const get_stores_dispatch=(data)=>{
    return dispatch=>{
        dispatch({type:GET_STORES,data});
    }
}

export const get_stores_action=()=>{
    return async (dispatch)=>{

        const response=await fetch(baseUrl+'store/getGeneralData',{
            method:'get',

        });
        const data= await response.json();
        if(data.status){
            dispatch(get_stores_dispatch(data));
        }
        else{
            let message=data.message;
            throw new Error(message);
        }
        

    }
}