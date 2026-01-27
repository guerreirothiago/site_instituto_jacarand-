class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                .navbar-wrapper {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    z-index: 10;
                    background-color: #3d1e86ff;
                    transition: all 0.3s ease;
                    padding: 0 48px;
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                }
                .navbar-wrapper.scrolled {
                    background-color: #3e2084ff;
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                }
                .navbar {
                    transition: all 0.3s ease;
                }
                .nav-link {
                    position: relative;
                    color: white;
                    text-decoration: none;
                }
                .navbar-wrapper.scrolled .nav-link {
                    color: white;
                }
                .mobile-menu {
                    max-height: 0;
                    overflow: hidden;
                    transition: max-height 0.3s ease-out;
                }
                .mobile-menu.open {
                    max-height: 500px;
                }
            </style>
            #posicionar navbar com scroll corretamente
            <div id="navbar-wrapper" class="navbar-wrapper flex items-center justify-between h-16">
                <div class="logo">
                    <a href="/" class="text-2xl font-bold flex items-center">
                        <img src="image/logo_jacarandá.png" alt="Logo Jacarandá" style="height: 130px;">
                    </a>
                </div>
                <nav class="navbar hidden md:flex space-x-8"></nav>
                    <a href="#inicio" class="nav-link text-lg font-medium">Início</a>
                    <a href="#sobre" class="nav-link text-lg font-medium">Sobre</a>
                    <a href="#projetos" class="nav-link text-lg font-medium">Projetos</a>
                    <a href="#transparencia" class="nav-link text-lg font-medium">Transparência</a>
                    <a href="#contato" class="nav-link text-lg font-medium">Contato</a>
                </nav>
                <div id="menu-toggle" class="md:hidden cursor-pointer"></div>
                    <i data-feather="menu" class="w-8 h-8 text-white"></i>
                </div>
                <div id="mobile-menu" class="mobile-menu flex flex-col space-y-4 mt-4 md:hidden">
                    <a href="#inicio" class="nav-link text-lg font-medium">Início</a>
                    <a href="#sobre" class="nav-link text-lg font-medium">Sobre</a>
                    <a href="#projetos" class="nav-link text-lg font-medium">Projetos</a>
                    <a href="#transparencia" class="nav-link text-lg font-medium">Transparência</a>
                    <a href="#contato" class="nav-link text-lg font-medium">Contato</a>
                </div>
            </div>

            <script>
                feather.replace();
                
                document.addEventListener('DOMContentLoaded', function() {
                    const navbarWrapper = this.shadowRoot.getElementById('navbar-wrapper');
                    const menuToggle = this.shadowRoot.getElementById('menu-toggle');
                    const mobileMenu = this.shadowRoot.getElementById('mobile-menu');
                    
                    menuToggle.addEventListener('click', function() {
                        mobileMenu.classList.toggle('open');
                    });
                    
                    // Change navbar style on scroll
                    window.addEventListener('scroll', function() {
                        if (window.scrollY > 50) {
                            navbarWrapper.classList.add('scrolled');
                        } else {
                            navbarWrapper.classList.remove('scrolled');
                        }
                    });
                });
            </script>
        `;
    }
}

customElements.define('custom-navbar', CustomNavbar);