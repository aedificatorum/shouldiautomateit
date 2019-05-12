# Should I automate it?

[Live Demo](https://aedificatorum.github.io/shouldiautomateit/)

:question:

Inspired by [xkcd 1205] (Is it worth the time?):

![Is it worth the time](https://imgs.xkcd.com/comics/is_it_worth_the_time.png)

[xkcd 1205]: https://xkcd.com/1205/

## Publishing
- `npm run build`
- `Copy-Item .\build\* ..\shouldiautomateit-site -Recurse -Force -Verbose`
- Publish gh-pages branch