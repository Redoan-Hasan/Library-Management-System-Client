export interface IBook {
    title: string;
    id?:string;
    author : string;
    genre: "FICTION" | "NON_FICTION" | "SCIENCE" | "HISTORY" | "BIOGRAPHY" | "FANTASY";
    isbn: string;
    description: string;
    copies: number;
    available: boolean;
} 

export type responseBookDataType = IBook & {
    _id: string
} 