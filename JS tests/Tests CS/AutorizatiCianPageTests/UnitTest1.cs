using NUnit.Framework;
using OpenQA.Selenium;
using System.Threading;

namespace AutorizationCianPageTests
{
    public class Tests
    {
        private IWebDriver driver;
        //sign in button on the site
        private readonly By _signInButton = By.XPath("//span[text()='Вход и регистрация']");
        //field for login input
        private readonly By _loginInputButton = By.XPath("//input[@name='username']");
        //button which clicking after login inputed by user
        private readonly By _continueButton = By.XPath("//button[@data-mark='ContinueAuthBtn']");
        //field for password input
        private readonly By _passwordInputButton = By.XPath("//input[@name='password']");
        private readonly By _enterButton = By.XPath("//button[@data-mark='ContinueAuthBtn']");
        private readonly By _userLogin = By.XPath("//span[@class='c-header-user-login-full']");

        //const name of login for _loginInputButton
        private const string _login = "vad4807@gmail.com";
        //const password for _passwordInputButton
        private const string _password = "qwerty654321";
        //const expected login 
        private const string _expectedLogin = "2222222";

        [SetUp]
        public void Setup()
        {
            //to work with web browser
            driver = new OpenQA.Selenium.Chrome.ChromeDriver();
            //open web site by this url
            driver.Navigate().GoToUrl("https://cian.ru");
            //to make opened window maximized
            driver.Manage().Window.Maximize();
        }

        [Test]
        public void Test1()
        {
            //testing of login button
            var signIn = driver.FindElement(_signInButton);
            signIn.Click();

            //testing of login input button
            var login = driver.FindElement(_loginInputButton);
            login.SendKeys(_login);

            var continueLogin = driver.FindElement(_continueButton);
            continueLogin.Click();

            Thread.Sleep(500);
            var password = driver.FindElement(_passwordInputButton);
            password.SendKeys(_password);

            var enter = driver.FindElement(_enterButton);
            enter.Click();

            var actualLogin = driver.FindElement(_userLogin).Text;

            Thread.Sleep(500);
            Assert.AreEqual(_expectedLogin, actualLogin, "wrong login, sorry");
        }

        [TearDown]
        public void TearDown()
        {
            //to close window
            driver.Quit();
        }
    }
}