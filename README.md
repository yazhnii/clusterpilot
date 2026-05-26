# ClusterPilot

## Overview

ClusterPilot is a containerized web application deployed using Docker and Kubernetes. The project demonstrates core DevOps concepts including containerization, orchestration, deployment management, and service exposure using Kubernetes.

The application is packaged as a Docker image and deployed on a local Kubernetes cluster using Docker Desktop Kubernetes.

---

## Features

- Dockerized application deployment
- Kubernetes Deployment with multiple replicas
- Service exposure using NodePort
- Scalable and container-based architecture
- Local Kubernetes deployment using Docker Desktop
- Simple and reproducible deployment workflow

---

## Technology Stack

| Technology | Purpose |
|------------|---------|
| Node.js | Application Runtime |
| JavaScript | Application Logic |
| Docker | Containerization |
| Kubernetes | Container Orchestration |
| Docker Desktop | Local Kubernetes Environment |
| kubectl | Kubernetes Management |

---

## Project Structure

```text
clusterpilot/
├── Dockerfile
├── deployment.yaml
├── package.json
├── package-lock.json
├── server.js
└── README.md
```

---

## Prerequisites

Before running this project, ensure the following tools are installed:

- Docker Desktop
- Kubernetes (enabled in Docker Desktop)
- kubectl
- Node.js (optional for local development)

---

## Running with Docker

### Build the Docker Image

```bash
docker build -t clusterpilot:latest .
```

### Run the Container

```bash
docker run -d -p 3000:3000 clusterpilot:latest
```

### Access the Application

```text
http://localhost:3000
```

---

## Running with Kubernetes

### Deploy the Application

```bash
kubectl apply -f deployment.yaml
```

### Verify the Deployment

```bash
kubectl get deployments
kubectl get pods
```

### Expose the Application

```bash
kubectl expose deployment clusterpilot-deployment --type=NodePort --port=3000
```

### View Services

```bash
kubectl get svc
```

### Access the Application

Open the NodePort URL displayed in the service output:

```text
http://localhost:<NODE_PORT>
```

---

## Example Kubernetes Commands

Check running pods:

```bash
kubectl get pods
```

Describe a pod:

```bash
kubectl describe pod <pod-name>
```

View application logs:

```bash
kubectl logs <pod-name>
```

Delete deployment:

```bash
kubectl delete deployment clusterpilot-deployment
```

---

## Learning Outcomes

This project provided practical experience in:

- Building and managing Docker images
- Container-based application deployment
- Kubernetes Deployments and ReplicaSets
- Service exposure using NodePort
- Kubernetes troubleshooting and debugging
- Local DevOps workflows using Docker Desktop

---

## Future Enhancements

- CI/CD integration using GitHub Actions
- Cloud deployment on AWS, Azure, or GCP
- Kubernetes Ingress configuration
- Monitoring and observability
- Automatic scaling and load balancing
- Infrastructure as Code support

---

## Author

Yazhini

GitHub: https://github.com/yazhnii

---

## License

This project is intended for educational and learning purposes.
