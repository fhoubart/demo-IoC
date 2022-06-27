import { User } from "../entities"

export abstract class SessionService {
    public abstract saveUser(user:User): Promise<void>;
    public abstract getCurrentUser(): Promise<User|null>;
}

export class SessionServiceMock {

    private user:User|null = null;

    public async saveUser(user:User): Promise<void> {
        this.user = user;
        return;
    }

    public async getCurrentUser(): Promise<User|null> {
        return this.user;

    }
}