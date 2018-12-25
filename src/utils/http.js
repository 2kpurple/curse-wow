import axios from 'axios'

async function get(url) {
  try {
    const resp = await axios.get(url)
    return resp.data
  } catch (e) {
    console.error(e)
  }
}

module.exports = {
  get
}
