
# How to create a local git repo?

In this tutorial, we will learn how to create a git repo on your computer. A Git repo will consist of the following stages:

- [Work Directory](#Setup-Working-Directory)
- [Staging Area](#Staging-Area)
- [Commit to repo](#Commit-to-local-repo)
- [Remove Git integration](#Stop-Git-from-tracking-your-project)


## Setup Working Directory


- Open Git Bash
- Navigate to the project folder or drag and drop the folder in to the terminal.
- Tell Git to start tracking the changes by typing "git init".
- Create new files using "touch file-name.ext"


### First time Git Setup

To check for any existing git configuration  [more info](https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup)
```
$ git config --global --list 
```

Let Git know your user name and email. To add your local repo to a remote GitHub repo, open your current working directory from Git Bash and follow the below steps.

 First, [set your Git username.](https://help.github.com/en/github/using-git/setting-your-username-in-git) This is not your GitHub username but Git username.

 
```
$ git config --global user.name "User Name" 
$ git config --global user.email email@example.com
```


 Confirm GitHub username and email
 
 ```
 $ git config --global user.name
 $ git config --global user.email
```

Or you can use the `$ git config` command which we used earlier.

```
$ git config --global --list 
```

This should return the user and email info.

```
$ git config --global --list
user.name=userName
user.email=userName@email.com
```

And finally, Initiate a Git Project by running the below command.

```
$ git init
```
___

## Staging Area

Git staging area is a collection of your updated files ready to be comitted to the git repository.

To stage all your updated files use the below command.

```
git add -A

```
Or you can use the below command

```
git add .
```
___

## Commit to local repo

After your files are added to the staging area. They can now be added to the Git repo by typing the following command 

**Commit all files:**

```
git commit --all -m'your commit message here'
```

or

```
git commit -m"commit message" .
```

___

## Stop Git from tracking your project

To stop Git from managing your project files you need to remove the .git folder and there is no better way to do this than to run the below command.

```
rm -rf .git
```