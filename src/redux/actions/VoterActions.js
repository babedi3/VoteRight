import axios from 'axios';

const url = 'https://randomuser.me/api/'
export const onVoterLogin = ({ email, password }) => {
    return async (dispatch) => {
    try {
        const response = await axios.post (
            url, {email, password}
        );
        dispatch ({ 
                   type:"LOGIN" ,
                   payload: response.data
                   })
        
                }
    catch (error) {
            dispatch({
            type: "ERROR",
            payload: error
        })
        }
    }
    
}

export const onFetchVoters = () => {
    return async dispatch => {
    try {
        const response = {
          data: [
              {name: "David", role: "Full Stack"},
              {name: "Rivethy", role: "Full Stack"},
              {name: "Brian", role: "Full Stack"},
              {name: "Francis", role: "Full Stack"}
          ]
        }
    dispatch ({
        type: "FETCH_VOTERS",
        payload: response.data
    })    
   // console.log(response.data)
}
    catch (error) {
        dispatch ({
            type: "ERROR",
            payload: error
        })
    }
}
}

const senateUrl = "https://api.propublica.org/congress/v1/116/senate/members.json"
export const onFetchSenate = () => {
    return async (dispatch) => {
        return await axios.get (senateUrl,
            {
                headers: {
                    "X-API-Key": "tEst2appJ7QTtNdPHTKr9sYr4gmcqq0Keop8H4sz"
                }
            }
            )
        .then(response => {response;
            dispatch ({
                type:"FETCH_SENATORS",
                payload: response.data
            })
            }
               )
        
        .catch (error => { error;
            dispatch ({
                type: "ERROR",
                payload: error
            })
        }
        )}
        
}