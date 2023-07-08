export class TaskModel {
    id: string
    description: string
    isDone: boolean

    constructor(description: string, isDone: boolean) {
        this.id = `${this.getCurrentTimestamp()}`
        this.description = description
        this.isDone = isDone
    }

    getCurrentTimestamp() {
       const timestamp = new Date().getTime();
       return timestamp;
      };
}