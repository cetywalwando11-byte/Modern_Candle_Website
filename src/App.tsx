export default function App() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: 'white', 
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      {/* Simple test content */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        backgroundColor: 'red',
        color: 'white',
        padding: '10px',
        zIndex: 1000,
        fontSize: '14px'
      }}>
        React App is Working!
      </div>
      
      <h1 style={{ 
        fontSize: '48px', 
        color: '#d97706', 
        textAlign: 'center',
        marginTop: '60px'
      }}>
        Modern Candle Website
      </h1>
      
      <p style={{ 
        fontSize: '24px', 
        textAlign: 'center', 
        color: '#6b7280',
        marginTop: '20px'
      }}>
        Hand-poured, eco-friendly candles crafted with love
      </p>
      
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        marginTop: '40px'
      }}>
        <button style={{
          backgroundColor: '#d97706',
          color: 'white',
          padding: '12px 24px',
          border: 'none',
          borderRadius: '25px',
          fontSize: '16px',
          cursor: 'pointer'
        }}>
          Shop Collection
        </button>
        <button style={{
          backgroundColor: 'transparent',
          color: '#d97706',
          padding: '12px 24px',
          border: '2px solid #d97706',
          borderRadius: '25px',
          fontSize: '16px',
          cursor: 'pointer'
        }}>
          Learn More
        </button>
      </div>
      
      <div style={{
        marginTop: '60px',
        textAlign: 'center'
      }}>
        <h2 style={{ fontSize: '32px', marginBottom: '20px' }}>
          If you can see this, React is working!
        </h2>
        <p style={{ fontSize: '18px', color: '#6b7280' }}>
          The issue was likely with one of the complex components or CSS loading.
        </p>
      </div>
    </div>
  );
}
