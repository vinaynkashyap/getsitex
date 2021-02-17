# How to use GitHub for WordPress development
___


Time to try out GitHub development for your WP projects! 

Learn how to create a GitHub project for developing a WordPress site. We’ll show you how to create a GitHub account and two repositories, before showing you how to transfer your theme back and forth between them.

1. Create a Local WordPress Environment

When you’re developing for WordPress, it’s important to always use a staging environment. This gives you the freedom to try new things without worrying how they will affect your live site.

In this case, you’re going to create a local staging environment by installing WordPress on your computer. You can do this in a few different ways, but we recommend using DesktopServer, which enables you to quickly create a local version of WordPress for free:

WordPress DesktopServer FREE
Start by selecting the free version of DesktopServer, registering an account, and downloading and running the installer.

WordPress Install DesktopServer
The installer will take a moment to work. After it’s completed, you can create and configure a new local WordPress site, following the instructions in this guide.

2. Install Git on Your Local Machine

It’s now time to install Git. If you are running a recent version of Mac OS, you might find that Git is already on your machine. You can check this by opening your command line interface, such as Terminal, and entering the following command:

git --version
If Git is installed, this function will return its version number. If not, you will instead be asked if you want to install it right away. You can also download the installer and run it manually for Mac, Linux, and Windows computers.

If you’re not comfortable with the command line interface, you might want to consider downloading a Git GUI application instead. However, for this example, we’re going to use the standard command line method. Either way, once Git is installed, you’re ready to create a local repository.

3. Create a Local Repository for Your Project

You can now create a local Git repository for your project. In this example, we’ll use the default Twenty Seventeen theme, which should already be included in your local WordPress installation.

First, you’ll need to access the theme’s folder using the following command:

cd /Users/you/Documents/Websites/website/wp-content/themes/twentyseventeen
Make sure to change this file path so that it leads to the right directory, by replacing you and website with the correct folder names. You can now initialize this directory as a repository, with the following command:

git init
Next, you’ll need to add your files to the index. This tells Git which files you have added or edited since the last time you performed a commit (in other words, saved your changes). Since this is the first commit, you can use the following command to add every file in the folder:

git add
You can now commit your changes. The following command will commit all files in the index, and include a message to help you keep your versions organized:

git commit -m "The first commit"
You have now finished configuring your local repository. That means it’s time to turn our attention towards GitHub.

4. Register a GitHub Account

At this point, you’ll want to create a GitHub account. Start by accessing the GitHub homepage and filling in the registration form.

WordPress GitHub Homepage
When you proceed to the next step, you’ll be asked what plan you want to use. You should select the Unlimited public repositories for free option here, and then select Continue.

WordPress Welcome to GitHub Next Step
The final step involves customizing your account based on your level of previous experience. Here you can select the options that apply to you, before clicking Submit to create your account.

WordPress Welcome to GitHub Final Step
Your account will now be ready. You’ll be given the option to read through an introductory guide, or create a new project right away.

If you want to know more about the basics of using GitHub, we recommend taking some time to read the aforementioned guide. For now, however, click on Start a project. You’ll probably be asked to verify your email address at this stage.

WordPress GitHub Verify Email Address
You should have received an email from GitHub, so check your inbox and follow the Verify email address link. Once you’ve done that, you’ll be taken to a page where you can create your new project.

5. Create a Repository on GitHub

You’re finally ready to create the GitHub repository for your project. This is a fairly simple process and only requires you to configure a few settings. Let’s start from the top.

WordPress GitHub Create Repository
First, you can select the repository’s owner, which is effectively the admin for the repository. This should already be set to yourself, so you can leave it as-is. Next, you’ll need to give your repository a descriptive and concise name. You may want to name it after the plugin, theme, or other project you’ll be working on. After that, you can enter a description for the project. Again, this should be descriptive, so that other developers and users can understand what it is you’re creating.

Since you signed up for a free account, you will only be able to create a public repository (although that’s all you’ll need right now). You’ll also be given the option to immediately clone the repository to your computer using a README file. Since you already have a local repository in place, you shouldn’t select this option now. However, it can be a handy tool for future projects.

Finally, you’ll see two drop-down menus at the bottom of this screen, offering additional options. The first enables you to select a gitignore option if you want Git to ignore certain files from being tracked.

The second option lets you choose a license for your repository. When you’re creating a real project, it’s important that you carefully consider what license to use. WordPress has very specific rules about licenses, which you’ll need to be aware of if you plan on developing for the platform.

For now, you can simply choose None from that menu, and then click on Create repository to finish setting things up.

WordPress GitHub New Project
This will take you to your new project, which means it’s time to add your theme.

6. Commit Your Project to GitHub

You can now push your theme to GitHub. Enter the following command into Git, making sure to replace the URL with a link to the repository you just set up:

git remote add origin https://github.com/yourusername/my-git-theme.git
git push -u origin master
You will then be prompted to enter your GitHub username, followed by your password. When you have done that, all the files you have committed to your local repository will be pushed to your GitHub project.

WordPress GitHub Repository Directory
If you return to your GitHub repository, you will see that all files have been added to it.

7. Fetch Updates from GitHub to Your Local Repository

You now have two repositories set up, and you know how to push changes from your local machine to the GitHub project. The final step is to flip this process and learn how to pull data from GitHub to your local installation. If you’re working alone on a project, you’ll rarely need to worry about doing this. However, it becomes necessary if other developers are pushing their changes into the external repository as well.

You can do this easily by using the fetch command. Simply enter this command into Git, replacing the URL with the correct one for your GitHub project:

git fetch https://github.com/yourusername/my-git-theme.git
This will pull all changes from GitHub, and copy them over. Your local repository will now be synced up with your GitHub repository.

With that done, you have successfully created a new GitHub project for a WordPress theme! At this point, feel free to continue experimenting with these tools to see what you can accomplish.