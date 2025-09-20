import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

// * IMAGENS DO PASSO A PASSO
import passo01 from "../assets/passos/passo-01.webp";
import passo02 from "../assets/passos/passo-02.webp";
import passo03 from "../assets/passos/passo-03.webp";
import passo04 from "../assets/passos/passo-04.webp";
import passo05 from "../assets/passos/passo-05.webp";
import passo06 from "../assets/passos/passo-06.webp";
const steps = [
    {
        label: 'Passo 01 - Inicial',
        description: 'Ao abrir o aplicativo, clicar na Opção Criar',
        imgContent: [
            {
                image: passo01,
                caption: 'Último item do menu, destacado pelo sinal de adição'
            }
        ]
    },
    {
        label: 'Passo 02 - Criando',
        description: 'Quando o submenu abrir, clique em Playlist',
        imgContent: [
            {
                image: passo02,
                caption: 'Primerio item do menu, Crie uma Playlist com músicas ou episódios'
            }
        ]
    },
    {
        label: 'Passo 03 - Nomear',
        description: 'Nomeie a playlist, caso queira, e então clique em Criar',
        imgContent: [
            {
                image: passo03,
                caption: 'Nomear Playlist'
            }
        ]
    },
    {
        label: 'Passo 04 - Playlist Criada',
        description: 'Logo após criar, ela abrira automáticamente. Para adicionar músicas clique no botão Adicionar a esta playlist',
        imgContent: [
            {
                image: passo04,
                caption: 'Adicionar Músicas'
            }
        ]
    },
    {
        label: 'Passo 05 - Adicionar Músicas',
        description: 'Assim que clicar, abrira uma lista com algumas sugestões de músicas, pode clicar em adicionar, ou pesquisar uma música espeficifica.',
        imgContent: [
            {
                image: passo05,
                caption: 'Para adicionar musica clique no sinal de adição, ao terminar de selecionar as múcias, basta clicar na seta superiora esquerda para voltar para a Playlist'
            }
        ]
    },
    {
        label: 'Passo 06 - Finalizado',
        description: 'Pronto! Assim que sair da tela, sua playlist esta pronta e com as suas músicas!',
        imgContent: [
            {
                image: passo06,
                caption: 'A Playlist se contra em Sua Biblioteca'
            }
        ]
    },
];

export default function Sobre() {
    const [activeStep, setActiveStep] = React.useState(0);
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <>
            {/* OBJETIVO */}
            <section className="container">
                <h2 className="fs-2 text-center">
                    Sobre o Projeto
                </h2>
                <p className='text-center'>Esse Projeto tem como objetivo ensinar como criar playslits no <strong>Spotify</strong> e testar seus conhecimentos sobre o conteúdo apresentado</p>
            </section>
            {/* PASSO A PASSO */}
            <section className='container'>
                <h2 className="fs-2">Passo A Passo</h2>

                <Stepper className='stepper__playlist' activeStep={activeStep} orientation="vertical">
                    {steps.map((step, index) => (
                        <Step className='text-white' key={step.label}>
                            <StepLabel
                                optional={
                                    index === steps.length - 1 ? (
                                        <Typography className='text-white' variant="caption">Final</Typography>
                                    ) : null
                                }
                            >
                                {step.label}
                            </StepLabel>
                            <StepContent>
                                <Typography>{step.description}</Typography>
                                <figure className="">
                                    <img src={step.imgContent[0].image} alt={step.imgContent[0].caption} title={step.imgContent[0].caption} />
                                    <figcaption>{step.imgContent[0].caption}</figcaption>
                                </figure>
                                <Box sx={{ mb: 2 }}>
                                    <button
                                        className='btn btn__primary mx-3'
                                        onClick={handleNext}
                                    >
                                        {index === steps.length - 1 ? 'Finalizar' : 'Continuar'}
                                    </button>
                                    <button
                                        className='btn btn-outline-light mx-3'
                                        disabled={index === 0}
                                        onClick={handleBack}
                                    >
                                        Voltar
                                    </button>
                                </Box>
                            </StepContent>
                        </Step>
                    ))}
                </Stepper>
                {activeStep === steps.length && (
                    <Paper className='bg-dark' square elevation={0} sx={{ p: 3 }}>
                        <Typography>Pronto! Sua Playlist foi criada!</Typography>
                        <button className="btn btn-light" onClick={handleReset}>
                            Recomeçar
                        </button>
                        <p>Imagens Retiradas de um Redmi Note 13, na versão do Spotify 9.0.80.1343 em Setembro de 2025</p>
                    </Paper>
                )}
            </section>
        </>
    );
}
