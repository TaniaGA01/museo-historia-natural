import { IPostAPIINterface } from "@/services/interfaces/posts.interfaces";
import { apiErrorInterface } from "@/services/interfaces/error.interfaces";

export default class service {
  getPosts = async ():Promise< IPostAPIINterface | apiErrorInterface> => {
    try {
      const data:any = await $fetch(`http://localhost:1337/api/posts?picture`)
      return data
    } catch (error) {
      return {
        message: 'No data',
      }
    }
  }
}