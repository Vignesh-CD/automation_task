# Test Automation Overview

This repository contains automated tests for the Login and Create Organization features using Cucumber and Playwright.

---

## Features Covered

### 1. Login Page Functionality

- **@Login**

| Scenario                                   | Description                                         |
|--------------------------------------------|-----------------------------------------------------|
| Login without entering email and password | Verify error message when no credentials provided   |
| Login with only email entered               | Verify error message for missing password           |
| Successful login with valid credentials     | Verify user can login and is redirected to dashboard|

---

### 2. Create Organization Page

- **@CreateOrganization**

| Scenario                                   | Description                                          |
|--------------------------------------------|------------------------------------------------------|
| User creates organization with a random name | Create org with random data, select dropdowns, checkboxes, and verify no validation error |

---

## Gherkin Scenarios Summary

### Login Feature

```gherkin
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
```

### CreateOrganization Feature

```Feature: Navigate to Create Organization Page

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

  ```
# Playwright Testing Setup

This project uses [Playwright](https://playwright.dev/) for browser automation and testing.

## Prerequisites

- Node.js (v14 or newer)
- npm (comes with Node.js)

## Installation

Initialize the project (if needed):

```bash
npm init -y
npm install -D @playwright/test
npx playwright install
```
### Add a test script to package.json

    "scripts": {
    "test": "playwright test"
    }

### Run the test

    npm test
