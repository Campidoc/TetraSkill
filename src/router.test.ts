import { describe, it, expect, beforeEach } from 'vitest';
import Router from './router';

describe('Router', () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="app"></div>';
  });

  it('should create router instance with root element', () => {
    const router = new Router('app');
    expect(router).toBeDefined();
  });

  it('should add route and render it', () => {
    const router = new Router('app');
    const mockPage = () => '<h1>Test Page</h1>';

    router.addRoute('/test', mockPage);
    router.navigate('/test');

    const appDiv = document.getElementById('app');
    expect(appDiv?.innerHTML).toBe('<h1>Test Page</h1>');
  });

  it('should render 404 page for unknown route', () => {
    const router = new Router('app');

    router.navigate('/unknown-page');

    const appDiv = document.getElementById('app');
    expect(appDiv?.innerHTML).toContain('404');
    expect(appDiv?.innerHTML).toContain('Home');
  });

  it('should intercept click on internal link', () => {
    const router = new Router('app');

    const link = document.createElement('a');
    link.href = '/game1';
    link.textContent = 'Game 1';
    document.body.appendChild(link);

    const originalNavigate = router.navigate;
    let calledPath = '';

    router.navigate = (path: string) => {
      calledPath = path;
    };

    link.click();

    expect(calledPath).toContain('/game1');

    router.navigate = originalNavigate;
  });
});
