import Cabecalho from '../components/cabecalho';
import './index.scss';
import '../colors.scss';

export default function App() {
    let obj = [{
        "titulo": 'Componentes',
        "subtitulo": `- Objetos e Listas de Objetos 
- Componentes`,
        "data": '26/Agosto',
        "status": 'Em andamento',
        "trabalho": true,
        "FimBimestre": false
    },

        {"titulo": 'Renderização e Efeito',
        "subtitulo": `- Componentes na renderização`,
        "data": '2/Setembro',
        "trabalho": false,
        "status": 'Em andamento',
        "FimBimestre": false
    },

    {"titulo": 'Consumindo APIs - Parte 1',
    "subtitulo": `- Componentes na renderização`,
    "data": '9/Setembro',
    "trabalho": false,
    "status": 'Em andamento',
    "FimBimestre": false
    },

    {"titulo": 'Consumindo APIs - Parte 1',
    "subtitulo": `
    - Criando um projeto React
    - Estilização com SCSS- Navegação entre telas
    - Variáveis de estado
    - Renderização de lista
    - Componentes`,
    "data": '16/Setembro',
    "trabalho": false,
    "status": 'Em andamento',
    "FimBimestre": false}
        
    ]


    return (
        <div className='app-container'>
            <Cabecalho />
                {
                    obj.map(card => 
                      <Card      
                        titulo={card.titulo}
                        subtitulo={card.subtitulo}
                        data={card.data}
                        trabalho= {card.trabalho}
                        status={card.status}
                        />
                    )
                }   
        </div>
    );
}

function Card({titulo, subtitulo, data, status, trabalho, FimBimestre}) {
    let corPrimaria = '#A3E5BA'
    let corSegundaria = '#EFFBE2'

    return(
        <div className='app-container'>

            <div className='cards'>
                <div className='card' style={{ backgroundColor: corSegundaria }}>
                    <div className='card-cabecalho' style={{ backgroundColor: corPrimaria }}>
                        <h2>{titulo}</h2>
                    </div>
                    <div className='card-conteudo'>
                        <h3>Assuntos</h3>
                        <pre>
                            {subtitulo}<br />
                        </pre>
                    </div>

                    <p className='tag'>{data}</p>
                    {trabalho ? 
                    <p className='tag'>Entrega Trab.</p> : ''}
                </div>
            </div>
        </div>
    )
}


