#!/bin/bash

# At times the port does not go away. This script
# will kill  port 8000 explicitly.
pid=$(lsof -t -i:8000 -sTCP:LISTEN)

if [ "$pid" != "" ]; then
  kill -KILL  $pid;
  echo killed $pid;
fi
