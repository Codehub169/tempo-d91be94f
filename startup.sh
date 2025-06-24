#!/bin/bash

# Exit immediately if a command exits with a non-zero status.
set -e

echo "Installing Node.js dependencies..."
npm install

echo "Running npm audit fix..."
npm audit fix --force || true # Continue even if audit fix has issues

echo "Starting development server..."
npm start
