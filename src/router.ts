type PageContent = string | (() => string);

class Router {
  private routes: { [address: string]: PageContent } = {};
  private content: HTMLElement;
  private basePath: string = '/TetraSkill';

  constructor(rootId: string) {
    const rootEl = document.getElementById(rootId);
    if (!rootEl) throw new Error(`Element #${rootId} not found`);
    this.content = rootEl;

    window.addEventListener('popstate', () => {
      this.render(window.location.pathname);
    });

    document.addEventListener('click', (e) => {
      const link = (e.target as HTMLElement).closest('a');
      if (!link) return;
      const href = link.getAttribute('href');
      if (!href) return;

      if (href === '/') {
        e.preventDefault();
        this.navigate(this.basePath);
      } else if (href.startsWith('/')) {
        e.preventDefault();
        this.navigate(this.basePath + href);
      }
    });
  }

  addRoute(address: string, content: PageContent): void {
    this.routes[address] = content;
  }

  navigate(address: string): void {
    window.history.pushState({}, '', address);
    this.render(address);
  }

  private getCleanPath(path: string): string {
    if (path.startsWith(this.basePath)) {
      const clean = path.slice(this.basePath.length) || '/';
      return clean;
    }
    return path;
  }

  private render(address: string): void {
    const cleanPath = this.getCleanPath(address);
    const content = this.routes[cleanPath];

    if (content) {
      if (typeof content === 'function') {
        this.content.innerHTML = content();
      } else {
        this.content.innerHTML = content;
      }
    } else {
      this.content.innerHTML = '<h2>404</h2><a href="/">Home</a>';
    }
  }

  start(): void {
    this.render(window.location.pathname);
  }
}

export default Router;
