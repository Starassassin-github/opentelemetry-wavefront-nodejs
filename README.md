# Opentelemetry tracing to Wavefront Proxy!

simple tracing to wavefront in your node application with **Opentelemetry**.


# Objective

This repository will show you how to trace your Node.js app to **Wavefront** (Longboard VMware).

## Get started with Node.js & Docker

You need to know about the following important things:

1.  **Express.js**: Express.js is a popular web application framework for Node.js. It provides a robust set of features and tools for building web applications and APIs. It simplifies the process of creating server-side applications and handling HTTP requests and responses.
    
2.  **Docker**: Docker is an open-source platform that allows you to automate the deployment, scaling, and management of applications using containerization. Containers are lightweight, isolated environments that contain all the necessary dependencies and libraries for running an application. Docker enables consistent and efficient application deployment across different environments.
    
3.  **@opentelemetry modules**: @opentelemetry modules refer to a collection of open-source modules and tools for implementing observability in applications. OpenTelemetry is a vendor-agnostic framework used for instrumenting, generating, collecting, and exporting telemetry data (such as traces and metrics) from applications. These modules provide integration with various frameworks, libraries, and platforms to enable distributed tracing and monitoring capabilities.


## Configuration

1. docker-compose.yaml
2. otel-collector-config.yaml
>***Important***
>Please make sense of these files
>and look at each file or folder to this repository.

## Tracing your app with NodeTracerProvider

```console
npm install
```
```console
docker-compose up --build
```

## Tracing your app with NodeSDK

1. replace package.json script start  to
- "scripts":  {
	"start":  "node -r ./tracing7.js app.js",
			}
2. delete or comment line 1 in file app.js
- > // const tracer  =  require("./tracing")("hello-world-service");
```console
npm install
```
```console
docker-compose up --build
```


# Reference

**main concept for this repository:** https://github.com/obs-nebula/frontend-react

**OpenTelemetry SDK:** https://open-telemetry.github.io/opentelemetry-js/

**OpenTelemetry:** https://opentelemetry.io
