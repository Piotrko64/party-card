import { test } from "@playwright/test";

test("should contain english describe", async ({ page }) => {
    await page.goto("https://party-card.vercel.app/");
    await page.getByRole("button", { name: "EN" }).click();
    page.getByText("Be original when it comes to greetings. Create an online greeting card for your ");
});
