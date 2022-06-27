import { Task } from "../entities";

export abstract class TaskService {
    public abstract createTask(title:void,description:void): Promise<void>;
    public abstract getTasks(userId:string): Promise<Task[]>;
    public abstract close(task:Task): Promise<void>;
}