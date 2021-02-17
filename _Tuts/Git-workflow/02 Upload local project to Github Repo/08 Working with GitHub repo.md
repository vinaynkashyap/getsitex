# Create a remote Git repo

### **Contents**

- [Create a GitHub repo](#Create-a-GitHub-repo)
- [Upload local repo to GitHub](#upload-local-repo-to-GitHub)
  - [Add GitHub repo addres](#Add-GitHub-repo-addres)
  - [Push local repo to GitHub](#Push-local-repo-to-GitHub)
- [Clone a remote project](#Clone-a-remote-project)
  - [Clone a single folder on a remote project](#Clone-a-single-folder-on-a-remote-project)
  - [Clone without the project folder](#Clone-without-the-project-folder)

___
 
## Create a GitHub repo

We will use GitHub to create a remote repo as it is one of the most popular site for hosting your Git projects and it is FREE. 

- First, we need to create a GitHub account.
- Click on your username > Your Repositories
- Click on the "New" button 
- Enter your repo Name and description.
- Once you fill up all the required fields just click on the "Creare  Repository" button.
- Your Repository is created and is active now.
- Open your repository and click on "Clone or Download" button to copy the link to your GitHub repo.   
```
$ Git clone https://github.com/graphitivity/git-workflow.git
```

Using this link we can clone our local repo to remote and also copy our remote repo to our local machine. Before we proceed we need to authenticate with GitHub.
___



## Upload local repo to GitHub


First check if a remote origin is set.

```
$ git remote -v
>
```
This should typically return nothing if it is the first time you are trying to push your local project to GitHub. 




### ***Push local repo to GitHub***
 
Now use the `git push` command to send your local repo files to a remote repo on GitHub.

```
$ git push origin master
```

You will be prompted with a username and password option. Here you need to enter your GitHub account details.

NOTE: If you face any problems, please check the Troubleshoot section and refer tot he error message to resolve it.

___


## Clone a remote project to your localhost

To clone a remote git project use the `Git clone` command followed by the URL of the remote repo.

```
$ Git clone https://github.com/graphitivity/git-workflow.git
```
___

### ***Clone a single folder on a remote project***

Sometimes you end up in a situation in which have to download a single folder from a large GitHub repo. GitHub does not make this easy but by combining some features we can download a single folder without using any third-party clients.

Open your working directory in Git Bash and run the below commands.

```
git remote add origin <url>

git config core.sparsecheckout true

echo "wp-enfold/*" >> .git/info/sparse-checkout

git pull --depth=1 origin master
```

___

### ***Clone without the project folder***


If you have set up a Git project on your local system inside a folder named "MyProject" and try to sync/clone a GitHub repo with the same name. You are likely to duplicate the root folder as seen below

```
MyProject
|- .git
|- MyProject
  |- Files
```

If you intend to download/clone the project without the main folder use a "." at the end of the origin URL with space.

```
$ Git clone https://github.com/graphitivity/git-workflow.git .
```

When you clone with a period in the end, your folder structure will look as shown below:

```
MyProject
|- .git
|- Files
```


___

### ***Download updated files only***

Run the git pull command to download only the updated files from the GitHub repo to your localhost.

```
$git pull origin master
```