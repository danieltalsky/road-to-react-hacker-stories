# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## My dev log

I set up the new WSL 2 on windows
I installed the WSL VSCode extension
I installed Ubuntu 22.04.03 LTS WSL via Windows store
I connected VSCode to the new Ubuntu installation
I installed Node via NVM using these instructions: https://learn.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-wsl#install-nvm-nodejs-and-npm
Installed the Vite, NPM, React plugins for VSCode
I created a Vite project with 
`npm create vite@latest hacker-stories -- --template react`
I built using 
`npm run build`
I verified it created a `dist/` folder
I installed gh and created a repo
```bash
sudo apt install gh
gh repo create
```
