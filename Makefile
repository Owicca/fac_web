run:
	sudo docker run --rm -ti -v $(shell pwd):/app -w /app -p 5901:5900 node:latest bash
