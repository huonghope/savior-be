<h1 align="center">Savior Server</h1>
<p align="center">
  <img width="300" src="docs/savior.png" alt="logo">
</p>


### How to commit 
```text
build: Build related changes (eg: npm related/ adding external dependencies)
chore: A code change that external user won't see (eg: change to .gitignore file or .prettierrc file)
feat: A new feature
fix: A bug fix
docs: Documentation related changes
refactor: A code that neither fix bug nor adds a feature. (eg: You can use this when there is semantic changes like renaming a variable/ function name)
perf: A code that improves performance
style: A code that is related to styling
test: Adding new test or making changes to existing test
```

## Pre-requisites
- Install [Node.js](https://nodejs.org/en/) version >=12.0.0
- Install [Nginx](https://www.nginx.com/) version nginx/1.14.0 (Ubuntu)


# Getting started
- Clone the repository
```
git clone  <git lab template url> <project_name>
```
- Install dependencies
```
cd <project_name>
npm install
```
- Set the environment variables
```
cp .env.example .env

# open .env and modify the environment variables (if needed)
```
- Build and run the project
```
npm start
```
Navigate to `https://localhost:3000`

- API Document 
```
npm run docs
```
Navigate to `https://localhost:3000/api/docs`
