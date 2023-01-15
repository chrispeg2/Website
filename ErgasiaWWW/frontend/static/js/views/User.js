import AbstractView from "./view.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("User");
    }

    async getHtml() {
        return "";
    }
}