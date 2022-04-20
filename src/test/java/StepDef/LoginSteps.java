package StepDef;


import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;


import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class LoginSteps  {
  WebDriver driver=BaseClass.driver;
	@FindBy(linkText="Log in")
	WebElement LoginLink;
	@FindBy(name="user_login")
	WebElement UserName;
	
	@FindBy(id="password")
	WebElement Password;

	@FindBy(name="btn_login")
	WebElement LoginButton;
	public LoginSteps()
	{
		PageFactory.initElements(driver, this);
	}

@Given("I have opened the application in web browser")
public void i_have_opened_the_application_in_web_browser() throws InterruptedException {
	driver.get("https://www.simplilearn.com/");
	Thread.sleep(5000);
}

@When("I click on the login link")
public void i_click_on_the_login_link() {
	WebDriverWait wait=new WebDriverWait(driver, 50);
	wait.until(ExpectedConditions.elementToBeClickable(LoginLink));	
	LoginLink.click();
}

@When("I enter the username")
public void i_enter_the_username() {
	UserName.sendKeys("abc@gmail.com");
}

@When("I enter the password")
public void i_enter_the_password() {
	Password.sendKeys("abc1234");
}

@When("click on the login button")
public void click_on_the_login_button() {
	LoginButton.click();
}

@Then("I should be landed on the welcome page")
public void i_should_be_landed_on_the_welcome_page() {
    System.out.println("Inside the homepage");
}

@When("I enter the username {string}")
public void i_enter_the_username(String Uname) {
	UserName.sendKeys(Uname);
}

@When("I enter the password {string}")
public void i_enter_the_password(String Pword) {
	Password.sendKeys(Pword);
}
@Then("I should get the error message {string}")
public void i_should_get_the_error_message(String ExpMsg) {
	
	WebDriverWait wait=new WebDriverWait(driver, 50);
	wait.until(ExpectedConditions.presenceOfElementLocated(By.id("msg_box")));	
	WebElement ErrorMsg=driver.findElement(By.id("msg_box")); 
	String ActualMsg=ErrorMsg.getText();
	Assert.assertEquals(ActualMsg, ExpMsg);
	
	
	
}

}