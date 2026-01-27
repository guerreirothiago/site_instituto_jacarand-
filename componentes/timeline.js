class CustomTimeline extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                .timeline {
                    position: relative;
                    max-width: 1200px;
                    margin: 0 auto;
                }
                .timeline::after {
                    content: '';
                    position: absolute;
                    width: 6px;
                    background-color: #a855f7;
                    top: 0;
                    bottom: 0;
                    left: 50%;
                    margin-left: -3px;
                    border-radius: 3px;
                }
                .timeline-item {
                    padding: 10px 40px;
                    position: relative;
                    width: 50%;
                    box-sizing: border-box;
                }
                .timeline-item::after {
                    content: '';
                    position: absolute;
                    width: 25px;
                    height: 25px;
                    right: -12px;
                    background-color: white;
                    border: 4px solid #a855f7;
                    top: 15px;
                    border-radius: 50%;
                    z-index: 1;
                }
                .left {
                    left: 0;
                }
                .right {
                    left: 50%;
                }
                .right::after {
                    left: -12px;
                }
                .timeline-content {
                    padding: 20px 30px;
                    background-color: white;
                    position: relative;
                    border-radius: 6px;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                }
                @media screen and (max-width: 768px) {
                    .timeline::after {
                        left: 31px;
                    }
                    .timeline-item {
                        width: 100%;
                        padding-left: 70px;
                        padding-right: 25px;
                    }
                    .timeline-item::after {
                        left: 18px;
                    }
                    .left::after, .right::after {
                        left: 18px;
                    }
                    .right {
                        left: 0%;
                    }
                }
            </style>
            <div class="timeline">
                <div class="timeline-item left">
                    <div class="timeline-content">
                        <h3 class="font-bold text-purple-800">2009</h3>
                        <p>Fundação da Sede do Instituto Jacarandá</p>
                    </div>
                </div>
                <div class="timeline-item right">
                    <div class="timeline-content">
                        <h3 class="font-bold text-purple-800">2021</h3>
                        <p>Estabelecimento da Filial em Manaus</p>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('custom-timeline', CustomTimeline);