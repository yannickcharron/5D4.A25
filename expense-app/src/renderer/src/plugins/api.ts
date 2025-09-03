import axios from 'axios'
import type { App } from 'vue'

interface AxiosOptions {
  key: string
  baseURL?: string
}

export default {
  install: (app: App, options: AxiosOptions) => {
    const axiosInstance = axios.create({
      baseURL: options.baseURL
    })
    app.provide(options.key, axiosInstance)
  }
}
