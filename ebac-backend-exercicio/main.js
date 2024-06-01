$(document).ready(function () {

    const foto =document.querySelector('#foto-perfil');
    const nome = document.querySelector('#nome');
    const username = document.querySelector('#username');
    const repo = document.querySelector('#repo');
    const seguidores = document.querySelector('#seguidores');
    const seguindo = document.querySelector('#seguindo')
    const link_profile = document.querySelector('#profile-link')


    fetch('https://api.github.com/users/Lucashtl')
        .then(function (resp) {
            return resp.json();
        })
        .then(function (json) {
            
            foto.src = json.avatar_url;
            nome.innerText = json.name;
            username.innerText = json.login;
            repo.innerText = json.public_repos;
            seguidores.innerText = json.followers;
            seguindo.innerText = json.following;
            link_profile.href = json.html_url;
        })
})

