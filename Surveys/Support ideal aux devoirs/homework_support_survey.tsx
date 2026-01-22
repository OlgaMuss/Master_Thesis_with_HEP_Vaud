import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Save, Download } from 'lucide-react';

const HomeworkSupportSurvey = () => {
  const [expandedSections, setExpandedSections] = useState({
    intro: true,
    part1: false,
    part2: false,
    part3: false
  });
  
  const [responses, setResponses] = useState({});

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleInputChange = (questionId, value) => {
    setResponses(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const handleDownload = () => {
    const surveyData = {
      timestamp: new Date().toISOString(),
      responses: responses
    };
    const blob = new Blob([JSON.stringify(surveyData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `homework_support_survey_${Date.now()}.json`;
    a.click();
  };

  const Section = ({ id, title, children, description }) => (
    <div className="border border-gray-300 rounded-lg mb-4 bg-white shadow-sm">
      <button
        onClick={() => toggleSection(id)}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
      >
        <div className="text-left">
          <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
          {description && <p className="text-sm text-gray-600 mt-1">{description}</p>}
        </div>
        {expandedSections[id] ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
      </button>
      {expandedSections[id] && (
        <div className="px-6 py-4 border-t border-gray-200">
          {children}
        </div>
      )}
    </div>
  );

  const TextQuestion = ({ id, question, placeholder, rows = 4 }) => (
    <div className="mb-6">
      <label className="block text-gray-700 font-medium mb-2">
        {question}
      </label>
      <textarea
        value={responses[id] || ''}
        onChange={(e) => handleInputChange(id, e.target.value)}
        placeholder={placeholder}
        rows={rows}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-y"
      />
    </div>
  );

  const LikertScale = ({ id, question, leftLabel, rightLabel }) => (
    <div className="mb-6">
      <label className="block text-gray-700 font-medium mb-3">
        {question}
      </label>
      <div className="flex flex-col space-y-2">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span className="w-1/3 text-left">{leftLabel}</span>
          <span className="w-1/3 text-center">Modéré</span>
          <span className="w-1/3 text-right">{rightLabel}</span>
        </div>
        <div className="flex justify-between items-center">
          {[1, 2, 3, 4, 5].map((value) => (
            <label key={value} className="flex flex-col items-center cursor-pointer">
              <input
                type="radio"
                name={id}
                value={value}
                checked={responses[id] === value}
                onChange={() => handleInputChange(id, value)}
                className="w-5 h-5 text-blue-600 focus:ring-2 focus:ring-blue-500"
              />
              <span className="text-sm mt-1">{value}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  const MultipleChoice = ({ id, question, options }) => (
    <div className="mb-6">
      <label className="block text-gray-700 font-medium mb-3">
        {question}
      </label>
      <div className="space-y-2">
        {options.map((option, index) => (
          <label key={index} className="flex items-start space-x-3 cursor-pointer p-2 hover:bg-gray-50 rounded">
            <input
              type="checkbox"
              checked={(responses[id] || []).includes(option)}
              onChange={(e) => {
                const current = responses[id] || [];
                const updated = e.target.checked
                  ? [...current, option]
                  : current.filter(item => item !== option);
                handleInputChange(id, updated);
              }}
              className="w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500 mt-0.5"
            />
            <span className="text-gray-700">{option}</span>
          </label>
        ))}
      </div>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen">
      <div className="bg-white rounded-lg shadow-md p-8 mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Questionnaire : Support idéal aux devoirs
        </h1>
        <p className="text-gray-600 mb-4">
          Identifying Relevant Dimensions of Learning Interactions with AI for 10-13 Year-Olds
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
          <p className="text-sm text-gray-700">
            <strong>Contexte :</strong> Ce questionnaire vise à identifier les dimensions importantes d'une interaction d'apprentissage dans le contexte des devoirs de pratique et d'application pour les élèves de 10-13 ans.
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={handleDownload}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Download size={18} />
            Télécharger les réponses
          </button>
        </div>
      </div>

      <Section 
        id="intro" 
        title="Informations préliminaires"
        description="Quelques questions sur votre profil"
      >
        <TextQuestion
          id="name"
          question="Nom (optionnel)"
          placeholder="Votre nom ou pseudonyme"
          rows={1}
        />
        <TextQuestion
          id="experience"
          question="Années d'expérience dans l'enseignement"
          placeholder="Ex: 5 ans"
          rows={1}
        />
        <TextQuestion
          id="age_groups"
          question="Âges/niveaux avec lesquels vous travaillez actuellement"
          placeholder="Ex: 5-6H (10-12 ans)"
          rows={1}
        />
      </Section>

      <Section 
        id="part1" 
        title="Partie 1 : Réflexion individuelle"
        description="Décrivez votre vision d'un support idéal aux devoirs"
      >
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-6">
          <p className="text-sm text-gray-700">
            <strong>Instructions :</strong> Prenez quelques minutes pour réfléchir individuellement. Imaginez un support idéal pour aider un élève de 10-13 ans avec ses devoirs de pratique et d'application.
          </p>
        </div>

        <TextQuestion
          id="ideal_support_description"
          question="1.1. Comment décririez-vous un support idéal aux devoirs pour un élève de cet âge ?"
          placeholder="Décrivez librement les caractéristiques, comportements, qualités que devrait avoir ce support..."
          rows={6}
        />

        <TextQuestion
          id="essential_elements"
          question="1.2. Quels sont les éléments ESSENTIELS que ce support devrait absolument fournir ?"
          placeholder="Listez 3-5 éléments indispensables..."
          rows={4}
        />

        <TextQuestion
          id="avoid_elements"
          question="1.3. Quels comportements ou approches ce support devrait-il ABSOLUMENT ÉVITER ?"
          placeholder="Listez les pièges, erreurs ou comportements problématiques..."
          rows={4}
        />

        <TextQuestion
          id="age_differences"
          question="1.4. Y a-t-il des différences importantes entre un élève de 10-11 ans et un élève de 12-13 ans en termes de support aux devoirs ?"
          placeholder="Décrivez les différences développementales pertinentes..."
          rows={4}
        />
      </Section>

      <Section 
        id="part2" 
        title="Partie 2A : Dimensions de monitoring"
        description="Comment un support devrait-il 'observer' l'interaction ?"
      >
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
          <p className="text-sm text-gray-700">
            <strong>Contexte :</strong> Pour fournir un bon support, il faut d'abord comprendre ce qui se passe dans l'interaction. Voici différentes dimensions qu'on pourrait observer.
          </p>
        </div>

        <h3 className="text-lg font-semibold text-gray-800 mb-4 mt-6">Dimension COGNITIVE</h3>
        <p className="text-sm text-gray-600 mb-4 italic">
          Comprendre où en est l'élève dans sa compréhension et son raisonnement
        </p>

        <MultipleChoice
          id="cognitive_monitor_elements"
          question="2A.1. Quels aspects cognitifs sont ESSENTIELS à surveiller pendant les devoirs ?"
          options={[
            "Niveau de compréhension (comprend-il le concept ?)",
            "Processus de raisonnement (comment réfléchit-il ?)",
            "Mémoire et rappel (se souvient-il des concepts ?)",
            "Flexibilité cognitive (peut-il changer de perspective ?)",
            "Vitesse de traitement (va-t-il trop vite/lentement ?)",
            "Détection d'erreurs (repère-t-il ses erreurs ?)",
            "Autre (préciser ci-dessous)"
          ]}
        />

        <TextQuestion
          id="cognitive_monitor_other"
          question="Si 'Autre', précisez :"
          placeholder="Autres aspects cognitifs à surveiller..."
          rows={2}
        />

        <LikertScale
          id="cognitive_importance"
          question="2A.2. À quel point est-il important de monitorer la dimension cognitive ?"
          leftLabel="Peu important"
          rightLabel="Extrêmement important"
        />

        <h3 className="text-lg font-semibold text-gray-800 mb-4 mt-8">Dimension AFFECTIVE</h3>
        <p className="text-sm text-gray-600 mb-4 italic">
          Comprendre l'état émotionnel et motivationnel de l'élève
        </p>

        <MultipleChoice
          id="affective_monitor_elements"
          question="2A.3. Quels aspects affectifs sont ESSENTIELS à surveiller ?"
          options={[
            "Niveau d'engagement (est-il impliqué ?)",
            "Confiance en soi (se sent-il capable ?)",
            "État émotionnel (frustré, anxieux, content ?)",
            "Motivation (intrinsèque, extrinsèque, absente ?)",
            "Persévérance (abandonne-t-il facilement ?)",
            "Autre (préciser ci-dessous)"
          ]}
        />

        <LikertScale
          id="affective_importance"
          question="2A.4. À quel point est-il important de monitorer la dimension affective ?"
          leftLabel="Peu important"
          rightLabel="Extrêmement important"
        />

        <h3 className="text-lg font-semibold text-gray-800 mb-4 mt-8">Dimension INTERACTIONNELLE</h3>
        <p className="text-sm text-gray-600 mb-4 italic">
          Comprendre la qualité et le déroulement de l'interaction
        </p>

        <MultipleChoice
          id="interactional_monitor_elements"
          question="2A.5. Quels aspects interactionnels sont ESSENTIELS à surveiller ?"
          options={[
            "Fluidité (l'interaction est-elle fluide ou laborieuse ?)",
            "Clarté de communication (se comprend-on bien ?)",
            "Rythme (trop rapide, trop lent ?)",
            "Équilibre des tours de parole (qui domine ?)",
            "Signes de manipulation (qui essaie de contourner quoi ?)",
            "Autre (préciser ci-dessous)"
          ]}
        />

        <LikertScale
          id="interactional_importance"
          question="2A.6. À quel point est-il important de monitorer la dimension interactionnelle ?"
          leftLabel="Peu important"
          rightLabel="Extrêmement important"
        />

        <h3 className="text-lg font-semibold text-gray-800 mb-4 mt-8">Dimension RELATIONNELLE</h3>
        <p className="text-sm text-gray-600 mb-4 italic">
          Comprendre la relation qui se développe entre l'élève et le support
        </p>

        <MultipleChoice
          id="relational_monitor_elements"
          question="2A.7. Quels aspects relationnels sont ESSENTIELS à surveiller ?"
          options={[
            "Niveau de confiance (l'élève fait-il confiance au support ?)",
            "Dépendance (devient-il trop dépendant ?)",
            "Autonomie (garde-t-il son autonomie ?)",
            "Attachement émotionnel (type de lien qui se crée)",
            "Dynamique de pouvoir (qui a le contrôle ?)",
            "Autre (préciser ci-dessous)"
          ]}
        />

        <LikertScale
          id="relational_importance"
          question="2A.8. À quel point est-il important de monitorer la dimension relationnelle ?"
          leftLabel="Peu important"
          rightLabel="Extrêmement important"
        />

        <h3 className="text-lg font-semibold text-gray-800 mb-4 mt-8">Dimension INTENTIONNELLE</h3>
        <p className="text-sm text-gray-600 mb-4 italic">
          Comprendre les intentions et objectifs de l'élève
        </p>

        <MultipleChoice
          id="intentional_monitor_elements"
          question="2A.9. Quels aspects intentionnels sont ESSENTIELS à surveiller ?"
          options={[
            "Objectif de l'élève (apprendre vs finir vite)",
            "Stratégie d'apprentissage (profonde vs superficielle)",
            "Comportement de demande d'aide (approprié, prématuré, absent)",
            "Honnêteté intellectuelle (cherche vraiment ou triche ?)",
            "Autre (préciser ci-dessous)"
          ]}
        />

        <LikertScale
          id="intentional_importance"
          question="2A.10. À quel point est-il important de monitorer la dimension intentionnelle ?"
          leftLabel="Peu important"
          rightLabel="Extrêmement important"
        />
      </Section>

      <Section 
        id="part3" 
        title="Partie 2B : Gestes pédagogiques"
        description="Que devrait faire un support pour bien accompagner l'apprentissage ?"
      >
        <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
          <p className="text-sm text-gray-700">
            <strong>Contexte :</strong> Nous explorons maintenant les différents types d'actions ou 'gestes' qu'un support pourrait faire pour aider l'élève. Ces gestes sont inspirés du modèle de Bucheton.
          </p>
        </div>

        <h3 className="text-lg font-semibold text-gray-800 mb-4 mt-6">PILOTAGE (Orchestration/Structure)</h3>
        <p className="text-sm text-gray-600 mb-4 italic">
          Structurer et guider la séquence d'apprentissage
        </p>

        <TextQuestion
          id="pilotage_description"
          question="2B.1. Comment un bon support devrait-il structurer et piloter la séquence de devoirs ?"
          placeholder="Ex: décomposer en sous-étapes, fixer des objectifs intermédiaires, gérer le temps..."
          rows={4}
        />

        <LikertScale
          id="pilotage_directivity"
          question="2B.2. Quel niveau de directivité dans le pilotage ?"
          leftLabel="Très peu directif (l'élève décide)"
          rightLabel="Très directif (structure imposée)"
        />

        <TextQuestion
          id="pilotage_avoid"
          question="2B.3. Qu'est-ce qu'un support devrait ÉVITER en termes de pilotage ?"
          placeholder="Ex: trop structurer, ne pas structurer assez, imposer un rythme inadapté..."
          rows={3}
        />

        <h3 className="text-lg font-semibold text-gray-800 mb-4 mt-8">TISSAGE (Création de sens/Liens)</h3>
        <p className="text-sm text-gray-600 mb-4 italic">
          Aider l'élève à faire des liens et voir le sens de ce qu'il apprend
        </p>

        <TextQuestion
          id="tissage_description"
          question="2B.4. Comment un bon support devrait-il aider l'élève à faire des liens et donner du sens ?"
          placeholder="Ex: relier aux connaissances antérieures, montrer l'utilité, créer de la cohérence..."
          rows={4}
        />

        <LikertScale
          id="tissage_frequency"
          question="2B.5. À quelle fréquence le support devrait-il faire des liens explicites ?"
          leftLabel="Rarement (l'élève fait ses propres liens)"
          rightLabel="Très fréquemment (liens constants)"
        />

        <h3 className="text-lg font-semibold text-gray-800 mb-4 mt-8">ÉTAYAGE (Scaffolding/Support)</h3>
        <p className="text-sm text-gray-600 mb-4 italic">
          Fournir l'aide juste nécessaire au bon moment
        </p>

        <TextQuestion
          id="etayage_description"
          question="2B.6. Quel type d'étayage un bon support devrait-il fournir ?"
          placeholder="Ex: indices, questions, exemples, reformulations, encouragements..."
          rows={4}
        />

        <LikertScale
          id="etayage_level"
          question="2B.7. Quel niveau d'aide initial ?"
          leftLabel="Minimale (laisser chercher seul)"
          rightLabel="Substantielle (aide importante dès le début)"
        />

        <TextQuestion
          id="etayage_progression"
          question="2B.8. Comment l'étayage devrait-il évoluer au cours de l'interaction ?"
          placeholder="Ex: diminuer progressivement, s'adapter dynamiquement, rester constant..."
          rows={3}
        />

        <TextQuestion
          id="etayage_avoid"
          question="2B.9. Qu'est-ce qu'un support devrait ÉVITER en termes d'étayage ?"
          placeholder="Ex: donner la réponse directement, trop aider, ne pas assez aider..."
          rows={3}
        />

        <h3 className="text-lg font-semibold text-gray-800 mb-4 mt-8">ATMOSPHÈRE (Climat d'apprentissage)</h3>
        <p className="text-sm text-gray-600 mb-4 italic">
          Créer un climat propice à l'apprentissage
        </p>

        <MultipleChoice
          id="atmosphere_elements"
          question="2B.10. Quels éléments sont ESSENTIELS pour créer une bonne atmosphère ?"
          options={[
            "Encouragements et renforcement positif",
            "Acceptation de l'erreur comme normale",
            "Ton patient et respectueux",
            "Célébration des progrès",
            "Absence de jugement",
            "Autre (préciser ci-dessous)"
          ]}
        />

        <LikertScale
          id="atmosphere_positivity"
          question="2B.11. Quel niveau de positivité dans le ton ?"
          leftLabel="Neutre, factuel"
          rightLabel="Très encourageant, chaleureux"
        />

        <h3 className="text-lg font-semibold text-gray-800 mb-4 mt-8">ENGAGEMENT COGNITIF (Stimulation de la pensée)</h3>
        <p className="text-sm text-gray-600 mb-4 italic">
          Stimuler la réflexion active et l'autonomie intellectuelle
        </p>

        <MultipleChoice
          id="cognitive_engagement_strategies"
          question="2B.12. Quelles stratégies sont ESSENTIELLES pour stimuler l'engagement cognitif ?"
          options={[
            "Questions socratiques (faire réfléchir)",
            "Prompts métacognitifs (réfléchir sur sa pensée)",
            "Encourager l'auto-explication",
            "Stimuler la curiosité et l'exploration",
            "Promouvoir l'auto-évaluation",
            "Autre (préciser ci-dessous)"
          ]}
        />

        <LikertScale
          id="cognitive_engagement_level"
          question="2B.13. Quel niveau d'exigence cognitive ?"
          leftLabel="Faible (tâches simples, guidées)"
          rightLabel="Élevé (défis intellectuels constants)"
        />

        <TextQuestion
          id="gestural_balance"
          question="2B.14. Parmi ces 5 gestes pédagogiques, lesquels sont les PLUS importants pour les devoirs de pratique et d'application ?"
          placeholder="Classez-les ou décrivez l'équilibre idéal entre ces gestes..."
          rows={4}
        />

        <TextQuestion
          id="additional_reflections"
          question="2B.15. Y a-t-il d'autres aspects importants d'un bon support aux devoirs que nous n'avons pas couverts ?"
          placeholder="Partagez toute réflexion supplémentaire..."
          rows={4}
        />
      </Section>

      <div className="bg-white rounded-lg shadow-md p-6 mt-6">
        <h3 className="text-lg font-semibold mb-4">Merci de votre participation !</h3>
        <p className="text-gray-700 mb-4">
          Vos réponses contribueront à définir les dimensions essentielles d'une interaction d'apprentissage avec l'IA pour les 10-13 ans.
        </p>
        <button
          onClick={handleDownload}
          className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Download size={20} />
          Télécharger mes réponses
        </button>
      </div>
    </div>
  );
};

export default HomeworkSupportSurvey;