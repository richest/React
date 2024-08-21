import './css/index.css'
function homepage(props) {

    return <>
        <div className="container homepage">

            <h1>Welcome</h1>
            <h2>React.js BASE/STARTER</h2>
            <div className="instruction">
                <ul className="text-left">
                    <li>Customize standard structure</li>
                    <li>Axios Client with common request format</li>
                    <li>Container - concept to reuse the structure Element like Adds panel, jumbotron, baner, gridsystem <strong>(optional)</strong></li>
                    <li>Layout with Default header and footer <strong>(optional)</strong></li>
                    <li>Lazy components & Suspense</li>
                    <li>Redux Toolkit</li>
                    <li>Redux Saga middleware</li>
                    <li>React semi-dynamic Router</li>
                    <li>Basic Authentication / Routes</li>
                    <li>Code Splitting</li>
                </ul>
            </div>
        </div>
    </>
}
export default homepage;