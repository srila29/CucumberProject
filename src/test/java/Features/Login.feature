Feature: This feature is used to design the login page of the application

  Background: Open the application
    Given I have opened the application in web browser

  Scenario: Validate the successful login
    When I click on the login link
    And I enter the username
    And I enter the password
    And click on the login button
    Then I should be landed on the welcome page
 @Sanity
  Scenario: Validate the successful login with test data
    When I click on the login link
    And I enter the username "xyz@gmail.com"
    And I enter the password "Xyz@123"
    And click on the login button
    Then I should be landed on the welcome page

  Scenario Outline: Validate the successful login with multiple test data
    When I click on the login link
    And I enter the username "<Uname>"
    And I enter the password "<Pword>"
    And click on the login button
    Then I should be landed on the welcome page

    Examples: 
      | Uname      | Pword   |
      | abc@gm.com | Abc@123 |
      | sri@gm.com | Sri@123 |
 @Sanity
  Scenario: Validate the Negative login with test data
    When I click on the login link
    And I enter the username "test@gmail.com"
    And I enter the password "Test1234"
    And click on the login button
    Then I should get the error message "The email or password you have entered is invalid."
