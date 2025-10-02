

function Footer() {
    const footer = (
  <footer style={styles.footer}>
    <p>copyright 2025</p>
  </footer>
 )
    return (
        <>
        {footer}
        
        </>

    )
}
const styles = {
  intro: {
    fontSize: 30,
    color: 'green'
  },
  footer:{
    background: 'black',
    color: 'white',
    textAlign: 'center',
    fontSize: 30

  }
}

export default Footer



export const Button = ()  => <button>click me</button>