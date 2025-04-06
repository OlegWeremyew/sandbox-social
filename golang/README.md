# Go start script

```sh
 go run main.go
```

```sh
 go build main.go
```

---

# go build and run container 


## build golang-app image
```sh
  docker build -t golang_app .
````

## start golang app docker container on internal `8081` port
```sh
  docker run -p 8081:8081 golang_app
````

## start golang app docker container on internal `8081` port with specified container name
```sh
  docker run --name goland_app_container -p 8081:8081 golang_app
````


---
