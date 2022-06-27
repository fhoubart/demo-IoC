import { LoginContoller } from "../controllers/LoginController";

// Permier test : vérifier login OK, mdp OK => le login doit être accepté
let user = "test@test.com";
let password = "password";
let controller = new LoginContoller();
controller.checkLogin(user,password);
//TODO ???