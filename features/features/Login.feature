Feature: login page Functionality
  @Login
  Scenario: Login without entering email and password
    Given the user is on the login page
    When the user clicks on the login button without entering email and password
    Then an error message should be display

  Scenario: Login with only email entered
    Given the user is on the login page 
    When the user enters a valid email 
    And clicks on the login button
    Then an error message should be displayed for missing password

  Scenario: Successful login with valid credentials
    Given the user is on the login page 
    When the user enters a valid email and password
    And click on the login button
    Then the user should be redirected to the dashboard

