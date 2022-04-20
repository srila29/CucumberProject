package StepDef;

import java.util.List;
import java.util.Map;

import org.junit.Assert;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;


public class CalculatorSteps {
	int result=0;
	@Given("I have opened the Calculator GUI")
	public void i_have_opened_the_calculator_gui() {
	    // Write code here that turns the phrase above into concrete actions
	  System.out.println("Inside calcaulator");
	}

	@When("I add {int} and {int}")
	public void i_add_and(int num1, int num2) {
	    // Write code here that turns the phrase above into concrete actions
	   result=num1+num2;
	}

	@Then("I should get {int} as result")
	public void i_should_get_as_result(int res) {
	    // Write code here that turns the phrase above into concrete actions
    Assert.assertEquals(res, result);
	}

	@When("I sub {int} and {int}")
	public void i_sub_and(int num1, int num2) {
	    // Write code here that turns the phrase above into concrete actions
	  result=num1-num2;
	}
	@When("I add below numbers")
	public void i_add_below_numbers(io.cucumber.datatable.DataTable dataTable) {
	   int rows=dataTable.height();
	   for(int i=0;i<rows;i++)
	   {
		   result=result+Integer.parseInt(dataTable.cell(i, 0));
		   
	   }
	   
	}
	@When("I add below numbers using List")
	public void i_add_below_numbers_using_list(List<Integer> numbers) {

	   for(Integer num:numbers)
	   {
		   result=result+num;
	   }
	}
	/*@When("I order below items")
	public void i_order_below_items(io.cucumber.datatable.DataTable dataTable) {
		int rows=dataTable.height();
		   for(int i=0;i<rows;i++)
		   {
			   result=result+Integer.parseInt(dataTable.cell(i, 1));
			   
		   }
	   
	}*/
	@When("I order below items")
	public void i_order_below_items(Map<String,Integer> pricelist) {
		for(String key:pricelist.keySet())
		{
			result =result+ pricelist.get(key);
	
		}		System.out.println(result+"is the bill amount");
	}
	
	@When("I order below items on given quantities")
	public void i_order_below_items_on_given_quantities(io.cucumber.datatable.DataTable dataTable) {
		int rows=dataTable.height();
		   for(int i=0;i<rows;i++)
		   {
			   result=result+(Integer.parseInt(dataTable.cell(i, 1))*Integer.parseInt(dataTable.cell(i, 2)));
			   
		   }System.out.println(result+"is the bill amount");
	   
	}


}
