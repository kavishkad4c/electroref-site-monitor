# 🏢 Automated Site Health Monitor: Electroref Engineers

This repository contains a custom, automated Quality Assurance suite developed as a pro-bono initiative for Electroref Engineers (Pvt) Ltd, a commercial HVAC and engineering firm in Colombo, Sri Lanka.

## 🎯 Project Objective
Local engineering firms rely heavily on their digital presence for client acquisition and emergency contact. This suite acts as an autonomous "Sentinel Agent," ensuring critical business flows remain functional without requiring manual testing.

## 🚀 Tech Stack
* **Framework:** Playwright (TypeScript)
* **Target Environment:** Production (Live Site)
* **CI/CD & Infrastructure:** GitHub Actions
* **Observability:** Discord Webhook Integrations

## 🤖 The Sentinel Agent (Autonomous Monitoring)
This project is configured as a continuous monitoring agent rather than a standard test suite:
* **The Heartbeat:** Powered by GitHub Actions, the agent runs on an automated cron schedule (`0 0 * * *`), spinning up a fresh Ubuntu server to test the live site daily.
* **Real-Time Alerting:** Integrated with encrypted GitHub Secrets and Webhooks. If a critical business flow fails (e.g., the contact form crashes), the pipeline instantly pushes a failure alert to a dedicated monitoring chat channel.

## 🧪 Critical Business Flows Validated
1. **Brand Identity:** Verifies homepage load states and correct DOM rendering.
2. **Service Discoverability:** Validates navigation to core engineering and fabrication service listings.
3. **Contact Availability:** Extracts and verifies the presence of critical emergency phone numbers and support emails.
4. **Lead Generation:** Ensures the Contact Us form renders with the minimum required input fields (Name, Email, Message) for client inquiries.

## 🛠️ Execution
**To run the monitoring agent locally:**
```bash
npm install
npx playwright test --project=chromium