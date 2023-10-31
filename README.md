# LMS FRONTEND

### Setup instructions

1. Clone the project

```
   git clone https://github.com/Mohitsen11/lms-frontend.git
```

2. Move into the directory

```
   cd lms-frontend
```

3. Install dependencies

```
   npm i
```

4. Run the server

```
   npm run dev
```

### How to setup tailwind in your project [Link]
(https://tailwindcss.com/docs/guides/vite)

1. Install tailwind and other dependencies

```
   npm install -D tailwindcss postcss autoprefixer
```

2. Create `tailwind.config.js` file

```
   npx tailwindcss init -p
```

3. Add the files and extensions to the tailwind config file in content property

```
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
```

4. Add the tailwind directives on the top of src/index.css file

```
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
```

5. Then run the server, tailwind should be integrated...


### Adding plugins and dependencies

```
   npm install @reduxjs/toolkit react-redux react-router-dom react-icons react-chartjs-2 chart.js daisyui axios react-hot-toast @tailwindcss/line-clamp
```

### Addin auto import sort for eslint

1. Install the plugin

```
   npm i eslint-plugin-simple-import-sort
```

2. Add rule in `.eslintrc.cjs` file

```
   'simple-import-sort/imports': 'error',
```

3. Add simple-import-sort in plugins array in `.eslintrc.cjs` file

```
   plugins: [... , 'simple-import-sort'],
```

4. Open settings.json in vscode configuration settings

5. Add the following line

```
   "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true 
    }
```
