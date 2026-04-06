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
## Screenshot

![Detection Output]
)(screenshot.png)


## How to Run

git clone https://github.com/varshaa3131/edge-threat-correlator.git
cd edge-threat-correlator
docker build -t devops-app .
docker run -d -p 3000:3000 devops-app

Open browser:
http://localhost:3000/login

Refresh multiple times to trigger detection.

## Why This Matters

Modern attacks such as brute-force login attempts and credential stuffing happen across multiple requests over time. Traditional edge-based systems fail to detect these patterns because they analyze each request in isolation.