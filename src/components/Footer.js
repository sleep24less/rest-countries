import React from 'react'

function Footer() {
    return (
        <footer className="footer">
            <p>Copyright @
                <script>
                    document.write(new Date().getFullYear());
                </script>
                Arno Manukian
            </p>
            <a href="https://github.com/rektjesus" target="_blank" rel='noreferrer'>
                <i className="fab fa-github"></i>
            </a>
        </footer>
    )
}

export default Footer