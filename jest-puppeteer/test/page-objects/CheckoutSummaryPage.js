const BasePage = require('./BasePage');
const SELECTORS = {
    screen: '#checkout_summary_container',
    title: '.inventory_item_name',
    description: '.inventory_item_desc',
    price: '.inventory_item_price',
    cancelButton: '.cart_cancel_link',
    finishButton: '.cart_button',
    items: '.cart_item',
}

class CheckoutSummaryPage extends BasePage {
    constructor() {
        super(SELECTORS.screen);
    }
}

module.exports = new CheckoutSummaryPage();
