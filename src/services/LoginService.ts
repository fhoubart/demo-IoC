import { User } from "../entities";

export abstract class LoginService {
    public abstract login(user:string, password:string): Promise<User>;
}

export class LoginServiceImpl extends LoginService {
    public async login(user:string, password:string): Promise<User> {
        let url = "gneugneu/login"

        let userObj:User = {userId:"sdflkj"};
        // user récupéré par l'appel API
        // API.call(url)....

        return userObj;
    }
}

/**
 * Class de Mock qui permet de tester le controller sans faire d'appel API.
 * Un seul user hardcodé :
 *  - user "test@test.com"
 *  - password "password"
 */
export class LoginServiceMock extends LoginService {
    public async login(user:string, password:string): Promise<User> {
        if(user == "test@test.com" && password == "password")  {
            return {userId:"lkljlkj"};
        } else {
            throw new Error("Wrong user or password");
        }
    }
}