import { useState, useEffect } from 'react';
import QuestionCard from '../components/perguntas/perguntas';
import type { Perguntas } from '../types/questions.types';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

const perguntas: Perguntas[] = [
    {
        type: 'unica',
        question: 'Qual o ano de criação do Spotify?',
        options: ['2005', '2006', '2008', '2010', '2011'],
        correct: '2006',
    },
    {
        type: 'multipla',
        question: 'Quais as lingaugens de programação utilizadas pelo aplicativo?',
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

export default function Quiz() {
    const [index, setIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [finished, setFinished] = useState(false);
    const [open, setOpen] = useState(false);
    const [attempts, setAttempts] = useState(0);
    const [feedback, setFeedback] = useState<string | null>(null);
    const [locked, setLocked] = useState(false);
    const [redirectTimer, setRedirectTimer] = useState(0);
    const [maxRedirectTime, setMaxRedirectTime] = useState(0);

    useEffect(() => {
        const handleBeforeUnload = (e: BeforeUnloadEvent) => {
            if (open && !finished) {
                e.preventDefault();
                return '';
            }
        };
        window.addEventListener('beforeunload', handleBeforeUnload);
        return () => {window.removeEventListener('beforeunload', handleBeforeUnload);};
    }, [open, finished]);

    function handleAnswer(correct: boolean, userAnswer: any) {
        const delay = correct ? 2000 : 2500;
        const seconds = delay / 1000;

        setLocked(true);
        setRedirectTimer(seconds);
        setMaxRedirectTime(seconds);

        if (correct) {
            setScore(score + 1);
            setFeedback('Resposta correta!');
        } else {
            const nextAttempt = attempts + 1;
            if (nextAttempt >= MAX_ATTEMPTS) {
                setFeedback(generateFeedback(perguntas[index], userAnswer));
            } else {
                setAttempts(nextAttempt);
                setFeedback('Resposta incorreta. Tente novamente.');
                setLocked(false);
                setRedirectTimer(0);
                setMaxRedirectTime(0);
                return;
            }
        }

        const interval = setInterval(() => {
            setRedirectTimer((prev) => {
                if (prev <= 1) {
                    clearInterval(interval);
                    nextQuestion();
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
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
        setLocked(false);
        if (index + 1 === perguntas.length) {setFinished(true);} 
        else {setIndex(index + 1);}
    }

    function handleOpen() {
        setIndex(0);
        setScore(0);
        setFinished(false);
        setAttempts(0);
        setFeedback(null);
        setLocked(false);
        setOpen(true);
    }

    function handleClose() {setOpen(false);}

    function handleCloseWithConfirmation() {
        const confirmExit = window.confirm('Tem certeza que deseja sair? Seu progresso será perdido.');
        if (confirmExit) { handleClose(); }
    }

    function handleRestart() {
        setIndex(0);
        setScore(0);
        setFinished(false);
        setAttempts(0);
        setFeedback(null);
        setLocked(false);
    }

    return (
        <section className="container my-3">
            <h2 className="fs-2 text-center">Pronto para testar o que aprendeu?</h2>
            <p className="text-center">
                Clique no botão abaixo e responda 3 perguntas sobre tudo o que já foi apresentado nesse projeto
            </p>
            <h3 className="fs-3">Informações</h3>
            <ul className='text-white'>
                <li>Você terá 3 tentativas por pergunta</li>
                <li>As respostas só podem ser enviadas uma vez</li>
                <li>O teste <strong>não pode</strong> ser interrompido, caso saia seu progresso será perdido</li>
                <li>As perguntas consistem em:
                    <ul>
                        <li>Múltipla Escolha - 1 correta</li>
                        <li>Múltipla Escolha - Mais de 1 correta</li>
                        <li>Combobox</li>
                    </ul>

                </li>
            </ul>
            <div className="text-center">

                <button type="button" className="btn btn__primary" onClick={handleOpen}>
                    Jogar
                </button>
            </div>

            {/* QUIZ MODAL */}
            <Modal
                open={open && !finished}
                onClose={handleCloseWithConfirmation}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
                disableEscapeKeyDown
            >
                <Box className='modal__quiz'>
                    <h2 id="modal-title">Quiz</h2>
                    <p className='modal-info'>
                        Pergunta {index + 1} de {perguntas.length} | Tentativa {attempts + 1} de {MAX_ATTEMPTS}
                    </p>

                    <QuestionCard
                        question={perguntas[index]}
                        onAnswer={(correct, userAnswer) => handleAnswer(correct, userAnswer)}
                        disabled={locked}
                    />


                    {feedback && (
                        <div style={{ marginTop: '1rem', whiteSpace: 'pre-line' }}>
                            {feedback}
                        </div>
                    )}
                    {locked && redirectTimer > 0 && (
                        <div style={{ marginTop: '1rem' }}>
                            <LinearProgress
                                variant="determinate"
                                value={((maxRedirectTime - redirectTimer) / maxRedirectTime) * 100}
                            />
                            <p>
                                Avançando ...
                            </p>
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
                <Box className='modal__quiz' textAlign="center">
                    <h2 id="modal-congrats-title">Parabéns!</h2>
                    <p className='modal-info' id="modal-congrats-description">Você terminou o quiz.</p>
                    <p className='modal-info'>
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
