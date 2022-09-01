function toggleText() {
  // ваш код...
 
  let btm = document.querySelector('.toggle-text-button')
  
  btm.dataset.toggleId = 'hide'
  
  btm.addEventListener('click', function(event) {
  
  let btn = event.target.className = 'toggle-text-button';
  
  if (!btn) return;  
  
  let divtext = document.querySelector('#text');
  
  divtext.hidden = !divtext.hidden;
  
  });

}