class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                .footer {
                    background-color: #800080;
                    color: white;
                    padding: 20px 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .footer-content {
                    text-align: center;
                    width: 100%;
                }
                .footer a {
                    color: #800080;
                    text-decoration: none;
                }
                .footer a:hover {
                    color: #800080;
                    text-decoration: underline;
                }
            </style>
            <footer class="footer">
                <div class="footer-content">
                    <p>&copy; 2026 Instituto Jacarandá - Filial Manaus. Todos os direitos reservados.</p>
                </div>
            </footer>
        `;
    }
}

customElements.define('custom-footer', CustomFooter);
