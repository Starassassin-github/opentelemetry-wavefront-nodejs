//OpenTelemetry
const { Resource } = require("@opentelemetry/resources");
const { SemanticResourceAttributes } = require("@opentelemetry/semantic-conventions");
const { NodeTracerProvider, SimpleSpanProcessor, ConsoleSpanExporter } = require("@opentelemetry/sdk-trace-node");
const { trace } = require("@opentelemetry/api");
//Exporter
const { OTLPTraceExporter,} = require("@opentelemetry/exporter-trace-otlp-http");
//instrumentations
const { ExpressInstrumentation, } = require("opentelemetry-instrumentation-express");
const { HttpInstrumentation } = require("@opentelemetry/instrumentation-http");
const { registerInstrumentations } = require("@opentelemetry/instrumentation");

const { diag, DiagConsoleLogger, DiagLogLevel } = require("@opentelemetry/api");

// For troubleshooting, set the log level to DiagLogLevel.DEBUG
diag.setLogger(new DiagConsoleLogger(), DiagLogLevel.INFO);

//Exporter
module.exports = (serviceName) => {
  const consoleExporter = new ConsoleSpanExporter();
  const exporter = new OTLPTraceExporter({
    // optional - default url is http://localhost:4318/v1/traces
    url: "http://192.168.1.8:4318/v1/traces",
    headers: {},
  });

  // you can implement Metric Exporter

  const provider = new NodeTracerProvider({
    resource: new Resource({
      [SemanticResourceAttributes.SERVICE_NAME]: serviceName,
    }),
  });
  provider.addSpanProcessor(new SimpleSpanProcessor(exporter));
  provider.addSpanProcessor(new SimpleSpanProcessor(consoleExporter));
  provider.register();
  registerInstrumentations({
    instrumentations: [new HttpInstrumentation(), new ExpressInstrumentation()],
    tracerProvider: provider,
  });
  return trace.getTracer(serviceName);
};
