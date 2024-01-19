# WEB APP KATIK
## _Kalkuator Matematika_
Sebuah web app sederhana untuk menghitung nilai luas dan keliling bangun datar.

[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

## Features 
- Hitung Luas
- Hitung Keliling

## Tech
Katik menggunakan sejumlah proyek sumber terbuka agar berfungsi dengan baik:

- [Visual Studio Code] (https://code.visualstudio.com/) - Visual Studio Code merupakan  sebuah editor kode sumber terbuka yang dikembangkan oleh Microsoft.VS Code dirancang untuk mendukung pengembangan berbagai jenis aplikasi, termasuk web dan aplikasi seluler.
- [Google Chrome] (https://www.google.com/chrome/) - Google Chrome adalah sebuah Peramban web (web browser) ini dirancang untuk memberikan pengalaman menjelajah internet yang cepat, aman, dan sederhana.
- [HTML] - HTML adalah bahasa markup untuk membuat struktur dan konten halaman web.
- [JavaScript] -  JavaScript adalah bahasa pemograman untuk memberikan interaktivitas dan fungsi dinamis pada halaman web.
- [CSS] - CSS adalah bahasa gaya yang digunakan untuk mengatur tampilan dan tata letak elemen-elemen HTML.

## Requirement

- Visual Studio Code 1.85.1.0

## Structure
```
.KATIK REVOU
📦8-jan-24-sfaulia
 ┣ 📂.git
 ┃ ┣ 📂fsmonitor--daemon
 ┃ ┃ ┗ 📂cookies
 ┃ ┣ 📂hooks
 ┃ ┃ ┣ 📜applypatch-msg.sample
 ┃ ┃ ┣ 📜commit-msg.sample
 ┃ ┃ ┣ 📜fsmonitor-watchman.sample
 ┃ ┃ ┣ 📜post-update.sample
 ┃ ┃ ┣ 📜pre-applypatch.sample
 ┃ ┃ ┣ 📜pre-commit.sample
 ┃ ┃ ┣ 📜pre-merge-commit.sample
 ┃ ┃ ┣ 📜pre-push.sample
 ┃ ┃ ┣ 📜pre-rebase.sample
 ┃ ┃ ┣ 📜pre-receive.sample
 ┃ ┃ ┣ 📜prepare-commit-msg.sample
 ┃ ┃ ┣ 📜push-to-checkout.sample
 ┃ ┃ ┣ 📜sendemail-validate.sample
 ┃ ┃ ┗ 📜update.sample
 ┃ ┣ 📂info
 ┃ ┃ ┗ 📜exclude
 ┃ ┣ 📂logs
 ┃ ┃ ┣ 📂refs
 ┃ ┃ ┃ ┣ 📂heads
 ┃ ┃ ┃ ┃ ┗ 📜main
 ┃ ┃ ┃ ┗ 📂remotes
 ┃ ┃ ┃ ┃ ┗ 📂origin
 ┃ ┃ ┃ ┃ ┃ ┣ 📜HEAD
 ┃ ┃ ┃ ┃ ┃ ┗ 📜main
 ┃ ┃ ┗ 📜HEAD
 ┃ ┣ 📂objects
 ┃ ┃ ┣ 📂06
 ┃ ┃ ┃ ┗ 📜43bae4dae233cb5dfc8ace48a45f3ff3b968bc
 ┃ ┃ ┣ 📂23
 ┃ ┃ ┃ ┗ 📜14495be842f11f5e2c63708fdec875dbce5877
 ┃ ┃ ┣ 📂43
 ┃ ┃ ┃ ┗ 📜6c57b419cf107574b604d99d4042f7c64c744a
 ┃ ┃ ┣ 📂80
 ┃ ┃ ┃ ┗ 📜c1894cddce5defdf519b18478a62692bfccee9
 ┃ ┃ ┣ 📂8d
 ┃ ┃ ┃ ┗ 📜bd34136e50d3f14ac11d0729451e9e57483377
 ┃ ┃ ┣ 📂90
 ┃ ┃ ┃ ┗ 📜f71eb7bdd84a0edb5388b15121f4dc5da03d5b
 ┃ ┃ ┣ 📂99
 ┃ ┃ ┃ ┗ 📜dcf561118dd1336c62f05ce60b98ed5e8f61cc
 ┃ ┃ ┣ 📂a7
 ┃ ┃ ┃ ┗ 📜e05c51c99690f3848b511a01a0b674b5f86919
 ┃ ┃ ┣ 📂ce
 ┃ ┃ ┃ ┗ 📜2ff0ac6830d70cf9e5e7824a785f996e341d2b
 ┃ ┃ ┣ 📂info
 ┃ ┃ ┗ 📂pack
 ┃ ┃ ┃ ┣ 📜pack-4a1c4a90227bf4cf0d4d2e7881d482bad7740b4d.idx
 ┃ ┃ ┃ ┣ 📜pack-4a1c4a90227bf4cf0d4d2e7881d482bad7740b4d.pack
 ┃ ┃ ┃ ┗ 📜pack-4a1c4a90227bf4cf0d4d2e7881d482bad7740b4d.rev
 ┃ ┣ 📂refs
 ┃ ┃ ┣ 📂heads
 ┃ ┃ ┃ ┗ 📜main
 ┃ ┃ ┣ 📂remotes
 ┃ ┃ ┃ ┗ 📂origin
 ┃ ┃ ┃ ┃ ┣ 📜HEAD
 ┃ ┃ ┃ ┃ ┗ 📜main
 ┃ ┃ ┗ 📂tags
 ┃ ┣ 📜COMMIT_EDITMSG
 ┃ ┣ 📜config
 ┃ ┣ 📜description
 ┃ ┣ 📜HEAD
 ┃ ┣ 📜index
 ┃ ┗ 📜packed-refs
 ┣ 📂assets
 ┃ ┣ 📜s.png
 ┃ ┣ 📜square.png
 ┃ ┗ 📜squarerectangle.png
 ┣ 📂css
 ┃ ┗ 📜style.css
 ┣ 📂js
 ┃ ┗ 📜script.js
 ┗ 📜index.html
```

