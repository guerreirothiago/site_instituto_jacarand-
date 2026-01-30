class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                .footer {
                    background-color: #06125fff;
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
                    color: #a855f7;
                    text-decoration: none;
                }
                .footer a:hover {
                    color: #a855f7;
                    text-decoration: underline;
                }
            </style>
            <footer class="footer">
                <div class="footer-content">
                    <p>&copy; 2026 Instituto Jacarandá - Filial Manaus. Todos os direitos reservados.</p>
                    <div style="margin-top: 16px; display: flex; flex-direction: column; gap: 8px;">
                        <p><img src="image/localização.jpg" alt="Localização" style="width: 20px; height: 20px; margin-right: 8px; vertical-align: middle;"><strong>Endereço Manaus:</strong> R. Comendador Clementino, 183 - Centro, Manaus - AM, 69025-000</p>
                        <p><img src="image/localização.jpg" alt="Localização" style="width: 20px; height: 20px; margin-right: 8px; vertical-align: middle;"><strong>Endereço São Caetano do Sul:</strong> Rua Antonio de Andrade, 72 - Ceramica, São Caetano do Sul - SP, 09540-240</p>
                    </div>
                </div>
            </footer>
        `;
    }
}

customElements.define('custom-footer', CustomFooter);