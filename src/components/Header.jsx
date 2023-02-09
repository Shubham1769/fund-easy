const Header = () => {
  return (
 <header class="header" id="header">
      <nav class="nav container">
        <a href="#" class="nav__logo">
          <i class="ri-leaf-line nav__logo-icon "></i> Fund Easy
        </a>

        <div class="nav__menu" id="nav-menu">
          <ul class="nav__list">
            <li class="nav__item">
              <a href="#home" class="nav__link active-link">Home</a>
            </li>
            <li class="nav__item">
              <a href="#about" class="nav__link">Profile</a>
            </li>
            <li class="nav__item">
              <a href="#contact" class="nav__link">Will</a>
            </li>
          </ul>

          <div class="nav__close" id="nav-close">
            <i class="ri-close-line"></i>
          </div>
        </div>

        <div class="nav__btns">
          <i class="ri-moon-line change-theme" id="theme-button"></i>

          <div class="nav__toggle" id="nav-toggle">
            <i class="ri-menu-line"></i>
          </div>
        </div>
      </nav>
    </header>
    )
}
export default Header;