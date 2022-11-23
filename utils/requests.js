const API_KEY=process.env.API_KEY
export default{
    fetchTrending:{
        title:"Trending",
        url:`/trending/all/week?week?api_key=${API_KEY}&language=en-US`
    },
    fetchTopRated:{
        title:"Top Rated",
        url:`/movie/top_rated?api_key=${API_KEY}&language=en-US`
    },
    fetchActionMovies:{
        title:"Action",
        url:`/discover/movie?api_key=${API_KEY}&with-genres=28`
    },
    fetchComedyMovies:{
        title:"Comedy",
        url:`/discover/movie?week?api_key=${API_KEY}&with-genres=35`
    },
    fetchHorrorMovies:{
        title:"Horror",
        url:`/discover/movie?week?api_key=${API_KEY}&with-genres=27`
    },
    fetchRomanceMovies:{
        title:"Romance",
        url:`/discover/movie?week?api_key=${API_KEY}&with-genres=10749`
    },
    fetchMysteryMovies:{
        title:"Mystery",
        url:`/discover/movie?week?api_key=${API_KEY}&with-genres=9648`
    },
    fetchSciFiMovies:{
        title:"SciFi",
        url:`/discover/movie?week?api_key=${API_KEY}&with-genres=878`
    },
    fetchWesternMovies:{
        title:"Western",
        url:`/discover/movie?week?api_key=${API_KEY}&with-genres=37`
    },
    fetchAnimationMovies:{
        title:"Animation",
        url:`/trending/all/week?week?api_key=${API_KEY}&language=en-US`
    },
    fetchTVMovies:{
        title:"TV Movie",
        url:`/trending/all/week?week?api_key=${API_KEY}&language=en-US`
    },
}