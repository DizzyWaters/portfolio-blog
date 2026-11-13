function Header({ theme, onToggleTheme }) {
  return (
    <header className="site-header">
      <div className="header-inner">

        <a className="site-title" href="#home">
          Developer's Journal
        </a>

        <nav aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#blog">Blog</a>
          <a href="#contact">Contact</a>
        </nav>

        <button
          type="button"
          className="theme-toggle"
          onClick={onToggleTheme}
          aria-label={
            theme === 'dark'
              ? 'Switch to light mode'
              : 'Switch to dark mode'
          }
          aria-pressed={theme === 'light'}
        >
          {theme === 'dark' ? '☀ Light' : '☾ Dark'}
        </button>

      </div>
    </header>
  );
}

export default Header;
