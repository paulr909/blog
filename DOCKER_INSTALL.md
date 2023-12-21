# Install Docker:

## Update the system packages
```shell
sudo apt update
```
## Install necessary packages to allow apt to use a repository over HTTPS
```shell
sudo apt install apt-transport-https ca-certificates curl software-properties-common
```
## Add Docker's official GPG key
```shell
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
```
## Add Docker repository
```shell
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```
## Update the system packages again
```shell
sudo apt update
```
## Install Docker
```shell
sudo apt install docker-ce docker-ce-cli containerd.io
```
## Verify Docker installation:
```shell
docker --version
```