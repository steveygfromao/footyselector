const Footer = () => {
    return (
        <footer style={footerStyle}>
            <p>&copy; 2025 SDG. All rights reserved.</p>
        </footer>
    );
};

const footerStyle = {
    backgroundColor: 'grey',
    padding: '10px 0',
    textAlign: 'center',
    position: 'fixed',
    left: '0',
    bottom: '0',
    width: '100%',
};

export default Footer;