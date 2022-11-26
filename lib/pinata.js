const key = "75e4c3991f8eafefb1ef"
const secret = "d8ef38054ee1421ece765e4ac72b927d2113e5eeece7b5bab6df63f6ee2486b0"
import axios from 'axios'

export const pinJSONToIPFS = async (json) => {
    const url = `https://api.pinata.cloud/pinning/pinJSONToIPFS`
    return axios.post(url, json, {
            headers: {
                pinata_api_key: key,
                pinata_secret_api_key: secret,
            },
        }).then((response) => {
            return response.data.IpfsHash
        })
        .catch((error) => {
            console.log(error)
        })
}

export const pinFileToIPFS = async (file, pinataMetaData) => {
    const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`

    let data = new FormData()

    data.append('file', file)
    data.append('pinataMetadata', JSON.stringify(pinataMetaData))

    return axios
        .post(url, data, {
            maxBodyLength: Infinity,
            headers: {
                'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
                pinata_api_key:key,
                pinata_secret_api_key: secret,
            },
        })
        .then((response) => {
            return response.data.IpfsHash
        })
        .catch((error) => {
            console.log(error)
        })
}