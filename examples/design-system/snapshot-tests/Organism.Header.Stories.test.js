
    const tree = `<div>
    <div class="snapshot" id="Default">
        <nav class="navbar" aria-label="main navigation" role="navigation">
            <div class="navbar-brand">
                <a class="navbar-item" href="">
                    <img alt="Bulma: a modern CSS framework based on Flexbox" height="28" src="http://bulma.io/images/bulma-logo.png" width="112">
                </a>
                <button class="button navbar-burger" data-target="navMenu">
                    <span>
                    </span>
                    <span>
                    </span>
                    <span>
                    </span>
                </button>
            </div>
            <div class="navbar-menu" id="navMenubd-example">
                <a class="navbar-item ">
                    <span>
                        Home
                    </span>
                </a>
                <a class="navbar-item ">
                    <span>
                        About
                    </span>
                </a>
            </div>
        </nav>
    </div>
</div>`;
    test("Organism.Header.Stories", () => {
      expect(tree).toMatchSnapshot();
    });
    