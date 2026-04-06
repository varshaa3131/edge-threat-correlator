# Edge Threat Correlator

## Overview
Edge-based security systems analyze requests in isolation. This project demonstrates a simple behavioral correlation approach that tracks requests over time and detects suspicious activity patterns.

## How It Works (Step-by-Step)

1. Incoming HTTP request is received by the Node.js server.
2. The server extracts:
   - Client IP address
   - Request URL
   - Timestamp
3. The request is stored in an in-memory log array.
4. The system filters logs based on the same IP address.
5. If repeated requests from the same IP exceed a threshold (5+), it flags as suspicious.
6. A log message is generated:
   Suspicious activity detected: <IP>

## Architecture Flow

Request → Logging → In-Memory Storage → Correlation → Detection → Alert

## Tech Stack

- Node.js (HTTP server)
- Docker (containerization)

## Project Structure
## Project Structure

edge-threat-correlator/
├── app.js
├── Dockerfile
├── package.json
├── README.md
└── screenshot.png
