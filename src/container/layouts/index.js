import Header from './header/'
import Footer from './footer/'
function Layout(props) {    
    return (
        <div className="App">
            <Header isAuthenticated={props.isAuthenticated} />
                {props.children}
            <Footer isAuthenticated={props.isAuthenticated} />
        </div>
    )
}

export default Layout;