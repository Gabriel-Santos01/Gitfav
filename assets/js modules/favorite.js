export class Favorites {
  constructor(root) {
    this.root = document.querySelector(root)
    this.render()
  }

  render() {
    this.entries = [
      {
        login: 'Gabriel-santos01',
        name: 'Gabriel Santos',
        public_repos: '37',
        followers: '20'
      },
      {
        login: 'valdemirfilho',
        name: 'valdemir filho',
        public_repos: '42',
        followers: '50'
      }
    ]
  }
}

export class FavoritesView extends Favorites {
  constructor(root) {
    super(root)
    this.update()
    this.tbody = this.root.querySelector('table tbody')
  }

  update() {
    this.removeAllTr()
    this.entries.forEach(user => {
      const row = this.createRow()
      row.querySelector('.user img').src = `
      https://github.com/${user.login}.png
      `
      this.tbody.append(row)
      console.log(row.user)
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
        target="_blank"
        rel="noopener noreferrer">
        <p>user.name</p>
        <span>user</span>
      </a>
    </td>
    <td>37</td>
    <td>20</td>
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
