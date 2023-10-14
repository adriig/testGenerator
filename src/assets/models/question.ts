import { answers } from "./answers";

export interface question {
    question: string,
    answers: answers[],
    theme: string,
    page: string
}

