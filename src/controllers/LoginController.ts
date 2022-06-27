import { User } from "../entities";
import { LoginService } from "../services/LoginService";
import { SessionService } from "../services/SessionService";

export class LoginContoller {

    public async checkLogin(user:string, password: string):Promise<void> {
        let loginService:LoginService = ????;
        let sessionService:SessionService = ???;

        let userObject:User = await loginService.login(user,password);
        await sessionService.saveUser(userObject);

        // Redirection de la page

    }
}
