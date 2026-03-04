document.addEventListener('DOMContentLoaded', function() {
    var sidebarToggle = document.getElementById('sidebarToggle');
    var sidebar = document.getElementById('sidebar');
    var mainContent = document.getElementById('main-content');
    
    function toggleSidebar() {
        sidebar.classList.toggle('show');
        updateLayout();
    }

    function updateLayout() {
        var viewportWidth = window.innerWidth;
        
        if (viewportWidth < 992) {
            if (sidebar.classList.contains('show')) {
                //mainContent.style.marginTop = sidebar.offsetHeight + 'px';
                //mainContent.style.paddingLeft = '0';
            } else {
                mainContent.style.marginTop = '0';
                //mainContent.style.paddingLeft = '0';
            }
        } else {
            sidebar.classList.add('show');
            mainContent.style.marginTop = '0';
           ;
        }
    }

    if (sidebarToggle && sidebar) {
        sidebarToggle.addEventListener('click', toggleSidebar);
    }

    // Chiudi la sidebar quando si fa clic all'esterno di essa
/*     document.addEventListener('click', function(event) {
        var isClickInsideSidebar = sidebar.contains(event.target);
        var isClickOnToggleButton = sidebarToggle.contains(event.target);

        if (!isClickInsideSidebar && !isClickOnToggleButton && sidebar.classList.contains('show') && window.innerWidth < 992) {
            toggleSidebar();
        }
    }); */

    // Evidenzia la voce di menu attiva nella sidebar
    var sidebarLinks = document.querySelectorAll('#sidebar .nav-link');
    
    sidebarLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            sidebarLinks.forEach(function(l) {
                l.classList.remove('active');
            });
            this.classList.add('active');
            if (window.innerWidth < 992) {
                toggleSidebar();
            }
        });
    });

    // Gestisci il ridimensionamento della finestra
    var resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(updateLayout, 250);
        updateLayout();
    });

    // Inizializza il layout
    updateLayout();
});


/// COOKIE ////
document.addEventListener('DOMContentLoaded', () => {
    // Seleziona gli elementi "Read more"
    const readMore = document.querySelectorAll('.cookie-footer .btn-outline-primary:first-of-type, .cookie-body a');
  
    // Aggiungi l'evento click ai link "Read more"
    readMore.forEach(link => {
      link.addEventListener('click', cookieReadMore);
    });
  
    // Funzione per mostrare la cookie banner estesa
    function cookieReadMore() {
      document.querySelector('.cookie-banner').classList.add('cookie-more');
    }
  
    // Aggiungi gli eventi click per chiudere la cookie banner
    const closeBtns = document.querySelectorAll('.cookie-banner .btn-close, .cookie-banner .btn-primary, .cookie-banner .btn-danger');
    closeBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelector('.cookie-banner').remove();
      });
    });
  
    // Gestisci il toggle della modalità scura
    let darkToggle = document.querySelector('header').classList.contains('navbar-dark');
    const darkModeBtn = document.querySelector('[demon-header="dark-mode"]');
    darkModeBtn.addEventListener('click', () => {
      if (darkToggle) {
        darkToggle = false;
        document.querySelector('header').classList.remove('navbar-dark');
        document.querySelectorAll('header .btn-white').forEach(btn => btn.classList.replace('btn-white', 'btn-primary'));
        document.querySelectorAll('header .btn-outline-white').forEach(btn => btn.classList.replace('btn-outline-white', 'btn-outline-primary'));
        document.querySelectorAll('header .mega-menu .btn-bare').forEach(btn => btn.classList.remove('bare-white'));
      } else {
        darkToggle = true;
        document.querySelector('header').classList.add('navbar-dark');
        document.querySelectorAll('header .btn-primary').forEach(btn => btn.classList.replace('btn-primary', 'btn-white'));
        document.querySelectorAll('header .btn-outline-primary').forEach(btn => btn.classList.replace('btn-outline-primary', 'btn-outline-white'));
        document.querySelectorAll('header .mega-menu .btn-bare').forEach(btn => btn.classList.add('bare-white'));
      }
    });
  
    // Gestisci il toggle della sezione di login
    let loginToggle = document.querySelector('header .demon-unlogged').classList.contains('demon-hide');
    const loginBtn = document.querySelector('[demon-header="login"]');
    loginBtn.addEventListener('click', () => {
      if (loginToggle) {
        loginToggle = false;
        document.querySelector('header .demon-logged').classList.add('demon-hide');
        document.querySelector('header .demon-unlogged').classList.remove('demon-hide');
      } else {
        loginToggle = true;
        document.querySelector('header .demon-logged').classList.remove('demon-hide');
        document.querySelector('header .demon-unlogged').classList.add('demon-hide');
      }
    });
  });


  //custom ricerca degli stati 

  document.querySelectorAll('#rowstato .chip').forEach(function(chip) {
    chip.addEventListener('click', function() {
      var selectedId = this.getAttribute('data-id');
      
      // Nasconde tutte le sezioni
      document.querySelectorAll('#neutral, #base, #primary, #secondary, #accent, #disabled, #success, #warning, #danger').forEach(function(section) {
        section.style.display = 'none';
      });
  
      // Mostra solo la sezione selezionata
      if (selectedId === 'all') {
        // Se 'Tutto' è selezionato, mostra tutte le sezioni
        document.querySelectorAll( '#base,#neutral, #primary, #secondary, #accent, #disabled, #success, #warning, #danger').forEach(function(section) {
          section.style.display = 'block';
        });
      } else {
        var selectedSection = document.getElementById(selectedId);
        if (selectedSection) {
          selectedSection.style.display = 'block';
        }
      }
    });
  });

 
  document.querySelectorAll('#rowstato .chip').forEach(function(chip) {
    chip.addEventListener('click', function() {
        var selectedId = this.getAttribute('data-id');
        
        // Nasconde tutte le sezioni
        document.querySelectorAll('#text, #background, #icon, #border, #neutral, #base, #primary, #secondary, #accent, #disabled, #success, #warning, #danger').forEach(function(section) {
            section.style.display = 'none';
        });

        // Gestisci il caso in cui venga selezionata la chip "all"
        if (selectedId === 'all') {
            // Mostra tutte le sezioni
            document.querySelectorAll('#text, #background, #icon, #border, #base, #neutral, #primary, #secondary, #accent, #disabled, #success, #warning, #danger').forEach(function(section) {
                section.style.display = 'block';
                // Mostra gli <hr> all'interno di ogni sezione
                section.querySelectorAll('hr').forEach(function(hr) {
                    hr.style.display = 'block';  // Ripristina visibilità degli <hr>
                });
            });
        } else {
            var selectedSection = document.getElementById(selectedId);
            if (selectedSection) {
                selectedSection.style.display = 'block';
                // Nascondi gli <hr> solo nella sezione selezionata
                selectedSection.querySelectorAll('hr').forEach(function(hr) {
                    hr.style.display = 'none';
                });
            }
        }
    });
});



// Funzione per la ricerca nella tabella
document.getElementById('searchInput').addEventListener('input', function () {
  // Ottieni il valore dell'input
  let filter = this.value.toLowerCase();

  // Ottieni tutte le righe della tabella
  let rows = document.querySelectorAll('#tabellaicone tbody tr');

  // Itera su ciascuna riga
  rows.forEach(function (row) {
    // Ottieni il testo della seconda colonna (il nome dell'icona)
    let nameCell = row.cells[1].textContent.toLowerCase();

    // Controlla se il testo della cella corrisponde al filtro
    if (nameCell.includes(filter)) {
      // Se c'è una corrispondenza, mostra la riga
      row.style.display = '';
    } else {
      // Altrimenti nascondi la riga
      row.style.display = 'none';
    }
  });
});



// Ottieni tutte le chip
const chips = document.querySelectorAll('.chip');

// Aggiungi l'evento click a ciascuna chip
chips.forEach(chip => {
  chip.addEventListener('click', function() {
    // Rimuovi la classe active da tutte le chip
    chips.forEach(c => c.classList.remove('active'));
    // Aggiungi la classe active solo alla chip cliccata
    this.classList.add('active');
  });
});

 // script.js
 document.addEventListener('DOMContentLoaded', () => {
  const typeSelector = document.getElementById('typeSelector');

  // Aggiungi un listener per l'evento di cambiamento
  typeSelector.addEventListener('change', function() {
      const selectedValue = this.value;
      
      // Nascondi tutti i modali
      hideAllModals();

      // Mostra il modal corretto in base alla selezione
      if (selectedValue) {
          const modal = document.getElementById(`modal${selectedValue}`);
          modal.style.display = "block"; // Mostra il modal selezionato
      }
  });

  // Nascondi i modali quando si fa clic sulla "x"
  const closeButtons = document.querySelectorAll('.close');
  closeButtons.forEach(button => {
      button.addEventListener('click', function() {
          const modalId = this.getAttribute('data-modal');
          document.getElementById(modalId).style.display = "none";
      });
  });

  // Nascondi i modali se si fa clic al di fuori di essi
  window.addEventListener('click', function(event) {
      const modals = document.querySelectorAll('.modal');
      modals.forEach(modal => {
          if (event.target === modal) {
              modal.style.display = "none";
          }
      });
  });
});

// Funzione per nascondere tutti i modali
function hideAllModals() {
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
      modal.style.display = "none";
  });
}
