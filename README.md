[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

# decision-table-markdown

This little helper is inspired by the blog post ["DECISION TABLES"](https://www.hillelwayne.com/post/decision-tables/) by Hillel Wayne.

`decision-table-markdown` allows you to create a decision table for a given amount of conditions (`true`/`false`).

Right now, you have to clone this repository to change the output (maybe I'll find some time to improve this into a CLI based on the [CLI best practies](https://github.com/lirantal/nodejs-cli-apps-best-practices) by Liran Tal - or somebody sends a PR ;))

## Creating a table

```bash
npx ts-node src/index.ts <numberOfConditions>
```

e.g.

```bash
npx ts-node src/index.ts 3
```

### Output

Plain text:

```txt
| | | | | |
|-|-|-|-|-|
|1|x|x|x||
|2|x|x|-||
|3|x|-|x||
|4|x|-|-||
|5|-|x|x||
|6|-|x|-||
|7|-|-|x||
|8|-|-|-||
```

Displayed as Markdown:

| | | | | |
|-|-|-|-|-|
|1|x|x|x||
|2|x|x|-||
|3|x|-|x||
|4|x|-|-||
|5|-|x|x||
|6|-|x|-||
|7|-|-|x||
|8|-|-|-||

Just fill your condition names into the headers and the expected result into the last column.

## Want to help?

This project is just getting off the ground and could use some help with cleaning things up and refactoring.

If you want to contribute - I'd love it! Just open an issue to work against so you get full credit for your fork. You can open the issue first so we can discuss and you can work your fork as we go along.

If you see a bug, please be so kind as to show how it's failing, and I'll do my best to get it fixed quickly.

Before sending a PR, please [create an issue](issues/new) to introduce your idea and have a reference for your PR.

We're using [conventional commits](https://www.conventionalcommits.org), so please use it for your commits as well.

Also please add tests and make sure to run `npm run lint-ts` or `yarn lint-ts`.

## License

MIT License

Copyright (c) 2020 Alexander Zeitler

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
