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
    following.textContent = "following: " + data.following;

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
    title.className = 'repo_list_title'
    title.textContent = 'Lastest Repos';
    document.querySelector('.repolistTitle').append(title);
    lists = document.createElement('div');
    lists.className = 'repolist1';
    repolist.forEach(element => {
        console.log(element);
        list = document.createElement('div');
        list.className = 'repolists';
        repo_name = document.createElement('a');
        repo_name.className = 'repo_name';
        repo_name.textContent = element.name;
        repo_name.setAttribute('href', element.html_url);

        repolists_info = document.createElement('div');
        repolists_info.className = "repolists_info";

        stars = document.createElement('div');
        stars.className = "repolists_info_stars";
        stars.textContent = "Stars: " + element.stargazers_count;

        watchers = document.createElement('div');
        watchers.className = "repolists_info_watchers";
        watchers.textContent = "Watchers: " + element.watchers;

        forks = document.createElement('div');
        forks.className = "repolists_info_forks";
        forks.textContent = "forks: " + element.forks;

        repolists_info.appendChild(stars);
        repolists_info.appendChild(watchers);
        repolists_info.appendChild(forks);


        list.appendChild(repo_name);
        list.appendChild(repolists_info);

        lists.appendChild(list);
    });
    document.querySelector('.repoList').appendChild(lists);

}

function refresh() {
    let del4 = document.querySelector('.repo_list_title');
    if (del4 == undefined)
        return;
    let del2 = document.querySelector('.profile_content_header');
    while (del2.firstChild)
        del2.removeChild(del2.firstChild);
    let del5 = document.querySelector('.profile_content_main');
    while (del5.firstChild)
        del5.removeChild(del5.firstChild);
    let del3 = document.querySelector('.repolist1');
    while (del3.firstChild)
        del3.removeChild(del3.firstChild);
    let del1 = document.querySelector('.profile_left');
    while (del1.firstChild)
        del1.removeChild(del1.firstChild);
    while (del4.firstChild)
        del4.removeChild(del4.firstChild);
    del4.remove();
    del3.remove();
}

function refresh_repos() {
    let del4 = document.querySelector('.repo_list_title');
    if (del4 == undefined)
        return;
    let del3 = document.querySelector('.repolist1');
    while (del3.firstChild)
        del3.removeChild(del3.firstChild);
    let del1 = document.querySelector('.profile_left');
    while (del1.firstChild)
        del1.removeChild(del1.firstChild);
    while (del4.firstChild)
        del4.removeChild(del4.firstChild);
    del4.remove();
    del3.remove();
}

const abc = new github_User();

document.querySelector('#button1').
    addEventListener('keyup', (e) => {
        if (e.key != 'Enter') return;
        abc.rename(e.target.value);
        refresh();
        abc.connect();
        e.target.value = "";
    }
    );