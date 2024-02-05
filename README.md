

# Setup Project JS


## install library jest for unit testing

run code in terminal
npm install --save-dev jest @types/jest

## install library babel for jest supports javascript module

run code in terminal
npm install --save-dev babel-jest @babel/preset-env

## setup install bublle for jest

documentation : https://babeljs.io/setup#installation


# Setup TypeScript Project

## menambah type script

run code in terminal
npm install --save-dev typescript

alasan kenapa install typescript di development bukan di dependency biasa
karena  type script digunakan di development, saat di compile 
typescript akan jadi javascript

## Setup typescript project 

run code in terminal
npx tsc --init
semua konfigurasi akan di buat di file tsconfig.json
ubah "module" dari "commonjs" menjadi "ES6"

dokumentasi tsc
https://www.typescriptlang.org/tsconfig