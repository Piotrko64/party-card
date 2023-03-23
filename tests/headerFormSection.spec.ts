import { test, expect } from "@playwright/test";

test.describe("checking header form section", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("/");
        await page.getByRole("button", { name: "EN" }).click();
        await page.getByRole("link", { name: "Create new card" }).click();
    });

    test("should change name and font", async ({ page }) => {
        const newName = "Adam";
        const expectedFontFamily = "Jost, sans-serif";

        await page.getByRole("button", { name: "Next" }).click();
        await page.getByRole("button", { name: "Skip" }).click();
        await page.getByPlaceholder("Name").click();
        await page.getByPlaceholder("Name").fill(newName);
        await page.getByText("Jost").first().click();
        await page.locator("._colors_c9ras_1 > div:nth-child(2)").first().click();
        await page.getByRole("link", { name: "View preview" }).click();
        const fontName = await page.getByText("Adam").evaluate((btn) => {
            return window.getComputedStyle(btn).getPropertyValue("font-family");
        });

        expect(fontName).toBe(expectedFontFamily);
        expect(page.getByText(newName)).toHaveText(newName);
    });

    test("should add stroke", async ({ page }) => {
        const defaultName = "Peter";

        await page.getByRole("button", { name: "Skip" }).click();
        await page.locator("div.grayBlock").first().getByRole("checkbox").click({ force: true });
        await page.getByRole("link", { name: "View preview" }).click();
        const isStrokeValue = await page.getByText(defaultName).evaluate((btn) => {
            return Boolean(window.getComputedStyle(btn).getPropertyValue("stroke-width"));
        });

        expect(isStrokeValue).toBe(true);
    });

    test.only("supriseCard should have text - 'suprise'", async ({ page }) => {
        const expectedText = "suprise";

        await page.getByRole("button", { name: "Skip" }).click();
        await page.getByTestId("supriseCard").locator("input").click({ force: true });
        await page.getByPlaceholder("Write something to Suprise Card").click();
        await page.getByPlaceholder("Write something to Suprise Card").fill("suprise");
        await page.getByRole("link", { name: "View preview" }).click();
        await page.getByRole("button", { name: "Click here" }).click();

        expect(page.getByText(expectedText)).toBeInViewport();
    });
});
