import React from 'react';

const styles = {
  Style: {
    paddingLeft: '15%',
  },
};

function Footer() {
  return (
    <div style={styles.Style}>
      <ul>
                <li><a href="https://github.com/evs95" className="fa fa-github" target="_blank"></a></li>
                <li><a href="https://www.linkedin.com/in/venkata-sameera-elamarthy" className="fa fa-linkedin" target="_blank"></a></li>
                <li><a href="https://www.facebook.com/venkatasameera.elamarthy/" className="fa fa-facebook" target="_blank"></a></li>
              </ul>
    </div>
  );
}

export default Footer;
