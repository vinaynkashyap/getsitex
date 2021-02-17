
# What is a .gitignore file?

If you know what is a .gitignore file then skip to the next section. If you have not herd about .gitignore file until now it is simply a file that contains a list of all the files and folders that you want git to ignore when you commit your project. In other words the list of files and folders added int he .gitignore file will not be uploaded to the server.

## How to add a .gitignore file to your project?

To add a .gitignore file navigate to your project folder in git bash terminal and type the below command
```
$ touch .gitignore
```

## How to add files and folders to the .gitignore file?

 Open the .gitignore file in a text editor and add files and folders name on a new line each.

 Example:

 ```
 *.exe
 /folder-name
 ```