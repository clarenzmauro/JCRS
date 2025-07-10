console.log("Buy Bitcoin");

const heading = document.querySelector('p');
heading.textContent = 'I love JavaScript (not really)';

const button = document.createElement('button');
button.textContent = 'Add a model';
button.onclick = function() {
    const modelList = document.querySelector('ul');
    if (modelList) {
        modelList.innerHTML += '<li>Additional Model: Gemini 2.5 Flash</li>';
    }
};
document.body.appendChild(button);