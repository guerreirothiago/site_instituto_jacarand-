class ProjectCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const title = this.getAttribute('title') || 'Projeto';
        const description = this.getAttribute('description') || 'Descrição do projeto';
        const icon = this.getAttribute('icon') || 'box';
        const image = this.getAttribute('image') || 'http://static.photos/education/320x240/1';

        this.shadowRoot.innerHTML = `
            <style>
                .card {
                    transition: all 0.3s ease;
                }
                .card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
                }
            </style>
            <div class="card bg-white rounded-xl overflow-hidden shadow-md h-full">
                <div class="relative h-40 overflow-hidden">
                    <img src="${image}" alt="${title}" class="w-full h-full object-cover">
                    <div class="absolute inset-0 bg-gradient-to-t from-purple-800 to-transparent opacity-70"></div>
                    <div class="absolute bottom-4 left-4 text-white">
                        <div class="bg-purple-600 p-3 rounded-full inline-block">
                            <i data-feather="${icon}" class="w-6 h-6"></i>
                        </div>
                    </div>
                </div>
                <div class="p-6">
                    <h3 class="text-xl font-bold text-purple-800 mb-2">${title}</h3>
                    <p class="text-gray-600 mb-4">${description}</p>
                    <a href="#" class="text-purple-600 font-semibold flex items-center hover:text-purple-800 transition duration-300">
                        Saiba mais <i data-feather="arrow-right" class="ml-2 w-4 h-4"></i>
                    </a>
                </div>
            </div>
            <script>
                feather.replace();
            </script>
        `;
    }
}

customElements.define('project-card', ProjectCard);