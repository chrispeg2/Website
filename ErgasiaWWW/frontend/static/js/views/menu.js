import AbstractView from "./view.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Menu");
    }

    async getHtml() {
        return `
        <div class="menu">
            <blockquote>The most important things 
            are the hardest things to say. They are the things you get ashamed of 
            because words diminish your feelings - words shrink things that seem 
            timeless when they are in your head to no more than living size when 
            they are brought out.</p>
            <p>-Stephen K.-</blockquote>
        </div>
        `;
    }
}