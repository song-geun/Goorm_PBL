function profile_generate(data)
{
    photo = document.createElement('img');
    photo.className = "photo";
    photo.setAttribute('src',data.avatar_url);
    view_profile = document.createElement('a');
    view_profile.className = "view_profile";
    view_profile.textContent = "View Profile";
    view_profile.setAttribute('href', data.html_url);
    public_repos = document.createElement('div');

    document.querySelector('.profile_left').append(photo);
    document.querySelector('.profile_left').append(view_profile);
}
function repo_generate(repolist)
{

}
function refresh()
{

}