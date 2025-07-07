function changerCouleur() {
  // Tableau ديال الألوان
  const couleurs = ["#FF5733", "#33CFFF", "#8D33FF", "#FF33A6", "#28A745"];
  
  // اختيار عشوائي للّون
  const index = Math.floor(Math.random() * couleurs.length);
  const couleurChoisie = couleurs[index];

  // تغيير الخلفية
  document.body.style.backgroundColor = couleurChoisie;
}
