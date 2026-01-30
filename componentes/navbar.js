class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    --navbar-height: 160px;
                }
                
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
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    min-height: 160px;
                }
                
                .navbar-wrapper.scrolled {
                    background-color: #3e2084ff;
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                }
                
                .logo img {
                    height: 160px;
                }
                
                .navbar {
                    display: flex;
                    align-items: center;
                    gap: 16px;
                    transition: all 0.3s ease;
                }
                
                .nav-link {
                    position: relative;
                    color: white;
                    text-decoration: none;
                    font-size: 16px;
                }
                
                .navbar-wrapper.scrolled .nav-link {
                    color: white;
                }
                
                .menu-toggle {
                    display: none;
                    background: none;
                    border: none;
                    cursor: pointer;
                    padding: 8px;
                }
                
                .menu-toggle svg {
                    width: 28px;
                    height: 28px;
                    stroke: white;
                }
                
                .mobile-menu {
                    display: none;
                    position: absolute;
                    top: 160px;
                    left: 0;
                    right: 0;
                    background-color: #3d1e86ff;
                    flex-direction: column;
                    padding: 20px 48px;
                    gap: 15px;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                }
                
                .mobile-menu.open {
                    display: flex;
                }
                
                .mobile-menu .nav-link {
                    font-size: 16px;
                    padding: 10px 0;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                }
                
                /* Responsive: esconder navbar normal em telas pequenas */
                @media (max-width: 768px) {
                    .navbar-wrapper {
                        padding: 0 20px;
                    }
                    
                    .logo img {
                        height: 100px;
                    }
                    
                    .navbar {
                        display: none;
                    }
                    
                    .menu-toggle {
                        display: block;
                    }
                    
                    .mobile-menu {
                        top: 100px;
                    }
                }
            </style>
            #posicionar navbar com scroll corretamente
            <div id="navbar-wrapper" class="navbar-wrapper">
                <div class="logo">
                    <a href="/" class="text-2xl font-bold flex items-center">
                        <img src="image/Logo-InstitutoJacaranda.png" alt="Logo Jacarandá">
                    </a>
                </div>
                <nav class="navbar">
                    <a href="#inicio" class="nav-link">Início</a>
                    <a href="#sobre" class="nav-link">Sobre</a>
                    <a href="#projetos" class="nav-link">Projetos</a>
                    <a href="#transparencia" class="nav-link">Transparência</a>
                    <a href="#contato" class="nav-link">Contato</a> 
                </nav>

                <button id="menu-toggle" class="menu-toggle">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>

                <div id="mobile-menu" class="mobile-menu">
                    <a href="#inicio" class="nav-link">Início</a>
                    <a href="#sobre" class="nav-link">Sobre</a>
                    <a href="#projetos" class="nav-link">Projetos</a>
                    <a href="#transparencia" class="nav-link">Transparência</a>
                    <a href="#contato" class="nav-link">Contato</a>
                </div>
            </div>

            <script>
                const navbarElement = this;
                
                setTimeout(() => {
                    const navbarWrapper = navbarElement.shadowRoot.getElementById('navbar-wrapper');
                    const menuToggle = navbarElement.shadowRoot.getElementById('menu-toggle');
                    const mobileMenu = navbarElement.shadowRoot.getElementById('mobile-menu');
                    const navLinks = navbarElement.shadowRoot.querySelectorAll('.mobile-menu .nav-link');
                    
                    menuToggle.addEventListener('click', function() {
                        mobileMenu.classList.toggle('open');
                    });
                    
                    // Fechar menu ao clicar em um link
                    navLinks.forEach(link => {
                        link.addEventListener('click', function() {
                            mobileMenu.classList.remove('open');
                        });
                    });
                    
                    // Change navbar style on scroll
                    window.addEventListener('scroll', function() {
                        if (window.scrollY > 50) {
                            navbarWrapper.classList.add('scrolled');
                        } else {
                            navbarWrapper.classList.remove('scrolled');
                        }
                    });
                }, 0);
            </script>
        `;
    }
}

customElements.define('custom-navbar', CustomNavbar);