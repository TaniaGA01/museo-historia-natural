export interface IPost{
    title: string,
    content: string,
    slug: string,
    createdAt: string,
    updatedAt: string,
    publishedAt: string,
    picture:unknown
}
export interface IPostAPIINterface {
    data: object;
}