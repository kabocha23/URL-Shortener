import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (apiUrl) => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);

        axios.get(apiUrl).then((response) => {
            setData(response.data)
        }).catch((err) => {
            setError(err);
        }).finally(() => {
            setLoading(false);
        })
    }, [apiUrl]);

    return { data, loading, error };
};

export default useFetch;