document.addEventListener('DOMContentLoaded', function () {
    // Select elements
    const welcomeMessage = document.getElementById('welcomeMessage');
    const bankingService = document.getElementById('bankingService');
    const municipalService = document.getElementById('municipalService');
    const employmentService = document.getElementById('employmentService');
    const languageSelect = document.getElementById('languageSelect');

    // Define translation maps
    const translations = {
        en: {
            welcomeMessage: 'Welcome to Letter Generation',
            bankingService: 'Banking Service Requests',
            municipalService: 'Municipal Office Requests',
            employmentService: 'Employment Related Letters'
        },
        kn: {
            welcomeMessage: 'ಪತ್ರಗಳನ್ನು ಸುಲಭವಾಗಿ ರಚಿಸುವುದು',
            bankingService: 'ಬ್ಯಾಂಕಿಂಗ್ ಸೇವೆ ಅರ್ಜಿಗಳು',
            municipalService: 'ಮುನಿಸಿಪಲ್ ಕಚೇರಿ ಅರ್ಜಿಗಳು',
            employmentService: 'ಉದ್ಯೋಗಗಳ ಸಂಬಂಧಿತ ಪತ್ರಗಳು'
        },
        hi: {
            welcomeMessage: 'पत्र बनाना आसान',
            bankingService: 'बैंक सेवा अनुरोध',
            municipalService: 'नगरपालिका कार्यालय अनुरोध',
            employmentService: 'रोजगार संबंधित पत्र'
        }
    };

    // Function to update text based on selected language
    function updateText(language) {
        welcomeMessage.textContent = translations[language].welcomeMessage;
        bankingService.textContent = translations[language].bankingService;
        municipalService.textContent = translations[language].municipalService;
        employmentService.textContent = translations[language].employmentService;
    }

    // Event listener for language selection change
    languageSelect.addEventListener('change', function () {
        updateText(languageSelect.value);
    });

    // Initialize text based on default language
    updateText(languageSelect.value);
});
