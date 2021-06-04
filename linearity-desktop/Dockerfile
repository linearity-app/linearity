# linearity-desktop production build container
# To use this Container, run the following commands:
# 	sudo docker build -t linearity-desktop-build-container .
# 	sudo docker run -it --name linearity-desktop-build-container-instance linearity-desktop-build-container
# Once you are in the container bash shell, you can run the following command in the container to build linearity-desktop:
# 	cd /root/linearity/linearity-desktop;npm install;npm run build
# After doing that, you can copy the compiled AppImage (and directory) by running the following command:
# 	sudo docker cp linearity-desktop-build-container-instance:/root/linearity/linearity-desktop/dist (path on your computer)
FROM ubuntu:20.04
RUN export DEBIAN_FRONTEND=noninteractive;apt-get update -y;apt-get install git nodejs npm -y;git clone https://github.com/linearity-app/linearity /root/linearity
ENTRYPOINT ["/usr/bin/bash"]