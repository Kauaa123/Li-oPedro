import express from 'express'
import cors from 'cors'
const servidor = express()
servidor.use(cors())
const port = 3002

servidor.get('/cards', (req, resp) => {
    let obj = [{
        "titulo": 'Componentes',
            "subtitulo": `- Objetos e Listas de Objetos 
    - Componentes`,
        "data": '26/Agosto',
        "status": 'Completo',
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
        "status": 'Criado',
        "FimBimestre": false
        },
    
        {"titulo": 'Consumindo APIs - Parte 1',
        "subtitulo": `
        - Criando um projeto React
        - Estilização com SCSS
        - Navegação entre telas
        - Variáveis de estado
        - Renderização de lista
        - Componentes`,
        "data": '16/Setembro',
        "trabalho": false,
        "status": 'Evento',
        "FimBimestre": false
        }
            
        ]

        resp.status(200).send({
            obj: obj
        })
})


servidor.listen(port, () => console.log(`Executado na ${port}`))