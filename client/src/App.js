import './App.css';

function App() {
  return (
    <main>
      <header>
        <a href="" className="logo">MyBlog</a>
        <nav>
          <a href="">Login</a>
          <a href="">Register</a>
        </nav>
      </header>
      <div className="post">
        <div className="image">
          <img src="https://lifehacker.com/imagery/articles/01HY42WNG2R4DTVJ1RM69VM3TX/hero-image.fill.size_1200x675.jpg" alt="" />
        </div>
        <div className="texts">
          <h2>Slack Is Using Your Private Conversations to Train Its AI</h2>
          <p className="info">
            <a className="author">LokmanKhodziri</a>
            <time>2024-05-17 16:44</time>
          </p>
          <p className="summary">Slack users across the web—on Mastodon, on Threads, and on Hackernews—have responded with alarm to an obscure privacy page that outlines the ways in which their Slack conversations, including DMs, are used to train what the Salesforce-owned company calls "Machine Learning" (ML) and "Artificial Intelligence" (AI) systems.</p>
        </div>
      </div>
    </main>
  );
}

export default App;
