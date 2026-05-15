import { test, expect } from '@playwright/test';

const TARGET_URL = 'https://www.electroref.com/';

test.describe('Electroref Engineers - Critical Business Flow Tests', () => {

  test('Homepage loads correctly and displays company identity', async ({ page }) => {
    // 1. Navigate to the homepage
    await page.goto(TARGET_URL);
    
    // 2. Ensure the page title loads and contains their name
    await expect(page).toHaveTitle(/ElectroRef/i);
    
    // 3. Verify the main site wrapper or body didn't crash
    const body = page.locator('body');
    await expect(body).toBeVisible();
  });

  test('Main navigation allows users to view the About Us page', async ({ page }) => {
    await page.goto(TARGET_URL);
    
    // Target the "About Us" link in the main navigation menu
    const aboutLink = page.locator('a', { hasText: 'About Us' }).first();
    await expect(aboutLink).toBeVisible();
    
    // Click it and verify the URL updates correctly
    await aboutLink.click();
    await expect(page).toHaveURL(/.*about-us/);
    
    // Verify the page content mentions their establishment year (1981)
    const pageText = await page.locator('body').innerText();
    expect(pageText).toContain('1981'); 
  });

  test('Engineering Services page is accessible', async ({ page }) => {
    // It's critical that potential clients can see what they actually do
    await page.goto(TARGET_URL);
    
    // Look for links related to their engineering or fabrication services
    const servicesLink = page.locator('a', { hasText: /Engineering|Fabrication/i }).first();
    
    // If the link is hidden inside a dropdown, we force the click
    await servicesLink.click({ force: true });
    
    // Ensure the resulting page mentions key services like Air Conditioning or Chillers
    const content = await page.locator('body').innerText();
    expect(content).toMatch(/Air conditioning|Refrigeration|Fabrication/i);
  });

  test('Critical contact information (Borella HQ) is visible', async ({ page }) => {
    // If a client needs an HVAC repair, they need the phone number immediately
    await page.goto(TARGET_URL);
    
    const pageText = await page.locator('body').innerText();
    
    // Verify their main landline (011 267 7335) or a variation of it is present
    const hasPhone = pageText.includes('011') && pageText.includes('677335');
    
    // Verify their support email is visible
    const hasEmail = pageText.includes('info@electroref.com') || pageText.includes('upul@electroref.com');
    
    expect(hasPhone).toBeTruthy();
    expect(hasEmail).toBeTruthy();
  });

  test('Contact Us page contains the necessary form fields', async ({ page }) => {
    // Navigate directly to the contact page
    await page.goto(`${TARGET_URL}contact-us/`);
    
    // Ensure the page actually says "Contact Us" or "Send us a message"
    const heading = page.locator('body');
    await expect(heading).toContainText(/message|contact/i);
    
    // Look for standard form fields (they likely use Contact Form 7 or similar)
    // We count the input fields to ensure the form actually rendered
    const inputCount = await page.locator('input[type="text"], input[type="email"], textarea').count();
    
    // There should be at least a Name, Email, and Message box (3+ fields)
    expect(inputCount).toBeGreaterThanOrEqual(3);
  });

});