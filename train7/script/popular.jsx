var Container = ReactBootstrap.Container
var Nav = ReactBootstrap.Nav
var Card = ReactBootstrap.Card
var Row = ReactBootstrap.Row
var Col = ReactBootstrap.Col

const Header = (props) => {
    const menuItems = [
        'All',
        'Javascript',
        'Ruby',
        'Java',
        'Css',
        'Python'
    ]
    return (<div>
        <Container>
            <Nav className="justify-content-center bg-light" fill variant="tabs" >
                {menuItems.map((item, key) => <Nav.Item key={key}> <Nav.Link onClick={ () => props.onClick(item)} >{item}</Nav.Link></Nav.Item>)}
            </Nav>
        </Container>
    </div>
    )
}
const Content = (props) => (<div>
    <Container>
        {props.children}
    </Container>
</div>)
const Footer = (props) => (<div>
    <Container>
        {props.children}
    </Container>
</div>)
const RepoCard = (props) => (<Card border="primary" style={{ marginTop: '8px', marginBottom: '8px' }}>
    <Card.Header className="text-center bg-white">{props.no}</Card.Header>
    <Card.Body className="bg-muted">
        <Card.Img src={props.img} />
        <Card.Title className="text-center"><Card.Link href={props.url} target="_blank" className="text-danger">{props.title}</Card.Link></Card.Title>
        <Card.Text><i className="fa fa-user fa-lg fa-fw" style={{ color: 'rgb(255,192,109)' }}></i>{props.author}</Card.Text>
        <Card.Text><i className="fa fa-star fa-lg fa-fw" style={{ color: 'rgb(255,217,0)' }}></i>{props.stars}</Card.Text>
        <Card.Text><i className="fa fa-code-fork fa-lg fa-fw" style={{ color: 'rgb(150,203,245)' }}></i>{props.forks}</Card.Text>
        <Card.Text><i className="fa fa-warning fa-lg fa-fw" style={{ color: 'rgb(243,137,145)' }}></i>{props.issues}</Card.Text>
    </Card.Body>
</Card>)
class App extends React.Component {
    constructor(props) {
        super(props)
        const cards = [
            {
                no: '#1',
                img: "https://cdn.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.28/dist/img/webpack.png",
                title: "wepack",
                author: "wepack",
                stars: "305,930 stars",
                forks: "23,087 forks",
                issues: "370 open issues",
                url: "https://www.webpackjs.com/"
            },
            {
                no: '#2',
                img: "https://cdn.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.28/dist/img/react.png",
                title: "React",
                author: "React",
                stars: "247,626 stars",
                forks: "21,218 forks",
                issues: "12,729 open issues",
                url: "https://reactjs.bootcss.com/"
            },
            {
                no: '#3',
                img: "https://cdn.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.28/dist/img/typescript.png",
                title: "TypeScript",
                author: "TypeScript",
                stars: "151,355 stars",
                forks: "22,501 forks",
                issues: "391 open issues",
                url: "https://typescript.bootcss.com/"
            },
            {
                no: '#4',
                img: "https://cdn.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.28/dist/img/svelte.png",
                title: "svelte",
                author: "svelte",
                stars: "138,760 stars",
                forks: "26,316 forks",
                issues: "891 open issues",
                url: "https://www.sveltejs.cn/"
            },
            {
                no: '#5',
                img: "https://cdn.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.28/dist/img/nextjs.png",
                title: "Next.js",
                author: "Next.js",
                stars: "136,718 stars",
                forks: "78,258 forks",
                issues: "2,979 open issues",
                url: "https://www.nextjs.cn/"
            },
            {
                no: '#6',
                img: "https://cdn.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.28/dist/img/babeljs.png",
                title: "Babel",
                author: "Babel",
                stars: "136,636 stars",
                forks: "67,269 forks",
                issues: "385 open issues",
                url: "https://www.babeljs.cn/"
            },
            {
                no: '#7',
                img: "https://cdn.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.28/dist/img/nodejs.png",
                title: "Node.js",
                author: "Node.js",
                stars: "130,669 stars",
                forks: "32,620 forks",
                issues: "41 open issues",
                url: "https://www.nodeapp.cn/"
            },
            {
                no: '#8',
                img: "https://cdn.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.28/dist/img/deno.png",
                title: "Deno",
                author: "Deno",
                stars: "118,667 stars",
                forks: "15,792 forks",
                issues: "29 open issues",
                url: "https://deno.bootcss.com/"
            },
            {
                no: '#9',
                img: "https://cdn.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.28/dist/img/yarn.png",
                title: "Yarn",
                author: "Yarn",
                stars: "110,665 stars",
                forks: "22,132 forks",
                issues: "140 open issues",
                url: "https://yarn.bootcss.com/"
            },
            {
                no: '#10',
                img: "https://cdn.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.28/dist/img/yarn.png",
                title: "Yarn v2",
                author: "Yarn v2",
                stars: "97,844 stars",
                forks: "17,920 forks",
                issues: "770 open issues",
                url: "https://www.yarnpkg.com.cn/"
            },
            {
                no: '#11',
                img: "https://cdn.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.28/dist/img/npm.png",
                title: "NPM",
                author: "NPM",
                stars: "92,181 stars",
                forks: "27,158 forks",
                issues: "70 open issues",
                url: "https://www.npmjs.cn/"
            },
            {
                no: '#12',
                img: "https://cdn.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.28/dist/img/lernajs.png",
                title: "Lerna",
                author: "Lerna",
                stars: "91,200 stars",
                forks: "46,359 forks",
                issues: "120 open issues",
                url: "https://lernajs.bootcss.com/"
            }
        ]
        this.state = { cards }
    }
    handleNavClick = async (type) => {
        console.log('type', type)
    }
    render() {
        const { cards } = this.state
        return (<div style={{ display: 'flex', flexDirection: 'column', minHeight: '100hv' }}>
            <div className="container">
                <Header onClick={this.handleNavClick}>
                </Header>
                <Content>
                    <Row>
                        {cards.map((item, key) => <Col sm={6} md={4} lg={3} key={key}>
                            <RepoCard
                                no={item.no}
                                img={item.img}
                                title={item.title}
                                author={item.author}
                                stars={item.stars}
                                forks={item.forks}
                                issues={item.issues}
                                url={item.url} />
                        </Col>)}
                    </Row>
                </Content>
                <Footer>
                    <div className="text-center">
                        版权所有 &copy;童长跃
            </div>
                </Footer>
            </div>
        </div>)
    }
}
ReactDOM.render(
    <App>
    </App>,
    document.getElementById('container')
);