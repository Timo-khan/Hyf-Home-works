import "./layout.css"

export const Layout = ({children})=> {
    return (
<div className="Layout">
    <header className="text">
        <h1>This is layout component</h1>
    </header>
    <main>
        {children}
    </main>
    <footer className="text">This is my app</footer>
</div>
    )
}