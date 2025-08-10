Feature: Navigate to Create Organization Page

  @CreateOrganization
  Scenario: User logs in and navigates to Create Organization
    Given the user is on the dashboard page
    When the user clicks on the Organization button
    Then the Create Organization form should be visible
  @CreateOrganization
  Scenario: User creates organization with a random name
    Given the user is on the dashboard page
    When the user clicks on the Organization button
    Then the Create Organization form should be visible
    When the user enters a name into the Organization Name field
    And the user clicks on the Create Button
    Then no validation error should be shown for Organization Name
