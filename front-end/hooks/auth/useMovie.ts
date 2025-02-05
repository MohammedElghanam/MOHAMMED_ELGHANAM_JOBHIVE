
const useMovie = () => {
    const { data, error } = useSWR('/api/movie', fetcher);
    
    return {
        movie: data,
        isLoading: !error && !data,
        isError: error,
    };
}