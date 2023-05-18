import {useState, useEffect} from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw Error('not found item!')
                }
                return res.json()
            })
            .then(data => {
                setData(data);
                setIsLoading(false);
            })
            .catch(err => setError(err.message))

    }, [url])

    return {data, error, isLoading}
}

export default useFetch;