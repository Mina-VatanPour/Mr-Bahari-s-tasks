import {useState, useEffect} from "react";
import axios from 'axios';

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {

        setIsLoading(true);
        axios.get(url)
            .then(response => {
                if (response.status !== 200) throw Error('not found item!')
                setData(response.data);
                setIsLoading(false);
            })
            .catch(err => setError(err.message))

    }, [url])

    return {data, error, isLoading}
}

export default useFetch;