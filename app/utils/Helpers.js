import axios from 'axios';

class Helpers {
  constructor(){
    this.gitHubBase = 'https://api.github.com/users/'
  }

  getRepos(username){
    return axios.get(`${this.gitHubBase}${username}/repos`)
  }

  getUserInfo(username){
    return axios.get(`${this.gitHubBase}${username}`)
  }

  getGithubInfo(username) {
    return axios
      .all([
        this.getRepos(username),
        this.getUserInfo(username)
      ])
      .then((response) => {
        return {
          repos: response[0].data,
          bio: response[1].data
        }
      });
  }
}

export default Helpers;
