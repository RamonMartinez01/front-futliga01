build:
	docker build -t front-ligas .

run:
	docker run -dp 8080:8080 --name cont-ligas front-ligas:latest

stop-rm:
	docker container stop cont-ligas && docker container rm cont-ligas