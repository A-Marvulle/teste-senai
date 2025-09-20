// types.ts
export type Unica = { type: 'unica'; question: string; options: string[]; correct: string };
export type Multipla = { type: 'multipla'; question: string; options: string[]; correct: string[] };
export type Combobox = { type: 'combobox'; question: string; options: string[]; correct: string };
export type Perguntas = Unica | Multipla | Combobox;
