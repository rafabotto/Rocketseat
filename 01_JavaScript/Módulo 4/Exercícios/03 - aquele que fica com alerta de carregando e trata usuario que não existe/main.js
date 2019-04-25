var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var repos = JSON.parse(localStorage.getItem('list_repos')) || [];

buttonElement.onclick = listRepositories;

function renderRepos(repos){
    listElement.innerHTML = "";

    for(repo of repos){
        const textElement = document.createTextNode(repo.name);
        const liElement = document.createElement('li');

        liElement.appendChild(textElement);
        listElement.appendChild(liElement);
    }
}

function renderLoading(){
    listElement.innerHTML = "";

    var textElement = document.createTextNode('Carregando . . . ');
    var loadingElement = document.createElement('li');

    loadingElement.appendChild(textElement);
    listElement.appendChild(loadingElement);
}

function renderError(){
    listElement.innerHTML = "";
    
    var textElement = document.createTextNode('Erro ! ! ! ');
    var errorElement = document.createElement('li');
    
    errorElement.appendChild(textElement);
    listElement.appendChild(errorElement);
}

function listRepositories(){
    var user = inputElement.value;
    if(!user) return;

    renderLoading();

    axios.get('https://api.github.com/users/' + user + '/repos')
        .then(function(response){
            renderRepos(response.data);
        })
        .catch(function(error){
            renderError();
        });
    
    inputElement.value = "";
    inputElement.focus();
}