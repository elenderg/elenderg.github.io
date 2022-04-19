//"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --allow-file-access-from-files
// import Link from react router to be used in browser

function MeuCurriculo() {
    return (
        <>
        <Navbar/>
        <CenteredDiv>
            <Header title={"Elender Góis Gallas"}/>
            <hr></hr>   
            <Article>
                <h1 id={'inicio'}>Apresentação</h1>
                <p>
                    Olá, meu nome é <b>Elender Góis Gallas</b>, tenho <b>31</b> anos e moro em <b>Altamira/PA</b>.                
                </p>
                <Section id={'formacao'}>
                    <h2>Formação</h2>
                    <p>
                        <b>Graduação:</b>Nível Superior  - Tecnologia em Análise e Desenvolvimento de Sistemas <br/>                        
                        <b>Instituição:</b>Universidade Paulista - UNIP<br/>                        
                        <b>Período:</b> <br/>
                        <b>De:</b> 2021 <br/>
                        <b>Até: </b>06/2023 (Previsto) <br/>
                        <b>Situação:</b>Cursando <br/>                        
                    </p>
                    <p>
                        <b>Bootcamp:</b>MRV Fullstack Developer<br/>                        
                        <b>Instituição:</b>Digital Innovation One - DIO<br/>                        
                        <b>Carga Horária:</b>107 horas <br/>
                        <b>De:</b> 12/2021 <br/>
                        <b>Até: </b>03/2023<br/>
                        <b>Situação:</b>Concluído <br/>
                    </p>
                    <p>
                        <b>Graduação:</b>Tecnologia em Gestão Ambiental <br/>                        
                        <b>Instituição:</b>Universidade Metodista de São Paulo = UMESP<br/>                        
                        <b>Período:</b> <br/>
                        <b>De:</b> 2009 <br/>
                        <b>Até: </b>2013 <br/>
                        <b>Situação:</b>Concluído <br/>                        
                    </p>
                    <p>
                        <b>Graduação:</b>Técnico em Desenvolvimento Web <br/>
                        <b>Instituição:</b>Instituto Federal do Pará - IFPA<br/>
                        <b>Período:</b> <br/>
                        <b>De:</b> 2009 <br/>
                        <b>Até: </b>2013 <br/>
                        <b>Situação:</b>Concluído <br/>                        
                    </p>
                </Section>
                <Section id={'experiencia'}>
                    <h2>Experiência Profissional</h2>
                    <p>
                        <b>Empresa:</b>NAV Brasil - Serviços de Navegação Aérea Ltda<br/>
                        <b>Cargo:</b> Controlador de Tráfego Aéreo <br/>
                        <b>Período:</b><br/>
                        <b>De:</b> 2013<br/>
                        <b>Até: </b> 2021<br/>                        
                    </p>
                    <p>
                        <b>Empresa:</b>INFRAERO - Empresa Brasileira de Infraestrutura Aerportuária <br/>
                        <b>Cargo:</b> Profissional de Navegação Aérea <br/>
                        <b>Período:</b><br/>
                        <b>De:</b> 2013<br/>
                        <b>Até: </b> 2021<br/>                        
                    </p>
                </Section>
                <Section id={'projetos'}>
                    <h2>Projetos</h2>
                    <p>
                        <b>Nome do Projeto:</b> Português Puro<br/>
                        <b>Descrição do Projeto:</b> O projeto é apresentado como uma <i>Prova de Conceito</i>.<br/> 
                        Consiste de um <a href="https://pt.wikipedia.org/wiki/Ambiente_de_desenvolvimento_integrado">Ambiente de Desenvolvimento Integrado</a> (ADI) contendo:<p></p>
                        <ul>
                            <li>                      
                                Um <a href="https://pt.wikipedia.org/wiki/Compilador">Compilador de Código-Fonte</a> para a Linguagem de Programação <a href="https://github.com/elenderg/Portugues-Puro/">Português Puro</a>;
                            </li>                         
                            <li>
                                Um <a href="https://pt.wikipedia.org/wiki/Editor_de_texto">Editor de Código Fonte</a> com <a href="https://pt.wikipedia.org/wiki/Realce_de_sintaxe">realçador de sintaxe</a>; 
                            </li>
                            <li>
                                Um <a href="https://pt.wikipedia.org/wiki/Gerenciador_de_arquivos">Gerenciador de Arquivos</a>;
                            </li>
                            <li>
                                Um <a href="https://pt.wikipedia.org/wiki/Hex_dump">Hex Dumper</a>;
                            </li>
                            <li>
                                Uma <a href="https://pt.wikipedia.org/wiki/Biblioteca_(computa%C3%A7%C3%A3o)">Biblioteca</a> contendo diversas rotinas para criação de executáveis no <a href="https://pt.wikipedia.org/wiki/Portable_Executable">formato PE</a>;                                
                            </li>
                            <li>
                                Um <a href="https://pt.wikipedia.org/wiki/WYSIWYG">Processador de documentos WYSIWYG</a> que foi utilizado para produzir a documentação do projeto 
                            </li>
                        </ul>
                        
                         <br/>
                        <b>Período:</b> <br/>
                        <b>De:</b>01/2021 <br/>
                        <b>Até: </b>Presente <br/>
                        <b>Situação:</b>Em desenvolvimento contínuo, protótipo já desenvolvido <br/>
                    </p>
                </Section>
            </Article>
        </CenteredDiv>
        
        </>        
    );
}

function Header(props) {
    return (
        <header>
            <h1>{props.title}</h1>
        </header>
    );    
}

function Navbar() { // The Navbar component should float in the left side of the page
    return (
        <nav className="minhanavbar">
            <ul>
                <li>                    
                    <a href="#inicio" className={'active'} style={{ listStyleType: 'none' }}>Início</a>
                </li>
                <li>
                    <a href="#formacao" style={{ listStyleType: 'none' }}>Formação</a>                    
                </li>
                <li>
                    <a href="#experiencia" style={{ listStyleType: 'none' }}>Experiência</a>                    
                </li>
                <li>
                    <a href="#projetos" style={{ listStyleType: 'none' }}>Projetos Pessoais</a>                    
                </li>
            </ul>
        </nav>
    );
}


function CenteredDiv(props) {
    return (
        <div className={'content'} style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
        }}>
            {props.children}
        </div>
    );
}

function Section(props) {
    return (
        <section id={props.id}>
            {props.children}
        </section>
    );
}

function Article(props) {
    return (
        <article>
            {props.children}
        </article>
    );
}

function SemanticTags(props) {
    return (
        <>
        <details>
            {props.details}
            <summary>
                {props.summary}
            </summary>
        </details>        
        <figure>
            {props.figure}
            <img src={props.img} alt={props.alt}/>
            <figcaption>
            {props.figcaption}
        </figcaption>
        </figure>        
        <main>
            {props.main}
        </main>
        <mark>
            {props.mark}
        </mark>
        <meter>
            {props.meter}
        </meter>
        <time>
            {props.time}
        </time>
        <progress>
            {props.progress}
        </progress>
        <output>
            {props.output}
        </output>
        </>
    );
}

function Aside(props) {
    return (
        <aside>
            {props.children}
        </aside>
    );
}




class LikeButton extends React.Component {
  constructor(props) { 
    super(props); // call the parent constructor
    this.state = { liked: false }; // set the initial state
  }

  render() { // render the component
    if (this.state.liked) { // if the button is liked
      return 'You liked this.'; // return the text
    }

    return ( // if the button is not liked yet
      <>
      <button onClick={() => this.setState({ liked: true }) }> 
        Like
      </button>
      
      </>
    );
  }
}

let domContainer = document.querySelector('#like_button_container');
ReactDOM.render(<MeuCurriculo/>, domContainer);

function MakeQuery(query) { // make GraphQL query
    fetch('http://localhost:3000/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            query: query,
        }),
    }).then(res => res.json())
        .then(data => {
            console.log(data);
        }
        ).catch(err => {
            console.log(err);
        }
        );
}