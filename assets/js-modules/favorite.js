export class githubUser {
  static search(username) {
    const endpoint = `https://api.github.com/users/${username}`
    return fetch(endpoint)
      .then(data => data.json())
      .then(({ login, name, public_repos, followers }) => ({
        login,
        name,
        public_repos,
        followers
      }))
  }
}

//class que contem toda a logica da aplicação
export class Favorites {
  constructor(root) {
    this.root = document.querySelector(root)
    this.render()

    githubUser.search('gabrielsantos1101').then(user => {})
  }

  render() {
    this.entries = JSON.parse(localStorage.getItem('@git-fav')) || []
  }
}

//essa class irá criar a os elementos da tabela
// o extends serve para que a classe seja herdada
export class FavoritesView extends Favorites {
  constructor(root) {
    super(root)
    this.tbody = this.root.querySelector('table tbody')
    this.update()
  }

  onAdd() {
    const searchButton = this.root.querySelector('search-button')
    searchButton.onclick = () => {
      const { value } = this.root.querySelector('#searchUser')
      console.log('funfa')
      console.log(value)
    }
  }

  update() {
    this.removeAllTr()
    this.entries.forEach(user => {
      const row = this.createRow()
      row.querySelector(
        '.user img'
      ).src = `https://github.com/${user.login}.png`
      row.querySelector('.user img').alt = `foto de perfil de ${user.name}`
      row.querySelector('.user a p').textContent = user.name
      row.querySelector('.user a span').textContent = user.login
      row.querySelector('.user a').href = `https://github.com/${user.login}`
      row.querySelector('.public-repos').textContent = user.public_repos
      row.querySelector('.followers').textContent = user.followers
      row.querySelector('.delete').onclick = () => {
        const confirm = window.confirm('Tem certeza que deseja excluir?')
        if (confirm) {
          this.entries.splice(this.entries.indexOf(user), 1)
          this.update()
        }
      }

      this.tbody.append(row)
    })
  }

  createRow() {
    const tr = document.createElement('tr')
    tr.innerHTML = `
                <td class="user">
                  <img
                    src="https://github.com/user.png"
                    alt="Imagem de user.name" />
                  <a
                    href="https://github.com/user"
                    target="_blank">
                    <p>user name</p>
                    <span>user id</span>
                  </a>
                </td>
                <td class="public-repos">00</td>
                <td class="followers">00</td>
                <td>
                  <button class="delete"><i class="ph ph-x"></i></button>
                </td>
`
    return tr
  }

  removeAllTr() {
    this.tbody.querySelectorAll('tr').forEach(tr => {
      tr.remove()
    })
  }
}
