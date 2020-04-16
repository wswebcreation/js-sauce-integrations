import {Selector as $, t} from 'testcafe';
import BasePage from "./BasePage";

class SwagOverviewPage extends BasePage {
    constructor() {
        const screen = $('.inventory_list');

        super(screen);

        this.screen = screen;
        this.swagItems = $('.inventory_item');
    }

    /**
     * Get a swag item
     *
     * @param {number|string} needle
     *
     * @returns {Selector}
     */
    getSwagItem(needle){
        if (typeof needle === 'string') {
            return this.swagItems.withText(needle);
        }

        return this.swagItems.nth(needle);
    }

    /**
     * Get the swag item header
     *
     * @param {string|number} needle
     *
     * @returns {Selector}
     */
    getSwagItemHeader(needle){
        return this.getSwagItem(needle).find('.inventory_item_name');
    }

    /**
     * Get the swag item add button
     *
     * @param {string|number} needle
     *
     * @returns {Selector}
     */
    getSwagItemAddButton(needle){
        return this.getSwagItem(needle).find('.btn_primary.btn_inventory');
    }

    /**
     * Get the swag item remove button
     *
     * @param {string|number} needle
     *
     * @returns {Selector}
     */
    getSwagItemRemoveButton(needle){
        return this.getSwagItem(needle).find('.btn_secondary.btn_inventory');
    }

    /**
     * Open the details of a swag item
     *
     * @param {number|string} needle
     *
     * @returns {Promise<void>}
     */
    openSwagDetails(needle) {
        return t.click(this.getSwagItemHeader(needle));
    }

    /**
     * Get the amount of swag items on the page
     *
     * @returns {Promise<number>}
     */
    getAmount() {
        return this.swagItems.count;
    }

    /**
     * Add a swag items to the cart
     *
     * @param {number|string} needle
     *
     * @returns {Promise<void>}
     */
    addSwagToCart(needle) {
        return t.click(this.getSwagItemAddButton(needle));
    }
}

export default new SwagOverviewPage();
