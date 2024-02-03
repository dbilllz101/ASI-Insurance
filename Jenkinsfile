pipeline {
    agent any
    
    environment {
        tag = "3.0"
        dockerHubUser = "anujsharma1990"
        containerName = "insure-me"
        httpPort = "8081"
    }

    stages {
        stage('Prepare Environment') {
            steps {
                script {
                    echo 'Initialize Environment'
                }
            }
        }

        stage('Code Checkout') {
            steps {
                script {
                    checkout scm
                }
            }
        }

        stage('Publish Test Reports') {
            steps {
                script {
                    publishHTML(
                        allowMissing: false,
                        alwaysLinkToLastBuild: false,
                        keepAll: false,
                        reportDir: 'target/surefire-reports',
                        reportFiles: 'index.html',
                        reportName: 'HTML Report',
                        reportTitles: '',
                        useWrapperFileDirectly: true
                    )
                }
            }
        }

        
         stage('Docker Image Build') {
            steps {
                script {
                    echo 'Creating Docker image'
                    sh "docker build -t $dockerHubUser/$containerName:$tag --pull --no-cache ."
                }
            }
        }
        stage('Docker Image Scan') {
            steps {
                script {
                    echo 'Scanning Docker image for vulnerabilities'
                    // Integrate a vulnerability scanning tool like Trivy here
                }
            }
        }

        stage('Publishing Image to DockerHub') {
            steps {
                script {
                    echo 'Pushing the docker image to DockerHub'
                    withCredentials([usernamePassword(credentialsId: 'dockerHubAccount', usernameVariable: 'dockerUser', passwordVariable: 'dockerPassword')]) {
                        sh "docker login -u $dockerUser -p $dockerPassword"
                        sh "docker push $dockerUser/$containerName:$tag"
                        echo "Image push complete"
                    }
                }
            }
        }

        stage('Docker Container Deployment') {
            steps {
                script {
                    sh "docker rm $containerName -f"
                    sh "docker pull $dockerHubUser/$containerName:$tag"
                    sh "docker run -d --rm -p $httpPort:$httpPort --name $containerName $dockerHubUser/$containerName:$tag"
                    echo "Application started on port: ${httpPort} (http)"
                }
            }
        }
    }
}
