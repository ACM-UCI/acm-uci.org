/* This was pulled directly from ChatGPT */
/* hopefully not from somewhere else directly taken at least */ 


const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f4f4f4',
  },
  spinner: {
    width: '64px',
    height: '64px',
    border: '8px solid #ccc',
    borderTop: '8px solid #007bff',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  },
  text: {
    marginTop: '16px',
    fontSize: '18px',
    color: '#333',
  },
};

const styleSheet = document.styleSheets[0];
const keyframes =
  `@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }`;

if (styleSheet && styleSheet.insertRule) {
  styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
}

export default function Loading() {
  return(
        <div style={styles.container}>
      <div style={styles.spinner} />
      <p style={styles.text}>Loading...</p>
    </div>
  )
}
