variable "subscription_id" {
  description = "Azure Subscription ID"
  type        = string
}

variable "tenant_id" {
  description = "Azure Tenant ID"
  type        = string
}

variable "client_id" {
  description = "Azure Client ID (App ID)"
  type        = string
}

variable "client_secret" {
  description = "Azure Client Secret"
  type        = string
  sensitive   = true
}

variable "project_name" {
  description = "Project name prefix"
  default     = "webapp"
}

variable "environment" {
  description = "Environment (e.g., dev, prod)"
  default     = "dev"
}

variable "location" {
  description = "Azure region"
  default     = "francecentral"
}

variable "ssh_public_key_path" {
  description = "Path to your SSH public key"
  default     = "~/.ssh/id_rsa.pub"
}