import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Welcome to My Website</h1>
        <nav className="nav">
          <a href="#home">Career</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main className="main-content">
        <section className="section">
          <h2>About Us</h2>
          <p>This is a simple React website demonstrating internal CSS usage.</p>
        </section>

        <div className="card-container">
          <div className="card">
            <h3>Web Development</h3>
            <p>Learn modern web development techniques.</p>
          </div>
          <div className="card">
            <h3>Design</h3>
            <p>Discover the latest design trends.</p>
          </div>
          <div className="card">
            <h3>Programming</h3>
            <p>Master multiple programming languages.</p>
          </div>
        </div>
      </main>

      <footer className="footer">
        <p>© 2023 Simple Website. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;