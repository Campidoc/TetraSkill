interface Properties {
  textContent: string;
  onClick?: () => void;
}

export function createButton({
  textContent,
  onClick,
}: Properties): HTMLButtonElement {
  const button: HTMLButtonElement = document.createElement('button');
  button.type = 'button';
  button.textContent = textContent;
  button.classList.add('button');
  if (onClick) {
    button.addEventListener('click', onClick);
  }
  return button;
}