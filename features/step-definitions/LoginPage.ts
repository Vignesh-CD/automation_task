import { expect } from '@playwright/test';

export class LoginPage {
  constructor(private page: any) {}

  async goto() {
    await this.page.goto('https://sandbox.skillsmax.ai/');
  }

  async fillEmail(email: string) {
    await this.page.getByPlaceholder('Email').fill(email);
  }

  async fillPassword(password: string) {
    await this.page.getByPlaceholder('Password').fill(password);
  }

  async clickLogin() {
    await this.page.click('button[type="submit"]');
  }

  async expectEmailRequiredError() {
    await expect(this.page.getByText('Email is required')).toBeVisible();
  }

  async expectPasswordRequiredError() {
    await expect(this.page.getByText('Password is required.')).toBeVisible();
  }
}
