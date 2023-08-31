class github_User {
    names;
    data = {
        avatar_url: "",
        bio: null,
        blog: "",
        company: null,
        created_at: "",
        email: null,
        events_url: "",
        followers: 0,
        followers_url: "",
        following: 0,
        following_url: "",
        gists_url: "",
        gravatar_id: "",
        hireable: null,
        html_url: "",
        id: null,
        location: null,
        login: "",
        name: null,
        node_id: "",
        organizations_url: "",
        public_gists: 0,
        public_repos: 0,
        received_events_url: "",
        repos_url: null,
        site_admin: false,
        starred_url: "",
        subscriptions_url: "",
        twitter_username: null,
        type: "",
        updated_at: "",
        url: ""
    };
    repolist = {
        allow_forking
            :
            true,
        archive_url: "",
        archived: false,
        assignees_url: "",
        blobs_url: "",
        branches_url: "",
        clone_url: "",
        collaborators_url: "",
        comments_url: "",
        commits_url: "",
        compare_url: "",
        contents_url: "",
        contributors_url: "",
        created_at: "2023-08-19T14:21:31Z",
        default_branch: "main",
        deployments_url: "",
        description: null,
        disabled: false,
        downloads_url: "",
        events_url: "",
        fork: false,
        forks: 0,
        forks_count: 0,
        forks_url: "",
        full_name: "",
        git_commits_url: "",
        git_refs_url: "",
        git_tags_url: "",
        git_url: "",
        has_discussions: false,
        has_downloads: true,
        has_issues: true,
        has_pages: false,
        has_projects: true,
        has_wiki: true,
        homepage: null,
        hooks_url: "",
        html_url: "",
        id: 0,
        is_template: false,
        issue_comment_url: "",
        issue_events_url: "",
        issues_url: "",
        keys_url: "",
        labels_url: "",
        language: "",
        languages_url: "",
        license: null,
        merges_url: "",
        milestones_url:"",
        mirror_url   : null,
        name:"",
        node_id:"",
        notifications_url:"",
        open_issues:0,
        open_issues_count:0,
        owner:{ },
        private:false,
        pulls_url:"",
        pushed_at:"",
        releases_url:"",
        size:0,
        ssh_url:"",
        stargazers_count:0,
        stargazers_url:"",
        statuses_url:"",
        subscribers_url:"",
        subscription_url:"",
        svn_url:"",
        tags_url:"",
        teams_url: "",
        topics: [],
        trees_url: "",
        updated_at: "",
        url: "",
        visibility: "",
        watchers: 0,
        watchers_count: 0,
        web_commit_signoff_required: false
    };
    
    async init() {
        let jobs = [];
        let job = fetch(`https://api.github.com/users/${this.names}`).then(
            successResponse => {
                if (successResponse.status != 200) {
                    return null;
                } else {
                    return successResponse.json();
                }
            },
            failResponse => {
                return null;
            }
        );
        jobs.push(job);

        let results = await Promise.all(jobs);
        let result;
        results.forEach(i => { result = i });
        this.data = JSON.parse(JSON.stringify(result));
        if(this.data == undefined)
            return false;
        console.log(this.data);
        return true;
    }
    async repo() {
        let jobs = [];
        if(this.data == undefined)
            return false;
        let job = fetch(this.data.repos_url).then(
            successResponse => {
                if (successResponse.status != 200)
                    return null;
                else
                    return successResponse.json();
            },
            failResponse => {
                return null;
            }
        );
        jobs.push(job);
        let results = await Promise.all(jobs);
        results.forEach(i => {this.repolist = i});
        console.log(this.repolist);
        return true;
    }
    async connect() {
        
        const init = new Promise((resolve, reject) => {
            resolve(this.init());
        });
        init.then((value) => {
            if (value) {
                refresh();
                profile_generate(this.data);
                const repo = new Promise((resolve2, reject) => {
                    resolve2(this.repo());
                });
                repo.then(value => {
                    if(value)
                    {
                        refresh_repos();
                        repo_generate(this.repolist);
                    }
                    else
                        console.log('fail');
                })
                repo.catch(value =>{
                    console.log('error');
                })
            }
            else
            {
                console.log('fail');
            }
        });
    }
    constructor() {
    }
    rename(names){
        this.names = names;
    }
}