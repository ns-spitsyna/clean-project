import './styles/styles.scss';
function component() {
    const element = document.createElement('div');
    element.innerHTML = 'Привет!';
    return element;
}

document.body.appendChild(component());

