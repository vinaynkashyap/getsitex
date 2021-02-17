Switching GitHub Account in Git Bash (Permission Denied)

\$ git push -u origin master
remote: Permission to repository denied to user.
fatal: unable to access 'repository': The requested URL returned error: 403

Solution:

- Search for "Manage Windows".
- Delete GitHub account.
- Push again and add new account.

### How to add git repo origin address.

GitHub - Tips on Finding Git / GitHub Repository URLs

Tip to find the Github repository URL:

Login to your GitHub account and enter the Dashboard.

Select a repository from the Your Repositories list.

Click the Code button and copy the repository link (for SSH).

### Add Remote Origin URL to your Local Git Project

Run the below command

\$git remote add origin https://github.com/user/repo-address.git
