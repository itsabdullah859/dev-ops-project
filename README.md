# Portfolio Website with DevOps Implementation

This is my university project that demonstrates the implementation of DevOps practices for deploying a personal portfolio website. The project uses Terraform for infrastructure, Ansible for configuration, and Docker for containerization.

## Project Overview

This project includes:
- A portfolio website (HTML, CSS, JavaScript)
- Infrastructure as Code using Terraform
- Configuration management using Ansible
- Docker containerization

## Project Structure
```
project/
├── ansible/
│   └── complete-deploy.yml    # Ansible playbook for deployment
├── app/
│   ├── index.html            # Portfolio website
│   ├── css/
│   │   └── styles.css       # Website styles
│   └── js/
│       └── app.js           # Website functionality
└── terraform/
    ├── main.tf              # Main infrastructure code
    ├── variables.tf         # Variable definitions
    └── terraform.tfvars     # Configuration values
```

## How to Run the Project

### 1. Set Up Azure
- Install Azure CLI
- Login to Azure:
  ```
  az login
  ```

### 2. Deploy Infrastructure
- Go to terraform folder
- Initialize Terraform:
  ```
  cd terraform
  terraform init
  terraform apply
  ```

### 3. Deploy Application
- Run the Ansible playbook:
  ```
  cd ansible
  ansible-playbook complete-deploy.yml
  ```

## Website Features
- Responsive design
- Portfolio sections:
  - About Me
  - Projects
  - Skills
  - Contact Form

## Tools Used
- **Azure:** Cloud platform
- **Terraform:** Creating infrastructure
- **Ansible:** Configuration management
- **Docker:** Application containerization
- **Git:** Version control

## Learning Outcomes
Through this project, I learned:
- How to use Infrastructure as Code
- Basic cloud deployment concepts
- Configuration management
- Docker containerization
- DevOps practices

## Future Improvements
Things I would like to add:
- Automated testing
- CI/CD pipeline
- Better security measures
- More website features

## Author
- Name: Abdullah
- GitHub: itsabdullah859

## Acknowledgments
- Thanks to my course instructor
- Azure free credits for students
- Online DevOps community

---
Note: This is a student project created as part of my university coursework.