$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/Features/Calculator.feature");
formatter.feature({
  "name": "This feature would be creating a calculator for Add and Subtract",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "To Sub",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Rapid"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have opened the Calculator GUI",
  "keyword": "Given "
});
formatter.match({
  "location": "CalculatorSteps.i_have_opened_the_calculator_gui()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I sub 9 and 5",
  "keyword": "When "
});
formatter.match({
  "location": "CalculatorSteps.i_sub_and(int,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get 4 as result",
  "keyword": "Then "
});
formatter.match({
  "location": "CalculatorSteps.i_should_get_as_result(int)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To add multiple numbers using list",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have opened the Calculator GUI",
  "keyword": "Given "
});
formatter.match({
  "location": "CalculatorSteps.i_have_opened_the_calculator_gui()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I add below numbers using List",
  "rows": [
    {
      "cells": [
        "4"
      ]
    },
    {
      "cells": [
        "5"
      ]
    },
    {
      "cells": [
        "7"
      ]
    },
    {
      "cells": [
        "8"
      ]
    },
    {
      "cells": [
        "10"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "CalculatorSteps.i_add_below_numbers_using_list(Integer\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get 34 as result",
  "keyword": "Then "
});
formatter.match({
  "location": "CalculatorSteps.i_should_get_as_result(int)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To calculate the total bill of the order based on quantity",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have opened the Calculator GUI",
  "keyword": "Given "
});
formatter.match({
  "location": "CalculatorSteps.i_have_opened_the_calculator_gui()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I order below items on given quantities",
  "rows": [
    {
      "cells": [
        "coffee",
        "1",
        "20"
      ]
    },
    {
      "cells": [
        "tea",
        "2",
        "15"
      ]
    },
    {
      "cells": [
        "burger",
        "3",
        "25"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "CalculatorSteps.i_order_below_items_on_given_quantities(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get 125 as result",
  "keyword": "Then "
});
formatter.match({
  "location": "CalculatorSteps.i_should_get_as_result(int)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/java/Features/Login.feature");
formatter.feature({
  "name": "This feature is used to design the login page of the application",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "Open the application",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have opened the application in web browser",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.i_have_opened_the_application_in_web_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the successful login with test data",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "I click on the login link",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.i_click_on_the_login_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the username \"xyz@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_enter_the_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the password \"Xyz@123\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_enter_the_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on the login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.click_on_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be landed on the welcome page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.i_should_be_landed_on_the_welcome_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Open the application",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have opened the application in web browser",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.i_have_opened_the_application_in_web_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the Negative login with test data",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "I click on the login link",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.i_click_on_the_login_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the username \"test@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_enter_the_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the password \"Test1234\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_enter_the_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on the login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.click_on_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get the error message \"The email or password you have entered is invalid.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.i_should_get_the_error_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});