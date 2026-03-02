interface Properties {
  type?: string;
  placeHolder?: string;
  isRequired?: boolean;
  minLength?: number;
  validate?: () => void;
}

export function createInput({
  placeHolder = '',
  type = 'text',
  isRequired = false,
  minLength = 0,
  validate,
}: Properties): HTMLInputElement {
  const input: HTMLInputElement = document.createElement('input');
  input.placeholder = placeHolder;
  input.type = type;
  input.required = isRequired;
  input.minLength = minLength;

  if (validate) input.addEventListener('input', validate);

  return input;
}