# Troubleshoot


[Error: Permission denied (publickey)](https://help.github.com/en/github/authenticating-to-github/error-permission-denied-publickey)

___

Error: failed to push some refs to 'master'
```
git pull --rebase origin master
git push origin master
```



___


## Add GitHub SSH Key to git

```
$ git remote remove origin

$ git remote add origin SSH-URL

$ git remote -v

$ ssh-keygen -t rsa -b 4096 -c"user@email.com"

$ ssh-add ~/.ssh/id_rsa

```

___

## fatal: unable to access 'https://github.com/USERNAME/REPO.git/': Could not resolve host: github.com

If you come accross an error that say's "Could not resolve host: github.com" in most cases it helps to reset the host by running the below commands

```
git config --global --unset http.proxy

git config --global --unset https.proxy
```

___

## Reset Git proxy settings:

```
cd /path/to/repo
git config --unset http.proxy
git config --global --unset http.proxy
git config --system --unset http.proxy

git config --unset https.proxy
git config --global --unset https.proxy
git config --system --unset https.proxy

# double-check with:
git config -l --show-origin | grep -i proxy
```

___

## error: src refspec master does not match any

If you receive an error message please run the below command

```
git commit -m "initial commit"

```

## Exit text mode in git bash
Usually when you hit enter without adding a commit message. Git bash enters the text mode. On windows I used the following command to exit the text mode.

```
:wq
```