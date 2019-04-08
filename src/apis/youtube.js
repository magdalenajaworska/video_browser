import axios from "axios";

const KEY = "AIzaSyCxnEDf3fQHhLBYaRIRKLIemp_H_aQ1yiw";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 5,
        key: KEY
    }    
});