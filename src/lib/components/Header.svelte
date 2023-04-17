<main>
    <header>
        <nav>
            <ul>
                <li><a href="/">To Do</a></li>
                <li><a href="/notes ">Notes</a></li>
            </ul>
        </nav>
    </header>
</main>

<style>
    main {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        grid-template-areas: "header";
    }
    header {
        grid-area: header;
        
        padding: 20px;
        text-align: center;
    }
    nav {
        display: flex;
        justify-content: center;
    }
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
        outline-offset: 2px;
        outline-width: 2px;
        border-color: rgb(221 221 221 / var(--tw-border-opacity));
        outline-color: rgb(221 221 221 / var(--tw-text-opacity));
        border-width: 2px;
        border-radius: 0.375rem;
        font-size: 1.125rem;
        padding: 0.75em 1.5em;
        border-color: #DDDDDD;
    }
    
    li:hover{
        background-color: #00f671;
        border-color: #2c2c2c;
        color: #2c2c2c;
    }
    li:hover a{
        background-color: #00f671;
        border-color: #2c2c2c;
        color: #2c2c2c;
    }
    a {
        text-decoration: none;
        color: rgb(221 221 221);
    }
    a:hover{
        color: #2c2c2c;

    }
</style>