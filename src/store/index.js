

export default ({
  state: {
    git: [
      {
        title: 'Git',
        sections: [
          {
            title: 'GIT BASICS',
            contents: [
              {
                code: 'git init <directory>',
                description: 'git.git.init',
                example: 'git init mi-project'
              },
              {
                code: 'git clone <repo>',
                description: 'git.git.clone',
                example: 'git clone git@github.com:myuser/my-project.git'
              },
              {
                code: 'git config user.name <name>',
                description: 'git.git.config',
                example: 'git config user.name myuser'
              },
              {
                code: 'git add <directory>',
                description: 'git.git.add',
                example: 'git add README.md'
              },
              {
                code: 'git commit -m "<message>"',
                description: 'git.git.commit',
                example: 'git commit -m "my new commit"'
              },
              {
                code: 'git status',
                description: 'git.git.status',
                example: 'git status'
              },
              {
                code: 'git log',
                description: 'git.git.log',
                example: 'git log'
              },
              {
                code: 'git diff',
                description: 'git.git.diff',
                example: 'git diff'
              }
            ]
          }
        ]
      }
    ]
  },
  mutations: {

  },
  actions: {

  }
})