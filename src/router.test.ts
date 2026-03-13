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
});
