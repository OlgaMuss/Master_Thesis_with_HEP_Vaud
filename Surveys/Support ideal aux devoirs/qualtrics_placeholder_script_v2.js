<script>
Qualtrics.SurveyEngine.addOnReady(function() {
  var placeholders = {
    "Q1_name": "Votre nom ou pseudonyme",
    "Q1_experience": "Ex: 5 ans",
    "Q1_age_groups": "Ex: 5-6H (10-12 ans)",
    "Q2_1_ideal_description": "Décrivez librement les caractéristiques, comportements, qualités que devrait avoir ce support...",
    "Q2_2_essential_elements": "Listez 3-5 éléments indispensables...",
    "Q2_3_avoid_elements": "Listez les pièges, erreurs ou comportements problématiques...",
    "Q2_4_age_differences": "Décrivez les différences développementales pertinentes...",
    "Q3_1_cognitive_other": "Autres aspects cognitifs à surveiller...",
    "Q3_3_affective_other": "Autres aspects affectifs à surveiller...",
    "Q3_5_interactional_other": "Autres aspects interactionnels à surveiller...",
    "Q3_7_relational_other": "Autres aspects relationnels à surveiller...",
    "Q3_9_intentional_other": "Autres aspects intentionnels à surveiller...",
    "Q3_11_motivational_other": "Autres aspects motivationnels à surveiller...",
    "Q3_13_expected_learning": "Décrivez les signes, comportements, ou indicateurs que vous observez...",
    "Q3_14_learning_effort": "Quels indices montrent que l'effort est faible malgré un bon apprentissage ?",
    "Q3_15_optimal_moments": "Décrivez ces moments privilégiés d'apprentissage et comment vous les identifiez...",
    "Q4_1_pilotage_description": "Ex: décomposer en sous-étapes, fixer des objectifs intermédiaires, gérer le temps...",
    "Q4_3_pilotage_avoid": "Ex: trop structurer, ne pas structurer assez, imposer un rythme inadapté...",
    "Q4_4_tissage_description": "Ex: relier aux connaissances antérieures, montrer l'utilité, créer de la cohérence...",
    "Q4_6_etayage_description": "Ex: indices, questions, exemples, reformulations, encouragements...",
    "Q4_8_etayage_progression": "Ex: diminuer progressivement, s'adapter dynamiquement, rester constant...",
    "Q4_9_etayage_avoid": "Ex: donner la réponse directement, trop aider, ne pas assez aider...",
    "Q4_10_atmosphere_other": "Autres éléments pour créer une bonne atmosphère...",
    "Q4_12_cognitive_engagement_other": "Autres stratégies pour stimuler l'engagement cognitif...",
    "Q4_14_gestural_balance": "Classez-les ou décrivez l'équilibre idéal entre ces gestes...",
    "Q4_15_additional_reflections": "Partagez toute réflexion supplémentaire...",
    "Q5_2_ai_concerns": "Partagez vos inquiétudes, questions, ou réflexions...",
    "Q5_3_contact": "Votre email (optionnel)"
  };
  
  // Méthode 1: Sélection par ID de question
  for (var questionId in placeholders) {
    if (placeholders.hasOwnProperty(questionId)) {
      // Essayer plusieurs sélecteurs
      var inputField = jQuery("#" + questionId + " .InputText");
      
      // Si le premier sélecteur ne fonctionne pas, essayer d'autres
      if (inputField.length === 0) {
        inputField = jQuery("#" + questionId + " input[type='text']");
      }
      if (inputField.length === 0) {
        inputField = jQuery("#" + questionId + " textarea");
      }
      if (inputField.length === 0) {
        inputField = jQuery("input[id*='" + questionId + "']");
      }
      if (inputField.length === 0) {
        inputField = jQuery("textarea[id*='" + questionId + "']");
      }
      
      // Appliquer le placeholder si trouvé
      if (inputField.length > 0) {
        inputField.attr("placeholder", placeholders[questionId]);
      }
    }
  }
});

// Méthode alternative: Sur chaque page chargée
Qualtrics.SurveyEngine.addOnload(function() {
  var placeholders = {
    "Q1_name": "Votre nom ou pseudonyme",
    "Q1_experience": "Ex: 5 ans",
    "Q1_age_groups": "Ex: 5-6H (10-12 ans)",
    "Q2_1_ideal_description": "Décrivez librement les caractéristiques, comportements, qualités que devrait avoir ce support...",
    "Q2_2_essential_elements": "Listez 3-5 éléments indispensables...",
    "Q2_3_avoid_elements": "Listez les pièges, erreurs ou comportements problématiques...",
    "Q2_4_age_differences": "Décrivez les différences développementales pertinentes...",
    "Q3_1_cognitive_other": "Autres aspects cognitifs à surveiller...",
    "Q3_3_affective_other": "Autres aspects affectifs à surveiller...",
    "Q3_5_interactional_other": "Autres aspects interactionnels à surveiller...",
    "Q3_7_relational_other": "Autres aspects relationnels à surveiller...",
    "Q3_9_intentional_other": "Autres aspects intentionnels à surveiller...",
    "Q3_11_motivational_other": "Autres aspects motivationnels à surveiller...",
    "Q3_13_expected_learning": "Décrivez les signes, comportements, ou indicateurs que vous observez...",
    "Q3_14_learning_effort": "Quels indices montrent que l'effort est faible malgré un bon apprentissage ?",
    "Q3_15_optimal_moments": "Décrivez ces moments privilégiés d'apprentissage et comment vous les identifiez...",
    "Q4_1_pilotage_description": "Ex: décomposer en sous-étapes, fixer des objectifs intermédiaires, gérer le temps...",
    "Q4_3_pilotage_avoid": "Ex: trop structurer, ne pas structurer assez, imposer un rythme inadapté...",
    "Q4_4_tissage_description": "Ex: relier aux connaissances antérieures, montrer l'utilité, créer de la cohérence...",
    "Q4_6_etayage_description": "Ex: indices, questions, exemples, reformulations, encouragements...",
    "Q4_8_etayage_progression": "Ex: diminuer progressivement, s'adapter dynamiquement, rester constant...",
    "Q4_9_etayage_avoid": "Ex: donner la réponse directement, trop aider, ne pas assez aider...",
    "Q4_10_atmosphere_other": "Autres éléments pour créer une bonne atmosphère...",
    "Q4_12_cognitive_engagement_other": "Autres stratégies pour stimuler l'engagement cognitif...",
    "Q4_14_gestural_balance": "Classez-les ou décrivez l'équilibre idéal entre ces gestes...",
    "Q4_15_additional_reflections": "Partagez toute réflexion supplémentaire...",
    "Q5_2_ai_concerns": "Partagez vos inquiétudes, questions, ou réflexions...",
    "Q5_3_contact": "Votre email (optionnel)"
  };
  
  // Attendre que la page soit complètement chargée
  setTimeout(function() {
    jQuery("input[type='text'], textarea").each(function() {
      var $input = jQuery(this);
      var inputId = $input.attr("id") || "";
      
      // Chercher si l'ID correspond à une de nos questions
      for (var qid in placeholders) {
        if (inputId.indexOf(qid) !== -1) {
          $input.attr("placeholder", placeholders[qid]);
          break;
        }
      }
    });
  }, 500);
});
</script>
