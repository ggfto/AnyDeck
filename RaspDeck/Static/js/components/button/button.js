class RaspdeckButton extends HTMLComponent {
    cpName = 'button'
    constructor() {
        super();
    }

    /**
     * Called when a attribute has changed
     * @param {string} name the attribute name
     * @param {string} oldVal the old attribute value
     * @param {string} newVal the new attribute value
     */
    attributeChangedCallback(name, oldVal, newVal) {
    }
}

window.customElements.define('raspdeck-btn', RaspdeckButton);