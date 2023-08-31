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
    public_repos.className = "public_repos";
    public_repos.textContent = "Public Repos: " + data.public_repos;
    public_Gists = document.createElement('div');
    public_Gists.className = "public_Gists";
    public_Gists.textContent = "Public Gists: " + data.public_gists;

    followers = document.createElement('div');
    followers.className = "followers";
    followers.textContent = "followers: " + data.followers;

    following = document.createElement('div');
    following.className = "following";
    following.textContent = "Public Gists: " + data.following;

    company = document.createElement('div');
    company.className = "company";
    company.textContent = data.company;

    document.querySelector('.profile_left').append(photo);
    document.querySelector('.profile_left').append(view_profile);
    document.querySelector('.profile_content_header').append(public_repos);
    document.querySelector('.profile_content_header').append(public_Gists);
    document.querySelector('.profile_content_header').append(followers);
    document.querySelector('.profile_content_header').append(following);

    document.querySelector('.profile_content_main').append(company);

}
function repo_generate(repolist)
{

}
function refresh()
{

}