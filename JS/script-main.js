document.getElementById('generar').addEventListener('click', function() {
    const nombres1 = ["Akira", "Hiroshi", "Kaori", "Yuki", "Haruto", "Ayumi", "Takashi", "Emiko", "Kenji", "Miyuki"];
    const nombres2 = ["Tanaka", "Suzuki", "Yamamoto", "Kobayashi", "Nakamura", "Sato", "Yamada", "Matsumoto", "Inoue", "Kato"];
    
    const nombreAleatorio1 = nombres1[Math.floor(Math.random() * nombres1.length)];
    const nombreAleatorio2 = nombres2[Math.floor(Math.random() * nombres2.length)];
    
    const nombreGenerado = `${nombreAleatorio1} ${nombreAleatorio2}`;
    
    document.getElementById('nombre-generado').textContent = nombreGenerado;
});
