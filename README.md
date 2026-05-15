# 🏢 Automated Site Health Monitor: Electroref Engineers

This repository contains a custom, automated Quality Assurance suite developed as a pro-bono initiative for Electroref Engineers (Pvt) Ltd, a commercial HVAC and engineering firm in Colombo, Sri Lanka.

## 🎯 Project Objective
Local engineering firms rely heavily on their digital presence for client acquisition and emergency contact. This suite acts as an automated "Nightly Watchman," ensuring critical business flows remain functional without requiring manual testing.

## 🚀 Tech Stack
* **Framework:** Playwright
* **Language:** TypeScript
* **Target Environment:** Production (Live Site)

## 🧪 Critical Business Flows Validated
1. **Brand Identity:** Verifies homepage load states and correct DOM rendering.
2. **Service Discoverability:** Validates navigation to core engineering and fabrication service listings.
3. **Contact Availability:** Extracts and verifies the presence of critical emergency phone numbers and support emails.
4. **Lead Generation:** Ensures the Contact Us form renders with the minimum required input fields (Name, Email, Message) for client inquiries.

## 🛠️ Execution
```bash
npm install
npx playwright test --project=chromium