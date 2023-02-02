const APIKey='0bb6974d6dd45ed43c3a86ebbdf7a08c'

const requests={
    fetchTrending:`/trending/all/week?api_key=${APIKey}&language=en-US`,
    fetchNetflixOrignals:`/discover/tv?api_key=${APIKey}&language=en-US&region=US&sort_by=release_date.asc&networks=Netflix&release_date.gte=2017-05-01`,
    fetchAction:`/discover/movie?api_key=${APIKey}&language=en-US&sort_by=release_date.desc&page=1&with_genres=37,53`  ,
    fetchComedy:`/discover/movie?api_key=${APIKey}&language=en-US&sort_by=release_date.desc&page=1&with_genres=35,27 `,
    fetchWar:`/discover/movie?api_key=${APIKey}&language=en-US&sort_by=release_date.desc&page=1&with_genres=10752`
}

export default requests;
