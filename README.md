## custom install

```bash
npm add next@latest react@latest react-dom@latest
```

Then, add the following scripts to your package.json file:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

## vercel install

```
vercel deploy --prod
```