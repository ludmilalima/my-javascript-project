FROM ubuntu:latest

# Set the working directory
WORKDIR /app

# Install necessary packages
RUN apt-get update && \
    apt-get install -y git nodejs npm && \
    npm install -g typescript && \
    npm install -g node-inspect

# Expose Node.js debug port
EXPOSE 9229

# Copy the current directory contents into the container at /app
COPY . .

# Command to run when starting the container
CMD ["bash"]