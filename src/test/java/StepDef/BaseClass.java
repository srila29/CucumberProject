package StepDef;

import java.lang.reflect.Method;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.After;
import io.cucumber.java.Before;

public class BaseClass {
	
	public static WebDriver driver;
	@Before
	public void SetUp()
	{
		
		System.setProperty("webdriver.chrome.driver", "chromedriver.exe");//Register the driver - step 1 - Chrome browser

		 driver=new ChromeDriver();
		
		
		driver.manage().window().maximize();//Maximise the chrome window
		driver.manage().timeouts().implicitlyWait(5,TimeUnit.SECONDS); // if network is slow, the screen will wait for 5 sec

	}
	@After
	public void TearDown() {
		driver.close();
		
	}

}
