Feature: This feature would be creating a calculator for Add and Subtract

  Scenario: To Add
    Given I have opened the Calculator GUI
    When I add 9 and 5
    Then I should get 14 as result

  @Regression @Rapid
  Scenario: To Sub
    Given I have opened the Calculator GUI
    When I sub 9 and 5
    Then I should get 4 as result

  Scenario Outline: To Add multiple numbers
    Given I have opened the Calculator GUI
    When I add <num1> and <num2>
    Then I should get <res> as result

    Examples: 
      | num1 | num2 | res |
      |    5 |    5 |  10 |
      |    6 |    1 |   7 |
      |    7 |    4 |  11 |

  Scenario Outline: To Sub multiple numbers
    Given I have opened the Calculator GUI
    When I sub <num1> and <num2>
    Then I should get <res> as result

    Examples: 
      | num1 | num2 | res |
      |    5 |    5 |   0 |
      |    6 |    1 |   5 |
      |    7 |    4 |   3 |

  Scenario: To add multiple numbers using cucumber data table
    Given I have opened the Calculator GUI
    When I add below numbers
      | 4 |
      | 5 |
      | 7 |
      | 8 |
    Then I should get 24 as result

  @Sanity
  Scenario: To add multiple numbers using list
    Given I have opened the Calculator GUI
    When I add below numbers using List
      |  4 |
      |  5 |
      |  7 |
      |  8 |
      | 10 |
    Then I should get 34 as result

  Scenario: To calculate the total bill of the order
    Given I have opened the Calculator GUI
    When I order below items
      | coffee | 40 |
      | tea    | 27 |
    Then I should get 67 as result

  @Regression
  Scenario: To calculate the total bill of the order based on quantity
    Given I have opened the Calculator GUI
    When I order below items on given quantities
      | coffee | 1 | 20 |
      | tea    | 2 | 15 |
      | burger | 3 | 25 |
    Then I should get 125 as result
