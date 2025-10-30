const flashcards = [
            { term: "HTML", definition: "HyperText Markup Language" },
            { term: "CSS", definition: "Cascading Style Sheets" },
            { term: "JavaScript", definition: "Programming language of the web" }
        ];

        let currentIndex = 0;
        let showingTerm = true;

        // Display the current card
        function displayCard() {
            const cardContent = document.getElementById('cardContent');
            const cardLabel = document.getElementById('cardLabel');
            const cardCounter = document.getElementById('cardCounter');
            
            if (showingTerm) {
                cardContent.textContent = flashcards[currentIndex].term;
                cardLabel.textContent = 'TERM';
            } else {
                cardContent.textContent = flashcards[currentIndex].definition;
                cardLabel.textContent = 'DEFINITION';
            }
            
            cardCounter.textContent = `Card ${currentIndex + 1} of ${flashcards.length}`;
        }

        // Flip the card when clicked
        document.getElementById('flashcard').addEventListener('click', function() {
            showingTerm = !showingTerm;
            displayCard();
        });

        // Previous button
        document.getElementById('prevBtn').addEventListener('click', function() {
            currentIndex--;
            if (currentIndex < 0) {
                currentIndex = flashcards.length - 1;
            }
            showingTerm = true;
            displayCard();
        });

        // Next button
        document.getElementById('nextBtn').addEventListener('click', function() {
            currentIndex++;
            if (currentIndex >= flashcards.length) {
                currentIndex = 0;
            }
            showingTerm = true;
            displayCard();
        });

        // Add new flashcard
        document.getElementById('addBtn').addEventListener('click', function() {
            const termInput = document.getElementById('termInput');
            const definitionInput = document.getElementById('definitionInput');
            
            const term = termInput.value.trim();
            const definition = definitionInput.value.trim();
            
            if (term && definition) {
                flashcards.push({ term: term, definition: definition });
                
                // Clear inputs
                termInput.value = '';
                definitionInput.value = '';
                
                // Update display
                displayCard();
                
                // Optional: Show success message
                alert('Flashcard added successfully!');
            } else {
                alert('Please enter both a term and definition.');
            }
        });