import { User } from "../entities";
import { LoginService } from "../services/LoginService";
import { SessionService } from "../services/SessionService";

export class LoginContoller {

    constructor(
        private loginService: LoginService,
        private sessionService: SessionService){}

    public async checkLogin(user:string, password: string):Promise<boolean> {
        let userObject:User = await this.loginService.login(user,password);
        await this.sessionService.saveUser(userObject);

        // Redirection de la page
        //window.location = "https://....";
        return true;
    }
}
