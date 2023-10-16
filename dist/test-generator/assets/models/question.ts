import { Answers } from "./answers";

export interface Question {
    statement: string,
    answers: Answers[],
    theme: string,
    page: string
}

