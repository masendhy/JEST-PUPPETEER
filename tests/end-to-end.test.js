import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import Feedback from "../pages/Feedback";
import TopBar from "../pages/components/TopBar";
import {
    username,
    password,
    timeout
} from "../tests/config";

describe('End-To-End Test', () => {
    let homepage;
    let feedback;
    let loginpage;
    let topbar;

    beforeAll(async () => {
        jest.setTimeout(timeout);
        homepage = new HomePage();
        loginpage = new LoginPage();
        feedback = new Feedback();
        topbar = new TopBar();
    });

    it('should load homepage', async () => {
        await homepage.visit();
        await homepage.isNavbarDisplayed();
    })

    it('should submit feedback', async () => {
        await homepage.clickfeedbackLink();
        await feedback.isFeedbackFormDisplayed();
        await feedback.submitFeedback('aku', 'aku@gmail.com', 'judul', 'jajajajajajajajajajajaja');

    })

    it('should login to the application', async () => {
        await homepage.visit();
        await topbar.isTopBarDisplayed();
        await topbar.clickSignInBUtton();
        await loginpage.isLoginFormDisplayed();
        await loginpage.login(username, password);
    })

})