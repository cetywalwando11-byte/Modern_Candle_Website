export default function App() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      fontFamily: 'Arial, sans-serif',
      padding: '0',
      margin: '0'
    }}>
      {/* MASSIVE VISIBLE INDICATOR */}
      <div style={{
        position: 'fixed',
        top: '10px',
        left: '10px',
        backgroundColor: '#ff0000',
        color: 'white',
        padding: '15px',
        fontSize: '20px',
        fontWeight: 'bold',
        zIndex: 9999,
        border: '3px solid yellow',
        borderRadius: '10px'
      }}>
        🚀 NEW VERSION LOADED! v4.0 🚀
      </div>

      {/* Header */}
      <header style={{
        background: 'rgba(0,0,0,0.3)',
        padding: '20px 0',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontSize: '48px',
          margin: '0',
          textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
        }}>
          🕯️ CANDID CANDLES 🕯️
        </h1>
        <p style={{
          fontSize: '24px',
          margin: '10px 0 0 0',
          opacity: '0.9'
        }}>
          Premium Hand-Poured Candles
        </p>
      </header>

      {/* Navigation */}
      <nav style={{
        background: 'rgba(255,255,255,0.1)',
        padding: '15px 0',
        textAlign: 'center',
        backdropFilter: 'blur(10px)'
      }}>
        <button style={{
          background: '#ff6b6b',
          color: 'white',
          border: 'none',
          padding: '12px 24px',
          margin: '0 10px',
          borderRadius: '25px',
          fontSize: '16px',
          cursor: 'pointer',
          fontWeight: 'bold'
        }}>
          🏠 HOME
        </button>
        <button style={{
          background: '#4ecdc4',
          color: 'white',
          border: 'none',
          padding: '12px 24px',
          margin: '0 10px',
          borderRadius: '25px',
          fontSize: '16px',
          cursor: 'pointer',
          fontWeight: 'bold'
        }}>
          ℹ️ ABOUT
        </button>
        <button style={{
          background: '#45b7d1',
          color: 'white',
          border: 'none',
          padding: '12px 24px',
          margin: '0 10px',
          borderRadius: '25px',
          fontSize: '16px',
          cursor: 'pointer',
          fontWeight: 'bold'
        }}>
          🛒 SHOP
        </button>
      </nav>

      {/* Main Content */}
      <main style={{
        padding: '60px 20px',
        textAlign: 'center',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '20px',
          padding: '40px',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.2)'
        }}>
          <h2 style={{
            fontSize: '36px',
            marginBottom: '20px',
            color: '#ffd700'
          }}>
            ✨ Illuminate Your Space with Warmth ✨
          </h2>
          
          <p style={{
            fontSize: '20px',
            lineHeight: '1.6',
            marginBottom: '30px',
            opacity: '0.9'
          }}>
            Hand-poured, eco-friendly candles crafted with love. Transform your home into a sanctuary of peace and tranquility.
          </p>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            marginBottom: '40px',
            flexWrap: 'wrap'
          }}>
            <button style={{
              background: 'linear-gradient(45deg, #ff6b6b, #ee5a24)',
              color: 'white',
              border: 'none',
              padding: '15px 30px',
              borderRadius: '30px',
              fontSize: '18px',
              cursor: 'pointer',
              fontWeight: 'bold',
              boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
            }}>
              🛍️ SHOP COLLECTION
            </button>
            <button style={{
              background: 'transparent',
              color: 'white',
              border: '2px solid white',
              padding: '15px 30px',
              borderRadius: '30px',
              fontSize: '18px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}>
              📖 LEARN MORE
            </button>
          </div>

          {/* Stats */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '20px',
            marginTop: '40px'
          }}>
            <div style={{
              background: 'rgba(255,255,255,0.1)',
              padding: '20px',
              borderRadius: '15px',
              border: '1px solid rgba(255,255,255,0.2)'
            }}>
              <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#ffd700' }}>100%</div>
              <div style={{ fontSize: '16px', opacity: '0.8' }}>Natural Soy Wax</div>
            </div>
            <div style={{
              background: 'rgba(255,255,255,0.1)',
              padding: '20px',
              borderRadius: '15px',
              border: '1px solid rgba(255,255,255,0.2)'
            }}>
              <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#ffd700' }}>40+</div>
              <div style={{ fontSize: '16px', opacity: '0.8' }}>Unique Scents</div>
            </div>
            <div style={{
              background: 'rgba(255,255,255,0.1)',
              padding: '20px',
              borderRadius: '15px',
              border: '1px solid rgba(255,255,255,0.2)'
            }}>
              <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#ffd700' }}>50+</div>
              <div style={{ fontSize: '16px', opacity: '0.8' }}>Hours Burn Time</div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer style={{
        background: 'rgba(0,0,0,0.3)',
        padding: '20px',
        textAlign: 'center',
        marginTop: '40px'
      }}>
        <p style={{ margin: '0', opacity: '0.8' }}>
          © 2024 Candid Candles. All rights reserved. 🕯️ v4.0 - COMPLETELY NEW DESIGN! 🕯️
        </p>
      </footer>
    </div>
  );
}
