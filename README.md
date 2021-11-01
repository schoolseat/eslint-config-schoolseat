<h1 align="center"> SchoolSeat ESLint Config </h1>

## Usage

1. Install dependencies

```bash
# npm
npm install eslint-config-schoolseat eslint-config-prettier eslint-plugin-prettier prettier eslint-plugin-import --save-dev

# yarn
yarn add eslint-config-schoolseat eslint-config-prettier eslint-plugin-prettier prettier eslint-plugin-import -D

# for typescript, add @typescript-eslint/parser @typescript-eslint/eslint-plugin

```

2. Extends config

```json
// json

{
  "extends": ["schoolseat"]
}
```

For TypeScript, add `schoolseat/typescript`.

```json
// json

{
  "extends": ["schoolseat", "schoolseat/typescript"]
}
```

3. Happy Coding

## 📝 TODO

- [x] TypeScript
- [x] Prettier
- [x] Import Plugin/Config
- [ ] React

<p align="center">Made with ❤️ by <a href="https://github.com/orgs/schoolseat/people">SchoolSeat Team</a></p>
