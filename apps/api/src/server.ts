import express from "express";

const app = express();
const serviceName = "iaquizu-api";
const defaultVersion = "0.0.1";
const port = Number(process.env.PORT ?? 4000);

app.get("/health", (_req, res) => {
  res.status(200).json({
    status: "ok",
    service: serviceName,
    timestamp: new Date().toISOString(),
  });
});

app.get("/version", (_req, res) => {
  res.status(200).json({
    service: serviceName,
    version: process.env.npm_package_version ?? defaultVersion,
  });
});

app.listen(port, () => {
  console.log(`[${serviceName}] listening on http://localhost:${port}`);
});
