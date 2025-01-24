document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput');

  searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      const searchQuery = searchInput.value.trim();
      if (searchQuery) {
        const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
        window.open(searchUrl, '_blank');
        searchInput.value = '';
      }
    }
  });
});