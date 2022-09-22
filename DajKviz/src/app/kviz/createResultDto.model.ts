import { Result } from "./result.model";

export class CreateResultDto {
    kvizId: string;
    result: Result;

    constructor(kvizId: string, result: Result) {
        this.kvizId = kvizId,
        this.result = result;
    }
}

