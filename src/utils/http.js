import axios from 'axios'

async function get(url, params) {
  if (typeof params !== 'object') {
    params = {}
  }
  try {
    const resp = await axios.get(url, { params })
    return resp.data
  } catch (e) {
    console.error(e)
    return ''
  }
}

export default {
  get
}
