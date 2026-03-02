import { createButton } from './button';
import { createInput } from './input';

const MIN_IMPUT_LENGTH = 3;

export function createLoginElement(): HTMLDivElement {
    const loginElement: HTMLDivElement = document.createElement('div');
    loginElement.classList.add('wrapper');

    const loginForm: HTMLFormElement = document.createElement('form');
    loginElement.append(loginForm);

    const loginContainer: HTMLDivElement = document.createElement('div');
    loginContainer.classList.add('input-group');
    loginForm.append(loginContainer);
    const loginLabel: HTMLDivElement = document.createElement('div');
    loginLabel.textContent = 'Имя';
    loginForm.classList.add('vertical');
    loginContainer.append(loginLabel);
    const loginInput: HTMLInputElement = createInput({
        placeHolder: 'Введите имя',
        isRequired: true,
        minLength: MIN_IMPUT_LENGTH,
        validate: loginValidate,
    });
    loginContainer.append(loginInput);

    const passwordContainer: HTMLDivElement = document.createElement('div');
    passwordContainer.classList.add('input-group');
    loginForm.append(passwordContainer);
    const passwordLabel: HTMLDivElement = document.createElement('div');
    passwordLabel.textContent = 'Пароль';
    passwordContainer.append(passwordLabel);
    const passwordInput: HTMLInputElement = createInput({
        type: 'password',
        placeHolder: 'Введите пароль',
        isRequired: true,
        minLength: MIN_IMPUT_LENGTH,
        validate: passwordValidate,
    });
    passwordContainer.append(passwordInput);

    const submitButton: HTMLButtonElement = createButton({
        textContent: 'Войти',
        onClick: () => {},
    });
    loginForm.append(submitButton);


    loginForm.addEventListener('submit', event => {
        event.preventDefault();

    });

    function loginValidate(): void {
        if (
            loginInput.value[0] &&
            loginInput.value[0].toLowerCase() === loginInput.value[0]
        ) {
            loginInput.setCustomValidity('Первая буква имени не заглавная');
            loginInput.reportValidity();
            return;
        }

        loginInput.setCustomValidity('');
        loginInput.reportValidity();
    }

    function passwordValidate(): void {
        if (
            passwordInput.value === passwordInput.value.toLowerCase() ||
            passwordInput.value === passwordInput.value.toUpperCase()
        ) {
            passwordInput.setCustomValidity(
                'Используйте прописные и заглавные буквы',
            );
            passwordInput.reportValidity();
            return;
        }

        passwordInput.setCustomValidity('');
        passwordInput.reportValidity();
    }

    return loginElement;
}