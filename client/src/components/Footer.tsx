
const Footer = () => {
  return (
    <footer className={'fixed-bottom'} style={{ backgroundColor: '#f8f9fa', padding: '10px 0', textAlign: 'center' }}>
      <p style={{ margin: 0 }}>
        &copy; {new Date().getFullYear()} Bookd, Group 1. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
