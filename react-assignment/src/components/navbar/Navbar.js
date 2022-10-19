import './Navbar.css'
const Navbar = () => {
return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
        <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarCollapse3">
                <div className="navbar-nav">
                <a href="/" className="nav-item nav-link ">Users</a>
                    <a href="/todos" className="nav-item nav-link ">Todos</a>
                    <a href="/albums" className="nav-item nav-link">Albums</a>
                    <a href="/posts" className="nav-item nav-link">Posts</a>
                </div>
                
            </div>
        </div>        
    </nav>
   
)

}

export default Navbar;