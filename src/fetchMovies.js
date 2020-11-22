import axios from 'axios';



 function fetchMovies(){
    let info = []; 
   return Promise.all([
        axios.get(`https://api.themoviedb.org/3/movie/550?api_key=${process.env.REACT_APP_API_KEY}`)
        .then((res)=>{
            
            info.push(res.data);
        })
        .catch(()=>{})
        ,
        axios.get(`https://api.themoviedb.org/3/movie/552?api_key=${process.env.REACT_APP_API_KEY}`)
        .then((res)=>{
            
            info.push(res.data);
        })
        .catch(()=>{})
        ,
        axios.get(`https://api.themoviedb.org/3/movie/337401?api_key=${process.env.REACT_APP_API_KEY}`)
         .then((res)=>{
          
             info.push(res.data);
        })
        .catch(()=>{})
    ])
    .then(()=>{
        return Promise.resolve(info);
    })
    
}
export default fetchMovies;