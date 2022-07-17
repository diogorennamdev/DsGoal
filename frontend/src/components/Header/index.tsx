import logo from '../../assets/img/logo.svg'
import './styles.css' 
function Header() {
  return (
    <header>
      <div className="dsmeta-logo-container">
        <img src={logo} alt="Logo" />
        <h1>DSMeta</h1>
        <p>
          Desenvolvido por
          <a href="https://www.instagram.com/renam_diogodev" target="_blank">
            @renam_diogodev
          </a>
        </p>
      </div>
    </header>
  )
}

export default Header
