import { LoginContoller } from "../controllers/LoginController";
import { LoginService, LoginServiceMock } from "../services/LoginService";
import { SessionService, SessionServiceMock } from "../services/SessionService";


// Dans un framework type Angular, la création des instances
// est déléguée au framework qui gère tout seul l'arbre des dépendences
let loginService:LoginService = new LoginServiceMock();
let sessionService:SessionService = new SessionServiceMock();

// Permier test : vérifier login OK, mdp OK => le login doit être accepté
async function testLoginOK() {
    console.log("Test login OK");
    let user = "test@test.com"; // bon user
    let password = "password"; // bon password
    let controller = new LoginContoller(loginService,sessionService);
    try {
        let result = await controller.checkLogin(user,password);
        if(result) {
            // OK, tout va bien
            console.log("OK");
        } else {
            console.error("Pas bon, le login aurait du être accepté !!")
        }
    }catch(e) {
        console.error("Pas bon, le login aurait du être accepté !!");
    }
}


async function testLoginKO() {
    console.log("Test login KO");
    let user = "test@test.com"; // bon user
    let password = "mauvaisMotDePasse"; // bon password
    let controller = new LoginContoller(loginService,sessionService);
    try {
        let result = await controller.checkLogin(user,password);
        if(result) {
            // OK, tout va bien
            console.error("Pas bon, le login aurait du être rejeté");
        } else {
            console.error("Pas bon, on aurait du avoir une exception")
        }
    }catch(e) {
        console.log("OK");
    }
}


async function go() {
    await testLoginOK();
    await testLoginKO();
}

go();
