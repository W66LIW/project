export interface ITodo {
    name: string,
    id: string,
    completed: boolean
}

export interface INews {
    author: string;
    id: number;
    image: string;
    language: string;
    sentiment: number;
    source_country: string;
    summary: string;
    text: string;
    title: string;
    url: string
}

export interface IBooksProps {
    value: string
}
