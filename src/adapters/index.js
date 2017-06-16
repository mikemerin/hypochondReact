const URL = ''

export default class SymptomsAdapter {

  static all(){
    return fetch(URL).then(r => r.json())
  }

}
