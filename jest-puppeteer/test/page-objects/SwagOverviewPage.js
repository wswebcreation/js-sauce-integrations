const BasePage = require('./BasePage');
const SELECTORS = {
    screen: '.inventory_list',
    swagItems: '.inventory_item',
}

class SwagOverviewPage extends BasePage {
    constructor() {
        super(SELECTORS.screen);
    }

    /**
     * Get the amount of swag items listed on the page
     *
     * @returns {Promise<number>}
     */
    async getAmount() {
        return (await page.$$(SELECTORS.swagItems)).length;
    }

    /**
     * Open the details of a swag
     *
     * @param {number|string} needle
     */
    async openSwagDetails(needle) {
        await (await page.$x(`//*[contains(text(),'${needle}')]/parent::a`))[0].click();
    }
}

module.exports = new SwagOverviewPage();
