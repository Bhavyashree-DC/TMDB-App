// handling error at globe 
export default function ({$axios}) {
    const errorHandler = (error) => {
        console.log(error)
    }

const onRequestHandler = (config) => {
    console.log(config);
     config.params = {    
        api_key: process.env.apiKey
     }
     // api keys is append with every request 
     console.log('Making Request to' + config.url);
     return config
}

$axios.onRequest(onRequestHandler)
$axios.onError(errorHandler)
$axios.setBaseURL(`${process.env.baseUrl}`) // defining BaseUrl 
}
