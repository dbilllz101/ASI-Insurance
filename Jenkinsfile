def docker, tag, dockerHubUser, backendContainerName, frontendContainerName,
backendHttpPort, frontendHttpPort = ""
stage('Prepare Environment'){
echo 'Initialize Environment'
tag="latest"
withCredentials([usernamePassword(credentialsId: 'dockerHubAccount',
usernameVariable: 'dockerUser', passwordVariable: 'dockerPassword')]) {
dockerHubUser="$dockerUser"
}
backendContainerName="insure-me-backend"
frontendContainerName="insure-me-frontend"
backendHttpPort="8080"
frontendHttpPort="3000"
}
stage('Code Checkout'){
checkout scm
}
