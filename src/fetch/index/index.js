import Vue from 'vue'

export async function getBaidu () {
  let res = await Vue.axios.post('https://api.douban.com/v2/movie/in_theaters')
  return res
}
