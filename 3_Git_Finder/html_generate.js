function profile_generate(data) {
    photo = document.createElement('img');
    photo.className = "photo";
    photo.setAttribute('src', data.avatar_url);
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
    company.textContent = "company : " + (data.company == null ? "" : data.company);

    blog = document.createElement('div');
    blog.className = "blog";
    blog.textContent = "blog : " + (data.blog == null ? "" : data.blog);

    location1 = document.createElement('div');
    location1.className = "location";
    location1.textContent = "location : " + (data.location == null ? "" : data.location);

    create = document.createElement('div');
    create.className = "create";
    create.textContent = "Member Since : " + data.created_at;

    document.querySelector('.profile_left').append(photo);
    document.querySelector('.profile_left').append(view_profile);
    document.querySelector('.profile_content_header').append(public_repos);
    document.querySelector('.profile_content_header').append(public_Gists);
    document.querySelector('.profile_content_header').append(followers);
    document.querySelector('.profile_content_header').append(following);

    document.querySelector('.profile_content_main').append(company);
    document.querySelector('.profile_content_main').append(blog);
    document.querySelector('.profile_content_main').append(location1);
    document.querySelector('.profile_content_main').append(create);

}
function repo_generate(repolist) {
    title = document.createElement('h1');
    title.textContent = 'Lastest Repos';
    document.querySelector('.repolistTitle').append(title);
    lists = document.createElement('div');
    lists.className = 'repolists';
    repolist.forEach(element => {
        console.log(element);
        list = document.createElement('div');
        list.className = 'repolist';
        repo_name = document.createElement('a');
        repo_name.className = 'repo_name';
        repo_name.textContent = element.name;
        repo_name.setAttribute('href', element.html_url);
        list.appendchild(repo_name);



        lists.appendchild(list);
    });

}

function refresh() {

}