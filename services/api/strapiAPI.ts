import { IPostAPIINterface } from "@/services/interfaces/posts.interfaces";
import { apiErrorInterface } from "@/services/interfaces/error.interfaces";
// const getEnv = process.env.STRAPI_API_URL
export default class service {
  getPosts = async ():Promise<IPostAPIINterface | apiErrorInterface> => {
    try {
      const getData: { data: object[];meta: object; } = await $fetch(`http://localhost:1337/api/posts?picture`)
      return {
        data: getData.data,
        meta: getData.meta
      }
    } catch (error) {
      return {
        message: 'No data',
        data:''
      }
    }
  }
}