
---

## build svelte-app image
```sh
  docker build -t svelte_app .
````

## start svelte app docker container on internal `4444` port
```sh
  docker run -p 4444:5000 svelte_app
````

---
