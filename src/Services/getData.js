import axios from 'axios'

const getData = async (lat, long) => {
    const URL = `https://api.weatherapi.com/v1/current.json?key=e26de611417245dfaac164812220504&q=${lat},${long}&aqi=no&lang=es`
    const req = await axios.get(URL)
    return req
}

export default getData