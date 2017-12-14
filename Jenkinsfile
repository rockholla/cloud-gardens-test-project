node {
  stage('Setup') {
    checkout scm
    sh 'npm install'
  }
  stage('Build') {
    sh 'npm run build'
  }
  stage('Test') {
    sh 'npm run test'
  }
}
