# FLAMES Web

`git clone ssh://git@10.12.5.188:10022/appdev/mes3`

- test: <http://10.12.5.188:20003>
- production: <http://10.12.5.188:20008>

## Project Setup
[nodejs](https://nodejs.org/en/) is required, pls download it from `ftp://ftp@10.12.6.99/开发工具` and install nodejs.

After installation, run the commands below to install dependencies
```bash
# check if npm is available
npm -v
npm install --registry=http://10.12.5.188:10018/repository/npm-registry
#or 
yarn install --registry=http://10.12.5.188:10018/repository/npm-registry
```

### Compiles and hot-reloads for development
```bash
npm run serve
#or 
yarn serve
```

### Compiles and minifies for production
```bash
npm run build
#or 
yarn build
# production task on Jenkins: xx-web-deploy
```

### Lints and fixes files
```
yarn lint
```

前端开发文档已移至[Wiki](http://10.12.5.188:10023/appdev/mes3/-/wikis/home)
