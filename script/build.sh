webpack --config ./build/webpack_prod.js
if [ ! -f '/Users/lvhongbin/Desktop/github/MyBlog/dist/dllFileNames.dll.js' ]; then
    npm run dll;
fi