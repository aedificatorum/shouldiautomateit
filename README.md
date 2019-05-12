# Should I automate it?

[Live Demo](https://aedificatorum.github.io/shouldiautomateit/)
![Screenshot](/screenshot1.png)

:question:

Inspired by [xkcd 1205] (Is it worth the time?):

![Is it worth the time](https://imgs.xkcd.com/comics/is_it_worth_the_time.png)

[xkcd 1205]: https://xkcd.com/1205/

## Publishing
Published via the gh-pages branch.

**Initial setup**
```powershell
git clone https://github.com/aedificatorum/shouldiautomateit.git
git clone https://github.com/aedificatorum/shouldiautomateit.git shouldiautomateit-site

cd shouldiautomateit-site
git checkout gh-pages

cd..
cd shouldiautomateit
```

**Build & deploy**
```powershell
npm install
npm run build

Get-ChildItem -Path '..\shouldiautomateit-site' -Recurse -Exclude .git |
Select -ExpandProperty FullName |
Sort-Object -Property Length -Descending |
Remove-Item -Force

Copy-Item .\build\* ..\shouldiautomateit-site -Recurse -Force -Verbose
cd ..\shouldiautomateit-site
git add .
git commit -m "adding 1% more awesome"
git push
```