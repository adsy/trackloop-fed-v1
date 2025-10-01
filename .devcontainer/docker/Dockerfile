FROM node:20.11.0-bookworm-slim

ARG USERNAME=root
ARG WORKSPACE_NAME=workspace

RUN apt-get update && apt-get install -y \
    bash \
    bash-completion \
    git \
    ssh \
    vim \
    wget \
    curl \
    dpkg \
    gnupg \
    apt-transport-https \
    libicu-dev \
    make \
    unzip \
    jq

RUN mkdir /workspace && chown -R root /workspace

RUN apt-get update \
    && apt-get install -y sudo \
    && echo ${USERNAME} ALL=\(root\) NOPASSWD:ALL > /etc/sudoers.d/$USERNAME \
    && chmod 0400 /etc/sudoers.d/$USERNAME

RUN apt-get update && apt-get install -y locales \
    locales-all 
RUN locale-gen en_US.UTF-8  
ENV LANG en_US.UTF-8  
ENV LANGUAGE nl_NL:nl 
ENV LC_ALL en_US.UTF-8  
RUN update-locale LANG=en_US.UTF-8

USER ${USERNAME}
WORKDIR /${WORKSPACE_NAME}
