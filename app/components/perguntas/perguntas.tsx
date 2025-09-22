import React, { useState } from 'react';
import type { Perguntas } from '../../types/questions.types';
import "./perguntas.css";
type Props = {
  question: Perguntas;
  onAnswer: (correct: boolean, userAnswer: string | string[] | null) => void; 
  disabled: boolean;
};

export default function QuestionCard({ question, onAnswer, disabled }: Props) {
  const [selected, setSelected] = useState<string | string[] | null>(null);

  function handleChange(value: string) {
    if (!disabled) setSelected(value);
  }

  function handleMultipleChange(option: string) {
    if (disabled) return;
    if (!Array.isArray(selected)) {
      setSelected([option]);
      return;
    }
    if (selected.includes(option)) {
      setSelected(selected.filter(o => o !== option));
    } else {
      setSelected([...selected, option]);
    }
  }

  function checkAnswer() {
    if (question.type === 'unica' || question.type === 'combobox') {
      const correct = selected === question.correct;
      onAnswer(correct, selected);
    } else if (question.type === 'multipla') {
      if (!Array.isArray(selected)) {
        onAnswer(false, selected);
        return;
      }
      const correctSet = new Set(question.correct);
      const selectedSet = new Set(selected);
      const isCorrect =
        question.correct.length === selected.length &&
        [...correctSet].every(c => selectedSet.has(c));
      onAnswer(isCorrect, selected);
    }
  }

  return (
    <div>
      <h3>{question.question}</h3>

      {/* UNICA */}
      {question.type === 'unica' &&
        question.options.map(opt => (
          <label key={opt} style={{ display: 'block', margin: '4px 0' }}>
            <input
              type="radio"
              name="unica"
              value={opt}
              checked={selected === opt}
              disabled={disabled}
              onChange={() => handleChange(opt)}
            />
            {opt}
          </label>
        ))}

      {/* MULTIPLA */}
      {question.type === 'multipla' &&
        question.options.map(opt => (
          <label key={opt} style={{ display: 'block', margin: '4px 0' }}>
            <input
              type="checkbox"
              name="multipla"
              value={opt}
              checked={Array.isArray(selected) && selected.includes(opt)}
              disabled={disabled}
              onChange={() => handleMultipleChange(opt)}
            />
            {opt}
          </label>
        ))}

      {/* COMBOBOX */}
      {question.type === 'combobox' && (
        <select
          value={typeof selected === 'string' ? selected : ''}
          onChange={e => handleChange(e.target.value)}
          disabled={disabled}
        >
          <option value="">Selecione</option>
          {question.options.map(opt => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      )}

      {/* BOTÃO DE RESPOSTA */}
      <button
        onClick={checkAnswer}
        disabled={
          disabled || !selected || (Array.isArray(selected) && selected.length === 0)
        }
        className="my-3 btn btn__primary btn__primary-modal d-block"
      >
        Responder
      </button>
    </div>
  );
}

