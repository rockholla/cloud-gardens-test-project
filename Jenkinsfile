pipeline {
  agent any
  triggers {
    pollSCM('*/1 * * * *')
  }
  stages {
    stage('Setup') {
      steps {
        sh 'npm install'
      }
    }
    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }
    stage('Test') {
      steps {
        sh 'npm run test'
      }
    }
  }
}
