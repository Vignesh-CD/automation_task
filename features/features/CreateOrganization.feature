Feature: Navigate to Create Organization Page

  @CreateOrganization
Scenario: User creates organization with a random name
  Given the user is on the dashboard page
  When the user clicks on the Organization button
  Then the Create Organization form should be visible
  When the user enters a name into the Organization Name field
  When the user enters a address into the Address field
  When the user selects "India" from the country dropdown
  When the user selects "Tamil Nadu" from the state dropdown
  When the user selects "Madurai" from the city dropdown
  When the user enters a random pincode into the Pincode field
  When the user selects a random assessment type checkbox from the Assessment Type section
  When the user selects a random assessment level checkbox from the Assessment Level section
  And the user clicks on the Create Button
  Then no validation error should be shown for Organization Name
