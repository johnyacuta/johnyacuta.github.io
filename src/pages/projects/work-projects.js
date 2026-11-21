export const workProjects = [
  {
    employer: 'Zip Co',
    highlights: [
      "Enabled production deployment of the platform's second AI agent, its first customer-facing agent delivered end to end on GCP, by leading implementation of private connectivity between GCP and Azure.",
      'Built an AI-driven self-service platform that grew adoption from zero to eight applications in three months.',
      'Created a reusable Terraform AKS landing-zone module adopted for four clusters and zero-downtime upgrades.',
      'Architected a hub-and-spoke GitOps model managing 39 deployments across development, staging, and production.',
      'Migrated 100% of company pipeline traffic to Managed DevOps Pools (MDOP).',
      "Migrated approximately 30 Terraform infrastructure pipelines from env0 to Atlantis without service disruptions, eliminating the organization's env0 dependency and avoiding contract renewal costs.",
      "Participated in weekly on-call rotations and used Jeli's AI-assisted postmortems to track incidents and follow-up actions through closure.",
    ],
    projects: [
      {
        title: 'AI Enablement & Platform Delivery',
        details: [
          "Enabled production deployment of the platform's second AI agent, the first customer-facing agent delivered end to end on GCP, by leading cross-functional implementation of Terraform-managed private connectivity between GCP and Azure.",
          'Developed an AI-driven self-service platform using a custom Cursor agent to turn natural-language requests into templated Python/FastAPI services and Terraform plans for Azure Container Apps. Internal adoption grew from zero to eight applications in three months.',
        ],
      },
      {
        title: 'Kubernetes & GitOps',
        details: [
          'Built a reusable Terraform AKS landing-zone module with company service dependencies using AI-assisted development, and created its documentation. Guided team adoption; the team used it to build four clusters and complete upgrades with zero production downtime.',
          'Architected a hub-and-spoke GitOps model with a central infrastructure cluster and Argo CD to manage on-demand spoke clusters. Brought third-party applications such as Kyverno under Helm-based configuration management across development, staging, and production, for 39 deployments in total.',
        ],
      },
      {
        title: 'CI/CD & Developer Infrastructure',
        details: [
          'Created a Terraform module for Managed DevOps Pools (MDOP) with AI-assisted development. Migrated Azure DevOps pipelines for approximately five service teams from VM Scale Set (VMSS) agents, documented the handoff, and moved 100% of company pipeline traffic to MDOP, enabling another engineer to operate the solution with minimal guidance.',
          "Migrated approximately 30 Terraform infrastructure pipelines from env0 to an Atlantis-managed repository, transitioning infrastructure provisioning and code management workflows without service disruptions. This eliminated the organization's env0 dependency, enabled platform retirement, and avoided contract renewal costs.",
        ],
      },
      {
        title: 'Production Operations & Incident Response',
        details: [
          "Participated in a weekly on-call rotation, triaging and resolving P1-P5 incidents with typical resolution times of 1-2 hours. Used Jeli's AI-assisted postmortems to document findings and track follow-up actions through closure.",
        ],
      },
    ],
  },
  {
    employer: 'Submittable',
    highlights: [
      'Led AWS and Azure cost optimization by right-sizing AKS clusters, removing unused resources such as Cosmos DB instances, and applying AWS EC2 Savings Plans, generating approximately $100K in annual savings.',
      "Developed four Crossplane modules for AWS-hosted dependencies, including S3 and Microsoft SQL Server, supporting the flagship product's deployment in a new region and establishing an IaC pattern for its planned AWS-to-Azure migration.",
      'Supervised three DevOps engineers building Backstage capabilities across four products, including a Kubernetes onboarding template that reduced deployment to an Argo CD-managed development cluster from about one hour to under five minutes.',
      'Led Shift Left and Shift Right security initiatives that achieved 100% repository scanning coverage and 100% vulnerability scanning coverage across third-party Helm charts.',
      'Developed a centralized Engineering Metrics Exporter API to provide engineering leadership with visibility into team performance and operational metrics.',
      'Delivered a hackathon-recognized AI Assistant from proof of concept to production for approximately 30 customers.',
    ],
    projects: [
      {
        title: 'Cloud & Platform Engineering',
        details: [
          'Led AWS and Azure cost optimization by right-sizing AKS clusters, removing unused Cosmos DB instances, and applying AWS EC2 Savings Plans, generating approximately $100K in annual savings.',
          "Developed four Crossplane modules for AWS-hosted dependencies, including S3 and Microsoft SQL Server. These supported the flagship product's deployment in a new region and established an infrastructure-as-code pattern for its planned AWS-to-Azure migration.",
          'Supervised three DevOps engineers building Backstage platform capabilities across four products. The Kubernetes onboarding template reduced deployment to an Argo CD-managed development cluster from about one hour to under five minutes.',
          'Designed self-service Kubernetes secrets management with the 1Password Operator and documented the workflows, replacing approximately two weekly infrastructure requests for secret creation with engineer-managed self-service.',
          "Deployed the company's first Backstage developer portal and built an automated ingestion script that cataloged all repositories and assigned owners by mapping contributors to their teams.",
        ],
      },
      {
        title: 'Security & Compliance',
        details: [
          'Led organization-wide Shift Left and Shift Right security hardening by enabling GitHub Advanced Security for repository vulnerability scanning and deploying Trivy across four Kubernetes clusters to scan third-party Helm charts. Integrated Renovate to update Helm dependencies through pull requests, achieving 100% repository scanning coverage and 100% vulnerability scanning coverage across third-party Helm charts.',
          'Mentored an engineer through implementing organization-wide single sign-on between GitHub and Microsoft Entra ID, enabling secure, centralized access for the organization.',
          'Centralized GitHub Actions workflows in a shared repository, adding automated tests and code quality checks and enabling GitHub Advanced Security scanning across 99% of organization repositories.',
          'Provided requested infrastructure evidence for the 2022, 2023, and 2024 SOC 2 and HIPAA audits, helping complete all audit evidence requirements.',
        ],
      },
      {
        title: 'Developer Experience & Engineering Metrics',
        details: [
          'Developed a centralized Engineering Metrics Exporter API using Python, FastAPI, and the Prometheus client library. It aggregates metrics on security posture, developer productivity, platform adoption, and infrastructure health from GitHub Advanced Security, Backstage, and Trivy, and integrates with Datadog to give engineering leadership visibility into team performance and operational metrics.',
        ],
      },
      {
        title: 'AI Product Delivery',
        details: [
          'Delivered a hackathon-recognized AI Assistant from proof of concept to production for approximately 30 customers, leading its cross-functional technical vision and implementation with Azure OpenAI and Copilot Studio.',
        ],
      },
      {
        title: 'Technical Leadership & Mentorship',
        details: [
          'Mentored three direct-report engineers through technical book clubs and pair programming, strengthening their ability to apply best practices in automation, security, and scalability.',
        ],
      },
      {
        title: 'Production Operations & Incident Response',
        details: [
          'Participated in a weekly on-call rotation, triaging and resolving P1-P5 incidents with typical resolution times of 1-2 hours. Created postmortems to document findings and tracked follow-up actions through closure.',
        ],
      },
    ],
  },
  {
    employer: 'LexisNexis State Net',
    highlights: [
      'Modernized a legacy product architecture by founding and architecting three federated GraphQL APIs in TypeScript, replacing a 20-year-old Perl monolith and establishing the API foundation for a new product experience.',
      'Led a zero-downtime initiative across 36 Kubernetes product services spanning three clusters by implementing readiness and liveness probes and graceful application termination using SIGTERM, reducing deployment-related service disruptions and improving production reliability.',
      'Reduced post-deployment production verification from 25 minutes to 3 minutes through automated Production Verification Testing (PVT).',
      'Strengthened Kubernetes security across four clusters through secrets management, service-to-service mTLS, and container vulnerability management.',
      'Automated incident creation by integrating Prometheus Alertmanager with ServiceNow using a reusable Go webhook, later adopted by multiple engineering teams.',
      'Received the 2020 LexisNexis Apollo Award for developing a TypeScript function in a GraphQL API that powered open-source text links on the COVID-19 and Racial Equality and Police Reform product pages; those pages saw a 10% increase in user traffic.',
      'Won the 2020 LexisNexis State Net Hackathon by developing an automated Jenkins CI/CD pipeline to deploy Docker images to AWS EKS clusters, reducing development cycle time by 50%.',
    ],
    projects: [
      {
        title: 'Platform Engineering & Kubernetes',
        details: [
          'Led a Chaos Engineering initiative with Chaos Mesh that identified six production reliability improvements, including hardened liveness and readiness probes.',
          'Designed and deployed Linkerd service mesh across four Kubernetes clusters using infrastructure as code and mTLS to secure service-to-service communication and meet security requirements.',
          'Deployed Jaeger across four clusters for distributed tracing. Used production traces to identify and optimize three slow queries in response to customer performance concerns.',
          'Deployed Grafana and Prometheus across all Kubernetes clusters to establish centralized monitoring and observability for production services.',
          'Developed and maintained four AWS CloudFormation templates to provision and manage EKS clusters, enabling repeatable infrastructure-as-code upgrades using eksctl.',
          'Consolidated 35 AWS Elastic Load Balancers into seven Application Load Balancers across AWS EKS clusters, reducing infrastructure complexity and saving approximately $10K annually in cloud costs.',
          'Upgraded four Ambassador API Gateway instances to Ambassador Edge Stack, migrating production workloads without downtime while supporting cost reduction and using AWS Layer 7 load balancing.',
          'Configured Fluentd in the EFK stack to parse and structure application logs into Kibana data buckets, improving log discovery and troubleshooting.',
        ],
      },
      {
        title: 'Security & Compliance',
        details: [
          'Led deployment of Sealed Secrets across four Kubernetes clusters, securing approximately 40 application secrets and supporting organizational security requirements.',
          'Deployed and standardized Twistlock across four clusters using infrastructure as code, achieving full cluster coverage and establishing automated quarterly CVE patching reminders.',
          'Upgraded four AWS Application Load Balancers to TLS 1.2 to meet security requirements without service disruption or downtime.',
          'Integrated LDAP authentication with Kubernetes-hosted applications, including Argo CD and Grafana, enabling engineers to sign in with their corporate legal IDs.',
        ],
      },
      {
        title: 'CI/CD & Engineering Automation',
        details: [
          'Led implementation of PVT using Argo CD Sync Phases and Waves to orchestrate automated post-deployment tests. Built the test suite with Python and Selenium, reducing verification time from 25 minutes to 3 minutes.',
          'Integrated an internal API into CI/CD pipelines to collect and report DORA metrics, achieving full coverage across microservices and improving visibility into engineering delivery.',
          'Automated daily production release reporting with a Python application running as a Kubernetes CronJob. It combines Azure DevOps release notes with Microsoft Teams posts, eliminating 20 minutes of manual reporting each day.',
          'Developed approximately 30 Prometheus Alertmanager rules as configuration code to support production incident detection, triage, and remediation.',
          'Developed highly praised side projects reused by multiple engineering teams, including a documented Go webhook that transforms Prometheus alerts into ServiceNow-compatible incident requests, a release communication manager using Microsoft Teams APIs, and a Jenkins workflow for automatic deployments to development environments.',
        ],
      },
      {
        title: 'Software Architecture & Application Development',
        details: [
          'Founded and architected three TypeScript GraphQL APIs using GraphQL Federation, taking them from initial design through production deployment. They established the API foundation and primary entry point for a new product experience, replacing a 20-year-old Perl monolith.',
          "Implemented approximately 10 TypeScript GraphQL resolvers to support the new product's user interface and deliver required API functionality for launch.",
          'Optimized a Python Flask API by reducing recursive function calls from nine to six and tuning SQL queries for Elasticsearch-backed search, cutting database response time by 25%.',
        ],
      },
      {
        title: 'Technical Leadership & Mentorship',
        details: [
          'Mentored three senior engineers in Git and Kubernetes through hands-on coaching and technical documentation, helping them become independently proficient within a few days.',
        ],
      },
      {
        title: 'Production Operations & Incident Response',
        details: [
          'Participated in a weekly on-call rotation, triaging and resolving P1-P5 incidents with typical resolution times of 1-2 hours. Created postmortems to document findings and tracked follow-up actions through closure.',
        ],
      },
    ],
  },
  {
    employer: 'Intel Corporation',
    highlights: [
      'Maintained typically four pre-release systems and achieved first boot in under two hours per system.',
      'Built an interactive graph to help customers evaluate enhanced Modern Standby test results.',
      'Reduced test execution time from 2-4 hours to 30 minutes through Python and Selenium automation.',
      'Identified and reported approximately 1-3 bugs per session before customer release.',
    ],
    projects: [
      {
        title: 'Pre-release Systems & Validation',
        details: [
          'Assembled and maintained typically four pre-release systems under test with custom chipsets, CPUs, motherboards, and RAM. Flashed custom firmware and installed Windows 10 to achieve first boot in under two hours per system.',
          'Created and manually tested TypeScript features in an AngularJS application on pre-release systems, identifying and reporting approximately 1-3 bugs per session before customer release.',
        ],
      },
      {
        title: 'Application Development',
        details: [
          'Built a TypeScript graph in an AngularJS Windows 10 application to visualize enhanced Modern Standby test results, helping customers assess hardware performance and make informed decisions.',
        ],
      },
      {
        title: 'Test Automation',
        details: [
          'Developed Python and Selenium scripts to automate manual test workflows, reducing test execution time from 2-4 hours to 30 minutes.',
        ],
      },
    ],
  },
];
