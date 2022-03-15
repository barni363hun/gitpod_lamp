FROM gitpod/workspace-mysql

# Install custom tools, runtime, etc.
RUN sudo npm install -g npm@latest

# Force the docker image to build by incrementing this value
ENV INVALIDATE_CACHE=2