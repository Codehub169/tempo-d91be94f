#!/bin/bash

# Exit immediately if a command exits with a non-zero status.
set -e

echo "Installing Node.js dependencies..."
npm install

echo "Starting development server..."
npm start
