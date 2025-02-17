const questions = [
    {
      question: "1. Which of the following BEST describes a DDoS attack? 24 remaining",
      answers: [
        "Unauthorized access to a system.",
        "An attempt to disrupt service by flooding a target with traffic.",
        "The theft of sensitive data.",
        "The execution of malicious code."
      ],
      correctAnswer: 1 //1
    },
    {
      question: "2. *What is the primary purpose of a firewall? 23 remaining",
      answers: [
        "To encrypt network traffic.",
        "To prevent unauthorized access to a network.",
        "To detect and remove malware.",
        "To authenticate users."
      ],
      correctAnswer: 1 //2
    },
    {
      question: "3. Which network device operates at Layer 3 (Network Layer) of the OSI model? 22 remaining",
      answers: [
        "Switch",
        "Hub",
        "Router",
        "Firewall"
      ],
      correctAnswer: 2
    },
    {
      question: "4. What is a common method for preventing unauthorized wireless access? 21 remaining",
      answers: [
        "Using weak passwords",
        "Disabling WPA2 encryption",
        "Implementing MAC address filtering",
        "Broadcasting the SSID openly"
      ],
      correctAnswer: 2
    },
    {
      question: "5. Which of the following is an example of a network vulnerability? 20 remaining",
      answers: [
        "A strong password policy",
        "Unpatched software",
        "Regular security audits",
        "Employee security awareness training"
      ],
      correctAnswer: 1
    },
    {
      question: "6. What is the purpose of encryption? 19 remaining",
      answers: [
        "To compress data.",
        "To convert data into an unreadable format.",
        "To verify the integrity of data.",
        "To authenticate users."
      ],
      correctAnswer: 1
    },
    {
      question: "7. Which of the following is a symmetric encryption algorithm? 18 remaining",
      answers: [
        "AES",
        "RSA",
        "Diffie-Hellman",
        "ECC"
      ],
      correctAnswer: 0
    },
    {
      question: "8. What is the primary function of access control? 17 remaining",
      answers: [
        "To prevent data breaches.",
        "To detect and respond to security incidents.",
        "To restrict access to resources based on user privileges.",
        "To encrypt sensitive data."
      ],
      correctAnswer: 2
    },
    {
      question: "9. What is multi-factor authentication (MFA)? 16 remaining",
      answers: [
        "Using a single authentication factor.",
        "Requiring multiple authentication factors for access.",
        "Storing passwords in plain text.",
        "Disabling account lockout."
      ],
      correctAnswer: 1
    },
    {
      question: "10. What is a digital certificate used for? 15 remaining",
      answers: [
        "To encrypt data.",
        "To verify the identity of a website or individual.",
        "To prevent malware infections.",
        "To manage user accounts."
      ],
      correctAnswer: 1
    },
    {
      question: "11. What is a security information and event management (SIEM) system used for? 14 remaining",
      answers: [
        "To prevent network intrusions",
        "To collect and analyze security logs from various sources. ",
        "To encrypt sensitive data.",
        "To manage user access."
      ],
      correctAnswer: 1
    },
    {
      question: "12. Which phase of incident response involves identifying and containing a security incident? 13 remaining",
      answers: [
        "Preparation",
        "Containment, Eradication, and Recovery",
        "Detection and Analysis",
        "Post-Incident Activity."
      ],
      correctAnswer: 1
    },
    {
      question: "13. What is the purpose of vulnerability scanning? 12 remaining",
      answers: [
        "To identify security weaknesses in systems and applications.",
        "To exploit vulnerabilities.",
        "To prevent security incidents.",
        "To encrypt data."
      ],
      correctAnswer: 0
    },
    {
      question: "14. What is a common method for detecting malware? 11 remaining",
      answers: [
        "Firewall",
        "Intrusion Detection System (IDS)",
        "Antivirus software",
        "Access Control List (ACL)"
      ],
      correctAnswer: 2
    },
    {
      question: "15. What is a security audit? 10 remaining",
      answers: [
        "A review of security controls and practices.",
        "A type of malware.",
        "A network attack.",
        "A method of encryption."
      ],
      correctAnswer: 0 //1
    },
    {
      question: "16. What is a key concern in cloud security? 9 remaining",
      answers: [
        "Data breaches",
        "Unlimited storage",
        "Easy scalability",
        "Cost-effectiveness"
      ],
      correctAnswer: 0 //2
    },
    {
      question: "17. What is the principle of least privilege? 8 remaining",
      answers: [
        "Granting users the minimum necessary access rights.",
        "Granting users all access rights.",
        "Denying users all access rights.",
        "Regularly changing user passwords."
      ],
      correctAnswer: 0 //3
    },
    {
      question: "18. What is input validation used for in application security? 7 remaining",
      answers: [
        "To prevent SQL injection and cross-site scripting attacks.",
        "To encrypt user passwords.",
        "To authenticate users.",
        "To manage user sessions."
      ],
      correctAnswer: 0
    },
    {
      question: "19. What is a common web application vulnerability? 6 remaining",
      answers: [
        "Strong password policy",
        "Regular security updates",
        "SQL injection",
        "Multi-factor authentication"
      ],
      correctAnswer: 1
    },
    {
      question: "20. What does SaaS stand for in cloud computing? 5 remaining",
      answers: [
        "Software as a Service",
        "Security as a Service",
        "Storage as a Service",
        "System as a Service."
      ],
      correctAnswer: 0
    },
    {
      question: "21. What is the purpose of a security policy? 4 remaining",
      answers: [
        "To prevent all security incidents.",
        "To define rules and procedures for protecting information assets.",
        "To encrypt data.",
        "To manage user accounts."
      ],
      correctAnswer: 1
    },
    {
      question: "22. What is compliance in the context of security? 3 remaining",
      answers: [
        "Adhering to relevant laws, regulations, and standards.",
        "Hacking into systems.",
        "Developing security tools.",
        "Conducting security audits."
      ],
      correctAnswer: 0
    },
    {
      question: "23. Which of the following is an example of an emerging threat? 2 remaining",
      answers: [
        "Phishing",
        "Ransomware",
        "Denial-of-service attack",
        "Man-in-the-middle attack"
      ],
      correctAnswer: 2
    },
    {
      question: "24. What is social engineering? 1 remaining",
      answers: [
        "Manipulating individuals into divulging confidential information.",
        "A type of firewall.",
        "A cryptographic algorithm.",
        "A network protocol"
      ],
      correctAnswer: 0
    },
    {
      question: "25. What is the purpose of a Business Continuity Plan (BCP)? 0 remaining",
      answers: [
        "To ensure business operations can continue in the event of a disruption.",
        "To prevent all security incidents.",
        "To encrypt sensitive data.",
        "To manage user accounts."
      ],
      correctAnswer: 3
    },
      // Add more questions here following the same format   
    // ... your questions here ...
  ];
  
  let currentQuestion = 0;
  let score = 0;
  let temporaryUsername = "Trainee"; // Define a temporary username
  
  function displayQuestion() {
    const questionElement = document.getElementById("question");
    const answerListElement = document.getElementById("answer-list");
  
    questionElement.textContent = questions[currentQuestion].question;
    answerListElement.innerHTML = ""; // Clear previous answers
  
    questions[currentQuestion].answers.forEach((answer, index) => {
      const answerItem = document.createElement("li");
      const radioInput = document.createElement("input");
      radioInput.type = "radio";
      radioInput.name = "answer";
      radioInput.value = index;
  
      radioInput.addEventListener("change", function() {
        document.getElementById("submit-btn").disabled = false;
      });
  
      const answerText = document.createTextNode(answer);
      answerItem.appendChild(radioInput);
      answerItem.appendChild(answerText);
      answerListElement.appendChild(answerItem);
    });
  }
  
  function submitAnswer() {
    const selectedRadio = document.querySelector('input[name="answer"]:checked');
  
    if (selectedRadio) {
      const userAnswer = parseInt(selectedRadio.value);
      const correctAnswer = questions[currentQuestion].correctAnswer;
  
      if (userAnswer === correctAnswer) {
        score++;
      }
  
      currentQuestion++;
  
      if (currentQuestion < questions.length) {
        displayQuestion();
      } else {
        alert("You have finished the assessment! Your score is " + score + " out of " + questions.length);
        // Optionally, display a results page here
        score = 0; // Reset score for future assessments (optional)
      }
  
      document.getElementById("submit-btn").disabled = true;
    }
  }
  
  // Display username during assessment (optional)
  function displayUsername() {
    const usernameElement = document.getElementById("username-display");
    if (usernameElement) {
      usernameElement.textContent = "Welcome to Week (IV) Test, " + temporaryUsername;
    }
  }
  
  displayQuestion();
  displayUsername(); // Display username initially
  
  // Submit button functionality (if included)
  const submitButton = document.getElementById("submit-btn");
  submitButton.addEventListener("click", submitAnswer);
  
