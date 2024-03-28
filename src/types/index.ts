import { ChangeEvent, MouseEventHandler } from 'react';

export interface InputProps {
    type: string;
    placeholder?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void ;
    value: string;
}
export interface PostProps {
    posts: {
        id: number;
        title: string;
        body: string;
        likes: number;
        dislikes: number;
        isLiked: boolean;
        isDisliked: boolean;
    }[]
}
export interface ReactionsProps {
    id?: number,
    likes?: number, 
    dislikes?: number, 
    isDisLiked?: boolean, 
    isLiked?: boolean
}

export interface ButtonProps {
    title: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
}
export interface PostItem {
    id: number;
    title: string;
    body: string;
    likes: number;
    dislikes: number;
    isLiked: boolean,
    isDisliked: boolean,
}