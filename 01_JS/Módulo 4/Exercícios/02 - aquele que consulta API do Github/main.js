var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var repos = JSON.parse(localStorage.getItem('list_repos')) || [];

buttonElement.onclick = getRepos;

function renderRepos(repos){
    for(repo of repos){
        var textElement = document.createTextNode(repo.name);
        var liElement = document.createElement('li');

        liElement.appendChild(textElement);
        listElement.appendChild(liElement);
    }
}

function getRepos(){
    var user = inputElement.value;
    if(!user) return;

    axios.get('https://api.github.com/users/' + user + '/repos')
        .then(function(response){
            renderRepos(response.data);
        })
        .catch(function(error){
            console.warn(error);
        });
}