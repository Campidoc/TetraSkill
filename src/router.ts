type PageContent = string | (() => string);

class Router {
  private routes: { [address: string]: PageContent } = {};
  private content: HTMLElement;

  constructor(rootId: string) {
    const rootEl = document.getElementById(rootId);
    if (!rootEl) throw new Error(`Element #${rootId} not found`);
    this.content = rootEl;
  }

  addRoute(address: string, content: PageContent): void {
    this.routes[address] = content;
  }

  private render(address: string): void {
    const content = this.routes[address];

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
