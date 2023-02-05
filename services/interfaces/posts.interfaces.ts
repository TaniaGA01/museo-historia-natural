export interface IPost{
    title: string,
    content: string,
    slug: string,
    createdAt: string,
    updatedAt: string,
    publishedAt: string,
    picture:object
}
export interface IPostAPIINterface {
    data: object[],
    meta: object
}