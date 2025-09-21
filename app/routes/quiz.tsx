import { useState, useEffect } from 'react';
import QuestionCard from '../components/perguntas/perguntas';
import type { Perguntas } from '../types/questions.types';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

const perguntas: Perguntas[] = [
    {
        type: 'unica',
        question: 'Qual o ano de criação do Spotify?',
        options: ['2005', '2006', '2008', '2010', '2011'],
        correct: '2006',
    },
    {
        type: 'multipla',
        question: 'linguagens de programação utilizadas pelo aplicativo?',
        options: ['Java', 'Python', 'C', 'C++', 'PHP'],
        correct: ['Python', 'Java', 'C', 'C++'],
    },
    {
        type: 'combobox',
        question: 'Qual tipo de serviço é o Spotify?',
        options: ['Premium', 'Freemium', 'Free'],
        correct: 'Freemium',
    },
];

const MAX_ATTEMPTS = 3;

const style = {
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 420,
    bgcolor: 'background.paper',
    borderRadius: '8px',
    boxShadow: 24,
    p: 4,
};

export default function Quiz() {
    const [index, setIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [finished, setFinished] = useState(false);
    const [open, setOpen] = useState(false);
    const [attempts, setAttempts] = useState(0);
    const [feedback, setFeedback] = useState<string | null>(null);

    useEffect(() => {
        const handleBeforeUnload = (e: BeforeUnloadEvent) => {
            if (open && !finished) {
                e.preventDefault();
                return '';
            }
        };

        window.addEventListener('beforeunload', handleBeforeUnload);
        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, [open, finished]);

    function handleAnswer(correct: boolean, userAnswer: any) {
        if (correct) {
            setScore(score + 1);
            nextQuestion();
        } else {
            if (attempts + 1 >= MAX_ATTEMPTS) {
                nextQuestion();
            } else {
                setAttempts(attempts + 1);
                setFeedback(generateFeedback(perguntas[index], userAnswer));
            }
        }
    }

    function generateFeedback(question: Perguntas, userAnswer: any): string {
        if (question.type === 'unica' || question.type === 'combobox') {
            return `Resposta incorreta. A resposta correta é: ${question.correct}`;
        } else if (question.type === 'multipla') {
            const correctAnswers = question.correct as string[];
            const wrongAnswers = (Array.isArray(userAnswer) ? userAnswer : []).filter(
                (ans: string) => !correctAnswers.includes(ans)
            );
            const missingAnswers = correctAnswers.filter(
                (ans) => !userAnswer.includes(ans)
            );

            let message = 'Resposta incorreta.\n';
            if (wrongAnswers.length > 0) {
                message += `Você selecionou incorretamente: ${wrongAnswers.join(', ')}.\n`;
            }
            if (missingAnswers.length > 0) {
                message += `Faltou selecionar: ${missingAnswers.join(', ')}.`;
            }
            return message;
        }
        return 'Resposta incorreta.';
    }

    function nextQuestion() {
        setFeedback(null);
        setAttempts(0);

        if (index + 1 === perguntas.length) {
            setFinished(true);
        } else {
            setIndex(index + 1);
        }
    }

    function handleOpen() {
        setIndex(0);
        setScore(0);
        setFinished(false);
        setAttempts(0);
        setFeedback(null);
        setOpen(true);
    }

    function handleClose() {
        setOpen(false);
    }

    function handleCloseWithConfirmation() {
        const confirmExit = window.confirm('Tem certeza que deseja sair? Seu progresso será perdido.');
        if (confirmExit) {
            handleClose();
        }
    }

    function handleRestart() {
        setIndex(0);
        setScore(0);
        setFinished(false);
        setAttempts(0);
        setFeedback(null);
    }

    return (
        <section className="container">
            <h2 className="fs-2 text-center">Pronto para testar o que aprendeu?</h2>
            <p className="text-center">
                Clique no botão abaixo e responda 3 perguntas sobre tudo o que já foi apresentado nesse projeto
            </p>

            <button type="button" className="btn btn-primary" onClick={handleOpen}>
                Jogar
            </button>

            {/* QUIZ MODAL */}
            <Modal
                open={open && !finished}
                onClose={handleCloseWithConfirmation}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
                disableEscapeKeyDown
            >
                <Box sx={style}>
                    <h2 id="modal-title">Quiz</h2>
                    <p>
                        Pergunta {index + 1} de {perguntas.length} | Tentativa {attempts + 1} de {MAX_ATTEMPTS}
                    </p>

                    <QuestionCard
                        question={perguntas[index]}
                        onAnswer={(correct, userAnswer) => handleAnswer(correct, userAnswer)}
                    />

                    {feedback && (
                        <div style={{ marginTop: '1rem', color: 'red', whiteSpace: 'pre-line' }}>
                            {feedback}
                        </div>
                    )}

                    <div style={{ marginTop: '1rem', textAlign: 'right' }}>
                        <button className="btn btn-danger" onClick={handleCloseWithConfirmation}>
                            Fechar
                        </button>
                    </div>
                </Box>
            </Modal>

            {/* PARABÉNS MODAL */}
            <Modal
                open={open && finished}
                onClose={() => {
                    setOpen(false);
                    handleRestart();
                }}
                aria-labelledby="modal-congrats-title"
                aria-describedby="modal-congrats-description"
                disableEscapeKeyDown
            >
                <Box sx={style} textAlign="center">
                    <h2 id="modal-congrats-title">Parabéns!</h2>
                    <p id="modal-congrats-description">Você terminou o quiz.</p>
                    <p>
                        Sua pontuação: {score} de {perguntas.length}
                    </p>
                    <button
                        className="btn btn__primary m-3"
                        onClick={() => {
                            handleRestart();
                        }}
                    >
                        Jogar novamente
                    </button>
                    <button
                        className="btn btn-outline-success m-3"
                        onClick={handleClose}
                    >
                        Finalizar
                    </button>
                </Box>
            </Modal>
        </section>
    );
}
