export const firstLoad = async() => {
     try {
       const data = await axios.get('');
       console.log(data);
       if (data.status === 200) {
         dispatch({ type: "FetchSuccess", payload: data.data.hits });
       } else {
         throw new Error("");
       }
     } catch (error) {
       console.log(error.response.data);
       dispatch({ type: "FetchFail" });
     }
}