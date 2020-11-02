import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import FeedbackPage from '../pages/Feedback'
import TopBar from '../pages/components/TopBar';



describe('Example', () => {
    let homepage;
    let feedbackPage;
    let loginpage;
    let topBar;


    beforeAll(async () => {
        jest.setTimeout(15000);
        homepage = new HomePage();
        feedbackPage = new FeedbackPage();
        topBar = new TopBar();
        loginpage = new LoginPage();

    })
    it('homepage should work', async () => {
        await homepage.visit();
    })

    it('navbar should be displayed', async () => {
        await homepage.isNavbarDisplayed();
        await topBar.isTopBarDisplayed();
    })

    // it('try to login', async () => {
    //     await loginpage.visit();
    //     await loginpage.isLoginFormDisplayed();
    //     await loginpage.login('username', 'password');
    //     await loginpage.wait(5000);
    // })

    it('feedback should work', async () => {
        await feedbackPage.visit();
        await feedbackPage.isFeedbackFormDisplayed();
        await feedbackPage.submitFeedback("aku", "aku@gmail.com", "judul", "halooo");
        await feedbackPage.wait(5000);
    })

    it('should login to the application', async () => {
        await homepage.visit();
        await topBar.isTopBarDisplayed();
        await topBar.clickSignInBUtton();
        await loginpage.isLoginFormDisplayed();
        await loginpage.login('username', 'password');
    })



})