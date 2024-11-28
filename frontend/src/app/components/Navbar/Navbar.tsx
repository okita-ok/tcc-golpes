export default function Navbar() {
  return (
    <nav
      className="navbar bg-light border-body flex-column position-fixed vh-100"
      style={{ width: "250px" }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <h4>Identificando Golpes</h4>
        </a>
        <ul className="nav nav-pills flex-column me-auto">
          <li className="nav-item">
            <a className="nav-link" href="/unidade/unidade1">
              Unidade 1
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Unidade 2
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Unidade 3
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
