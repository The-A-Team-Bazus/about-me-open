# Career resume app

This is a career resume app built with Next.js and Quarkus. It is a standalone app that can be run separately or as a part of the main quarkus app. It is a simple app that allows users to fill a resume form and send the data to the backend. The backend then saves the data to a database and sends a message to Kafka. The frontend app also consumes the message from Kafka and displays it on the screen.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Getting Started](#getting-started)
- [Using Kafka](#using-kafka)
- [Technologies](#technologies)
  - [Frontend](#frontend)
  - [Backend](#backend)
  - [Database](#database)
  - [Docker](#docker)
- [Learn More](#learn-more)

## Prerequisites

- [Node.js](https://nodejs.org/en/) (JavaScript runtime)
- [npm](https://www.npmjs.com/) (Node.js package manager)
- [Java](https://www.java.com/en/) (Programming language)
- [Docker](https://www.docker.com/) (Containerization platform)
- [Kafka](https://kafka.apache.org/) (Messaging system)
- [Quarkus](https://quarkus.io/) (Java framework)

## Installation

Clone the repository:

```bash
git clone <repo-url>
```

Switch to the cv-app directory and install the dependencies:

```bash
npm install
```

## Getting Started

If the app is being run as a standalone app, first run the development server:

```bash
npm run dev #run this command from the cv-app directory
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

If the app is being run as a part of the main quarkus app, ensure `docker` is installed and running, then run the following command from the root directory of the quarkus app to run start the development server:

```bash
quarkus dev #run this command from the root directory of the quarkus app
```

or build the app with maven if advised to do so by the quarkus app, or refer to the quarkus documentation for more information.

```bash
./mvnw compile quarkus:dev #run this command from the root directory of the quarkus app
```

This will start the quarkus app and the frontend app. All web requests will be proxied to the quarkus app. e.g. port 8080 is the quarkus app and port 3000 is the frontend app, so the quarkus app will proxy all requests to port 3000.

Open [http://localhost:8080](http://localhost:8080) with your browser to see the result or press `w` from the quarkus terminal if the quarkus app is running in dev mode to open the frontend app in a new browser tab.

## Using Kafka

The app uses Kafka to send messages to the backend. To run Kafka locally, install kafka to a suitable directory, switch to it and run the following command:

On a terminal, start the zookeeper server:

```bash
zookeeper-server-start.sh config/zookeeper.properties
```

On a separate terminal, start the kafka server:

```bash
kafka-server-start.sh config/server.properties
```

On a separate terminal, create a topic:

```bash
kafka-topics.sh --create --topic resumeTopic --bootstrap-server localhost:9092
```

To view the topics produced from the frontend and optionally read them from the beginning, on a separate terminal, start a consumer:

```bash
kafka-console-consumer.sh --topic resumeTopic --from-beginning --bootstrap-server localhost:9092
```

Now you can fill the resume form and send messages to the backend and see them on the consumer terminal.
To stop Kafka, run the following command:

```bash
kafka-server-stop.sh
```

## Technologies

### Frontend

- [Next.js](https://nextjs.org/) (React framework)
- [React](https://reactjs.org/) (JavaScript library)
- [TypeScript](https://www.typescriptlang.org/) (JavaScript superset)
- [Tailwind CSS](https://tailwindcss.com/) (CSS framework)
- [ESLint](https://eslint.org/) (JavaScript linter)

### Backend

- [Quarkus](https://quarkus.io/) (Java framework)
- [Java](https://www.java.com/en/) (Programming language)
- [Kafka](https://kafka.apache.org/) (Messaging system)
- [Maven](https://maven.apache.org/) (Build tool)

### Database

- [PostgreSQL](https://www.postgresql.org/) (Relational database)

### Docker

- [Docker](https://www.docker.com/) (Containerization platform)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
