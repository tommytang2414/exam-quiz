export interface Question {
  id: number
  text: string
  options: string[]
  answer: number // 0-based index
  explanation?: string
  domain?: number // 1-6 CCSP domain
}

export const questions: Question[] = [
  {
    id: 1,
    text: "On-demand self-service is a common cloud computing characteristic. Which of the following poor practices is often facilitated as a result of on-demand self-service?",
    options: ["Multi-tenancy Resource pooling", "Shadow IT", "Use of", "default passwords"],
    answer: 2,
    explanation: "wing poor practices is often facilitated as a result of on-demand self-service? Multi-tenancy Resource pooling Shadow IT Use of default passwords Correct Answer: C Explanation: Correct answer: Shadow IT In cloud computing, on-demand self-service is the ability for cloud customers to add, configure, and provision a new cloud service without ever needing to interact with the cloud provider",
    domain: 1
  },
  {
    id: 2,
    text: "What is an essential layer around a virtual machine, subnet, or cloud resource as part of a layered defense strategy?",
    options: ["Network security group", "Cloud gateway Ingress", "and egress monitoring", "Contextual-based security"],
    answer: 0,
    explanation: "ateway Ingress and egress monitoring Contextual-based security Correct Answer: A xmexam",
    domain: 1
  },
  {
    id: 3,
    text: "An organization is concerned that moving certain applications to the cloud was not a good choice. Which of the following does this relate to?",
    options: ["Availability", "Interoperability", "Reversibility", "Portability"],
    answer: 2,
    explanation: "was not a good choice",
    domain: 1
  },
  {
    id: 4,
    text: "Through sustained cooperation with a cloud service provider, the third-party file hosting and sharing platform extends its reach to service areas where it lacks infrastructure. What functional cloud computing role does the third-party file hosting and sharing platform play in this scenario?",
    options: ["Cloud Service Partner Cloud", "Service Customer (CSC) Cloud", "Service Provider (CSP)", "Cloud Service Broker"],
    answer: 0,
    explanation: "acks infrastructure",
    domain: 1
  },
  {
    id: 5,
    text: "A cloud information security manager is building the policies and associated documents for handling cloud assets. She is currently detailing how assets will be understood or listed so that access can be controlled, alerts can be created, and billing can be tracked. What concept enables this?",
    options: ["Datatype", "Values", "Tags", "Identifier"],
    answer: 2,
    explanation: "e policies and associated documents for handling cloud assets",
    domain: 1
  },
  {
    id: 6,
    text: "A corporation is using both the storage and processing capabilities of a cloud Platform as a Service (PaaS) provider. The data that they possess contains personally identifiable information (PII). It is essential to protect this data throughout its lifecycle. When the customer support team is working to resolve a customer's issue and they log in to a database to search for information regarding a customer's purchase, which phase of the lifecycle are they in?",
    options: ["Archive phase", "Create phase", "Use phase", "Store phase"],
    answer: 2,
    explanation: "storage and processing capabilities of a cloud Platform as a Service (PaaS) provider",
    domain: 1
  },
  {
    id: 7,
    text: "Odart is the information security professional working with the development and operations team that is planning for the deployment of a specific application and the Application Programming Interface (API) needed to make it function in their Platform as a Service (PaaS) deployment. As they are building, they get to the point of building the secrets manager. What is its purpose?",
    options: ["Managing access control policies for the API", "Securing sensitive information such as API keys", "Optimizing resource utilization for the API", "Logging and monitoring the API usage"],
    answer: 1,
    explanation: "ion in their Platform as a Service (PaaS) deployment",
    domain: 1
  },
  {
    id: 8,
    text: "What guidelines and best practices do CSPs offer customers for creating secure computing services?",
    options: ["Well-architected frameworks", "Responsibility matrices", "SSAE certifications", "Reference architectures"],
    answer: 0,
    explanation: "SSAE certifications Reference architectures Correct Answer: A xmexam",
    domain: 1
  },
  {
    id: 9,
    text: "Which of the following products should be categorized as platform as a service (PaaS)?",
    options: ["Cloud-based word processor Database", "server for a web", "app Employee collaboration tool", "Virtual private cloud"],
    answer: 1,
    explanation: "ver for a web app Employee collaboration tool Virtual private cloud Correct Answer: B Explanation: Correct answer: Database server for a web app PaaS provides a managed platform for developers to build, test, and deploy applications without managing infrastructure, and a hosted database server for application use is a classic example of PaaS",
    domain: 1
  },
  {
    id: 10,
    text: "The global nature of the cloud adds complexity to a cloud customer's relationships with which of the following?",
    options: ["Regulators Cloud Service", "Providers Cloud Service", "Brokers Cloud", "Service Partners"],
    answer: 0,
    explanation: "s with which of the following? Regulators Cloud Service Providers Cloud Service Brokers Cloud Service Partners Correct Answer: A Explanation: Correct answer: Regulators Some of the important roles and responsibilities in cloud computing include:(ISC)2 CCSP Certified Cloud Security Professional Official Study Guide, 3rd Edition",
    domain: 1
  },
  {
    id: 11,
    text: "Rhonda works for a retail clothing store in the United States as their information security manager. She has been working with the legal department to ensure they comply with all required laws and contracts. Which of the following MOST LIKELY applies?",
    options: ["They must comply with the United States law referred to as the PCI-DSS", "They must comply with the European Union's contractual requirement of GDPR They must", "protect employee medical data that they store, according to HIPAA Their payment card", "companies must follow the Payment Card Industry - Data Security Standard (PCI-DSS)"],
    answer: 3,
    explanation: "h the European Union's contractual requirement of GDPR They must protect employee medical data that they store, according to HIPAA Their payment card companies must follow the Payment Card Industry - Data Security Standard (PCI-DSS) Correct Answer: D Explanation: Correct answer: Their payment card companies must follow the Payment Card Industry - Data Security Standard (PCI-DSS) The PCI-DSS is a contractual requirement that applies to companies that accept and process payment cards",
    domain: 1
  },
  {
    id: 12,
    text: "Which of the following network security controls might require access to mirroring services provided by the cloud provider?",
    options: ["Network Security Groups", "Zero Trust", "Network Geofencing", "Traffic Inspection"],
    answer: 3,
    explanation: "provided by the cloud provider? Network Security Groups Zero Trust Network Geofencing Traffic Inspection Correct Answer: D Explanation: Correct answer: Traffic Inspection Network security controls that are common in cloud environments include:(ISC)2 CCSP Certified Cloud Security Professional Official Study Guide, 3rd Edition",
    domain: 1
  },
  {
    id: 13,
    text: "In which of the following cloud models is the customer primarily responsible for securing their data within a managed system?",
    options: ["PaaS", "DBaaS", "IaaS", "SaaS"],
    answer: 3,
    explanation: "s the customer primarily responsible for securing their data within a managed system? PaaS DBaaS IaaS SaaS Correct Answer: D Explanation: Correct answer: Software as a Service (SaaS) Software as a Service (SaaS) is a type of cloud service in which the cloud provider maintains and manages everything on the back end (including the infrastructure, platform, and server OS), and the cloud customer can simply access the software without needing to do any maintenance on it",
    domain: 1
  },
  {
    id: 14,
    text: "Damien is working for a real estate company that is working on their plans to move to an online document service that would allow their customers to sign contracts no matter what computer platform they have in their possession. So, interoperability is a critical aspect that they are concerned with. What best describes interoperability?",
    options: ["The ability of customers", "to make changes to", "their cloud infrastructure with", "minimal input from the cloud provider The ability for two customers to share the same pool of resources while being isolated from each other The ease with which resources can be rapidly expanded as needed by a cloud customer The ability for two or more systems to exchange information and mutually use that information"],
    answer: 3,
    explanation: "minimal input from the cloud provider The ability for two customers to share the same pool of resources while being isolated from each other The ease with which resources can be rapidly expanded as needed by a cloud customer The ability for two or more systems to exchange information and mutually use that information Correct Answer: D Explanation: Correct answer: The ability for two or more systems to exchange information and mutually use that information Interoperability is defined in ISO/IEC 17788 as the ability for two or more systems to exchange information and mutually use that information",
    domain: 1
  },
  {
    id: 15,
    text: "A Hardware Security Module (HSM) vendor has had their product tested to ensure the physical security of the device. It has proven that it will overwrite the data and keys within if the box is ever opened. What certification would this be?",
    options: ["Federal Information Processing Standard (FIPS) 140-3 Level two Common Criteria", "(CC/ISO/IEC 15408) Evaluation Assurance Level (EAL) four Federal Information Processing", "Standard (FIPS) 140-3 Level three Common Criteria (CC/ISO/IEC 15408) Evaluation", "Assurance Level (EAL) three"],
    answer: 2,
    explanation: "15408) Evaluation Assurance Level (EAL) four Federal Information Processing Standard (FIPS) 140-3 Level three Common Criteria (CC/ISO/IEC 15408) Evaluation Assurance Level (EAL) three xmexam",
    domain: 1
  },
  {
    id: 16,
    text: "In which phase of the secure data life cycle is data labeled according to its sensitivity?",
    options: ["Archive", "Use", "Create", "Share"],
    answer: 2,
    explanation: "is data labeled according to its sensitivity? Archive Use Create Share Correct Answer: C Explanation: Correct answer: Create Labeling data according to sensitivity ensures that appropriate security controls, such as access restrictions, encryption, and monitoring, are applied throughout the data’s life cycle",
    domain: 1
  },
  {
    id: 17,
    text: "Which cloud shared concern relates to ensuring that data can easily move between traditional and cloud services as well as between different cloud services?",
    options: ["Reversibility", "Portability", "Outsourcing", "Interoperability"],
    answer: 1,
    explanation: "s as well as between different cloud services? xmexam",
    domain: 1
  },
  {
    id: 18,
    text: "A large organization is beginning to move their data center operations into the cloud. Their cloud information security manager, Willow, is working with the cloud network architects to ensure that their transition is seamless for the users. They will maintain their Identity and Access Management (IAM) technology in their data center for a while. Data will be stored and processed in the cloud. What technology can they use for IAM that will allow the data center and the cloud to work together?",
    options: ["Lightweight Directory Access Protocol (LDAP)", "Domain Name Service (DNS) Dynamic", "Host Configuration Protocol (DHCP) Security", "Assertion Markup Language (SAML)"],
    answer: 0,
    explanation: "on is seamless for the users",
    domain: 1
  },
  {
    id: 19,
    text: "A research lab needs to run a simulation that requires thousands of CPUs for a few hours. Instead of buying a supercomputer, they provision an enormous cluster of virtual servers in the cloud for the duration of the job. Once the simulation is complete, they shut down the cluster. They accomplish these tasks without contacting any employees from the cloud provider. What advantage of cloud computing does this demonstrate?",
    options: ["Resource pooling Measured", "service On-demand", "self-service Broad", "network access"],
    answer: 2,
    explanation: "vision an enormous cluster of virtual servers in the cloud for the duration of the job",
    domain: 1
  },
  {
    id: 20,
    text: "What is the difference between elasticity and scalability?",
    options: ["Elasticity is the ability of a system to handle more load over the long-term; scalability is the ability of a system to adjust to changes in", "demand in real time. Elasticity is the ability of a system to add resources to increase its performance; scalability is the ability to provide redundancy to", "a system to increase resilience. Elasticity is the ability of a system to automatically grow and shrink based on current demand; scalability is the ability to", "add resources to systems in the long term. Elasticity is the ability of a system to scale vertically; scalability is the ability to scale horizontally."],
    answer: 2,
    explanation: "ly",
    domain: 1
  },
  {
    id: 21,
    text: "Tatum has been working with a cloud data architect and cloud architect to plan the access control model. They want an implementation that will allow them to grant access based on characteristics such as job titles, department, and location. What should they use?",
    options: ["RBAC", "CDAC", "ABAC", "ACL"],
    answer: 2,
    explanation: "plan the access control model",
    domain: 1
  },
  {
    id: 22,
    text: "Which of the following relates to an organization's efforts to operate its cloud infrastructure in a way that complies with applicable laws and regulations?",
    options: ["Privacy", "Security", "Governance", "Auditability"],
    answer: 2,
    explanation: "to operate its cloud infrastructure in a way that complies with applicable laws and regulations? Privacy Security Governance Auditability Correct Answer: C Explanation: Correct answer: Governance When deploying cloud infrastructure, organizations must keep various security-related considerations in mind, including: (ISC)2 CCSP Certified Cloud Security Professional Official Study Guide, 3rd Edition",
    domain: 1
  },
  {
    id: 23,
    text: "The Payment Card Industry Data Security Standard (PCI DSS) includes how many top level requirements?",
    options: ["7", "9", "12", "16"],
    answer: 2,
    explanation: "d (PCI DSS) includes how many top level requirements? xmexam",
    domain: 1
  },
  {
    id: 24,
    text: "Which of the following threats is also known as an \"on-path attack\"?",
    options: ["Reflection Man-in-the-middle", "Distributed denial", "of service", "Path traversal"],
    answer: 1,
    explanation: "ddle Distributed denial of service Path traversal Correct Answer: B Explanation: Correct answer: Man-in-the-middle Man-in-the-middle attacks occur when a threat actor can intercept, read, or modify traffic sent between a sender and receiver",
    domain: 1
  },
  {
    id: 25,
    text: "An organization is establishing its security strategy and wants to begin with foundational, vendor-neutral principles such as least privilege, defense in depth, and secure defaults. Which framework BEST aligns with this approach?",
    options: ["Well-Architected Framework CSA", "Enterprise Architecture Google", "Cloud Architecture Framework", "SANS security principles"],
    answer: 3,
    explanation: "ramework BEST aligns with this approach? Well-Architected Framework CSA Enterprise Architecture Google Cloud Architecture Framework SANS security principles Correct Answer: D xmexam",
    domain: 1
  },
  {
    id: 26,
    text: "Which building block technology for cloud computing provides connectivity between a customer and cloud services?",
    options: ["Storage", "Virtualization", "Networking", "Databases"],
    answer: 2,
    explanation: "nnectivity between a customer and cloud services? Storage Virtualization Networking Databases Correct Answer: C Explanation: Correct answer: Networking Understanding the building blocks of cloud computing is an important step toward understanding more complex topics",
    domain: 1
  },
  {
    id: 27,
    text: "An organization is working as a federal contractor and is subject to certain requirements and standards as part of these contracts. Which of the following organizations is MOST likely to have authored these standards?",
    options: ["IEEE", "NIST", "ISACA", "ISO"],
    answer: 1,
    explanation: "n requirements and standards as part of these contracts",
    domain: 1
  },
  {
    id: 28,
    text: "Which building block technology for cloud services is characterized by hypervisors?",
    options: ["Network", "Virtualization", "Storage", "Orchestration"],
    answer: 1,
    explanation: "zed by hypervisors? Network Virtualization Storage Orchestration Correct Answer: B Explanation: Correct answer: Virtualization Virtualization is one of the foundational technologies in cloud computing",
    domain: 1
  },
  {
    id: 29,
    text: "Cloud environments offered by a cloud services provider that are compliant with Federal Risk and Authorization Management Program (FedRAMP) are MOST likely to be an example of which of the following?",
    options: ["Multi-cloud Hybrid", "cloud Community", "cloud Public", "cloud"],
    answer: 2,
    explanation: "that are compliant with Federal Risk and Authorization Management Program (FedRAMP) are MOST likely to be an example of which of the following? Multi-cloud Hybrid cloud Community cloud Public cloud Correct Answer: C Explanation: Correct answer: Community Cloud Cloud services are available under a few different deployment models, including:(ISC)2 CCSP Certified Cloud Security Professional Official Study Guide, 3rd Edition",
    domain: 1
  },
  {
    id: 30,
    text: "In MOST cases, which of the following components is the CSP responsible for in ALL cloud service models?",
    options: ["Virtual local", "area networks", "Hypervisors Data", "Middleware"],
    answer: 1,
    explanation: "in ALL cloud service models? Virtual local area networks Hypervisors Data Middleware Correct Answer: B Explanation: Correct answer: Hypervisors Hypervisors are the virtualization layer that allows multiple virtual machines to run on the same physical hardware",
    domain: 1
  },
  {
    id: 31,
    text: "Which of the following types of clouds has the GREATEST potential for cost savings due to shared resources?",
    options: ["Hybrid Cloud", "Private Cloud", "Public Cloud", "Community Cloud"],
    answer: 2,
    explanation: "has the GREATEST potential for cost savings due to shared resources? Hybrid Cloud Private Cloud Public Cloud Community Cloud Correct Answer: C Explanation: Correct answer: Public Cloud Cloud services are available under a few different deployment models, including:(ISC)2 CCSP Certified Cloud Security Professional Official Study Guide, 3rd Edition",
    domain: 1
  },
  {
    id: 32,
    text: "An insurance company wants to move some of its on-premises systems to a public cloud. However, it is very concerned about the risk of vendor lock-in. What type of cloud deployment model would you recommend?",
    options: ["Private cloud", "Community cloud", "Hybrid cloud", "Multi-cloud"],
    answer: 3,
    explanation: "blic cloud",
    domain: 1
  },
  {
    id: 33,
    text: "Nica has been hired by a law firm to manage their information security department. It has been determined that they will be closing down their on-premises data center after they complete their move to the cloud. This law firm handles legal affairs for a hospital located in the USA. Which laws are most relevant to this client?",
    options: ["The California Consumer Privacy Act (CCPA) and the Health Information Portability and Accountability Act", "(HIPAA) The Personal Information Protection and Electronic Act (PIPEDA) and Sarbanes Oxley (SOX) The", "Health Information Portability and Accountability Act (HIPAA) and the Personal Information Protection and Electronic", "Act (PIPEDA) Sarbanes Oxley (SOX) and the Gramm Leach and Bliley Act (GLBA)"],
    answer: 0,
    explanation: "rtability and Accountability Act (HIPAA) The Personal Information Protection and Electronic Act (PIPEDA) and Sarbanes Oxley (SOX) The Health Information Portability and Accountability Act (HIPAA) and the Personal Information Protection and Electronic Act (PIPEDA) Sarbanes Oxley (SOX) and the Gramm Leach and Bliley Act (GLBA) Correct Answer: A Explanation: Correct answer: The California Consumer Privacy Act (CCPA) and the Health Information Portability and Accountability Act (HIPAA) CCPA and HIPAA are the best match to a hospital in the US",
    domain: 1
  },
  {
    id: 34,
    text: "Which of the following enables a cloud provider to offer services on a pay-by-usage basis?",
    options: ["Metered Service", "On-Demand Self-Service", "Multitenancy Resource", "Pooling"],
    answer: 0,
    explanation: "s? Metered Service On-Demand Self-Service Multitenancy Resource Pooling Correct Answer: A Explanation: Correct answer: Metered Service The six common characteristics of cloud computing include:(ISC)2 CCSP Certified Cloud Security Professional Official Study Guide, 3rd Edition",
    domain: 1
  },
  {
    id: 35,
    text: "Which of the following activities is an important part of regular security hygiene?",
    options: ["Overwriting", "Hashing", "Patching", "Pooling"],
    answer: 2,
    explanation: "f regular security hygiene? Overwriting Hashing Patching Pooling Correct Answer: C Explanation: Correct answer: Patching Security hygiene is the set of best practices for maintaining the health and security posture of systems",
    domain: 1
  },
  {
    id: 36,
    text: "Which of the following is a standard that defines the requirements for the physical security of devices that perform cryptographic functions?",
    options: ["FIPS 140-2", "Common Criteria", "ISO 27002", "ISO 27017"],
    answer: 0,
    explanation: "for the physical security of devices that perform cryptographic functions? FIPS 140-2 Common Criteria ISO 27002 ISO 27017 Correct Answer: A Explanation: Correct answer: FIPS 140-2 Cloud providers’ systems may be subject to certification against standards that address a specific component, such as a cryptographic module",
    domain: 1
  },
  {
    id: 37,
    text: "You are a part of the DevSecOps teams as an information security manager. They are currently at the beginning stage of creating a new application for a customer. The customer needs a Minimal Viable Product (MVP) for this software as soon as possible. What software development model would fit this scenario?",
    options: ["Agile", "SDLC", "Waterfall", "Monolith"],
    answer: 0,
    explanation: "mation security manager",
    domain: 1
  },
  {
    id: 38,
    text: "Of the following types of cloud deployments, which is MOST susceptible to virtual machine and virtual switch attacks?",
    options: ["Software as a Service (SaaS)", "Platform as a Service (PaaS)", "Database as a Service (DBaaS)", "Infrastructure as a Service (IaaS)"],
    answer: 3,
    explanation: "tabase as a Service (DBaaS) Infrastructure as a Service (IaaS) Correct Answer: D xmexam",
    domain: 1
  },
  {
    id: 39,
    text: "Abigail is designing the infrastructure of Identity and Access Management (IAM) for their future Platform as a Service (PaaS) environment. As she is setting up identities, she knows that which of the following is true of roles?",
    options: ["Roles are permanently assumed by a user or group", "Roles are temporarily assumed by another identity Roles", "are assigned to specific users permanently and occasionally", "assumed Roles are the same as user identities"],
    answer: 1,
    explanation: "les are permanently assumed by a user or group Roles are temporarily assumed by another identity Roles are assigned to specific users permanently and occasionally assumed Roles are the same as user identities Correct Answer: B Explanation: Correct answer: Roles are temporarily assumed by another identity Roles are not the same as they are in traditional data centers",
    domain: 1
  },
  {
    id: 40,
    text: "Which characteristic of cloud computing ensures a customer is charged for only the resources they use?",
    options: ["Resource pooling", "Multi-tenancy Measured", "service Rapid", "elasticity"],
    answer: 2,
    explanation: "esources they use? Resource pooling Multi-tenancy Measured service Rapid elasticity Correct Answer: C Explanation: Correct answer: Measured service Understanding cloud characteristics helps organizations plan for cost management, accountability, and compliance in cloud environments",
    domain: 1
  },
  {
    id: 41,
    text: "A semiconductor company has created an internal tool that helps teams work together remotely in a very efficient manner. The company wants to sell that tool to any other entity by offering it as a standalone cloud service. The service will be sold as an entire application so that customers will not need to worry about any of the infrastructure required to run the app. Which cloud computing service category will they use for the app?",
    options: ["FaaS", "PaaS", "SaaS", "IaaS"],
    answer: 2,
    explanation: "together remotely in a very efficient manner",
    domain: 1
  },
  {
    id: 42,
    text: "Which of the following would benefit the MOST from using a hybrid cloud?",
    options: ["An organization that only requires that certain items are kept very secure, but can't afford a full private cloud", "A small business that doesn't have much sensitive data and is only looking to move email to the cloud", "A healthcare company that needs to ensure that all their data is kept extremely secure and private, no matter", "the expense A group of organizations looking to create a shared service for all their customers to use"],
    answer: 0,
    explanation: "reate a shared service for all their customers to use Correct Answer: A Explanation: Correct answer: An organization that only requires that certain items are kept very secure, but can't afford a full private cloud Hybrid clouds are the best solution for any organization that requires the security of a private cloud for some, but not all, of their data",
    domain: 1
  },
  {
    id: 43,
    text: "Which data sanitization technique can include the process of zeroization?",
    options: ["Overwriting", "Cryptographic erase", "Shredding", "Degaussing"],
    answer: 0,
    explanation: "? Overwriting Cryptographic erase Shredding Degaussing Correct Answer: A Explanation: Correct answer: Overwriting Securely sanitizing data from hardware is critical to prevent recovery of sensitive information",
    domain: 1
  },
  {
    id: 44,
    text: "Blythe has been working for a Fortune 500 healthcare company for many years now. They are beginning to transition from their on-prem data center to a cloud-based solution. She and her team are working to put together information to present to the Board of Directors (BoD) regarding what they can expect from a move to the cloud. Which of the following statements is most likely true when moving from an on-prem data center to Infrastructure as a Service (IaaS)?",
    options: ["The pricing for cloud computing will be less predictable than that of a traditional data center A", "traditional data center will have lower costs on the Operational Expenditures (OpEx) side and higher Capital Expenditures", "(CapEx) Moving to the cloud will have a predictable OpEx. However, the security in the cloud", "is higher. A traditional data center has a more secure operating environment than a cloud environment"],
    answer: 0,
    explanation: "ing for cloud computing will be less predictable than that of a traditional data center A traditional data center will have lower costs on the Operational Expenditures (OpEx) side and higher Capital Expenditures (CapEx) Moving to the cloud will have a predictable OpEx",
    domain: 1
  },
  {
    id: 45,
    text: "Your organization wants to limit the damage that could be done with breached credentials by restricting access to corporate assets based on the principle of least privilege. Which of the following does this BEST describe?",
    options: ["Network security groups", "Zero trust", "network Geofencing", "Traffic inspection"],
    answer: 1,
    explanation: "restricting access to corporate assets based on the principle of least privilege",
    domain: 1
  },
  {
    id: 46,
    text: "Which of the following aspects of an application can a customer control in a Software as-a-Service (SaaS) model?",
    options: ["Software patching Data", "storage Virtual machine", "networking User", "access controls"],
    answer: 3,
    explanation: "a storage Virtual machine networking User access controls Correct Answer: D xmexam",
    domain: 1
  },
  {
    id: 47,
    text: "What do agile development, infrastructure as code, and \"shifting left\" aim to accomplish?",
    options: ["DevOps security Business", "continuity Secure data", "life cycle", "Disaster recovery"],
    answer: 0,
    explanation: "security Business continuity Secure data life cycle Disaster recovery Correct Answer: A Explanation: Correct answer: DevOps security Agile development, infrastructure as code (IaC), and shifting left all aim to integrate security early and continuously into the software development and deployment process",
    domain: 1
  },
  {
    id: 48,
    text: "Quantum computing has the potential to render current encryption ineffective, what could be our solution?",
    options: ["Skipjack MARS", "International Data", "Encryption Algorithm", "Quantum computing"],
    answer: 3,
    explanation: "xam",
    domain: 1
  },
  {
    id: 49,
    text: "What is a MAJOR consideration when using cloud-based backups in a disaster recovery plan?",
    options: ["Baselining", "Interoperability", "Network bandwidth Data", "destruction"],
    answer: 2,
    explanation: "Network bandwidth Data destruction Correct Answer: C xmexam",
    domain: 1
  },
  {
    id: 50,
    text: "Which of the following blockchain types requires permission to join but can be open and utilized by a group of different organizations working together?",
    options: ["Public", "Consortium", "Permissioned", "Private"],
    answer: 1,
    explanation: "ed by a group of different organizations working together? Public Consortium Permissioned Private Correct Answer: B xmexam",
    domain: 1
  },
  {
    id: 51,
    text: "Which of the following scenarios illustrates the platform capabilities of cloud architecture?",
    options: ["A CSP offers customers the ability to provision as many resources as they need, including computing power, storage space, and", "network bandwidth. A CSP allows customers to define network security groups and implement multifactor authentication. A CSP offers a customer", "a standard build of Windows Server that they can customize any way they want. A CSP offers an enterprise resource", "management tool to an organization, which they can access through a browser or by installing an application on their system."],
    answer: 2,
    explanation: "alling an application on their system",
    domain: 1
  },
  {
    id: 52,
    text: "Which of the following is TRUE in terms of maintenance and versioning in the cloud?",
    options: ["The Cloud Service Customer (CSC) is responsible for the maintenance and versioning of the apps they acquire and develop in a Platform as a Service (PaaS) solution. The Cloud Service Provider (CSP) is responsible for the platform, tools, and underlying infrastructure.", "The Cloud Service Customer (CSC) is responsible for the maintenance and versioning of the network and storage as well as the virtualization software in an Infrastructure as a Service (IaaS) solution. The Cloud Service Provider (CSP) is responsible for the physical", "security of the Data Center (DC). The Cloud Service Customer (CSC) is responsible for the maintenance and versioning of all components in a Software as a Service (SaaS) product. The Cloud Service Provider (CSP) is responsible for the Virtual Machines (VM)", "and their patches. Updates and patches are scheduled with the customer in the Software as a Service (SaaS) and Platform as a Service (PaaS) model. The Cloud Service Provider (CSP) is responsible for the virtualization software and the underlying infrastructure."],
    answer: 0,
    explanation: "e underlying infrastructure",
    domain: 1
  },
  {
    id: 53,
    text: "To ensure compliance with regulatory requirements, an organization must conduct an annual assessment of its negotiated service agreements with its present Cloud Service Provider (CSP). This year, the organization may decide to change their CSP due to cost concerns. What is the most critical condition/element to consider and should have been considered before they got into the cloud to begin with?",
    options: ["Resiliency", "Interoperability", "Auditability", "Reversibility"],
    answer: 3,
    explanation: "gotiated service agreements with its present Cloud Service Provider (CSP)",
    domain: 1
  },
  {
    id: 54,
    text: "A software development company is looking to purchase a cloud service. They need the ability to develop and maintain their applications in the cloud. Which of the following cloud service types BEST fits the needs of the software development company?",
    options: ["Database as a Service (DBaaS)", "Software as a Service (SaaS)", "Infrastructure as a Service (IaaS)", "Platform as a Service (PaaS)"],
    answer: 3,
    explanation: "service types BEST fits the needs of the software development company? Database as a Service (DBaaS) Software as a Service (SaaS) Infrastructure as a Service (IaaS) Platform as a Service (PaaS) Correct Answer: D xmexam",
    domain: 1
  },
  {
    id: 55,
    text: "Which technology protects groups of cloud resources through rules that control access?",
    options: ["Geofencing Network", "security groups", "Zero trust", "Ephemeral computing"],
    answer: 1,
    explanation: "? Geofencing Network security groups Zero trust Ephemeral computing Correct Answer: B Explanation: Correct answer: Network security groups Network security in the cloud is based on some key technologies that use rules to control access to groups of cloud resources",
    domain: 1
  },
  {
    id: 56,
    text: "A software vendor who sells firewall and intrusion detection software wants to be able to prove to their customers that they have a quality product. Which standard can they use to have their product evaluated that will result in an Evaluation Assurance Level?",
    options: ["International Standards Organization (ISO) 15408 National Institute of", "Standards and Technology (NIST) Special Publication (SP)", "800-53 Federal Risk and Authorization Management Program", "(FedRAMP) Federal Information Processing Standard (FIPS) 140-3"],
    answer: 0,
    explanation: "nce Level? International Standards Organization (ISO) 15408 National Institute of Standards and Technology (NIST) Special Publication (SP) 800-53 Federal Risk and Authorization Management Program (FedRAMP) Federal Information Processing Standard (FIPS) 140-3 Correct Answer: A Explanation: Correct answer: International Standards Organization (ISO) 15408 ISO 15408 is also known as the common criteria",
    domain: 1
  },
  {
    id: 57,
    text: "A cloud customer who has been using a Hardware Security Module (HSM) is migrating to a newer model. They want to ensure that their keys will never be recovered by anyone, so they are taking actions to ensure that. One of the steps that they are taking is to overwrite the erased data with arbitrary data and zero values. What are they doing?",
    options: ["Degaussing Cryptographic", "erasure Data", "hijacking", "Zeroization"],
    answer: 3,
    explanation: "sure that their keys will never be recovered by anyone, so they are taking actions to ensure that",
    domain: 1
  },
  {
    id: 58,
    text: "An organization is developing a cloud security strategy and seeks a vendor-neutral framework that focuses on mapping assets, risks, and controls. Which framework BEST supports this approach?",
    options: ["CSA Enterprise Architecture", "SANS security", "principles Well-Architected", "Framework ITIL"],
    answer: 0,
    explanation: "s on mapping assets, risks, and controls",
    domain: 1
  },
  {
    id: 59,
    text: "A university is looking to make its environment as green as possible. They want to move to solar and wind power to generate enough power for the entire university, including the student dormitories. They have installed smart thermostats throughout the classroom buildings. They have the ability to monitor the current temperature, both inside the classrooms and outside the building. This way, they can individually change based on the needs of the building. What can enhance this Internet of Things capability?",
    options: ["Cloud computing Internet", "of Things", "Edge computing", "Fog computing"],
    answer: 2,
    explanation: "ble",
    domain: 1
  },
  {
    id: 60,
    text: "Lightweight operating systems like Ubuntu Core and the Zephyr real-time operating system are MOST LIKELY to be used in which applications?",
    options: ["Blockchain Physical", "servers Virtual", "machines Internet", "of Things"],
    answer: 3,
    explanation: "which applications? Blockchain Physical servers Virtual machines Internet of Things Correct Answer: D xmexam",
    domain: 1
  },
  {
    id: 61,
    text: "Which of the following cloud characteristics is a benefit of leasing virtualized cloud infrastructure rather than physical devices in an on-prem data center?",
    options: ["Metered Service On-Demand", "Self-Service Broad Network", "Access Rapid Elasticity", "and Scalability"],
    answer: 3,
    explanation: "n physical devices in an on-prem data center? Metered Service On-Demand Self-Service Broad Network Access Rapid Elasticity and Scalability Correct Answer: D Explanation: Correct answer: Rapid Elasticity and Scalability The six common characteristics of cloud computing include:(ISC)2 CCSP Certified Cloud Security Professional Official Study Guide, 3rd Edition",
    domain: 1
  },
  {
    id: 62,
    text: "Which of the following cloud deployment models is NOT defined in United States (US) National Institute of Standards and Technology (NIST) Special Publication (SP) 800 145?",
    options: ["Hybrid cloud", "Public cloud", "Private cloud", "Multi-cloud"],
    answer: 3,
    explanation: "tandards and Technology (NIST) Special Publication (SP) 800 145? xmexam",
    domain: 1
  },
  {
    id: 63,
    text: "Hemi is working for a New Zealand bank, and they are growing nicely. They really need to carefully address their information security program, especially as they grow into their virtual data center that they are building using Infrastructure as a Service (IaaS) technology. As they are planning their information security carefully to ensure they are in compliance with all relevant laws and they provide the level of service their customers have come to expect, they are looking for a document that contains best practices. What would you recommend?",
    options: ["Federal Information Processing Standard (FIPS) 140-2/3 International Standards", "Organization/International Electrotechnical Commission (ISO/IEC) 27017 International Standards Organization/International", "Electrotechnical Commission (ISO/IEC) 27018 National Institute of Standards", "and Technology (NIST) Special Publication (SP) 800-53"],
    answer: 1,
    explanation: "s and they provide the level of service their customers have come to expect, they are looking for a document that contains best practices",
    domain: 1
  },
  {
    id: 64,
    text: "A hardware manufacturer has a complicated supply chain and wants to expedite payments to its suppliers. It implements a system of IoT devices that detect when parts arrive and pass quality checks, then execute smart contracts to release payments. Which technology that can be aided by cloud computing is the manufacturer using in this scenario?",
    options: ["Blockchain Edge", "computing Containers", "Ephemeral", "computing"],
    answer: 0,
    explanation: "ments a system of IoT devices that detect when parts arrive and pass quality checks, then execute smart contracts to release payments",
    domain: 1
  },
  {
    id: 65,
    text: "A public Cloud Service Provider (CSP) has sold Platform as a Service (PaaS) services to a real estate company. They worked with Daniel, the lead cloud architect, to design how their data would flow across the systems and enable the users to do their jobs. The CSP then worked with a manufacturing company to build a virtual Data Center (vDC). They worked with Shana at the manufacturing company to ensure that they had everything they needed to build their Infrastructure as a Service (IaaS) environment. What characteristic of the public cloud is the CSP responsible for securing for these companies?",
    options: ["Broad network", "access Measured", "service Encryption", "Multi-tenancy"],
    answer: 3,
    explanation: "rked with Daniel, the lead cloud architect, to design how their data would flow across the systems and enable the users to do their jobs",
    domain: 1
  },
  {
    id: 66,
    text: "A hospital wants to create a cloud network, a community cloud, that will allow researchers to share data. This hospital is working on curing certain types of cancer, and the researchers must have access to the medical data of patients with those types of cancer who have had different tests and treatments. A hospital provided data to a community cloud that will allow cancer researchers to share data. The data provided to researchers will have identifying information such as names and phone numbers removed so the researchers cannot identify individuals using the data. The hospital will retain keys and data elements that enable authorized personnel to identify the patients later if necessary. What term BEST describes the steps the hospital took to remove identifying information from the data?",
    options: ["Anonymization Obfuscation", "PII", "masking", "Pseudo-anonymization"],
    answer: 3,
    explanation: "pital is working on curing certain types of cancer, and the researchers must have access to the medical data of patients with those types of cancer who have had different tests and treatments",
    domain: 1
  },
  {
    id: 67,
    text: "Rashid has been working with his customer to understand the Indication of Compromise (IoC) that they have seen within their Security Information and Event Manager (SIEM). The logs show that a bad actor infiltrated their organization through a phishing email. Once the bad actor was in, they traversed the network till they gained access to a firewall. Once they were in the firewall, the bad actor assumed the role the f irewall had to access the database. The database was then copied by the bad actor. This is an example of which type of threat?",
    options: ["Account hijacking Command", "injection Advanced persistent", "threat (APT)", "Data breach"],
    answer: 3,
    explanation: "ormation and Event Manager (SIEM)",
    domain: 1
  },
  {
    id: 68,
    text: "An organization is debating whether it is financially wise to move some operations to the cloud. What type of activity should it perform before making a decision?",
    options: ["Business continuity plan", "Cost/benefit analysis Disaster", "recovery plan Return", "on investment"],
    answer: 1,
    explanation: "activity should it perform before making a decision? Business continuity plan Cost/benefit analysis Disaster recovery plan Return on investment Correct Answer: B Explanation: Correct answer: Cost/benefit analysis Organizations must weigh the costs and benefits before committing to cloud migration",
    domain: 1
  },
  {
    id: 69,
    text: "What is the BIGGEST threat of quantum computing to security?",
    options: ["Disruption of patch", "management Lack of", "regulations Breaking current", "encryption Backwards compatibility"],
    answer: 2,
    explanation: "urrent encryption Backwards compatibility Correct Answer: C Explanation: Correct answer: Breaking current encryption Advances in quantum computing have the potential to undermine existing cryptographic systems",
    domain: 1
  },
  {
    id: 70,
    text: "Demi is a cloud architect working for a manufacturing company. They are preparing to move into the public cloud. They will need full access to and control over the operating systems, storage, and applications. They are not interested in managing physical data centers anymore since it is not their core business. They are willing to relinquish control over the physical infrastructure as a trade off. What cloud category would suit their needs the best?",
    options: ["Communication as a Service (CaaS)", "Infrastructure as a Service (IaaS)", "Platform as a Service (PaaS)", "Software as a Service (SaaS)"],
    answer: 1,
    explanation: "storage, and applications",
    domain: 1
  },
  {
    id: 71,
    text: "Where does edge computing occur?",
    options: ["At each end-user's workstation Close", "to where data is collected", "At an organization's headquarters", "Inside virtual private networks"],
    answer: 1,
    explanation: "vate networks Correct Answer: B Explanation: Correct answer: Close to where data is collected Edge computing places processing power near IoT devices, sensors, or other data sources",
    domain: 1
  },
  {
    id: 72,
    text: "Which of the following concerns is LIKELY to be regulated by ITAR?",
    options: ["Outsourcing", "Orchestration", "Interoperability", "Auditability"],
    answer: 0,
    explanation: "aobao",
    domain: 1
  },
  {
    id: 73,
    text: "We have been working with different Artificial Intelligence (AI) methods for years. While we may not be at a true AI just yet, there have been several great advances in this technology. Which method has the software working to understand, interpret, and generate text that seems to be from a live human?",
    options: ["Natural Language Processing", "(NLP) Machine Learning", "(ML) Bayesian Networks", "Deep Learning (DL)"],
    answer: 0,
    explanation: "al great advances in this technology",
    domain: 1
  },
  {
    id: 74,
    text: "Which transformative technology represents a fundamental risk to encryption?",
    options: ["Confidential computing", "Containers Artificial", "intelligence Quantum", "computing"],
    answer: 3,
    explanation: "nce Quantum computing Correct Answer: D xmexam",
    domain: 1
  },
  {
    id: 75,
    text: "A cloud architect wants to move all their organization's physical hardware to the cloud. This includes routers, switches, firewalls, and servers. They are looking for a service that will allow them to manage the operating systems of the servers and all the applications that will be installed on the servers. However, they no longer want to have to manage any physical hardware. Which type of cloud provider would BEST suit this cloud architect's needs?",
    options: ["Database as a Service (DBaaS)", "Platform as a Service (PaaS)", "Infrastructure as a Service (IaaS)", "Software as a Service (SaaS)"],
    answer: 2,
    explanation: "hat will allow them to manage the operating systems of the servers and all the applications that will be installed on the servers",
    domain: 1
  },
  {
    id: 76,
    text: "Compliance with which of the following standards is OPTIONAL for cloud consumers and cloud service providers working in the relevant industry?",
    options: ["FedRAMP PCI", "DSS G-Cloud", "ISO/IEC", "27017"],
    answer: 3,
    explanation: "NAL for cloud consumers and cloud service providers working in the relevant industry? FedRAMP PCI DSS G-Cloud ISO/IEC 27017 Correct Answer: D Explanation: Correct answer: ISO/IEC 27017 Cloud service providers may have their environments verified against certain standards, including:The Official (ISC)² CCSP CBK Reference, 4th Edition",
    domain: 1
  },
  {
    id: 77,
    text: "In which of the following cloud service models does the cloud provider offer an environment where the customer can build and deploy applications and the provider manages compute, data storage, and other dependencies?",
    options: ["Software as a Service", "Platform as a Service", "Function as a Service", "Infrastructure as a Service"],
    answer: 1,
    explanation: "the provider manages compute, data storage, and other dependencies? xmexam",
    domain: 1
  },
  {
    id: 78,
    text: "Alicia made the decision to create virtual machines through the use of a hypervisor. The hypervisor will be installed after a full Operating System (OS) is deployed. What type of hypervisor is this?",
    options: ["Software-based Software as", "a Service (SaaS)", "Type 1", "Bare metal"],
    answer: 0,
    explanation: "after a full Operating System (OS) is deployed",
    domain: 1
  },
  {
    id: 79,
    text: "What is the defining principle of a zero-trust network?",
    options: ["Monitoring all egress traffic", "Using cryptographic erase Continually verifying", "requests for resources Implementing network", "security groups"],
    answer: 2,
    explanation: "Implementing network security groups Correct Answer: C Explanation: Correct answer: Continually verifying requests for resources Zero trust is a widely adopted model for securing cloud environments in which traditional perimeter defenses are insufficient",
    domain: 1
  },
  {
    id: 80,
    text: "In what form of user access does a CSP integrate with a customer's identity and access management (IAM) system?",
    options: ["Role-based access control", "Multifactor authentication", "Federation Privilege", "access management"],
    answer: 2,
    explanation: "Role-based access control Multifactor authentication Federation Privilege access management Correct Answer: C Explanation: Correct answer: Federation Cloud customers often need to extend their existing IAM systems into the cloud so that users can authenticate seamlessly without separate credentials",
    domain: 1
  },
  {
    id: 81,
    text: "Which of the following scenarios relates to privileged access in identity and access control?",
    options: ["A microservice needs its own account to store data on a system. A systems", "administrator needs to install a new application on a server. An administrator needs physical", "access to a system in a data center that has become inaccessible through the", "network. A user needs to log into a remote system to access some documents."],
    answer: 1,
    explanation: "emote system to access some documents",
    domain: 1
  },
  {
    id: 82,
    text: "A European e-commerce company operates in multiple countries and needs to provide a fast and reliable experience for customers. To achieve this, the company deploys its front-end applications and databases with one cloud service provider in some countries and another cloud service provider in other countries. This strategy avoids vendor lock-in and lets them choose the best provider in each country. What type of cloud deployment model are they using?",
    options: ["Public cloud", "Community cloud", "Hybrid cloud", "Multi-cloud"],
    answer: 3,
    explanation: "nce for customers",
    domain: 1
  },
  {
    id: 83,
    text: "You are assessing a Hardware Security Module (HSM) for your Infrastructure as a Service (IaaS) cloud implementation to protect your data properly. You have found several different vendors, and they are rated against the FIPS 140-3 standard. Of the four levels, which provides the HIGHEST level of security and tamper protection?",
    options: ["Level 1", "Level 4", "Level 3", "Level 2"],
    answer: 1,
    explanation: "for your Infrastructure as a Service (IaaS) cloud implementation to protect your data properly",
    domain: 1
  },
  {
    id: 84,
    text: "Under which of the following cloud service models does the cloud provider control the LARGEST portion of the infrastructure stack?",
    options: ["FaaS", "PaaS", "IaaS", "SaaS"],
    answer: 3,
    explanation: "llowing cloud service models does the cloud provider control the LARGEST portion of the infrastructure stack? FaaS PaaS IaaS SaaS Correct Answer: D Explanation: Correct answer: SaaS Cloud services are typically provided under three main service models: Function as a Service (FaaS) is a form of PaaS in which the customer creates individual functions that can run in the cloud",
    domain: 1
  },
  {
    id: 85,
    text: "A corporation has submitted their product, a Hardware Security Module (HSM), for testing. They need to prove to their customers that it is going to be able to protect itself from physical tampering. The tester has proven that their product will detect tampering attacks and overwrite the stored data with zeros. What have they achieved?",
    options: ["FIPS 140-3 Level 2", "FIPS 140-3 Level 3", "Common Criteria Level 3", "Common Criteria Level 4"],
    answer: 1,
    explanation: "ove to their customers that it is going to be able to protect itself from physical tampering",
    domain: 1
  },
  {
    id: 86,
    text: "Obert is building a private cloud for his corporation with the assistance of many different departments. As they install hypervisors and begin to provision accounts to create virtual machines for different departments, he is wondering if they would be a single tenant or a multi-tenant environment. In a private cloud environment, are there still multiple tenants?",
    options: ["Yes, there could be. A tenancy isolates data and virtual machines from other tenants. These can be different groups within the organization. Yes, there", "could be. A tenancy isolates data and virtual machines from other tenants. These would be the different users within each department. No, there would", "not be. A tenant isolates data services from each other. There is only one company involved when you build a private cloud. No,", "there would not be. A tenant isolates customers from each other, and there is technically only one customer involved in a private cloud."],
    answer: 0,
    explanation: "ants",
    domain: 1
  },
  {
    id: 87,
    text: "If either Structured Query Language (SQL) injection or cross-site scripting vulnerabilities exist within any Software as a Service (SaaS) implementation, customers' data is at risk. Of the following, what is the BEST method for preventing this type of security risk?",
    options: ["Data sanitization", "Output validation", "Input validation", "Bounds checking"],
    answer: 2,
    explanation: "ervice (SaaS) implementation, customers' data is at risk",
    domain: 1
  },
  {
    id: 88,
    text: "Which security concern is MOST relevant for SaaS customers?",
    options: ["Patching the underlying operating", "system Defining network security", "groups Securing login credentials", "Configuring hypervisor settings"],
    answer: 2,
    explanation: "ings Correct Answer: C xmexam",
    domain: 1
  },
  {
    id: 89,
    text: "Through Common Criteria, what does an EAL4 score tell us about an organization's security practices and results?",
    options: ["It has been functionally tested It has", "been structurally tested It has been", "semi-formally designed and tested It has", "been methodically designed, tested, and reviewed"],
    answer: 3,
    explanation: "een semi-formally designed and tested It has been methodically designed, tested, and reviewed Correct Answer: D Explanation: Correct answer: It has been methodically designed, tested, and reviewed The possible Evaluation Assurance Level (EAL) scores are as follows: This is a simple question, but it is here because you might need this information for the test",
    domain: 1
  },
  {
    id: 90,
    text: "You are an auditor examining an organization. While looking at its plans and policies, you discover it has no plan to ensure that operations proceed normally even during a disruption. What should the organization create?",
    options: ["Business continuity plan", "Cost analysis Business", "impact analysis Disaster", "recovery plan"],
    answer: 0,
    explanation: "roceed normally even during a disruption",
    domain: 1
  },
  {
    id: 91,
    text: "Dana is developing a cloud migration business case to propose to the board of directors. While weighing the different options for cloud deployment, Dana and her team are exploring public, private, and hybrid clouds. They currently have a moderate sized data center that includes servers running many traditional operating systems. Which of the following will Dana's team likely recognize as a benefit of using a public cloud deployment?",
    options: ["Full ownership of", "data Control", "over systems", "Security Inexpensive"],
    answer: 3,
    explanation: "tions for cloud deployment, Dana and her team are exploring public, private, and hybrid clouds",
    domain: 1
  },
  {
    id: 92,
    text: "Which of the following is a cloud deployment model?",
    options: ["IaaS", "Distributed", "Community", "Hypervisor"],
    answer: 2,
    explanation: "Distributed Community Hypervisor Correct Answer: C Explanation: Correct answer: Community Deployment models determine how resources are shared, managed, and secured across organizations",
    domain: 1
  },
  {
    id: 93,
    text: "Which of the following is a system/subsystem product certification?",
    options: ["Common Criteria", "G-Cloud FedRAMP", "PCI", "DSS"],
    answer: 0,
    explanation: "ication? xmexam",
    domain: 1
  },
  {
    id: 94,
    text: "An organization has elected to install a load balancer within its cloud environment. This is MOST likely intended to improve which of the following?",
    options: ["Availability", "Resiliency", "Interoperability", "Performance"],
    answer: 1,
    explanation: "environment",
    domain: 1
  },
  {
    id: 95,
    text: "A media company has many remote workers that need high-speed access to large files as well as access to powerful systems to render video. The company will use its resources fully, so it does not want to share with any other organizations. Which cloud deployment model should it use?",
    options: ["Public", "Hybrid", "Private", "Community"],
    answer: 2,
    explanation: "ell as access to powerful systems to render video",
    domain: 1
  },
  {
    id: 96,
    text: "A large international company wants to allow its employees to connect to a cloud based Human Resources application where they can handle all their HR-related issues. The company wants absolute security and control over the cloud-based app. Which deployment model should it use?",
    options: ["Public", "Community", "Private", "Hybrid"],
    answer: 2,
    explanation: "Human Resources application where they can handle all their HR-related issues",
    domain: 1
  },
  {
    id: 97,
    text: "An organization wants to determine whether using a cloud-based project management system has been a good financial decision. What type of activity can evaluate this?",
    options: ["Business continuity plan", "Return on investment", "Cost/benefit analysis Disaster", "recovery plan"],
    answer: 1,
    explanation: "cial decision",
    domain: 1
  },
  {
    id: 98,
    text: "The ability to deploy VMs and use block data storage in the cloud is a feature of which cloud service model?",
    options: ["IaaS", "FaaS", "PaaS", "SaaS"],
    answer: 0,
    explanation: "ure of which cloud service model? xmexam",
    domain: 1
  },
  {
    id: 99,
    text: "Which of the following components is ALWAYS the responsibility of the customer in ALL cloud service categories?",
    options: ["Data Compute", "Physical", "facilities", "Hypervisors"],
    answer: 0,
    explanation: "f the customer in ALL cloud service categories? Data Compute Physical facilities Hypervisors Correct Answer: A Explanation: Correct answer: Data Customers must understand what they always control to avoid misconfigurations and security gaps",
    domain: 1
  },
  {
    id: 100,
    text: "A cloud administrator needs to ensure that data has been completely removed from cloud servers after data migration. The company has an Infrastructure as a Service (IaaS) noSQL (Structured Query Language) server on a public cloud provider. Which data sanitization technique can be used in this cloud environment successfully?",
    options: ["A contract that has a clause that the Cloud Service Provider (CSP) physically degausses all drives that held customer data combined with the customer performing an overwrite of their data", "A contract that has a clause that the Cloud Service Provider (CSP) physically shreds all drives that held customer data combined with cryptographic erasure of the database encryption key A", "contract that has a clause that the Cloud Service Provider (CSP) performs 11 overwrites on all drives that held customer data combined with proper erasure of the database encryption key", "A contract that has a clause that the Cloud Service Provider (CSP) physically destroys all drives that held customer data combined with the customer performing an overwrite of their data"],
    answer: 1,
    explanation: "erforms 11 overwrites on all drives that held customer data combined with proper erasure of the database encryption key A contract that has a clause that the Cloud Service Provider (CSP) physically destroys all drives that held customer data combined with the customer performing an overwrite of their data Correct Answer: B Explanation: Correct answer: A contract that has a clause that the Cloud Service Provider (CSP) physically shreds all drives that held customer data combined with cryptographic erasure of the database encryption key In a cloud environment, where the customer cannot access or control the physical hardware, sanitization methods such as incineration, destruction, and degaussing are not an option",
    domain: 1
  },
  {
    id: 101,
    text: "A company wants to be able to detect unusual behavior on its network. What solution should it implement FIRST?",
    options: ["Create a baseline Apply", "network security groups", "Add patch management", "Implement zero trust"],
    answer: 0,
    explanation: "m Create a baseline Apply network security groups Add patch management Implement zero trust Correct Answer: A Explanation: Correct answer: Create a baseline Anomaly detection requires comparing current activity to known safe activity to spot potential threats",
    domain: 1
  },
  {
    id: 102,
    text: "Concerns about vendor lock-in are MOST related to which of the following?",
    options: ["SLAs", "Maintenance", "Interoperability", "Portability"],
    answer: 3,
    explanation: "llowing? SLAs Maintenance Interoperability Portability Correct Answer: D Explanation: Correct answer: Portability Some important cloud considerations have to do with its effects on operations",
    domain: 1
  },
  {
    id: 103,
    text: "Which of the following is a type of cloud service model?",
    options: ["Elasticity", "Private", "Broker", "PaaS"],
    answer: 3,
    explanation: "S xmexam",
    domain: 1
  },
  {
    id: 104,
    text: "The CSA's Egregious 11 covers what category of items?",
    options: ["API security risks Web application and", "database security risks Common cryptography and", "PKI implementation errors Cloud computing", "and cloud application security risks"],
    answer: 3,
    explanation: "d cloud application security risks Correct Answer: D Explanation: Correct answer: Cloud computing and cloud application security risks The Cloud Security Alliance (CSA) is the publisher of the Egregious 11, which is a list of the top cloud computing and cloud application security risks",
    domain: 1
  },
  {
    id: 105,
    text: "Which of the following network security controls is used to manage access to certain critical or sensitive resources?",
    options: ["Zero Trust Network", "Traffic Inspection", "Network Security", "Groups Geofencing"],
    answer: 2,
    explanation: "bao",
    domain: 1
  },
  {
    id: 106,
    text: "In which of the following cloud deployment models is the cloud provider responsible for the operating systems and hosting environment, while the customer is responsible for deploying their applications within the provided platform infrastructure?",
    options: ["Software as a Service (SaaS)", "Communication as a Service (CaaS)", "Platform as a Service (PaaS)", "Infrastructure as a Service (IaaS)"],
    answer: 2,
    explanation: "ustomer is responsible for deploying their applications within the provided platform infrastructure? Software as a Service (SaaS) Communication as a Service (CaaS) Platform as a Service (PaaS) Infrastructure as a Service (IaaS) Correct Answer: C Explanation: Correct answer: Platform as a Service (PaaS) In a PaaS cloud deployment model, the cloud provider manages and maintains the operating system and hosting environment, while the customer is only responsible for deploying their applications within the given platform",
    domain: 1
  },
  {
    id: 107,
    text: "Teo works for a large multinational bank, and they have built a private cloud with a Managed Service Provider. As they were building it, they setup multiple accounts for different projects and different departments of the business. It was critical that they maintained the security required by banking and privacy regulations. What is the term for the isolation required to protect each of the projects and departments?",
    options: ["Multi-tenancy Tenants", "Hybrid cloud", "Software Defined", "Networking"],
    answer: 0,
    explanation: "they have built a private cloud with a Managed Service Provider",
    domain: 1
  },
  {
    id: 108,
    text: "Which of the following cloud design principles can reduce the risk of vendor lock-in?",
    options: ["Interoperability", "Multi-tenancy", "Portability", "Reversibility"],
    answer: 2,
    explanation: "aobao",
    domain: 1
  },
  {
    id: 109,
    text: "You are an auditor for a company. While examining its plans and policies, you realize it does not have any plans for bringing systems back online after an outage. What type of plan should the company create?",
    options: ["Capacity plan Business", "impact analysis Business", "continuity plan Disaster", "recovery plan"],
    answer: 3,
    explanation: "ine after an outage",
    domain: 1
  },
  {
    id: 110,
    text: "What is cloud bursting?",
    options: ["Exceeding an organization's budget to keep systems running during unusual traffic", "spikes Using a public cloud when private resources are exhausted Losing", "cloud resources due to oversubscription of a Type 1 hypervisor", "Experiencing a data breach with data stored in the cloud"],
    answer: 1,
    explanation: "loud Correct Answer: B Explanation: Correct answer: Using a public cloud when private resources are exhausted Several cloud computing strategies can be used to handle demand spikes",
    domain: 1
  },
  {
    id: 111,
    text: "A corporation has hired Adit as the information security manager responsible for Business Continuity Management (BCM) throughout the business. The current plan that Adit and his team are working on is the critical plan that the incident responders will utilize if there is an event such as a fire or earthquake that affects the data center. The assumption that they are working on is that the facility itself will be destroyed, and they will need to move operations to a different location, at least, temporarily. Which type of document would this be?",
    options: ["Acceptable Use Policy (AUP)", "Disaster Recovery Plan (DRP)", "Incident Response Plan (IRP)", "Business Continuity Plan (BCP)"],
    answer: 1,
    explanation: "Management (BCM) throughout the business",
    domain: 1
  },
  {
    id: 112,
    text: "An organization wants to improve interoperability between services it hosts on premises and services it hosts in a public cloud. What technology aids in this type of communication?",
    options: ["Network security", "groups IAM", "API Virtual", "private network"],
    answer: 2,
    explanation: "n a public cloud",
    domain: 1
  },
  {
    id: 113,
    text: "A company has invested resources and training into moving most of its operations to a single CSP. What type of risk does this expose the company to?",
    options: ["Social engineering Supply", "chain attack", "Complex configurations", "Vendor lock-in"],
    answer: 3,
    explanation: "",
    domain: 1
  },
  {
    id: 114,
    text: "A cloud service provider is looking to offer its own DDoS protection and wants to certify it so that customers can trust its quality. Which standard would be MOST appropriate for them to pursue?",
    options: ["CSA STAR", "FIPS 140-2", "Common Criteria", "FedRAMP"],
    answer: 2,
    explanation: "its own DDoS protection and wants to certify it so that customers can trust its quality",
    domain: 1
  },
  {
    id: 115,
    text: "Cloud service providers will have clear requirements for items such as uptime, customer service response time, and availability. Where would these requirements MOST LIKELY be outlined for the client?",
    options: ["Statement of Work", "Service Level Agreement", "Privacy Level Agreement", "Master Service Agreement"],
    answer: 1,
    explanation: "requirements MOST LIKELY be outlined for the client? Statement of Work Service Level Agreement Privacy Level Agreement Master Service Agreement Correct Answer: B xmexam",
    domain: 1
  },
  {
    id: 116,
    text: "Which solution provides container security by limiting the system calls a container can make?",
    options: ["AppArmor", "Sudo", "SELinux", "Seccomp"],
    answer: 3,
    explanation: "iting the system calls a container can make? AppArmor Sudo SELinux Seccomp Correct Answer: D Explanation: Correct answer: Seccomp One security issue with containers is that a vulnerability in the operating system could allow the container to gain access to the entire system",
    domain: 1
  },
  {
    id: 117,
    text: "Which of the following MOST accurately defines cloud computing?",
    options: ["A model for enabling ubiquitous and on-demand network access to a shared pool of resources", "A centralized platform for managing physical server infrastructure across data centers A set of rules", "and protocols that allow different software applications to communicate and interact with one another A", "technique of packaging an application with all its dependencies into a single self-contained unit"],
    answer: 0,
    explanation: "pendencies into a single self-contained unit Correct Answer: A Explanation: Correct answer: A model for enabling ubiquitous and on-demand network access to a shared pool of resources Cloud computing is defined as a model that allows ubiquitous, convenient, and on-demand network access to a shared pool of configurable computing resources",
    domain: 1
  },
  {
    id: 118,
    text: "According to NIST reference architecture in SP 500-292, which of the following roles is capable of evaluating and reporting on cloud service controls?",
    options: ["Cloud broker Cloud", "auditor Cloud", "service provider", "Cloud carrier"],
    answer: 1,
    explanation: "ting on cloud service controls? Cloud broker Cloud auditor Cloud service provider Cloud carrier Correct Answer: B xmexam",
    domain: 1
  },
  {
    id: 119,
    text: "Justine has been working on the contract between her company, the Cloud Service Customer (CSC), and the Cloud Service Provider (CSP) that they are purchasing a Software as a Service (SaaS) product from. In the shared responsibility model, who is responsible for protecting the application?",
    options: ["Only the CSC Only", "the CSP Both the", "CSC and the CSP", "Cloud Service Partner"],
    answer: 2,
    explanation: "C), and the Cloud Service Provider (CSP) that they are purchasing a Software as a Service (SaaS) product from",
    domain: 1
  },
  {
    id: 120,
    text: "How does reversibility relate to cloud architecture?",
    options: ["Organizations need to be able to back out of an arrangement with a cloud service provider. Organizations", "need to continue to operate under adverse or unexpected conditions at all costs. Organizations need to be", "able to remove and bring back personally identifiable data in datasets to remain compliant. Organizations need", "to develop their architecture so that it can run on as many different systems as possible."],
    answer: 0,
    explanation: "ny different systems as possible",
    domain: 1
  },
  {
    id: 121,
    text: "In which cloud secure data life cycle phase is the data put into a repository, database, or filesystem?",
    options: ["Use", "Create", "Store", "Archive"],
    answer: 2,
    explanation: "atabase, or filesystem? Use Create Store Archive Correct Answer: C xmexam",
    domain: 1
  },
  {
    id: 122,
    text: "What patch management responsibility does a CSP have in an IaaS setting?",
    options: ["Patching the hypervisor Patching guest operating systems Patching", "IoT", "devices", "Patching custom software"],
    answer: 0,
    explanation: "systems Patching IoT devices Patching custom software Correct Answer: A Explanation: Correct answer: Patching the hypervisor In an Infrastructure-as-a-Service (IaaS) model, the CSP is responsible for maintaining the physical hardware and the virtualization layer, including the hypervisor",
    domain: 1
  },
  {
    id: 123,
    text: "The information security manager is working with the cloud deployment team as they prepare to move their data center to the cloud. An important part of their plan is how they are going to get out of the cloud. They would like to reduce the risk of vendor lock-in. What cloud shared consideration should the administrator be looking for?",
    options: ["Interoperability", "Availability", "Portability", "Reversibility"],
    answer: 3,
    explanation: "enter to the cloud",
    domain: 1
  },
  {
    id: 124,
    text: "Amelia manages her company's e-commerce server. She needs to migrate the server to an environment that can efficiently handle both low-traffic periods and scale up to manage higher demand during busy seasons. What cloud feature should Amelia leverage to meet these requirements?",
    options: ["Remediation Dynamic", "optimization Distributed", "resource scheduling", "Resource pooling"],
    answer: 3,
    explanation: "affic periods and scale up to manage higher demand during busy seasons",
    domain: 1
  },
  {
    id: 125,
    text: "You are working with the legal department on a cloud contract with a Managed Service Provider (MSP). They are negotiating the Service Level Agreement (SLA) to address their performance concerns, which include an uptime requirement of 99.9995%. What performance concern does this requirement primarily address?",
    options: ["Portability", "Resiliency", "Performance", "Availability"],
    answer: 3,
    explanation: "a Managed Service Provider (MSP)",
    domain: 1
  },
  {
    id: 126,
    text: "Which of the following is the LEAST vulnerable to attack when a resource is not in use?",
    options: ["Hypervisors Ephemeral", "Computing", "Serverless", "Containers"],
    answer: 1,
    explanation: "is not in use? xmexam",
    domain: 1
  },
  {
    id: 127,
    text: "Which of the following solutions can be difficult to secure because certain security solutions can't be deployed without an underlying OS?",
    options: ["Serverless LXC", "Type 2", "hypervisor Type", "1 hypervisor"],
    answer: 0,
    explanation: "rtain security solutions can't be deployed without an underlying OS? Serverless LXC Type 2 hypervisor Type 1 hypervisor Correct Answer: A Explanation: Correct answer: Serverless Some important security considerations related to virtualization include:(ISC)2 CCSP Certified Cloud Security Professional Official Study Guide, 3rd Edition",
    domain: 1
  },
  {
    id: 128,
    text: "An organization combines offerings from multiple cloud providers into a package customized to a customer's needs. Which of the following roles BEST describes this company?",
    options: ["Cloud Service Partner", "Cloud Customer Cloud", "Service Broker Cloud", "Service Provider"],
    answer: 2,
    explanation: "roles BEST describes this company? Cloud Service Partner Cloud Customer Cloud Service Broker Cloud Service Provider Correct Answer: C xmexam",
    domain: 1
  },
  {
    id: 129,
    text: "Acme Inc.'s CISO is concerned with the risk of cloud vendors and cloud service providers leaking sensitive company data. You are asked to recommend mitigations for the risk related to insider threats at Acme Inc.'s cloud vendors. Which of the following techniques is BEST for reducing the risk of a disgruntled employee at a cloud service provider exfiltrating Acme Inc.'s data?",
    options: ["Enable audit logging for all ingress and", "egress traffic Use customer-managed keys Have employees", "at the cloud service providers sign an", "NDA Run background checks on CSPs"],
    answer: 1,
    explanation: "er threats at Acme Inc",
    domain: 1
  },
  {
    id: 130,
    text: "Acme Inc. would like to move its environment from one cloud provider to another. However, the cloud provider implemented techniques that have made it very difficult to move systems to a new provider. What is this an example of, and how can Acme Inc. reduce the risk of the same thing happening with another vendor?",
    options: ["This is an example of vendor lock-in. Negotiating better contract terms could prevent similar incidents.", "This is an example of vendor lock-out. Negotiating better contract terms could prevent similar incidents.", "This is an example of portability. Negotiating better contract terms could prevent similar incidents.", "This is an example of strong interoperability. Using stronger encryption could prevent similar incidents."],
    answer: 0,
    explanation: "of vendor lock-out",
    domain: 1
  },
  {
    id: 131,
    text: "Which cloud characteristic is discussed when the Central Processing Unit (CPU), memory, network capacity, and other things are allocated to customer virtual machines as they are needed?",
    options: ["Broad network", "access On-demand", "self-service Resource", "pooling Interoperability"],
    answer: 2,
    explanation: "ted to customer virtual machines as they are needed? Broad network access On-demand self-service Resource pooling Interoperability xmexam",
    domain: 1
  },
  {
    id: 132,
    text: "A university is interested in forming a research cooperative with other universities and some local pharmaceutical companies. They want to be able to share information within the cooperative as they research viruses and their transmissions while ensuring no parties outside the cooperative can access the same information. Which cloud deployment model would be MOST appropriate for this workload?",
    options: ["Private cloud", "Public cloud", "Community cloud", "Hybrid cloud"],
    answer: 2,
    explanation: "versities and some local pharmaceutical companies",
    domain: 1
  },
  {
    id: 133,
    text: "A software developer is looking for a way to avoid installing and running application software directly within the operating system. As an alternative, it is suggested they should begin storing applications and any associated library files in the cloud. Which cloud service is being discussed?",
    options: ["Virtual machines", "Hypervisors", "Containerization", "Virtualization"],
    answer: 2,
    explanation: "ation software directly within the operating system",
    domain: 1
  },
  {
    id: 134,
    text: "Which of the following security controls is MOST relevant when using data science tools?",
    options: ["Semaphores Strong", "authentication Versioning", "Service-level", "agreements"],
    answer: 1,
    explanation: "rsioning Service-level agreements Correct Answer: B xmexam",
    domain: 1
  },
  {
    id: 135,
    text: "Which of the following network security controls could be used to ensure that ONLY on-site employees can access corporate cloud resources?",
    options: ["Traffic Inspection Zero", "Trust Network", "Geofencing Network", "Security Groups"],
    answer: 2,
    explanation: "mployees can access corporate cloud resources? Traffic Inspection Zero Trust Network Geofencing Network Security Groups Correct Answer: C Explanation: Correct answer: Geofencing Network security controls that are common in cloud environments include:(ISC)2 CCSP Certified Cloud Security Professional Official Study Guide, 3rd Edition",
    domain: 1
  },
  {
    id: 136,
    text: "A large consulting firm has a hybrid cloud environment. They have a private cloud that they manage on their premises, and they use a large public cloud provider for some of their Platform and Software as a Service (PaaS and SaaS) needs. Their security operations center (SOC) has been processing a few high-priority indications of compromise (IoC) that appear to point to a live incident. For their response, what should they do?",
    options: ["Observe, Orient, Decide, Act", "Reconnaissance, Delivery, Exploitation Reconnaissance,", "Execution, Evasion, Collection", "Sense, Categorize, Respond"],
    answer: 0,
    explanation: "are as a Service (PaaS and SaaS) needs",
    domain: 1
  },
  {
    id: 137,
    text: "A company provides integrated security services specifically designed for a cloud environment. Which of the following BEST describes their role?",
    options: ["Cloud service broker", "Cloud customer Cloud", "service partner Cloud", "service provider"],
    answer: 2,
    explanation: "ir role? Cloud service broker Cloud customer Cloud service partner Cloud service provider Correct Answer: C xmexam",
    domain: 1
  },
  {
    id: 138,
    text: "If a customer has signed up for service that is a Function as a Service (FaaS) model with a public cloud provider, the responsibilities to secure the functional environment must be defined. In the shared responsibility model, what would be the Cloud Provider's (CP) responsibility?",
    options: ["Configuration management", "Account management", "Data security", "Infrastructure security"],
    answer: 3,
    explanation: "oud provider, the responsibilities to secure the functional environment must be defined",
    domain: 1
  },
  {
    id: 139,
    text: "Which characteristic of cloud computing can result in oversubscription?",
    options: ["Measured services", "Multi-tenancy Rapid", "elasticity Broad", "network access"],
    answer: 1,
    explanation: "Multi-tenancy Rapid elasticity Broad network access Correct Answer: B Explanation: Correct answer: Multi-tenancy Multi-tenancy allows multiple customers to share the same physical resources",
    domain: 1
  },
  {
    id: 140,
    text: "A corporation is looking for a way to improve their software development. They use Agile Application Security as their main methodology. They know that they need to improve the testing and analysis of their products. They also know that they need to improve the planning of the application's security as too many things have been overlooked and only caught well into the development process. What tool can they use for this?",
    options: ["Application Security Verification Standard (ASVS)", "International Standards Organization / International", "Electrotechnical Committee (ISO/IEC) 27034 Closed", "box testing Source code review"],
    answer: 0,
    explanation: "ey need to improve the planning of the application's security as too many things have been overlooked and only caught well into the development process",
    domain: 1
  },
  {
    id: 141,
    text: "In what three states must data be secured cryptographically?",
    options: ["Persistent, temporary, ephemeral", "Local, cloud, network", "Use, transit, rest", "Compressed, archived, executable"],
    answer: 2,
    explanation: "table Correct Answer: C xmexam",
    domain: 1
  },
  {
    id: 142,
    text: "Which of the following is MOST relevant to an organization's network of applications and APIs in the cloud?",
    options: ["Privilege Access", "Physical Access", "Service Access", "User Access"],
    answer: 2,
    explanation: "tions and APIs in the cloud? Privilege Access Physical Access Service Access User Access Correct Answer: C Explanation: Correct answer: Service Access Key components of an identity and access management (IAM) policy in the cloud include: Physical access to cloud servers is the responsibility of the cloud service provider, not the customer",
    domain: 1
  },
  {
    id: 143,
    text: "Which cloud service role negotiates relationships between cloud customers' relationships with cloud providers?",
    options: ["Cloud service broker", "Cloud service partner", "Cloud service user", "Cloud auditor"],
    answer: 0,
    explanation: "Cloud service partner Cloud service user Cloud auditor Correct Answer: A xmexam",
    domain: 1
  },
  {
    id: 144,
    text: "What does \"shifting left\" mean in DevSecOps?",
    options: ["Embedding security practices early in the development process Giving users and processes", "the least amount of privileges they need to function Engaging with end-users", "during all phases of development to ensure the project meets business", "objectives Conducting a thorough audit after a project has been completed"],
    answer: 0,
    explanation: "roject has been completed Correct Answer: A Explanation: Correct answer: Embedding security practices early in the development process Embedding security practices early in the software development life cycle helps detect and address issues sooner",
    domain: 1
  },
  {
    id: 145,
    text: "A cloud service provider has published a Service Organization Controls (SOC) 2 report. Which of the following is the PRIMARY purpose of this report?",
    options: ["Auditability Security", "Regulatory", "oversight", "Governance"],
    answer: 0,
    explanation: "is the PRIMARY purpose of this report? xmexam",
    domain: 1
  },
  {
    id: 146,
    text: "An administrator is moving an application from their current cloud provider to a new cloud provider. Which of the following gives them the ability to do this?",
    options: ["Rapid elasticity", "Interoperability", "Portability", "Multi-tenancy"],
    answer: 2,
    explanation: "ollowing gives them the ability to do this? Rapid elasticity Interoperability Portability Multi-tenancy Correct Answer: C xmexam",
    domain: 1
  },
  {
    id: 147,
    text: "What is the purpose of ISO/IEC 27017?",
    options: ["Guidance for the use of credit card payment systems in cloud", "computing environments Guidance for managing personal data privacy in cloud computing", "environments Guidance for information security management systems in cloud computing", "environments Guidance for business continuity management in cloud computing environments"],
    answer: 2,
    explanation: "uting environments Correct Answer: C Explanation: Correct answer: Guidance for information security management systems in cloud computing environments ISO/IEC 27017 builds on the ISO/IEC 27002 standard by adding cloud-specific security controls and implementation guidance",
    domain: 1
  },
  {
    id: 148,
    text: "Which of the following is a major difference between public and private cloud environments?",
    options: ["Multitenancy On-Demand", "Self-Service Broad", "Network Access", "Resource Pooling"],
    answer: 0,
    explanation: "ud environments? Multitenancy On-Demand Self-Service Broad Network Access Resource Pooling Correct Answer: A Explanation: Correct answer: Multitenancy The six common characteristics of cloud computing include:(ISC)2 CCSP Certified Cloud Security Professional Official Study Guide, 3rd Edition",
    domain: 1
  },
  {
    id: 149,
    text: "Which of the following hypervisors is MOST likely to be used by a cloud service provider to provide services to users?",
    options: ["XenServer Parallels", "VMware", "Fusion", "VirtualBox"],
    answer: 0,
    explanation: "a cloud service provider to provide services to users? XenServer Parallels VMware Fusion VirtualBox Correct Answer: A Explanation: Correct answer: XenServer Virtualization allows a single physical computer to host multiple different Virtual Machines (VMs)",
    domain: 1
  },
  {
    id: 150,
    text: "What are three pillars common to a Well-Architected Framework?",
    options: ["Security, reliability, performance", "Asset, risk, control", "Risks, threats, vulnerabilities", "Security, development, operations"],
    answer: 0,
    explanation: "rations xmexam",
    domain: 1
  },
  {
    id: 151,
    text: "Which of the following emerging technologies REDUCES the amount of computation performed on cloud servers?",
    options: ["Blockchain TEE", "Edge Computing", "Artificial", "Intelligence"],
    answer: 2,
    explanation: "ation performed on cloud servers? Blockchain TEE Edge Computing Artificial Intelligence Correct Answer: C Explanation: Correct answer: Edge Computing Cloud computing is closely related to many emerging technologies",
    domain: 1
  },
  {
    id: 152,
    text: "A corporation is planning their move to the cloud. They have decided to use a cloud provided by a Managed Service Provider (MSP). The MSP will retain ownership and management of the cloud and all the infrastructure. The cloud will be more expensive than a Cloud Service Provider (CSP). However, the level of control that this cloud will offer is expanded from that with a CSP. What type of cloud have they selected?",
    options: ["Hybrid cloud", "Private cloud", "Public cloud", "Community cloud"],
    answer: 1,
    explanation: "ce Provider (MSP)",
    domain: 1
  },
  {
    id: 153,
    text: "Which term refers to an organization's ability to easily move operations between different CSPs?",
    options: ["Portability Vendor", "lock-in", "Reversibility", "Interoperability"],
    answer: 0,
    explanation: "een different CSPs? Portability Vendor lock-in Reversibility Interoperability Correct Answer: A Explanation: Correct answer: Portability Avoiding dependence on a single vendor reduces operational and strategic risk",
    domain: 1
  },
  {
    id: 154,
    text: "Poorly secured Internet of Things (IoT) devices often become part of what type of malicious network?",
    options: ["DoS", "Honeynet", "DDoS", "Botnet"],
    answer: 3,
    explanation: "f malicious network? xmexam",
    domain: 1
  },
  {
    id: 155,
    text: "How does cryptographic erase prevent the disclosure of data?",
    options: ["By storing the encrypted data on an airgapped", "system By overwriting the encrypted data with random", "values By encrypting the data with multiple keys", "By destroying the keys needed to decrypt the data"],
    answer: 3,
    explanation: "data Correct Answer: D xmexam",
    domain: 1
  },
  {
    id: 156,
    text: "Belle works for a medium-sized manufacturing organization that has been moving into the cloud. They have a significant number of Platform as a Service (PaaS) solutions from a major cloud provider. They have also moved some of their functionality to a couple of different Software as a Service (SaaS) providers. She is looking for someone to help bring order to the chaos that this has caused. Which type of person/company does she need to help bring order to this variety of different providers?",
    options: ["Cloud service auditor Cloud", "service business manager Cloud", "service integrator Cloud", "service operations manager"],
    answer: 2,
    explanation: "s from a major cloud provider",
    domain: 1
  },
  {
    id: 157,
    text: "Acme Inc. recently moved from an on-premises data center to a public cloud service provider that uses measured service. Which of the following should Acme Inc. expect to experience as a result of this change?",
    options: ["More OpEx and less CapEx Up-front equipment", "purchase, then a locked-in monthly fee", "afterward Locked-in monthly payment that never", "changes More CapEx and less OpEx"],
    answer: 0,
    explanation: "and less CapEx Up-front equipment purchase, then a locked-in monthly fee afterward Locked-in monthly payment that never changes More CapEx and less OpEx Correct Answer: A xmexam",
    domain: 1
  },
  {
    id: 158,
    text: "Which technology provides a distributed and secure data management solution that leverages the cloud while maintaining data privacy and control?",
    options: ["Public", "Hybrid", "Private", "Consortium"],
    answer: 2,
    explanation: "es the cloud while maintaining data privacy and control? Public Hybrid Private Consortium Correct Answer: C xmexam",
    domain: 1
  },
  {
    id: 159,
    text: "An organization is using VMware ESXI. Which of the following is this an example of?",
    options: ["Software based Type", "2 hypervisor Type", "1 hypervisor Application", "based"],
    answer: 2,
    explanation: "hypervisor Application based Correct Answer: C xmexam",
    domain: 1
  },
  {
    id: 160,
    text: "Which of the following BEST achieves the goal of reducing the attack surface in a containerized environment?",
    options: ["Use a specialized container operating system Block traffic", "to TCP port 22 and allow traffic to", "TCP port 23 Use a type II hypervisor", "Send all container logs to an SIEM tool"],
    answer: 0,
    explanation: "w traffic to TCP port 23 Use a type II hypervisor Send all container logs to an SIEM tool Correct Answer: A Explanation: Correct answer: Use a specialized container operating system Specialized container operating systems are operating systems with restricted capabilities intended for use in containerized environments",
    domain: 1
  },
  {
    id: 161,
    text: "Through the International Standard Organization/International Electrotechnical Commisoon (ISO/IEC) 15408-1:2009, what does an EAL2 score tell us about the organization's security practices and results?",
    options: ["It has a formally verified design and", "has been tested It has been methodically", "tested and checked It has been structurally", "tested It has been functionally tested"],
    answer: 2,
    explanation: "actices and results? It has a formally verified design and has been tested It has been methodically tested and checked It has been structurally tested It has been functionally tested Correct Answer: C Explanation: Correct answer: It has been structurally tested ISO 15408 is known as the common criteria",
    domain: 1
  },
  {
    id: 162,
    text: "TEEs are a part of which of the following emerging technologies?",
    options: ["Containers Internet", "of Things", "Blockchain Confidential", "Computing"],
    answer: 3,
    explanation: "t of Things Blockchain Confidential Computing Correct Answer: D Explanation: Correct answer: Confidential Computing Cloud computing is closely related to many emerging technologies",
    domain: 1
  },
  {
    id: 163,
    text: "A company performed a business impact analysis (BIA) when its resources were located on-premises. Now, it has started moving some operations to the cloud. What NEW concern should it add to the BIA that relates to using the cloud?",
    options: ["Social engineering attacks on employees Loss", "of connectivity to the cloud provider", "Lack of support for multifactor authentication", "Hardware failures of on-premises networking equipment"],
    answer: 1,
    explanation: "obao",
    domain: 1
  },
  {
    id: 164,
    text: "A government contractor wants to transfer some sensitive data to the cloud. They need to keep the stored data encrypted. Which standard should they use when choosing an encryption method?",
    options: ["FedRAMP ISO", "27017 Common", "Criteria FIPS", "140-2"],
    answer: 3,
    explanation: "the cloud",
    domain: 1
  },
  {
    id: 165,
    text: "Which of the following emerging technologies improves portability in the cloud?",
    options: ["TEEs Fog", "Computing Containers", "Edge", "Computing"],
    answer: 2,
    explanation: "y in the cloud? TEEs Fog Computing Containers Edge Computing Correct Answer: C Explanation: Correct answer: Containers Cloud computing is closely related to many emerging technologies",
    domain: 1
  },
  {
    id: 166,
    text: "Which cloud computing role delivers value by aggregating services from many vendors, integrating them with an organization's current infrastructure, and customizing services that a Cloud Service Provider (CSP) cannot provide?",
    options: ["Cloud service auditor", "Cloud service partner", "Cloud service", "broker Regulator"],
    answer: 2,
    explanation: "vendors, integrating them with an organization's current infrastructure, and customizing services that a Cloud Service Provider (CSP) cannot provide? Cloud service auditor Cloud service partner Cloud service broker Regulator Correct Answer: C Explanation: Correct answer: Cloud service broker A cloud service broker, also known as a cloud broker or cloud services intermediary, is an entity or organization that acts as an intermediary between cloud service providers and cloud service consumers",
    domain: 1
  },
  {
    id: 167,
    text: "Which of the following is NOT an example of a compute asset?",
    options: ["Application Serverless", "function Virtual", "machine Container", "image"],
    answer: 3,
    explanation: "function Virtual machine Container image Correct Answer: D Explanation: Correct answer: Container image A container image is not running and processing data; therefore, it is not classified as a compute resource",
    domain: 1
  },
  {
    id: 168,
    text: "Which cloud service capability offers a customer FULL control over such resources as operating systems, storage space, and network bandwidth?",
    options: ["Application", "Infrastructure", "Platform", "Database"],
    answer: 1,
    explanation: "er such resources as operating systems, storage space, and network bandwidth? Application Infrastructure Platform Database Correct Answer: B Explanation: Correct answer: Infrastructure Infrastructure is the platform capability type that gives customers full control over virtualized computing resources like operating systems, storage, and network configurations",
    domain: 1
  },
  {
    id: 169,
    text: "Dawson is an information security manager for a Fortune 500 company. He and his team have been working on revising their data governance strategy and the resulting policy. They have decided that they will need to deploy more Data Loss Prevention systems to inspect data on their file systems. They have been experiencing small breaches of data, and they are looking for the source. What phase of the cloud data lifecycle are they in?",
    options: ["Store", "Share", "Use", "Archive"],
    answer: 0,
    explanation: "is an information security manager for a Fortune 500 company",
    domain: 1
  },
  {
    id: 170,
    text: "A student is running two Virtual Machines (VMs) for malware analysis. What type of system are they likely using to run the VMs in their dorm room?",
    options: ["Type 2", "hypervisor Kubernetes", "Type 1", "hypervisor Docker"],
    answer: 0,
    explanation: "ng to run the VMs in their dorm room? Type 2 hypervisor Kubernetes Type 1 hypervisor Docker Correct Answer: A xmexam",
    domain: 1
  },
  {
    id: 171,
    text: "An online predictions market is looking for a cloud service provider (CSP) that has been audited for security and privacy controls. Which criteria should they look for in the CSP?",
    options: ["Enrollment in the STAR", "registry Adherence to PCI-DSS", "Verification by FedRAMP Compliance", "with FIPS 140-2"],
    answer: 0,
    explanation: "ontrols",
    domain: 1
  },
  {
    id: 172,
    text: "An organization is looking to balance concerns about data security with the desire to leverage the scalability and cost savings of the cloud. Which of the following cloud models is the BEST choice for this?",
    options: ["Private Cloud", "Hybrid Cloud", "Community Cloud", "Public Cloud"],
    answer: 1,
    explanation: "and cost savings of the cloud",
    domain: 1
  },
  {
    id: 173,
    text: "The \"CIA triad\" is MOST closely related to which of the following cloud considerations?",
    options: ["Security Governance", "Regulatory", "Oversight", "Privacy"],
    answer: 0,
    explanation: "oud considerations? Security Governance Regulatory Oversight Privacy Correct Answer: A Explanation: Correct answer: Security When deploying cloud infrastructure, organizations must keep various security-related considerations in mind, including: (ISC)2 CCSP Certified Cloud Security Professional Official Study Guide, 3rd Edition",
    domain: 1
  },
  {
    id: 174,
    text: "Which of the following is an example of proper data sanitization in an Infrastructure as a Service (IaaS) cloud environment when a contract for service is being terminated?",
    options: ["The customer corporation creates a Platform as a Service (PaaS) replacement within the same cloud provider and moves their files to the", "new servers The cloud provider moves the customer's files to a new set of hard drives for transport to the on-premises data", "center The customer corporation copies all their files to their on-premises data center and then has the cloud drives removed and shredded", "The customer corporation copies their files to drives within a new cloud provider and encrypts their old environment and destroys the key"],
    answer: 3,
    explanation: "tion copies their files to drives within a new cloud provider and encrypts their old environment and destroys the key Correct Answer: D xmexam",
    domain: 1
  },
  {
    id: 175,
    text: "Dezso and his team are planning on moving to the cloud in a Platform as a Service (PaaS) implementation. As they are evaluating the cloud vendors that they have to choose from, they are concerned about vendor lock-in. What would cause vendor lock in?",
    options: ["Undocumented software Overly expensive", "hardware Poorly written", "Service Level Agreements", "(SLA) Proprietary requirements"],
    answer: 3,
    explanation: "m, they are concerned about vendor lock-in",
    domain: 1
  },
  {
    id: 176,
    text: "An auditor is examining an organization's cloud computing key and secrets management system. They discover that Based on these findings, what should the auditor recommend?",
    options: ["Storing keys and data together A", "multi-user process for key recovery", "Separating HSMs from VMs Transmitting", "keys only out of band"],
    answer: 1,
    explanation: "the auditor recommend? Storing keys and data together A multi-user process for key recovery Separating HSMs from VMs Transmitting keys only out of band Correct Answer: B Explanation: Correct answer: A multi-user process for key recovery Implementing a multi-user process for key recovery ensures secure, recoverable key management processes in cloud environments",
    domain: 1
  },
  {
    id: 177,
    text: "Which cloud computing role provides frameworks that govern cloud data processing?",
    options: ["Cloud service customer", "Cloud service broker", "Regulator Cloud", "service provider"],
    answer: 2,
    explanation: "customer Cloud service broker Regulator Cloud service provider Correct Answer: C Explanation: Correct answer: Regulator Understanding cloud computing roles and responsibilities helps define accountability and compliance for different stakeholders",
    domain: 1
  },
  {
    id: 178,
    text: "Ariel is a cloud administrator configuring a Platform as a Service (PaaS) server-based deployment on a public cloud provider. She needs to know the agreed-upon central processing unit (CPU) speed and bandwidth to configure the server. Where could Ariel f ind this information?",
    options: ["MSA", "MoU", "SLA", "PLA"],
    answer: 2,
    explanation: "S) server-based deployment on a public cloud provider",
    domain: 1
  },
  {
    id: 179,
    text: "Acme Inc. wants to ensure that the sensitive data they have stored on a cloud platform is securely sanitized. Which of the following media sanitization techniques is BEST for this scenario if they have a server-based Platform as a Service deployment?",
    options: ["Physical destruction", "Overwriting Cryptographic", "erasure", "Degaussing"],
    answer: 2,
    explanation: "m is securely sanitized",
    domain: 1
  },
  {
    id: 180,
    text: "Which security concern is MOST relevant to ephemeral computing?",
    options: ["Data erasure of deprovisioned systems Baselining", "of system under normal workloads Implementation", "of the software development life cycle", "Configuration drift from a standard"],
    answer: 0,
    explanation: "fe cycle Configuration drift from a standard Correct Answer: A Explanation: Correct answer: Data erasure of deprovisioned systems Ephemeral computing involves cloud resources that are short-lived, such as systems used to handle spikes in traffic",
    domain: 1
  },
  {
    id: 181,
    text: "Which of the following common characteristics of cloud computing enables cloud customers to access cloud resources on an as-needed basis?",
    options: ["Broad Network", "Access Metered", "Service On-Demand", "Self-Service Multitenancy"],
    answer: 2,
    explanation: "access cloud resources on an as-needed basis? Broad Network Access Metered Service On-Demand Self-Service Multitenancy Correct Answer: C Explanation: Correct answer: On-Demand Self-Service The six common characteristics of cloud computing include:(ISC)2 CCSP Certified Cloud Security Professional Official Study Guide, 3rd Edition",
    domain: 1
  },
  {
    id: 182,
    text: "Cloud security is a difficult task, made all the more difficult by laws and regulations imposing restrictions on cross-border data transfers. The actual hardware in the cloud can be located anywhere, so it is critical to understand where your data resides. Which of the following statements is true regarding who is responsible for the data?",
    options: ["Both the cloud service provider (CSP) and the cloud service customer (CSC) retain responsibility for the data's security regardless of whether cloud", "or non-cloud services are employed The cloud service provider (CSP) retains ultimate responsibility for the data's security regardless of whether cloud or", "non-cloud services are employed The cloud service customer retains ultimate responsibility for the data's security regardless of whether cloud or non-cloud services", "are employed The cloud administrator retains ultimate responsibility for the data's security regardless of whether cloud or non-cloud services are employed"],
    answer: 2,
    explanation: "of whether cloud or non-cloud services are employed The cloud service customer retains ultimate responsibility for the data's security regardless of whether cloud or non-cloud services are employed The cloud administrator retains ultimate responsibility for the data's security regardless of whether cloud or non-cloud services are employed Correct Answer: C Explanation: Correct answer: The cloud service customer retains ultimate responsibility for the data's security regardless of whether cloud or non-cloud services are employed Regardless of whether cloud or non-cloud services are utilized, the data controller [the Cloud Service Customer (CSC)] is ultimately responsible for the data's security",
    domain: 1
  },
  {
    id: 183,
    text: "Which of the following describes the cloud's ability to grow over time as demand increases?",
    options: ["Elasticity", "Scalability", "Mobility", "Agility"],
    answer: 1,
    explanation: "sticity Scalability Mobility Agility xmexam",
    domain: 1
  },
  {
    id: 184,
    text: "Marsha works for a large automobile manufacturer. They have experienced a data breach that has resulted in names, addresses, Vehicle Identification Numbers (VINs), model, year, and color as well as other information being in the hands of a bad actor. This occurred because of another corporation's mishandling of the data. This other corporation handles part of the operations for the manufacturing company. This other corporation left it exposed on an internet-accessible site. What security issue is this?",
    options: ["Accidental cloud data disclosure", "Cloud storage data", "exfiltration Unsecured third-party", "resources System vulnerabilities"],
    answer: 2,
    explanation: "fication Numbers (VINs), model, year, and color as well as other information being in the hands of a bad actor",
    domain: 1
  },
  {
    id: 185,
    text: "Which of the following products is categorized as software as a service (SaaS)?",
    options: ["Application development platform Virtual", "private cloud Compute", "and storage resources", "Cloud-based task scheduler"],
    answer: 3,
    explanation: "oud Compute and storage resources Cloud-based task scheduler Correct Answer: D Explanation: Correct answer: Cloud-based task scheduler SaaS delivers fully developed applications to end-users over the internet",
    domain: 1
  },
  {
    id: 186,
    text: "Acme DB Corp is a cloud service provider (CSP) that operates a platform as a service (PaaS) offering. The Acme DB Corp PaaS offering provides hosted PostgreSQL database access to customers. Acme DB Corp. uses type 1 hypervisors to run the virtual machines (VMs) required for the PaaS offering. Which of the following is Acme DB Corp's responsibility in this scenario?",
    options: ["Database schema changes Secure configuration", "of the databases Secure", "configuration of the VMs", "Efficiency of SQL queries"],
    answer: 2,
    explanation: "es hosted PostgreSQL database access to customers",
    domain: 1
  },
  {
    id: 187,
    text: "A medium-sized photographic services business wants to migrate its systems to the cloud but lacks the internal staff to manage and optimize its cloud environment. It f inds a separate company that specializes in monitoring cloud resources, managing security patches, optimizing costs, and ensuring that the company's cloud environment is always running efficiently and securely. Which type of company is the photographic services business working with?",
    options: ["Cloud service provider", "Cloud service broker", "Cloud service customer", "Cloud service partner"],
    answer: 3,
    explanation: "t lacks the internal staff to manage and optimize its cloud environment",
    domain: 1
  },
  {
    id: 188,
    text: "Your organization must be able to rapidly scale resources up or down, as required, to meet future needs and from a variety of cloud geographical regions. Which cloud characteristic is required in this scenario?",
    options: ["On-demand Elasticity", "High availability", "Resource", "pooling"],
    answer: 1,
    explanation: "m a variety of cloud geographical regions",
    domain: 1
  },
  {
    id: 189,
    text: "A company uses smart security cameras managed by a cloud service. An attacker finds a vulnerability in the API gateway that allows them to bypass authentication processes. By spoofing a legitimate device's identity, the attacker sends a command that changes the IP address of a camera's command and control server to a server they control. The camera then starts sending its video feed and receiving commands from the attacker instead of the legitimate cloud service. Which technology that often works alongside cloud services is involved in this attack?",
    options: ["Blockchain Quantum", "computing Internet", "of Things", "Machine learning"],
    answer: 2,
    explanation: "a vulnerability in the API gateway that allows them to bypass authentication processes",
    domain: 1
  },
  {
    id: 190,
    text: "Where does a client define their performance expectations when working with a cloud provider?",
    options: ["Non-disclosure agreement Service-level", "agreement Master service", "agreement Access", "control list"],
    answer: 1,
    explanation: "ement Service-level agreement Master service agreement Access control list Correct Answer: B Explanation: Correct answer: Service level agreement A service-level agreement (SLA) defines performance expectations, including uptime, response times, and other measurable service metrics between a client and a cloud provider",
    domain: 1
  },
  {
    id: 191,
    text: "Which of the following is PRIMARILY a concern in multi-cloud environments?",
    options: ["Interoperability", "Reversibility", "Performance", "Availability"],
    answer: 0,
    explanation: "Interoperability Reversibility Performance Availability Correct Answer: A Explanation: Correct answer: Interoperability With multi-cloud environments, an organization may have data and services hosted in different providers’ environments",
    domain: 1
  },
  {
    id: 192,
    text: "A cloud information security manager working for a pharmaceutical company has connected to the community cloud that was built by the government health agency to advance science, diagnosis, and patient care. They also have stored their own data with a public cloud provider in the format of both databases and data lakes. Which of the following BEST describes this architecture?",
    options: ["Hybrid cloud", "Public cloud", "Multi-cloud Private", "cloud"],
    answer: 0,
    explanation: "armaceutical company has connected to the community cloud that was built by the government health agency to advance science, diagnosis, and patient care",
    domain: 1
  },
  {
    id: 193,
    text: "Which of the following statements about type 1 hypervisors is TRUE?",
    options: ["Because they run directly on a physical server, type 1 hypervisors have a smaller attack surface than type 2 hypervisors", "Because they run directly on a host operating system, type 1 hypervisors are not susceptible to VM escape attacks Because", "they run directly on a physical server, type 1 hypervisors have a smaller attack surface because they only allow containers", "Because they run directly on a physical server, type 1 hypervisors have a larger attack surface than type 2 hypervisors"],
    answer: 0,
    explanation: "hypervisors Correct Answer: A xmexam",
    domain: 1
  },
  {
    id: 194,
    text: "Which of the following is NOT an example of an organization that provides cloud design patterns?",
    options: ["CSA SANS", "Cloud Service", "Providers", "CDE"],
    answer: 3,
    explanation: "ion that provides cloud design patterns? CSA SANS Cloud Service Providers CDE Correct Answer: D Explanation: Correct answer: CDE Cloud design patterns offer references for designing secure cloud environments",
    domain: 1
  },
  {
    id: 195,
    text: "What are the \"Egregious Eleven\"?",
    options: ["Business agreements Hypervisor", "misconfigurations Common", "threats Cloud", "resource types"],
    answer: 2,
    explanation: "am",
    domain: 1
  },
  {
    id: 196,
    text: "A cloud administrator needs to rapidly deploy an application package throughout a large cloud environment. Which of the following could this engineer use to accomplish this easily?",
    options: ["Hypervisor Containers", "Mobile Device", "Management (MDM)", "Key management"],
    answer: 1,
    explanation: "cloud environment",
    domain: 1
  },
  {
    id: 197,
    text: "What is accomplished by using a trusted execution environment (TEE)?",
    options: ["Assurance of unaltered boot files", "Integrity of critical system files", "Security for data in transit", "Protection of data in use"],
    answer: 3,
    explanation: "ity for data in transit Protection of data in use Correct Answer: D Explanation: Correct answer: Protection of data in use A TEE is a specialized secure area within a processor that safeguards computations and data while they are actively being processed",
    domain: 1
  },
  {
    id: 198,
    text: "A multinational conglomerate company manufactures smart appliances that include washing machines and espresso machines. Some of their products have ended up being used by a consulting firm. These products are in the buildings (lights and such) and in the breakrooms (refrigerators). These products are connected to the network and are sending their logs to the Security Information and Event Manager (SIEM). An analysist in the Security Operations Center (SOC) has been analysing an Indication of Compromise (IoC). The IoC indicates correctly that an attack has occurred by a bad actor that has compromised a virtual desktop that then led to a compromise of the database. What does this say about the smart appliances?",
    options: ["False negative", "False positive", "True negative", "True positive"],
    answer: 2,
    explanation: "hines",
    domain: 1
  },
  {
    id: 199,
    text: "A small business was unhappy with its cloud provider's services. For this reason, the company decided to remove all data and applications from its cloud provider's environment. It was then able to move to another provider without any major impact on its production and operations. What BEST describes the ability to do this?",
    options: ["Interoperability to get all artifacts back from the first provider and move all their data without having to reenter it Interoperability", "between the two cloud providers allows the movement of their data and portability for the data Portability to get all", "artifacts back from the first provider and interoperability to move all their data without having to reenter it Reversibility to", "get all artifacts back from the first provider and portability to move all their data without having to reenter it"],
    answer: 3,
    explanation: "heir data and portability for the data Portability to get all artifacts back from the first provider and interoperability to move all their data without having to reenter it Reversibility to get all artifacts back from the first provider and portability to move all their data without having to reenter it Correct Answer: D Explanation: Correct answer: Reversibility to get all artifacts back from the first provider and portability to move all their data without having to reenter it Reversibility is the ability of a cloud customer to quickly remove all data, applications, artifacts, and anything else that may reside in the cloud provider's environment",
    domain: 1
  },
  {
    id: 200,
    text: "Which of the following activities considers how disruption to an asset will affect an organization?",
    options: ["Business impact analysis", "Return on investment", "Disaster recovery plan", "Business continuity plan"],
    answer: 0,
    explanation: "ct analysis Return on investment Disaster recovery plan Business continuity plan Correct Answer: A Explanation: Correct answer: Business impact analysis Identifying how disruptions to assets affect an organization is an important activity for understanding an organization’s vulnerabilities",
    domain: 1
  },
  {
    id: 201,
    text: "Acme Cloud LLC sells different AWS cloud services to their customers and offers AWS cloud consulting as an additional service. They only provide AWS services and don't offer customization or integration services. What term BEST describes Acme Cloud LLC?",
    options: ["Cloud service provider", "Cloud vendor Cloud", "service partner Cloud", "service broker"],
    answer: 2,
    explanation: "ng as an additional service",
    domain: 1
  },
  {
    id: 202,
    text: "Which of the following considerations MOST closely relates to ensuring that customers' personal data is not accessed by unauthorized users?",
    options: ["Security Regulatory", "Oversight", "Governance", "Privacy"],
    answer: 3,
    explanation: "tions MOST closely relates to ensuring that customers' personal data is not accessed by unauthorized users? Security Regulatory Oversight Governance Privacy Correct Answer: D Explanation: Correct answer: Privacy When deploying cloud infrastructure, organizations must keep various security-related considerations in mind, including: (ISC)2 CCSP Certified Cloud Security Professional Official Study Guide, 3rd Edition",
    domain: 1
  },
  {
    id: 203,
    text: "Filippa has been assessing Hardware Security Modules (HSM) for implementation in their data center. She works for a public Cloud Service Provider (CSP), and their customers need access to such products to be able to store their cryptographic keys securely. What standard do HSMs get certified against that has four levels of certification?",
    options: ["Payment Card Industry Data Security Standards (PCE DSS) National", "Institute of Standards and Technology Special Publication (NIST", "SP) 800-53 Federal Information Processing Standard (FIPS) 140-3", "International Standards Organization/ International Electrotechnical Committee (ISO/IEC) 27001"],
    answer: 2,
    explanation: "ment Card Industry Data Security Standards (PCE DSS) National Institute of Standards and Technology Special Publication (NIST SP) 800-53 Federal Information Processing Standard (FIPS) 140-3 International Standards Organization/ International Electrotechnical Committee (ISO/IEC) 27001 Correct Answer: C xmexam",
    domain: 1
  },
  {
    id: 204,
    text: "Which of the following characteristics of cloud computing enables a cloud provider to operate cost-effectively by distributing costs across multiple cloud customers?",
    options: ["On-Demand Self-Service Metered", "Service Resource Pooling", "Rapid Elasticity", "and Scalability"],
    answer: 2,
    explanation: "ly by distributing costs across multiple cloud customers? On-Demand Self-Service Metered Service Resource Pooling Rapid Elasticity and Scalability Correct Answer: C Explanation: Correct answer: Resource Pooling The six common characteristics of cloud computing include:(ISC)2 CCSP Certified Cloud Security Professional Official Study Guide, 3rd Edition",
    domain: 1
  },
  {
    id: 205,
    text: "Which of the following solutions lets administrators know they are running the MOST up-to-date release of a cloud application?",
    options: ["Service-level agreements", "Portability Version", "control Cloud", "governance"],
    answer: 2,
    explanation: "-date release of a cloud application? Service-level agreements Portability Version control Cloud governance Correct Answer: C Explanation: Correct answer: Version control Administrators need to know they are using the most recent version of applications to protect against known vulnerabilities in software",
    domain: 1
  },
  {
    id: 206,
    text: "A chip manufacturer uses a hybrid cloud setup with some workloads handled on premises and others in the cloud. They decide that they will transfer a workload from on-premises to the cloud. After being transferred, the workload does not work correctly in its new environment. Administrators realize that the transferred workload cannot operate as expected due to the differences in environment configurations and dependencies between the on-premises and cloud environments. Which functional security requirement of cloud computing is the manufacturer having issues with?",
    options: ["Vendor lock-out", "Portability Interoperability", "Vendor", "lock-in"],
    answer: 1,
    explanation: "decide that they will transfer a workload from on-premises to the cloud",
    domain: 1
  },
  {
    id: 207,
    text: "What is the first stage of the cloud data lifecycle?",
    options: ["Use", "Generate", "Create", "Plan"],
    answer: 2,
    explanation: "fecycle? Use Generate Create Plan Correct Answer: C Explanation: Correct answer: Create The cloud data lifecycle consists of six phases",
    domain: 1
  },
  {
    id: 208,
    text: "Which of the following is the MOST relevant security concern related to machine learning?",
    options: ["Cross-site scripting Breeches of", "large data stores Denial", "of service attack on", "AI chatbots On-path attacks"],
    answer: 1,
    explanation: "ack on AI chatbots On-path attacks Correct Answer: B xmexam",
    domain: 1
  },
  {
    id: 209,
    text: "A Cloud Service Provider (CSP) wants to do business with the United States government. Which of the following standards will they be audited against to validate they can sell their services to the United States government?",
    options: ["Federal Information Processing Standard 140-3 International", "Standards Organization 27017 Federal Risk", "and Authorization Management Program Family", "Educational Rights and Privacy Act"],
    answer: 2,
    explanation: "ted States government? Federal Information Processing Standard 140-3 International Standards Organization 27017 Federal Risk and Authorization Management Program Family Educational Rights and Privacy Act Correct Answer: C Explanation: Correct answer: Federal Risk and Authorization Management Program US Federal Risk and Authorization Management Program ( FedRAMP)-compliant offerings and UK G-Cloud are cloud services designed to meet the requirements of the US and UK governments for computing resources",
    domain: 1
  },
  {
    id: 210,
    text: "Which of the following statements about public vs. private cloud environments is FALSE?",
    options: ["Public cloud environments are typically more customizable than private cloud environments Public", "cloud environments have a higher risk of service removal than private cloud", "environments Public cloud environments are typically lower maintenance than private cloud environments", "Public cloud environments typically have lower upfront costs than private cloud environments"],
    answer: 0,
    explanation: "s typically have lower upfront costs than private cloud environments Correct Answer: A Explanation: Correct answer: Public cloud environments are typically more customizable than private cloud environments Public cloud environments are accessible by anyone with an internet connection",
    domain: 1
  },
  {
    id: 211,
    text: "Acme Inc.'s cybersecurity team just declared a network breach as a cybersecurity incident and assigned Vaeda as the incident manager to coordinate further actions. What phase of the incident response lifecycle are Vaeda and the team in?",
    options: ["Detection and", "Analysis Containment", "Governance", "Recovery"],
    answer: 0,
    explanation: "s the incident manager to coordinate further actions",
    domain: 1
  },
  {
    id: 212,
    text: "A company has only local employees who are working with sensitive data. They want to restrict access to resources based on where the access attempt is coming from. What solution should they use?",
    options: ["Network segmentation", "Geofencing Hypervisor", "Data", "mapping"],
    answer: 1,
    explanation: "es based on where the access attempt is coming from",
    domain: 1
  },
  {
    id: 213,
    text: "A corporation has made the difficult decision to move their virtual data center (vDC) that they built using Infrastructure as a Service (IaaS) technology to another cloud provider. One of their first tasks is to move their Structured Query Language (SQL) database. The security term that best describes the movement of the database is which of the following?",
    options: ["Interoperability", "Resiliency", "Auditability", "Portability"],
    answer: 3,
    explanation: "center (vDC) that they built using Infrastructure as a Service (IaaS) technology to another cloud provider",
    domain: 1
  },
  {
    id: 214,
    text: "Which of the following security measures is MOST relevant to a cloud customer using serverless technology under the shared responsibility model?",
    options: ["Patching Disk", "encryption OS", "hardening API", "gateway"],
    answer: 3,
    explanation: "customer using serverless technology under the shared responsibility model? Patching Disk encryption OS hardening API gateway Correct Answer: D Explanation: Correct answer: API gateway The shared responsibility model in a serverless environment requires customers to focus on application-level security rather than infrastructure-level controls",
    domain: 1
  },
  {
    id: 215,
    text: "Which of the following products is MOST LIKELY to be the target of a VM escape attack?",
    options: ["LXC", "XenServer", "Docker", "SIEM"],
    answer: 1,
    explanation: "Y to be the target of a VM escape attack? LXC XenServer Docker SIEM Correct Answer: B Explanation: Correct answer: XenServer Citrix XenServer is a type I hypervisor",
    domain: 1
  },
  {
    id: 216,
    text: "Which of the following is a strategy for maintaining operations during a business disrupting event?",
    options: ["Business Impact Analysis", "Disaster Recovery Plan", "Incident Response Plan", "Business Continuity Plan"],
    answer: 3,
    explanation: "t? Business Impact Analysis Disaster Recovery Plan Incident Response Plan Business Continuity Plan Correct Answer: D Explanation: Correct answer: Business Continuity Plan A Business Continuity Plan (BCP) is a document that contains a predetermined set of instructions or procedures that describe how an organization’s mission/business processes will be sustained during and after a significant disruption",
    domain: 1
  },
  {
    id: 217,
    text: "Leelo works for a corporation that assists both cloud service providers (CSP) and cloud service customers (CSC). They assist in the negotiation of services as well as the management of those services. They also have some of their own software to help with this management. What term is used to describe an individual or organization that serves as an intermediary between cloud customers and a cloud service provider?",
    options: ["Cloud service partner", "Cloud service auditor", "Cloud service broker", "Cloud service reseller"],
    answer: 2,
    explanation: "of services as well as the management of those services",
    domain: 1
  },
  {
    id: 218,
    text: "What role does the GDPR play in cloud computing?",
    options: ["Cloud service customer", "Cloud service broker", "Cloud service", "partner Regulator"],
    answer: 3,
    explanation: "oud service partner Regulator Correct Answer: D Explanation: Correct answer: Regulator The General Data Protection Regulation (GDPR) is a regulatory framework enforced by the European Union that governs how personal data must be collected, processed, and stored",
    domain: 1
  },
  {
    id: 219,
    text: "A large software development company knows that the advent of quantum cryptography will challenge our current cryptographic tools, algorithms, implementations, and software. This corporation is looking for a source of information to help them secure their software and the customers' data into this new future. Where could they turn to for information?",
    options: ["Software Assurance Forum for Excellence in Code (SAFECode)", "National Institute of Standards and Technology (NIST) Open", "Web Application Security Project (OWASP) International Standards", "Organization / International Electrotechnical Committee (ISO/IEC 27034)"],
    answer: 0,
    explanation: "them secure their software and the customers' data into this new future",
    domain: 1
  },
  {
    id: 220,
    text: "Customers often require audits of cloud solutions, including public cloud platforms. Which of the following parties typically audits a cloud service provider and performs assessments that customers can use?",
    options: ["An independent fourth party", "An independent third", "party The customer", "An external party"],
    answer: 1,
    explanation: "loud platforms",
    domain: 1
  },
  {
    id: 221,
    text: "Which of the following tasks is typically easier for operators of private cloud environments?",
    options: ["Scheduling maintenance downtime", "Onboarding new tenants", "Encrypting data", "Scaling infrastructure"],
    answer: 0,
    explanation: "Encrypting data Scaling infrastructure Correct Answer: A xmexam",
    domain: 1
  },
  {
    id: 222,
    text: "Which of the following terms is the MOST specific when talking about a self-learning system for data classification?",
    options: ["Data science", "Machine learning", "Artificial intelligence", "Blockchain"],
    answer: 1,
    explanation: "system for data classification? Data science Machine learning Artificial intelligence Blockchain Correct Answer: B Explanation: Correct answer: Machine learning Machine learning (ML) is one part of artificial intelligence (AI)",
    domain: 1
  },
  {
    id: 223,
    text: "Which cloud service offers the same functionality as a hardware security module (HSM)?",
    options: ["Identity and access", "control Secrets manager", "Network security groups", "Key management service"],
    answer: 3,
    explanation: "y groups Key management service Correct Answer: D xmexam",
    domain: 1
  },
  {
    id: 224,
    text: "A company has asked you to move some of its operations to the cloud. It is primarily concerned with how its systems will be able to continue operations despite adverse conditions, such as power unit or hard drive failures. Which cloud shared consideration should you focus on?",
    options: ["Availability", "Portability", "Resiliency", "Reversibility"],
    answer: 2,
    explanation: "It is primarily concerned with how its systems will be able to continue operations despite adverse conditions, such as power unit or hard drive failures",
    domain: 1
  },
  {
    id: 225,
    text: "Which of the following refers to a cloud customer's ability to grow or shrink their cloud footprint on demand?",
    options: ["Elasticity", "Scalability", "Mobility", "Agility"],
    answer: 0,
    explanation: "customer's ability to grow or shrink their cloud footprint on demand? Elasticity Scalability Mobility Agility Correct Answer: A Explanation: Correct answer: Elasticity(ISC)2 CCSP Certified Cloud Security Professional Official Study Guide, 3rd Edition",
    domain: 1
  },
  {
    id: 226,
    text: "You are responsible for ensuring the protection of information within the Infrastructure as a Service (IaaS) that the cloud architecture team is designing. To ensure that data can be destroyed properly when necessary, you have been working with the team to determine the appropriate method. What option would suit this IaaS customer?",
    options: ["Cryptographic erasure", "Clearing", "Degaussing", "Overwriting"],
    answer: 0,
    explanation: "Infrastructure as a Service (IaaS) that the cloud architecture team is designing",
    domain: 1
  },
  {
    id: 227,
    text: "Which essential characteristic of the cloud says that an organization only pays for what it uses rather than maintaining dedicated servers, operating systems, virtual machines, and so on?",
    options: ["On-demand self-service", "Broad network", "access Multi-tenancy", "Measured service"],
    answer: 3,
    explanation: "es rather than maintaining dedicated servers, operating systems, virtual machines, and so on? On-demand self-service Broad network access Multi-tenancy Measured service Correct Answer: D Explanation: Correct answer: Measured service Measured service means that Cloud Service Providers (CSP) bill for resources consumed",
    domain: 1
  },
  {
    id: 228,
    text: "Which of the following technologies is used to enable confidential computing?",
    options: ["Trusted execution", "environment Homomorphic", "encryption Quantum", "computing Blockchain"],
    answer: 0,
    explanation: "m computing Blockchain Correct Answer: A xmexam",
    domain: 1
  },
  {
    id: 229,
    text: "Your organization currently hosts its cloud environment in the organization's data center. The organization utilizes a provider for their backup solution in accordance with their business continuity plan. Which configuration BEST describes their deployment?",
    options: ["Cloud service backup, private backup", "Cloud service backup, third-party backup", "Private cloud, private backup Private", "cloud, cloud service backup"],
    answer: 3,
    explanation: "ance with their business continuity plan",
    domain: 1
  },
  {
    id: 230,
    text: "Bai is working on moving the company's critical infrastructure to a public cloud provider. Knowing that she has to ensure that the company is in compliance with the requirements of the European Union's (EU) General Data Protection Regulation (GDPR) country specific laws since the cloud provider is the data processor, at what point should she begin discussions with the cloud provider about this specific protection?",
    options: ["Establishment of Service Level Agreements (SLA) Data Processing", "Agreement (DPA) negotiation Configuration of the Platform", "as a Service (PaaS) windows servers At", "the moment of reversing their cloud status"],
    answer: 1,
    explanation: ") General Data Protection Regulation (GDPR) country specific laws since the cloud provider is the data processor, at what point should she begin discussions with the cloud provider about this specific protection? Establishment of Service Level Agreements (SLA) Data Processing Agreement (DPA) negotiation Configuration of the Platform as a Service (PaaS) windows servers At the moment of reversing their cloud status Correct Answer: B Explanation: Correct answer: Data Processing Agreement (DPA) negotiation Under the EU's GDPR requirements for each country, there is a requirement for a cloud customer to inform the cloud provider that they will be storing personal data (a",
    domain: 1
  },
  {
    id: 231,
    text: "A corporation has systems that apply the principles of data science to uncover useful information from the data that enables them to make better business decisions. It is using which of the following?",
    options: ["Blockchain Machine", "learning Quantum", "computing Artificial", "intelligence"],
    answer: 1,
    explanation: "them to make better business decisions",
    domain: 1
  },
  {
    id: 232,
    text: "Which of these cloud-related factors is MOST related to an organization's ability to implement an integrated multi-cloud architecture?",
    options: ["Reversibility", "Interoperability", "Resiliency", "Portability"],
    answer: 1,
    explanation: "ability to implement an integrated multi-cloud architecture? Reversibility Interoperability Resiliency Portability Correct Answer: B Explanation: Correct answer: Interoperability Interoperability is defined, in ISO/IEC 17788, as “the ability of two or more systems or applications to exchange information and to mutually use the information that has been exchanged",
    domain: 1
  },
  {
    id: 233,
    text: "A global manufacturer uses IoT sensors to monitor factory equipment. The sensors send data to a local server at each manufacturing plant, which in turn communicates with a dashboard in the cloud. An attacker discovers a vulnerability in these local servers that relay commands between the cloud dashboard and the IoT devices. The attacker is able to impersonate a legitimate sensor and begin sending malicious commands that cause robotics to malfunction. Which type of technology has been compromised in this situation?",
    options: ["IoT Edge", "computing Artificial", "intelligence", "Containers"],
    answer: 1,
    explanation: "sensors send data to a local server at each manufacturing plant, which in turn communicates with a dashboard in the cloud",
    domain: 1
  },
  {
    id: 234,
    text: "Which threat is the MOST common cause of cloud security incidents?",
    options: ["Missing patches on hypervisor software", "Weak encryption key management", "Inadequate access controls Insider", "threats at data centers"],
    answer: 2,
    explanation: "ata centers Correct Answer: C xmexam",
    domain: 1
  },
  {
    id: 235,
    text: "Managing the root account on a Linux computer and the rights assigned to it falls under which of the following?",
    options: ["SAM", "EAM", "PAM", "IAM"],
    answer: 2,
    explanation: "x computer and the rights assigned to it falls under which of the following? SAM EAM PAM IAM Correct Answer: C Explanation: Correct answer: PAM The root account on a Linux computer has elevated privileges and should be managed under Privileged Access Management (PAM), which is part of Identity and Access Management (IAM)",
    domain: 1
  },
  {
    id: 236,
    text: "Acme Inc. wants to use a cloud service model for its applications. Acme Inc. has requirements to reduce maintenance costs and limit its capital expenditures. There is no single cloud service provider that meets all of their application-level requirements. Which of the following cloud models is the BEST choice for Acme Inc. to optimize its cloud environment for the various applications and data being hosted there?",
    options: ["Multi-Cloud Private", "Cloud Public", "Cloud Community", "Cloud"],
    answer: 0,
    explanation: "nance costs and limit its capital expenditures",
    domain: 1
  },
  {
    id: 237,
    text: "Leonidas has been working through the process of assessing and evaluating potential cloud providers to host their needs within the Platform as a Service (PaaS) cloud model. One of the critical aspects that he has been trying to determine is if they will be able to remove their data from the cloud provider in the future should they determine that the cloud is not the right solution for them or if they need to change service providers. What term matches their concern of removing their data from the cloud provider?",
    options: ["Reversibility", "Portability", "Availability", "Interoperability"],
    answer: 0,
    explanation: "otential cloud providers to host their needs within the Platform as a Service (PaaS) cloud model",
    domain: 1
  },
  {
    id: 238,
    text: "AWS Lambda is BEST described by which of the following cloud service models?",
    options: ["FaaS", "SaaS", "PaaS", "IaaS"],
    answer: 0,
    explanation: "? xmexam",
    domain: 1
  },
  {
    id: 239,
    text: "A cloud provider has assembled all the cloud resources from routers to servers and switches, as well as the central processing unit (CPU), random access memory (RAM), and storage within the servers. Then, they made them available for allocation to their customers. Which term BEST describes this process?",
    options: ["Resource pooling", "On-demand self-service", "Reversibility Data", "portability"],
    answer: 0,
    explanation: "s, as well as the central processing unit (CPU), random access memory (RAM), and storage within the servers",
    domain: 1
  },
  {
    id: 240,
    text: "Which method of data disposal is feasible with data stored in the cloud?",
    options: ["Incineration", "Cryptographic erase", "Degaussing", "Shredding"],
    answer: 1,
    explanation: "Incineration Cryptographic erase Degaussing Shredding Correct Answer: B Explanation: Correct answer: Cryptographic erase Physical access to storage media is not available in the cloud, so a technique such as cryptographic erase can be used to render data unreadable by securely deleting encryption keys, making the data useless even without physically destroying the storage media",
    domain: 1
  },
  {
    id: 241,
    text: "Abdon and the information security team have been performing a risk analysis on their planned Platform as a Service (PaaS) deployment. They remember the zero-day exploit that occurred when a specific string of characters was logged that allowed a Remote Code Execution (RCE). Where is this vulnerability most applicable?",
    options: ["Infrastructure", "Metastructure", "Infostructure", "Applistructure"],
    answer: 3,
    explanation: "ce (PaaS) deployment",
    domain: 1
  },
  {
    id: 242,
    text: "The terms \"protection profile\" and \"evaluation assurance level (EAL)\" are associated with which of the following?",
    options: ["FedRAMP CSA", "STAR FIPS", "140-2 Common", "Criteria"],
    answer: 3,
    explanation: "(EAL)\" are associated with which of the following? FedRAMP CSA STAR FIPS 140-2 Common Criteria Correct Answer: D Explanation: Correct answer: Common Criteria Cloud providers’ systems may be subject to certification against standards that address a specific component, such as a cryptographic module",
    domain: 1
  },
  {
    id: 243,
    text: "An auditing company wants to take its operations to the cloud. It plans to create a virtual data center that involves provisioning virtual servers for various applications, setting up virtual networks with firewalls and routers, and configuring a large-scale data storage solution. Which cloud computing service category should it make a contract for?",
    options: ["PaaS", "BaaS", "IaaS", "SaaS"],
    answer: 2,
    explanation: "auditing company wants to take its operations to the cloud",
    domain: 1
  },
  {
    id: 244,
    text: "The term IaC relates to which of the following?",
    options: ["DevSecOps ML/AI", "Blockchain", "Confidential", "Computing"],
    answer: 0,
    explanation: "chain Confidential Computing Correct Answer: A Explanation: Correct answer: DevSecOps Cloud computing is closely related to many emerging technologies",
    domain: 1
  },
  {
    id: 245,
    text: "A video post-production company is considering migrating from on-premises to the cloud. It wants to determine whether the expenses of moving and operating in the cloud are truly lower than the cost of maintaining their existing on-premises infrastructure. What type of activity should they pursue before making a decision?",
    options: ["Cost/benefit analysis Disaster", "recovery plan Return-on-investment", "calculation Business", "impact analysis"],
    answer: 0,
    explanation: "expenses of moving and operating in the cloud are truly lower than the cost of maintaining their existing on-premises infrastructure",
    domain: 1
  },
  {
    id: 246,
    text: "Amal is the CIO of Acme Inc. Amal and the information security team are working with the information technology (IT) team to determine if they should move from an on premises data center into an Infrastructure as a Service (IaaS) virtual data center. Amal wants to determine whether cloud computing is the right solution in this case. Which technique will BEST help Amal determine if migrating the on-premise data center to the cloud is a good business decision?",
    options: ["Business impact analysis Proof", "of concept Cost-benefit analysis", "Return on investment calculation", "for the IaaS platform"],
    answer: 2,
    explanation: "data center into an Infrastructure as a Service (IaaS) virtual data center",
    domain: 1
  },
  {
    id: 247,
    text: "Mandatory MFA and increased monitoring might be part of an organization's security strategy for managing which type of access in the cloud?",
    options: ["Physical Access", "Privilege Access", "User Access", "Service Access"],
    answer: 1,
    explanation: "ity strategy for managing which type of access in the cloud? Physical Access Privilege Access User Access Service Access Correct Answer: B Explanation: Correct answer: Privilege Access Key components of an identity and access management (IAM) policy in the cloud include: Physical access to cloud servers is the responsibility of the cloud service provider, not the customer",
    domain: 1
  },
  {
    id: 248,
    text: "A medium-sized business has been slowly moving its operations into the public cloud. The sales department has moved to an online tool for managing their contacts with their customers and prospective sales. The engineering department has been using a database to manage all their projects and test results. All business, except for marketing, has migrated to the cloud-based document creation tool. Through all this movement into the cloud, each department has made their own decisions about when and how to migrate to the cloud. The information security department has discovered that the reliability level of each of these services is lower than required by the company to maintain the level of customer service expected by upper management. Where has the corporation likely failed in their move to the cloud?",
    options: ["Threat modeling", "Cloud governance", "Risk management", "Board oversight"],
    answer: 1,
    explanation: "ts operations into the public cloud",
    domain: 1
  },
  {
    id: 249,
    text: "An information security manager is concerned about the security of portable devices in the organization that have been given access to corporate resources. What can this information security manager implement to manage and maintain the devices?",
    options: ["VPN", "MDM", "SIEM", "BYOD"],
    answer: 1,
    explanation: "le devices in the organization that have been given access to corporate resources",
    domain: 1
  },
  {
    id: 250,
    text: "Alrik has a presentation to the Board of Directors to explain his proposed business case to move their physical data centers into the cloud. The plan is to create virtual data centers in an Infrastructure as a Service (IaaS) environment on a public cloud provider. One of the key focuses of the business case is the responsibilities that they will retain when they move away from the capital expenditure of the hardware that creates a data center. Which responsibility below is critical to maintaining their control over their applications and data?",
    options: ["The responsibility for Operating Systems lies with the cloud provider", "The responsibility for paying for their usage is the customers", "The responsibility for data organization lies with the customer The", "responsibility for the Operating Systems (OS) lies with the customer"],
    answer: 3,
    explanation: "ilities that they will retain when they move away from the capital expenditure of the hardware that creates a data center",
    domain: 1
  },
  {
    id: 251,
    text: "A ticket-selling company needs to be able to handle quick traffic spikes to its web application servers that occur every few weeks. Which aspect of cloud computing should the company prioritize when choosing a CSP?",
    options: ["Multi-tenancy Elasticity", "Broad network", "access", "Scalability"],
    answer: 1,
    explanation: "ts web application servers that occur every few weeks",
    domain: 1
  },
  {
    id: 252,
    text: "If either Structured Query Language (SQL) injection or cross-site scripting vulnerabilities exist within any Software as a Service (SaaS) implementation, customers' data is at risk. Of the following, what is the BEST method for preventing this type of security risk?",
    options: ["Rouge administrator", "Guest hopping", "Vendor lock-in", "Vendor lock-out"],
    answer: 3,
    explanation: "ilities exist within any Software as a Service (SaaS) implementation, customers' data is at risk",
    domain: 1
  },
  {
    id: 253,
    text: "The Cloud Service Provider (CSP) will not permit your business to conduct an independent examination of cloud service controls and has indicated that this role must be performed by an independent third party and the results provided to your organization. What type of activity is this?",
    options: ["Governance", "Auditability", "Regulatory", "Resiliency"],
    answer: 1,
    explanation: "of cloud service controls and has indicated that this role must be performed by an independent third party and the results provided to your organization",
    domain: 1
  },
  {
    id: 254,
    text: "Which cloud shared concern relates to ensuring that data can easily move between traditional and cloud services as well as between different cloud services?",
    options: ["Type 2 hypervisors are free, while type 1 hypervisors require", "a paid license Type 1 hypervisors are more resource-efficient than", "type 2 hypervisors Type 2 hypervisors are known as bare-metal", "hypervisors Type 1 hypervisors run on a host operating system"],
    answer: 1,
    explanation: "fficient than type 2 hypervisors Type 2 hypervisors are known as bare-metal hypervisors Type 1 hypervisors run on a host operating system Correct Answer: B Explanation: Correct answer: Type 1 hypervisors are more resource-efficient than type 2 hypervisors Type 1 hypervisors ― also known as bare-metal hypervisors ― run directly on server hardware to enable the deployment and use of virtual machines (VMs)",
    domain: 1
  },
  {
    id: 255,
    text: "Which of the following components is associated with ephemeral storage?",
    options: ["Volumes Content", "delivery networks", "Virtual machines", "Databases"],
    answer: 2,
    explanation: "aobao",
    domain: 2
  },
  {
    id: 256,
    text: "Which of the following approaches to analyzing unstructured data is MOST susceptible to false positives?",
    options: ["Lexical analysis Pattern", "matching with regex", "Hashing using MD5", "Hashing uses SHA-3"],
    answer: 0,
    explanation: "es? Lexical analysis Pattern matching with regex Hashing using MD5 Hashing uses SHA-3 Correct Answer: A Explanation: Correct answer: Lexical analysis There are several ways to analyze unstructured data",
    domain: 2
  },
  {
    id: 257,
    text: "Which mechanism suspends an organization's data destruction activities?",
    options: ["Change request Legal", "hold Chain", "of custody", "Cryptographic erase"],
    answer: 1,
    explanation: "ptographic erase xmexam",
    domain: 2
  },
  {
    id: 258,
    text: "According to NIST 800-88, which method of deletion makes files unavailable to the operating system but still recoverable by specialized tools?",
    options: ["Clear", "Purge", "Destroy", "Shred"],
    answer: 0,
    explanation: "etion makes files unavailable to the operating system but still recoverable by specialized tools? Clear Purge Destroy Shred Correct Answer: A Explanation: Correct answer: Clear Understanding distinctions between deletion methods helps ensure organizations meet compliance and security requirements for secure data disposal",
    domain: 2
  },
  {
    id: 259,
    text: "Luna works for a medical laboratory. Laws keep advancing and new laws keep being introduced that affect the security controls that they must have within their business. Which of the following requires the laboratory to report a data breach if the breach includes Protected Health Information (PHI) left in the clear somewhere such as a Platform as a Service (PaaS) deployment?",
    options: ["Health Information Portability and Accountability Act", "(HIPAA) General Data Protection Regulation (GDPR)", "Sarbanes Oxley (SOX) Health Information Technology", "for Economic and Clinical Health (HITECH)"],
    answer: 3,
    explanation: "e following requires the laboratory to report a data breach if the breach includes Protected Health Information (PHI) left in the clear somewhere such as a Platform as a Service (PaaS) deployment? Health Information Portability and Accountability Act (HIPAA) General Data Protection Regulation (GDPR) Sarbanes Oxley (SOX) Health Information Technology for Economic and Clinical Health (HITECH) Correct Answer: D Explanation: Correct answer: Health Information Technology for Economic and Clinical Health (HITECH) HITECH is an extension to the US HIPAA regulation that was enacted in 2009",
    domain: 2
  },
  {
    id: 260,
    text: "What is data dispersion?",
    options: ["Compressing data so that it takes up less space in a storage device", "Breaking up data into smaller chunks and storing them across different storage", "devices Storing copies of files in different availability zones for faster access", "and resiliency Losing data quality due to data traveling over long distances"],
    answer: 1,
    explanation: "er: B xmexam",
    domain: 2
  },
  {
    id: 261,
    text: "Which of the following techniques does NOT allow the original data to be recovered if needed?",
    options: ["Obfuscation", "Encryption", "Hashing", "Tokenization"],
    answer: 2,
    explanation: "ata to be recovered if needed? Obfuscation Encryption Hashing Tokenization Correct Answer: C Explanation: Correct answer: Hashing Cloud customers can use various strategies to protect sensitive data against unauthorized access, including: Obfuscation is a general term covering masking, tokenization, and other techniques",
    domain: 2
  },
  {
    id: 262,
    text: "In the context of information rights management (IRM), what does provisioning typically involve?",
    options: ["Registering users' biometric information for authentication Assigning encryption keys", "to users and documents Assigning specific usage rights and", "permissions to individuals and groups Ensuring that each user", "has the appropriate software to use each file type"],
    answer: 2,
    explanation: "ppropriate software to use each file type Correct Answer: C xmexam",
    domain: 2
  },
  {
    id: 263,
    text: "In a Data Loss Prevention (DLP) cloud-based solution, it is critical to ensure discovery and monitoring are done well. One major concern with DLP solutions when it is monitoring traffic is which of the following?",
    options: ["False positives Data", "in use Data", "in motion", "True positive"],
    answer: 0,
    explanation: "well",
    domain: 2
  },
  {
    id: 264,
    text: "For which of the following is key management the MOST important?",
    options: ["DLP FIPS", "140-3", "Tokenization", "Masking"],
    answer: 1,
    explanation: "mportant? xmexam",
    domain: 2
  },
  {
    id: 265,
    text: "Which of the following is a NIST-defined method of media sanitization that would ONLY be possible in a private cloud environment?",
    options: ["Destroy", "Purge", "Clear", "Wipe"],
    answer: 0,
    explanation: "hod of media sanitization that would ONLY be possible in a private cloud environment? Destroy Purge Clear Wipe Correct Answer: A Explanation: Correct answer: Destroy When data is no longer needed, it should be disposed of using an approved and appropriate mechanism",
    domain: 2
  },
  {
    id: 266,
    text: "A video surveillance company wants to store video files and ensure each file's integrity for clients. Which technique can be used to ensure that the video files have NOT been altered?",
    options: ["Tokenization", "Masking", "Obfuscation", "Hashing"],
    answer: 3,
    explanation: "ents",
    domain: 2
  },
  {
    id: 267,
    text: "Sky has been working with the sales department managing a database and its security. They are currently looking at the data that they have collected about sales trends, and they are working to determine which of their products needs to be moved from the warehouse to the stores and which stores they need to move them to. Which state is the data in at the moment?",
    options: ["Data at rest", "Data in motion", "Data in transition", "Data in use"],
    answer: 3,
    explanation: "the data that they have collected about sales trends, and they are working to determine which of their products needs to be moved from the warehouse to the stores and which stores they need to move them to",
    domain: 2
  },
  {
    id: 268,
    text: "Which storage type is available ONLY in the IaaS cloud service category?",
    options: ["File", "Database", "Disk", "Raw"],
    answer: 3,
    explanation: "e IaaS cloud service category? File Database Disk Raw Correct Answer: D Explanation: Correct answer: Raw Raw storage provides direct access to the underlying storage devices",
    domain: 2
  },
  {
    id: 269,
    text: "After collecting log files from various device types, what process needs to happen BEFORE the files can be analyzed and correlations can be found?",
    options: ["Orchestration", "Sanitization", "Normalization", "Verification"],
    answer: 2,
    explanation: "alyzed and correlations can be found? Orchestration Sanitization Normalization Verification xmexam",
    domain: 2
  },
  {
    id: 270,
    text: "The data science team at Acme Inc. has warehoused and analyzed sales data related to the last five years of sales. What step is left to create a data mart?",
    options: ["None, as the dataset is already a data mart Store", "the data in a NoSQL database Make the data available", "for a specific use case Implement encryption of data at", "rest and a secure access method to read the data"],
    answer: 2,
    explanation: "atabase Make the data available for a specific use case Implement encryption of data at rest and a secure access method to read the data Correct Answer: C Explanation: Correct answer: Make the data available for a specific use case A data mart is typically intended to support specific business use cases",
    domain: 2
  },
  {
    id: 271,
    text: "As you are drafting your organization's cloud data destruction policy, which of the following is NOT a consideration that may affect the policy?",
    options: ["Retention requirements Business", "processes Data", "discovery Compliance", "and governance"],
    answer: 2,
    explanation: "olicy? xmexam",
    domain: 2
  },
  {
    id: 272,
    text: "Which activity implements the rules defined in a data classification policy?",
    options: ["Data labeling", "Data masking", "Data archiving", "Data mapping"],
    answer: 0,
    explanation: "rchiving Data mapping Correct Answer: A xmexam",
    domain: 2
  },
  {
    id: 273,
    text: "Which of the following features of SIEM MOST directly deals with identifying anomalies that could be potential cybersecurity incidents?",
    options: ["Data integrity", "Automated monitoring", "Log centralization", "Alerting"],
    answer: 1,
    explanation: "ies that could be potential cybersecurity incidents? Data integrity Automated monitoring Log centralization Alerting Correct Answer: B Explanation: Correct answer: Automated monitoring Security Information and Event Management (SIEM) solutions are useful tools for log analysis",
    domain: 2
  },
  {
    id: 274,
    text: "A corporation is looking for a security solution that will provide a way to understand activities within their Infrastructure as a Service (IaaS) environment. They need to have a way to assess all the packets that are traversing their network to ensure that bad actors have not infiltrated the environment. Which of the following tools would allow the company to discover such bad actors?",
    options: ["Database Integrity Monitor (DIM) Security", "Information Event Manager (SIEM) Intrusion", "Detection System (IDS) eXtensible", "Markup Language (XML) gateway"],
    answer: 1,
    explanation: "kets that are traversing their network to ensure that bad actors have not infiltrated the environment",
    domain: 2
  },
  {
    id: 275,
    text: "Encryption and implementing access controls are an important part of which stage of the cloud data lifecycle?",
    options: ["Store", "Create", "Use", "Destroy"],
    answer: 0,
    explanation: "are an important part of which stage of the cloud data lifecycle? Store Create Use Destroy Correct Answer: A Explanation: Correct answer: Store Store is when data is placed in cloud storage and should be encrypted in transit and at rest using encryption and access controls",
    domain: 2
  },
  {
    id: 276,
    text: "Which of the following data classification labels might be used to determine which regulations and laws apply to the data?",
    options: ["Type", "Sensitivity", "Ownership", "Criticality"],
    answer: 0,
    explanation: "and laws apply to the data? Type Sensitivity Ownership Criticality xmexam",
    domain: 2
  },
  {
    id: 277,
    text: "You are a software developer for a retail company, creating a new database to store customers' credit card information. To ensure that customer service agents cannot view full credit card numbers, which security measure should you implement?",
    options: ["Obfuscation", "Anonymization", "Hashing", "Masking"],
    answer: 3,
    explanation: "new database to store customers' credit card information",
    domain: 2
  },
  {
    id: 278,
    text: "Which of the following forms of data encryption is MOST likely to use a user-provided password?",
    options: ["File Level Encryption", "Volume-Level Encryption", "Storage-Level Encryption", "Object-Level Encryption"],
    answer: 0,
    explanation: "Level Encryption Object-Level Encryption Correct Answer: A xmexam",
    domain: 2
  },
  {
    id: 279,
    text: "Frederick works for a medium-sized company as the Chief Information Security Officer (CISO). They use a public Cloud Service Provider (CSP) for their Information Technology (IT) environment. They have built a large Infrastructure as a Service (IaaS) environment as a virtual Data Center (vDC). They did their due diligence and carefully constructed a contract with the CSP. They were able to determine who is responsible for Security Governance, Risk, and Compliance. Who would that be?",
    options: ["Both the customer and", "the provider Cloud service", "broker Cloud service customer", "Cloud service provider"],
    answer: 2,
    explanation: "ice Provider (CSP) for their Information Technology (IT) environment",
    domain: 2
  },
  {
    id: 280,
    text: "Volume and object are the names of the storage types used in which cloud service model?",
    options: ["Infrastructure as a Service (IaaS)", "Database as a Service (DBaaS)", "Software as a Service (SaaS)", "Platform as a Service (PaaS)"],
    answer: 0,
    explanation: "ce (DBaaS) Software as a Service (SaaS) Platform as a Service (PaaS) Correct Answer: A Explanation: Correct answer: Infrastructure as a Service (IaaS) Each cloud service model uses different types of storage as shown below: DBaaS is not a term used by NIST SP 800-145 or ISO/IEC 17788",
    domain: 2
  },
  {
    id: 281,
    text: "You have been tasked with implementing a solution for your organization that will assist with the Incident Response (IR) process. You look for a tool that will help analyze all the logs coming from all the different virtual network devices, security products, and end systems. Which of the following solutions BEST matches these requirements?",
    options: ["IPS/IDS", "SIEM", "SOAR", "NGFW"],
    answer: 1,
    explanation: "ill assist with the Incident Response (IR) process",
    domain: 2
  },
  {
    id: 282,
    text: "What is a disadvantage of using data loss protection (DLP) with resources in the cloud?",
    options: ["Inability to protect data at rest", "Discovery not available with cloud resources", "Identification method limited to data tagging", "Extra costs related to processing"],
    answer: 3,
    explanation: "ion method limited to data tagging Extra costs related to processing Correct Answer: D Explanation: Correct answer: Extra costs related to processing When data loss protection (DLP) is applied to cloud resources, the system must constantly scan, monitor, and analyze large volumes of data across distributed environments",
    domain: 2
  },
  {
    id: 283,
    text: "Which term describes analysis of various log files to identify potential attacks?",
    options: ["Correlation", "Aggregation", "Normalization", "Centralization"],
    answer: 0,
    explanation: "attacks? Correlation Aggregation Normalization Centralization Correct Answer: A Explanation: Correct answer: Correlation Correlation is the process of analyzing log data from different sources to detect patterns, anomalies, or sequences that may indicate an attack",
    domain: 2
  },
  {
    id: 284,
    text: "Which of the following strategies is BEST for storing log files?",
    options: ["Aggregating them to a central location Archiving them immediately", "to cold storage Keeping them at the location where", "they were generated Moving them to a temporary", "directory on the system where they were created"],
    answer: 0,
    explanation: "tem where they were created xmexam",
    domain: 2
  },
  {
    id: 285,
    text: "Which of the following techniques for data discovery in unstructured data looks for sensitive data with a known structure?",
    options: ["Hashing Schema", "Analysis Lexical", "Analysis Pattern", "Matching"],
    answer: 3,
    explanation: "ks for sensitive data with a known structure? Hashing Schema Analysis Lexical Analysis Pattern Matching Correct Answer: D Explanation: Correct answer: Pattern Matching When working with unstructured data, there are a few different techniques that a data discovery tool can use: Schema analysis can’t be used with unstructured data because only structured databases have schemas",
    domain: 2
  },
  {
    id: 286,
    text: "Identifying ownership, limitations on distribution, and similar information is part of which of the following?",
    options: ["Data flow diagram", "Data labeling", "Data dispersion", "Data mapping"],
    answer: 1,
    explanation: "flow diagram Data labeling Data dispersion Data mapping Correct Answer: B xmexam",
    domain: 2
  },
  {
    id: 287,
    text: "A team is working to create an application for smart phones that allows users to charge random purchases to a stored credit card. To ensure that the user’s card data is protected as best as possible so that their company is compliant with the Payment Card Industry’s Data Security Standard (PCI DSS), they are looking for a technology to minimize the exposure of card details. Which technology would minimize the number of locations where the card data exists?",
    options: ["Masking", "Encryption", "Obfuscation", "Tokenization"],
    answer: 3,
    explanation: "hases to a stored credit card",
    domain: 2
  },
  {
    id: 288,
    text: "A global social media company has been collecting personal data of European Union (EU) citizens. The EU citizens' personal data was being stored in Frankfurt, Germany. However, a corporate decision was made to move the data to a server in Seattle, Washington, USA. What issue have they now caused for themselves?",
    options: ["Regulatory noncompliance Accidental deletion", "of data Malware", "that modifies data", "Improper credential management"],
    answer: 0,
    explanation: "",
    domain: 2
  },
  {
    id: 289,
    text: "Which of the following is an example of semi-structured data?",
    options: ["An XML document A recorded meeting An email user's", "sent", "folder", "A database table"],
    answer: 0,
    explanation: "email user's sent folder A database table Correct Answer: A Explanation: Correct answer: Unstructured The complexity of data discovery depends on the type of data being analyzed",
    domain: 2
  },
  {
    id: 290,
    text: "Adriaan works for a large pharmaceutical company as their information security officer. He is working with the cloud data architect to plan the move of a critical server and its associated data. The data will be stored as big data at one of the large public cloud providers. The step that they are currently working on is the movement of the data to the cloud. Since this is actually about one petabyte, it is a great deal of effort to get the data to the cloud servers. They have chosen to use the physical device transfer option. How should they protect the data in transit from the on-premises data center to the cloud data center?",
    options: ["Encrypt the data in transit with Internet Protocol Security (IPSec) Encrypt", "the data in transit with Transport Layer Security (TLS) Encrypt", "the data in use with Fully Homomorphic Encryption (FHE) Encrypt", "the data at rest with the Advance Encryption Standard (AES)"],
    answer: 3,
    explanation: "rge public cloud providers",
    domain: 2
  },
  {
    id: 291,
    text: "Tristan, a developer at Acme Inc., created a Postgres database for an eCommerce website. The database has multiple schemas. What category of data BEST describes this database?",
    options: ["Unstructured Structured", "Mostly", "structured", "Semi-structured"],
    answer: 1,
    explanation: "e schemas",
    domain: 2
  },
  {
    id: 292,
    text: "Which of the following is NOT a standard SIEM capability?",
    options: ["Log data normalization", "Automated incident", "response Alerting", "Log centralization"],
    answer: 1,
    explanation: "t response Alerting Log centralization Correct Answer: B Explanation: Correct answer: Automated incident response An organization's logs are valuable only if the organization makes use of them to identify activity that is unauthorized or compromising",
    domain: 2
  },
  {
    id: 293,
    text: "What is the PRIMARY goal of data dispersion?",
    options: ["Nonrepudiation Security", "Resiliency", "Ephemeral", "computing"],
    answer: 2,
    explanation: "swer: C xmexam",
    domain: 2
  },
  {
    id: 294,
    text: "Which threat is unique to ephemeral cloud storage types?",
    options: ["Credential theft Unintentional loss of", "forensic artifacts Jurisdiction issues Data", "fragments available after resources are", "allocated to other users"],
    answer: 1,
    explanation: "esources are allocated to other users Correct Answer: B Explanation: Correct answer: Unintentional loss of forensic artifacts Ephemeral storage is often tied to the life cycle of a virtual machine or container and is erased when the instance is terminated",
    domain: 2
  },
  {
    id: 295,
    text: "Which of the following scenarios is a use case for a data warehouse?",
    options: ["An organization needs to integrate data from various external APIs, and each API returns data in a slightly different format.", "A data scientist needs to store a vast amount of unstructured, raw data to train a machine-learning model to predict", "user behavior. A company needs to collect and analyze semi-structured log data from various web servers, network devices, and IoT", "devices. A financial institution creates formal reports for stakeholders based on a repository of highly structured and processed data."],
    answer: 3,
    explanation: "pository of highly structured and processed data",
    domain: 2
  },
  {
    id: 296,
    text: "A cloud provider has received a notice that one of their customers is having trouble with a bad actor. Law enforcement has been involved in the investigation, and they have come to believe that there is critical information in the cloud provider's logs. Because the logs contain sensitive information, potentially about many different customers, it is necessary for a judge to sign a warrant after hearing the facts of the case so far. In the meantime, it is critical that the cloud provider protects those logs to ensure that they will be available if the judge does sign the warrant. What concept is used to ensure the existence of the information?",
    options: ["Subpoena Stored", "communication Warrant", "Legal", "hold"],
    answer: 3,
    explanation: "aw enforcement has been involved in the investigation, and they have come to believe that there is critical information in the cloud provider's logs",
    domain: 2
  },
  {
    id: 297,
    text: "Which of the following solutions does NOT involve striping data across multiple disks?",
    options: ["Data dispersion Erasure", "coding Storage Area", "Network (SAN)", "RAID cluster"],
    answer: 2,
    explanation: "a dispersion Erasure coding Storage Area Network (SAN) RAID cluster Correct Answer: C Explanation: Correct answer: Storage Area Network (SAN) Storage Area Networks (SANs) and Network-Attached Storage (NAS) provide access to storage devices over the network, not striping data across multiple disks",
    domain: 2
  },
  {
    id: 298,
    text: "Which type of data security technology can monitor and block egress communications that contain sensitive information?",
    options: ["DLP Hashing", "SIEM", "Data", "masking"],
    answer: 0,
    explanation: "hnology can monitor and block egress communications that contain sensitive information? DLP Hashing SIEM Data masking Correct Answer: A Explanation: Correct answer: DLP Part of an effective data security strategy is detecting and blocking outbound traffic that contains confidential information",
    domain: 2
  },
  {
    id: 299,
    text: "According to Kerckhoffs' principle, what part(s) of a cryptosystem should be kept secret to ensure it remains secure?",
    options: ["Key and source", "code Source code", "only Key only", "Algorithm only"],
    answer: 2,
    explanation: "t secret to ensure it remains secure? Key and source code Source code only Key only Algorithm only Correct Answer: C Explanation: Correct answer: Key only Kerckhoffs' principle indicates that a cryptosystem should remain secure as long as the key remains secret, even if an attacker knows everything else (e",
    domain: 2
  },
  {
    id: 300,
    text: "Which of the following types of storage stores data alongside metadata that could be used for classification labels?",
    options: ["Volume", "Ephemeral", "Raw", "Object"],
    answer: 3,
    explanation: "of storage stores data alongside metadata that could be used for classification labels? Volume Ephemeral Raw Object Correct Answer: D Explanation: Correct answer: Object Cloud-based infrastructure can use a few different forms of data storage, including:(ISC)2 CCSP Certified Cloud Security Professional Official Study Guide, 3rd Edition",
    domain: 2
  },
  {
    id: 301,
    text: "What does key escrow enable?",
    options: ["Public key cryptography Strengthening", "of user passwords Secure", "key distribution Recovery", "of lost keys"],
    answer: 3,
    explanation: "lost keys Correct Answer: D Explanation: Correct answer: Recovery of lost keys Organizations must plan for secure recovery of keys in case of loss while balancing control, compliance, and risk",
    domain: 2
  },
  {
    id: 302,
    text: "Jada is currently vetting the tokenization process of her organization's cloud provider. They are using this tokenization process to protect payment card data that will be tied to their own internally created application. What is one risk that Jada should ensure is limited during the tokenization process?",
    options: ["Service Level Agreement", "(SLA) modifications File", "type changes Vendor", "lock-in Price changes"],
    answer: 2,
    explanation: "loud provider",
    domain: 2
  },
  {
    id: 303,
    text: "During which phase of the cloud data lifecycle would data undergo cryptographic erasure?",
    options: ["Use", "Clear", "Purge", "Destroy"],
    answer: 3,
    explanation: "erasure? Use Clear Purge Destroy Correct Answer: D xmexam",
    domain: 2
  },
  {
    id: 304,
    text: "Which phase of the cloud data life cycle involves placing data in an information system for retrieval?",
    options: ["Create", "Share", "Store", "Use"],
    answer: 2,
    explanation: "nvolves placing data in an information system for retrieval? Create Share Store Use Correct Answer: C Explanation: Correct answer: Store Understanding the data life cycle helps define the appropriate security controls for each stage",
    domain: 2
  },
  {
    id: 305,
    text: "Which of the following scenarios is an example of data obfuscation?",
    options: ["A programmer creates a hash of their app and posts the hash result online next to where their", "app is available for download. A developer makes their source code difficult to interpret by randomizing variable and", "method names. An administrator uses a cryptographic erase on a hard drive that has been marked for", "decommission. A data scientist removes personally identifiable information from a dataset by replacing the information with asterisks."],
    answer: 1,
    explanation: "mation from a dataset by replacing the information with asterisks",
    domain: 2
  },
  {
    id: 306,
    text: "Dawson works for a manufacturing firm that has been in business for decades. They began entering their data into computers back when computers were new to the workplace. They now have so much data that they are not sure where exactly all their sensitive data or their intellectual property is. They are in the process of data discovery. There are many tools that exist to help a company understand what data they have. Data discovery starts with what step?",
    options: ["Data Flow Analysis", "Data Source Identification", "Metadata Analysis", "Data Categorization"],
    answer: 1,
    explanation: "ers were new to the workplace",
    domain: 2
  },
  {
    id: 307,
    text: "The information security manager of a company that has a subscription service allows users to watch popular TV shows. The manager is looking for storage technology. What form of storage is used when content is saved in object storage and then dispersed to multiple geographical hosts to increase internet consumption speed?",
    options: ["CDN", "SAN", "SDN", "SDS"],
    answer: 0,
    explanation: "ervice allows users to watch popular TV shows",
    domain: 2
  },
  {
    id: 308,
    text: "Which of the following cloud data encryption solutions is MOST LIKELY to use a customer-controlled key because the encryption is performed within a customer controlled Virtual Machine (VM)?",
    options: ["Object-level encryption Virtual", "Hardware Security Module", "(HSM) Volume-level encryption", "Storage-level encryption"],
    answer: 2,
    explanation: "Virtual Machine (VM)? Object-level encryption Virtual Hardware Security Module (HSM) Volume-level encryption Storage-level encryption Correct Answer: C xmexam",
    domain: 2
  },
  {
    id: 309,
    text: "An organization wants to add storage to its virtual machine to hold files that an application will read and write to frequently. Which category of storage does it need to procure for this instance?",
    options: ["Raw", "Ephemeral", "Blob", "Long-term"],
    answer: 0,
    explanation: "ual machine to hold files that an application will read and write to frequently",
    domain: 2
  },
  {
    id: 310,
    text: "Which of the following NIST-defined methods of media sanitization might involve the operating system's Recycle Bin?",
    options: ["Destroy", "Clear", "Wipe", "Purge"],
    answer: 1,
    explanation: "the operating system's Recycle Bin? Destroy Clear Wipe Purge Correct Answer: B xmexam",
    domain: 2
  },
  {
    id: 311,
    text: "Emery has been tasked with finding a solution or tool for her company. The problem they are trying to solve is to find a way to share their training videos with their customers. The videos are related to products they sell. They need a way to control who sees the content with the ability to remove access to old videos as their product changes. What kind of product should she be looking for?",
    options: ["Cloud Data Loss Prevention Cloud", "Software as a Service", "Cloud Digital Rights Management", "Cloud Intrusion Detection System"],
    answer: 2,
    explanation: "training videos with their customers",
    domain: 2
  },
  {
    id: 312,
    text: "It is necessary within a business to control data at all stages of the lifecycle. Erika is working at a corporation to setup, deploy, and monitor a Data Loss Prevention (DLP) solution. Which component of DLP is involved in the process of applying corporate policy regarding storage of data?",
    options: ["Enforcement", "Identification", "Monitoring", "Discovery"],
    answer: 0,
    explanation: "at all stages of the lifecycle",
    domain: 2
  },
  {
    id: 313,
    text: "A company is integrating a dataset from a partner into its internal systems. It needs to ensure that each data field in the incoming dataset aligns correctly with the corresponding fields in its own database schema so that sensitivity labels are maintained. Which practice accomplishes this?",
    options: ["Data obfuscation", "Data mapping", "Data labeling", "Data normalization"],
    answer: 1,
    explanation: "n the incoming dataset aligns correctly with the corresponding fields in its own database schema so that sensitivity labels are maintained",
    domain: 2
  },
  {
    id: 314,
    text: "Rebekah has been working with software developers on mechanisms that they can implement to protect data at different times. There is a need to use data from a customer database in another piece of software. However, it is necessary to ensure that all personally identifiable elements are removed first. The process of removing all identifiable characteristics from data is known as which of the following?",
    options: ["Anonymization", "Obfuscation", "Masking", "De-identification"],
    answer: 0,
    explanation: "ey can implement to protect data at different times",
    domain: 2
  },
  {
    id: 315,
    text: "Julez has been tasked with updating the data governance policy for his corporation, a bank. He is currently addressing the requirements that need to be defined for the length of data storage in the future. What stage of the cloud data lifecycle is he addressing?",
    options: ["Use Archive", "Store", "Cold", "storage"],
    answer: 1,
    explanation: "tasked with updating the data governance policy for his corporation, a bank",
    domain: 2
  },
  {
    id: 316,
    text: "Which of the following techniques improves resiliency?",
    options: ["Data dispersion", "Data mapping", "Data labeling", "Data obfuscation"],
    answer: 0,
    explanation: "ping Data labeling Data obfuscation Correct Answer: A Explanation: Correct answer: Data dispersion Data dispersion spreads data across multiple storage locations so it can still be reconstructed if part of it becomes unavailable",
    domain: 2
  },
  {
    id: 317,
    text: "Which of the following is NOT an example of an event attribute that could be used uniquely to identify a particular user in an event log?",
    options: ["Operating system", "Username Process ID", "GUID", "User access"],
    answer: 0,
    explanation: "e that could be used uniquely to identify a particular user in an event log? Operating system Username Process ID GUID Correct Answer: A Explanation: Correct answer: MAC address An event is anything that happens on an IT system, and most IT systems are configured to record these events in various log files",
    domain: 2
  },
  {
    id: 318,
    text: "In information rights management (IRM), which access model lets the owner of a document grant or revoke access to other users?",
    options: ["Mandatory access control (MAC)", "Attribute-based access control (ABAC)", "Discretionary access control (DAC)", "Role-based access control (RBAC)"],
    answer: 2,
    explanation: ") Attribute-based access control (ABAC) Discretionary access control (DAC) Role-based access control (RBAC) Correct Answer: C Explanation: Correct answer: Discretionary access control (DAC) Information rights management (IRM) relies on the correct access control model to determine who can use sensitive data and how that access is granted, modified, or revoked",
    domain: 2
  },
  {
    id: 319,
    text: "Carin is working at a real estate company as the information security manager. She was recently hired to begin to build a solid information security program. Up until now, the company has only had a few policies and procedures in place as well as desktop f irewalls and a network Intrusion Detection System (IDS). She knows there is a lot of work to do to build a secure environment for the users, especially since they handle a lot of sensitive customer personal information. Today she is looking at how a data leak could occur within this business. If they determine that the data is most likely to be leaked through their website when the bad actor is able to compromise a stored link that redirects the user to the bad actor's site where they enter and share their credentials with the bad actor, what phase of the data lifecycle would this be?",
    options: ["Use", "Archive", "Store", "Destroy"],
    answer: 0,
    explanation: "the information security manager",
    domain: 2
  },
  {
    id: 320,
    text: "Which of the following main goals of IRM is MOST concerned with HOW a user accesses a resource?",
    options: ["Access Models", "Data Rights", "Provisioning", "Enforcement"],
    answer: 0,
    explanation: "els Data Rights Provisioning Enforcement xmexam",
    domain: 2
  },
  {
    id: 321,
    text: "Which of the following outcomes is an objective of Information Rights Management (IRM)?",
    options: ["Labeling the sensitivity and criticality of an organization's data Describing the actions that authorized users can perform", "on a given asset Alerting to suspicious activity on network infrastructure or individual systems Blocking the exfiltration", "of a sensitive file", "from an organization's network"],
    answer: 1,
    explanation: "the exfiltration of a sensitive file from an organization's network Correct Answer: B Explanation: Correct answer: Describing the actions that authorized users can perform on a given asset In the context of cloud security, Information Rights Management (IRM) is concerned with controlling and enforcing how authorized users can interact with protected data, even after it leaves the organization's environment",
    domain: 2
  },
  {
    id: 322,
    text: "A pharmaceutical corporation is currently designing their data structure within the cloud. They have a lot of data regarding their formulas, past and present, for their drugs that they have developed. The data that they need to store varies in size and format. This data would be described as which of the following?",
    options: ["Correlated data", "Structured data", "Semistructured data", "Unstructured data"],
    answer: 3,
    explanation: "their formulas, past and present, for their drugs that they have developed",
    domain: 2
  },
  {
    id: 323,
    text: "Which of the following scenarios should implement long-term cloud storage, such as AWS Glacier or Google's Coldline?",
    options: ["An organization needs a virtual machine", "to access a storage logical unit number. An organization needs to retain data for compliance reasons.", "An organization needs to store various unstructured data types that will be regularly accessed by applications.", "An organization needs a virtual machine to access more volatile memory to run a powerful application."],
    answer: 1,
    explanation: "to access more volatile memory to run a powerful application",
    domain: 2
  },
  {
    id: 324,
    text: "If a corporation has sensitive data with different levels of consequences, it must ensure that the data is not seen by the wrong parties. They need to handle that data carefully. For example, if a healthcare company has sensitive data that includes patient records, billing information, prescription storage information, and so on, it must take care of it. If the hospital has determined that they will use three classification levels, what is the purpose of the labels on the data?",
    options: ["Protect data that can be considered sensitive or classified Know all", "the locations within an organization where data could be stored", "Classify data based on where it's located within the organization", "Enable the appropriate level of security controls to be applied"],
    answer: 3,
    explanation: "ion, prescription storage information, and so on, it must take care of it",
    domain: 2
  },
  {
    id: 325,
    text: "The data architect for a corporation has been designing the way that they are going to move SQL databases into the Platform as a Service (PaaS) deployment. What type of data is this?",
    options: ["Semi-structured data", "Structured data", "Unstructured data", "Content-based data"],
    answer: 1,
    explanation: "QL databases into the Platform as a Service (PaaS) deployment",
    domain: 2
  },
  {
    id: 326,
    text: "What are the two PRIMARY objectives of data retention policies?",
    options: ["Accessibility and data availability Discovery", "needs and traceability Operational", "needs and compliance Storage", "costs and bandwidth limitations"],
    answer: 2,
    explanation: "itations Correct Answer: C xmexam",
    domain: 2
  },
  {
    id: 327,
    text: "As an information security expert working for a large pharmaceutical company, you know the importance of protecting their intellectual property. There is a virtual Data Center (vDC) in a public cloud Infrastructure as a Service (IaaS) environment. Before moving into the IaaS, the plan was to remove data properly from the cloud provider's servers when needed. When data is old and needs to be removed and put into a different environment that is used as an archive, the data has to be removed properly. What could you do?",
    options: ["Overwriting Shredding", "Degaussing", "Crypto", "shredding"],
    answer: 3,
    explanation: "protecting their intellectual property",
    domain: 2
  },
  {
    id: 328,
    text: "A retailer wants to store customer data in the cloud but is worried about exposing customers' personally identifiable information (PII). Which of the following solutions would address this issue?",
    options: ["Masking the customer information when it is shown in", "a web browser Running the customer data through a", "hashing algorithm Replacing PII in the data through tokenization", "Encrypting a copy of the customer information offsite"],
    answer: 2,
    explanation: "stomer data through a hashing algorithm Replacing PII in the data through tokenization Encrypting a copy of the customer information offsite Correct Answer: C xmexam",
    domain: 2
  },
  {
    id: 329,
    text: "A company has been the victim of a cybersecurity attack. After collecting evidence, it wants to keep the evidence securely stored and maintain a record of who accesses it. What solution would you recommend?",
    options: ["Chain of", "custody Encryption", "SIEM Data", "loss prevention"],
    answer: 0,
    explanation: "evidence, it wants to keep the evidence securely stored and maintain a record of who accesses it",
    domain: 2
  },
  {
    id: 330,
    text: "Which of the following data security methods requires secure random number generation?",
    options: ["Anonymization", "Masking", "Hashing", "Encryption"],
    answer: 3,
    explanation: "obao",
    domain: 2
  },
  {
    id: 331,
    text: "You have been creating the documentation needed for your corporation regarding the long-term storage and recovery of data. You know that it is necessary to retain some information for a certain period of time, while some information can only be stored for a limited amount of time. You have been working with the legal department to ensure that all laws related to their particular data types are followed. Which section of a data retention policy would outline the steps involved in this process of storage and recovery of the data?",
    options: ["Retention period Data", "classification Retention formats", "Archiving and", "retrieval procedures"],
    answer: 3,
    explanation: "cessary to retain some information for a certain period of time, while some information can only be stored for a limited amount of time",
    domain: 2
  },
  {
    id: 332,
    text: "Which phase of the data life cycle involves backing up files to a tape drive in a remote location?",
    options: ["Destroy", "Store", "Create", "Archive"],
    answer: 3,
    explanation: "ing up files to a tape drive in a remote location? Destroy Store Create Archive Correct Answer: D Explanation: Correct answer: Archive Understanding the data life cycle is important for determining risks in each phase",
    domain: 2
  },
  {
    id: 333,
    text: "What is the purpose of keeping a chain of custody?",
    options: ["To maintain the integrity of evidence used in an", "investigation To provide an immutable record of financial transactions", "To ensure that critical system files have not been", "altered To document software version changes over time"],
    answer: 0,
    explanation: "ed To document software version changes over time Correct Answer: A Explanation: Correct answer: To maintain the integrity of evidence used in an investigation A chain of custody ensures that evidence collected during an investigation can be trusted and is legally admissible",
    domain: 2
  },
  {
    id: 334,
    text: "Kelly is working with software developers planning the security controls to be added to their software. They have been discussing the different forms of data protection that can be added to the software. They are looking for something that can be used to protect the software code. Of the following, what can be added to protect the code from reverse engineering?",
    options: ["Tokenization", "Anonymization", "Obfuscation", "Hashing"],
    answer: 2,
    explanation: "",
    domain: 2
  },
  {
    id: 335,
    text: "Carolyn is working for a medium-sized business located in Amsterdam, Netherlands. As a part of the European Union (EU), the Netherlands has a law compliant with the General Data Protection Regulation (GDPR). She is configuring the protection mechanisms for a database that contains data about their customers. The information in that database contains the customer names, addresses, and phone numbers. This is an example of what type of personal data or personally identifiable information (PII)?",
    options: ["Indirect identifier", "Simple identifier", "Direct identifier", "Health identifier"],
    answer: 2,
    explanation: "f the European Union (EU), the Netherlands has a law compliant with the General Data Protection Regulation (GDPR)",
    domain: 2
  },
  {
    id: 336,
    text: "Which of the following is NOT true of a legal hold?",
    options: ["It can be initiated by a lawsuit by a private entity", "It requires the organization to cease all data destruction efforts It", "can be initiated by an investigation by a regulator or law", "enforcement It requires the organization to retain all relevant data"],
    answer: 1,
    explanation: "tion to retain all relevant data Correct Answer: B Explanation: Correct answer: It requires the organization to cease all data destruction efforts A legal hold can be initiated by an investigation by law enforcement or a regulator or a lawsuit brought by a private entity",
    domain: 2
  },
  {
    id: 337,
    text: "Which of the following provides access to the underlying storage rather than a storage service?",
    options: ["Volume", "Raw", "Ephemeral", "Object"],
    answer: 1,
    explanation: "nderlying storage rather than a storage service? Volume Raw Ephemeral Object Correct Answer: B Explanation: Correct answer: Raw Cloud-based infrastructure can use a few different forms of data storage, including:(ISC)2 CCSP Certified Cloud Security Professional Official Study Guide, 3rd Edition",
    domain: 2
  },
  {
    id: 338,
    text: "Which of the following is MOST USEFUL for a DLP tool to use for the identification of attempted exfiltration of unstructured files that rarely change?",
    options: ["Hashing Schema", "analysis Lexical", "analysis Pattern", "matching"],
    answer: 0,
    explanation: "nstructured files that rarely change? xmexam",
    domain: 2
  },
  {
    id: 339,
    text: "Documents and emails are examples of which of the following types of data?",
    options: ["Structured Semi-structured", "Unstructured", "Mostly", "structured"],
    answer: 2,
    explanation: "ructured Semi-structured Unstructured Mostly structured Correct Answer: C Explanation: Correct answer: Unstructured The complexity of data discovery depends on the type of data being analyzed",
    domain: 2
  },
  {
    id: 340,
    text: "A company wants to simplify the discovery of personally identifiable information (PII) in its systems to make compliance efforts easier. What technique would accomplish this?",
    options: ["Keeping PII with unstructured data Hashing", "PII and securely storing the hash", "values Removing attributes and metadata from", "PII Storing PII as structured data"],
    answer: 3,
    explanation: "shing PII and securely storing the hash values Removing attributes and metadata from PII Storing PII as structured data xmexam",
    domain: 2
  },
  {
    id: 341,
    text: "It is vital to have an understanding of how data located in cloud storage is being accessed by members of an organization. What should be maintained to preserve visibility and promote monitoring?",
    options: ["Application-specific logs Chain", "of custody Classification", "log scheme", "Centralized logs"],
    answer: 3,
    explanation: "an organization",
    domain: 2
  },
  {
    id: 342,
    text: "Which of the following is the MAIN consideration when determining retention periods for certain types of data such as personal data or company financial data?",
    options: ["Regulatory Requirements", "Data Classification", "Retention Requirements", "BC/DR req"],
    answer: 0,
    explanation: "types of data such as personal data or company financial data? Regulatory Requirements Data Classification Retention Requirements BC/DR req Correct Answer: A Explanation: Correct answer: Regulatory Requirements Data retention policies define how long an organization stores particular types of data",
    domain: 2
  },
  {
    id: 343,
    text: "Which of the following algorithms is ideal for hashing?",
    options: ["MD5", "SHA-256", "DES", "AES"],
    answer: 1,
    explanation: "eal for hashing? MD5 SHA-256 DES AES Correct Answer: B Explanation: Correct answer: SHA-256 Hashing algorithms are designed to produce a f ixed-length output from input data without reversibility or collisions",
    domain: 2
  },
  {
    id: 344,
    text: "Which of the following data classification labels indicates the importance of data to an organization's operations?",
    options: ["Type", "Sensitivity", "Criticality", "Ownership"],
    answer: 2,
    explanation: "on labels indicates the importance of data to an organization's operations? Type Sensitivity Criticality Ownership Correct Answer: C Explanation: Correct answer: Criticality Data owners are responsible for data classification, and data is classified based on organizational policies",
    domain: 2
  },
  {
    id: 345,
    text: "A research institute needs to protect sensitive data from exfiltration. Many of its employees work remotely on official laptops. What type of DLP solution would you apply in this situation?",
    options: ["DLP installation on firewalls in front of network file", "servers DLP installation at points of network egress", "DLP installation on local agents on endpoint devices", "DLP installation on public-facing devices in the cloud"],
    answer: 2,
    explanation: "work file servers DLP installation at points of network egress DLP installation on local agents on endpoint devices DLP installation on public-facing devices in the cloud Correct Answer: C Explanation: Correct answer: DLP installation on local agents on endpoint devices Endpoint protection ensures data remains secure even when employees operate outside the corporate network",
    domain: 2
  },
  {
    id: 346,
    text: "You are working for a software development company to identify the security requirements for a new project. You are developing software for a customer who is particularly concerned about data quality. The transactions that the customer needs to perform are critical to their business, and they are currently working to ensure that when the results of the transactions are stored that they are properly maintained. What technology can be used for this?",
    options: ["Randomizing", "Tokenization", "Hashing", "Encryption"],
    answer: 2,
    explanation: "the security requirements for a new project",
    domain: 2
  },
  {
    id: 347,
    text: "Why should an organization implement key escrow?",
    options: ["So they can generate keys with truly random numbers", "So they can recover keys if they need to", "So they can destroy keys in a secure", "manner So they can securely store public keys"],
    answer: 1,
    explanation: "t Answer: B xmexam",
    domain: 2
  },
  {
    id: 348,
    text: "Your organization uses an Infrastructure as a Service (IaaS) cloud model, and you need to select a storage mechanism that allows metadata tags for easier organization of your data, voice, and video. What would be the BEST option for your organization?",
    options: ["Object storage", "Block storage", "Structured data", "Semistructured data"],
    answer: 0,
    explanation: "ed to select a storage mechanism that allows metadata tags for easier organization of your data, voice, and video",
    domain: 2
  },
  {
    id: 349,
    text: "Charlie is working with the developers as they build a new piece of software that will be able to store and retrieve data in the cloud. How does a piece of software access object, file, block, and database storage?",
    options: ["Transport Layer Security (TLS) Security", "Assertion Markup Language (SAML)", "Internet Protocol Security (IPSec)", "Application Programming Interface (API)"],
    answer: 3,
    explanation: "ece of software access object, file, block, and database storage? Transport Layer Security (TLS) Security Assertion Markup Language (SAML) Internet Protocol Security (IPSec) Application Programming Interface (API) Correct Answer: D Explanation: Correct answer: Application Programming Interface (API) Multiple types of cloud storage technologies use APIs to access data",
    domain: 2
  },
  {
    id: 350,
    text: "Freeya has been assisting cloud data architects with planning how they will securely store data in their Platform as a Service implementation. They know that leaving a key with the encrypted data is not advised. If someone has the key, they can read the data. They are exploring options in the cloud to protect those keys without costing too much money. What is the most efficient and cost effective way of storing a key for data that is not exceedingly sensitive?",
    options: ["Utilize a cloud Key Management Service (KMS) to encrypt the data encryption key", "Utilize server-side encryption and decryption with the key stored in the virtual machine", "Utilize client-side encryption and decryption with the key stored in the virtual machine", "Utilize a cloud Hardware Security Module (HSM) to encrypt and decrypt the data"],
    answer: 0,
    explanation: "fective way of storing a key for data that is not exceedingly sensitive? Utilize a cloud Key Management Service (KMS) to encrypt the data encryption key Utilize server-side encryption and decryption with the key stored in the virtual machine Utilize client-side encryption and decryption with the key stored in the virtual machine Utilize a cloud Hardware Security Module (HSM) to encrypt and decrypt the data xmexam",
    domain: 2
  },
  {
    id: 351,
    text: "Which of the following is a type of durable storage that may include features like immutability and integrity protections?",
    options: ["Raw", "Ephemeral", "Object", "Long-term"],
    answer: 3,
    explanation: "utability and integrity protections? Raw Ephemeral Object Long-term Correct Answer: D xmexam",
    domain: 2
  },
  {
    id: 352,
    text: "A data storage solution is being designed that involves a database to store customer data after they have purchased a product from an e-commerce site. The database will store the name and address of the customer as well as the credit card number and associated data. A concern is that the information must be maintained accurately within the database. Which of the following technologies can help verify the integrity of customer data?",
    options: ["Encryption", "Anonymization", "Hashing", "Tokenization"],
    answer: 2,
    explanation: "have purchased a product from an e-commerce site",
    domain: 2
  },
  {
    id: 353,
    text: "What type of data is displayed below? { \"Test\": { \"Vendor\": \"IC2\", \"Exam\": false } }",
    options: ["Structured", "Unstructured", "XML", "Semi-structured"],
    answer: 3,
    explanation: "Semi-structured",
    domain: 2
  },
  {
    id: 354,
    text: "Dafina is configuring the components needed for their Platform as a Service (PaaS) components that will allow her corporation to securely store their sensitive and critical data in the cloud. As the corporation is very large, they need a way to centrally store and protect the encryption keys. What should she configure to allow for centralized storage and secure sharing of the cryptographic keys?",
    options: ["Key Management Integrity Protocol", "(KMIP) Advanced Encryption Standard", "(AES) Server-side key management", "Client-side key management"],
    answer: 0,
    explanation: "cloud",
    domain: 2
  },
  {
    id: 355,
    text: "There are many reasons a company must work to ensure that the information that they possess is managed and handled properly. One of the key elements of the European Union's (EU) General Data Protection Regulation (GDPR) is that data shall not be stored longer than needed. This speaks to the requirement in information security to create which of the following?",
    options: ["Data classification policy", "Retention policy Archiving", "and retrieval procedures", "Retention periods"],
    answer: 1,
    explanation: "the European Union's (EU) General Data Protection Regulation (GDPR) is that data shall not be stored longer than needed",
    domain: 2
  },
  {
    id: 356,
    text: "An online retailer wants to keep customers' payment information stored so customers can easily make future payments. However, it does not want to be responsible for the actual credit card numbers in case of a data breach. What type of solution would help the company with this situation?",
    options: ["Masking", "Hashing", "Tokenization", "Encryption"],
    answer: 2,
    explanation: "make future payments",
    domain: 2
  },
  {
    id: 357,
    text: "A movie and TV streaming company, which uses a public Infrastructure as a Service (IaaS) cloud deployment model, is looking for a technology solution to reduce buffering when customers are watching their shows. Which of the following technologies is MOST likely to meet their needs?",
    options: ["SDN", "RDM", "CDN", "SDS"],
    answer: 2,
    explanation: "hich uses a public Infrastructure as a Service (IaaS) cloud deployment model, is looking for a technology solution to reduce buffering when customers are watching their shows",
    domain: 2
  },
  {
    id: 358,
    text: "A publicly traded marketing organization is alerted that a regulatory agency is initiating an investigation against it. The investigation was initiated due to suspicion and accusation of mishandling of corporate finances. The marketing organization has resisted providing all the data that the regulatory agency is requesting. As a result, the regulatory agency needs some way to tell the organization that they must protect the requested data from destruction until the issue is resolved in the courts. What mechanism do they need to use to ensure the data is made available and unaltered?",
    options: ["Legal hold", "Warrant Subpoena", "Digital", "forensics"],
    answer: 0,
    explanation: "tory agency is initiating an investigation against it",
    domain: 2
  },
  {
    id: 359,
    text: "A cloud data architect is interested in grouping data elements of similar types together. This would allow her to quickly locate similar data in the future and add or verify the security controls. What could the cloud data architect use to accomplish this?",
    options: ["Labeling", "Hashing", "Metadata", "Classification"],
    answer: 0,
    explanation: "ould allow her to quickly locate similar data in the future and add or verify the security controls",
    domain: 2
  },
  {
    id: 360,
    text: "Regarding data privacy, different roles and responsibilities exist between the cloud customer and cloud provider. In a Platform as a Service (PaaS) environment, where does the responsibility fall for platform security?",
    options: ["The cloud provider is solely responsible The cloud", "customer is solely responsible The regulators are responsible", "if personal data is involved Responsibility is shared", "between the cloud customer and the cloud provider"],
    answer: 3,
    explanation: "r is solely responsible The cloud customer is solely responsible The regulators are responsible if personal data is involved Responsibility is shared between the cloud customer and the cloud provider Correct Answer: D Explanation: Correct answer: Responsibility is shared between the cloud customer and the cloud provider In a Platform as a Service (PaaS) model, platform security is a responsibility that is shared between both the cloud provider and the cloud customer",
    domain: 2
  },
  {
    id: 361,
    text: "Amal, a data analyst at Acme Inc., is parsing a data store with large amounts of unstructured data. Amal is trying to find all matches for the following email addresses: Amal uses this text to filter for those emails: a*@example.com In this case, the text \"a*@example.com\" is an example of what?",
    options: ["Data semantics", "Lexical analysis", "Regex Data", "labeling"],
    answer: 2,
    explanation: "is parsing a data store with large amounts of unstructured data",
    domain: 2
  },
  {
    id: 362,
    text: "Which of the following terms is MOST related to the chain of custody?",
    options: ["Availability", "Integrity", "Confidentiality", "Non-repudiation"],
    answer: 3,
    explanation: "lability Integrity Confidentiality Non-repudiation Correct Answer: D Explanation: Correct answer: Non-repudiation Non-repudiation refers to a person’s inability to deny that they took a particular action",
    domain: 2
  },
  {
    id: 363,
    text: "A cloud service provider offers high resiliency guarantees by performing data backup across its sites. Which of the following security threats does this practice introduce?",
    options: ["Improper Disposal", "Unauthorized Provisioning", "Regulatory Non-Compliance", "Unauthorized Access"],
    answer: 2,
    explanation: "its sites",
    domain: 2
  },
  {
    id: 364,
    text: "Stacie is responsible for creating a cloud data archiving strategy. She works for a medium-sized real estate company that must have access to the records regarding the sales of properties for as long as the company exists, possibly even longer. There are many critical elements that must be taken into consideration to ensure that the archival of data will be successful. Which of the following is a critical element that Stacie must take into consideration to ensure data will be retrievable?",
    options: ["Format", "Classification", "Amount", "Size"],
    answer: 0,
    explanation: "m-sized real estate company that must have access to the records regarding the sales of properties for as long as the company exists, possibly even longer",
    domain: 2
  },
  {
    id: 365,
    text: "A cloud security architect and administrator are working together to determine the best configuration for their virtual machines in an Infrastructure as a Service (IaaS) environment. They are looking for a technology that would allow their Virtual Machines (VM) to be dynamically managed and moved as necessary across a cluster of physical servers. What would you recommend?",
    options: ["Transport Layer Security (TLS)", "Software Defined Networking (SDN)", "Dynamic Optimization (DO) Distributed", "Resource Scheduling (DRS)"],
    answer: 3,
    explanation: "hey are looking for a technology that would allow their Virtual Machines (VM) to be dynamically managed and moved as necessary across a cluster of physical servers",
    domain: 2
  },
  {
    id: 366,
    text: "Maxwell is developing a Data Loss Prevention (DLP) strategy. He is working with a pharmaceutical company that needs to control their sensitive content, in particular the formulas their chemists have created in Research and Development (R&D). Which component of a DLP solution will a great deal of work have to be done to begin to protect that content?",
    options: ["Encryption", "Enforcement", "Monitoring", "Discovery"],
    answer: 3,
    explanation: "is working with a pharmaceutical company that needs to control their sensitive content, in particular the formulas their chemists have created in Research and Development (R&D)",
    domain: 2
  },
  {
    id: 367,
    text: "Which threat to storage can significantly increase an organization's costs and lead to shadow IT?",
    options: ["Unauthorized provisioning", "Regulatory noncompliance", "Improper disposal", "Unauthorized access"],
    answer: 0,
    explanation: "dow IT? Unauthorized provisioning Regulatory noncompliance Improper disposal Unauthorized access Correct Answer: A Explanation: Correct answer: Unauthorized provisioning Unauthorized provisioning occurs when users create storage resources without oversight or approval, often leading to excess or duplicate resources",
    domain: 2
  },
  {
    id: 368,
    text: "How should an organization respond when it receives a legal hold?",
    options: ["Suspend its standard data retention schedule Activate data deletion procedures Move data stored in the cloud to", "on-premises Decrypt", "all data", "at rest"],
    answer: 0,
    explanation: "cloud to on-premises Decrypt all data at rest Correct Answer: A Explanation: Correct answer: Suspend its standard data retention schedule A legal hold requires an organization to immediately stop normal deletion or destruction of data, ensuring that potentially relevant records remain intact until the hold is lifted",
    domain: 2
  },
  {
    id: 369,
    text: "A company needs to set up a customer service center. Its service agents must be able to verify customer accounts without being shown entire account numbers. What type of solution would allow agents to view ONLY the last five digits of account numbers?",
    options: ["Salting", "Masking", "Hashing", "Tokenizing"],
    answer: 1,
    explanation: "ts service agents must be able to verify customer accounts without being shown entire account numbers",
    domain: 2
  },
  {
    id: 370,
    text: "Steve is working for a consulting firm. He is being asked for advice regarding the protection of data for a customer who is moving data into a Software as a Service implementation that enables their business to create and store documents of all types in the cloud. He is focused on the first phase of the data lifecycle, where encryption can be added to a created document that is now at rest. Which phase would that be?",
    options: ["Use", "Create", "Store", "Destroy"],
    answer: 2,
    explanation: "he protection of data for a customer who is moving data into a Software as a Service implementation that enables their business to create and store documents of all types in the cloud",
    domain: 2
  },
  {
    id: 371,
    text: "What is one best practice that can help an organization implement non-repudiation in its network architecture?",
    options: ["Including user identification in log files", "Restricting users from logging in remotely", "Allowing users to share accounts", "Enabling port security on switches"],
    answer: 0,
    explanation: "rom logging in remotely Allowing users to share accounts Enabling port security on switches Correct Answer: A Explanation: Correct answer: Including user identification in log files Non-repudiation is the ability to prove that a specific user performed a specific action, so it ensures that users cannot deny their actions after performing them",
    domain: 2
  },
  {
    id: 372,
    text: "An engineer has been tasked with ensuring that only authorized systems and users have access to sensitive information. This is done using a set of controls to protect the data. Which tool can be used to control the transmission of data to ensure only approved content is sent?",
    options: ["Transport Layer Security (TLS)", "Intrusion Prevention System (IPS)", "Data Loss Prevention (DLP)", "Software Defined Networking (SDN)"],
    answer: 2,
    explanation: "h tool can be used to control the transmission of data to ensure only approved content is sent? xmexam",
    domain: 2
  },
  {
    id: 373,
    text: "In the infrastructure as a service (IaaS) model, who is responsible for the security of the servers in the data center?",
    options: ["Cloud broker", "CSC", "CSP", "CASB"],
    answer: 2,
    explanation: "ity of the servers in the data center? Cloud broker CSC CSP CASB Correct Answer: C xmexam",
    domain: 2
  },
  {
    id: 374,
    text: "Joel is working with the DevOps teams on a new piece of software. This software will analyze medical information looking for patterns to facilitate the development of a new vaccine. The users of this project are researchers from many different businesses around the world. Due to all the privacy laws around the world, they are sure that they need to protect the patients and their personal information. They are debating the use of de-identification versus anonymization. When data is anonymized, what information is removed?",
    options: ["Direct identifiers only Direct identifiers and", "all information about their gender Indirect", "identifiers only Direct and indirect identifiers", "Indirect identifiers and their phone numbers"],
    answer: 3,
    explanation: "ect are researchers from many different businesses around the world",
    domain: 2
  },
  {
    id: 375,
    text: "Which of the following encryption types typically requires the key to be controlled by the CSP?",
    options: ["Storage-level", "Database-level", "Application-level", "File-level"],
    answer: 0,
    explanation: "rolled by the CSP? Storage-level Database-level Application-level File-level Correct Answer: A Explanation: Correct answer: Storage-level Storage-level encryption is managed directly by the CSP because it is applied automatically to disks, volumes, or object storage",
    domain: 2
  },
  {
    id: 376,
    text: "Which type of artifact shows how data moves through a system?",
    options: ["Well-structured framework Data", "flow diagram Service", "catalog Network", "topology diagram"],
    answer: 1,
    explanation: "iagram Correct Answer: B xmexam",
    domain: 2
  },
  {
    id: 377,
    text: "Which of the following BEST describes the \"create\" phase of the cloud data lifecycle?",
    options: ["The creation of new or the alteration of existing content The creation of new content stored on a hard disk drive (HDD) The creation or modification of content stored onto", "a solid state", "drive (SSD) The", "creation of new content"],
    answer: 0,
    explanation: "stored onto a solid state drive (SSD) The creation of new content Correct Answer: A Explanation: Correct answer: The creation of new or the alteration of existing content The Cloud Security Alliance (CSA) defined the create phase of the data lifecycle as the creation of new or the alteration of existing content in their guidance 4",
    domain: 2
  },
  {
    id: 378,
    text: "Client care representatives in your firm are now permitted to access and see customer accounts. For added protection, you'd like to build a feature that obscures a portion of the data when a customer support representative reviews a customer's account. What type of data protection is your firm attempting to implement?",
    options: ["Obfuscation", "Masking", "Pseudo-anonymization", "Tokenization"],
    answer: 1,
    explanation: "tection, you'd like to build a feature that obscures a portion of the data when a customer support representative reviews a customer's account",
    domain: 2
  },
  {
    id: 379,
    text: "Which of the following is NOT the name of a monitoring service of a major CSP?",
    options: ["GCP Operations", "Suite Azure", "Monitor CloudLog", "CloudWatch"],
    answer: 2,
    explanation: "CSP? GCP Operations Suite Azure Monitor CloudLog CloudWatch Correct Answer: C Explanation: Correct answer: CloudLog Cloud service providers often offer their own monitoring services",
    domain: 2
  },
  {
    id: 380,
    text: "Which process occurs when data reaches the end of its retention period?",
    options: ["Data deletion", "Data masking", "Data archiving", "Legal hold"],
    answer: 0,
    explanation: "xmexam",
    domain: 2
  },
  {
    id: 381,
    text: "What does salting protect against?",
    options: ["Data loss Brute", "force attacks", "Rainbow table", "attacks Collisions"],
    answer: 2,
    explanation: "acks Collisions Correct Answer: C Explanation: Correct answer: Rainbow table attacks Salting is adding random data to a password before hashing so that identical passwords result in different hash outputs",
    domain: 2
  },
  {
    id: 382,
    text: "An organization is concerned about running afoul of GDPR regulations regarding jurisdictional boundaries. Which phase of the cloud data lifecycle are they MOST likely to be at?",
    options: ["Destroy", "Share", "Archive", "Create"],
    answer: 1,
    explanation: "bout running afoul of GDPR regulations regarding jurisdictional boundaries",
    domain: 2
  },
  {
    id: 383,
    text: "Isabella is a cloud data architect who has been working with application developers. They are building a machine learning tool for their business. There is a great deal of concern about protecting some of the information because if there is a breach the implications are wide ranging. The customers could lose confidence in their business, and the regulatory fines are quite high. So, they are interested in a technology that will allow the data to be used in machine learning, possibly through mathematical operations and Boolean logic without revealing the actual values. What technology do they need?",
    options: ["Symmetric encryption Public", "key cryptography", "Fully Homomorphic", "Encryption Tokenization"],
    answer: 2,
    explanation: "ess",
    domain: 2
  },
  {
    id: 384,
    text: "Which of the following event attributes is MOST relevant for determining the identity of the actor causing the event?",
    options: ["Timestamp Process", "ID IP", "address", "Classification"],
    answer: 2,
    explanation: "mining the identity of the actor causing the event? Timestamp Process ID IP address Classification Correct Answer: C Explanation: Correct answer: IP address In security logging, certain attributes provide stronger identity correlation than others, which is crucial for incident investigation and attribution",
    domain: 2
  },
  {
    id: 385,
    text: "Sadie needs to protect the information within her business. She has been tasked with protecting data that is traversing the network from the server to the client. What could she use?",
    options: ["Domain Name System", "(DNS) Obfuscation Fibre", "Channel Data Leak", "Prevention (DLP)"],
    answer: 1,
    explanation: "with protecting data that is traversing the network from the server to the client",
    domain: 2
  },
  {
    id: 386,
    text: "Taylor, a data engineer at Acme Inc., is working with a large unstructured dataset. The data does not follow a standard pattern, and Taylor is struggling to understand data meaning and context. Which of the following is the BEST solution for Taylor to better understand the data's meaning and context?",
    options: ["Semantics Lexical", "analysis JSON", "formatting", "Regex"],
    answer: 1,
    explanation: "ctured dataset",
    domain: 2
  },
  {
    id: 387,
    text: "What are two interpretations of data mapping in the context of cloud security?",
    options: ["Converting unstructured data into structured data and applying encryption Defining the", "sensitivity of information and placing it in long-term storage Locating", "data and maintaining schema when transferring data between organizations Hiding", "parts of displayed data and replacing sensitive information with tokens"],
    answer: 2,
    explanation: "played data and replacing sensitive information with tokens Correct Answer: C Explanation: Correct answer: Locating data and maintaining schema when transferring data between organizations In cloud security, one interpretation of data mapping is documenting where sensitive data is stored across regions and systems to comply with regulations",
    domain: 2
  },
  {
    id: 388,
    text: "Cloud service providers have a shared responsibility model that explains the distribution of tasks and responsibilities between the customer and the provider. A customer has subscribed to a low-code software as a service (SaaS) tool and used it to create their new application. Who is responsible for the protection of the personal data that the application will store?",
    options: ["Cloud data security", "broker Cloud provider", "Data custodian", "Cloud customer"],
    answer: 3,
    explanation: "the customer and the provider",
    domain: 2
  },
  {
    id: 389,
    text: "A breach occurred at a doctor's office in which information about a patient's medical history and treatment was stolen. Under the Health Insurance Portability and Accountability Act of 1996 (HIPAA) what type of data has been stolen?",
    options: ["PII Personal", "data", "PCI", "PHI"],
    answer: 3,
    explanation: "ical history and treatment was stolen",
    domain: 2
  },
  {
    id: 390,
    text: "Cruz has been architecting the data storage scheme for the hospital where she works. Her concern is that if a drive fails, which happens often, some of the data that the hospital needs may be lost. There is a scheme that allows for data to be broken into smaller pieces and then effectively striped across many different servers, similar to a redundant array of dependent discs (RAID). What feature is she looking for in the cloud provider's environments?",
    options: ["Data dispersion", "Erasure coding", "Storage cluster", "Deduplication"],
    answer: 0,
    explanation: "rks",
    domain: 2
  },
  {
    id: 391,
    text: "Acme Music Corp. sells digital music to customers. Acme Inc. needs a technology that restricts their customers' ability to share the music with nonpaying users. Which technology is the BEST solution for Acme Music Corp?",
    options: ["Firewall Data Rights", "Management Intrusion Prevention", "System Information", "RIghts Managmeent"],
    answer: 1,
    explanation: "s' ability to share the music with nonpaying users",
    domain: 2
  },
  {
    id: 392,
    text: "In traditional data centers, physical separation and segregation are used to secure data. However, these concepts are not possible in, nor applicable to, cloud environments. With concepts like multi-tenancy and resource pooling at the forefront of cloud technologies, which of the following is used to keep data confidential?",
    options: ["Anonymization", "Tokenization", "Obfuscation", "Encryption"],
    answer: 3,
    explanation: "concepts are not possible in, nor applicable to, cloud environments",
    domain: 2
  },
  {
    id: 393,
    text: "Which artifact can be used to show that data in the cloud does NOT pass through certain countries for legal or compliance purposes?",
    options: ["Disaster recovery plan", "Routing table Data", "flow diagram Network", "topology map"],
    answer: 2,
    explanation: "es for legal or compliance purposes? Disaster recovery plan Routing table Data flow diagram Network topology map Correct Answer: C Explanation: Correct answer: Data flow diagram A data flow diagram can show the specific network paths, processing points, and jurisdictions that data passes through",
    domain: 2
  },
  {
    id: 394,
    text: "Which threat to cloud data storage architectures can directly lead to shadow IT?",
    options: ["Misconfigured access controls", "Unauthorized provisioning Improper", "disposal Denial", "of service"],
    answer: 1,
    explanation: "Unauthorized provisioning Improper disposal Denial of service Correct Answer: B Explanation: Correct answer: Unauthorized provisioning Shadow IT occurs when individuals use technology resources without official approval",
    domain: 2
  },
  {
    id: 395,
    text: "What security function does data discovery have in an organization?",
    options: ["Creating an inventory of critical assets that need to be protected", "Collecting training data for AI/ML models that need large amounts", "of data Determining which files need to be backed up", "Finding data that can be relevant to a legal investigation"],
    answer: 0,
    explanation: "nvestigation Correct Answer: A xmexam",
    domain: 2
  },
  {
    id: 396,
    text: "Which of the following main objectives of IRM deals with the assignment of access rights to new users and the creation of roles and groups?",
    options: ["Data rights", "Access models", "Provisioning", "Enforcement"],
    answer: 2,
    explanation: "t of access rights to new users and the creation of roles and groups? Data rights Access models Provisioning Enforcement Correct Answer: C Explanation: Correct answer: Provisioning Information rights management (IRM) involves controlling access to data, including implementing access controls and managing what users can do with the data",
    domain: 2
  },
  {
    id: 397,
    text: "Which of the following main objectives of IRM is associated with defining what users are permitted to do?",
    options: ["Data Rights", "Enforcement Provisioning", "Access", "Models"],
    answer: 0,
    explanation: "Data Rights Enforcement Provisioning Access Models Correct Answer: A xmexam",
    domain: 2
  },
  {
    id: 398,
    text: "A data science team uses the cloud when they process and store a variety of data. The data is constantly being written, read, and deleted by multiple processes. To save time, the team wants this data to be automatically encrypted and decrypted. Which level of encryption should they use?",
    options: ["Object", "Application", "File", "Volume"],
    answer: 3,
    explanation: "ss and store a variety of data",
    domain: 2
  },
  {
    id: 399,
    text: "Pawel is working for a financial institution that needs to respond as quickly as possible to security breaches. They have security appliances, including intrusion detection systems, firewalls, and database activity monitors. To be able to respond quickly, they are looking for a control to correlate logs and create reports about network activity. What would you recommend?",
    options: ["Next Generation FireWall (NGFW)", "Security Information and Event", "Manager (SIEM) Security Orchestration,", "Automation and Response Orchestration"],
    answer: 1,
    explanation: "ecurity appliances, including intrusion detection systems, firewalls, and database activity monitors",
    domain: 2
  },
  {
    id: 400,
    text: "A DLP solution is inspecting the contents of an employee's email. What stage of the DLP process is it MOST likely at?",
    options: ["Mapping", "Monitoring", "Enforcement", "Discovery"],
    answer: 1,
    explanation: "mail",
    domain: 2
  },
  {
    id: 401,
    text: "Which type of threat is MOST relevant to data stored on raw storage in cloud architecture?",
    options: ["Improper sanitization after decommissioning Attacks", "against the data's encryption", "Denial of service Unintentional", "deletion of ephemeral data"],
    answer: 0,
    explanation: "s encryption Denial of service Unintentional deletion of ephemeral data Correct Answer: A Explanation: Correct answer: Improper sanitization after decommissioning Raw storage refers to storage volumes that can be directly accessed and written to from a virtual machine",
    domain: 2
  },
  {
    id: 402,
    text: "Which of the following storage types acts like a physical hard drive connected to a VM?",
    options: ["Long-Term", "Ephemeral", "Raw", "Volume"],
    answer: 3,
    explanation: "hysical hard drive connected to a VM? Long-Term Ephemeral Raw Volume Correct Answer: D Explanation: Correct answer: Volume Cloud-based infrastructure can use a few different forms of data storage, including:(ISC)2 CCSP Certified Cloud Security Professional Official Study Guide, 3rd Edition",
    domain: 2
  },
  {
    id: 403,
    text: "Rachel, an information security manager at a Top 500 company that is expanding into Canada, has learned of the Personal Information Protection and Electronic Documents Act (PIPEDA). For their corporation, they regularly create polls and ask people questions about their political opinions. Do they need to protect this information under privacy acts and if so, what type of identifier would it be?",
    options: ["Yes, this is considered personal information as a direct identifier No,", "since this is not considered personal information as a direct identifier", "Yes, this is considered personal information as an indirect identifier No,", "since this is not considered personal information as an indirect identifier"],
    answer: 2,
    explanation: "need to protect this information under privacy acts and if so, what type of identifier would it be? Yes, this is considered personal information as a direct identifier No, since this is not considered personal information as a direct identifier Yes, this is considered personal information as an indirect identifier No, since this is not considered personal information as an indirect identifier Correct Answer: C Explanation: Correct answer: Yes, this is considered personal information as an indirect identifier Personally Identifiable Information (PII) is broken up into indirect identifiers and direct identifiers",
    domain: 2
  },
  {
    id: 404,
    text: "A small company is opening downtown, and they will be processing credit cards using Software as a Service (SaaS) technology. The security manager is learning that it is necessary to protect the credit card data that will be in their possession. The customer's name and account information is considered what type of data?",
    options: ["Application", "Programming", "Interface (API) Payment", "Card Industry (PCI) Protected Health Information (PHI) Personally Identifiable Information (PII)"],
    answer: 3,
    explanation: "card data that will be in their possession",
    domain: 2
  },
  {
    id: 405,
    text: "A government document is classified as Top Secret, indicating that its distribution should be tightly limited. Which of the following is the PRIMARY criteria used to classify this data?",
    options: ["Criticality", "Sensitivity", "Ownership", "Confidentiality"],
    answer: 1,
    explanation: "s distribution should be tightly limited",
    domain: 2
  },
  {
    id: 406,
    text: "A cloud architect is looking for a way to ensure that data is protected when the engineers in the research and development (R&D) department send information from the engineers testing the new product to the research engineers to improve that product to achieve the design goals. Which technology can be utilized to accomplish this?",
    options: ["RASP TLS", "DAST", "Secure", "Shell"],
    answer: 1,
    explanation: "chitect is looking for a way to ensure that data is protected when the engineers in the research and development (R&D) department send information from the engineers testing the new product to the research engineers to improve that product to achieve the design goals",
    domain: 2
  },
  {
    id: 407,
    text: "A company wants to provide assurances to third parties that the products it is using are authentic. Which type of solution would accomplish this?",
    options: ["Federated identity", "Key Shared ID", "Certificate", "Public Key Infrastructure"],
    answer: 3,
    explanation: "Which type of solution would accomplish this? Federated identity Key Shared ID Certificate Correct Answer: D xmexam",
    domain: 2
  },
  {
    id: 408,
    text: "Gunner is a cloud data architect working with a pharmaceutical company. They are planning the deployment of data storage into the public cloud that they are using. The data that he is currently discussing with the Chief Information Security Officer (CISO), Gia, is going to be used for analysis. They are trying to predict the success of certain pharmaceutical drugs that they are researching. One of the challenges that they have is the large amount of information that they are sorting through. They have patient records, test results, X-Rays, etc. to analyze for success. What can they use for this?",
    options: ["Data warehouse", "Data lake", "Big data", "Data mart"],
    answer: 1,
    explanation: "yment of data storage into the public cloud that they are using",
    domain: 2
  },
  {
    id: 409,
    text: "Winta is using a program to put together a spreadsheet after collecting information regarding the sales cycle that the business just completed. What phase of the cloud data lifecycle is occurring?",
    options: ["Create", "Store", "Archive", "Share"],
    answer: 0,
    explanation: "eadsheet after collecting information regarding the sales cycle that the business just completed",
    domain: 2
  },
  {
    id: 410,
    text: "Jamarcus is looking for a security control that can be used to protect a database within their Platform as a Service (PaaS). What they are concerned about within this business is that the data must be protected. It cannot be viewed by anyone that is not approved, and it cannot be sent anywhere it should not be. What tool can accomplish this?",
    options: ["Transport Layer Security (TLS)", "Federated identification Identity and", "Access Management (IAM) Data", "Loss Prevention (DLP)"],
    answer: 3,
    explanation: "as a Service (PaaS)",
    domain: 2
  },
  {
    id: 411,
    text: "You have been provisioning virtual machines in an Infrastructure as a Service (IaaS) for your manufacturing company. Part of the provisioning you have been configuring is the cloud storage that the virtual machines will connect to. Which storage type appears as a drive (virtual) that the virtual machine attaches to?",
    options: ["Volume storage", "Blob storage", "Object storage", "Disk storage"],
    answer: 0,
    explanation: "pany",
    domain: 2
  },
  {
    id: 412,
    text: "What is the relationship between keys and secrets?",
    options: ["Keys are a type of secret. Keys are stored on", "a disk, while secrets are never stored digitally. Keys and", "secrets are the same. Keys are used to access", "APIs, while secrets are used to secure user accounts."],
    answer: 0,
    explanation: "e used to secure user accounts",
    domain: 2
  },
  {
    id: 413,
    text: "What is the BEST term to describe data such as JSON, XML, and HTML?",
    options: ["Structured", "Unstructured", "Deconstructed", "Semi-structured"],
    answer: 3,
    explanation: "tured Unstructured Deconstructed Semi-structured Correct Answer: D Explanation: Correct answer: Semi-structured Data classification in cloud environments is important for selecting appropriate storage, processing, and security controls",
    domain: 2
  },
  {
    id: 414,
    text: "Which activity indicates to end-users how data or a system should be used?",
    options: ["Data mapping", "Data dispersion", "Data classification", "Data labeling"],
    answer: 3,
    explanation: "pping Data dispersion Data classification Data labeling Correct Answer: D Explanation: Correct answer: Data labeling Data labeling attaches visual or metadata based tags to data",
    domain: 2
  },
  {
    id: 415,
    text: "The US Government FIPS 180-4 standard is MOST relevant to which of the following?",
    options: ["Cryptographic erasure", "Tokenization", "Hashing", "Masking"],
    answer: 2,
    explanation: "nt to which of the following? Cryptographic erasure Tokenization Hashing Masking Correct Answer: C Explanation: Correct answer: Hashing Cloud customers can use various strategies to protect sensitive data against unauthorized access, including: Cryptographic erasure is a form of data purging",
    domain: 2
  },
  {
    id: 416,
    text: "Ira has been working with her team of information security professionals at a major f inancial institution on their data retention plan. They are required to retain customer data for seven years after an account has been closed. What phase of the data lifecycle are they addressing?",
    options: ["Archive phase Use", "phase Cold", "storage phase", "Retention phase"],
    answer: 0,
    explanation: "major f inancial institution on their data retention plan",
    domain: 2
  },
  {
    id: 417,
    text: "Your organization is considering using a Data Rights Management (DRM) solution that incorporates dynamic policy controls. Which of the following is the MOST accurate description of this functionality?",
    options: ["Data is secure no matter where it is stored", "The illicit or unauthorized copying of data is prohibited", "Permissions can be modified after a document has been", "shared Expiration dates and time-limitations can be applied"],
    answer: 2,
    explanation: "? Data is secure no matter where it is stored The illicit or unauthorized copying of data is prohibited Permissions can be modified after a document has been shared Expiration dates and time-limitations can be applied Correct Answer: C Explanation: Correct answer: Permissions can be modified after a document has been shared Dynamic policy controls allow data owners to modify the permissions for their protected data even after it has been shared with others",
    domain: 2
  },
  {
    id: 418,
    text: "At which of the following phases of the cloud data lifecycle is DLP MOST relevant?",
    options: ["Use phase", "Create phase", "Destroy phase", "Store phase"],
    answer: 0,
    explanation: "e Destroy phase Store phase Correct Answer: A xmexam",
    domain: 2
  },
  {
    id: 419,
    text: "Which of the following types of storage includes block and file storage?",
    options: ["Ephemeral", "Raw", "Volume", "Object"],
    answer: 2,
    explanation: "s block and file storage? Ephemeral Raw Volume Object Correct Answer: C Explanation: Correct answer: Volume Cloud-based infrastructure can use a few different forms of data storage, including:(ISC)2 CCSP Certified Cloud Security Professional Official Study Guide, 3rd Edition",
    domain: 2
  },
  {
    id: 420,
    text: "An information security administrator has implemented Data Loss Prevention (DLP) solutions that are installed on each of the systems that house and store data. This includes any servers, workstations, and mobile devices which hold data. These DLP solutions are used to protect data in which state?",
    options: ["Data in use", "Data in transit", "Data at rest", "Data in motion"],
    answer: 2,
    explanation: "n each of the systems that house and store data",
    domain: 2
  },
  {
    id: 421,
    text: "Daria is working with the software developers to ensure that the sensitive data that the application handles will be well protected. The application they are creating will contain information about their customers, their orders, conversations that have occurred, and so on. What she needs to make sure of is that the payment card numbers that are stored in the application will be properly protected because they must be in compliance with the Payment Card Industry Data Security Standard (PCI DSS). When the customer service representatives are on the phone with the customers and they access a specific customer's account, they are not allowed to see the full payment card number. What mechanism can be used to protect the card number?",
    options: ["Obfuscation", "Masking", "Tokenization", "Anonymization"],
    answer: 1,
    explanation: "andles will be well protected",
    domain: 2
  },
  {
    id: 422,
    text: "According to NIST SP 800-88, what occurs when data is purged?",
    options: ["It is securely wiped or overwritten. It is", "marked as unavailable to the operating system. It", "is encrypted with a key that is subsequently", "destroyed. Its storage media is physically destroyed."],
    answer: 0,
    explanation: "royed",
    domain: 2
  },
  {
    id: 423,
    text: "At which stage of the data life cycle do technologies such as DLP and IRM operate?",
    options: ["Use", "Archive", "Store", "Share"],
    answer: 3,
    explanation: "chnologies such as DLP and IRM operate? Use Archive Store Share Correct Answer: D Explanation: Correct answer: Share The data life cycle outlines a process for handling data, from creation to destruction",
    domain: 2
  },
  {
    id: 424,
    text: "What does a centralized information rights management (IRM) tool need to be capable of?",
    options: ["Identity proofing and certificate issuance", "Load balancing and failover management", "Name resolution and packet routing", "Copyright detection and file conversion"],
    answer: 0,
    explanation: "esolution and packet routing Copyright detection and file conversion Correct Answer: A Explanation: Correct answer: Identity proofing and certificate issuance Centralized information rights management (IRM) requires a way to verify users through identity proofing and a way to issue and manage cryptographic certificates that enforce access and usage controls",
    domain: 2
  },
  {
    id: 425,
    text: "Which of the following Security Information and Event Management (SIEM) features may be necessary to enable comparisons between data collected from various sources that may use various formats?",
    options: ["Alerting", "Correlation", "Aggregation", "Normalization"],
    answer: 3,
    explanation: "SIEM) features may be necessary to enable comparisons between data collected from various sources that may use various formats? Alerting Correlation Aggregation Normalization Correct Answer: D Explanation: Correct answer: Normalization Security Information and Event Management (SIEM) solutions are useful tools for log analysis",
    domain: 2
  },
  {
    id: 426,
    text: "How does data's location in the cloud affect data discovery?",
    options: ["Makes discovery more convenient because cloud connections have more bandwidth than", "on-premises Makes discovery easier because cloud data is highly structured", "in data lakes Cloud location is irrelevant to discoverability Makes", "discovery more complicated because data can be in multiple regions"],
    answer: 3,
    explanation: "ry more complicated because data can be in multiple regions Correct Answer: D Explanation: Correct answer: Makes discovery more complicated because data can be in multiple regions Data discovery is a crucial process in cloud security for compliance, governance, and risk management, and cloud environments often store data across multiple regions, which can introduce challenges in identifying where sensitive information resides",
    domain: 2
  },
  {
    id: 427,
    text: "What is the role of a schema in relation to structured data?",
    options: ["It supplies extra data about the main data. It defines how the", "data is organized. It shows the meaning of the data. It classifies the", "data's", "sensitivity level."],
    answer: 1,
    explanation: "classifies the data's sensitivity level",
    domain: 2
  },
  {
    id: 428,
    text: "Amal, a security analyst at Acme Inc., is having a hard time creating a timeline of events because logs from different network devices use four different time zones. What SIEM capability would MOST directly address the challenge of mismatched time zones in logs?",
    options: ["Correlation", "Normalization", "UTC", "Alerting"],
    answer: 1,
    explanation: "me creating a timeline of events because logs from different network devices use four different time zones",
    domain: 2
  },
  {
    id: 429,
    text: "Which data security technique involves hiding sensitive information and replacing it with useless characters?",
    options: ["Hashing", "Masking", "Randomization", "Tokenization"],
    answer: 1,
    explanation: "characters? Hashing Masking Randomization Tokenization Correct Answer: B xmexam",
    domain: 2
  },
  {
    id: 430,
    text: "Sebastian is working on the contract negotiations with a cloud provider. One of the concerns that they have is the division of responsibility between them, the Cloud Customer (CC) and the Cloud Service Provider (CSP). One of the options that they are looking at is Platform as a Service (PaaS). In the PaaS deployment model, who would be responsible for network controls?",
    options: ["Cloud Service Provider (CSP)", "Cloud Customer (CC)", "Cloud regulators Both", "customer and provider"],
    answer: 0,
    explanation: "he division of responsibility between them, the Cloud Customer (CC) and the Cloud Service Provider (CSP)",
    domain: 2
  },
  {
    id: 431,
    text: "You work for a real estate company who are defining the protection mechanisms they are going to use for the Platform as a Service (PaaS) deployment that will store data in the cloud. They will be using block storage technology. That technology will hold their pre-sales documents. In what access model is the owner responsible for defining the restrictions on a per-document basis?",
    options: ["Mandatory Access Control (MAC)", "Discretionary Access Control (DAC)", "Non-discretionary Access Control (NDAC)", "Role-based Access Control (RBAC)"],
    answer: 1,
    explanation: "Service (PaaS) deployment that will store data in the cloud",
    domain: 2
  },
  {
    id: 432,
    text: "Which of the following event attributes provides a quick way of identifying anomalous events?",
    options: ["Geolocation IP", "Address User", "Identity MAC", "Address"],
    answer: 0,
    explanation: "n IP Address User Identity MAC Address Correct Answer: A xmexam",
    domain: 2
  },
  {
    id: 433,
    text: "Quinn has been hired as the new information security manager at a regional hospital. He has been reviewing the hospital's information security policies. In reviewing the data handling policies, he has discovered that it is necessary to redefine what data would be considered sensitive and require protection under the Health Insurance Portability and Accountability Act (HIPAA). Of the following, which is considered sensitive data that must be protected as Protected Health Information (PHI)?",
    options: ["Passport number Political", "views Demographic", "information Current", "street address"],
    answer: 2,
    explanation: "eviewing the hospital's information security policies",
    domain: 2
  },
  {
    id: 434,
    text: "In regard to data sanitization, which type of cloud service model requires special considerations as the data is often more interconnected throughout the platform?",
    options: ["Database as a Service (DBaaS)", "Infrastructure as a Service (IaaS)", "Software as a Service (SaaS)", "Platform as a Service (PaaS)"],
    answer: 2,
    explanation: "Software as a Service (SaaS)",
    domain: 2
  },
  {
    id: 435,
    text: "Yakov is a cloud data architect and is currently designing the storage structure for data in the company's Infrastructure as a Service (IaaS) deployment. He has decided to use a structure that identifies data by the record and its fields. What is he using?",
    options: ["File based", "Relational database", "Object based", "Data lake"],
    answer: 1,
    explanation: "frastructure as a Service (IaaS) deployment",
    domain: 2
  },
  {
    id: 436,
    text: "Some regulations like HIPAA and GDPR relax their restrictions on how data can be used if it has undergone which of the following?",
    options: ["Masking", "Encryption", "Hashing", "Anonymization"],
    answer: 3,
    explanation: "s on how data can be used if it has undergone which of the following? Masking Encryption Hashing Anonymization Correct Answer: D Explanation: Correct answer: Anonymization Cloud customers can use various strategies to protect sensitive data against unauthorized access, including:(ISC)2 CCSP Certified Cloud Security Professional Official Study Guide, 3rd Edition",
    domain: 2
  },
  {
    id: 437,
    text: "Which of the following is NOT a threat for which the CSP bears some responsibility?",
    options: ["Unauthorized Provisioning Improper", "Disposal Denial of", "Service Theft or", "Media Loss"],
    answer: 0,
    explanation: "isioning Improper Disposal Denial of Service Theft or Media Loss Correct Answer: A Explanation: Correct answer: Unauthorized Provisioning Data storage in the cloud faces various potential threats, including:The Official (ISC)² CCSP CBK Reference, 4th Edition",
    domain: 2
  },
  {
    id: 438,
    text: "Which SIEM feature may require that a SIEM is installed on a standalone system where administrators do not have write access?",
    options: ["Data Integrity Normalization", "Automated Monitoring", "Log Centralization", "and Aggregation"],
    answer: 0,
    explanation: "ot have write access? Data Integrity Normalization Automated Monitoring Log Centralization and Aggregation Correct Answer: A Explanation: Correct answer: Data Integrity Security information and event management (SIEM) solutions are useful tools for log analysis",
    domain: 2
  },
  {
    id: 439,
    text: "Lily is a data science specialist working for a huge retailer. Lily and her team have been analyzing the use of data within the business. Through the analysis, they have been working on determining when they need to move products from stores in one location to another to match the current customer needs. When they have been analyzing the data, they pull data in from relational data from transactional systems, operational databases, and business applications. What type of storage is this?",
    options: ["Big data", "Data mart", "Data mining", "Data warehouse"],
    answer: 3,
    explanation: "the use of data within the business",
    domain: 2
  },
  {
    id: 440,
    text: "Which of the following concerns is MOST relevant for security practitioners in regard to legal holds?",
    options: ["Regularly rotating storage media containing legal hold data Keeping all", "data in the legal hold archive encrypted Recovering files that", "have already been deleted due to retention policies Preserving", "the integrity of files in a legal hold archive"],
    answer: 3,
    explanation: "ue to retention policies Preserving the integrity of files in a legal hold archive Correct Answer: D Explanation: Correct answer: Preserving the integrity of files in a legal hold archive A legal hold requires organizations to preserve all relevant data once litigation is anticipated or initiated",
    domain: 2
  },
  {
    id: 441,
    text: "Which of the following would be MOST useful for ensuring data integrity?",
    options: ["DES TLS", "1.3", "SHA-3", "AES"],
    answer: 2,
    explanation: "TLS 1",
    domain: 2
  },
  {
    id: 442,
    text: "Your team is working to deploy solutions that create an audit trail for all access attempts to a critical and highly sensitive system. Which of the following is the team attempting to achieve?",
    options: ["Authenticity", "Confidentiality", "Nonrepudiation", "Integrity"],
    answer: 2,
    explanation: "ll access attempts to a critical and highly sensitive system",
    domain: 2
  },
  {
    id: 443,
    text: "Which of the following is a technique used to improve the resiliency of data?",
    options: ["Data labeling", "Data dispersion", "Data mapping", "Data archiving"],
    answer: 1,
    explanation: "mapping Data archiving xmexam",
    domain: 2
  },
  {
    id: 444,
    text: "According to NIST SP 800-88, what are the three categories of deletion?",
    options: ["Full, partial,", "incomplete Hardware,", "software, cryptographic", "Physical, logical, mechanical Clear, purge, destroy"],
    answer: 3,
    explanation: "Physical, logical, mechanical Clear, purge, destroy Correct Answer: D Explanation: Correct answer: Clear, purge, destroy Proper deletion methods in the cloud are critical for preventing unauthorized recovery of sensitive data after it is no longer needed, and NIST SP 800-88 gives guidelines for data sanitization: The other answer choices are vague terms not specifically defined in NIST SP 800-88 as categories of deletion",
    domain: 2
  },
  {
    id: 445,
    text: "Certain data will require more advanced security controls in addition to traditional security controls. This may include extra access controls lists placed on the data or having additional permission requirements to access the data, especially when that data is the Intellectual Property (IP) of the organization. This extension of normal data protection is known as which of the following?",
    options: ["Data rights management (DRM)", "Identify Access Management (IAM)", "Infrastructure and access management", "Threat and vulnerability management"],
    answer: 0,
    explanation: "ermission requirements to access the data, especially when that data is the Intellectual Property (IP) of the organization",
    domain: 2
  },
  {
    id: 446,
    text: "An organization keeps data in a variety of document types. It needs to be able to discover personally identifiable information (PII) for compliance reasons. Which type of solution can help the organization discover PII in its unstructured data?",
    options: ["Looking through XML files for PII", "Pattern-matching for known PII formats Encrypting", "all documents that contain PII", "Searching for PII through schema"],
    answer: 1,
    explanation: "on discover PII in its unstructured data? Looking through XML files for PII Pattern-matching for known PII formats Encrypting all documents that contain PII Searching for PII through schema Correct Answer: B xmexam",
    domain: 2
  },
  {
    id: 447,
    text: "Giada is working with developers on a new application that will be used in a Platform as a Service (PaaS) deployment. The software will be handling and processing credit cards when their customers purchase access to their Software as a Service (SaaS). The SaaS will allow the customers a way to build and test software code for their own applications. It is imperative that the software protects the customers' source code. What can the developers add to their software that will ensure the values of the credit card numbers so that they can be charged for the continued use of the SaaS?",
    options: ["Data Loss", "Prevention (DLP)", "Hashing Obfuscation", "Tokenization"],
    answer: 1,
    explanation: "t",
    domain: 2
  },
  {
    id: 448,
    text: "A healthcare corporation is working with its lawyers to ensure compliance. The corporation is located in Brazil. Many of their customers are in the European Union. When collecting and storing personal data regarding their customers, this corporation must comply with which law?",
    options: ["PIPA", "APEC", "HIPAA", "GDPR"],
    answer: 3,
    explanation: "he corporation is located in Brazil",
    domain: 2
  },
  {
    id: 449,
    text: "In a serverless Platform as a Service (PaaS) environment where a customer has setup Function as a Service (FaaS) to be able to run a particular function to analyze some sales data, who allocates and maintains the data storage system?",
    options: ["Cloud Service Provider", "(CSP) Cloud auditor", "Cloud Customer (CC)", "Cloud service broker"],
    answer: 0,
    explanation: "ce (FaaS) to be able to run a particular function to analyze some sales data, who allocates and maintains the data storage system? Cloud Service Provider (CSP) Cloud auditor Cloud Customer (CC) Cloud service broker Correct Answer: A Explanation: Correct answer: Cloud Service Provider (CSP) The customer will not see the server or its operating system on the virtual machine that is running their function",
    domain: 2
  },
  {
    id: 450,
    text: "A cloud provider offers a Software as a Service (SaaS) platform for creating digital art. Customers access a Graphical User Interface (GUI) to store, edit, and access their digital art, while the Cloud Service Provider (CSP) stores the underlying data in a database that they maintain. The users only interact with the GUI and never directly handle or view the database entries or files. What type of SaaS storage is being used?",
    options: ["Ephemeral storage Information", "storage and management", "Content delivery network", "Block storage"],
    answer: 1,
    explanation: "tomers access a Graphical User Interface (GUI) to store, edit, and access their digital art, while the Cloud Service Provider (CSP) stores the underlying data in a database that they maintain",
    domain: 2
  },
  {
    id: 451,
    text: "A company wants to ensure any new data it receives is immediately labeled based on its sensitivity so that security tools can apply the correct protections automatically. The company needs this done to maintain compliance and reduce the risk of mishandling sensitive information. What type of solution would address this requirement?",
    options: ["Data loss prevention", "Information rights management", "Data classification policy", "Encryption key management"],
    answer: 2,
    explanation: "omatically",
    domain: 2
  },
  {
    id: 452,
    text: "Which cloud service model allows a customer to collect the MOST event sources?",
    options: ["SaaS", "IaaS", "FaaS", "PaaS"],
    answer: 1,
    explanation: "omer to collect the MOST event sources? SaaS IaaS FaaS PaaS Correct Answer: B Explanation: Correct answer: IaaS In cloud security, the level of access to logs and system events depends on how much control the customer has over the infrastructure and services",
    domain: 2
  },
  {
    id: 453,
    text: "Azure Disk Storage and Google Persistent Disk are examples of which form of cloud storage that exposes data similarly to hard drives on physical servers?",
    options: ["File storage", "Block storage", "Object storage", "Images"],
    answer: 1,
    explanation: "ata similarly to hard drives on physical servers? xmexam",
    domain: 2
  },
  {
    id: 454,
    text: "Celine is a cloud data architect. She has been designing cloud solutions for years and has worked with databases, big data, object storage, and other elements. One of the types of data that she works with provides the context and details about another data asset. What would that be called?",
    options: ["Structured data", "Metadata Taxonomy", "Data", "lake"],
    answer: 1,
    explanation: "ith databases, big data, object storage, and other elements",
    domain: 2
  },
  {
    id: 455,
    text: "Structured and unstructured storage pertain to which of the three cloud service models?",
    options: ["DataBase as a Service (DBaaS)", "Infrastructure as a Service (IaaS)", "Platform as a Service (PaaS)", "Software as a Service (SaaS)"],
    answer: 2,
    explanation: "aS) Software as a Service (SaaS) Correct Answer: C xmexam",
    domain: 2
  },
  {
    id: 456,
    text: "A medical corporation is going to use lab results, test results, and other data to determine the effectiveness of one of their vaccines. Since the US Health Information Portability and Accountability Act (HIPAA) demands that medical data be protected, the corporation will remove all direct identifiers from the records to protect the patients. Because some of the information may be relevant, considered indirect identifiers, they are going to leave that in place. Which of the following is this called?",
    options: ["Tokenization", "Anonymization", "De-identification", "Encryption"],
    answer: 2,
    explanation: "data to determine the effectiveness of one of their vaccines",
    domain: 2
  },
  {
    id: 457,
    text: "Rhona is working within a database. The data in the database is encrypted, but Rhona doesn't notice the encryption. Which method of encryption is integrated within the actual database processes and, therefore, not noticeable by the user?",
    options: ["Full disk encryption", "Stream encryption", "Asymmetrical encryption", "Transparent encryption"],
    answer: 3,
    explanation: "n is integrated within the actual database processes and, therefore, not noticeable by the user? xmexam",
    domain: 2
  },
  {
    id: 458,
    text: "An organization implemented an Information Rights Management (IRM) program. The cloud security specialist has been tasked with ensuring an in-depth report on the usage and access history that can be generated for all files. Which of the following BEST represents this functionality?",
    options: ["Dynamic policy control", "Replication restrictions", "Continuous auditing", "Persistant protection"],
    answer: 2,
    explanation: "th report on the usage and access history that can be generated for all files",
    domain: 2
  },
  {
    id: 459,
    text: "Of the following, which comes EARLIEST in the cloud data lifecycle?",
    options: ["Use", "Store", "Share", "Archive"],
    answer: 1,
    explanation: "he cloud data lifecycle? Use Store Share Archive Correct Answer: B Explanation: Correct answer: Store The cloud data lifecycle has six phases, including: (ISC)2 CCSP Certified Cloud Security Professional Official Study Guide, 3rd Edition",
    domain: 2
  },
  {
    id: 460,
    text: "You are responsible as the information security manager for protecting the data that the business owns. As a real estate business, they have an immense number of photos and videos that they have taken over the years of homes that they have helped their customers sell. They also have all the signed contractual documents for the homes that their customers have both bought and sold. They also offer a home improvement service, so there is a large number of photos for inspiration that they can show their customers as they design their dream homes. To store the data, your team implements an object-oriented database that uses tags as metadata to enable searches and organization. What term BEST describes this type of data?",
    options: ["Unstructured data", "Personal data", "Structured data", "Semi-structured data"],
    answer: 3,
    explanation: "iness, they have an immense number of photos and videos that they have taken over the years of homes that they have helped their customers sell",
    domain: 2
  },
  {
    id: 461,
    text: "Grazing is working with the cloud security architect on the design of the encryption that will be used to protect the data that they need to store within the public cloud. The corporation formerly made the decision to store their data within the public cloud because it is much cheaper than building the physical Storage Area Networks (SAN) they would need within their own datacenter. Of the following, which is the MOST important to consider when planning encryption?",
    options: ["Data format requirements", "Encryption algorithms Regulatory", "requirements Key", "storage location"],
    answer: 3,
    explanation: "within the public cloud",
    domain: 2
  },
  {
    id: 462,
    text: "What is the purpose of including unique user identifications and timestamps in log f iles?",
    options: ["Protecting data rights", "Ensuring data availability", "Enforcing nonrepudiation Establishing", "a chain of custody"],
    answer: 2,
    explanation: "a availability Enforcing nonrepudiation Establishing a chain of custody Correct Answer: C Explanation: Correct answer: Enforcing nonrepudiation Nonrepudiation means a user must be held accountable for particular actions",
    domain: 2
  },
  {
    id: 463,
    text: "Donna is working with her customer to set up the security controls they need to be able to share their content. They have case studies and suggested configurations for their products. They want to ensure that only their existing customers can access these f iles. What tool would you recommend?",
    options: ["Transport Layer Security (TLS)", "Secure Shell (SSH) Data", "Rights Management (DRM) Information", "Rights Management (IRM)"],
    answer: 3,
    explanation: "heir content",
    domain: 2
  },
  {
    id: 464,
    text: "In multitenant cloud environments, it is the cloud service provider's responsibility to implement logical controls to protect against which of the following threats?",
    options: ["Unauthorized Provisioning Unauthorized", "Access Theft or", "Media Loss", "Improper Disposal"],
    answer: 1,
    explanation: "al controls to protect against which of the following threats? Unauthorized Provisioning Unauthorized Access Theft or Media Loss Improper Disposal Correct Answer: B Explanation: Correct answer: Unauthorized Access Data storage in the cloud faces various potential threats, including:The Official (ISC)² CCSP CBK Reference, 4th Edition",
    domain: 2
  },
  {
    id: 465,
    text: "Which storage type is used by virtual machines as their local drive for processing purposes?",
    options: ["Raw storage", "Unstructured storage", "Ephemeral Block", "storage"],
    answer: 2,
    explanation: "essing purposes? Raw storage Unstructured storage Ephemeral Block storage Correct Answer: C Explanation: Correct answer: Ephemeral Temporary storage and data are stored in ephemeral storage solely for processing purposes",
    domain: 2
  },
  {
    id: 466,
    text: "Which of the following cloud data encryption options is MOST likely to use keys controlled by the cloud provider?",
    options: ["Volume-Level Encryption", "Storage-Level Encryption", "Application-Level Encryption", "File-Level Encryption"],
    answer: 1,
    explanation: "e-Level Encryption Storage-Level Encryption Application-Level Encryption File-Level Encryption Correct Answer: B Explanation: Correct answer: Storage-Level Encryption Data can be encrypted in the cloud in a few different ways",
    domain: 2
  },
  {
    id: 467,
    text: "An untrusted server has a value that uniquely represents a particular user. If that value is sent to a certain trusted system, the user's record can be retrieved. Which of the following does this BEST describe?",
    options: ["Tokenization", "Anonymization", "Hashing", "Encryption"],
    answer: 0,
    explanation: "ular user",
    domain: 2
  },
  {
    id: 468,
    text: "Which of the following tools involves the issuance of certificates and licenses?",
    options: ["Security information and event management", "(SIEM) Data loss prevention (DLP)", "Information rights management (IRM)", "Trusted execution environment (TEE)"],
    answer: 2,
    explanation: "n rights management (IRM) Trusted execution environment (TEE) Correct Answer: C Explanation: Correct answer: Information rights management (IRM) Certificates are central to authentication, encryption, and trust management in cloud environments",
    domain: 2
  },
  {
    id: 469,
    text: "A healthcare organization has many types of files with various levels of sensitivity and criticality. New employees typically struggle to label files appropriately. What should the organization implement to address this issue?",
    options: ["Data classification policies Policy", "enforcement points Object", "storage bucket policies", "Access control policies"],
    answer: 0,
    explanation: "uggle to label files appropriately",
    domain: 2
  },
  {
    id: 470,
    text: "A cloud information security manager is working with the data architect to determine the best way to implement encryption in a specific database. They are analyzing the data that is stored in this particular database, and they have discovered that there are a few fields with very sensitive data. What type of encryption would work best to protect this data and not overwhelm the administrators and systems with too much work?",
    options: ["Column-level encryption Application-level", "encryption Transparent Data", "Encryption Fully", "Homomorphic Encryption"],
    answer: 0,
    explanation: "the data that is stored in this particular database, and they have discovered that there are a few fields with very sensitive data",
    domain: 2
  },
  {
    id: 471,
    text: "Which of the following characteristics is MOST important for archived data?",
    options: ["Immutability", "Scalability", "Accessibility", "Resilience"],
    answer: 0,
    explanation: "data? Immutability Scalability Accessibility Resilience Correct Answer: A Explanation: Correct answer: Immutability Archived data must remain trustworthy and tamper-proof for compliance, legal, and long-term retention requirements",
    domain: 2
  },
  {
    id: 472,
    text: "What type of information can be expected to appear in a data flow diagram?",
    options: ["Flow of power through a system's circuit board Layout", "of filesystem with ownership and permission information Chart of", "all members in an organization along with their", "roles Interconnections between clients, web applications, and databases"],
    answer: 3,
    explanation: "r roles Interconnections between clients, web applications, and databases Correct Answer: D Explanation: Correct answer: Interconnections between clients, web applications, and databases Data flow diagrams visualize how data moves through a system",
    domain: 2
  },
  {
    id: 473,
    text: "It is necessary to protect personally identifiable information (PII), protected health information (PHI) as well as credit card numbers when stored within a customer database. If the immediate concern is to ensure that the credit card number is not fully visible to someone in customer service, what tool could be used for this?",
    options: ["Access control", "Least privilege", "Masking", "Encryption"],
    answer: 2,
    explanation: "as well as credit card numbers when stored within a customer database",
    domain: 2
  },
  {
    id: 474,
    text: "Cryptoshredding falls under which classification in the United States (US) National Institute of Standards and Technology (NIST) methods of media sanitization?",
    options: ["Clear", "Purge", "Destroy", "Wipe"],
    answer: 1,
    explanation: "tion in the United States (US) National Institute of Standards and Technology (NIST) methods of media sanitization? Clear Purge Destroy Wipe Correct Answer: B Explanation: Correct answer: Purge When data is no longer needed, it should be disposed of using an approved and appropriate mechanism",
    domain: 2
  },
  {
    id: 475,
    text: "A large financial institution is using a Platform as a Service (PaaS) deployment on a public Cloud Service Provider (CSP) network. The company has been moving its systems from a traditional data center to the CSP carefully over the last year. The company will now deploy a new service that will handle sensitive data, so it needs to ensure the information is properly protected. The protection that they are setting up f irst is encryption. A cloud administrator has been tasked with safeguarding the encryption keys in a centralized setting. What tool can be used for this?",
    options: ["Key Management Integirty", "Protocol Tokenization Public", "Key Cryptography Standard", "Key Management Service"],
    answer: 3,
    explanation: "its systems from a traditional data center to the CSP carefully over the last year",
    domain: 2
  },
  {
    id: 476,
    text: "For which of the following is data discovery the EASIEST?",
    options: ["HTML document", "Emails SQL", "database XML", "document"],
    answer: 2,
    explanation: "nt Correct Answer: C xmexam",
    domain: 2
  },
  {
    id: 477,
    text: "Data classification and labeling should occur during which phase of the cloud data lifecycle?",
    options: ["Create", "Store", "Use", "Share"],
    answer: 0,
    explanation: "cur during which phase of the cloud data lifecycle? Create Store Use Share Correct Answer: A Explanation: Correct answer: Create The cloud data lifecycle has six phases, including: (ISC)2 CCSP Certified Cloud Security Professional Official Study Guide, 3rd Edition",
    domain: 2
  },
  {
    id: 478,
    text: "The data below is an example of what type of data?",
    options: ["IC2 CCSP", "Semi-structured Unstructured", "Loosely structured", "Structured"],
    answer: 0,
    explanation: "d Loosely structured Structured Correct Answer: A Explanation: Correct answer: Semi-structured The complexity of data discovery depends on the type of data being analyzed",
    domain: 2
  },
  {
    id: 479,
    text: "What is the primary use case for OLAP?",
    options: ["Data analysis", "Authorization Digital", "signatures", "Authentication"],
    answer: 0,
    explanation: "ion Digital signatures Authentication Correct Answer: A Explanation: Correct answer: Data analysis Online analytic processing ( OLAP) gives users analytic capabilities related to a data source",
    domain: 2
  },
  {
    id: 480,
    text: "In the context of cloud security, why would an organization choose to store data in semi-structured formats?",
    options: ["For flexibility with business goals while maintaining reasonable discoverability for compliance For the most resilient data operations with adequate levels of data protection For the most secure data storage with reasonable read and write times For", "the fastest data", "storage and most", "efficient data discoverability during audits"],
    answer: 0,
    explanation: "times For the fastest data storage and most efficient data discoverability during audits Correct Answer: A Explanation: Correct answer: For flexibility with business goals while maintaining reasonable discoverability for compliance Data format decisions affect compliance, discoverability, flexibility, and application of security controls across different storage models",
    domain: 2
  },
  {
    id: 481,
    text: "A cloud administrator is configuring a Kubernetes environment. They need to configure local storage that will be used by a pod. This storage will be used for caching, scratch space, and logs. This storage will not be guaranteed long term. What type of storage would this be?",
    options: ["Solid State", "Drive Ephemeral", "Random Access", "Memory Volume"],
    answer: 1,
    explanation: "Kubernetes environment",
    domain: 2
  },
  {
    id: 482,
    text: "Which of the following is NOT a primary objective of Information Rights Management (IRM)?",
    options: ["Data rights", "Provisioning Enforcement", "Access", "models"],
    answer: 2,
    explanation: "isioning Enforcement Access models Correct Answer: C xmexam",
    domain: 2
  },
  {
    id: 483,
    text: "Padma works for a financial trading company and is in charge of revising their data retention policy. She knows that it is essential to control how long data is maintained. There are several laws that demand that data will not be in their control longer than it should be. Which phase of the data lifecycle requires the most attention over time?",
    options: ["Destroy", "Share", "Archive", "Use"],
    answer: 2,
    explanation: "nd is in charge of revising their data retention policy",
    domain: 2
  },
  {
    id: 484,
    text: "What determines the actions an authorized user can take with an asset and how they are managed?",
    options: ["Provisioning Data", "rights Data", "classification Identity", "federation"],
    answer: 1,
    explanation: "",
    domain: 2
  },
  {
    id: 485,
    text: "Which of the following involves visualizing how data is used to inform access controls and compliance efforts?",
    options: ["Data mapping Data", "labeling Data", "dispersion Data", "flow diagram"],
    answer: 3,
    explanation: "mapping Data labeling Data dispersion Data flow diagram Correct Answer: D xmexam",
    domain: 2
  },
  {
    id: 486,
    text: "Which of the following scenarios is the BEST use case for a data lake?",
    options: ["A company's sales and marketing team needs to access daily dashboards that gather information from a structured dataset to provide a high-level view of key performance indicators (KPIs).", "A furniture manufacturer manages a product catalog with a diverse range of items that need to be stored in a single database that can handle semi-structured data. An", "online retailer wants to store massive amounts of unstructured data, including its web server logs, transaction data, and customer interaction history, in one location without knowing exactly what", "it will be used for in the future. A GPS mapping company needs to store a list of coordinates that describe various locations across a broad geographical area."],
    answer: 2,
    explanation: "graphical area",
    domain: 2
  },
  {
    id: 487,
    text: "Why is it important to capture geolocation data in event logs?",
    options: ["It can be used to determine suspicious login attempts. It can", "be used to validate the underlying hardware of a device trying", "to connect to a network. It can be used to authenticate", "a user. It can be used to ensure data integrity."],
    answer: 0,
    explanation: "r",
    domain: 2
  },
  {
    id: 488,
    text: "HTML, XML, and JSON are examples of formats used to organize which of the following types of data?",
    options: ["Unstructured Semi-structured", "Structured", "Mostly", "structured"],
    answer: 1,
    explanation: "e which of the following types of data? Unstructured Semi-structured Structured Mostly structured Correct Answer: B Explanation: Correct answer: Semi-structured The complexity of data discovery depends on the type of data being analyzed",
    domain: 2
  },
  {
    id: 489,
    text: "A consulting company has setup and configured their new Platform as a Service (PaaS) object-based storage. They have ensured that the storage will encrypt the data that is stored there. What else should they do to ensure the data will exist when it is needed?",
    options: ["Block public access", "Data Backup Data", "retention policy", "Sharing permissions"],
    answer: 1,
    explanation: "the storage will encrypt the data that is stored there",
    domain: 2
  },
  {
    id: 490,
    text: "Which of the following techniques uses context and the meaning of text to identify sensitive data in unstructured data?",
    options: ["Pattern Matching", "Lexical Analysis", "Hashing Schema", "Analysis"],
    answer: 1,
    explanation: "ntify sensitive data in unstructured data? Pattern Matching Lexical Analysis Hashing Schema Analysis Correct Answer: B Explanation: Correct answer: Lexical Analysis When working with unstructured data, there are a few different techniques that a data discovery tool can use: Schema analysis can’t be used with unstructured data because only structured databases have schemas",
    domain: 2
  },
  {
    id: 491,
    text: "Having a proper mapping strategy will enable an organization to do which of the following?",
    options: ["Classify data based on its structured or unstructured format", "Know when data is modified within an application Easily", "group together data of similar types and classification levels", "Know all the locations where data is stored"],
    answer: 3,
    explanation: "s and classification levels Know all the locations where data is stored Correct Answer: D Explanation: Correct answer: Know all the locations where data is stored To implement security controls and policies, an organization must first know where data is stored",
    domain: 2
  },
  {
    id: 492,
    text: "Which of the following ways to organize data is MOST efficient for the data discovery process?",
    options: ["Data warehouse", "Data lake", "Semi-structured", "Dispersed"],
    answer: 0,
    explanation: "data discovery process? Data warehouse Data lake Semi-structured Dispersed Correct Answer: A Explanation: Correct answer: Data warehouse Data discovery is an important aspect of cloud security for governance and threat detection",
    domain: 2
  },
  {
    id: 493,
    text: "Which technique is commonly referred to as \"one-way encryption\"?",
    options: ["Masking", "Salting", "Tokenizing", "Hashing"],
    answer: 3,
    explanation: "cryption\"? Masking Salting Tokenizing Hashing Correct Answer: D Explanation: Correct answer: Hashing Hashing converts input data into a fixed-length output called a hash value, with no way to reverse the process",
    domain: 2
  },
  {
    id: 494,
    text: "Taylor, a security engineer at Acme Inc., is deploying in-motion data monitoring for a DLP solution. Where is the solution MOST LIKELY to be deployed?",
    options: ["Database server Email", "server End", "users' smartphones", "Windows workstation"],
    answer: 1,
    explanation: "solution",
    domain: 2
  },
  {
    id: 495,
    text: "What can IP addresses in log files determine MOST accurately?",
    options: ["Which local workstation connected to a service The user that made a connection The physical address of a remote connection The type", "of device", "that made", "a connection"],
    answer: 0,
    explanation: "The type of device that made a connection Correct Answer: A Explanation: Correct answer: Which local workstation connected to a service Accurate identification of sources is essential to auditing, incident response, and detection of unauthorized access in cloud technologies",
    domain: 2
  },
  {
    id: 496,
    text: "Which type of tool is offered by cloud service providers to help customers manage the life cycles of API keys?",
    options: ["Access models", "Data rights", "Secrets management", "Configuration management"],
    answer: 2,
    explanation: "Data rights Secrets management Configuration management Correct Answer: C xmexam",
    domain: 2
  },
  {
    id: 497,
    text: "Your organization is considering using a data rights management solution that provides replication restrictions. Which of the following is the MOST accurate description of this functionality?",
    options: ["Dates and time-limitations can be applied Data is secure", "no matter where it is stored The illicit or", "unauthorized copying of data is prohibited Permissions can", "be modified after a document has been shared"],
    answer: 2,
    explanation: "e applied Data is secure no matter where it is stored The illicit or unauthorized copying of data is prohibited Permissions can be modified after a document has been shared Correct Answer: C Explanation: Correct answer: The illicit or unauthorized copying of data is prohibited Replication restrictions ensure that no unauthorized or unlawful copying of protected data occurs",
    domain: 2
  },
  {
    id: 498,
    text: "A security incident occurred within an organization that affected numerous servers and network devices. A security engineer was able to use the Security Information Event Manager (SIEM) to see all the logs pertaining to that event, even though they occurred on different devices, by using the IP address of the source. Which function of a SIEM is being described in this scenario?",
    options: ["Correlation", "Analysis", "Aggregation", "Reporting"],
    answer: 0,
    explanation: "ices",
    domain: 2
  },
  {
    id: 499,
    text: "Which of the following data security scenarios is an example of applying tokenization?",
    options: ["A credit card company stores placeholder values for a customer's credit card number in their database. A customer", "service application blocks out the first 12 characters of a user's credit card number when displaying the value", "to agents. A programmer removes all unnecessary white space from their code and randomizes variable and function names.", "A data analyst permanently removes personally identifiable information from a dataset before using it in machine learning."],
    answer: 0,
    explanation: "e using it in machine learning",
    domain: 2
  },
  {
    id: 500,
    text: "A DLP solution alerts the security team regarding a potential case of data exfiltration. This is likely part of which of the following stages of the DLP process?",
    options: ["Mapping", "Monitoring", "Enforcement", "Discovery"],
    answer: 2,
    explanation: "l case of data exfiltration",
    domain: 2
  },
  {
    id: 501,
    text: "At which phase of the cloud data lifecycle does encryption key rotation become an important consideration?",
    options: ["Create", "Archive", "Share", "Use"],
    answer: 1,
    explanation: "n important consideration? xmexam",
    domain: 2
  },
  {
    id: 502,
    text: "During which stage of the DLP process might pattern matching be used to identify locations containing sensitive data?",
    options: ["Monitoring", "Enforcement", "Discovery", "Mapping"],
    answer: 2,
    explanation: "be used to identify locations containing sensitive data? Monitoring Enforcement Discovery Mapping Correct Answer: C Explanation: Correct answer: Discovery Data loss prevention (DLP) solutions are designed to prevent sensitive data from being leaked or accessed by unauthorized users",
    domain: 2
  },
  {
    id: 503,
    text: "What does erasure coding accomplish?",
    options: ["Improved performance when implementing data dispersion Encryption", "of data in use Secure deletion", "of data after use Reconstruction of", "data when some segments are missing"],
    answer: 3,
    explanation: "xmexam",
    domain: 2
  },
  {
    id: 504,
    text: "Which type of mechanism can be used to ensure that archived data has NOT been modified?",
    options: ["Cryptographic erase Blockchain", "ledgers Chain", "of custody", "Legal holds"],
    answer: 1,
    explanation: "Cryptographic erase Blockchain ledgers Chain of custody Legal holds Correct Answer: B Explanation: Correct answer: Blockchain ledgers Archived data must remain unaltered over long periods to comply with legal, regulatory, and evidentiary requirements",
    domain: 2
  },
  {
    id: 505,
    text: "Which process ensures that data is securely removed when it is no longer needed?",
    options: ["Sanitization", "Revocation", "Archiving", "Degaussing"],
    answer: 0,
    explanation: "mexam",
    domain: 2
  },
  {
    id: 506,
    text: "Which phase of the cloud data life cycle includes actions such as backing up data to a removable drive and keeping it offsite?",
    options: ["Destroy", "Store", "Archive", "Use"],
    answer: 2,
    explanation: "udes actions such as backing up data to a removable drive and keeping it offsite? Destroy Store Archive Use Correct Answer: C Explanation: Correct answer: Archive The archive phase is when data is stored because it is no longer actively used but must be preserved for regulatory, historical, or backup purposes",
    domain: 2
  },
  {
    id: 507,
    text: "A data engineer at Acme Inc. is working to improve how data is retained and stored within the business. The engineer wants to determine the best time in the cloud data lifecycle to add labels to classify data. When is the BEST time to add labels to classify data?",
    options: ["Store phase", "Classify phase", "Create phase", "Tag phase"],
    answer: 2,
    explanation: "orking to improve how data is retained and stored within the business",
    domain: 2
  },
  {
    id: 508,
    text: "A cloud information security specialist needs to find out when a document was created. What could this engineer look at to find this information?",
    options: ["Data forensics", "Metadata Metaframe", "Data", "header"],
    answer: 1,
    explanation: "s engineer look at to find this information? Data forensics Metadata Metaframe Data header Correct Answer: B xmexam",
    domain: 2
  },
  {
    id: 509,
    text: "Amal, a developer at Acme Inc., just saved code o a cloud-based Git repository. This is an example of which stage of the cloud data lifecycle?",
    options: ["Create", "Store", "Share", "Pull"],
    answer: 1,
    explanation: "code o a cloud-based Git repository",
    domain: 2
  },
  {
    id: 510,
    text: "What should be implemented to keep users from tampering with centralized log data?",
    options: ["Chain of custody for log files after they have been", "aggregated Normalization of data after it arrives at the SIEM", "Geofencing controls that restrict where logs can be accessed", "from Unique access permission on the system running SIEM"],
    answer: 3,
    explanation: "on the system running SIEM xmexam",
    domain: 2
  },
  {
    id: 511,
    text: "Where are events captured and stored?",
    options: ["Configuration files", "Logs Event", "queues", "Databases"],
    answer: 1,
    explanation: "t queues Databases Correct Answer: B Explanation: Correct answer: Logs Logs are the standard mechanism for capturing events such as authentication, access, errors, and system changes",
    domain: 2
  },
  {
    id: 512,
    text: "Frankie has been tasked with finding and understanding how certain data keeps being leaked. She is analyzing the circumstances that data is being used and transmitted under. What type of analysis is she doing as part of Data Loss Prevention (DLP)?",
    options: ["Data classification", "Data permanence", "Contextual analysis", "Content analysis"],
    answer: 2,
    explanation: "hat data is being used and transmitted under",
    domain: 2
  },
  {
    id: 513,
    text: "An information security professional, Harley, has been working with the software developers on a new Software as a Service (SaaS) offering. The system will process credit cards on a repeated basis for their customers. Compliance with the Payment Card Industry Data Security Standard (PCI DSS) is a requirement. They want to minimize their potential exposure to a data breach. Which of the following can help to minimize their exposure?",
    options: ["Tokenization", "Anonymization", "Obfuscation", "Encryption"],
    answer: 0,
    explanation: "ware as a Service (SaaS) offering",
    domain: 2
  },
  {
    id: 514,
    text: "You are the information security team lead with the data architects. They are working to ensure that once data is entered into the database, it will retain that exact value and will not be changed or corrupted. What mechanism could you use to verify the integrity of the data over time?",
    options: ["Whirlpool Secure Hash", "Algorithm Rivest Shamir", "Adelman Advanced", "Encryption Standard"],
    answer: 1,
    explanation: "e, it will retain that exact value and will not be changed or corrupted",
    domain: 2
  },
  {
    id: 515,
    text: "Although the cloud data lifecycle is not necessarily iterative, it does have distinct phases. What is the proper sequence of the data lifecycle phases?",
    options: ["Create, Store, Share, Use,", "Archive, Destroy Create, Use,", "Share, Store, Archive, Destroy", "Create, Use, Store, Share, Archive, Destroy Create, Store, Use, Share, Archive, Destroy"],
    answer: 3,
    explanation: "Create, Use, Share, Store, Archive, Destroy Create, Use, Store, Share, Archive, Destroy Create, Store, Use, Share, Archive, Destroy Correct Answer: D Explanation: Correct answer: Create, Store, Use, Share, Archive, Destroy Create, Store, Use, Share, Archive, Destroy are the phases in the cloud data lifecycle in the correct order",
    domain: 2
  },
  {
    id: 516,
    text: "Where should sensitive information be stored when an organization wants to implement a tokenization solution for their data?",
    options: ["At an external trusted service On a removable", "drive in the organization's office In a plaintext", "file on the server that processes the information", "In a password-protected database in the organization's network"],
    answer: 0,
    explanation: "mation In a password-protected database in the organization's network xmexam",
    domain: 2
  },
  {
    id: 517,
    text: "Why is data location an issue in cloud data discovery?",
    options: ["Because data in the cloud can be located all over the", "world Because data in the cloud is inflexible with regard to", "where it is stored Because data in the cloud is encrypted", "when at rest Because data in the cloud is not classified"],
    answer: 0,
    explanation: "data in the cloud is not classified Correct Answer: A Explanation: Correct answer: Because data in the cloud can be located all over the world Understanding where data is physically stored is critical to compliance with privacy regulations such as GDPR",
    domain: 2
  },
  {
    id: 518,
    text: "What is a common way to classify data for cloud security?",
    options: ["By date created", "By last backup", "time By file", "size By sensitivity"],
    answer: 3,
    explanation: "ackup time By file size By sensitivity Correct Answer: D Explanation: Correct answer: By sensitivity Classification helps organizations apply the right controls to data based on risks and regulatory requirements",
    domain: 2
  },
  {
    id: 519,
    text: "Which of the following data retention considerations primarily applies to archived data rather than data in active use?",
    options: ["Retention Periods", "Retention Requirements", "Regulatory Requirements", "Data Classifications"],
    answer: 0,
    explanation: "in active use? Retention Periods Retention Requirements Regulatory Requirements Data Classifications Correct Answer: A Explanation: Correct answer: Retention Periods Data retention policies define how long an organization stores particular types of data",
    domain: 2
  },
  {
    id: 520,
    text: "A large banking institution is sending files from its IT department to its Compliance department. The files are labeled for sensitivity and criticality in the IT department, but when they arrive at Compliance, the data classifications are gone. What process does the bank need to implement to address this issue?",
    options: ["Data loss prevention", "Data labeling", "Data obfuscation", "Data mapping"],
    answer: 3,
    explanation: "for sensitivity and criticality in the IT department, but when they arrive at Compliance, the data classifications are gone",
    domain: 2
  },
  {
    id: 521,
    text: "You have been working with the lawyers within your business to ensure that the contract they are accepting with their new cloud provider is acceptable. They are purchasing a Platform as a Service (PaaS) license that will enable software developers to create server-based virtual machines to support a new software project. Once the software is created, they will offer Software as a Service (SaaS) to customers. To ensure that their business is protected, they need a method of properly removing the customers' data to ensure that it is sanitized when the contracts are over. What method of sanitizing the data would work?",
    options: ["Degaussing Cryptographic", "erasure Clearing", "Data", "dispersion"],
    answer: 1,
    explanation: "heir new cloud provider is acceptable",
    domain: 2
  },
  {
    id: 522,
    text: "What characteristic does an organization need to successfully collect digital evidence in case of a data event?",
    options: ["Auditability", "Availability", "Scalability", "Interoperability"],
    answer: 0,
    explanation: "tal evidence in case of a data event? Auditability Availability Scalability Interoperability Correct Answer: A Explanation: Correct answer: Auditability Successful evidence collection depends on the ability to track, verify, and preserve data access and activity in a way that supports forensic analysis and legal processes",
    domain: 2
  },
  {
    id: 523,
    text: "U-Jin has been tasked with figuring out how the company should protect the personal information that they have collected about their customers. He knows that they have to be compliant with a couple of different laws from around the world due to the location of their customers. Under the Payment Card Industry - Data Security Standard (PCI DSS), which of the following requires when data must be encrypted?",
    options: ["Data in use", "Data at rest", "Data in storage", "Data in transit"],
    answer: 3,
    explanation: "ould protect the personal information that they have collected about their customers",
    domain: 2
  },
  {
    id: 524,
    text: "Which SIEM feature is MOST vital to maintaining complete visibility in a multi-cloud environment?",
    options: ["Normalization Log Centralization", "and Aggregation", "Automated Monitoring", "Investigative Monitoring"],
    answer: 1,
    explanation: "g Centralization and Aggregation Automated Monitoring Investigative Monitoring Correct Answer: B Explanation: Correct answer: Log Centralization and Aggregation Security information and event management (SIEM) solutions are useful tools for log analysis",
    domain: 2
  },
  {
    id: 525,
    text: "What is a common method of identifying users and computers in an IRM system?",
    options: ["Decentralized webs of", "trust Allowing specific", "hardware and network", "addresses Physical keycards Issuing and revoking certificates and licenses"],
    answer: 3,
    explanation: "addresses Physical keycards Issuing and revoking certificates and licenses Correct Answer: D Explanation: Correct answer: Issuing and revoking certificates and licenses In cloud security, Information Rights Management (IRM) uses identity methods to ensure that only authorized parties can access protected content",
    domain: 2
  },
  {
    id: 526,
    text: "Information rights management (IRM) is the tool that a large manufacturing company has decided to use for their classroom books. They need to control who has access to their content. Users employ the IRM tool to access the classroom books, and the manufacturing company is monitoring usage and feedback for future improvements. Into which phase of the data lifecycle does IRM fit best?",
    options: ["Monitor phase", "Create phase", "Update phase", "Use phase"],
    answer: 3,
    explanation: "their classroom books",
    domain: 2
  },
  {
    id: 527,
    text: "What is Kerckhoff's principle?",
    options: ["Users should be given only the minimum number of permissions they need to perform their", "job. Cryptographic algorithms should be kept secret to ensure their strength. A cryptographic system should", "be secure even if it is public as long as the key is protected. Encrypted", "data should be unreadable to unauthorized users even if a key is found in the future."],
    answer: 2,
    explanation: "the future",
    domain: 2
  },
  {
    id: 528,
    text: "An organizaiton has been looking for a technology that would aid their business in its decision-making processes. They are trying to learn from all the data that they have so that they can make better decisions. In particular, they are trying to figure out how to reduce the costs of their manufacturing processes. Which technology would be BEST for providing specific recommendations for cost reductions?",
    options: ["Blockchain Descriptive", "analytics Prescriptive", "analytics Predictive", "analytics"],
    answer: 2,
    explanation: "making processes",
    domain: 2
  },
  {
    id: 529,
    text: "Ledger is setting up storage within their Infrastructure as a Service (IaaS) environment. He is building a system that will divide the storage into equal-sized pieces. He is doing this so that there will be efficient, fast, and reliable access to the data. What type of storage is this?",
    options: ["Block storage", "Volume storage", "File storage", "Object storage"],
    answer: 0,
    explanation: "m that will divide the storage into equal-sized pieces",
    domain: 2
  },
  {
    id: 530,
    text: "Data discovery can be described as which of the following?",
    options: ["The method of using masking, obfuscation, or anonymization to protect sensitive data The practice of", "safeguarding encryption keys A set of controls and practices put in place to ensure", "that data is only accessible to those authorized to access it A business intelligence", "operation and a user-driven process to look for patterns or specific attributes within data"],
    answer: 3,
    explanation: "ata Correct Answer: D xmexam",
    domain: 2
  },
  {
    id: 531,
    text: "Which of the following techniques replaces sensitive data with non-sensitive characters in certain contexts?",
    options: ["Tokenization", "Masking", "Hashing", "Encryption"],
    answer: 1,
    explanation: "ith non-sensitive characters in certain contexts? Tokenization Masking Hashing Encryption Correct Answer: B Explanation: Correct answer: Masking Cloud customers can use various strategies to protect sensitive data against unauthorized access, including:(ISC)2 CCSP Certified Cloud Security Professional Official Study Guide, 3rd Edition",
    domain: 2
  },
  {
    id: 532,
    text: "You're revising your organization's data protection policy to guarantee that your cloud deployment is adequately protected. In the policy, you have specified that cryptographic erasure will be implemented at appropriate points for your Infrastructure and Platform as a Service (IaaS & PaaS). Which phase of the data lifecycle does this apply to?",
    options: ["Archive", "Store", "Create", "Destruction"],
    answer: 3,
    explanation: "your organization's data protection policy to guarantee that your cloud deployment is adequately protected",
    domain: 2
  },
  {
    id: 533,
    text: "What is the final stage of the data life cycle?",
    options: ["Store", "Archive", "Use", "Destroy"],
    answer: 3,
    explanation: "e? Store Archive Use Destroy Correct Answer: D Explanation: Correct answer: Destroy The way organizations handle data is extremely important because information has become so valuable",
    domain: 2
  },
  {
    id: 534,
    text: "Ariel, an IT manager at Acme Inc., asked a Software as a Service (SaaS) provider how Acme Inc.'s data would be handled if they used the platform. Ariel was told that pieces of the file are stored on different servers throughout a data center (DC). What technology is the cloud provider describing?",
    options: ["Bit splitting", "Data dispersion", "iSCSI", "DFD"],
    answer: 1,
    explanation: "rvice (SaaS) provider how Acme Inc",
    domain: 2
  },
  {
    id: 535,
    text: "Which scenario is ideal for blob storage?",
    options: ["A financial institution needs to keep its records in secure storage for at least seven years", "to meet compliance requirements. A social media company needs to store ever-increasing amounts of video,", "image, and text data. A web application needs access to more ephemeral storage to handle", "more concurrent user requests. A video production company needs additional GPUs for rendering high-quality movies."],
    answer: 1,
    explanation: "",
    domain: 2
  },
  {
    id: 536,
    text: "Which mechanism prevents tampering with data that has been archived?",
    options: ["Hashing Legal", "hold WORM", "Archive", "bit"],
    answer: 2,
    explanation: "een archived? Hashing Legal hold WORM Archive bit Correct Answer: C Explanation: Correct answer: WORM Maintaining the integrity of archived data is essential for compliance, audits, and forensic investigations",
    domain: 2
  },
  {
    id: 537,
    text: "What are the two PRIMARY considerations when planning data retention policies?",
    options: ["Frequency and rotation schedule", "Disk and tape media", "Costs and space requirements", "Organization and compliance needs"],
    answer: 3,
    explanation: "on and compliance needs xmexam",
    domain: 2
  },
  {
    id: 538,
    text: "Which publication specifically offers detailed guidance on storage security?",
    options: ["NIST (SP) 800-209", "SANS security principles", "ISO/IEC 27017 CSA", "Enterprise Architecture"],
    answer: 0,
    explanation: "rity principles ISO/IEC 27017 CSA Enterprise Architecture Correct Answer: A Explanation: Correct answer: NIST (SP) 800-209 Storage security guidance includes considerations for data confidentiality, integrity, and availability across different storage technologies",
    domain: 2
  },
  {
    id: 539,
    text: "A large information security vendor that sells handware and software tools has its own DevOps team. Management recently decided that they must follow the guidance from OWASP regarding application logging. There are many things that they are concerned with regarding their customers' personal data protection. They have been analyzing what they are creating through the lens of threat modeling. What they have determined is that the clocks need to be pulled from the atomic clock sources on the planet. Which of the following recommendations applies to this scenario?",
    options: ["Integrity of log", "files Time synchronization", "Identity attribution Differing", "classification schemes"],
    answer: 1,
    explanation: "s own DevOps team",
    domain: 2
  },
  {
    id: 540,
    text: "Which of the following features of a SIEM enables analysts to query log files to collect information?",
    options: ["Automated monitoring", "Alerting Correlation", "Investigative", "monitoring"],
    answer: 3,
    explanation: "ct information? Automated monitoring Alerting Correlation Investigative monitoring Correct Answer: D Explanation: Correct answer: Investigative Monitoring Security information and event management ( SIEM) solutions are useful tools for log analysis",
    domain: 2
  },
  {
    id: 541,
    text: "Which of the following aspects of data retention policies is the MOST relevant to restoring from DR/BC backups?",
    options: ["Archiving and Retrieval", "Procedures and Mechanisms", "Regulatory Requirements Retention", "Periods Data Classification"],
    answer: 0,
    explanation: "m DR/BC backups? Archiving and Retrieval Procedures and Mechanisms Regulatory Requirements Retention Periods Data Classification Correct Answer: A Explanation: Correct answer: Archiving and Retrieval Procedures and Mechanisms Data retention policies define how long an organization stores particular types of data",
    domain: 2
  },
  {
    id: 542,
    text: "Roland has been working on understanding what data his company has, who owns it, and what can be done with it. What is he doing?",
    options: ["Risk assessment", "Data Inventory", "Data ownership", "Data processing"],
    answer: 1,
    explanation: "and what can be done with it",
    domain: 2
  },
  {
    id: 543,
    text: "A software development corporation has built an Infrastructure as a Service (IaaS) environment for their software developers to use when building their products. When a virtual machine is running, the software developer will use that platform to build and test their code. The running machines require a type of storage that allows the operating system the ability to store temp files and use as a swap space. What type of storage is used for that?",
    options: ["Ephemeral", "Volume", "Structured", "Object"],
    answer: 0,
    explanation: "ment corporation has built an Infrastructure as a Service (IaaS) environment for their software developers to use when building their products",
    domain: 2
  },
  {
    id: 544,
    text: "Which type of activity is a security concern with regard to secrets management?",
    options: ["Encrypting secrets when stored on a", "disk Centralizing secrets management Rotating", "secrets at regular intervals Including", "secrets directly in source code"],
    answer: 3,
    explanation: "directly in source code Correct Answer: D xmexam",
    domain: 2
  },
  {
    id: 545,
    text: "Information must be protected when it is stored in a cloud. A large insurance company is moving their databases to the cloud. There is a technical element in the cloud that will help to protect this data that is not present in traditional data centers. The data itself is segmented and stored on different servers. What is this called?",
    options: ["Cryptographic erasure Data", "dispersion Server clustering", "Redundant Array of", "Independent Disks"],
    answer: 1,
    explanation: "lement in the cloud that will help to protect this data that is not present in traditional data centers",
    domain: 2
  },
  {
    id: 546,
    text: "Which of the following activities occurs during the discovery function of DLP?",
    options: ["Analyzing data that is in use on endpoints Identifying", "data storage sources that contain sensitive information Blocking a", "user from saving sensitive information on a portable", "USB drive Monitoring data that leaves individual workstations"],
    answer: 1,
    explanation: "individual workstations Correct Answer: B xmexam",
    domain: 2
  },
  {
    id: 547,
    text: "Which of the following data classification labels might impact where data can be transferred or stored?",
    options: ["Type", "Criticality", "Ownership", "Jurisdiction"],
    answer: 3,
    explanation: "act where data can be transferred or stored? Type Criticality Ownership Jurisdiction Correct Answer: D Explanation: Correct answer: Jurisdiction Data owners are responsible for data classification, and data is classified based on organizational policies",
    domain: 2
  },
  {
    id: 548,
    text: "When selecting a cloud service provider, what is the MOST preferred attestation report to receive from vendors providing cloud services?",
    options: ["SOC 3 SOC 1,", "Type 2 SOC 2,", "Type 2 SOC", "2, Type 1"],
    answer: 2,
    explanation: "vendors providing cloud services? SOC 3 SOC 1, Type 2 SOC 2, Type 2 SOC 2, Type 1 xmexam",
    domain: 3
  },
  {
    id: 549,
    text: "Grace has been setting up a Data Loss Prevention (DLP) tool within their business to protect sensitive corporate data further. What type of DLP monitoring will be MOST useful in enabling monitoring of how users interact with data on Windows workstations?",
    options: ["In-use", "Enforcement", "At-rest", "Discovery"],
    answer: 0,
    explanation: "sensitive corporate data further",
    domain: 3
  },
  {
    id: 550,
    text: "Which of the following is NOT a physical or environmental control?",
    options: ["Intrusion Prevention System (IPS) Uninterruptible Power Supply (UPS) Biometric lock", "Intrusion", "Detection", "System (IDS)"],
    answer: 0,
    explanation: "Biometric lock Intrusion Detection System (IDS) Correct Answer: A Explanation: Correct answer: Intrusion Prevention System (IPS) An intrusion prevention system helps protect a network from malicious activity and intrusions, and therefore, is not considered a physical or environmental control",
    domain: 3
  },
  {
    id: 551,
    text: "An organization is going through a process where they are mapping their infrastructure and prioritizing systems and processes. Which stage of developing a BCP/DRP are they in?",
    options: ["Auditing", "Implementation", "Creation", "Testing"],
    answer: 2,
    explanation: "through a process where they are mapping their infrastructure and prioritizing systems and processes",
    domain: 3
  },
  {
    id: 552,
    text: "An organization has implemented a new client-server application. The security and compliance officer has been tasked with the responsibility of ensuring that the foundations for all security actions are covered in documentation by setting purpose, scope, roles, and responsibilities. What control is being described?",
    options: ["Procedures and guidelines", "Transport Layer Security", "(TLS) Guidelines Policy", "and baselines"],
    answer: 3,
    explanation: "n tasked with the responsibility of ensuring that the foundations for all security actions are covered in documentation by setting purpose, scope, roles, and responsibilities",
    domain: 3
  },
  {
    id: 553,
    text: "Shawna is working with her team to secure the Application Programing Interface (API) that will be used in a cloud deployment. They will be using a RESTful API (RePresentation State Transfer). To protect the request/response transmissions, she should ensure which of the following?",
    options: ["The API keys are not hard", "coded Both the requests and responses", "are encrypted The requests are always", "authenticated Regular security testing is done"],
    answer: 1,
    explanation: "tation State Transfer)",
    domain: 3
  },
  {
    id: 554,
    text: "Which of the following solutions is designed for access control in a logical data center?",
    options: ["ZTNA", "IDaaS", "VPN", "IDS"],
    answer: 1,
    explanation: "al data center? ZTNA IDaaS VPN IDS Correct Answer: B xmexam",
    domain: 3
  },
  {
    id: 555,
    text: "Which factor in designing a secure data center considers the likelihood of natural disasters and access to a reliable power grid?",
    options: ["Access control", "Tenant partitioning", "Ventilation", "Location"],
    answer: 3,
    explanation: "natural disasters and access to a reliable power grid? Access control Tenant partitioning Ventilation Location Correct Answer: D Explanation: Correct answer: Location Choosing the right location for a data center relates to ensuring availability, resiliency, and protection against natural disasters",
    domain: 3
  },
  {
    id: 556,
    text: "A cloud architect is designing a Disaster Recovery (DR) solution for the bank that they work at. For their most critical server, they have determined that it can only be offline at any point in time for no more than 10 minutes, and they cannot lose more than 2 seconds worth of data. When choosing if they should fail within their current cloud provider to another region or to another cloud provider, they need to base that decision mainly on which of the following?",
    options: ["The Recovery Time Objective (RTO)", "The Recovery Service Level (RSL)", "The Maximum Tolerable Downtime (MTD)", "The Recovery Point Objective (RPO)"],
    answer: 2,
    explanation: "erver, they have determined that it can only be offline at any point in time for no more than 10 minutes, and they cannot lose more than 2 seconds worth of data",
    domain: 3
  },
  {
    id: 557,
    text: "Which aspect of the ambient environment in a data center can result in corrosion of hardware components?",
    options: ["Temperature Humidity", "Vibrations", "Air", "pressure"],
    answer: 1,
    explanation: "nts? Temperature Humidity Vibrations Air pressure Correct Answer: B xmexam",
    domain: 3
  },
  {
    id: 558,
    text: "Zoe and her business continuity management team have decided that the best cloud option is to set up a different availability zone as their failover location. In testing their business continuity/disaster recovery (BC/DR) plan, Zoe's team has brought their recovery cloud online in the western half of the United States to an operational state of readiness, leaving their primary site active and operational in the eastern half of the United States. What type of test was conducted in this scenario?",
    options: ["Simulation test Parallel", "test Dual zone", "test Full", "cutover test"],
    answer: 1,
    explanation: "ption is to set up a different availability zone as their failover location",
    domain: 3
  },
  {
    id: 559,
    text: "Which type of solution is used in cloud infrastructure for packet capture?",
    options: ["SIEM Wireshark", "Virtual network", "tap Packet-filtering", "firewall"],
    answer: 2,
    explanation: "Wireshark Virtual network tap Packet-filtering firewall Correct Answer: C Explanation: Correct answer: Virtual network tap Capturing packets allows administrators to monitor, analyze, and investigate network traffic, but it can be complicated in a cloud environment",
    domain: 3
  },
  {
    id: 560,
    text: "Albert is working on the team that is building Disaster Recovery (DR) plans for their business. They have servers that their customers use in their Platform as a Service (PaaS). They are working on determining the impact to their business if it is offline. They have been able to determine that they will have thirty hours of time to perform the actions to recover their service on a different provider in the event of a disaster. What is this time frame called?",
    options: ["Mean Time to Repair (MTR)", "Recovery Service Level (RSL)", "Recovery Time Objective (RTO)", "Recovery Point Objective (RPO)"],
    answer: 2,
    explanation: "PaaS)",
    domain: 3
  },
  {
    id: 561,
    text: "Multivendor network connectivity is MOST related to which of the following risk considerations of cloud computing?",
    options: ["Data Center", "Location General", "Technology Risks", "Downtime Compliance"],
    answer: 2,
    explanation: "derations of cloud computing? Data Center Location General Technology Risks Downtime Compliance Correct Answer: C Explanation: Correct answer: Downtime Cloud computing risks can depend on the cloud service model used",
    domain: 3
  },
  {
    id: 562,
    text: "Acme Inc. is experiencing a Denial of Service (DoS) attack. The attackers contacted Acme Inc. management and demanded payment in Bitcoin to stop the attack. When they did not pay, the attacker performed a brute force attack on their cloud account password. Since the corporation did not set up multifactor authentication, the attacker was successful. The attacker was then able to access their cloud account's admin console and delete everything. This included all the company's virtual machines in their Infrastructure as a Service (IaaS) environment. The company ceased to exist immediately. What was utilized when the attacker was deleting all the corporation's cloud assets?",
    options: ["Secure shell", "Terminal Hypervisor", "Management", "plane"],
    answer: 3,
    explanation: "and demanded payment in Bitcoin to stop the attack",
    domain: 3
  },
  {
    id: 563,
    text: "A cloud provider needs to ensure that the data of each tenant in their multitenant environment is only visible to authorized parties and not to the other tenants in the environment. Which of the following can the cloud provider implement to ensure this?",
    options: ["Network security groups", "Physical network", "segregation Geofencing", "Tenant partitioning"],
    answer: 3,
    explanation: "visible to authorized parties and not to the other tenants in the environment",
    domain: 3
  },
  {
    id: 564,
    text: "Which document informs a cloud customer about the risks of using a particular CSP?",
    options: ["Business continuity plan", "Disaster recovery plan", "SOC 2 report", "Nondisclosure agreement"],
    answer: 2,
    explanation: "iness continuity plan Disaster recovery plan SOC 2 report Nondisclosure agreement Correct Answer: C Explanation: Correct answer: SOC 2 report A SOC 2 report describes the effectiveness of a CSP’s controls for security, availability, processing integrity, confidentiality, and privacy",
    domain: 3
  },
  {
    id: 565,
    text: "A cloud architect is looking to add an additional layer of security to their cloud network in the event a hacker gains a foothold into their network. The cloud architect wants to add an additional control that filters traffic just before it reaches the virtual systems by filtering port numbers. What is this control known as?",
    options: ["Micro-segmentation", "Software Defined", "Network (SDN) Security", "Groups (SG) Virtualization"],
    answer: 2,
    explanation: "network",
    domain: 3
  },
  {
    id: 566,
    text: "Rise is working for a corporation as their cloud architect. He is designing how the Platform as a Service (PaaS) deployment will be used to store sensitive data for one particular application. He is designing a trust zone for that data to be handled inside of. Which of the following BEST defines a trust zone?",
    options: ["Sets of rules that define which employees have access to", "which resources Physical, logical, or virtual boundaries around network resources", "The ability to share pooled resources among different cloud", "customers Virtual tunnels that connect resources at different locations"],
    answer: 1,
    explanation: "hat define which employees have access to which resources Physical, logical, or virtual boundaries around network resources The ability to share pooled resources among different cloud customers Virtual tunnels that connect resources at different locations Correct Answer: B xmexam",
    domain: 3
  },
  {
    id: 567,
    text: "Which of the following is MOST relevant in public cloud environments?",
    options: ["HVAC Multivendor", "Pathway Connectivity", "Tenant Partitioning", "Access Controls"],
    answer: 2,
    explanation: "y Connectivity Tenant Partitioning Access Controls Correct Answer: C Explanation: Correct answer: Tenant Partitioning Multitenant public cloud environments run the security risk of one tenant being able to access or affect another’s data, applications, etc",
    domain: 3
  },
  {
    id: 568,
    text: "Which of the following activities needs to be done during the planning phase of a business continuity plan?",
    options: ["Implementing high-availability solutions Testing in", "a simulated scenario Documenting", "lessons learned from an", "incident Prioritizing business processes"],
    answer: 3,
    explanation: "ed scenario Documenting lessons learned from an incident Prioritizing business processes Correct Answer: D Explanation: Correct answer: Prioritizing business processes Planning ensures that the most critical business functions are identified and prioritized before disaster recovery or continuity activities take place",
    domain: 3
  },
  {
    id: 569,
    text: "Which type of attack targets a hypervisor?",
    options: ["Denial of", "service Phishing", "VM escape", "Race condition"],
    answer: 2,
    explanation: "M escape Race condition Correct Answer: C Explanation: Correct answer: VM escape A VM escape attack targets a hypervisor by exploiting vulnerabilities that allow a virtual machine’s processes to break out of its isolated environment and directly interact with the host system or other VMs",
    domain: 3
  },
  {
    id: 570,
    text: "Which of the following cloud vulnerabilities is BEST addressed with encryption?",
    options: ["Denial-of-service attacks", "on other", "tenants DNS zone", "walking API request flooding CSP employees exfiltrating data"],
    answer: 3,
    explanation: "walking API request flooding CSP employees exfiltrating data Correct Answer: D Explanation: Correct answer: CSP employees exfiltrating data Encryption ensures that even if cloud service provider employees access or attempt to exfiltrate data, they cannot read it without the decryption keys",
    domain: 3
  },
  {
    id: 571,
    text: "Which of the following is MOST closely related to an organization's efforts to ensure features like confidentiality and non-repudiation?",
    options: ["Security Function Isolation Cryptographic", "Key Establishment and Management", "Separation of System and", "User Functionality Boundary Protection"],
    answer: 1,
    explanation: "lation Cryptographic Key Establishment and Management Separation of System and User Functionality Boundary Protection Correct Answer: B Explanation: Correct answer: Cryptographic Key Establishment and Management NIST SP 800-53, Security and Privacy Controls for Information Systems and Organizations defines 51 security controls for systems and communication protection",
    domain: 3
  },
  {
    id: 572,
    text: "Organization A and Organization B are both cloud customers using the same cloud provider and are even sharing resources on the same physical server. Organization B was hit with a Denial-of-Service (DoS) attack, causing them to use more resources than they would normally need. Fortunately, Organization A will always receive, at least, the minimum Central Processing Unit (CPU) and memory resources that they need to operate their services. Organization B's DoS attack will also not knock them out of service. Which concept guarantees that Organization A will always receive the amount of resources needed to run their services?",
    options: ["Reservations", "Shares", "Limits", "Pooling"],
    answer: 0,
    explanation: "Organization B are both cloud customers using the same cloud provider and are even sharing resources on the same physical server",
    domain: 3
  },
  {
    id: 573,
    text: "Acme Inc. is defining an RSL as part of its business continuity and disaster recovery plan. Acme Inc.'s resources are distributed evenly across these environments: What is Acme Inc's RSL?",
    options: ["1", "4", "25%", "75%"],
    answer: 2,
    explanation: "disaster recovery plan",
    domain: 3
  },
  {
    id: 574,
    text: "In which cloud service model is risk related to lack of required expertise the largest?",
    options: ["Platform as a Service Server-less", "Platform as a Service Server-based", "Software as a Service", "Infrastructure as a Service"],
    answer: 3,
    explanation: "rvice Server-based Software as a Service Infrastructure as a Service Correct Answer: D Explanation: Correct answer: Infrastructure as a Service In the Infrastructure as a Service ( IaaS) model, the cloud customer controls most of their infrastructure stack",
    domain: 3
  },
  {
    id: 575,
    text: "In a tier two data center, it is necessary to build in some redundancy. Which of the following options would be appropriate at this tier?",
    options: ["Data circuits", "Server drives", "Servers", "Generators"],
    answer: 3,
    explanation: "would be appropriate at this tier? Data circuits Server drives Servers Generators Correct Answer: D xmexam",
    domain: 3
  },
  {
    id: 576,
    text: "In which cloud service model is the customer responsible for securing physical infrastructure for computing resources?",
    options: ["No model", "IaaS", "PaaS", "SaaS"],
    answer: 0,
    explanation: "r responsible for securing physical infrastructure for computing resources? No model IaaS PaaS SaaS Correct Answer: A Explanation: Correct answer: None Compute resources include the components that offer memory, CPU, disk, networking, and other services to the customer",
    domain: 3
  },
  {
    id: 577,
    text: "Which of the following BEST describes the types of applications that create risk in a cloud environment?",
    options: ["Every piece of software in", "the environment Software with", "administrator privileges Small utility", "scripts Full application suites"],
    answer: 0,
    explanation: "ges Small utility scripts Full application suites Correct Answer: A xmexam",
    domain: 3
  },
  {
    id: 578,
    text: "Angela works for a cloud provider. Her job is to create virtual machines and save the images for the customers to use in their Platform as a Service (PaaS) offering. When Angela is accessing the server and creating the virtual machines, she is using which of the following?",
    options: ["Secure Shell", "Hypervisor Data", "plane Management", "plane"],
    answer: 3,
    explanation: "ers to use in their Platform as a Service (PaaS) offering",
    domain: 3
  },
  {
    id: 579,
    text: "Which of the following is NOT a common way for organizations to gather information about a cloud service provider's (CSP's) operations for their risk assessment?",
    options: ["Audit Reports On-Site", "Audits Policy Review", "Service Level", "Agreements (SLAs)"],
    answer: 1,
    explanation: "ions for their risk assessment? Audit Reports On-Site Audits Policy Review Service Level Agreements (SLAs) Correct Answer: B xmexam",
    domain: 3
  },
  {
    id: 580,
    text: "Which of the following statements accurately describes an organization's decision to build or buy a data center?",
    options: ["Building does not require staffing the data center 24/7. Building", "does not allow the organization to scale up or down", "based on its needs. Building is a bigger cost", "commitment than buying. Building requires less planning than buying."],
    answer: 2,
    explanation: "uilding is a bigger cost commitment than buying",
    domain: 3
  },
  {
    id: 581,
    text: "As the information security manager, Ren has been working with the business continuity planning team to determine if their plan is ready. They have just performed a test that tests all but the actual switchover from the production environment to the backup cloud environment. What type of test have they performed?",
    options: ["Simulation Parallel", "Tabletop", "Full", "interruption"],
    answer: 1,
    explanation: "o determine if their plan is ready",
    domain: 3
  },
  {
    id: 582,
    text: "Which method is ideal for preventing other tenants from viewing fragments of cloud data if the underlying storage is reallocated?",
    options: ["VM escape Remote", "wipe Crypto", "shredding Secure", "erase utilities"],
    answer: 2,
    explanation: "reallocated? VM escape Remote wipe Crypto shredding Secure erase utilities Correct Answer: C xmexam",
    domain: 3
  },
  {
    id: 583,
    text: "Which of the following cloud service models has the FEWEST potential risks and threats related to provider trust that the customer must consider?",
    options: ["Infrastructure as a Service", "Platform as a Service", "Software as a Service", "Function as a Service"],
    answer: 0,
    explanation: "that the customer must consider? Infrastructure as a Service Platform as a Service Software as a Service Function as a Service Correct Answer: A Explanation: Correct answer: Infrastructure as a Service In an Infrastructure as a Service (IaaS) environment, the customer has the greatest control over its infrastructure stack",
    domain: 3
  },
  {
    id: 584,
    text: "Which of the following potential risks is CREATED by a failure to properly reconfigure applications when moving them from PaaS-based development environments to production?",
    options: ["Virtualization Interoperability", "Issues Resource", "Sharing Persistent", "Backdoors"],
    answer: 3,
    explanation: "development environments to production? Virtualization Interoperability Issues Resource Sharing Persistent Backdoors xmexam",
    domain: 3
  },
  {
    id: 585,
    text: "RBAC and ABAC are part of which component of a cloud environment?",
    options: ["Compute Networking", "Management", "plane", "Storage"],
    answer: 2,
    explanation: "t? Compute Networking Management plane Storage Correct Answer: C Explanation: Correct answer: Management plane Role-Based Access Control (RBAC) and Attribute-Based Access Control (ABAC) are methods of implementing access controls in the cloud management plane",
    domain: 3
  },
  {
    id: 586,
    text: "Olivia, an information security manager, is working on the Disaster Recovery (DR) team for a medium-sized government contractor. They provide a service for the government that has a requirement of being highly available. Which cloud-based strategy can provide the fastest Recovery Time Objective (RTO) for a critical application in the event of a disaster?",
    options: ["Leveraging a cloud provider's infrastructure for real-time replication and failover of the application and data", "Replicating the application and data to multiple geographically dispersed regions within a cloud provider's", "infrastructure Implementing a hybrid cloud model with a secondary data center for failover and", "recovery Creating regular backups of the application and data to an on-premises storage system"],
    answer: 0,
    explanation: "ata Replicating the application and data to multiple geographically dispersed regions within a cloud provider's infrastructure Implementing a hybrid cloud model with a secondary data center for failover and recovery Creating regular backups of the application and data to an on-premises storage system xmexam",
    domain: 3
  },
  {
    id: 587,
    text: "Which technology enables a control layer between real and virtual devices such as switches, firewalls and VMs?",
    options: ["SDN", "VPC", "LDAP", "VPN"],
    answer: 0,
    explanation: "s such as switches, firewalls and VMs? SDN VPC LDAP VPN Correct Answer: A xmexam",
    domain: 3
  },
  {
    id: 588,
    text: "Which of the following describes how an organization plans to maintain operations during an incident?",
    options: ["BCP", "IRT", "BIA", "DRP"],
    answer: 0,
    explanation: "w an organization plans to maintain operations during an incident? BCP IRT BIA DRP Correct Answer: A Explanation: Correct answer: BCP A business continuity plan (BCP) sustains operations during a disruptive event, such as a natural disaster or network outage",
    domain: 3
  },
  {
    id: 589,
    text: "IT staff members for an online asset trading platform are building an automatic failover system by taking advantage of a CSP's multiple availability zones. What is the team working on?",
    options: ["A business continuity plan", "Incident response procedures A", "recovery service level A", "disaster recovery plan"],
    answer: 3,
    explanation: "is the team working on? xmexam",
    domain: 3
  },
  {
    id: 590,
    text: "An engineer entered a data center and noticed that the humidity level was 20 percent relative humidity. What risk could this pose to systems?",
    options: ["Electrostatic discharge causing damage to the equipment Condensation may", "form, causing water damage Systems may overheat and", "burn internal components There is no risk because", "20% relative humidity is the ideal humidity level"],
    answer: 0,
    explanation: "stems may overheat and burn internal components There is no risk because 20% relative humidity is the ideal humidity level Correct Answer: A Explanation: Correct answer: Electrostatic discharge causing damage to the equipment The American Society of Heating, Refrigeration, and Air Conditioning Engineers (ASHRAE) recommends that data centers have a moisture level of 40-60 percent relative humidity",
    domain: 3
  },
  {
    id: 591,
    text: "Aden works for a large corporation that maintains its own traditional data center. They are beginning the work of planning their move to the cloud. They are going to build an Infrastructure as a Service (IaaS) environment in a public cloud provider and eventually shut down their data center. What can they expect in this move?",
    options: ["The number of virtual machines will be much greater than the number of physical machines that they had", "There will be close to the same number of physical machines in the virtual environment, but a few", "less The number of virtual machines will mirror the number of physical servers that they previously had There", "will be close to the same number of physical machines in the virtual environment, but a few more"],
    answer: 0,
    explanation: "mber of physical machines that they had There will be close to the same number of physical machines in the virtual environment, but a few less The number of virtual machines will mirror the number of physical servers that they previously had There will be close to the same number of physical machines in the virtual environment, but a few more Correct Answer: A Explanation: Correct answer: The number of virtual machines will be much greater than the number of physical machines that they had Moving from a physical data center to a virtual data center in an IaaS should not be a lift and shift",
    domain: 3
  },
  {
    id: 592,
    text: "Which of the following technologies can be used to ensure confidentiality in network communications?",
    options: ["TLS", "HMAC", "SHA-256", "MD5"],
    answer: 0,
    explanation: "network communications? TLS HMAC SHA-256 MD5 Correct Answer: A xmexam",
    domain: 3
  },
  {
    id: 593,
    text: "The fact that a cloud provider manages updates to the environment in a Platform as a Service (PaaS) model introduces which of the following potential risks?",
    options: ["Virtualization Interoperability", "Issues Resource", "Sharing Persistent", "Backdoors"],
    answer: 1,
    explanation: "aS) model introduces which of the following potential risks? Virtualization Interoperability Issues Resource Sharing Persistent Backdoors Correct Answer: B Explanation: Correct answer: Interoperability Issues Platform as a Service (PaaS) environments inherit all the risks associated with IaaS models, including personnel threats, external threats, and a lack of relevant expertise",
    domain: 3
  },
  {
    id: 594,
    text: "Which of the following statements BEST describes responsibility for storage when using cloud technologies?",
    options: ["The CSP is responsible for encrypting all customer data automatically, while the customer is responsible only for managing encryption keys. The CSP is responsible for the physical", "protection of storage infrastructure, while the customer is responsible for the logical security and privacy of the data stored in the CSP's environment. The CSP is responsible", "for properly configuring the storage tools, while the customer is responsible for patching and maintaining the data storage technologies. The CSP is responsible for assessing the adequacy", "of controls and their usage, while the customer is responsible for providing a set of controls and configuration options for secure use of the storage platform."],
    answer: 1,
    explanation: "ing a set of controls and configuration options for secure use of the storage platform",
    domain: 3
  },
  {
    id: 595,
    text: "Which of the following is an example of resilient design in a data center?",
    options: ["Using energy-efficient LED lighting around the building and in parking", "lots Placing HVAC systems in an area where they will", "not be flooded Installing a backup diesel power generator", "Requiring biometric authentication to enter or leave the building"],
    answer: 1,
    explanation: "leave the building xmexam",
    domain: 3
  },
  {
    id: 596,
    text: "A cloud provider can use a large pool of resources for numerous client hosts and applications. They can offer scalability and on-demand self-service. Which technology makes all this possible?",
    options: ["Virtualization Edge", "computing", "SaaS", "IaaS"],
    answer: 0,
    explanation: "rous client hosts and applications",
    domain: 3
  },
  {
    id: 597,
    text: "The Business Continuity/Disaster Recovery (BC/DR) team has been working for months to update their corporate DR plan. The PRIMARY goal of a DR test is to ensure which of the following?",
    options: ["Recovery Time Objective (RTO) goals are met Management is satisfied with the", "BC/DR plan Each administrator knows all", "the steps of the plan All", "production systems are brought back online"],
    answer: 0,
    explanation: "the following? Recovery Time Objective (RTO) goals are met Management is satisfied with the BC/DR plan Each administrator knows all the steps of the plan All production systems are brought back online Correct Answer: A Explanation: Correct answer: Recovery Time Objective (RTO) goals are met With any Business Continuity and Disaster Recovery (BCDR) test, the main goal and purpose is to ensure that Recovery Time Objective (RTO) and Recovery Point Objective (RPO) goals are met",
    domain: 3
  },
  {
    id: 598,
    text: "Which type of documentation shows that a data center has appropriate HVAC controls?",
    options: ["SSAE", "ISO/IEC", "27018 SOC 2", "Type II NERC/CIP"],
    answer: 2,
    explanation: "27018 SOC 2 Type II NERC/CIP Correct Answer: C xmexam",
    domain: 3
  },
  {
    id: 599,
    text: "Properly scaling network and computing resources is an important part of which of the following system and communication protections?",
    options: ["Security Function Isolation", "Denial-of-Service Prevention Boundary", "Protection Cryptographic Key", "Establishment and Management"],
    answer: 1,
    explanation: "Function Isolation Denial-of-Service Prevention Boundary Protection Cryptographic Key Establishment and Management Correct Answer: B Explanation: Correct answer: Denial-of-Service Prevention NIST SP 800-53, Security and Privacy Controls for Information Systems and Organizations defines 51 security controls for systems and communication protection",
    domain: 3
  },
  {
    id: 600,
    text: "In which cloud service model does the CSP's responsibility extend to securing operating systems, database management systems (DBMSs), and similar components made available to the cloud customer?",
    options: ["SaaS IaaS", "All service", "models", "PaaS"],
    answer: 3,
    explanation: "ystems, database management systems (DBMSs), and similar components made available to the cloud customer? SaaS IaaS All service models PaaS Correct Answer: D xmexam",
    domain: 3
  },
  {
    id: 601,
    text: "The cloud enables operations in geographically dispersed places and increases hardware and data redundancy. What is the end result of this in terms of disaster recovery and business continuity?",
    options: ["Lower Recovery Time Objectives (RTO) and Higher Recovery Point Objectives (RPO)", "Lower Recovery Point Objectives (RPO) and Recovery Time Objectives (RTO)", "Lower Recovery Point Objectives (RPO) and Recovery Service Level (RSL)", "Higher Recovery Time Objectives (RTO) and Recovery Point Objectives (RPO)"],
    answer: 1,
    explanation: "ecovery Time Objectives (RTO) Lower Recovery Point Objectives (RPO) and Recovery Service Level (RSL) Higher Recovery Time Objectives (RTO) and Recovery Point Objectives (RPO) Correct Answer: B Explanation: Correct answer: Lower Recovery Point Objectives (RPO) and Recovery Time Objectives (RTO) The capacity to operate in geographically remote locations and to provide increased hardware and data redundancy results in lower Recovery Time Objectives (RTOs) and Recovery Point Objectives (RPOs) for disaster recovery and business continuity",
    domain: 3
  },
  {
    id: 602,
    text: "Which mitigation technique can protect against an unexpected legal seizure of a host system in the cloud?",
    options: ["Third-party cloud access security", "broker Automated SIEM solutions", "Regular log file", "review Data dispersion"],
    answer: 3,
    explanation: "ccess security broker Automated SIEM solutions Regular log file review Data dispersion Correct Answer: D Explanation: Correct answer: Data dispersion Tenants must account for scenarios in which authorities seize shared infrastructure, potentially exposing their data",
    domain: 3
  },
  {
    id: 603,
    text: "Which design control ensures that a data center remains online even if one connection to an ISP is disrupted?",
    options: ["Multi-vendor pathway connectivity", "Tenant partitioning", "HVAC redundancy", "Geographic dispersion"],
    answer: 0,
    explanation: "ulti-vendor pathway connectivity Tenant partitioning HVAC redundancy Geographic dispersion Correct Answer: A Explanation: Correct answer: Multi-vendor pathway connectivity Using multiple ISPs with separate physical pathways ensures that if one provider or connection fails, the data center can still operate",
    domain: 3
  },
  {
    id: 604,
    text: "An organization implemented new system and communication protections that prevents users from altering and misconfiguring systems and communication processes. What type of protection did the organization implement?",
    options: ["Denial of Service (DoS)", "protection Boundary protection Security", "function isolation Separation of", "system and user functionality"],
    answer: 3,
    explanation: "n processes",
    domain: 3
  },
  {
    id: 605,
    text: "Haile is a cloud operator who has been reviewing the Indications of Compromise (IoC) from the company's Security Information and Event Manager (SIEM). The SIEM reviews the log outputs to find these possible compromises. Where should detailed logging be in place within the cloud?",
    options: ["Only specific levels of the virtualization structure Each level of", "the virtualization infrastructure as well as wherever the client accesses", "the management plane Wherever the client accesses the management plane", "only Only access to the hypervisor and the management plane"],
    answer: 1,
    explanation: "cture Each level of the virtualization infrastructure as well as wherever the client accesses the management plane Wherever the client accesses the management plane only Only access to the hypervisor and the management plane xmexam",
    domain: 3
  },
  {
    id: 606,
    text: "Which of the following statements about responsibilities related to securing network and communication infrastructure for cloud computing is FALSE?",
    options: ["The cloud provider is responsible for securing the physical infrastructure in its environment The cloud provider", "offers tools for securing cloud environments, but the customer is responsible for properly configuring and using", "them The cloud customer is responsible for securing the physical infrastructure in the customer's environment The", "cloud provider is responsible for securing the links between the customer's and the provider's environments"],
    answer: 3,
    explanation: "er's environment The cloud provider is responsible for securing the links between the customer's and the provider's environments Correct Answer: D Explanation: Correct answer: The cloud provider is responsible for securing the links between the customer's and the provider's environments",
    domain: 3
  },
  {
    id: 607,
    text: "In which of the following types of tests might participants perform limited, non disruptive actions such as spinning up backup VMs?",
    options: ["Parallel Test", "Tabletop Exercise", "Full Test", "Simulation"],
    answer: 3,
    explanation: "pants perform limited, non disruptive actions such as spinning up backup VMs? Parallel Test Tabletop Exercise Full Test Simulation Correct Answer: D Explanation: Correct answer: Simulation Business continuity/disaster recovery plan (BCP/DRP) testing can be performed in various ways",
    domain: 3
  },
  {
    id: 608,
    text: "Amina has been determining what level of access the sales manager and their team require to enter the customer database. She has determined that she will use an access mechanism that facilitates the setting-up process. What has she been doing?",
    options: ["Role Based Access Control (RBAC)", "Identity and Access Management (IAM)", "Account governance and policy establishment", "Attribute Based Access Control (ABAC)"],
    answer: 1,
    explanation: "hanism that facilitates the setting-up process",
    domain: 3
  },
  {
    id: 609,
    text: "An organization would like to plan a test of their business continuity and disaster recovery (BCDR) plan. They have decided that the test will involve the entire organization because the production servers are going to be taken offline. Once they are offline, the recovery plan must be used to recover the cloud services to their second cloud provider. What type of BCDR test are they performing?",
    options: ["Tabletop test", "Full-interruption test", "Walk-through test", "Parallel test"],
    answer: 1,
    explanation: "usiness continuity and disaster recovery (BCDR) plan",
    domain: 3
  },
  {
    id: 610,
    text: "Which of the following cloud audit mechanisms is designed to identify anomalies or trends that could point to events of interest?",
    options: ["Access Control", "Packet Capture", "Log Collection", "Correlation"],
    answer: 3,
    explanation: "ies or trends that could point to events of interest? Access Control Packet Capture Log Collection Correlation Correct Answer: D Explanation: Correct answer: Correlation Three essential audit mechanisms in cloud environments include: Access controls are important but not one of the three core audit mechanisms in cloud environments",
    domain: 3
  },
  {
    id: 611,
    text: "Which of the following statements is TRUE regarding a compromised hypervisor?",
    options: ["A compromised hypervisor is only a threat to other hypervisors in the environment but not a threat to the actual virtual machines", "A compromised hypervisor is only a threat to the virtual machines hosted on it and not other hypervisors in the environment A", "compromised hypervisor can be used to attack all virtual machines on that hypervisor and also be used to attack other hypervisors A", "compromised hypervisor can be used to attack network devices, but it can't be used to attack other hypervisors in the environment"],
    answer: 2,
    explanation: "n't be used to attack other hypervisors in the environment Correct Answer: C Explanation: Correct answer: A compromised hypervisor can be used to attack all virtual machines on that hypervisor and also be used to attack other hypervisors A compromised hypervisor can have serious consequences",
    domain: 3
  },
  {
    id: 612,
    text: "Kalani works for a large government contractor as a lead information security engineer. The company is working on a business case for their potential move to the cloud. Kalani knows that it is critical to define and defend her reasons for moving to the cloud. Which of the following statements is the MOST accurate?",
    options: ["Cloud platforms offer increased scalability and performance Traditional data centers and", "cloud environments have the exact same risks Cloud platforms are always", "less expensive than on-prem solutions Cloud platforms come with an", "increase in capital expenditures and a reduction in operational expenditures."],
    answer: 0,
    explanation: "nd performance Traditional data centers and cloud environments have the exact same risks Cloud platforms are always less expensive than on-prem solutions Cloud platforms come with an increase in capital expenditures and a reduction in operational expenditures",
    domain: 3
  },
  {
    id: 613,
    text: "Which backup strategy has the LOWEST recovery point objective (RPO)?",
    options: ["Monthly offsite tape", "backups Daily incremental", "backups Journaling", "Weekly snapshots"],
    answer: 2,
    explanation: "y incremental backups Journaling Weekly snapshots Correct Answer: C Explanation: Correct answer: Journaling A low RPO minimizes potential data loss from an incident",
    domain: 3
  },
  {
    id: 614,
    text: "A cloud operator is working on a current issue that has been identified within their Infrastructure as a Service (IaaS) public cloud deployment. After an Indication of Compromise (IoC) from the Security Information Event Manager (SIEM) pointed to a possible compromise, the Incident Response (IR) team was called in. The analysis of the alerts has led the network cloud operator to require visibility of the packets passing through their border router for what appears to be an ongoing attack. What will this likely require?",
    options: ["A written contract and written permission", "No special requirements are needed Permission", "from all cloud customers Input and", "involvement from the cloud provider"],
    answer: 1,
    explanation: "t",
    domain: 3
  },
  {
    id: 615,
    text: "An engineer has been asked by her supervisor to determine how fast each system must be back up and running after a disaster has occurred to meet BCDR objectives. What has this engineer been asked to determine?",
    options: ["Recovery Service Level (RSL)", "Recovery Time Objective (RTO)", "Maximum Tolerable Outage (MTO)", "Maximum Tolerable Downtime (MTD)"],
    answer: 3,
    explanation: "gineer been asked to determine? Recovery Service Level (RSL) Recovery Time Objective (RTO) Maximum Tolerable Outage (MTO) Maximum Tolerable Downtime (MTD) xmexam",
    domain: 3
  },
  {
    id: 616,
    text: "A bank has built a disaster recovery plan for their datacenter. Their plan is to fail from their traditional datacenter into the cloud. They have now contracted a cloud provider for an Infrastructure as a Service (IaaS) environment. They have constructed all the virtual machines that construct the virtual datacenter. Now they are going to test that those systems work and can operate for the business. Which type of disaster recovery plan testing are they conducting?",
    options: ["Parallel Full", "interruption", "Simulation", "Tabletop"],
    answer: 0,
    explanation: "eir plan is to fail from their traditional datacenter into the cloud",
    domain: 3
  },
  {
    id: 617,
    text: "Which of the following is also referred to as a COOP?",
    options: ["DIA", "DRP", "BCP", "BIA"],
    answer: 2,
    explanation: "rred to as a COOP? DIA DRP BCP BIA Correct Answer: C Explanation: Correct answer: BCP A business continuity plan (BCP) sustains operations during a disruptive event, such as a natural disaster or network outage",
    domain: 3
  },
  {
    id: 618,
    text: "Mateo is working with the cloud provider that his business has chosen to provide Platform as a Service (PaaS) for their server-based needs. It is necessary to specify the Central Processing Unit (CPU) requirements to ensure that this solution works as they require. CPU needs would be specified within the what?",
    options: ["Privacy Level Agreement (PLA)", "Master Services Agreement (MSA)", "Service Level Agreement (SLA)", "Business Associate Agreement (BAA)"],
    answer: 2,
    explanation: "necessary to specify the Central Processing Unit (CPU) requirements to ensure that this solution works as they require",
    domain: 3
  },
  {
    id: 619,
    text: "Which of the following temperature and humidity readings would be acceptable in a data center?",
    options: ["75°F, relative humidity 55%", "60°F, relative humidity 70%", "85°F, relative humidity 45%", "70°F, relative humidity 15%"],
    answer: 0,
    explanation: "lative humidity 70% 85°F, relative humidity 45% 70°F, relative humidity 15% Correct Answer: A Explanation: Correct answer: 75°F, relative humidity 55% Improper temperature or humidity can damage hardware, leading to downtime and loss of availability, which is a core element of cloud service reliability",
    domain: 3
  },
  {
    id: 620,
    text: "What risk appears if a data center does NOT have redundancy with its HVAC system?",
    options: ["Overheating of servers Fire", "damage Lack of physical", "security controls Susceptibility", "to water damage"],
    answer: 0,
    explanation: "eptibility to water damage Correct Answer: A xmexam",
    domain: 3
  },
  {
    id: 621,
    text: "Which of the following test types poses the HIGHEST risk to production systems?",
    options: ["Tabletop", "Simulation", "Cutover", "Parallel"],
    answer: 2,
    explanation: "to production systems? Tabletop Simulation Cutover Parallel Correct Answer: C Explanation: Correct answer: Cutover Testing disaster recovery methods ensures resiliency, but some approaches can threaten live production environments if not carefully managed",
    domain: 3
  },
  {
    id: 622,
    text: "Vendor lock-in is MOST associated with which of the following SaaS-specific risks?",
    options: ["Web Application", "Security Interoperability", "Issues Virtualization", "Proprietary Formats"],
    answer: 3,
    explanation: "rity Interoperability Issues Virtualization Proprietary Formats Correct Answer: D Explanation: Correct answer: Proprietary Formats A Software as a Service (SaaS) environment has all of the risks that IaaS and PaaS environments have, as well as new risks of its own",
    domain: 3
  },
  {
    id: 623,
    text: "Piotr is the cloud administrator that is setting up several servers for his corporation's software development projects. He has been selecting the servers that they need based on the number of Central Processing Units (CPU) and the amount of Random Access Memory (RAM) that they expect these servers to need. In a cloud environment, these options can be described as which of the following?",
    options: ["Network parameters", "Compute parameters", "Reservations Storage", "parameters"],
    answer: 1,
    explanation: "software development projects",
    domain: 3
  },
  {
    id: 624,
    text: "In ITIL, which type of plan would be created to prepare an organization for what needs to be done in the event of a disaster or critical failure?",
    options: ["Disaster Recovery Plan (DRP)", "Continuity management plan Incident", "Response Plan (IRP) Business", "Continuity Plan (BCP)"],
    answer: 1,
    explanation: "isaster or critical failure? Disaster Recovery Plan (DRP) Continuity management plan Incident Response Plan (IRP) Business Continuity Plan (BCP) Correct Answer: B Explanation: Correct answer: Continuity management plan ITIL uses the term continuity management instead of disaster recovery or business continuity",
    domain: 3
  },
  {
    id: 625,
    text: "Based on the CCSP exam objectives, which of the following is one of the three main audit mechanisms for log files?",
    options: ["Least privilege Packet", "capture Access", "controls Separation", "of duty"],
    answer: 1,
    explanation: "dit mechanisms for log files? Least privilege Packet capture Access controls Separation of duty Correct Answer: B Explanation: Correct answer: Packet capture Based on the CCSP exam objectives, essential audit mechanisms in cloud environments include: Least privilege, access controls, and separation of duty are not CCSP-defined essential audit mechanisms in cloud environments",
    domain: 3
  },
  {
    id: 626,
    text: "At which stage of the process of developing a BCP should an organization train personnel?",
    options: ["Testing", "Auditing", "Creation", "Implementation"],
    answer: 3,
    explanation: "organization train personnel? Testing Auditing Creation Implementation Correct Answer: D Explanation: Correct answer: Implementation Managing a business continuity/disaster recovery plan (BCP/DRP) has three main stages: Auditing is not one of the three stages of developing a BCP/DRP",
    domain: 3
  },
  {
    id: 627,
    text: "When analyzing the security of a cloud service provider that does NOT allow direct auditing, what type of certification can customers look for instead?",
    options: ["PCI DSS NIST", "CSF SOC 1", "Type II", "ISO 27001"],
    answer: 3,
    explanation: "does NOT allow direct auditing, what type of certification can customers look for instead? PCI DSS NIST CSF SOC 1 Type II ISO 27001 Correct Answer: D Explanation: Correct answer: ISO 27001 Third-party assurance mechanisms for cloud service providers give customers a trusted way to verify security practices when they cannot perform direct audits themselves",
    domain: 3
  },
  {
    id: 628,
    text: "Walker is working for a consulting firm that provides cloud consultant services. He is on a contract where the customer is asking for assistance with a particular topic. The Customer/ Cloud Customer (CC) needs to ensure high availability of their systems to be compliant with a particular regulation. What do they need to build into their environment?",
    options: ["Redundancy Multitenancy", "Load balancing", "High", "availability"],
    answer: 0,
    explanation: "ustomer is asking for assistance with a particular topic",
    domain: 3
  },
  {
    id: 629,
    text: "Which of the following cloud audit mechanisms may only be possible in an IaaS environment OR with the help of the cloud provider?",
    options: ["Log Collection", "Packet Capture", "Access Controls", "Correlation"],
    answer: 1,
    explanation: "cloud provider? Log Collection Packet Capture Access Controls Correlation xmexam",
    domain: 3
  },
  {
    id: 630,
    text: "A cloud data center is being built by a new Cloud Service Provider (CSP). The CSP wants to build a data center that has a level of resilience that will classify it as a Tier III. At which tier is it expected to add generators to backup the power supply?",
    options: ["Tier III", "Tier IV", "Tier II", "Tier I"],
    answer: 3,
    explanation: "ervice Provider (CSP)",
    domain: 3
  },
  {
    id: 631,
    text: "Which of the following is MOST relevant when an organization is scoping its server resource and performance requirements for its BCP?",
    options: ["RSL", "MTD", "RTO", "RPO"],
    answer: 0,
    explanation: "its server resource and performance requirements for its BCP? RSL MTD RTO RPO Correct Answer: A xmexam",
    domain: 3
  },
  {
    id: 632,
    text: "A cloud architect needs to ensure a seamless transition to the Disaster Recovery (DR) site given a disaster. What must the architect have in place to accomplish this?",
    options: ["Redundant internet providers", "Numerous hypervisors Failover", "mechanism Web Application", "Programming Interface (API)"],
    answer: 2,
    explanation: "have in place to accomplish this? Redundant internet providers Numerous hypervisors Failover mechanism Web Application Programming Interface (API) Correct Answer: C Explanation: Correct answer: Failover mechanism A failover mechanism must be in place for there to be a seamless transition between the primary site and the DR site if there's a disaster",
    domain: 3
  },
  {
    id: 633,
    text: "Which of the following is NOT one of the four main practices of IAM?",
    options: ["Authorization", "Accountability", "Authentication", "Administration"],
    answer: 3,
    explanation: "dministration xmexam",
    domain: 3
  },
  {
    id: 634,
    text: "Rafferty just configured the server-based Platform as a Service (PaaS) that they are using for their company, a government contractor. The server will be used to perform computations related to customer actions on their e-commerce website. He is concerned that they may not have enough CPU and memory allocated to them when they need it. What should he do?",
    options: ["Set a limit to make sure that the service will work", "correctly Make sure that the server has available share space Ensure", "a reservation is made at the minimum level needed Ensure", "the limits will not cause any problems with the service"],
    answer: 2,
    explanation: "ed that they may not have enough CPU and memory allocated to them when they need it",
    domain: 3
  },
  {
    id: 635,
    text: "Rosario works for a cloud service provider (CSP) and has set up servers in the data center. The CSP's hypervisors allow for the virtualization of servers and desktops for the customer to purchase and use. If the CSP is selling Infrastructure as a Service (IaaS), what is the breakdown of responsibility under the cloud-shared security model?",
    options: ["The cloud service customer (CSC) is responsible for the hypervisor and the virtual machines (VMs) The CSP", "is responsible for the hypervisor, and the cloud service customer (CSC) is responsible for the virtual", "machines (VMs) The cloud service customer (CSC) is responsible for the hypervisor, and the CSP is", "responsible for the hardware The CSP is responsible for the hypervisor and the virtual machines (VMs)"],
    answer: 1,
    explanation: "hines (VMs) The CSP is responsible for the hypervisor, and the cloud service customer (CSC) is responsible for the virtual machines (VMs) The cloud service customer (CSC) is responsible for the hypervisor, and the CSP is responsible for the hardware The CSP is responsible for the hypervisor and the virtual machines (VMs) Correct Answer: B Explanation: Correct answer: The CSP is responsible for the hypervisor, and the cloud service customer (CSC) is responsible for the virtual machines (VMs) The shared security model does differ with each cloud provider",
    domain: 3
  },
  {
    id: 636,
    text: "Which of the following solutions provides access control for users to connect to cloud resources?",
    options: ["KVM switch", "LDAP", "IDaaS", "VPN"],
    answer: 2,
    explanation: "cloud resources? KVM switch LDAP IDaaS VPN Correct Answer: C xmexam",
    domain: 3
  },
  {
    id: 637,
    text: "Which type of cloud threat does a cloud access security broker (CASB) attempt to address?",
    options: ["Loss of physical control", "On-path attack Loss of", "policy control Lack", "of audit access"],
    answer: 2,
    explanation: "cal control On-path attack Loss of policy control Lack of audit access Correct Answer: C Explanation: Correct answer: Loss of policy control Cloud access security brokers (CASBs) provide visibility and enforcement of security policies across cloud applications and services",
    domain: 3
  },
  {
    id: 638,
    text: "An engineer, working for an insurance company, is beginning the process of configuring the company's private cloud, building this on-prem at the headquarter's data center. They have decided on the physical routers, switches, and servers to purchase. The next step is the hypervisor. What kind of hypervisor should this engineer purchase?",
    options: ["Parallels hypervisor Type", "0 hypervisor Type", "1 hypervisor Type", "2 hypervisor"],
    answer: 2,
    explanation: "g the process of configuring the company's private cloud, building this on-prem at the headquarter's data center",
    domain: 3
  },
  {
    id: 639,
    text: "During a risk analysis of cloud infrastructure, what is identified in the FIRST step of the assessment?",
    options: ["Hardware", "Threats", "Assets", "Controls"],
    answer: 2,
    explanation: "the assessment? Hardware Threats Assets Controls Correct Answer: C xmexam",
    domain: 3
  },
  {
    id: 640,
    text: "You are working in Germany for a health care company. It is necessary for the company to ensure that they protect the personal data of the patients. One of the things that the corporation must do is ensure that they have a record of who accessed what record at any given time. How would they have confirmation of which user accessed a record?",
    options: ["Identification", "Authentication", "Federation", "Authorization"],
    answer: 1,
    explanation: "the company to ensure that they protect the personal data of the patients",
    domain: 3
  },
  {
    id: 641,
    text: "Which of the following exercises involves carrying out all the steps of a BCP without taking down primary systems?",
    options: ["Tabletop exercise", "Simulation Full", "test Parallel", "test"],
    answer: 3,
    explanation: "all the steps of a BCP without taking down primary systems? Tabletop exercise Simulation Full test Parallel test Correct Answer: D Explanation: Correct answer: Parallel Test Business continuity/disaster recovery plan (BCP/DRP) testing can be performed in various ways",
    domain: 3
  },
  {
    id: 642,
    text: "Biometrics and passwords are part of which stage of IAM?",
    options: ["Authentication", "Identification", "Authorization", "Accountability"],
    answer: 0,
    explanation: "fication Authorization Accountability Correct Answer: A Explanation: Correct answer: Authentication Identity and Access Management (IAM) services have four main practices, including:(ISC)2 CCSP Certified Cloud Security Professional Official Study Guide, 3rd Edition",
    domain: 3
  },
  {
    id: 643,
    text: "A user might provide their username as part of which stage of IAM?",
    options: ["Authorization", "Authentication", "Identification", "Accountability"],
    answer: 2,
    explanation: "ountability Correct Answer: C xmexam",
    domain: 3
  },
  {
    id: 644,
    text: "Which of the following is NOT one of the main risks that needs to be assessed during the Business Impact Assessment (BIA) phase of developing a Disaster Recovery (DR) plan?",
    options: ["Load capacity at the", "disaster recovery site Budgetary constraints applied by", "management Legal and contractual issues from failures", "Migration of services to the alternate site"],
    answer: 1,
    explanation: "disaster recovery site Budgetary constraints applied by management Legal and contractual issues from failures Migration of services to the alternate site Correct Answer: B Explanation: Correct answer: Budgetary constraints applied by management As with any new system or plan being implemented, it's important to assess the risks of the changes",
    domain: 3
  },
  {
    id: 645,
    text: "Joan, a cloud architect, wants to ensure that the management plane of her cloud environment is well protected. What security method is the MOST important to implement to accomplish this?",
    options: ["Service Level Agreement (SLA)", "Intrusion detection systems (IDS)", "Transport Layer Security (TLS)", "Multi-factor authentication (MFA)"],
    answer: 3,
    explanation: "s? Service Level Agreement (SLA) Intrusion detection systems (IDS) Transport Layer Security (TLS) Multi-factor authentication (MFA) Correct Answer: D xmexam",
    domain: 3
  },
  {
    id: 646,
    text: "In a Business Continuity and Disaster Recovery (BCDR) plan, the amount of time is being considered for when a critical system can be offline before there is more damage to the business than the organization is willing to experience. What phase of the planning lifecycle would this be determined in?",
    options: ["Project management and", "initiation Policy creation", "Recovery strategies Business", "impact analysis"],
    answer: 3,
    explanation: "ere is more damage to the business than the organization is willing to experience",
    domain: 3
  },
  {
    id: 647,
    text: "Which solution addresses resiliency issues for a data center in a location with frequent power outages?",
    options: ["Designing the data center", "with a high-angled roof", "Placing backup generators above ground level", "Implementing biometric access controls Connecting the data center to multiple grids"],
    answer: 3,
    explanation: "Implementing biometric access controls Connecting the data center to multiple grids Correct Answer: D Explanation: Correct answer: Connecting the data center to multiple grids Reliable power infrastructure is critical to maintaining availability and minimizing downtime risks",
    domain: 3
  },
  {
    id: 648,
    text: "What is the customer's PRIMARY responsibility with regard to cloud storage?",
    options: ["Provisioning storage clusters Ensuring the security and", "privacy of data Managing the redundant array", "of independent disks Patching", "the storage device firmware"],
    answer: 1,
    explanation: "redundant array of independent disks Patching the storage device firmware Correct Answer: B Explanation: Correct answer: Ensuring the security and privacy of data While providers secure the infrastructure, customers remain responsible for how their data is managed and protected",
    domain: 3
  },
  {
    id: 649,
    text: "What are the main responsibilities of a customer in a SaaS cloud service model?",
    options: ["CPU RAM", "Network and", "storage Users", "and data"],
    answer: 3,
    explanation: "ud service model? CPU RAM Network and storage Users and data Correct Answer: D Explanation: Correct answer: Users and data In SaaS, the cloud provider manages infrastructure, storage, and networking, while the customer is responsible for securing user access and protecting the data they create and store",
    domain: 3
  },
  {
    id: 650,
    text: "Which type of security control addresses data exfiltration?",
    options: ["Cryptographic key establishment and", "management Boundary protection Security", "function isolation Separation of", "system and user functionality"],
    answer: 1,
    explanation: "aration of system and user functionality Correct Answer: B Explanation: Correct answer: Boundary protection Boundary protection, such as via f irewalls and data loss prevention systems, monitors and restricts outbound traffic to stop sensitive data from leaving the organization",
    domain: 3
  },
  {
    id: 651,
    text: "Which concept makes securing compute resources in the cloud different from securing compute resources on-premises?",
    options: ["Hardening", "Patching", "Multi-tenancy", "Encryption"],
    answer: 2,
    explanation: "ferent from securing compute resources on-premises? Hardening Patching Multi-tenancy Encryption Correct Answer: C Explanation: Correct answer: Multi-tenancy In the cloud, multiple customers share the same physical compute resources, which requires strong isolation mechanisms to prevent one tenant from accessing another’s data",
    domain: 3
  },
  {
    id: 652,
    text: "Which of the following security controls can be used to limit users who can perform actions in the management plane of a cloud service?",
    options: ["Encryption Digital rights", "management Intrusion detection", "system Role-based", "access control"],
    answer: 3,
    explanation: "obao",
    domain: 3
  },
  {
    id: 653,
    text: "When developing a business continuity and disaster recovery (BC/DR) plan, what step should be completed after the scope has been defined?",
    options: ["Recovery strategies Embed in", "the user community Test", "the plan Business", "Impact Assessment (BIA)"],
    answer: 3,
    explanation: "ategies Embed in the user community Test the plan Business Impact Assessment (BIA) Correct Answer: D xmexam",
    domain: 3
  },
  {
    id: 654,
    text: "Why do data centers use bollards?",
    options: ["Network communications", "Disaster recovery", "Physical security", "Risk identification"],
    answer: 2,
    explanation: "identification Correct Answer: C Explanation: Correct answer: Physical security Physical security is a foundational layer of safeguarding cloud infrastructure against external threats",
    domain: 3
  },
  {
    id: 655,
    text: "An organization has just completed the design phase of developing their Business Continuity and Disaster Recovery (BC/DR) plan. What is the next step for this organization?",
    options: ["Assess risk Revise", "Implement the", "plan Test", "the plan"],
    answer: 2,
    explanation: "covery (BC/DR) plan",
    domain: 3
  },
  {
    id: 656,
    text: "Which of the following compensating controls can be used when it is NOT possible to physically destroy cloud storage that is no longer needed?",
    options: ["Degaussing Crypto", "shredding Secure", "wipe File", "shredding"],
    answer: 1,
    explanation: "torage that is no longer needed? Degaussing Crypto shredding Secure wipe File shredding Correct Answer: B xmexam",
    domain: 3
  },
  {
    id: 657,
    text: "In which of the following cloud models can an organization's infrastructure NOT be hosted in its own data center?",
    options: ["Choose the answer that includes ALL the", "correct responses. Public Cloud and Hybrid Cloud", "Public Cloud only Public Cloud and Community", "Cloud Hybrid Cloud and Community Cloud"],
    answer: 1,
    explanation: "brid Cloud Public Cloud only Public Cloud and Community Cloud Hybrid Cloud and Community Cloud Correct Answer: B Explanation: Correct answer: Public Cloud only The physical environment where cloud resources are hosted depends on the cloud model in use: Hybrid and multi cloud environments will likely have infrastructure hosted by different organizations",
    domain: 3
  },
  {
    id: 658,
    text: "Shai has been working with the Disaster Recovery (DR) teams to build the DR Plans (DRP) for their critical transaction database. They process a great deal of commercial transactions in an hour. They have been able to determine that they need a configuration that will nearly eliminate the risk of the loss of any transactions that are performed. They have a Recovery Point Objective (RPO) that is sub one second. What technology should they implement?",
    options: ["A server cluster that spans multiple availability zones with load", "balancers Redundant servers that are served through multiple data centers", "A set of redundant servers across multiple availability zones Load", "balancers that span multiple servers in a single data center"],
    answer: 0,
    explanation: "ns that are performed",
    domain: 3
  },
  {
    id: 659,
    text: "Which of the following applies restrictions on a virtual machine's growth?",
    options: ["Share Reservation", "floor Limit", "Reservation", "cap"],
    answer: 2,
    explanation: "mit Reservation cap Correct Answer: C xmexam",
    domain: 3
  },
  {
    id: 660,
    text: "A user provides their employee ID to an IAM system. Which part of the IAM process are they in?",
    options: ["Authentication", "Identification", "Authorization", "Accountability"],
    answer: 1,
    explanation: "ess are they in? Authentication Identification Authorization Accountability Correct Answer: B Explanation: Correct answer: Identification Correctly identifying users is the foundation for granting secure access to resources",
    domain: 3
  },
  {
    id: 661,
    text: "Estella, the information security manager, is working with senior management to prepare and plan for a new data center. As a cloud provider, they know it is critical to ensure that their customers' data is protected as needed. One of the key industries that they serve is the health care industry, and Estella understands that there are specific laws that govern the protection of the Protected Health Information (PHI), which includes x-rays, blood tests, drug prescriptions, and so on. What is the primary physical consideration that must be determined FIRST when building a data center?",
    options: ["Redundancy Location", "Natural", "disasters", "Budget"],
    answer: 1,
    explanation: "a new data center",
    domain: 3
  },
  {
    id: 662,
    text: "How does an organization typically define an asset?",
    options: ["Anything that is of value to the", "organization Physical items that can be resold", "Critical processes that an organization needs to", "function A document that verifies regulatory compliance"],
    answer: 0,
    explanation: "t verifies regulatory compliance Correct Answer: A Explanation: Correct answer: Anything that is of value to them Asset identification is the foundation for protecting systems, data, and resources",
    domain: 3
  },
  {
    id: 663,
    text: "Which of the following is an example of a logical or software-level consideration when designing a data center?",
    options: ["Location Multivendor", "Pathway Connectivity", "Tenant Partitioning", "HVAC"],
    answer: 2,
    explanation: "designing a data center? Location Multivendor Pathway Connectivity Tenant Partitioning HVAC Correct Answer: C Explanation: Correct answer: Tenant Partitioning Tenant partitioning is an example of a logical consideration for data center design",
    domain: 3
  },
  {
    id: 664,
    text: "A cloud administrator needs to access the cloud environment remotely for administration purposes. The administrator needs to patch an existing virtual machine image and then use orchestration to cause the existing running machines to restart from the newly patched image. What tool would they use for this purpose?",
    options: ["A secure console", "Transparent Layer Security", "(TLS) Secure Shell", "(SSH) Management plane"],
    answer: 3,
    explanation: "inistrator needs to patch an existing virtual machine image and then use orchestration to cause the existing running machines to restart from the newly patched image",
    domain: 3
  },
  {
    id: 665,
    text: "Cloud services like Amazon S3 and Azure Blob Storage store data in \"buckets\" without additional hierarchical organization. These are examples of what type of cloud storage?",
    options: ["Image storage", "Object storage", "Block storage", "File storage"],
    answer: 1,
    explanation: "\" without additional hierarchical organization",
    domain: 3
  },
  {
    id: 666,
    text: "In the Uptime Institute's Tier Classification system, which tier number describes data centers that have met the strictest requirements?",
    options: ["5", "3", "2", "4"],
    answer: 3,
    explanation: "ier Classification system, which tier number describes data centers that have met the strictest requirements? 5 3 2 4 Correct Answer: D Explanation: Correct answer: 4 The Uptime Institute's Tier Classification System defines four different data center tiers",
    domain: 3
  },
  {
    id: 667,
    text: "Jose works for a small regional bank that is building their Business Continuity Plan (BCP) for the first time. As he builds the business case that he will present to the Board of Directors and C-suite, he is identifying risks that will be addressed by this plan. If he is working to ensure that the customers will have enough access to the online portal for their needs, even through disruptions within the data center, what parameter must he ensure that the alternate plan meets?",
    options: ["Maximum Tolerable Downtime", "Recovery Time Objective", "Maximum Tolerable Outage", "Recovery Service Level"],
    answer: 3,
    explanation: "an (BCP) for the first time",
    domain: 3
  },
  {
    id: 668,
    text: "Which of the following cloud service offerings has the GREATEST potential exposure to virtualization-related security risks outside of the cloud customer's control?",
    options: ["FaaS", "PaaS", "IaaS", "SaaS"],
    answer: 3,
    explanation: "xposure to virtualization-related security risks outside of the cloud customer's control? FaaS PaaS IaaS SaaS Correct Answer: D xmexam",
    domain: 3
  },
  {
    id: 669,
    text: "Karen is working to ensure that the cloud solution chosen for her banking company as they move to a vendor supplied Software as a Service (SaaS) solution will protect them properly. They have several regulations that they must be in compliance with. Of the following, what is the highest security concern that they likely have?",
    options: ["Preventing vendor lock-in Ensuring the", "integrity of their data Ensuring", "99.9999% uptime Ensuring that", "cost is managed effectively"],
    answer: 1,
    explanation: "tion will protect them properly",
    domain: 3
  },
  {
    id: 670,
    text: "Which of the following is likely to REDUCE downtime?",
    options: ["Increase SPOFs Remove SPOFs Create backups", "of the most important servers", "in the environment Perform updates", "and upgrades during non-business hours"],
    answer: 1,
    explanation: "form updates and upgrades during non-business hours Correct Answer: B Explanation: Correct answer: Remove SPOFs Single points of failure ( SPOFs) are components in a system without redundancy which can cause downtime",
    domain: 3
  },
  {
    id: 671,
    text: "Which of the following risks is an Infrastructure as a Service offering exposed to the LEAST compared to other service models?",
    options: ["Virtualized OS risks", "Lack of required", "expertise External threats", "Personnel threats"],
    answer: 0,
    explanation: "OS risks Lack of required expertise External threats Personnel threats Correct Answer: A xmexam",
    domain: 3
  },
  {
    id: 672,
    text: "What is the DIFFERENCE between a Type 1 and Type 2 hypervisor?",
    options: ["A Type 1 hypervisor runs directly on the physical", "hardware. A Type 1 hypervisor requires a host operating", "system. A Type 1 hypervisor can run multiple VMs.", "A Type 1 hypervisor is immune to VM escape."],
    answer: 0,
    explanation: "A Type 1 hypervisor is immune to VM escape",
    domain: 3
  },
  {
    id: 673,
    text: "For which of the following would an organization require multiple ISPs?",
    options: ["Hosting CDN nodes", "Multivendor pathway connectivity", "VPN optimization", "Tenant partitioning"],
    answer: 1,
    explanation: "ant partitioning xmexam",
    domain: 3
  },
  {
    id: 674,
    text: "Marcella works at a bank as the information security expert working with the Disaster Recovery Planning (DRP) team. They have done a Business Impact Analysis (BIA) on their critical business functions. They have been able to determine that the maximum amount of time that one of these services can be offline is two hours. As a result, they have planned to fail to a different region of their cloud provider if there is a failure that brings their Platform as a Service (PaaS) down. They are currently configuring the systems that they will fail over to. They need to ensure that it is configured correctly to provide the Recovery Service Level (RSL) needed. RSL can BEST be described as which of the following?",
    options: ["The percentage of the performance level which must be restored to meet Disaster Recovery (DR) objectives", "The average time it takes to recover services back to their normal production state The percentage", "of data needed to be restored to meet Disaster Recovery (DR) objectives The length of time", "that is acceptable for services to be offline or unavailable during a disaster recovery scenario"],
    answer: 0,
    explanation: "Platform as a Service (PaaS) down",
    domain: 3
  },
  {
    id: 675,
    text: "Careful design and filtering is important to avoid information overload for which of the following cloud audit mechanisms?",
    options: ["Log Collection", "Packet Capture", "Access Controls", "Correlation"],
    answer: 0,
    explanation: "hich of the following cloud audit mechanisms? Log Collection Packet Capture Access Controls Correlation Correct Answer: A Explanation: Correct answer: Log Collection Three essential audit mechanisms in cloud environments include: Access controls are important but not one of the three core audit mechanisms in cloud environments",
    domain: 3
  },
  {
    id: 676,
    text: "A cloud administrator has just implemented a new hypervisor that is completely dependent on the host operating system for all operations. What type of hypervisor has this administrator implemented?",
    options: ["Type 2 hypervisor", "Type 1 hypervisor", "Bare metal hypervisor", "Full-service hypervisor"],
    answer: 0,
    explanation: "What type of hypervisor has this administrator implemented? Type 2 hypervisor Type 1 hypervisor Bare metal hypervisor Full-service hypervisor xmexam",
    domain: 3
  },
  {
    id: 677,
    text: "Analese is an information security manager working with the DevOps teams as they build and deploy their Infrastructure as a Service (IaaS) environment. She is describing a problem to them that needs to be addressed. It can be addressed by using two-factor authentication, and because of the severity of the threat, she is advising them that they should use a hard token as the second factor of authentication. She is concerned that if this is not protected, someone could log in and delete all their images, instances, data, systems, etc., which would damage the business. What is she concerned about that could be compromised?",
    options: ["Hypervisor Secure", "shell Management", "plane Virtual", "machine"],
    answer: 2,
    explanation: "ucture as a Service (IaaS) environment",
    domain: 3
  },
  {
    id: 678,
    text: "Which of the following accurately describes the build vs. buy decision related to datacenter design?",
    options: ["Buying is more expensive. Building offers more control.", "Building is more expensive and offers more control.", "Buying is more expensive and offers more control.", "Building is more expensive. Buying offers more control."],
    answer: 1,
    explanation: "and offers more control",
    domain: 3
  },
  {
    id: 679,
    text: "It's extremely difficult, if not impossible, to find a location for a data center that is not at risk of being hit by some type of natural disaster. Which of the following can be used to help mitigate the threats of natural disasters?",
    options: ["Multitenancy Rapid", "elasticity Reinforced", "walls", "Encryption"],
    answer: 2,
    explanation: "nter that is not at risk of being hit by some type of natural disaster",
    domain: 3
  },
  {
    id: 680,
    text: "A threat actor was able to gain access to a virtual machine (VM) in an infrastructure as a service (IaaS) environment. Once they were in the VM, they found a flaw that allowed them to break out of the VM and gain access to the hypervisor. What type of attack is being described here?",
    options: ["Account takeover", "MitC Hyperjacking", "Guest", "escape"],
    answer: 3,
    explanation: "S) environment",
    domain: 3
  },
  {
    id: 681,
    text: "Which of the following factors is MOST important in securing the management plane?",
    options: ["Geolocation restrictions", "VPNs Password", "length and", "complexity Baselining"],
    answer: 2,
    explanation: "ion restrictions VPNs Password length and complexity Baselining Correct Answer: C Explanation: Correct answer: Password length and complexity The management plane controls provisioning, configuration, and monitoring of resources, making access control critical",
    domain: 3
  },
  {
    id: 682,
    text: "Which of the following is the first step in a cloud risk management process?",
    options: ["Brainstorm Risks", "Identify Assets", "Define Requirements", "Explore Threats"],
    answer: 1,
    explanation: "ocess? Brainstorm Risks Identify Assets Define Requirements Explore Threats Correct Answer: B Explanation: Correct answer: Identify Assets The risk management process begins with identifying potential risks",
    domain: 3
  },
  {
    id: 683,
    text: "Which stage of the IAM process relies heavily on logging and similar processes?",
    options: ["Authentication", "Accountability", "Authorization", "Identification"],
    answer: 1,
    explanation: "? Authentication Accountability Authorization Identification Correct Answer: B Explanation: Correct answer: Accountability Identity and Access Management (IAM) services have four main practices, including:(ISC)2 CCSP Certified Cloud Security Professional Official Study Guide, 3rd Edition",
    domain: 3
  },
  {
    id: 684,
    text: "An information security manager, Lou, has been asked to determine how much data and information must be restored to get to a minimum acceptable operating level after a disaster. Lou works for a manufacturing company that has a critical set of servers that must be operating to be able to run the equipment on the manufacturing floor. This equipment builds products based on the orders that are being received. What has Lou been asked to determine?",
    options: ["Recovery Service Level (RSL) Recovery", "Time Objective (RTO) Mean", "Time to Recover (MTR)", "Recovery Point Objective (RPO)"],
    answer: 3,
    explanation: "ster",
    domain: 3
  },
  {
    id: 685,
    text: "Which of the following scenarios represents a risk transference strategy?",
    options: ["A company subscribes to a third-party DDoS protection service. A company decides", "not to take any actions against a recognized threat. A company stops", "engaging in a risky activity because it is not worth the risk.", "A company installs an intrusion detection system for its cloud infrastructure."],
    answer: 0,
    explanation: "ud infrastructure",
    domain: 3
  },
  {
    id: 686,
    text: "How do CSPs separate tenants in a cloud computing environment?",
    options: ["By applying encryption By housing", "tenants in separate racks By", "using logical design By housing", "tenants in separate facilities"],
    answer: 2,
    explanation: "n By housing tenants in separate facilities Correct Answer: C Explanation: Correct answer: By using logical design Proper separation of tenants prevents data leakage or unauthorized access by different customers on the same infrastructure",
    domain: 3
  },
  {
    id: 687,
    text: "The information security manager, Rohan, is working with the network and application teams to determine the best data protection methods to use for a new application that is being developed. Their concerns are that the integrity and confidentiality of the data must be protected. Of the following, which is the BEST combination of technologies to meet their concerns?",
    options: ["A Representation State Transfer (REST) API and the Rivest Shamir Adelman algorithm Transport", "Layer Security (TLS) using Advanced Encryption Standard (AES) and Message Digest 5 Transport", "Layer Security (TLS) using Rivest Shamir Adelman (RSA) and Message Digest 5", "A Representation State Transfer (REST) API with the Secure Hash Algorithm (SHA256)"],
    answer: 1,
    explanation: "of technologies to meet their concerns? A Representation State Transfer (REST) API and the Rivest Shamir Adelman algorithm Transport Layer Security (TLS) using Advanced Encryption Standard (AES) and Message Digest 5 Transport Layer Security (TLS) using Rivest Shamir Adelman (RSA) and Message Digest 5 A Representation State Transfer (REST) API with the Secure Hash Algorithm (SHA256) Correct Answer: B Explanation: Correct answer: Transport Layer Security (TLS) using Advanced Encryption Standard (AES) and Message Digest 5 Protecting the data in transit with TLS using AES provides for the protection of the confidentiality of the data",
    domain: 3
  },
  {
    id: 688,
    text: "A large social media company that relies on public Infrastructure as a Service (IaaS) for their virtual Data Center (vDC) had an outage. They were not locatable through Domain Name Service (DNS) queries midafternoon one Thursday. In their virtual routers, a configuration was altered incorrectly. What did they fail to manage properly?",
    options: ["Service level management", "Input validation User", "training Change", "enablement practice"],
    answer: 3,
    explanation: "hey were not locatable through Domain Name Service (DNS) queries midafternoon one Thursday",
    domain: 3
  },
  {
    id: 689,
    text: "Which of the following strategies is BEST for ensuring multi-vendor pathway connectivity in a data center?",
    options: ["Securing one primary entryway for connecting multiple network media types Having two locations in", "separate areas of the data center where two or more ISPs can connect Providing", "a secure main entryway for multiple ISPs to connect along with a satellite link", "as a backup Relying on cellular data connectivity to connect to multiple ISPs"],
    answer: 1,
    explanation: "lular data connectivity to connect to multiple ISPs Correct Answer: B xmexam",
    domain: 3
  },
  {
    id: 690,
    text: "A data center in an area prone to wildfires is built with fire-resistant materials. What characteristic does this exhibit?",
    options: ["Security", "Sustainability", "Efficiency", "Resilience"],
    answer: 3,
    explanation: "sistant materials",
    domain: 3
  },
  {
    id: 691,
    text: "Which strategy is ideal for auditing with log collection within an organization?",
    options: ["Separating on-premises and cloud logs because they contain separate types of data", "Using specialized AI agents to automate all log analysis and response Aggregating", "and ingesting logs from all sources into a central dashboard Logging", "into each system daily for manual review of critical log events"],
    answer: 2,
    explanation: "shboard Logging into each system daily for manual review of critical log events Correct Answer: C Explanation: Correct answer: Aggregating and ingesting logs from all sources into a central dashboard Centralized log management ensures visibility and faster detection of security incidents across on-premises and cloud environments",
    domain: 3
  },
  {
    id: 692,
    text: "Which aspect of designing a data center relates to electricity costs and the likelihood of natural disasters?",
    options: ["Location Access", "control Logical", "design Tenant", "partitioning"],
    answer: 0,
    explanation: "ikelihood of natural disasters? Location Access control Logical design Tenant partitioning Correct Answer: A Explanation: Correct answer: Location A data center's location determines its exposure to risks such as earthquakes, floods, or hurricanes and influences electricity costs depending on regional power rates",
    domain: 3
  },
  {
    id: 693,
    text: "Kim is setting up a new application. She is trying to determine who the users are and what permissions they should be given, if any. There are several protocols available to make this happen in a cloud environment. Which protocol allows the communication of the users' permissions?",
    options: ["OAuth", "OpenID", "WS-Federation", "Kerberos"],
    answer: 0,
    explanation: "She is trying to determine who the users are and what permissions they should be given, if any",
    domain: 3
  },
  {
    id: 694,
    text: "A Fortune 500 company has just performed a disaster recovery (DR) test. They have various people who represent a wide variety of roles and responsibilities. These individuals talked through the steps in order while verifying that the DR document had the needed steps. The team members describe how they would carry out their responsibilities in a certain BC/DR scenario. Which type of disaster recovery plan testing are they conducting?",
    options: ["Simulation", "Walkthrough", "Smoke", "Tabletop"],
    answer: 3,
    explanation: "ple who represent a wide variety of roles and responsibilities",
    domain: 3
  },
  {
    id: 695,
    text: "An information security architect is developing a business Disaster Recovery Plan (DRP). They have been progressing through the steps to develop their plans that will be utilized in the event of major disruptions to their private cloud data center. They have just finished developing the procedural documentation. What is the next step for them to take?",
    options: ["Conduct the Business Impact", "Analysis (BIA) Test the", "plan Develop recovery strategies", "Implement the plan"],
    answer: 3,
    explanation: "at will be utilized in the event of major disruptions to their private cloud data center",
    domain: 3
  },
  {
    id: 696,
    text: "Cloud providers that are at tier 3 must have multiple and independent power feeds to ensure redundancy. What else is needed in case of a power failure on one of the power feeds?",
    options: ["Second power feed and Uninterruptible", "Power Supply (UPS) Generator and", "second power feed Third power", "feed and a generator Generator and Uninterruptible Power Supply (UPS)"],
    answer: 3,
    explanation: "feed and Uninterruptible Power Supply (UPS) Generator and second power feed Third power feed and a generator Generator and Uninterruptible Power Supply (UPS) Correct Answer: D Explanation: Correct answer: Generator and Uninterruptible Power Supply (UPS) Cloud providers will need to have multiple independent power feeds in case a power feed goes down",
    domain: 3
  },
  {
    id: 697,
    text: "A cloud operator is working in a data center and notices that the temperature of the data center is 71.7 degrees Fahrenheit/22 degrees Celcius and the humidity level is at 35 percent. Which of the statements is TRUE regarding this data center?",
    options: ["The temperature is too high, and the humidity level is too", "low Both temperature and humidity are within the ideal ranges The", "temperature is ideal, but the humidity level is too low The", "temperature is too high, and the humidity level is ideal"],
    answer: 2,
    explanation: "s too high, and the humidity level is too low Both temperature and humidity are within the ideal ranges The temperature is ideal, but the humidity level is too low The temperature is too high, and the humidity level is ideal Correct Answer: C Explanation: Correct answer: The temperature is ideal, but the humidity level is too low It's very important to ensure that both temperature and humidity levels are ideal within a data center",
    domain: 3
  },
  {
    id: 698,
    text: "Aditya has been working with software developers on building a new piece of software that will be used within their business to store data. While the data is at rest, it must be protected. Of the following, what could be used for this purpose?",
    options: ["Obfuscation", "Tokenization", "De-identification", "Anonymization"],
    answer: 0,
    explanation: "eir business to store data",
    domain: 3
  },
  {
    id: 699,
    text: "Which of the following describes how an organization plans to restore normal operations after a disruptive incident?",
    options: ["BIA", "BCP", "DRP", "COOP"],
    answer: 2,
    explanation: "an organization plans to restore normal operations after a disruptive incident? BIA BCP DRP COOP Correct Answer: C Explanation: Correct answer: DRP A business continuity plan (BCP) sustains operations during a disruptive event, such as a natural disaster or network outage",
    domain: 3
  },
  {
    id: 700,
    text: "In which cloud service model is the customer responsible for securing VMs and the software installed in them, while the cloud provider is responsible for the physical components, virtualization software, and network infrastructure?",
    options: ["SaaS IaaS", "All service", "models", "PaaS"],
    answer: 1,
    explanation: "rvice model is the customer responsible for securing VMs and the software installed in them, while the cloud provider is responsible for the physical components, virtualization software, and network infrastructure? SaaS IaaS All service models PaaS Correct Answer: B Explanation: Correct answer: IaaS Compute resources include the components that offer memory, CPU, disk, networking, and other services to the customer",
    domain: 3
  },
  {
    id: 701,
    text: "Which of the following measures the amount of time that a company is willing to accept a given system being down after a disruptive event?",
    options: ["RPO", "RTO", "RSL", "MTTR"],
    answer: 1,
    explanation: "amount of time that a company is willing to accept a given system being down after a disruptive event? RPO RTO RSL MTTR Correct Answer: B Explanation: Correct answer: RTO A business continuity and disaster recovery (BC/DR) plan uses various business requirements and metrics, including: Mean time to recover (MTTR) is the average (mean) amount of time it takes to recover from an incident",
    domain: 3
  },
  {
    id: 702,
    text: "A company needs an IAM solution for its new cloud systems. It may use its CSP's own IAM solution, which integrates with other services the company is using. What is one disadvantage of choosing this solution?",
    options: ["Complexity of implementation", "Lack of authentication", "Weaker security", "Vendor lock-in"],
    answer: 3,
    explanation: "company is using",
    domain: 3
  },
  {
    id: 703,
    text: "The fact that a CSP is a large organization with many potentially valuable customers may increase its exposure to which of the following risks?",
    options: ["Data center", "location General", "technology risks", "Downtime Residual"],
    answer: 1,
    explanation: "s may increase its exposure to which of the following risks? Data center location General technology risks Downtime Residual Correct Answer: B Explanation: Correct answer: General technology risks Cloud computing risks can depend on the cloud service model used",
    domain: 3
  },
  {
    id: 704,
    text: "An organization's backup frequency is MOST closely related to which of the following?",
    options: ["RSL", "RTO", "RPO", "MTD"],
    answer: 2,
    explanation: "the following? xmexam",
    domain: 3
  },
  {
    id: 705,
    text: "Which of the following test types could cause a real outage?",
    options: ["Full test and tabletop exercise", "Full test and simulation test", "Full test and parallel", "test Full test only"],
    answer: 3,
    explanation: "ull test and parallel test Full test only Correct Answer: D Explanation: Correct answer: Full Test only Business continuity/disaster recovery plan (BCP/DRP) testing can be performed in various ways",
    domain: 3
  },
  {
    id: 706,
    text: "How is the recovery service level (RSL) measured during business continuity operations?",
    options: ["As the average time between outages As", "the maximum time allowed for disruptions As", "the maximum acceptable data loss As", "a percentage of the production environment"],
    answer: 3,
    explanation: "ge of the production environment Correct Answer: D xmexam",
    domain: 3
  },
  {
    id: 707,
    text: "When does the disaster recovery process conclude?",
    options: ["When backup systems are synchronized with production systems When", "data is brought back from archives When infrastructure", "and facilities are returned to their operational state", "When employees are notified that systems are available"],
    answer: 2,
    explanation: "ied that systems are available Correct Answer: C Explanation: Correct answer: When infrastructure and facilities are returned to their operational state Disaster recovery planning involves bringing infrastructure back to its pre-disaster state",
    domain: 3
  },
  {
    id: 708,
    text: "An administrator working in a data center noticed that the humidity level was 80% relative humidity. What threat could this cause to systems?",
    options: ["Systems may overheat and fry internal components Excess electrostatic", "discharge could damage systems 80% relative humidity is within", "the ideal range, so it does not pose any", "risk to systems Condensation may form, causing water damage"],
    answer: 3,
    explanation: "ve humidity is within the ideal range, so it does not pose any risk to systems Condensation may form, causing water damage Correct Answer: D Explanation: Correct answer: Condensation may form, causing water damage The American Society of Heating, Refrigeration, and Air Conditioning Engineers (ASHRAE) recommends that data centers have a moisture level of 40-60 percent relative humidity",
    domain: 3
  },
  {
    id: 709,
    text: "Ines is working with the Disaster Recovery (DR) team. They have been able to determine that they can only tolerate losing the last two hours worth of data at the most critical point in the work day/year. At the least critical, they could tolerate losing 24 hours worth of data. They have settled on the most cost effective backup solution that will ensure that they will not lose more than four hours of data. What have they defined?",
    options: ["Recovery Time Objective (RTO)", "Maximum Tolerable Downtime (MTD)", "Recovery Point Objective (RPO)", "Service Delivery Objective (SDO)"],
    answer: 2,
    explanation: "in the work day/year",
    domain: 3
  },
  {
    id: 710,
    text: "The information security specialist with a cloud architecture team is concerned about ensuring the continuity of services for customers. The corporation is in the southeastern part of the US, specifically southern Florida. The team is utilizing a local cloud data center for its Platform as a Service (PaaS). As they are planning for disruptions, there are several events that they can think of and plan for. Which of the following is likely to be their first concern?",
    options: ["A blizzard Unreliable internet", "connectivity A major", "hurricane Moving to", "a new office"],
    answer: 2,
    explanation: "corporation is in the southeastern part of the US, specifically southern Florida",
    domain: 3
  },
  {
    id: 711,
    text: "Which of the following activities can BEST help lower a system's recovery time objective (RTO)?",
    options: ["Faster", "CPU Redundant storage", "Extended warranty", "High-bandwidth networking equipment"],
    answer: 1,
    explanation: "CPU Redundant storage Extended warranty High-bandwidth networking equipment Correct Answer: B Explanation: Correct answer: Redundant storage Minimizing the recovery time objective (RTO) in disaster recovery planning helps ensure business continuity and system availability after a disruption",
    domain: 3
  },
  {
    id: 712,
    text: "Which of the following vulnerabilities is unique to using a public cloud?",
    options: ["Distributed denial-of-service attacks Collateral damage", "from attacks on other tenants", "Insider threats of data exfiltration", "and sabotage Public-facing infrastructure"],
    answer: 1,
    explanation: "ing infrastructure Correct Answer: B xmexam",
    domain: 3
  },
  {
    id: 713,
    text: "Which of the following disaster events can multivendor pathway connectivity help to mitigate?",
    options: ["Server room flooding HVAC", "system failure Localized power", "outage Fallen tree taking", "down network cables"],
    answer: 3,
    explanation: "stem failure Localized power outage Fallen tree taking down network cables Correct Answer: D Explanation: Correct answer: Fallen tree taking down network cables Data centers require network connectivity, and many network outages are isolated to a single ISP",
    domain: 3
  },
  {
    id: 714,
    text: "A startup cloud provider is building their first Data Center (DC). They have been doing their research into the constraints of what the American Society of Heating, Refrigeration and Air conditioning Engineers (ASHRAE) recommends for temperature and humidity inside of the DC. The DC will be close to a desert, and they are concerned about it being too dry in the DC. At the same time, they want to ensure that the moisture level is not too high in their data center. What is the recommended maximum moisture level for a data center?",
    options: ["80 percent relative humidity", "50 percent relative humidity", "70 percent relative humidity", "60 percent relative humidity"],
    answer: 3,
    explanation: "rch into the constraints of what the American Society of Heating, Refrigeration and Air conditioning Engineers (ASHRAE) recommends for temperature and humidity inside of the DC",
    domain: 3
  },
  {
    id: 715,
    text: "Which of the following protocols is used for secure communications?",
    options: ["HTTPS", "FTP", "DNS", "SNMP"],
    answer: 0,
    explanation: "FTP DNS SNMP Correct Answer: A xmexam",
    domain: 3
  },
  {
    id: 716,
    text: "An online retailer has developed a sophisticated failover system to ensure that business operations continue even when multiple systems go offline. Now it would like to perform a full test that takes production servers offline to evaluate how well the system works. Which type of test would determine this?",
    options: ["Parallel", "Cutover", "Simulation", "Tabletop"],
    answer: 1,
    explanation: "r system to ensure that business operations continue even when multiple systems go offline",
    domain: 3
  },
  {
    id: 717,
    text: "Which of the following system and communication protection steps from NIST SP 800 53 is designed to prevent human error related to system administration tasks?",
    options: ["Separation of System and", "User Functionality Security Function", "Isolation Boundary Protection Cryptographic", "Key Establishment and Management"],
    answer: 0,
    explanation: "m Separation of System and User Functionality Security Function Isolation Boundary Protection Cryptographic Key Establishment and Management Correct Answer: A Explanation: Correct answer: Separation of System and User Functionality NIST SP 800-53, Security and Privacy Controls for Information Systems and Organizations defines 51 security controls for systems and communication protection",
    domain: 3
  },
  {
    id: 718,
    text: "Which of the following log collection methods is MOST secure for auditing purposes?",
    options: ["Logging only administrative account activities Storing log", "files on remote systems until needed Aggregating", "remote logs to a central system Filtering", "logs to collect only high-severity events"],
    answer: 2,
    explanation: "ntral system Filtering logs to collect only high-severity events Correct Answer: C Explanation: Correct answer: Aggregating remote logs to a central system Secure log handling ensures integrity, accountability, and protection from tampering",
    domain: 3
  },
  {
    id: 719,
    text: "An IAM system grants a user access to resources that they have been approved for. Which step of the IAM system does this represent?",
    options: ["Identification", "Accountability", "Authorization", "Authentication"],
    answer: 2,
    explanation: "s this represent? xmexam",
    domain: 3
  },
  {
    id: 720,
    text: "Which type of control serves as a guideline for other security activities?",
    options: ["Boundary protection Security", "function isolation Policies", "and procedures Separation of", "system and user functionality"],
    answer: 2,
    explanation: "procedures Separation of system and user functionality Correct Answer: C Explanation: Correct answer: Policies and procedures Policies and procedures establish the foundation on which all technical and operational controls are built",
    domain: 3
  },
  {
    id: 721,
    text: "If an Internet Service Provider (ISP) fails, the customer is responsible for ensuring communication with the Cloud Service Provider (CSP). Which of the following would be the BEST strategy for ensuring that a means of communication with the CSP is always available?",
    options: ["Redundant topology Redundant", "cloud carrier", "Redundant path", "Redundant server"],
    answer: 1,
    explanation: "is responsible for ensuring communication with the Cloud Service Provider (CSP)",
    domain: 3
  },
  {
    id: 722,
    text: "Which cloud deployment model always places the responsibility of physical security on the company rather than on a CSP?",
    options: ["Public", "Hybrid", "Private", "Community"],
    answer: 2,
    explanation: "he company rather than on a CSP? Public Hybrid Private Community Correct Answer: C xmexam",
    domain: 3
  },
  {
    id: 723,
    text: "A recent breach has caused a company to take a good look at their Platform as a Service (PaaS) database and its setup. They had discovered that there was one crucial setting that had a default value. By not changing that value away from the default, they had left, effectively, an open door into their database. What security risk have they experienced?",
    options: ["Insecure design Cryptographic", "failures Broken", "access control", "Security misconfiguration"],
    answer: 3,
    explanation: "d its setup",
    domain: 3
  },
  {
    id: 724,
    text: "What effect can high ambient humidity have on equipment in a data center?",
    options: ["Corrosion of metallic", "components Overheating Heightened", "fire-related risks Increased", "static discharge"],
    answer: 0,
    explanation: "ightened fire-related risks Increased static discharge Correct Answer: A Explanation: Correct answer: Corrosion of metallic components Proper humidity control is critical to protect hardware and ensure availability",
    domain: 3
  },
  {
    id: 725,
    text: "Which feature of data center design is resilient to flooding?",
    options: ["Backup generators located above the", "first floor Raised floors for", "cable management Redundant HVAC systems", "Multiple pathways for ISP connectivity"],
    answer: 0,
    explanation: "ems Multiple pathways for ISP connectivity Correct Answer: A Explanation: Correct answer: Backup generators located above the first floor Protecting physical infrastructure from flooding supports system availability and business continuity",
    domain: 3
  },
  {
    id: 726,
    text: "According to the American Society for Heating, Refrigeration and Air conditioning Engineers (ASHRAE), what is the ideal temperature for a data center?",
    options: ["64.4 - 80.6 degrees F/ 18 - 27 degrees C", "70.2 - 85.0 degrees F / 21.2 - 29.4 degrees C", "49.8 - 70.6 degrees F / 9.3 - 21.4 degrees C", "55.7 - 78.5 degrees F / 13.1 - 25.8 degrees C"],
    answer: 0,
    explanation: "- 85",
    domain: 3
  },
  {
    id: 727,
    text: "In which cloud service model is the customer's responsibility limited to correctly configuring settings provided by the cloud provider?",
    options: ["PaaS All", "service models", "IaaS", "SaaS"],
    answer: 3,
    explanation: "sibility limited to correctly configuring settings provided by the cloud provider? PaaS All service models IaaS SaaS Correct Answer: D Explanation: Correct answer: SaaS Compute resources include the components that offer memory, CPU, disk, networking, and other services to the customer",
    domain: 3
  },
  {
    id: 728,
    text: "Adrina has been working with the team that has been building the Disaster Recovery Plans (DRP) for several different scenarios. They have been able to determine for their most critical server that they can lose two minutes of data, be offline for 30 seconds, and must come back online with at least 85% of normal functionality. What have they determined and at what phase of the planning lifecycle are they in?",
    options: ["Mean Time to Repair (MTR), Recovery Point Objective (RPO), Maximum Tolerable Downtime (MTD), Recovery Strategies", "Recovery Time Objective (RTO), Recovery Point Objective (RPO), Maximum Tolerable Downtime (MTD), Recovery Strategies Recovery", "Point Objective (RPO), Maximum Tolerable Downtime (MTD), Recovery Service Level (RSL), Business Impact Analysis Recovery", "Time Objective (RTO), Maximum Tolerable Downtime (MTD), Recovery Service Level (RSL), Business Impact Analysis"],
    answer: 2,
    explanation: "very Strategies Recovery Time Objective (RTO), Recovery Point Objective (RPO), Maximum Tolerable Downtime (MTD), Recovery Strategies Recovery Point Objective (RPO), Maximum Tolerable Downtime (MTD), Recovery Service Level (RSL), Business Impact Analysis Recovery Time Objective (RTO), Maximum Tolerable Downtime (MTD), Recovery Service Level (RSL), Business Impact Analysis Correct Answer: C xmexam",
    domain: 3
  },
  {
    id: 729,
    text: "Rafaela has been working to determine the correct configuration for a Platform as a Service (PaaS) server-based virtual machine that will be used to crunch numbers for their sales department. She is concerned that a bad actor may gain access to this system and use it for malicious purposes. Her second major concern is managing the budget. She needs to configure the virtual machine with constraints. Which of the following terms is used to describe the maximum memory or processing utilization allowed by a cloud customer?",
    options: ["Shares", "Reservations", "Caps", "Limits"],
    answer: 3,
    explanation: "vice (PaaS) server-based virtual machine that will be used to crunch numbers for their sales department",
    domain: 3
  },
  {
    id: 730,
    text: "In which process does a user offer their username or employee ID to a system before logging in?",
    options: ["Nonrepudiation", "Authorization", "Authentication", "Identification"],
    answer: 3,
    explanation: "efore logging in? Nonrepudiation Authorization Authentication Identification Correct Answer: D Explanation: Correct answer: Identification Identification, authentication, and authorization are fundamental concepts for controlling access to cloud resources",
    domain: 3
  },
  {
    id: 731,
    text: "Which organization offers guidance for temperature and humidity levels in a data center?",
    options: ["CIP", "NIST", "IEEE", "ASHRAE"],
    answer: 3,
    explanation: "data center? xmexam",
    domain: 3
  },
  {
    id: 732,
    text: "Maxence is working with the data storage team to build a redundant and secure storage network for the corporation's data. The corporation's data includes personal data of their customers as well as credit card and account data. They are working to build a Storage Area Network (SAN) using Internet Small Computer Serial Interface (iSCSI) technology. Which address is used with iSCSI to locate the end users' data?",
    options: ["Internet Protocol (IP), Transmission Control Protocol (TCP)", "port Media Access Control (MAC) and", "Port numbers World Wide Node Number", "(WWNN) World Wide Port Number (WWPN)"],
    answer: 0,
    explanation: "ta",
    domain: 3
  },
  {
    id: 733,
    text: "During business continuity operations, what does the recovery service level (RSL) measure?",
    options: ["The proportion of a service needed to keep production environments running until the disaster is resolved", "The longest amount of time a business can function without access to a particular service The", "maximum amount of data loss acceptable during a disaster without causing serious harm The amount of", "time before a company can receive compensation for an outage according to its service-level agreement"],
    answer: 0,
    explanation: "ive compensation for an outage according to its service-level agreement Correct Answer: A Explanation: Correct answer: The proportion of a service needed to keep production environments running until the disaster is resolved Organizations need to define how much of a service must remain available during disruptions in order to continue operations",
    domain: 3
  },
  {
    id: 734,
    text: "Which of the following components is considered a compute resource?",
    options: ["Virtual machine", "Hypervisor Operating", "system Security", "group"],
    answer: 0,
    explanation: "chine Hypervisor Operating system Security group Correct Answer: A Explanation: Correct answer: Virtual machine Compute resources are the components that provide the capability to run workloads and applications",
    domain: 3
  },
  {
    id: 735,
    text: "The Disaster Recovery (DR) team is working with Greta, the information security manager, to determine if they have taken into consideration all the right security concerns for their company. They are located in Frankfurt, Germany, and know they must be in compliance with a variety of laws as a bank. Which of the following is the MAIN concern for using a DR solution in the cloud?",
    options: ["The organizations that share the same cloud environment", "The number of individuals who have access to", "the data The cost and timeline for recovery", "The location where the data is stored"],
    answer: 3,
    explanation: "w they must be in compliance with a variety of laws as a bank",
    domain: 3
  },
  {
    id: 736,
    text: "Based on the CCSP exam objectives, which of the following is NOT one of the three main audit mechanisms for cloud environments?",
    options: ["Packet capture", "Log correlation", "Access controls", "Log collection"],
    answer: 2,
    explanation: "main audit mechanisms for cloud environments? Packet capture Log correlation Access controls Log collection Correct Answer: C Explanation: Correct answer: Access Controls Access controls are important but not one of the three core audit mechanisms in cloud environments",
    domain: 3
  },
  {
    id: 737,
    text: "Which of the following measures the LONGEST amount of time that a system can be down before causing significant harm to the organization?",
    options: ["MTD", "RSL", "RPO", "RTO"],
    answer: 0,
    explanation: "m can be down before causing significant harm to the organization? xmexam",
    domain: 3
  },
  {
    id: 738,
    text: "Which type of organization is MORE likely to build a data center than to buy space in one?",
    options: ["A small firm with little technical expertise", "A nonprofit organization seeking low operating costs", "A startup company with low funding A", "large enterprise with unique service needs"],
    answer: 3,
    explanation: "p company with low funding A large enterprise with unique service needs Correct Answer: D Explanation: Correct answer: A large enterprise with unique service needs Decisions about data center ownership affect cost, security responsibilities, and control over infrastructure",
    domain: 3
  },
  {
    id: 739,
    text: "Which of the following risks common to all cloud service models is MOST related to natural disasters?",
    options: ["General Technology", "Risks Data", "Center Location", "Downtime Compliance"],
    answer: 1,
    explanation: "mexam",
    domain: 3
  },
  {
    id: 740,
    text: "Issues like side-channel attacks and information bleed are MOST closely related to which of the following PaaS environment risks?",
    options: ["Resource Sharing", "Persistent Backdoors", "Interoperability Issues", "Virtualization"],
    answer: 0,
    explanation: "following PaaS environment risks? Resource Sharing Persistent Backdoors Interoperability Issues Virtualization Correct Answer: A Explanation: Correct answer: Resource Sharing Platform as a Service (PaaS) environments inherit all the risks associated with IaaS models, including personnel threats, external threats, and a lack of relevant expertise",
    domain: 3
  },
  {
    id: 741,
    text: "Which security control provides the BEST protection for customers in the event of a security flaw with tenant partitioning?",
    options: ["Encryption Intrusion", "detection system", "Role-based access", "control Tokenization"],
    answer: 0,
    explanation: "on Intrusion detection system Role-based access control Tokenization Correct Answer: A xmexam",
    domain: 3
  },
  {
    id: 742,
    text: "When constructing cloud data centers, it is necessary to control the temperature within the data center. Given the size of some data centers, it would be wise to manage the heating and air conditioning as efficiently as possible. If the data center is constructed with rows of equipment that have servers facing each other and then the backs of servers facing each other, the area that needs to be cooled is less than if all servers are oriented facing the same direction in the data center (e.g., facing north). If the data center is constructed with cold air aisles, where does the cold air flow into the servers?",
    options: ["Hot air aisles have the hot air coming out the back of the server racks", "Cold air aisles have the cold air coming into the back of the server racks", "Cold air aisles have the cold air coming into the front of the server racks", "Hot air aisles have the hot air coming out the front of the server racks"],
    answer: 2,
    explanation: "s facing each other, the area that needs to be cooled is less than if all servers are oriented facing the same direction in the data center (e",
    domain: 3
  },
  {
    id: 743,
    text: "In which of the following types of BCP/DRP testing does the team actually perform actions from the BCP plan?",
    options: ["Simulation Dry", "run Parallel", "test Tabletop", "exercise"],
    answer: 2,
    explanation: "lly perform actions from the BCP plan? Simulation Dry run Parallel test Tabletop exercise Correct Answer: C Explanation: Correct answer: Parallel test Business Continuity/Disaster Recovery Plan (BCP/DRP) testing can be performed in various ways",
    domain: 3
  },
  {
    id: 744,
    text: "In the cloud, there is a sharing of systems between all the tenants on a physical server. It is possible to allocate space within the Central Processing Unit (CPU) and memory for specific virtual machines and applications. If a virtual machine requires a certain minimum amount of space, it is necessary to create which of the following?",
    options: ["Limits", "Shares", "Pooling", "Reservations"],
    answer: 3,
    explanation: "It is possible to allocate space within the Central Processing Unit (CPU) and memory for specific virtual machines and applications",
    domain: 3
  },
  {
    id: 745,
    text: "Which security control is ideal for protecting cloud systems from DOS attacks?",
    options: ["Secure cryptographic key establishment and", "management Secure function isolation Data", "loss protection systems Dedicated DOS", "mitigation as a service"],
    answer: 3,
    explanation: "ss protection systems Dedicated DOS mitigation as a service Correct Answer: D Explanation: Correct answer: Dedicated DOS mitigation as a service Denial-of-service (DOS) attacks target availability, which is one of the core principles of security in the cloud",
    domain: 3
  },
  {
    id: 746,
    text: "Which risk of cloud computing occurs when a host system is confiscated due to legal proceedings with a shared tenant?",
    options: ["Hypervisor attack", "Contractual failure", "Information bleed", "Data seizure"],
    answer: 3,
    explanation: "tem is confiscated due to legal proceedings with a shared tenant? Hypervisor attack Contractual failure Information bleed Data seizure Correct Answer: D Explanation: Correct answer: Data seizure Multi-tenancy creates scenarios in which one tenant’s legal issues can impact another tenant’s data and availability",
    domain: 3
  },
  {
    id: 747,
    text: "Who should have access to the management plane in a cloud environment?",
    options: ["A single highly vetted", "administrator Security Operations Center", "managers Senior software developers A", "highly vetted set of administrators"],
    answer: 3,
    explanation: "administrators Correct Answer: D xmexam",
    domain: 3
  },
  {
    id: 748,
    text: "Which of the following account protection methods for a cloud's management plane is the EASIEST for an attacker to circumvent?",
    options: ["Authenticator app", "Strong password", "SMS Hardware", "key"],
    answer: 2,
    explanation: "ment plane is the EASIEST for an attacker to circumvent? Authenticator app Strong password SMS Hardware key Correct Answer: C Explanation: Correct answer: SMS Cloud management plane accounts are high-value targets for attackers, so it is important to choose the strongest controls to secure access",
    domain: 3
  },
  {
    id: 749,
    text: "What is an advantage of building a data center for an organization rather than buying cloud services from a provider?",
    options: ["Ability to build the center to its exact", "specifications Ability to save money by sharing costs", "with others Easier scaling of resources up or", "down Reduced responsibility for managing IT infrastructure"],
    answer: 0,
    explanation: "thers Easier scaling of resources up or down Reduced responsibility for managing IT infrastructure Correct Answer: A Explanation: Correct answer: Ability to build the center to its exact specifications The decision between building and buying impacts control, customization, and responsibility",
    domain: 3
  },
  {
    id: 750,
    text: "To access their cloud environment remotely, a cloud administrator sets up a web server in a demilitarized zone (DMZ) that is publicly accessible from the internet. She made it so that the server has been hardened to prevent attacks. Which of the following did the cloud administrator create?",
    options: ["Firewall Bastion", "host Virtual", "Private Cloud", "(VPC) Micro-segmentation"],
    answer: 1,
    explanation: "n a demilitarized zone (DMZ) that is publicly accessible from the internet",
    domain: 3
  },
  {
    id: 751,
    text: "Which of the following US National Institue of Standards and Technologies (NIST) controls for system and communication protection is MOST closely related to tasks such as configuring encryption and logging?",
    options: ["Separation of System and", "User Functionality Security Function", "Isolation Policy and", "Procedures Boundary Protection"],
    answer: 1,
    explanation: "MOST closely related to tasks such as configuring encryption and logging? Separation of System and User Functionality Security Function Isolation Policy and Procedures Boundary Protection Correct Answer: B Explanation: Correct answer: Security Function Isolation NIST SP 800-53, Security and Privacy Controls for Information Systems and Organizations defines 51 security controls for systems and communication protection",
    domain: 3
  },
  {
    id: 752,
    text: "Pierre has been leading the team that is building the Business Continuity and Disaster Recovery Plans (BCP/DRP). This is not the first time that they have worked through the process of building plans for their business, but they do need to start at the top of the process to review current plans. The review could result in changes to the current plans or even the creation of new specific procedures for recovering specific critical assets. What is the first step that Pierre and his team need to begin with?",
    options: ["Recovery strategies Project management", "and initiation Business", "Impact Analysis (BIA)", "Develop the document"],
    answer: 1,
    explanation: "the first time that they have worked through the process of building plans for their business, but they do need to start at the top of the process to review current plans",
    domain: 3
  },
  {
    id: 753,
    text: "Which of the following is used to assign weights that decide the amount of resources a virtual machine is allowed to access when there is resource contention?",
    options: ["Limits Shares", "Object", "allocations", "Reservations"],
    answer: 1,
    explanation: "amount of resources a virtual machine is allowed to access when there is resource contention? Limits Shares Object allocations Reservations Correct Answer: B Explanation: Correct answer: Shares The concept of shares is that CPU and memory resources are available for virtual machines that need them",
    domain: 3
  },
  {
    id: 754,
    text: "What functionality do tools such as Amazon's AWS VPC Traffic Monitoring and Microsoft's Azure Network Watcher provide?",
    options: ["Intrusion detection system", "Firewall simulation", "Packet capture", "DOS protection"],
    answer: 2,
    explanation: "ection system Firewall simulation Packet capture DOS protection Correct Answer: C xmexam",
    domain: 3
  },
  {
    id: 755,
    text: "A data analytics company is considering using a new cloud service provider (CSP) that offers cheaper rates than traditional CSPs. Its leaders want to be sure that the new CSP has adequate physical controls. Which question could they ask the CSP to evaluate that?",
    options: ["How long will backup generators last? What", "container orchestration platforms do you support? Do", "you provide managed database clustering? What", "types of virtual machines are available?"],
    answer: 0,
    explanation: "ate physical controls",
    domain: 3
  },
  {
    id: 756,
    text: "An organization has deployed a Cloud Access Security Broker (CASB) to help manage and enforce its access control policies. Which of the following stages of the IAM process is this MOST applicable to?",
    options: ["Federation", "Authorization", "Authentication", "Audit"],
    answer: 1,
    explanation: ") to help manage and enforce its access control policies",
    domain: 3
  },
  {
    id: 757,
    text: "Which control is MOST important for securing the management plane?",
    options: ["Load balancing", "Encryption Multifactor", "authentication Audit", "logging"],
    answer: 2,
    explanation: "yption Multifactor authentication Audit logging Correct Answer: C Explanation: Correct answer: Multifactor authentication The management plane controls the configuration and orchestration of cloud resources, making it a high-value target for attackers",
    domain: 3
  },
  {
    id: 758,
    text: "Which of the following SaaS risks is MOST related to how SaaS offerings are made available to customers?",
    options: ["Proprietary Formats", "Virtualization Persistent", "Backdoors Web", "Application Security"],
    answer: 3,
    explanation: "ers? Proprietary Formats Virtualization Persistent Backdoors Web Application Security Correct Answer: D Explanation: Correct answer: Web Application Security A Software as a Service (SaaS) environment has all of the risks that IaaS and PaaS environments have, as well as new risks of its own",
    domain: 3
  },
  {
    id: 759,
    text: "Jia Li is working with the cloud data architect to design the storage types that they will be using in their new cloud service for their company. They need a storage type for all their documents, photos, and spreadsheets. Which type of storage system places files in a flat organization of containers and uses unique identifiers to retrieve them?",
    options: ["Volume storage", "Data lake", "Software-defined storage", "Object storage"],
    answer: 3,
    explanation: "to design the storage types that they will be using in their new cloud service for their company",
    domain: 3
  },
  {
    id: 760,
    text: "Kim, a cloud engineer at Acme Inc., is provisioning compute resources using a cloud service providers management portal. Which of the following are examples of compute resources?",
    options: ["RAM and CPU", "Storage and RAM", "NIC and storage", "CPU and storage"],
    answer: 0,
    explanation: "rtal",
    domain: 3
  },
  {
    id: 761,
    text: "Which of the following solutions is used for boundary protection?",
    options: ["Logging configuration", "Firewalls DOS", "protection", "Encryption"],
    answer: 1,
    explanation: "figuration Firewalls DOS protection Encryption Correct Answer: B Explanation: Correct answer: Firewalls Boundary protection is essential for controlling traffic between trusted and untrusted zones to safeguard cloud resources",
    domain: 3
  },
  {
    id: 762,
    text: "Volume storage is a storage type where a virtual machine has storage allocated to it and configured as a hard drive or file system. When storage is carved or sliced into manageable units across storage devices, likely in a Storage Area Network (SAN), they are identified and locatable using which of the following?",
    options: ["World Wide Node Name ((WWNN)", "Logical Unit Numbers (LUNs) Internet", "Protocol (IP) address World", "Wide Port Name (WWPN)"],
    answer: 1,
    explanation: "anageable units across storage devices, likely in a Storage Area Network (SAN), they are identified and locatable using which of the following? xmexam",
    domain: 3
  },
  {
    id: 763,
    text: "When creating a business continuity and disaster recovery plan, which of the following questions is MOST relevant to RSL?",
    options: ["How many backups do you have?", "How much production compute capacity is", "needed? How much data can you", "lose? How much downtime is acceptable?"],
    answer: 1,
    explanation: "ch production compute capacity is needed? How much data can you lose? How much downtime is acceptable? Correct Answer: B Explanation: Correct answer: How much production compute capacity is needed? Three metrics are used to assess business capabilities: recovery time objective (RTO), which indicates how long systems are down, recovery point objective (RPO), which indicates how much data may be lost, and recovery service level (RSL), which indicates how much processing power is required to maintain systems following a disaster",
    domain: 3
  },
  {
    id: 764,
    text: "Which risk mitigation strategy addresses the issue of rogue administrators?",
    options: ["Host-based anti-malware applications Hardened physical", "devices and hypervisors Secure", "logging of privileged user", "activities Change management protocols"],
    answer: 2,
    explanation: "f privileged user activities Change management protocols Correct Answer: C Explanation: Correct answer: Secure logging of privileged user activities Privileged insiders can cause significant damage if their activities are not monitored and controlled",
    domain: 3
  },
  {
    id: 765,
    text: "A small online retailer runs a web server on a cloud platform and experiences a small number of daily bot attacks from untrusted IP addresses. Instead of investing in a web application firewall (WAF) to block every single threat, the business decides that the basic firewall it is already using is sufficient to prevent any significant damage. Which type of risk mitigation strategy is the business using?",
    options: ["Risk avoidance", "Risk transference", "Risk mitigation", "Risk acceptance"],
    answer: 3,
    explanation: "ntrusted IP addresses",
    domain: 3
  },
  {
    id: 766,
    text: "In which of the following cloud environments is the company most likely responsible for maintaining a UPS?",
    options: ["Private cloud", "Public cloud", "Community cloud", "Multi-cloud"],
    answer: 0,
    explanation: "sponsible for maintaining a UPS? Private cloud Public cloud Community cloud Multi-cloud Correct Answer: A Explanation: Correct answer: Private Cloud An Uninterruptable Power Supply (UPS) is an emergency power device that is often part of the physical infrastructure in a data center",
    domain: 3
  },
  {
    id: 767,
    text: "Which measure can prevent VM escape attacks?",
    options: ["Implement intrusion detection systems", "Secure the hypervisor Patch", "the guest operating systems", "Enable port security"],
    answer: 1,
    explanation: "tems Enable port security Correct Answer: B Explanation: Correct answer: Secure the hypervisor VM escape allows attackers to break isolation and gain control of the host or other virtual machines, making hypervisor protection critical",
    domain: 3
  },
  {
    id: 768,
    text: "What does a business continuity or disaster recovery plan need to ensure that the proper individuals are promptly notified in case of an incident?",
    options: ["Disaster declaration process Essential", "points of contact Detailed", "actions, tasks, and activities", "Critical asset inventory"],
    answer: 1,
    explanation: "dent? Disaster declaration process Essential points of contact Detailed actions, tasks, and activities Critical asset inventory Correct Answer: B Explanation: Correct answer: Essential points of contact A business continuity plan or disaster recovery plan must include up-to-date contact information for key personnel so that decision-makers and responders can be notified immediately",
    domain: 3
  },
  {
    id: 769,
    text: "Silas is working for a healthcare company as a cloud architect. As he is designing how the company will move its data and services to a public cloud provider, he assesses the use of Infrastructure as a Service (IaaS). In an IaaS deployment, who is responsible for the Operating Systems (OS) that will be deployed as the servers, routers, switches, and f irewalls?",
    options: ["Cloud Service Provider (CSP) Internet Service", "Provider (ISP) Cloud Service Customer", "(CSC) It is shared between", "the CSC and the CSP"],
    answer: 2,
    explanation: "rovider, he assesses the use of Infrastructure as a Service (IaaS)",
    domain: 3
  },
  {
    id: 770,
    text: "In an Infrastructure as a Service (IaaS) environment, the cloud customer will likely NOT have access to logs stemming from which of the following?",
    options: ["Operating system", "Database Hypervisor", "Virtual", "server"],
    answer: 2,
    explanation: "s stemming from which of the following? Operating system Database Hypervisor Virtual server Correct Answer: C xmexam",
    domain: 3
  },
  {
    id: 771,
    text: "Federation is a term MOST closely associated with which of the following concepts?",
    options: ["Multivendor Pathway", "Connectivity Access", "Control Tenant", "Partitioning HVAC"],
    answer: 1,
    explanation: "or Pathway Connectivity Access Control Tenant Partitioning HVAC Correct Answer: B Explanation: Correct answer: Access Control Cloud customers have various options for securing access to their systems, including using federation or SAML to control cloud access from the customer’s IAM system or using identity as a Service (IDaaS) offerings provided by the CSP",
    domain: 3
  },
  {
    id: 772,
    text: "What is the CSP responsible for in every cloud delivery and service model?",
    options: ["Hardware", "Software", "Data", "Users"],
    answer: 0,
    explanation: "obao",
    domain: 3
  },
  {
    id: 773,
    text: "Which of the following activities should be done before creating a business continuity plan (BCP) and disaster recovery plan (DRP)?",
    options: ["Implement high availability for", "noncritical systems Test cutover", "processes Prioritize systems and", "processes Identify backup facilities"],
    answer: 2,
    explanation: "ility for noncritical systems Test cutover processes Prioritize systems and processes Identify backup facilities Correct Answer: C Explanation: Correct answer: Prioritize systems and processes Understanding priorities and dependencies ensures continuity planning aligns with business goals and critical functions",
    domain: 3
  },
  {
    id: 774,
    text: "Oliver is working with a corporation that has recently experienced an attack by a bad actor against their cloud environment. The bad actor managed to access their account within their public cloud provider of choice. What kind of vulnerability was this?",
    options: ["Infrastructure failure Infostructure", "weakness Applistructure", "failure Weak", "control plane"],
    answer: 3,
    explanation: "or against their cloud environment",
    domain: 3
  },
  {
    id: 775,
    text: "How are network communications secured when traveling from a customer to a cloud service provider via the internet?",
    options: ["By implementing", "firewalls By", "sharing hash values", "By relying on complex passwords and MFA By using encryption"],
    answer: 3,
    explanation: "By relying on complex passwords and MFA By using encryption Correct Answer: D xmexam",
    domain: 3
  },
  {
    id: 776,
    text: "A list of critical systems needed for the organization to continue functioning through a disruptive event is an output of which of the following?",
    options: ["Business Continuity Plan (BCP) Continuity", "of Operations Plan (COOP)", "Business Impact Analysis (BIA)", "Disaster Recovery Plan (DRP)"],
    answer: 2,
    explanation: "usiness Continuity Plan (BCP) Continuity of Operations Plan (COOP) Business Impact Analysis (BIA) Disaster Recovery Plan (DRP) Correct Answer: C Explanation: Correct answer: Business Impact Analysis (BIA) A Business Impact Analysis (BIA) identifies critical systems, processes, and functions necessary for the organization to operate effectively during a disruption",
    domain: 3
  },
  {
    id: 777,
    text: "Risk significance in a risk matrix is typically categorized using which of the following?",
    options: ["Risk likelihood and impact Risk", "scope and impact Inherent and", "residual risk Risk frequency", "and CVSS base score"],
    answer: 0,
    explanation: "pact Risk scope and impact Inherent and residual risk Risk frequency and CVSS base score Correct Answer: A Explanation: Correct answer: Risk likelihood and impact After risks to a system have been identified, the next step in risk management is analysis",
    domain: 3
  },
  {
    id: 778,
    text: "Colette, an information security professional, is in charge of the team that has the responsibility of picking the next location for a new data center for a large public cloud provider. There are many concerns that must be taken into consideration, such as the location possibly being in the normal path of large hurricanes. As they research new locations, what are some of the other concerns they need to address?",
    options: ["Water supply, access control procedures, skilled Information Technology (IT) personnel, and the regulatory and legal frameworks in that location", "Generators, high-speed internet connectivity, skilled Information Technology (IT) personnel, and the regulatory and legal frameworks in that location Water", "supply, high-speed internet connectivity, skilled Information Technology (IT) personnel, and the regulatory and legal frameworks in that location Water", "supply, high-speed internet connectivity, availability of enough fiber optic cable, and the regulatory and legal frameworks in that location"],
    answer: 2,
    explanation: "el, and the regulatory and legal frameworks in that location Water supply, high-speed internet connectivity, skilled Information Technology (IT) personnel, and the regulatory and legal frameworks in that location Water supply, high-speed internet connectivity, availability of enough fiber optic cable, and the regulatory and legal frameworks in that location Correct Answer: C xmexam",
    domain: 3
  },
  {
    id: 779,
    text: "Which of the following is NOT one of the three stages of developing a BC/DR plan?",
    options: ["Testing", "Creation", "Implementation", "Planning"],
    answer: 3,
    explanation: "eloping a BC/DR plan? Testing Creation Implementation Planning Correct Answer: D Explanation: Correct answer: Planning Planning is not one of the three stages of developing a BCP/DRP",
    domain: 3
  },
  {
    id: 780,
    text: "According to the American Society of Heating, Refrigeration, and Air Conditioning Engineers (ASHRAE), what is the ideal humidity level for a data center?",
    options: ["45-65 percent relative humidity", "20-40 percent relative humidity", "40-60 percent relative humidity", "50-70 percent relative humidity"],
    answer: 2,
    explanation: "ao",
    domain: 3
  },
  {
    id: 781,
    text: "For the organization's cloud environment, they are using a Software as a Service (SaaS) Identity and Access Management (IAM) manager. The users will be using a single sign on (SSO) for both the cloud and on-premises IAM systems. Due to the risks this may present, what is an important component to the organization's cloud IAM strategy?",
    options: ["Cloud audit controls Cloud", "vendor due diligence", "User education Vendor's", "policies and processes"],
    answer: 2,
    explanation: "e using a single sign on (SSO) for both the cloud and on-premises IAM systems",
    domain: 3
  },
  {
    id: 782,
    text: "An organization's security team is talking through a hypothetical scenario where a tornado has caused a power outage. Which of the following stages of the BCP development lifecycle are they MOST likely in?",
    options: ["Implementation", "Creation", "Review", "Testing"],
    answer: 3,
    explanation: "hetical scenario where a tornado has caused a power outage",
    domain: 3
  },
  {
    id: 783,
    text: "If a data center has: What tier data center would you have?",
    options: ["Tier IV", "Tier III", "Tier II", "Tier I"],
    answer: 0,
    explanation: "obao",
    domain: 3
  },
  {
    id: 784,
    text: "Foster and the Disaster Recovery (DR) team have been working to determine the technologies needed to recover a critical storage device should a failure occur. What the team has been able to determine is that the corporation cannot lose more than five hours worth of data. They have been working with the Information Technologies (IT) manager to ensure that the cloud solution that they choose can be integrated with the current cloud storage technologies already in place. Which of the following statements regarding Recovery Time Objectives is true?",
    options: ["The technology chosen must meet the time requirement for RTO, no matter the cost The", "technology chosen to meet the RTO must be able to meet the corporate needs The", "RTO technology must be able to recover the data storage within five hours The", "technology chosen must be able to meet the five-hour requirement and be cost effective"],
    answer: 1,
    explanation: "y choose can be integrated with the current cloud storage technologies already in place",
    domain: 3
  },
  {
    id: 785,
    text: "What is the FIRST step in creating a business continuity plan?",
    options: ["Identifying an organization's primary business functions", "Identifying an organization's most critical assets", "Identifying an organization's primary points of", "contact Identifying an organization's insurance provider"],
    answer: 0,
    explanation: "ifying an organization's insurance provider Correct Answer: A Explanation: Correct answer: Identifying an organization's primary business functions The first and most critical step in creating a business continuity plan is identifying an organization's primary business functions",
    domain: 3
  },
  {
    id: 786,
    text: "Onyx has just been notified by the Security Operations Center (SOC) that an incident has occurred and he is needed. He specializes in digital forensics, especially in the cloud. The incident involved a bad actor accessing a Structured Query Language (SQL) database in their Platform as a Service (PaaS) deployment. He knows to take proper measures to protect any evidence he collects from contamination and alteration. What type of activity is this?",
    options: ["Chain of custody", "Due care", "Due diligence", "Digital forensics"],
    answer: 0,
    explanation: "d",
    domain: 3
  },
  {
    id: 787,
    text: "An IT team informs their company's employees that they will be performing a disaster recovery test. The team has asked everyone to behave as if it were a real emergency, although normal operations will not be disrupted. What type of test is the team performing?",
    options: ["Tabletop", "Parallel", "Cutover", "Simulation"],
    answer: 3,
    explanation: "y test",
    domain: 3
  },
  {
    id: 788,
    text: "An organization is building a new data center. They need to ensure that proper heating and cooling are implemented. What is the recommended minimum and maximum temperature for a data center?",
    options: ["62.2-81.0 degrees F/16-27 degrees C", "60.1-75.2 degrees F/15-24 degrees C", "59.5-79.5 degrees F/15-26 degrees C", "64.4-80.6 degrees F/18-27 degrees C"],
    answer: 3,
    explanation: "perature for a data center? 62",
    domain: 3
  },
  {
    id: 789,
    text: "What should a customer diversify to protect their data from large-scale natural disasters such as earthquakes or hurricanes?",
    options: ["Regions Availability", "zones Tenant", "partitions Encryption", "algorithms"],
    answer: 0,
    explanation: "s? xmexam",
    domain: 3
  },
  {
    id: 790,
    text: "Canh has been working with the Disaster Recovery (DR) planning team to build a plan that will have the cloud environment failing to another provider in the event of a disaster. They have been able to establish the needs of the plan and the configurations to enable a failover if the primary cloud provider has a massive failure. The plan should not be considered valid until which of the following has been completed?",
    options: ["Reports Nothing", "extra", "Revisions", "Testing"],
    answer: 3,
    explanation: "ave the cloud environment failing to another provider in the event of a disaster",
    domain: 3
  },
  {
    id: 791,
    text: "Jaana is the cloud information security professional working at a start-up company that is looking for the best way to manage their new invention. They are looking for a way to minimize the distance that data has to travel when they have hundreds to thousands of sensors deployed at a corporation. The data that these sensors are handling is also sensitive in nature, so they are looking for a technology that would enable them to keep the data as confidential as possible. What technology could aid in these goals?",
    options: ["Software as a", "Service (SaaS) Quantum", "computing Edge computing", "Fog computing"],
    answer: 2,
    explanation: "new invention",
    domain: 3
  },
  {
    id: 792,
    text: "How does a customer typically handle traffic inspection in a cloud environment?",
    options: ["By installing network taps By putting", "virtual network interfaces in promiscuous mode By using", "specialized tools from the VPC By configuring deep", "packet inspection on every virtual machine"],
    answer: 2,
    explanation: "configuring deep packet inspection on every virtual machine Correct Answer: C Explanation: Correct answer: By using specialized tools from the VPC Organizations must be able to detect threats inside virtual networks, where traditional hardware based inspection is limited",
    domain: 3
  },
  {
    id: 793,
    text: "Paricia works for a manufacturing company as their primary information security manager. They are now planning their move into the cloud to take advantage of the new technologies that are easy to implement into a virtual data center. One of the most important elements for them is the change in the responsibility model. If they build their own data center, there are many responsibilities that are now the cloud provider's responsibility. What is the breakdown of who is responsible for what?",
    options: ["The customer is responsible for the virtual servers and databases, the cloud provider is responsible for physical and virtual network devices The", "customer is responsible for the virtual switches and servers, the cloud provider is responsible for the physical storage and virtual routers The", "customer is responsible for configuring the virtual routers and switches, the cloud provider is responsible for the physical routers and switches The", "customer is responsible for the virtual routers and physical switches, the cloud provider is responsible for the physical routers and virtual switches"],
    answer: 2,
    explanation: "ider is responsible for physical and virtual network devices The customer is responsible for the virtual switches and servers, the cloud provider is responsible for the physical storage and virtual routers The customer is responsible for configuring the virtual routers and switches, the cloud provider is responsible for the physical routers and switches The customer is responsible for the virtual routers and physical switches, the cloud provider is responsible for the physical routers and virtual switches Correct Answer: C Explanation: Correct answer: The customer is responsible for configuring the virtual routers and switches, the cloud provider is responsible for the physical routers and switches The shared responsibility model for the IaaS environment allows the customer to build a virtual data center, which means that the customer brings the operating systems with them that create the virtual routers, switches, servers, and all the security appliances, firewalls, intrusion detection systems, and so on",
    domain: 3
  },
  {
    id: 794,
    text: "Which metric defines the longest amount of time a business function can operate without access to a particular service?",
    options: ["Recovery point objective (RPO)", "Maximum tolerable downtime (MTD) Recovery", "time objective (RTO)", "Recovery service level (RSL)"],
    answer: 1,
    explanation: "(MTD) Recovery time objective (RTO) Recovery service level (RSL) xmexam",
    domain: 3
  },
  {
    id: 795,
    text: "Which of the following is MOST closely related to data loss prevention (DLP)?",
    options: ["Denial-of-Service Prevention Security Function", "Isolation Separation of", "System and User", "Functionality Boundary Protection"],
    answer: 3,
    explanation: "ation of System and User Functionality Boundary Protection Correct Answer: D Explanation: Correct answer: Boundary Protection NIST SP 800-53, Security and Privacy Controls for Information Systems and Organizations defines 51 security controls for systems and communication protection",
    domain: 3
  },
  {
    id: 796,
    text: "The organization must guarantee that cloud-based systems and communications with cloud-based systems are properly secured. Which of the following is an organization's responsibility regardless of the cloud model used?",
    options: ["Operating", "System", "configuration", "and status Physical and environmental security Identity, Authentication, Authorization, and Accountability (IAAA) Security governance, Risk, and Compliance (GRC)"],
    answer: 3,
    explanation: "and status Physical and environmental security Identity, Authentication, Authorization, and Accountability (IAAA) Security governance, Risk, and Compliance (GRC) Correct Answer: D xmexam",
    domain: 3
  },
  {
    id: 797,
    text: "According to a disaster recovery plan (DRP), how should a disaster be officially declared?",
    options: ["By an individual authority By", "a regulator By any", "member of the organization", "By a third-party auditor"],
    answer: 0,
    explanation: "ganization By a third-party auditor Correct Answer: A xmexam",
    domain: 3
  },
  {
    id: 798,
    text: "Which of the following risks associated with PaaS environments includes hypervisor attacks and VM escapes?",
    options: ["Interoperability Issues", "Virtualization Resource", "Sharing Persistent", "Backdoors"],
    answer: 1,
    explanation: "M escapes? Interoperability Issues Virtualization Resource Sharing Persistent Backdoors Correct Answer: B Explanation: Correct answer: Virtualization Platform as a Service ( PaaS) environments inherit all the risks associated with IaaS models, including personnel threats, external threats, and a lack of relevant expertise",
    domain: 3
  },
  {
    id: 799,
    text: "Which organization is responsible for physical security in a virtual private cloud?",
    options: ["The application developer The", "customer The network", "equipment vendor The", "cloud service provider"],
    answer: 3,
    explanation: "r The cloud service provider Correct Answer: D xmexam",
    domain: 3
  },
  {
    id: 800,
    text: "What does \"security by design\" mean?",
    options: ["Security is handled only by the operations team after deployment. Security does", "not need to be considered until the end of a project. Security", "is considered at every step of the development process. Security is designed", "once at the beginning of a project and validated at the end."],
    answer: 2,
    explanation: "dated at the end",
    domain: 4
  },
  {
    id: 801,
    text: "A marketing company is looking for the best Application Programming Interface (API) to use in their new application. They have been able to narrow it down to SOAP or REpresentation State Transfer (REST). Which of the following statements regarding SOAP and REST is TRUE that would help them make their final decision?",
    options: ["REST only allows the use of XML-formatted data REST is typically only used", "when technical limitations prevent the use of SOAP SOAP does not allow for", "caching, making it less scalable and having lower performance than REST SOAP", "supports a wide variety of data formats, including both JSON and XML"],
    answer: 2,
    explanation: "d help them make their final decision? REST only allows the use of XML-formatted data REST is typically only used when technical limitations prevent the use of SOAP SOAP does not allow for caching, making it less scalable and having lower performance than REST SOAP supports a wide variety of data formats, including both JSON and XML Correct Answer: C Explanation: Correct answer: SOAP does not allow for caching, making it less scalable and having lower performance than REST SOAP does not allow for caching, making it less scalable and having lower performance than REST",
    domain: 4
  },
  {
    id: 802,
    text: "A company uses a community-driven logging library for one of its applications. An update to this library by one member of the public included malware that gave attackers a backdoor into any system using the library. What type of activity could have mitigated this attack?",
    options: ["Patch management Open-source", "software validation Dynamic", "application security testing", "Abuse case testing"],
    answer: 1,
    explanation: "attackers a backdoor into any system using the library",
    domain: 4
  },
  {
    id: 803,
    text: "Your organization would like to automate a process that involves two applications. The data that moves between the applications must be synched in real time as well as one system that needs to boot up before the other. What can be used to synchronize the operations of these applications?",
    options: ["Orchestration Application", "Programming Interface", "(API) Gateway", "Sandboxing Tokenization"],
    answer: 0,
    explanation: "ed in real time as well as one system that needs to boot up before the other",
    domain: 4
  },
  {
    id: 804,
    text: "Which of the following concepts in IAM is MOST relevant if an organization has a close partner that they share access to data, systems, and software with?",
    options: ["Multi-Factor Authentication", "Single Sign-On", "Federated Identity", "Identity Providers"],
    answer: 2,
    explanation: "they share access to data, systems, and software with? Multi-Factor Authentication Single Sign-On Federated Identity Identity Providers Correct Answer: C Explanation: Correct answer: Federated Identity Identity and Access Management (IAM) is critical to application security",
    domain: 4
  },
  {
    id: 805,
    text: "After seeing \"Broken Access Control\" listed as one of the top vulnerabilities on the OWASP Top 10, a cloud application architect has started looking into options to protect against this. Which of the following could the engineer implement to help protect against broken authentication?",
    options: ["Proper logging Multi-Factor", "Authentication (MFA) Data", "Leak Prevention (DLP)", "Input validation"],
    answer: 1,
    explanation: "into options to protect against this",
    domain: 4
  },
  {
    id: 806,
    text: "Which of the following techniques can be used to validate open-source software?",
    options: ["Hardening systems that host open-source software", "Confirming the software has ISO 27001", "certification Performing software composition analysis Checking", "the software's cryptographic hash for integrity"],
    answer: 3,
    explanation: "aphic hash for integrity Correct Answer: D xmexam",
    domain: 4
  },
  {
    id: 807,
    text: "A financial organization is going to hire another company to do some testing. They are not going to give any special knowledge of their cloud Infrastructure as a Service (IaaS) environment to the company for testing. Instead, they are going to test using the same techniques, toolsets, and methodologies that an actual bad actor would use to attack and compromise the IaaS. What type of test is being described here, and what conditions should be met before testing?",
    options: ["Zero-knowledge penetration test with permission and assistance from the cloud", "provider Zero-knowledge penetration test with permission and approval from the", "cloud provider Partial-knowledge penetration test with permission and assistance from the", "cloud provider Full-knowledge penetration test with approval from the cloud provider"],
    answer: 1,
    explanation: "test is being described here, and what conditions should be met before testing? Zero-knowledge penetration test with permission and assistance from the cloud provider Zero-knowledge penetration test with permission and approval from the cloud provider Partial-knowledge penetration test with permission and assistance from the cloud provider Full-knowledge penetration test with approval from the cloud provider Correct Answer: B xmexam",
    domain: 4
  },
  {
    id: 808,
    text: "An organization is in the middle of creating a new cloud-based application that will use Application Programming Interfaces (API) to communicate with their partner companies. Due to the design of the application, they need to use multiple data formats, including both JavaScript Object Notation (JSON) and eXtensible Markup Language ( XML), in their cloud deployment. Which API type should they use?",
    options: ["JavaScript Object Notation- Remote Procedure Call", "(JSON-RPC) Representational State Transfer (REST)", "SOAP (formerly Simple Object Access", "Protocol) Remote Procedure Call (RPC)"],
    answer: 1,
    explanation: "of the application, they need to use multiple data formats, including both JavaScript Object Notation (JSON) and eXtensible Markup Language ( XML), in their cloud deployment",
    domain: 4
  },
  {
    id: 809,
    text: "Load testing is an example of what type of testing?",
    options: ["White-box", "Nonfunctional", "Functional", "Grey-box"],
    answer: 1,
    explanation: "onfunctional Functional Grey-box Correct Answer: B Explanation: Correct answer: Nonfunctional Nonfunctional tests are focused on software quality attributes instead of specific features",
    domain: 4
  },
  {
    id: 810,
    text: "A company implements training and awareness of the CSA Egregious 11, documents all aspects of its software creation process, and relies heavily on test-driven coding. What is it attempting to accomplish by following these practices?",
    options: ["Avoiding common development vulnerabilities Implementing auditability,", "traceability, and accountability for data events", "Designing a secure data center", "Installing a disaster recovery plan"],
    answer: 0,
    explanation: "common development vulnerabilities Implementing auditability, traceability, and accountability for data events Designing a secure data center Installing a disaster recovery plan Correct Answer: A xmexam",
    domain: 4
  },
  {
    id: 811,
    text: "Daniel is working at a relatively new software company that has succeeded in building an application that served a critical need in his market vertical. In determining how their customers are going to access this application, which is being offered as a Software as a Service (SaaS) product, they have determined that the customer needs to verify their users and then communicate the levels of privileges each should have within the individual accounts. What solution would work the best here?",
    options: ["Web Services Federation (WS-Federation) combined with Security Assertion Markup Language", "(SAML) Open Identification (OpenID) and Open Authorization (OAuth) together Security", "Assertion Markup Language (SAML) with Open Identification (OpenID) Open", "Identification (OpenID) alone will handle what the customer needs"],
    answer: 1,
    explanation: "communicate the levels of privileges each should have within the individual accounts",
    domain: 4
  },
  {
    id: 812,
    text: "Rafferty is a cloud information security manager who is working with the Incident Response Team (IRT). They have just detected a possible compromise of one of their systems. An Indication of Compromise (IoC) has been reported by the Security Information and Event Manager (SIEM). What the SIEM has seen indicates that a user has clicked on a Uniform Resource Locator (URL) that contains malicious script. What type of attack is this?",
    options: ["Insecure design Cross-site", "scripting Identification and", "authentication failures", "Security misconfiguration"],
    answer: 1,
    explanation: "eir systems",
    domain: 4
  },
  {
    id: 813,
    text: "A bad actor coerces an application to send a crafted request to an unexpected destination. The result is that it fetches a remote resource for that bad actor. How can this be prevented?",
    options: ["Enable HTTP redirection", "Send raw responses to clients", "Identity and Access Management", "Enforce deny by default firewall policies"],
    answer: 3,
    explanation: "Enforce deny by default firewall policies",
    domain: 4
  },
  {
    id: 814,
    text: "Acme Inc. has the following requirements for the multiple SaaS solutions their employees use: Which two technologies are BEST for meeting these requirements?",
    options: ["Single sign-on (SSO) using security assertion markup language (SAML)", "Cloud access security broker using transport layer security (TLS)", "Role-based access control with retinal scan/multi-factor authentication (MFA) Cloud", "access security broker using Windows system federation (WS-Federation)"],
    answer: 0,
    explanation: "ctor authentication (MFA) Cloud access security broker using Windows system federation (WS-Federation) Correct Answer: A xmexam",
    domain: 4
  },
  {
    id: 815,
    text: "An attack on confidentiality would fall under which letter of the Microsoft-created threat modeling technique?",
    options: ["Tampering Information", "Disclosure Spoofing", "Denial of", "Service"],
    answer: 1,
    explanation: "ated threat modeling technique? Tampering Information Disclosure Spoofing Denial of Service Correct Answer: B Explanation: Correct answer: Information Disclosure Microsoft’s STRIDE threat model defines threats based on their effects, including:(ISC)2 CCSP Certified Cloud Security Professional Official Study Guide, 3rd Edition",
    domain: 4
  },
  {
    id: 816,
    text: "The IT staff of a midsize paper distribution company uses PaaS and SaaS solutions from a CSP. The IT staff assumes the CSP is responsible for the security of their data in the cloud. What activity should management initiate to address this situation?",
    options: ["Training and awareness for application security Hiring developers", "who understand the software development life cycle Auditing", "the CSP for third-party validation of its security", "controls Implementing only CSP-provided default security settings"],
    answer: 0,
    explanation: "d awareness for application security Hiring developers who understand the software development life cycle Auditing the CSP for third-party validation of its security controls Implementing only CSP-provided default security settings Correct Answer: A Explanation: Correct answer: Training and awareness for application security Misunderstanding the responsibility of securing data in PaaS and SaaS environments is a common pitfall that can leave sensitive data unprotected and create compliance gaps",
    domain: 4
  },
  {
    id: 817,
    text: "Which of the following security risks is MOST relevant in a multitenant cloud environment?",
    options: ["Information bleed", "Injection Data", "seizure External", "entities"],
    answer: 0,
    explanation: "tion Data seizure External entities Correct Answer: A xmexam",
    domain: 4
  },
  {
    id: 818,
    text: "What is SAFECode?",
    options: ["A coding design framework", "A code analysis tool", "An industry forum A", "set of standards"],
    answer: 2,
    explanation: "orrect Answer: C Explanation: Correct answer: An industry forum The Software Assurance Forum for Excellence in Code (SAFECode) is a global, industry-led effort that brings companies together to share and promote best practices for developing secure and reliable software",
    domain: 4
  },
  {
    id: 819,
    text: "Where is a cloud access security broker MOST likely to be located?",
    options: ["Between the operating system kernel and", "hardware Between users and a", "cloud application Between end-user agents", "Between APIs in the cloud"],
    answer: 1,
    explanation: "oud application Between end-user agents Between APIs in the cloud Correct Answer: B Explanation: Correct answer: Between users and a cloud application A cloud access security broker (CASB) enforces security policies by monitoring and controlling access to cloud resources, acting as a security checkpoint",
    domain: 4
  },
  {
    id: 820,
    text: "An attacker sent commands through an application's input and data fields. By doing this, the attacker was able to get the application to execute the code they sent as part of its normal processing. The attacker was able to use this technique to get the application to expose sensitive data that they should not have access to. What type of attack was used?",
    options: ["Cross-site scripting Identification", "& authentication failures", "Injection Denial", "of service"],
    answer: 2,
    explanation: "the code they sent as part of its normal processing",
    domain: 4
  },
  {
    id: 821,
    text: "Amir is working for a large organization that has a Platform as a Service (PaaS) application that they created for their internal users. It is a web application that uses browser cookies for sessions and state. However, when the user logs out, the cookies are not properly destroyed. This has allowed another user that had access to the same browser as the previous user to log in using the same cookies from the previous session. What is this an example of?",
    options: ["Broken authentication Broken", "access control Security", "misconfiguration Sensitive", "data exposure"],
    answer: 0,
    explanation: "application that uses browser cookies for sessions and state",
    domain: 4
  },
  {
    id: 822,
    text: "Which of the following information sources gives detailed technical information about software weaknesses?",
    options: ["MITRE ATT&CK OWASP", "Top 10 ISO/IEC", "27001 SANS CWE", "Top 25"],
    answer: 3,
    explanation: "tion about software weaknesses? MITRE ATT&CK OWASP Top 10 ISO/IEC 27001 SANS CWE Top 25 Correct Answer: D Explanation: Correct answer: SANS CWE Top 25 Cloud applications and infrastructure rely on secure coding practices",
    domain: 4
  },
  {
    id: 823,
    text: "Which of the following organizations developed the Application Security Verification Standard (ASVS)?",
    options: ["Open Web Application Security Project SANS Software", "Assurance Forum for Excellence", "in Code National Institute", "of Standards and Technology"],
    answer: 0,
    explanation: "SANS Software Assurance Forum for Excellence in Code National Institute of Standards and Technology Correct Answer: A Explanation: Correct answer: Open Web Application Security Project The Application Security Verification Standard (ASVS) was developed by OWASP and provides resources for testing secure coding",
    domain: 4
  },
  {
    id: 824,
    text: "As the information security manager working with the devops team, Aria has helped them through the threat modeling process that they performed. The team was able to uncover the concerns that needed to be addressed through the planning, coding, and testing of their new product. They successfully assessed and addressed hundreds of specific concerns successfully. The next phase of the Secure Software Development Lifecycle (SSDLC) would be which of the following?",
    options: ["Deployment phase", "Requirements phase", "Testing phase", "Maintenance phase"],
    answer: 0,
    explanation: "that they performed",
    domain: 4
  },
  {
    id: 825,
    text: "Which of the following is NOT part of the DREAD acronym for cybersecurity threat modeling?",
    options: ["Damage", "Exploitability", "Reproducibility", "Denial of Service"],
    answer: 3,
    explanation: "hreat modeling? Damage Exploitability Reproducibility Denial of Service Correct Answer: D Explanation: Correct answer: Denial of Service Several different threat models can be used in the cloud",
    domain: 4
  },
  {
    id: 826,
    text: "Which of the following tests is considered a non-functional test?",
    options: ["Integration", "Usability", "Unit", "Load"],
    answer: 3,
    explanation: "Unit Load Correct Answer: D xmexam",
    domain: 4
  },
  {
    id: 827,
    text: "Which of the following is a different type of authentication factor than the other options?",
    options: ["PIN One-time", "password Passphrase", "Security", "question"],
    answer: 1,
    explanation: "an the other options? PIN One-time password Passphrase Security question Correct Answer: B Explanation: Correct answer: One-time password Multi-factor authentication requires a user to provide multiple authentication factors to gain access to their account",
    domain: 4
  },
  {
    id: 828,
    text: "What is the PRIMARY method of achieving data confidentiality with data stored on cloud infrastructure?",
    options: ["Cryptography Firewalls", "Access", "control", "Sandboxing"],
    answer: 0,
    explanation: "mexam",
    domain: 4
  },
  {
    id: 829,
    text: "Which of the following is an example of federated identity?",
    options: ["A user uses multiple authentication types to prove their identity before being authorized to access resources. A user", "signs in to a domain and is given access to a wide variety of resource types in that", "domain. A user authenticates with their company and uses that authentication to access resources from a third", "party. A user logs in to a central server that stores a hashed version of their password."],
    answer: 2,
    explanation: "ord",
    domain: 4
  },
  {
    id: 830,
    text: "Celyse is working for a large social media company that wants to expand their offerings to their customers. They want to become an Identity Provider (IdP) that can verify the identification of their customers to other websites. Which of the following is an authentication protocol they would likely use?",
    options: ["Open Authorization (OAuth) Open", "Identification (OpenID) Connect WS", "(Web Services)-Federation Security Assertion", "Markup Language (SAML)"],
    answer: 1,
    explanation: "of their customers to other websites",
    domain: 4
  },
  {
    id: 831,
    text: "Yair and his team are building a piece of software that will be deployed into their cloud environment. They have a variety of virtual machines from virtual servers to virtual desktops that they use throughout the business. The software that will be deployed needs to be able to run on multiple different operating systems. So, they need something that allows for portability of the application. Which of the following technologies could they use?",
    options: ["Orchestration Virtual", "machines Application", "virtualization", "Hypervisors"],
    answer: 2,
    explanation: "virtual machines from virtual servers to virtual desktops that they use throughout the business",
    domain: 4
  },
  {
    id: 832,
    text: "A retail company purchases a backup solution from a software developer. This developer had an insecure development process that allowed an attacker to insert malware into a recent software patch. As a result, the malware was installed on the retail company's systems. What type of activity could have mitigated this attack?",
    options: ["Third-party software management", "Abuse case testing", "Secrets management Application", "programming interfaces security"],
    answer: 0,
    explanation: "o a recent software patch",
    domain: 4
  },
  {
    id: 833,
    text: "You are working with the team leader for a specific software development project. The members of the software development team are geographically dispersed and will work in a variety of time zones. Multiple developers will modify the configuration and source code files. How does your organization ensure that changes to the source code are tracked and managed carefully?",
    options: ["Static Application Security Testing", "(SAST) Fuzz testing Software", "assurance and validation Software", "Configuration Management (SCM)"],
    answer: 3,
    explanation: "persed and will work in a variety of time zones",
    domain: 4
  },
  {
    id: 834,
    text: "Anna was browsing a web page throughout the course of her work. She clicked through several different pages in search for a piece of information that she needed to complete a project. Over the course of the next few days, she noticed there were strange messages within her corporate account indicating the actions she was requesting could not be performed. However, she has not made any such requests. What attack could she have encountered?",
    options: ["Software and data integrity", "failure Cross-site scripting Vulnerable", "and outdated components", "Broken access control"],
    answer: 1,
    explanation: "information that she needed to complete a project",
    domain: 4
  },
  {
    id: 835,
    text: "Looking through web application log files, an IT team discovers that users have been putting SQL statements into text input fields. Which type of solution ensures that attacks like these are unsuccessful?",
    options: ["Quality assurance Abuse", "case testing Functional", "testing Software", "composition analysis"],
    answer: 1,
    explanation: "e of solution ensures that attacks like these are unsuccessful? Quality assurance Abuse case testing Functional testing xmexam",
    domain: 4
  },
  {
    id: 836,
    text: "A cloud security professional has been asked to ensure that an organization's systems have been hardened against known attacks and weaknesses and then provide a report outlining those weaknesses. What is the BEST course of action for this cloud security professional?",
    options: ["Perform static application security testing", "Perform a vulnerability scan Perform", "dynamic application security testing", "Perform a penetration test"],
    answer: 1,
    explanation: "ort outlining those weaknesses",
    domain: 4
  },
  {
    id: 837,
    text: "Orlando has been able to determine that they are experiencing a lot of shadow IT. However, he is unsure of the tool that could be used to determine where the users are connecting to. What tool is designed to assist with this process?",
    options: ["Cloud broker Cloud Posture", "Manager (CPM) Cloud Access", "Security Broker (CASB) Data", "Leak Prevention (DLP)"],
    answer: 2,
    explanation: "uld be used to determine where the users are connecting to",
    domain: 4
  },
  {
    id: 838,
    text: "An attacker has gained a foothold inside a company's network through social engineering. They now want to issue SQL commands to directly manipulate and exfiltrate data. Which type of supplementary security component should the company have in place to protect against this?",
    options: ["Database activity monitoring (DAM) tool", "Extensible Markup Language (XML) firewall", "Web application firewall (WAF) Application", "programming interface (API) gateway"],
    answer: 0,
    explanation: "should the company have in place to protect against this? Database activity monitoring (DAM) tool Extensible Markup Language (XML) firewall Web application firewall (WAF) Application programming interface (API) gateway xmexam",
    domain: 4
  },
  {
    id: 839,
    text: "Which sort of testing watches and analyzes application performance while analyzing the code that is in use in real time to identify potential security issues?",
    options: ["Static application security testing", "(SAST) Runtime application self-protection", "(RASP) Interactive application security", "testing (IAST) Fuzz testing"],
    answer: 2,
    explanation: "application security testing (SAST) Runtime application self-protection (RASP) Interactive application security testing (IAST) Fuzz testing Correct Answer: C Explanation: Correct answer: Interactive Application Security Testing (IAST) IAST is a testing technique that has an application active and running and allows the tester to see what code is in use at any specific moment",
    domain: 4
  },
  {
    id: 840,
    text: "Which type of security testing impersonates a normal user with no special knowledge or access to the system?",
    options: ["Gray-box", "Black-box", "White-box", "Clear-box"],
    answer: 1,
    explanation: "with no special knowledge or access to the system? Gray-box Black-box White-box Clear-box Correct Answer: B Explanation: Correct answer: Black-box Software testing can be classified as one of a few different types, including:(ISC)2 CCSP Certified Cloud Security Professional Official Study Guide, 3rd Edition",
    domain: 4
  },
  {
    id: 841,
    text: "Satria works in the Security Operations Center (SOC), and they have just found that they have some software that has been compromised. A plugin has been added to the software the user is utilizing automatically. The plugin has introduced a serious vulnerability that a bad actor has exploited. What problem has this company experienced?",
    options: ["Insecure interfaces and APIs", "Software and data", "integrity failures Data", "breaches Insecure deserialization"],
    answer: 1,
    explanation: "o the software the user is utilizing automatically",
    domain: 4
  },
  {
    id: 842,
    text: "What is an appropriate solution for designing a cloud access security broker (CASB) system when a company's employees are remotely distributed?",
    options: ["Placing the CASB on-premises at the main", "office Integrating the CASB with a mobile", "device management system Installing agents on employee", "systems Running the CASB in a sandbox"],
    answer: 2,
    explanation: "ce management system Installing agents on employee systems Running the CASB in a sandbox Correct Answer: C xmexam",
    domain: 4
  },
  {
    id: 843,
    text: "An application development team is working to build a new cloud-based application. The team is currently debating the Application Programming Interface (API) that they will use. Their application will use the File Transfer Protocol (FTP). Which of the following options do they have to choose from?",
    options: ["Only SOAP can be used over FTP Only Representation State Transfer", "(REST) can be used over FTP Representation State Transfer (REST) can", "be used in combination with SOAP order FTP SOAP and", "Representation State Transfer (REST) can both be implemented over FTP"],
    answer: 3,
    explanation: "y have to choose from? Only SOAP can be used over FTP Only Representation State Transfer (REST) can be used over FTP Representation State Transfer (REST) can be used in combination with SOAP order FTP SOAP and Representation State Transfer (REST) can both be implemented over FTP Correct Answer: D Explanation: Correct answer: SOAP and Representation State Transfer (REST) can both be implemented over FTP While SOAP and REST most commonly use the HTTP protocol for transmission, it is possible for them to use the FTP protocol and other communication protocols as well",
    domain: 4
  },
  {
    id: 844,
    text: "A public cloud provider that primarily sells Platform as a Service (PaaS) deployments, both server-based and server-less, recently had a breach. The source of the breach is related to a failure that was found too late. The hypervisor that they chose to use had a vulnerability in how it managed the Central Processing Unit (CPU) utilization among the customers. What type of threat is this known as?",
    options: ["Malicious insiders Shared", "technology issues Advanced", "persistent threats Insufficient", "logging and monitoring"],
    answer: 1,
    explanation: "server-based and server-less, recently had a breach",
    domain: 4
  },
  {
    id: 845,
    text: "Which phase of the SDLC should take the LONGEST?",
    options: ["Operations and", "Maintenance Deployment", "Design", "Development"],
    answer: 0,
    explanation: "t Answer: A xmexam",
    domain: 4
  },
  {
    id: 846,
    text: "When using PASTA for threat modeling, which step involves breaking an application into smaller units and defining the flow of data and communications for analysis?",
    options: ["Application decomposition Definition", "of technical scope", "Vulnerability analysis", "Threat analysis"],
    answer: 0,
    explanation: "the flow of data and communications for analysis? Application decomposition Definition of technical scope Vulnerability analysis Threat analysis Correct Answer: A Explanation: Correct answer: Application decomposition Breaking applications into smaller, analyzable components helps identify risks and mitigate threats before deployment",
    domain: 4
  },
  {
    id: 847,
    text: "Which risk is likely to occur when IT staff are not properly trained on complex cloud applications?",
    options: ["Credential stuffing", "Misconfiguration Man-in-the-middle", "attacks DOS", "attacks"],
    answer: 1,
    explanation: "ration Man-in-the-middle attacks DOS attacks xmexam",
    domain: 4
  },
  {
    id: 848,
    text: "What defines the success of the software development life cycle (SDLC)?",
    options: ["The software is completed under budget. The", "software is completed ahead of schedule. The", "software meets business requirements. The software", "does not contain any security flaws."],
    answer: 2,
    explanation: "siness requirements",
    domain: 4
  },
  {
    id: 849,
    text: "Which statement is a principle of Agile software development?",
    options: ["Progress is measured by having fewer meetings. Deliver working software frequently. Avoid", "changing requirements and stick to the original design. Ensure customer satisfaction by showing", "them only", "the finished product."],
    answer: 1,
    explanation: "by showing them only the finished product",
    domain: 4
  },
  {
    id: 850,
    text: "Didre is working for a large software company with one of the developer teams as an information security specialist. They are designing an application that is building micro-services that will operate within an Infrastructure as a Service (IaaS) environment. They will be using an Application Programming Interface (API) to communicate between these services. Which API would best suit their needs?",
    options: ["Graph Query Language (GraphQL) Remote", "Procedure Call (RPC) Representation", "State Transfer (REST) Simple", "Object Access Protocol (SOAP)"],
    answer: 0,
    explanation: "will operate within an Infrastructure as a Service (IaaS) environment",
    domain: 4
  },
  {
    id: 851,
    text: "An engineer at Acme Inc. wants to run and analyze a potentially malicious software executable. Which of the following types of environments is BEST for this situation?",
    options: ["Sandbox Quality", "review Virtual", "environment", "Isolation"],
    answer: 0,
    explanation: "s software executable",
    domain: 4
  },
  {
    id: 852,
    text: "Itsuki has been working with his team to determine the risks associated with a Software as a Service (SaaS) provider. The question that they have to address next is what environment is this SaaS provider using. They believe that they have purchased their own cloud service from a Platform as a Service (PaaS) provider. What type of risk does this introduce to the organization?",
    options: ["Legal risk", "Privacy risk", "Outsourced risk", "Fourth-party risk"],
    answer: 3,
    explanation: "a Software as a Service (SaaS) provider",
    domain: 4
  },
  {
    id: 853,
    text: "Which of the following threat models focuses on identifying intersections between an organization's attack surface and an attacker's capabilities?",
    options: ["ATASM", "PASTA", "DREAD", "STRIDE"],
    answer: 0,
    explanation: "on identifying intersections between an organization's attack surface and an attacker's capabilities? ATASM PASTA DREAD STRIDE Correct Answer: A Explanation: Correct answer: ATASM Several different threat models can be used in the cloud",
    domain: 4
  },
  {
    id: 854,
    text: "An organization may review SOC 2 and ISO 27001 as part of its efforts to manage concerns about which of the following?",
    options: ["Third-Party Software API", "Security Open Source", "Software Supply", "Chain Security"],
    answer: 3,
    explanation: "hich of the following? Third-Party Software API Security Open Source Software Supply Chain Security Correct Answer: D Explanation: Correct answer: Supply Chain Security Some important considerations for secure software development in the cloud include:(ISC)2 CCSP Certified Cloud Security Professional Official Study Guide, 3rd Edition",
    domain: 4
  },
  {
    id: 855,
    text: "Which of the following scenarios is BEST addressed by container orchestration?",
    options: ["An application developer will test how their application runs on various types of systems without using any additional hardware. A streaming service will broadcast the final match of a major sports tournament and expects a massive spike in viewers followed by a quick drop-off in viewers. A", "cybersecurity research lab needs to evaluate the behavior of a new type of malware that has been discovered. A social media company needs to break up its backend infrastructure into independent units so that if one part of the service is unavailable, it does not bring down the", "entire", "system."],
    answer: 1,
    explanation: "down the entire system",
    domain: 4
  },
  {
    id: 856,
    text: "What is the FIRST step in the Process for Attack Simulation and Threat Analysis (PASTA) framework?",
    options: ["Attack modeling Application", "decomposition Defining objectives", "Defining the", "technical scope"],
    answer: 2,
    explanation: "ling Application decomposition Defining objectives Defining the technical scope Correct Answer: C Explanation: Correct answer: Defining objectives PASTA provides a structured, risk centric method of analyzing threats and simulating attacks, helping organizations prioritize defenses for cloud and enterprise applications",
    domain: 4
  },
  {
    id: 857,
    text: "Software Configuration Management (SCM) is widely used in all software development environments today. There are many practices that are part of a secure SCM environment. What are some of these practices?",
    options: ["Version control, build automation, release management, issue tracking Secure Software Development", "Lifecycle, build automation, release management, issue tracking", "Version control, build automation, Secure Software Development", "Lifecycle Version control, release management, testing and tracking tools"],
    answer: 0,
    explanation: "Software Development Lifecycle, build automation, release management, issue tracking Version control, build automation, Secure Software Development Lifecycle Version control, release management, testing and tracking tools Correct Answer: A Explanation: Correct answer: Version control, build automation, release management, issue tracking Software Configuration Management (SCM) has many practices",
    domain: 4
  },
  {
    id: 858,
    text: "What protocol is similar to HTML but is stricter in its formatting requirement and is commonly used for data exchange?",
    options: ["Binary JSON (BSON) eXtensible Markup", "Langugue (XML) REpresentation State", "Transfer (REST) API Java", "Script Object Notation (JSON)"],
    answer: 1,
    explanation: "e Markup Langugue (XML) REpresentation State Transfer (REST) API Java Script Object Notation (JSON) Correct Answer: B Explanation: Correct answer: eXtensible Markup Langugue (XML) eXtensible Markup Language (XML) is a standard information exchange format that employs tags to define data that is similar to Hyper Text Markup Language (HTML)",
    domain: 4
  },
  {
    id: 859,
    text: "During which phase of the SDLC should unit tests be developed and executed regularly?",
    options: ["Development", "Deployment", "Testing", "Design"],
    answer: 0,
    explanation: "oped and executed regularly? Development Deployment Testing Design Correct Answer: A Explanation: Correct answer: Development The Software Development Lifecycle (SDLC) describes the main phases of software development from initial planning to end-of-life",
    domain: 4
  },
  {
    id: 860,
    text: "Which of the following tools attempts to identify vulnerabilities with NO knowledge of an application's internals?",
    options: ["SAST", "IAST", "SCA", "DAST"],
    answer: 3,
    explanation: "to identify vulnerabilities with NO knowledge of an application's internals? SAST IAST SCA DAST Correct Answer: D Explanation: Correct answer: DAST Some common tools for application security testing include:(ISC)2 CCSP Certified Cloud Security Professional Official Study Guide, 3rd Edition",
    domain: 4
  },
  {
    id: 861,
    text: "Leodis is working for a large consulting firm that utilizes a particular Software as a Service (SaaS) solution from a public Cloud Service Provider (CSP). What he needs to do is collect metrics regarding the usage and performance of the SaaS application to verify that the CSP is providing the quality of product that they were promised. What can he use to monitor this application?",
    options: ["Supply chain manager Application", "Programming Interface gateway", "Open source software", "Application Programming Interface"],
    answer: 3,
    explanation: "solution from a public Cloud Service Provider (CSP)",
    domain: 4
  },
  {
    id: 862,
    text: "Odelia is working for a manufacturing business that has implemented a lot of Internet of Things (IoT) technology in their manufacturing plant. They are now considering a move to the cloud for all their server, application, and database technology. While doing a risk assessment, they looked at conditions such as the regulatory changes and their compliance requirements combined with their industry sector. With that information, what type of risk are they looking at?",
    options: ["Risk capacity", "Inherent risk", "Residual risk", "Risk appetite"],
    answer: 1,
    explanation: "usiness that has implemented a lot of Internet of Things (IoT) technology in their manufacturing plant",
    domain: 4
  },
  {
    id: 863,
    text: "Albas has been working with a team that is performing Dynamic Application Security Testing (DAST) against a specific web application. They have been able to successfully alter the information being parsed by the application and have gained access to the shadow password file. What attack have they performed against this application?",
    options: ["Broken access control attack", "XML external entities", "attack Cross-site scripting", "attack Injection attack"],
    answer: 1,
    explanation: "uccessfully alter the information being parsed by the application and have gained access to the shadow password file",
    domain: 4
  },
  {
    id: 864,
    text: "Which threat model uses a numerical scale for quantifying identified threats to help prioritize remediation efforts?",
    options: ["DREAD", "ASASM", "STRIDE", "PASTA"],
    answer: 0,
    explanation: "help prioritize remediation efforts? DREAD ASASM STRIDE PASTA Correct Answer: A xmexam",
    domain: 4
  },
  {
    id: 865,
    text: "An attacker was able to gain access to a cloud environment due to a lack of security controls in place. Once they gained access to that environment, they used those resources to perform a distributed denial of service attack against another organization. What is this type of threat known as?",
    options: ["Shared technology issues Insufficient", "logging and monitoring Abuse", "or nefarious use of", "cloud services Insecure deserialization"],
    answer: 2,
    explanation: "t, they used those resources to perform a distributed denial of service attack against another organization",
    domain: 4
  },
  {
    id: 866,
    text: "Mia works for a network hardware and software development company. She is currently working on setting up the team that will be testing one of their new products. This particular piece of software is the Operating System (OS) of a network router. When conducting functional testing, which is NOT an important consideration?",
    options: ["Testing must be sufficient to have reasonable assurance there", "are no bugs Testing must use limited information about", "the application Testing must be realistic for all environments", "Testing must be designed to exercise all requirements"],
    answer: 1,
    explanation: "onducting functional testing, which is NOT an important consideration? Testing must be sufficient to have reasonable assurance there are no bugs Testing must use limited information about the application Testing must be realistic for all environments Testing must be designed to exercise all requirements Correct Answer: B Explanation: Correct answer: Testing must use limited information about the application Testing that must use limited information about the application is called grey box testing and occurs after functional testing and deployment",
    domain: 4
  },
  {
    id: 867,
    text: "The information security team responsible for Identity and Access Management (IAM) for a medium-sized business that is looking to expand through the use of contractors wants to implement a way for all their users to only be required to use a single set of authentication credentials to access all the organization's resources. What technology would allow for that to happen?",
    options: ["Federated Identity Management (FIM)", "Security Assertion Markup Language", "(SAML) Open Identification (OpenID)", "Single Sign On (SSO)"],
    answer: 0,
    explanation: "ent a way for all their users to only be required to use a single set of authentication credentials to access all the organization's resources",
    domain: 4
  },
  {
    id: 868,
    text: "What is the role of quality assurance (QA) in a DevSecOps environment?",
    options: ["To ensure only functional requirements are validated against project goals To", "focus on conducting quality checks after a project has been deployed", "To perform checks throughout the entirety of the development process", "To perform exhaustive tests right before deployment of a project"],
    answer: 2,
    explanation: "haustive tests right before deployment of a project Correct Answer: C Explanation: Correct answer: To perform checks throughout the entirety of the development process In DevSecOps, QA is embedded continuously into development pipelines, ensuring that code quality and security are validated at each stage",
    domain: 4
  },
  {
    id: 869,
    text: "When configuring a new hypervisor, the cloud administrator forgot to change the default administrative credentials. Which type of vulnerability listed on the Open Web Application Security Project (OWASP) Top 10 is this?",
    options: ["Broken user authentication", "Insecure design Security", "misconfiguration Broken object", "property level authorization"],
    answer: 2,
    explanation: "trative credentials",
    domain: 4
  },
  {
    id: 870,
    text: "A fintech company is getting a third-party audit and needs to demonstrate that its cloud systems implement the most secure settings possible. Which solution will make it easy to verify this for auditors?",
    options: ["Security information and", "event management Vulnerability", "management Patch management", "Configuration management"],
    answer: 3,
    explanation: "ke it easy to verify this for auditors? Security information and event management Vulnerability management Patch management Configuration management Correct Answer: D xmexam",
    domain: 4
  },
  {
    id: 871,
    text: "DAST is classified as which of the following types of testing?",
    options: ["Clear-box", "Black-box", "White-box", "Gray-box"],
    answer: 1,
    explanation: "ing? Clear-box Black-box White-box Gray-box Correct Answer: B Explanation: Correct answer: Black-box Software testing can be classified as one of a few different types, including:(ISC)2 CCSP Certified Cloud Security Professional Official Study Guide, 3rd Edition",
    domain: 4
  },
  {
    id: 872,
    text: "What process is oriented around service delivery of the application service produced in modern DevOps / DevSecOps and occurs at all phases to provide continuous improvement and quality tracking?",
    options: ["Software configuration management", "Threat modeling", "Quality assurance", "Version control"],
    answer: 2,
    explanation: "to provide continuous improvement and quality tracking? Software configuration management Threat modeling Quality assurance Version control xmexam",
    domain: 4
  },
  {
    id: 873,
    text: "Nakia has been working with the developers to test the application that they are building and will be moving to operations soon. They have been reviewing the code while moving through the running application. What type of test are they performing?",
    options: ["Dynamic Application Security Test (DAST)", "Runtime Application Self-Protection (RASP) Static", "Application Security Test (SAST) Interactive", "Application Security Test (IAST)"],
    answer: 3,
    explanation: "st are they performing? Dynamic Application Security Test (DAST) Runtime Application Self-Protection (RASP) Static Application Security Test (SAST) Interactive Application Security Test (IAST) Correct Answer: D xmexam",
    domain: 4
  },
  {
    id: 874,
    text: "Kiran, a software architect at Acme Inc., is building an identity and access management (IAM) system for a cloud database. It must have multifactor authentication. What is the BEST choice to provide authentication for the cloud database IAM system?",
    options: ["A passphrase and a personally identifiable number (PIN) A", "password and a mobile push notification WS-federation token and", "a security assertion markup language (SAML) token A security", "assertion markup language (SAML) token with open authorization (OAuth)"],
    answer: 1,
    explanation: "nally identifiable number (PIN) A password and a mobile push notification WS-federation token and a security assertion markup language (SAML) token A security assertion markup language (SAML) token with open authorization (OAuth) Correct Answer: B Explanation: Correct answer: A password and a mobile push notification In multifactor authentication (MFA), users are required to use two or more types of authentication components",
    domain: 4
  },
  {
    id: 875,
    text: "Which of the following threat models was developed by Microsoft but has since fallen out of widespread use?",
    options: ["STRIDE", "DREAD", "ATASM", "PASTA"],
    answer: 1,
    explanation: "llen out of widespread use? xmexam",
    domain: 4
  },
  {
    id: 876,
    text: "What is SAFECode?",
    options: ["A software tool that performs dynamic application security testing", "A framework for threat modeling with cloud application development", "An organization that publishes secure coding best practices A", "software tool that aids with static application security testing"],
    answer: 2,
    explanation: "orrect Answer: C Explanation: Correct answer: An organization that publishes secure coding best practices The Software Assurance Forum for Excellence in Code (SAFECode) is a global nonprofit industry group that provides software security training, guidance, and best practices for secure coding",
    domain: 4
  },
  {
    id: 877,
    text: "A systems administrator at Acme Inc. is using a REST API to configure a system. Which HTTP verb should the administrator use to replace an existing resource with a new version on an API endpoint?",
    options: ["GET", "PUT", "UPDATE", "POST"],
    answer: 1,
    explanation: "tem",
    domain: 4
  },
  {
    id: 878,
    text: "A bad actor is targeting a cloud web application. They were able to send a properly formatted SELECT statement through one of the input fields. This returned data about the database that they could use to further attack the application. What is the name of this type of attack?",
    options: ["Injection attack", "SQL reflection", "XSS", "CSRF"],
    answer: 0,
    explanation: "able to send a properly formatted SELECT statement through one of the input fields",
    domain: 4
  },
  {
    id: 879,
    text: "Which statement MOST accurately summarizes the differences between waterfall and agile development methodologies?",
    options: ["Waterfall is ideal for a continuous update delivery pipeline, while agile is for large applications that infrequently have", "big updates. Waterfall is highly structured but inflexible, while agile is iterative and responsive to changes in requirements.", "Waterfall is for fast and consistent development, while agile is for thorough development that stays true to a", "project's initial requirements. Waterfall is designed for building desktop applications, while agile is optimized for creating mobile apps."],
    answer: 1,
    explanation: "nts",
    domain: 4
  },
  {
    id: 880,
    text: "What is the goal of the STRIDE threat model?",
    options: ["To detect threats", "To mitigate threats", "To categorize threats", "To rank threats"],
    answer: 2,
    explanation: "swer: C xmexam",
    domain: 4
  },
  {
    id: 881,
    text: "It is vital for your firm to implement a solution to comply with compliance and regulatory standards and regulations. To prevent destructive commands from being executed on your organization's data storage, it is necessary to monitor for suspicious activity and give notifications when anomalies are discovered. Which of the following security controls should the organization consider implementing?",
    options: ["Web Application Firewall (WAF) Application", "Programing Interface (API) Gateway Extensible", "Markup Language (XML) Gateway", "Database Activity Monitor (DAM)"],
    answer: 3,
    explanation: "it is necessary to monitor for suspicious activity and give notifications when anomalies are discovered",
    domain: 4
  },
  {
    id: 882,
    text: "Licensing is a concern that is MOST related to which of the following?",
    options: ["API", "Security Supply", "Chain", "Security Open Source Software Third-Party Software"],
    answer: 3,
    explanation: "Security Open Source Software Third-Party Software Correct Answer: D Explanation: Correct answer: Third-Party Software Some important considerations for secure software development in the cloud include:(ISC)2 CCSP Certified Cloud Security Professional Official Study Guide, 3rd Edition",
    domain: 4
  },
  {
    id: 883,
    text: "Load and stress testing are examples of which type of testing?",
    options: ["Unit Testing", "Usability Testing", "Functional Testing", "Non-Functional Testing"],
    answer: 3,
    explanation: "g Functional Testing Non-Functional Testing Correct Answer: D Explanation: Correct answer: Non-Functional Testing Functional testing is used to verify that software meets the requirements defined in the first phase of the SDLC",
    domain: 4
  },
  {
    id: 884,
    text: "What is the purpose of the Application Security Verification Standard (ASVS)?",
    options: ["To provide an inventory of the most dangerous vulnerabilities", "To suggest mitigation strategies for the most popular cloud", "threats To give guidance on security tests for", "applications To help programmers integrate secure coding practices"],
    answer: 2,
    explanation: "ions To help programmers integrate secure coding practices Correct Answer: C Explanation: Correct answer: To give guidance on security tests for applications The ASVS provides a structured framework for verifying application security, which is needed when deploying applications in cloud environments",
    domain: 4
  },
  {
    id: 885,
    text: "Rhonda is working with her team to determine if they should code their own API, use an opensource one, or one from a vendor. Which of the following is true about the benefits of each of the API options?",
    options: ["A vendor API will be managed and patched by that vendor. An open-source API has the benefit that you know who is behind it and that they are updating it. And coding your own API means you have greater", "control. A vendor API code is not open, so you do not need to review it. An open-source API has the benefit that you can see the code for review purposes. And coding your own API means you have", "greater control. A vendor API will be managed and patched by that vendor. An open-source API has the benefit that you can see the code for review purposes. And coding your own API means you have greater control. A", "vendor API will be managed and patched by that vendor. An open-source API has the benefit that you can see the code for review purposes. And coding your own API means you have to do all the reviews yourself."],
    answer: 2,
    explanation: "control",
    domain: 4
  },
  {
    id: 886,
    text: "What does the SANS CWE Top 25 list?",
    options: ["The worst security incidents of the", "year The most secure CSPs", "The most downloaded security patches", "The most dangerous software weaknesses"],
    answer: 3,
    explanation: "tware weaknesses Correct Answer: D Explanation: Correct answer: The most dangerous software weaknesses The SANS CWE Top 25 highlights the most widespread and critical software flaws that attackers are likely to exploit",
    domain: 4
  },
  {
    id: 887,
    text: "A common pitfall of cloud application deployment is that an application does not work across platforms, services, or systems. What is this issue called?",
    options: ["Interoperability", "Scalability", "Availability", "Performance"],
    answer: 0,
    explanation: "oes not work across platforms, services, or systems",
    domain: 4
  },
  {
    id: 888,
    text: "Which of the following organizations periodically publishes a Top 25 list describing the most dangerous software weaknesses?",
    options: ["CSA", "NIST", "SANS", "OWASP"],
    answer: 2,
    explanation: "ch of the following organizations periodically publishes a Top 25 list describing the most dangerous software weaknesses? CSA NIST SANS OWASP Correct Answer: C Explanation: Correct answer: SANS SANS publishes the CWE Top 25, describing the most significant and dangerous software weaknesses present in modern applications",
    domain: 4
  },
  {
    id: 889,
    text: "Which of the following about SOAP vs. REST APIs is TRUE?",
    options: ["SOAP APIs are more efficient than REST APIs REST API", "are reliant on XML, but SOAP APIs are not", "SOAP APIs are slower than REST APIs REST APIs", "are a better choice when stateful operations are used"],
    answer: 2,
    explanation: "ice when stateful operations are used Correct Answer: C Explanation: Correct answer: SOAP APIs are slower than REST APIs Simple object access protocol (SOAP) and RESTful application programming interfaces (APIs) are both common ways to programmatically interact with many cloud-based systems",
    domain: 4
  },
  {
    id: 890,
    text: "Which technology allows an organization to upgrade part of an application without affecting any other areas of it?",
    options: ["Container orchestration", "Virtual machines", "Sandboxing", "Microservices"],
    answer: 3,
    explanation: "",
    domain: 4
  },
  {
    id: 891,
    text: "Which of the following tools looks for vulnerabilities in the source code of an application?",
    options: ["IAST", "DAST", "SCA", "SAST"],
    answer: 3,
    explanation: "vulnerabilities in the source code of an application? IAST DAST SCA SAST Correct Answer: D Explanation: Correct answer: SAST Some common tools for application security testing include:(ISC)2 CCSP Certified Cloud Security Professional Official Study Guide, 3rd Edition",
    domain: 4
  },
  {
    id: 892,
    text: "What are the steps that make up ATASM, the framework for developing threat models?",
    options: ["Application damage, Tampering, Analysis, Simulation, Management Attack", "simulation, Threat analysis, Affected users, Service denial,", "Modeling Attack surfaces, Tampering, Architecture, Spoofing,", "Mitigations Architecture, Threats, Attack Surfaces, Mitigations"],
    answer: 3,
    explanation: "Mitigations Architecture, Threats, Attack Surfaces, Mitigations Correct Answer: D Explanation: Correct answer: ATASM Architecture, Threats, Attack Surfaces, Mitigations (ATASM) is an approach to threat modeling that emphasizes first reviewing the architecture, then identifying threats, mapping attack surfaces, and finally considering appropriate mitigations",
    domain: 4
  },
  {
    id: 893,
    text: "An information security professional working with the Development/Operation (Dev/Ops) teams is helping them identify the threat modeling approach that most aligns with their needs. They are looking for a threat modeling technique that prioritizes the vulnerabilities that they have for the software they are currently building. Which of the following is an OWASP recommended model that can be used to perform this task?",
    options: ["Damage, Reproducibility, Exploitability, Affected users, Discoverability (DREAD) Process for", "Attack Simulation and Threat Analysis (PASTA) Spoofing, Tampering, Repudiation,", "Information Disclosure, Denial of Service, Elevation of privilege", "(STRIDE) Architecture, Threats, Attack Surfaces and Mitigations (ATASM)"],
    answer: 0,
    explanation: "ommended model that can be used to perform this task? Damage, Reproducibility, Exploitability, Affected users, Discoverability (DREAD) Process for Attack Simulation and Threat Analysis (PASTA) Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of privilege (STRIDE) Architecture, Threats, Attack Surfaces and Mitigations (ATASM) Correct Answer: A xmexam",
    domain: 4
  },
  {
    id: 894,
    text: "A healthcare company has built an application for patients to communicate with their doctors and see their test results. It is important to control access to this application. They want to utilize multi-factor authentication to verify the user logging in is the actual patient and not a bad actor. Which of the following combinations of factors would be acceptable?",
    options: ["PIN and software authenticator Password", "and security questions Fingerprint scan", "and retina scan Software authenticator", "and personalized smart card"],
    answer: 0,
    explanation: "lication",
    domain: 4
  },
  {
    id: 895,
    text: "Kathleen works at a large financial institution that has a growing software development group. They have a desire to \"shift left\" in their thinking as they build their Platform as a Service (PaaS) environment. The Developers and Operations (DevOps) are now working together to build and deploy a strong and secure cloud environment that will contain a Sofware as a Service (SaaS) product that will be used by the financial analysts. To ensure the software has the ability to withstand attack attempts that will surely happen, they need to hypothesis what can happen so as to do their best to prevent it. What would you recommend that they do?",
    options: ["Threat modeling using both Damage, Reproducability, Exploitability, Affected users, Discoverability (DREAD) and penetration testing Threat modeling using", "both Spoofing, Tampering, Repudiation, Information disclosure, Elevation of privileges (STRIDE) and Damage, Reproducability, Exploitability, Affected users, Discoverability", "(DREAD) Threat modeling using both Spoofing, Tampering, Repudiation, Information disclosure, Elevation of privileges (STRIDE) and open", "box testing Threat modeling using both Damage, Reproducability, Exploitability, Affected users, Discoverability (DREAD) and vulnerability assessment"],
    answer: 1,
    explanation: "hat they do? Threat modeling using both Damage, Reproducability, Exploitability, Affected users, Discoverability (DREAD) and penetration testing Threat modeling using both Spoofing, Tampering, Repudiation, Information disclosure, Elevation of privileges (STRIDE) and Damage, Reproducability, Exploitability, Affected users, Discoverability (DREAD) Threat modeling using both Spoofing, Tampering, Repudiation, Information disclosure, Elevation of privileges (STRIDE) and open box testing Threat modeling using both Damage, Reproducability, Exploitability, Affected users, Discoverability (DREAD) and vulnerability assessment Correct Answer: B Explanation: Correct answer: Threat modeling using both Spoofing, Tampering, Repudiation, Information disclosure, Elevation of privileges ( STRIDE) and Damage, Reproducability, Expoloitability, Affected users, Discoverability ( DREAD) Threat modeling is the processing of finding threats and risks that face an application or system once it has gone live",
    domain: 4
  },
  {
    id: 896,
    text: "An attacker deleting log files maps to which letter of the STRIDE acronym for cybersecurity threat modeling?",
    options: ["D", "E", "R", "I"],
    answer: 2,
    explanation: "er deleting log files maps to which letter of the STRIDE acronym for cybersecurity threat modeling? D E R I Correct Answer: C Explanation: Correct answer: R Microsoft’s STRIDE threat model defines threats based on their effects, including: Deleting log files is likely an effort to cover the attacker's tracks and is related to repudiation (R)",
    domain: 4
  },
  {
    id: 897,
    text: "Which of the following MFA factor types is the LEAST common?",
    options: ["Biometric", "Possession", "Knowledge", "Location"],
    answer: 3,
    explanation: "? Biometric Possession Knowledge Location Correct Answer: D Explanation: Correct answer: Location Multi-factor authentication requires a user to provide multiple authentication factors to gain access to their account",
    domain: 4
  },
  {
    id: 898,
    text: "Which of the following scenarios is BEST addressed with an application programming interface (API) gateway?",
    options: ["An e-commerce platform is built on microservices, and a single customer request requires multiple calls to different backend services. A financial firm", "needs to protect data in a database from being modified or exfiltrated by insiders or attackers who have gained a foothold in", "the network. A political think tank has legacy systems that use SOAP, and it needs to enforce schema validation while blocking attacks.", "A social media platform needs to analyze HTTP/HTTPS traffic to its public-facing servers to protect against attacks such as injections and denial-of-service."],
    answer: 0,
    explanation: "blic-facing servers to protect against attacks such as injections and denial-of-service",
    domain: 4
  },
  {
    id: 899,
    text: "An information security professional has been asked to review a piece of completed software to ensure that there are no defects and that the code is free of bugs. What phase of the software development lifecycle is currently being described?",
    options: ["Development", "Testing", "Analysis", "Maintenance"],
    answer: 1,
    explanation: "nsure that there are no defects and that the code is free of bugs",
    domain: 4
  },
  {
    id: 900,
    text: "A financial services firm is deploying a legacy middleware platform that communicates using structured message formats and SOAP-based web services. To secure these applications and inspect incoming traffic for schema violations and injection attacks, which supplemental security component should it implement?",
    options: ["Application programming interface (API) gateway", "Web application firewall (WAF) Database", "activity monitoring (DAM) tool Extensible", "Markup Language (XML) firewall"],
    answer: 3,
    explanation: "inspect incoming traffic for schema violations and injection attacks, which supplemental security component should it implement? Application programming interface (API) gateway Web application firewall (WAF) Database activity monitoring (DAM) tool Extensible Markup Language (XML) firewall Correct Answer: D Explanation: Correct answer: Extensible Markup Language (XML) firewall Legacy systems that use SOAP and XML are still common in financial services, and securing them against injection attacks and schema violations is critical to protecting sensitive transactions",
    domain: 4
  },
  {
    id: 901,
    text: "An application uses application-specific access control, and users must authenticate with their own credentials to gain their allowed level of access to the application. A bad actor accessed corporate data after having stolen credentials. According to the STRIDE threat model, what type of threat is this?",
    options: ["Spoofing identity Insufficient", "due diligence Broken", "authentication Tampering", "with data"],
    answer: 0,
    explanation: "tials to gain their allowed level of access to the application",
    domain: 4
  },
  {
    id: 902,
    text: "Which of the following stages of the SDLC takes the LONGEST to complete?",
    options: ["Testing", "Transition", "Maintenance", "Development"],
    answer: 2,
    explanation: "nance Development xmexam",
    domain: 4
  },
  {
    id: 903,
    text: "An organization has recently begun migrating services to the cloud. The ease of deploying virtual machines has resulted in an increased attack surface since users instantiate systems but do not decommission them after use. Which cloud-specific risk BEST describes the issue the organization is facing?",
    options: ["Data breaches Lack of cloud", "security architecture and strategy Insecure", "interfaces and APIs Insufficient identity,", "credential, access, and key management"],
    answer: 1,
    explanation: "e systems but do not decommission them after use",
    domain: 4
  },
  {
    id: 904,
    text: "An information security manager works for a large pharmaceutical company and is working on an infrastructure as a service (IaaS) project. This is a huge project to move from a traditional data center to a cloud environment. They have many concerns that they are addressing. The current issue is how they are going to get all their data to the cloud. It is critical to plan for the exit before entry into the cloud. If the data gets in, it is going to have to have a way back out. Which of the following is their specific concern?",
    options: ["Interoperability", "Portability", "Ingress", "Reversibility"],
    answer: 3,
    explanation: "rks for a large pharmaceutical company and is working on an infrastructure as a service (IaaS) project",
    domain: 4
  },
  {
    id: 905,
    text: "In a cloud implementation that uses Security Assertion Markup Language (SAML) to authenticate a user, what is the appropriate name for the authenticator?",
    options: ["Service Provider", "Relying Party", "Identity Provider", "Relaying Party"],
    answer: 2,
    explanation: "priate name for the authenticator? Service Provider Relying Party Identity Provider Relaying Party Correct Answer: C xmexam",
    domain: 4
  },
  {
    id: 906,
    text: "A hospital has identified a nurse who has been violating data policies by browsing patient records during their free time. The nurse has used this information to blackmail some patients. What term does NOT describe this situation?",
    options: ["Contractual failure", "Internal threat", "Regulatory violations", "Rogue administrator"],
    answer: 0,
    explanation: "s during their free time",
    domain: 4
  },
  {
    id: 907,
    text: "If software developers and the supporting team were to ask the following four questions, what would they be doing?",
    options: ["Performing threat modeling Evaluating the", "Recovery Point Objective (RPO) Determining", "Maximum Tolerable Downtime (MTD) Performing", "a quantitative risk assessment"],
    answer: 0,
    explanation: "ve (RPO) Determining Maximum Tolerable Downtime (MTD) Performing a quantitative risk assessment Correct Answer: A Explanation: Correct answer: Performing threat modeling The four questions are the basic idea behind threat modeling",
    domain: 4
  },
  {
    id: 908,
    text: "Which type of testing is characterized by sending unexpected data to a system?",
    options: ["Static Whitebox", "Abuse", "case", "Dynamic"],
    answer: 2,
    explanation: "ebox Abuse case Dynamic Correct Answer: C xmexam",
    domain: 4
  },
  {
    id: 909,
    text: "The OWASP Top 10 lists XML external entities (XXE) on their current list of security vulnerabilities. Which of the following is an example of XXE?",
    options: ["A malicious actor is able to send untrusted data to a user's browser without going through any", "validation A parser is poorly configured, which allows a bad actor to gain access to sensitive", "data A website is not using proper input validation on their data fields of their application", "An application is not performing any validation on the browser tokens used to access the application"],
    answer: 1,
    explanation: "ields of their application An application is not performing any validation on the browser tokens used to access the application Correct Answer: B Explanation: Correct answer: A parser is poorly configured, which allows a bad actor to gain access to sensitive data XML external entities attacks occur when the application parses XML input",
    domain: 4
  },
  {
    id: 910,
    text: "Which type of testing analyzes code while it is running to provide real-time reporting?",
    options: ["SAST", "IAST", "DAST", "RASP"],
    answer: 1,
    explanation: "le it is running to provide real-time reporting? SAST IAST DAST RASP Correct Answer: B Explanation: Correct answer: IAST Interactive application security testing (IAST) runs within the application during execution and provides real-time feedback on vulnerabilities as the code is exercised",
    domain: 4
  },
  {
    id: 911,
    text: "A development team has an active beta for a piece of software that they are developing. Which phase of the SDLC are they MOST likely in?",
    options: ["Testing", "Termination", "Development", "Deployment"],
    answer: 0,
    explanation: "e of the SDLC are they MOST likely in? Testing Termination Development Deployment Correct Answer: A xmexam",
    domain: 4
  },
  {
    id: 912,
    text: "Which of the following commonly used threat models was created by Microsoft and classifies threats based on their goals/effects?",
    options: ["PASTA", "ATASM", "DREAD", "STRIDE"],
    answer: 3,
    explanation: "models was created by Microsoft and classifies threats based on their goals/effects? PASTA ATASM DREAD STRIDE Correct Answer: D Explanation: Correct answer: STRIDE Several different threat models can be used in the cloud",
    domain: 4
  },
  {
    id: 913,
    text: "Which of the following types of testing verifies that a module fits properly into the system as a whole?",
    options: ["Unit Testing", "Usability Testing", "Integration Testing", "Regression Testing"],
    answer: 2,
    explanation: "ty Testing Integration Testing Regression Testing Correct Answer: C xmexam",
    domain: 4
  },
  {
    id: 914,
    text: "Batu works with the DevOps team. He is an information security professional who has been tasked with ensuring that the software is properly tested. They have added Open Source Software (OSS) to their application. What is the best way to test and validate this OSS?",
    options: ["Static Application Security Testing (SAST) tools only Interactive Application Security Testing", "(IAST) tools only Static Application Security Testing (SAST) tools in conjunction", "with Interactive Application Security Testing (IAST) tools Dynamic Application Security Testing", "(DAST) tools in conjunction with Runtime Application Self-Protection (RASP) tools"],
    answer: 2,
    explanation: "nly Static Application Security Testing (SAST) tools in conjunction with Interactive Application Security Testing (IAST) tools Dynamic Application Security Testing (DAST) tools in conjunction with Runtime Application Self-Protection (RASP) tools Correct Answer: C Explanation: Correct answer: Static Application Security Testing (SAST) tools in conjunction with Interactive Application Security Testing (IAST) tools Given that you are utilizing well-known and well-supported Open-Source Software (OSS), performing Static Application Security Testing (SAST) to identify vulnerabilities and then implementing Interactive Application Security Testing (IAST) to detect additional security issues in real time would be the best of these options",
    domain: 4
  },
  {
    id: 915,
    text: "What functionality is gained by using an identity provider?",
    options: ["The ability to authenticate once and log in to multiple domains The ability to log authentication attempts and enforce account lockouts The ability to require multifactor authentication from users The ability to deny access to", "resources", "based", "on user roles"],
    answer: 0,
    explanation: "access to resources based on user roles Correct Answer: A Explanation: Correct answer: The ability to authenticate once and log in to multiple domains Identity providers are central to federated identity management and single sign-on, which allow secure authentication across multiple domains and services",
    domain: 4
  },
  {
    id: 916,
    text: "What solution would allow users to use a single sign-on method of authentication for a mobile app for a business if the business does not want to use the more cumbersome eXtensible Markup Language?",
    options: ["Federated Identity Management", "Open Identification (OpenID)", "Security Assertion Markup", "Language Multi-Factor Authentication"],
    answer: 1,
    explanation: "ble Markup Language? Federated Identity Management Open Identification (OpenID) Security Assertion Markup Language Multi-Factor Authentication Correct Answer: B xmexam",
    domain: 4
  },
  {
    id: 917,
    text: "Which of the following is NOT an OWASP SAMM domain or practice (i.e., business function)?",
    options: ["Deployment", "Governance", "Operations", "Design"],
    answer: 0,
    explanation: "ice (i",
    domain: 4
  },
  {
    id: 918,
    text: "What is generally part of the development coding phase of the Secure Software Development Life Cycle (SSDLC)?",
    options: ["Functional testing", "Acceptance testing", "Useability testing", "Unit testing"],
    answer: 3,
    explanation: "ing Acceptance testing Useability testing Unit testing xmexam",
    domain: 4
  },
  {
    id: 919,
    text: "Which of the following tools might be used to generate an SBOM?",
    options: ["IAST", "SAST", "SCA", "DAST"],
    answer: 2,
    explanation: "used to generate an SBOM? IAST SAST SCA DAST Correct Answer: C Explanation: Correct answer: SCA Some common tools for application security testing include:(ISC)2 CCSP Certified Cloud Security Professional Official Study Guide, 3rd Edition",
    domain: 4
  },
  {
    id: 920,
    text: "A media company wants to ensure that new versions of applications it uses are tested in a sandbox before being installed on user systems. How can it use cloud infrastructure for this purpose?",
    options: ["By testing the app in a virtual machine By encrypting", "the app before transferring it to cloud storage By", "running the app in a system behind a web", "application firewall (WAF) By using a container orchestration system"],
    answer: 0,
    explanation: "ing it to cloud storage By running the app in a system behind a web application firewall (WAF) By using a container orchestration system xmexam",
    domain: 4
  },
  {
    id: 921,
    text: "Which type of activity occurs during the operations and maintenance phase of the secure software development life cycle (SSDLC)?",
    options: ["Log reviews", "Requirement planning", "Unit testing", "Environment hardening"],
    answer: 0,
    explanation: "software development life cycle (SSDLC)? Log reviews Requirement planning Unit testing Environment hardening Correct Answer: A Explanation: Correct answer: Log reviews Ongoing monitoring and maintenance helps ensure that applications remain secure and functional after deployment",
    domain: 4
  },
  {
    id: 922,
    text: "Which of the following organizations published the Egregious Eleven to describe the most common cloud vulnerabilities?",
    options: ["OWASP", "SANS", "CSA", "NIST"],
    answer: 2,
    explanation: "ribe the most common cloud vulnerabilities? xmexam",
    domain: 4
  },
  {
    id: 923,
    text: "Which of the following test types is considered a functional test?",
    options: ["Integration", "Load", "Security", "Stress"],
    answer: 0,
    explanation: "nctional test? Integration Load Security Stress Correct Answer: A Explanation: Correct answer: Integration Functional tests validate that software features and components behave according to requirements, while non-functional tests validate performance, scalability, and other quality attributes",
    domain: 4
  },
  {
    id: 924,
    text: "Which of the following types of tests is MOST likely to focus on performance metrics such as latency and page response times?",
    options: ["Nonfunctional testing Dynamic Application", "Security Testing (DAST) Functional", "testing Interactive Application", "Security Testing (IAST)"],
    answer: 0,
    explanation: "mic Application Security Testing (DAST) Functional testing Interactive Application Security Testing (IAST) Correct Answer: A Explanation: Correct answer: Nonfunctional testing Nonfunctional testing covers how a system should perform and typically focuses on characteristics like performance, scalability, and security",
    domain: 4
  },
  {
    id: 925,
    text: "Which of the following scenarios demonstrates an SSDLC project that fulfills business requirements?",
    options: ["The application allows users to purchase T-shirts online.", "The application is compliant with data privacy regulations.", "The application uses multifactor authentication. The application", "can support up to 10,000 concurrent users."],
    answer: 0,
    explanation: "actor authentication",
    domain: 4
  },
  {
    id: 926,
    text: "Which SSDLC phase occurs directly after the requirements phase?",
    options: ["Deployment", "Development", "Design", "Testing"],
    answer: 2,
    explanation: "phase? Deployment Development Design Testing Correct Answer: C Explanation: Correct answer: Design After requirements are gathered and documented, the design phase comes next",
    domain: 4
  },
  {
    id: 927,
    text: "A corporation has discovered that a product sold to remotely managed virtual desktops of all kinds for their customers has allowed a bad actor the ability to use it to run arbitrary command execution. This has allowed the attackers to leverage the Remote Monitoring and Management (RMM) software to deploy ransomware. The feature of the RMM software that allowed this to happen was a zero-touch update capability. What threat was exploited here?",
    options: ["Lack of cloud security strategy and", "security architecture Insecure Interfaces and Application", "Programming Interfaces (API) Misconfiguration and inadequate", "change control Accidental cloud data disclosure"],
    answer: 0,
    explanation: "itoring and Management (RMM) software to deploy ransomware",
    domain: 4
  },
  {
    id: 928,
    text: "Which security issue does secrets management address?",
    options: ["Hard-coding credentials Leaving", "sensitive data unencrypted", "Recognizing spoofed emails", "Verifying file integrity"],
    answer: 0,
    explanation: "orrect Answer: A xmexam",
    domain: 4
  },
  {
    id: 929,
    text: "A penetration tester at Acme Inc. has been tasked with running a penetration test on a public website Acme Inc. created. The tester has no access to source code or documentation. What type of testing is this?",
    options: ["Black box", "Gray box", "Clear box", "White box"],
    answer: 0,
    explanation: "ning a penetration test on a public website Acme Inc",
    domain: 4
  },
  {
    id: 930,
    text: "Which of the following is NOT an example of a valid MFA scheme?",
    options: ["Facial recognition and PIN Password", "and OTP from authenticator app", "Facial recognition and TOTP", "HOTP and smart card"],
    answer: 3,
    explanation: "art card xmexam",
    domain: 4
  },
  {
    id: 931,
    text: "A CSP relies on third parties for hardware it uses in its infrastructure. How can it be assured this hardware is secure?",
    options: ["Validating vendor APIs Reviewing", "service-level agreements Conducting software", "composition analysis Checking for", "ISO 27001 certification"],
    answer: 3,
    explanation: "ervice-level agreements Conducting software composition analysis Checking for ISO 27001 certification Correct Answer: D Explanation: Correct answer: Checking for ISO 27001 certification ISO 27001 certification demonstrates that a vendor follows rigorous information security management practices",
    domain: 4
  },
  {
    id: 932,
    text: "Which of the following types of testing looks for vulnerabilities that could cause the software to exhibit unexpected behavior?",
    options: ["Regression Testing", "Integration Testing", "Abuse Testing", "Unit Testing"],
    answer: 2,
    explanation: "avior? Regression Testing Integration Testing Abuse Testing Unit Testing xmexam",
    domain: 4
  },
  {
    id: 933,
    text: "Which of the following organizations publishes and maintains a list of the Top 25 most dangerous software weaknesses?",
    options: ["Uptime Institute", "SANS Institute", "ITIL", "OWASP"],
    answer: 1,
    explanation: "list of the Top 25 most dangerous software weaknesses? Uptime Institute SANS Institute ITIL OWASP Correct Answer: B Explanation: Correct answer: SANS Institute The SANS Institute is responsible for the CWE TOP 25 Most Dangerous Software Errors list, which enumerates 25 top software weaknesses",
    domain: 4
  },
  {
    id: 934,
    text: "What is continuous integration / continuous delivery (CI/CD) used for?",
    options: ["Version control Physical", "security controls", "Data recovery", "Software development"],
    answer: 3,
    explanation: "are development xmexam",
    domain: 4
  },
  {
    id: 935,
    text: "Which term describes high-level user requirements in Agile development?",
    options: ["Timeboxes User", "stories", "Sprints", "Backlogs"],
    answer: 1,
    explanation: "development? Timeboxes User stories Sprints Backlogs Correct Answer: B Explanation: Correct answer: User stories User stories are short, high-level descriptions of desired functionality from the perspective of end-users",
    domain: 4
  },
  {
    id: 936,
    text: "A software development company has received lots of negative ratings and reviews for their latest product. Analysis of the reviews points to bugs as the biggest issue. Which process should you apply to help fix this?",
    options: ["Abuse case testing", "Quality assurance Software", "composition analysis", "Non-functional testing"],
    answer: 1,
    explanation: "as the biggest issue",
    domain: 4
  },
  {
    id: 937,
    text: "A regional train company has been upgrading their trains with the latest technology that allows them to communicate with the systems onboard the train better. They are using this for passenger safety, predictive maintenance, condition monitoring of the engine, wheels, etc. They are concerned that they cannot always communicate with the train when it is moving from the servers. What technology do they need to move to next to enhance these Internet of Things (IoT) capabilities?",
    options: ["Edge computing Internet", "of Things", "Fog computing", "Cloud computing"],
    answer: 2,
    explanation: "h the systems onboard the train better",
    domain: 4
  },
  {
    id: 938,
    text: "Threat modeling is critical in the process of securing software. There are many different threat modeling techniques available. Which method involves analyzing risks by assigning a score on a scale of 1-10?",
    options: ["Architecture, threats, attack surfaces and mitigations (ATASM) Damage, reproducibility,", "exploitability, affected users, discoverability (DREAD) Spoofing, tampering, repudiation, information", "disclosure, denial of service, elevation of privilege (STRIDE)", "Process for attack simulation and threat analysis (PASTA)"],
    answer: 1,
    explanation: "coverability (DREAD) Spoofing, tampering, repudiation, information disclosure, denial of service, elevation of privilege (STRIDE) Process for attack simulation and threat analysis (PASTA) Correct Answer: B Explanation: Correct answer: Damage, reproducibility, exploitability, affected users, discoverability (DREAD) The DREAD threat model looks at five categories, including damage potential, reproducibility, exploitability, affected users, and discoverability",
    domain: 4
  },
  {
    id: 939,
    text: "Which of the following is an XML-based standard used to exchange information in the authorization and authentication process, which was put out by the OASIS consortium and its Security Services Technical Committee?",
    options: ["Open Authorization (OAuth) Web", "Service Federation (WS-Federation) Security", "Assertion Markup Language (SAML)", "Open Identification (OpenID)"],
    answer: 2,
    explanation: "consortium and its Security Services Technical Committee? Open Authorization (OAuth) Web Service Federation (WS-Federation) Security Assertion Markup Language (SAML) Open Identification (OpenID) Correct Answer: C Explanation: Correct answer: Security Assertion Markup Language (SAML) SAML is an XML-based standard used to exchange information in the authorization and authentication process",
    domain: 4
  },
  {
    id: 940,
    text: "An application utilizes a browser token to maintain state, but it doesn't have any validation processes in place to ensure that the token is submitted by the original and valid obtained of the token. An attacker was able to hijack a browser token and gain unauthorized access to an application. Which of the OWASP Top 10 vulnerabilities is this an example of?",
    options: ["Software and data", "integrity failures Identification", "and authentication failures", "Security misconfiguration Injection"],
    answer: 1,
    explanation: "valid obtained of the token",
    domain: 4
  },
  {
    id: 941,
    text: "A marketing company wants to build a Software as a Service (SaaS) application that allows their customers to use their marketing tools for themselves. The marketing company utilizes social media sites to gain information about the end customer. If Open Authorization (OAuth) version 2.0 is being used, the whole process begins when the user initiates the interaction by accessing the company's website. The company's website requires the user to log in, and then the website requests access to the user's social media profile. What type of unit is used to carry the user's request to the resource server?",
    options: ["Tickets Access", "tokens Identification", "tokens Refresh", "tokens"],
    answer: 1,
    explanation: "heir marketing tools for themselves",
    domain: 4
  },
  {
    id: 942,
    text: "What is black-box testing?",
    options: ["A test on a system with zero prior knowledge of its internal workings A test on", "a system that relies exclusively on automated vulnerability scanning tools A test that focuses on using", "social engineering to gain access to a system A test that ensures that if a", "system has a critical failure, information about its state before the event can be recovered"],
    answer: 0,
    explanation: "bao",
    domain: 4
  },
  {
    id: 943,
    text: "What is the goal of the DREAD threat model?",
    options: ["Identifying threat actors Measuring", "the cost of", "mitigating threats Categorizing", "threats Ranking threats"],
    answer: 3,
    explanation: "threats Ranking threats Correct Answer: D Explanation: Correct answer: Ranking threats DREAD is designed to score threats across five categories: It then ranks them based on the scores",
    domain: 4
  },
  {
    id: 944,
    text: "Which practice simplifies the auditing of open-source web and database servers that an organization has deployed?",
    options: ["Unit", "testing Configuration management", "Versioning", "Secure coding"],
    answer: 1,
    explanation: "testing Configuration management Versioning Secure coding xmexam",
    domain: 4
  },
  {
    id: 945,
    text: "Acme Inc.'s Software as a Service (SaaS) platform uses federated identities and single sign-on (SSO) to authenticate users. Acme Inc. uses their corporate Active Directory (AD) service to authenticate user IDs and passwords and then the SaaS platform allows or denies access to its resources based on the results of those authentication requests. Which of the following roles related to federation BEST describes the SaaS platform in this scenario?",
    options: ["Authenticator Authentication", "server IdP", "Relying", "party"],
    answer: 3,
    explanation: "es and single sign-on (SSO) to authenticate users",
    domain: 4
  },
  {
    id: 946,
    text: "Which of the following is NOT a type of requirement that would be developed by the team during the Requirements phase of the SDLC?",
    options: ["Functional", "Non-functional", "Business", "Security"],
    answer: 1,
    explanation: "rement that would be developed by the team during the Requirements phase of the SDLC? Functional Non-functional Business Security Correct Answer: B Explanation: Correct answer: Non-functional The Software Development Lifecycle (SDLC) describes the main phases of software development from initial planning to end-of-life",
    domain: 4
  },
  {
    id: 947,
    text: "Which OWASP Top 10 vulnerability is defined as the capacity of unauthenticated users to see unlawful and sensitive data, perform unauthorized functions, and modify access rights?",
    options: ["Identification and authentication", "failures Injection Broken", "access control", "Cryptographic failure"],
    answer: 2,
    explanation: "ata, perform unauthorized functions, and modify access rights? Identification and authentication failures Injection Broken access control Cryptographic failure Correct Answer: C Explanation: Correct answer: Broken access control Broken access control vulnerabilities may enable unauthenticated users to view unlawful and sensitive data, perform unauthorized functions, and modify access privileges",
    domain: 4
  },
  {
    id: 948,
    text: "Kai is an information security researcher who has been analysing issues that could occur for his business when they move to the cloud. They plan to migrate to an Infrastructure as a Service (IaaS) deployment within the next six months. He found the Mitre has a Common Weakeness Enumeration (CWE) number 352, which is a Cross-Site Request Forgery (CSRF) issue. What type of threat is this?",
    options: ["Security misconfiguration Vulnerable", "and outdated components", "Server-side request forgery", "Broken access control"],
    answer: 3,
    explanation: "oud",
    domain: 4
  },
  {
    id: 949,
    text: "Which supplemental security component focuses on monitoring and filtering HTTP/HTTPS requests?",
    options: ["API gateway Database", "activity monitor Web", "application firewall Cloud", "access security broker"],
    answer: 2,
    explanation: "? API gateway Database activity monitor Web application firewall Cloud access security broker Correct Answer: C Explanation: Correct answer: Web application firewall A web application firewall (WAF) monitors, filters, and blocks malicious HTTP/HTTPS traffic",
    domain: 4
  },
  {
    id: 950,
    text: "Which of the following solutions is designed to manage access to SaaS and other cloud-hosted applications?",
    options: ["IdP", "SSO", "CASB", "MFA"],
    answer: 2,
    explanation: "designed to manage access to SaaS and other cloud-hosted applications? IdP SSO CASB MFA Correct Answer: C Explanation: Correct answer: CASB Identity and Access Management (IAM) is critical to application security",
    domain: 4
  },
  {
    id: 951,
    text: "What do functional tests aim to accomplish?",
    options: ["Verify that system requirements and specifications are met Measure how", "well an application performs under heavy user load Determine", "whether an application works on specific platforms Determine whether", "a system can support various types of multifactor authentication"],
    answer: 0,
    explanation: "arious types of multifactor authentication Correct Answer: A Explanation: Correct answer: Verify that system requirements and specifications are met Functional testing checks whether a system performs its functions as outlined in the requirements and specifications",
    domain: 4
  },
  {
    id: 952,
    text: "A recent global security incident related to open-source software has caused an organization to realize it needs to track all the open-source software it has been relying on. What should it use to accomplish this?",
    options: ["Quality assurance (QA) Dynamic", "application security testing (DAST)", "Software composition analysis", "(SCA) White-box testing"],
    answer: 2,
    explanation: "hat should it use to accomplish this? Quality assurance (QA) Dynamic application security testing (DAST) Software composition analysis (SCA) White-box testing Correct Answer: C xmexam",
    domain: 4
  },
  {
    id: 953,
    text: "What is the MOST important goal of training and awareness for application security?",
    options: ["Employing staff with the highest technical", "skills Meeting compliance requirements Regularly updating", "systems with the latest security patches", "Building and sustaining a security culture"],
    answer: 3,
    explanation: "test security patches Building and sustaining a security culture Correct Answer: D Explanation: Correct answer: Building and sustaining a security culture A strong culture of security awareness reduces risks caused by human error in cloud application development and usage",
    domain: 4
  },
  {
    id: 954,
    text: "Alvar is an information security professional working with the DevSecOps teams. There is an application that they are planning to build and deploy. The application will be using an Application Programming Interface (API) for some of its communication. After debating, they decided that the API that they are going to use is SOAP. The MOST commonly used communication protocol by SOAP is which of the following?",
    options: ["File Transfer Protocol (FTP)", "Hyper Text Transfer Protocol", "(HTTP) Transmission Control Protocol", "(TCP) Secure Shell (SSH)"],
    answer: 1,
    explanation: "that they are planning to build and deploy",
    domain: 4
  },
  {
    id: 955,
    text: "Which of the following development methods is LEAST like the others?",
    options: ["Waterfall", "Scrum", "Agile", "Kanban"],
    answer: 0,
    explanation: "Agile Kanban Correct Answer: A xmexam",
    domain: 4
  },
  {
    id: 956,
    text: "The software development team is working with the information security team through the Software Development Lifecycle (SDLC). The information security manager is concerned that the team is rushing through the phase of the lifecycle where the most technical mistakes could be made. Which phase is that?",
    options: ["Development", "Testing", "Requirements", "Planning"],
    answer: 0,
    explanation: "security team through the Software Development Lifecycle (SDLC)",
    domain: 4
  },
  {
    id: 957,
    text: "Which scenario is BEST addressed with containerization?",
    options: ["A company wants to test its application on a wide variety of platforms without having the physical", "hardware. A company wants to determine what a potential piece of malware does without affecting other systems.", "A company wants to split its application into numerous components that communicate through APIs. A company", "needs its web application to be portable so it can be easily scaled up or down."],
    answer: 3,
    explanation: "xmexam",
    domain: 4
  },
  {
    id: 958,
    text: "During which type of testing do legitimate testers perform actions that are similar to the actions a threat actor would take?",
    options: ["Gray-box Attacker", "simulation Abuse", "case", "SAST"],
    answer: 2,
    explanation: "ns that are similar to the actions a threat actor would take? Gray-box Attacker simulation Abuse case SAST Correct Answer: C Explanation: Correct answer: Abuse case testing Abuse case testing involves legitimate testers or automated tooling performing actions that are outside of the expected use cases for a system and more aligned with attacker behavior (e",
    domain: 4
  },
  {
    id: 959,
    text: "Which of the following organizations publishes Top 10 lists describing the most common vulnerabilities in various types of software (web apps, web APIs, etc.)?",
    options: ["Online and Web App Security Program", "Organization for Web App Security and", "Protection Open Web Association Security Partners", "Open Web Application Security Project"],
    answer: 3,
    explanation: "curity Program Organization for Web App Security and Protection Open Web Association Security Partners Open Web Application Security Project Correct Answer: D Explanation: Correct answer: Open Web Application Security Project The Open Web Application Security Project (OWASP) maintains multiple top 10 lists, but its web application list is the most famous and is updated every few years",
    domain: 4
  },
  {
    id: 960,
    text: "What is the FIRST step when using the ATASM threat model?",
    options: ["Recognizing attack vectors", "Understanding the architecture", "Determining affected users", "Identifying relevant assets"],
    answer: 1,
    explanation: "cted users Identifying relevant assets Correct Answer: B Explanation: Correct answer: Understanding the architecture The Architecture, Threats, Attack Surface, Mitigation (ATASM) model begins by reviewing the architecture to define the system’s components, connections, and boundaries",
    domain: 4
  },
  {
    id: 961,
    text: "Acme Inc. deployed a federated single sign-on system (SSO) that is configured to generate tokens for users from multiple organizations and send them to a service provider. What BEST describes Acme Inc's role?",
    options: ["SP", "CA", "CASB", "IdP"],
    answer: 3,
    explanation: "figured to generate tokens for users from multiple organizations and send them to a service provider",
    domain: 4
  },
  {
    id: 962,
    text: "You are a quality engineer at Acme Inc. The development team has created a highly modular application with different capabilities broken up into various functions. Each module has been individually tested, but the team hasn't verified the functionality of the software as a whole. What type of testing needs to be done?",
    options: ["Dynamic application security", "testing Usability testing", "Integration testing User", "experience testing"],
    answer: 2,
    explanation: "unctions",
    domain: 4
  },
  {
    id: 963,
    text: "Dom, the information security manager, has been working with Vicky, the primary developer, on a new application. They have begun the testing phase of their new product. They are testing their new web application through the use of automated tools to simulate what a malicious actor would be able to do. What type of security testing are they doing?",
    options: ["Dynamic Application Security Testing", "(DAST) Vulnerability scanning Penetration", "testing Static Application", "Security Testing (SAST)"],
    answer: 0,
    explanation: "their new product",
    domain: 4
  },
  {
    id: 964,
    text: "API and SSH keys are MOST relevant to which of the following?",
    options: ["Identity Providers Federated", "Identity Secrets Management", "Cloud Access", "Security Broker"],
    answer: 2,
    explanation: "ts Management Cloud Access Security Broker Correct Answer: C Explanation: Correct answer: Secrets Management Identity and Access Management (IAM) is critical to application security",
    domain: 4
  },
  {
    id: 965,
    text: "What does the Building Security in Maturity Model (BSIMM) aim to achieve?",
    options: ["Security by design", "Role-based access control", "Threat modeling Application", "vulnerability scanning"],
    answer: 0,
    explanation: "rol Threat modeling Application vulnerability scanning Correct Answer: A Explanation: Correct answer: Security by design BSIMM is a framework that helps organizations evaluate the maturity of their software security initiatives and align them with best practices",
    domain: 4
  },
  {
    id: 966,
    text: "Organizations such as the Cloud Security Alliance (CSA) and the Open Web Application Security Project (OWASP) publish information about cloud threats and risks. Who is responsible for mitigating these risks in an organization?",
    options: ["Cloud Service Provider", "(CSP) Security professionals", "Executive management", "Database administrators"],
    answer: 1,
    explanation: "ect (OWASP) publish information about cloud threats and risks",
    domain: 4
  },
  {
    id: 967,
    text: "Alia is working with the software developers through the devops process as an information security manager. She is focused on threat modeling for a specific software project. When should threat modeling be performed?",
    options: ["During the development phase as the code is being", "created Throughout the whole of the software development lifecycle", "After the requirements are understood and before development Early", "in the software development lifecycle, the requirements phase"],
    answer: 1,
    explanation: "e software development lifecycle After the requirements are understood and before development Early in the software development lifecycle, the requirements phase Correct Answer: B xmexam",
    domain: 4
  },
  {
    id: 968,
    text: "During which phase of the SDLC should test cases be executed for the identified requirements?",
    options: ["Testing Requirements", "Development Operations and Maintenance", "Test Case", "Implementation"],
    answer: 0,
    explanation: "requirements? Testing Requirements Development Operations and Maintenance Correct Answer: A Explanation: Correct answer: Design The software development lifecycle (SDLC) describes the main phases of software development from initial planning to end-of life",
    domain: 4
  },
  {
    id: 969,
    text: "What is the OWASP Top 10?",
    options: ["A list of the biggest security incidents in the past year", "A list of the most popular jobs in cloud computing", "A list of the most important threats to web application", "security A list of the top threat actors attacking organizations"],
    answer: 2,
    explanation: "ao",
    domain: 4
  },
  {
    id: 970,
    text: "At what phase of the Secure Software Development Life Cycle (SSDLC) would a software team work to develop the actual code that creates the software components within a piece of software that will be sold as a Software as a Service (SaaS) product?",
    options: ["Design Operations", "and maintenance", "Development", "Deployment"],
    answer: 2,
    explanation: "software team work to develop the actual code that creates the software components within a piece of software that will be sold as a Software as a Service (SaaS) product? Design Operations and maintenance Development Deployment Correct Answer: C Explanation: Correct answer: Development The development phase entails the coding of software components as well as the integration and construction of the overall solution",
    domain: 4
  },
  {
    id: 971,
    text: "What is a short work session in Agile development called?",
    options: ["Sprint Backlog", "Timebox", "User", "story"],
    answer: 0,
    explanation: "ry xmexam",
    domain: 4
  },
  {
    id: 972,
    text: "A ratings company has data that it wants to allow any user to access if they register and follow the company's data use policies. Which solution should it use to distribute this data to users?",
    options: ["Sandboxing Web", "application firewall", "Data warehouse", "Public API"],
    answer: 3,
    explanation: "ster and follow the company's data use policies",
    domain: 4
  },
  {
    id: 973,
    text: "Kiran, a security engineer at Acme Inc., is considering security testing and protection solutions for several serverless functions used for a web application. Which of the following is MOST LIKELY to be useful in this case?",
    options: ["SBOM WAF", "RASP", "Agent-based", "antimalware"],
    answer: 1,
    explanation: "ions for several serverless functions used for a web application",
    domain: 4
  },
  {
    id: 974,
    text: "Which of the following tools is BEST for protecting internet-facing web servers from SQLi, XSS, and CSRF attacks?",
    options: ["API gateway Web Application", "Firewall (WAF) Secure", "Web Gateway (SWG)", "Next-Generation FireWall (NGFW)"],
    answer: 1,
    explanation: "ateway Web Application Firewall (WAF) Secure Web Gateway (SWG) Next-Generation FireWall (NGFW) Correct Answer: B Explanation: Correct answer: Web Application Firewall (WAF) A Web Application Firewall (WAF) specifically addresses attacks on applications and external services",
    domain: 4
  },
  {
    id: 975,
    text: "Which software development methodology is linear but includes an iterative process that revisits four phases multiple times?",
    options: ["Spiral", "RAD", "Waterfall", "Agile"],
    answer: 0,
    explanation: "that revisits four phases multiple times? xmexam",
    domain: 4
  },
  {
    id: 976,
    text: "What type of functionality can be expected from identity providers?",
    options: ["Verification of systems availability Validation", "of authentication requests Confirmation", "of certificate status Authorization", "of access to resources"],
    answer: 1,
    explanation: "cate status Authorization of access to resources Correct Answer: B Explanation: Correct answer: Validation of authentication requests Identity providers are a key component of federated identity and SSO systems, and they ensure secure authentication for users accessing cloud services",
    domain: 4
  },
  {
    id: 977,
    text: "Which supplemental security component evaluates HTTP and HTTPS traffic for suspicious or malicious activity?",
    options: ["Application programming interface (API) gateway", "Web application firewall (WAF) Database", "activity monitoring (DAM) tool Extensible", "Markup Language (XML) firewall"],
    answer: 1,
    explanation: "pplication firewall (WAF) Database activity monitoring (DAM) tool Extensible Markup Language (XML) firewall Correct Answer: B Explanation: Correct answer: Web application firewall (WAF) Protecting web-based applications from malicious traffic is critical in cloud environments where most services are delivered through HTTP and HTTPS",
    domain: 4
  },
  {
    id: 978,
    text: "A small bank has recently experienced a data breach. You have been working with the Incident Response team. They have discovered that the bad actor was able to copy a database out after having been able to do a man-in-the-middle (MitM) attack against the Diffie Hellman exchange that occurred on a user's connection. Which of the OWASP Top 10 security threats has been experienced by this company?",
    options: ["Software and Data Integrity", "Failures Cryptographic Failures Identification", "and Authentication Failures", "Broken access control"],
    answer: 1,
    explanation: "after having been able to do a man-in-the-middle (MitM) attack against the Diffie Hellman exchange that occurred on a user's connection",
    domain: 4
  },
  {
    id: 979,
    text: "Malicious code is sent to a user's browser from a trusted website that steals a session token for the bad actor. What type of attack is being described?",
    options: ["Structured Query Language (SQL) injection", "Cross-site scripting (XSS) Cross Site", "Request Forgery (CSRF) eXternal Markup", "Language (XML) external entities (XEE)"],
    answer: 1,
    explanation: "ng (XSS) Cross Site Request Forgery (CSRF) eXternal Markup Language (XML) external entities (XEE) Correct Answer: B xmexam",
    domain: 4
  },
  {
    id: 980,
    text: "Researchers from a private lab and scientists from a university are sharing research data in the cloud. Authentication is required for data access. When a user wants to access this data, they need to be authenticated. The scientists can use local authentication from their university, as it acts as an Identity Provider (IdP). Which of the following authentication mechanisms are they using?",
    options: ["Active Directory", "Open Authorization", "Federated Identity", "Management Kerberos"],
    answer: 2,
    explanation: "for data access",
    domain: 4
  },
  {
    id: 981,
    text: "Which of the following solutions is designed to improve security and decrease account takeover attack risk by making it harder to use stolen/compromised passwords?",
    options: ["Secrets management", "Single sign-on", "Zero trust", "Multi-factor authentication"],
    answer: 3,
    explanation: "er attack risk by making it harder to use stolen/compromised passwords? Secrets management Single sign-on Zero trust Multi-factor authentication Correct Answer: D Explanation: Correct answer: Multi-factor authentication Identity and Access Management (IAM) is critical to application security",
    domain: 4
  },
  {
    id: 982,
    text: "Which of the following would be the BEST way to mitigate the risk of cryptographic failures on web applications?",
    options: ["User-supplied data is not validated, filtered, or sanitized by the", "application Ensure up-to-date and strong standard algorithms, protocols, and keys", "Sanitize and validate all client-supplied input data Establish and use", "a library of secure design patterns or paved road"],
    answer: 1,
    explanation: "lient-supplied input data Establish and use a library of secure design patterns or paved road Correct Answer: B Explanation: Correct answer: Ensure up-to-date and strong standard algorithms, protocols, and keys Web applications store a lot of sensitive data such as credit card information, authentication credentials, and Personally Identifiable Information (PII)",
    domain: 4
  },
  {
    id: 983,
    text: "Unauthenticated and unauthorized users can access sensitive data on a server by performing an HTTP GET to a specific endpoint that exposes sensitive files. This is an example of which type of security issue?",
    options: ["CSRF XSS Insecure", "direct object", "reference HTTP", "header injection"],
    answer: 2,
    explanation: "dpoint that exposes sensitive files",
    domain: 4
  },
  {
    id: 984,
    text: "Which of the following statements represents a best practice in API key management?",
    options: ["Storing plaintext API keys in", "shared cloud storage Including API", "keys in code repositories Maintaining a", "long-term master key that never changes Deleting unused API keys"],
    answer: 3,
    explanation: "long-term master key that never changes Deleting unused API keys Correct Answer: D Explanation: Correct answer: Deleting unused API keys API keys control access to cloud resources, and poor management of them can lead to data breaches or unauthorized system access",
    domain: 4
  },
  {
    id: 985,
    text: "A quality assurance engineer is running a set of automated tests that focuses on a software program's interfaces and end-user experience. Which of the following BEST describes the tests they are performing?",
    options: ["Regression testing", "Usability testing", "Integration testing", "Unit testing"],
    answer: 1,
    explanation: "experience",
    domain: 4
  },
  {
    id: 986,
    text: "You are working with the application developers as they move through development and into operations with their new application. They are looking to add something to the application that can allow the application to protect itself. Which of the following is a security mechanism that allows an application to protect itself by responding and reacting to ongoing events and threats?",
    options: ["Static Application Security Testing", "(SAST) Dynamic Application Security", "Testing (DAST) Vulnerability scanning", "Runtime Application Self-Protection (RASP)"],
    answer: 3,
    explanation: "tion to protect itself",
    domain: 4
  },
  {
    id: 987,
    text: "Nur, a security researcher at Acme Inc., is using a tool that scans source code to detect insecure coding patterns. Nur is using what type of tool to conduct what type of testing?",
    options: ["DAST to conduct black-box testing", "SAST to conduct white-box testing", "DAST to conduct white-box testing", "SAST to conduct black-box testing"],
    answer: 1,
    explanation: "ct what type of testing? DAST to conduct black-box testing SAST to conduct white-box testing DAST to conduct white-box testing SAST to conduct black-box testing Correct Answer: B Explanation: Correct answer: SAST to conduct white-box testing Software testing can be classified as one of a few different types, including:(ISC)2 CCSP Certified Cloud Security Professional Official Study Guide, 3rd Edition",
    domain: 4
  },
  {
    id: 988,
    text: "An engineer is adding validation processes to an application that will check that session tokens are being submitted by the valid and original obtainer of the token. What OWASP Top 10 vulnerability is this engineer mitigating by doing so?",
    options: ["Identification and authentication", "failures Vulnerable and", "outdated components Injection", "Insecure design"],
    answer: 0,
    explanation: "token",
    domain: 4
  },
  {
    id: 989,
    text: "Nicole has been evaluating a potential Cloud Service Provider (CSP). She has been looking at the requirements needed in the contract, what kind of ongoing monitoring they will need to put in place, what audits and certifications the CSP has been through, and their exit strategy. What has she been doing?",
    options: ["Vendor risk management", "Dynamic software management", "Due process Verified", "secure software"],
    answer: 0,
    explanation: "of ongoing monitoring they will need to put in place, what audits and certifications the CSP has been through, and their exit strategy",
    domain: 4
  },
  {
    id: 990,
    text: "Cruz is working with the cloud development team to figure out which software development model would work best for their new project. The customer has defined a few requirements, such as this will be on a Platform as a Service (PaaS) architecture and that they know that the users will be using this software to interrogate databases to determine how their products should move from store to store and the change in seasons. Which model would you recommend?",
    options: ["V model", "Agile Waterfall", "Rational unified", "process"],
    answer: 1,
    explanation: "k best for their new project",
    domain: 4
  },
  {
    id: 991,
    text: "Which of the following organizations publishes the CWE Top 25 describing the 25 most dangerous weaknesses and errors in software each year?",
    options: ["CSA", "NIST", "OWASP", "SANS"],
    answer: 3,
    explanation: "blishes the CWE Top 25 describing the 25 most dangerous weaknesses and errors in software each year? CSA NIST OWASP SANS Correct Answer: D Explanation: Correct answer: SANS Several organizations provide resources designed to teach about the most common vulnerabilities in different environments",
    domain: 4
  },
  {
    id: 992,
    text: "Tristan, a security engineer at Acme Inc., is reviewing a list of all the components in a recent software program Acme Inc. developers created. What term BEST describes this type of list?",
    options: ["SAST", "OSS", "SCA", "SBOM"],
    answer: 3,
    explanation: "components in a recent software program Acme Inc",
    domain: 4
  },
  {
    id: 993,
    text: "Which of the following cloud software security considerations is MORE relevant if a company is using microservices?",
    options: ["Supply Chain Security", "Open-Source Software", "Third-Party Software", "API Security"],
    answer: 3,
    explanation: "sing microservices? Supply Chain Security Open-Source Software Third-Party Software API Security Correct Answer: D Explanation: Correct answer: API Security Some important considerations for secure software development in the cloud include:(ISC)2 CCSP Certified Cloud Security Professional Official Study Guide, 3rd Edition",
    domain: 4
  },
  {
    id: 994,
    text: "Wyatt has just been made aware that they have discovered a problem that they need to fix. They have a server that will allow a Uniform Resource Identifier (URI) of \"file:///etc/passwd\" to be entered successfully on one of their websites. What is this an example of?",
    options: ["Injection Cryptographic", "failure Security", "Misconfiguration Insecure", "design"],
    answer: 2,
    explanation: "iform Resource Identifier (URI) of \"file:///etc/passwd\" to be entered successfully on one of their websites",
    domain: 4
  },
  {
    id: 995,
    text: "How are business requirements related to the secure software development life cycle (SDLC)?",
    options: ["Business requirements ensure that the software is not developed unless it can", "create profit. Business requirements keep software developers from focusing solely on security.", "Business requirements define the functionality that software needs to achieve. Business", "requirements determine the specific security controls to be implemented in code."],
    answer: 2,
    explanation: "ents determine the specific security controls to be implemented in code",
    domain: 4
  },
  {
    id: 996,
    text: "What is the MOST important component to secure when using encryption?",
    options: ["Storage medium", "Initialization vector", "Algorithm", "Key"],
    answer: 3,
    explanation: "Storage medium Initialization vector Algorithm Key Correct Answer: D Explanation: Correct answer: Key The strength of encryption depends not just on the algorithm but on the secrecy of the cryptographic key because anyone with the key can decrypt the data regardless of the algorithm’s robustness",
    domain: 4
  },
  {
    id: 997,
    text: "Which of the following is NOT a way that Agile differs from Waterfall?",
    options: ["Ability to address only some", "requirements One-way movement through phases Iterative", "process Shorter", "development cycles"],
    answer: 1,
    explanation: "phases Iterative process Shorter development cycles Correct Answer: B Explanation: Correct answer: One-way movement through phases Software development teams can use various development methodologies",
    domain: 4
  },
  {
    id: 998,
    text: "The Pandemic Eleven is a list of eleven risks that are associated specifically with which type of technology?",
    options: ["All web applications Cloud-based", "applications and systems", "All network devices", "Traditional data centers"],
    answer: 1,
    explanation: "ich type of technology? All web applications Cloud-based applications and systems All network devices Traditional data centers Correct Answer: B Explanation: Correct answer: Cloud-based applications and systems The Pandemic Eleven is similar to the OWASP Top 10",
    domain: 4
  },
  {
    id: 999,
    text: "Which attribute of the STRIDE threat model represents threats in which an attacker compromises the integrity of data?",
    options: ["Spoofing Tampering", "Repudiation", "Information", "disclosure"],
    answer: 1,
    explanation: "attacker compromises the integrity of data? Spoofing Tampering Repudiation Information disclosure Correct Answer: B Explanation: Correct answer: Tampering The STRIDE threat model provides a framework for categorizing threats and designing controls across cloud systems",
    domain: 4
  },
  {
    id: 1000,
    text: "Because an organization is using a Cloud Service Provider (CSP) for their application that they are developing, they have determined that they need to encrypt data from the server-based application to the client on the user's machine. What technology would you recommend?",
    options: ["Sandbox Transport Layer", "Security (TLS) Secure", "Shell (SSH) Internet", "Protocol Security (IPSec)"],
    answer: 1,
    explanation: "y are developing, they have determined that they need to encrypt data from the server-based application to the client on the user's machine",
    domain: 4
  },
  {
    id: 1001,
    text: "SELECT userID FROM users WHERE name='admin' AND password='somepassword' OR 1=1 is indicative of what type of attack?",
    options: ["Structured Query Language Injection", "Cross-site Request Forgery Cross-site", "Scripting eXtensible Markup", "Language External Entity"],
    answer: 0,
    explanation: "oss-site Scripting eXtensible Markup Language External Entity Correct Answer: A xmexam",
    domain: 4
  },
  {
    id: 1002,
    text: "Which one is the correct order of the SDLC?",
    options: ["Requirements, development, deployment, design, operations & maintenance, testing", "Design, requirements, development, deployment, testing, operations & maintenance", "Design, development, requirements, testing, operation & maintenance, deployment", "Requirements, design, development, testing, deployment, operations & maintenance"],
    answer: 3,
    explanation: "wer: D xmexam",
    domain: 4
  },
  {
    id: 1003,
    text: "Which use case relies MOST heavily on secrets management?",
    options: ["Multifactor authentication for users System-to-system communications", "using APIs Context-based authentication as an", "additional security layer Hashing user", "passwords stored with identity providers"],
    answer: 1,
    explanation: "sswords stored with identity providers Correct Answer: B Explanation: Correct answer: System-to-system communications using APIs Secrets management is designed to protect non-human credentials like API keys, certificates, and service account passwords that enable secure machine-to-machine communication",
    domain: 4
  },
  {
    id: 1004,
    text: "Researchers have discovered a vulnerability in a popular open-source library. A company now wants to know if any of its applications use that library. What process will answer the company's question?",
    options: ["Dynamic application testing", "Abuse case testing", "Quality assurance Software", "composition analysis"],
    answer: 3,
    explanation: "What process will answer the company's question? xmexam",
    domain: 4
  },
  {
    id: 1005,
    text: "Why is a cloud environment ideal for sandboxing?",
    options: ["Because of the licensing structure of cloud services Because CSPs have multiple", "regions and availability zones to aid in resilience Because it is", "fast and easy to create independent, short-lived environments Because the cloud", "allows for easily scaling resources up or down based on demand"],
    answer: 2,
    explanation: "es up or down based on demand Correct Answer: C Explanation: Correct answer: Because it is fast and easy to create independent, short lived environments Cloud services make it simple to spin up isolated virtual machines or containers quickly and then tear them down when they're no longer needed, which f its the core purpose of sandboxing",
    domain: 4
  },
  {
    id: 1006,
    text: "Which solution lets an organization know they are using the MOST current release of a piece of software?",
    options: ["Partitioning", "Versioning", "Provisioning", "Baselining"],
    answer: 1,
    explanation: "rrent release of a piece of software? Partitioning Versioning Provisioning Baselining Correct Answer: B Explanation: Correct answer: Versioning Using outdated or unpatched software increases exposure to vulnerabilities, while versioning provides a structured way to track and update releases",
    domain: 4
  },
  {
    id: 1007,
    text: "The process of managing and provisioning data centers through machine-readable definition files is called what?",
    options: ["IaaS", "DevSecOps", "IaC", "CI/CD"],
    answer: 2,
    explanation: "efinition files is called what? IaaS DevSecOps IaC CI/CD Correct Answer: C xmexam",
    domain: 4
  },
  {
    id: 1008,
    text: "Amanda is working with the software development team as they build their software for their customers' use. They will be using an Application Programming Interface (API) to enable communication from the client to the server. They have decided they want to use the API that relies on the Hyper Text Transfer Protocol (HTTP) protocol to support data formats such as eXtensible Markup Language (XML) or Java Script Object Notation (JSON)?",
    options: ["Which API did they", "choose? REpresentational State Transfer", "(ReST XML-RPC (Remote Procedure", "Call) SOAP JSON-RPC"],
    answer: 0,
    explanation: "Application Programming Interface (API) to enable communication from the client to the server",
    domain: 4
  },
  {
    id: 1009,
    text: "Bruis has been working with the developers for a new cloud-based application that will operate within their Platform as a Service (PaaS) environment. He has brought the focus of information security to the effort since he is an information security manager. He has been working to ensure that they are planning and developing and assessing the application the best they can as appropriate to the application and the corporation's needs. What fundamental cloud application idea does this work represent?",
    options: ["Security as a business", "objective Shared security responsibility", "Developing collective responsibility", "Security by design"],
    answer: 3,
    explanation: "heir Platform as a Service (PaaS) environment",
    domain: 4
  },
  {
    id: 1010,
    text: "How would you label an application that is on its sixth patch of its second update for its fourth release?",
    options: ["4.2.6", "6.2.4", "2.4.6", "6.4.2"],
    answer: 0,
    explanation: "on its sixth patch of its second update for its fourth release? 4",
    domain: 4
  },
  {
    id: 1011,
    text: "Which of the following is NOT checked when using the DREAD threat model?",
    options: ["Measure of the restoration time needed after a successful exploit Measure", "of the skill level or resources needed to successfully exploit a", "threat Measure of damage to the system should a successful exploit", "occur Measure of how easy it is to reproduce an exploit"],
    answer: 0,
    explanation: "cessful exploit occur Measure of how easy it is to reproduce an exploit Correct Answer: A Explanation: Correct answer: Measure of the restoration time needed after a successful exploit DREAD is about measuring how severe an exploit could be",
    domain: 4
  },
  {
    id: 1012,
    text: "Which of the following statements about single sign-on (SSO) is ACCURATE?",
    options: ["A resource provider queries an identity service provider to determine whether a user is authenticated. A resource provider queries", "a user to determine whether they are already authenticated with an identity service provider. A resource provider directly", "issues authentication credentials to the user for all systems in its domain and vouches for the user in", "other domains. A resource provider authenticates a user and then verifies that identity with an identity service provider."],
    answer: 0,
    explanation: "service provider",
    domain: 4
  },
  {
    id: 1013,
    text: "Orchestration tools are critical in today's cloud environments. What are some of the protocols that are LIKELY to be used by orchestration tools?",
    options: ["Secure Shell (SSH), Multiprotocol Label Switching (MPLS), and Advanced Message Queuing Protocol (AMQP) Secure Shell (SSH),", "RESTful APIs (Representation State Transfer Application Programming Interface), and Dynamic Host Configuration Protocol (DHCP) Point to", "Point Protocol (PPP), RESTful APIs (Representation State Transfer Application Programming Interface), and Advanced Message Queuing Protocol", "(AMQP) Secure Shell (SSH), Hypertext transfer protocol secure (HTTPS), and Advanced Message Queuing Protocol (AMQP)"],
    answer: 3,
    explanation: ", Hypertext transfer protocol secure (HTTPS), and Advanced Message Queuing Protocol (AMQP) Correct Answer: D xmexam",
    domain: 4
  },
  {
    id: 1014,
    text: "Software developers at a government agency are creating a tool to infiltrate and control the power grid of an enemy state. The software is designed to damage slowly the programmable logic computers (PLC) that control the physical systems of the power station. The software is also designed to send false information to the monitoring devices to reduce the chance that the damage will be noticed until it is too late. What SPECIFIC type of threat actor is described in this scenario?",
    options: ["Hacktivists State", "actor Organized", "crime", "APT"],
    answer: 1,
    explanation: "to infiltrate and control the power grid of an enemy state",
    domain: 4
  },
  {
    id: 1015,
    text: "Which of the following is a seven-step threat model that views things from the attacker's perspective?",
    options: ["DREAD", "STRIDE", "ATASM", "PASTA"],
    answer: 3,
    explanation: "ttacker's perspective? xmexam",
    domain: 4
  },
  {
    id: 1016,
    text: "A cloud security architect is planning how users will be authenticated when utilizing the new Software as a Service (SaaS) that the company is building. They need to be sure that the users are authenticated with a high degree of accuracy. They have decided that they will use Multi-Factor Authentication (MFA) with a retinal scan as its second factor. What type of authentication is a retinal scan?",
    options: ["Something the user has", "Something the user is", "Something the user does", "Something the user knows"],
    answer: 1,
    explanation: "ce (SaaS) that the company is building",
    domain: 4
  },
  {
    id: 1017,
    text: "Which of the following is consistently among the TOP FOUR vulnerabilities in the annual OWASP Top 10 list?",
    options: ["Broken access control", "Race condition", "Shadow IT", "Insider threat"],
    answer: 0,
    explanation: "bao",
    domain: 4
  },
  {
    id: 1018,
    text: "Containerization is an example of which of the following?",
    options: ["Microservices Serverless", "Application", "virtualization", "Sandboxing"],
    answer: 2,
    explanation: "ng Correct Answer: C xmexam",
    domain: 4
  },
  {
    id: 1019,
    text: "Which of the following types of testing would NOT be performed during the initial release of a piece of software?",
    options: ["Unit Testing", "Usability Testing", "Integration Testing", "Regression Testing"],
    answer: 3,
    explanation: "of a piece of software? Unit Testing Usability Testing Integration Testing Regression Testing Correct Answer: D Explanation: Correct answer: Regression Testing Functional testing is used to verify that software meets the requirements defined in the first phase of the SDLC",
    domain: 4
  },
  {
    id: 1020,
    text: "Which of the following types of testing verifies that individual functions or modules work as intended?",
    options: ["Unit Testing", "Regression Testing", "Integration Testing", "Usability Testing"],
    answer: 0,
    explanation: "ons or modules work as intended? Unit Testing Regression Testing Integration Testing Usability Testing Correct Answer: A Explanation: Correct answer: Unit Testing Functional testing is used to verify that software meets the requirements defined in the first phase of the SDLC",
    domain: 4
  },
  {
    id: 1021,
    text: "Yuri, a security analyst at Acme Inc., wants to improve their team's visibility into software dependency risk related to software products the development team creates. Which of the following technologies would be the BEST choice to help Yuri improve visibility into software dependency risk?",
    options: ["DAST", "SCA", "SAST", "CCM"],
    answer: 1,
    explanation: ", wants to improve their team's visibility into software dependency risk related to software products the development team creates",
    domain: 4
  },
  {
    id: 1022,
    text: "An engineer is using DREAD for threat modeling. Which is the correct algorithm when using DREAD to determine the quantitative value for risk and threats?",
    options: ["RISK_DREAD = (Damage - Recoverability + Exploitability + Affected Users + Discoverability) / 10 RISK_DREAD", "= (Damage + Reproducibility + Exploitability + Affected Users + Discoverability) / 5 RISK_DREAD", "= (Damage - Reproducibility + End users affected - Awareness + Discoverability) / 10", "RISK_DREAD = (Damage + Restoration Time+ Exploitability + Affected Users + Discoverability) / 5"],
    answer: 1,
    explanation: "ed - Awareness + Discoverability) / 10 RISK_DREAD = (Damage + Restoration Time+ Exploitability + Affected Users + Discoverability) / 5 Correct Answer: B Explanation: Correct answer: RISK_DREAD = (Damage + Reproducibility + Exploitability + Affected Users + Discoverability) / 5 DREAD looks at the categories of damage potential, reproducibility, exploitability, affected users, and discoverability",
    domain: 4
  },
  {
    id: 1023,
    text: "Lee, a systems administrator at Acme Inc., is using a REST API to configure a system. Which HTTP verb should Lee use to create an object?",
    options: ["PATCH", "CREATE", "POST", "PUT"],
    answer: 2,
    explanation: ", is using a REST API to configure a system",
    domain: 4
  },
  {
    id: 1024,
    text: "What is the relationship between federated identity and single sign-on (SSO)?",
    options: ["Federated identity is a prerequisite for achieving SSO. Federated identity is a type", "of SSO that requires multiple factors for authentication. Federated identity is a form", "of SSO that works across disparate organizations. Federated identity is a cloud-based service", "for managing identities, while SSO is used for authenticating users across websites."],
    answer: 2,
    explanation: "ging identities, while SSO is used for authenticating users across websites",
    domain: 4
  },
  {
    id: 1025,
    text: "What type of security appliance is intended to protect against XML external entities and other XML-based attacks?",
    options: ["XML firewall", "IPS API", "gateway", "IDS"],
    answer: 0,
    explanation: "ct against XML external entities and other XML-based attacks? XML firewall IPS API gateway IDS Correct Answer: A Explanation: Correct answer: XML firewall As the name implies, XML firewalls can help protect applications against XML-based attacks, including XML external entities",
    domain: 4
  },
  {
    id: 1026,
    text: "What is the FIRST stage in the Secure Software Development LifeCycle (SSDLC) in which cloud information security specialists should be involved when software is being developed for a Platform as a Service (PaaS) environment?",
    options: ["Testing Requirement", "gathering and", "feasibility Design", "Development/coding"],
    answer: 1,
    explanation: "ould be involved when software is being developed for a Platform as a Service (PaaS) environment? xmexam",
    domain: 4
  },
  {
    id: 1027,
    text: "In which phase of the SSDLC does end-user training typically occur?",
    options: ["Development Operations", "and maintenance", "Deployment", "Testing"],
    answer: 2,
    explanation: "nt Operations and maintenance Deployment Testing Correct Answer: C Explanation: Correct answer: Deployment During deployment, the software is delivered to end-users, and training is provided so they know how to use the system securely and effectively",
    domain: 4
  },
  {
    id: 1028,
    text: "During which phase of the software development lifecycle should testing needs be defined?",
    options: ["Testing Coding", "Design", "Requirements", "definition"],
    answer: 3,
    explanation: "lifecycle should testing needs be defined? Testing Coding Design Requirements definition Correct Answer: D Explanation: Correct answer: Requirements definition During the phase of the software development lifecycle, sometimes referred to as requirement gathering and feasibility or requirements definition, the testing requirements are defined",
    domain: 4
  },
  {
    id: 1029,
    text: "Which of the following category of tools are typically used in white-box testing?",
    options: ["SAST", "DAST", "nmap", "Selenium"],
    answer: 0,
    explanation: "e typically used in white-box testing? SAST DAST nmap Selenium Correct Answer: A Explanation: Correct answer: White-box Software testing can be classified as one of a few different types, including: nmap is a network scanner that does not require full access to the software under test",
    domain: 4
  },
  {
    id: 1030,
    text: "Which security control is ideal for protecting against account hijacking?",
    options: ["Encryption Multifactor", "authentication Intrusion", "detection system", "Firewall"],
    answer: 1,
    explanation: "ncryption Multifactor authentication Intrusion detection system Firewall Correct Answer: B Explanation: Correct answer: Multifactor authentication Account hijacking is a major threat vector",
    domain: 4
  },
  {
    id: 1031,
    text: "Amelia works for a medium-sized company as their lead information security manager. She has been working with the development and operations teams on their new application that they are building. They are building an application that will interact with their customers through the use of an Application Programming Interface (API). Due to the nature of the application, it has been decided that they will use SOAP. That means that the data must be formatted using which of the following?",
    options: ["Java Script Object Notation (JSON)", "Coffee Script Object Notation (CSON)", "YAML (YAML Ain’t Markup Language)", "eXtensible Markup Language (XML)"],
    answer: 3,
    explanation: "w application that they are building",
    domain: 4
  },
  {
    id: 1032,
    text: "Which of the following identifies vulnerabilities based on internal visibility into a running application?",
    options: ["SAST", "IAST", "DAST", "SCA"],
    answer: 1,
    explanation: "ng identifies vulnerabilities based on internal visibility into a running application? SAST IAST DAST SCA Correct Answer: B Explanation: Correct answer: IAST Some common tools for application security testing include:(ISC)2 CCSP Certified Cloud Security Professional Official Study Guide, 3rd Edition",
    domain: 4
  },
  {
    id: 1033,
    text: "If a cloud corporation that provides Infrastructure as a Service, Platform as a Service or Software as a Service, wishes to be listed on the Cloud Security Alliance Security Trust Assurance and Risk registry, they can then utilize which of these items?",
    options: ["Cloud Controls Matrix International", "Standards Organization 27001 General", "Data Protection Regulation Cloud", "Assessment Initiative Questionaire"],
    answer: 3,
    explanation: "ance Security Trust Assurance and Risk registry, they can then utilize which of these items? Cloud Controls Matrix International Standards Organization 27001 General Data Protection Regulation Cloud Assessment Initiative Questionaire Correct Answer: D Explanation: Correct answer: Cloud Assessment Initiative Questionnaire Cloud Assessment Initiative Questionnaire (CAIQ) is a list of questions based on the Cloud Controls Matrix that a company can answer to be listed on the CSA STAR registry at level 1",
    domain: 4
  },
  {
    id: 1034,
    text: "According to studies, the later in the software development phase errors are discovered, the more expensive it is to remedy them. What can be done to avert such problems?",
    options: ["Static code analysis techniques Secure", "Software Development Lifecycle (SSDLC) Interactive", "application security testing Dynamic", "code execution testing techniques"],
    answer: 1,
    explanation: "roblems? Static code analysis techniques Secure Software Development Lifecycle (SSDLC) Interactive application security testing Dynamic code execution testing techniques Correct Answer: B Explanation: Correct answer: Secure Software Development Lifecycle (SSDLC) Including security in the Software Development Lifecycle (SDLC) aids in the creation of secure software",
    domain: 4
  },
  {
    id: 1035,
    text: "What is the Application Security Verification Standard (ASVS) used for?",
    options: ["Verifying supply chain management Providing validation", "of secure coding Penetration testing", "of identity and access management", "Threat modeling of cloud systems"],
    answer: 1,
    explanation: "of cloud systems Correct Answer: B xmexam",
    domain: 4
  },
  {
    id: 1036,
    text: "Which of the following centralizes identity management for an organization?",
    options: ["MFA", "CASB", "IdP", "Federation"],
    answer: 2,
    explanation: "management for an organization? MFA CASB IdP Federation Correct Answer: C Explanation: Correct answer: IdP Identity and Access Management (IAM) is critical to application security",
    domain: 4
  },
  {
    id: 1037,
    text: "Gherorghe is working with the cloud operations department after a variety of strange behaviors have been seen in their Infrastructure as a Service (IaaS) environment. They are now looking for a tool or toolset that can help them identify fraudulent, illegal, or other undesirable behavior within their client-server datasets. What tool or toolset can provide assistance with this?",
    options: ["eXtensible Markup Language (XML) firewall", "Web Application Firewall (WAF) Application", "Programming Interface (API) gateway", "Database Activity Monitor (DAM)"],
    answer: 3,
    explanation: "t that can help them identify fraudulent, illegal, or other undesirable behavior within their client-server datasets",
    domain: 4
  },
  {
    id: 1038,
    text: "What can be accomplished by using federated identity?",
    options: ["Multifactor authentication can be required before granting access to resources.", "Organizations can apply their on-premises security policies to their cloud", "environments. Secrets can be centrally generated and managed. Resources can", "be shared with external users without requiring additional credentials."],
    answer: 3,
    explanation: "requiring additional credentials",
    domain: 4
  },
  {
    id: 1039,
    text: "Which of the following is used to identify vulnerabilities in an application's third-party dependencies?",
    options: ["IAST", "SCA", "DAST", "SAST"],
    answer: 1,
    explanation: "ng is used to identify vulnerabilities in an application's third-party dependencies? IAST SCA DAST SAST Correct Answer: B Explanation: Correct answer: SCA Some common tools for application security testing include:(ISC)2 CCSP Certified Cloud Security Professional Official Study Guide, 3rd Edition",
    domain: 4
  },
  {
    id: 1040,
    text: "When testing software, it is essential to ensure that it is not vulnerable to attacks that are both known and unknown. Known hardware and software weakness types are which of the following?",
    options: ["Are identified by Common Weakness Enumeration (CWE) scores based on the Common Weakness Scoring System (CWSS), which is a community developed project Are", "identified by Common Weakness Enumeration (CWE) scores based on the National Institute of Standards and Technology (NIST) Risk Management Framework (RMF), which is", "a community developed project Are identified by National Vulnerability Database (NVD) scores based on the Common Weakness Scoring System (CWSS), which is a community", "developed project Are identified by Common Vulnerabilities Enumeration (CVE) scores based on the Common Weakness Scoring System (CWSS), which is a community developed project"],
    answer: 0,
    explanation: "on Vulnerabilities Enumeration (CVE) scores based on the Common Weakness Scoring System (CWSS), which is a community developed project Correct Answer: A xmexam",
    domain: 4
  },
  {
    id: 1041,
    text: "A corporation is establishing a new access control setup for a contract that they have entered into. For this contract, they will authenticate their own users, and then the company that they are contracted to will authorize the users. Which technology do they need to accomplish this?",
    options: ["Kerberos Open", "Authentication Security", "Assertion Markup", "Language Federation"],
    answer: 3,
    explanation: "authenticate their own users, and then the company that they are contracted to will authorize the users",
    domain: 4
  },
  {
    id: 1042,
    text: "Which of the following scenarios demonstrates test-driven development in the SSDLC?",
    options: ["A development team runs user acceptance tests at the end of the coding phase. A development", "team uses third-party auditors to validate the application after certain development milestones are met. A development", "team creates well-defined test cases that test for security requirements throughout the development phase. A development", "team documents all aspects of the development process and communicates findings to all team members."],
    answer: 2,
    explanation: "velopment process and communicates findings to all team members",
    domain: 4
  },
  {
    id: 1043,
    text: "Wahib has noticed that there is an issue with one of the devices that is monitored by the Security Operation Center (SOC). In responding to an Indication of Compromise (IoC), he began to research the systems that may have been compromised. He then noticed that all the event logs on one of their devices had been completely wiped. Since there are no logs to complete the analysis on this one device, he is stuck being able to confirm the IoC as true or false. According to the STRIDE threat model, which type of threat is this?",
    options: ["Data loss", "Denial of", "service Spoofing", "identity Repudiation"],
    answer: 3,
    explanation: "vices that is monitored by the Security Operation Center (SOC)",
    domain: 4
  },
  {
    id: 1044,
    text: "What is the correct order of phases in the software development life cycle?",
    options: ["Requirements, Design, Testing, Development, Deployment, Operations & Management", "Design, Development, Testing, Deployment, Requirements, Operations & Management", "Design, Development, Requirements, Testing, Deployment, Operations & Management", "Requirements, Design, Development, Testing, Deployment, Operations & Management"],
    answer: 3,
    explanation: "evelopment, Testing, Deployment, Operations & Management Correct Answer: D Explanation: Correct answer: Requirements, Design, Development, Testing, Deployment, Operations & Management Following the correct SDLC phases helps integrate security into each stage of development rather than leaving it as an afterthought",
    domain: 4
  },
  {
    id: 1045,
    text: "Nyofu is working with the application developers on the migration of their applications from their data center to a Platform as a Service (PaaS) deployment. They are concerned with their ability to migrate their applications from their traditional data center over to the cloud. The term that they have heard from the Cloud Security Alliance is \"cloud ready.\" What concern do they have?",
    options: ["Transitioning between a traditional data center model and a cloud environment is typically a seamless, simple, and transparent process", "It is unlikely that controls or configurations work without reengineering or changing them to work in the cloud It", "is unlikely that an application from a traditional data center model can simply be picked up and dropped into", "a cloud environment Even legacy systems from traditional data centers are typically programmed to work within a cloud environment"],
    answer: 2,
    explanation: "trols or configurations work without reengineering or changing them to work in the cloud It is unlikely that an application from a traditional data center model can simply be picked up and dropped into a cloud environment Even legacy systems from traditional data centers are typically programmed to work within a cloud environment xmexam",
    domain: 4
  },
  {
    id: 1046,
    text: "What type of testing is performed during the maintenance phase of software development to guarantee that changes to the software program do NOT destroy existing functionality, introduce new vulnerabilities, or resurface previously resolved vulnerabilities?",
    options: ["Useability testing", "Regression testing", "Unit testing", "Integration testing"],
    answer: 1,
    explanation: "guarantee that changes to the software program do NOT destroy existing functionality, introduce new vulnerabilities, or resurface previously resolved vulnerabilities? Useability testing Regression testing Unit testing Integration testing Correct Answer: B Explanation: Correct answer: Regression testing This is a good definition of regression testing",
    domain: 4
  },
  {
    id: 1047,
    text: "Which of the following scenarios represents multifactor authentication?",
    options: ["A user logs in with a password and PIN. A", "user logs in with a PIN and security question. A", "user logs in with a fingerprint scan and facial recognition.", "A user logs in with a password and fingerprint scan."],
    answer: 3,
    explanation: "A user logs in with a password and fingerprint scan",
    domain: 4
  },
  {
    id: 1048,
    text: "Of the following, which uses known weaknesses and flows to verify that systems are properly hardened and then produces a report for management regarding discovered weaknesses?",
    options: ["Static Application Security Test", "(SAST) Runtime Application Security", "Protection (RASP) Vulnerability", "scanning Penetration testing"],
    answer: 2,
    explanation: "plication Security Test (SAST) Runtime Application Security Protection (RASP) Vulnerability scanning Penetration testing Correct Answer: C xmexam",
    domain: 4
  },
  {
    id: 1049,
    text: "Which of the following descriptions represents a waterfall approach to software development?",
    options: ["A development team completes each phase of development sequentially until the project is complete.", "A development team deploys code directly to production without formal testing phases. A development", "team uses continuous integration pipelines to deploy an application and deliver updates frequently. A", "development team iterates through phases of the project while responding to changing requirements."],
    answer: 0,
    explanation: "responding to changing requirements",
    domain: 4
  },
  {
    id: 1050,
    text: "A design firm wants to use a cloud file-sharing service. It wants to know how many users the service can support and at what price points. Which type of information should it ask the provider for?",
    options: ["Quality assurance", "Licensing Certification", "Service-level", "agreement"],
    answer: 1,
    explanation: "ers the service can support and at what price points",
    domain: 4
  },
  {
    id: 1051,
    text: "What is the PRIMARY responsibility that falls on customers of CSPs?",
    options: ["Managing performance metrics Alerting the", "CSP to outages Defining", "SLA terms Notifying the", "public about data breaches"],
    answer: 2,
    explanation: "utages Defining SLA terms Notifying the public about data breaches Correct Answer: C Explanation: Correct answer: Defining SLA terms Customers must understand what duties belong to them versus what the CSP manages",
    domain: 5
  },
  {
    id: 1052,
    text: "Yamin has been hired by a large pharmaceutical company as their Information Security Manager. She has been working with the Information Technology department on their self-managed private cloud data center. They are going to add 200 servers to their data center this coming weekend. Which management process is concerned with adding these new devices?",
    options: ["Change management", "Release management", "Continuity management", "Deployment management"],
    answer: 3,
    explanation: "Technology department on their self-managed private cloud data center",
    domain: 5
  },
  {
    id: 1053,
    text: "Which of the following attributes of evidence relates to supporting a certain conclusion?",
    options: ["Convincing", "Admissible", "Authentic", "Accurate"],
    answer: 0,
    explanation: "porting a certain conclusion? Convincing Admissible Authentic Accurate Correct Answer: A Explanation: Correct answer: Convincing Typically, digital forensics is performed as part of an investigation or to support a court case",
    domain: 5
  },
  {
    id: 1054,
    text: "Which type of infrastructure element includes monitoring link up and link down status?",
    options: ["Memory", "Network", "Compute", "Storage"],
    answer: 1,
    explanation: "toring link up and link down status? Memory Network Compute Storage Correct Answer: B Explanation: Correct answer: Network Monitoring link up and link down status is a core function of network infrastructure management, as it provides visibility into connectivity, potential outages, and performance issues",
    domain: 5
  },
  {
    id: 1055,
    text: "Which of the following actions typically occurs on the management plane of a CSP?",
    options: ["Transferring encrypted data between on-premises and the", "cloud Monitoring CPU usage in real time", "Patching a VM Scheduling a resource", "to start at a specific time"],
    answer: 3,
    explanation: "atching a VM Scheduling a resource to start at a specific time Correct Answer: D Explanation: Correct answer: Scheduling a resource to start at a specific time The management plane is where administrative functions and orchestration of cloud resources occur, making it a key point of control and risk",
    domain: 5
  },
  {
    id: 1056,
    text: "Which VPN protocol is often built into Microsoft and Apple devices and uses Diffie Hellman to calculate shared session keys?",
    options: ["OpenVPN Openswan", "SSL VPN", "IKEV2/IPSec", "VPN"],
    answer: 3,
    explanation: "evices and uses Diffie Hellman to calculate shared session keys? OpenVPN Openswan SSL VPN IKEV2/IPSec VPN Correct Answer: D Explanation: Correct answer: IKEV2/ IPSEC VPN Internet Key Exchange v2 and IPsec (IKEV2/ IPSec) virtual private network (VPN) is a popular VPN protocol that is found in many Microsoft and Apple devices",
    domain: 5
  },
  {
    id: 1057,
    text: "When a company is worried about their website being spoofed by a bad actor, for example, a bank is worried that their users will be redirected to a bad actor's website, they need to concern themselves with Domain Name Service Security (DNSSEC). What feature of DNSSEC helps customers know they are connecting to their bank and not a bad actor's version?",
    options: ["Encrypting the DNS record for confidentiality and providing proof of the source of the record", "Encrypting the DNS record for confidentiality purposes to protect the source of the record Protecting", "the availability of DNS information with a second record that the first can be validated", "against Having the DNS record digitally signed to prove the source of the record"],
    answer: 3,
    explanation: "f the source of the record Encrypting the DNS record for confidentiality purposes to protect the source of the record Protecting the availability of DNS information with a second record that the first can be validated against Having the DNS record digitally signed to prove the source of the record Correct Answer: D xmexam",
    domain: 5
  },
  {
    id: 1058,
    text: "Which procedure in problem management is used to understand the underlying reason an incident occurred?",
    options: ["Gap analysis Root", "cause analysis Threat", "analysis Business", "impact analysis"],
    answer: 1,
    explanation: "occurred? Gap analysis Root cause analysis Threat analysis Business impact analysis Correct Answer: B Explanation: Correct answer: Root cause analysis Root causes analysis investigates the fundamental reason an incident occurred to identify the true source",
    domain: 5
  },
  {
    id: 1059,
    text: "Yamin works for a Cloud Service Provider (CSP) as a technician in one of their data centers. She has been setting up the Fibre Channel equipment over the last week. What part of the cloud is she building?",
    options: ["Storage", "Cabeling", "Network", "Compute"],
    answer: 0,
    explanation: "ers",
    domain: 5
  },
  {
    id: 1060,
    text: "Which of the following activities is a primary function of a security operations center (SOC)?",
    options: ["Performing third-party security audits Developing security", "policies for the organization Recovering systems", "after a cybersecurity incident Monitoring", "firewalls and network security groups"],
    answer: 3,
    explanation: "r a cybersecurity incident Monitoring firewalls and network security groups Correct Answer: D Explanation: Correct answer: Monitoring firewalls and network security groups SOCs are a central component of continuous monitoring and protection in both cloud and hybrid environments",
    domain: 5
  },
  {
    id: 1061,
    text: "At which stage of an incident should the IRT ensure that documentation is complete and perform a root cause analysis?",
    options: ["Analyze", "Recover", "Respond", "Post-incident"],
    answer: 3,
    explanation: "documentation is complete and perform a root cause analysis? Analyze Recover Respond Post-incident Correct Answer: D Explanation: Correct answer: Post-incident An incident response plan (IRP) should lay out the steps that the incident response team (IRT) should carry out during each step of the incident management process",
    domain: 5
  },
  {
    id: 1062,
    text: "Which step of the NIST incident response life cycle occurs BEFORE incident detection?",
    options: ["Preparation", "Mitigation", "Analysis", "Containment"],
    answer: 0,
    explanation: "RE incident detection? Preparation Mitigation Analysis Containment Correct Answer: A Explanation: Correct answer: Preparation Preparation occurs before detection and includes building incident response policies, training staff, acquiring tools, and ensuring systems are ready to handle incidents",
    domain: 5
  },
  {
    id: 1063,
    text: "A security engineer at Acme Inc. is monitoring network traffic and notices a large number of unusual requests transmitted over UDP port 53. Given the information provided, what type of service is an attacker MOST LIKELY attempting to compromise or exploit?",
    options: ["DNS", "FTP", "DHCP", "TFTP"],
    answer: 0,
    explanation: "at Acme Inc",
    domain: 5
  },
  {
    id: 1064,
    text: "Which of the following security concerns is MOST relevant when using a Type 1 hypervisor?",
    options: ["Hypervisor configuration settings Virtual machine sprawl Guest operating system", "configuration settings", "Host operating", "system patches"],
    answer: 0,
    explanation: "operating system configuration settings Host operating system patches Correct Answer: A Explanation: Correct answer: Hypervisor configuration settings A Type 1 hypervisor runs directly on the hardware without a host operating system, so its security depends heavily on proper configuration of the hypervisor itself",
    domain: 5
  },
  {
    id: 1065,
    text: "A cloud architect at Acme Cloud Services Inc. is helping with the creation of customer facing SLAs. Which of the following statements about SLAs is FALSE?",
    options: ["SLAs may include notification deadlines for security incidents, planned maintenance, and", "similar events SLAs are negotiated with the CSP and are", "individual to the customer Defining SLA terms is a key", "responsibility of cloud customers Minimum uptime is a common SLA"],
    answer: 1,
    explanation: "the CSP and are individual to the customer Defining SLA terms is a key responsibility of cloud customers Minimum uptime is a common SLA Correct Answer: B Explanation: Correct answer: SLAs are negotiated with the CSP and are individual to the customer Service Level Agreements (SLAs) are agreements between a service provider and a customer on performance metrics such as uptime",
    domain: 5
  },
  {
    id: 1066,
    text: "Which type of device can provide the MOST immediate and definitive proof that a malicious actor is present in a network?",
    options: ["Intrusion detection", "system Honeypot", "Network security", "group Firewall"],
    answer: 1,
    explanation: "trusion detection system Honeypot Network security group Firewall Correct Answer: B xmexam",
    domain: 5
  },
  {
    id: 1067,
    text: "Which aspect of digital forensics aims to provide nonrepudiation to evidence management?",
    options: ["Chain of custody", "Volatile data", "collection E-discovery", "Legal hold"],
    answer: 0,
    explanation: "ent? Chain of custody Volatile data collection E-discovery Legal hold Correct Answer: A Explanation: Correct answer: Chain of custody Maintaining a verifiable record of evidence handling ensures accountability and prevents disputes over the authenticity of cloud-based evidence",
    domain: 5
  },
  {
    id: 1068,
    text: "Sehaj is building a new server-based Platform as a Service (PaaS) Virtual Machine (VM). As a customer, he is concerned if the VM will be able to expand to match the needs of the users as the days go by. Which tool should he be interested in to ensure the VM is placed on the most suitable server?",
    options: ["High availability Distributed", "resource scheduling", "Dynamic optimization", "Maintenance mode"],
    answer: 2,
    explanation: "al Machine (VM)",
    domain: 5
  },
  {
    id: 1069,
    text: "Your company is looking for a way to ensure that their most critical servers are online when needed. They are exploring the options that their Platform as a Service (PaaS) cloud provider can offer them. The one that they are most interested in has the highest level of availability possible. After a cost-benefit analysis based on their threat assessment, they think that this will be the best option. The cloud provider describes the option as a grouping of resources with a coordinating software agent that facilitates communication, resource sharing, and routing of tasks. What term matches this option?",
    options: ["Server cluster", "Storage controller", "Server redundancy", "Security group"],
    answer: 0,
    explanation: "e options that their Platform as a Service (PaaS) cloud provider can offer them",
    domain: 5
  },
  {
    id: 1070,
    text: "Sa'id is working on configuring the cloud environment for his company. He works for a multinational bank that has offices in the USA, India, and Europe primarily. They have been working within their own datacenters and are not migrating to a public cloud provider. As the number of attacks continues to rise and the number of laws they must be in compliance with increases, he is looking for a security tool to add to the cloud environment. They are building an Infrastructure as a Service (IaaS) environment and have already added their first Network Security Group (NSG). Now he is looking for the next tool to add that would give them information regarding any suspicious activity about a particular cluster of servers. Which tool would work the best for that?",
    options: ["Honeypot Network Intrusion Detection", "System (NIDS) Network Intrusion", "Prevention System (NIPS) Host", "Intrusion Detection System (HIDS)"],
    answer: 1,
    explanation: "thin their own datacenters and are not migrating to a public cloud provider",
    domain: 5
  },
  {
    id: 1071,
    text: "An information security manager has been working with the Security Operations Center (SOC) to prepare plans and put processes in place that will allow the impact of something like ransomware to be minimized if/when it does occur. What type of management process is this engineer involved in?",
    options: ["Deployment management", "Change management", "Problem management", "Incident management"],
    answer: 3,
    explanation: "are plans and put processes in place that will allow the impact of something like ransomware to be minimized if/when it does occur",
    domain: 5
  },
  {
    id: 1072,
    text: "Which process in forensic data collection reduces the likelihood that data on a disk is not altered while copies are being made?",
    options: ["Hashing Imaging Verifying", "physical custody", "records Documenting", "running apps"],
    answer: 1,
    explanation: "ered while copies are being made? Hashing Imaging Verifying physical custody records Documenting running apps Correct Answer: B Explanation: Correct answer: Imaging Proper forensic handling ensures that evidence gathered from cloud systems remains admissible in legal proceedings",
    domain: 5
  },
  {
    id: 1073,
    text: "Which infrastructure element is monitored in terms of performance by measuring input/output operations per second?",
    options: ["Storage", "Power", "Compute", "Network"],
    answer: 0,
    explanation: "output operations per second? Storage Power Compute Network Correct Answer: A xmexam",
    domain: 5
  },
  {
    id: 1074,
    text: "The cloud administrators and operators working for a large Platform as a Service (PaaS) customer have thousands of running virtual machines that they need to take care of. It is necessary to ensure that all the virtual machines running specific operating systems (OS) and applications are always patched and configured properly. They use a tool that automates tasks such as provisioning, scaling, and allocating resources in their cloud environment. What is this tool called?",
    options: ["Orchestration Dynamic Optimization", "(DO) Distributed Resource", "Scheduling (DRS)", "Patch management"],
    answer: 0,
    explanation: "running virtual machines that they need to take care of",
    domain: 5
  },
  {
    id: 1075,
    text: "Which of the following is NOT one of the critical elements of a management plane?",
    options: ["Monitoring", "Maintenance", "Scheduling", "Orchestration"],
    answer: 0,
    explanation: "agement plane? Monitoring Maintenance Scheduling Orchestration Correct Answer: A Explanation: Correct answer: Monitoring According to the CCSP, the three critical elements of a management plane are scheduling, orchestration, and maintenance",
    domain: 5
  },
  {
    id: 1076,
    text: "Which of the following types of operational controls and standards is designed to PREVENT systems from breaking due to poorly-managed updates?",
    options: ["Change Management", "Configuration Management", "Release Management", "Deployment Management"],
    answer: 0,
    explanation: "breaking due to poorly-managed updates? Change Management Configuration Management Release Management Deployment Management Correct Answer: A Explanation: Correct answer: Change Management Standards such as the Information Technology Infrastructure Library (ITIL) and International Organization for Standardization/International Electrotechnical Commission (ISO/IEC) 20000-1 define operational controls and standards, including:The Official (ISC)² CCSP CBK Reference, 4th Edition",
    domain: 5
  },
  {
    id: 1077,
    text: "A company using Platform as a Service (PaaS) has discovered that their computing environment has gotten very complex. They are looking for a technology that will assist them in managing the deployment and provisioning of all the resources that they now have. Which technology can this organization implement to assist the administrators in a more agile and efficient manner than manual management?",
    options: ["Management plane Dynamic", "host configuration", "protocol Orchestration", "Measured service"],
    answer: 2,
    explanation: "a technology that will assist them in managing the deployment and provisioning of all the resources that they now have",
    domain: 5
  },
  {
    id: 1078,
    text: "A media company has a hybrid cloud that involves some servers in their data center that utilize the virtualization of the cloud to create a recoverable and redundant environment. With that private cloud functionality, they also use a public cloud provider for their data storage. They have just discovered an indicator of compromise (IaC) within their servers. It appears that a threat actor has infiltrated and has been copying their data and then altering and deleting what they leave behind. What security appliance and features will be MOST useful to the team in determining the specific steps the threat actor took?",
    options: ["An IPS and its detection, correlation, and blocking features", "An IDS with its detection, alerting, and correlation features", "An SIEM with its centralization, correlation, and blocking features", "A SIEM and its centralization, correlation, and detection features"],
    answer: 3,
    explanation: "cator of compromise (IaC) within their servers",
    domain: 5
  },
  {
    id: 1079,
    text: "A cloud security professional has been tasked with creating a logical network segregation and isolation of systems in a cloud environment. The systems that they need to isolate include a server and a database. The corporation wants these systems to be highly isolated with a custom security appliance that controls traffic on a granular basis protecting them. Which networking concept can be used to achieve this?",
    options: ["Microsegmentation VPN", "Hypersegmentation", "Virtualized", "networking"],
    answer: 0,
    explanation: "egation and isolation of systems in a cloud environment",
    domain: 5
  },
  {
    id: 1080,
    text: "An organization is using a VM from a CSP and needs to perform regular snapshot backups that include data in memory. The hypervisor the CSP uses is not configured for this type of action by a VM. What solution can be implemented to address this?",
    options: ["Deploy a cloud-based backup service. Switch to", "a type 2 hypervisor. Install a", "guest operating system virtualization toolset. Use", "disk replication to another virtual machine."],
    answer: 2,
    explanation: "",
    domain: 5
  },
  {
    id: 1081,
    text: "An organization experienced a cybersecurity event in which the attacker was able to cover their tracks by modifying log files. Which of the following techniques should the organization implement to avoid this type of log file manipulation in the future?",
    options: ["Jump server Write", "once read many", "Hardware monitoring", "Log rotation"],
    answer: 1,
    explanation: "iles",
    domain: 5
  },
  {
    id: 1082,
    text: "Communication is critical and necessary between parties, even more so when it comes to IT cloud services. What role supports selecting, deploying, and managing cloud services to simplify cloud service adoption?",
    options: ["Cloud service broker", "Cloud regulator Cloud", "product vendor Cloud", "service provider"],
    answer: 0,
    explanation: "ices",
    domain: 5
  },
  {
    id: 1083,
    text: "Your cloud environment has changed significantly during the last year. Several of these adjustments resulted in service interruptions. You'll want to develop a mechanism to track these modifications with information to be prepared to roll back to the former setup if necessary. What type of tool can be used to assist you?",
    options: ["Problem management", "Release management", "Capacity management", "Configuration management"],
    answer: 3,
    explanation: "sulted in service interruptions",
    domain: 5
  },
  {
    id: 1084,
    text: "According to the ITIL framework, which term is used for the cause of an incident?",
    options: ["Misconfiguration", "Workaround", "Problem", "Event"],
    answer: 2,
    explanation: "n Workaround Problem Event Correct Answer: C xmexam",
    domain: 5
  },
  {
    id: 1085,
    text: "How is a hardware security module (HSM) different from a Trusted Platform Module (TPM)?",
    options: ["A TPM can store private keys, while an HSM can only store public keys. A TPM", "cannot be added or removed from a system, while an HSM can be added as an", "expansion card. A TPM can work only on-premises, while an HSM is designed to work natively", "in the cloud. A TPM can generate keys, while an HSM can only store keys."],
    answer: 1,
    explanation: "he cloud",
    domain: 5
  },
  {
    id: 1086,
    text: "Dion is working with the operation team to deploy security tools within the cloud. They are looking for something that could detect, identify, isolate, and analyze an attack by distracting them. What would you recommend?",
    options: ["Honeypot Network Security", "Group (NSG) Firewall", "Intrustion Detection", "System (IDS)"],
    answer: 0,
    explanation: "ntify, isolate, and analyze an attack by distracting them",
    domain: 5
  },
  {
    id: 1087,
    text: "Jorge is working with a cloud provider in their data center. This data center has 1,240 servers using hypervisor type 1 to provide Infrastructure as a Service (IaaS) and Platform as a Service (PaaS) to their customers. In addition to the servers, they have routers, switches, firewalls, and a Storage Area Network (SAN). They have Uninterruptible Power Supplies (UPS) and generators to maintain power to the server racks if there's a power outage. To supply fuel to the generators, they also have full fuel tanks. To ensure that their data center does not overheat, they also have chillers and cooling units. What tier data center is this?",
    options: ["Tier 3", "Tier 4", "Tier 2", "Tier 1"],
    answer: 2,
    explanation: ",240 servers using hypervisor type 1 to provide Infrastructure as a Service (IaaS) and Platform as a Service (PaaS) to their customers",
    domain: 5
  },
  {
    id: 1088,
    text: "A cloud architect is designing the connection between the public cloud Infrastructure as a Service (IaaS) that they are building and their existing data center. They need to ensure that the traffic that flows across the cloud carrier is protected for confidentiality purposes. Which protocol can be used to accomplish this?",
    options: ["Internet Protocol (IPsec) Transport", "Layer Security (TLS) Secure", "Shell (SSH) Domain Name", "System Security (DNSSec)"],
    answer: 0,
    explanation: "ed to ensure that the traffic that flows across the cloud carrier is protected for confidentiality purposes",
    domain: 5
  },
  {
    id: 1089,
    text: "What is one of the main reasons for using a cloud provider's hardware security module (HSM)?",
    options: ["To execute code in a secure, reserved area", "of a processor To store cryptographic keys To", "provide real-time monitoring of suspicious or unusual activity", "To securely manage authorization of hardware resources"],
    answer: 1,
    explanation: "e authorization of hardware resources Correct Answer: B xmexam",
    domain: 5
  },
  {
    id: 1090,
    text: "Kody has been working with technicians in the Security Operation Center (SOC) to resolve an issue that has just occurred. Three of the cloud providers' biggest customers have experienced a Denial of Service (DoS). It appears that there is an issue with the configuration of the Dynamic Optimization (DO) functionality. Kody is worried that this could occur again in the future, so she wants to uncover the root cause in their investigation. What would this process be called?",
    options: ["Incident management Problem", "management Release and", "deployment management", "Change management"],
    answer: 1,
    explanation: "ders' biggest customers have experienced a Denial of Service (DoS)",
    domain: 5
  },
  {
    id: 1091,
    text: "Which activity in the management plane relates to automation of processes and workloads?",
    options: ["Orchestration", "Maintenance", "Scheduling", "Monitoring"],
    answer: 0,
    explanation: "cesses and workloads? Orchestration Maintenance Scheduling Monitoring Correct Answer: A Explanation: Correct answer: Orchestration Orchestration focuses on the automation of complex workflows and processes",
    domain: 5
  },
  {
    id: 1092,
    text: "Using the AWS Shared Responsibility Model, a CSP is responsible for what?",
    options: ["Data in transit Data", "at rest Security of", "the cloud Security", "in the cloud"],
    answer: 2,
    explanation: "Data in transit Data at rest Security of the cloud Security in the cloud Correct Answer: C Explanation: Correct answer: Security of the cloud The AWS Shared Responsibility model indicates that the cloud service provider (CSP) ― AWS in this case ― is responsible for the security of the cloud, while the cloud service customer (CSC) is responsible for security in the cloud",
    domain: 5
  },
  {
    id: 1093,
    text: "Managing the automation of CI/CD pipelines to support Agile and DevOps practices falls under which of the following?",
    options: ["Deployment Management", "Release Management", "Change Management", "Configuration Management"],
    answer: 0,
    explanation: "he following? Deployment Management Release Management Change Management Configuration Management Correct Answer: A Explanation: Correct answer: Deployment Management Standards such as the Information Technology Infrastructure Library (ITIL) and International Organization for Standardization/International Electrotechnical Commission (ISO/IEC) 20000-1 define operational controls and standards, including:The Official (ISC)² CCSP CBK Reference, 4th Edition",
    domain: 5
  },
  {
    id: 1094,
    text: "Mutual due diligence and security reviews are MOST likely when setting up a relationship with which of the following?",
    options: ["Regulators", "Vendors", "Partners", "Customers"],
    answer: 2,
    explanation: "which of the following? Regulators Vendors Partners Customers Correct Answer: C xmexam",
    domain: 5
  },
  {
    id: 1095,
    text: "You are working with the Information Technology (IT) manager to establish a secure storage technology within their Infrastructure as a Service (IaaS) environment that they are building within their new virtual datacenter. They are worried that the data needs to be accessible within a short amount of time so that the users can perform the tasks that they need to do for their jobs. The users regularly access large amounts of data for analysis. What technology should they use to enable access to the data?",
    options: ["Fibre Channel Software Defined", "Network (SDN) Hardware Security", "Manager (HSM) Content", "Distribution Network (CDN)"],
    answer: 0,
    explanation: "s a Service (IaaS) environment that they are building within their new virtual datacenter",
    domain: 5
  },
  {
    id: 1096,
    text: "What is a bastion host?",
    options: ["A physical security control that prevents unauthorized users from accessing systems in a rack An optimized", "template for building secure systems A hardened system used for administrative access that is accessible from", "untrusted networks A device used to lure attackers so that their techniques can be monitored and", "analyzed"],
    answer: 2,
    explanation: "monitored and analyzed Correct Answer: C Explanation: Correct answer: A hardened system used for administrative access that is accessible from untrusted networks A bastion host is a hardened system specifically designed to withstand attacks and act as a controlled entry point for administrators",
    domain: 5
  },
  {
    id: 1097,
    text: "Which of the following is NOT considered one of the three main building blocks for a cloud environment's management plan?",
    options: ["Orchestration Maintenance", "Rapid", "elasticity", "Scheduling"],
    answer: 2,
    explanation: "locks for a cloud environment's management plan? Orchestration Maintenance Rapid elasticity Scheduling Correct Answer: C Explanation: Correct answer: Rapid elasticity Rapid elasticity is a concept that exists in cloud computing referring to the ability to quickly add more resources when necessary",
    domain: 5
  },
  {
    id: 1098,
    text: "Jia is working on the DevSecOps team as the information security professional. The developers are in the planning stage of the application and are working on the Application Programming Interface (API). The API protocol of choice is REpresentation State Transfer (REST). It is important to ensure that the communication between the applications is protected from prying eyes. How would this be done?",
    options: ["Rivest Shamir Adelman (RSA)", "Message Digest 5 (MD5)", "Internet Protocol Security (IPSec)", "Transport Layer Security (TLS)"],
    answer: 3,
    explanation: "on and are working on the Application Programming Interface (API)",
    domain: 5
  },
  {
    id: 1099,
    text: "What is a unique consideration for patch management of virtual machines (VMs) as opposed to dedicated systems?",
    options: ["VMs need to be patched as soon as the patch is", "made available. VMs need a method to roll back a failed patch. VMs", "may miss patches because they are not always deployed. VMs need to test", "patches fully before using them in deployment."],
    answer: 2,
    explanation: "to test patches fully before using them in deployment",
    domain: 5
  },
  {
    id: 1100,
    text: "Which attribute of digital forensic evidence means it can be used in a court of law?",
    options: ["Convincing", "Admissible", "Complete", "Accurate"],
    answer: 1,
    explanation: "e used in a court of law? Convincing Admissible Complete Accurate Correct Answer: B Explanation: Correct answer: Admissible Evidence collected from cloud systems must meet legal standards to be used in investigations or litigation",
    domain: 5
  },
  {
    id: 1101,
    text: "Which organizational unit is responsible for handling tactical and operational security tasks?",
    options: ["Security operations center", "Stakeholders Governance", "board Incident", "response team"],
    answer: 0,
    explanation: "rity operations center Stakeholders Governance board Incident response team Correct Answer: A Explanation: Correct answer: Security operations center A security operations center, or SOC, is the centralized unit that manages tactical and operational tasks such as monitoring logs, detecting anomalies, and responding to security events",
    domain: 5
  },
  {
    id: 1102,
    text: "An organization wants to filter all administrative connections to servers through a single highly secured system. Which term describes this system?",
    options: ["Clustered host", "Proxy server", "Jumpbox Virtual", "client"],
    answer: 2,
    explanation: "ers through a single highly secured system",
    domain: 5
  },
  {
    id: 1103,
    text: "Which of the following domains related to ITIL and International Standards Organization (ISO) 20000-1 is used to ensure that new software or hardware that is added to a production environment will be effective?",
    options: ["Service-level management", "Deployment management", "Release management", "Incident management"],
    answer: 1,
    explanation: "used to ensure that new software or hardware that is added to a production environment will be effective? Service-level management Deployment management Release management Incident management Correct Answer: B Explanation: Correct answer: Deployment management Standards such as the Information Technology Infrastructure Library (ITIL) and International Organization for Standardization/International Electrotechnical Commission (ISO/IEC) 20000-1 define operational controls and standards, including:The Official (ISC)² CCSP CBK Reference, 4th Edition",
    domain: 5
  },
  {
    id: 1104,
    text: "Which type of backup system is frequently used with guest operating systems in virtual machines to restore them to a specific state or to serve as a baseline?",
    options: ["Journal", "Incremental", "Differential", "Snapshot"],
    answer: 3,
    explanation: "rating systems in virtual machines to restore them to a specific state or to serve as a baseline? Journal Incremental Differential Snapshot Correct Answer: D Explanation: Correct answer: Snapshot A snapshot captures the entire state of a virtual machine (VM), including memory, disk, and configuration, allowing administrators to roll the VM back to that exact state or use it as a reference baseline",
    domain: 5
  },
  {
    id: 1105,
    text: "What can tools such as VMware Tools or Amazon’s paravirtual drivers for Windows enable?",
    options: ["Virtualized Trusted Platform Module (TPM) for guest", "operating systems Distributed denial-of-service protection Improved", "functionality for virtualized operating systems Automated", "firmware patching for Type 1 hypervisors"],
    answer: 2,
    explanation: "operating systems Automated firmware patching for Type 1 hypervisors Correct Answer: C Explanation: Correct answer: Improved functionality for virtualized operating systems Tools such as VMware Tools or Amazon’s paravirtual drivers add optimized drivers and utilities that improve performance, allow better device integration, and enhance communication between guest operating systems and the hypervisor",
    domain: 5
  },
  {
    id: 1106,
    text: "Which of the following activities is typically carried out in release management?",
    options: ["Identifying whether all changes set to be released have passed the", "required tests Implementing security controls in all phases of the software", "development life cycle Determining the root cause of issues that are", "causing bugs in released software Monitoring application performance after deployment"],
    answer: 0,
    explanation: "rformance after deployment Correct Answer: A xmexam",
    domain: 5
  },
  {
    id: 1107,
    text: "In IaaS, which party is responsible for the availability of guest operating systems?",
    options: ["End-users Cloud", "service provider", "Consumer Third-party", "auditor"],
    answer: 2,
    explanation: "ms? End-users Cloud service provider Consumer Third-party auditor Correct Answer: C Explanation: Correct answer: Consumer Clearly defining the responsibilities of the provider and consumer is essential to ensuring system availability, patching, and compliance",
    domain: 5
  },
  {
    id: 1108,
    text: "An organization has implemented N+1 redundancy. According to the Uptime Institute, which HA Tier is it operating at?",
    options: ["Tier 2", "Tier 1", "Tier 4", "Tier 3"],
    answer: 3,
    explanation: "which HA Tier is it operating at? xmexam",
    domain: 5
  },
  {
    id: 1109,
    text: "Which of the following SOC duties involves continuous monitoring and investigation?",
    options: ["Threat Detection", "Threat Prevention", "Incident Management", "Quality Assurance"],
    answer: 0,
    explanation: "etection Threat Prevention Incident Management Quality Assurance Correct Answer: A Explanation: Correct answer: Threat Detection The security operations center (SOC) is responsible for managing an organization’s cybersecurity",
    domain: 5
  },
  {
    id: 1110,
    text: "What is the MAIN concern of ISO 22301:2019?",
    options: ["Information security management", "Business continuity", "Change management", "Disaster recovery"],
    answer: 1,
    explanation: "wer: B xmexam",
    domain: 5
  },
  {
    id: 1111,
    text: "Which of the following can be used on the network to stop attacks automatically when a pattern of packets that is indicative of an attack has been detected?",
    options: ["Packet filtering", "firewall DIM", "NIPS", "NIDS"],
    answer: 2,
    explanation: "ttacks automatically when a pattern of packets that is indicative of an attack has been detected? Packet filtering firewall DIM NIPS NIDS Correct Answer: C Explanation: Correct answer: IPS A Network Intrusion Prevention System (NIPS) is placed at the network level",
    domain: 5
  },
  {
    id: 1112,
    text: "You are a cloud administrator and are configuring live migration for a Virtual Machine (VM). What does live migration provide?",
    options: ["Trusted Platform Module", "Redundant hardware", "Fault tolerance", "Data replication"],
    answer: 2,
    explanation: "l Machine (VM)",
    domain: 5
  },
  {
    id: 1113,
    text: "What is needed in release management to ensure a release can be reversed if it has a negative impact?",
    options: ["Automated testing", "Rollback process", "Post-implementation review", "Manual scheduling"],
    answer: 1,
    explanation: "s Post-implementation review Manual scheduling xmexam",
    domain: 5
  },
  {
    id: 1114,
    text: "Which type of entity often has a level of access to an organization's resources that is similar to what the organization's employees have?",
    options: ["Partners", "Customers", "Regulators", "Vendors"],
    answer: 0,
    explanation: "ganization's resources that is similar to what the organization's employees have? Partners Customers Regulators Vendors Correct Answer: A Explanation: Correct answer: Partners Outside entities with elevated access can become a major risk vector if not managed properly",
    domain: 5
  },
  {
    id: 1115,
    text: "An auditor performing a manual audit pulls a registry file from a sample of windows servers and compares it to a baseline. Where would they be pulling the baseline from?",
    options: ["Configuration Management DataBase (CMDB) Code", "repository Information Security Management", "System (ISMS) Security Information", "& Event Manager (SIEM)"],
    answer: 0,
    explanation: "com Configuration Management DataBase (CMDB) Code repository Information Security Management System (ISMS) Security Information & Event Manager (SIEM) Correct Answer: A Explanation: Correct answer: Configuration Management DataBase (CMDB) The organization's Configuration Management DataBase (CMDB) should capture all Configuration Items (CIs) that have been placed under configuration management",
    domain: 5
  },
  {
    id: 1116,
    text: "Paul is working for a cloud provider and is responsible for a particular aspect of that data center. He works to ensure that the required system resources needed to deliver performance exist within the data center. He also must ensure that this is done in a cost-effective manner. Which management practice covers these aspects of managing data centers?",
    options: ["Release management", "Availability management", "Capacity management", "Configuration management"],
    answer: 2,
    explanation: "m resources needed to deliver performance exist within the data center",
    domain: 5
  },
  {
    id: 1117,
    text: "A security analyst at Acme Inc. wants to investigate techniques threat actors will use to attempt to breach the company's servers. Which of the following would be BEST for helping to collect data?",
    options: ["Configure a bastion host", "Run a Shodan scan", "Review a malware database", "Deploy a honeypot"],
    answer: 3,
    explanation: "h the company's servers",
    domain: 5
  },
  {
    id: 1118,
    text: "At which datacenter tier, as defined by the Uptime Institute, does an organization achieve fault tolerance?",
    options: ["Tier 5", "Tier 4", "Tier 3", "Tier 1"],
    answer: 1,
    explanation: "defined by the Uptime Institute, does an organization achieve fault tolerance? Tier 5 Tier 4 Tier 3 Tier 1 Correct Answer: B Explanation: Correct answer: Tier 4 The Uptime Institute defines four tiers of redundancy for high availability (Tier 5 is not a valid tier)",
    domain: 5
  },
  {
    id: 1119,
    text: "A manufacturing company has been using a legacy server to control some equipment. An administrator decides to upgrade the systems to the latest operating systems. Subsequently, the upgraded system will not run the applications it needs to perform its functions. Which process could have prevented this situation?",
    options: ["Configuration management", "Change management", "Patch management", "Release management"],
    answer: 1,
    explanation: "decides to upgrade the systems to the latest operating systems",
    domain: 5
  },
  {
    id: 1120,
    text: "In log management, what defines which categories of events are and are NOT written into logs?",
    options: ["Retention level", "Quality level", "Clipping level", "Transparency level"],
    answer: 2,
    explanation: "into logs? Retention level Quality level Clipping level Transparency level Correct Answer: C Explanation: Correct answer: Clipping level Many systems and apps allow you to customize what data is written to log files based on the importance of the data",
    domain: 5
  },
  {
    id: 1121,
    text: "When developing a Business Continuity Plan (BCP) or a Disaster Recovery Plan (DRP), which of the following can be done to identify which systems are the MOST important?",
    options: ["Business impact analysis", "Annual rate of", "occurrence Vulnerability assessment", "Risk assessment"],
    answer: 0,
    explanation: "e the MOST important? Business impact analysis Annual rate of occurrence Vulnerability assessment Risk assessment Correct Answer: A xmexam",
    domain: 5
  },
  {
    id: 1122,
    text: "Resource pooling in cloud environments has the MOST significant impact on which of the following?",
    options: ["Capacity Management", "Availability Management", "Problem Management", "Continuity Management"],
    answer: 0,
    explanation: "ty Management Availability Management Problem Management Continuity Management Correct Answer: A Explanation: Correct answer: Capacity Management Standards such as the Information Technology Infrastructure Library (ITIL) and International Organization for Standardization/International Electrotechnical Commission (ISO/IEC) 20000-1 define operational controls and standards, including:The Official (ISC)² CCSP CBK Reference, 4th Edition",
    domain: 5
  },
  {
    id: 1123,
    text: "You work as a system administrator for a medium-sized company that has recently migrated its data storage and backup infrastructure to the cloud. As part of your responsibilities, you are tasked with ensuring the proper backup of critical data in the cloud environment. You need to design a robust backup strategy for the company's data stored in the cloud. Which of the following needs to be addressed?",
    options: ["Backup frequency, labeling, redundancy, disaster recovery procedures Backup frequency,", "retention periods, redundancy, disaster recovery procedures Backup frequency,", "retention periods, redundancy, system health data Backup frequency,", "retention periods, maximum tolerable downtime, disaster recovery procedures"],
    answer: 1,
    explanation: "of the following needs to be addressed? xmexam",
    domain: 5
  },
  {
    id: 1124,
    text: "Sasha, a DevOps engineer at Acme Inc., is configuring Infrastructure as a Service (IaaS) virtual servers. Sasha has configured servers in a way that the workload will be distributed evenly between multiple servers using logic defined in agents deployed on the servers. What term BEST describes the configuration?",
    options: ["Resilience High", "performance", "IaC", "Clustering"],
    answer: 3,
    explanation: "ucture as a Service (IaaS) virtual servers",
    domain: 5
  },
  {
    id: 1125,
    text: "Which type of attack can result from an improperly configured DHCP server?",
    options: ["Man-in-the-middle", "Credential stuffing", "Pass-the-hash", "VM sprawl"],
    answer: 0,
    explanation: "HCP server? Man-in-the-middle Credential stuffing Pass-the-hash VM sprawl Correct Answer: A Explanation: Correct answer: Man-in-the-middle Misconfiguration of network services such as DHCP can allow attackers to intercept or manipulate communications",
    domain: 5
  },
  {
    id: 1126,
    text: "What is the difference between uptime and availability?",
    options: ["Uptime refers to the security status of a system, while availability refers to its performance. Uptime measures", "the speed of a system, while availability measures the reliability of a system. Uptime refers to", "a system that can be logged into, while availability refers to a system that can serve", "content. Uptime refers to a system being reachable, while availability refers to a system being usable."],
    answer: 3,
    explanation: "ity refers to a system being usable",
    domain: 5
  },
  {
    id: 1127,
    text: "Sophia has been working with the DevSecOps teams as they are working to deploy new servers into the production environment of the cloud data center. This cloud provider primarily provides Platform as a Service (PaaS) solutions to its customers. What management strategy encompasses this?",
    options: ["Continuity management", "Configuration management", "Release management", "Deployment management"],
    answer: 3,
    explanation: "ion environment of the cloud data center",
    domain: 5
  },
  {
    id: 1128,
    text: "The lead information security specialist working with the team that is going to move their internal communications capability to a cloud provider with a Software as a Service (SaaS) solution is currently determining what their business will be responsible for managing. Of the following, which list includes the responsibilities of the customer?",
    options: ["Governance, risk management and compliance, data security and defining the Service Level Agreements (SLA) Data", "security, governance, risk management and compliance, setting up firewall security for the communications software Data", "security, governance, risk management and compliance, software security as well as managing the security of", "the platform. Governance, risk management and compliance, data security and hypervisor access control security"],
    answer: 0,
    explanation: "vernance, risk management and compliance, setting up firewall security for the communications software Data security, governance, risk management and compliance, software security as well as managing the security of the platform",
    domain: 5
  },
  {
    id: 1129,
    text: "Which operational control benefits from measuring the percentage of time in which systems can be reached and used per year?",
    options: ["Service-level management Incident", "management Continual service", "improvement management", "Capacity management"],
    answer: 0,
    explanation: "ervice-level management Incident management Continual service improvement management Capacity management Correct Answer: A Explanation: Correct answer: Service-level management Uptime is directly tied to availability, which is one of the core principles of information security and service reliability",
    domain: 5
  },
  {
    id: 1130,
    text: "A company wants a system that will not only identify malicious activity but also actively intervene to stop threats. What should they implement?",
    options: ["Bastion host", "Intrusion prevention", "system (IPS)", "Honeypot Firewall"],
    answer: 1,
    explanation: "t should they implement? Bastion host Intrusion prevention system (IPS) Honeypot Firewall Correct Answer: B xmexam",
    domain: 5
  },
  {
    id: 1131,
    text: "A distributed resource scheduler is a coordination element for which of the following platforms?",
    options: ["Kubernetes VMware", "ESXi HyperV", "Virtual Machine", "Manager"],
    answer: 1,
    explanation: "he following platforms? Kubernetes VMware ESXi HyperV Virtual Machine Manager Correct Answer: B Explanation: Correct answer: VMware ESXi A distributed resource scheduler is a coordination element for VMware ESXi",
    domain: 5
  },
  {
    id: 1132,
    text: "In their Infrastructure as a Service (IaaS) cloud environment, an organization encounters a catastrophic business impact event. The occurrence happened as a result of an outage in the eastern U.S. region, but the Cloud Service Provider's (CSP) failover between availability zones was not triggered. Who would be responsible for configuring the cloud-based resiliency functions?",
    options: ["Cloud Service Customer (CSC)", "Cloud Service Provider (CSP)", "Cloud service broker", "Cloud service auditor"],
    answer: 0,
    explanation: "result of an outage in the eastern U",
    domain: 5
  },
  {
    id: 1133,
    text: "Why is it important to monitor a system's fan speed?",
    options: ["A high fan speed can indicate failed sectors in an SDD.", "A high fan speed can indicate the system is working too", "hard. A low fan speed can indicate a failing power supply", "unit. A low fan speed can indicate a CPU is overheating."],
    answer: 1,
    explanation: "an indicate a CPU is overheating",
    domain: 5
  },
  {
    id: 1134,
    text: "Where is the Basic Input/Output System (BIOS) stored?",
    options: ["Firmware", "Disk", "Motherboard", "Memory"],
    answer: 0,
    explanation: "stem (BIOS) stored? Firmware Disk Motherboard Memory Correct Answer: A Explanation: Correct answer: Firmware The BIOS is a form of firmware",
    domain: 5
  },
  {
    id: 1135,
    text: "Abeeku has responded to an Indication of Compromise (IoC) that the Security Information Event Manager (SIEM) has reported. It is discovered that a bad actor has gained access to a critical server that contains data that must remain confidential per the country's law. While responding, the team led by Abeeku has found information within the server and networking devices regarding how the bad actor gained access and what they have been able to see. What does the team need to do?",
    options: ["Perform evidence management, including maintaining chain of custody Perform", "incident management to include tracking the bad actor Perform", "capacity management to make sure the server remains", "available Perform continuity management to ensure server availability"],
    answer: 0,
    explanation: "und information within the server and networking devices regarding how the bad actor gained access and what they have been able to see",
    domain: 5
  },
  {
    id: 1136,
    text: "ITIL provides many different processes that can be instituted within the Information Technology (IT) department. Which management strategy is focused on preventing issues from occurring within a system or process in a proactive manner by looking for the root cause of previous bad events?",
    options: ["Incident management", "Availability management", "Release management", "Problem management"],
    answer: 3,
    explanation: "department",
    domain: 5
  },
  {
    id: 1137,
    text: "An SPOF means that a system failed to properly implement which of the following?",
    options: ["Logging and", "monitoring Availability", "Authentication", "Redundancy"],
    answer: 3,
    explanation: "Logging and monitoring Availability Authentication Redundancy Correct Answer: D Explanation: Correct answer: Redundancy A Single Point Of Failure (SPOF) means that an environment lacks proper redundancy",
    domain: 5
  },
  {
    id: 1138,
    text: "Which of the following is concerned with the proper restoration of systems after a disaster or unexpected outage?",
    options: ["Change management Incident", "management Information", "security management", "Continuity management"],
    answer: 3,
    explanation: "e? Change management Incident management Information security management Continuity management Correct Answer: D Explanation: Correct answer: Continuity management Continuity management, sometimes known as business continuity management, is concerned with restoring systems and devices after a disaster or unexpected outage has occurred",
    domain: 5
  },
  {
    id: 1139,
    text: "According to incident management, what is the difference between an event and an incident?",
    options: ["An event is any observable action, while an incident is an event that is unplanned and can have an adverse impact.", "An event is a problem related to a failure or misconfiguration, while an incident is a problem related to a cybersecurity", "issue. An event is an action that occurs inside an organization's network, while an incident is an event that originates outside", "the network. An event is a change to a system, while an incident is a change to a configuration f ile."],
    answer: 0,
    explanation: "ge to a system, while an incident is a change to a configuration f ile",
    domain: 5
  },
  {
    id: 1140,
    text: "Which solution enables moving VMs in a cluster from one physical hardware component to another without disruption to end-users?",
    options: ["Distributed resource scheduling Dynamic", "optimization Loosely", "coupled storage", "Patch management"],
    answer: 0,
    explanation: "scheduling Dynamic optimization Loosely coupled storage Patch management Correct Answer: A xmexam",
    domain: 5
  },
  {
    id: 1141,
    text: "Which of the following activities represents remediation of hardening baselines?",
    options: ["An IT team conducts a penetration test to determine whether security controls are effective. An", "IT team sets up system monitoring to detect any changes that deviate from their secure", "baseline. An IT team reviews a hardening baseline for their Linux systems in an Azure", "setting. An IT team aligns a system to its security baseline after a system upgrade."],
    answer: 3,
    explanation: "gns a system to its security baseline after a system upgrade",
    domain: 5
  },
  {
    id: 1142,
    text: "What is the MAIN goal of information security management?",
    options: ["Verifying that proposed changes have had an impact analysis and are", "reversible Ensuring systems are available for use even during an", "incident Preserving the confidentiality, integrity, and availability of systems and", "data in use Implementing compliance audits to meet regulatory requirements"],
    answer: 2,
    explanation: "enting compliance audits to meet regulatory requirements Correct Answer: C Explanation: Correct answer: Preserving the confidentiality, integrity, and availability of systems and data in use Information security management focuses on protecting sensitive information from unauthorized access ( confidentiality), preventing improper modification ( integrity), and ensuring systems and data remain accessible when needed ( availability)",
    domain: 5
  },
  {
    id: 1143,
    text: "Which type of proactive control is designed to help teams identify and react to outages or interruptions in a quick and orderly fashion?",
    options: ["Tabletop exercises Network", "security groups Disaster", "recovery plan Incident", "response plan"],
    answer: 3,
    explanation: "p exercises Network security groups Disaster recovery plan Incident response plan Correct Answer: D xmexam",
    domain: 5
  },
  {
    id: 1144,
    text: "Ivan is working with a large corporation building their server-based Platform as a Service (PaaS) implementation. There is a specific application that they are configuring, and they want the flexibility and scalability that comes with the cloud but are worried about how much the application could cost them. What could they use to control the cost yet still allow the application to burst to a certain amount?",
    options: ["Multitenancy", "Authentication", "Shares", "Limits"],
    answer: 3,
    explanation: "r-based Platform as a Service (PaaS) implementation",
    domain: 5
  },
  {
    id: 1145,
    text: "Which level of HA redundancy is the CHEAPEST for an organization to implement?",
    options: ["Tier 1", "Tier 4", "Tier 3", "Tier 2"],
    answer: 0,
    explanation: "r an organization to implement? Tier 1 Tier 4 Tier 3 Tier 2 Correct Answer: A Explanation: Correct answer: Tier 1 The Uptime Institute defines four tiers of redundancy for high availability",
    domain: 5
  },
  {
    id: 1146,
    text: "At which stage of the incident response process should the organization determine the members of the IRT?",
    options: ["Detect", "Respond", "Prepare", "Recover"],
    answer: 2,
    explanation: "ould the organization determine the members of the IRT? Detect Respond Prepare Recover Correct Answer: C Explanation: Correct answer: Prepare An incident response plan (IRP) should lay out the steps that the incident response team (IRT) should carry out during each step of the incident management process",
    domain: 5
  },
  {
    id: 1147,
    text: "A software development company is looking for a way to be able to identify the third party and open-source software components that are in their software. What can they use?",
    options: ["Penetration testing Interactive Application", "Security Testing Application", "Security Verification Standard", "Software Composition Analysis"],
    answer: 3,
    explanation: "ting Interactive Application Security Testing Application Security Verification Standard Software Composition Analysis xmexam",
    domain: 5
  },
  {
    id: 1148,
    text: "What is the worst-case scenario when a virtualization management tool is exploited?",
    options: ["Exploitation of root DNS servers for pharming attacks", "Physical damage to the host server's premises Compromise", "of all VMs and data they hold Loss", "of ability to monitor system resource usage"],
    answer: 2,
    explanation: "onitor system resource usage Correct Answer: C xmexam",
    domain: 5
  },
  {
    id: 1149,
    text: "You are working on configuring part of the Infrastructure as a Service (IaaS) virtual network and have been configuring the switches with information regarding the controller information. This will allow more effective policy-based control of the network. What have you been configuring?",
    options: ["Software-defined storage Content", "delivery network", "Secure shell", "Software-defined networking"],
    answer: 3,
    explanation: "nfiguring the switches with information regarding the controller information",
    domain: 5
  },
  {
    id: 1150,
    text: "A cloud administrator wants to ensure the security of a virtual server running within an Infrastructure as a Service (IaaS) environment. They would like to run a program on that virtual machine that analyzes all inbound and outbound traffic. Which of the following should this administrator use?",
    options: ["Intrusion detection system", "Data loss prevention", "Information rights management", "Anti-malware software"],
    answer: 0,
    explanation: "in an Infrastructure as a Service (IaaS) environment",
    domain: 5
  },
  {
    id: 1151,
    text: "What is a Keyboard, Video, Mouse (KVM) used for?",
    options: ["Creating centralized storage for cloud-hosted servers Managing PKI certificates", "in hybrid cloud and on-prem environments Preventing LAN-based attacks", "from gaining unauthorized access to physical servers Accessing", "multiple servers from a set of input/output devices"],
    answer: 3,
    explanation: "t Answer: D xmexam",
    domain: 5
  },
  {
    id: 1152,
    text: "What is the goal of capacity management?",
    options: ["Ensure IT resources can meet current and future demands Ensure", "IT organizations fulfill their obligations to internal and external", "customers Improve IT infrastructure resiliency against unplanned outages Keep", "system settings consistent over time to prevent unintended changes"],
    answer: 0,
    explanation: "nt unintended changes Correct Answer: A Explanation: Correct answer: Ensure IT resources can meet current and future demands Managing capacity ensures IT resources align with current and projected business needs, preventing service degradation due to insufficient resources",
    domain: 5
  },
  {
    id: 1153,
    text: "Integrity protections like hash functions are important to demonstrate which necessary attribute of evidence?",
    options: ["Convincing", "Admissible", "Complete", "Accurate"],
    answer: 3,
    explanation: "e of evidence? xmexam",
    domain: 5
  },
  {
    id: 1154,
    text: "A corporate security team is working to develop a handbook of official processes and practices. One area of concern is the potential for out-of-date software to be exploited by an attacker. Which of the following is a key component of managing this threat?",
    options: ["Scheduled downtime and", "maintenance Isolated network", "Robust access controls", "Minimizing SPOFs"],
    answer: 0,
    explanation: "cern is the potential for out-of-date software to be exploited by an attacker",
    domain: 5
  },
  {
    id: 1155,
    text: "The Uptime Institute publishes one of the most widely used standards on data center tiers and topologies. At which tier is the data center required to have equipment that is concurrently maintainable?",
    options: ["Four", "One", "Two", "Three"],
    answer: 3,
    explanation: "ta center tiers and topologies",
    domain: 5
  },
  {
    id: 1156,
    text: "The Unified Extensible Firmware Interface (UEFI) replaces the traditional BIOS and incorporates numerous enhancements. What is the theoretical maximum capacity of a hard drive that UEFI can address?",
    options: ["4.9 zettabytes", "10 zettabytes", "4.4 zettabytes", "9.4 zettabytes"],
    answer: 3,
    explanation: "and incorporates numerous enhancements",
    domain: 5
  },
  {
    id: 1157,
    text: "Which of the following is a potential disadvantage of using DISA STIGs?",
    options: ["Configurations may be too restrictive They are", "expensive compared to alternatives Network policies", "may be overly permissive They cannot", "be tailored to meet specific requirements"],
    answer: 0,
    explanation: "fic requirements Correct Answer: A xmexam",
    domain: 5
  },
  {
    id: 1158,
    text: "Which type of management involves first creating a business impact assessment (BIA) and then creating plans to ensure that operations are not disrupted during incidents?",
    options: ["Continuity Configuration", "Change Continual", "service", "improvement"],
    answer: 0,
    explanation: "A) and then creating plans to ensure that operations are not disrupted during incidents? Continuity Configuration Change Continual service improvement Correct Answer: A Explanation: Correct answer: Continuity Continuity management ensures that critical systems remain available and secure even during incidents, which is a key part of risk management",
    domain: 5
  },
  {
    id: 1159,
    text: "Attila is working on configuring an infrastructure as a service (IaaS) deployment for his corporation. Attila wants to use a virtual device that can: What type of virtual device would meet these needs?",
    options: ["IPS DAM", "XML", "firewall", "IDS"],
    answer: 0,
    explanation: "t for his corporation",
    domain: 5
  },
  {
    id: 1160,
    text: "Deploying redundant and resilient systems such as load balancers is MOST relevant to an organization's efforts in which of the following areas?",
    options: ["Problem Management Service", "Level Management", "Capacity Management", "Availability Management"],
    answer: 3,
    explanation: "rts in which of the following areas? Problem Management Service Level Management Capacity Management Availability Management Correct Answer: D Explanation: Correct answer: Availability Management Standards such as the Information Technology Infrastructure Library (ITIL) and International Organization for Standardization/International Electrotechnical Commission (ISO/IEC) 20000-1 define operational controls and standards, including:The Official (ISC)² CCSP CBK Reference, 4th Edition",
    domain: 5
  },
  {
    id: 1161,
    text: "Which networking concept is used to logically isolate hosts on a network?",
    options: ["DNSSEC", "VLAN", "VPN", "DHCP"],
    answer: 1,
    explanation: "cally isolate hosts on a network? DNSSEC VLAN VPN DHCP Correct Answer: B Explanation: Correct answer: VLAN In cloud security, isolation is critical because it limits lateral movement by attackers and enforces logical separation of workloads",
    domain: 5
  },
  {
    id: 1162,
    text: "The move to utilize cloud resources partnered with an increasingly regulated and dispersed supply chain elevates the priority of stakeholder coordination. Which of the following stakeholder groups is the LEAST likely to have contracts or formal agreements with a cloud provider?",
    options: ["Partners", "Regulators", "Vendors", "Customers"],
    answer: 1,
    explanation: "pply chain elevates the priority of stakeholder coordination",
    domain: 5
  },
  {
    id: 1163,
    text: "Which of the following scenarios should use guest operating system virtualization tool sets?",
    options: ["A customer needs to filter network traffic between different virtual machines. A customer", "needs faster input/output access to storage devices than they are offered by default.", "A customer needs to implement virtual Trusted Platform Modules for its virtual machines.", "A customer needs to configure disaster recovery failover between two availability zones."],
    answer: 1,
    explanation: "s to configure disaster recovery failover between two availability zones",
    domain: 5
  },
  {
    id: 1164,
    text: "In a large organization, a recent attack occurred. The attack has poisoned the Domain Name System. What is the effect of this?",
    options: ["Causing users to connect to their intended destination system, then being redirected to", "a malicious site Flooding the systems on the network with traffic so that", "they can't reply to legitimate traffic Redirecting legitimate users to compromised or spoofed", "systems Users will experience a significant delay in connecting to their intended destination"],
    answer: 2,
    explanation: "ed or spoofed systems Users will experience a significant delay in connecting to their intended destination Correct Answer: C Explanation: Correct answer: Redirecting legitimate users to compromised or spoofed systems Domain Name System (DNS) servers provide information that converts domain names, such as PocketPrep",
    domain: 5
  },
  {
    id: 1165,
    text: "An organization has implemented a Security Information and Event Manager (SIEM) solution in the cloud as a result of years of Information Technology (IT) and Security Operation Center (SOC) experience. What is the main security benefit of SIEM technology?",
    options: ["To send alerts to administrators about", "suspicious activity To automatically block traffic", "that appears suspicious Enhanced analysis capabilities", "To encrypt data to the servers"],
    answer: 2,
    explanation: "efit of SIEM technology? To send alerts to administrators about suspicious activity To automatically block traffic that appears suspicious Enhanced analysis capabilities To encrypt data to the servers xmexam",
    domain: 5
  },
  {
    id: 1166,
    text: "An organization is MOST LIKELY to embrace infrastructure as code (IaC) to enhance its processes in which of the following areas?",
    options: ["Release Management", "Change Management", "Configuration Management", "Problem Management"],
    answer: 2,
    explanation: "hich of the following areas? Release Management Change Management Configuration Management Problem Management Correct Answer: C Explanation: Correct answer: Configuration Management Standards such as the Information Technology Infrastructure Library (ITIL) and International Organization for Standardization/International Electrotechnical Commission (ISO/IEC) 20000-1 define operational controls and standards, including:The Official (ISC)² CCSP CBK Reference, 4th Edition",
    domain: 5
  },
  {
    id: 1167,
    text: "Which activity is MOST important when implementing continual service improvement management?",
    options: ["Measuring metrics Documenting", "changes Performing root", "cause analysis Conducting", "employee training"],
    answer: 0,
    explanation: "nting changes Performing root cause analysis Conducting employee training Correct Answer: A Explanation: Correct answer: Measuring metrics Continual service improvement (CSI) relies on data-driven decisions, and measuring metrics allows organizations to evaluate the effectiveness of processes",
    domain: 5
  },
  {
    id: 1168,
    text: "The speed with which incidents are acknowledged and triaged, the required schedule for notifying customers of planned downtime, monthly uptime percentage, the operating hours of support resources, and the timeframe for reporting service performance are all examples of communication items that should be included in what, between a Cloud Service Provider (CSP) and the Cloud Service Customer (CSC)?",
    options: ["Master Services Agreement", "Privacy Level Agreement", "Service Level Agreement", "Business Associate Agreement"],
    answer: 2,
    explanation: "operating hours of support resources, and the timeframe for reporting service performance are all examples of communication items that should be included in what, between a Cloud Service Provider (CSP) and the Cloud Service Customer (CSC)? Master Services Agreement Privacy Level Agreement Service Level Agreement Business Associate Agreement Correct Answer: C xmexam",
    domain: 5
  },
  {
    id: 1169,
    text: "Which type of information is present for items in VMware's hardening baseline documentation?",
    options: ["System requirements Date", "of incident", "Desired setting", "Relevant regulations"],
    answer: 2,
    explanation: "System requirements Date of incident Desired setting Relevant regulations Correct Answer: C Explanation: Correct answer: Desired setting VMware and other vendors provide benchmarks and recommended configurations to secure virtualization environments against threats",
    domain: 5
  },
  {
    id: 1170,
    text: "An information security manager suspects that attackers have been targeting her organization's servers. They want to put a network with multiple vulnerable systems in place, isolated from all production systems, to trick attackers into thinking it is a legitimate corporate network. This will allow them to monitor the attackers' behavior and see what the attackers are trying to do on the network. What is this isolated network called?",
    options: ["Honeypot DMZ", "Honeynet", "Jump", "servers"],
    answer: 2,
    explanation: "urity manager suspects that attackers have been targeting her organization's servers",
    domain: 5
  },
  {
    id: 1171,
    text: "Sachio is working for a financial trading corporation and has been working with the Incident Response Team (IRT) to do practice drills for a variety of different incidents that they have prepared for. As they move through the phases, there is a point when they should take actions to prevent further damage from this incident to the corporation. Which phase would this be?",
    options: ["Recover phase", "Post-incident phase", "Respond phase", "Prepare phase"],
    answer: 2,
    explanation: "o practice drills for a variety of different incidents that they have prepared for",
    domain: 5
  },
  {
    id: 1172,
    text: "Simone has been working within the Information Technology (IT) department. While working there, they have been analyzing the golden images that they use when they start new virtual servers. They have used a software tool to analyze it in a running virtual environment. The tool has been able to detect that there are two fixes that need to be applied as a result of a CVE notice that has recently been released. It has been determined that there is a fix from the vendor that they can apply. What would be the next action they should take?",
    options: ["Confirm the Common Vulnerability", "Score Run a new", "scan Store a new", "golden image Patching"],
    answer: 3,
    explanation: "they use when they start new virtual servers",
    domain: 5
  },
  {
    id: 1173,
    text: "Which of the following solutions allows for the provisioning of resources in a cloud environment through the use of definition files?",
    options: ["Virtual private cloud", "(VPC) Infrastructure as", "code (IaC) Security", "groups Patch management"],
    answer: 1,
    explanation: "use of definition files? Virtual private cloud (VPC) Infrastructure as code (IaC) Security groups Patch management Correct Answer: B Explanation: Correct answer: Infrastructure as code (IaC) Using definition files to provision resources consistently reduces misconfigurations and improves security posture",
    domain: 5
  },
  {
    id: 1174,
    text: "A cloud administrator would like to access an Infrastructure as a Service (IaaS) Structured Query Language (SQL) server. Which technology can be used to connect to it?",
    options: ["Internet Protocol Security (IPSec)", "Keyboard, Video, Mouse (KVM)", "Secure Shell (SSH) Transport", "Layer Security (TLS)"],
    answer: 2,
    explanation: "rver",
    domain: 5
  },
  {
    id: 1175,
    text: "Eloise works with the DevOps team in a security capacity as her company works its way to DevSecOps. The team has been building something that will be deployed on their cloud platform. It contains code, libraries, and dependencies. This product will be very portable and scalable. What are they building?",
    options: ["Container Application", "virtualization Virtual", "machine", "Orchestration"],
    answer: 0,
    explanation: "ding something that will be deployed on their cloud platform",
    domain: 5
  },
  {
    id: 1176,
    text: "A financial institution is concerned that malicious actors could gain access to processes being run in their virtual machines in shared environments. How could they BEST mitigate this concern?",
    options: ["Provision CPU cores Implement", "virtual firewalls Allocate SSD", "storage Encrypt all", "data at rest"],
    answer: 0,
    explanation: "How could they BEST mitigate this concern? Provision CPU cores Implement virtual firewalls Allocate SSD storage Encrypt all data at rest Correct Answer: A xmexam",
    domain: 5
  },
  {
    id: 1177,
    text: "Bina works for a retail corporation. She has been working with the Information Technology (IT) department to ensure that she brings her security knowledge to their daily operations. A recent vulnerability scan was performed on the Infrastructure as a Service (IaaS) cloud environment. They discovered that there were a number of different types of servers that were in need of a patch. As they download the available patches from the vendors, they should be checking which of the following?",
    options: ["Hash value encrypted with the vendor’s symmetric key to create a digital signature Hash", "value encrypted with the vendor’s public key to create a digital signature Hash value", "encrypted with the vendor's private key to create a digital signature Hash value", "encrypted with the vendor's symmetric and private key to create a digital signature"],
    answer: 2,
    explanation: "download the available patches from the vendors, they should be checking which of the following? Hash value encrypted with the vendor’s symmetric key to create a digital signature Hash value encrypted with the vendor’s public key to create a digital signature Hash value encrypted with the vendor's private key to create a digital signature Hash value encrypted with the vendor's symmetric and private key to create a digital signature Correct Answer: C xmexam",
    domain: 5
  },
  {
    id: 1178,
    text: "A cloud architect has been working with operations to determine a few of the features that they should build into their Infrastructure as a Service (IaaS) deployment. One of their concerns is having a user directed to a malicious website due to a Domain Name System poisoning. Which of the primary information security principles does DNS Security (DNSSec) primarily ensure?",
    options: ["Privacy", "Integrity", "Confidentiality", "Availability"],
    answer: 1,
    explanation: "build into their Infrastructure as a Service (IaaS) deployment",
    domain: 5
  },
  {
    id: 1179,
    text: "The Acme Inc. network was recently breached by an attacker. Alex, a member of the incident response team (IRT), is now leading a root cause analysis. At what stage of the incident response lifecycle is this incident?",
    options: ["Post-incident", "Detect", "Respond", "Recover"],
    answer: 0,
    explanation: "er",
    domain: 5
  },
  {
    id: 1180,
    text: "A cloud service provider is building a new data center to provide options for companies that are looking for private cloud services. They are working to determine the size of datacenter that they want to build. The Uptime Institute created the Data Center Site Infrastructure Tier Standard Topology. With this standard, they created a few levels of data centers. The cloud provider has a goal of reaching tier three. How is that characterized in general?",
    options: ["Redundant Capacity Components", "Fault Tolerance", "Basic Capacity", "Concurrently Maintainable"],
    answer: 3,
    explanation: "ons for companies that are looking for private cloud services",
    domain: 5
  },
  {
    id: 1181,
    text: "Which of the following scenarios shows a cloud service that is oversubscribed?",
    options: ["A financial firm restricts some employees from running high-performance workloads to avoid exceeding budget limits. An online retailer experiences a lot of variability in the number of users", "it needs to support at a given time, so the company sets up its cloud infrastructure to dynamically scale based on demand. A game developer launches a", "new game expecting to need 100 servers, but instead millions of players try to log in at the same time, resulting in disconnects and delays. A company", "that provides a photo-editing app wants to be sure that users do not experience any latency, so it provisions double the amount of resources it needs daily."],
    answer: 2,
    explanation: "sources it needs daily",
    domain: 5
  },
  {
    id: 1182,
    text: "In which of the following scenarios would virtual clients be ideal?",
    options: ["An organization wants to disable remote access to systems. An", "organization wants to remove the need for identity and access", "management. An organization wants to reduce its dependence on endpoint-based", "security controls. An organization wants to reduce network congestion."],
    answer: 2,
    explanation: "organization wants to reduce network congestion",
    domain: 5
  },
  {
    id: 1183,
    text: "Virtualization hosts, along with which of the following, have Basic Input/Output System (BIOS) settings in place that control hardware configurations as well as security technologies that assist in preventing access to the BIOS?",
    options: ["Trusted Platform Modules (TPMs)", "Hardware Security Modules (HSMs)", "Secure Shell (SSH) Random", "Access Memory (RAM)"],
    answer: 0,
    explanation: "settings in place that control hardware configurations as well as security technologies that assist in preventing access to the BIOS? Trusted Platform Modules (TPMs) Hardware Security Modules (HSMs) Secure Shell (SSH) Random Access Memory (RAM) Correct Answer: A Explanation: Correct answer: Trusted Platform Modules (TPMs) Trusted Platform Modules (TPMs) and virtualization hosts have BIOS settings in place that control hardware configurations and security technologies to prevent unauthorized access to the BIOS",
    domain: 5
  },
  {
    id: 1184,
    text: "Jonas is working to design their new web application’s encryption requirements. The current decision he and his team are making is which encryption protocol to use. Which protocol would you recommend?",
    options: ["Advanced Encryption Standard (AES)", "Transport Layer Security (TLS)", "Secure Shell (SSH) Internet", "Protocol Security (IPSec)"],
    answer: 1,
    explanation: "ocol would you recommend? xmexam",
    domain: 5
  },
  {
    id: 1185,
    text: "An organization has elected to use Infrastructure as Code (IaC) as part of its cloud strategy. Which of the following best practices for cloud environments does this relate to?",
    options: ["Scheduled Downtime and Maintenance", "Redundancy Logging and", "Monitoring Configuration Management", "and Change Management"],
    answer: 3,
    explanation: "r cloud environments does this relate to? Scheduled Downtime and Maintenance Redundancy Logging and Monitoring Configuration Management and Change Management Correct Answer: D Explanation: Correct answer: Configuration Management and Change Management Some best practices for designing, configuring, and securing cloud environments include the following:The Official (ISC)² CCSP CBK Reference, 4th Edition (ISBN: 978 1119909019)",
    domain: 5
  },
  {
    id: 1186,
    text: "What networking practice is based on hierarchical, distributed tables and when a change is made to the relationship between a domain and a specific IP address, the change is registered at the top of the hierarchical system and filters down to all lower systems?",
    options: ["Domain Name Service (DNS) Software", "Defined Network (SDN) Dynamic", "Host Configuration Protocol (DHCP)", "Virtual Private Network (VPN)"],
    answer: 0,
    explanation: "ip between a domain and a specific IP address, the change is registered at the top of the hierarchical system and filters down to all lower systems? Domain Name Service (DNS) Software Defined Network (SDN) Dynamic Host Configuration Protocol (DHCP) Virtual Private Network (VPN) Correct Answer: A Explanation: Correct answer: Domain Name Service (DNS) The Domain Name Service (DNS) is a hierarchical system that translates domain names into IP addresses",
    domain: 5
  },
  {
    id: 1187,
    text: "An organization is currently experiencing a Distributed Denial of Service (DDoS) attack. Which of the following International Organization for Standardization/International Electrotechnical Commission (ISO/IEC) 20000-1 operational controls and standards is MOST relevant here?",
    options: ["Site reliability engineering", "Information security management", "Availability engineering", "Continuity management"],
    answer: 3,
    explanation: "rnational Electrotechnical Commission (ISO/IEC) 20000-1 operational controls and standards is MOST relevant here? Site reliability engineering Information security management Availability engineering Continuity management Correct Answer: D xmexam",
    domain: 5
  },
  {
    id: 1188,
    text: "Which of the following technologies has had the BIGGEST effect on deployment management?",
    options: ["Sanitization", "Virtualization", "Tokenization", "Containerization"],
    answer: 3,
    explanation: "management? Sanitization Virtualization Tokenization Containerization Correct Answer: D Explanation: Correct answer: Containerization Containerization allows applications to be packaged with their dependencies into lightweight, portable units, enabling rapid deployment across various environments",
    domain: 5
  },
  {
    id: 1189,
    text: "Which security configuration addresses a cloud customer’s concern that other tenants could gain access to processes running in its virtual machines?",
    options: ["Isolated virtual private", "clouds Security groups", "Encrypted storage spaces", "Dedicated CPU cores"],
    answer: 3,
    explanation: "Isolated virtual private clouds Security groups Encrypted storage spaces Dedicated CPU cores xmexam",
    domain: 5
  },
  {
    id: 1190,
    text: "Which activity is characteristic of configuration management?",
    options: ["Comparing hash values of critical system files Developing", "IT improvements to meet evolving business needs", "Determining root causes of incidents after a", "change Maintaining asset information in a database"],
    answer: 3,
    explanation: "aintaining asset information in a database Correct Answer: D Explanation: Correct answer: Maintaining asset information in a database Maintaining accurate configuration records helps reduce risk, ensure compliance, and prevent misconfigurations that can expose vulnerabilities",
    domain: 5
  },
  {
    id: 1191,
    text: "You are working to design a cloud environment for your employer. You need to host a database server in the cloud that contains highly sensitive data that cannot be placed in a multi-tenant environment for regulatory reasons. The avilability and uptime of the database server is not a concern. Which of the following host types matches your needs the closest?",
    options: ["Bastion host", "Clustered hosts", "Redundant host", "Standalone host"],
    answer: 3,
    explanation: "nt for your employer",
    domain: 5
  },
  {
    id: 1192,
    text: "A security team needs to store and analyze video feeds from thousands of security cameras. The video needs to be available for analysis as quickly as possible. Which type of solution addresses this need?",
    options: ["Distributed resource scheduling", "Data warehouse", "Dynamic optimization", "Storage clusters"],
    answer: 3,
    explanation: "uickly as possible",
    domain: 5
  },
  {
    id: 1193,
    text: "Which of the following practices should be followed when collecting, acquiring, and preserving forensic evidence?",
    options: ["Turning off the system immediately to preserve evidence Encrypting", "all forensic evidence before initial acquisition Preserving evidence", "in Faraday cages to block electromagnetic signals Performing", "analysis only on the original media, not copies"],
    answer: 2,
    explanation: "es to block electromagnetic signals Performing analysis only on the original media, not copies Correct Answer: C Explanation: Correct answer: Preserving evidence in Faraday cages to block electromagnetic signals Forensic best practices emphasize protecting evidence from tampering, which includes preventing wireless or electromagnetic interference that could alter volatile data",
    domain: 5
  },
  {
    id: 1194,
    text: "In cloud computing, the security of the Domain Name System (DNS) is important to prevent a bad actor from hijacking DNS and redirecting network traffic. To prevent misinformation from being passed throughout the DNS environment, DNS Security (DNSSec) protects the recursive resolver information using what?",
    options: ["Encryption using AES Encryption", "using digital signatures Authentication", "using digital signatures Authorization", "using hashing algorithms"],
    answer: 2,
    explanation: "and redirecting network traffic",
    domain: 5
  },
  {
    id: 1195,
    text: "Which of the following scenarios should use tightly coupled storage clusters?",
    options: ["A video editing company needs a vast amount of cheap storage for large files that may be needed later. A web development", "company needs a flexible storage solution for clients with a wide range of storage needs. A weather researcher needs to run complex simulations", "with high performance when reading data from storage nodes. An online retailer needs to store millions of small transaction records for long term", "compliance."],
    answer: 2,
    explanation: "long term compliance",
    domain: 5
  },
  {
    id: 1196,
    text: "When should an incident response team be called to action?",
    options: ["When a security operations center identifies a suspicious", "event When a vulnerability is discovered during scheduled", "scanning When any unplanned event occurs When system", "performance metrics drop below a predefined threshold"],
    answer: 0,
    explanation: "trics drop below a predefined threshold Correct Answer: A Explanation: Correct answer: When a security operations center identifies a suspicious event Timely engagement of the response team ensures rapid containment, investigation, and mitigation of security incidents in cloud or on-premises environments",
    domain: 5
  },
  {
    id: 1197,
    text: "Padma has deployed a technology that is a different switch technology than what they have been using for a very long time. With this new technology, it removes the decision-making process from the switch and moves it to a controller. This leaves the process of forwarding frames to the switch. What technology has been deployed?",
    options: ["Virtual Local Area Network (VLAN)", "internet Small Computer System", "Interface (iSCSI) Software Defined", "Networking (SDN) Fibre Channel"],
    answer: 2,
    explanation: "ng time",
    domain: 5
  },
  {
    id: 1198,
    text: "The information security manager for a social media corporation has been concerned about a particular Denial of Service (DoS) attack coming in from a particular part of the world. The manager needs to configure a device that can block specific Internet Protocol (IP) addresses. Which network device is the BEST choice to meet this requirement?",
    options: ["Static packet", "firewall WAF", "IDS API", "gateway"],
    answer: 0,
    explanation: "lar Denial of Service (DoS) attack coming in from a particular part of the world",
    domain: 5
  },
  {
    id: 1199,
    text: "At which stage of the incident response process will the IRT work to contain the incident and inform stakeholders?",
    options: ["Detect", "Post-Incident", "Respond", "Recover"],
    answer: 2,
    explanation: "IRT work to contain the incident and inform stakeholders? Detect Post-Incident Respond Recover Correct Answer: C Explanation: Correct answer: Respond An incident response plan (IRP) should lay out the steps that the incident response team (IRT) should carry out during each step of the incident management process",
    domain: 5
  },
  {
    id: 1200,
    text: "Ulric is a cloud data architect professional. He has also been studying information security to ensure his cloud deployment designs are resilient. He has determined so far that he will design a Storage Area Network (SAN) using Fibre Channel (FC). However, he is concerned that a server failure could cause a severe impact on their data retention. How can he design the servers to work together to increase performance, capacity, and reliability?",
    options: ["Daily backups IP-based", "Small Computer System", "Interface Clustered storage", "Stand-alone hosts"],
    answer: 2,
    explanation: "He has determined so far that he will design a Storage Area Network (SAN) using Fibre Channel (FC)",
    domain: 5
  },
  {
    id: 1201,
    text: "When a customer is negotiating specific capabilities, the resulting agreements are part of the agreement. If the topic is unexpected downtime, this would apply to which process within ITIL?",
    options: ["Service level management", "Incident management Disaster", "recovery management Business", "continuity management"],
    answer: 0,
    explanation: "to which process within ITIL? Service level management Incident management Disaster recovery management Business continuity management Correct Answer: A xmexam",
    domain: 5
  },
  {
    id: 1202,
    text: "What is a key element of continual service improvement management?",
    options: ["Ensuring that system configurations are tracked and updated consistently Ensuring that", "an organization has a comprehensive disaster recovery plan Ensuring that", "any proposed changes are thoroughly tested and can be rolled", "back Ensuring that IT services respond to changing business requirements"],
    answer: 3,
    explanation: "vices respond to changing business requirements Correct Answer: D Explanation: Correct answer: Ensuring that IT services respond to changing business requirements Continual service improvement ensures that IT services remain aligned with business needs over time and adapt to new requirements",
    domain: 5
  },
  {
    id: 1203,
    text: "Using the Uptime Institute's tiers as a reference, which of the following data center tiers is considered fault-tolerant and without single points of failure?",
    options: ["1", "3", "4", "5"],
    answer: 2,
    explanation: "ence, which of the following data center tiers is considered fault-tolerant and without single points of failure? xmexam",
    domain: 5
  },
  {
    id: 1204,
    text: "Which of the following best practices is MOST related to preventing abuse of management functionality?",
    options: ["Redundancy Scheduled Downtime and", "Maintenance Isolated Network and", "Robust Access Controls Configuration", "Management and Change Management"],
    answer: 2,
    explanation: "d Network and Robust Access Controls Configuration Management and Change Management Correct Answer: C Explanation: Correct answer: Isolated Network and Robust Access Controls Some best practices for designing, configuring, and securing cloud environments include:The Official (ISC)² CCSP CBK Reference, 4th Edition",
    domain: 5
  },
  {
    id: 1205,
    text: "Communications with which of the following are MOST likely to be characterized by one party sending out requirements and the other sending proof that they have met those requirements?",
    options: ["Regulators", "Vendors", "Customers", "Partners"],
    answer: 0,
    explanation: "ments and the other sending proof that they have met those requirements? Regulators Vendors Customers Partners Correct Answer: A xmexam",
    domain: 5
  },
  {
    id: 1206,
    text: "Vendor management is more intense with the cloud as opposed to traditional equipment vendor management for an on-premises data center. When managing a vendor, a corporation must first negotiate a contract that will match their needs. If a company is planning on moving their data storage into a cloud provider's Platform as a Service (PaaS), they need to assess many variables to ensure that they choose the right vendor. What is most critical for them to evaluate before signing contracts?",
    options: ["Assess the vendor Assess", "vendor lock-in risks", "Assess vendor viability", "Explore escrow options"],
    answer: 1,
    explanation: "a vendor, a corporation must first negotiate a contract that will match their needs",
    domain: 5
  },
  {
    id: 1207,
    text: "What is the BIGGEST complication of forensic data collection when using public cloud resources compared to on-premises resources?",
    options: ["Storing forensic evidence securely with a chain of custody", "Data privacy concerns involving other tenants Working on", "copies of data rather than the original data", "Collecting data from ephemeral locations such as RAM"],
    answer: 1,
    explanation: "han the original data Collecting data from ephemeral locations such as RAM Correct Answer: B xmexam",
    domain: 5
  },
  {
    id: 1208,
    text: "The information security staff has been working on building the management plane for operations in their cloud Infrastructure as a Service (IaaS) environment. They have been working on ensuring that they have taken into consideration the fundamental basics. They have thought about all the scheduling that needs to be planned for when, how, and where any changes are made. They know that orchestration is one of the most important aspects of managing a virtual environment. What else are they missing?",
    options: ["Repudiation", "Maintenance", "Scanning", "Patching"],
    answer: 1,
    explanation: "n their cloud Infrastructure as a Service (IaaS) environment",
    domain: 5
  },
  {
    id: 1209,
    text: "An information security manager, Cat, has uncovered a problem within the Information Technology (IT) department. The staff have been moving new firewall equipment directly into production without proper testing in a lab or controlled environment. When the staff has not properly tested the firewalls, there has been an immediate issue or two that has been seen by the users. He is looking for a process to implement that would control this better in the future. What would you recommend?",
    options: ["Change management", "Capacity management", "Deployment management", "Continuity management"],
    answer: 2,
    explanation: "department",
    domain: 5
  },
  {
    id: 1210,
    text: "Joan is working as a contractor for a small business that is building their infrastructure so that they can begin their new business, a coffee shop. They are looking for the right encryption technology to protect their connection between the point of sale technology built into their computer and the server in the cloud. The connection that they are building is connecting through a web interface. Which of the following would be the most appropriate encryption technology?",
    options: ["Internet Protocol Security (IPSec) transport", "mode Transport Layer Security (TLS)", "Secure Shell (SSH) Internet Protocol", "Security (IPSec) tunnel mode"],
    answer: 1,
    explanation: "for the right encryption technology to protect their connection between the point of sale technology built into their computer and the server in the cloud",
    domain: 5
  },
  {
    id: 1211,
    text: "Which of the following attributes of evidence restricts the types of evidence that can be presented and how it can be collected?",
    options: ["Authentic", "Convincing", "Admissible", "Complete"],
    answer: 2,
    explanation: "ted and how it can be collected? Authentic Convincing Admissible Complete Correct Answer: C xmexam",
    domain: 5
  },
  {
    id: 1212,
    text: "Your organization wants to address baseline monitoring and compliance by restricting the duration of a host's non-compliant condition. When the application is deployed again, the organization would like to decommission the old host and replace it with a new Virtual Machine (VM) constructed from the standard baseline image. What functionality is described here?",
    options: ["Immutable architecture Blockchain", "Infrastructure as", "Code (IaC)", "Virtual architecture"],
    answer: 0,
    explanation: "host's non-compliant condition",
    domain: 5
  },
  {
    id: 1213,
    text: "Odette is working with the cloud architects to plan a variety of information security elements for a new cloud deployment. They are using Infrastructure as a Service (IaaS) to extend their current data center capabilities. They will be migrating almost all data storage and processing power to the cloud over the next 18 months. They need first to ensure that they have a secure connection between their data center and the cloud IaaS. What technology would be a good idea to use here?",
    options: ["Transport Layer Security", "Secure Shell Encapsulating", "Security Payload Internet", "Protocol Security"],
    answer: 3,
    explanation: "curity elements for a new cloud deployment",
    domain: 5
  },
  {
    id: 1214,
    text: "You work for a medium-sized business that has been moving their processing and data storage to the public cloud using Platform as a Service (PaaS). You now have 100 virtual machines running and are starting to worry about keeping everything to date with security patches in particular. What can be used in the cloud to facilitate patch management?",
    options: ["Orchestration Live", "migration", "Centralization", "Automation"],
    answer: 0,
    explanation: "d using Platform as a Service (PaaS)",
    domain: 5
  },
  {
    id: 1215,
    text: "At which point during the incident response process is the cause of an incident eradicated?",
    options: ["Prepare", "Detect", "Respond", "Recover"],
    answer: 3,
    explanation: "ated? Prepare Detect Respond Recover Correct Answer: D xmexam",
    domain: 5
  },
  {
    id: 1216,
    text: "The information security manager involved with the DevOps teams has a goal to create an environment that allows the teams to control the rollout to production of the infrastructure. They are looking for a way that integrates software development techniques that include version control and continuous integration techniques. What are they looking for?",
    options: ["Immutable infrastructure Infrastructure", "as a Service", "(IaaS) DevSecOps Infrastructure", "as Code (IaC)"],
    answer: 3,
    explanation: "tion of the infrastructure",
    domain: 5
  },
  {
    id: 1217,
    text: "Which of the following solutions for the availability of guest operating systems provides the BEST resiliency?",
    options: ["Redundant network connections to VMs", "Snapshots to re-create VMs Clustered", "architecture with live migration Regular", "backups with documented recovery procedures"],
    answer: 2,
    explanation: "stered architecture with live migration Regular backups with documented recovery procedures Correct Answer: C Explanation: Correct answer: Clustered architecture with live migration Clustering with live migration allows virtual machines to be moved seamlessly between hosts in the event of hardware failure or maintenance, ensuring little to no downtime",
    domain: 5
  },
  {
    id: 1218,
    text: "What do operating system vendors offer that allows customers to follow a standard for configuring their systems to meet functional and security requirements?",
    options: ["Orchestration Baselines", "Patches Network", "security", "groups"],
    answer: 1,
    explanation: "andard for configuring their systems to meet functional and security requirements? Orchestration Baselines Patches Network security groups Correct Answer: B Explanation: Correct answer: Baselines Baselines are vendor-provided or industry defined configuration standards that outline how systems should be set up to meet both functional needs and security requirements",
    domain: 5
  },
  {
    id: 1219,
    text: "Which process should an organization use to ensure that unintended changes to settings do not occur with its most critical services?",
    options: ["Problem management", "Deployment management", "Configuration management", "Incident management"],
    answer: 2,
    explanation: "management Deployment management Configuration management Incident management Correct Answer: C xmexam",
    domain: 5
  },
  {
    id: 1220,
    text: "An organization's communications with which of the following is MOST likely to include information about planned and unplanned outages and other information designed to protect the brand image?",
    options: ["Vendors", "Customers", "Partners", "Regulators"],
    answer: 1,
    explanation: "ing is MOST likely to include information about planned and unplanned outages and other information designed to protect the brand image? Vendors Customers Partners Regulators Correct Answer: B Explanation: Correct answer: Customers An organization may need to communicate with various parties as part of its security and risk management process",
    domain: 5
  },
  {
    id: 1221,
    text: "Acme Inc. has built and deployed an Infrastructure as a Service (IaaS) cloud environment. This company does have several laws and regulations that they must be compliant with, such as the European Union (EU) General Data Protection Regulation (GDPR). To respond as quickly as possible, they have hired a group of information security administrators and operators to focus on dealing with security issues such as threat detection, continuous monitoring and reporting, and alert prioritization. The group will be located at Acme Inc. headquarters. What would this group be called?",
    options: ["IRT", "NOC", "SOC", "CSIRT"],
    answer: 2,
    explanation: "cme Inc",
    domain: 5
  },
  {
    id: 1222,
    text: "Which component implements virtual Trusted Platform Modules (TPMs)?",
    options: ["CPU Hardware", "security module", "Hypervisor", "Motherboard"],
    answer: 2,
    explanation: "Motherboard xmexam",
    domain: 5
  },
  {
    id: 1223,
    text: "Which of the following attributes of evidence deals with the fact that it is real and relevant to the investigation?",
    options: ["Authentic", "Convincing", "Admissible", "Complete"],
    answer: 0,
    explanation: "fact that it is real and relevant to the investigation? Authentic Convincing Admissible Complete Correct Answer: A Explanation: Correct answer: Authentic Typically, digital forensics is performed as part of an investigation or to support a court case",
    domain: 5
  },
  {
    id: 1224,
    text: "Alika is working for a multinational bank as one of their cloud operators. He is managing some virtual servers within their Infrastructure as a Service (IaaS) environment. What protocol is he likely using for this access?",
    options: ["Dynamic Host Configuration Protocol (DHCP)", "Remote Desktop Protocol (RDP)", "Internet Protocol Security (IPSec)", "Advanced Encryption Standard (AES)"],
    answer: 1,
    explanation: "using for this access? Dynamic Host Configuration Protocol (DHCP) Remote Desktop Protocol (RDP) Internet Protocol Security (IPSec) Advanced Encryption Standard (AES) xmexam",
    domain: 5
  },
  {
    id: 1225,
    text: "A cloud architect is helping to design and build a new data center. She knows that there are many institutions that create standards that govern the physical design of data centers. Of the following, which is NOT an institution that creates standards governing the physical design of data centers?",
    options: ["ITIL International Data Center", "Authority (IDCA) National", "Fire Protection Association", "(NFPA) Uptime Institute"],
    answer: 0,
    explanation: "ards that govern the physical design of data centers",
    domain: 5
  },
  {
    id: 1226,
    text: "You are working with the company's public cloud provider to determine what technologies and tools they require to ensure a functional configuration. The company has a distributed workforce, and you are concerned about attackers eavesdropping on traffic to the cloud environment. What solution would BEST help address your concern?",
    options: ["Network Security Group (NSG)", "Distributed Resource Scheduling (DRS)", "Advanced Encryption Standard (AES)", "Virtual Private Network (VPN)"],
    answer: 3,
    explanation: "nsure a functional configuration",
    domain: 5
  },
  {
    id: 1227,
    text: "Which of the following SOC responsibilities is proactive in nature?",
    options: ["Incident Management", "Threat Detection", "Quality Assurance", "Threat Prevention"],
    answer: 3,
    explanation: "at Detection Quality Assurance Threat Prevention Correct Answer: D Explanation: Correct answer: Threat Prevention The security operations center (SOC) is responsible for managing an organization’s cybersecurity",
    domain: 5
  },
  {
    id: 1228,
    text: "What setting defines which event categories are and are not written to logs?",
    options: ["Syslog MAX_LOG", "Clipping", "level", "CEF"],
    answer: 2,
    explanation: "tegories are and are not written to logs? Syslog MAX_LOG Clipping level CEF Correct Answer: C Explanation: Correct answer: Clipping level The clipping level indicates which categories of events a system does and does not write to logs",
    domain: 5
  },
  {
    id: 1229,
    text: "A consumer purchases a cloud service that has a 99.9% availability level. Approximately how long can service be down per year and still meet this requirement?",
    options: ["Two days", "One day", "One hour", "Nine hours"],
    answer: 3,
    explanation: "ailability level",
    domain: 5
  },
  {
    id: 1230,
    text: "Monaco has been working with a cloud provider as one of the cloud operators for some time now. Her job is the management of the virtual functionality in one of their data centers. One of the cloud provider's customers uses a Platform as a Service (PaaS) implementation. This customer has built and sells a Software as a Service (SaaS) cloud offering. All these companies and elements have something in common with each other. What is the key functionality of applications and the management of the cloud that they have in common?",
    options: ["Application Programming Interfaces (API)", "Trusted Platform Modules", "(TPMs) Hypervisors REpresentation", "State Transfer (REST)"],
    answer: 0,
    explanation: "the management of the virtual functionality in one of their data centers",
    domain: 5
  },
  {
    id: 1231,
    text: "During which phase of the TLS protocol is traffic sent between the two parties without encryption or authentication?",
    options: ["TLS negotiation protocol", "TLS handshake protocol", "TLS record protocol", "TLS ALOHA protocol"],
    answer: 1,
    explanation: "TLS handshake protocol TLS record protocol TLS ALOHA protocol Correct Answer: B xmexam",
    domain: 5
  },
  {
    id: 1232,
    text: "Which of the following artifacts is used to maintain the integrity of evidence?",
    options: ["Chain of custody Access control list Configuration management", "database", "Forensic", "acquisition image"],
    answer: 0,
    explanation: "Configuration management database Forensic acquisition image Correct Answer: A Explanation: Correct answer: Chain of custody A chain of custody document records who handled evidence, when it was accessed, and how it was stored to ensure its integrity and authenticity",
    domain: 5
  },
  {
    id: 1233,
    text: "In an organization's network diagram is a computer codenamed Bastion just inside a highly secure network. Which of the following is this MOST likely to be?",
    options: ["Jump box", "Honeypot", "DMZ", "NGFW"],
    answer: 0,
    explanation: "highly secure network",
    domain: 5
  },
  {
    id: 1234,
    text: "A cloud administrator, Jocelyn, needs to create a new golden image. This image is for a computer server. There is a current version in use in production. This new image requires updates from the vendor as well as configuration changes to match corporate policy changes. What is the FIRST step this administrator needs to take to create a baseline image?",
    options: ["Connect to the instance Run a", "copy of the current image Stop", "the instance and create a", "new image Customize the instance"],
    answer: 1,
    explanation: "in production",
    domain: 5
  },
  {
    id: 1235,
    text: "How does DNSSEC provide integrity to DNS?",
    options: ["By caching DNS responses in secure hardware modules By providing", "cryptographic authentication of DNS data through digital signatures By removing", "any personally identifiable information from public DNS records By encrypting", "tunnels between DNS clients and DNS servers for secure communications"],
    answer: 1,
    explanation: "secure communications Correct Answer: B Explanation: Correct answer: By providing cryptographic authentication of DNS data through digital signatures Protecting DNS from tampering and spoofing is essential for ensuring trust in cloud-based services",
    domain: 5
  },
  {
    id: 1236,
    text: "What is the PRIMARY focus of the ISO 27001 standard?",
    options: ["Information security management", "Incident management Continual", "service improvement management", "Change management"],
    answer: 0,
    explanation: "ment management Change management Correct Answer: A Explanation: Correct answer: Information security management ISO 27001 is a globally recognized standard for managing information security",
    domain: 5
  },
  {
    id: 1237,
    text: "What type of security control is related to console-based access mechanisms?",
    options: ["Ensuring KVMs use isolated data", "ports Configuring security groups Implementing", "infrastructure as code (IaC)", "strategies Encrypting storage volumes"],
    answer: 0,
    explanation: "ementing infrastructure as code (IaC) strategies Encrypting storage volumes Correct Answer: A Explanation: Correct answer: Ensuring KVMs use isolated data ports Direct console access, such as through keyboard, video, or mouse (KVM) switches, must be secured to prevent unauthorized physical or low-level system access",
    domain: 5
  },
  {
    id: 1238,
    text: "A cloud administrator needs to implement network segmentation but cannot use physical segmentation methods since they are using Platform as a Service (PaaS) cloud technology. Which segmentation can be used to ensure the isolation of a critical server that is protected by a very tailored firewall?",
    options: ["Hyper segmentation Micro", "segmentation Virtual", "extensible segmentation", "Virtual segmentation"],
    answer: 1,
    explanation: "ce they are using Platform as a Service (PaaS) cloud technology",
    domain: 5
  },
  {
    id: 1239,
    text: "Shai is the information security manager responsible for the build and deployment of a particular server into a server-based Platform as a Service (PaaS). This particular server handles very specialized data and has a requirement for security, isolation, and specialized configurations. What deployment option would be best for this situation?",
    options: ["Load balanced server cluster A", "server cluster with Dynamic Optimization", "(DO) Standalone host Redundant servers", "with Dynamic Resource Scheduling (DRS)"],
    answer: 2,
    explanation: "r server handles very specialized data and has a requirement for security, isolation, and specialized configurations",
    domain: 5
  },
  {
    id: 1240,
    text: "You are a systems administrator at Acme Inc. and are comparing logs from a local system that were also sent to a Security Information Event Manager (SIEM). You notice that the logs on the local system use MM/DD/YYYY date formats, while the logs on the SIEM use YYYY/MM/DD date formats. What needs to be done to synchronize the values?",
    options: ["Formatting Field", "values Release", "values", "Normalization"],
    answer: 3,
    explanation: "to a Security Information Event Manager (SIEM)",
    domain: 5
  },
  {
    id: 1241,
    text: "Which organizational unit in a data center is responsible for continuous monitoring and reporting?",
    options: ["Incident response team", "Security operations center", "Compliance audit team", "Change management board"],
    answer: 1,
    explanation: "e team Security operations center Compliance audit team Change management board Correct Answer: B Explanation: Correct answer: Security operations center Continuous monitoring helps detect threats, maintain compliance, and ensure availability and integrity of cloud and on-premises systems",
    domain: 5
  },
  {
    id: 1242,
    text: "Your organization is in the process of migrating to the cloud. Mid-migration you come across details in an agreement that may leave you non-compliant with a particular law. Who would be the BEST contact to discuss your cloud-environment compliance with legal jurisdictions?",
    options: ["Consultant", "Partner", "Stakeholder", "Regulator"],
    answer: 3,
    explanation: "ails in an agreement that may leave you non-compliant with a particular law",
    domain: 5
  },
  {
    id: 1243,
    text: "At which stage of the incident response process will the IRT work to bring the organization back to a secure state, including fixing the underlying cause of the incident?",
    options: ["Recover", "Respond", "Detect", "Post-Incident"],
    answer: 0,
    explanation: "IRT work to bring the organization back to a secure state, including fixing the underlying cause of the incident? Recover Respond Detect Post-Incident Correct Answer: A Explanation: Correct answer: Recover An incident response plan (IRP) should lay out the steps that the incident response team (IRT) should carry out during each step of the incident management process",
    domain: 5
  },
  {
    id: 1244,
    text: "Raha is a cloud architect who is designing an Infrastructure as a Service (IaaS) environment for the corporation. The servers that Raha is designing around have strict availability requirements. They cannot afford service outages at any time. What configuration would be useful for Raha to use?",
    options: ["Redundant servers", "SDN CDN", "Server", "cluster"],
    answer: 3,
    explanation: "t who is designing an Infrastructure as a Service (IaaS) environment for the corporation",
    domain: 5
  },
  {
    id: 1245,
    text: "Allison is looking for a technology that she can utilize to manage the network more effectively. What she would like is a way to centrally control the network and provision resources more effectively than traditional networking. What would you recommend?",
    options: ["Storage Area Network (SAN) Transport", "Layer Security (TLS) Software", "Defined Networking (SDN) Domain", "Name System Security (DNSSec)"],
    answer: 2,
    explanation: "ore effectively than traditional networking",
    domain: 5
  },
  {
    id: 1246,
    text: "Insecure services such as File Transfer Protocol (FTP) are disallowed on all virtual machines within the Infrastructure as a Service (IaaS) public cloud deployment. However, an FTP client is found on one of the virtual machines. What can the organization do to ensure there are no other virtual machines responding to FTP requests?",
    options: ["Trusted Platform Module", "(TPM) Audit", "Penetration test", "Vulnerability scan"],
    answer: 3,
    explanation: "es within the Infrastructure as a Service (IaaS) public cloud deployment",
    domain: 5
  },
  {
    id: 1247,
    text: "Ben is part of an incident response (IR) team that has found that a bad actor has compromised a database full of personal information regarding their customers. What they must do is a good forensic investigation to figure out exactly what has been compromised, how, and hopefully by whom. Which of the following can provide information regarding the runtime state of a running virtual machine?",
    options: ["Hashing and digital", "signatures Digital forensics", "Virtual Machine Introspection", "(VMI) Technical readiness"],
    answer: 2,
    explanation: "formation regarding their customers",
    domain: 5
  },
  {
    id: 1248,
    text: "Which process is used in a CI/CD environment to ensure deployments do not introduce new bugs into the production environment?",
    options: ["Configuration management", "Automated testing", "Post-implementation review", "Rollback processes"],
    answer: 1,
    explanation: "gement Automated testing Post-implementation review Rollback processes Correct Answer: B xmexam",
    domain: 5
  },
  {
    id: 1249,
    text: "Occhave is consulting on a new project for a company that is expanding its retail operations to vacation destinations around the world. Some of these remote vacation spots have limited internet access at times. Credit card processing is their primary concern that pertains to network access. If they do not have internet access at a location, what options do they have?",
    options: ["Use the internet access on their mobile cell phones until the internet is back", "Use Voice over Internet Protocol (VoIP) to contact the bank to confirm available funds", "Access the local cloud server to process the credit card rather than the bank", "server Capture the credit card details locally and wait for internet access to return"],
    answer: 3,
    explanation: "t access on their mobile cell phones until the internet is back Use Voice over Internet Protocol (VoIP) to contact the bank to confirm available funds Access the local cloud server to process the credit card rather than the bank server Capture the credit card details locally and wait for internet access to return Correct Answer: D xmexam",
    domain: 5
  },
  {
    id: 1250,
    text: "Which operational control aims to increase resilience to ensure services remain reachable even during outages?",
    options: ["Service-level management", "Incident management", "Capacity management", "Availability management"],
    answer: 3,
    explanation: "s? Service-level management Incident management Capacity management Availability management Correct Answer: D Explanation: Correct answer: Availability management Resilience ensures continuity of critical services even when outages occur",
    domain: 5
  },
  {
    id: 1251,
    text: "A medium-sized business is looking to utilize a Storage Area Network in their private cloud. They are looking for the easiest route to build the SAN, utilizing the existing and traditional Local Area Network technology that they already have. Which storage protocol would you recommend?",
    options: ["HyperSCSI iSCSI", "Fibre Channel", "NVMe over", "Fabrics"],
    answer: 1,
    explanation: "k in their private cloud",
    domain: 5
  },
  {
    id: 1252,
    text: "Which of the following is TRUE regarding virtualization?",
    options: ["Virtual images are susceptible to attacks only when they are online and running. It's", "more important to secure the virtual images than the management plane in a virtualized", "environment. Virtual images are susceptible to attacks whether they are running or not.", "Virtual images are susceptible to attacks when they are offline, and only offline."],
    answer: 2,
    explanation: "",
    domain: 5
  },
  {
    id: 1253,
    text: "A cloud administrator is building the network in their company's Infrastructure as a Service (IaaS) deployment. Currently, they are configuring the switches with their Virtual Local Area Networks (VLANs). The VLANs that they are constructing are for the different departments within the organization. There is one for marketing, one for Research and Development (R&D), and many more. Which of the following statements regarding VLANs is TRUE?",
    options: ["VLANs are used to allow remote access for employees working outside the", "office VLANs can be used across multiple data centers without concern for", "geographical location VLANs are dependent on the physical wiring and cabling infrastructure", "VLANs work the best if implemented in the same geographical location"],
    answer: 1,
    explanation: "g, one for Research and Development (R&D), and many more",
    domain: 5
  },
  {
    id: 1254,
    text: "What is the role of a change control board (CCB)?",
    options: ["To propose changes to systems", "To review proposed changes to", "systems To enforce organizational compliance", "To execute approved changes"],
    answer: 1,
    explanation: "ce To execute approved changes Correct Answer: B Explanation: Correct answer: To review proposed changes to systems A change control board (CCB) evaluates the risks, impacts, and benefits of change requests before approving or rejecting them",
    domain: 5
  },
  {
    id: 1255,
    text: "Which of the following involves verifying that the software has completed all of its required tests and manages the logistics of moving it to the next step?",
    options: ["Configuration Management", "Deployment Management", "Release Management", "Change Management"],
    answer: 2,
    explanation: "manages the logistics of moving it to the next step? Configuration Management Deployment Management Release Management Change Management Correct Answer: C Explanation: Correct answer: Release Management Standards such as the Information Technology Infrastructure Library (ITIL) and International Organization for Standardization/International Electrotechnical Commission (ISO/IEC) 20000-1 define operational controls and standards, including:The Official (ISC)² CCSP CBK Reference, 4th Edition",
    domain: 5
  },
  {
    id: 1256,
    text: "Which of the following SOC duties involves coordinating with a team focused on a particular task?",
    options: ["Quality Assurance", "Incident Management", "Threat Detection", "Threat Prevention"],
    answer: 1,
    explanation: "d on a particular task? Quality Assurance Incident Management Threat Detection Threat Prevention Correct Answer: B Explanation: Correct answer: Incident Management The security operations center (SOC) is responsible for managing an organization’s cybersecurity",
    domain: 5
  },
  {
    id: 1257,
    text: "Paige works for a Cloud Service Provider (CSP). She works on the deployment of new hardware to the data center. When new equipment is placed in the data center, it must be configured using a local console, and the operations team may need the ability to remotely manage the actual equipment and its operating system and configurations. What is used to gain access?",
    options: ["Keyboard, Video, Mouse", "Internet Protocol Security", "Remote Desktop Protocol", "Transmission Control Protocol"],
    answer: 0,
    explanation: ", it must be configured using a local console, and the operations team may need the ability to remotely manage the actual equipment and its operating system and configurations",
    domain: 5
  },
  {
    id: 1258,
    text: "Kai is configuring a server that will handle all network forwarding decisions, which allows the network device to simply perform frame forwarding. This allows for dynamic changes to traffic flows based on customer needs and demands. What is the name of the network approach described here?",
    options: ["Internet Protocol (IP) switching Software-Defined", "Networking (SDN) Dynamic Host", "Configuration Protocol (DHCP) Domain", "Name System Security (DNSSec)"],
    answer: 1,
    explanation: "on customer needs and demands",
    domain: 5
  },
  {
    id: 1259,
    text: "In the shared responsibility model, the consumer will always be responsible for what in the following service models: Infrastructure as a Service (IaaS), Software as a Service (SaaS,) and Platform as a Service (PaaS) models?",
    options: ["Application security Identity and", "access management Platform security", "Governance, Risk management,", "and Complicance (GRC)"],
    answer: 3,
    explanation: "rvice (IaaS), Software as a Service (SaaS,) and Platform as a Service (PaaS) models? Application security Identity and access management Platform security Governance, Risk management, and Complicance (GRC) Correct Answer: D Explanation: Correct answer: Governance, Risk management, and Complicance (GRC) In any cloud deployment model, IaaS, PaaS, or SaaS, the cloud consumer will be responsible for any control over the data they store in the cloud",
    domain: 5
  },
  {
    id: 1260,
    text: "When enforcing OS baselines, which of the following is LEAST likely to be covered?",
    options: ["Compliance requirements Approved", "protocols Data", "retention Approved", "access methods"],
    answer: 2,
    explanation: "ments Approved protocols Data retention Approved access methods Correct Answer: C Explanation: Correct answer: Data Retention OS baselines establish and enforce known good states of system configuration and focus on ensuring least privilege and other security OS and application best practices",
    domain: 5
  },
  {
    id: 1261,
    text: "Acme Cloud LLC. has a requirement to purge magnetic media. Which of the following techniques is the BEST choice to meet this requirement?",
    options: ["Incinerate the magnetic media Shred", "the magnetic media Degauss the", "magnetic media Overwrite the", "media with all zeros"],
    answer: 2,
    explanation: "? Incinerate the magnetic media Shred the magnetic media Degauss the magnetic media Overwrite the media with all zeros Correct Answer: C Explanation: Correct answer: Degauss the magnetic media NIST Special Publication 800-88 defines categories and types of data sanitization, listed from least to most protection below: Degaussing is a technique for purging data from magnetic media",
    domain: 5
  },
  {
    id: 1262,
    text: "Darriel is working for a Cloud Service Provider (CSP). He is the information security manager on the project to build their new data center as they expand their operations to the west. They have been working to secure the lot and building physically with fencing, cameras, secured doors, and so on. As they move into securing the logical side to the data center, he is concerned with the most critical element that needs to be secured for everyone's protection. What element is that?",
    options: ["Remote Desktop Protocol", "(RDP) Physical network", "equipment Management", "plane Hypervisor"],
    answer: 2,
    explanation: "manager on the project to build their new data center as they expand their operations to the west",
    domain: 5
  },
  {
    id: 1263,
    text: "Why do snapshot backups have unique security considerations?",
    options: ["They cannot be transferred off the system where they originated. There is", "no way to determine whether their integrity has been compromised. They do", "not carry the same access control permissions as the system they", "were taken from. They are always stored in an unencrypted format."],
    answer: 2,
    explanation: "e always stored in an unencrypted format",
    domain: 5
  },
  {
    id: 1264,
    text: "For which of the cloud service models does the cloud customer commonly have responsibility for Operating System (OS) patch management?",
    options: ["Software as a Service (SaaS)", "Infrastructure as a Service (IaaS)", "Platform as a Service (PaaS)", "Communication as a Service (CaaS)"],
    answer: 1,
    explanation: "a Service (SaaS) Infrastructure as a Service (IaaS) Platform as a Service (PaaS) Communication as a Service (CaaS) Correct Answer: B Explanation: Correct answer: Infrastructure as a Service (IaaS) The CSP is fully responsible for patch management of the underlying physical infrastructure, but IaaS and PaaS customers commonly have patch management responsibilities",
    domain: 5
  },
  {
    id: 1265,
    text: "NIcole is looking into different public cloud providers for her business. The corporation is looking for the best Platform as a Service (PaaS) vendor to begin moving their servers and applications to. NIcole and her team have been looking at the different audits and certifications that each provider has pursued successfully. What standard would they look for if they are interested in the cloud provider demonstrating compliance with international recommendations for information security?",
    options: ["ISO/IEC 27018 (International Standards Organization / International Electrotechnical Committee) NIST SP", "800-37 (National Institute of Standards and Technology Special Publication) ISO/IEC 27017", "(International Standards Organization / International Electrotechnical Committee) AICPA SOC 2 Type", "II (American Institute for Certified Public Accountants Security Organization Controls)"],
    answer: 2,
    explanation: "vider demonstrating compliance with international recommendations for information security? ISO/IEC 27018 (International Standards Organization / International Electrotechnical Committee) NIST SP 800-37 (National Institute of Standards and Technology Special Publication) ISO/IEC 27017 (International Standards Organization / International Electrotechnical Committee) AICPA SOC 2 Type II (American Institute for Certified Public Accountants Security Organization Controls) Correct Answer: C Explanation: Correct answer: ISO/IEC 27017 (International Standards Organization / International Electrotechnical Committee) ISO/IEC 27017 is an international standard that provides guidelines and best practices for information security controls specific to cloud service providers (CSPs) and cloud-based services",
    domain: 5
  },
  {
    id: 1266,
    text: "Which of the following scenarios is ideal for using network security groups?",
    options: ["A globally load-balanced web app needs to block all traffic except port 443. A", "company needs to monitor traffic on a network for signs of malicious behavior. An", "organization needs to protect its on-premises perimeter network from malicious traffic. A mobile device", "needs to separate its business apps and data from personal apps and data."],
    answer: 0,
    explanation: "e its business apps and data from personal apps and data",
    domain: 5
  },
  {
    id: 1267,
    text: "Which of the following scenarios would trigger communications with regulators?",
    options: ["Approving a change request Signing", "SLAs with customers Noncompliance", "after a natural disaster", "Onboarding a third-party organization"],
    answer: 2,
    explanation: "hird-party organization Correct Answer: C xmexam",
    domain: 5
  },
  {
    id: 1268,
    text: "Which type of control offers the BEST protection when installing virtualization management tools?",
    options: ["Data loss prevention", "Isolated administrative network", "Intrusion detection system", "Hardware security module"],
    answer: 1,
    explanation: "ted administrative network Intrusion detection system Hardware security module Correct Answer: B Explanation: Correct answer: Isolated administrative network Virtualization management consoles are high-value targets that, if compromised, can give attackers control over the entire virtual infrastructure",
    domain: 5
  },
  {
    id: 1269,
    text: "Mahan, a security administrator at Acme Inc., wants to ensure that once records are written to a disk, they cannot be modified or erased. What technology is the BEST choice to meet this requirement?",
    options: ["NGFW", "TLS", "WORM", "DLP"],
    answer: 2,
    explanation: "dministrator at Acme Inc",
    domain: 5
  },
  {
    id: 1270,
    text: "A server administrator wants to create a point-in-time backup of an entire virtual machine running on a type I hypervisor. The virtual machine runs a Structured Query Language (SQL) database server. Which of the following is the BEST choice to create a point-in-time backup in this case?",
    options: ["Windows copy", "Snapshot Database", "dump Ghost", "image"],
    answer: 1,
    explanation: "type I hypervisor",
    domain: 5
  },
  {
    id: 1271,
    text: "The management team of a large retailer is working with Dasha and the information security team to prepare for major incidents. They are aware that it is possible for their online e-commerce systems to be offline at the wrong time of the year, so they are planning for a variety of incidents. To prepare properly, it is necessary to classify the incidents that could occur. What are the critical elements that determine the classification?",
    options: ["If they are anticipating that an event could have an impact on their business, it is critical to consider what time of the day the event could occur. If they", "are anticipating malware, it is necessary to consider the financial impact on their business, which is determined by the time of the day and year. This is further impacted by", "the system(s) that are affected. If they are anticipating that a bad actor could gain access to their system, they must take into consideration the legal impact it could have.", "If they are anticipating that a power outage could occur that would have an impact, it is necessary to take into consideration the time of the day it could occur."],
    answer: 1,
    explanation: "the day and year",
    domain: 5
  },
  {
    id: 1272,
    text: "An online retailer depends on a CSP for website hosting. The retailer needs to resolve vendor incidents as quickly as possible to minimize the financial impact of any downtime. What is the MOST important condition it should include in its SLA with the vendor to ensure that issues are promptly addressed?",
    options: ["A reporting system that alerts to any downtime Bidirectional", "communication with dedicated personnel A guaranteed monthly invoice credit", "if uptime requirements are not met A ticketing", "system that tracks progress as issues are fixed"],
    answer: 1,
    explanation: "romptly addressed? A reporting system that alerts to any downtime Bidirectional communication with dedicated personnel A guaranteed monthly invoice credit if uptime requirements are not met A ticketing system that tracks progress as issues are fixed Correct Answer: B xmexam",
    domain: 5
  },
  {
    id: 1273,
    text: "Jax is a cloud security analyst working for a large manufacturing company. An Indication of Compromise (IoC) has been discovered by their Security Information and Event Manager. In analysing the IoC, Jax discovered that there is an issue that needs to be addressed. One of the things that Jax needs to identify is the severity of the flaw or weakness that is behind the IoC. What could she use to do that?",
    options: ["National Vulnerability Database Common", "Vulnerability Scoring System Common", "Vulnerabilities and Exposures", "Common Weakness Enumeration"],
    answer: 1,
    explanation: "ng the IoC, Jax discovered that there is an issue that needs to be addressed",
    domain: 5
  },
  {
    id: 1274,
    text: "Kai is in the process of creating a golden image for the server installs in an IaaS environment. Kai has been working to ensure that the user accounts and privileges are limited, that logging and auditing are enabled, and that the image has the latest patch levels. What activity has she been engaged in?",
    options: ["SPOF removal Operating System", "(OS) hardening Securing", "the management plane", "Controlling console-based access"],
    answer: 1,
    explanation: "es are limited, that logging and auditing are enabled, and that the image has the latest patch levels",
    domain: 5
  },
  {
    id: 1275,
    text: "Service level management is concerned with the oversight of service level agreements (SLAs). SLAs typically are used in contracts between service providers, such as cloud service providers, and their customers, especially when the provider is a public cloud provider. If the Information Technology (IT) department is building a private cloud in their on-premises data center, what would be the equivalent term used between IT and the business units?",
    options: ["Recovery Time Objectives (RTO) Operational", "Level Agreement (OLA) Master", "Services Agreement (MSA) Annual", "Rate of Occurrence (ARO)"],
    answer: 1,
    explanation: "ders, and their customers, especially when the provider is a public cloud provider",
    domain: 5
  },
  {
    id: 1276,
    text: "Defining clear, measurable, and usable metrics is a core component of which of the following operational controls and standards?",
    options: ["Continuity Management Continual", "Service Improvement Management", "Information Security Management", "Change Management"],
    answer: 1,
    explanation: "tinuity Management Continual Service Improvement Management Information Security Management Change Management Correct Answer: B Explanation: Correct answer: Continual Service Improvement Management Standards such as the Information Technology Infrastructure Library (ITIL) and International Organization for Standardization/International Electrotechnical Commission (ISO/IEC) 20000-1 define operational controls and standards, including:The Official (ISC)² CCSP CBK Reference, 4th Edition",
    domain: 5
  },
  {
    id: 1277,
    text: "Which term describes any entity with a vested interest in an organization that needs to stay informed when incidents occur?",
    options: ["Stakeholder", "Vendor", "Regulator", "Partner"],
    answer: 0,
    explanation: "informed when incidents occur? Stakeholder Vendor Regulator Partner Correct Answer: A xmexam",
    domain: 5
  },
  {
    id: 1278,
    text: "Which international standard contains information about the architectures and security of Trusted Platform Modules (TPMs)?",
    options: ["NIST SP 800-145", "ISO/IEC 27017 ISO/IEC", "11889 NIST", "SP 800-88"],
    answer: 2,
    explanation: "security of Trusted Platform Modules (TPMs)? NIST SP 800-145 ISO/IEC 27017 ISO/IEC 11889 NIST SP 800-88 Correct Answer: C Explanation: Correct answer: ISO/IEC 11889 ISO/IEC 11889 specifies how various cryptographic techniques and architectural elements are to be implemented",
    domain: 5
  },
  {
    id: 1279,
    text: "In use are logs from a tool that can indicate that traffic has been seen passing a switch that should not have made it past the firewall. A tool is needed to block the traffic the next time it is detected automatically. However, the current tool lacks this capability. What tool is MOST LIKELY being used, and what should be used instead?",
    options: ["A firewall and should use intrusion prevention instead Intrusion", "detection and should use intrusion prevention instead Intrusion detection", "and should use a firewall instead A file", "activity monitor and should use intrusion prevention instead"],
    answer: 1,
    explanation: "ing used, and what should be used instead? xmexam",
    domain: 5
  },
  {
    id: 1280,
    text: "Hillary is working to ensure that her company receives the services it requires from its cloud service provider. They have a contract with Service Level Agreements (SLAs) for their bandwidth and uptime. What is Hillary doing?",
    options: ["ITIL (formerly Information Technology Infrastructure", "Library) Change management Information", "Technology Service Management (ITSM)", "Business Continuity Planning (BCP)"],
    answer: 2,
    explanation: "doing? ITIL (formerly Information Technology Infrastructure Library) Change management Information Technology Service Management (ITSM) Business Continuity Planning (BCP) Correct Answer: C xmexam",
    domain: 5
  },
  {
    id: 1281,
    text: "Which of the following necessary attributes of evidence disallows selectively presenting evidence to support a case?",
    options: ["Accurate", "Complete", "Convincing", "Authentic"],
    answer: 1,
    explanation: "sallows selectively presenting evidence to support a case? Accurate Complete Convincing Authentic Correct Answer: B Explanation: Correct answer: Complete Typically, digital forensics is performed as part of an investigation or to support a court case",
    domain: 5
  },
  {
    id: 1282,
    text: "Which of the following domains of ITIL and ISO 20000-1 involve tracking known issues and documented solutions or workarounds?",
    options: ["Continuity Management Information", "Security Management Service", "Level Management", "Problem Management"],
    answer: 3,
    explanation: "obao",
    domain: 5
  },
  {
    id: 1283,
    text: "What type of monitoring is required to identify issues such as dropped packets, excessive memory utilization, slow CPU reaction time, and high latency?",
    options: ["Resource monitoring", "Hardware monitoring", "Performance monitoring", "Baseline monitoring"],
    answer: 2,
    explanation: "high latency? Resource monitoring Hardware monitoring Performance monitoring Baseline monitoring Correct Answer: C xmexam",
    domain: 5
  },
  {
    id: 1284,
    text: "Which of the following terms is LEAST related to the others?",
    options: ["IaC Distributed", "resource scheduling", "Clustering", "HA"],
    answer: 0,
    explanation: "ributed resource scheduling Clustering HA Correct Answer: A Explanation: Correct answer: IaC Clustering is commonly used as part of high availability (HA) schemes for resiliency and redundancy",
    domain: 5
  },
  {
    id: 1285,
    text: "CPU temperature is measured under which category of monitoring?",
    options: ["Hardware", "Security", "Capacity", "Performance"],
    answer: 0,
    explanation: "ring? xmexam",
    domain: 5
  },
  {
    id: 1286,
    text: "Virtual Update Manager (VUM) was developed by which of the following?",
    options: ["Linux", "VMware", "Apple", "Microsoft"],
    answer: 1,
    explanation: "ich of the following? Linux VMware Apple Microsoft Correct Answer: B Explanation: Correct answer: VMware Virtual Update Manager (VUM) was developed by VMware",
    domain: 5
  },
  {
    id: 1287,
    text: "Which of the following do DNS servers use to share information?",
    options: ["STARTTLS Zone", "transfers", "EHLO", "POST"],
    answer: 1,
    explanation: "taobao",
    domain: 5
  },
  {
    id: 1288,
    text: "Waheed has been hired by a corporation to improve their information security. Waheed has realized that the corporation definitely needs to upgrade what they are doing to protect their business and their customers. What should Waheed include in a business plan that will enable real-time investigations of security incidents?",
    options: ["Intrusion Detection System (IDS) Web", "Application Firewall (WAF) Security Operations", "Center (SOC) Security Information", "& Event Manager (SIEM)"],
    answer: 2,
    explanation: "their customers",
    domain: 5
  },
  {
    id: 1289,
    text: "Sabin is a cloud administrator and has now provisioned a Virtual Private Network (VPN) connection from a server in their Platform as a Service (PaaS) environment to a user's VPN software. The connection is going to use the Transport Layer Security (TLS) protocol. What are the two pieces that make up TLS?",
    options: ["TLS handshake protocol and TLS connection protocol", "TLS establishment protocol and TLS record protocol", "TLS handshake protocol and TLS record protocol", "TLS establishment protocol and TLS connection protocol"],
    answer: 2,
    explanation: "col",
    domain: 5
  },
  {
    id: 1290,
    text: "The cloud administrator created a Virtual Machine (VM) in a public cloud provider environment and accidently removed all network access from it, effectively locking themselves out. What is the best option for the administrator to regain access?",
    options: ["Utilize Secure Shell (SSH) to connect Connect to", "the VM through serial console access Utilize Remote", "Desktop Protocol (RDP) to connect Utilize a jumpbox", "to move through the routers to VM"],
    answer: 1,
    explanation: "or the administrator to regain access? Utilize Secure Shell (SSH) to connect Connect to the VM through serial console access Utilize Remote Desktop Protocol (RDP) to connect Utilize a jumpbox to move through the routers to VM Correct Answer: B Explanation: Correct answer: Connect to the VM through serial console access AWS, GCP, and Azure all provide a serial console access option if you have disabled the Network Interface Card (NIC)",
    domain: 5
  },
  {
    id: 1291,
    text: "Alexis, the information security manager for a retail company, is looking to find the best cloud solutions to meet their needs. When assessing the different cloud providers, Alexis and her team request the auditor's reports from the cloud providers. They request the Service Organization Controls (SOC) 1 and 2 reports. These reports are generated after an audit company has completed their third-party audit. What standard did the cloud providers likely follow when performing the audits?",
    options: ["Statement of Standards for Attestation Encagement", "(SSAE) Generally Accepted Privacy Principles (GAPP)", "Statement of Auditing Standards (SAS)", "International Standards Organization (ISO) 27050"],
    answer: 0,
    explanation: "ders",
    domain: 6
  },
  {
    id: 1292,
    text: "Which type of business contract details requirements, expectations, and deliverables for a major project?",
    options: ["Statement of work (SOW)", "Memorandum of understanding (MOU)", "Master service agreement (MSA)", "Service-level agreement (SLA)"],
    answer: 0,
    explanation: "vice agreement (MSA) Service-level agreement (SLA) Correct Answer: A xmexam",
    domain: 6
  },
  {
    id: 1293,
    text: "Which approach to data privacy carries the least risk for an international organization?",
    options: ["Complying with GDPR to ensure data privacy across all operations Requiring compliance with", "only US-based data privacy laws for all the organization's data Adopting a minimal", "compliance approach that meets only the weakest global privacy standards Implementing data privacy", "controls that are unique to each location data travels through or resides in"],
    answer: 0,
    explanation: "s that are unique to each location data travels through or resides in Correct Answer: A Explanation: Correct answer: Complying with GDPR to ensure data privacy across all operations Organizations must navigate multiple legal frameworks, and choosing the strictest baseline helps reduce compliance risks globally",
    domain: 6
  },
  {
    id: 1294,
    text: "Which principle from the Generally Accepted Privacy Principles (GAPP) concerns the accuracy and completeness of collected data?",
    options: ["Quality", "Management", "Access", "Notice"],
    answer: 0,
    explanation: "Principles (GAPP) concerns the accuracy and completeness of collected data? Quality Management Access Notice Correct Answer: A Explanation: Correct answer: Quality GAPP ensures that organizations handle personal data responsibly, and accuracy is essential for preventing harm from incorrect or incomplete information",
    domain: 6
  },
  {
    id: 1295,
    text: "Which of the following risk treatment strategies requires the LARGEST risk appetite?",
    options: ["Acceptance", "Transference", "Mitigation", "Avoidance"],
    answer: 0,
    explanation: "RGEST risk appetite? Acceptance Transference Mitigation Avoidance Correct Answer: A Explanation: Correct answer: Acceptance Risk treatment refers to the ways that an organization manages potential risks",
    domain: 6
  },
  {
    id: 1296,
    text: "Any information relating to past, present, or future medical status that can be tied to a specific individual is known as which of the following?",
    options: ["Payment Card Industry (PCI) information", "Protected Health Information (PHI) Gramm", "Leach Bliley Act (GLBA) Health", "Information Portability Accountability Act"],
    answer: 1,
    explanation: "rd Industry (PCI) information Protected Health Information (PHI) Gramm Leach Bliley Act (GLBA) Health Information Portability Accountability Act Correct Answer: B Explanation: Correct answer: Protected Health Information (PHI) Protected Health Information (PHI) is a subset of Personally Identifiable Information (PII)",
    domain: 6
  },
  {
    id: 1297,
    text: "Which of the following documents is an umbrella document that a CSP and the customer agree on before signing any other contracts?",
    options: ["MSA", "SLA", "SOW", "BPA"],
    answer: 0,
    explanation: "the customer agree on before signing any other contracts? MSA SLA SOW BPA Correct Answer: A xmexam",
    domain: 6
  },
  {
    id: 1298,
    text: "Which of the following is an example of risk transference?",
    options: ["Using an API gateway Moving", "to a less risky line", "of business Hiring a managed", "services provider Buying insurance"],
    answer: 3,
    explanation: "aged services provider Buying insurance Correct Answer: D Explanation: Correct answer: Buying insurance Risk treatment refers to the ways that an organization manages potential risks",
    domain: 6
  },
  {
    id: 1299,
    text: "Which global digital forensics standard provides guidance for digital evidence analysis?",
    options: ["ISO/IEC", "27050", "ISO/IEC 27043 ISO/IEC", "27042 ISO/IEC 27037"],
    answer: 2,
    explanation: "27043 ISO/IEC 27042 ISO/IEC 27037 Correct Answer: C xmexam",
    domain: 6
  },
  {
    id: 1300,
    text: "Which of the following activities is considered breaking a law?",
    options: ["Not following CIS", "standards Not complying with PCI", "DSS Disregarding GDPR in Europe", "Breaking contractual requirements"],
    answer: 2,
    explanation: "in Europe Breaking contractual requirements Correct Answer: C Explanation: Correct answer: Disregarding GDPR in Europe Organizations must understand which frameworks carry the force of law and which are industry standards or contractual requirements",
    domain: 6
  },
  {
    id: 1301,
    text: "Which of the following scenarios exemplifies conflicting international legislation?",
    options: ["A foreign country’s government requires a blogging site to provide user information even though the user’s actions are lawful", "in their own country. An online merchant must demonstrate that it has proper controls to handle credit card", "transactions. A cloud service provider must meet uptime requirements for a client as outlined in a service-level agreement.", "A healthcare company in the United States must use encryption when storing or transferring patients' personal health information."],
    answer: 0,
    explanation: "n storing or transferring patients' personal health information",
    domain: 6
  },
  {
    id: 1302,
    text: "Jonas is working for a corporation as an information security manager. He is working with his team to determine the risk associated with moving a critical server to the cloud. This particular server is used to store data required by Research & Development (R&D). They are working to determine the risk of having this data in the cloud versus having it at the corporate data center. They are concerned with not having access when they need it versus their concern that their reputation could be damaged if they do not have the data when needed. What type of risk assessment would work the best for this assessment?",
    options: ["Quantitative risk assessment", "Bow tie assessment", "Fault tree analysis", "Qualitative risk assessment"],
    answer: 3,
    explanation: "cal server to the cloud",
    domain: 6
  },
  {
    id: 1303,
    text: "Which of the following roles maintains, administers, and secures data based on policies and instructions provided to them?",
    options: ["Data Owner", "Data Steward", "Data Processor", "Data Custodian"],
    answer: 3,
    explanation: "ed on policies and instructions provided to them? Data Owner Data Steward Data Processor Data Custodian Correct Answer: D Explanation: Correct answer: Data Custodian There are several roles and responsibilities related to data ownership, including:(ISC)2 CCSP Certified Cloud Security Professional Official Study Guide, 3rd Edition",
    domain: 6
  },
  {
    id: 1304,
    text: "The A in the CIA triad stands for what?",
    options: ["Authentication", "Authorization", "Availability", "Auditing"],
    answer: 2,
    explanation: "C xmexam",
    domain: 6
  },
  {
    id: 1305,
    text: "Which of the following situations poses a unique challenge to an auditor assessing a cloud environment?",
    options: ["Dynamic failover systems in separate jurisdictions", "Industry regulations Required timing of", "audits Physical access controls for", "servers in a data center"],
    answer: 0,
    explanation: "ions Required timing of audits Physical access controls for servers in a data center Correct Answer: A Explanation: Correct answer: Dynamic failover systems in separate jurisdictions The distributed and dynamic nature of cloud infrastructure introduces complexities that traditional on-premises audits may not encounter",
    domain: 6
  },
  {
    id: 1306,
    text: "Which of the following standards seeks to provide internationally accepted guidelines for eDiscovery processes and best practices?",
    options: ["International Organization for Standardization/International Electrotechnical Commission (ISO/IEC) 20000-1", "Federal Information Processing Standard (FIPS) 140-3 National Institute", "of Standards and Technology (NIST) Special Publication (SP)", "800-53 International Standards Organization/International Electrotechnical Commission (ISO/IEC) 27050"],
    answer: 3,
    explanation: "tion (SP) 800-53 International Standards Organization/International Electrotechnical Commission (ISO/IEC) 27050 Correct Answer: D Explanation: Correct answer: International Standards Organization/International Electrotechnical Commission (ISO/IEC) 27050 ISO/IEC 27050 covers all steps of the eDiscovery processes, including identification, preservation, collection, processing, review, analysis, and the final production of the requested data archive",
    domain: 6
  },
  {
    id: 1307,
    text: "Which of the following risk treatment strategies involves implementing controls to manage the likelihood or impact of a potential risk?",
    options: ["Mitigation Compensating", "controls", "Transference", "Avoidance"],
    answer: 0,
    explanation: "rols to manage the likelihood or impact of a potential risk? Mitigation Compensating controls Transference Avoidance Correct Answer: A Explanation: Correct answer: Mitigation Risk treatment refers to the ways that an organization manages potential risks",
    domain: 6
  },
  {
    id: 1308,
    text: "Sigrid works for a Cloud Service Provider and has been certified against ITIL. She knows that ITIL addresses the practices needed within a data center to provide the services that it needs for its customers. What is the name of the practice that ensures service will be there in the case of a horrible natural disaster that has affected the area?",
    options: ["Continuity management Incident", "management Business continuity", "management Disaster", "recovery management"],
    answer: 0,
    explanation: "ows that ITIL addresses the practices needed within a data center to provide the services that it needs for its customers",
    domain: 6
  },
  {
    id: 1309,
    text: "Which of the following is a privacy framework, built around five key principles, that focuses on privacy controls for cloud environments?",
    options: ["GAPP ISO", "27018 PIA", "PCI", "DSS"],
    answer: 1,
    explanation: "built around five key principles, that focuses on privacy controls for cloud environments? GAPP ISO 27018 PIA PCI DSS Correct Answer: B Explanation: Correct answer: ISO 27018 ISO 27018 is part of the ISO 27000 suite of standards",
    domain: 6
  },
  {
    id: 1310,
    text: "Which type of SOC report deals with financial controls to help a customer understand the financial stability of a CSP?",
    options: ["SOC 3 SOC", "1 SOC 2", "Type II SOC", "2 Type I"],
    answer: 1,
    explanation: "help a customer understand the financial stability of a CSP? SOC 3 SOC 1 SOC 2 Type II SOC 2 Type I Correct Answer: B Explanation: Correct answer: SOC 1 SOC 1 reports focus on financial reporting controls",
    domain: 6
  },
  {
    id: 1311,
    text: "A real estate company is planning to move the services that they have built in an on premises data center into the cloud. They have found that there are Software as a Service (SaaS) providers that have the capabilities that they need. One of their concerns is that it is possible that they will be attacked by bad actors because of the confidential information that they store regarding their customers and their loan applications. If there is an attack, they will need access to data that is vital to the Incident Response (IR) process. Of the following, which is TRUE regarding eDiscovery?",
    options: ["Only log files can be recovered during eDiscovery in a traditional data center environment eDiscovery in", "a traditional data center is typically easier and less complex than eDiscovery in a cloud environment", "eDiscovery in a cloud environment is typically easier and less complex than eDiscovery in a", "traditional data center Only log files can be recovered during eDiscovery in a cloud environment"],
    answer: 1,
    explanation: "ck, they will need access to data that is vital to the Incident Response (IR) process",
    domain: 6
  },
  {
    id: 1312,
    text: "You are working with the United States government and are in charge of securing some of the information systems within your agency. What regulation requires your agency to protect the government systems and the data that they hold?",
    options: ["Federal", "Information", "Processing", "System 140 National Institute of Standards and Technology Special Publication 800-53 Federal Risk and Authorization Management Plan Federal Information Security Management Act"],
    answer: 3,
    explanation: "System 140 National Institute of Standards and Technology Special Publication 800-53 Federal Risk and Authorization Management Plan Federal Information Security Management Act Correct Answer: D xmexam",
    domain: 6
  },
  {
    id: 1313,
    text: "Which type of CSP audit report removes sensitive information and is designed for public consumption?",
    options: ["SOC 1 Type", "I SOC 3", "SOC 2 SOC", "1 Type II"],
    answer: 1,
    explanation: "on and is designed for public consumption? SOC 1 Type I SOC 3 SOC 2 SOC 1 Type II Correct Answer: B Explanation: Correct answer: SOC 3 Customers and the general public need a clear view of CSP controls without confidential information",
    domain: 6
  },
  {
    id: 1314,
    text: "Which regulation applies to organizations in Canada and the United States that are responsible for power generation?",
    options: ["HITECH PCI", "DSS", "NERC/CIP", "HIPAA"],
    answer: 2,
    explanation: "anizations in Canada and the United States that are responsible for power generation? HITECH PCI DSS NERC/CIP HIPAA Correct Answer: C Explanation: Correct answer: NERC/CIP Critical infrastructure providers, such as those in the energy sector, must follow strict cybersecurity standards to ensure resilience and compliance",
    domain: 6
  },
  {
    id: 1315,
    text: "A forensic investigator must complete the task of identifying, collecting, and securing electronic data and records so that they can be used in a criminal court hearing. What task is this forensic investigator completing?",
    options: ["Investigation Chain", "of custody", "eDiscovery", "Non-repudiation"],
    answer: 2,
    explanation: "ds so that they can be used in a criminal court hearing",
    domain: 6
  },
  {
    id: 1316,
    text: "An information security manager works at a hospital, and she is responsible for the upcoming audit. The hospital must be in compliance with the Health Insurance Portability and Accountability Act (HIPAA). So she has been working hard to ensure that the audit will go smoothly. Which of the following is the first step she started with?",
    options: ["Gap analysis Define", "audit program objectives", "Audit fieldwork Identify", "scope and restrictions"],
    answer: 1,
    explanation: "must be in compliance with the Health Insurance Portability and Accountability Act (HIPAA)",
    domain: 6
  },
  {
    id: 1317,
    text: "Quinn, an engineering manager at Acme Inc., and her team have been working with a Managed Service Provider (MSP) regarding their Infrastructure as a Service (IaaS) deployment. They are working to move an on-premises data center into the cloud. They must be clear about their expectations of the cloud provider to protect their customers personal data. These requirements should be spelled out in which type of agreement?",
    options: ["Business associate agreement", "Privacy level agreement", "Master services agreement", "Service level agreement"],
    answer: 1,
    explanation: "ged Service Provider (MSP) regarding their Infrastructure as a Service (IaaS) deployment",
    domain: 6
  },
  {
    id: 1318,
    text: "Which of the following types of controls should be exercised when engaging external audits?",
    options: ["Verifying the competency of the auditor Assigning", "IT staff to approve audit findings Ensuring", "reports are co-created with the internal IT", "team Implementing continuous monitoring of control effectiveness"],
    answer: 0,
    explanation: "monitoring of control effectiveness Correct Answer: A xmexam",
    domain: 6
  },
  {
    id: 1319,
    text: "When would an organization implement a control framework such as NIST Special Publication 800-53?",
    options: ["During cloud service architecture design", "While conducting an internal audit", "Before conducting a gap", "analysis After identifying risks"],
    answer: 3,
    explanation: "ing an internal audit Before conducting a gap analysis After identifying risks Correct Answer: D Explanation: Correct answer: After identifying risks A control framework such as NIST SP 800-53 is applied once an organization knows what risks exist so that appropriate safeguards can be mapped and implemented",
    domain: 6
  },
  {
    id: 1320,
    text: "Organizations like yours are looking for guidance on how to meet business objectives while addressing the potential security risks associated with SaaS applications. Which of the following would be the MOST helpful?",
    options: ["CSA", "IANA", "IEEE", "OWASP"],
    answer: 0,
    explanation: "bjectives while addressing the potential security risks associated with SaaS applications",
    domain: 6
  },
  {
    id: 1321,
    text: "Which type of internal audit control helps prevent conflicts of interest?",
    options: ["Letting a non-technical employee from another department perform the", "audit Employing a third-party auditor to perform the audit", "Having the auditor report to an executive outside the", "IT team Rotating audit responsibilities within the IT team"],
    answer: 2,
    explanation: "eam Rotating audit responsibilities within the IT team Correct Answer: C Explanation: Correct answer: Having the auditor report to an executive outside the IT team Preventing conflicts of interest is essential so that audit findings are trustworthy and not influenced by the teams being audited",
    domain: 6
  },
  {
    id: 1322,
    text: "As the information security manager, you are working with the Information Technology (IT) manager to aid them in stepping up the management of the IT environment to provide a more effectively managed environment. When IT is managed well, reliability is much higher. This is a fundamental part of information security. To aid the IT manager, you have been tasked with updating the IT best practices for your organization, which includes updating the service strategy to include cloud practices. Which framework would be perfect here?",
    options: ["COBIT (formerly Control OBjectives for Information Technology) National", "Institute of Standards and Technology (NIST) CyberSecurity Framework", "(CSF) International Standards Organization/ International Electrotechnical Commission (ISO/IEC)", "27001 ITIL (formerly Information Technology Infrastructure Library)"],
    answer: 3,
    explanation: "n security",
    domain: 6
  },
  {
    id: 1323,
    text: "The medications that someone is taking are an example of which of the following types of sensitive data?",
    options: ["IP", "PCI", "PHI", "PII"],
    answer: 2,
    explanation: "following types of sensitive data? IP PCI PHI PII Correct Answer: C xmexam",
    domain: 6
  },
  {
    id: 1324,
    text: "Which of the following activities is done in the planning stage of an audit?",
    options: ["Define the deliverables Perform", "a risk assessment Identify", "personally identifiable information Establish", "continuous monitoring metrics"],
    answer: 0,
    explanation: "iable information Establish continuous monitoring metrics Correct Answer: A Explanation: Correct answer: Define the deliverables Audits require structured phases, and understanding what occurs during planning ensures that audits are efficient, targeted, and well defined",
    domain: 6
  },
  {
    id: 1325,
    text: "The Federal Information Security Management Act is a piece of legislation that pertains specifically to which of the following?",
    options: ["Systems that interact with federal agencies File integrity as it pertains to data privacy and nonrepudiation Storing Personally", "Identifiable", "Information", "(PII) Cryptographic modules"],
    answer: 0,
    explanation: "Storing Personally Identifiable Information (PII) Cryptographic modules Correct Answer: A xmexam",
    domain: 6
  },
  {
    id: 1326,
    text: "Which of the following is a data subject right under the European Union (EU) General Data Protection Regulation (GDPR)?",
    options: ["Right of availability", "Right to repudiation", "Right of access", "Right to relocation"],
    answer: 2,
    explanation: "on Regulation (GDPR)? Right of availability Right to repudiation Right of access Right to relocation Correct Answer: C Explanation: Correct answer: Right of access Data subject rights under the EU GDPR include: Of the answers listed, only right of access is a data subject right under the GDPR",
    domain: 6
  },
  {
    id: 1327,
    text: "Which of the following common contractual terms is MOST related to customers' efforts to avoid vendor lock-in?",
    options: ["Access to", "Cloud/Data Right", "to Audit", "Litigation Compliance"],
    answer: 0,
    explanation: "cess to Cloud/Data Right to Audit Litigation Compliance Correct Answer: A xmexam",
    domain: 6
  },
  {
    id: 1328,
    text: "The Privacy Management Framework (PMF), formerly known as the Generally Accepted Privacy Principles (GAPP) standard, was created to help businesses with creating and managing a privacy framework within their business. If a business fails to do this and inform its customers of their privacy policy, they have violated which of the PMF nine principles?",
    options: ["Agreement, notice, and communication", "Collection and creation Monitoring", "and enforcement Data", "integrity and quality"],
    answer: 0,
    explanation: "lp businesses with creating and managing a privacy framework within their business",
    domain: 6
  },
  {
    id: 1329,
    text: "Some communication policies are required by law or regulation. What law requires reporting within 72 hours after an incident is discovered?",
    options: ["Health Information", "Portability and", "Accountability Act (HIPAA) Gramm Leach Bliley Act (GLBA)", "General Data Protection Regulation (GDPR) Sarbanes Oxley (SOX)"],
    answer: 2,
    explanation: "Accountability Act (HIPAA) Gramm Leach Bliley Act (GLBA) General Data Protection Regulation (GDPR) Sarbanes Oxley (SOX) Correct Answer: C Explanation: Correct answer: General Data Protection Regulation (GDPR) Some post incident communication policies are mandated by legislation or regulation",
    domain: 6
  },
  {
    id: 1330,
    text: "Which of the following is an umbrella agreement that might cover MULTIPLE projects that two companies collaborate on?",
    options: ["MSA", "NDA", "SLA", "SOW"],
    answer: 0,
    explanation: "la agreement that might cover MULTIPLE projects that two companies collaborate on? MSA NDA SLA SOW Correct Answer: A Explanation: Correct answer: MSA Two organizations working together may have various agreements and contracts in place to manage their risks",
    domain: 6
  },
  {
    id: 1331,
    text: "A real estate corporation is utilizing file storage in a Platform as a Service (PaaS). They are consulting with their lawyers to determine how data must be protected given the laws that they must comply with. If the data is stored with the European Union (EU) region, what law or regulation would the data be governed by?",
    options: ["The nation where the data is collected The", "nation where the business is registered The user", "must specify where data is to be located", "and stored The nation where the data is stored"],
    answer: 0,
    explanation: "the European Union (EU) region, what law or regulation would the data be governed by? xmexam",
    domain: 6
  },
  {
    id: 1332,
    text: "What should an organization define to ensure that audits focus on relevant areas?",
    options: ["Privacy", "impact assessment", "Internal control checklist Scope", "statements Statement of work"],
    answer: 2,
    explanation: "Internal control checklist Scope statements Statement of work Correct Answer: C Explanation: Correct answer: Scope statements Setting the correct audit scope ensures that auditors concentrate on the most relevant systems, processes, and risks",
    domain: 6
  },
  {
    id: 1333,
    text: "What type of system is a systematic approach to information security comprised of processes, technology, and people designed to assist in the protection and management of an organization's information?",
    options: ["Configuration", "Management DataBase", "(CMDB) International Standards Organization/International Electrotechnical Commission (ISO/IEC) 27042", "Information Security Management System (ISMS) Privacy Management Framework (PMF)"],
    answer: 2,
    explanation: "(CMDB) International Standards Organization/International Electrotechnical Commission (ISO/IEC) 27042 Information Security Management System (ISMS) Privacy Management Framework (PMF) Correct Answer: C Explanation: Correct answer: Information Security Management System (ISMS) An Information Security Management System (ISMS) is intended to protect the confidentiality, availability, and integrity of an organization's data",
    domain: 6
  },
  {
    id: 1334,
    text: "Which of the following common contractual terms might include requiring the service provider to provide an annual SOC 2 report?",
    options: ["Access to", "Cloud/Data Compliance", "Metrics", "Assurance"],
    answer: 3,
    explanation: "n annual SOC 2 report? Access to Cloud/Data Compliance Metrics Assurance Correct Answer: D xmexam",
    domain: 6
  },
  {
    id: 1335,
    text: "As part of the risk management process, an information security professional has been asked to perform an assessment of values. The values that the corporation is looking for involve understanding how much money a specific threat could cost the business. To understand that, they need to be clear about how many times each specific threat that they analyze could happen each year. Which type of assessment has this engineer been asked to perform, and what metric will indicate how often the organization can expect the threat to manifest as an event?",
    options: ["Qualitative assessment, SLE", "Quantitative assessment, ARO", "Quantitative assessment, SLE", "Qualitative assessment, ALE"],
    answer: 1,
    explanation: "alues that the corporation is looking for involve understanding how much money a specific threat could cost the business",
    domain: 6
  },
  {
    id: 1336,
    text: "An organization is in a civil legal battle with a previous employee. The organization has requested that one of its engineers search for and collect electronic data (e.g., emails and stored files) regarding the case so that it can be used in court proceedings. What task has this engineer been asked to complete?",
    options: ["eDiscovery eCollection", "Digital Forensics", "Evidence", "Preservation"],
    answer: 0,
    explanation: "gineers search for and collect electronic data (e",
    domain: 6
  },
  {
    id: 1337,
    text: "A Chief Executive Officer (CEO) has tasked their Chief Information Security Officer (CISO) with updating the policy that informs a user regarding what they are allowed to use cloud storage for regarding both corporate and personal uses. This acceptable use policy is an example of what type of policy?",
    options: ["Procedure", "Functional", "Guideline", "Baseline"],
    answer: 1,
    explanation: "rmation Security Officer (CISO) with updating the policy that informs a user regarding what they are allowed to use cloud storage for regarding both corporate and personal uses",
    domain: 6
  },
  {
    id: 1338,
    text: "What steps can an organization take to ensure that electronically stored information (ESI) is preserved and collected in a defensible manner during eDiscovery?",
    options: ["Never put data in the", "cloud Document the entire process", "Always use police investigators", "Always hire a contractor"],
    answer: 1,
    explanation: "aobao",
    domain: 6
  },
  {
    id: 1339,
    text: "A multinational bank has discovered that a sensitive database in their Infrastructure as a Service (IaaS) deployment has been compromised. They have contacted law enforcement for assistance because they believe that it is an external bad actor who is responsible for this breach. Law enforcement needs to pursue, recover, and analyze the digital forensic information to determine who the bad actor is to be able to locate, arrest, and prosecute them for their crime. Which of the following standards establishes internationally recognized standards for eDiscovery that applies to this scenario?",
    options: ["ISO/IEC 27050", "ISO/IEC 27018", "ISO/IEC 27002", "ISO/IEC 27001"],
    answer: 0,
    explanation: "yment has been compromised",
    domain: 6
  },
  {
    id: 1340,
    text: "Alphonse is an information security manager working for a training corporation located in France. Alphonse is responsible for the Security Operations Center (SOC). He has just been advised by one of the technicians that they received an alert that is an Indication Of Compromise (IoC). At first glance, it appears that a bad actor has been able to gain access to their database of student information. Under the European Union's (EU) General Data Protection Regulation (GDPR) there is a notification requirement. How long does a data controller have to notify the applicable government agency after a data breach or leak of personal or private information and when does the clock start?",
    options: ["72 hours from the moment the technician saw the IoC 48", "hours from the moment the technician saw the IoC 72 hours", "from the moment the manager was informed of the IoC 48", "hours from the moment the manager was informed of the IoC"],
    answer: 0,
    explanation: "at is an Indication Of Compromise (IoC)",
    domain: 6
  },
  {
    id: 1341,
    text: "Which of the following regulations deals with law enforcement's access to data that may be located in data centers in other jurisdictions?",
    options: ["US CLOUD", "Act GLBA", "SCA", "SOX"],
    answer: 0,
    explanation: "law enforcement's access to data that may be located in data centers in other jurisdictions? US CLOUD Act GLBA SCA SOX Correct Answer: A Explanation: Correct answer: US CLOUD Act A company may be subject to various regulations that mandate certain controls be in place to protect customers’ sensitive data or ensure regulatory transparency",
    domain: 6
  },
  {
    id: 1342,
    text: "Willa is working for an insurance company as an information security manager. They have recently started using a Platform as a Service (PaaS) implementation for their database that contains their current customers' personal data. She has created a new privacy policy that will appear on their website to explain their practices to their customers. What principle of the Privacy Management Framerwork (PMF) [formerly the Generally Accepted Privacy Principles (GAPP)] is she addressing?",
    options: ["Agreement, notice, and communication", "Disclosure to third parties", "Monitoring and enforcement Use,", "retention, and disposal"],
    answer: 0,
    explanation: "that contains their current customers' personal data",
    domain: 6
  },
  {
    id: 1343,
    text: "Communication, consent, control, transparency, and independent yearly audits are the five key principles focused on by which of the following standards?",
    options: ["International Standards Organization/International Electrotechnical Commission (ISO/IEC) 31000", "International Standards Organization/International Electrotechnical Commission (ISO/IEC) 27018", "International Standards Organization/International Electrotechnical Commission (ISO/IEC) 27001", "International Standards Organization/International Electrotechnical Commission (ISO/IEC) 27050"],
    answer: 1,
    explanation: "01 International Standards Organization/International Electrotechnical Commission (ISO/IEC) 27050 Correct Answer: B xmexam",
    domain: 6
  },
  {
    id: 1344,
    text: "A banking corporation is planning to move to a cloud Infrastructure as a Service (IaaS). The lead information security manager, Ava, has been working with her team to evaluate potential cloud providers. They want to see if the controls that the cloud provider has in place are appropriate without concern for effectiveness. Which report should they request?",
    options: ["System and Organization Control 2 (SOC 2®) Type 2", "System and Organization Control 1 (SOC 1®) Type 1", "System and Organization Control 2 (SOC 2®) Type", "1 System and Organization Control 3 (SOC 3®)"],
    answer: 2,
    explanation: "to see if the controls that the cloud provider has in place are appropriate without concern for effectiveness",
    domain: 6
  },
  {
    id: 1345,
    text: "Which of the following is a risk management tool for preserving the confidentiality, integrity, and availability of information?",
    options: ["Gap analysis", "NIST CSF", "SSAE", "ISMS"],
    answer: 3,
    explanation: "r preserving the confidentiality, integrity, and availability of information? Gap analysis NIST CSF SSAE ISMS Correct Answer: D Explanation: Correct answer: ISMS An information security management system (ISMS) is a structured framework of policies, procedures, and controls designed to preserve confidentiality, integrity, and availability (CIA) of information through risk management",
    domain: 6
  },
  {
    id: 1346,
    text: "Why would an organization conduct a gap analysis?",
    options: ["To track how it manages users' personally identifiable information", "(PII) To determine whether its CSP adheres to compliance", "regulations To establish a baseline for employee security awareness", "training To compare its current practices to industry standards"],
    answer: 3,
    explanation: "ct Answer: D xmexam",
    domain: 6
  },
  {
    id: 1347,
    text: "Which of the following types of SOC audits includes a review of an organization's control designs but nothing else?",
    options: ["SOC 3 SOC", "2 Type II", "SOC 2 Type", "I SOC 1"],
    answer: 2,
    explanation: "ew of an organization's control designs but nothing else? SOC 3 SOC 2 Type II SOC 2 Type I SOC 1 Correct Answer: C Explanation: Correct answer: SOC 2 Type I Service Organization Control (SOC) reports are generated by the American Institute of CPAs (AICPA)",
    domain: 6
  },
  {
    id: 1348,
    text: "Acme Inc. has conducted a risk assessment related to entering a new line of business. The assessment determined that the risk of entering the new line of business amounts to an expected annual loss of $1,000,000. The business line is expected to earn $500,000 annually. An insurance policy would cover Acme Inc.'s exposure to the risk for $100,000. In this scenario, which risk response is the organization likely to take?",
    options: ["Accept the risk", "Transfer the risk", "Avoid the risk", "Mitigate the risk"],
    answer: 1,
    explanation: "isk of entering the new line of business amounts to an expected annual loss of $1,000,000",
    domain: 6
  },
  {
    id: 1349,
    text: "What are the main impacts of audit requirements on a company in a highly regulated industry?",
    options: ["Stricter vendor management and contractual", "obligations Lowered efficiency and increased", "risks Procedural and financial effects", "Increased capacity and scalability"],
    answer: 2,
    explanation: "risks Procedural and financial effects Increased capacity and scalability Correct Answer: C Explanation: Correct answer: Procedural and financial effects Audit requirements have procedural impacts because organizations must document processes, maintain controls, and demonstrate compliance",
    domain: 6
  },
  {
    id: 1350,
    text: "Which of the following is a regulation designed to protect the US and Canadian power grids?",
    options: ["Bulk Electric Service National Electric", "Reliability Corporation/Critical Infrastructure Protection International", "Standards Organization 27018 Supervisory", "Control and Data Aquisition"],
    answer: 1,
    explanation: "ervisory Control and Data Aquisition Correct Answer: B xmexam",
    domain: 6
  },
  {
    id: 1351,
    text: "What does the Clarifying Lawful Overseas Use of Data (CLOUD) Act address?",
    options: ["Conflicting international", "legislation Forensic", "requirements Data", "localization E-discovery"],
    answer: 0,
    explanation: "zation E-discovery Correct Answer: A xmexam",
    domain: 6
  },
  {
    id: 1352,
    text: "Nabil works for a pharmaceutical company and is responsible for the protection of customers' data. They have many drug trials that they perform as they are developing new drugs. The test results and comments from the patients who are trying these new drugs do need to be shared with the researchers. To protect the patients, the data must be anonymized. What exactly must be removed?",
    options: ["All identification Direct", "and indirect identifiers", "Indirect identifiers only", "Direct identifiers only"],
    answer: 1,
    explanation: "developing new drugs",
    domain: 6
  },
  {
    id: 1353,
    text: "A corporation follows the Privacy Management Framework (PMF), which replaced the Generally Accepted Privacy Principles (GAPP), as the formation of their privacy program. Which component of the PMF applies most closely when that corporation is going to use a payment processor for their payment transactions?",
    options: ["Collection and creation Disclosure", "to third parties", "Monitoring and enforcement", "Security for privacy"],
    answer: 1,
    explanation: "ivacy program",
    domain: 6
  },
  {
    id: 1354,
    text: "Many cloud customers have legal requirements to protect data that they place on the cloud provider's servers. There are some legal responsibilities for the cloud provider to protect that data. Therefore, it is normal for the cloud provider to have their data centers audited using which of the following?",
    options: ["Cloud operators", "Cloud architect", "External auditor", "Internal auditor"],
    answer: 2,
    explanation: "ome legal responsibilities for the cloud provider to protect that data",
    domain: 6
  },
  {
    id: 1355,
    text: "Which of the following, published by the Cloud Security Alliance (CSA), provides a detailed framework and approach for handling controls that are pertinent and applicable in a cloud environment?",
    options: ["National Institute of Standards & Technology (NIST)", "Special Publication 800-53 Consensus Assessment Initiative Questionnaire", "(CAIQ) Cloud Controls Matrix (CCM) International Standards", "Organization (ISO)/International Electrotechnical Commission (IEC) 27017"],
    answer: 2,
    explanation: "nsensus Assessment Initiative Questionnaire (CAIQ) Cloud Controls Matrix (CCM) International Standards Organization (ISO)/International Electrotechnical Commission (IEC) 27017 Correct Answer: C Explanation: Correct answer: Cloud Controls Matrix (CCM) The Cloud Controls Matrix (CCM) outlines a detailed approach for handling controls in a cloud environment",
    domain: 6
  },
  {
    id: 1356,
    text: "A company wants to implement a boundary protection system. It needs to know the product has been certified as secure. What should the company do to verify this?",
    options: ["Send an auditor to the provider's office to", "test the product's security manually Determine whether the", "product is listed in the CSA STAR database Check the product's", "EAL level at the Common Criteria Portal Request certification under FIPS 140-2"],
    answer: 2,
    explanation: "product is listed in the CSA STAR database Check the product's EAL level at the Common Criteria Portal Request certification under FIPS 140-2 Correct Answer: C Explanation: Correct answer: Check the product's EAL level at the Common Criteria Portal Organizations need assurance that security products meet internationally recognized standards before deploying them in sensitive environments",
    domain: 6
  },
  {
    id: 1357,
    text: "Which type of deliverable is expected from an audit that follows the FedRAMP framework?",
    options: ["SOC 3 Statement on Standards", "for Attestation Engagements (SSAE)", "Authorization to Operate (ATO)", "SOC 2 Type II"],
    answer: 2,
    explanation: "n to Operate (ATO) SOC 2 Type II Correct Answer: C xmexam",
    domain: 6
  },
  {
    id: 1358,
    text: "A cloud information security manager needs to ensure their organization is aware of all ten key principles of the Privacy Management Framework (PMF). Which of the following is the principle that is addressed through input validation and hashing?",
    options: ["Management Collection and", "creation Data integrity", "and quality Security", "for privacy"],
    answer: 2,
    explanation: "ples of the Privacy Management Framework (PMF)",
    domain: 6
  },
  {
    id: 1359,
    text: "A CSP with a moderate risk appetite intends to build a data center in a location with a slight chance of flooding. The company decides to take a risk transference approach. Which course of action would accomplish this?",
    options: ["Choose a new location for the data center Build", "the data center with no additional controls Build", "the data center on an elevated platform to", "reduce the impact of flooding Purchase flood insurance"],
    answer: 3,
    explanation: "com Choose a new location for the data center Build the data center with no additional controls Build the data center on an elevated platform to reduce the impact of flooding Purchase flood insurance Correct Answer: D Explanation: Correct answer: Purchase flood insurance CSPs must manage physical risks, such as flooding, that could disrupt availability and regulatory compliance",
    domain: 6
  },
  {
    id: 1360,
    text: "Alexei works for a Russian bank and knows as an information security professional that they must be careful with the personal information about their customers that they collect and maintain. Which Russian law states that any collecting, processing, or storing of data on Russian citizens must be done from systems that are physically located in the Russian Federation?",
    options: ["Act on the Protection of", "Personal Information Federal Law 526-FZ", "Gramm-Leach-Bliley Act (GLBA) General", "Data Protection Regulation (GDPR)"],
    answer: 1,
    explanation: "Which Russian law states that any collecting, processing, or storing of data on Russian citizens must be done from systems that are physically located in the Russian Federation? Act on the Protection of Personal Information Federal Law 526-FZ Gramm-Leach-Bliley Act (GLBA) General Data Protection Regulation (GDPR) Correct Answer: B xmexam",
    domain: 6
  },
  {
    id: 1361,
    text: "A financial services firm is evaluating a few different CSPs to choose one with a broad overall strategy of avoiding unnecessary risks. Which characteristic of CSPs is this?",
    options: ["Risk tolerance", "Risk appetite", "Risk profile", "Risk transfer"],
    answer: 1,
    explanation: "with a broad overall strategy of avoiding unnecessary risks",
    domain: 6
  },
  {
    id: 1362,
    text: "A medical corporation that creates many advances in pharmaceutical drugs treating bacterial infections, cancers, and other medical conditions that is operating in many different countries has a few legal challenges that they face. When storing data, they know that they must protect the data appropriately. They have been working with their legal councils that are aware of the local laws in each country that they operate. One of those laws is the United States (U.S.) Health Insurance Portability and Accountability Act (HIPAA). Under HIPAA, can they store data outside of the U.S. in a cloud provider's network?",
    options: ["No, it is not allowed under any condition Yes, it", "is possible if data is protected properly Yes, it is", "possible and standard security controls are sufficient No, it is", "not allowed because it is impossible to control the cloud"],
    answer: 1,
    explanation: "enges that they face",
    domain: 6
  },
  {
    id: 1363,
    text: "Which of the following legal concerns is specific to cloud computing?",
    options: ["Understanding the difference between regulations and precedent in various", "countries Ensuring systems meet ISO certification requirements Differentiating between", "the use of hashing and encryption for integrity and", "confidentiality Following HIPAA regulations to safeguard personal health information"],
    answer: 0,
    explanation: "th information Correct Answer: A xmexam",
    domain: 6
  },
  {
    id: 1364,
    text: "A corporation that is considered heavily regulated would need to be in compliance with what U.S. standards?",
    options: ["Gramm-Leach-Bliley Act (GLBA) Sarbanes Oxley (SOX)", "North American Electric Reliability Corporation (NERC)", "Critical Infrastructure Protection (CIP) Personal Information", "Protection and Electronic Documents Act (PIPEDA)"],
    answer: 2,
    explanation: "e Protection (CIP) Personal Information Protection and Electronic Documents Act (PIPEDA) Correct Answer: C Explanation: Correct answer: North American Electric Reliability Corporation (NERC) Critical Infrastructure Protection (CIP) The North American Electric Reliability Corporation (NERC) Critical Infrastructure Protection (CIP) is a not-for-profit organization that collaborates with industry stakeholders to set standards for the operations and monitoring of the power system and its enforcement",
    domain: 6
  },
  {
    id: 1365,
    text: "Which regulation requires breach notifications?",
    options: ["PCI-DSS", "SOX", "GLBA", "SSAE"],
    answer: 2,
    explanation: "tions? PCI-DSS SOX GLBA SSAE Correct Answer: C Explanation: Correct answer: GLBA The Gramm-Leach-Bliley Act (GLBA) requires f inancial institutions to notify customers and regulators in the event of a data breach involving sensitive financial information",
    domain: 6
  },
  {
    id: 1366,
    text: "Which of the following MOST precisely describes the type of auditor who might be called in to assess the security controls implemented by a Cloud Service Provider (CSP)?",
    options: ["Qualified security assessor", "Third-party auditor", "Cloud auditor", "Internal auditor"],
    answer: 2,
    explanation: "by a Cloud Service Provider (CSP)? Qualified security assessor Third-party auditor Cloud auditor Internal auditor Correct Answer: C xmexam",
    domain: 6
  },
  {
    id: 1367,
    text: "An audit must have parameters to ensure the efforts are focused on relevant areas that can be effectively audited. Setting these parameters for an audit is commonly known as which of the following?",
    options: ["Audit policy Audit", "remediation Audit", "objectives Audit", "scope restrictions"],
    answer: 3,
    explanation: "e effectively audited",
    domain: 6
  },
  {
    id: 1368,
    text: "Which activity needs to occur BEFORE an audit involving cloud computing starts?",
    options: ["Collect system logs", "Involve the relevant", "stakeholders Define baselines", "Identify functional policies"],
    answer: 1,
    explanation: "t stakeholders Define baselines Identify functional policies Correct Answer: B Explanation: Correct answer: Involve the relevant stakeholders Ensuring stakeholder alignment is critical before examining systems so that the audit has the right scope and support",
    domain: 6
  },
  {
    id: 1369,
    text: "Acme Healthcare Inc. is a US-based healthcare organization that handles PHI. They do business with a third party that needs to handle some of the same PHI. Under HIPAA, what type of agreement is required between Acme Healthcare Inc. and the third party?",
    options: ["None", "SLA", "BAA", "NDA"],
    answer: 2,
    explanation: "ealthcare organization that handles PHI",
    domain: 6
  },
  {
    id: 1370,
    text: "Which type of policy is MOST relevant to cloud computing?",
    options: ["Personnel access to", "storage devices Data", "retention Hardware access", "Remote access"],
    answer: 3,
    explanation: "etention Hardware access Remote access Correct Answer: D Explanation: Correct answer: Remote access In cloud computing, resources are accessed over the internet, making secure remote access critical",
    domain: 6
  },
  {
    id: 1371,
    text: "ISO 27001 is most relevant to the creation of what?",
    options: ["Audit", "plan Data-handling", "procedures", "eDiscovery management plan ISMS"],
    answer: 3,
    explanation: "eDiscovery management plan ISMS Correct Answer: D Explanation: Correct answer: Information Security Management System ISO/IEC 27001 provides guidelines for creating and managing an Information Security Management System (ISMS)",
    domain: 6
  },
  {
    id: 1372,
    text: "You are working for a corporation that is about to undergo an audit. The auditor knows that the corporation is subject to the Federal Information Security Management Act (FISMA). Which type of corporation are you employed by?",
    options: ["Government agency", "Military", "Banking", "Retail"],
    answer: 0,
    explanation: "audit",
    domain: 6
  },
  {
    id: 1373,
    text: "Which entity is legally responsible for any risks associated with data breaches?",
    options: ["Data subject", "Data processor", "Data controller Data", "custodian"],
    answer: 2,
    explanation: "controller Data custodian Correct Answer: C xmexam",
    domain: 6
  },
  {
    id: 1374,
    text: "Thian is performing a risk assessment with his information security team for a hospital. They have determined the likelihood and probable impact level of the most serious problems they believe they are susceptible to. Which of the following statements regarding responding to risk is FALSE?",
    options: ["There is never an appropriate scenario in which to accept a risk An organization", "can transfer risk via insurance policies to cover financial costs of successful exploits Organizations", "may opt to implement procedures and controls to ensure that a specific risk is", "never realized Risk mitigation typically depends on the results of a cost-benefit analysis"],
    answer: 0,
    explanation: "ies to cover financial costs of successful exploits Organizations may opt to implement procedures and controls to ensure that a specific risk is never realized Risk mitigation typically depends on the results of a cost-benefit analysis Correct Answer: A xmexam",
    domain: 6
  },
  {
    id: 1375,
    text: "What role does a CSP offer in the e-discovery process?",
    options: ["Providing customers with direct access to hardware Providing customers", "with tools to search and collect pertinent information", "Providing customers with administrative privileges to shared infrastructure", "Providing customers with system-level snapshots across multiple tenants"],
    answer: 1,
    explanation: "l snapshots across multiple tenants Correct Answer: B Explanation: Correct answer: Providing customers with tools to search and collect pertinent information CSPs must ensure that organizations can meet legal and compliance obligations without breaching the security of multi-tenant environments",
    domain: 6
  },
  {
    id: 1376,
    text: "Which of the following risk treatment strategies carries opportunity costs due to missed opportunities?",
    options: ["Mitigation", "Transference", "Avoidance", "Acceptance"],
    answer: 2,
    explanation: "nity costs due to missed opportunities? Mitigation Transference Avoidance Acceptance Correct Answer: C Explanation: Correct answer: Avoidance Risk treatment refers to the ways that an organization manages potential risks",
    domain: 6
  },
  {
    id: 1377,
    text: "Which of the following agreements manages a SPECIFIC project covered under an overarching agreement?",
    options: ["NDA", "MSA", "SOW", "SLA"],
    answer: 2,
    explanation: "anages a SPECIFIC project covered under an overarching agreement? NDA MSA SOW SLA Correct Answer: C Explanation: Correct answer: SOW Two organizations working together may have various agreements and contracts in place to manage their risks",
    domain: 6
  },
  {
    id: 1378,
    text: "An information security manager is working for a manufacturing company as their manager for the Disaster Recovery team. Given the supply chain issues the company has experienced in the last five years, they want to prevent the same problems from happening in the future. The team is assessing the primary business line to determine the worst potential problems in supply. They are calculating how much a failure in one supply chain could cost the company to be able to balance how much money they need to spend on a solution. How should the information security manager calculate the total cost of this particular failure per year?",
    options: ["Annual Rate of Occurence x Service Delivery", "Objective Mean time to Recover x Exposure", "Factor Annual Rate of Occurence x Single", "Loss Expectancy Asset Value x Exposure Factor"],
    answer: 2,
    explanation: "mpany has experienced in the last five years, they want to prevent the same problems from happening in the future",
    domain: 6
  },
  {
    id: 1379,
    text: "Ocean is the information security manager for a new company. They work with the company to ensure that it is in compliance with the specific laws that the company is worried about. Which of the following would they and the company be the least concerned with?",
    options: ["Containers Multi-tenancy", "Type of", "data Data", "location"],
    answer: 0,
    explanation: "s in compliance with the specific laws that the company is worried about",
    domain: 6
  },
  {
    id: 1380,
    text: "Which of the following BEST defines the Annual Rate of Occurrence (ARO)?",
    options: ["Determining that the cost of a ransomware event will likely be five million dollars Determining that ransomware is likely to occur once every three years", "Determining that if the server is offline, it must be restored to a functional state within three hours Determining that the server that could be hit", "by ransomware is valued", "at two million dollars"],
    answer: 1,
    explanation: "be hit by ransomware is valued at two million dollars Correct Answer: B Explanation: Correct answer: Determining that ransomware is likely to occur once every three years ARO stands for Annualized Rate of Occurrence, which is defined by the estimated number of times a threat will successfully exploit a vulnerability in a given year",
    domain: 6
  },
  {
    id: 1381,
    text: "Which of the following approaches is the MOST appropriate for evaluating vendor viability?",
    options: ["Reviewing SOC 1 reports annually", "Following the CSP's stock ticker", "Assessing customer satisfaction survey results", "Monitoring the CSP's hiring activity"],
    answer: 0,
    explanation: "stomer satisfaction survey results Monitoring the CSP's hiring activity Correct Answer: A Explanation: Correct answer: Reviewing SOC 1 reports annually SOC 1 reports focus on a provider’s internal financial controls and processes, giving insight into whether the organization is managing its operations in a stable and reliable manner",
    domain: 6
  },
  {
    id: 1382,
    text: "Which framework for information privacy should be applied when operating in countries in the Pacific Rim?",
    options: ["HIPAA Safe", "Harbor", "APEC", "GDPR"],
    answer: 2,
    explanation: "be applied when operating in countries in the Pacific Rim? HIPAA Safe Harbor APEC GDPR Correct Answer: C Explanation: Correct answer: APEC The Asia-Pacific Economic Cooperation Privacy (APEC) framework was designed specifically for countries in the Pacific Rim",
    domain: 6
  },
  {
    id: 1383,
    text: "Which of the following is an example of personally identifiable information (PII)?",
    options: ["Driver's license Password", "Credit card", "security code", "Medical condition"],
    answer: 0,
    explanation: "",
    domain: 6
  },
  {
    id: 1384,
    text: "Which term is used to describe the data protected under PCI DSS?",
    options: ["Cardholder data Personally", "identifiable information", "Payment information", "Payment data"],
    answer: 0,
    explanation: "information Payment information Payment data Correct Answer: A Explanation: Correct answer: Cardholder data Private data can be classified into a few different categories, including: The specific term that refers to the type of payment data covered by the Payment Card Industry Data Security Standard (PCI DSS) is cardholder data",
    domain: 6
  },
  {
    id: 1385,
    text: "A healthcare company wants to transfer some operations from on-premises to the cloud. It needs a cloud provider that meets strict security requirements. What should its management do to accomplish this?",
    options: ["Review each CSP's SOC 2 report Sign", "an MSA with each CSP under consideration", "Ask each CSP to provide a self-assessment", "questionnaire Confirm the CSP supports FIPS 140-2"],
    answer: 0,
    explanation: "xam",
    domain: 6
  },
  {
    id: 1386,
    text: "You have been hired by a company that is migrating production systems to the cloud. As a cloud information security professional, You are uniquely prepared to guide them through the risk management process to ensure that their move to an Infrastructure as a Service (IaaS) environment is successful. Currently, you're performing a mix of qualitative and quantitative analysis. Which stage of the enterprise risk management process are you MOST likely in?",
    options: ["Assess risk Respond", "to risk", "Identify risk", "Monitor risk"],
    answer: 0,
    explanation: "he cloud",
    domain: 6
  },
  {
    id: 1387,
    text: "A cloud information security manager is working on developing an audit scope and must define restrictions for that audit scope. They work at a large business that must be in compliance with a variety of laws and regulations from around the world. The corporation has a variety of cloud solutions that they use from a couple of different large cloud providers. What is a critical element that they needed to complete before moving into the cloud?",
    options: ["View the provider's latest audit report Ensure", "auditability is in the contract Understand the", "provider's views on audits Understand who the", "third party is for the provider's audits"],
    answer: 1,
    explanation: "ce with a variety of laws and regulations from around the world",
    domain: 6
  },
  {
    id: 1388,
    text: "Oya and her risk assessment team are working on preparing to perform their annual assessment of the risks that their cloud data center could experience. What is the correct order of risk management steps?",
    options: ["Assess, authorize, prepare, categorize, select, implement, monitor", "Authorize, prepare, assess, categorize, select, implement, monitor", "Prepare, categorize, select, implement, assess, authorize, monitor", "Prepare, assess, categorize, select, implement, authorize, monitor"],
    answer: 2,
    explanation: "lement, monitor Prepare, categorize, select, implement, assess, authorize, monitor Prepare, assess, categorize, select, implement, authorize, monitor Correct Answer: C xmexam",
    domain: 6
  },
  {
    id: 1389,
    text: "Which data role is charged with manipulating, storing, or moving data on behalf of a data owner?",
    options: ["Data analyst", "Data processor", "Data subject", "Data controller"],
    answer: 1,
    explanation: "alf of a data owner? Data analyst Data processor Data subject Data controller Correct Answer: B Explanation: Correct answer: Data processor A data processor is an entity or individual that processes, stores, or transmits data on behalf of a data owner, or controller, according to their instructions",
    domain: 6
  },
  {
    id: 1390,
    text: "Acme Cloud Services Inc. is being sued by a customer. Acme Inc. invoked a clause in a related contract that requires the matter to be addressed through arbitration instead of the courts. Which category of contract terms is MOST LIKELY to include this type of clause?",
    options: ["Assurance", "Termination", "Definitions", "Litigation"],
    answer: 3,
    explanation: "invoked a clause in a related contract that requires the matter to be addressed through arbitration instead of the courts",
    domain: 6
  },
  {
    id: 1391,
    text: "Which of the following roles collects data and has overall responsibility for it?",
    options: ["Data Owner", "Data Custodian", "Data Steward", "Data Processor"],
    answer: 0,
    explanation: "for it? Data Owner Data Custodian Data Steward Data Processor Correct Answer: A Explanation: Correct answer: Data Owner There are several roles and responsibilities related to data ownership, including:(ISC)2 CCSP Certified Cloud Security Professional Official Study Guide, 3rd Edition",
    domain: 6
  },
  {
    id: 1392,
    text: "Vaeda is an information security professional working with the risk management team for a medium-sized manufacturing company. They have spent a great deal of time performing quantitative and qualitative risk assessments. They are now in the risk mitigation phase. What they want to know is how can they ensure that all risk is fully mitigated?",
    options: ["Enforcing a strict risk management", "plan Constantly monitoring all systems", "Risk is never fully mitigated", "Purchasing various insurance policies"],
    answer: 2,
    explanation: "ative risk assessments",
    domain: 6
  },
  {
    id: 1393,
    text: "A bank has to think very carefully about what systems, applications, and data they can store in a public cloud provider because of the laws and regulations they must comply with. Their concern is that if a bad actor were to gain access to the environment, data could be altered or stolen. If that occurs, they need the ability to prosecute the bad actors and hold them accountable for their misdeeds. The bank security staff understands that collecting evidence from a cloud is different from collecting evidence from a traditional data center. What is the MAIN reason that eDiscovery is typically easier in a traditional data center than it is in a cloud environment?",
    options: ["Organizations don't own any of the data they store in the cloud There", "are no tools available to perform eDiscovery in a cloud environment Systems aren't", "able to be simply physically isolated and preserved in a cloud environment Cloud", "providers are often not willing to work with lawyers on legal matters"],
    answer: 2,
    explanation: "hold them accountable for their misdeeds",
    domain: 6
  },
  {
    id: 1394,
    text: "Which of the following activities specifically identifies private data that an organization collects, processes, or stores and evaluates the potential impact of a data breach?",
    options: ["Business impact assessment", "Privacy impact assessment", "Risk assessment", "Gap analysis"],
    answer: 1,
    explanation: "processes, or stores and evaluates the potential impact of a data breach? Business impact assessment Privacy impact assessment Risk assessment Gap analysis Correct Answer: B Explanation: Correct answer: Privacy impact assessment Organizations must understand the risks associated with collecting, processing, and storing private data, especially in the event of a breach",
    domain: 6
  },
  {
    id: 1395,
    text: "Acme Inc. recently published an internal data classification policy that details how different categories of data must be handled. What category of policy is this?",
    options: ["Cloud computing", "Access control", "Organizational", "Functional"],
    answer: 3,
    explanation: "ails how different categories of data must be handled",
    domain: 6
  },
  {
    id: 1396,
    text: "Communication, Consent, Control, Transparency, and Independent and yearly audits are the five key principles found in what standard that cloud providers should adhere to?",
    options: ["General Data Protection Regulation", "(GDPR) Privacy Management", "Framework (PMF) ISO/IEC", "27018 ISO/IEC 27001"],
    answer: 2,
    explanation: "adhere to? General Data Protection Regulation (GDPR) Privacy Management Framework (PMF) ISO/IEC 27018 ISO/IEC 27001 Correct Answer: C xmexam",
    domain: 6
  },
  {
    id: 1397,
    text: "Which of the following is NOT one of the three main sections of GLBA?",
    options: ["The Pretexting Provisions", "The Security Rule", "Financial Privacy Rule", "The Safeguards Rule"],
    answer: 1,
    explanation: "ty Rule Financial Privacy Rule The Safeguards Rule Correct Answer: B Explanation: Correct answer: The Security Rule The Security Rule is part of the Health Insurance Portability and Accessibility Act (HIPAA)",
    domain: 6
  },
  {
    id: 1398,
    text: "Which section of a contract includes details about whether advance notice is required before ending the contract early?",
    options: ["Assurance", "Termination", "Metrics", "Right to audit"],
    answer: 1,
    explanation: "the contract early? Assurance Termination Metrics Right to audit xmexam",
    domain: 6
  },
  {
    id: 1399,
    text: "A cloud customer needs to perform an audit. How can they gain assurance that the hypervisor running their VMs in an IaaS setting has proper security controls?",
    options: ["By requesting administrator credentials to", "inspect the hypervisor directly By", "having the auditor visit the CSP and", "check it themselves By installing agents on the hypervisor to perform vulnerability assessments By relying on an audit report from the CSP"],
    answer: 3,
    explanation: "check it themselves By installing agents on the hypervisor to perform vulnerability assessments By relying on an audit report from the CSP Correct Answer: D Explanation: Correct answer: By relying on an audit report from the CSP Cloud customers do not have direct access to underlying infrastructure, so they must rely on a CSP to provide evidence of proper controls",
    domain: 6
  },
  {
    id: 1400,
    text: "What is a unique challenge of auditing globally distributed information technology systems?",
    options: ["Implementing continuous monitoring", "Obtaining access logs", "Crossing over legal jurisdictions", "Reviewing change management procedures"],
    answer: 2,
    explanation: "Crossing over legal jurisdictions Reviewing change management procedures Correct Answer: C Explanation: Correct answer: Crossing over legal jurisdictions Cloud environments often span multiple countries, increasing the complexity of compliance and oversight",
    domain: 6
  },
  {
    id: 1401,
    text: "An engineer has recently started working for an organization and is concerned about which regulations might affect how long they need to retain or store financial and accounting data. Which of the following regulations does this engineer need to be aware of to address the organization's concerns?",
    options: ["Health Insurance Portability and Accountability", "Act (HIPAA) Gramm-Leach-Bliley Act (GLBA)", "Sarbanes-Oxley Act (SOX) Asia", "Pacific Economic Cooperation (APEC)"],
    answer: 2,
    explanation: "ng data",
    domain: 6
  },
  {
    id: 1402,
    text: "When a quantitative risk assessment is performed, it is possible to determine how much a threat can cost a business over a year. What term defines this?",
    options: ["ALE", "ARO", "SLE", "RTO"],
    answer: 0,
    explanation: "is performed, it is possible to determine how much a threat can cost a business over a year",
    domain: 6
  },
  {
    id: 1403,
    text: "Which type of organization is likely to have the HIGHEST risk appetite?",
    options: ["A public elementary school", "A dental office An", "AI startup company A", "life insurance company"],
    answer: 2,
    explanation: "nsurance company Correct Answer: C xmexam",
    domain: 6
  },
  {
    id: 1404,
    text: "How can a cloud and virtualization customer gain security assurances for their operations?",
    options: ["By referring to the CSP's SOC", "reports By relying on internal audits", "By conducting penetration tests on the", "provider’s infrastructure By hiring external auditors"],
    answer: 0,
    explanation: "tion tests on the provider’s infrastructure By hiring external auditors Correct Answer: A Explanation: Correct answer: By referring to the CSP's SOC reports In cloud security, customers do not have direct access to a provider’s internal systems, so they rely on third-party assurances to understand the effectiveness of security controls",
    domain: 6
  },
  {
    id: 1405,
    text: "Which of the following tasks must be completed before an audit to ensure that all the important areas of the organization are audited?",
    options: ["Identifying relevant stakeholders Disabling", "intrusion detection systems Applying", "relevant security controls", "Performing full backups"],
    answer: 0,
    explanation: "? Identifying relevant stakeholders Disabling intrusion detection systems Applying relevant security controls Performing full backups Correct Answer: A Explanation: Correct answer: Identifying relevant stakeholders Properly involving key individuals ensures that compliance and governance requirements are met during the audit",
    domain: 6
  },
  {
    id: 1406,
    text: "Acme Inc. management has performed a quantitative and qualitative risk assessment and has uncovered a concern that a bad actor could gain access to their systems through a web portal with very little social engineering. Management is concerned because there are laws that they must follow to protect the information that a bad actor could access in this manner. They have decided that the best option is to implement several security appliances and configurations to reduce the chance of access. What risk treatment has Acme Inc. management used?",
    options: ["Mitigate", "Remediate", "Transfer", "Avoid"],
    answer: 0,
    explanation: "uncovered a concern that a bad actor could gain access to their systems through a web portal with very little social engineering",
    domain: 6
  },
  {
    id: 1407,
    text: "Which of the following is NOT one of the three main types of policies that the CCSP covers related to a cloud environment?",
    options: ["Operational Organizational", "Functional", "Cloud", "Computing"],
    answer: 0,
    explanation: "t the CCSP covers related to a cloud environment? Operational Organizational Functional Cloud Computing Correct Answer: A Explanation: Correct answer: Operational Operational is not a type of policy explicitly called for the CCSP exam",
    domain: 6
  },
  {
    id: 1408,
    text: "An organization wants to see how far it is from its desired state of full compliance with industry regulations and best practices. Which activity should it use as a precursor to a full external audit?",
    options: ["Gap analysis SOC", "3 report Business", "impact analysis", "Risk analysis"],
    answer: 0,
    explanation: "practices",
    domain: 6
  },
  {
    id: 1409,
    text: "An organization has started an audit and found that it has become more expensive and has expanded to cover more areas than anticipated. What should the organization implement to avoid this situation in future audits?",
    options: ["Gap analysis SOC 1", "Type II report", "Audit scope restrictions", "External audit controls"],
    answer: 2,
    explanation: "over more areas than anticipated",
    domain: 6
  },
  {
    id: 1410,
    text: "Which of the following is NOT closely associated with any specific regulation(s) that defines related legal and statutory requirements for personal information?",
    options: ["Personally Identifiable Information and", "Protected Health Information Contractual", "Private Data Personally Identifiable", "Information Protected Health Information"],
    answer: 1,
    explanation: "fiable Information and Protected Health Information Contractual Private Data Personally Identifiable Information Protected Health Information Correct Answer: B Explanation: Correct answer: Contractual Private Data Private data can be classified into a few different categories, including:The Official (ISC)² CCSP CBK Reference, 4th Edition",
    domain: 6
  },
  {
    id: 1411,
    text: "Pabla has been working with their corporation to understand the impact that particular threats can have on their Infrastructure as a Service (IaaS) implementation. The information gathered through this process will be used to determine the correct solutions and procedures that will be built to ensure survival through many different incidents and disasters. To perform a quantitative assessment, they must determine their Single Loss Expectancy (SLE) for the corporation's Structured Query Language (SQL) database in the event that the data is encrypted through the use of ransomware. Which of the following is the BEST definition of SLE?",
    options: ["SLE is the value of the event given a certain percentage loss of the asset SLE is the", "value of the event given the value of the asset and the time it can be down SLE", "is the value of the asset given the amount of time it will be offline in a", "given year SLE is the value of the cost of the event multiplied times the asset value"],
    answer: 0,
    explanation: "ve assessment, they must determine their Single Loss Expectancy (SLE) for the corporation's Structured Query Language (SQL) database in the event that the data is encrypted through the use of ransomware",
    domain: 6
  },
  {
    id: 1412,
    text: "Bridgit is working for a manufacturing corporation that must protect the personal information of their employees and of their customers. She is looking for a document to provide guidance on how they can and should protect that information. Which of the following standards was developed by a joint privacy task force consisting of the American Institute of Certified Public Accountants and the Canadian Institute of Chartered Accountants?",
    options: ["ISO/IEC 27018 Privacy Management", "Framework (PMF) Sarbanes Oxley", "(SOX) General Data", "Protection Regulation (GDPR)"],
    answer: 1,
    explanation: "to provide guidance on how they can and should protect that information",
    domain: 6
  },
  {
    id: 1413,
    text: "Deco is the information security professional for an organization that specializes in market research for an athletic supply company. There is a great deal of information that needs to be processed to determine which products are of most interest in which gyms around the world. The corporation has developed a data lake that is stored in the cloud in a Platform as a Service, server-based system. It is necessary to ensure that the data is protected from changes, deletions, or leaks. Deco is working to create the processes that need to exist to protect that data and is working to determine who will be responsible for the data from determining the classification to which security controls need to be in place around that data. This individual would be known as which of the following?",
    options: ["Data processor", "Data custodian", "Data controller", "Data owner"],
    answer: 3,
    explanation: "letic supply company",
    domain: 6
  },
  {
    id: 1414,
    text: "Danila is working to ensure that the information her corporation puts on the public cloud provider is protected properly. There are laws and regulations that the corporation must be in compliance with. She is looking for a set of best practices that will guide her decisions. The International Standards Organization/International Electrotechnical Commission (ISO/IEC) 27018 standard is focused on five key principles of personal data protection. Her concern is that she has seen large providers hit with big fines for not handling cookies properly. Which principle is directly related to cookies?",
    options: ["Communication", "Transparency", "Consent", "Audits"],
    answer: 2,
    explanation: "r is protected properly",
    domain: 6
  },
  {
    id: 1415,
    text: "Which type of SOC report provides the MOST reliable guarantee that a service provider can meet its SLAs?",
    options: ["SOC 2 Type", "II SOC 3", "SOC 2 Type", "I SOC 1"],
    answer: 0,
    explanation: "tee that a service provider can meet its SLAs? SOC 2 Type II SOC 3 SOC 2 Type I SOC 1 Correct Answer: A Explanation: Correct answer: SOC 2 Type II Service organization control (SOC) reports are generated by the American Institute of CPAs ( AICPA)",
    domain: 6
  },
  {
    id: 1416,
    text: "Which data type is considered contractual private data?",
    options: ["Business strategic plans", "Protected health information", "Personally identifiable information", "Payment data"],
    answer: 0,
    explanation: "ation Personally identifiable information Payment data Correct Answer: A Explanation: Correct answer: Business strategic plans Different data types have different obligations; some are regulated by law and others are protected by contractual agreements",
    domain: 6
  },
  {
    id: 1417,
    text: "What does the HITECH act incentivize?",
    options: ["Data privacy rights in the financial", "sector Data privacy rights for consumers", "in Canada Use of EHR by", "healthcare organizations Ethical behavior in accounting"],
    answer: 2,
    explanation: "vior in accounting Correct Answer: C Explanation: Correct answer: Use of EHR by healthcare organizations The Health Information Technology for Economic and Clinical Health (HITECH) is the US legislation that gives healthcare organizations incentives to use electronic health records (EHRs)",
    domain: 6
  },
  {
    id: 1418,
    text: "A cloud provider wants to assure potential cloud customers that their environment is secure. What is one way for the cloud provider to achieve this without needing to provide audit access to every potential customer?",
    options: ["Undergo a Payment Card Industry Data Security Standard (PCI DSS)", "audit Undergo a Service Organization Control (SOC) 3 audit Undergo", "a Service Organization Control (SOC) 2 Type I audit Undergo", "a Service Organization Control (SOC) 2 Type II audit"],
    answer: 3,
    explanation: "tandard (PCI DSS) audit Undergo a Service Organization Control (SOC) 3 audit Undergo a Service Organization Control (SOC) 2 Type I audit Undergo a Service Organization Control (SOC) 2 Type II audit Correct Answer: D Explanation: Correct answer: Undergo a Service Organization Control (SOC) 2 Type II audit A Service Organization Control 2 (SOC 2) audit reports on various organizational controls related to security, availability, processing integrity, and confidentiality or privacy",
    domain: 6
  },
  {
    id: 1419,
    text: "You have been working with a project team analyzing the risks that could occur as this particular project progresses. Their analysis includes the assessment of the cost of a single event. Which type of assessment have they been performing?",
    options: ["Qualitative assessment Quantitative", "assessment Fault tree", "analysis Root", "cause analysis"],
    answer: 1,
    explanation: "the assessment of the cost of a single event",
    domain: 6
  },
  {
    id: 1420,
    text: "Which process comes directly after a risk assessment?",
    options: ["Vulnerability scan", "Risk treatment", "Intrusion detection", "Control implementation"],
    answer: 1,
    explanation: "n detection Control implementation Correct Answer: B Explanation: Correct answer: Risk treatment After a risk assessment identifies and evaluates potential threats and vulnerabilities, the organization must decide how to address those risks, which is the risk treatment process",
    domain: 6
  },
  {
    id: 1421,
    text: "What is the goal of a privacy impact assessment?",
    options: ["Identify where privacy data is collected, processed, or stored and what effect a", "breach would have Comply with government regulations that require periodic data privacy audits", "Learn the best methods to protect data to train other IT staff Determine", "the best method to encrypt users' personally identifiable data that an organization collects"],
    answer: 0,
    explanation: "",
    domain: 6
  },
  {
    id: 1422,
    text: "A SOC report is MOST related to which of the following common contractual terms?",
    options: ["Metrics Right", "to Audit", "Litigation", "Compliance"],
    answer: 1,
    explanation: "ntractual terms? Metrics Right to Audit Litigation Compliance Correct Answer: B Explanation: Correct answer: Right to Audit A contract between a customer and a vendor can have various terms",
    domain: 6
  },
  {
    id: 1423,
    text: "Which metric measures how long it takes an organization to become aware of a potential security incident?",
    options: ["Intrusion attempts Mean time", "to detect (MTTD) Mean time", "to resolve (MTTR)", "Time to deploy patches"],
    answer: 1,
    explanation: "Mean time to resolve (MTTR) Time to deploy patches Correct Answer: B xmexam",
    domain: 6
  },
  {
    id: 1424,
    text: "Maalik works for an international trade company that does a lot of business between the United States, China, and South Korea. He knows that there is a privacy framework that should drive their decisions and handling of personal information. He knows that people have a legitimate expectation of privacy. What principle does this meet?",
    options: ["General Data Protection Regulation, data minimization Asia-Pacific", "Economic Cooperation Privacy Framework, Integrity of personal", "information Asia-Pacific Economic Cooperation Privacy Framework, preventing", "harm General Data Protection Regulation, purpose limitation"],
    answer: 2,
    explanation: "ectation of privacy",
    domain: 6
  },
  {
    id: 1425,
    text: "Which section of a contract provides clear explanations for important terms so that there are no misunderstandings?",
    options: ["Metrics", "Litigation", "Definitions", "Compliance"],
    answer: 2,
    explanation: "misunderstandings? xmexam",
    domain: 6
  },
  {
    id: 1426,
    text: "A public cloud provider has been building data centers around the world. They now have a data center on most of the continents. They have not built any in Antarctica yet. What has driven the cloud provider to build so many data centers?",
    options: ["Improved performance and scalability Reduce", "resilience and redundancy Centralized", "control of Information Technology", "Easier communication through company"],
    answer: 0,
    explanation: "build so many data centers? Improved performance and scalability Reduce resilience and redundancy Centralized control of Information Technology Easier communication through company Correct Answer: A xmexam",
    domain: 6
  },
  {
    id: 1427,
    text: "The European Union's (EU) General Data Protection Regulation (GDPR) has strict requirements for where the personal data of natural persons that are collected from within EU can be stored. Which jurisdiction can the data be stored in outside of Europe?",
    options: ["Taiwan Brazil", "Isle of", "Man", "Russia"],
    answer: 2,
    explanation: "gulation (GDPR) has strict requirements for where the personal data of natural persons that are collected from within EU can be stored",
    domain: 6
  },
  {
    id: 1428,
    text: "A cloud services provider may be classified as which of the following roles?",
    options: ["Data Owner", "Data Custodian", "Data Owner", "Data Processor"],
    answer: 3,
    explanation: "o",
    domain: 6
  },
  {
    id: 1429,
    text: "From a legal perspective, what is the MAIN factor that differentiates a cloud environment from a traditional data center?",
    options: ["Multitenancy Self-service", "Rapid", "elasticity", "Repudiation"],
    answer: 0,
    explanation: "oud environment from a traditional data center? Multitenancy Self-service Rapid elasticity Repudiation Correct Answer: A Explanation: Correct answer: Multitenancy Multitenancy is the main factor, from a legal perspective, which differentiates a cloud environment from a traditional data center",
    domain: 6
  },
  {
    id: 1430,
    text: "Bola is concerned about future attacks and their ability to perform the forensic analysis that is required of him and his team for his corporation. If they move into the cloud, they are concerned they will not be able to obtain the forensic evidence that they require. Which standard provides guidelines for handling digital evidence?",
    options: ["NIST SP 800-88", "NIST SP 800-145", "ISAE 3402", "ISO/IEC 27037"],
    answer: 3,
    explanation: "and their ability to perform the forensic analysis that is required of him and his team for his corporation",
    domain: 6
  },
  {
    id: 1431,
    text: "Which of the following actions is recommended under the Management category of the Generally Accepted Privacy Principles (GAPP)?",
    options: ["Assigning responsibility for privacy policies and procedures", "Monitoring compliance with privacy policies and procedures", "Describing the choices available to individuals Informing", "customers where their personal data resides"],
    answer: 0,
    explanation: "able to individuals Informing customers where their personal data resides Correct Answer: A xmexam",
    domain: 6
  },
  {
    id: 1432,
    text: "A Cloud Service Provider (CSP) must always be looking for ways to manage and grow their data centers as needed for their customers. What is the name of the ITIL practice that has the CSP aligning their services with changing business needs?",
    options: ["Service-level management Capacity", "management Availability management", "Continual service", "improvement management"],
    answer: 3,
    explanation: "tice that has the CSP aligning their services with changing business needs? Service-level management Capacity management Availability management Continual service improvement management Correct Answer: D xmexam",
    domain: 6
  },
  {
    id: 1433,
    text: "An organization has a team working on an audit plan. They have just effectively defined all the objectives needed to set the groundwork for the audit plan. What is the NEXT step for this team to complete?",
    options: ["Conduct market research", "Define scope Perform", "the audit Review", "previous audits"],
    answer: 1,
    explanation: "bjectives needed to set the groundwork for the audit plan",
    domain: 6
  },
  {
    id: 1434,
    text: "A systems engineer is tasked with configuring an EHR system that their organization will use directly. What industry does the engineer MOST LIKELY work in?",
    options: ["Finance Federal", "government Healthcare", "Consumer", "electronics"],
    answer: 2,
    explanation: "ation will use directly",
    domain: 6
  },
  {
    id: 1435,
    text: "Which of the following activities can vary depending on federal laws in different countries?",
    options: ["Data breach reporting requirements Intelligent", "monitoring of security controls Disaster", "recovery plans Retention periods", "for hardware and software"],
    answer: 0,
    explanation: "ion periods for hardware and software Correct Answer: A xmexam",
    domain: 6
  },
  {
    id: 1436,
    text: "An asset management company intends to introduce a right-to-audit clause with a CSP. However, the CSP does not want to give customers this type of direct access to its infrastructure. What should the CSP offer to its customers?",
    options: ["SOC 3 reports More severe", "SLA violation penalties Proof", "of ISO/IEC 27001 certification", "A vendor-prepared security report"],
    answer: 2,
    explanation: "ype of direct access to its infrastructure",
    domain: 6
  },
  {
    id: 1437,
    text: "Which of the following ways is how a business addresses regulatory compliance challenges in the cloud?",
    options: ["Security policies, annual audits, Cloud Service Customer (CSC) defined service level agreements, contracts", "Security policies, annual audits, Cloud Service Customer (CSC) defined service level agreements, containers", "Security policies, golden images, Cloud Service Customer (CSC) defined service level agreements, contracts", "Security policies, annual audits, Cloud Service Provider (CSP) defined service level agreements, contracts"],
    answer: 0,
    explanation: "ity policies, annual audits, Cloud Service Provider (CSP) defined service level agreements, contracts Correct Answer: A Explanation: Correct answer: Security policies, annual audits, Cloud Service Customer (CSC) defined service level agreements, contracts There are many things that a business should do to address regulatory compliance challenges in the cloud or simply secure the corporation's information and information systems",
    domain: 6
  },
  {
    id: 1438,
    text: "The analysis of the data generated by a cloud feasibility study to identify areas where cloud solutions may fall short of meeting specific requirements is referred to as what type of assessment?",
    options: ["Vulnerability assessment", "Gap analysis", "Feasibility study", "Risk assessment"],
    answer: 1,
    explanation: "ud solutions may fall short of meeting specific requirements is referred to as what type of assessment? Vulnerability assessment Gap analysis Feasibility study Risk assessment Correct Answer: B Explanation: Correct answer: Gap analysis The current and future IT resource requirements of a business are diverse",
    domain: 6
  },
  {
    id: 1439,
    text: "You have been working with your corporation to determine how to address the risk that they have uncovered in their annual review of the Business Continuity/Disaster Recovery (BC/DR) plan. Is there a scenario where it makes sense to simply accept the risk that has been discovered?",
    options: ["When there is a low risk but moderate impact, and there are no protection measures in place When there", "is a low chance the risk will actually occur, but if it did occur, it would be devastating to the", "organization When the cost to mitigate the risk outweighs the cost to simply deal with the risk if it were to occur", "When the cost of mitigating the risk and the cost of dealing with the risk when it occurs are about the same"],
    answer: 2,
    explanation: "organization When the cost to mitigate the risk outweighs the cost to simply deal with the risk if it were to occur When the cost of mitigating the risk and the cost of dealing with the risk when it occurs are about the same Correct Answer: C xmexam",
    domain: 6
  },
  {
    id: 1440,
    text: "Which of the following statements regarding the European Union (EU) General Data Protection Regulation (GDPR) is FALSE?",
    options: ["GDPR does offer some exemptions for national security agencies and law enforcement agencies. GDPR", "has no impact on organizations operating outside the EU. Under Article 33 of the", "GDPR, data controllers have 72 hours to report a breach to the applicable agencies.", "GDPR is focused on protecting the personal and private data of EU citizens."],
    answer: 1,
    explanation: "used on protecting the personal and private data of EU citizens",
    domain: 6
  },
  {
    id: 1441,
    text: "Which data privacy law has the MOST significant impact on global organizations?",
    options: ["Privacy Shield", "Australia's Privacy", "Act GDPR", "Safe Harbor"],
    answer: 2,
    explanation: "ons? Privacy Shield Australia's Privacy Act GDPR Safe Harbor Correct Answer: C Explanation: Correct answer: GDPR Compliance determines how data is handled, stored, and transferred across borders",
    domain: 6
  },
  {
    id: 1442,
    text: "Which of the following types of Service Organization Controls (SOC) reports could include an extended assessment of the effectiveness of an organization's security controls?",
    options: ["SOC 1 Type II", "SOC 2 Type I", "SOC 2 Type II", "SOC 1 Type I"],
    answer: 2,
    explanation: "ntrols (SOC) reports could include an extended assessment of the effectiveness of an organization's security controls? SOC 1 Type II SOC 2 Type I SOC 2 Type II SOC 1 Type I Correct Answer: C Explanation: Correct answer: SOC 2 Type II SOC 2 reports can also be classified as Type I or Type II",
    domain: 6
  },
  {
    id: 1443,
    text: "A software corporation has included a statement in their End User Licensing Agreement (EULA) that a customer cannot sue if the software fails during unintended use. This is an example of what type of risk treatment?",
    options: ["Risk avoidance", "Risk transference", "Risk mitigation", "Risk acceptance"],
    answer: 1,
    explanation: "if the software fails during unintended use",
    domain: 6
  },
  {
    id: 1444,
    text: "Generally Accepted Privacy Principles (GAPP) is a standard consisting of many privacy principles, one of which is regarding the utilization of information that is collected by an organization. What does the use principle say?",
    options: ["The organization can utilize information for only the purpose for which it was collected and only for a limited amount of time. At the end of that time, it must be disposed of appropriately", "and permanently. The organization can utilize the information for anything except offering it for sale. They must notify the customer of its imminent deletion, so the customer can opt back in if they", "choose. The organization can utilize the information for the original stated purpose and for the following seven years. At the end of that time, it must be disposed of appropriately and permanently. The", "organization can utilize information for the purpose for which it was collected and within expected use beyond that. They are allowed to store the information in archival status for up to 50 years."],
    answer: 0,
    explanation: "formation for the purpose for which it was collected and within expected use beyond that",
    domain: 6
  },
  {
    id: 1445,
    text: "Which of the following international agreements enables US-based companies to earn a certification that allows for the processing of data of EU citizens in the US?",
    options: ["Privacy Shield GDPR", "US CLOUD", "Act Stored", "Communications Act"],
    answer: 0,
    explanation: "earn a certification that allows for the processing of data of EU citizens in the US? Privacy Shield GDPR US CLOUD Act Stored Communications Act Correct Answer: A Explanation: Correct answer: Privacy Shield A company may be subject to various regulations that mandate certain controls be in place to protect customers’ sensitive data or ensure regulatory transparency",
    domain: 6
  },
  {
    id: 1446,
    text: "Which metric of risk management focuses on becoming aware of a security incident as quickly as possible?",
    options: ["Mean time to contain (MTTC)", "Mean time to detect (MTTD)", "Mean time to repair (MTTR)", "Mean time between failures (MTBF)"],
    answer: 1,
    explanation: "o repair (MTTR) Mean time between failures (MTBF) Correct Answer: B xmexam",
    domain: 6
  },
  {
    id: 1447,
    text: "What is the equation for determining ALE?",
    options: ["RTO × SLE = ALE", "MTD × SLE = ALE", "ARO × MTD = ALE", "SLE × ARO = ALE"],
    answer: 3,
    explanation: "= ALE SLE × ARO = ALE Correct Answer: D Explanation: Correct answer: SLE × ARO = ALE To find the Annual Loss Expectancy (ALE), you must first know the Single Loss Expectancy (SLE) and the Annual Rate of Occurrence (ARO)",
    domain: 6
  },
  {
    id: 1448,
    text: "Which of the Trust Services principles must be included in a Service Organization Controls (SOC) 2 audit?",
    options: ["Security", "Privacy", "Availability", "Confidentiality"],
    answer: 0,
    explanation: "dit? Security Privacy Availability Confidentiality Correct Answer: A xmexam",
    domain: 6
  },
  {
    id: 1449,
    text: "Which of the following is officially known as the \"Financial Modernization Act of 1999\"?",
    options: ["General Data Protection Regulation", "Asian-Pacific Economic Cooperation", "The Sarbanes-Oxley Act", "The Gramm-Leach-Bliley Act"],
    answer: 3,
    explanation: "conomic Cooperation The Sarbanes-Oxley Act The Gramm-Leach-Bliley Act Correct Answer: D Explanation: Correct answer: The Gramm-Leach-Bliley Act Although it is officially named the Financial Modernization Act of 1999, it is most commonly known as and referred to as the Gramm-Leach-Bliley Act, or GLBA",
    domain: 6
  },
  {
    id: 1450,
    text: "Kerry is working for a company that has just identified an indication of compromise (IoC) verified as a security incident. A bad actor has accessed their database and copied the contents of the customer information table. Since Kerry is the information security manager, it is her responsibility to notify the appropriate parties. Which of the f ive key principles of the ISO/IEC 27018 would pertain to this scenario?",
    options: ["Communication Incident", "response Control", "Consent and", "notification"],
    answer: 0,
    explanation: "ion of compromise (IoC) verified as a security incident",
    domain: 6
  },
  {
    id: 1451,
    text: "Which of the following roles ensures that data's context and meaning are understood and that it is used properly?",
    options: ["Data Owner", "Data Steward", "Data Custodian", "Data Processor"],
    answer: 1,
    explanation: "understood and that it is used properly? Data Owner Data Steward Data Custodian Data Processor Correct Answer: B Explanation: Correct answer: Data Steward There are several roles and responsibilities related to data ownership, including:(ISC)2 CCSP Certified Cloud Security Professional Official Study Guide, 3rd Edition",
    domain: 6
  },
  {
    id: 1452,
    text: "Which of the following focuses on personally identifiable information (PII) as it pertains to financial institutions?",
    options: ["Gramm-Leach-Bliley Act (GLBA) General", "Data Protection Regulation (GDPR)", "Sarbanes-Oxley (SOX) Health Insurance", "Portability Accountability Act (HIPAA)"],
    answer: 0,
    explanation: "ion Regulation (GDPR) Sarbanes-Oxley (SOX) Health Insurance Portability Accountability Act (HIPAA) Correct Answer: A Explanation: Correct answer: Gramm-Leach-Bliley Act (GLBA) The Gramm-Leach Bliley Act is a U",
    domain: 6
  },
  {
    id: 1453,
    text: "An organization has used the ISO 27001 standard to implement an internal information security management system (ISMS). Now it aims to mitigate the risks it has identified. Which control framework is designed to easily complement the ISMS?",
    options: ["NIST Special Publication", "800-53 ISO 27002", "CSA CCM", "NIST CSF"],
    answer: 1,
    explanation: "SMS)",
    domain: 6
  },
  {
    id: 1454,
    text: "A company wants to understand the likely cost, in US dollars, of a vulnerability in a legacy system. To facilitate this assessment, an engineering manager calculates the cost of an instance of an exploit occurring to aide in the calculation of the cost of controls that they want to install. What type of risk assessment is being performed, and what value is being calculating?",
    options: ["Exposure Factor Single", "Loss Expectancy Annualized", "Loss Expectancy", "Asset Value"],
    answer: 1,
    explanation: "em",
    domain: 6
  },
  {
    id: 1455,
    text: "Which agreement was intended to allow the transfer of personal data from the European Union to the US by US-based companies but faced legal challenges in EU courts in 2020?",
    options: ["Privacy Shield", "US Cloud", "Act GDPR", "Safe Harbor"],
    answer: 0,
    explanation: "S by US-based companies but faced legal challenges in EU courts in 2020? xmexam",
    domain: 6
  },
  {
    id: 1456,
    text: "Like the European Union (EU) and the United States, which other influential body has released privacy protections and regulations regarding data privacy?",
    options: ["Asia Pacific Economic Cooperation (APEC) National", "Fire Protection Association (NFPA) Canadian Institute", "of Chartered Accountants (CICA) Building", "Industry Consulting Services International (BICSI)"],
    answer: 0,
    explanation: "tion Association (NFPA) Canadian Institute of Chartered Accountants (CICA) Building Industry Consulting Services International (BICSI) Correct Answer: A Explanation: Correct answer: Asia Pacific Economic Cooperation (APEC) Both the United States and the European Union (EU) have established data privacy regulations such as HIPAA and GDPR, respectively",
    domain: 6
  },
  {
    id: 1457,
    text: "Under the European Union (EU) General Data Protection Regulation (GDPR), who determines the purpose and means related to the processing of personal data?",
    options: ["Data processor", "Data custodian", "Data controller", "Data owner"],
    answer: 2,
    explanation: "determines the purpose and means related to the processing of personal data? Data processor Data custodian Data controller Data owner Correct Answer: C Explanation: Correct answer: Data controller The data controller determines the purpose and means of processing personal data",
    domain: 6
  },
  {
    id: 1458,
    text: "Which of the following are organizational policies?",
    options: ["Password policies Acceptable", "use policies Data", "classification policies", "Encryption policies"],
    answer: 1,
    explanation: "rect Answer: B xmexam",
    domain: 6
  },
  {
    id: 1459,
    text: "A cloud provider would like to use information on one of their cloud customers for advertising purposes. Before they can do this, they must get explicit permission from the cloud customer. Which key principle of International Standards Organization/International Electrotechnical Committee (ISO/IEC) 27018 does this scenario depict?",
    options: ["Opt-in", "Control", "Approval", "Consent"],
    answer: 3,
    explanation: "ne of their cloud customers for advertising purposes",
    domain: 6
  },
  {
    id: 1460,
    text: "An online retailer needs to accept credit card payments on its server, which is hosted in the cloud. What type of certification should the retailer look for when evaluating its CSP?",
    options: ["NERC/CIP HIPAA", "PCI", "SOC", "1"],
    answer: 2,
    explanation: "o accept credit card payments on its server, which is hosted in the cloud",
    domain: 6
  },
  {
    id: 1461,
    text: "Which of the following types of SOC reports provides high-level information about an organization's controls intended for public dissemination?",
    options: ["SOC 1 SOC", "2 Type I", "SOC 2 Type", "II SOC 3"],
    answer: 3,
    explanation: "level information about an organization's controls intended for public dissemination? SOC 1 SOC 2 Type I SOC 2 Type II SOC 3 Correct Answer: D Explanation: Correct answer: SOC 3 Service Organization Control (SOC) reports are generated by the American Institute of CPAs (AICPA)",
    domain: 6
  },
  {
    id: 1462,
    text: "What does an internal information security management system (ISMS) accomplish?",
    options: ["It automates the detection of and response to security incidents. It ensures compliance with", "ISO 27002 and a few other international frameworks. It gives an organization confidence about", "its security posture. It enables a centralized dashboard for collecting, normalizing, and analyzing security", "logs."],
    answer: 2,
    explanation: "analyzing security logs",
    domain: 6
  },
  {
    id: 1463,
    text: "Amal is the new information security manager working with a multinational corporation's disaster recovery (DR) team. They are working on gaining a better understanding of this business and its requirements in the face of disasters. They have determined that a critical database server must be back online within five hours of failure. If it is offline for longer, the cost to the business would be unacceptable. The next step is to determine the cost of a server failing by performing a quantitative assessment. Using BC/DR terminology, what is the name of this next value indicating the cost of a failure?",
    options: ["RTO", "SLE", "MTD", "ALE"],
    answer: 1,
    explanation: "al corporation's disaster recovery (DR) team",
    domain: 6
  },
  {
    id: 1464,
    text: "Which standard is a guide to digital evidence analysis?",
    options: ["ISO/IEC 27050-1:2016", "ISO/IEC 27043:2015", "ISO/IEC 27042:2015", "ISO/IEC 27041:2015"],
    answer: 2,
    explanation: "Correct Answer: C xmexam",
    domain: 6
  },
  {
    id: 1465,
    text: "Which of the following is a law that protects the privacy rights of people in Canada?",
    options: ["HIPAA GDPR PIPEDA", "Personal Data", "Protection Act", "No. 25,326"],
    answer: 2,
    explanation: "Canada? HIPAA GDPR PIPEDA Personal Data Protection Act No",
    domain: 6
  },
  {
    id: 1466,
    text: "The American Institute of Certified Public Accountants (AICPA) published the Privacy Management Framework (PMF) as an update to the former Generally Accepted Privacy Principles (GAPP). When they updated it, there was a significant change in technology and laws around the world. The driving law that had the biggest influence on the PMF was which of the following?",
    options: ["Child Online Privacy Protection Rule", "(COPPA) Privacy Act of 1988", "General Data Protection Regulation (GDPR)", "Federal Act on Data Protection"],
    answer: 2,
    explanation: "ate to the former Generally Accepted Privacy Principles (GAPP)",
    domain: 6
  },
  {
    id: 1467,
    text: "A cloud security engineer working for a financial institution needs to determine how long specific financial records must be stored and preserved. Which of the following specifies how long financial records must be preserved?",
    options: ["Sarbanes-Oxley (SOX) Privacy Act", "of 1988 General Data", "Protection Regulation (GDPR)", "Gramm-Leach-Bliley Act (GLBA)"],
    answer: 0,
    explanation: "g specifies how long financial records must be preserved? Sarbanes-Oxley (SOX) Privacy Act of 1988 General Data Protection Regulation (GDPR) Gramm-Leach-Bliley Act (GLBA) Correct Answer: A xmexam",
    domain: 6
  },
  {
    id: 1468,
    text: "A Platform as a Service (PaaS) provider knows that their potential customers need to have a level of confidence in their security. A cloud auditor has done a thorough audit of the provider's environment using the Statement of Standards for Attestation Engagements (SSAE) 18 methodology. Which audit report can they now provide to the general public?",
    options: ["Service Organization Control (SOC) 1 Type ii", "Service Organization Control (SOC) 3 Service Organization", "Control (SOC) 2 Type II Service", "Organization Control (SOC) 2 Type i"],
    answer: 1,
    explanation: "environment using the Statement of Standards for Attestation Engagements (SSAE) 18 methodology",
    domain: 6
  },
  {
    id: 1469,
    text: "Ardal is the information security manager working for a manufacturing company that specializes in molded silicon kitchen products. They are moving their customer data and product information into a Platform as a Service (PaaS) public cloud environment. Ardal and his team have been analyzing the risks associated with this move so that they can ensure the most appropriate security controls are in place. Which of the following is TRUE regarding the transfer of risk?",
    options: ["RIsk is never truly transferred. Transference simply shares the risk with another company. Transfer", "of risk is often the cheapest option for responding to risk Risk transfer should", "always be the first avenue that an organization takes to respond to risk Risk", "transfer can only be done when the organization has exhausted all other risk responses"],
    answer: 0,
    explanation: "opriate security controls are in place",
    domain: 6
  },
  {
    id: 1470,
    text: "You work for a financial institution and have recently migrated from a private cloud to an Infrastructure as a Service (IaaS) deployment with a public Cloud Service Provider (CSP). As the technology director, you are concerned about the exposure of personal f inancial information. Which US federal legislation would be applicable?",
    options: ["Gramm - Leach - Bliley Act", "(GLBA) Stored Communications Act (SCA)", "Sarbanes Oxley (SOX) Health Information", "Portability and Accountability Act (HIPAA)"],
    answer: 0,
    explanation: "tor, you are concerned about the exposure of personal f inancial information",
    domain: 6
  },
  {
    id: 1471,
    text: "According to the ENISA risk framework, what can lead to a loss of governance?",
    options: ["Lack of separation of storage, memory, and other hardware resources belonging", "to the customer and the CSP Compromise of the management interface", "for cloud environments High-access individuals at the CSP who can compromise", "cloud architectures and data Misunderstandings of customer and CSP responsibilities"],
    answer: 3,
    explanation: "d CSP responsibilities Correct Answer: D xmexam",
    domain: 6
  },
  {
    id: 1472,
    text: "Chinelo has been working with the legal department to ensure that they are in compliance with appropriate laws. The business that he works for is a financial services company. As they are located in the US, which law must they be in compliance with?",
    options: ["Service Organization Control (SOC) 1®", "Type II Federal Information", "Management Act (FISMA) Sarbanes", "Oxley (SOX) Basel III"],
    answer: 2,
    explanation: "As they are located in the US, which law must they be in compliance with? Service Organization Control (SOC) 1® Type II Federal Information Management Act (FISMA) Sarbanes Oxley (SOX) Basel III Correct Answer: C xmexam",
    domain: 6
  },
  {
    id: 1473,
    text: "What data-ownership-related role describes the entity or person responsible for ensuring data context is understood and data is used appropriately?",
    options: ["Data steward", "Data owner", "Data custodian", "Data controller"],
    answer: 0,
    explanation: "e for ensuring data context is understood and data is used appropriately? Data steward Data owner Data custodian Data controller Correct Answer: A Explanation: Correct the answer: Data steward The table below describes several data ownership roles CSSP candidates should be familiar with",
    domain: 6
  },
  {
    id: 1474,
    text: "Which framework assists with planning for eDiscovery?",
    options: ["ISO/IEC 27041", "ISO/IEC 27050 ISO/IEC", "27037", "ISO/IEC 27043"],
    answer: 1,
    explanation: "27050 ISO/IEC 27037 ISO/IEC 27043 Correct Answer: B Explanation: Correct answer: ISO/IEC 27050 The eDiscovery process involves collecting, preserving, and reviewing digital evidence, which is critical to legal proceedings and regulatory investigations",
    domain: 6
  },
  {
    id: 1475,
    text: "Which of the following activities is required by the Sarbanes-Oxley Act (SOX)?",
    options: ["Sharing health-related information with third parties without the", "data subject's consent Keeping audit-related records for at", "least five years Encrypting emails between the", "organization and customers Conducting annual vulnerability assessments"],
    answer: 1,
    explanation: "lnerability assessments Correct Answer: B xmexam",
    domain: 6
  },
  {
    id: 1476,
    text: "Which standard outlines a risk management framework?",
    options: ["ISO 31000", "ISO 20000-1", "ISO 27017", "ISO 27018"],
    answer: 0,
    explanation: "0 ISO 20000-1 ISO 27017 ISO 27018 Correct Answer: A Explanation: Correct answer: ISO 31000 ISO 31000 provides guidelines and principles for establishing a risk management framework that can be applied to any organization, including those using cloud services",
    domain: 6
  },
  {
    id: 1477,
    text: "Under the Federal Information Security Management Act (FISMA), all U.S. government agencies are required to conduct risk assessments that align with which framework?",
    options: ["International Standards Organization/ International Electrotechnical Commission (ISO/IEC)ISO 31000 National Institute", "of Standards and Technology (NIST) Risk Management Framework (RMF)", "Federal Risk and Authorization Management Program (FedRAMP) National Institute", "of Standards and Technology (NIST) Cyber Security Framework (CSF)"],
    answer: 1,
    explanation: ") Federal Risk and Authorization Management Program (FedRAMP) National Institute of Standards and Technology (NIST) Cyber Security Framework (CSF) Correct Answer: B Explanation: Correct answer: National Institute of Standards and Technology (NIST) Risk Management Framework (RMF) The NIST Risk Management Framework acts as a guide for risk management practices used by United States federal agencies",
    domain: 6
  },
  {
    id: 1478,
    text: "Recently, your organization has decided it will be using a third party for its cloud migration. This third-party organization requires access to numerous of your organization's file servers. You must ensure that the third party has access to the necessary resources. What is the FIRST action your organization should take?",
    options: ["Provide minimal access for the third party Conduct", "vendor due diligence on the third party Establish", "a written IT security policy for the", "third party Monitor third-party access to resources"],
    answer: 1,
    explanation: "necessary resources",
    domain: 6
  },
  {
    id: 1479,
    text: "Acme Inc. wants to ensure an auditor only performs audit activities relevant to a SOC 2 audit and nothing else. What should Acme Inc. implement to ensure this requirement is met?",
    options: ["Scope restrictions Access", "control lists Role-based", "access controls", "Firewall policies"],
    answer: 0,
    explanation: "g else",
    domain: 6
  },
  {
    id: 1480,
    text: "Which of the following is a privacy framework with ten principles that can be included as part of a SOC audit?",
    options: ["International Standards Organization 27018 Generally Accepted", "Privacy Principles Privacy Impact Assessment Payment", "Card Industry", "Data Security Standard"],
    answer: 1,
    explanation: "Assessment Payment Card Industry Data Security Standard xmexam",
    domain: 6
  },
  {
    id: 1481,
    text: "What does jurisdiction refer to?",
    options: ["The industry regulator that creates guidelines The best", "practices in a particular field The geographical", "area to which a law applies The", "data type that a law applies to"],
    answer: 2,
    explanation: "aw applies to Correct Answer: C Explanation: Correct answer: The geographical area to which a law applies Laws and regulations vary depending on the location where data is stored, processed, or accessed",
    domain: 6
  },
  {
    id: 1482,
    text: "Which of the following is a US regulation that applies solely to public companies?",
    options: ["HIPAA", "GDPR", "SOX", "GLBA"],
    answer: 2,
    explanation: "panies? xmexam",
    domain: 6
  },
]