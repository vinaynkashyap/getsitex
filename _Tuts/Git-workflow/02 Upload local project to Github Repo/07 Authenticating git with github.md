### **Authenticating Git with GitHub**

Before uploading your local Git project to GitHub, we need to tell the local Git about the remote repo address where we will upload your projects and authenticate with GitHub. 

Log in to your GitHub account and copy the HTTPS URL from the git repo. It should look something like the below URL.

```
https://github.com/graphitivity/git-workflow.git
```
Now open your working directory in git bash and type the following command to set the remote origin or remote repo address where your projects will be uploaded.

```
$ git remote add origin "URL"


```

Remove Origin

```
$git remote remove origin
```


You can verify if the remote repo address is added correctly by running the below command

```
$ git remote -v
```

 This should now return something like:

```
> origin  https://github.com/graphitivity/git-workflow.git (fetch)
> origin  https://github.com/graphitivity/git-workflow.git (fetch)low.git (push)   
```
___
 

### ***Push local repo to GitHub***
 
Now use the `git push` command to send your local repo files to a remote repo on GitHub.

```
$ git push origin master
```

NOTE: For some reason, the login prompt window did not work with VS Code for me. You will be prompted with a username and password option if you use Git bash stand-alone terminal. Here you need to enter your GitHub account details.

NOTE: If you face any problems, please check the Troubleshoot section and refer to the error message to resolve it.