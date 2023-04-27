//class que contem toda a logica da aplicação
export class Favorites {
  constructor(root) {
    this.root = document.querySelector(root)
    this.render()
  }

  render() {
    this.entries = [
      {
        login: 'gabrielSantos1101',
        name: 'Gabriel Santos',
        avatar: 'https://github.com/gabrielSantos1101.png',
        repositories: '38',
        followers: '20'
      },
      {
        login: 'vhraposo',
        name: 'Victor Raposo',
        avatar: 'https://github.com/vhraposo.png',
        public_repos: '28',
        followers: '50'
      },
      {
        login: 'valdemirfilho',
        name: 'Valdemir Filho',
        avatar: 'https://github.com/valdemirfilho.png',
        public_repos: '41',
        followers: '78'
      }
    ]
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

  update() {
    this.removeAllTr()
    this.entries.forEach(user => {
      const row = this.createRow()
      row.querySelector(
        '.user img'
      ).src = `https://github.com/${user.login}.png`

      this.tbody.apend(row)
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
                <td>00</td>
                <td>00</td>
                <td>
                  <button><i class="ph ph-x"></i></button>
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
