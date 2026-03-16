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
});
