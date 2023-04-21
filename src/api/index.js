import axios from "axios";

const URl = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';


const options = {
    params: {
      bl_latitude: '11.847676',
      tr_latitude: '12.838442',
      bl_longitude: '109.095887',
      tr_longitude: '109.149359',
    },
    headers: {
      'X-RapidAPI-Key': '0feb891960msh3fc780a6e48a31cp1df802jsn0b5707269d84',
      'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
    }
  };
  

export const getPlacesData = async () => {
    try {
        const {data: {data}}= await axios.get(URl, options);
        return data;

    } catch(error){
        console.log(error)

    }
}