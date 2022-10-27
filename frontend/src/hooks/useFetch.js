import { useState, useEffect } from 'react';

const useFetch = (url) =>{
    const [data, setData] = useState(null)
    const [pending, setPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(()=>{
        setTimeout(() => { 
            fetch(url)
            .then(response=>{
                if(!response.ok){
                    throw Error('Data not found')
                }else{
                   return response.json()
                }
            })
            .then(results=>{
                setData(results);
                setPending(false);
                setError(null)
            })
            .catch(err=>{
                setPending(false);
                setError(err.message)
            })
        }, 1000);
        },[url])

  return { data, pending, error}
}

export default useFetch;