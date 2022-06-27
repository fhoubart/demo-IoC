import { User } from "../entities";

export abstract class LoginService {
    public abstract login(user:string, password:string): Promise<User>;
}