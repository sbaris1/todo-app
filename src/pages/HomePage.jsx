import { useState } from "react";
import { useNavigate } from "react-router-dom";

function HomePage({ setIsLoggedIn }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "demo" && password === "1234") {
      setIsLoggedIn(true);
      navigate("/todos");
    } else {
      alert("Kullanıcı adı veya şifre yanlış!");
    }
  };

  return (
    <div className="container-fluid vh-100 d-flex align-items-center">
      <div className="row w-100">
        {/* Sol taraf - Login Form */}
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <div style={{ maxWidth: "400px", width: "100%" }}>
            {/* Buraya ekle */}
            <h2 className="mb-2 fw-bold text-center">Welcome back!</h2>
            <p
              className="text-center text-muted mb-4"
              style={{ fontSize: "0.9rem" }}
            >
              Simplify your workflow and boost your productivity
              <br />
              with <strong>HiSchool App</strong>. Get started for free.
            </p>

            <input
              type="text"
              className="form-control mb-3 rounded-3"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <input
              type="password"
              className="form-control mb-2 rounded-3"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="text-end mb-3">
              <a
                href="#"
                className="text-decoration-none text-secondary"
                style={{ fontSize: "0.875rem" }}
              >
                Forgot password?
              </a>
            </div>

            <button
              className="btn w-100 rounded-3"
              style={{ backgroundColor: "#f7cf57", fontWeight: "bold" }}
              onClick={handleLogin}
            >
              Log in
            </button>

            <div
              className="mt-3 text-center text-muted"
              style={{ fontSize: "0.875rem" }}
            >
              Not a member?{" "}
              <a href="#" className="text-primary">
                Sign up
              </a>
            </div>
          </div>
        </div>

        {/* Sağ taraf - Görsel */}
        <div className="col-md-6 d-none d-md-block p-0">
          <img
            src="https://i.pinimg.com/736x/f4/91/f5/f491f55a9cf73fc64933f44ac641b213.jpg"
            alt="login illustration"
            style={{
              height: "100vh", // yüksekliği ekran boyu kadar yap
              objectFit: "cover", // taşma yapmadan kırp
              objectPosition: "right", // sağdan hizala
              display: "block", // olası boşluk hatalarını engelle
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
