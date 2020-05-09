const BasePage = require('./BasePage');
const SELECTORS = {
    screen: '.inventory_details',
    title: '.inventory_details_name',
    description: '.inventory_details_name',
    price: '.inventory_details_price',
    addButton:'.btn_primary.btn_inventory',
    removeButton:'.btn_secondary.btn_inventory',
    goBackButton:'.inventory_details_back_button',
}

class SwagOverviewPage extends BasePage {
    constructor() {
        super(SELECTORS.screen);
    }

    /**
     * Get the text of the swag
     *
     * @return {Promise<string>}
     */
    async getSwagDetailsText() {
        return `${await this.getText(SELECTORS.title)} ${await this.getText(SELECTORS.description)} ${await this.getText(SELECTORS.price)}`;
    }
}

module.exports = new SwagOverviewPage();
