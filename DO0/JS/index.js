  function registrarUsuario() {
    // Simula o cadastro do usuário
    localStorage.setItem("usuario_cadastrado", "true");
    // Redireciona pro login
    window.location.href = "login.html";
  }
