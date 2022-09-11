import { Answer } from "./answer.model";

export class QA {
    constructor(public question: string, correctAnswer: Number, public answers: string[]) {}
}
