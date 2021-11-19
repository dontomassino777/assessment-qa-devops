
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})


test('Draw button displays choices div', async () => {
    const button = await driver.findElement(By.id('draw')).click()
    const div = await driver.findElement(By.id('choices'))
    const divDisplayed = await div.isDisplayed()
    expect(divDisplayed).toBe(true)
})

test('Add to Duo button displays players div', async () => {
    const duobutton = await driver.findElement(By.xpath("//*[contains(text(), 'add')]")).click()
    const playersDiv = await driver.findElement(By.id('player-id'))
    const playersDivDisplayed = await playersDiv.isDisplayed()
    expect(playersDivDisplayed).toBe(true)
})
