const Home = () => {
    return (
        <html lang="en">
            <head>
                <title>Hello</title>
                <script src="https://unpkg.com/htmx.org@1.9.6" integrity="sha384-FhXw7b6AlE/jyjlZH5iHa/tTe9EpJ1Y55RjcgPbjeWMskSxZt1v9qkxLJWNJaGni" crossorigin="anonymous"></script>
            </head>
            <body>
                <button hx-get="/api/v1/hello-world" hx-swap="outerHTML">Hello</button>
            </body>
        </html>
    );
};

export default Home;
