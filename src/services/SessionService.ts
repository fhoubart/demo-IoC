import { User } from "../entities"

export abstract class SessionService {
    public abstract saveUser(user:User): Promise<void>;
    public abstract getCurrentUser(): Promise<User>;
}