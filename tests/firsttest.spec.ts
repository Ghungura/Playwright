import { test, expect } from '@playwright/test';
 // or
//  const {test,expect}=require('@playwright/test');

test('Page Navigation',async ({page})=>{

await page.goto("https://google.com")
await expect(page).toHaveTitle("Google");
})