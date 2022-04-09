import axios from 'axios'

const getData = async (lat, long) => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=aa2a13a9fedde893c962bf2ad2e15882&units=metric&lang=es`
    const req = await axios.get(URL)
    return req
}

export default getData