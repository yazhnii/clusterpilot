# ClusterPilot

## Overview

ClusterPilot is a containerized web application designed to demonstrate modern deployment and orchestration practices using Docker and Kubernetes. The project showcases how applications can be packaged into containers, deployed as Kubernetes workloads, and exposed through Kubernetes services for scalable and reliable execution.

This project was developed as a hands-on exploration of DevOps fundamentals, including containerization, deployment management, and local Kubernetes environments.

---

## Features

- Containerized application using Docker
- Kubernetes Deployment with multiple replicas
- Service exposure using NodePort
- Local deployment using Docker Desktop Kubernetes
- Scalable architecture through Kubernetes orchestration
- Simplified deployment workflow

---

## Tech Stack

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
├── .github/
│   └── workflows/
│       └── deploy.yml
├── Dockerfile
├── deployment.yaml
├── service.yaml
├── package.json
├── package-lock.json
├── index.html
├── app.js
├── .gitignore
└── README.md
```

---

## Prerequisites

Before running the project, ensure the following are installed:

- Docker Desktop
- Kubernetes (enabled in Docker Desktop)
- kubectl
- Node.js (optional for local development)

---

## Installation & Setup

### Clone the Repository

```bash
git clone https://github.com/yazhnii/clusterpilot.git
cd clusterpilot
```

### Install Dependencies

```bash
npm install
```

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

### Verify Deployment

```bash
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

## Learning Outcomes

Through this project, I gained practical experience in:

- Building and managing Docker images
- Container-based application deployment
- Kubernetes Deployments and Services
- Service exposure using NodePort
- Troubleshooting container deployment issues
- Local DevOps workflows using Docker Desktop

---

## Future Enhancements

- CI/CD integration using GitHub Actions
- Cloud deployment on AWS, Azure, or GCP
- Kubernetes Ingress configuration
- Monitoring and logging integration
- Automatic scaling and load balancing

---

## Author

**Yazhini Sankar**

GitHub: https://github.com/yazhnii

---

## License

This project is licensed for educational and learning purposes.
