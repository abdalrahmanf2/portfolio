export const Header = () => {
    return (
        <header className="flex justify-center w-full fixed top-3 z-10">
            <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-zinc-950/50 backdrop-blur">
                <a href="#home" className="nav-item">
                    Home
                </a>
                <a href="#projects" className="nav-item">
                    Projects
                </a>
                <a href="#about" className="nav-item">
                    About
                </a>
                <a
                    href="#contact"
                    className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
                >
                    Contact
                </a>
            </nav>
        </header>
    );
};